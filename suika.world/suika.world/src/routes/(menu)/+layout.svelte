<script lang="ts">
	import { page } from '$app/stores';
	import UserCard from '$lib/components/UserCard.svelte';
	import { trpc } from '$lib/trpc';

	const session = trpc.get_session.query();
</script>

<div
	class="flex h-screen flex-col items-center justify-center gap-4 pt-16 font-bold sm:pt-0"
>
	{#if $page.route.id === '/(menu)'}
		<enhanced:img
			class="h-64 w-auto"
			src="$lib/assets/menu_logo.png?quality=100"
			alt="Suika World"
		/>
	{:else}
		<a href="/">
			<enhanced:img
				class="h-64 w-auto"
				src="$lib/assets/menu_logo.png?quality=100"
				alt="Suika World"
			/>
		</a>
	{/if}
	<div class="flex min-h-[20vh] w-full flex-col items-center gap-4">
		<slot />
	</div>
</div>
<!-- <Ad /> -->

{#if $session.data}
	<UserCard
		user={$session.data.user}
		size="large"
		link={{ href: '/api/logout', text: 'Log out' }}
		class="absolute right-2 top-2"
	/>
{/if}
