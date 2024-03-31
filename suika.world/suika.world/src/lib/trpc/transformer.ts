import { parse, stringify, uneval } from 'devalue';

export const transformer = {
	input: {
		serialize: (object: unknown) => stringify(object),
		deserialize: (object: string) => parse(object),
	},
	output: {
		serialize: (object: unknown) =>
			uneval(object, (value) => {
				if (value instanceof Uint8Array) {
					return `new Uint8Array(${JSON.stringify(Array.from(value))})`;
				}
			}),
		deserialize: (object: string) => (0, eval)(`(${object})`),
	},
};
