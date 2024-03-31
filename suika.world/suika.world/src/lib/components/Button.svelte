<script lang="ts">
	let class_ = '';
	export let href: string | undefined = undefined;
	export let height = 83;
	export let disabled = false;
	export let filter: string | undefined = undefined;
	export let hue: number | undefined = undefined;
	export { class_ as class };
	export let wrapper_class = '';

	function get_filter_class(
		disabled: boolean,
		filter: string | undefined,
		hue: number | undefined,
	) {
		if (disabled) return 'grayscale(100%)';
		if (filter) return filter;
		if (hue) return `hue-rotate(${hue}deg)`;
		return '';
	}

	$: filter_class = get_filter_class(disabled, filter, hue);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	on:click
	style:height="{height}px"
	class:pointer-events-none={disabled}
	class="{wrapper_class} relative min-w-[73px] cursor-pointer select-none outline-none transition-all hover:brightness-[1.1] active:scale-90 active:brightness-[0.9]"
>
	<div class="absolute inset-0 z-0 flex" style:filter={filter_class}>
		<img alt="" src="/button/left.png" />
		<img alt="" src="/button/center.png" class="flex-1" />
		<img alt="" src="/button/right.png" />
	</div>
	<div
		style:line-height="{height}px"
		class="relative whitespace-nowrap {class_} z-10 h-full w-full text-center text-black"
	>
		<slot />
	</div>
</svelte:element>
