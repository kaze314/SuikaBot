<script lang="ts" context="module">
	import { writable } from 'svelte/store';
	import { fade, fly } from 'svelte/transition';

	let adding = false;
	const queue: string[] = [];
	export function addToast(message: string) {
		if (adding) {
			queue.push(message);
			return;
		}
		adding = true;
		setTimeout(() => {
			adding = false;
			if (queue.length) {
				addToast(queue.shift()!);
			}
		}, 350);

		toasts.update((toasts) => {
			if (toasts.length < 5) return toasts;
			return toasts.slice(1);
		});
		const id = crypto.randomUUID();
		const remove = () => {
			clearTimeout(timeout);
			toasts.update((toasts) => {
				return toasts.filter((t) => t.id !== id);
			});
		};
		const toast = {
			id,
			message,
			remove,
		};
		toasts.update((toasts) => {
			toasts.push(toast);
			return toasts;
		});
		const timeout = setTimeout(remove, 5000);
	}
	type Toast = {
		id: string;
		message: string;
		remove: () => void;
	};

	const toasts = writable<Toast[]>([]);
</script>

<script lang="ts">
	$: length = $toasts.length;
</script>

{#each $toasts as toast, i (toast.id)}
	<div
		in:fly={{ y: '100%', duration: 300 }}
		out:fade={{ duration: 100 }}
		class="fixed bottom-4 left-1/2 z-50 flex items-center rounded-full bg-red-600 py-2 pl-8 pr-4 text-xl font-bold text-white transition-transform duration-300 ease-out"
		style:transform="translate(-50%, -{(length - i - 1) * 120}%)"
	>
		<span class="mr-4">
			{toast.message}
		</span>
		<button
			class="ml-auto rounded-full px-2 transition-colors hover:bg-white/10 active:bg-white/20"
			on:click={toast.remove}>&times;</button
		>
	</div>
{/each}
