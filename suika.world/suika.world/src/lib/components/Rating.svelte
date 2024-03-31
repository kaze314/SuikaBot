<script lang="ts">
	export let user: { rating: number };
</script>

<span
	class="glow rounded-full border-2 border-rose-900 bg-rose-800 px-2 py-px text-sm text-white"
	title="Rating"
>
	{Math.round(user.rating)}
</span>

<style>
	.glow {
		box-shadow: 0px 2px 3px 0px rgba(255, 253, 246, 0.2) inset;
	}
</style>
