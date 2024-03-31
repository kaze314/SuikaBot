import { browser } from '$app/environment';
import { isWebGLSupported } from '@pixi/utils';
import { writable } from 'svelte/store';

export const webgl_supported = writable(true);

if (browser) {
	const good = isWebGLSupported();
	webgl_supported.set(good);
	if (!good) {
		setTimeout(() => {
			webgl_supported.set(isWebGLSupported());
		}, 1000);
	}
}
