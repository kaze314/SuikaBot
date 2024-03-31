<script lang="ts">
	import '../app.css';
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import type { LayoutData } from './$types';
	import { trpc } from '$lib/trpc';
	import Toasts from '$lib/components/Toasts.svelte';
	import { is_offline } from '$lib/offline';
	import { page } from '$app/stores';
	import Sentry from './Sentry.svelte';
	import { webgl_supported } from '$lib/webgl';
	import Seo from './Seo.svelte';

	export let data: LayoutData;

	const query_client = trpc.hydrateFromServer(data.trpc);
</script>

<Seo />
<Toasts />
<!-- <div
	class="fixed left-2 top-2 z-50 rounded-full bg-red-600 px-8 py-2 text-center text-xl font-bold text-white"
>
	<p class="text-sm text-rose-100">This game is in</p>

	<p class="tracking-widest">EARLY ALPHA</p>
	<p class="text-sm text-rose-100">Expect bugs and unpolished UI.</p>
	{#if $page.route.id?.startsWith('/(menu)') && $page.route.id !== '/(menu)/changelog'}
		<a
			href="/changelog"
			class="mt-3 block text-xs text-rose-200 transition-transform hover:scale-110 active:scale-95"
			>Changelog</a
		>
	{/if}
</div> -->
{#if $is_offline}
	<div
		class="fixed bottom-1 left-1 flex select-none items-center gap-2 rounded-full bg-white/50 px-4 py-1 font-bold text-rose-600"
	>
		<div class="h-4 w-4 rounded-full bg-rose-600" />
		OFFLINE
	</div>
{/if}
<QueryClientProvider client={query_client}>
	<Sentry />
	<slot />
</QueryClientProvider>

{#if !$webgl_supported}
	<div
		class="fixed inset-x-0 bottom-0 z-50 bg-rose-600 p-2 text-center text-xl font-bold text-white sm:text-3xl"
	>
		Your browser does not support WebGL, which is required to play.
	</div>
{/if}
