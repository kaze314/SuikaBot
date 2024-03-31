export const LOBBY_CODE_CHARSET = '346789ABCDEFGHJKLMNPQRTUVWXY';
export const LOBBY_CODE_LENGTH = 10;
export const LOBBY_CODE_REGEX = new RegExp(
	`^[${LOBBY_CODE_CHARSET}]{${LOBBY_CODE_LENGTH}}$`,
);
export const UUID_REGEX =
	/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

export const GAME_MODE_SUFFIX_ORDER = ['pvp', 'pvp-ranked', 'co-op'] as const;

export const SERVER_VERSION = 5;

export const SERVER_TICK_RATE = 10;

export const CLIENT_TICK_RATE = 60;

export const DROP_TIMER_SECONDS = 10;
export const GARBAGE_TIMER_SECONDS = 10;

export const CLIENT_TICKS_PER_SERVER_TICK = CLIENT_TICK_RATE / SERVER_TICK_RATE;

export const KILL_GRACE_PERIOD_SECONDS = 0.5;

export const DROP_COOLDOWN_TICKS = 5;
