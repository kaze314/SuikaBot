import { createTRPCSvelte } from 'trpc-svelte-query';
import { httpBatchLink } from '@trpc/client';
import type { AppRouter } from '$lib/server/routes/_app';
import { transformer } from './transformer';
import { addToast } from '$lib/components/Toasts.svelte';
import type { inferRouterOutputs } from '@trpc/server';
import { captureException } from '@sentry/browser';

export const trpc = createTRPCSvelte<AppRouter>({
	links: [
		httpBatchLink({
			url: '/api/trpc',
			fetch: (input, init) => {
				return fetch(input, {
					...init,
					keepalive: true,
				});
			},
		}),
	],
	transformer,
	queryClientConfig: {
		defaultOptions: {
			mutations: {
				onError(error) {
					addToast(error.message);
					captureException(error);
				},
			},
			queries: {
				retry: false,
			},
		},
	},
});

export type RouterOutput = inferRouterOutputs<AppRouter>;
