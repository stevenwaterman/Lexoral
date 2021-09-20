import numpy as np
import firebase_admin
from json import loads as json_parse, dumps as json_stringify
from base64 import b64decode
from google.cloud import storage
from os import environ

store = firebase_admin.initialize_app().firestore()
storage_client = storage.Client()

async def run(event):
  pubsub_message = b64decode(event['data']).decode('utf-8')
  pubsub_data = json_parse(pubsub_message)

  user_id = pubsub_data["userId"]
  transcript_id = pubsub_data["transcriptId"]
  sections = pubsub_data["aligned"]

  if user_id is None:
    raise "User ID is None"

  if transcript_id is None:
    raise "Transcript ID is None"

  if sections is None:
    raise "Aligned data is None"

  user_doc = store.document(f'users/${user_id}')
  user = await user_doc.get()
  if not user.exists:
    raise "User " + user_id + " profile missing"

  transcript_doc = store.document(f'users/${user_id}/transcripts/${transcript_id}')
  transcript = await transcript_doc.get()
  if not transcript.exists:
    raise "Transcript " + user_id + "/" + transcript_id + " doc missing"

  transcript_stage = transcript.get("stage")
  if transcript_stage != "aligned":
    raise "Expected transcript stage transcribed, got " + transcript_stage

  envelope = download(file_name)
  adjust_sections(sections, envelope)
  upload(sections, file_name)

  transcript_doc.update({
    "stage": "ready"
  })

def download(file_name):
  project_id = environ.get("PROJECT_ID", "Project ID not set")
  bucket = storage_client.get_bucket(f'{project_id}-transcription-audio')

  audio_name = file_name[:-5] + ".pcm"
  bucket.blob(audio_name).download_to_filename("/tmp/envelope.pcm")

  data_type = np.dtype("<i2")
  with open("/tmp/envelope.pcm", "rb") as envelope_file:
    buf = envelope_file.read()
    return np.frombuffer(buf, dtype=data_type)

def upload(data, file_name):
  project_id = environ.get("PROJECT_ID", "Project ID not set")
  bucket = storage_client.get_bucket(f'{project_id}-transcripts')
  json_data = json_stringify(data)
  bucket.blob(file_name).upload_from_string(json_data)

def min_in_range(time, start_time, end_time, envelope, sample_rate):
  search_start_sample = int(start_time * sample_rate)
  search_end_sample = int(end_time * sample_rate)

  min_slice_idx = np.argmin(envelope[search_start_sample:search_end_sample])
  idx = min_slice_idx + search_start_sample
  adjusted_time = idx / sample_rate
  return round(adjusted_time, 3)

def adjust_sections(sections, envelope):
  for section in sections:
    adjust_section(section, envelope, 1000)

def adjust_section(section, envelope, sample_rate):
  start_time = section["startTime"]
  end_time = section["endTime"]

  start_search_start_time = start_time - 0.049
  end_search_start_time = end_time - 0.049

  start_search_end_time = start_time + 0.049
  end_search_end_time = end_time + 0.049

  if (start_search_start_time == end_search_start_time):
    # prevent 0-duration times
    midpoint = (start_search_start_time + end_search_end_time) / 2
    duration = end_search_end_time - start_search_start_time

    start_search_start_time = midpoint - duration / 2
    start_search_end_time = midpoint

    end_search_start_time = midpoint + 0.005
    end_search_end_time = midpoint + duration / 2
  
  adjusted_start_time = min_in_range(start_time, start_search_start_time, start_search_end_time, envelope, sample_rate)
  adjusted_end_time = min_in_range(end_time, end_search_start_time, end_search_end_time, envelope, sample_rate)

  section["startTime"] = adjusted_start_time
  section["endTime"] = adjusted_end_time
