(function () {
  try {
    var e =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      s = new Error().stack;
    s &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[s] = "ce525173-3697-47c6-9a0b-9a0bec22b362"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-ce525173-3697-47c6-9a0b-9a0bec22b362"));
  } catch {}
})();
const n = "wss://suika-game-backend-production.mogul-moves.workers.dev",
  o = "https://replays.suika.world",
  d =
    "https://6ed0c89583041f871245cc7e0fe68286@o4504601070010368.ingest.sentry.io/4506271844794368";
export { o as P, n as a, d as b };
//# sourceMappingURL=public.72a133e0.js.map
