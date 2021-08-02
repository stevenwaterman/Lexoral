import type { Output } from "./types";

export async function toEnvelope(buffer: AudioBuffer): Promise<AudioBuffer> {
  const ctx = new OfflineAudioContext({sampleRate: buffer.sampleRate, length: buffer.length, numberOfChannels: 1});
  await ctx.audioWorklet.addModule("customAudio.js");

  const bufferSource = ctx.createBufferSource();
  bufferSource.buffer = buffer;
  bufferSource.start();

  const bandPass = ctx.createBiquadFilter();
  bandPass.type = "bandpass";
  bandPass.frequency.value = (300 + 3000) / 2;
  bandPass.Q.value = 0.351364184463;
  bufferSource.connect(bandPass);
  
  const absolute = new AudioWorkletNode(ctx, "absolute");
  bandPass.connect(absolute);

  const mean = new AudioWorkletNode(ctx, "mean");
  absolute.connect(mean);

  const gain = new GainNode(ctx);
  gain.gain.value = 7;
  mean.connect(gain);
  gain.connect(ctx.destination);

  return await ctx.startRendering();
}

export async function refineTiming(output: Output, buffer: AudioBuffer): Promise<Output> {
  const envelope = await toEnvelope(buffer);
  const envelopeChannel = envelope.getChannelData(0);
  const sampleRate = buffer.sampleRate;

  return output.map(section => {
    const originalStart = section.startTime;
    const originalEnd = section.endTime;

    const startTime = findTiming(envelopeChannel, sampleRate, originalStart, -0.5, 0.02);
    const endTime = findTiming(envelopeChannel, sampleRate, originalEnd, -0.02, 0.5);

    console.log({startTime, endTime, word: section.options[0].text})

    return {
      startTime,
      endTime,
      options: section.options
    }
  })
}

function findTiming(data: Float32Array, sampleRate: number, originalTime: number, rangeStart: number, rangeEnd: number): number {
  const searchStartSecs = originalTime + rangeStart;
  const searchEndSecs = originalTime + rangeEnd;

  const searchStartSample = searchStartSecs * sampleRate;
  const searchEndSample = searchEndSecs * sampleRate;

  const searchStartClamped = Math.round(Math.max(0, searchStartSample));
  const searchEndClamped = Math.round(Math.min(data.length, searchEndSample));

  let min: number = Number.MAX_VALUE;
  let minSample: number = 0;
  for (let i = searchStartClamped; i < searchEndClamped; i++) {
    if (data[i] < min) {
      min = data[i];
      minSample = i;
    }
  }

  return minSample / sampleRate;
}