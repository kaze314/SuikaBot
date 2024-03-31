<script lang="ts">
	export let href = '/';
</script>

<a
	{href}
	class="group flex items-center gap-2 rounded-full font-bold text-rose-900"
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
		class="transition-transform group-hover:-translate-x-0.5 group-active:-translate-x-2"
	>
		<path d="m15 18-6-6 6-6" />
	</svg>
	<slot>Back</slot>
	<div class="w-6" />
</a>
