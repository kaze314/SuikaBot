<script lang="ts">
	import { page } from '$app/stores';
	import BackButton from '$lib/components/BackButton.svelte';
	import LoginRow from '$lib/components/LoginRow.svelte';
	import MenuLayout from './(menu)/+layout.svelte';
	import { PREFIX as ENCRYPT_PREFIX } from '$lib/encrypt';
	import { get_game_mode_from_code } from '$lib/util';

	const game_mode_text: Record<
		NonNullable<ReturnType<typeof get_game_mode_from_code>> | 'unknown',
		string
	> = {
		pvp: 'PvP',
		'pvp-ranked': 'ranked PvP',
		singleplayer: 'singleplayer',
		'co-op': 'co-op',
		unknown: '',
	};
</script>

<MenuLayout>
	<BackButton>Home</BackButton>

	<p class="text-3xl font-bold text-rose-800">
		{$page.status} &ndash; {$page.error?.message}
	</p>
	{#if $page.error?.details}
		<p class="-mt-4 text-sm font-bold italic text-rose-900">
			{$page.error.details}
		</p>
	{/if}

	{#if $page.route.id === '/play/[id]' && !$page.params.id?.startsWith(ENCRYPT_PREFIX) && $page.status === 401}
		{@const game_mode = get_game_mode_from_code($page.params.id) ?? 'unknown'}
		<p class="text-xl">
			You've been invited to an online {game_mode_text[game_mode]} game!
		</p>
	{/if}
	{#if $page.status === 401}
		<LoginRow />
	{/if}
</MenuLayout>
