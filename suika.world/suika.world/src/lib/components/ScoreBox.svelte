<script lang="ts">
	import { score_formatter } from '$lib/util';
	import { spring } from 'svelte/motion';
	import { derived, writable } from 'svelte/store';
	import star from '$lib/assets/star.png?enhanced';

	export let score: number;

	export let constant = false;

	const spring_score = constant ? writable(score) : spring(score);
	$: spring_score.set(score);

	const display_score = derived(spring_score, (num) => {
		if (num > score) return score_formatter.format(score);
		if (num < 0) return '0';
		return score_formatter.format(Math.round(num));
	});

	export let small = false;

	let class_ = '';
	export { class_ as class };

	$: size_class = small
		? 'min-w-[110px] text-3xl px-2 gap-0.5 rounded-xl'
		: 'min-w-[200px] text-5xl px-4 py-2 gap-2 rounded-3xl';
</script>

<div
	class="{class_} score group flex shrink-0 cursor-default items-center justify-end {size_class} font-bold text-white"
>
	{$display_score}
	<img
		src={star.img.src}
		alt="Star"
		class="select-none transition-transform group-hover:rotate-12 {small
			? 'h-6 w-6'
			: 'h-12 w-12'}"
	/>
</div>

<style>
	.score {
		border: 2px solid #ffdd72;
		background: linear-gradient(180deg, #f0ca45 0%, #efba52 100%);
		box-shadow:
			0px -11px 27px 0px rgba(246, 138, 12, 0.5) inset,
			0px 4px 7px 0px rgba(255, 253, 246, 0.4) inset;
		text-shadow: 0px 1px 4px #e59720;
	}
</style>
