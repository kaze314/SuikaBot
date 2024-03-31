import {
  s as on,
  n as Zs,
  v as ei,
  w as ti,
  x as ni,
  G as ri,
  U as Uo,
  e as oe,
  ab as Lo,
  f as ae,
  i as j,
  j as A,
  l as de,
  B as jr,
  a as lt,
  b as qr,
  d as ft,
  k as Ce,
  c as Kr,
  p as si,
} from "../chunks/scheduler.023ced08.js";
import {
  S as an,
  i as cn,
  t as Xe,
  b as Ve,
  c as $t,
  a as Yt,
  m as Ht,
  d as zt,
} from "../chunks/index.c7cfddcd.js";
import {
  Q as Po,
  d as Fo,
  i as Et,
  g as Wt,
  l as m,
  h as fr,
  G as le,
  C as Go,
  j as Z,
  o as Xr,
  k as Tt,
  m as Pn,
  u as Re,
  n as $o,
  p as ii,
  q as Yo,
  r as Ho,
  v as zo,
  w as hr,
  S as pr,
  x as Pe,
  y as ve,
  z as oi,
  A as x,
  D as bt,
  E as ai,
  F as Wo,
  H as jo,
  I as qo,
  J as ci,
  K as Ko,
  L as Xo,
  M as Vo,
  N as Vr,
  O as ui,
  P as Jr,
  R as Jo,
  T as Fn,
  U as mr,
  V as xe,
  W as rt,
  X as Qo,
  Y as Zo,
  Z as Gn,
  _ as vt,
  $ as _r,
  a0 as gr,
  a1 as Qr,
  a2 as ea,
  a3 as ta,
  a4 as yr,
  a5 as na,
  a6 as ra,
  a7 as sa,
  a8 as Zr,
  a9 as Fe,
  aa as pe,
  ab as ia,
  ac as oa,
  t as di,
  ad as aa,
  ae as ca,
} from "../chunks/index.ee14482c.js";
import { i as ua } from "../chunks/offline.57bc30fc.js";
import "../chunks/paths.1fc180d1.js";
import { b as da } from "../chunks/public.72a133e0.js";
import { i as es } from "../chunks/BoundingBox.de364d8e.js";
import { w as la } from "../chunks/index.df959635.js";
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
      t = new Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "34bb19a0-9c7b-4e01-a5d2-1259aa52afc1"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-34bb19a0-9c7b-4e01-a5d2-1259aa52afc1"));
  } catch {}
})();
function fa(e) {
  let t;
  const n = e[2].default,
    r = Zs(n, e, e[1], null);
  return {
    c() {
      r && r.c();
    },
    l(s) {
      r && r.l(s);
    },
    m(s, i) {
      r && r.m(s, i), (t = !0);
    },
    p(s, [i]) {
      r &&
        r.p &&
        (!t || i & 2) &&
        ei(r, n, s, s[1], t ? ni(n, s[1], i, null) : ti(s[1]), null);
    },
    i(s) {
      t || (Xe(r, s), (t = !0));
    },
    o(s) {
      Ve(r, s), (t = !1);
    },
    d(s) {
      r && r.d(s);
    },
  };
}
function ha(e, t, n) {
  let { $$slots: r = {}, $$scope: s } = t,
    { client: i = new Po() } = t;
  return (
    ri(() => {
      i.mount();
    }),
    Fo(i),
    Uo(() => {
      i.unmount();
    }),
    (e.$$set = (o) => {
      "client" in o && n(0, (i = o.client)),
        "$$scope" in o && n(1, (s = o.$$scope));
    }),
    [i, s, r]
  );
}
class pa extends an {
  constructor(t) {
    super(), cn(this, t, ha, fa, on, { client: 0 });
  }
}
function ma(e, t, n = 250, r, s, i, o) {
  if (
    !i.exception ||
    !i.exception.values ||
    !o ||
    !Et(o.originalException, Error)
  )
    return;
  const a =
    i.exception.values.length > 0
      ? i.exception.values[i.exception.values.length - 1]
      : void 0;
  a &&
    (i.exception.values = _a(
      $n(e, t, s, o.originalException, r, i.exception.values, a, 0),
      n
    ));
}
function $n(e, t, n, r, s, i, o, a) {
  if (i.length >= n + 1) return i;
  let c = [...i];
  if (Et(r[s], Error)) {
    ts(o, a);
    const u = e(t, r[s]),
      d = c.length;
    ns(u, s, d, a), (c = $n(e, t, n, r[s], s, [u, ...c], u, d));
  }
  return (
    Array.isArray(r.errors) &&
      r.errors.forEach((u, d) => {
        if (Et(u, Error)) {
          ts(o, a);
          const l = e(t, u),
            f = c.length;
          ns(l, `errors[${d}]`, f, a), (c = $n(e, t, n, u, s, [l, ...c], l, f));
        }
      }),
    c
  );
}
function ts(e, t) {
  (e.mechanism = e.mechanism || { type: "generic", handled: !0 }),
    (e.mechanism = { ...e.mechanism, is_exception_group: !0, exception_id: t });
}
function ns(e, t, n, r) {
  (e.mechanism = e.mechanism || { type: "generic", handled: !0 }),
    (e.mechanism = {
      ...e.mechanism,
      type: "chained",
      source: t,
      exception_id: n,
      parent_id: r,
    });
}
function _a(e, t) {
  return e.map((n) => (n.value && (n.value = Wt(n.value, t)), n));
}
const ga = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function ya(e) {
  return e === "http" || e === "https";
}
function un(e, t = !1) {
  const {
    host: n,
    path: r,
    pass: s,
    port: i,
    projectId: o,
    protocol: a,
    publicKey: c,
  } = e;
  return `${a}://${c}${t && s ? `:${s}` : ""}@${n}${i ? `:${i}` : ""}/${
    r && `${r}/`
  }${o}`;
}
function Sa(e) {
  const t = ga.exec(e);
  if (!t) {
    console.error(`Invalid Sentry Dsn: ${e}`);
    return;
  }
  const [n, r, s = "", i, o = "", a] = t.slice(1);
  let c = "",
    u = a;
  const d = u.split("/");
  if ((d.length > 1 && ((c = d.slice(0, -1).join("/")), (u = d.pop())), u)) {
    const l = u.match(/^\d+/);
    l && (u = l[0]);
  }
  return li({
    host: i,
    pass: s,
    path: c,
    projectId: u,
    port: o,
    protocol: n,
    publicKey: r,
  });
}
function li(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || "",
    pass: e.pass || "",
    host: e.host,
    port: e.port || "",
    path: e.path || "",
    projectId: e.projectId,
  };
}
function Ea(e) {
  if (!(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__)) return !0;
  const { port: t, projectId: n, protocol: r } = e;
  return ["protocol", "publicKey", "host", "projectId"].find((o) =>
    e[o] ? !1 : (m.error(`Invalid Sentry Dsn: ${o} missing`), !0)
  )
    ? !1
    : n.match(/^\d+$/)
    ? ya(r)
      ? t && isNaN(parseInt(t, 10))
        ? (m.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
        : !0
      : (m.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1)
    : (m.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function Ta(e) {
  const t = typeof e == "string" ? Sa(e) : li(e);
  if (!(!t || !Ea(t))) return t;
}
class Se extends Error {
  constructor(t, n = "warn") {
    super(t),
      (this.message = t),
      (this.name = new.target.prototype.constructor.name),
      Object.setPrototypeOf(this, new.target.prototype),
      (this.logLevel = n);
  }
}
const fi = 50,
  rs = /\(error: (.*)\)/,
  ss = /captureMessage|captureException/;
function hi(...e) {
  const t = e.sort((n, r) => n[0] - r[0]).map((n) => n[1]);
  return (n, r = 0) => {
    const s = [],
      i = n.split(`
`);
    for (let o = r; o < i.length; o++) {
      const a = i[o];
      if (a.length > 1024) continue;
      const c = rs.test(a) ? a.replace(rs, "$1") : a;
      if (!c.match(/\S*Error: /)) {
        for (const u of t) {
          const d = u(c);
          if (d) {
            s.push(d);
            break;
          }
        }
        if (s.length >= fi) break;
      }
    }
    return va(s);
  };
}
function ba(e) {
  return Array.isArray(e) ? hi(...e) : e;
}
function va(e) {
  if (!e.length) return [];
  const t = Array.from(e);
  return (
    /sentryWrapped/.test(t[t.length - 1].function || "") && t.pop(),
    t.reverse(),
    ss.test(t[t.length - 1].function || "") &&
      (t.pop(), ss.test(t[t.length - 1].function || "") && t.pop()),
    t
      .slice(0, fi)
      .map((n) => ({
        ...n,
        filename: n.filename || t[t.length - 1].filename,
        function: n.function || "?",
      }))
  );
}
const Cn = "<anonymous>";
function we(e) {
  try {
    return !e || typeof e != "function" ? Cn : e.name || Cn;
  } catch {
    return Cn;
  }
}
const Yn = fr();
function pi() {
  if (!("fetch" in Yn)) return !1;
  try {
    return (
      new Headers(), new Request("http://www.example.com"), new Response(), !0
    );
  } catch {
    return !1;
  }
}
function Hn(e) {
  return (
    e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
  );
}
function Ra() {
  if (typeof EdgeRuntime == "string") return !0;
  if (!pi()) return !1;
  if (Hn(Yn.fetch)) return !0;
  let e = !1;
  const t = Yn.document;
  if (t && typeof t.createElement == "function")
    try {
      const n = t.createElement("iframe");
      (n.hidden = !0),
        t.head.appendChild(n),
        n.contentWindow &&
          n.contentWindow.fetch &&
          (e = Hn(n.contentWindow.fetch)),
        t.head.removeChild(n);
    } catch (n) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n
        );
    }
  return e;
}
const Mt = fr();
function wa() {
  const e = Mt.chrome,
    t = e && e.app && e.app.runtime,
    n = "history" in Mt && !!Mt.history.pushState && !!Mt.history.replaceState;
  return !t && n;
}
const Q = fr(),
  Me = "__sentry_xhr_v2__",
  pt = {},
  is = {};
function ka(e) {
  if (!is[e])
    switch (((is[e] = !0), e)) {
      case "console":
        Ia();
        break;
      case "dom":
        Ua();
        break;
      case "xhr":
        Ca();
        break;
      case "fetch":
        Da();
        break;
      case "history":
        xa();
        break;
      case "error":
        La();
        break;
      case "unhandledrejection":
        Pa();
        break;
      default:
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          m.warn("unknown instrumentation type:", e);
        return;
    }
}
function ee(e, t) {
  (pt[e] = pt[e] || []), pt[e].push(t), ka(e);
}
function he(e, t) {
  if (!(!e || !pt[e]))
    for (const n of pt[e] || [])
      try {
        n(t);
      } catch (r) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          m.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${we(n)}
Error:`,
            r
          );
      }
}
function Ia() {
  "console" in le &&
    Go.forEach(function (e) {
      e in le.console &&
        Z(le.console, e, function (t) {
          return (
            (Xr[e] = t),
            function (...n) {
              he("console", { args: n, level: e });
              const r = Xr[e];
              r && r.apply(le.console, n);
            }
          );
        });
    });
}
function Da() {
  Ra() &&
    Z(le, "fetch", function (e) {
      return function (...t) {
        const { method: n, url: r } = Na(t),
          s = {
            args: t,
            fetchData: { method: n, url: r },
            startTimestamp: Date.now(),
          };
        return (
          he("fetch", { ...s }),
          e.apply(le, t).then(
            (i) => (
              he("fetch", { ...s, endTimestamp: Date.now(), response: i }), i
            ),
            (i) => {
              throw (
                (he("fetch", { ...s, endTimestamp: Date.now(), error: i }), i)
              );
            }
          )
        );
      };
    });
}
function zn(e, t) {
  return !!e && typeof e == "object" && !!e[t];
}
function os(e) {
  return typeof e == "string"
    ? e
    : e
    ? zn(e, "url")
      ? e.url
      : e.toString
      ? e.toString()
      : ""
    : "";
}
function Na(e) {
  if (e.length === 0) return { method: "GET", url: "" };
  if (e.length === 2) {
    const [n, r] = e;
    return {
      url: os(n),
      method: zn(r, "method") ? String(r.method).toUpperCase() : "GET",
    };
  }
  const t = e[0];
  return {
    url: os(t),
    method: zn(t, "method") ? String(t.method).toUpperCase() : "GET",
  };
}
function Ca() {
  if (!Q.XMLHttpRequest) return;
  const e = XMLHttpRequest.prototype;
  Z(e, "open", function (t) {
    return function (...n) {
      const r = Date.now(),
        s = n[1],
        i = (this[Me] = {
          method: Tt(n[0]) ? n[0].toUpperCase() : n[0],
          url: n[1],
          request_headers: {},
        });
      Tt(s) &&
        i.method === "POST" &&
        s.match(/sentry_key/) &&
        (this.__sentry_own_request__ = !0);
      const o = () => {
        const a = this[Me];
        if (a && this.readyState === 4) {
          try {
            a.status_code = this.status;
          } catch {}
          he("xhr", {
            args: n,
            endTimestamp: Date.now(),
            startTimestamp: r,
            xhr: this,
          });
        }
      };
      return (
        "onreadystatechange" in this &&
        typeof this.onreadystatechange == "function"
          ? Z(this, "onreadystatechange", function (a) {
              return function (...c) {
                return o(), a.apply(this, c);
              };
            })
          : this.addEventListener("readystatechange", o),
        Z(this, "setRequestHeader", function (a) {
          return function (...c) {
            const [u, d] = c,
              l = this[Me];
            return (
              l && (l.request_headers[u.toLowerCase()] = d), a.apply(this, c)
            );
          };
        }),
        t.apply(this, n)
      );
    };
  }),
    Z(e, "send", function (t) {
      return function (...n) {
        const r = this[Me];
        return (
          r && n[0] !== void 0 && (r.body = n[0]),
          he("xhr", { args: n, startTimestamp: Date.now(), xhr: this }),
          t.apply(this, n)
        );
      };
    });
}
let Ot;
function xa() {
  if (!wa()) return;
  const e = Q.onpopstate;
  Q.onpopstate = function (...n) {
    const r = Q.location.href,
      s = Ot;
    if (((Ot = r), he("history", { from: s, to: r }), e))
      try {
        return e.apply(this, n);
      } catch {}
  };
  function t(n) {
    return function (...r) {
      const s = r.length > 2 ? r[2] : void 0;
      if (s) {
        const i = Ot,
          o = String(s);
        (Ot = o), he("history", { from: i, to: o });
      }
      return n.apply(this, r);
    };
  }
  Z(Q.history, "pushState", t), Z(Q.history, "replaceState", t);
}
const Ma = 1e3;
let as, Wn, jn;
function Oa(e) {
  if (e.type !== Wn) return !1;
  try {
    if (!e.target || e.target._sentryId !== jn) return !1;
  } catch {}
  return !0;
}
function Ba(e, t) {
  return e !== "keypress"
    ? !1
    : !t || !t.tagName
    ? !0
    : !(
        t.tagName === "INPUT" ||
        t.tagName === "TEXTAREA" ||
        t.isContentEditable
      );
}
function Aa(e) {
  try {
    return e.target;
  } catch {
    return null;
  }
}
function cs(e, t = !1) {
  return (n) => {
    if (!n || n._sentryCaptured) return;
    const r = Aa(n);
    if (Ba(n.type, r)) return;
    Pn(n, "_sentryCaptured", !0), r && !r._sentryId && Pn(r, "_sentryId", Re());
    const s = n.type === "keypress" ? "input" : n.type;
    Oa(n) ||
      (e({ event: n, name: s, global: t }),
      (Wn = n.type),
      (jn = r ? r._sentryId : void 0)),
      clearTimeout(as),
      (as = Q.setTimeout(() => {
        (jn = void 0), (Wn = void 0);
      }, Ma));
  };
}
function Ua() {
  if (!Q.document) return;
  const e = he.bind(null, "dom"),
    t = cs(e, !0);
  Q.document.addEventListener("click", t, !1),
    Q.document.addEventListener("keypress", t, !1),
    ["EventTarget", "Node"].forEach((n) => {
      const r = Q[n] && Q[n].prototype;
      !r ||
        !r.hasOwnProperty ||
        !r.hasOwnProperty("addEventListener") ||
        (Z(r, "addEventListener", function (s) {
          return function (i, o, a) {
            if (i === "click" || i == "keypress")
              try {
                const c = this,
                  u = (c.__sentry_instrumentation_handlers__ =
                    c.__sentry_instrumentation_handlers__ || {}),
                  d = (u[i] = u[i] || { refCount: 0 });
                if (!d.handler) {
                  const l = cs(e);
                  (d.handler = l), s.call(this, i, l, a);
                }
                d.refCount++;
              } catch {}
            return s.call(this, i, o, a);
          };
        }),
        Z(r, "removeEventListener", function (s) {
          return function (i, o, a) {
            if (i === "click" || i == "keypress")
              try {
                const c = this,
                  u = c.__sentry_instrumentation_handlers__ || {},
                  d = u[i];
                d &&
                  (d.refCount--,
                  d.refCount <= 0 &&
                    (s.call(this, i, d.handler, a),
                    (d.handler = void 0),
                    delete u[i]),
                  Object.keys(u).length === 0 &&
                    delete c.__sentry_instrumentation_handlers__);
              } catch {}
            return s.call(this, i, o, a);
          };
        }));
    });
}
let Bt = null;
function La() {
  (Bt = Q.onerror),
    (Q.onerror = function (e, t, n, r, s) {
      return (
        he("error", { column: r, error: s, line: n, msg: e, url: t }),
        Bt && !Bt.__SENTRY_LOADER__ ? Bt.apply(this, arguments) : !1
      );
    }),
    (Q.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
let At = null;
function Pa() {
  (At = Q.onunhandledrejection),
    (Q.onunhandledrejection = function (e) {
      return (
        he("unhandledrejection", e),
        At && !At.__SENTRY_LOADER__ ? At.apply(this, arguments) : !0
      );
    }),
    (Q.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
}
function us() {
  return typeof window < "u" && (!$o() || Fa());
}
function Fa() {
  return le.process !== void 0 && le.process.type === "renderer";
}
function Ga() {
  const e = typeof WeakSet == "function",
    t = e ? new WeakSet() : [];
  function n(s) {
    if (e) return t.has(s) ? !0 : (t.add(s), !1);
    for (let i = 0; i < t.length; i++) if (t[i] === s) return !0;
    return t.push(s), !1;
  }
  function r(s) {
    if (e) t.delete(s);
    else
      for (let i = 0; i < t.length; i++)
        if (t[i] === s) {
          t.splice(i, 1);
          break;
        }
  }
  return [n, r];
}
function ye(e, t = 100, n = 1 / 0) {
  try {
    return qn("", e, t, n);
  } catch (r) {
    return { ERROR: `**non-serializable** (${r})` };
  }
}
function mi(e, t = 3, n = 100 * 1024) {
  const r = ye(e, t);
  return za(r) > n ? mi(e, t - 1, n) : r;
}
function qn(e, t, n = 1 / 0, r = 1 / 0, s = Ga()) {
  const [i, o] = s;
  if (
    t == null ||
    (["number", "boolean", "string"].includes(typeof t) && !ii(t))
  )
    return t;
  const a = $a(e, t);
  if (!a.startsWith("[object ")) return a;
  if (t.__sentry_skip_normalization__) return t;
  const c =
    typeof t.__sentry_override_normalization_depth__ == "number"
      ? t.__sentry_override_normalization_depth__
      : n;
  if (c === 0) return a.replace("object ", "");
  if (i(t)) return "[Circular ~]";
  const u = t;
  if (u && typeof u.toJSON == "function")
    try {
      const h = u.toJSON();
      return qn("", h, c - 1, r, s);
    } catch {}
  const d = Array.isArray(t) ? [] : {};
  let l = 0;
  const f = Yo(t);
  for (const h in f) {
    if (!Object.prototype.hasOwnProperty.call(f, h)) continue;
    if (l >= r) {
      d[h] = "[MaxProperties ~]";
      break;
    }
    const p = f[h];
    (d[h] = qn(h, p, c - 1, r, s)), l++;
  }
  return o(t), d;
}
function $a(e, t) {
  try {
    if (e === "domain" && t && typeof t == "object" && t._events)
      return "[Domain]";
    if (e === "domainEmitter") return "[DomainEmitter]";
    if (typeof global < "u" && t === global) return "[Global]";
    if (typeof window < "u" && t === window) return "[Window]";
    if (typeof document < "u" && t === document) return "[Document]";
    if (Ho(t)) return "[VueViewModel]";
    if (zo(t)) return "[SyntheticEvent]";
    if (typeof t == "number" && t !== t) return "[NaN]";
    if (typeof t == "function") return `[Function: ${we(t)}]`;
    if (typeof t == "symbol") return `[${String(t)}]`;
    if (typeof t == "bigint") return `[BigInt: ${String(t)}]`;
    const n = Ya(t);
    return /^HTML(\w*)Element$/.test(n)
      ? `[HTMLElement: ${n}]`
      : `[object ${n}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function Ya(e) {
  const t = Object.getPrototypeOf(e);
  return t ? t.constructor.name : "null prototype";
}
function Ha(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function za(e) {
  return Ha(JSON.stringify(e));
}
function Wa(e) {
  const t = [];
  function n() {
    return e === void 0 || t.length < e;
  }
  function r(o) {
    return t.splice(t.indexOf(o), 1)[0];
  }
  function s(o) {
    if (!n())
      return hr(new Se("Not adding Promise because buffer limit was reached."));
    const a = o();
    return (
      t.indexOf(a) === -1 && t.push(a),
      a.then(() => r(a)).then(null, () => r(a).then(null, () => {})),
      a
    );
  }
  function i(o) {
    return new pr((a, c) => {
      let u = t.length;
      if (!u) return a(!0);
      const d = setTimeout(() => {
        o && o > 0 && a(!1);
      }, o);
      t.forEach((l) => {
        Pe(l).then(() => {
          --u || (clearTimeout(d), a(!0));
        }, c);
      });
    });
  }
  return { $: t, add: s, drain: i };
}
function xn(e) {
  if (!e) return {};
  const t = e.match(
    /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
  );
  if (!t) return {};
  const n = t[6] || "",
    r = t[8] || "";
  return {
    host: t[4],
    path: t[5],
    protocol: t[2],
    search: n,
    hash: r,
    relative: t[5] + n + r,
  };
}
const ja = ["fatal", "error", "warning", "log", "info", "debug"];
function qa(e) {
  return e === "warn" ? "warning" : ja.includes(e) ? e : "log";
}
const Kn = "baggage",
  _i = "sentry-",
  Ka = /^sentry-/,
  Xa = 8192;
function Va(e) {
  if (!Tt(e) && !Array.isArray(e)) return;
  let t = {};
  if (Array.isArray(e))
    t = e.reduce((r, s) => {
      const i = ds(s);
      return { ...r, ...i };
    }, {});
  else {
    if (!e) return;
    t = ds(e);
  }
  const n = Object.entries(t).reduce((r, [s, i]) => {
    if (s.match(Ka)) {
      const o = s.slice(_i.length);
      r[o] = i;
    }
    return r;
  }, {});
  if (Object.keys(n).length > 0) return n;
}
function Xn(e) {
  if (!e) return;
  const t = Object.entries(e).reduce(
    (n, [r, s]) => (s && (n[`${_i}${r}`] = s), n),
    {}
  );
  return Ja(t);
}
function ds(e) {
  return e
    .split(",")
    .map((t) => t.split("=").map((n) => decodeURIComponent(n.trim())))
    .reduce((t, [n, r]) => ((t[n] = r), t), {});
}
function Ja(e) {
  if (Object.keys(e).length !== 0)
    return Object.entries(e).reduce((t, [n, r], s) => {
      const i = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`,
        o = s === 0 ? i : `${t},${i}`;
      return o.length > Xa
        ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            m.warn(
              `Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`
            ),
          t)
        : o;
    }, "");
}
const Qa = new RegExp(
  "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
);
function Za(e) {
  if (!e) return;
  const t = e.match(Qa);
  if (!t) return;
  let n;
  return (
    t[3] === "1" ? (n = !0) : t[3] === "0" && (n = !1),
    { traceId: t[1], parentSampled: n, parentSpanId: t[2] }
  );
}
function ec(e, t) {
  const n = Za(e),
    r = Va(t),
    { traceId: s, parentSpanId: i, parentSampled: o } = n || {},
    a = { traceId: s || Re(), spanId: Re().substring(16), sampled: o };
  return (
    i && (a.parentSpanId = i),
    r && (a.dsc = r),
    { traceparentData: n, dynamicSamplingContext: r, propagationContext: a }
  );
}
function Sr(e = Re(), t = Re().substring(16), n) {
  let r = "";
  return n !== void 0 && (r = n ? "-1" : "-0"), `${e}-${t}${r}`;
}
function st(e, t = []) {
  return [e, t];
}
function tc(e, t) {
  const [n, r] = e;
  return [n, [...r, t]];
}
function ls(e, t) {
  const n = e[1];
  for (const r of n) {
    const s = r[0].type;
    if (t(r, s)) return !0;
  }
  return !1;
}
function Vn(e, t) {
  return (t || new TextEncoder()).encode(e);
}
function nc(e, t) {
  const [n, r] = e;
  let s = JSON.stringify(n);
  function i(o) {
    typeof s == "string"
      ? (s = typeof o == "string" ? s + o : [Vn(s, t), o])
      : s.push(typeof o == "string" ? Vn(o, t) : o);
  }
  for (const o of r) {
    const [a, c] = o;
    if (
      (i(`
${JSON.stringify(a)}
`),
      typeof c == "string" || c instanceof Uint8Array)
    )
      i(c);
    else {
      let u;
      try {
        u = JSON.stringify(c);
      } catch {
        u = JSON.stringify(ye(c));
      }
      i(u);
    }
  }
  return typeof s == "string" ? s : rc(s);
}
function rc(e) {
  const t = e.reduce((s, i) => s + i.length, 0),
    n = new Uint8Array(t);
  let r = 0;
  for (const s of e) n.set(s, r), (r += s.length);
  return n;
}
function sc(e, t) {
  const n = typeof e.data == "string" ? Vn(e.data, t) : e.data;
  return [
    ve({
      type: "attachment",
      length: n.length,
      filename: e.filename,
      content_type: e.contentType,
      attachment_type: e.attachmentType,
    }),
    n,
  ];
}
const ic = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  feedback: "feedback",
  statsd: "unknown",
};
function fs(e) {
  return ic[e];
}
function Er(e) {
  if (!e || !e.sdk) return;
  const { name: t, version: n } = e.sdk;
  return { name: t, version: n };
}
function gi(e, t, n, r) {
  const s =
    e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date().toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && r && { dsn: un(r) }),
    ...(s && { trace: ve({ ...s }) }),
  };
}
function oc(e, t, n) {
  const r = [
    { type: "client_report" },
    { timestamp: n || oi(), discarded_events: e },
  ];
  return st(t ? { dsn: t } : {}, [r]);
}
const ac = 60 * 1e3;
function cc(e, t = Date.now()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n)) return n * 1e3;
  const r = Date.parse(`${e}`);
  return isNaN(r) ? ac : r - t;
}
function uc(e, t) {
  return e[t] || e.all || 0;
}
function yi(e, t, n = Date.now()) {
  return uc(e, t) > n;
}
function Si(e, { statusCode: t, headers: n }, r = Date.now()) {
  const s = { ...e },
    i = n && n["x-sentry-rate-limits"],
    o = n && n["retry-after"];
  if (i)
    for (const a of i.trim().split(",")) {
      const [c, u] = a.split(":", 2),
        d = parseInt(c, 10),
        l = (isNaN(d) ? 60 : d) * 1e3;
      if (!u) s.all = r + l;
      else for (const f of u.split(";")) s[f] = r + l;
    }
  else o ? (s.all = r + cc(o, r)) : t === 429 && (s.all = r + 60 * 1e3);
  return s;
}
function Dt(e) {
  return (e || x()).getScope().getTransaction();
}
let hs = !1;
function dc() {
  hs || ((hs = !0), ee("error", Jn), ee("unhandledrejection", Jn));
}
function Jn() {
  const e = Dt();
  if (e) {
    const t = "internal_error";
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      m.log(`[Tracing] Transaction: ${t} -> Global error occured`),
      e.setStatus(t);
  }
}
Jn.tag = "sentry_tracingErrorCallback";
class Ei {
  constructor(t = 1e3) {
    (this._maxlen = t), (this.spans = []);
  }
  add(t) {
    this.spans.length > this._maxlen
      ? (t.spanRecorder = void 0)
      : this.spans.push(t);
  }
}
class Tr {
  constructor(t = {}) {
    (this.traceId = t.traceId || Re()),
      (this.spanId = t.spanId || Re().substring(16)),
      (this.startTimestamp = t.startTimestamp || bt()),
      (this.tags = t.tags || {}),
      (this.data = t.data || {}),
      (this.instrumenter = t.instrumenter || "sentry"),
      (this.origin = t.origin || "manual"),
      t.parentSpanId && (this.parentSpanId = t.parentSpanId),
      "sampled" in t && (this.sampled = t.sampled),
      t.op && (this.op = t.op),
      t.description && (this.description = t.description),
      t.name && (this.description = t.name),
      t.status && (this.status = t.status),
      t.endTimestamp && (this.endTimestamp = t.endTimestamp);
  }
  get name() {
    return this.description || "";
  }
  set name(t) {
    this.setName(t);
  }
  startChild(t) {
    const n = new Tr({
      ...t,
      parentSpanId: this.spanId,
      sampled: this.sampled,
      traceId: this.traceId,
    });
    if (
      ((n.spanRecorder = this.spanRecorder),
      n.spanRecorder && n.spanRecorder.add(n),
      (n.transaction = this.transaction),
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && n.transaction)
    ) {
      const r = (t && t.op) || "< unknown op >",
        s = n.transaction.name || "< unknown name >",
        i = n.transaction.spanId,
        o = `[Tracing] Starting '${r}' span on transaction '${s}' (${i}).`;
      (n.transaction.metadata.spanMetadata[n.spanId] = { logMessage: o }),
        m.log(o);
    }
    return n;
  }
  setTag(t, n) {
    return (this.tags = { ...this.tags, [t]: n }), this;
  }
  setData(t, n) {
    return (this.data = { ...this.data, [t]: n }), this;
  }
  setStatus(t) {
    return (this.status = t), this;
  }
  setHttpStatus(t) {
    this.setTag("http.status_code", String(t)),
      this.setData("http.response.status_code", t);
    const n = lc(t);
    return n !== "unknown_error" && this.setStatus(n), this;
  }
  setName(t) {
    this.description = t;
  }
  isSuccess() {
    return this.status === "ok";
  }
  finish(t) {
    if (
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      this.transaction &&
      this.transaction.spanId !== this.spanId
    ) {
      const { logMessage: n } =
        this.transaction.metadata.spanMetadata[this.spanId];
      n && m.log(n.replace("Starting", "Finishing"));
    }
    this.endTimestamp = typeof t == "number" ? t : bt();
  }
  toTraceparent() {
    return Sr(this.traceId, this.spanId, this.sampled);
  }
  toContext() {
    return ve({
      data: this.data,
      description: this.description,
      endTimestamp: this.endTimestamp,
      op: this.op,
      parentSpanId: this.parentSpanId,
      sampled: this.sampled,
      spanId: this.spanId,
      startTimestamp: this.startTimestamp,
      status: this.status,
      tags: this.tags,
      traceId: this.traceId,
    });
  }
  updateWithContext(t) {
    return (
      (this.data = t.data || {}),
      (this.description = t.description),
      (this.endTimestamp = t.endTimestamp),
      (this.op = t.op),
      (this.parentSpanId = t.parentSpanId),
      (this.sampled = t.sampled),
      (this.spanId = t.spanId || this.spanId),
      (this.startTimestamp = t.startTimestamp || this.startTimestamp),
      (this.status = t.status),
      (this.tags = t.tags || {}),
      (this.traceId = t.traceId || this.traceId),
      this
    );
  }
  getTraceContext() {
    return ve({
      data: Object.keys(this.data).length > 0 ? this.data : void 0,
      description: this.description,
      op: this.op,
      parent_span_id: this.parentSpanId,
      span_id: this.spanId,
      status: this.status,
      tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
      trace_id: this.traceId,
      origin: this.origin,
    });
  }
  toJSON() {
    return ve({
      data: Object.keys(this.data).length > 0 ? this.data : void 0,
      description: this.description,
      op: this.op,
      parent_span_id: this.parentSpanId,
      span_id: this.spanId,
      start_timestamp: this.startTimestamp,
      status: this.status,
      tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
      timestamp: this.endTimestamp,
      trace_id: this.traceId,
      origin: this.origin,
    });
  }
}
function lc(e) {
  if (e < 400 && e >= 100) return "ok";
  if (e >= 400 && e < 500)
    switch (e) {
      case 401:
        return "unauthenticated";
      case 403:
        return "permission_denied";
      case 404:
        return "not_found";
      case 409:
        return "already_exists";
      case 413:
        return "failed_precondition";
      case 429:
        return "resource_exhausted";
      default:
        return "invalid_argument";
    }
  if (e >= 500 && e < 600)
    switch (e) {
      case 501:
        return "unimplemented";
      case 503:
        return "unavailable";
      case 504:
        return "deadline_exceeded";
      default:
        return "internal_error";
    }
  return "unknown_error";
}
function dn(e, t, n) {
  const r = t.getOptions(),
    { publicKey: s } = t.getDsn() || {},
    { segment: i } = (n && n.getUser()) || {},
    o = ve({
      environment: r.environment || ai,
      release: r.release,
      user_segment: i,
      public_key: s,
      trace_id: e,
    });
  return t.emit && t.emit("createDsc", o), o;
}
class Ti extends Tr {
  constructor(t, n) {
    super(t),
      delete this.description,
      (this._measurements = {}),
      (this._contexts = {}),
      (this._hub = n || x()),
      (this._name = t.name || ""),
      (this.metadata = { source: "custom", ...t.metadata, spanMetadata: {} }),
      (this._trimEnd = t.trimEnd),
      (this.transaction = this);
    const r = this.metadata.dynamicSamplingContext;
    r && (this._frozenDynamicSamplingContext = { ...r });
  }
  get name() {
    return this._name;
  }
  set name(t) {
    this.setName(t);
  }
  setName(t, n = "custom") {
    (this._name = t), (this.metadata.source = n);
  }
  initSpanRecorder(t = 1e3) {
    this.spanRecorder || (this.spanRecorder = new Ei(t)),
      this.spanRecorder.add(this);
  }
  setContext(t, n) {
    n === null ? delete this._contexts[t] : (this._contexts[t] = n);
  }
  setMeasurement(t, n, r = "") {
    this._measurements[t] = { value: n, unit: r };
  }
  setMetadata(t) {
    this.metadata = { ...this.metadata, ...t };
  }
  finish(t) {
    const n = this._finishTransaction(t);
    if (n) return this._hub.captureEvent(n);
  }
  toContext() {
    const t = super.toContext();
    return ve({ ...t, name: this.name, trimEnd: this._trimEnd });
  }
  updateWithContext(t) {
    return (
      super.updateWithContext(t),
      (this.name = t.name || ""),
      (this._trimEnd = t.trimEnd),
      this
    );
  }
  getDynamicSamplingContext() {
    if (this._frozenDynamicSamplingContext)
      return this._frozenDynamicSamplingContext;
    const t = this._hub || x(),
      n = t.getClient();
    if (!n) return {};
    const r = t.getScope(),
      s = dn(this.traceId, n, r),
      i = this.metadata.sampleRate;
    i !== void 0 && (s.sample_rate = `${i}`);
    const o = this.metadata.source;
    return (
      o && o !== "url" && (s.transaction = this.name),
      this.sampled !== void 0 && (s.sampled = String(this.sampled)),
      s
    );
  }
  setHub(t) {
    this._hub = t;
  }
  _finishTransaction(t) {
    if (this.endTimestamp !== void 0) return;
    this.name ||
      ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.warn(
          "Transaction has no name, falling back to `<unlabeled transaction>`."
        ),
      (this.name = "<unlabeled transaction>")),
      super.finish(t);
    const n = this._hub.getClient();
    if (
      (n && n.emit && n.emit("finishTransaction", this), this.sampled !== !0)
    ) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.log(
          "[Tracing] Discarding transaction because its trace was not chosen to be sampled."
        ),
        n && n.recordDroppedEvent("sample_rate", "transaction");
      return;
    }
    const r = this.spanRecorder
      ? this.spanRecorder.spans.filter((a) => a !== this && a.endTimestamp)
      : [];
    this._trimEnd &&
      r.length > 0 &&
      (this.endTimestamp = r.reduce((a, c) =>
        a.endTimestamp && c.endTimestamp
          ? a.endTimestamp > c.endTimestamp
            ? a
            : c
          : a
      ).endTimestamp);
    const s = this.metadata,
      i = {
        contexts: { ...this._contexts, trace: this.getTraceContext() },
        spans: r,
        start_timestamp: this.startTimestamp,
        tags: this.tags,
        timestamp: this.endTimestamp,
        transaction: this.name,
        type: "transaction",
        sdkProcessingMetadata: {
          ...s,
          dynamicSamplingContext: this.getDynamicSamplingContext(),
        },
        ...(s.source && { transaction_info: { source: s.source } }),
      };
    return (
      Object.keys(this._measurements).length > 0 &&
        ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          m.log(
            "[Measurements] Adding measurements to transaction",
            JSON.stringify(this._measurements, void 0, 2)
          ),
        (i.measurements = this._measurements)),
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),
      i
    );
  }
}
const jt = { idleTimeout: 1e3, finalTimeout: 3e4, heartbeatInterval: 5e3 },
  fc = "finishReason",
  Ye = [
    "heartbeatFailed",
    "idleTimeout",
    "documentHidden",
    "finalTimeout",
    "externalFinish",
    "cancelled",
  ];
class hc extends Ei {
  constructor(t, n, r, s) {
    super(s),
      (this._pushActivity = t),
      (this._popActivity = n),
      (this.transactionSpanId = r);
  }
  add(t) {
    t.spanId !== this.transactionSpanId &&
      ((t.finish = (n) => {
        (t.endTimestamp = typeof n == "number" ? n : bt()),
          this._popActivity(t.spanId);
      }),
      t.endTimestamp === void 0 && this._pushActivity(t.spanId)),
      super.add(t);
  }
}
class pc extends Ti {
  constructor(
    t,
    n,
    r = jt.idleTimeout,
    s = jt.finalTimeout,
    i = jt.heartbeatInterval,
    o = !1
  ) {
    super(t, n),
      (this._idleHub = n),
      (this._idleTimeout = r),
      (this._finalTimeout = s),
      (this._heartbeatInterval = i),
      (this._onScope = o),
      (this.activities = {}),
      (this._heartbeatCounter = 0),
      (this._finished = !1),
      (this._idleTimeoutCanceledPermanently = !1),
      (this._beforeFinishCallbacks = []),
      (this._finishReason = Ye[4]),
      o &&
        ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          m.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),
        n.configureScope((a) => a.setSpan(this))),
      this._restartIdleTimeout(),
      setTimeout(() => {
        this._finished ||
          (this.setStatus("deadline_exceeded"),
          (this._finishReason = Ye[3]),
          this.finish());
      }, this._finalTimeout);
  }
  finish(t = bt()) {
    if (
      ((this._finished = !0),
      (this.activities = {}),
      this.op === "ui.action.click" && this.setTag(fc, this._finishReason),
      this.spanRecorder)
    ) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.log(
          "[Tracing] finishing IdleTransaction",
          new Date(t * 1e3).toISOString(),
          this.op
        );
      for (const n of this._beforeFinishCallbacks) n(this, t);
      (this.spanRecorder.spans = this.spanRecorder.spans.filter((n) => {
        if (n.spanId === this.spanId) return !0;
        n.endTimestamp ||
          ((n.endTimestamp = t),
          n.setStatus("cancelled"),
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            m.log(
              "[Tracing] cancelling span since transaction ended early",
              JSON.stringify(n, void 0, 2)
            ));
        const r = n.startTimestamp < t,
          s = (this._finalTimeout + this._idleTimeout) / 1e3,
          i = n.endTimestamp - this.startTimestamp < s;
        if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
          const o = JSON.stringify(n, void 0, 2);
          r
            ? i ||
              m.log(
                "[Tracing] discarding Span since it finished after Transaction final timeout",
                o
              )
            : m.log(
                "[Tracing] discarding Span since it happened after Transaction was finished",
                o
              );
        }
        return r && i;
      })),
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          m.log("[Tracing] flushing IdleTransaction");
    } else
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.log("[Tracing] No active IdleTransaction");
    if (this._onScope) {
      const n = this._idleHub.getScope();
      n.getTransaction() === this && n.setSpan(void 0);
    }
    return super.finish(t);
  }
  registerBeforeFinishCallback(t) {
    this._beforeFinishCallbacks.push(t);
  }
  initSpanRecorder(t) {
    if (!this.spanRecorder) {
      const n = (s) => {
          this._finished || this._pushActivity(s);
        },
        r = (s) => {
          this._finished || this._popActivity(s);
        };
      (this.spanRecorder = new hc(n, r, this.spanId, t)),
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          m.log("Starting heartbeat"),
        this._pingHeartbeat();
    }
    this.spanRecorder.add(this);
  }
  cancelIdleTimeout(
    t,
    { restartOnChildSpanChange: n } = { restartOnChildSpanChange: !0 }
  ) {
    (this._idleTimeoutCanceledPermanently = n === !1),
      this._idleTimeoutID &&
        (clearTimeout(this._idleTimeoutID),
        (this._idleTimeoutID = void 0),
        Object.keys(this.activities).length === 0 &&
          this._idleTimeoutCanceledPermanently &&
          ((this._finishReason = Ye[5]), this.finish(t)));
  }
  setFinishReason(t) {
    this._finishReason = t;
  }
  _restartIdleTimeout(t) {
    this.cancelIdleTimeout(),
      (this._idleTimeoutID = setTimeout(() => {
        !this._finished &&
          Object.keys(this.activities).length === 0 &&
          ((this._finishReason = Ye[1]), this.finish(t));
      }, this._idleTimeout));
  }
  _pushActivity(t) {
    this.cancelIdleTimeout(void 0, {
      restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently,
    }),
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.log(`[Tracing] pushActivity: ${t}`),
      (this.activities[t] = !0),
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.log(
          "[Tracing] new activities count",
          Object.keys(this.activities).length
        );
  }
  _popActivity(t) {
    if (
      (this.activities[t] &&
        ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          m.log(`[Tracing] popActivity ${t}`),
        delete this.activities[t],
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          m.log(
            "[Tracing] new activities count",
            Object.keys(this.activities).length
          )),
      Object.keys(this.activities).length === 0)
    ) {
      const n = bt();
      this._idleTimeoutCanceledPermanently
        ? ((this._finishReason = Ye[5]), this.finish(n))
        : this._restartIdleTimeout(n + this._idleTimeout / 1e3);
    }
  }
  _beat() {
    if (this._finished) return;
    const t = Object.keys(this.activities).join("");
    t === this._prevHeartbeatString
      ? this._heartbeatCounter++
      : (this._heartbeatCounter = 1),
      (this._prevHeartbeatString = t),
      this._heartbeatCounter >= 3
        ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            m.log(
              "[Tracing] Transaction finished because of no change for 3 heart beats"
            ),
          this.setStatus("deadline_exceeded"),
          (this._finishReason = Ye[0]),
          this.finish())
        : this._pingHeartbeat();
  }
  _pingHeartbeat() {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      m.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),
      setTimeout(() => {
        this._beat();
      }, this._heartbeatInterval);
  }
}
function br(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
  const t = x().getClient(),
    n = e || (t && t.getOptions());
  return (
    !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
  );
}
function bi(e, t, n) {
  if (!br(t)) return (e.sampled = !1), e;
  if (e.sampled !== void 0)
    return e.setMetadata({ sampleRate: Number(e.sampled) }), e;
  let r;
  return (
    typeof t.tracesSampler == "function"
      ? ((r = t.tracesSampler(n)), e.setMetadata({ sampleRate: Number(r) }))
      : n.parentSampled !== void 0
      ? (r = n.parentSampled)
      : typeof t.tracesSampleRate < "u"
      ? ((r = t.tracesSampleRate), e.setMetadata({ sampleRate: Number(r) }))
      : ((r = 1), e.setMetadata({ sampleRate: r })),
    mc(r)
      ? r
        ? ((e.sampled = Math.random() < r),
          e.sampled
            ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
                m.log(`[Tracing] starting ${e.op} transaction - ${e.name}`),
              e)
            : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
                m.log(
                  `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
                    r
                  )})`
                ),
              e))
        : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            m.log(
              `[Tracing] Discarding transaction because ${
                typeof t.tracesSampler == "function"
                  ? "tracesSampler returned 0 or false"
                  : "a negative sampling decision was inherited or tracesSampleRate is set to 0"
              }`
            ),
          (e.sampled = !1),
          e)
      : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          m.warn(
            "[Tracing] Discarding transaction because of invalid sample rate."
          ),
        (e.sampled = !1),
        e)
  );
}
function mc(e) {
  return ii(e) || !(typeof e == "number" || typeof e == "boolean")
    ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.warn(
          `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
            e
          )} of type ${JSON.stringify(typeof e)}.`
        ),
      !1)
    : e < 0 || e > 1
    ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.warn(
          `[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${e}.`
        ),
      !1)
    : !0;
}
function _c() {
  const t = this.getScope().getSpan();
  return t ? { "sentry-trace": t.toTraceparent() } : {};
}
function gc(e, t) {
  const n = this.getClient(),
    r = (n && n.getOptions()) || {},
    s = r.instrumenter || "sentry",
    i = e.instrumenter || "sentry";
  s !== i &&
    ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      m.error(`A transaction was started with instrumenter=\`${i}\`, but the SDK is configured with the \`${s}\` instrumenter.
The transaction will not be sampled. Please use the ${s} instrumentation to start transactions.`),
    (e.sampled = !1));
  let o = new Ti(e, this);
  return (
    (o = bi(o, r, {
      parentSampled: e.parentSampled,
      transactionContext: e,
      ...t,
    })),
    o.sampled && o.initSpanRecorder(r._experiments && r._experiments.maxSpans),
    n && n.emit && n.emit("startTransaction", o),
    o
  );
}
function ps(e, t, n, r, s, i, o) {
  const a = e.getClient(),
    c = (a && a.getOptions()) || {};
  let u = new pc(t, e, n, r, o, s);
  return (
    (u = bi(u, c, {
      parentSampled: t.parentSampled,
      transactionContext: t,
      ...i,
    })),
    u.sampled && u.initSpanRecorder(c._experiments && c._experiments.maxSpans),
    a && a.emit && a.emit("startTransaction", u),
    u
  );
}
function yc() {
  const e = Wo();
  e.__SENTRY__ &&
    ((e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}),
    e.__SENTRY__.extensions.startTransaction ||
      (e.__SENTRY__.extensions.startTransaction = gc),
    e.__SENTRY__.extensions.traceHeaders ||
      (e.__SENTRY__.extensions.traceHeaders = _c),
    dc());
}
function Sc(e, t) {
  return (
    t &&
      ((e.sdk = e.sdk || {}),
      (e.sdk.name = e.sdk.name || t.name),
      (e.sdk.version = e.sdk.version || t.version),
      (e.sdk.integrations = [
        ...(e.sdk.integrations || []),
        ...(t.integrations || []),
      ]),
      (e.sdk.packages = [...(e.sdk.packages || []), ...(t.packages || [])])),
    e
  );
}
function Ec(e, t, n, r) {
  const s = Er(n),
    i = {
      sent_at: new Date().toISOString(),
      ...(s && { sdk: s }),
      ...(!!r && t && { dsn: un(t) }),
    },
    o =
      "aggregates" in e
        ? [{ type: "sessions" }, e]
        : [{ type: "session" }, e.toJSON()];
  return st(i, [o]);
}
function Tc(e, t, n, r) {
  const s = Er(n),
    i = e.type && e.type !== "replay_event" ? e.type : "event";
  Sc(e, n && n.sdk);
  const o = gi(e, s, r, t);
  return delete e.sdkProcessingMetadata, st(o, [[{ type: i }, e]]);
}
const bc = "7";
function vc(e) {
  const t = e.protocol ? `${e.protocol}:` : "",
    n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function Rc(e) {
  return `${vc(e)}${e.projectId}/envelope/`;
}
function wc(e, t) {
  return jo({
    sentry_key: e.publicKey,
    sentry_version: bc,
    ...(t && { sentry_client: `${t.name}/${t.version}` }),
  });
}
function kc(e, t = {}) {
  const n = typeof t == "string" ? t : t.tunnel,
    r = typeof t == "string" || !t._metadata ? void 0 : t._metadata.sdk;
  return n || `${Rc(e)}?${wc(e, r)}`;
}
const ms = [];
function Ic(e) {
  const t = {};
  return (
    e.forEach((n) => {
      const { name: r } = n,
        s = t[r];
      (s && !s.isDefaultInstance && n.isDefaultInstance) || (t[r] = n);
    }),
    Object.keys(t).map((n) => t[n])
  );
}
function Dc(e) {
  const t = e.defaultIntegrations || [],
    n = e.integrations;
  t.forEach((o) => {
    o.isDefaultInstance = !0;
  });
  let r;
  Array.isArray(n)
    ? (r = [...t, ...n])
    : typeof n == "function"
    ? (r = qo(n(t)))
    : (r = t);
  const s = Ic(r),
    i = Cc(s, (o) => o.name === "Debug");
  if (i !== -1) {
    const [o] = s.splice(i, 1);
    s.push(o);
  }
  return s;
}
function Nc(e, t) {
  const n = {};
  return (
    t.forEach((r) => {
      r && vi(e, r, n);
    }),
    n
  );
}
function vi(e, t, n) {
  if (
    ((n[t.name] = t),
    ms.indexOf(t.name) === -1 && (t.setupOnce(ci, x), ms.push(t.name)),
    e.on && typeof t.preprocessEvent == "function")
  ) {
    const r = t.preprocessEvent.bind(t);
    e.on("preprocessEvent", (s, i) => r(s, i, e));
  }
  if (e.addEventProcessor && typeof t.processEvent == "function") {
    const r = t.processEvent.bind(t),
      s = Object.assign((i, o) => r(i, o, e), { id: t.name });
    e.addEventProcessor(s);
  }
  (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
    m.log(`Integration installed: ${t.name}`);
}
function Cc(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n]) === !0) return n;
  return -1;
}
function Ri(e, t, n, r, s) {
  const { normalizeDepth: i = 3, normalizeMaxBreadth: o = 1e3 } = e,
    a = {
      ...t,
      event_id: t.event_id || n.event_id || Re(),
      timestamp: t.timestamp || oi(),
    },
    c = n.integrations || e.integrations.map((f) => f.name);
  xc(a, e), Bc(a, c), t.type === void 0 && Mc(a, e.stackParser);
  let u = r;
  n.captureContext && (u = Ko.clone(u).update(n.captureContext));
  let d = Pe(a);
  const l = s && s.getEventProcessors ? s.getEventProcessors() : [];
  if (u) {
    if (u.getAttachments) {
      const f = [...(n.attachments || []), ...u.getAttachments()];
      f.length && (n.attachments = f);
    }
    d = u.applyToEvent(a, n, l);
  } else d = Xo([...l, ...Vo()], a, n);
  return d.then(
    (f) => (f && Oc(f), typeof i == "number" && i > 0 ? Ac(f, i, o) : f)
  );
}
function xc(e, t) {
  const { environment: n, release: r, dist: s, maxValueLength: i = 250 } = t;
  "environment" in e || (e.environment = "environment" in t ? n : ai),
    e.release === void 0 && r !== void 0 && (e.release = r),
    e.dist === void 0 && s !== void 0 && (e.dist = s),
    e.message && (e.message = Wt(e.message, i));
  const o = e.exception && e.exception.values && e.exception.values[0];
  o && o.value && (o.value = Wt(o.value, i));
  const a = e.request;
  a && a.url && (a.url = Wt(a.url, i));
}
const _s = new WeakMap();
function Mc(e, t) {
  const n = le._sentryDebugIds;
  if (!n) return;
  let r;
  const s = _s.get(t);
  s ? (r = s) : ((r = new Map()), _s.set(t, r));
  const i = Object.keys(n).reduce((o, a) => {
    let c;
    const u = r.get(a);
    u ? (c = u) : ((c = t(a)), r.set(a, c));
    for (let d = c.length - 1; d >= 0; d--) {
      const l = c[d];
      if (l.filename) {
        o[l.filename] = n[a];
        break;
      }
    }
    return o;
  }, {});
  try {
    e.exception.values.forEach((o) => {
      o.stacktrace.frames.forEach((a) => {
        a.filename && (a.debug_id = i[a.filename]);
      });
    });
  } catch {}
}
function Oc(e) {
  const t = {};
  try {
    e.exception.values.forEach((r) => {
      r.stacktrace.frames.forEach((s) => {
        s.debug_id &&
          (s.abs_path
            ? (t[s.abs_path] = s.debug_id)
            : s.filename && (t[s.filename] = s.debug_id),
          delete s.debug_id);
      });
    });
  } catch {}
  if (Object.keys(t).length === 0) return;
  (e.debug_meta = e.debug_meta || {}),
    (e.debug_meta.images = e.debug_meta.images || []);
  const n = e.debug_meta.images;
  Object.keys(t).forEach((r) => {
    n.push({ type: "sourcemap", code_file: r, debug_id: t[r] });
  });
}
function Bc(e, t) {
  t.length > 0 &&
    ((e.sdk = e.sdk || {}),
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
}
function Ac(e, t, n) {
  if (!e) return null;
  const r = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map((s) => ({
        ...s,
        ...(s.data && { data: ye(s.data, t, n) }),
      })),
    }),
    ...(e.user && { user: ye(e.user, t, n) }),
    ...(e.contexts && { contexts: ye(e.contexts, t, n) }),
    ...(e.extra && { extra: ye(e.extra, t, n) }),
  };
  return (
    e.contexts &&
      e.contexts.trace &&
      r.contexts &&
      ((r.contexts.trace = e.contexts.trace),
      e.contexts.trace.data &&
        (r.contexts.trace.data = ye(e.contexts.trace.data, t, n))),
    e.spans &&
      (r.spans = e.spans.map(
        (s) => (s.data && (s.data = ye(s.data, t, n)), s)
      )),
    r
  );
}
const gs = "Not capturing exception because it's already been captured.";
class Uc {
  constructor(t) {
    if (
      ((this._options = t),
      (this._integrations = {}),
      (this._integrationsInitialized = !1),
      (this._numProcessing = 0),
      (this._outcomes = {}),
      (this._hooks = {}),
      (this._eventProcessors = []),
      t.dsn
        ? (this._dsn = Ta(t.dsn))
        : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          m.warn("No DSN provided, client will not send events."),
      this._dsn)
    ) {
      const n = kc(this._dsn, t);
      this._transport = t.transport({
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: n,
      });
    }
  }
  captureException(t, n, r) {
    if (Vr(t)) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && m.log(gs);
      return;
    }
    let s = n && n.event_id;
    return (
      this._process(
        this.eventFromException(t, n)
          .then((i) => this._captureEvent(i, n, r))
          .then((i) => {
            s = i;
          })
      ),
      s
    );
  }
  captureMessage(t, n, r, s) {
    let i = r && r.event_id;
    const o = ui(t)
      ? this.eventFromMessage(String(t), n, r)
      : this.eventFromException(t, r);
    return (
      this._process(
        o
          .then((a) => this._captureEvent(a, r, s))
          .then((a) => {
            i = a;
          })
      ),
      i
    );
  }
  captureEvent(t, n, r) {
    if (n && n.originalException && Vr(n.originalException)) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && m.log(gs);
      return;
    }
    let s = n && n.event_id;
    return (
      this._process(
        this._captureEvent(t, n, r).then((i) => {
          s = i;
        })
      ),
      s
    );
  }
  captureSession(t) {
    typeof t.release != "string"
      ? (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.warn("Discarded session because of missing or non-string release")
      : (this.sendSession(t), Jr(t, { init: !1 }));
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  flush(t) {
    const n = this._transport;
    return n
      ? this._isClientDoneProcessing(t).then((r) =>
          n.flush(t).then((s) => r && s)
        )
      : Pe(!0);
  }
  close(t) {
    return this.flush(t).then((n) => ((this.getOptions().enabled = !1), n));
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(t) {
    this._eventProcessors.push(t);
  }
  setupIntegrations(t) {
    ((t && !this._integrationsInitialized) ||
      (this._isEnabled() && !this._integrationsInitialized)) &&
      ((this._integrations = Nc(this, this._options.integrations)),
      (this._integrationsInitialized = !0));
  }
  getIntegrationById(t) {
    return this._integrations[t];
  }
  getIntegration(t) {
    try {
      return this._integrations[t.id] || null;
    } catch {
      return (
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          m.warn(`Cannot retrieve integration ${t.id} from the current Client`),
        null
      );
    }
  }
  addIntegration(t) {
    vi(this, t, this._integrations);
  }
  sendEvent(t, n = {}) {
    this.emit("beforeSendEvent", t, n);
    let r = Tc(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const i of n.attachments || [])
      r = tc(
        r,
        sc(
          i,
          this._options.transportOptions &&
            this._options.transportOptions.textEncoder
        )
      );
    const s = this._sendEnvelope(r);
    s && s.then((i) => this.emit("afterSendEvent", t, i), null);
  }
  sendSession(t) {
    const n = Ec(t, this._dsn, this._options._metadata, this._options.tunnel);
    this._sendEnvelope(n);
  }
  recordDroppedEvent(t, n, r) {
    if (this._options.sendClientReports) {
      const s = `${t}:${n}`;
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.log(`Adding outcome: "${s}"`),
        (this._outcomes[s] = this._outcomes[s] + 1 || 1);
    }
  }
  on(t, n) {
    this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(n);
  }
  emit(t, ...n) {
    this._hooks[t] && this._hooks[t].forEach((r) => r(...n));
  }
  _updateSessionFromEvent(t, n) {
    let r = !1,
      s = !1;
    const i = n.exception && n.exception.values;
    if (i) {
      s = !0;
      for (const c of i) {
        const u = c.mechanism;
        if (u && u.handled === !1) {
          r = !0;
          break;
        }
      }
    }
    const o = t.status === "ok";
    ((o && t.errors === 0) || (o && r)) &&
      (Jr(t, {
        ...(r && { status: "crashed" }),
        errors: t.errors || Number(s || r),
      }),
      this.captureSession(t));
  }
  _isClientDoneProcessing(t) {
    return new pr((n) => {
      let r = 0;
      const s = 1,
        i = setInterval(() => {
          this._numProcessing == 0
            ? (clearInterval(i), n(!0))
            : ((r += s), t && r >= t && (clearInterval(i), n(!1)));
        }, s);
    });
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0;
  }
  _prepareEvent(t, n, r) {
    const s = this.getOptions(),
      i = Object.keys(this._integrations);
    return (
      !n.integrations && i.length > 0 && (n.integrations = i),
      this.emit("preprocessEvent", t, n),
      Ri(s, t, n, r, this).then((o) => {
        if (o === null) return o;
        const { propagationContext: a } = o.sdkProcessingMetadata || {};
        if (!(o.contexts && o.contexts.trace) && a) {
          const { traceId: u, spanId: d, parentSpanId: l, dsc: f } = a;
          o.contexts = {
            trace: { trace_id: u, span_id: d, parent_span_id: l },
            ...o.contexts,
          };
          const h = f || dn(u, this, r);
          o.sdkProcessingMetadata = {
            dynamicSamplingContext: h,
            ...o.sdkProcessingMetadata,
          };
        }
        return o;
      })
    );
  }
  _captureEvent(t, n = {}, r) {
    return this._processEvent(t, n, r).then(
      (s) => s.event_id,
      (s) => {
        if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
          const i = s;
          i.logLevel === "log" ? m.log(i.message) : m.warn(i);
        }
      }
    );
  }
  _processEvent(t, n, r) {
    const s = this.getOptions(),
      { sampleRate: i } = s,
      o = ki(t),
      a = wi(t),
      c = t.type || "error",
      u = `before send for type \`${c}\``;
    if (a && typeof i == "number" && Math.random() > i)
      return (
        this.recordDroppedEvent("sample_rate", "error", t),
        hr(
          new Se(
            `Discarding event because it's not included in the random sample (sampling rate = ${i})`,
            "log"
          )
        )
      );
    const d = c === "replay_event" ? "replay" : c;
    return this._prepareEvent(t, n, r)
      .then((l) => {
        if (l === null)
          throw (
            (this.recordDroppedEvent("event_processor", d, t),
            new Se(
              "An event processor returned `null`, will not send event.",
              "log"
            ))
          );
        if (n.data && n.data.__sentry__ === !0) return l;
        const h = Pc(s, l, n);
        return Lc(h, u);
      })
      .then((l) => {
        if (l === null)
          throw (
            (this.recordDroppedEvent("before_send", d, t),
            new Se(`${u} returned \`null\`, will not send event.`, "log"))
          );
        const f = r && r.getSession();
        !o && f && this._updateSessionFromEvent(f, l);
        const h = l.transaction_info;
        if (o && h && l.transaction !== t.transaction) {
          const p = "custom";
          l.transaction_info = { ...h, source: p };
        }
        return this.sendEvent(l, n), l;
      })
      .then(null, (l) => {
        throw l instanceof Se
          ? l
          : (this.captureException(l, {
              data: { __sentry__: !0 },
              originalException: l,
            }),
            new Se(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${l}`));
      });
  }
  _process(t) {
    this._numProcessing++,
      t.then(
        (n) => (this._numProcessing--, n),
        (n) => (this._numProcessing--, n)
      );
  }
  _sendEnvelope(t) {
    if ((this.emit("beforeEnvelope", t), this._isEnabled() && this._transport))
      return this._transport.send(t).then(null, (n) => {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          m.error("Error while sending event:", n);
      });
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      m.error("Transport disabled");
  }
  _clearOutcomes() {
    const t = this._outcomes;
    return (
      (this._outcomes = {}),
      Object.keys(t).map((n) => {
        const [r, s] = n.split(":");
        return { reason: r, category: s, quantity: t[n] };
      })
    );
  }
}
function Lc(e, t) {
  const n = `${t} must return \`null\` or a valid event.`;
  if (Jo(e))
    return e.then(
      (r) => {
        if (!Fn(r) && r !== null) throw new Se(n);
        return r;
      },
      (r) => {
        throw new Se(`${t} rejected with ${r}`);
      }
    );
  if (!Fn(e) && e !== null) throw new Se(n);
  return e;
}
function Pc(e, t, n) {
  const { beforeSend: r, beforeSendTransaction: s } = e;
  return wi(t) && r ? r(t, n) : ki(t) && s ? s(t, n) : t;
}
function wi(e) {
  return e.type === void 0;
}
function ki(e) {
  return e.type === "transaction";
}
function Fc(e, t) {
  t.debug === !0 &&
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
      ? m.enable()
      : console.warn(
          "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
        ));
  const n = x();
  n.getScope().update(t.initialScope);
  const s = new e(t);
  n.bindClient(s);
}
const Gc = 30;
function Ii(e, t, n = Wa(e.bufferSize || Gc)) {
  let r = {};
  const s = (o) => n.drain(o);
  function i(o) {
    const a = [];
    if (
      (ls(o, (l, f) => {
        const h = fs(f);
        if (yi(r, h)) {
          const p = ys(l, f);
          e.recordDroppedEvent("ratelimit_backoff", h, p);
        } else a.push(l);
      }),
      a.length === 0)
    )
      return Pe();
    const c = st(o[0], a),
      u = (l) => {
        ls(c, (f, h) => {
          const p = ys(f, h);
          e.recordDroppedEvent(l, fs(h), p);
        });
      },
      d = () =>
        t({ body: nc(c, e.textEncoder) }).then(
          (l) => (
            l.statusCode !== void 0 &&
              (l.statusCode < 200 || l.statusCode >= 300) &&
              (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
              m.warn(
                `Sentry responded with status code ${l.statusCode} to sent event.`
              ),
            (r = Si(r, l)),
            l
          ),
          (l) => {
            throw (u("network_error"), l);
          }
        );
    return n.add(d).then(
      (l) => l,
      (l) => {
        if (l instanceof Se)
          return (
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
              m.error("Skipped sending event because buffer is full."),
            u("queue_overflow"),
            Pe()
          );
        throw l;
      }
    );
  }
  return (i.__sentry__baseTransport__ = !0), { send: i, flush: s };
}
function ys(e, t) {
  if (!(t !== "event" && t !== "transaction"))
    return Array.isArray(e) ? e[1] : void 0;
}
const Ss = "7.81.1";
let Es;
class ln {
  static __initStatic() {
    this.id = "FunctionToString";
  }
  constructor() {
    this.name = ln.id;
  }
  setupOnce() {
    Es = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...t) {
        const n = mr(this) || this;
        return Es.apply(n, t);
      };
    } catch {}
  }
}
ln.__initStatic();
const $c = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
  ],
  Yc = [
    /^.*\/healthcheck$/,
    /^.*\/healthy$/,
    /^.*\/live$/,
    /^.*\/ready$/,
    /^.*\/heartbeat$/,
    /^.*\/health$/,
    /^.*\/healthz$/,
  ];
class fn {
  static __initStatic() {
    this.id = "InboundFilters";
  }
  constructor(t = {}) {
    (this.name = fn.id), (this._options = t);
  }
  setupOnce(t, n) {}
  processEvent(t, n, r) {
    const s = r.getOptions(),
      i = Hc(this._options, s);
    return zc(t, i) ? null : t;
  }
}
fn.__initStatic();
function Hc(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : $c),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
      ...(e.disableTransactionDefaults ? [] : Yc),
    ],
    ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0,
  };
}
function zc(e, t) {
  return t.ignoreInternal && Vc(e)
    ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.warn(`Event dropped due to being internal Sentry Error.
Event: ${xe(e)}`),
      !0)
    : Wc(e, t.ignoreErrors)
    ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${xe(e)}`),
      !0)
    : jc(e, t.ignoreTransactions)
    ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${xe(e)}`),
      !0)
    : qc(e, t.denyUrls)
    ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${xe(e)}.
