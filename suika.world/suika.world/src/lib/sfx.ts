import { browser } from '$app/environment';
import pop_src from '$lib/assets/audio/pops.mp3?url';
import rotten_pop_src from '$lib/assets/audio/rotten_pops.mp3?url';
import { derived, writable } from 'svelte/store';

let audio_context: AudioContext | null = null;
let pop: AudioBuffer | null = null;
let rotten_pop: AudioBuffer | null = null;

export const audio_enabled = writable(true);
let _enabled = true;

const audio_count = 2;

const audio_ready_count = writable(0);

export const audio_ready = derived(audio_ready_count, (c) => c === audio_count);

if (browser) {
	if (localStorage.getItem('audio_enabled') === 'false') {
		audio_enabled.set(false);
		_enabled = false;
	}
	audio_enabled.subscribe((val) => {
		_enabled = val;
		localStorage.setItem('audio_enabled', val ? 'true' : 'false');
	});

	audio_context = new AudioContext();

	fetch(pop_src)
		.then((r) => r.arrayBuffer())
		.then((buffer) => audio_context!.decodeAudioData(buffer))
		.then((audio) => {
			pop = audio;
			audio_ready_count.update((c) => c + 1);
		});
	fetch(rotten_pop_src)
		.then((r) => r.arrayBuffer())
		.then((buffer) => audio_context!.decodeAudioData(buffer))
		.then((audio) => {
			rotten_pop = audio;
			audio_ready_count.update((c) => c + 1);
		});
}

const pop_times: [number, number][] = [
	[0.009, 0.265],
	[0.275, 0.273],
	[0.567, 0.285],
	[0.859, 0.301],
	[1.173, 0.286],
	[1.479, 0.31],
	[1.796, 0.275],
	[2.088, 0.288],
	[2.387, 0.241],
];

const rotten_pop_times: [number, number][] = [
	[0.01, 0.541],
	[0.599, 0.638],
	[1.332, 0.452],
];
export function play_rotten_pop() {
	if (!_enabled) return;
	if (!rotten_pop) return;

	const node = audio_context!.createBufferSource();
	node.buffer = rotten_pop;
	node.connect(audio_context!.destination);

	node.playbackRate.value = Math.random() * 0.2 + 0.9;
	const [start, duration] =
		rotten_pop_times[Math.floor(Math.random() * rotten_pop_times.length)]!;
	node.start(0, start, duration);
}

export function play_pop(pitch: number) {
	if (!_enabled) return;
	if (!pop) return;

	const node = audio_context!.createBufferSource();
	node.buffer = pop;
	node.connect(audio_context!.destination);

	node.playbackRate.value = pitch;
	const [start, duration] =
		pop_times[Math.floor(Math.random() * pop_times.length)]!;
	node.start(0, start, duration);
}

let pop_pitch = 1;
export function play_pop_combo() {
	if (!_enabled) return;
	play_pop(pop_pitch + Math.random() * 0.1 - 0.05);
	pop_pitch += 0.1;
	setTimeout(() => {
		pop_pitch -= 0.1;
	}, 1000);
}
