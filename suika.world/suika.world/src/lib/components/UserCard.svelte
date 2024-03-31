<script lang="ts" context="module">
	const root_class = {
		small: 'gap-1 sm:gap-3 px-1 sm:px-2 py-1 text-sm sm:text-lg',
		large: 'gap-4 px-2 sm:px-4 py-1 sm:py-2 sm:text-2xl',
	};
	const img_class = {
		small: 'w-8 h-8 sm:w-10 sm:h-10',
		large: 'w-8 h-8 sm:w-12 sm:h-12',
	};

	export const root_color = {
		red: 'bg-red-500/50 border-red-600',
		green: 'bg-green-500/50 border-green-600',
		white: 'border-white bg-white/30',
		gray: 'bg-neutral-500/50 border-neutral-600',
	};
</script>

<script lang="ts">
	import { score_formatter } from '$lib/util';

	import Rating from './Rating.svelte';

	export let size: 'small' | 'large' = 'small';

	export let rating = false;
	export let rating_change: number | undefined = undefined;

	export let score: number | undefined = undefined;

	export let color: 'red' | 'green' | 'white' | 'gray' = 'white';

	export let link: { href: string; text: string } | undefined = undefined;

	export let user: { username: string; image: string | null; rating?: number };
	let class_ = '';
	export { class_ as class };
</script>

<div
	class="{class_} user-glow flex items-center rounded-xl border-2 {root_color[
		color
	]} {root_class[size]}"
>
	<img
		alt="Profile"
		class="{img_class[size]} select-none rounded-full bg-neutral-900"
		src={user.image}
	/>
	<div class="flex flex-col items-start font-bold">
		<p
			class="max-w-[200px] overflow-hidden overflow-ellipsis whitespace-nowrap"
		>
			{user.username}
		</p>
		{#if link || rating}
			<div class="flex items-center gap-2">
				{#if rating && user.rating !== undefined}
					<Rating {user} />
					{#if rating_change}
						<span
							class="text-base"
							class:text-green-900={rating_change > 0}
							class:text-red-900={rating_change < 0}
						>
							{(rating_change > 0 ? '+' : rating_change < 0 ? '-' : '') +
								Math.round(Math.abs(rating_change))}
						</span>
					{/if}
				{/if}
				{#if link}
					<a
						href={link.href}
						class="ml-1 origin-center text-right text-sm text-rose-900 transition-transform hover:scale-105 active:scale-95"
					>
						{link.text}
					</a>
				{/if}
			</div>
		{/if}
	</div>
	{#if score}
		<div class="ml-auto">{score_formatter.format(score)}</div>
	{:else}
		<slot />
	{/if}
</div>