Url: ${Kt(e)}`),
      !0)
    : Kc(e, t.allowUrls)
    ? !1
    : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${xe(e)}.
Url: ${Kt(e)}`),
      !0);
}
function Wc(e, t) {
  return e.type || !t || !t.length ? !1 : Xc(e).some((n) => rt(n, t));
}
function jc(e, t) {
  if (e.type !== "transaction" || !t || !t.length) return !1;
  const n = e.transaction;
  return n ? rt(n, t) : !1;
}
function qc(e, t) {
  if (!t || !t.length) return !1;
  const n = Kt(e);
  return n ? rt(n, t) : !1;
}
function Kc(e, t) {
  if (!t || !t.length) return !0;
  const n = Kt(e);
  return n ? rt(n, t) : !0;
}
function Xc(e) {
  const t = [];
  e.message && t.push(e.message);
  let n;
  try {
    n = e.exception.values[e.exception.values.length - 1];
  } catch {}
  return (
    n &&
      n.value &&
      (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`)),
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      t.length === 0 &&
      m.error(`Could not extract message for event ${xe(e)}`),
    t
  );
}
function Vc(e) {
  try {
    return e.exception.values[0].type === "SentryError";
  } catch {}
  return !1;
}
function Jc(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const n = e[t];
    if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
      return n.filename || null;
  }
  return null;
}
function Kt(e) {
  try {
    let t;
    try {
      t = e.exception.values[0].stacktrace.frames;
    } catch {}
    return t ? Jc(t) : null;
  } catch {
    return (
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.error(`Cannot extract url for event ${xe(e)}`),
      null
    );
  }
}
function Qc(e, t) {
  const n = t.getClient(),
    r = n && n.getDsn(),
    s = n && n.getOptions().tunnel;
  return eu(e, r) || Zc(e, s);
}
function Zc(e, t) {
  return t ? Ts(e) === Ts(t) : !1;
}
function eu(e, t) {
  return t ? e.includes(t.host) : !1;
}
function Ts(e) {
  return e[e.length - 1] === "/" ? e.slice(0, -1) : e;
}
const M = le;
let Qn = 0;
function Di() {
  return Qn > 0;
}
function tu() {
  Qn++,
    setTimeout(() => {
      Qn--;
    });
}
function Qe(e, t = {}, n) {
  if (typeof e != "function") return e;
  try {
    const s = e.__sentry_wrapped__;
    if (s) return s;
    if (mr(e)) return e;
  } catch {
    return e;
  }
  const r = function () {
    const s = Array.prototype.slice.call(arguments);
    try {
      n && typeof n == "function" && n.apply(this, arguments);
      const i = s.map((o) => Qe(o, t));
      return e.apply(this, i);
    } catch (i) {
      throw (
        (tu(),
        Zo((o) => {
          o.addEventProcessor(
            (a) => (
              t.mechanism && (Gn(a, void 0, void 0), vt(a, t.mechanism)),
              (a.extra = { ...a.extra, arguments: s }),
              a
            )
          ),
            _r(i);
        }),
        i)
      );
    }
  };
  try {
    for (const s in e)
      Object.prototype.hasOwnProperty.call(e, s) && (r[s] = e[s]);
  } catch {}
  Qo(r, e), Pn(e, "__sentry_wrapped__", r);
  try {
    Object.getOwnPropertyDescriptor(r, "name").configurable &&
      Object.defineProperty(r, "name", {
        get() {
          return e.name;
        },
      });
  } catch {}
  return r;
}
function Ni(e, t) {
  const n = vr(e, t),
    r = { type: t && t.name, value: iu(t) };
  return (
    n.length && (r.stacktrace = { frames: n }),
    r.type === void 0 &&
      r.value === "" &&
      (r.value = "Unrecoverable error caught"),
    r
  );
}
function nu(e, t, n, r) {
  const i = x().getClient(),
    o = i && i.getOptions().normalizeDepth,
    a = {
      exception: {
        values: [
          {
            type: yr(t)
              ? t.constructor.name
              : r
              ? "UnhandledRejection"
              : "Error",
            value: cu(t, { isUnhandledRejection: r }),
          },
        ],
      },
      extra: { __serialized__: mi(t, o) },
    };
  if (n) {
    const c = vr(e, n);
    c.length && (a.exception.values[0].stacktrace = { frames: c });
  }
  return a;
}
function Mn(e, t) {
  return { exception: { values: [Ni(e, t)] } };
}
function vr(e, t) {
  const n = t.stacktrace || t.stack || "",
    r = su(t);
  try {
    return e(n, r);
  } catch {}
  return [];
}
const ru = /Minified React error #\d+;/i;
function su(e) {
  if (e) {
    if (typeof e.framesToPop == "number") return e.framesToPop;
    if (ru.test(e.message)) return 1;
  }
  return 0;
}
function iu(e) {
  const t = e && e.message;
  return t
    ? t.error && typeof t.error.message == "string"
      ? t.error.message
      : t
    : "No error message";
}
function ou(e, t, n, r) {
  const s = (n && n.syntheticException) || void 0,
    i = Rr(e, t, s, r);
  return (
    vt(i),
    (i.level = "error"),
    n && n.event_id && (i.event_id = n.event_id),
    Pe(i)
  );
}
function au(e, t, n = "info", r, s) {
  const i = (r && r.syntheticException) || void 0,
    o = Zn(e, t, i, s);
  return (o.level = n), r && r.event_id && (o.event_id = r.event_id), Pe(o);
}
function Rr(e, t, n, r, s) {
  let i;
  if (gr(t) && t.error) return Mn(e, t.error);
  if (Qr(t) || ea(t)) {
    const o = t;
    if ("stack" in t) i = Mn(e, t);
    else {
      const a = o.name || (Qr(o) ? "DOMError" : "DOMException"),
        c = o.message ? `${a}: ${o.message}` : a;
      (i = Zn(e, c, n, r)), Gn(i, c);
    }
    return (
      "code" in o && (i.tags = { ...i.tags, "DOMException.code": `${o.code}` }),
      i
    );
  }
  return ta(t)
    ? Mn(e, t)
    : Fn(t) || yr(t)
    ? ((i = nu(e, t, n, s)), vt(i, { synthetic: !0 }), i)
    : ((i = Zn(e, t, n, r)),
      Gn(i, `${t}`, void 0),
      vt(i, { synthetic: !0 }),
      i);
}
function Zn(e, t, n, r) {
  const s = { message: t };
  if (r && n) {
    const i = vr(e, n);
    i.length &&
      (s.exception = { values: [{ value: t, stacktrace: { frames: i } }] });
  }
  return s;
}
function cu(e, { isUnhandledRejection: t }) {
  const n = na(e),
    r = t ? "promise rejection" : "exception";
  return gr(e)
    ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``
    : yr(e)
    ? `Event \`${uu(e)}\` (type=${e.type}) captured as ${r}`
    : `Object captured as ${r} with keys: ${n}`;
}
function uu(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : void 0;
  } catch {}
}
function du(e, { metadata: t, tunnel: n, dsn: r }) {
  const s = {
      event_id: e.event_id,
      sent_at: new Date().toISOString(),
      ...(t && t.sdk && { sdk: { name: t.sdk.name, version: t.sdk.version } }),
      ...(!!n && !!r && { dsn: un(r) }),
    },
    i = lu(e);
  return st(s, [i]);
}
function lu(e) {
  return [{ type: "user_report" }, e];
}
class fu extends Uc {
  constructor(t) {
    const n = M.SENTRY_SDK_SOURCE || ra();
    (t._metadata = t._metadata || {}),
      (t._metadata.sdk = t._metadata.sdk || {
        name: "sentry.javascript.browser",
        packages: [{ name: `${n}:@sentry/browser`, version: Ss }],
        version: Ss,
      }),
      super(t),
      t.sendClientReports &&
        M.document &&
        M.document.addEventListener("visibilitychange", () => {
          M.document.visibilityState === "hidden" && this._flushOutcomes();
        });
  }
  eventFromException(t, n) {
    return ou(this._options.stackParser, t, n, this._options.attachStacktrace);
  }
  eventFromMessage(t, n = "info", r) {
    return au(
      this._options.stackParser,
      t,
      n,
      r,
      this._options.attachStacktrace
    );
  }
  captureUserFeedback(t) {
    if (!this._isEnabled()) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.warn("SDK not enabled, will not capture user feedback.");
      return;
    }
    const n = du(t, {
      metadata: this.getSdkMetadata(),
      dsn: this.getDsn(),
      tunnel: this.getOptions().tunnel,
    });
    this._sendEnvelope(n);
  }
  _prepareEvent(t, n, r) {
    return (
      (t.platform = t.platform || "javascript"), super._prepareEvent(t, n, r)
    );
  }
  _flushOutcomes() {
    const t = this._clearOutcomes();
    if (t.length === 0) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.log("No outcomes to send");
      return;
    }
    if (!this._dsn) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.log("No dsn provided, will not send outcomes");
      return;
    }
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      m.log("Sending outcomes:", t);
    const n = oc(t, this._options.tunnel && un(this._dsn));
    this._sendEnvelope(n);
  }
}
let ht;
function hu() {
  if (ht) return ht;
  if (Hn(M.fetch)) return (ht = M.fetch.bind(M));
  const e = M.document;
  let t = M.fetch;
  if (e && typeof e.createElement == "function")
    try {
      const n = e.createElement("iframe");
      (n.hidden = !0), e.head.appendChild(n);
      const r = n.contentWindow;
      r && r.fetch && (t = r.fetch), e.head.removeChild(n);
    } catch (n) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n
        );
    }
  return (ht = t.bind(M));
}
function pu() {
  ht = void 0;
}
function mu(e, t = hu()) {
  let n = 0,
    r = 0;
  function s(i) {
    const o = i.body.length;
    (n += o), r++;
    const a = {
      body: i.body,
      method: "POST",
      referrerPolicy: "origin",
      headers: e.headers,
      keepalive: n <= 6e4 && r < 15,
      ...e.fetchOptions,
    };
    try {
      return t(e.url, a).then(
        (c) => (
          (n -= o),
          r--,
          {
            statusCode: c.status,
            headers: {
              "x-sentry-rate-limits": c.headers.get("X-Sentry-Rate-Limits"),
              "retry-after": c.headers.get("Retry-After"),
            },
          }
        )
      );
    } catch (c) {
      return pu(), (n -= o), r--, hr(c);
    }
  }
  return Ii(e, s);
}
const _u = 4;
function gu(e) {
  function t(n) {
    return new pr((r, s) => {
      const i = new XMLHttpRequest();
      (i.onerror = s),
        (i.onreadystatechange = () => {
          i.readyState === _u &&
            r({
              statusCode: i.status,
              headers: {
                "x-sentry-rate-limits": i.getResponseHeader(
                  "X-Sentry-Rate-Limits"
                ),
                "retry-after": i.getResponseHeader("Retry-After"),
              },
            });
        }),
        i.open("POST", e.url);
      for (const o in e.headers)
        Object.prototype.hasOwnProperty.call(e.headers, o) &&
          i.setRequestHeader(o, e.headers[o]);
      i.send(n.body);
    });
  }
  return Ii(e, t);
}
const hn = "?",
  yu = 30,
  Su = 40,
  Eu = 50;
