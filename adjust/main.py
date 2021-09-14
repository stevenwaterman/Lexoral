from numpy import argmin as np_argmin, abs as np_abs
from scipy.signal import hilbert, butter, lfilter, argrelextrema
from librosa import load as load_audio
from json import loads as json_parse, dumps as json_stringify
from base64 import b64decode
from google.cloud import storage

def run(event, context):
  pubsub_message = b64decode(event['data']).decode('utf-8')
  pubsub_data = json_parse(pubsub_message)

  file_name = pubsub_data["fileName"]
  sections = pubsub_data["sections"]

  storage_client = storage.Client()
  signal, sample_rate = download(storage_client, file_name)
  envelope = get_envelope(signal, sample_rate)

  adjust_sections(sections, envelope, sample_rate)
  upload(storage_client, sections, file_name)

def download(storage_client, file_name):
  audio_name = file_name[:-5]
  bucket = storage_client.get_bucket("lexoral-audio")
  bucket.blob(audio_name).download_to_filename("/tmp/audio")
  return load_audio("/tmp/audio", sr=44100)

def upload(storage_client, data, file_name):
  bucket = storage_client.get_bucket("lexoral-transcripts")
  json_data = json_stringify(data)
  bucket.blob(file_name).upload_from_string(json_data)

def butter_lowpass(cutoff, fs, order=5):
  nyq = 0.5 * fs
  normal_cutoff = cutoff / nyq
  b, a = butter(order, normal_cutoff, btype='low', analog=False)
  return b, a

def butter_lowpass_filter(data, cutoff, fs, order=5):
  b, a = butter_lowpass(cutoff, fs, order=order)
  y = lfilter(b, a, data)
  return y

def min_in_range(time, start_time, end_time, envelope, sample_rate):
  search_start_sample = int(start_time * sample_rate)
  search_end_sample = int(end_time * sample_rate)

  min_slice_idx = np_argmin(envelope[search_start_sample:search_end_sample])
  idx = min_slice_idx + search_start_sample
  adjusted_time = idx / sample_rate
  return round(adjusted_time, 3)

def get_envelope(signal, sample_rate):
  analytic_signal = hilbert(signal)
  amplitude_envelope = np_abs(analytic_signal)
  smoothed_envelope = butter_lowpass_filter(amplitude_envelope, 30, sample_rate)
  return smoothed_envelope

def adjust_sections(sections, envelope, sample_rate):
  for section in sections:
    adjust_section(section, envelope, sample_rate)

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
