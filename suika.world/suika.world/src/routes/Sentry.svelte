<script lang="ts">
	import { onMount } from 'svelte';
	import { BrowserTracing, Replay, init, setUser } from '@sentry/browser';
	import { PUBLIC_SENTRY_DSN } from '$env/static/public';
	import { trpc } from '$lib/trpc';

	const session = trpc.get_session.query();

	onMount(() => {
		init({
			dsn: PUBLIC_SENTRY_DSN,
			integrations: [
				new BrowserTracing(),
				new Replay({
					maskAllText: false,
					blockAllMedia: false,
				}),
			],
			tracesSampleRate: 0.1,

			replaysSessionSampleRate: 0.01,
			replaysOnErrorSampleRate: 1.0,
		});
		return session.subscribe((session) => {
			const user = session.data?.user;
			if (!user) return;
			setUser({
				id: user.userId,
				username: user.username,
			});
		});
	});
</script>