function wr(e, t, n, r) {
  const s = { filename: e, function: t, in_app: !0 };
  return n !== void 0 && (s.lineno = n), r !== void 0 && (s.colno = r), s;
}
const Tu =
    /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  bu = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  vu = (e) => {
    const t = Tu.exec(e);
    if (t) {
      if (t[2] && t[2].indexOf("eval") === 0) {
        const i = bu.exec(t[2]);
        i && ((t[2] = i[1]), (t[3] = i[2]), (t[4] = i[3]));
      }
      const [r, s] = Ci(t[1] || hn, t[2]);
      return wr(s, r, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0);
    }
  },
  Ru = [yu, vu],
  wu =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  ku = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
  Iu = (e) => {
    const t = wu.exec(e);
    if (t) {
      if (t[3] && t[3].indexOf(" > eval") > -1) {
        const i = ku.exec(t[3]);
        i &&
          ((t[1] = t[1] || "eval"), (t[3] = i[1]), (t[4] = i[2]), (t[5] = ""));
      }
      let r = t[3],
        s = t[1] || hn;
      return (
        ([s, r] = Ci(s, r)),
        wr(r, s, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
      );
    }
  },
  Du = [Eu, Iu],
  Nu =
    /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
  Cu = (e) => {
    const t = Nu.exec(e);
    return t ? wr(t[2], t[1] || hn, +t[3], t[4] ? +t[4] : void 0) : void 0;
  },
  xu = [Su, Cu],
  Mu = [Ru, Du, xu],
  Ou = hi(...Mu),
  Ci = (e, t) => {
    const n = e.indexOf("safari-extension") !== -1,
      r = e.indexOf("safari-web-extension") !== -1;
    return n || r
      ? [
          e.indexOf("@") !== -1 ? e.split("@")[0] : hn,
          n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
        ]
      : [e, t];
  };
class it {
  static __initStatic() {
    this.id = "GlobalHandlers";
  }
  constructor(t) {
    (this.name = it.id),
      (this._options = { onerror: !0, onunhandledrejection: !0, ...t }),
      (this._installFunc = { onerror: Bu, onunhandledrejection: Au });
  }
  setupOnce() {
    Error.stackTraceLimit = 50;
    const t = this._options;
    for (const n in t) {
      const r = this._installFunc[n];
      r && t[n] && (Pu(n), r(), (this._installFunc[n] = void 0));
    }
  }
}
it.__initStatic();
function Bu() {
  ee("error", (e) => {
    const [t, n, r] = Oi();
    if (!t.getIntegration(it)) return;
    const { msg: s, url: i, line: o, column: a, error: c } = e;
    if (Di() || (c && c.__sentry_own_request__)) return;
    const u =
      c === void 0 && Tt(s)
        ? Lu(s, i, o, a)
        : xi(Rr(n, c || s, void 0, r, !1), i, o, a);
    (u.level = "error"), Mi(t, c, u, "onerror");
  });
}
function Au() {
  ee("unhandledrejection", (e) => {
    const [t, n, r] = Oi();
    if (!t.getIntegration(it)) return;
    let s = e;
    try {
      "reason" in e
        ? (s = e.reason)
        : "detail" in e && "reason" in e.detail && (s = e.detail.reason);
    } catch {}
    if (Di() || (s && s.__sentry_own_request__)) return !0;
    const i = ui(s) ? Uu(s) : Rr(n, s, void 0, r, !0);
    (i.level = "error"), Mi(t, s, i, "onunhandledrejection");
  });
}
function Uu(e) {
  return {
    exception: {
      values: [
        {
          type: "UnhandledRejection",
          value: `Non-Error promise rejection captured with value: ${String(
            e
          )}`,
        },
      ],
    },
  };
}
function Lu(e, t, n, r) {
  const s =
    /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
  let i = gr(e) ? e.message : e,
    o = "Error";
  const a = i.match(s);
  return (
    a && ((o = a[1]), (i = a[2])),
    xi({ exception: { values: [{ type: o, value: i }] } }, t, n, r)
  );
}
function xi(e, t, n, r) {
  const s = (e.exception = e.exception || {}),
    i = (s.values = s.values || []),
    o = (i[0] = i[0] || {}),
    a = (o.stacktrace = o.stacktrace || {}),
    c = (a.frames = a.frames || []),
    u = isNaN(parseInt(r, 10)) ? void 0 : r,
    d = isNaN(parseInt(n, 10)) ? void 0 : n,
    l = Tt(t) && t.length > 0 ? t : sa();
  return (
    c.length === 0 &&
      c.push({ colno: u, filename: l, function: "?", in_app: !0, lineno: d }),
    e
  );
}
function Pu(e) {
  (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
    m.log(`Global Handler attached: ${e}`);
}
function Mi(e, t, n, r) {
  vt(n, { handled: !1, type: r }), e.captureEvent(n, { originalException: t });
}
function Oi() {
  const e = x(),
    t = e.getClient(),
    n = (t && t.getOptions()) || {
      stackParser: () => [],
      attachStacktrace: !1,
    };
  return [e, n.stackParser, n.attachStacktrace];
}
const Fu = [
  "EventTarget",
  "Window",
  "Node",
  "ApplicationCache",
  "AudioTrackList",
  "BroadcastChannel",
  "ChannelMergerNode",
  "CryptoOperation",
  "EventSource",
  "FileReader",
  "HTMLUnknownElement",
  "IDBDatabase",
  "IDBRequest",
  "IDBTransaction",
  "KeyOperation",
  "MediaController",
  "MessagePort",
  "ModalWindow",
  "Notification",
  "SVGElementInstance",
  "Screen",
  "SharedWorker",
  "TextTrack",
  "TextTrackCue",
  "TextTrackList",
  "WebSocket",
  "WebSocketWorker",
  "Worker",
  "XMLHttpRequest",
  "XMLHttpRequestEventTarget",
  "XMLHttpRequestUpload",
];
class pn {
  static __initStatic() {
    this.id = "TryCatch";
  }
  constructor(t) {
    (this.name = pn.id),
      (this._options = {
        XMLHttpRequest: !0,
        eventTarget: !0,
        requestAnimationFrame: !0,
        setInterval: !0,
        setTimeout: !0,
        ...t,
      });
  }
  setupOnce() {
    this._options.setTimeout && Z(M, "setTimeout", bs),
      this._options.setInterval && Z(M, "setInterval", bs),
      this._options.requestAnimationFrame && Z(M, "requestAnimationFrame", Gu),
      this._options.XMLHttpRequest &&
        "XMLHttpRequest" in M &&
        Z(XMLHttpRequest.prototype, "send", $u);
    const t = this._options.eventTarget;
    t && (Array.isArray(t) ? t : Fu).forEach(Yu);
  }
}
pn.__initStatic();
function bs(e) {
  return function (...t) {
    const n = t[0];
    return (
      (t[0] = Qe(n, {
        mechanism: {
          data: { function: we(e) },
          handled: !1,
          type: "instrument",
        },
      })),
      e.apply(this, t)
    );
  };
}
function Gu(e) {
  return function (t) {
    return e.apply(this, [
      Qe(t, {
        mechanism: {
          data: { function: "requestAnimationFrame", handler: we(e) },
          handled: !1,
          type: "instrument",
        },
      }),
    ]);
  };
}
function $u(e) {
  return function (...t) {
    const n = this;
    return (
      ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((s) => {
        s in n &&
          typeof n[s] == "function" &&
          Z(n, s, function (i) {
            const o = {
                mechanism: {
                  data: { function: s, handler: we(i) },
                  handled: !1,
                  type: "instrument",
                },
              },
              a = mr(i);
            return a && (o.mechanism.data.handler = we(a)), Qe(i, o);
          });
      }),
      e.apply(this, t)
    );
  };
}
function Yu(e) {
  const t = M,
    n = t[e] && t[e].prototype;
  !n ||
    !n.hasOwnProperty ||
    !n.hasOwnProperty("addEventListener") ||
    (Z(n, "addEventListener", function (r) {
      return function (s, i, o) {
        try {
          typeof i.handleEvent == "function" &&
            (i.handleEvent = Qe(i.handleEvent, {
              mechanism: {
                data: { function: "handleEvent", handler: we(i), target: e },
                handled: !1,
                type: "instrument",
              },
            }));
        } catch {}
        return r.apply(this, [
          s,
          Qe(i, {
            mechanism: {
              data: { function: "addEventListener", handler: we(i), target: e },
              handled: !1,
              type: "instrument",
            },
          }),
          o,
        ]);
      };
    }),
    Z(n, "removeEventListener", function (r) {
      return function (s, i, o) {
        const a = i;
        try {
          const c = a && a.__sentry_wrapped__;
          c && r.call(this, s, c, o);
        } catch {}
        return r.call(this, s, a, o);
      };
    }));
}
const Ut = 1024;
class mn {
  static __initStatic() {
    this.id = "Breadcrumbs";
  }
  constructor(t) {
    (this.name = mn.id),
      (this.options = {
        console: !0,
        dom: !0,
        fetch: !0,
        history: !0,
        sentry: !0,
        xhr: !0,
        ...t,
      });
  }
  setupOnce() {
    if (
      (this.options.console && ee("console", Wu),
      this.options.dom && ee("dom", zu(this.options.dom)),
      this.options.xhr && ee("xhr", ju),
      this.options.fetch && ee("fetch", qu),
      this.options.history && ee("history", Ku),
      this.options.sentry)
    ) {
      const t = x().getClient();
      t && t.on && t.on("beforeSendEvent", Hu);
    }
  }
}
mn.__initStatic();
function Hu(e) {
  x().addBreadcrumb(
    {
      category: `sentry.${e.type === "transaction" ? "transaction" : "event"}`,
      event_id: e.event_id,
      level: e.level,
      message: xe(e),
    },
    { event: e }
  );
}
function zu(e) {
  function t(n) {
    let r,
      s = typeof e == "object" ? e.serializeAttribute : void 0,
      i =
        typeof e == "object" && typeof e.maxStringLength == "number"
          ? e.maxStringLength
          : void 0;
    i &&
      i > Ut &&
      ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.warn(
          `\`dom.maxStringLength\` cannot exceed ${Ut}, but a value of ${i} was configured. Sentry will use ${Ut} instead.`
        ),
      (i = Ut)),
      typeof s == "string" && (s = [s]);
    try {
      const o = n.event;
      r = Xu(o)
        ? Fe(o.target, { keyAttrs: s, maxStringLength: i })
        : Fe(o, { keyAttrs: s, maxStringLength: i });
    } catch {
      r = "<unknown>";
    }
    r.length !== 0 &&
      x().addBreadcrumb(
        { category: `ui.${n.name}`, message: r },
        { event: n.event, name: n.name, global: n.global }
      );
  }
  return t;
}
function Wu(e) {
  const t = {
    category: "console",
    data: { arguments: e.args, logger: "console" },
    level: qa(e.level),
    message: Zr(e.args, " "),
  };
  if (e.level === "assert")
    if (e.args[0] === !1)
      (t.message = `Assertion failed: ${
        Zr(e.args.slice(1), " ") || "console.assert"
      }`),
        (t.data.arguments = e.args.slice(1));
    else return;
  x().addBreadcrumb(t, { input: e.args, level: e.level });
}
function ju(e) {
  const { startTimestamp: t, endTimestamp: n } = e,
    r = e.xhr[Me];
  if (!t || !n || !r) return;
  const { method: s, url: i, status_code: o, body: a } = r,
    c = { method: s, url: i, status_code: o },
    u = { xhr: e.xhr, input: a, startTimestamp: t, endTimestamp: n };
  x().addBreadcrumb({ category: "xhr", data: c, type: "http" }, u);
}
function qu(e) {
  const { startTimestamp: t, endTimestamp: n } = e;
  if (
    n &&
    !(e.fetchData.url.match(/sentry_key/) && e.fetchData.method === "POST")
  )
    if (e.error) {
      const r = e.fetchData,
        s = {
          data: e.error,
          input: e.args,
          startTimestamp: t,
          endTimestamp: n,
        };
      x().addBreadcrumb(
        { category: "fetch", data: r, level: "error", type: "http" },
        s
      );
    } else {
      const r = {
          ...e.fetchData,
          status_code: e.response && e.response.status,
        },
        s = {
          input: e.args,
          response: e.response,
          startTimestamp: t,
          endTimestamp: n,
        };
      x().addBreadcrumb({ category: "fetch", data: r, type: "http" }, s);
    }
}
function Ku(e) {
  let t = e.from,
    n = e.to;
  const r = xn(M.location.href);
  let s = xn(t);
  const i = xn(n);
  s.path || (s = r),
    r.protocol === i.protocol && r.host === i.host && (n = i.relative),
    r.protocol === s.protocol && r.host === s.host && (t = s.relative),
    x().addBreadcrumb({ category: "navigation", data: { from: t, to: n } });
}
function Xu(e) {
  return !!e && !!e.target;
}
const Vu = "cause",
  Ju = 5;
class _n {
  static __initStatic() {
    this.id = "LinkedErrors";
  }
  constructor(t = {}) {
    (this.name = _n.id),
      (this._key = t.key || Vu),
      (this._limit = t.limit || Ju);
  }
  setupOnce() {}
  preprocessEvent(t, n, r) {
    const s = r.getOptions();
    ma(Ni, s.stackParser, s.maxValueLength, this._key, this._limit, t, n);
  }
}
_n.__initStatic();
class gn {
  static __initStatic() {
    this.id = "HttpContext";
  }
  constructor() {
    this.name = gn.id;
  }
  setupOnce() {}
  preprocessEvent(t) {
    if (!M.navigator && !M.location && !M.document) return;
    const n = (t.request && t.request.url) || (M.location && M.location.href),
      { referrer: r } = M.document || {},
      { userAgent: s } = M.navigator || {},
      i = {
        ...(t.request && t.request.headers),
        ...(r && { Referer: r }),
        ...(s && { "User-Agent": s }),
      },
      o = { ...t.request, ...(n && { url: n }), headers: i };
    t.request = o;
  }
}
gn.__initStatic();
class yn {
  static __initStatic() {
    this.id = "Dedupe";
  }
  constructor() {
    this.name = yn.id;
  }
  setupOnce(t, n) {}
  processEvent(t) {
    if (t.type) return t;
    try {
      if (Qu(t, this._previousEvent))
        return (
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            m.warn(
              "Event dropped due to being a duplicate of previously captured event."
            ),
          null
        );
    } catch {}
    return (this._previousEvent = t);
  }
}
yn.__initStatic();
function Qu(e, t) {
  return t ? !!(Zu(e, t) || ed(e, t)) : !1;
}
function Zu(e, t) {
  const n = e.message,
    r = t.message;
  return !(
    (!n && !r) ||
    (n && !r) ||
    (!n && r) ||
    n !== r ||
    !Ai(e, t) ||
    !Bi(e, t)
  );
}
function ed(e, t) {
  const n = vs(t),
    r = vs(e);
  return !(
    !n ||
    !r ||
    n.type !== r.type ||
    n.value !== r.value ||
    !Ai(e, t) ||
    !Bi(e, t)
  );
}
function Bi(e, t) {
  let n = Rs(e),
    r = Rs(t);
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r) || ((n = n), (r = r), r.length !== n.length))
    return !1;
  for (let s = 0; s < r.length; s++) {
    const i = r[s],
      o = n[s];
    if (
      i.filename !== o.filename ||
      i.lineno !== o.lineno ||
      i.colno !== o.colno ||
      i.function !== o.function
    )
      return !1;
  }
  return !0;
}
function Ai(e, t) {
  let n = e.fingerprint,
    r = t.fingerprint;
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r)) return !1;
  (n = n), (r = r);
  try {
    return n.join("") === r.join("");
  } catch {
    return !1;
  }
}
function vs(e) {
  return e.exception && e.exception.values && e.exception.values[0];
}
function Rs(e) {
  const t = e.exception;
  if (t)
    try {
      return t.values[0].stacktrace.frames;
    } catch {
      return;
    }
}
const td = [
  new fn(),
  new ln(),
  new pn(),
  new mn(),
  new it(),
  new _n(),
  new yn(),
  new gn(),
];
function nd(e = {}) {
  e.defaultIntegrations === void 0 && (e.defaultIntegrations = td),
    e.release === void 0 &&
      (typeof __SENTRY_RELEASE__ == "string" &&
        (e.release = __SENTRY_RELEASE__),
      M.SENTRY_RELEASE &&
        M.SENTRY_RELEASE.id &&
        (e.release = M.SENTRY_RELEASE.id)),
    e.autoSessionTracking === void 0 && (e.autoSessionTracking = !0),
    e.sendClientReports === void 0 && (e.sendClientReports = !0);
  const t = {
    ...e,
    stackParser: ba(e.stackParser || Ou),
    integrations: Dc(e),
    transport: e.transport || (pi() ? mu : gu),
  };
  Fc(fu, t), e.autoSessionTracking && rd();
}
function ws(e) {
  e.startSession({ ignoreDuration: !0 }), e.captureSession();
}
function rd() {
  if (typeof M.document > "u") {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      m.warn(
        "Session tracking in non-browser environment with @sentry/browser is not supported."
      );
    return;
  }
  const e = x();
  e.captureSession &&
    (ws(e),
    ee("history", ({ from: t, to: n }) => {
      t === void 0 || t === n || ws(x());
    }));
}
const O = le;
function sd() {
  O && O.document
    ? O.document.addEventListener("visibilitychange", () => {
        const e = Dt();
        if (O.document.hidden && e) {
          const t = "cancelled";
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            m.log(
              `[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${e.op}`
            ),
            e.status || e.setStatus(t),
            e.setTag("visibilitychange", "document.hidden"),
            e.finish();
        }
      })
    : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      m.warn(
        "[Tracing] Could not set up background tab detection due to lack of global document"
      );
}
const kr = (e, t, n) => {
    let r, s;
    return (i) => {
      t.value >= 0 &&
        (i || n) &&
        ((s = t.value - (r || 0)),
        (s || r === void 0) && ((r = t.value), (t.delta = s), e(t)));
    };
  },
  id = () =>
    `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`,
  od = () => {
    const e = O.performance.timing,
      t = O.performance.navigation.type,
      n = {
        entryType: "navigation",
        startTime: 0,
        type: t == 2 ? "back_forward" : t === 1 ? "reload" : "navigate",
      };
    for (const r in e)
      r !== "navigationStart" &&
        r !== "toJSON" &&
        (n[r] = Math.max(e[r] - e.navigationStart, 0));
    return n;
  },
  Ui = () =>
    O.__WEB_VITALS_POLYFILL__
      ? O.performance &&
        ((performance.getEntriesByType &&
          performance.getEntriesByType("navigation")[0]) ||
          od())
      : O.performance &&
        performance.getEntriesByType &&
        performance.getEntriesByType("navigation")[0],
  Li = () => {
    const e = Ui();
    return (e && e.activationStart) || 0;
  },
  Ir = (e, t) => {
    const n = Ui();
    let r = "navigate";
    return (
      n &&
        (O.document.prerendering || Li() > 0
          ? (r = "prerender")
          : (r = n.type.replace(/_/g, "-"))),
      {
        name: e,
        value: typeof t > "u" ? -1 : t,
        rating: "good",
        delta: 0,
        entries: [],
        id: id(),
        navigationType: r,
      }
    );
  },
  Sn = (e, t, n) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        const r = new PerformanceObserver((s) => {
          t(s.getEntries());
        });
        return r.observe(Object.assign({ type: e, buffered: !0 }, n || {})), r;
      }
    } catch {}
  },
  En = (e, t) => {
    const n = (r) => {
      (r.type === "pagehide" || O.document.visibilityState === "hidden") &&
        (e(r),
        t &&
          (removeEventListener("visibilitychange", n, !0),
          removeEventListener("pagehide", n, !0)));
    };
    addEventListener("visibilitychange", n, !0),
      addEventListener("pagehide", n, !0);
  },
  ad = (e) => {
    const t = Ir("CLS", 0);
    let n,
      r = 0,
      s = [];
    const i = (a) => {
        a.forEach((c) => {
          if (!c.hadRecentInput) {
            const u = s[0],
              d = s[s.length - 1];
            r &&
            s.length !== 0 &&
            c.startTime - d.startTime < 1e3 &&
            c.startTime - u.startTime < 5e3
              ? ((r += c.value), s.push(c))
              : ((r = c.value), (s = [c])),
              r > t.value && ((t.value = r), (t.entries = s), n && n());
          }
        });
      },
      o = Sn("layout-shift", i);
    if (o) {
      n = kr(e, t);
      const a = () => {
        i(o.takeRecords()), n(!0);
      };
      return En(a), a;
    }
  };
let qt = -1;
const cd = () =>
    O.document.visibilityState === "hidden" && !O.document.prerendering
      ? 0
      : 1 / 0,
  ud = () => {
    En(({ timeStamp: e }) => {
      qt = e;
    }, !0);
  },
  Dr = () => (
    qt < 0 && ((qt = cd()), ud()),
    {
      get firstHiddenTime() {
        return qt;
      },
    }
  ),
  dd = (e) => {
    const t = Dr(),
      n = Ir("FID");
    let r;
    const s = (a) => {
        a.startTime < t.firstHiddenTime &&
          ((n.value = a.processingStart - a.startTime),
          n.entries.push(a),
          r(!0));
      },
      i = (a) => {
        a.forEach(s);
      },
      o = Sn("first-input", i);
    (r = kr(e, n)),
      o &&
        En(() => {
          i(o.takeRecords()), o.disconnect();
        }, !0);
  },
  ks = {},
  ld = (e) => {
    const t = Dr(),
      n = Ir("LCP");
    let r;
    const s = (o) => {
        const a = o[o.length - 1];
        if (a) {
          const c = Math.max(a.startTime - Li(), 0);
          c < t.firstHiddenTime && ((n.value = c), (n.entries = [a]), r());
        }
      },
      i = Sn("largest-contentful-paint", s);
    if (i) {
      r = kr(e, n);
      const o = () => {
        ks[n.id] ||
          (s(i.takeRecords()), i.disconnect(), (ks[n.id] = !0), r(!0));
      };
      return (
        ["keydown", "click"].forEach((a) => {
          addEventListener(a, o, { once: !0, capture: !0 });
        }),
        En(o, !0),
        o
      );
    }
  },
  mt = {},
  Xt = {};
