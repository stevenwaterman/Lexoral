import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import hilbert, chirp, decimate, butter, lfilter, argrelextrema
import librosa
import json

def butter_lowpass(cutoff, fs, order=5):
    nyq = 0.5 * fs
    normal_cutoff = cutoff / nyq
    b, a = butter(order, normal_cutoff, btype='low', analog=False)
    return b, a

def butter_lowpass_filter(data, cutoff, fs, order=5):
    b, a = butter_lowpass(cutoff, fs, order=order)
    y = lfilter(b, a, data)
    return y

def min_in_range(time, start_time, end_time, envelope):
  search_start_sample = int(start_time * decimated_sample_rate)
  search_end_sample = int(end_time * decimated_sample_rate)

  min_slice_idx = np.argmin(envelope[search_start_sample:search_end_sample])
  idx = min_slice_idx + search_start_sample
  adjusted_time = idx / decimated_sample_rate
  return round(adjusted_time, 3)




signal, sample_rate = librosa.load("./audio.mp3", sr=44100)
duration = len(signal) / sample_rate

analytic_signal = hilbert(signal)
amplitude_envelope = np.abs(analytic_signal)
smoothed_envelope = butter_lowpass_filter(amplitude_envelope, 30, sample_rate)
decimated_envelope = smoothed_envelope

envelope_target_sample_rate = 1000
envelope_target_samples = duration * envelope_target_sample_rate
while len(decimated_envelope) > envelope_target_samples:
  current_samples = len(decimated_envelope)
  factor = current_samples / envelope_target_samples
  factor = int(factor) + 1
  factor = min(8, factor)
  decimated_envelope = decimate(decimated_envelope, factor)

decimated_samples = len(decimated_envelope)
decimated_sample_rate = decimated_samples / duration
# x = np.arange(decimated_samples) / decimated_sample_rate
# plt.plot(x, decimated_envelope, label='envelope', zorder=1, color="#00Cc00")



with open("./data.json") as json_file:
  sections = json.load(json_file)

# To prevent overlaps, we lock the time before the most recent adjusted time
locked_time = 0

for section in sections:
  start_time = section["startTime"]
  end_time = section["endTime"]

    

  start_search_start_time = max(start_time - 0.049, locked_time)
  end_search_start_time = max(end_time - 0.049, locked_time)

  start_search_end_time = start_time + 0.049
  end_search_end_time = end_time + 0.049

  if (start_search_start_time == end_search_start_time):
    # prevent 0-duration times
    midpoint = (start_search_start_time + end_search_end_time) / 2
    duration = end_search_end_time - start_search_start_time

    start_search_start_time = midpoint - duration / 2
    start_search_end_time = midpoint

    end_search_start_time = midpoint + 0.001
    end_search_end_time = midpoint + duration / 2
  
  adjusted_start_time = min_in_range(start_time, start_search_start_time, start_search_end_time, decimated_envelope)
  adjusted_end_time = min_in_range(end_time, end_search_start_time, end_search_end_time, decimated_envelope)

  locked_time = max(locked_time, adjusted_end_time)

  section["startTime"] = adjusted_start_time
  section["endTime"] = adjusted_end_time

with open("./data_out.json", "w") as json_file:
  json.dump(sections, json_file)

print("done")

# start_values = [np.interp(time, x, decimated_envelope) for time in adjusted_start_times]
# end_values = [np.interp(time, x, decimated_envelope) for time in adjusted_end_times]

# plt.scatter(adjusted_start_times, start_values, label="start", zorder=2, marker="o", color="#0000CC")
# plt.scatter(adjusted_end_times, end_values, label="end", zorder=2, marker="x", color="#FF0000")


# for i in range(len(adjusted_start_times)):
  # print(adjusted_start_times[i], adjusted_end_times[i])


# plt.show()