<script lang="ts">
	import { audio_enabled } from '$lib/sfx';
</script>

<enhanced:img
	class="fixed left-2 top-2 h-24 w-auto sm:h-32"
	src="$lib/assets/menu_logo.png?quality=100"
	alt="Suika World"
/>
<slot />
<button
	class="fixed right-1 top-1 rounded-lg p-2 text-rose-900 transition-transform hover:scale-110 active:scale-95"
	on:pointerup|stopPropagation
	on:click={() => ($audio_enabled = !$audio_enabled)}
>
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
		{#if $audio_enabled}
			<path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
			<path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
		{:else}
			<line x1="22" x2="16" y1="9" y2="15" />
			<line x1="16" x2="22" y1="9" y2="15" />
		{/if}
	</svg>
</button>