let Pi, Fi, Gi;
function fd(e) {
  return Nr("cls", e, pd, Pi);
}
function $i(e) {
  return Nr("lcp", e, _d, Gi);
}
function hd(e) {
  return Nr("fid", e, md, Fi);
}
function Tn(e, t) {
  return Yi(e, t), Xt[e] || (gd(e), (Xt[e] = !0)), Hi(e, t);
}
function bn(e, t) {
  const n = mt[e];
  if (!(!n || !n.length))
    for (const r of n)
      try {
        r(t);
      } catch (s) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          m.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${we(r)}
Error:`,
            s
          );
      }
}
function pd() {
  ad((e) => {
    bn("cls", { metric: e }), (Pi = e);
  });
}
function md() {
  dd((e) => {
    bn("fid", { metric: e }), (Fi = e);
  });
}
function _d() {
  ld((e) => {
    bn("lcp", { metric: e }), (Gi = e);
  });
}
function Nr(e, t, n, r) {
  return (
    Yi(e, t), Xt[e] || (n(), (Xt[e] = !0)), r && t({ metric: r }), Hi(e, t)
  );
}
function gd(e) {
  const t = {};
  e === "event" && (t.durationThreshold = 0),
    Sn(
      e,
      (n) => {
        bn(e, { entries: n });
      },
      t
    );
}
function Yi(e, t) {
  (mt[e] = mt[e] || []), mt[e].push(t);
}
function Hi(e, t) {
  return () => {
    const n = mt[e];
    if (!n) return;
    const r = n.indexOf(t);
    r !== -1 && n.splice(r, 1);
  };
}
function On(e) {
  return typeof e == "number" && isFinite(e);
}
function Ze(e, { startTimestamp: t, ...n }) {
  return (
    t && e.startTimestamp > t && (e.startTimestamp = t),
    e.startChild({ startTimestamp: t, ...n })
  );
}
function X(e) {
  return e / 1e3;
}
function zi() {
  return O && O.addEventListener && O.performance;
}
let Is = 0,
  z = {},
  ge,
  _t;
function yd() {
  const e = zi();
  if (e && pe) {
    e.mark && O.performance.mark("sentry-tracing-init");
    const t = vd(),
      n = Td(),
      r = bd();
    return () => {
      t(), n(), r();
    };
  }
  return () => {};
}
function Sd() {
  Tn("longtask", ({ entries: e }) => {
    for (const t of e) {
      const n = Dt();
      if (!n) return;
      const r = X(pe + t.startTime),
        s = X(t.duration);
      n.startChild({
        description: "Main UI thread blocked",
        op: "ui.long-task",
        origin: "auto.ui.browser.metrics",
        startTimestamp: r,
        endTimestamp: r + s,
      });
    }
  });
}
function Ed() {
  Tn("event", ({ entries: e }) => {
    for (const t of e) {
      const n = Dt();
      if (!n) return;
      if (t.name === "click") {
        const r = X(pe + t.startTime),
          s = X(t.duration);
        n.startChild({
          description: Fe(t.target),
          op: `ui.interaction.${t.name}`,
          origin: "auto.ui.browser.metrics",
          startTimestamp: r,
          endTimestamp: r + s,
        });
      }
    }
  });
}
function Td() {
  return fd(({ metric: e }) => {
    const t = e.entries.pop();
    t &&
      ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.log("[Measurements] Adding CLS"),
      (z.cls = { value: e.value, unit: "" }),
      (_t = t));
  });
}
function bd() {
  return $i(({ metric: e }) => {
    const t = e.entries.pop();
    t &&
      ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.log("[Measurements] Adding LCP"),
      (z.lcp = { value: e.value, unit: "millisecond" }),
      (ge = t));
  });
}
function vd() {
  return hd(({ metric: e }) => {
    const t = e.entries.pop();
    if (!t) return;
    const n = X(pe),
      r = X(t.startTime);
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      m.log("[Measurements] Adding FID"),
      (z.fid = { value: e.value, unit: "millisecond" }),
      (z["mark.fid"] = { value: n + r, unit: "second" });
  });
}
function Rd(e) {
  const t = zi();
  if (!t || !O.performance.getEntries || !pe) return;
  (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
    m.log("[Tracing] Adding & adjusting spans using Performance API");
  const n = X(pe),
    r = t.getEntries();
  let s, i;
  if (
    (r.slice(Is).forEach((o) => {
      const a = X(o.startTime),
        c = X(o.duration);
      if (!(e.op === "navigation" && n + a < e.startTimestamp))
        switch (o.entryType) {
          case "navigation": {
            kd(e, o, n),
              (s = n + X(o.responseStart)),
              (i = n + X(o.requestStart));
            break;
          }
          case "mark":
          case "paint":
          case "measure": {
            wd(e, o, a, c, n);
            const u = Dr(),
              d = o.startTime < u.firstHiddenTime;
            o.name === "first-paint" &&
              d &&
              ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
                m.log("[Measurements] Adding FP"),
              (z.fp = { value: o.startTime, unit: "millisecond" })),
              o.name === "first-contentful-paint" &&
                d &&
                ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
                  m.log("[Measurements] Adding FCP"),
                (z.fcp = { value: o.startTime, unit: "millisecond" }));
            break;
          }
          case "resource": {
            const u = o.name.replace(O.location.origin, "");
            Dd(e, o, u, a, c, n);
            break;
          }
        }
    }),
    (Is = Math.max(r.length - 1, 0)),
    Nd(e),
    e.op === "pageload")
  ) {
    typeof s == "number" &&
      ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.log("[Measurements] Adding TTFB"),
      (z.ttfb = { value: (s - e.startTimestamp) * 1e3, unit: "millisecond" }),
      typeof i == "number" &&
        i <= s &&
        (z["ttfb.requestTime"] = {
          value: (s - i) * 1e3,
          unit: "millisecond",
        })),
      ["fcp", "fp", "lcp"].forEach((a) => {
        if (!z[a] || n >= e.startTimestamp) return;
        const c = z[a].value,
          u = n + X(c),
          d = Math.abs((u - e.startTimestamp) * 1e3),
          l = d - c;
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          m.log(`[Measurements] Normalized ${a} from ${c} to ${d} (${l})`),
          (z[a].value = d);
      });
    const o = z["mark.fid"];
    o &&
      z.fid &&
      (Ze(e, {
        description: "first input delay",
        endTimestamp: o.value + X(z.fid.value),
        op: "ui.action",
        origin: "auto.ui.browser.metrics",
        startTimestamp: o.value,
      }),
      delete z["mark.fid"]),
      "fcp" in z || delete z.cls,
      Object.keys(z).forEach((a) => {
        e.setMeasurement(a, z[a].value, z[a].unit);
      }),
      Cd(e);
  }
  (ge = void 0), (_t = void 0), (z = {});
}
function wd(e, t, n, r, s) {
  const i = s + n,
    o = i + r;
  return (
    Ze(e, {
      description: t.name,
      endTimestamp: o,
      op: t.entryType,
      origin: "auto.resource.browser.metrics",
      startTimestamp: i,
    }),
    i
  );
}
function kd(e, t, n) {
  [
    "unloadEvent",
    "redirect",
    "domContentLoadedEvent",
    "loadEvent",
    "connect",
  ].forEach((r) => {
    Lt(e, t, r, n);
  }),
    Lt(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"),
    Lt(e, t, "fetch", n, "cache", "domainLookupStart"),
    Lt(e, t, "domainLookup", n, "DNS"),
    Id(e, t, n);
}
function Lt(e, t, n, r, s, i) {
  const o = i ? t[i] : t[`${n}End`],
    a = t[`${n}Start`];
  !a ||
    !o ||
    Ze(e, {
      op: "browser",
      origin: "auto.browser.browser.metrics",
      description: s || n,
      startTimestamp: r + X(a),
      endTimestamp: r + X(o),
    });
}
function Id(e, t, n) {
  Ze(e, {
    op: "browser",
    origin: "auto.browser.browser.metrics",
    description: "request",
    startTimestamp: n + X(t.requestStart),
    endTimestamp: n + X(t.responseEnd),
  }),
    Ze(e, {
      op: "browser",
      origin: "auto.browser.browser.metrics",
      description: "response",
      startTimestamp: n + X(t.responseStart),
      endTimestamp: n + X(t.responseEnd),
    });
}
function Dd(e, t, n, r, s, i) {
  if (t.initiatorType === "xmlhttprequest" || t.initiatorType === "fetch")
    return;
  const o = {};
  "transferSize" in t && (o["http.response_transfer_size"] = t.transferSize),
    "encodedBodySize" in t &&
      (o["http.response_content_length"] = t.encodedBodySize),
    "decodedBodySize" in t &&
      (o["http.decoded_response_content_length"] = t.decodedBodySize),
    "renderBlockingStatus" in t &&
      (o["resource.render_blocking_status"] = t.renderBlockingStatus);
  const a = i + r,
    c = a + s;
  Ze(e, {
    description: n,
    endTimestamp: c,
    op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
    origin: "auto.resource.browser.metrics",
    startTimestamp: a,
    data: o,
  });
}
function Nd(e) {
  const t = O.navigator;
  if (!t) return;
  const n = t.connection;
  n &&
    (n.effectiveType && e.setTag("effectiveConnectionType", n.effectiveType),
    n.type && e.setTag("connectionType", n.type),
    On(n.rtt) && (z["connection.rtt"] = { value: n.rtt, unit: "millisecond" })),
    On(t.deviceMemory) && e.setTag("deviceMemory", `${t.deviceMemory} GB`),
    On(t.hardwareConcurrency) &&
      e.setTag("hardwareConcurrency", String(t.hardwareConcurrency));
}
function Cd(e) {
  ge &&
    ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      m.log("[Measurements] Adding LCP Data"),
    ge.element && e.setTag("lcp.element", Fe(ge.element)),
    ge.id && e.setTag("lcp.id", ge.id),
    ge.url && e.setTag("lcp.url", ge.url.trim().slice(0, 200)),
    e.setTag("lcp.size", ge.size)),
    _t &&
      _t.sources &&
      ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.log("[Measurements] Adding CLS Data"),
      _t.sources.forEach((t, n) =>
        e.setTag(`cls.source.${n + 1}`, Fe(t.node))
      ));
}
function xd(e, t, n, r, s = "auto.http.browser") {
  if (!br() || !e.fetchData) return;
  const i = t(e.fetchData.url);
  if (e.endTimestamp && i) {
    const h = e.fetchData.__span;
    if (!h) return;
    const p = r[h];
    if (p) {
      if (e.response) {
        p.setHttpStatus(e.response.status);
        const _ =
          e.response &&
          e.response.headers &&
          e.response.headers.get("content-length");
        if (_) {
          const E = parseInt(_);
          E > 0 && p.setData("http.response_content_length", E);
        }
      } else e.error && p.setStatus("internal_error");
      p.finish(), delete r[h];
    }
    return;
  }
  const o = x(),
    a = o.getScope(),
    c = o.getClient(),
    u = a.getSpan(),
    { method: d, url: l } = e.fetchData,
    f =
      i && u
        ? u.startChild({
            data: { url: l, type: "fetch", "http.method": d },
            description: `${d} ${l}`,
            op: "http.client",
            origin: s,
          })
        : void 0;
  if (
    (f && ((e.fetchData.__span = f.spanId), (r[f.spanId] = f)),
    n(e.fetchData.url) && c)
  ) {
    const h = e.args[0];
    e.args[1] = e.args[1] || {};
    const p = e.args[1];
    p.headers = Md(h, c, a, p, f);
  }
  return f;
}
function Md(e, t, n, r, s) {
  const i = s || n.getSpan(),
    o = i && i.transaction,
    { traceId: a, sampled: c, dsc: u } = n.getPropagationContext(),
    d = i ? i.toTraceparent() : Sr(a, void 0, c),
    l = o ? o.getDynamicSamplingContext() : u || dn(a, t, n),
    f = Xn(l),
    h = typeof Request < "u" && Et(e, Request) ? e.headers : r.headers;
  if (h)
    if (typeof Headers < "u" && Et(h, Headers)) {
      const p = new Headers(h);
      return p.append("sentry-trace", d), f && p.append(Kn, f), p;
    } else if (Array.isArray(h)) {
      const p = [...h, ["sentry-trace", d]];
      return f && p.push([Kn, f]), p;
    } else {
      const p = "baggage" in h ? h.baggage : void 0,
        _ = [];
      return (
        Array.isArray(p) ? _.push(...p) : p && _.push(p),
        f && _.push(f),
        {
          ...h,
          "sentry-trace": d,
          baggage: _.length > 0 ? _.join(",") : void 0,
        }
      );
    }
  else return { "sentry-trace": d, baggage: f };
}
const er = ["localhost", /^\/(?!\/)/],
  tr = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0,
    tracingOrigins: er,
    tracePropagationTargets: er,
  };
function Od(e) {
  const {
      traceFetch: t,
      traceXHR: n,
      tracePropagationTargets: r,
      tracingOrigins: s,
      shouldCreateSpanForRequest: i,
      enableHTTPTimings: o,
    } = { traceFetch: tr.traceFetch, traceXHR: tr.traceXHR, ...e },
    a = typeof i == "function" ? i : (d) => !0,
    c = (d) => Ld(d, r || s),
    u = {};
  t &&
    ee("fetch", (d) => {
      const l = xd(d, a, c, u);
      o && l && Ds(l);
    }),
    n &&
      ee("xhr", (d) => {
        const l = Pd(d, a, c, u);
        o && l && Ds(l);
      });
}
function Bd(e) {
  return (
    e.entryType === "resource" &&
    "initiatorType" in e &&
    typeof e.nextHopProtocol == "string" &&
    (e.initiatorType === "fetch" || e.initiatorType === "xmlhttprequest")
  );
}
function Ds(e) {
  const t = e.data.url;
  if (!t) return;
  const n = Tn("resource", ({ entries: r }) => {
    r.forEach((s) => {
      Bd(s) &&
        s.name.endsWith(t) &&
        (Ud(s).forEach((o) => e.setData(...o)), setTimeout(n));
    });
  });
}
function Ad(e) {
  let t = "unknown",
    n = "unknown",
    r = "";
  for (const s of e) {
    if (s === "/") {
      [t, n] = e.split("/");
      break;
    }
    if (!isNaN(Number(s))) {
      (t = r === "h" ? "http" : r), (n = e.split(r)[1]);
      break;
    }
    r += s;
  }
  return r === e && (t = r), { name: t, version: n };
}
function _e(e = 0) {
  return ((pe || performance.timeOrigin) + e) / 1e3;
}
function Ud(e) {
  const { name: t, version: n } = Ad(e.nextHopProtocol),
    r = [];
  return (
    r.push(["network.protocol.version", n], ["network.protocol.name", t]),
    pe
      ? [
          ...r,
          ["http.request.redirect_start", _e(e.redirectStart)],
          ["http.request.fetch_start", _e(e.fetchStart)],
          ["http.request.domain_lookup_start", _e(e.domainLookupStart)],
          ["http.request.domain_lookup_end", _e(e.domainLookupEnd)],
          ["http.request.connect_start", _e(e.connectStart)],
          ["http.request.secure_connection_start", _e(e.secureConnectionStart)],
          ["http.request.connection_end", _e(e.connectEnd)],
          ["http.request.request_start", _e(e.requestStart)],
          ["http.request.response_start", _e(e.responseStart)],
          ["http.request.response_end", _e(e.responseEnd)],
        ]
      : r
  );
}
function Ld(e, t) {
  return rt(e, t || er);
}
function Pd(e, t, n, r) {
  const s = e.xhr,
    i = s && s[Me];
  if (!br() || (s && s.__sentry_own_request__) || !s || !i) return;
  const o = t(i.url);
  if (e.endTimestamp && o) {
    const l = s.__sentry_xhr_span_id__;
    if (!l) return;
    const f = r[l];
    f && (f.setHttpStatus(i.status_code), f.finish(), delete r[l]);
    return;
  }
  const a = x(),
    c = a.getScope(),
    u = c.getSpan(),
    d =
      o && u
        ? u.startChild({
            data: {
              ...i.data,
              type: "xhr",
              "http.method": i.method,
              url: i.url,
            },
            description: `${i.method} ${i.url}`,
            op: "http.client",
            origin: "auto.http.browser",
          })
        : void 0;
  if (
    (d &&
      ((s.__sentry_xhr_span_id__ = d.spanId),
      (r[s.__sentry_xhr_span_id__] = d)),
    s.setRequestHeader && n(i.url))
  )
    if (d) {
      const l = d && d.transaction,
        f = l && l.getDynamicSamplingContext(),
        h = Xn(f);
      Ns(s, d.toTraceparent(), h);
    } else {
      const l = a.getClient(),
        { traceId: f, sampled: h, dsc: p } = c.getPropagationContext(),
        _ = Sr(f, void 0, h),
        E = p || (l ? dn(f, l, c) : void 0),
        y = Xn(E);
      Ns(s, _, y);
    }
  return d;
}
function Ns(e, t, n) {
  try {
    e.setRequestHeader("sentry-trace", t), n && e.setRequestHeader(Kn, n);
  } catch {}
}
function Fd(e, t = !0, n = !0) {
  if (!O || !O.location) {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      m.warn(
        "Could not initialize routing instrumentation due to invalid location"
      );
    return;
  }
  let r = O.location.href,
    s;
  t &&
    (s = e({
      name: O.location.pathname,
      startTimestamp: pe ? pe / 1e3 : void 0,
      op: "pageload",
      origin: "auto.pageload.browser",
      metadata: { source: "url" },
    })),
    n &&
      ee("history", ({ to: i, from: o }) => {
        if (o === void 0 && r && r.indexOf(i) !== -1) {
          r = void 0;
          return;
        }
        o !== i &&
          ((r = void 0),
          s &&
            ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
              m.log(`[Tracing] Finishing current transaction with op: ${s.op}`),
            s.finish()),
          (s = e({
            name: O.location.pathname,
            op: "navigation",
            origin: "auto.navigation.browser",
            metadata: { source: "url" },
          })));
      });
}
const Gd = "BrowserTracing",
  $d = {
    ...jt,
    markBackgroundTransactions: !0,
    routingInstrumentation: Fd,
    startTransactionOnLocationChange: !0,
    startTransactionOnPageLoad: !0,
    enableLongTask: !0,
    _experiments: {},
    ...tr,
  };
class Yd {
  constructor(t) {
    (this.name = Gd),
      (this._hasSetTracePropagationTargets = !1),
      yc(),
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        (this._hasSetTracePropagationTargets = !!(
          t &&
          (t.tracePropagationTargets || t.tracingOrigins)
        )),
      (this.options = { ...$d, ...t }),
      this.options._experiments.enableLongTask !== void 0 &&
        (this.options.enableLongTask =
          this.options._experiments.enableLongTask),
      t &&
        !t.tracePropagationTargets &&
        t.tracingOrigins &&
        (this.options.tracePropagationTargets = t.tracingOrigins),
      (this._collectWebVitals = yd()),
      this.options.enableLongTask && Sd(),
      this.options._experiments.enableInteractions && Ed();
  }
  setupOnce(t, n) {
    this._getCurrentHub = n;
    const s = n().getClient(),
      i = s && s.getOptions(),
      {
        routingInstrumentation: o,
        startTransactionOnLocationChange: a,
        startTransactionOnPageLoad: c,
        markBackgroundTransactions: u,
        traceFetch: d,
        traceXHR: l,
        shouldCreateSpanForRequest: f,
        enableHTTPTimings: h,
        _experiments: p,
      } = this.options,
      _ = i && i.tracePropagationTargets,
      E = _ || this.options.tracePropagationTargets;
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      this._hasSetTracePropagationTargets &&
      _ &&
      m.warn(
        "[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."
      ),
      o(
        (y) => {
          const b = this._createRouteTransaction(y);
          return (
            this.options._experiments.onStartRouteTransaction &&
              this.options._experiments.onStartRouteTransaction(b, y, n),
            b
          );
        },
        c,
        a
      ),
      u && sd(),
      p.enableInteractions && this._registerInteractionListener(),
      Od({
        traceFetch: d,
        traceXHR: l,
        tracePropagationTargets: E,
        shouldCreateSpanForRequest: f,
        enableHTTPTimings: h,
      });
  }
  _createRouteTransaction(t) {
    if (!this._getCurrentHub) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.warn(
          `[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`
        );
      return;
    }
    const n = this._getCurrentHub(),
      {
        beforeNavigate: r,
        idleTimeout: s,
        finalTimeout: i,
        heartbeatInterval: o,
      } = this.options,
      a = t.op === "pageload",
      c = a ? Cs("sentry-trace") : "",
      u = a ? Cs("baggage") : "",
      {
        traceparentData: d,
        dynamicSamplingContext: l,
        propagationContext: f,
      } = ec(c, u),
      h = {
        ...t,
        ...d,
        metadata: { ...t.metadata, dynamicSamplingContext: d && !l ? {} : l },
        trimEnd: !0,
      },
      p = typeof r == "function" ? r(h) : h,
      _ = p === void 0 ? { ...h, sampled: !1 } : p;
    (_.metadata =
      _.name !== h.name ? { ..._.metadata, source: "custom" } : _.metadata),
      (this._latestRouteName = _.name),
      (this._latestRouteSource = _.metadata && _.metadata.source),
      _.sampled === !1 &&
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.log(
          `[Tracing] Will not send ${_.op} transaction because of beforeNavigate.`
        ),
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.log(`[Tracing] Starting ${_.op} transaction on scope`);
    const { location: E } = O,
      y = ps(n, _, s, i, !0, { location: E }, o),
      b = n.getScope();
    return (
      a && d
        ? b.setPropagationContext(f)
        : b.setPropagationContext({
            traceId: y.traceId,
            spanId: y.spanId,
            parentSpanId: y.parentSpanId,
            sampled: y.sampled,
          }),
      y.registerBeforeFinishCallback((k) => {
        this._collectWebVitals(), Rd(k);
      }),
      y
    );
  }
  _registerInteractionListener() {
    let t;
    const n = () => {
      const {
          idleTimeout: r,
          finalTimeout: s,
          heartbeatInterval: i,
        } = this.options,
        o = "ui.action.click",
        a = Dt();
      if (a && a.op && ["navigation", "pageload"].includes(a.op)) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          m.warn(
            `[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`
          );
        return;
      }
      if (
        (t &&
          (t.setFinishReason("interactionInterrupted"),
          t.finish(),
          (t = void 0)),
        !this._getCurrentHub)
      ) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          m.warn(
            `[Tracing] Did not create ${o} transaction because _getCurrentHub is invalid.`
          );
        return;
      }
      if (!this._latestRouteName) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          m.warn(
            `[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`
          );
        return;
      }
      const c = this._getCurrentHub(),
        { location: u } = O,
        d = {
          name: this._latestRouteName,
          op: o,
          trimEnd: !0,
          metadata: { source: this._latestRouteSource || "url" },
        };
      t = ps(c, d, r, s, !0, { location: u }, i);
    };
    ["click"].forEach((r) => {
      addEventListener(r, n, { once: !1, capture: !0 });
    });
  }
}
function Cs(e) {
  const t = ia(`meta[name=${e}]`);
  return t ? t.getAttribute("content") : void 0;
}
const U = le,
  Cr = "sentryReplaySession",
  Hd = "replay_event",
  xr = "Unable to send Replay",
  zd = 3e5,
  Wd = 9e5,
  jd = 5e3,
  qd = 5500,
  Kd = 6e4,
  Xd = 5e3,
  Vd = 3,
  xs = 15e4,
  Pt = 5e3,
  Jd = 3e3,
  Qd = 300,
  Mr = 2e7,
  Zd = 4999,
  el = 15e3,
  Ms = 36e5;
var V;
(function (e) {
  (e[(e.Document = 0)] = "Document"),
    (e[(e.DocumentType = 1)] = "DocumentType"),
    (e[(e.Element = 2)] = "Element"),
    (e[(e.Text = 3)] = "Text"),
    (e[(e.CDATA = 4)] = "CDATA"),
    (e[(e.Comment = 5)] = "Comment");
})(V || (V = {}));
function tl(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function gt(e) {
  const t = e?.host;
  return t?.shadowRoot === e;
}
function yt(e) {
  return Object.prototype.toString.call(e) === "[object ShadowRoot]";
}
function nl(e) {
  return (
    e.includes(" background-clip: text;") &&
      !e.includes(" -webkit-background-clip: text;") &&
      (e = e.replace(
        " background-clip: text;",
        " -webkit-background-clip: text; background-clip: text;"
      )),
    e
  );
}
function rl(e) {
  const { cssText: t } = e;
  if (t.split('"').length < 3) return t;
  const n = ["@import", `url(${JSON.stringify(e.href)})`];
  return (
    e.layerName === ""
      ? n.push("layer")
      : e.layerName && n.push(`layer(${e.layerName})`),
    e.supportsText && n.push(`supports(${e.supportsText})`),
    e.media.length && n.push(e.media.mediaText),
    n.join(" ") + ";"
  );
}
function Vt(e) {
  try {
    const t = e.rules || e.cssRules;
    return t ? nl(Array.from(t, Wi).join("")) : null;
  } catch {
    return null;
  }
}
function Wi(e) {
  let t;
  if (il(e))
    try {
      t = Vt(e.styleSheet) || rl(e);
    } catch {}
  else if (ol(e) && e.selectorText.includes(":")) return sl(e.cssText);
  return t || e.cssText;
}
function sl(e) {
  const t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
  return e.replace(t, "$1\\$2");
}
function il(e) {
  return "styleSheet" in e;
}
function ol(e) {
  return "selectorText" in e;
}
class ji {
  constructor() {
    (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
  }
  getId(t) {
    var n;
    if (!t) return -1;
    const r = (n = this.getMeta(t)) === null || n === void 0 ? void 0 : n.id;
    return r ?? -1;
  }
  getNode(t) {
    return this.idNodeMap.get(t) || null;
  }
  getIds() {
    return Array.from(this.idNodeMap.keys());
  }
  getMeta(t) {
    return this.nodeMetaMap.get(t) || null;
  }
  removeNodeFromMap(t) {
    const n = this.getId(t);
    this.idNodeMap.delete(n),
      t.childNodes && t.childNodes.forEach((r) => this.removeNodeFromMap(r));
  }
  has(t) {
    return this.idNodeMap.has(t);
  }
  hasNode(t) {
    return this.nodeMetaMap.has(t);
  }
  add(t, n) {
    const r = n.id;
    this.idNodeMap.set(r, t), this.nodeMetaMap.set(t, n);
  }
  replace(t, n) {
    const r = this.getNode(t);
    if (r) {
      const s = this.nodeMetaMap.get(r);
      s && this.nodeMetaMap.set(n, s);
    }
    this.idNodeMap.set(t, n);
  }
  reset() {
    (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
  }
}
function al() {
  return new ji();
}
function vn({ maskInputOptions: e, tagName: t, type: n }) {
  return (
    t === "OPTION" && (t = "SELECT"),
    !!(
      e[t.toLowerCase()] ||
      (n && e[n]) ||
      n === "password" ||
      (t === "INPUT" && !n && e.text)
    )
  );
}
function Rt({ isMasked: e, element: t, value: n, maskInputFn: r }) {
  let s = n || "";
  return e ? (r && (s = r(s, t)), "*".repeat(s.length)) : s;
}
function et(e) {
  return e.toLowerCase();
}
function nr(e) {
  return e.toUpperCase();
}
const Os = "__rrweb_original__";
function cl(e) {
  const t = e.getContext("2d");
  if (!t) return !0;
  const n = 50;
  for (let r = 0; r < e.width; r += n)
    for (let s = 0; s < e.height; s += n) {
      const i = t.getImageData,
        o = Os in i ? i[Os] : i;
      if (
        new Uint32Array(
          o.call(
            t,
            r,
            s,
            Math.min(n, e.width - r),
            Math.min(n, e.height - s)
          ).data.buffer
        ).some((c) => c !== 0)
      )
        return !1;
    }
  return !0;
}
function Or(e) {
  const t = e.type;
  return e.hasAttribute("data-rr-is-password") ? "password" : t ? et(t) : null;
}
function Jt(e, t, n) {
  return t === "INPUT" && (n === "radio" || n === "checkbox")
    ? e.getAttribute("value") || ""
    : e.value;
}
let ul = 1;
const dl = new RegExp("[^a-z0-9-_:]"),
  wt = -2;
function Br() {
  return ul++;
}
function ll(e) {
  if (e instanceof HTMLFormElement) return "form";
  const t = et(e.tagName);
  return dl.test(t) ? "div" : t;
}
function fl(e) {
  let t = "";
  return (
    e.indexOf("//") > -1
      ? (t = e.split("/").slice(0, 3).join("/"))
      : (t = e.split("/")[0]),
    (t = t.split("?")[0]),
    t
  );
}
let He, Bs;
const hl = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
  pl = /^(?:[a-z+]+:)?\/\//i,
  ml = /^www\..*/i,
  _l = /^(data:)([^,]*),(.*)/i;
function Qt(e, t) {
  return (e || "").replace(hl, (n, r, s, i, o, a) => {
    const c = s || o || a,
      u = r || i || "";
    if (!c) return n;
    if (pl.test(c) || ml.test(c)) return `url(${u}${c}${u})`;
    if (_l.test(c)) return `url(${u}${c}${u})`;
    if (c[0] === "/") return `url(${u}${fl(t) + c}${u})`;
    const d = t.split("/"),
      l = c.split("/");
    d.pop();
    for (const f of l) f !== "." && (f === ".." ? d.pop() : d.push(f));
    return `url(${u}${d.join("/")}${u})`;
  });
}
const gl = /^[^ \t\n\r\u000c]+/,
  yl = /^[, \t\n\r\u000c]+/;
function Sl(e, t) {
  if (t.trim() === "") return t;
  let n = 0;
  function r(i) {
    let o;
    const a = i.exec(t.substring(n));
    return a ? ((o = a[0]), (n += o.length), o) : "";
  }
  const s = [];
  for (; r(yl), !(n >= t.length); ) {
    let i = r(gl);
    if (i.slice(-1) === ",")
      (i = We(e, i.substring(0, i.length - 1))), s.push(i);
    else {
      let o = "";
      i = We(e, i);
      let a = !1;
      for (;;) {
        const c = t.charAt(n);
        if (c === "") {
          s.push((i + o).trim());
          break;
        } else if (a) c === ")" && (a = !1);
        else if (c === ",") {
          (n += 1), s.push((i + o).trim());
          break;
        } else c === "(" && (a = !0);
        (o += c), (n += 1);
      }
    }
  }
  return s.join(", ");
}
function We(e, t) {
  if (!t || t.trim() === "") return t;
  const n = e.createElement("a");
  return (n.href = t), n.href;
}
function El(e) {
  return !!(e.tagName === "svg" || e.ownerSVGElement);
}
function Ar() {
  const e = document.createElement("a");
  return (e.href = ""), e.href;
}
function qi(e, t, n, r, s, i) {
  return (
    r &&
    (n === "src" ||
    (n === "href" && !(t === "use" && r[0] === "#")) ||
    (n === "xlink:href" && r[0] !== "#") ||
    (n === "background" && (t === "table" || t === "td" || t === "th"))
      ? We(e, r)
      : n === "srcset"
      ? Sl(e, r)
      : n === "style"
      ? Qt(r, Ar())
      : t === "object" && n === "data"
      ? We(e, r)
      : typeof i == "function"
      ? i(n, r, s)
      : r)
  );
}
function Ki(e, t, n) {
  return (e === "video" || e === "audio") && t === "autoplay";
}
function Tl(e, t, n, r) {
  try {
    if (r && e.matches(r)) return !1;
    if (typeof t == "string") {
      if (e.classList.contains(t)) return !0;
    } else
      for (let s = e.classList.length; s--; ) {
        const i = e.classList[s];
        if (t.test(i)) return !0;
      }
    if (n) return e.matches(n);
  } catch {}
  return !1;
}
function bl(e, t) {
  for (let n = e.classList.length; n--; ) {
    const r = e.classList[n];
    if (t.test(r)) return !0;
  }
  return !1;
}
function Le(e, t, n = 1 / 0, r = 0) {
  return !e || e.nodeType !== e.ELEMENT_NODE || r > n
    ? -1
    : t(e)
    ? r
    : Le(e.parentNode, t, n, r + 1);
}
function je(e, t) {
  return (n) => {
    const r = n;
    if (r === null) return !1;
    if (e) {
      if (typeof e == "string") {
        if (r.matches(`.${e}`)) return !0;
      } else if (bl(r, e)) return !0;
    }
    return !!(t && r.matches(t));
  };
}
function tt(e, t, n, r, s, i) {
  try {
    const o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
    if (o === null) return !1;
    let a = -1,
      c = -1;
    if (i) {
      if (((c = Le(o, je(r, s))), c < 0)) return !0;
      a = Le(o, je(t, n), c >= 0 ? c : 1 / 0);
    } else {
      if (((a = Le(o, je(t, n))), a < 0)) return !1;
      c = Le(o, je(r, s), a >= 0 ? a : 1 / 0);
    }
    return a >= 0 ? (c >= 0 ? a <= c : !0) : c >= 0 ? !1 : !!i;
  } catch {}
  return !!i;
}
function vl(e, t, n) {
  const r = e.contentWindow;
  if (!r) return;
  let s = !1,
    i;
  try {
    i = r.document.readyState;
  } catch {
    return;
  }
  if (i !== "complete") {
    const a = setTimeout(() => {
      s || (t(), (s = !0));
    }, n);
    e.addEventListener("load", () => {
      clearTimeout(a), (s = !0), t();
    });
    return;
  }
  const o = "about:blank";
  if (r.location.href !== o || e.src === o || e.src === "")
    return setTimeout(t, 0), e.addEventListener("load", t);
  e.addEventListener("load", t);
}
function Rl(e, t, n) {
  let r = !1,
    s;
  try {
    s = e.sheet;
  } catch {
    return;
  }
  if (s) return;
  const i = setTimeout(() => {
    r || (t(), (r = !0));
  }, n);
  e.addEventListener("load", () => {
    clearTimeout(i), (r = !0), t();
  });
}
function wl(e, t) {
  const {
      doc: n,
      mirror: r,
      blockClass: s,
      blockSelector: i,
      unblockSelector: o,
      maskAllText: a,
      maskAttributeFn: c,
      maskTextClass: u,
      unmaskTextClass: d,
      maskTextSelector: l,
      unmaskTextSelector: f,
      inlineStylesheet: h,
      maskInputOptions: p = {},
      maskTextFn: _,
      maskInputFn: E,
      dataURLOptions: y = {},
      inlineImages: b,
      recordCanvas: k,
      keepIframeSrcFn: C,
      newlyAddedElement: F = !1,
    } = t,
    T = kl(n, r);
  switch (e.nodeType) {
    case e.DOCUMENT_NODE:
      return e.compatMode !== "CSS1Compat"
        ? { type: V.Document, childNodes: [], compatMode: e.compatMode }
        : { type: V.Document, childNodes: [] };
    case e.DOCUMENT_TYPE_NODE:
      return {
        type: V.DocumentType,
        name: e.name,
        publicId: e.publicId,
        systemId: e.systemId,
        rootId: T,
      };
    case e.ELEMENT_NODE:
      return Dl(e, {
        doc: n,
        blockClass: s,
        blockSelector: i,
        unblockSelector: o,
        inlineStylesheet: h,
        maskAttributeFn: c,
        maskInputOptions: p,
        maskInputFn: E,
        dataURLOptions: y,
        inlineImages: b,
        recordCanvas: k,
        keepIframeSrcFn: C,
        newlyAddedElement: F,
        rootId: T,
        maskAllText: a,
        maskTextClass: u,
        unmaskTextClass: d,
        maskTextSelector: l,
        unmaskTextSelector: f,
      });
    case e.TEXT_NODE:
      return Il(e, {
        maskAllText: a,
        maskTextClass: u,
        unmaskTextClass: d,
        maskTextSelector: l,
        unmaskTextSelector: f,
        maskTextFn: _,
        maskInputOptions: p,
        maskInputFn: E,
        rootId: T,
      });
    case e.CDATA_SECTION_NODE:
      return { type: V.CDATA, textContent: "", rootId: T };
    case e.COMMENT_NODE:
      return { type: V.Comment, textContent: e.textContent || "", rootId: T };
    default:
      return !1;
  }
}
function kl(e, t) {
  if (!t.hasNode(e)) return;
  const n = t.getId(e);
  return n === 1 ? void 0 : n;
}
function Il(e, t) {
  var n;
  const {
      maskAllText: r,
      maskTextClass: s,
      unmaskTextClass: i,
      maskTextSelector: o,
      unmaskTextSelector: a,
      maskTextFn: c,
      maskInputOptions: u,
      maskInputFn: d,
      rootId: l,
    } = t,
    f = e.parentNode && e.parentNode.tagName;
  let h = e.textContent;
  const p = f === "STYLE" ? !0 : void 0,
    _ = f === "SCRIPT" ? !0 : void 0,
    E = f === "TEXTAREA" ? !0 : void 0;
  if (p && h) {
    try {
      e.nextSibling ||
        e.previousSibling ||
        (!((n = e.parentNode.sheet) === null || n === void 0) &&
          n.cssRules &&
          (h = Vt(e.parentNode.sheet)));
    } catch (b) {
      console.warn(
        `Cannot get CSS styles from text's parentNode. Error: ${b}`,
        e
      );
    }
    h = Qt(h, Ar());
  }
  _ && (h = "SCRIPT_PLACEHOLDER");
  const y = tt(e, s, o, i, a, r);
  if (
    (!p && !_ && !E && h && y && (h = c ? c(h) : h.replace(/[\S]/g, "*")),
    E &&
      h &&
      (u.textarea || y) &&
      (h = d ? d(h, e.parentNode) : h.replace(/[\S]/g, "*")),
    f === "OPTION" && h)
  ) {
    const b = vn({ type: null, tagName: f, maskInputOptions: u });
    h = Rt({
      isMasked: tt(e, s, o, i, a, b),
      element: e,
      value: h,
      maskInputFn: d,
    });
  }
  return { type: V.Text, textContent: h || "", isStyle: p, rootId: l };
}
function Dl(e, t) {
  const {
      doc: n,
      blockClass: r,
      blockSelector: s,
      unblockSelector: i,
      inlineStylesheet: o,
      maskInputOptions: a = {},
      maskAttributeFn: c,
      maskInputFn: u,
      dataURLOptions: d = {},
      inlineImages: l,
      recordCanvas: f,
      keepIframeSrcFn: h,
      newlyAddedElement: p = !1,
      rootId: _,
      maskAllText: E,
      maskTextClass: y,
      unmaskTextClass: b,
      maskTextSelector: k,
      unmaskTextSelector: C,
    } = t,
    F = Tl(e, r, s, i),
    T = ll(e);
  let g = {};
  const N = e.attributes.length;
  for (let S = 0; S < N; S++) {
    const v = e.attributes[S];
    Ki(T, v.name, v.value) || (g[v.name] = qi(n, T, et(v.name), v.value, e, c));
  }
  if (T === "link" && o) {
    const S = Array.from(n.styleSheets).find((P) => P.href === e.href);
    let v = null;
    S && (v = Vt(S)),
      v && (delete g.rel, delete g.href, (g._cssText = Qt(v, S.href)));
  }
  if (
    T === "style" &&
    e.sheet &&
    !(e.innerText || e.textContent || "").trim().length
  ) {
    const S = Vt(e.sheet);
    S && (g._cssText = Qt(S, Ar()));
  }
  if (T === "input" || T === "textarea" || T === "select" || T === "option") {
    const S = e,
      v = Or(S),
      P = Jt(S, nr(T), v),
      q = S.checked;
    if (v !== "submit" && v !== "button" && P) {
      const W = tt(
        S,
        y,
        k,
        b,
        C,
        vn({ type: v, tagName: nr(T), maskInputOptions: a })
      );
      g.value = Rt({ isMasked: W, element: S, value: P, maskInputFn: u });
    }
    q && (g.checked = q);
  }
  if (
    (T === "option" &&
      (e.selected && !a.select ? (g.selected = !0) : delete g.selected),
    T === "canvas" && f)
  ) {
    if (e.__context === "2d")
      cl(e) || (g.rr_dataURL = e.toDataURL(d.type, d.quality));
    else if (!("__context" in e)) {
      const S = e.toDataURL(d.type, d.quality),
        v = document.createElement("canvas");
      (v.width = e.width), (v.height = e.height);
      const P = v.toDataURL(d.type, d.quality);
      S !== P && (g.rr_dataURL = S);
    }
  }
  if (T === "img" && l) {
    He || ((He = n.createElement("canvas")), (Bs = He.getContext("2d")));
    const S = e,
      v = S.crossOrigin;
    S.crossOrigin = "anonymous";
    const P = () => {
      S.removeEventListener("load", P);
      try {
        (He.width = S.naturalWidth),
          (He.height = S.naturalHeight),
          Bs.drawImage(S, 0, 0),
          (g.rr_dataURL = He.toDataURL(d.type, d.quality));
      } catch (q) {
        console.warn(`Cannot inline img src=${S.currentSrc}! Error: ${q}`);
      }
      v ? (g.crossOrigin = v) : S.removeAttribute("crossorigin");
    };
    S.complete && S.naturalWidth !== 0 ? P() : S.addEventListener("load", P);
  }
  if (
    ((T === "audio" || T === "video") &&
      ((g.rr_mediaState = e.paused ? "paused" : "played"),
      (g.rr_mediaCurrentTime = e.currentTime)),
    p ||
      (e.scrollLeft && (g.rr_scrollLeft = e.scrollLeft),
      e.scrollTop && (g.rr_scrollTop = e.scrollTop)),
    F)
  ) {
    const { width: S, height: v } = e.getBoundingClientRect();
    g = { class: g.class, rr_width: `${S}px`, rr_height: `${v}px` };
  }
  T === "iframe" &&
    !h(g.src) &&
    (e.contentDocument || (g.rr_src = g.src), delete g.src);
  let G;
  try {
    customElements.get(T) && (G = !0);
  } catch {}
  return {
    type: V.Element,
    tagName: T,
    attributes: g,
    childNodes: [],
    isSVG: El(e) || void 0,
    needBlock: F,
    rootId: _,
    isCustom: G,
  };
}
function B(e) {
  return e == null ? "" : e.toLowerCase();
}
function Nl(e, t) {
  if (t.comment && e.type === V.Comment) return !0;
  if (e.type === V.Element) {
    if (
      t.script &&
      (e.tagName === "script" ||
        (e.tagName === "link" &&
          (e.attributes.rel === "preload" ||
            e.attributes.rel === "modulepreload") &&
          e.attributes.as === "script") ||
        (e.tagName === "link" &&
          e.attributes.rel === "prefetch" &&
          typeof e.attributes.href == "string" &&
          e.attributes.href.endsWith(".js")))
    )
      return !0;
    if (
      t.headFavicon &&
      ((e.tagName === "link" && e.attributes.rel === "shortcut icon") ||
        (e.tagName === "meta" &&
          (B(e.attributes.name).match(/^msapplication-tile(image|color)$/) ||
            B(e.attributes.name) === "application-name" ||
            B(e.attributes.rel) === "icon" ||
            B(e.attributes.rel) === "apple-touch-icon" ||
            B(e.attributes.rel) === "shortcut icon")))
    )
      return !0;
    if (e.tagName === "meta") {
      if (
        t.headMetaDescKeywords &&
        B(e.attributes.name).match(/^description|keywords$/)
      )
        return !0;
      if (
        t.headMetaSocial &&
        (B(e.attributes.property).match(/^(og|twitter|fb):/) ||
          B(e.attributes.name).match(/^(og|twitter):/) ||
          B(e.attributes.name) === "pinterest")
      )
        return !0;
      if (
        t.headMetaRobots &&
        (B(e.attributes.name) === "robots" ||
          B(e.attributes.name) === "googlebot" ||
          B(e.attributes.name) === "bingbot")
      )
        return !0;
      if (t.headMetaHttpEquiv && e.attributes["http-equiv"] !== void 0)
        return !0;
      if (
        t.headMetaAuthorship &&
        (B(e.attributes.name) === "author" ||
          B(e.attributes.name) === "generator" ||
          B(e.attributes.name) === "framework" ||
          B(e.attributes.name) === "publisher" ||
          B(e.attributes.name) === "progid" ||
          B(e.attributes.property).match(/^article:/) ||
          B(e.attributes.property).match(/^product:/))
      )
        return !0;
      if (
        t.headMetaVerification &&
        (B(e.attributes.name) === "google-site-verification" ||
          B(e.attributes.name) === "yandex-verification" ||
          B(e.attributes.name) === "csrf-token" ||
          B(e.attributes.name) === "p:domain_verify" ||
          B(e.attributes.name) === "verify-v1" ||
          B(e.attributes.name) === "verification" ||
          B(e.attributes.name) === "shopify-checkout-api-token")
      )
        return !0;
    }
  }
  return !1;
}
function qe(e, t) {
  const {
    doc: n,
    mirror: r,
    blockClass: s,
    blockSelector: i,
    unblockSelector: o,
    maskAllText: a,
    maskTextClass: c,
    unmaskTextClass: u,
    maskTextSelector: d,
    unmaskTextSelector: l,
    skipChild: f = !1,
    inlineStylesheet: h = !0,
    maskInputOptions: p = {},
    maskAttributeFn: _,
    maskTextFn: E,
    maskInputFn: y,
    slimDOMOptions: b,
    dataURLOptions: k = {},
    inlineImages: C = !1,
    recordCanvas: F = !1,
    onSerialize: T,
    onIframeLoad: g,
    iframeLoadTimeout: N = 5e3,
    onStylesheetLoad: G,
    stylesheetLoadTimeout: S = 5e3,
    keepIframeSrcFn: v = () => !1,
    newlyAddedElement: P = !1,
  } = t;
  let { preserveWhiteSpace: q = !0 } = t;
  const W = wl(e, {
    doc: n,
    mirror: r,
    blockClass: s,
    blockSelector: i,
    maskAllText: a,
    unblockSelector: o,
    maskTextClass: c,
    unmaskTextClass: u,
    maskTextSelector: d,
    unmaskTextSelector: l,
    inlineStylesheet: h,
    maskInputOptions: p,
    maskAttributeFn: _,
    maskTextFn: E,
    maskInputFn: y,
    dataURLOptions: k,
    inlineImages: C,
    recordCanvas: F,
    keepIframeSrcFn: v,
    newlyAddedElement: P,
  });
  if (!W) return console.warn(e, "not serialized"), null;
  let ce;
  r.hasNode(e)
    ? (ce = r.getId(e))
    : Nl(W, b) ||
      (!q &&
        W.type === V.Text &&
        !W.isStyle &&
        !W.textContent.replace(/^\s+|\s+$/gm, "").length)
    ? (ce = wt)
    : (ce = Br());
  const L = Object.assign(W, { id: ce });
  if ((r.add(e, L), ce === wt)) return null;
  T && T(e);
  let me = !f;
  if (L.type === V.Element) {
    (me = me && !L.needBlock), delete L.needBlock;
    const H = e.shadowRoot;
    H && yt(H) && (L.isShadowHost = !0);
  }
  if ((L.type === V.Document || L.type === V.Element) && me) {
    b.headWhitespace &&
      L.type === V.Element &&
      L.tagName === "head" &&
      (q = !1);
    const H = {
      doc: n,
      mirror: r,
      blockClass: s,
      blockSelector: i,
      maskAllText: a,
      unblockSelector: o,
      maskTextClass: c,
      unmaskTextClass: u,
      maskTextSelector: d,
      unmaskTextSelector: l,
      skipChild: f,
      inlineStylesheet: h,
      maskInputOptions: p,
      maskAttributeFn: _,
      maskTextFn: E,
      maskInputFn: y,
      slimDOMOptions: b,
      dataURLOptions: k,
      inlineImages: C,
      recordCanvas: F,
      preserveWhiteSpace: q,
      onSerialize: T,
      onIframeLoad: g,
      iframeLoadTimeout: N,
      onStylesheetLoad: G,
      stylesheetLoadTimeout: S,
      keepIframeSrcFn: v,
    };
    for (const ie of Array.from(e.childNodes)) {
      const ue = qe(ie, H);
      ue && L.childNodes.push(ue);
    }
    if (tl(e) && e.shadowRoot)
      for (const ie of Array.from(e.shadowRoot.childNodes)) {
        const ue = qe(ie, H);
        ue && (yt(e.shadowRoot) && (ue.isShadow = !0), L.childNodes.push(ue));
      }
  }
  return (
    e.parentNode && gt(e.parentNode) && yt(e.parentNode) && (L.isShadow = !0),
    L.type === V.Element &&
      L.tagName === "iframe" &&
      vl(
        e,
        () => {
          const H = e.contentDocument;
          if (H && g) {
            const ie = qe(H, {
              doc: H,
              mirror: r,
              blockClass: s,
              blockSelector: i,
              unblockSelector: o,
              maskAllText: a,
              maskTextClass: c,
              unmaskTextClass: u,
              maskTextSelector: d,
              unmaskTextSelector: l,
              skipChild: !1,
              inlineStylesheet: h,
              maskInputOptions: p,
              maskAttributeFn: _,
              maskTextFn: E,
              maskInputFn: y,
              slimDOMOptions: b,
              dataURLOptions: k,
              inlineImages: C,
              recordCanvas: F,
              preserveWhiteSpace: q,
              onSerialize: T,
              onIframeLoad: g,
              iframeLoadTimeout: N,
              onStylesheetLoad: G,
              stylesheetLoadTimeout: S,
              keepIframeSrcFn: v,
            });
            ie && g(e, ie);
          }
        },
        N
      ),
    L.type === V.Element &&
      L.tagName === "link" &&
      L.attributes.rel === "stylesheet" &&
      Rl(
        e,
        () => {
          if (G) {
            const H = qe(e, {
              doc: n,
              mirror: r,
              blockClass: s,
              blockSelector: i,
              unblockSelector: o,
              maskAllText: a,
              maskTextClass: c,
              unmaskTextClass: u,
              maskTextSelector: d,
              unmaskTextSelector: l,
              skipChild: !1,
              inlineStylesheet: h,
              maskInputOptions: p,
              maskAttributeFn: _,
              maskTextFn: E,
              maskInputFn: y,
              slimDOMOptions: b,
              dataURLOptions: k,
              inlineImages: C,
              recordCanvas: F,
              preserveWhiteSpace: q,
              onSerialize: T,
              onIframeLoad: g,
              iframeLoadTimeout: N,
              onStylesheetLoad: G,
              stylesheetLoadTimeout: S,
              keepIframeSrcFn: v,
            });
            H && G(e, H);
          }
        },
        S
      ),
    L
  );
}
function Cl(e, t) {
  const {
    mirror: n = new ji(),
    blockClass: r = "rr-block",
    blockSelector: s = null,
    unblockSelector: i = null,
    maskAllText: o = !1,
    maskTextClass: a = "rr-mask",
    unmaskTextClass: c = null,
    maskTextSelector: u = null,
    unmaskTextSelector: d = null,
    inlineStylesheet: l = !0,
    inlineImages: f = !1,
    recordCanvas: h = !1,
    maskAllInputs: p = !1,
    maskAttributeFn: _,
    maskTextFn: E,
    maskInputFn: y,
    slimDOM: b = !1,
    dataURLOptions: k,
    preserveWhiteSpace: C,
    onSerialize: F,
    onIframeLoad: T,
    iframeLoadTimeout: g,
    onStylesheetLoad: N,
    stylesheetLoadTimeout: G,
    keepIframeSrcFn: S = () => !1,
  } = t || {};
  return qe(e, {
    doc: e,
    mirror: n,
    blockClass: r,
    blockSelector: s,
    unblockSelector: i,
    maskAllText: o,
    maskTextClass: a,
    unmaskTextClass: c,
    maskTextSelector: u,
    unmaskTextSelector: d,
    skipChild: !1,
    inlineStylesheet: l,
    maskInputOptions:
      p === !0
        ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
          }
        : p === !1
        ? {}
        : p,
    maskAttributeFn: _,
    maskTextFn: E,
    maskInputFn: y,
    slimDOMOptions:
      b === !0 || b === "all"
        ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaDescKeywords: b === "all",
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaAuthorship: !0,
            headMetaVerification: !0,
          }
        : b === !1
        ? {}
        : b,
    dataURLOptions: k,
    inlineImages: f,
    recordCanvas: h,
    preserveWhiteSpace: C,
    onSerialize: F,
    onIframeLoad: T,
    iframeLoadTimeout: g,
    onStylesheetLoad: N,
    stylesheetLoadTimeout: G,
    keepIframeSrcFn: S,
    newlyAddedElement: !1,
  });
}
function se(e, t, n = document) {
  const r = { capture: !0, passive: !0 };
  return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
const ze = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
let As = {
  map: {},
  getId() {
    return console.error(ze), -1;
  },
  getNode() {
    return console.error(ze), null;
  },
  removeNodeFromMap() {
    console.error(ze);
  },
  has() {
    return console.error(ze), !1;
  },
  reset() {
    console.error(ze);
  },
};
typeof window < "u" &&
  window.Proxy &&
  window.Reflect &&
  (As = new Proxy(As, {
    get(e, t, n) {
      return t === "map" && console.error(ze), Reflect.get(e, t, n);
    },
  }));
function kt(e, t, n = {}) {
  let r = null,
    s = 0;
  return function (...i) {
    const o = Date.now();
    !s && n.leading === !1 && (s = o);
    const a = t - (o - s),
      c = this;
    a <= 0 || a > t
      ? (r && (clearTimeout(r), (r = null)), (s = o), e.apply(c, i))
      : !r &&
        n.trailing !== !1 &&
        (r = setTimeout(() => {
          (s = n.leading === !1 ? 0 : Date.now()), (r = null), e.apply(c, i);
        }, a));
  };
}
function Xi(e, t, n, r, s = window) {
  const i = s.Object.getOwnPropertyDescriptor(e, t);
  return (
    s.Object.defineProperty(
      e,
      t,
      r
        ? n
        : {
            set(o) {
              setTimeout(() => {
                n.set.call(this, o);
              }, 0),
                i && i.set && i.set.call(this, o);
            },
          }
    ),
    () => Xi(e, t, i || {}, !0)
  );
}
function Ur(e, t, n) {
  try {
    if (!(t in e)) return () => {};
    const r = e[t],
      s = n(r);
    return (
      typeof s == "function" &&
        ((s.prototype = s.prototype || {}),
        Object.defineProperties(s, {
          __rrweb_original__: { enumerable: !1, value: r },
        })),
      (e[t] = s),
      () => {
        e[t] = r;
      }
    );
  } catch {
    return () => {};
  }
}
let Zt = Date.now;
/[1-9][0-9]{12}/.test(Date.now().toString()) ||
  (Zt = () => new Date().getTime());
function Vi(e) {
  var t, n, r, s, i, o;
  const a = e.document;
  return {
    left: a.scrollingElement
      ? a.scrollingElement.scrollLeft
      : e.pageXOffset !== void 0
      ? e.pageXOffset
      : a?.documentElement.scrollLeft ||
        ((n =
          (t = a?.body) === null || t === void 0 ? void 0 : t.parentElement) ===
          null || n === void 0
          ? void 0
          : n.scrollLeft) ||
        ((r = a?.body) === null || r === void 0 ? void 0 : r.scrollLeft) ||
        0,
    top: a.scrollingElement
      ? a.scrollingElement.scrollTop
      : e.pageYOffset !== void 0
      ? e.pageYOffset
      : a?.documentElement.scrollTop ||
        ((i =
          (s = a?.body) === null || s === void 0 ? void 0 : s.parentElement) ===
          null || i === void 0
          ? void 0
          : i.scrollTop) ||
        ((o = a?.body) === null || o === void 0 ? void 0 : o.scrollTop) ||
        0,
  };
}
function Ji() {
  return (
    window.innerHeight ||
    (document.documentElement && document.documentElement.clientHeight) ||
    (document.body && document.body.clientHeight)
  );
}
function Qi() {
  return (
    window.innerWidth ||
    (document.documentElement && document.documentElement.clientWidth) ||
    (document.body && document.body.clientWidth)
  );
}
function fe(e, t, n, r, s) {
  if (!e) return !1;
  const i = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
  if (!i) return !1;
  const o = je(t, n);
  if (!s) {
    const u = r && i.matches(r);
    return o(i) && !u;
  }
  const a = Le(i, o);
  let c = -1;
  return a < 0
    ? !1
    : (r && (c = Le(i, je(null, r))), a > -1 && c < 0 ? !0 : a < c);
}
function xl(e, t) {
  return t.getId(e) !== -1;
}
function Bn(e, t) {
  return t.getId(e) === wt;
}
function Zi(e, t) {
  if (gt(e)) return !1;
  const n = t.getId(e);
  return t.has(n)
    ? e.parentNode && e.parentNode.nodeType === e.DOCUMENT_NODE
      ? !1
      : e.parentNode
      ? Zi(e.parentNode, t)
      : !0
    : !0;
}
function rr(e) {
  return !!e.changedTouches;
}
function Ml(e = window) {
  "NodeList" in e &&
    !e.NodeList.prototype.forEach &&
    (e.NodeList.prototype.forEach = Array.prototype.forEach),
    "DOMTokenList" in e &&
      !e.DOMTokenList.prototype.forEach &&
      (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
    Node.prototype.contains ||
      (Node.prototype.contains = (...t) => {
        let n = t[0];
        if (!(0 in t)) throw new TypeError("1 argument is required");
        do if (this === n) return !0;
        while ((n = n && n.parentNode));
        return !1;
      });
}
function eo(e, t) {
  return !!(e.nodeName === "IFRAME" && t.getMeta(e));
}
function to(e, t) {
  return !!(
    e.nodeName === "LINK" &&
    e.nodeType === e.ELEMENT_NODE &&
    e.getAttribute &&
    e.getAttribute("rel") === "stylesheet" &&
    t.getMeta(e)
  );
}
function sr(e) {
  return !!e?.shadowRoot;
}
class Ol {
  constructor() {
    (this.id = 1),
      (this.styleIDMap = new WeakMap()),
      (this.idStyleMap = new Map());
  }
  getId(t) {
    var n;
    return (n = this.styleIDMap.get(t)) !== null && n !== void 0 ? n : -1;
  }
  has(t) {
    return this.styleIDMap.has(t);
  }
  add(t, n) {
    if (this.has(t)) return this.getId(t);
    let r;
    return (
      n === void 0 ? (r = this.id++) : (r = n),
      this.styleIDMap.set(t, r),
      this.idStyleMap.set(r, t),
      r
    );
  }
  getStyle(t) {
    return this.idStyleMap.get(t) || null;
  }
  reset() {
    (this.styleIDMap = new WeakMap()),
      (this.idStyleMap = new Map()),
      (this.id = 1);
  }
  generateId() {
    return this.id++;
  }
}
function no(e) {
  var t, n;
  let r = null;
  return (
    ((n = (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e)) ===
      null || n === void 0
      ? void 0
      : n.nodeType) === Node.DOCUMENT_FRAGMENT_NODE &&
      e.getRootNode().host &&
      (r = e.getRootNode().host),
    r
  );
}
function Bl(e) {
  let t = e,
    n;
  for (; (n = no(t)); ) t = n;
  return t;
}
function Al(e) {
  const t = e.ownerDocument;
  if (!t) return !1;
  const n = Bl(e);
  return t.contains(n);
}
function ro(e) {
  const t = e.ownerDocument;
  return t ? t.contains(e) || Al(e) : !1;
}
var w = ((e) => (
    (e[(e.DomContentLoaded = 0)] = "DomContentLoaded"),
    (e[(e.Load = 1)] = "Load"),
    (e[(e.FullSnapshot = 2)] = "FullSnapshot"),
    (e[(e.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
    (e[(e.Meta = 4)] = "Meta"),
    (e[(e.Custom = 5)] = "Custom"),
    (e[(e.Plugin = 6)] = "Plugin"),
    e
  ))(w || {}),
  R = ((e) => (
    (e[(e.Mutation = 0)] = "Mutation"),
    (e[(e.MouseMove = 1)] = "MouseMove"),
    (e[(e.MouseInteraction = 2)] = "MouseInteraction"),
    (e[(e.Scroll = 3)] = "Scroll"),
    (e[(e.ViewportResize = 4)] = "ViewportResize"),
    (e[(e.Input = 5)] = "Input"),
    (e[(e.TouchMove = 6)] = "TouchMove"),
    (e[(e.MediaInteraction = 7)] = "MediaInteraction"),
    (e[(e.StyleSheetRule = 8)] = "StyleSheetRule"),
    (e[(e.CanvasMutation = 9)] = "CanvasMutation"),
    (e[(e.Font = 10)] = "Font"),
    (e[(e.Log = 11)] = "Log"),
    (e[(e.Drag = 12)] = "Drag"),
    (e[(e.StyleDeclaration = 13)] = "StyleDeclaration"),
    (e[(e.Selection = 14)] = "Selection"),
    (e[(e.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
    (e[(e.CustomElement = 16)] = "CustomElement"),
    e
  ))(R || {}),
  ne = ((e) => (
    (e[(e.MouseUp = 0)] = "MouseUp"),
    (e[(e.MouseDown = 1)] = "MouseDown"),
    (e[(e.Click = 2)] = "Click"),
    (e[(e.ContextMenu = 3)] = "ContextMenu"),
    (e[(e.DblClick = 4)] = "DblClick"),
    (e[(e.Focus = 5)] = "Focus"),
    (e[(e.Blur = 6)] = "Blur"),
    (e[(e.TouchStart = 7)] = "TouchStart"),
    (e[(e.TouchMove_Departed = 8)] = "TouchMove_Departed"),
    (e[(e.TouchEnd = 9)] = "TouchEnd"),
    (e[(e.TouchCancel = 10)] = "TouchCancel"),
    e
  ))(ne || {}),
  Ee = ((e) => (
    (e[(e.Mouse = 0)] = "Mouse"),
    (e[(e.Pen = 1)] = "Pen"),
    (e[(e.Touch = 2)] = "Touch"),
    e
  ))(Ee || {});
function Us(e) {
  return "__ln" in e;
}
class Ul {
  constructor() {
    (this.length = 0), (this.head = null), (this.tail = null);
  }
  get(t) {
    if (t >= this.length) throw new Error("Position outside of list range");
    let n = this.head;
    for (let r = 0; r < t; r++) n = n?.next || null;
    return n;
  }
  addNode(t) {
    const n = { value: t, previous: null, next: null };
    if (((t.__ln = n), t.previousSibling && Us(t.previousSibling))) {
      const r = t.previousSibling.__ln.next;
      (n.next = r),
        (n.previous = t.previousSibling.__ln),
        (t.previousSibling.__ln.next = n),
        r && (r.previous = n);
    } else if (
      t.nextSibling &&
      Us(t.nextSibling) &&
      t.nextSibling.__ln.previous
    ) {
      const r = t.nextSibling.__ln.previous;
      (n.previous = r),
        (n.next = t.nextSibling.__ln),
        (t.nextSibling.__ln.previous = n),
        r && (r.next = n);
    } else
      this.head && (this.head.previous = n),
        (n.next = this.head),
        (this.head = n);
    n.next === null && (this.tail = n), this.length++;
  }
  removeNode(t) {
    const n = t.__ln;
    this.head &&
      (n.previous
        ? ((n.previous.next = n.next),
          n.next ? (n.next.previous = n.previous) : (this.tail = n.previous))
        : ((this.head = n.next),
          this.head ? (this.head.previous = null) : (this.tail = null)),
      t.__ln && delete t.__ln,
      this.length--);
  }
}
const Ls = (e, t) => `${e}@${t}`;
class Ll {
  constructor() {
    (this.frozen = !1),
      (this.locked = !1),
      (this.texts = []),
      (this.attributes = []),
      (this.removes = []),
      (this.mapRemoves = []),
      (this.movedMap = {}),
      (this.addedSet = new Set()),
      (this.movedSet = new Set()),
      (this.droppedSet = new Set()),
      (this.processMutations = (t) => {
        t.forEach(this.processMutation), this.emit();
      }),
      (this.emit = () => {
        if (this.frozen || this.locked) return;
        const t = [],
          n = new Set(),
          r = new Ul(),
          s = (c) => {
            let u = c,
              d = wt;
            for (; d === wt; )
              (u = u && u.nextSibling), (d = u && this.mirror.getId(u));
            return d;
          },
          i = (c) => {
            if (!c.parentNode || !ro(c)) return;
            const u = gt(c.parentNode)
                ? this.mirror.getId(no(c))
                : this.mirror.getId(c.parentNode),
              d = s(c);
            if (u === -1 || d === -1) return r.addNode(c);
            const l = qe(c, {
              doc: this.doc,
              mirror: this.mirror,
              blockClass: this.blockClass,
              blockSelector: this.blockSelector,
              maskAllText: this.maskAllText,
              unblockSelector: this.unblockSelector,
              maskTextClass: this.maskTextClass,
              unmaskTextClass: this.unmaskTextClass,
              maskTextSelector: this.maskTextSelector,
              unmaskTextSelector: this.unmaskTextSelector,
              skipChild: !0,
              newlyAddedElement: !0,
              inlineStylesheet: this.inlineStylesheet,
              maskInputOptions: this.maskInputOptions,
              maskAttributeFn: this.maskAttributeFn,
              maskTextFn: this.maskTextFn,
              maskInputFn: this.maskInputFn,
              slimDOMOptions: this.slimDOMOptions,
              dataURLOptions: this.dataURLOptions,
              recordCanvas: this.recordCanvas,
              inlineImages: this.inlineImages,
              onSerialize: (f) => {
                eo(f, this.mirror) && this.iframeManager.addIframe(f),
                  to(f, this.mirror) &&
                    this.stylesheetManager.trackLinkElement(f),
                  sr(c) &&
                    this.shadowDomManager.addShadowRoot(c.shadowRoot, this.doc);
              },
              onIframeLoad: (f, h) => {
                this.iframeManager.attachIframe(f, h),
                  this.shadowDomManager.observeAttachShadow(f);
              },
              onStylesheetLoad: (f, h) => {
                this.stylesheetManager.attachLinkElement(f, h);
              },
            });
            l && (t.push({ parentId: u, nextId: d, node: l }), n.add(l.id));
          };
        for (; this.mapRemoves.length; )
          this.mirror.removeNodeFromMap(this.mapRemoves.shift());
        for (const c of this.movedSet)
          (Ps(this.removes, c, this.mirror) &&
            !this.movedSet.has(c.parentNode)) ||
            i(c);
        for (const c of this.addedSet)
          (!Fs(this.droppedSet, c) && !Ps(this.removes, c, this.mirror)) ||
          Fs(this.movedSet, c)
            ? i(c)
            : this.droppedSet.add(c);
        let o = null;
        for (; r.length; ) {
          let c = null;
          if (o) {
            const u = this.mirror.getId(o.value.parentNode),
              d = s(o.value);
            u !== -1 && d !== -1 && (c = o);
          }
          if (!c) {
            let u = r.tail;
            for (; u; ) {
              const d = u;
              if (((u = u.previous), d)) {
                const l = this.mirror.getId(d.value.parentNode);
                if (s(d.value) === -1) continue;
                if (l !== -1) {
                  c = d;
                  break;
                } else {
                  const h = d.value;
                  if (
                    h.parentNode &&
                    h.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                  ) {
                    const p = h.parentNode.host;
                    if (this.mirror.getId(p) !== -1) {
                      c = d;
                      break;
                    }
                  }
                }
              }
            }
          }
          if (!c) {
            for (; r.head; ) r.removeNode(r.head.value);
            break;
          }
          (o = c.previous), r.removeNode(c.value), i(c.value);
        }
        const a = {
          texts: this.texts
            .map((c) => ({ id: this.mirror.getId(c.node), value: c.value }))
            .filter((c) => !n.has(c.id))
            .filter((c) => this.mirror.has(c.id)),
          attributes: this.attributes
            .map((c) => {
              const { attributes: u } = c;
              if (typeof u.style == "string") {
                const d = JSON.stringify(c.styleDiff),
                  l = JSON.stringify(c._unchangedStyles);
                d.length < u.style.length &&
                  (d + l).split("var(").length ===
                    u.style.split("var(").length &&
                  (u.style = c.styleDiff);
              }
              return { id: this.mirror.getId(c.node), attributes: u };
            })
            .filter((c) => !n.has(c.id))
            .filter((c) => this.mirror.has(c.id)),
          removes: this.removes,
          adds: t,
        };
        (!a.texts.length &&
          !a.attributes.length &&
          !a.removes.length &&
          !a.adds.length) ||
          ((this.texts = []),
          (this.attributes = []),
          (this.removes = []),
          (this.addedSet = new Set()),
          (this.movedSet = new Set()),
          (this.droppedSet = new Set()),
          (this.movedMap = {}),
          this.mutationCb(a));
      }),
      (this.processMutation = (t) => {
        if (Bn(t.target, this.mirror)) return;
        let n;
        try {
          n = document.implementation.createHTMLDocument();
        } catch {
          n = this.doc;
        }
        switch (t.type) {
          case "characterData": {
            const r = t.target.textContent;
            !fe(
              t.target,
              this.blockClass,
              this.blockSelector,
              this.unblockSelector,
              !1
            ) &&
              r !== t.oldValue &&
              this.texts.push({
                value:
                  tt(
                    t.target,
                    this.maskTextClass,
                    this.maskTextSelector,
                    this.unmaskTextClass,
                    this.unmaskTextSelector,
                    this.maskAllText
                  ) && r
                    ? this.maskTextFn
                      ? this.maskTextFn(r)
                      : r.replace(/[\S]/g, "*")
                    : r,
                node: t.target,
              });
            break;
          }
          case "attributes": {
            const r = t.target;
            let s = t.attributeName,
              i = t.target.getAttribute(s);
            if (s === "value") {
              const a = Or(r),
                c = r.tagName;
              i = Jt(r, c, a);
              const u = vn({
                  maskInputOptions: this.maskInputOptions,
                  tagName: c,
                  type: a,
                }),
                d = tt(
                  t.target,
                  this.maskTextClass,
                  this.maskTextSelector,
                  this.unmaskTextClass,
                  this.unmaskTextSelector,
                  u
                );
              i = Rt({
                isMasked: d,
                element: r,
                value: i,
                maskInputFn: this.maskInputFn,
              });
            }
            if (
              fe(
                t.target,
                this.blockClass,
                this.blockSelector,
                this.unblockSelector,
                !1
              ) ||
              i === t.oldValue
            )
              return;
            let o = this.attributes.find((a) => a.node === t.target);
            if (
              r.tagName === "IFRAME" &&
              s === "src" &&
              !this.keepIframeSrcFn(i)
            )
              if (!r.contentDocument) s = "rr_src";
              else return;
            if (
              (o ||
                ((o = {
                  node: t.target,
                  attributes: {},
                  styleDiff: {},
                  _unchangedStyles: {},
                }),
                this.attributes.push(o)),
              s === "type" &&
                r.tagName === "INPUT" &&
                (t.oldValue || "").toLowerCase() === "password" &&
                r.setAttribute("data-rr-is-password", "true"),
              !Ki(r.tagName, s) &&
                ((o.attributes[s] = qi(
                  this.doc,
                  et(r.tagName),
                  et(s),
                  i,
                  r,
                  this.maskAttributeFn
                )),
                s === "style"))
            ) {
              const a = n.createElement("span");
              t.oldValue && a.setAttribute("style", t.oldValue);
              for (const c of Array.from(r.style)) {
                const u = r.style.getPropertyValue(c),
                  d = r.style.getPropertyPriority(c);
                u !== a.style.getPropertyValue(c) ||
                d !== a.style.getPropertyPriority(c)
                  ? d === ""
                    ? (o.styleDiff[c] = u)
                    : (o.styleDiff[c] = [u, d])
                  : (o._unchangedStyles[c] = [u, d]);
              }
              for (const c of Array.from(a.style))
                r.style.getPropertyValue(c) === "" && (o.styleDiff[c] = !1);
            }
            break;
          }
          case "childList": {
            if (
              fe(
                t.target,
                this.blockClass,
                this.blockSelector,
                this.unblockSelector,
                !0
              )
            )
              return;
            t.addedNodes.forEach((r) => this.genAdds(r, t.target)),
              t.removedNodes.forEach((r) => {
                const s = this.mirror.getId(r),
                  i = gt(t.target)
                    ? this.mirror.getId(t.target.host)
                    : this.mirror.getId(t.target);
                fe(
                  t.target,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector,
                  !1
                ) ||
                  Bn(r, this.mirror) ||
                  !xl(r, this.mirror) ||
                  (this.addedSet.has(r)
                    ? (ir(this.addedSet, r), this.droppedSet.add(r))
                    : (this.addedSet.has(t.target) && s === -1) ||
                      Zi(t.target, this.mirror) ||
                      (this.movedSet.has(r) && this.movedMap[Ls(s, i)]
                        ? ir(this.movedSet, r)
                        : this.removes.push({
                            parentId: i,
                            id: s,
                            isShadow:
                              gt(t.target) && yt(t.target) ? !0 : void 0,
                          })),
                  this.mapRemoves.push(r));
              });
            break;
          }
        }
      }),
      (this.genAdds = (t, n) => {
        if (
          !this.processedNodeManager.inOtherBuffer(t, this) &&
          !(this.addedSet.has(t) || this.movedSet.has(t))
        ) {
          if (this.mirror.hasNode(t)) {
            if (Bn(t, this.mirror)) return;
            this.movedSet.add(t);
            let r = null;
            n && this.mirror.hasNode(n) && (r = this.mirror.getId(n)),
              r &&
                r !== -1 &&
                (this.movedMap[Ls(this.mirror.getId(t), r)] = !0);
          } else this.addedSet.add(t), this.droppedSet.delete(t);
          fe(
            t,
            this.blockClass,
            this.blockSelector,
            this.unblockSelector,
            !1
          ) ||
            (t.childNodes.forEach((r) => this.genAdds(r)),
            sr(t) &&
              t.shadowRoot.childNodes.forEach((r) => {
                this.processedNodeManager.add(r, this), this.genAdds(r, t);
              }));
        }
      });
  }
  init(t) {
    [
      "mutationCb",
      "blockClass",
      "blockSelector",
      "unblockSelector",
      "maskAllText",
      "maskTextClass",
      "unmaskTextClass",
      "maskTextSelector",
      "unmaskTextSelector",
      "inlineStylesheet",
      "maskInputOptions",
      "maskAttributeFn",
      "maskTextFn",
      "maskInputFn",
      "keepIframeSrcFn",
      "recordCanvas",
      "inlineImages",
      "slimDOMOptions",
      "dataURLOptions",
      "doc",
      "mirror",
      "iframeManager",
      "stylesheetManager",
      "shadowDomManager",
      "canvasManager",
      "processedNodeManager",
    ].forEach((n) => {
      this[n] = t[n];
    });
  }
  freeze() {
    (this.frozen = !0), this.canvasManager.freeze();
  }
  unfreeze() {
    (this.frozen = !1), this.canvasManager.unfreeze(), this.emit();
  }
  isFrozen() {
    return this.frozen;
  }
  lock() {
    (this.locked = !0), this.canvasManager.lock();
  }
  unlock() {
    (this.locked = !1), this.canvasManager.unlock(), this.emit();
  }
  reset() {
    this.shadowDomManager.reset(), this.canvasManager.reset();
  }
}
function ir(e, t) {
  e.delete(t), t.childNodes.forEach((n) => ir(e, n));
}
function Ps(e, t, n) {
  return e.length === 0 ? !1 : so(e, t, n);
}
function so(e, t, n) {
  const { parentNode: r } = t;
  if (!r) return !1;
  const s = n.getId(r);
  return e.some((i) => i.id === s) ? !0 : so(e, r, n);
}
function Fs(e, t) {
  return e.size === 0 ? !1 : io(e, t);
}
function io(e, t) {
  const { parentNode: n } = t;
  return n ? (e.has(n) ? !0 : io(e, n)) : !1;
}
let St;
function Pl(e) {
  St = e;
}
function Fl() {
  St = void 0;
}
const D = (e) =>
    St
      ? (...n) => {
          try {
            return e(...n);
          } catch (r) {
            if (St && St(r) === !0) return () => {};
            throw r;
          }
        }
      : e,
  Ke = [];
function Nt(e) {
  try {
    if ("composedPath" in e) {
      const t = e.composedPath();
      if (t.length) return t[0];
    } else if ("path" in e && e.path.length) return e.path[0];
  } catch {}
  return e && e.target;
}
function oo(e, t) {
  var n, r;
  const s = new Ll();
  Ke.push(s), s.init(e);
  let i = window.MutationObserver || window.__rrMutationObserver;
  const o =
    (r =
      (n = window?.Zone) === null || n === void 0 ? void 0 : n.__symbol__) ===
      null || r === void 0
      ? void 0
      : r.call(n, "MutationObserver");
  o && window[o] && (i = window[o]);
  const a = new i(
    D((c) => {
      (e.onMutation && e.onMutation(c) === !1) || s.processMutations.bind(s)(c);
    })
  );
  return (
    a.observe(t, {
      attributes: !0,
      attributeOldValue: !0,
      characterData: !0,
      characterDataOldValue: !0,
      childList: !0,
      subtree: !0,
    }),
    a
  );
}
function Gl({ mousemoveCb: e, sampling: t, doc: n, mirror: r }) {
  if (t.mousemove === !1) return () => {};
  const s = typeof t.mousemove == "number" ? t.mousemove : 50,
    i = typeof t.mousemoveCallback == "number" ? t.mousemoveCallback : 500;
  let o = [],
    a;
  const c = kt(
      D((l) => {
        const f = Date.now() - a;
        e(
          o.map((h) => ((h.timeOffset -= f), h)),
          l
        ),
          (o = []),
          (a = null);
      }),
      i
    ),
    u = D(
      kt(
        D((l) => {
          const f = Nt(l),
            { clientX: h, clientY: p } = rr(l) ? l.changedTouches[0] : l;
          a || (a = Zt()),
            o.push({ x: h, y: p, id: r.getId(f), timeOffset: Zt() - a }),
            c(
              typeof DragEvent < "u" && l instanceof DragEvent
                ? R.Drag
                : l instanceof MouseEvent
                ? R.MouseMove
                : R.TouchMove
            );
        }),
        s,
        { trailing: !1 }
      )
    ),
    d = [se("mousemove", u, n), se("touchmove", u, n), se("drag", u, n)];
  return D(() => {
    d.forEach((l) => l());
  });
}
function $l({
  mouseInteractionCb: e,
  doc: t,
  mirror: n,
  blockClass: r,
  blockSelector: s,
  unblockSelector: i,
  sampling: o,
}) {
  if (o.mouseInteraction === !1) return () => {};
  const a =
      o.mouseInteraction === !0 || o.mouseInteraction === void 0
        ? {}
        : o.mouseInteraction,
    c = [];
  let u = null;
  const d = (l) => (f) => {
    const h = Nt(f);
    if (fe(h, r, s, i, !0)) return;
    let p = null,
      _ = l;
    if ("pointerType" in f) {
      switch (f.pointerType) {
        case "mouse":
          p = Ee.Mouse;
          break;
        case "touch":
          p = Ee.Touch;
          break;
        case "pen":
          p = Ee.Pen;
          break;
      }
      p === Ee.Touch
        ? ne[l] === ne.MouseDown
          ? (_ = "TouchStart")
          : ne[l] === ne.MouseUp && (_ = "TouchEnd")
        : Ee.Pen;
    } else rr(f) && (p = Ee.Touch);
    p !== null
      ? ((u = p),
        ((_.startsWith("Touch") && p === Ee.Touch) ||
          (_.startsWith("Mouse") && p === Ee.Mouse)) &&
          (p = null))
      : ne[l] === ne.Click && ((p = u), (u = null));
    const E = rr(f) ? f.changedTouches[0] : f;
    if (!E) return;
    const y = n.getId(h),
      { clientX: b, clientY: k } = E;
    D(e)(
      Object.assign(
        { type: ne[_], id: y, x: b, y: k },
        p !== null && { pointerType: p }
      )
    );
  };
  return (
    Object.keys(ne)
      .filter(
        (l) =>
          Number.isNaN(Number(l)) && !l.endsWith("_Departed") && a[l] !== !1
      )
      .forEach((l) => {
        let f = et(l);
        const h = d(l);
        if (window.PointerEvent)
          switch (ne[l]) {
            case ne.MouseDown:
            case ne.MouseUp:
              f = f.replace("mouse", "pointer");
              break;
            case ne.TouchStart:
            case ne.TouchEnd:
              return;
          }
        c.push(se(f, h, t));
      }),
    D(() => {
      c.forEach((l) => l());
    })
  );
}
function ao({
  scrollCb: e,
  doc: t,
  mirror: n,
  blockClass: r,
  blockSelector: s,
  unblockSelector: i,
  sampling: o,
}) {
  const a = D(
    kt(
      D((c) => {
        const u = Nt(c);
        if (!u || fe(u, r, s, i, !0)) return;
        const d = n.getId(u);
        if (u === t && t.defaultView) {
          const l = Vi(t.defaultView);
          e({ id: d, x: l.left, y: l.top });
        } else e({ id: d, x: u.scrollLeft, y: u.scrollTop });
      }),
      o.scroll || 100
    )
  );
  return se("scroll", a, t);
}
function Yl({ viewportResizeCb: e }, { win: t }) {
  let n = -1,
    r = -1;
  const s = D(
    kt(
      D(() => {
        const i = Ji(),
          o = Qi();
        (n !== i || r !== o) &&
          (e({ width: Number(o), height: Number(i) }), (n = i), (r = o));
      }),
      200
    )
  );
  return se("resize", s, t);
}
const Hl = ["INPUT", "TEXTAREA", "SELECT"],
  Gs = new WeakMap();
function zl({
  inputCb: e,
  doc: t,
  mirror: n,
  blockClass: r,
  blockSelector: s,
  unblockSelector: i,
  ignoreClass: o,
  ignoreSelector: a,
  maskInputOptions: c,
  maskInputFn: u,
  sampling: d,
  userTriggeredOnInput: l,
  maskTextClass: f,
  unmaskTextClass: h,
  maskTextSelector: p,
  unmaskTextSelector: _,
}) {
  function E(g) {
    let N = Nt(g);
    const G = g.isTrusted,
      S = N && nr(N.tagName);
    if (
      (S === "OPTION" && (N = N.parentElement),
      !N || !S || Hl.indexOf(S) < 0 || fe(N, r, s, i, !0))
    )
      return;
    const v = N;
    if (v.classList.contains(o) || (a && v.matches(a))) return;
    const P = Or(N);
    let q = Jt(v, S, P),
      W = !1;
    const ce = vn({ maskInputOptions: c, tagName: S, type: P }),
      L = tt(N, f, p, h, _, ce);
    (P === "radio" || P === "checkbox") && (W = N.checked),
      (q = Rt({ isMasked: L, element: N, value: q, maskInputFn: u })),
      y(
        N,
        l
          ? { text: q, isChecked: W, userTriggered: G }
          : { text: q, isChecked: W }
      );
    const me = N.name;
    P === "radio" &&
      me &&
      W &&
      t.querySelectorAll(`input[type="radio"][name="${me}"]`).forEach((H) => {
        if (H !== N) {
          const ie = Rt({
            isMasked: L,
            element: H,
            value: Jt(H, S, P),
            maskInputFn: u,
          });
          y(
            H,
            l
              ? { text: ie, isChecked: !W, userTriggered: !1 }
              : { text: ie, isChecked: !W }
          );
        }
      });
  }
  function y(g, N) {
    const G = Gs.get(g);
    if (!G || G.text !== N.text || G.isChecked !== N.isChecked) {
      Gs.set(g, N);
      const S = n.getId(g);
      D(e)(Object.assign(Object.assign({}, N), { id: S }));
    }
  }
  const k = (d.input === "last" ? ["change"] : ["input", "change"]).map((g) =>
      se(g, D(E), t)
    ),
    C = t.defaultView;
  if (!C)
    return () => {
      k.forEach((g) => g());
    };
  const F = C.Object.getOwnPropertyDescriptor(
      C.HTMLInputElement.prototype,
      "value"
    ),
    T = [
      [C.HTMLInputElement.prototype, "value"],
      [C.HTMLInputElement.prototype, "checked"],
      [C.HTMLSelectElement.prototype, "value"],
      [C.HTMLTextAreaElement.prototype, "value"],
      [C.HTMLSelectElement.prototype, "selectedIndex"],
      [C.HTMLOptionElement.prototype, "selected"],
    ];
  return (
    F &&
      F.set &&
      k.push(
        ...T.map((g) =>
          Xi(
            g[0],
            g[1],
            {
              set() {
                D(E)({ target: this, isTrusted: !1 });
              },
            },
            !1,
            C
          )
        )
      ),
    D(() => {
      k.forEach((g) => g());
    })
  );
}
function en(e) {
  const t = [];
  function n(r, s) {
    if (
      (Ft("CSSGroupingRule") && r.parentRule instanceof CSSGroupingRule) ||
      (Ft("CSSMediaRule") && r.parentRule instanceof CSSMediaRule) ||
      (Ft("CSSSupportsRule") && r.parentRule instanceof CSSSupportsRule) ||
      (Ft("CSSConditionRule") && r.parentRule instanceof CSSConditionRule)
    ) {
      const o = Array.from(r.parentRule.cssRules).indexOf(r);
      s.unshift(o);
    } else if (r.parentStyleSheet) {
      const o = Array.from(r.parentStyleSheet.cssRules).indexOf(r);
      s.unshift(o);
    }
    return s;
  }
  return n(e, t);
}
function Ie(e, t, n) {
  let r, s;
  return e
    ? (e.ownerNode ? (r = t.getId(e.ownerNode)) : (s = n.getId(e)),
      { styleId: s, id: r })
    : {};
}
function Wl(
  { styleSheetRuleCb: e, mirror: t, stylesheetManager: n },
  { win: r }
) {
  if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
  const s = r.CSSStyleSheet.prototype.insertRule;
  r.CSSStyleSheet.prototype.insertRule = new Proxy(s, {
    apply: D((d, l, f) => {
      const [h, p] = f,
        { id: _, styleId: E } = Ie(l, t, n.styleMirror);
      return (
        ((_ && _ !== -1) || (E && E !== -1)) &&
          e({ id: _, styleId: E, adds: [{ rule: h, index: p }] }),
        d.apply(l, f)
      );
    }),
  });
  const i = r.CSSStyleSheet.prototype.deleteRule;
  r.CSSStyleSheet.prototype.deleteRule = new Proxy(i, {
    apply: D((d, l, f) => {
      const [h] = f,
        { id: p, styleId: _ } = Ie(l, t, n.styleMirror);
      return (
        ((p && p !== -1) || (_ && _ !== -1)) &&
          e({ id: p, styleId: _, removes: [{ index: h }] }),
        d.apply(l, f)
      );
    }),
  });
  let o;
  r.CSSStyleSheet.prototype.replace &&
    ((o = r.CSSStyleSheet.prototype.replace),
    (r.CSSStyleSheet.prototype.replace = new Proxy(o, {
      apply: D((d, l, f) => {
        const [h] = f,
          { id: p, styleId: _ } = Ie(l, t, n.styleMirror);
        return (
          ((p && p !== -1) || (_ && _ !== -1)) &&
            e({ id: p, styleId: _, replace: h }),
          d.apply(l, f)
        );
      }),
    })));
  let a;
  r.CSSStyleSheet.prototype.replaceSync &&
    ((a = r.CSSStyleSheet.prototype.replaceSync),
    (r.CSSStyleSheet.prototype.replaceSync = new Proxy(a, {
      apply: D((d, l, f) => {
        const [h] = f,
          { id: p, styleId: _ } = Ie(l, t, n.styleMirror);
        return (
          ((p && p !== -1) || (_ && _ !== -1)) &&
            e({ id: p, styleId: _, replaceSync: h }),
          d.apply(l, f)
        );
      }),
    })));
  const c = {};
  Gt("CSSGroupingRule")
    ? (c.CSSGroupingRule = r.CSSGroupingRule)
    : (Gt("CSSMediaRule") && (c.CSSMediaRule = r.CSSMediaRule),
      Gt("CSSConditionRule") && (c.CSSConditionRule = r.CSSConditionRule),
      Gt("CSSSupportsRule") && (c.CSSSupportsRule = r.CSSSupportsRule));
  const u = {};
  return (
    Object.entries(c).forEach(([d, l]) => {
      (u[d] = {
        insertRule: l.prototype.insertRule,
        deleteRule: l.prototype.deleteRule,
      }),
        (l.prototype.insertRule = new Proxy(u[d].insertRule, {
          apply: D((f, h, p) => {
            const [_, E] = p,
              { id: y, styleId: b } = Ie(h.parentStyleSheet, t, n.styleMirror);
            return (
              ((y && y !== -1) || (b && b !== -1)) &&
                e({
                  id: y,
                  styleId: b,
                  adds: [{ rule: _, index: [...en(h), E || 0] }],
                }),
              f.apply(h, p)
            );
          }),
        })),
        (l.prototype.deleteRule = new Proxy(u[d].deleteRule, {
          apply: D((f, h, p) => {
            const [_] = p,
              { id: E, styleId: y } = Ie(h.parentStyleSheet, t, n.styleMirror);
            return (
              ((E && E !== -1) || (y && y !== -1)) &&
                e({ id: E, styleId: y, removes: [{ index: [...en(h), _] }] }),
              f.apply(h, p)
            );
          }),
        }));
    }),
    D(() => {
      (r.CSSStyleSheet.prototype.insertRule = s),
        (r.CSSStyleSheet.prototype.deleteRule = i),
        o && (r.CSSStyleSheet.prototype.replace = o),
        a && (r.CSSStyleSheet.prototype.replaceSync = a),
        Object.entries(c).forEach(([d, l]) => {
          (l.prototype.insertRule = u[d].insertRule),
            (l.prototype.deleteRule = u[d].deleteRule);
        });
    })
  );
}
function co({ mirror: e, stylesheetManager: t }, n) {
  var r, s, i;
  let o = null;
  n.nodeName === "#document" ? (o = e.getId(n)) : (o = e.getId(n.host));
  const a =
      n.nodeName === "#document"
        ? (r = n.defaultView) === null || r === void 0
          ? void 0
          : r.Document
        : (i =
            (s = n.ownerDocument) === null || s === void 0
              ? void 0
              : s.defaultView) === null || i === void 0
        ? void 0
        : i.ShadowRoot,
    c = a?.prototype
      ? Object.getOwnPropertyDescriptor(a?.prototype, "adoptedStyleSheets")
      : void 0;
  return o === null || o === -1 || !a || !c
    ? () => {}
    : (Object.defineProperty(n, "adoptedStyleSheets", {
        configurable: c.configurable,
        enumerable: c.enumerable,
        get() {
          var u;
          return (u = c.get) === null || u === void 0 ? void 0 : u.call(this);
        },
        set(u) {
          var d;
          const l =
            (d = c.set) === null || d === void 0 ? void 0 : d.call(this, u);
          if (o !== null && o !== -1)
            try {
              t.adoptStyleSheets(u, o);
            } catch {}
          return l;
        },
      }),
      D(() => {
        Object.defineProperty(n, "adoptedStyleSheets", {
          configurable: c.configurable,
          enumerable: c.enumerable,
          get: c.get,
          set: c.set,
        });
      }));
}
function jl(
  {
    styleDeclarationCb: e,
    mirror: t,
    ignoreCSSAttributes: n,
    stylesheetManager: r,
  },
  { win: s }
) {
  const i = s.CSSStyleDeclaration.prototype.setProperty;
  s.CSSStyleDeclaration.prototype.setProperty = new Proxy(i, {
    apply: D((a, c, u) => {
      var d;
      const [l, f, h] = u;
      if (n.has(l)) return i.apply(c, [l, f, h]);
      const { id: p, styleId: _ } = Ie(
        (d = c.parentRule) === null || d === void 0
          ? void 0
          : d.parentStyleSheet,
        t,
        r.styleMirror
      );
      return (
        ((p && p !== -1) || (_ && _ !== -1)) &&
          e({
            id: p,
            styleId: _,
            set: { property: l, value: f, priority: h },
            index: en(c.parentRule),
          }),
        a.apply(c, u)
      );
    }),
  });
  const o = s.CSSStyleDeclaration.prototype.removeProperty;
  return (
    (s.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
      apply: D((a, c, u) => {
        var d;
        const [l] = u;
        if (n.has(l)) return o.apply(c, [l]);
        const { id: f, styleId: h } = Ie(
          (d = c.parentRule) === null || d === void 0
            ? void 0
            : d.parentStyleSheet,
          t,
          r.styleMirror
        );
        return (
          ((f && f !== -1) || (h && h !== -1)) &&
            e({
              id: f,
              styleId: h,
              remove: { property: l },
              index: en(c.parentRule),
            }),
          a.apply(c, u)
        );
      }),
    })),
    D(() => {
      (s.CSSStyleDeclaration.prototype.setProperty = i),
        (s.CSSStyleDeclaration.prototype.removeProperty = o);
    })
  );
}
function ql({
  mediaInteractionCb: e,
  blockClass: t,
  blockSelector: n,
  unblockSelector: r,
  mirror: s,
  sampling: i,
  doc: o,
}) {
  const a = D((u) =>
      kt(
        D((d) => {
          const l = Nt(d);
          if (!l || fe(l, t, n, r, !0)) return;
          const { currentTime: f, volume: h, muted: p, playbackRate: _ } = l;
          e({
            type: u,
            id: s.getId(l),
            currentTime: f,
            volume: h,
            muted: p,
            playbackRate: _,
          });
        }),
        i.media || 500
      )
    ),
    c = [
      se("play", a(0), o),
      se("pause", a(1), o),
      se("seeked", a(2), o),
      se("volumechange", a(3), o),
      se("ratechange", a(4), o),
    ];
  return D(() => {
    c.forEach((u) => u());
  });
}
function Kl({ fontCb: e, doc: t }) {
  const n = t.defaultView;
  if (!n) return () => {};
  const r = [],
    s = new WeakMap(),
    i = n.FontFace;
  n.FontFace = function (c, u, d) {
    const l = new i(c, u, d);
    return (
      s.set(l, {
        family: c,
        buffer: typeof u != "string",
        descriptors: d,
        fontSource:
          typeof u == "string"
            ? u
            : JSON.stringify(Array.from(new Uint8Array(u))),
      }),
      l
    );
  };
  const o = Ur(t.fonts, "add", function (a) {
    return function (c) {
      return (
        setTimeout(
          D(() => {
            const u = s.get(c);
            u && (e(u), s.delete(c));
          }),
          0
        ),
        a.apply(this, [c])
      );
    };
  });
  return (
    r.push(() => {
      n.FontFace = i;
    }),
    r.push(o),
    D(() => {
      r.forEach((a) => a());
    })
  );
}
function Xl(e) {
  const {
    doc: t,
    mirror: n,
    blockClass: r,
    blockSelector: s,
    unblockSelector: i,
    selectionCb: o,
  } = e;
  let a = !0;
  const c = D(() => {
    const u = t.getSelection();
    if (!u || (a && u?.isCollapsed)) return;
    a = u.isCollapsed || !1;
    const d = [],
      l = u.rangeCount || 0;
    for (let f = 0; f < l; f++) {
      const h = u.getRangeAt(f),
        {
          startContainer: p,
          startOffset: _,
          endContainer: E,
          endOffset: y,
        } = h;
      fe(p, r, s, i, !0) ||
        fe(E, r, s, i, !0) ||
        d.push({
          start: n.getId(p),
          startOffset: _,
          end: n.getId(E),
          endOffset: y,
        });
    }
    o({ ranges: d });
  });
  return c(), se("selectionchange", c);
}
function Vl({ doc: e, customElementCb: t }) {
  const n = e.defaultView;
  return !n || !n.customElements
    ? () => {}
    : Ur(n.customElements, "define", function (s) {
        return function (i, o, a) {
          try {
            t({ define: { name: i } });
          } catch {}
          return s.apply(this, [i, o, a]);
        };
      });
}
function Jl(e, t = {}) {
  const n = e.doc.defaultView;
  if (!n) return () => {};
  const r = oo(e, e.doc),
    s = Gl(e),
    i = $l(e),
    o = ao(e),
    a = Yl(e, { win: n }),
    c = zl(e),
    u = ql(e),
    d = Wl(e, { win: n }),
    l = co(e, e.doc),
    f = jl(e, { win: n }),
    h = e.collectFonts ? Kl(e) : () => {},
    p = Xl(e),
    _ = Vl(e);
  return D(() => {
    Ke.forEach((E) => E.reset()),
      r.disconnect(),
      s(),
      i(),
      o(),
      a(),
      c(),
      u(),
      d(),
      l(),
      f(),
      h(),
      p(),
      _();
  });
}
function Ft(e) {
  return typeof window[e] < "u";
}
function Gt(e) {
  return !!(
    typeof window[e] < "u" &&
    window[e].prototype &&
    "insertRule" in window[e].prototype &&
    "deleteRule" in window[e].prototype
  );
}
class or {
  constructor(t) {
    (this.generateIdFn = t),
      (this.iframeIdToRemoteIdMap = new WeakMap()),
      (this.iframeRemoteIdToIdMap = new WeakMap());
  }
  getId(t, n, r, s) {
    const i = r || this.getIdToRemoteIdMap(t),
      o = s || this.getRemoteIdToIdMap(t);
    let a = i.get(n);
    return a || ((a = this.generateIdFn()), i.set(n, a), o.set(a, n)), a;
  }
  getIds(t, n) {
    const r = this.getIdToRemoteIdMap(t),
      s = this.getRemoteIdToIdMap(t);
    return n.map((i) => this.getId(t, i, r, s));
  }
  getRemoteId(t, n, r) {
    const s = r || this.getRemoteIdToIdMap(t);
    if (typeof n != "number") return n;
    const i = s.get(n);
    return i || -1;
  }
  getRemoteIds(t, n) {
    const r = this.getRemoteIdToIdMap(t);
    return n.map((s) => this.getRemoteId(t, s, r));
  }
  reset(t) {
    if (!t) {
      (this.iframeIdToRemoteIdMap = new WeakMap()),
        (this.iframeRemoteIdToIdMap = new WeakMap());
      return;
    }
    this.iframeIdToRemoteIdMap.delete(t), this.iframeRemoteIdToIdMap.delete(t);
  }
  getIdToRemoteIdMap(t) {
    let n = this.iframeIdToRemoteIdMap.get(t);
    return n || ((n = new Map()), this.iframeIdToRemoteIdMap.set(t, n)), n;
  }
  getRemoteIdToIdMap(t) {
    let n = this.iframeRemoteIdToIdMap.get(t);
    return n || ((n = new Map()), this.iframeRemoteIdToIdMap.set(t, n)), n;
  }
}
class Ql {
  constructor() {
    (this.crossOriginIframeMirror = new or(Br)),
      (this.crossOriginIframeRootIdMap = new WeakMap());
  }
  addIframe() {}
  addLoadListener() {}
  attachIframe() {}
}
class Zl {
  constructor(t) {
    (this.iframes = new WeakMap()),
      (this.crossOriginIframeMap = new WeakMap()),
      (this.crossOriginIframeMirror = new or(Br)),
      (this.crossOriginIframeRootIdMap = new WeakMap()),
      (this.mutationCb = t.mutationCb),
      (this.wrappedEmit = t.wrappedEmit),
      (this.stylesheetManager = t.stylesheetManager),
      (this.recordCrossOriginIframes = t.recordCrossOriginIframes),
      (this.crossOriginIframeStyleMirror = new or(
        this.stylesheetManager.styleMirror.generateId.bind(
          this.stylesheetManager.styleMirror
        )
      )),
      (this.mirror = t.mirror),
      this.recordCrossOriginIframes &&
        window.addEventListener("message", this.handleMessage.bind(this));
  }
  addIframe(t) {
    this.iframes.set(t, !0),
      t.contentWindow && this.crossOriginIframeMap.set(t.contentWindow, t);
  }
  addLoadListener(t) {
    this.loadListener = t;
  }
  attachIframe(t, n) {
    var r;
    this.mutationCb({
      adds: [{ parentId: this.mirror.getId(t), nextId: null, node: n }],
      removes: [],
      texts: [],
      attributes: [],
      isAttachIframe: !0,
    }),
      (r = this.loadListener) === null || r === void 0 || r.call(this, t),
      t.contentDocument &&
        t.contentDocument.adoptedStyleSheets &&
        t.contentDocument.adoptedStyleSheets.length > 0 &&
        this.stylesheetManager.adoptStyleSheets(
          t.contentDocument.adoptedStyleSheets,
          this.mirror.getId(t.contentDocument)
        );
  }
  handleMessage(t) {
    const n = t;
    if (n.data.type !== "rrweb" || n.origin !== n.data.origin || !t.source)
      return;
    const s = this.crossOriginIframeMap.get(t.source);
    if (!s) return;
    const i = this.transformCrossOriginEvent(s, n.data.event);
    i && this.wrappedEmit(i, n.data.isCheckout);
  }
  transformCrossOriginEvent(t, n) {
    var r;
    switch (n.type) {
      case w.FullSnapshot: {
        this.crossOriginIframeMirror.reset(t),
          this.crossOriginIframeStyleMirror.reset(t),
          this.replaceIdOnNode(n.data.node, t);
        const s = n.data.node.id;
        return (
          this.crossOriginIframeRootIdMap.set(t, s),
          this.patchRootIdOnNode(n.data.node, s),
          {
            timestamp: n.timestamp,
            type: w.IncrementalSnapshot,
            data: {
              source: R.Mutation,
              adds: [
                {
                  parentId: this.mirror.getId(t),
                  nextId: null,
                  node: n.data.node,
                },
              ],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0,
            },
          }
        );
      }
      case w.Meta:
      case w.Load:
      case w.DomContentLoaded:
        return !1;
      case w.Plugin:
        return n;
      case w.Custom:
        return (
          this.replaceIds(n.data.payload, t, [
            "id",
            "parentId",
            "previousId",
            "nextId",
          ]),
          n
        );
      case w.IncrementalSnapshot:
        switch (n.data.source) {
          case R.Mutation:
            return (
              n.data.adds.forEach((s) => {
                this.replaceIds(s, t, ["parentId", "nextId", "previousId"]),
                  this.replaceIdOnNode(s.node, t);
                const i = this.crossOriginIframeRootIdMap.get(t);
                i && this.patchRootIdOnNode(s.node, i);
              }),
              n.data.removes.forEach((s) => {
                this.replaceIds(s, t, ["parentId", "id"]);
              }),
              n.data.attributes.forEach((s) => {
                this.replaceIds(s, t, ["id"]);
              }),
              n.data.texts.forEach((s) => {
                this.replaceIds(s, t, ["id"]);
              }),
              n
            );
          case R.Drag:
          case R.TouchMove:
          case R.MouseMove:
            return (
              n.data.positions.forEach((s) => {
                this.replaceIds(s, t, ["id"]);
              }),
              n
            );
          case R.ViewportResize:
            return !1;
          case R.MediaInteraction:
          case R.MouseInteraction:
          case R.Scroll:
          case R.CanvasMutation:
          case R.Input:
            return this.replaceIds(n.data, t, ["id"]), n;
          case R.StyleSheetRule:
          case R.StyleDeclaration:
            return (
              this.replaceIds(n.data, t, ["id"]),
              this.replaceStyleIds(n.data, t, ["styleId"]),
              n
            );
          case R.Font:
            return n;
          case R.Selection:
            return (
              n.data.ranges.forEach((s) => {
                this.replaceIds(s, t, ["start", "end"]);
              }),
              n
            );
          case R.AdoptedStyleSheet:
            return (
              this.replaceIds(n.data, t, ["id"]),
              this.replaceStyleIds(n.data, t, ["styleIds"]),
              (r = n.data.styles) === null ||
                r === void 0 ||
                r.forEach((s) => {
                  this.replaceStyleIds(s, t, ["styleId"]);
                }),
              n
            );
        }
    }
    return !1;
  }
  replace(t, n, r, s) {
    for (const i of s)
      (!Array.isArray(n[i]) && typeof n[i] != "number") ||
        (Array.isArray(n[i])
          ? (n[i] = t.getIds(r, n[i]))
          : (n[i] = t.getId(r, n[i])));
    return n;
  }
  replaceIds(t, n, r) {
    return this.replace(this.crossOriginIframeMirror, t, n, r);
  }
  replaceStyleIds(t, n, r) {
    return this.replace(this.crossOriginIframeStyleMirror, t, n, r);
  }
  replaceIdOnNode(t, n) {
    this.replaceIds(t, n, ["id", "rootId"]),
      "childNodes" in t &&
        t.childNodes.forEach((r) => {
          this.replaceIdOnNode(r, n);
        });
  }
  patchRootIdOnNode(t, n) {
    t.type !== V.Document && !t.rootId && (t.rootId = n),
      "childNodes" in t &&
        t.childNodes.forEach((r) => {
          this.patchRootIdOnNode(r, n);
        });
  }
}
class ef {
  init() {}
  addShadowRoot() {}
  observeAttachShadow() {}
  reset() {}
}
class tf {
  constructor(t) {
    (this.shadowDoms = new WeakSet()),
      (this.restoreHandlers = []),
      (this.mutationCb = t.mutationCb),
      (this.scrollCb = t.scrollCb),
      (this.bypassOptions = t.bypassOptions),
      (this.mirror = t.mirror),
      this.init();
  }
  init() {
    this.reset(), this.patchAttachShadow(Element, document);
  }
  addShadowRoot(t, n) {
    if (!yt(t) || this.shadowDoms.has(t)) return;
    this.shadowDoms.add(t);
    const r = oo(
      Object.assign(Object.assign({}, this.bypassOptions), {
        doc: n,
        mutationCb: this.mutationCb,
        mirror: this.mirror,
        shadowDomManager: this,
      }),
      t
    );
    this.restoreHandlers.push(() => r.disconnect()),
      this.restoreHandlers.push(
        ao(
          Object.assign(Object.assign({}, this.bypassOptions), {
            scrollCb: this.scrollCb,
            doc: t,
            mirror: this.mirror,
          })
        )
      ),
      setTimeout(() => {
        t.adoptedStyleSheets &&
          t.adoptedStyleSheets.length > 0 &&
          this.bypassOptions.stylesheetManager.adoptStyleSheets(
            t.adoptedStyleSheets,
            this.mirror.getId(t.host)
          ),
          this.restoreHandlers.push(
            co(
              {
                mirror: this.mirror,
                stylesheetManager: this.bypassOptions.stylesheetManager,
              },
              t
            )
          );
      }, 0);
  }
  observeAttachShadow(t) {
    !t.contentWindow ||
      !t.contentDocument ||
      this.patchAttachShadow(t.contentWindow.Element, t.contentDocument);
  }
  patchAttachShadow(t, n) {
    const r = this;
    this.restoreHandlers.push(
      Ur(t.prototype, "attachShadow", function (s) {
        return function (i) {
          const o = s.call(this, i);
          return (
            this.shadowRoot && ro(this) && r.addShadowRoot(this.shadowRoot, n),
            o
          );
        };
      })
    );
  }
  reset() {
    this.restoreHandlers.forEach((t) => {
      try {
        t();
      } catch {}
    }),
      (this.restoreHandlers = []),
      (this.shadowDoms = new WeakSet());
  }
}
class nf {
  reset() {}
  freeze() {}
  unfreeze() {}
  lock() {}
  unlock() {}
}
class rf {
  constructor(t) {
    (this.trackedLinkElements = new WeakSet()),
      (this.styleMirror = new Ol()),
      (this.mutationCb = t.mutationCb),
      (this.adoptedStyleSheetCb = t.adoptedStyleSheetCb);
  }
  attachLinkElement(t, n) {
    "_cssText" in n.attributes &&
      this.mutationCb({
        adds: [],
        removes: [],
        texts: [],
        attributes: [{ id: n.id, attributes: n.attributes }],
      }),
      this.trackLinkElement(t);
  }
  trackLinkElement(t) {
    this.trackedLinkElements.has(t) ||
      (this.trackedLinkElements.add(t), this.trackStylesheetInLinkElement(t));
  }
  adoptStyleSheets(t, n) {
    if (t.length === 0) return;
    const r = { id: n, styleIds: [] },
      s = [];
    for (const i of t) {
      let o;
      this.styleMirror.has(i)
        ? (o = this.styleMirror.getId(i))
        : ((o = this.styleMirror.add(i)),
          s.push({
            styleId: o,
            rules: Array.from(i.rules || CSSRule, (a, c) => ({
              rule: Wi(a),
              index: c,
            })),
          })),
        r.styleIds.push(o);
    }
    s.length > 0 && (r.styles = s), this.adoptedStyleSheetCb(r);
  }
  reset() {
    this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet());
  }
  trackStylesheetInLinkElement(t) {}
}
class sf {
  constructor() {
    (this.nodeMap = new WeakMap()), (this.loop = !0), this.periodicallyClear();
  }
  periodicallyClear() {
    requestAnimationFrame(() => {
      this.clear(), this.loop && this.periodicallyClear();
    });
  }
  inOtherBuffer(t, n) {
    const r = this.nodeMap.get(t);
    return r && Array.from(r).some((s) => s !== n);
  }
  add(t, n) {
    this.nodeMap.set(t, (this.nodeMap.get(t) || new Set()).add(n));
  }
  clear() {
    this.nodeMap = new WeakMap();
  }
  destroy() {
    this.loop = !1;
  }
}
function J(e) {
  const t = e;
  return (t.timestamp = Zt()), t;
}
let tn;
const Te = al();
function Be(e = {}) {
  const {
    emit: t,
    checkoutEveryNms: n,
    checkoutEveryNth: r,
    blockClass: s = "rr-block",
    blockSelector: i = null,
    unblockSelector: o = null,
    ignoreClass: a = "rr-ignore",
    ignoreSelector: c = null,
    maskAllText: u = !1,
    maskTextClass: d = "rr-mask",
    unmaskTextClass: l = null,
    maskTextSelector: f = null,
    unmaskTextSelector: h = null,
    inlineStylesheet: p = !0,
    maskAllInputs: _,
    maskInputOptions: E,
    slimDOMOptions: y,
    maskAttributeFn: b,
    maskInputFn: k,
    maskTextFn: C,
    packFn: F,
    sampling: T = {},
    dataURLOptions: g = {},
    mousemoveWait: N,
    recordCanvas: G = !1,
    recordCrossOriginIframes: S = !1,
    recordAfter: v = e.recordAfter === "DOMContentLoaded"
      ? e.recordAfter
      : "load",
    userTriggeredOnInput: P = !1,
    collectFonts: q = !1,
    inlineImages: W = !1,
    keepIframeSrcFn: ce = () => !1,
    ignoreCSSAttributes: L = new Set([]),
    errorHandler: me,
    onMutation: H,
    getCanvasManager: ie,
  } = e;
  Pl(me);
  const ue = S ? window.parent === window : !0;
  let Ge = !1;
  if (!ue)
    try {
      window.parent.document && (Ge = !1);
    } catch {
      Ge = !0;
    }
  if (ue && !t) throw new Error("emit function is required");
  N !== void 0 && T.mousemove === void 0 && (T.mousemove = N), Te.reset();
  const $e =
      _ === !0
        ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            radio: !0,
            checkbox: !0,
          }
        : E !== void 0
        ? E
        : {},
    Ae =
      y === !0 || y === "all"
        ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: y === "all",
            headMetaDescKeywords: y === "all",
          }
        : y || {};
  Ml();
  let ot,
    at = 0;
  const Hr = (I) => (F && !Ge && (I = F(I)), I),
    K = (I, ke) => {
      var $;
      if (
        (!(($ = Ke[0]) === null || $ === void 0) &&
          $.isFrozen() &&
          I.type !== w.FullSnapshot &&
          !(I.type === w.IncrementalSnapshot && I.data.source === R.Mutation) &&
          Ke.forEach((te) => te.unfreeze()),
        ue)
      )
        t?.(Hr(I), ke);
      else if (Ge) {
        const te = {
          type: "rrweb",
          event: Hr(I),
          origin: window.location.origin,
          isCheckout: ke,
        };
        window.parent.postMessage(te, "*");
      }
      if (I.type === w.FullSnapshot) (ot = I), (at = 0);
      else if (I.type === w.IncrementalSnapshot) {
        if (I.data.source === R.Mutation && I.data.isAttachIframe) return;
        at++;
        const te = r && at >= r,
          Y = n && I.timestamp - ot.timestamp > n;
        (te || Y) && Nn(!0);
      }
    },
    Ct = (I) => {
      K(
        J({
          type: w.IncrementalSnapshot,
          data: Object.assign({ source: R.Mutation }, I),
        })
      );
    },
    zr = (I) =>
      K(
        J({
          type: w.IncrementalSnapshot,
          data: Object.assign({ source: R.Scroll }, I),
        })
      ),
    Oo = (I) =>
      K(
        J({
          type: w.IncrementalSnapshot,
          data: Object.assign({ source: R.CanvasMutation }, I),
        })
      ),
    Bo = (I) =>
      K(
        J({
          type: w.IncrementalSnapshot,
          data: Object.assign({ source: R.AdoptedStyleSheet }, I),
        })
      ),
    Ue = new rf({ mutationCb: Ct, adoptedStyleSheetCb: Bo }),
    ct =
      typeof __RRWEB_EXCLUDE_IFRAME__ == "boolean" && __RRWEB_EXCLUDE_IFRAME__
        ? new Ql()
        : new Zl({
            mirror: Te,
            mutationCb: Ct,
            stylesheetManager: Ue,
            recordCrossOriginIframes: S,
            wrappedEmit: K,
          }),
    Dn = new sf(),
    Wr = ie
      ? ie({
          recordCanvas: G,
          blockClass: s,
          blockSelector: i,
          unblockSelector: o,
          sampling: T.canvas,
          dataURLOptions: g,
        })
      : new nf(),
    xt =
      typeof __RRWEB_EXCLUDE_SHADOW_DOM__ == "boolean" &&
      __RRWEB_EXCLUDE_SHADOW_DOM__
        ? new ef()
        : new tf({
            mutationCb: Ct,
            scrollCb: zr,
            bypassOptions: {
              onMutation: H,
              blockClass: s,
              blockSelector: i,
              unblockSelector: o,
              maskAllText: u,
              maskTextClass: d,
              unmaskTextClass: l,
              maskTextSelector: f,
              unmaskTextSelector: h,
              inlineStylesheet: p,
              maskInputOptions: $e,
              dataURLOptions: g,
              maskAttributeFn: b,
              maskTextFn: C,
              maskInputFn: k,
              recordCanvas: G,
              inlineImages: W,
              sampling: T,
              slimDOMOptions: Ae,
              iframeManager: ct,
              stylesheetManager: Ue,
              canvasManager: Wr,
              keepIframeSrcFn: ce,
              processedNodeManager: Dn,
            },
            mirror: Te,
          }),
    Nn = (I = !1) => {
      K(
        J({
          type: w.Meta,
          data: { href: window.location.href, width: Qi(), height: Ji() },
        }),
        I
      ),
        Ue.reset(),
        xt.init(),
        Ke.forEach(($) => $.lock());
      const ke = Cl(document, {
        mirror: Te,
        blockClass: s,
        blockSelector: i,
        unblockSelector: o,
        maskAllText: u,
        maskTextClass: d,
        unmaskTextClass: l,
        maskTextSelector: f,
        unmaskTextSelector: h,
        inlineStylesheet: p,
        maskAllInputs: $e,
        maskAttributeFn: b,
        maskInputFn: k,
        maskTextFn: C,
        slimDOM: Ae,
        dataURLOptions: g,
        recordCanvas: G,
        inlineImages: W,
        onSerialize: ($) => {
          eo($, Te) && ct.addIframe($),
            to($, Te) && Ue.trackLinkElement($),
            sr($) && xt.addShadowRoot($.shadowRoot, document);
        },
        onIframeLoad: ($, te) => {
          ct.attachIframe($, te), xt.observeAttachShadow($);
        },
        onStylesheetLoad: ($, te) => {
          Ue.attachLinkElement($, te);
        },
        keepIframeSrcFn: ce,
      });
      if (!ke) return console.warn("Failed to snapshot the document");
      K(
        J({
          type: w.FullSnapshot,
          data: { node: ke, initialOffset: Vi(window) },
        }),
        I
      ),
        Ke.forEach(($) => $.unlock()),
        document.adoptedStyleSheets &&
          document.adoptedStyleSheets.length > 0 &&
          Ue.adoptStyleSheets(document.adoptedStyleSheets, Te.getId(document));
    };
  tn = Nn;
  try {
    const I = [],
      ke = (te) =>
        D(Jl)(
          {
            onMutation: H,
            mutationCb: Ct,
            mousemoveCb: (Y, Ao) =>
              K(
                J({
                  type: w.IncrementalSnapshot,
                  data: { source: Ao, positions: Y },
                })
              ),
            mouseInteractionCb: (Y) =>
              K(
                J({
                  type: w.IncrementalSnapshot,
                  data: Object.assign({ source: R.MouseInteraction }, Y),
                })
              ),
            scrollCb: zr,
            viewportResizeCb: (Y) =>
              K(
                J({
                  type: w.IncrementalSnapshot,
                  data: Object.assign({ source: R.ViewportResize }, Y),
                })
              ),
            inputCb: (Y) =>
              K(
                J({
                  type: w.IncrementalSnapshot,
                  data: Object.assign({ source: R.Input }, Y),
                })
              ),
            mediaInteractionCb: (Y) =>
              K(
                J({
                  type: w.IncrementalSnapshot,
                  data: Object.assign({ source: R.MediaInteraction }, Y),
                })
              ),
            styleSheetRuleCb: (Y) =>
              K(
                J({
                  type: w.IncrementalSnapshot,
                  data: Object.assign({ source: R.StyleSheetRule }, Y),
                })
              ),
            styleDeclarationCb: (Y) =>
              K(
                J({
                  type: w.IncrementalSnapshot,
                  data: Object.assign({ source: R.StyleDeclaration }, Y),
                })
              ),
            canvasMutationCb: Oo,
            fontCb: (Y) =>
              K(
                J({
                  type: w.IncrementalSnapshot,
                  data: Object.assign({ source: R.Font }, Y),
                })
              ),
            selectionCb: (Y) => {
              K(
                J({
                  type: w.IncrementalSnapshot,
                  data: Object.assign({ source: R.Selection }, Y),
                })
              );
            },
            customElementCb: (Y) => {
              K(
                J({
                  type: w.IncrementalSnapshot,
                  data: Object.assign({ source: R.CustomElement }, Y),
                })
              );
            },
            blockClass: s,
            ignoreClass: a,
            ignoreSelector: c,
            maskAllText: u,
            maskTextClass: d,
            unmaskTextClass: l,
            maskTextSelector: f,
            unmaskTextSelector: h,
            maskInputOptions: $e,
            inlineStylesheet: p,
            sampling: T,
            recordCanvas: G,
            inlineImages: W,
            userTriggeredOnInput: P,
            collectFonts: q,
            doc: te,
            maskAttributeFn: b,
            maskInputFn: k,
            maskTextFn: C,
            keepIframeSrcFn: ce,
            blockSelector: i,
            unblockSelector: o,
            slimDOMOptions: Ae,
            dataURLOptions: g,
            mirror: Te,
            iframeManager: ct,
            stylesheetManager: Ue,
            shadowDomManager: xt,
            processedNodeManager: Dn,
            canvasManager: Wr,
            ignoreCSSAttributes: L,
            plugins: [],
          },
          {}
        );
    ct.addLoadListener((te) => {
      try {
        I.push(ke(te.contentDocument));
      } catch (Y) {
        console.warn(Y);
      }
    });
    const $ = () => {
      Nn(), I.push(ke(document));
    };
    return (
      document.readyState === "interactive" ||
      document.readyState === "complete"
        ? $()
        : (I.push(
            se("DOMContentLoaded", () => {
              K(J({ type: w.DomContentLoaded, data: {} })),
                v === "DOMContentLoaded" && $();
            })
          ),
          I.push(
            se(
              "load",
              () => {
                K(J({ type: w.Load, data: {} })), v === "load" && $();
              },
              window
            )
          )),
      () => {
        I.forEach((te) => te()), Dn.destroy(), (tn = void 0), Fl();
      }
    );
  } catch (I) {
    console.warn(I);
  }
}
function of(e) {
  if (!tn) throw new Error("please take full snapshot after start recording");
  tn(e);
}
Be.mirror = Te;
Be.takeFullSnapshot = of;
const af = 3,
  cf = 5;
function Lr(e) {
  return e > 9999999999 ? e : e * 1e3;
}
function An(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function Rn(e, t) {
  t.category !== "sentry.transaction" &&
    (["ui.click", "ui.input"].includes(t.category)
      ? e.triggerUserActivity()
      : e.checkAndHandleExpiredSession(),
    e.addUpdate(
      () => (
        e.throttledAddEvent({
          type: w.Custom,
          timestamp: (t.timestamp || 0) * 1e3,
          data: { tag: "breadcrumb", payload: ye(t, 10, 1e3) },
        }),
        t.category === "console"
      )
    ));
}
const uf = "button,a";
function uo(e) {
  return e.closest(uf) || e;
}
function lo(e) {
  const t = fo(e);
  return !t || !(t instanceof Element) ? t : uo(t);
}
function fo(e) {
  return df(e) ? e.target : e;
}
function df(e) {
  return typeof e == "object" && !!e && "target" in e;
}
let De;
function lf(e) {
  return (
    De || ((De = []), ff()),
    De.push(e),
    () => {
      const t = De ? De.indexOf(e) : -1;
      t > -1 && De.splice(t, 1);
    }
  );
}
function ff() {
  Z(U, "open", function (e) {
    return function (...t) {
      if (De)
        try {
          De.forEach((n) => n());
        } catch {}
      return e.apply(U, t);
    };
  });
}
function hf(e, t, n) {
  e.handleClick(t, n);
}
class pf {
  constructor(t, n, r = Rn) {
    (this._lastMutation = 0),
      (this._lastScroll = 0),
      (this._clicks = []),
      (this._timeout = n.timeout / 1e3),
      (this._threshold = n.threshold / 1e3),
      (this._scollTimeout = n.scrollTimeout / 1e3),
      (this._replay = t),
      (this._ignoreSelector = n.ignoreSelector),
      (this._addBreadcrumbEvent = r);
  }
  addListeners() {
    const t = lf(() => {
      this._lastMutation = $s();
    });
    this._teardown = () => {
      t(),
        (this._clicks = []),
        (this._lastMutation = 0),
        (this._lastScroll = 0);
    };
  }
  removeListeners() {
    this._teardown && this._teardown(),
      this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
  }
  handleClick(t, n) {
    if (_f(n, this._ignoreSelector) || !gf(t)) return;
    const r = {
      timestamp: An(t.timestamp),
      clickBreadcrumb: t,
      clickCount: 0,
      node: n,
    };
    this._clicks.some(
      (s) => s.node === r.node && Math.abs(s.timestamp - r.timestamp) < 1
    ) ||
      (this._clicks.push(r),
      this._clicks.length === 1 && this._scheduleCheckClicks());
  }
  registerMutation(t = Date.now()) {
    this._lastMutation = An(t);
  }
  registerScroll(t = Date.now()) {
    this._lastScroll = An(t);
  }
  registerClick(t) {
    const n = uo(t);
    this._handleMultiClick(n);
  }
  _handleMultiClick(t) {
    this._getClicks(t).forEach((n) => {
      n.clickCount++;
    });
  }
  _getClicks(t) {
    return this._clicks.filter((n) => n.node === t);
  }
  _checkClicks() {
    const t = [],
      n = $s();
    this._clicks.forEach((r) => {
      !r.mutationAfter &&
        this._lastMutation &&
        (r.mutationAfter =
          r.timestamp <= this._lastMutation
            ? this._lastMutation - r.timestamp
            : void 0),
        !r.scrollAfter &&
          this._lastScroll &&
          (r.scrollAfter =
            r.timestamp <= this._lastScroll
              ? this._lastScroll - r.timestamp
              : void 0),
        r.timestamp + this._timeout <= n && t.push(r);
    });
    for (const r of t) {
      const s = this._clicks.indexOf(r);
      s > -1 && (this._generateBreadcrumbs(r), this._clicks.splice(s, 1));
    }
    this._clicks.length && this._scheduleCheckClicks();
  }
  _generateBreadcrumbs(t) {
    const n = this._replay,
      r = t.scrollAfter && t.scrollAfter <= this._scollTimeout,
      s = t.mutationAfter && t.mutationAfter <= this._threshold,
      i = !r && !s,
      { clickCount: o, clickBreadcrumb: a } = t;
    if (i) {
      const c = Math.min(t.mutationAfter || this._timeout, this._timeout) * 1e3,
        u = c < this._timeout * 1e3 ? "mutation" : "timeout",
        d = {
          type: "default",
          message: a.message,
          timestamp: a.timestamp,
          category: "ui.slowClickDetected",
          data: {
            ...a.data,
            url: U.location.href,
            route: n.getCurrentRoute(),
            timeAfterClickMs: c,
            endReason: u,
            clickCount: o || 1,
          },
        };
      this._addBreadcrumbEvent(n, d);
      return;
    }
    if (o > 1) {
      const c = {
        type: "default",
        message: a.message,
        timestamp: a.timestamp,
        category: "ui.multiClick",
        data: {
          ...a.data,
          url: U.location.href,
          route: n.getCurrentRoute(),
          clickCount: o,
          metric: !0,
        },
      };
      this._addBreadcrumbEvent(n, c);
    }
  }
  _scheduleCheckClicks() {
    this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
      (this._checkClickTimeout = setTimeout(() => this._checkClicks(), 1e3));
  }
}
const mf = ["A", "BUTTON", "INPUT"];
function _f(e, t) {
  return !!(
    !mf.includes(e.tagName) ||
    (e.tagName === "INPUT" &&
      !["submit", "button"].includes(e.getAttribute("type") || "")) ||
    (e.tagName === "A" &&
      (e.hasAttribute("download") ||
        (e.hasAttribute("target") && e.getAttribute("target") !== "_self"))) ||
    (t && e.matches(t))
  );
}
function gf(e) {
  return !!(e.data && typeof e.data.nodeId == "number" && e.timestamp);
}
function $s() {
  return Date.now() / 1e3;
}
function yf(e, t) {
  try {
    if (!Sf(t)) return;
    const { source: n } = t.data;
    if (
      (n === R.Mutation && e.registerMutation(t.timestamp),
      n === R.Scroll && e.registerScroll(t.timestamp),
      Ef(t))
    ) {
      const { type: r, id: s } = t.data,
        i = Be.mirror.getNode(s);
      i instanceof HTMLElement && r === ne.Click && e.registerClick(i);
    }
  } catch {}
}
function Sf(e) {
  return e.type === af;
}
function Ef(e) {
  return e.data.source === R.MouseInteraction;
}
function be(e) {
  return { timestamp: Date.now() / 1e3, type: "default", ...e };
}
var nn;
(function (e) {
  (e[(e.Document = 0)] = "Document"),
    (e[(e.DocumentType = 1)] = "DocumentType"),
    (e[(e.Element = 2)] = "Element"),
    (e[(e.Text = 3)] = "Text"),
    (e[(e.CDATA = 4)] = "CDATA"),
    (e[(e.Comment = 5)] = "Comment");
})(nn || (nn = {}));
const Tf = new Set([
  "id",
  "class",
  "aria-label",
  "role",
  "name",
  "alt",
  "title",
  "data-test-id",
  "data-testid",
  "disabled",
  "aria-disabled",
]);
function bf(e) {
  const t = {};
  for (const n in e)
    if (Tf.has(n)) {
      let r = n;
      (n === "data-testid" || n === "data-test-id") && (r = "testId"),
        (t[r] = e[n]);
    }
  return t;
}
const vf = (e) => (t) => {
  if (!e.isEnabled()) return;
  const n = Rf(t);
  if (!n) return;
  const r = t.name === "click",
    s = r && t.event;
  r &&
    e.clickDetector &&
    s &&
    !s.altKey &&
    !s.metaKey &&
    !s.ctrlKey &&
    !s.shiftKey &&
    hf(e.clickDetector, n, lo(t.event)),
    Rn(e, n);
};
function ho(e, t) {
  const n = Be.mirror.getId(e),
    r = n && Be.mirror.getNode(n),
    s = r && Be.mirror.getMeta(r),
    i = s && kf(s) ? s : null;
  return {
    message: t,
    data: i
      ? {
          nodeId: n,
          node: {
            id: n,
            tagName: i.tagName,
            textContent: Array.from(i.childNodes)
              .map((o) => o.type === nn.Text && o.textContent)
              .filter(Boolean)
              .map((o) => o.trim())
              .join(""),
            attributes: bf(i.attributes),
          },
        }
      : {},
  };
}
function Rf(e) {
  const { target: t, message: n } = wf(e);
  return be({ category: `ui.${e.name}`, ...ho(t, n) });
}
function wf(e) {
  const t = e.name === "click";
  let n,
    r = null;
  try {
    (r = t ? lo(e.event) : fo(e.event)),
      (n = Fe(r, { maxStringLength: 200 }) || "<unknown>");
  } catch {
    n = "<unknown>";
  }
  return { target: r, message: n };
}
function kf(e) {
  return e.type === nn.Element;
}
function If(e, t) {
  if (!e.isEnabled()) return;
  e.updateUserActivity();
  const n = Df(t);
  n && Rn(e, n);
}
function Df(e) {
  const {
    metaKey: t,
    shiftKey: n,
    ctrlKey: r,
    altKey: s,
    key: i,
    target: o,
  } = e;
  if (!o || Nf(o) || !i) return null;
  const a = t || r || s,
    c = i.length === 1;
  if (!a && c) return null;
  const u = Fe(o, { maxStringLength: 200 }) || "<unknown>",
    d = ho(o, u);
  return be({
    category: "ui.keyDown",
    message: u,
    data: { ...d.data, metaKey: t, shiftKey: n, ctrlKey: r, altKey: s, key: i },
  });
}
function Nf(e) {
  return (
    e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable
  );
}
const Ys = { resource: Bf, paint: Mf, navigation: Of };
function Cf(e) {
  return e.map(xf).filter(Boolean);
}
function xf(e) {
  return Ys[e.entryType] ? Ys[e.entryType](e) : null;
}
function nt(e) {
  return ((pe || U.performance.timeOrigin) + e) / 1e3;
}
function Mf(e) {
  const { duration: t, entryType: n, name: r, startTime: s } = e,
    i = nt(s);
  return { type: n, name: r, start: i, end: i + t, data: void 0 };
}
function Of(e) {
  const {
    entryType: t,
    name: n,
    decodedBodySize: r,
    duration: s,
    domComplete: i,
    encodedBodySize: o,
    domContentLoadedEventStart: a,
    domContentLoadedEventEnd: c,
    domInteractive: u,
    loadEventStart: d,
    loadEventEnd: l,
    redirectCount: f,
    startTime: h,
    transferSize: p,
    type: _,
  } = e;
  return s === 0
    ? null
    : {
        type: `${t}.${_}`,
        start: nt(h),
        end: nt(i),
        name: n,
        data: {
          size: p,
          decodedBodySize: r,
          encodedBodySize: o,
          duration: s,
          domInteractive: u,
          domContentLoadedEventStart: a,
          domContentLoadedEventEnd: c,
          loadEventStart: d,
          loadEventEnd: l,
          domComplete: i,
          redirectCount: f,
        },
      };
}
function Bf(e) {
  const {
    entryType: t,
    initiatorType: n,
    name: r,
    responseEnd: s,
    startTime: i,
    decodedBodySize: o,
    encodedBodySize: a,
    responseStatus: c,
    transferSize: u,
  } = e;
  return ["fetch", "xmlhttprequest"].includes(n)
    ? null
    : {
        type: `${t}.${n}`,
        start: nt(i),
        end: nt(s),
        name: r,
        data: {
          size: u,
          statusCode: c,
          decodedBodySize: o,
          encodedBodySize: a,
        },
      };
}
function Af(e) {
  const t = e.entries,
    n = t[t.length - 1],
    r = n ? n.element : void 0,
    s = e.value,
    i = nt(s);
  return {
    type: "largest-contentful-paint",
    name: "largest-contentful-paint",
    start: i,
    end: i,
    data: { value: s, size: s, nodeId: r ? Be.mirror.getId(r) : void 0 },
  };
}
function Uf(e) {
  function t(s) {
    e.performanceEntries.includes(s) || e.performanceEntries.push(s);
  }
  function n({ entries: s }) {
    s.forEach(t);
  }
  const r = [];
  return (
    ["navigation", "paint", "resource"].forEach((s) => {
      r.push(Tn(s, n));
    }),
    r.push(
      $i(({ metric: s }) => {
        e.replayPerformanceEntries.push(Af(s));
      })
    ),
    () => {
      r.forEach((s) => s());
    }
  );
}
const Lf =
  'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,a=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),s=a.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(a,n),O(a,s-8,r.d()),O(a,s-4,e),a}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(G)return G.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(let r=0,e=t.length;r<e;r++)n+=t[r].length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});';
function Pf() {
  const e = new Blob([Lf]);
  return URL.createObjectURL(e);
}
function re(e, t) {
  (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
    (m.info(e), t && po(e));
}
function Je(e, t) {
  (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
    (m.info(e),
    t &&
      setTimeout(() => {
        po(e);
      }, 0));
}
function po(e) {
  x().addBreadcrumb(
    {
      category: "console",
      data: { logger: "replay" },
      level: "info",
      message: e,
    },
    { level: "info" }
  );
}
class Pr extends Error {
  constructor() {
    super(`Event buffer exceeded maximum size of ${Mr}.`);
  }
}
class mo {
  constructor() {
    (this.events = []), (this._totalSize = 0), (this.hasCheckout = !1);
  }
  get hasEvents() {
    return this.events.length > 0;
  }
  get type() {
    return "sync";
  }
  destroy() {
    this.events = [];
  }
  async addEvent(t) {
    const n = JSON.stringify(t).length;
    if (((this._totalSize += n), this._totalSize > Mr)) throw new Pr();
    this.events.push(t);
  }
  finish() {
    return new Promise((t) => {
      const n = this.events;
      this.clear(), t(JSON.stringify(n));
    });
  }
  clear() {
    (this.events = []), (this._totalSize = 0), (this.hasCheckout = !1);
  }
  getEarliestTimestamp() {
    const t = this.events.map((n) => n.timestamp).sort()[0];
    return t ? Lr(t) : null;
  }
}
class Ff {
  constructor(t) {
    (this._worker = t), (this._id = 0);
  }
  ensureReady() {
    return this._ensureReadyPromise
      ? this._ensureReadyPromise
      : ((this._ensureReadyPromise = new Promise((t, n) => {
          this._worker.addEventListener(
            "message",
            ({ data: r }) => {
              r.success ? t() : n();
            },
            { once: !0 }
          ),
            this._worker.addEventListener(
              "error",
              (r) => {
                n(r);
              },
              { once: !0 }
            );
        })),
        this._ensureReadyPromise);
  }
  destroy() {
    re("[Replay] Destroying compression worker"), this._worker.terminate();
  }
  postMessage(t, n) {
    const r = this._getAndIncrementId();
    return new Promise((s, i) => {
      const o = ({ data: a }) => {
        const c = a;
        if (c.method === t && c.id === r) {
          if ((this._worker.removeEventListener("message", o), !c.success)) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
              m.error("[Replay]", c.response),
              i(new Error("Error in compression worker"));
            return;
          }
          s(c.response);
        }
      };
      this._worker.addEventListener("message", o),
        this._worker.postMessage({ id: r, method: t, arg: n });
    });
  }
  _getAndIncrementId() {
    return this._id++;
  }
}
class Gf {
  constructor(t) {
    (this._worker = new Ff(t)),
      (this._earliestTimestamp = null),
      (this._totalSize = 0),
      (this.hasCheckout = !1);
  }
  get hasEvents() {
    return !!this._earliestTimestamp;
  }
  get type() {
    return "worker";
  }
  ensureReady() {
    return this._worker.ensureReady();
  }
  destroy() {
    this._worker.destroy();
  }
  addEvent(t) {
    const n = Lr(t.timestamp);
    (!this._earliestTimestamp || n < this._earliestTimestamp) &&
      (this._earliestTimestamp = n);
    const r = JSON.stringify(t);
    return (
      (this._totalSize += r.length),
      this._totalSize > Mr
        ? Promise.reject(new Pr())
        : this._sendEventToWorker(r)
    );
  }
  finish() {
    return this._finishRequest();
  }
  clear() {
    (this._earliestTimestamp = null),
      (this._totalSize = 0),
      (this.hasCheckout = !1),
      this._worker.postMessage("clear");
  }
  getEarliestTimestamp() {
    return this._earliestTimestamp;
  }
  _sendEventToWorker(t) {
    return this._worker.postMessage("addEvent", t);
  }
  async _finishRequest() {
    const t = await this._worker.postMessage("finish");
    return (this._earliestTimestamp = null), (this._totalSize = 0), t;
  }
}
class $f {
  constructor(t) {
    (this._fallback = new mo()),
      (this._compression = new Gf(t)),
      (this._used = this._fallback),
      (this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded());
  }
  get type() {
    return this._used.type;
  }
  get hasEvents() {
    return this._used.hasEvents;
  }
  get hasCheckout() {
    return this._used.hasCheckout;
  }
  set hasCheckout(t) {
    this._used.hasCheckout = t;
  }
  destroy() {
    this._fallback.destroy(), this._compression.destroy();
  }
  clear() {
    return this._used.clear();
  }
  getEarliestTimestamp() {
    return this._used.getEarliestTimestamp();
  }
  addEvent(t) {
    return this._used.addEvent(t);
  }
  async finish() {
    return await this.ensureWorkerIsLoaded(), this._used.finish();
  }
  ensureWorkerIsLoaded() {
    return this._ensureWorkerIsLoadedPromise;
  }
  async _ensureWorkerIsLoaded() {
    try {
      await this._compression.ensureReady();
    } catch {
      re(
        "[Replay] Failed to load the compression worker, falling back to simple buffer"
      );
      return;
    }
    await this._switchToCompressionWorker();
  }
  async _switchToCompressionWorker() {
    const { events: t, hasCheckout: n } = this._fallback,
      r = [];
    for (const s of t) r.push(this._compression.addEvent(s));
    (this._compression.hasCheckout = n), (this._used = this._compression);
    try {
      await Promise.all(r);
    } catch (s) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.warn("[Replay] Failed to add events when switching buffers.", s);
    }
  }
}
function Yf({ useCompression: e, workerUrl: t }) {
  if (e && window.Worker) {
    const n = Hf(t);
    if (n) return n;
  }
  return re("[Replay] Using simple buffer"), new mo();
}
function Hf(e) {
  try {
    const t = e || zf();
    if (!t) return;
    re(`[Replay] Using compression worker${e ? ` from ${e}` : ""}`);
    const n = new Worker(t);
    return new $f(n);
  } catch {
    re("[Replay] Failed to create compression worker");
  }
}
function zf() {
  return typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ > "u" ||
    !__SENTRY_EXCLUDE_REPLAY_WORKER__
    ? Pf()
    : "";
}
function Fr() {
  try {
    return "sessionStorage" in U && !!U.sessionStorage;
  } catch {
    return !1;
  }
}
function Wf(e) {
  jf(), (e.session = void 0);
}
function jf() {
  if (Fr())
    try {
      U.sessionStorage.removeItem(Cr);
    } catch {}
}
function _o(e) {
  return e === void 0 ? !1 : Math.random() < e;
}
function Gr(e) {
  if (Fr())
    try {
      U.sessionStorage.setItem(Cr, JSON.stringify(e));
    } catch {}
}
function go(e) {
  const t = Date.now(),
    n = e.id || Re(),
    r = e.started || t,
    s = e.lastActivity || t,
    i = e.segmentId || 0,
    o = e.sampled,
    a = e.previousSessionId;
  return {
    id: n,
    started: r,
    lastActivity: s,
    segmentId: i,
    sampled: o,
    previousSessionId: a,
  };
}
function qf(e, t) {
  return _o(e) ? "session" : t ? "buffer" : !1;
}
function Hs(
  { sessionSampleRate: e, allowBuffering: t, stickySession: n = !1 },
  { previousSessionId: r } = {}
) {
  const s = qf(e, t),
    i = go({ sampled: s, previousSessionId: r });
  return n && Gr(i), i;
}
function Kf(e) {
  if (!Fr()) return null;
  try {
    const t = U.sessionStorage.getItem(Cr);
    if (!t) return null;
    const n = JSON.parse(t);
    return Je("[Replay] Loading existing session", e), go(n);
  } catch {
    return null;
  }
}
function ar(e, t, n = +new Date()) {
  return e === null || t === void 0 || t < 0 ? !0 : t === 0 ? !1 : e + t <= n;
}
function yo(
  e,
  { maxReplayDuration: t, sessionIdleExpire: n, targetTime: r = Date.now() }
) {
  return ar(e.started, t, r) || ar(e.lastActivity, n, r);
}
function So(e, { sessionIdleExpire: t, maxReplayDuration: n }) {
  return !(
    !yo(e, { sessionIdleExpire: t, maxReplayDuration: n }) ||
    (e.sampled === "buffer" && e.segmentId === 0)
  );
}
function Un(
  {
    traceInternals: e,
    sessionIdleExpire: t,
    maxReplayDuration: n,
    previousSessionId: r,
  },
  s
) {
  const i = s.stickySession && Kf(e);
  return i
    ? So(i, { sessionIdleExpire: t, maxReplayDuration: n })
      ? (Je(
          "[Replay] Session in sessionStorage is expired, creating new one..."
        ),
        Hs(s, { previousSessionId: i.id }))
      : i
    : (Je("[Replay] Creating new session", e), Hs(s, { previousSessionId: r }));
}
function Xf(e) {
  return e.type === w.Custom;
}
function $r(e, t, n) {
  return To(e, t) ? (Eo(e, t, n), !0) : !1;
}
function Vf(e, t, n) {
  return To(e, t) ? Eo(e, t, n) : Promise.resolve(null);
}
async function Eo(e, t, n) {
  if (!e.eventBuffer) return null;
  try {
    n && e.recordingMode === "buffer" && e.eventBuffer.clear(),
      n && (e.eventBuffer.hasCheckout = !0);
    const r = e.getOptions(),
      s = Jf(t, r.beforeAddRecordingEvent);
    return s ? await e.eventBuffer.addEvent(s) : void 0;
  } catch (r) {
    const s = r && r instanceof Pr ? "addEventSizeExceeded" : "addEvent";
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && m.error(r),
      await e.stop({ reason: s });
    const i = x().getClient();
    i && i.recordDroppedEvent("internal_sdk_error", "replay");
  }
}
function To(e, t) {
  if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
  const n = Lr(t.timestamp);
  return n + e.timeouts.sessionIdlePause < Date.now()
    ? !1
    : n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration
    ? (re(
        `[Replay] Skipping event with timestamp ${n} because it is after maxReplayDuration`,
        e.getOptions()._experiments.traceInternals
      ),
      !1)
    : !0;
}
function Jf(e, t) {
  try {
    if (typeof t == "function" && Xf(e)) return t(e);
  } catch (n) {
    return (
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.error(
          "[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...",
          n
        ),
      null
    );
  }
  return e;
}
function bo(e) {
  return !e.type;
}
function cr(e) {
  return e.type === "transaction";
}
function Qf(e) {
  return e.type === "replay_event";
}
function zs(e) {
  return e.type === "feedback";
}
function vo(e) {
  const t = th();
  return (n, r) => {
    if (!e.isEnabled() || (!bo(n) && !cr(n))) return;
    const s = r && r.statusCode;
    if (!(t && (!s || s < 200 || s >= 300))) {
      if (cr(n)) {
        Zf(e, n);
        return;
      }
      eh(e, n);
    }
  };
}
function Zf(e, t) {
  const n = e.getContext();
  t.contexts &&
    t.contexts.trace &&
    t.contexts.trace.trace_id &&
    n.traceIds.size < 100 &&
    n.traceIds.add(t.contexts.trace.trace_id);
}
function eh(e, t) {
  const n = e.getContext();
  if (
    (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id),
    e.recordingMode !== "buffer" || !t.tags || !t.tags.replayId)
  )
    return;
  const { beforeErrorSampling: r } = e.getOptions();
  (typeof r == "function" && !r(t)) ||
    setTimeout(() => {
      e.sendBufferedReplayOrFlush();
    });
}
function th() {
  const e = x().getClient();
  if (!e) return !1;
  const t = e.getTransport();
  return (t && t.send.__sentry__baseTransport__) || !1;
}
function nh(e, t) {
  return e.type ||
    !e.exception ||
    !e.exception.values ||
    !e.exception.values.length
    ? !1
    : !!(t.originalException && t.originalException.__rrweb__);
}
function rh(e, t) {
  e.triggerUserActivity(),
    e.addUpdate(() =>
      t.timestamp
        ? (e.throttledAddEvent({
            type: w.Custom,
            timestamp: t.timestamp * 1e3,
            data: {
              timestamp: t.timestamp,
              tag: "breadcrumb",
              payload: {
                category: "sentry.feedback",
                data: { feedbackId: t.event_id },
              },
            },
          }),
          !1)
        : !0
    );
}
function sh(e, t) {
  return e.recordingMode !== "buffer" ||
    t.message === xr ||
    !t.exception ||
    t.type
    ? !1
    : _o(e.getOptions().errorSampleRate);
}
function ih(e, t = !1) {
  const n = t ? vo(e) : void 0;
  return Object.assign(
    (r, s) =>
      e.isEnabled()
        ? Qf(r)
          ? (delete r.breadcrumbs, r)
          : (!bo(r) && !cr(r) && !zs(r)) || !e.checkAndHandleExpiredSession()
          ? r
          : zs(r)
          ? (e.flush(),
            (r.contexts.feedback.replay_id = e.getSessionId()),
            rh(e, r),
            r)
          : nh(r, s) && !e.getOptions()._experiments.captureExceptions
          ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
              m.log("[Replay] Ignoring error from rrweb internals", r),
            null)
          : ((sh(e, r) || e.recordingMode === "session") &&
              (r.tags = { ...r.tags, replayId: e.getSessionId() }),
            n && n(r, { statusCode: 200 }),
            r)
        : r,
    { id: "Replay" }
  );
}
function wn(e, t) {
  return t.map(({ type: n, start: r, end: s, name: i, data: o }) => {
    const a = e.throttledAddEvent({
      type: w.Custom,
      timestamp: r,
      data: {
        tag: "performanceSpan",
        payload: {
          op: n,
          description: i,
          startTimestamp: r,
          endTimestamp: s,
          data: o,
        },
      },
    });
    return typeof a == "string" ? Promise.resolve(null) : a;
  });
}
function oh(e) {
  const { from: t, to: n } = e,
    r = Date.now() / 1e3;
  return {
    type: "navigation.push",
    start: r,
    end: r,
    name: n,
    data: { previous: t },
  };
}
function ah(e) {
  return (t) => {
    if (!e.isEnabled()) return;
    const n = oh(t);
    n !== null &&
      (e.getContext().urls.push(n.name),
      e.triggerUserActivity(),
      e.addUpdate(() => (wn(e, [n]), !1)));
  };
}
function ch(e, t) {
  return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
    e.getOptions()._experiments.traceInternals
    ? !1
    : Qc(t, x());
}
function kn(e, t) {
  e.isEnabled() &&
    t !== null &&
    (ch(e, t.name) || e.addUpdate(() => (wn(e, [t]), !0)));
}
function uh(e) {
  const { startTimestamp: t, endTimestamp: n, fetchData: r, response: s } = e;
  if (!n) return null;
  const { method: i, url: o } = r;
  return {
    type: "resource.fetch",
    start: t / 1e3,
    end: n / 1e3,
    name: o,
    data: { method: i, statusCode: s ? s.status : void 0 },
  };
}
function dh(e) {
  return (t) => {
    if (!e.isEnabled()) return;
    const n = uh(t);
    kn(e, n);
  };
}
function lh(e) {
  const { startTimestamp: t, endTimestamp: n, xhr: r } = e,
    s = r[Me];
  if (!t || !n || !s) return null;
  const { method: i, url: o, status_code: a } = s;
  return o === void 0
    ? null
    : {
        type: "resource.xhr",
        name: o,
        start: t / 1e3,
        end: n / 1e3,
        data: { method: i, statusCode: a },
      };
}
function fh(e) {
  return (t) => {
    if (!e.isEnabled()) return;
    const n = lh(t);
    kn(e, n);
  };
}
function rn(e, t) {
  if (e)
    try {
      if (typeof e == "string") return t.encode(e).length;
      if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
      if (e instanceof FormData) {
        const n = ko(e);
        return t.encode(n).length;
      }
      if (e instanceof Blob) return e.size;
      if (e instanceof ArrayBuffer) return e.byteLength;
    } catch {}
}
function Ro(e) {
  if (!e) return;
  const t = parseInt(e, 10);
  return isNaN(t) ? void 0 : t;
}
function Yr(e) {
  try {
    if (typeof e == "string") return e;
    if (e instanceof URLSearchParams) return e.toString();
    if (e instanceof FormData) return ko(e);
  } catch {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      m.warn("[Replay] Failed to serialize body", e);
  }
  (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
    m.info("[Replay] Skipping network body because of body type", e);
}
function wo(e, t) {
  if (!t) return null;
  const {
    startTimestamp: n,
    endTimestamp: r,
    url: s,
    method: i,
    statusCode: o,
    request: a,
    response: c,
  } = t;
  return {
    type: e,
    start: n / 1e3,
    end: r / 1e3,
    name: s,
    data: ve({ method: i, statusCode: o, request: a, response: c }),
  };
}
function It(e) {
  return { headers: {}, size: e, _meta: { warnings: ["URL_SKIPPED"] } };
}
function Oe(e, t, n) {
  if (!t && Object.keys(e).length === 0) return;
  if (!t) return { headers: e };
  if (!n) return { headers: e, size: t };
  const r = { headers: e, size: t },
    { body: s, warnings: i } = hh(n);
  return (r.body = s), i && i.length > 0 && (r._meta = { warnings: i }), r;
}
function ur(e, t) {
  return Object.keys(e).reduce((n, r) => {
    const s = r.toLowerCase();
    return t.includes(s) && e[r] && (n[s] = e[r]), n;
  }, {});
}
function ko(e) {
  return new URLSearchParams(e).toString();
}
function hh(e) {
  if (!e || typeof e != "string") return { body: e };
  const t = e.length > xs,
    n = ph(e);
  if (t) {
    const r = e.slice(0, xs);
    return n
      ? { body: r, warnings: ["MAYBE_JSON_TRUNCATED"] }
      : { body: `${r}…`, warnings: ["TEXT_TRUNCATED"] };
  }
  if (n)
    try {
      return { body: JSON.parse(e) };
    } catch {}
  return { body: e };
}
function ph(e) {
  const t = e[0],
    n = e[e.length - 1];
  return (t === "[" && n === "]") || (t === "{" && n === "}");
}
function sn(e, t) {
  const n = mh(e);
  return rt(n, t);
}
function mh(e, t = U.document.baseURI) {
  if (
    e.startsWith("http://") ||
    e.startsWith("https://") ||
    e.startsWith(U.location.origin)
  )
    return e;
  const n = new URL(e, t);
  if (n.origin !== new URL(t).origin) return e;
  const r = n.href;
  return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r;
}
async function _h(e, t, n) {
  try {
    const r = await yh(e, t, n),
      s = wo("resource.fetch", r);
    kn(n.replay, s);
  } catch (r) {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      m.error("[Replay] Failed to capture fetch breadcrumb", r);
  }
}
function gh(e, t, n) {
  const { input: r, response: s } = t,
    i = r ? Io(r) : void 0,
    o = rn(i, n.textEncoder),
    a = s ? Ro(s.headers.get("content-length")) : void 0;
  o !== void 0 && (e.data.request_body_size = o),
    a !== void 0 && (e.data.response_body_size = a);
}
async function yh(e, t, n) {
  const r = Date.now(),
    { startTimestamp: s = r, endTimestamp: i = r } = t,
    {
      url: o,
      method: a,
      status_code: c = 0,
      request_body_size: u,
      response_body_size: d,
    } = e.data,
    l = sn(o, n.networkDetailAllowUrls) && !sn(o, n.networkDetailDenyUrls),
    f = l ? Sh(n, t.input, u) : It(u),
    h = await Eh(l, n, t.response, d);
  return {
    startTimestamp: s,
    endTimestamp: i,
    url: o,
    method: a,
    statusCode: c,
    request: f,
    response: h,
  };
}
function Sh({ networkCaptureBodies: e, networkRequestHeaders: t }, n, r) {
  const s = n ? bh(n, t) : {};
  if (!e) return Oe(s, r, void 0);
  const i = Io(n),
    o = Yr(i);
  return Oe(s, r, o);
}
async function Eh(
  e,
  { networkCaptureBodies: t, textEncoder: n, networkResponseHeaders: r },
  s,
  i
) {
  if (!e && i !== void 0) return It(i);
  const o = s ? Do(s.headers, r) : {};
  if (!s || (!t && i !== void 0)) return Oe(o, i, void 0);
  try {
    const a = s.clone(),
      c = await Th(a),
      u = c && c.length && i === void 0 ? rn(c, n) : i;
    return e ? (t ? Oe(o, u, c) : Oe(o, u, void 0)) : It(u);
  } catch (a) {
    return (
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.warn("[Replay] Failed to serialize response body", a),
      Oe(o, i, void 0)
    );
  }
}
async function Th(e) {
  try {
    return await e.text();
  } catch {
    return;
  }
}
function Io(e = []) {
  if (!(e.length !== 2 || typeof e[1] != "object")) return e[1].body;
}
function Do(e, t) {
  const n = {};
  return (
    t.forEach((r) => {
      e.get(r) && (n[r] = e.get(r));
    }),
    n
  );
}
function bh(e, t) {
  return e.length === 1 && typeof e[0] != "string"
    ? Ws(e[0], t)
    : e.length === 2
    ? Ws(e[1], t)
    : {};
}
function Ws(e, t) {
  if (!e) return {};
  const n = e.headers;
  return n
    ? n instanceof Headers
      ? Do(n, t)
      : Array.isArray(n)
      ? {}
      : ur(n, t)
    : {};
}
async function vh(e, t, n) {
  try {
    const r = wh(e, t, n),
      s = wo("resource.xhr", r);
    kn(n.replay, s);
  } catch (r) {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      m.error("[Replay] Failed to capture xhr breadcrumb", r);
  }
}
function Rh(e, t, n) {
  const { xhr: r, input: s } = t;
  if (!r) return;
  const i = rn(s, n.textEncoder),
    o = r.getResponseHeader("content-length")
      ? Ro(r.getResponseHeader("content-length"))
      : rn(r.response, n.textEncoder);
  i !== void 0 && (e.data.request_body_size = i),
    o !== void 0 && (e.data.response_body_size = o);
}
function wh(e, t, n) {
  const r = Date.now(),
    { startTimestamp: s = r, endTimestamp: i = r, input: o, xhr: a } = t,
    {
      url: c,
      method: u,
      status_code: d = 0,
      request_body_size: l,
      response_body_size: f,
    } = e.data;
  if (!c) return null;
  if (
    !a ||
    !sn(c, n.networkDetailAllowUrls) ||
    sn(c, n.networkDetailDenyUrls)
  ) {
    const C = It(l),
      F = It(f);
    return {
      startTimestamp: s,
      endTimestamp: i,
      url: c,
      method: u,
      statusCode: d,
      request: C,
      response: F,
    };
  }
  const h = a[Me],
    p = h ? ur(h.request_headers, n.networkRequestHeaders) : {},
    _ = ur(kh(a), n.networkResponseHeaders),
    E = n.networkCaptureBodies ? Yr(o) : void 0,
    y = n.networkCaptureBodies ? Ih(a) : void 0,
    b = Oe(p, l, E),
    k = Oe(_, f, y);
  return {
    startTimestamp: s,
    endTimestamp: i,
    url: c,
    method: u,
    statusCode: d,
    request: b,
    response: k,
  };
}
function kh(e) {
  const t = e.getAllResponseHeaders();
  return t
    ? t
        .split(
          `\r
`
        )
        .reduce((n, r) => {
          const [s, i] = r.split(": ");
          return (n[s.toLowerCase()] = i), n;
        }, {})
    : {};
}
function Ih(e) {
  const t = [];
  try {
    return e.responseText;
  } catch (n) {
    t.push(n);
  }
  try {
    const n = e.response;
    return Yr(n);
  } catch (n) {
    t.push(n);
  }
  (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
    m.warn("[Replay] Failed to get xhr response body", ...t);
}
function Dh(e) {
  const t = x().getClient();
  try {
    const n = new TextEncoder(),
      {
        networkDetailAllowUrls: r,
        networkDetailDenyUrls: s,
        networkCaptureBodies: i,
        networkRequestHeaders: o,
        networkResponseHeaders: a,
      } = e.getOptions(),
      c = {
        replay: e,
        textEncoder: n,
        networkDetailAllowUrls: r,
        networkDetailDenyUrls: s,
        networkCaptureBodies: i,
        networkRequestHeaders: o,
        networkResponseHeaders: a,
      };
    t && t.on
      ? t.on("beforeAddBreadcrumb", (u, d) => Nh(c, u, d))
      : (ee("fetch", dh(e)), ee("xhr", fh(e)));
  } catch {}
}
function Nh(e, t, n) {
  if (t.data)
    try {
      Ch(t) && Mh(n) && (Rh(t, n, e), vh(t, n, e)),
        xh(t) && Oh(n) && (gh(t, n, e), _h(t, n, e));
    } catch {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.warn("Error when enriching network breadcrumb");
    }
}
function Ch(e) {
  return e.category === "xhr";
}
function xh(e) {
  return e.category === "fetch";
}
function Mh(e) {
  return e && e.xhr;
}
function Oh(e) {
  return e && e.response;
}
let js = null;
function Bh(e) {
  return !!e.category;
}
const Ah = (e) => (t) => {
  if (!e.isEnabled()) return;
  const n = Uh(t);
  n && Rn(e, n);
};
function Uh(e) {
  const t = e.getLastBreadcrumb && e.getLastBreadcrumb();
  return js === t ||
    !t ||
    ((js = t),
    !Bh(t) ||
      ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(
        t.category
      ) ||
      t.category.startsWith("ui."))
    ? null
    : t.category === "console"
    ? Lh(t)
    : be(t);
}
function Lh(e) {
  const t = e.data && e.data.arguments;
  if (!Array.isArray(t) || t.length === 0) return be(e);
  let n = !1;
  const r = t.map((s) => {
    if (!s) return s;
    if (typeof s == "string")
      return s.length > Pt ? ((n = !0), `${s.slice(0, Pt)}…`) : s;
    if (typeof s == "object")
      try {
        const i = ye(s, 7);
        return JSON.stringify(i).length > Pt
          ? ((n = !0), `${JSON.stringify(i, null, 2).slice(0, Pt)}…`)
          : i;
      } catch {}
    return s;
  });
  return be({
    ...e,
    data: {
      ...e.data,
      arguments: r,
      ...(n ? { _meta: { warnings: ["CONSOLE_ARG_TRUNCATED"] } } : {}),
    },
  });
}
function Ph(e) {
  const t = x().getScope(),
    n = x().getClient();
  t.addScopeListener(Ah(e)), ee("dom", vf(e)), ee("history", ah(e)), Dh(e);
  const r = ih(e, !qs(n));
  n && n.addEventProcessor ? n.addEventProcessor(r) : ci(r),
    qs(n) &&
      (n.on("afterSendEvent", vo(e)),
      n.on("createDsc", (s) => {
        const i = e.getSessionId();
        i &&
          e.isEnabled() &&
          e.recordingMode === "session" &&
          e.checkAndHandleExpiredSession() &&
          (s.replay_id = i);
      }),
      n.on("startTransaction", (s) => {
        e.lastTransaction = s;
      }),
      n.on("finishTransaction", (s) => {
        e.lastTransaction = s;
      }),
      n.on("beforeSendFeedback", (s, i) => {
        const o = e.getSessionId();
        i &&
          i.includeReplay &&
          e.isEnabled() &&
          o &&
          (e.flush(),
          s.contexts &&
            s.contexts.feedback &&
            (s.contexts.feedback.replay_id = o));
      }));
}
function qs(e) {
  return !!(e && e.on);
}
async function Fh(e) {
  try {
    return Promise.all(wn(e, [Gh(U.performance.memory)]));
  } catch {
    return [];
  }
}
function Gh(e) {
  const { jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r } = e,
    s = Date.now() / 1e3;
  return {
    type: "memory",
    name: "memory",
    start: s,
    end: s,
    data: {
      memory: { jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r },
    },
  };
}
function $h(e, t, n) {
  let r, s, i;
  const o = n && n.maxWait ? Math.max(n.maxWait, t) : 0;
  function a() {
    return c(), (r = e()), r;
  }
  function c() {
    s !== void 0 && clearTimeout(s),
      i !== void 0 && clearTimeout(i),
      (s = i = void 0);
  }
  function u() {
    return s !== void 0 || i !== void 0 ? a() : r;
  }
  function d() {
    return (
      s && clearTimeout(s),
      (s = setTimeout(a, t)),
      o && i === void 0 && (i = setTimeout(a, o)),
      r
    );
  }
  return (d.cancel = c), (d.flush = u), d;
}
function Yh(e) {
  let t = !1;
  return (n, r) => {
    if (!e.checkAndHandleExpiredSession()) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.warn("[Replay] Received replay event after session expired.");
      return;
    }
    const s = r || !t;
    (t = !0),
      e.clickDetector && yf(e.clickDetector, n),
      e.addUpdate(() => {
        if (
          (e.recordingMode === "buffer" && s && e.setInitialState(),
          !$r(e, n, s))
        )
          return !0;
        if (!s) return !1;
        if ((zh(e, s), e.session && e.session.previousSessionId)) return !0;
        if (e.recordingMode === "buffer" && e.session && e.eventBuffer) {
          const i = e.eventBuffer.getEarliestTimestamp();
          i &&
            (re(
              `[Replay] Updating session start time to earliest event in buffer to ${new Date(
                i
              )}`,
              e.getOptions()._experiments.traceInternals
            ),
            (e.session.started = i),
            e.getOptions().stickySession && Gr(e.session));
        }
        return e.recordingMode === "session" && e.flush(), !0;
      });
  };
}
function Hh(e) {
  const t = e.getOptions();
  return {
    type: w.Custom,
    timestamp: Date.now(),
    data: {
      tag: "options",
      payload: {
        sessionSampleRate: t.sessionSampleRate,
        errorSampleRate: t.errorSampleRate,
        useCompressionOption: t.useCompression,
        blockAllMedia: t.blockAllMedia,
        maskAllText: t.maskAllText,
        maskAllInputs: t.maskAllInputs,
        useCompression: e.eventBuffer ? e.eventBuffer.type === "worker" : !1,
        networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
        networkCaptureBodies: t.networkCaptureBodies,
        networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
        networkResponseHasHeaders: t.networkResponseHeaders.length > 0,
      },
    },
  };
}
function zh(e, t) {
  !t || !e.session || e.session.segmentId !== 0 || $r(e, Hh(e), !1);
}
function Wh(e, t, n, r) {
  return st(gi(e, Er(e), r, n), [
    [{ type: "replay_event" }, e],
    [
      {
        type: "replay_recording",
        length:
          typeof t == "string" ? new TextEncoder().encode(t).length : t.length,
      },
      t,
    ],
  ]);
}
function jh({ recordingData: e, headers: t }) {
  let n;
  const r = `${JSON.stringify(t)}
`;
  if (typeof e == "string") n = `${r}${e}`;
  else {
    const i = new TextEncoder().encode(r);
    (n = new Uint8Array(i.length + e.length)), n.set(i), n.set(e, i.length);
  }
  return n;
}
async function qh({ client: e, scope: t, replayId: n, event: r }) {
  const s =
      typeof e._integrations == "object" &&
      e._integrations !== null &&
      !Array.isArray(e._integrations)
        ? Object.keys(e._integrations)
        : void 0,
    i = { event_id: n, integrations: s };
  e.emit && e.emit("preprocessEvent", r, i);
  const o = await Ri(e.getOptions(), r, i, t, e);
  if (!o) return null;
  o.platform = o.platform || "javascript";
  const a = e.getSdkMetadata && e.getSdkMetadata(),
    { name: c, version: u } = (a && a.sdk) || {};
  return (
    (o.sdk = {
      ...o.sdk,
      name: c || "sentry.javascript.unknown",
      version: u || "0.0.0",
    }),
    o
  );
}
async function Kh({
  recordingData: e,
  replayId: t,
  segmentId: n,
  eventContext: r,
  timestamp: s,
  session: i,
}) {
  const o = jh({ recordingData: e, headers: { segment_id: n } }),
    { urls: a, errorIds: c, traceIds: u, initialTimestamp: d } = r,
    l = x(),
    f = l.getClient(),
    h = l.getScope(),
    p = f && f.getTransport(),
    _ = f && f.getDsn();
  if (!f || !p || !_ || !i.sampled) return;
  const E = {
      type: Hd,
      replay_start_timestamp: d / 1e3,
      timestamp: s / 1e3,
      error_ids: c,
      trace_ids: u,
      urls: a,
      replay_id: t,
      segment_id: n,
      replay_type: i.sampled,
    },
    y = await qh({ scope: h, client: f, replayId: t, event: E });
  if (!y) {
    f.recordDroppedEvent("event_processor", "replay", E),
      re("An event processor returned `null`, will not send event.");
    return;
  }
  delete y.sdkProcessingMetadata;
  const b = Wh(y, o, _, f.getOptions().tunnel);
  let k;
  try {
    k = await p.send(b);
  } catch (F) {
    const T = new Error(xr);
    try {
      T.cause = F;
    } catch {}
    throw T;
  }
  if (!k) return k;
  if (
    typeof k.statusCode == "number" &&
    (k.statusCode < 200 || k.statusCode >= 300)
  )
    throw new No(k.statusCode);
  const C = Si({}, k);
  if (yi(C, "replay")) throw new Co(C);
  return k;
}
class No extends Error {
  constructor(t) {
    super(`Transport returned status code ${t}`);
  }
}
class Co extends Error {
  constructor(t) {
    super("Rate limit hit"), (this.rateLimits = t);
  }
}
async function xo(e, t = { count: 0, interval: Xd }) {
  const { recordingData: n, options: r } = e;
  if (n.length)
    try {
      return await Kh(e), !0;
    } catch (s) {
      if (s instanceof No || s instanceof Co) throw s;
      if (
        (oa("Replays", { _retryCount: t.count }),
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          r._experiments &&
          r._experiments.captureExceptions &&
          _r(s),
        t.count >= Vd)
      ) {
        const i = new Error(`${xr} - max retries exceeded`);
        try {
          i.cause = s;
        } catch {}
        throw i;
      }
      return (
        (t.interval *= ++t.count),
        new Promise((i, o) => {
          setTimeout(async () => {
            try {
              await xo(e, t), i(!0);
            } catch (a) {
              o(a);
            }
          }, t.interval);
        })
      );
    }
}
const Mo = "__THROTTLED",
  Xh = "__SKIPPED";
function Vh(e, t, n) {
  const r = new Map(),
    s = (a) => {
      const c = a - n;
      r.forEach((u, d) => {
        d < c && r.delete(d);
      });
    },
    i = () => [...r.values()].reduce((a, c) => a + c, 0);
  let o = !1;
  return (...a) => {
    const c = Math.floor(Date.now() / 1e3);
    if ((s(c), i() >= t)) {
      const d = o;
      return (o = !0), d ? Xh : Mo;
    }
    o = !1;
    const u = r.get(c) || 0;
    return r.set(c, u + 1), e(...a);
  };
}
class Ne {
  constructor({ options: t, recordingOptions: n }) {
    Ne.prototype.__init.call(this),
      Ne.prototype.__init2.call(this),
      Ne.prototype.__init3.call(this),
      Ne.prototype.__init4.call(this),
      Ne.prototype.__init5.call(this),
      Ne.prototype.__init6.call(this),
      (this.eventBuffer = null),
      (this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      (this.recordingMode = "session"),
      (this.timeouts = { sessionIdlePause: zd, sessionIdleExpire: Wd }),
      (this._lastActivity = Date.now()),
      (this._isEnabled = !1),
      (this._isPaused = !1),
      (this._hasInitializedCoreListeners = !1),
      (this._context = {
        errorIds: new Set(),
        traceIds: new Set(),
        urls: [],
        initialTimestamp: Date.now(),
        initialUrl: "",
      }),
      (this._recordingOptions = n),
      (this._options = t),
      (this._debouncedFlush = $h(
        () => this._flush(),
        this._options.flushMinDelay,
        { maxWait: this._options.flushMaxDelay }
      )),
      (this._throttledAddEvent = Vh((o, a) => Vf(this, o, a), 300, 5));
    const { slowClickTimeout: r, slowClickIgnoreSelectors: s } =
        this.getOptions(),
      i = r
        ? {
            threshold: Math.min(Jd, r),
            timeout: r,
            scrollTimeout: Qd,
            ignoreSelector: s ? s.join(",") : "",
          }
        : void 0;
    i && (this.clickDetector = new pf(this, i));
  }
  getContext() {
    return this._context;
  }
  isEnabled() {
    return this._isEnabled;
  }
  isPaused() {
    return this._isPaused;
  }
  getOptions() {
    return this._options;
  }
  initializeSampling(t) {
    const { errorSampleRate: n, sessionSampleRate: r } = this._options;
    if (!(n <= 0 && r <= 0)) {
      if ((this._initializeSessionForSampling(t), !this.session)) {
        this._handleException(
          new Error("Unable to initialize and create session")
        );
        return;
      }
      this.session.sampled !== !1 &&
        ((this.recordingMode =
          this.session.sampled === "buffer" && this.session.segmentId === 0
            ? "buffer"
            : "session"),
        Je(
          `[Replay] Starting replay in ${this.recordingMode} mode`,
          this._options._experiments.traceInternals
        ),
        this._initializeRecording());
    }
  }
  start() {
    if (this._isEnabled && this.recordingMode === "session")
      throw new Error("Replay recording is already in progress");
    if (this._isEnabled && this.recordingMode === "buffer")
      throw new Error(
        "Replay buffering is in progress, call `flush()` to save the replay"
      );
    Je(
      "[Replay] Starting replay in session mode",
      this._options._experiments.traceInternals
    );
    const t = Un(
      {
        maxReplayDuration: this._options.maxReplayDuration,
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
        traceInternals: this._options._experiments.traceInternals,
      },
      {
        stickySession: this._options.stickySession,
        sessionSampleRate: 1,
        allowBuffering: !1,
      }
    );
    (this.session = t), this._initializeRecording();
  }
  startBuffering() {
    if (this._isEnabled)
      throw new Error("Replay recording is already in progress");
    Je(
      "[Replay] Starting replay in buffer mode",
      this._options._experiments.traceInternals
    );
    const t = Un(
      {
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
        maxReplayDuration: this._options.maxReplayDuration,
        traceInternals: this._options._experiments.traceInternals,
      },
      {
        stickySession: this._options.stickySession,
        sessionSampleRate: 0,
        allowBuffering: !0,
      }
    );
    (this.session = t),
      (this.recordingMode = "buffer"),
      this._initializeRecording();
  }
  startRecording() {
    try {
      this._stopRecording = Be({
        ...this._recordingOptions,
        ...(this.recordingMode === "buffer" && { checkoutEveryNms: Kd }),
        emit: Yh(this),
        onMutation: this._onMutationHandler,
      });
    } catch (t) {
      this._handleException(t);
    }
  }
  stopRecording() {
    try {
      return (
        this._stopRecording &&
          (this._stopRecording(), (this._stopRecording = void 0)),
        !0
      );
    } catch (t) {
      return this._handleException(t), !1;
    }
  }
  async stop({ forceFlush: t = !1, reason: n } = {}) {
    if (this._isEnabled) {
      this._isEnabled = !1;
      try {
        re(
          `[Replay] Stopping Replay${n ? ` triggered by ${n}` : ""}`,
          this._options._experiments.traceInternals
        ),
          this._removeListeners(),
          this.stopRecording(),
          this._debouncedFlush.cancel(),
          t && (await this._flush({ force: !0 })),
          this.eventBuffer && this.eventBuffer.destroy(),
          (this.eventBuffer = null),
          Wf(this);
      } catch (r) {
        this._handleException(r);
      }
    }
  }
  pause() {
    this._isPaused ||
      ((this._isPaused = !0),
      this.stopRecording(),
      re("[Replay] Pausing replay", this._options._experiments.traceInternals));
  }
  resume() {
    !this._isPaused ||
      !this._checkSession() ||
      ((this._isPaused = !1),
      this.startRecording(),
      re(
        "[Replay] Resuming replay",
        this._options._experiments.traceInternals
      ));
  }
  async sendBufferedReplayOrFlush({ continueRecording: t = !0 } = {}) {
    if (this.recordingMode === "session") return this.flushImmediate();
    const n = Date.now();
    re(
      "[Replay] Converting buffer to session",
      this._options._experiments.traceInternals
    ),
      await this.flushImmediate();
    const r = this.stopRecording();
    !t ||
      !r ||
      (this.recordingMode !== "session" &&
        ((this.recordingMode = "session"),
        this.session &&
          (this._updateUserActivity(n),
          this._updateSessionActivity(n),
          this._maybeSaveSession()),
        this.startRecording()));
  }
  addUpdate(t) {
    const n = t();
    this.recordingMode !== "buffer" && n !== !0 && this._debouncedFlush();
  }
  triggerUserActivity() {
    if ((this._updateUserActivity(), !this._stopRecording)) {
      if (!this._checkSession()) return;
      this.resume();
      return;
    }
    this.checkAndHandleExpiredSession(), this._updateSessionActivity();
  }
  updateUserActivity() {
    this._updateUserActivity(), this._updateSessionActivity();
  }
  conditionalFlush() {
    return this.recordingMode === "buffer"
      ? Promise.resolve()
      : this.flushImmediate();
  }
  flush() {
    return this._debouncedFlush();
  }
  flushImmediate() {
    return this._debouncedFlush(), this._debouncedFlush.flush();
  }
  cancelFlush() {
    this._debouncedFlush.cancel();
  }
  getSessionId() {
    return this.session && this.session.id;
  }
  checkAndHandleExpiredSession() {
    if (
      this._lastActivity &&
      ar(this._lastActivity, this.timeouts.sessionIdlePause) &&
      this.session &&
      this.session.sampled === "session"
    ) {
      this.pause();
      return;
    }
    return !!this._checkSession();
  }
  setInitialState() {
    const t = `${U.location.pathname}${U.location.hash}${U.location.search}`,
      n = `${U.location.origin}${t}`;
    (this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      this._clearContext(),
      (this._context.initialUrl = n),
      (this._context.initialTimestamp = Date.now()),
      this._context.urls.push(n);
  }
  throttledAddEvent(t, n) {
    const r = this._throttledAddEvent(t, n);
    if (r === Mo) {
      const s = be({ category: "replay.throttled" });
      this.addUpdate(
        () =>
          !$r(this, {
            type: cf,
            timestamp: s.timestamp || 0,
            data: { tag: "breadcrumb", payload: s, metric: !0 },
          })
      );
    }
    return r;
  }
  getCurrentRoute() {
    const t = this.lastTransaction || x().getScope().getTransaction();
    if (!(!t || !["route", "custom"].includes(t.metadata.source)))
      return t.name;
  }
  _initializeRecording() {
    this.setInitialState(),
      this._updateSessionActivity(),
      (this.eventBuffer = Yf({
        useCompression: this._options.useCompression,
        workerUrl: this._options.workerUrl,
      })),
      this._removeListeners(),
      this._addListeners(),
      (this._isEnabled = !0),
      (this._isPaused = !1),
      this.startRecording();
  }
  _handleException(t) {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      m.error("[Replay]", t),
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        this._options._experiments &&
        this._options._experiments.captureExceptions &&
        _r(t);
  }
  _initializeSessionForSampling(t) {
    const n = this._options.errorSampleRate > 0,
      r = Un(
        {
          sessionIdleExpire: this.timeouts.sessionIdleExpire,
          maxReplayDuration: this._options.maxReplayDuration,
          traceInternals: this._options._experiments.traceInternals,
          previousSessionId: t,
        },
        {
          stickySession: this._options.stickySession,
          sessionSampleRate: this._options.sessionSampleRate,
          allowBuffering: n,
        }
      );
    this.session = r;
  }
  _checkSession() {
    if (!this.session) return !1;
    const t = this.session;
    return So(t, {
      sessionIdleExpire: this.timeouts.sessionIdleExpire,
      maxReplayDuration: this._options.maxReplayDuration,
    })
      ? (this._refreshSession(t), !1)
      : !0;
  }
  async _refreshSession(t) {
    this._isEnabled &&
      (await this.stop({ reason: "refresh session" }),
      this.initializeSampling(t.id));
  }
  _addListeners() {
    try {
      U.document.addEventListener(
        "visibilitychange",
        this._handleVisibilityChange
      ),
        U.addEventListener("blur", this._handleWindowBlur),
        U.addEventListener("focus", this._handleWindowFocus),
        U.addEventListener("keydown", this._handleKeyboardEvent),
        this.clickDetector && this.clickDetector.addListeners(),
        this._hasInitializedCoreListeners ||
          (Ph(this), (this._hasInitializedCoreListeners = !0));
    } catch (t) {
      this._handleException(t);
    }
    this._performanceCleanupCallback = Uf(this);
  }
  _removeListeners() {
    try {
      U.document.removeEventListener(
        "visibilitychange",
        this._handleVisibilityChange
      ),
        U.removeEventListener("blur", this._handleWindowBlur),
        U.removeEventListener("focus", this._handleWindowFocus),
        U.removeEventListener("keydown", this._handleKeyboardEvent),
        this.clickDetector && this.clickDetector.removeListeners(),
        this._performanceCleanupCallback && this._performanceCleanupCallback();
    } catch (t) {
      this._handleException(t);
    }
  }
  __init() {
    this._handleVisibilityChange = () => {
      U.document.visibilityState === "visible"
        ? this._doChangeToForegroundTasks()
        : this._doChangeToBackgroundTasks();
    };
  }
  __init2() {
    this._handleWindowBlur = () => {
      const t = be({ category: "ui.blur" });
      this._doChangeToBackgroundTasks(t);
    };
  }
  __init3() {
    this._handleWindowFocus = () => {
      const t = be({ category: "ui.focus" });
      this._doChangeToForegroundTasks(t);
    };
  }
  __init4() {
    this._handleKeyboardEvent = (t) => {
      If(this, t);
    };
  }
  _doChangeToBackgroundTasks(t) {
    !this.session ||
      yo(this.session, {
        maxReplayDuration: this._options.maxReplayDuration,
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
      }) ||
      (t && this._createCustomBreadcrumb(t), this.conditionalFlush());
  }
  _doChangeToForegroundTasks(t) {
    if (!this.session) return;
    if (!this.checkAndHandleExpiredSession()) {
      re("[Replay] Document has become active, but session has expired");
      return;
    }
    t && this._createCustomBreadcrumb(t);
  }
  _updateUserActivity(t = Date.now()) {
    this._lastActivity = t;
  }
  _updateSessionActivity(t = Date.now()) {
    this.session && ((this.session.lastActivity = t), this._maybeSaveSession());
  }
  _createCustomBreadcrumb(t) {
    this.addUpdate(() => {
      this.throttledAddEvent({
        type: w.Custom,
        timestamp: t.timestamp || 0,
        data: { tag: "breadcrumb", payload: t },
      });
    });
  }
  _addPerformanceEntries() {
    const t = Cf(this.performanceEntries).concat(this.replayPerformanceEntries);
    return (
      (this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      Promise.all(wn(this, t))
    );
  }
  _clearContext() {
    this._context.errorIds.clear(),
      this._context.traceIds.clear(),
      (this._context.urls = []);
  }
  _updateInitialTimestampFromEventBuffer() {
    const { session: t, eventBuffer: n } = this;
    if (!t || !n || t.segmentId) return;
    const r = n.getEarliestTimestamp();
    r &&
      r < this._context.initialTimestamp &&
      (this._context.initialTimestamp = r);
  }
  _popEventContext() {
    const t = {
      initialTimestamp: this._context.initialTimestamp,
      initialUrl: this._context.initialUrl,
      errorIds: Array.from(this._context.errorIds),
      traceIds: Array.from(this._context.traceIds),
      urls: this._context.urls,
    };
    return this._clearContext(), t;
  }
  async _runFlush() {
    const t = this.getSessionId();
    if (!this.session || !this.eventBuffer || !t) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        m.error("[Replay] No session or eventBuffer found to flush.");
      return;
    }
    if (
      (await this._addPerformanceEntries(),
      !(!this.eventBuffer || !this.eventBuffer.hasEvents) &&
        (await Fh(this), !!this.eventBuffer && t === this.getSessionId()))
    )
      try {
        this._updateInitialTimestampFromEventBuffer();
        const n = Date.now();
        if (
          n - this._context.initialTimestamp >
          this._options.maxReplayDuration + 3e4
        )
          throw new Error("Session is too long, not sending replay");
        const r = this._popEventContext(),
          s = this.session.segmentId++;
        this._maybeSaveSession();
        const i = await this.eventBuffer.finish();
        await xo({
          replayId: t,
          recordingData: i,
          segmentId: s,
          eventContext: r,
          session: this.session,
          options: this.getOptions(),
          timestamp: n,
        });
      } catch (n) {
        this._handleException(n), this.stop({ reason: "sendReplay" });
        const r = x().getClient();
        r && r.recordDroppedEvent("send_error", "replay");
      }
  }
  __init5() {
    this._flush = async ({ force: t = !1 } = {}) => {
      if (!this._isEnabled && !t) return;
      if (!this.checkAndHandleExpiredSession()) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          m.error(
            "[Replay] Attempting to finish replay event after session expired."
          );
        return;
      }
      if (!this.session) return;
      const n = this.session.started,
        s = Date.now() - n;
      this._debouncedFlush.cancel();
      const i = s < this._options.minReplayDuration,
        o = s > this._options.maxReplayDuration + 5e3;
      if (i || o) {
        re(
          `[Replay] Session duration (${Math.floor(s / 1e3)}s) is too ${
            i ? "short" : "long"
          }, not sending replay.`,
          this._options._experiments.traceInternals
        ),
          i && this._debouncedFlush();
        return;
      }
      const a = this.eventBuffer;
      if (
        (a &&
          this.session.segmentId === 0 &&
          !a.hasCheckout &&
          re(
            "[Replay] Flushing initial segment without checkout.",
            this._options._experiments.traceInternals
          ),
        !this._flushLock)
      ) {
        (this._flushLock = this._runFlush()),
          await this._flushLock,
          (this._flushLock = void 0);
        return;
      }
      try {
        await this._flushLock;
      } catch (c) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && m.error(c);
      } finally {
        this._debouncedFlush();
      }
    };
  }
  _maybeSaveSession() {
    this.session && this._options.stickySession && Gr(this.session);
  }
  __init6() {
    this._onMutationHandler = (t) => {
      const n = t.length,
        r = this._options.mutationLimit,
        s = this._options.mutationBreadcrumbLimit,
        i = r && n > r;
      if (n > s || i) {
        const o = be({
          category: "replay.mutations",
          data: { count: n, limit: i },
        });
        this._createCustomBreadcrumb(o);
      }
      return i
        ? (this.stop({
            reason: "mutationLimit",
            forceFlush: this.recordingMode === "session",
          }),
          !1)
        : !0;
    };
  }
}
function ut(e, t, n, r) {
  const s = typeof r == "string" ? r.split(",") : [],
    i = [...e, ...s, ...t];
  return (
    typeof n < "u" &&
      (typeof n == "string" && i.push(`.${n}`),
      console.warn(
        "[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration."
      )),
    i.join(",")
  );
}
function Jh({
  mask: e,
  unmask: t,
  block: n,
  unblock: r,
  ignore: s,
  blockClass: i,
  blockSelector: o,
  maskTextClass: a,
  maskTextSelector: c,
  ignoreClass: u,
}) {
  const d = ['base[href="/"]'],
    l = ut(e, [".sentry-mask", "[data-sentry-mask]"], a, c),
    f = ut(t, [".sentry-unmask", "[data-sentry-unmask]"]),
    h = {
      maskTextSelector: l,
      unmaskTextSelector: f,
      blockSelector: ut(
        n,
        [".sentry-block", "[data-sentry-block]", ...d],
        i,
        o
      ),
      unblockSelector: ut(r, [".sentry-unblock", "[data-sentry-unblock]"]),
      ignoreSelector: ut(
        s,
        [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'],
        u
      ),
    };
  return (
    i instanceof RegExp && (h.blockClass = i),
    a instanceof RegExp && (h.maskTextClass = a),
    h
  );
}
function Qh({
  el: e,
  key: t,
  maskAttributes: n,
  maskAllText: r,
  privacyOptions: s,
  value: i,
}) {
  return !r || (s.unmaskTextSelector && e.matches(s.unmaskTextSelector))
    ? i
    : n.includes(t) ||
      (t === "value" &&
        e.tagName === "INPUT" &&
        ["submit", "button"].includes(e.getAttribute("type") || ""))
    ? i.replace(/[\S]/g, "*")
    : i;
}
const Ks =
    'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
  Zh = ["content-length", "content-type", "accept"];
let Xs = !1;
class In {
  static __initStatic() {
    this.id = "Replay";
  }
  constructor({
    flushMinDelay: t = jd,
    flushMaxDelay: n = qd,
    minReplayDuration: r = Zd,
    maxReplayDuration: s = Ms,
    stickySession: i = !0,
    useCompression: o = !0,
    workerUrl: a,
    _experiments: c = {},
    sessionSampleRate: u,
    errorSampleRate: d,
    maskAllText: l = !0,
    maskAllInputs: f = !0,
    blockAllMedia: h = !0,
    mutationBreadcrumbLimit: p = 750,
    mutationLimit: _ = 1e4,
    slowClickTimeout: E = 7e3,
    slowClickIgnoreSelectors: y = [],
    networkDetailAllowUrls: b = [],
    networkDetailDenyUrls: k = [],
    networkCaptureBodies: C = !0,
    networkRequestHeaders: F = [],
    networkResponseHeaders: T = [],
    mask: g = [],
    maskAttributes: N = ["title", "placeholder"],
    unmask: G = [],
    block: S = [],
    unblock: v = [],
    ignore: P = [],
    maskFn: q,
    beforeAddRecordingEvent: W,
    beforeErrorSampling: ce,
    blockClass: L,
    blockSelector: me,
    maskInputOptions: H,
    maskTextClass: ie,
    maskTextSelector: ue,
    ignoreClass: Ge,
  } = {}) {
    this.name = In.id;
    const $e = Jh({
      mask: g,
      unmask: G,
      block: S,
      unblock: v,
      ignore: P,
      blockClass: L,
      blockSelector: me,
      maskTextClass: ie,
      maskTextSelector: ue,
      ignoreClass: Ge,
    });
    if (
      ((this._recordingOptions = {
        maskAllInputs: f,
        maskAllText: l,
        maskInputOptions: { ...(H || {}), password: !0 },
        maskTextFn: q,
        maskInputFn: q,
        maskAttributeFn: (Ae, ot, at) =>
          Qh({
            maskAttributes: N,
            maskAllText: l,
            privacyOptions: $e,
            key: Ae,
            value: ot,
            el: at,
          }),
        ...$e,
        slimDOMOptions: "all",
        inlineStylesheet: !0,
        inlineImages: !1,
        collectFonts: !0,
        errorHandler: (Ae) => {
          try {
            Ae.__rrweb__ = !0;
          } catch {}
        },
      }),
      (this._initialOptions = {
        flushMinDelay: t,
        flushMaxDelay: n,
        minReplayDuration: Math.min(r, el),
        maxReplayDuration: Math.min(s, Ms),
        stickySession: i,
        sessionSampleRate: u,
        errorSampleRate: d,
        useCompression: o,
        workerUrl: a,
        blockAllMedia: h,
        maskAllInputs: f,
        maskAllText: l,
        mutationBreadcrumbLimit: p,
        mutationLimit: _,
        slowClickTimeout: E,
        slowClickIgnoreSelectors: y,
        networkDetailAllowUrls: b,
        networkDetailDenyUrls: k,
        networkCaptureBodies: C,
        networkRequestHeaders: Vs(F),
        networkResponseHeaders: Vs(T),
        beforeAddRecordingEvent: W,
        beforeErrorSampling: ce,
        _experiments: c,
      }),
      typeof u == "number" &&
        (console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysSessionSampleRate: ${u} })`),
        (this._initialOptions.sessionSampleRate = u)),
      typeof d == "number" &&
        (console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysOnErrorSampleRate: ${d} })`),
        (this._initialOptions.errorSampleRate = d)),
      this._initialOptions.blockAllMedia &&
        (this._recordingOptions.blockSelector = this._recordingOptions
          .blockSelector
          ? `${this._recordingOptions.blockSelector},${Ks}`
          : Ks),
      this._isInitialized && us())
    )
      throw new Error(
        "Multiple Sentry Session Replay instances are not supported"
      );
    this._isInitialized = !0;
  }
  get _isInitialized() {
    return Xs;
  }
  set _isInitialized(t) {
    Xs = t;
  }
  setupOnce() {
    us() && (this._setup(), setTimeout(() => this._initialize()));
  }
  start() {
    this._replay && this._replay.start();
  }
  startBuffering() {
    this._replay && this._replay.startBuffering();
  }
  stop() {
    return this._replay
      ? this._replay.stop({
          forceFlush: this._replay.recordingMode === "session",
        })
      : Promise.resolve();
  }
  flush(t) {
    return !this._replay || !this._replay.isEnabled()
      ? Promise.resolve()
      : this._replay.sendBufferedReplayOrFlush(t);
  }
  getReplayId() {
    if (!(!this._replay || !this._replay.isEnabled()))
      return this._replay.getSessionId();
  }
  _initialize() {
    this._replay && this._replay.initializeSampling();
  }
  _setup() {
    const t = ep(this._initialOptions);
    this._replay = new Ne({
      options: t,
      recordingOptions: this._recordingOptions,
    });
  }
}
In.__initStatic();
function ep(e) {
  const t = x().getClient(),
    n = t && t.getOptions(),
    r = { sessionSampleRate: 0, errorSampleRate: 0, ...ve(e) };
  return n
    ? (e.sessionSampleRate == null &&
        e.errorSampleRate == null &&
        n.replaysSessionSampleRate == null &&
        n.replaysOnErrorSampleRate == null &&
        console.warn(
          "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set."
        ),
      typeof n.replaysSessionSampleRate == "number" &&
        (r.sessionSampleRate = n.replaysSessionSampleRate),
      typeof n.replaysOnErrorSampleRate == "number" &&
        (r.errorSampleRate = n.replaysOnErrorSampleRate),
      r)
    : (console.warn("SDK client is not available."), r);
}
function Vs(e) {
  return [...Zh, ...e.map((t) => t.toLowerCase())];
}
function tp(e) {
  const t = di.get_session.query();
  return (
    ri(
      () => (
        nd({
          dsn: da,
          integrations: [
            new Yd(),
            new In({ maskAllText: !1, blockAllMedia: !1 }),
          ],
          tracesSampleRate: 0.1,
          replaysSessionSampleRate: 0.01,
          replaysOnErrorSampleRate: 1,
        }),
        t.subscribe((n) => {
          const r = n.data?.user;
          r && aa({ id: r.userId, username: r.username });
        })
      )
    ),
    []
  );
}
class np extends an {
  constructor(t) {
    super(), cn(this, t, tp, null, on, {});
  }
}
const dr = la(!0);
{
  const e = es();
  dr.set(e),
    e ||
      setTimeout(() => {
        dr.set(es());
      }, 1e3);
}
const rp = {
  sources: {
    png:
      "" +
      new URL("../assets/card.fe7196db.png", import.meta.url).href +
      " 1x, " +
      new URL("../assets/card.74959470.png", import.meta.url).href +
      " 2x",
  },
  img: {
    src: "" + new URL("../assets/card.74959470.png", import.meta.url).href,
    w: 1200,
    h: 628,
  },
};
function sp(e) {
  let t, n, r, s, i, o, a, c, u, d, l, f, h;
  return (
    (document.title = t = dt),
    {
      c() {
        (n = oe("meta")),
          (r = oe("meta")),
          (s = oe("meta")),
          (i = oe("meta")),
          (o = oe("meta")),
          (a = oe("meta")),
          (c = oe("meta")),
          (u = oe("meta")),
          (d = oe("meta")),
          (l = oe("meta")),
          (f = oe("meta")),
          (h = oe("meta")),
          this.h();
      },
      l(p) {
        const _ = Lo("svelte-1yc784u", document.head);
        (n = ae(_, "META", { name: !0, content: !0 })),
          (r = ae(_, "META", { name: !0, content: !0 })),
          (s = ae(_, "META", { property: !0, content: !0 })),
          (i = ae(_, "META", { property: !0, content: !0 })),
          (o = ae(_, "META", { property: !0, content: !0 })),
          (a = ae(_, "META", { property: !0, content: !0 })),
          (c = ae(_, "META", { property: !0, content: !0 })),
          (u = ae(_, "META", { property: !0, content: !0 })),
          (d = ae(_, "META", { property: !0, content: !0 })),
          (l = ae(_, "META", { property: !0, content: !0 })),
          (f = ae(_, "META", { property: !0, content: !0 })),
          (h = ae(_, "META", { property: !0, content: !0 })),
          _.forEach(j),
          this.h();
      },
      h() {
        A(n, "name", "title"),
          A(n, "content", dt),
          A(r, "name", "description"),
          A(r, "content", Ln),
          A(s, "property", "og:type"),
          A(s, "content", "website"),
          A(i, "property", "og:url"),
          A(i, "content", lr),
          A(o, "property", "og:title"),
          A(o, "content", dt),
          A(a, "property", "og:description"),
          A(a, "content", Ln),
          A(c, "property", "og:image"),
          A(c, "content", e[0]),
          A(u, "property", "twitter:card"),
          A(u, "content", "summary_large_image"),
          A(d, "property", "twitter:url"),
          A(d, "content", lr),
          A(l, "property", "twitter:title"),
          A(l, "content", dt),
          A(f, "property", "twitter:description"),
          A(f, "content", Ln),
          A(h, "property", "twitter:image"),
          A(h, "content", e[0]);
      },
      m(p, _) {
        de(document.head, n),
          de(document.head, r),
          de(document.head, s),
          de(document.head, i),
          de(document.head, o),
          de(document.head, a),
          de(document.head, c),
          de(document.head, u),
          de(document.head, d),
          de(document.head, l),
          de(document.head, f),
          de(document.head, h);
      },
      p(p, [_]) {
        _ & 0 && t !== (t = dt) && (document.title = t);
      },
      i: jr,
      o: jr,
      d(p) {
        j(n), j(r), j(s), j(i), j(o), j(a), j(c), j(u), j(d), j(l), j(f), j(h);
      },
    }
  );
}
const dt = "Suika World",
  lr = "https://suika.world",
  Ln =
    "The official Suika World, by Ottomated. Play the Suika Game (Watermelon Game) online for free with multiplayer, PvP, and singleplayer mode! Now no longer in alpha!";
function ip(e) {
  return [lr + rp.img.src];
}
class op extends an {
  constructor(t) {
    super(), cn(this, t, ip, sp, on, {});
  }
}
function Js(e) {
  let t,
    n = `<div class="h-4 w-4 rounded-full bg-rose-600"></div>
		OFFLINE`;
  return {
    c() {
      (t = oe("div")), (t.innerHTML = n), this.h();
    },
    l(r) {
      (t = ae(r, "DIV", { class: !0, "data-svelte-h": !0 })),
        si(t) !== "svelte-14mf2dt" && (t.innerHTML = n),
        this.h();
    },
    h() {
      A(
        t,
        "class",
        "fixed bottom-1 left-1 flex select-none items-center gap-2 rounded-full bg-white/50 px-4 py-1 font-bold text-rose-600"
      );
    },
    m(r, s) {
      Ce(r, t, s);
    },
    d(r) {
      r && j(t);
    },
  };
}
function ap(e) {
  let t, n, r;
  t = new np({});
  const s = e[4].default,
    i = Zs(s, e, e[5], null);
  return {
    c() {
      $t(t.$$.fragment), (n = lt()), i && i.c();
    },
    l(o) {
      Yt(t.$$.fragment, o), (n = ft(o)), i && i.l(o);
    },
    m(o, a) {
      Ht(t, o, a), Ce(o, n, a), i && i.m(o, a), (r = !0);
    },
    p(o, a) {
      i &&
        i.p &&
        (!r || a & 32) &&
        ei(i, s, o, o[5], r ? ni(s, o[5], a, null) : ti(o[5]), null);
    },
    i(o) {
      r || (Xe(t.$$.fragment, o), Xe(i, o), (r = !0));
    },
    o(o) {
      Ve(t.$$.fragment, o), Ve(i, o), (r = !1);
    },
    d(o) {
      o && j(n), zt(t, o), i && i.d(o);
    },
  };
}
function Qs(e) {
  let t,
    n = "Your browser does not support WebGL, which is required to play.";
  return {
    c() {
      (t = oe("div")), (t.textContent = n), this.h();
    },
    l(r) {
      (t = ae(r, "DIV", { class: !0, "data-svelte-h": !0 })),
        si(t) !== "svelte-b2a37z" && (t.textContent = n),
        this.h();
    },
    h() {
      A(
        t,
        "class",
        "fixed inset-x-0 bottom-0 z-50 bg-rose-600 p-2 text-center text-xl font-bold text-white sm:text-3xl"
      );
    },
    m(r, s) {
      Ce(r, t, s);
    },
    d(r) {
      r && j(t);
    },
  };
}
function cp(e) {
  let t, n, r, s, i, o, a, c, u;
  (t = new op({})), (r = new ca({}));
  let d = e[0] && Js();
  o = new pa({
    props: { client: e[2], $$slots: { default: [ap] }, $$scope: { ctx: e } },
  });
  let l = !e[1] && Qs();
  return {
    c() {
      $t(t.$$.fragment),
        (n = lt()),
        $t(r.$$.fragment),
        (s = lt()),
        d && d.c(),
        (i = lt()),
        $t(o.$$.fragment),
        (a = lt()),
        l && l.c(),
        (c = qr());
    },
    l(f) {
      Yt(t.$$.fragment, f),
        (n = ft(f)),
        Yt(r.$$.fragment, f),
        (s = ft(f)),
        d && d.l(f),
        (i = ft(f)),
        Yt(o.$$.fragment, f),
        (a = ft(f)),
        l && l.l(f),
        (c = qr());
    },
    m(f, h) {
      Ht(t, f, h),
        Ce(f, n, h),
        Ht(r, f, h),
        Ce(f, s, h),
        d && d.m(f, h),
        Ce(f, i, h),
        Ht(o, f, h),
        Ce(f, a, h),
        l && l.m(f, h),
        Ce(f, c, h),
        (u = !0);
    },
    p(f, [h]) {
      f[0]
        ? d || ((d = Js()), d.c(), d.m(i.parentNode, i))
        : d && (d.d(1), (d = null));
      const p = {};
      h & 32 && (p.$$scope = { dirty: h, ctx: f }),
        o.$set(p),
        f[1]
          ? l && (l.d(1), (l = null))
          : l || ((l = Qs()), l.c(), l.m(c.parentNode, c));
    },
    i(f) {
      u ||
        (Xe(t.$$.fragment, f),
        Xe(r.$$.fragment, f),
        Xe(o.$$.fragment, f),
        (u = !0));
    },
    o(f) {
      Ve(t.$$.fragment, f),
        Ve(r.$$.fragment, f),
        Ve(o.$$.fragment, f),
        (u = !1);
    },
    d(f) {
      f && (j(n), j(s), j(i), j(a), j(c)),
        zt(t, f),
        zt(r, f),
        d && d.d(f),
        zt(o, f),
        l && l.d(f);
    },
  };
}
function up(e, t, n) {
  let r, s;
  Kr(e, ua, (u) => n(0, (r = u))), Kr(e, dr, (u) => n(1, (s = u)));
  let { $$slots: i = {}, $$scope: o } = t,
    { data: a } = t;
  const c = di.hydrateFromServer(a.trpc);
  return (
    (e.$$set = (u) => {
      "data" in u && n(3, (a = u.data)),
        "$$scope" in u && n(5, (o = u.$$scope));
    }),
    [r, s, c, a, i, o]
  );
}
class yp extends an {
  constructor(t) {
    super(), cn(this, t, up, cp, on, { data: 3 });
  }
}
export { yp as component };
//# sourceMappingURL=0.62716522.js.map
