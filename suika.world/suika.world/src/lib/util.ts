import {
	GAME_MODE_SUFFIX_ORDER,
	LOBBY_CODE_CHARSET,
	LOBBY_CODE_LENGTH,
	LOBBY_CODE_REGEX,
} from 'shared_constants';

export function get_game_mode_from_code(code: string | undefined) {
	if (code === undefined) return;
	if (code.length === 36) return 'singleplayer';
	if (code.length !== LOBBY_CODE_LENGTH) return;
	if (!LOBBY_CODE_REGEX.test(code)) return;
	const suffix = code.charAt(code.length - 1);
	const index = LOBBY_CODE_CHARSET.indexOf(suffix);

	const mode = GAME_MODE_SUFFIX_ORDER[index];

	return mode;
}

export const score_formatter = new Intl.NumberFormat('en-US');
