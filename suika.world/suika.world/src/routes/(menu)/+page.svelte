<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import LoginRow from '$lib/components/LoginRow.svelte';
	import { is_offline } from '$lib/offline';
	import { trpc } from '$lib/trpc';

	const session = trpc.get_session.query();
</script>

{#if $is_offline || !$session.data}
	<Button href="/play/offline" class="px-12 text-5xl">Play Offline</Button>
	<p class="mb-4 max-w-md text-center text-xl italic text-rose-900">
		Your scores will not be saved, and you can't play multiplayer while {$is_offline
			? 'offline'
			: 'logged out'}.
	</p>
	{#if !$is_offline}
		<LoginRow />
	{/if}
{:else}
	<Button href="/play" class="px-12 text-5xl">Play</Button>
	<Button href="/history" class="px-14 text-4xl">History</Button>
	<Button href="/leaderboards" class="px-12 text-4xl">Leaderboards</Button>
{/if}
