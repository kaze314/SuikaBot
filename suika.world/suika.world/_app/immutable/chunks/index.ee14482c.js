import {
  b as le,
  t as he,
  S as es,
  i as ss,
  g as ns,
  e as rs,
  f as is,
  j as os,
} from "./index.c7cfddcd.js";
import { r as M, d as x, w as as } from "./index.df959635.js";
import {
  y as us,
  T as cs,
  a8 as fe,
  a9 as de,
  aa as Ft,
  Y as ls,
  s as hs,
  b as jt,
  k as pe,
  i as Y,
  c as fs,
  e as ct,
  t as ds,
  a as Ut,
  f as lt,
  g as qt,
  h as ps,
  d as Lt,
  p as ys,
  j as ht,
  F as Qt,
  l as Q,
  r as ms,
  J as gs,
  m as _s,
  K as bs,
} from "./scheduler.023ced08.js";
import {
  U as ye,
  N as Es,
  P as Ss,
  a as vs,
  b as me,
  H as Os,
  p as ws,
} from "./parse.1d943ae3.js";
(function () {
  try {
    var t =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      e = new Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "6ef0f1c2-c3df-4ac6-b615-cb9eb138eb83"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-6ef0f1c2-c3df-4ac6-b615-cb9eb138eb83"));
  } catch {}
})();
const Bt = !0;
function Ht(t) {
  return t?.length !== void 0 ? t : Array.from(t);
}
function Rs(t, e) {
  le(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function Ps(t, e, s, n, r, i, u, c, a, o, h, l) {
  let y = t.length,
    d = i.length,
    m = y;
  const f = {};
  for (; m--; ) f[t[m].key] = m;
  const p = [],
    g = new Map(),
    _ = new Map(),
    v = [];
  for (m = d; m--; ) {
    const b = l(r, i, m),
      R = s(b);
    let P = u.get(R);
    P ? n && v.push(() => P.p(b, e)) : ((P = o(R, b)), P.c()),
      g.set(R, (p[m] = P)),
      R in f && _.set(R, Math.abs(m - f[R]));
  }
  const O = new Set(),
    E = new Set();
  function A(b) {
    he(b, 1), b.m(c, h), u.set(b.key, b), (h = b.first), d--;
  }
  for (; y && d; ) {
    const b = p[d - 1],
      R = t[y - 1],
      P = b.key,
      G = R.key;
    b === R
      ? ((h = b.first), y--, d--)
      : g.has(G)
      ? !u.has(P) || O.has(P)
        ? A(b)
        : E.has(G)
        ? y--
        : _.get(P) > _.get(G)
        ? (E.add(P), A(b))
        : (O.add(G), y--)
      : (a(R, u), y--);
  }
  for (; y--; ) {
    const b = t[y];
    g.has(b.key) || a(b, u);
  }
  for (; d; ) A(p[d - 1]);
  return us(v), p;
}
const Ts = {
  "<": "\\u003C",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029",
};
class F extends Error {
  constructor(e, s) {
    super(e), (this.name = "DevalueError"), (this.path = s.join(""));
  }
}
function $(t) {
  return Object(t) !== t;
}
const Ds = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function ge(t) {
  const e = Object.getPrototypeOf(t);
  return (
    e === Object.prototype ||
    e === null ||
    Object.getOwnPropertyNames(e).sort().join("\0") === Ds
  );
}
function z(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function Cs(t) {
  switch (t) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case `
`:
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return t < " "
        ? `\\u${t.charCodeAt(0).toString(16).padStart(4, "0")}`
        : "";
  }
}
function N(t) {
  let e = "",
    s = 0;
  const n = t.length;
  for (let r = 0; r < n; r += 1) {
    const i = t[r],
      u = Cs(i);
    u && ((e += t.slice(s, r) + u), (s = r + 1));
  }
  return `"${s === 0 ? t : e + t.slice(s)}"`;
}
const ft = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$",
  As = /[<\b\f\n\r\t\0\u2028\u2029]/g,
  ks =
    /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function Ns(t, e) {
  const s = new Map(),
    n = [],
    r = new Map();
  function i(o) {
    if (typeof o == "function") throw new F("Cannot stringify a function", n);
    if (!$(o)) {
      if (s.has(o)) {
        s.set(o, s.get(o) + 1);
        return;
      }
      if ((s.set(o, 1), e)) {
        const l = e(o);
        if (typeof l == "string") {
          r.set(o, l);
          return;
        }
      }
      switch (z(o)) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          o.forEach((l, y) => {
            n.push(`[${y}]`), i(l), n.pop();
          });
          break;
        case "Set":
          Array.from(o).forEach(i);
          break;
        case "Map":
          for (const [l, y] of o)
            n.push(`.get(${$(l) ? dt(l) : "..."})`), i(y), n.pop();
          break;
        default:
          if (!ge(o)) throw new F("Cannot stringify arbitrary non-POJOs", n);
          if (Object.getOwnPropertySymbols(o).length > 0)
            throw new F("Cannot stringify POJOs with symbolic keys", n);
          for (const l in o) n.push(`.${l}`), i(o[l]), n.pop();
      }
    }
  }
  i(t);
  const u = new Map();
  Array.from(s)
    .filter((o) => o[1] > 1)
    .sort((o, h) => h[1] - o[1])
    .forEach((o, h) => {
      u.set(o[0], xs(h));
    });
  function c(o) {
    if (u.has(o)) return u.get(o);
    if ($(o)) return dt(o);
    if (r.has(o)) return r.get(o);
    const h = z(o);
    switch (h) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${c(o.valueOf())})`;
      case "RegExp":
        return `new RegExp(${N(o.source)}, "${o.flags}")`;
      case "Date":
        return `new Date(${o.getTime()})`;
      case "Array":
        const l = o.map((f, p) => (p in o ? c(f) : "")),
          y = o.length === 0 || o.length - 1 in o ? "" : ",";
        return `[${l.join(",")}${y}]`;
      case "Set":
      case "Map":
        return `new ${h}([${Array.from(o).map(c).join(",")}])`;
      default:
        const d = `{${Object.keys(o)
          .map((f) => `${Ms(f)}:${c(o[f])}`)
          .join(",")}}`;
        return Object.getPrototypeOf(o) === null
          ? Object.keys(o).length > 0
            ? `Object.assign(Object.create(null),${d})`
            : "Object.create(null)"
          : d;
    }
  }
  const a = c(t);
  if (u.size) {
    const o = [],
      h = [],
      l = [];
    return (
      u.forEach((y, d) => {
        if ((o.push(y), r.has(d))) {
          l.push(r.get(d));
          return;
        }
        if ($(d)) {
          l.push(dt(d));
          return;
        }
        switch (z(d)) {
          case "Number":
          case "String":
          case "Boolean":
            l.push(`Object(${c(d.valueOf())})`);
            break;
          case "RegExp":
            l.push(d.toString());
            break;
          case "Date":
            l.push(`new Date(${d.getTime()})`);
            break;
          case "Array":
            l.push(`Array(${d.length})`),
              d.forEach((f, p) => {
                h.push(`${y}[${p}]=${c(f)}`);
              });
            break;
          case "Set":
            l.push("new Set"),
              h.push(
                `${y}.${Array.from(d)
                  .map((f) => `add(${c(f)})`)
                  .join(".")}`
              );
            break;
          case "Map":
            l.push("new Map"),
              h.push(
                `${y}.${Array.from(d)
                  .map(([f, p]) => `set(${c(f)}, ${c(p)})`)
                  .join(".")}`
              );
            break;
          default:
            l.push(
              Object.getPrototypeOf(d) === null ? "Object.create(null)" : "{}"
            ),
              Object.keys(d).forEach((f) => {
                h.push(`${y}${$s(f)}=${c(d[f])}`);
              });
        }
      }),
      h.push(`return ${a}`),
      `(function(${o.join(",")}){${h.join(";")}}(${l.join(",")}))`
    );
  } else return a;
}
function xs(t) {
  let e = "";
  do (e = ft[t % ft.length] + e), (t = ~~(t / ft.length) - 1);
  while (t >= 0);
  return ks.test(e) ? `${e}0` : e;
}
function Is(t) {
  return Ts[t] || t;
}
function _e(t) {
  return t.replace(As, Is);
}
function Ms(t) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(t) ? t : _e(JSON.stringify(t));
}
function $s(t) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(t)
    ? `.${t}`
    : `[${_e(JSON.stringify(t))}]`;
}
function dt(t) {
  if (typeof t == "string") return N(t);
  if (t === void 0) return "void 0";
  if (t === 0 && 1 / t < 0) return "-0";
  const e = String(t);
  return typeof t == "number"
    ? e.replace(/^(-)?0\./, "$1.")
    : typeof t == "bigint"
    ? t + "n"
    : e;
}
function Fs(t, e) {
  const s = [],
    n = new Map(),
    r = [];
  for (const o in e) r.push({ key: o, fn: e[o] });
  const i = [];
  let u = 0;
  function c(o) {
    if (typeof o == "function") throw new F("Cannot stringify a function", i);
    if (n.has(o)) return n.get(o);
    if (o === void 0) return ye;
    if (Number.isNaN(o)) return Es;
    if (o === 1 / 0) return Ss;
    if (o === -1 / 0) return vs;
    if (o === 0 && 1 / o < 0) return me;
    const h = u++;
    n.set(o, h);
    for (const { key: y, fn: d } of r) {
      const m = d(o);
      if (m) return (s[h] = `["${y}",${c(m)}]`), h;
    }
    let l = "";
    if ($(o)) l = pt(o);
    else
      switch (z(o)) {
        case "Number":
        case "String":
        case "Boolean":
          l = `["Object",${pt(o)}]`;
          break;
        case "BigInt":
          l = `["BigInt",${o}]`;
          break;
        case "Date":
          l = `["Date","${o.toISOString()}"]`;
          break;
        case "RegExp":
          const { source: d, flags: m } = o;
          l = m ? `["RegExp",${N(d)},"${m}"]` : `["RegExp",${N(d)}]`;
          break;
        case "Array":
          l = "[";
          for (let f = 0; f < o.length; f += 1)
            f > 0 && (l += ","),
              f in o ? (i.push(`[${f}]`), (l += c(o[f])), i.pop()) : (l += Os);
          l += "]";
          break;
        case "Set":
          l = '["Set"';
          for (const f of o) l += `,${c(f)}`;
          l += "]";
          break;
        case "Map":
          l = '["Map"';
          for (const [f, p] of o)
            i.push(`.get(${$(f) ? pt(f) : "..."})`), (l += `,${c(f)},${c(p)}`);
          l += "]";
          break;
        default:
          if (!ge(o)) throw new F("Cannot stringify arbitrary non-POJOs", i);
          if (Object.getOwnPropertySymbols(o).length > 0)
            throw new F("Cannot stringify POJOs with symbolic keys", i);
          if (Object.getPrototypeOf(o) === null) {
            l = '["null"';
            for (const f in o)
              i.push(`.${f}`), (l += `,${N(f)},${c(o[f])}`), i.pop();
            l += "]";
          } else {
            l = "{";
            let f = !1;
            for (const p in o)
              f && (l += ","),
                (f = !0),
                i.push(`.${p}`),
                (l += `${N(p)}:${c(o[p])}`),
                i.pop();
            l += "}";
          }
      }
    return (s[h] = l), h;
  }
  const a = c(t);
  return a < 0 ? `${a}` : `[${s.join(",")}]`;
}
function pt(t) {
  const e = typeof t;
  return e === "string"
    ? N(t)
    : t instanceof String
    ? N(t.toString())
    : t === void 0
    ? ye.toString()
    : t === 0 && 1 / t < 0
    ? me.toString()
    : e === "bigint"
    ? `["BigInt","${t}"]`
    : String(t);
}
var q = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(t) {
      return (
        this.listeners.add(t),
        this.onSubscribe(),
        () => {
          this.listeners.delete(t), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  U = typeof window > "u" || "Deno" in window;
function w() {}
function js(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function vt(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function be(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Gt(t, e) {
  const {
    type: s = "all",
    exact: n,
    fetchStatus: r,
    predicate: i,
    queryKey: u,
    stale: c,
  } = t;
  if (u) {
    if (n) {
      if (e.queryHash !== xt(u, e.options)) return !1;
    } else if (!H(e.queryKey, u)) return !1;
  }
  if (s !== "all") {
    const a = e.isActive();
    if ((s === "active" && !a) || (s === "inactive" && a)) return !1;
  }
  return !(
    (typeof c == "boolean" && e.isStale() !== c) ||
    (typeof r < "u" && r !== e.state.fetchStatus) ||
    (i && !i(e))
  );
}
function Kt(t, e) {
  const { exact: s, status: n, predicate: r, mutationKey: i } = t;
  if (i) {
    if (!e.options.mutationKey) return !1;
    if (s) {
      if (B(e.options.mutationKey) !== B(i)) return !1;
    } else if (!H(e.options.mutationKey, i)) return !1;
  }
  return !((n && e.state.status !== n) || (r && !r(e)));
}
function xt(t, e) {
  return (e?.queryKeyHashFn || B)(t);
}
function B(t) {
  return JSON.stringify(t, (e, s) =>
    Ot(s)
      ? Object.keys(s)
          .sort()
          .reduce((n, r) => ((n[r] = s[r]), n), {})
      : s
  );
}
function H(t, e) {
  return t === e
    ? !0
    : typeof t != typeof e
    ? !1
    : t && e && typeof t == "object" && typeof e == "object"
    ? !Object.keys(e).some((s) => !H(t[s], e[s]))
    : !1;
}
function Ee(t, e) {
  if (t === e) return t;
  const s = Yt(t) && Yt(e);
  if (s || (Ot(t) && Ot(e))) {
    const n = s ? t.length : Object.keys(t).length,
      r = s ? e : Object.keys(e),
      i = r.length,
      u = s ? [] : {};
    let c = 0;
    for (let a = 0; a < i; a++) {
      const o = s ? a : r[a];
      (u[o] = Ee(t[o], e[o])), u[o] === t[o] && c++;
    }
    return n === i && c === n ? t : u;
  }
  return e;
}
function X(t, e) {
  if ((t && !e) || (e && !t)) return !1;
  for (const s in t) if (t[s] !== e[s]) return !1;
  return !0;
}
function Yt(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Ot(t) {
  if (!zt(t)) return !1;
  const e = t.constructor;
  if (typeof e > "u") return !0;
  const s = e.prototype;
  return !(!zt(s) || !s.hasOwnProperty("isPrototypeOf"));
}
function zt(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Se(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function Vt(t) {
  Se(0).then(t);
}
function wt(t, e, s) {
  return typeof s.structuralSharing == "function"
    ? s.structuralSharing(t, e)
    : s.structuralSharing !== !1
    ? Ee(t, e)
    : e;
}
function Us(t, e, s = 0) {
  const n = [...t, e];
  return s && n.length > s ? n.slice(1) : n;
}
function qs(t, e, s = 0) {
  const n = [e, ...t];
  return s && n.length > s ? n.slice(0, -1) : n;
}
var Ls = class extends q {
    #t;
    #e;
    #s;
    constructor() {
      super(),
        (this.#s = (t) => {
          if (!U && window.addEventListener) {
            const e = () => t();
            return (
              window.addEventListener("visibilitychange", e, !1),
              () => {
                window.removeEventListener("visibilitychange", e);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#e || this.setEventListener(this.#s);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#e?.(), (this.#e = void 0));
    }
    setEventListener(t) {
      (this.#s = t),
        this.#e?.(),
        (this.#e = t((e) => {
          typeof e == "boolean" ? this.setFocused(e) : this.onFocus();
        }));
    }
    setFocused(t) {
      this.#t !== t && ((this.#t = t), this.onFocus());
    }
    onFocus() {
      this.listeners.forEach((t) => {
        t();
      });
    }
    isFocused() {
      return typeof this.#t == "boolean"
        ? this.#t
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  tt = new Ls(),
  Qs = class extends q {
    #t = !0;
    #e;
    #s;
    constructor() {
      super(),
        (this.#s = (t) => {
          if (!U && window.addEventListener) {
            const e = () => t(!0),
              s = () => t(!1);
            return (
              window.addEventListener("online", e, !1),
              window.addEventListener("offline", s, !1),
              () => {
                window.removeEventListener("online", e),
                  window.removeEventListener("offline", s);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#e || this.setEventListener(this.#s);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#e?.(), (this.#e = void 0));
    }
    setEventListener(t) {
      (this.#s = t), this.#e?.(), (this.#e = t(this.setOnline.bind(this)));
    }
    setOnline(t) {
      this.#t !== t &&
        ((this.#t = t),
        this.listeners.forEach((s) => {
          s(t);
        }));
    }
    isOnline() {
      return this.#t;
    }
  },
  et = new Qs();
function Bs(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function rt(t) {
  return (t ?? "online") === "online" ? et.isOnline() : !0;
}
var ve = class {
  constructor(t) {
    (this.revert = t?.revert), (this.silent = t?.silent);
  }
};
function yt(t) {
  return t instanceof ve;
}
function Oe(t) {
  let e = !1,
    s = 0,
    n = !1,
    r,
    i,
    u;
  const c = new Promise((p, g) => {
      (i = p), (u = g);
    }),
    a = (p) => {
      n || (d(new ve(p)), t.abort?.());
    },
    o = () => {
      e = !0;
    },
    h = () => {
      e = !1;
    },
    l = () => !tt.isFocused() || (t.networkMode !== "always" && !et.isOnline()),
    y = (p) => {
      n || ((n = !0), t.onSuccess?.(p), r?.(), i(p));
    },
    d = (p) => {
      n || ((n = !0), t.onError?.(p), r?.(), u(p));
    },
    m = () =>
      new Promise((p) => {
        (r = (g) => {
          const _ = n || !l();
          return _ && p(g), _;
        }),
          t.onPause?.();
      }).then(() => {
        (r = void 0), n || t.onContinue?.();
      }),
    f = () => {
      if (n) return;
      let p;
      try {
        p = t.fn();
      } catch (g) {
        p = Promise.reject(g);
      }
      Promise.resolve(p)
        .then(y)
        .catch((g) => {
          if (n) return;
          const _ = t.retry ?? (U ? 0 : 3),
            v = t.retryDelay ?? Bs,
            O = typeof v == "function" ? v(s, g) : v,
            E =
              _ === !0 ||
              (typeof _ == "number" && s < _) ||
              (typeof _ == "function" && _(s, g));
          if (e || !E) {
            d(g);
            return;
          }
          s++,
            t.onFail?.(s, g),
            Se(O)
              .then(() => {
                if (l()) return m();
              })
              .then(() => {
                e ? d(g) : f();
              });
        });
    };
  return (
    rt(t.networkMode) ? f() : m().then(f),
    {
      promise: c,
      cancel: a,
      continue: () => (r?.() ? c : Promise.resolve()),
      cancelRetry: o,
      continueRetry: h,
    }
  );
}
function Hs() {
  let t = [],
    e = 0,
    s = (h) => {
      h();
    },
    n = (h) => {
      h();
    };
  const r = (h) => {
      let l;
      e++;
      try {
        l = h();
      } finally {
        e--, e || c();
      }
      return l;
    },
    i = (h) => {
      e
        ? t.push(h)
        : Vt(() => {
            s(h);
          });
    },
    u =
      (h) =>
      (...l) => {
        i(() => {
          h(...l);
        });
      },
    c = () => {
      const h = t;
      (t = []),
        h.length &&
          Vt(() => {
            n(() => {
              h.forEach((l) => {
                s(l);
              });
            });
          });
    };
  return {
    batch: r,
    batchCalls: u,
    schedule: i,
    setNotifyFunction: (h) => {
      s = h;
    },
    setBatchNotifyFunction: (h) => {
      n = h;
    },
  };
}
var S = Hs(),
  we = class {
    #t;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(),
        vt(this.gcTime) &&
          (this.#t = setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime));
    }
    updateGcTime(t) {
      this.gcTime = Math.max(this.gcTime || 0, t ?? (U ? 1 / 0 : 5 * 60 * 1e3));
    }
    clearGcTimeout() {
      this.#t && (clearTimeout(this.#t), (this.#t = void 0));
    }
  },
  Gs = class extends we {
    constructor(t) {
      super(),
        (this.#u = !1),
        (this.#o = t.defaultOptions),
        this.#c(t.options),
        (this.#i = []),
        (this.#s = t.cache),
        (this.queryKey = t.queryKey),
        (this.queryHash = t.queryHash),
        (this.#t = t.state || Ks(this.options)),
        (this.state = this.#t),
        this.scheduleGc();
    }
    #t;
    #e;
    #s;
    #n;
    #r;
    #i;
    #o;
    #u;
    get meta() {
      return this.options.meta;
    }
    #c(t) {
      (this.options = { ...this.#o, ...t }),
        this.updateGcTime(this.options.gcTime);
    }
    optionalRemove() {
      !this.#i.length &&
        this.state.fetchStatus === "idle" &&
        this.#s.remove(this);
    }
    setData(t, e) {
      const s = wt(this.state.data, t, this.options);
      return (
        this.#a({
          data: s,
          type: "success",
          dataUpdatedAt: e?.updatedAt,
          manual: e?.manual,
        }),
        s
      );
    }
    setState(t, e) {
      this.#a({ type: "setState", state: t, setStateOptions: e });
    }
    cancel(t) {
      const e = this.#n;
      return this.#r?.cancel(t), e ? e.then(w).catch(w) : Promise.resolve();
    }
    destroy() {
      super.destroy(), this.cancel({ silent: !0 });
    }
    reset() {
      this.destroy(), this.setState(this.#t);
    }
    isActive() {
      return this.#i.some((t) => t.options.enabled !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0 && !this.isActive();
    }
    isStale() {
      return (
        this.state.isInvalidated ||
        !this.state.dataUpdatedAt ||
        this.#i.some((t) => t.getCurrentResult().isStale)
      );
    }
    isStaleByTime(t = 0) {
      return (
        this.state.isInvalidated ||
        !this.state.dataUpdatedAt ||
        !be(this.state.dataUpdatedAt, t)
      );
    }
    onFocus() {
      this.#i
        .find((e) => e.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#r?.continue();
    }
    onOnline() {
      this.#i
        .find((e) => e.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#r?.continue();
    }
    addObserver(t) {
      this.#i.includes(t) ||
        (this.#i.push(t),
        this.clearGcTimeout(),
        this.#s.notify({ type: "observerAdded", query: this, observer: t }));
    }
    removeObserver(t) {
      this.#i.includes(t) &&
        ((this.#i = this.#i.filter((e) => e !== t)),
        this.#i.length ||
          (this.#r &&
            (this.#u ? this.#r.cancel({ revert: !0 }) : this.#r.cancelRetry()),
          this.scheduleGc()),
        this.#s.notify({ type: "observerRemoved", query: this, observer: t }));
    }
    getObserversCount() {
      return this.#i.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#a({ type: "invalidate" });
    }
    fetch(t, e) {
      if (this.state.fetchStatus !== "idle") {
        if (this.state.dataUpdatedAt && e?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#n) return this.#r?.continueRetry(), this.#n;
      }
      if ((t && this.#c(t), !this.options.queryFn)) {
        const a = this.#i.find((o) => o.options.queryFn);
        a && this.#c(a.options);
      }
      const s = new AbortController(),
        n = { queryKey: this.queryKey, meta: this.meta },
        r = (a) => {
          Object.defineProperty(a, "signal", {
            enumerable: !0,
            get: () => ((this.#u = !0), s.signal),
          });
        };
      r(n);
      const i = () =>
          this.options.queryFn
            ? ((this.#u = !1),
              this.options.persister
                ? this.options.persister(this.options.queryFn, n, this)
                : this.options.queryFn(n))
            : Promise.reject(
                new Error(`Missing queryFn: '${this.options.queryHash}'`)
              ),
        u = {
          fetchOptions: e,
          options: this.options,
          queryKey: this.queryKey,
          state: this.state,
          fetchFn: i,
        };
      r(u),
        this.options.behavior?.onFetch(u, this),
        (this.#e = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== u.fetchOptions?.meta) &&
          this.#a({ type: "fetch", meta: u.fetchOptions?.meta });
      const c = (a) => {
        (yt(a) && a.silent) || this.#a({ type: "error", error: a }),
          yt(a) ||
            (this.#s.config.onError?.(a, this),
            this.#s.config.onSettled?.(this.state.data, a, this)),
          this.isFetchingOptimistic || this.scheduleGc(),
          (this.isFetchingOptimistic = !1);
      };
      return (
        (this.#r = Oe({
          fn: u.fetchFn,
          abort: s.abort.bind(s),
          onSuccess: (a) => {
            if (typeof a > "u") {
              c(new Error(`${this.queryHash} data is undefined`));
              return;
            }
            this.setData(a),
              this.#s.config.onSuccess?.(a, this),
              this.#s.config.onSettled?.(a, this.state.error, this),
              this.isFetchingOptimistic || this.scheduleGc(),
              (this.isFetchingOptimistic = !1);
          },
          onError: c,
          onFail: (a, o) => {
            this.#a({ type: "failed", failureCount: a, error: o });
          },
          onPause: () => {
            this.#a({ type: "pause" });
          },
          onContinue: () => {
            this.#a({ type: "continue" });
          },
          retry: u.options.retry,
          retryDelay: u.options.retryDelay,
          networkMode: u.options.networkMode,
        })),
        (this.#n = this.#r.promise),
        this.#n
      );
    }
    #a(t) {
      const e = (s) => {
        switch (t.type) {
          case "failed":
            return {
              ...s,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...s, fetchStatus: "paused" };
          case "continue":
            return { ...s, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...s,
              fetchFailureCount: 0,
              fetchFailureReason: null,
              fetchMeta: t.meta ?? null,
              fetchStatus: rt(this.options.networkMode) ? "fetching" : "paused",
              ...(!s.dataUpdatedAt && { error: null, status: "pending" }),
            };
          case "success":
            return {
              ...s,
              data: t.data,
              dataUpdateCount: s.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const n = t.error;
            return yt(n) && n.revert && this.#e
              ? { ...this.#e, fetchStatus: "idle" }
              : {
                  ...s,
                  error: n,
                  errorUpdateCount: s.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: s.fetchFailureCount + 1,
                  fetchFailureReason: n,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...s, isInvalidated: !0 };
          case "setState":
            return { ...s, ...t.state };
        }
      };
      (this.state = e(this.state)),
        S.batch(() => {
          this.#i.forEach((s) => {
            s.onQueryUpdate();
          }),
            this.#s.notify({ query: this, type: "updated", action: t });
        });
    }
  };
function Ks(t) {
  const e =
      typeof t.initialData == "function" ? t.initialData() : t.initialData,
    s = typeof e < "u",
    n = s
      ? typeof t.initialDataUpdatedAt == "function"
        ? t.initialDataUpdatedAt()
        : t.initialDataUpdatedAt
      : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: s ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: s ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Ys = class extends q {
    constructor(t = {}) {
      super(), (this.config = t), (this.#t = new Map());
    }
    #t;
    build(t, e, s) {
      const n = e.queryKey,
        r = e.queryHash ?? xt(n, e);
      let i = this.get(r);
      return (
        i ||
          ((i = new Gs({
            cache: this,
            queryKey: n,
            queryHash: r,
            options: t.defaultQueryOptions(e),
            state: s,
            defaultOptions: t.getQueryDefaults(n),
          })),
          this.add(i)),
        i
      );
    }
    add(t) {
      this.#t.has(t.queryHash) ||
        (this.#t.set(t.queryHash, t), this.notify({ type: "added", query: t }));
    }
    remove(t) {
      const e = this.#t.get(t.queryHash);
      e &&
        (t.destroy(),
        e === t && this.#t.delete(t.queryHash),
        this.notify({ type: "removed", query: t }));
    }
    clear() {
      S.batch(() => {
        this.getAll().forEach((t) => {
          this.remove(t);
        });
      });
    }
    get(t) {
      return this.#t.get(t);
    }
    getAll() {
      return [...this.#t.values()];
    }
    find(t) {
      const e = { exact: !0, ...t };
      return this.getAll().find((s) => Gt(e, s));
    }
    findAll(t = {}) {
      const e = this.getAll();
      return Object.keys(t).length > 0 ? e.filter((s) => Gt(t, s)) : e;
    }
    notify(t) {
      S.batch(() => {
        this.listeners.forEach((e) => {
          e(t);
        });
      });
    }
    onFocus() {
      S.batch(() => {
        this.getAll().forEach((t) => {
          t.onFocus();
        });
      });
    }
    onOnline() {
      S.batch(() => {
        this.getAll().forEach((t) => {
          t.onOnline();
        });
      });
    }
  },
  zs = class extends we {
    constructor(t) {
      super(),
        (this.mutationId = t.mutationId),
        (this.#e = t.defaultOptions),
        (this.#s = t.mutationCache),
        (this.#t = []),
        (this.state = t.state || Re()),
        this.setOptions(t.options),
        this.scheduleGc();
    }
    #t;
    #e;
    #s;
    #n;
    setOptions(t) {
      (this.options = { ...this.#e, ...t }),
        this.updateGcTime(this.options.gcTime);
    }
    get meta() {
      return this.options.meta;
    }
    addObserver(t) {
      this.#t.includes(t) ||
        (this.#t.push(t),
        this.clearGcTimeout(),
        this.#s.notify({ type: "observerAdded", mutation: this, observer: t }));
    }
    removeObserver(t) {
      (this.#t = this.#t.filter((e) => e !== t)),
        this.scheduleGc(),
        this.#s.notify({
          type: "observerRemoved",
          mutation: this,
          observer: t,
        });
    }
    optionalRemove() {
      this.#t.length ||
        (this.state.status === "pending"
          ? this.scheduleGc()
          : this.#s.remove(this));
    }
    continue() {
      return this.#n?.continue() ?? this.execute(this.state.variables);
    }
    async execute(t) {
      const e = () => (
          (this.#n = Oe({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (n, r) => {
              this.#r({ type: "failed", failureCount: n, error: r });
            },
            onPause: () => {
              this.#r({ type: "pause" });
            },
            onContinue: () => {
              this.#r({ type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
          })),
          this.#n.promise
        ),
        s = this.state.status === "pending";
      try {
        if (!s) {
          this.#r({ type: "pending", variables: t }),
            await this.#s.config.onMutate?.(t, this);
          const r = await this.options.onMutate?.(t);
          r !== this.state.context &&
            this.#r({ type: "pending", context: r, variables: t });
        }
        const n = await e();
        return (
          await this.#s.config.onSuccess?.(n, t, this.state.context, this),
          await this.options.onSuccess?.(n, t, this.state.context),
          await this.#s.config.onSettled?.(
            n,
            null,
            this.state.variables,
            this.state.context,
            this
          ),
          await this.options.onSettled?.(n, null, t, this.state.context),
          this.#r({ type: "success", data: n }),
          n
        );
      } catch (n) {
        try {
          throw (
            (await this.#s.config.onError?.(n, t, this.state.context, this),
            await this.options.onError?.(n, t, this.state.context),
            await this.#s.config.onSettled?.(
              void 0,
              n,
              this.state.variables,
              this.state.context,
              this
            ),
            await this.options.onSettled?.(void 0, n, t, this.state.context),
            n)
          );
        } finally {
          this.#r({ type: "error", error: n });
        }
      }
    }
    #r(t) {
      const e = (s) => {
        switch (t.type) {
          case "failed":
            return {
              ...s,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...s, isPaused: !0 };
          case "continue":
            return { ...s, isPaused: !1 };
          case "pending":
            return {
              ...s,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: !rt(this.options.networkMode),
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...s,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...s,
              data: void 0,
              error: t.error,
              failureCount: s.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = e(this.state)),
        S.batch(() => {
          this.#t.forEach((s) => {
            s.onMutationUpdate(t);
          }),
            this.#s.notify({ mutation: this, type: "updated", action: t });
        });
    }
  };
function Re() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Vs = class extends q {
  constructor(t = {}) {
    super(), (this.config = t), (this.#t = []), (this.#e = 0);
  }
  #t;
  #e;
  #s;
  build(t, e, s) {
    const n = new zs({
      mutationCache: this,
      mutationId: ++this.#e,
      options: t.defaultMutationOptions(e),
      state: s,
    });
    return this.add(n), n;
  }
  add(t) {
    this.#t.push(t), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    (this.#t = this.#t.filter((e) => e !== t)),
      this.notify({ type: "removed", mutation: t });
  }
  clear() {
    S.batch(() => {
      this.#t.forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return this.#t;
  }
  find(t) {
    const e = { exact: !0, ...t };
    return this.#t.find((s) => Kt(e, s));
  }
  findAll(t = {}) {
    return this.#t.filter((e) => Kt(t, e));
  }
  notify(t) {
    S.batch(() => {
      this.listeners.forEach((e) => {
        e(t);
      });
    });
  }
  resumePausedMutations() {
    return (
      (this.#s = (this.#s ?? Promise.resolve())
        .then(() => {
          const t = this.#t.filter((e) => e.state.isPaused);
          return S.batch(() =>
            t.reduce(
              (e, s) => e.then(() => s.continue().catch(w)),
              Promise.resolve()
            )
          );
        })
        .then(() => {
          this.#s = void 0;
        })),
      this.#s
    );
  }
};
function Rt(t) {
  return {
    onFetch: (e, s) => {
      const n = async () => {
        const r = e.options,
          i = e.fetchOptions?.meta?.fetchMore?.direction,
          u = e.state.data?.pages || [],
          c = e.state.data?.pageParams || [],
          a = { pages: [], pageParams: [] };
        let o = !1;
        const h = (m) => {
            Object.defineProperty(m, "signal", {
              enumerable: !0,
              get: () => (
                e.signal.aborted
                  ? (o = !0)
                  : e.signal.addEventListener("abort", () => {
                      o = !0;
                    }),
                e.signal
              ),
            });
          },
          l =
            e.options.queryFn ||
            (() =>
              Promise.reject(
                new Error(`Missing queryFn: '${e.options.queryHash}'`)
              )),
          y = async (m, f, p) => {
            if (o) return Promise.reject();
            if (f == null && m.pages.length) return Promise.resolve(m);
            const g = {
              queryKey: e.queryKey,
              pageParam: f,
              direction: p ? "backward" : "forward",
              meta: e.options.meta,
            };
            h(g);
            const _ = await l(g),
              { maxPages: v } = e.options,
              O = p ? qs : Us;
            return {
              pages: O(m.pages, _, v),
              pageParams: O(m.pageParams, f, v),
            };
          };
        let d;
        if (i && u.length) {
          const m = i === "backward",
            f = m ? Pe : Pt,
            p = { pages: u, pageParams: c },
            g = f(r, p);
          d = await y(p, g, m);
        } else {
          d = await y(a, c[0] ?? r.initialPageParam);
          const m = t ?? u.length;
          for (let f = 1; f < m; f++) {
            const p = Pt(r, d);
            d = await y(d, p);
          }
        }
        return d;
      };
      e.options.persister
        ? (e.fetchFn = () =>
            e.options.persister?.(
              n,
              { queryKey: e.queryKey, meta: e.options.meta, signal: e.signal },
              s
            ))
        : (e.fetchFn = n);
    },
  };
}
function Pt(t, { pages: e, pageParams: s }) {
  const n = e.length - 1;
  return t.getNextPageParam(e[n], e, s[n], s);
}
function Pe(t, { pages: e, pageParams: s }) {
  return t.getPreviousPageParam?.(e[0], e, s[0], s);
}
function Js(t, e) {
  return e ? Pt(t, e) != null : !1;
}
function Ws(t, e) {
  return !e || !t.getPreviousPageParam ? !1 : Pe(t, e) != null;
}
var Zs = class {
    #t;
    #e;
    #s;
    #n;
    #r;
    #i;
    #o;
    #u;
    constructor(t = {}) {
      (this.#t = t.queryCache || new Ys()),
        (this.#e = t.mutationCache || new Vs()),
        (this.#s = t.defaultOptions || {}),
        (this.#n = new Map()),
        (this.#r = new Map()),
        (this.#i = 0);
    }
    mount() {
      this.#i++,
        this.#i === 1 &&
          ((this.#o = tt.subscribe(() => {
            tt.isFocused() && (this.resumePausedMutations(), this.#t.onFocus());
          })),
          (this.#u = et.subscribe(() => {
            et.isOnline() && (this.resumePausedMutations(), this.#t.onOnline());
          })));
    }
    unmount() {
      this.#i--,
        this.#i === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#u?.(), (this.#u = void 0));
    }
    isFetching(t) {
      return this.#t.findAll({ ...t, fetchStatus: "fetching" }).length;
    }
    isMutating(t) {
      return this.#e.findAll({ ...t, status: "pending" }).length;
    }
    getQueryData(t) {
      return this.#t.find({ queryKey: t })?.state.data;
    }
    ensureQueryData(t) {
      const e = this.getQueryData(t.queryKey);
      return e !== void 0 ? Promise.resolve(e) : this.fetchQuery(t);
    }
    getQueriesData(t) {
      return this.getQueryCache()
        .findAll(t)
        .map(({ queryKey: e, state: s }) => {
          const n = s.data;
          return [e, n];
        });
    }
    setQueryData(t, e, s) {
      const r = this.#t.find({ queryKey: t })?.state.data,
        i = js(e, r);
      if (typeof i > "u") return;
      const u = this.defaultQueryOptions({ queryKey: t });
      return this.#t.build(this, u).setData(i, { ...s, manual: !0 });
    }
    setQueriesData(t, e, s) {
      return S.batch(() =>
        this.getQueryCache()
          .findAll(t)
          .map(({ queryKey: n }) => [n, this.setQueryData(n, e, s)])
      );
    }
    getQueryState(t) {
      return this.#t.find({ queryKey: t })?.state;
    }
    removeQueries(t) {
      const e = this.#t;
      S.batch(() => {
        e.findAll(t).forEach((s) => {
          e.remove(s);
        });
      });
    }
    resetQueries(t, e) {
      const s = this.#t,
        n = { type: "active", ...t };
      return S.batch(
        () => (
          s.findAll(t).forEach((r) => {
            r.reset();
          }),
          this.refetchQueries(n, e)
        )
      );
    }
    cancelQueries(t = {}, e = {}) {
      const s = { revert: !0, ...e },
        n = S.batch(() => this.#t.findAll(t).map((r) => r.cancel(s)));
      return Promise.all(n).then(w).catch(w);
    }
    invalidateQueries(t = {}, e = {}) {
      return S.batch(() => {
        if (
          (this.#t.findAll(t).forEach((n) => {
            n.invalidate();
          }),
          t.refetchType === "none")
        )
          return Promise.resolve();
        const s = { ...t, type: t.refetchType ?? t.type ?? "active" };
        return this.refetchQueries(s, e);
      });
    }
    refetchQueries(t = {}, e) {
      const s = { ...e, cancelRefetch: e?.cancelRefetch ?? !0 },
        n = S.batch(() =>
          this.#t
            .findAll(t)
            .filter((r) => !r.isDisabled())
            .map((r) => {
              let i = r.fetch(void 0, s);
              return (
                s.throwOnError || (i = i.catch(w)),
                r.state.fetchStatus === "paused" ? Promise.resolve() : i
              );
            })
        );
      return Promise.all(n).then(w);
    }
    fetchQuery(t) {
      const e = this.defaultQueryOptions(t);
      typeof e.retry > "u" && (e.retry = !1);
      const s = this.#t.build(this, e);
      return s.isStaleByTime(e.staleTime)
        ? s.fetch(e)
        : Promise.resolve(s.state.data);
    }
    prefetchQuery(t) {
      return this.fetchQuery(t).then(w).catch(w);
    }
    fetchInfiniteQuery(t) {
      return (t.behavior = Rt(t.pages)), this.fetchQuery(t);
    }
    prefetchInfiniteQuery(t) {
      return this.fetchInfiniteQuery(t).then(w).catch(w);
    }
    resumePausedMutations() {
      return this.#e.resumePausedMutations();
    }
    getQueryCache() {
      return this.#t;
    }
    getMutationCache() {
      return this.#e;
    }
    getDefaultOptions() {
      return this.#s;
    }
    setDefaultOptions(t) {
      this.#s = t;
    }
    setQueryDefaults(t, e) {
      this.#n.set(B(t), { queryKey: t, defaultOptions: e });
    }
    getQueryDefaults(t) {
      const e = [...this.#n.values()];
      let s = {};
      return (
        e.forEach((n) => {
          H(t, n.queryKey) && (s = { ...s, ...n.defaultOptions });
        }),
        s
      );
    }
    setMutationDefaults(t, e) {
      this.#r.set(B(t), { mutationKey: t, defaultOptions: e });
    }
    getMutationDefaults(t) {
      const e = [...this.#r.values()];
      let s = {};
      return (
        e.forEach((n) => {
          H(t, n.mutationKey) && (s = { ...s, ...n.defaultOptions });
        }),
        s
      );
    }
    defaultQueryOptions(t) {
      if (t?._defaulted) return t;
      const e = {
        ...this.#s.queries,
        ...(t?.queryKey && this.getQueryDefaults(t.queryKey)),
        ...t,
        _defaulted: !0,
      };
      return (
        e.queryHash || (e.queryHash = xt(e.queryKey, e)),
        typeof e.refetchOnReconnect > "u" &&
          (e.refetchOnReconnect = e.networkMode !== "always"),
        typeof e.throwOnError > "u" && (e.throwOnError = !!e.suspense),
        typeof e.networkMode > "u" &&
          e.persister &&
          (e.networkMode = "offlineFirst"),
        e
      );
    }
    defaultMutationOptions(t) {
      return t?._defaulted
        ? t
        : {
            ...this.#s.mutations,
            ...(t?.mutationKey && this.getMutationDefaults(t.mutationKey)),
            ...t,
            _defaulted: !0,
          };
    }
    clear() {
      this.#t.clear(), this.#e.clear();
    }
  },
  Te = class extends q {
    constructor(t, e) {
      super(),
        (this.#e = void 0),
        (this.#s = void 0),
        (this.#n = void 0),
        (this.#d = new Set()),
        (this.#t = t),
        (this.options = e),
        (this.#o = null),
        this.bindMethods(),
        this.setOptions(e);
    }
    #t;
    #e;
    #s;
    #n;
    #r;
    #i;
    #o;
    #u;
    #c;
    #a;
    #h;
    #f;
    #l;
    #d;
    bindMethods() {
      this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
      this.listeners.size === 1 &&
        (this.#e.addObserver(this),
        Jt(this.#e, this.options) ? this.#p() : this.updateResult(),
        this.#_());
    }
    onUnsubscribe() {
      this.hasListeners() || this.destroy();
    }
    shouldFetchOnReconnect() {
      return Tt(this.#e, this.options, this.options.refetchOnReconnect);
    }
    shouldFetchOnWindowFocus() {
      return Tt(this.#e, this.options, this.options.refetchOnWindowFocus);
    }
    destroy() {
      (this.listeners = new Set()),
        this.#b(),
        this.#E(),
        this.#e.removeObserver(this);
    }
    setOptions(t, e) {
      const s = this.options,
        n = this.#e;
      if (
        ((this.options = this.#t.defaultQueryOptions(t)),
        X(s, this.options) ||
          this.#t
            .getQueryCache()
            .notify({
              type: "observerOptionsUpdated",
              query: this.#e,
              observer: this,
            }),
        typeof this.options.enabled < "u" &&
          typeof this.options.enabled != "boolean")
      )
        throw new Error("Expected enabled to be a boolean");
      this.options.queryKey || (this.options.queryKey = s.queryKey), this.#S();
      const r = this.hasListeners();
      r && Wt(this.#e, n, this.options, s) && this.#p(),
        this.updateResult(e),
        r &&
          (this.#e !== n ||
            this.options.enabled !== s.enabled ||
            this.options.staleTime !== s.staleTime) &&
          this.#y();
      const i = this.#m();
      r &&
        (this.#e !== n ||
          this.options.enabled !== s.enabled ||
          i !== this.#l) &&
        this.#g(i);
    }
    getOptimisticResult(t) {
      const e = this.#t.getQueryCache().build(this.#t, t),
        s = this.createResult(e, t);
      return (
        tn(this, s) &&
          ((this.#n = s), (this.#i = this.options), (this.#r = this.#e.state)),
        s
      );
    }
    getCurrentResult() {
      return this.#n;
    }
    trackResult(t) {
      const e = {};
      return (
        Object.keys(t).forEach((s) => {
          Object.defineProperty(e, s, {
            configurable: !1,
            enumerable: !0,
            get: () => (this.#d.add(s), t[s]),
          });
        }),
        e
      );
    }
    getCurrentQuery() {
      return this.#e;
    }
    refetch({ ...t } = {}) {
      return this.fetch({ ...t });
    }
    fetchOptimistic(t) {
      const e = this.#t.defaultQueryOptions(t),
        s = this.#t.getQueryCache().build(this.#t, e);
      return (
        (s.isFetchingOptimistic = !0),
        s.fetch().then(() => this.createResult(s, e))
      );
    }
    fetch(t) {
      return this.#p({ ...t, cancelRefetch: t.cancelRefetch ?? !0 }).then(
        () => (this.updateResult(), this.#n)
      );
    }
    #p(t) {
      this.#S();
      let e = this.#e.fetch(this.options, t);
      return t?.throwOnError || (e = e.catch(w)), e;
    }
    #y() {
      if ((this.#b(), U || this.#n.isStale || !vt(this.options.staleTime)))
        return;
      const e = be(this.#n.dataUpdatedAt, this.options.staleTime) + 1;
      this.#h = setTimeout(() => {
        this.#n.isStale || this.updateResult();
      }, e);
    }
    #m() {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(this.#e)
          : this.options.refetchInterval) ?? !1
      );
    }
    #g(t) {
      this.#E(),
        (this.#l = t),
        !(U || this.options.enabled === !1 || !vt(this.#l) || this.#l === 0) &&
          (this.#f = setInterval(() => {
            (this.options.refetchIntervalInBackground || tt.isFocused()) &&
              this.#p();
          }, this.#l));
    }
    #_() {
      this.#y(), this.#g(this.#m());
    }
    #b() {
      this.#h && (clearTimeout(this.#h), (this.#h = void 0));
    }
    #E() {
      this.#f && (clearInterval(this.#f), (this.#f = void 0));
    }
    createResult(t, e) {
      const s = this.#e,
        n = this.options,
        r = this.#n,
        i = this.#r,
        u = this.#i,
        a = t !== s ? t.state : this.#s,
        { state: o } = t;
      let { error: h, errorUpdatedAt: l, fetchStatus: y, status: d } = o,
        m = !1,
        f;
      if (e._optimisticResults) {
        const E = this.hasListeners(),
          A = !E && Jt(t, e),
          b = E && Wt(t, s, e, n);
        (A || b) &&
          ((y = rt(t.options.networkMode) ? "fetching" : "paused"),
          o.dataUpdatedAt || (d = "pending")),
          e._optimisticResults === "isRestoring" && (y = "idle");
      }
      if (e.select && typeof o.data < "u")
        if (r && o.data === i?.data && e.select === this.#u) f = this.#c;
        else
          try {
            (this.#u = e.select),
              (f = e.select(o.data)),
              (f = wt(r?.data, f, e)),
              (this.#c = f),
              (this.#o = null);
          } catch (E) {
            this.#o = E;
          }
      else f = o.data;
      if (typeof e.placeholderData < "u" && typeof f > "u" && d === "pending") {
        let E;
        if (r?.isPlaceholderData && e.placeholderData === u?.placeholderData)
          E = r.data;
        else if (
          ((E =
            typeof e.placeholderData == "function"
              ? e.placeholderData(this.#a?.state.data, this.#a)
              : e.placeholderData),
          e.select && typeof E < "u")
        )
          try {
            (E = e.select(E)), (this.#o = null);
          } catch (A) {
            this.#o = A;
          }
        typeof E < "u" && ((d = "success"), (f = wt(r?.data, E, e)), (m = !0));
      }
      this.#o &&
        ((h = this.#o), (f = this.#c), (l = Date.now()), (d = "error"));
      const p = y === "fetching",
        g = d === "pending",
        _ = d === "error",
        v = g && p;
      return {
        status: d,
        fetchStatus: y,
        isPending: g,
        isSuccess: d === "success",
        isError: _,
        isInitialLoading: v,
        isLoading: v,
        data: f,
        dataUpdatedAt: o.dataUpdatedAt,
        error: h,
        errorUpdatedAt: l,
        failureCount: o.fetchFailureCount,
        failureReason: o.fetchFailureReason,
        errorUpdateCount: o.errorUpdateCount,
        isFetched: o.dataUpdateCount > 0 || o.errorUpdateCount > 0,
        isFetchedAfterMount:
          o.dataUpdateCount > a.dataUpdateCount ||
          o.errorUpdateCount > a.errorUpdateCount,
        isFetching: p,
        isRefetching: p && !g,
        isLoadingError: _ && o.dataUpdatedAt === 0,
        isPaused: y === "paused",
        isPlaceholderData: m,
        isRefetchError: _ && o.dataUpdatedAt !== 0,
        isStale: It(t, e),
        refetch: this.refetch,
      };
    }
    updateResult(t) {
      const e = this.#n,
        s = this.createResult(this.#e, this.options);
      if (
        ((this.#r = this.#e.state),
        (this.#i = this.options),
        this.#r.data !== void 0 && (this.#a = this.#e),
        X(s, e))
      )
        return;
      this.#n = s;
      const n = {},
        r = () => {
          if (!e) return !0;
          const { notifyOnChangeProps: i } = this.options,
            u = typeof i == "function" ? i() : i;
          if (u === "all" || (!u && !this.#d.size)) return !0;
          const c = new Set(u ?? this.#d);
          return (
            this.options.throwOnError && c.add("error"),
            Object.keys(this.#n).some((a) => {
              const o = a;
              return this.#n[o] !== e[o] && c.has(o);
            })
          );
        };
      t?.listeners !== !1 && r() && (n.listeners = !0), this.#v({ ...n, ...t });
    }
    #S() {
      const t = this.#t.getQueryCache().build(this.#t, this.options);
      if (t === this.#e) return;
      const e = this.#e;
      (this.#e = t),
        (this.#s = t.state),
        this.hasListeners() && (e?.removeObserver(this), t.addObserver(this));
    }
    onQueryUpdate() {
      this.updateResult(), this.hasListeners() && this.#_();
    }
    #v(t) {
      S.batch(() => {
        t.listeners &&
          this.listeners.forEach((e) => {
            e(this.#n);
          }),
          this.#t
            .getQueryCache()
            .notify({ query: this.#e, type: "observerResultsUpdated" });
      });
    }
  };
function Xs(t, e) {
  return (
    e.enabled !== !1 &&
    !t.state.dataUpdatedAt &&
    !(t.state.status === "error" && e.retryOnMount === !1)
  );
}
function Jt(t, e) {
  return Xs(t, e) || (t.state.dataUpdatedAt > 0 && Tt(t, e, e.refetchOnMount));
}
function Tt(t, e, s) {
  if (e.enabled !== !1) {
    const n = typeof s == "function" ? s(t) : s;
    return n === "always" || (n !== !1 && It(t, e));
  }
  return !1;
}
function Wt(t, e, s, n) {
  return (
    s.enabled !== !1 &&
    (t !== e || n.enabled === !1) &&
    (!s.suspense || t.state.status !== "error") &&
    It(t, s)
  );
}
function It(t, e) {
  return t.isStaleByTime(e.staleTime);
}
function tn(t, e) {
  return !X(t.getCurrentResult(), e);
}
var en = class extends Te {
    constructor(t, e) {
      super(t, e);
    }
    bindMethods() {
      super.bindMethods(),
        (this.fetchNextPage = this.fetchNextPage.bind(this)),
        (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
    }
    setOptions(t, e) {
      super.setOptions({ ...t, behavior: Rt() }, e);
    }
    getOptimisticResult(t) {
      return (t.behavior = Rt()), super.getOptimisticResult(t);
    }
    fetchNextPage(t) {
      return this.fetch({
        ...t,
        meta: { fetchMore: { direction: "forward" } },
      });
    }
    fetchPreviousPage(t) {
      return this.fetch({
        ...t,
        meta: { fetchMore: { direction: "backward" } },
      });
    }
    createResult(t, e) {
      const { state: s } = t,
        n = super.createResult(t, e),
        { isFetching: r, isRefetching: i } = n,
        u = r && s.fetchMeta?.fetchMore?.direction === "forward",
        c = r && s.fetchMeta?.fetchMore?.direction === "backward";
      return {
        ...n,
        fetchNextPage: this.fetchNextPage,
        fetchPreviousPage: this.fetchPreviousPage,
        hasNextPage: Js(e, s.data),
        hasPreviousPage: Ws(e, s.data),
        isFetchingNextPage: u,
        isFetchingPreviousPage: c,
        isRefetching: i && !u && !c,
      };
    }
  },
  sn = class extends q {
    constructor(t, e) {
      super(),
        (this.#e = void 0),
        (this.#t = t),
        this.setOptions(e),
        this.bindMethods(),
        this.#r();
    }
    #t;
    #e;
    #s;
    #n;
    bindMethods() {
      (this.mutate = this.mutate.bind(this)),
        (this.reset = this.reset.bind(this));
    }
    setOptions(t) {
      const e = this.options;
      (this.options = this.#t.defaultMutationOptions(t)),
        X(e, this.options) ||
          this.#t
            .getMutationCache()
            .notify({
              type: "observerOptionsUpdated",
              mutation: this.#s,
              observer: this,
            }),
        this.#s?.setOptions(this.options);
    }
    onUnsubscribe() {
      this.hasListeners() || this.#s?.removeObserver(this);
    }
    onMutationUpdate(t) {
      this.#r(), this.#i(t);
    }
    getCurrentResult() {
      return this.#e;
    }
    reset() {
      (this.#s = void 0), this.#r(), this.#i();
    }
    mutate(t, e) {
      return (
        (this.#n = e),
        this.#s?.removeObserver(this),
        (this.#s = this.#t.getMutationCache().build(this.#t, this.options)),
        this.#s.addObserver(this),
        this.#s.execute(t)
      );
    }
    #r() {
      const t = this.#s?.state ?? Re();
      this.#e = {
        ...t,
        isPending: t.status === "pending",
        isSuccess: t.status === "success",
        isError: t.status === "error",
        isIdle: t.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      };
    }
    #i(t) {
      S.batch(() => {
        this.#n &&
          this.hasListeners() &&
          (t?.type === "success"
            ? (this.#n.onSuccess?.(t.data, this.#e.variables, this.#e.context),
              this.#n.onSettled?.(
                t.data,
                null,
                this.#e.variables,
                this.#e.context
              ))
            : t?.type === "error" &&
              (this.#n.onError?.(t.error, this.#e.variables, this.#e.context),
              this.#n.onSettled?.(
                void 0,
                t.error,
                this.#e.variables,
                this.#e.context
              ))),
          this.listeners.forEach((e) => {
            e(this.#e);
          });
      });
    }
  };
const De = "$$_queryClient",
  nn = () => {
    const t = fe(De);
    if (!t)
      throw new Error(
        "No QueryClient was found in Svelte context. Did you forget to wrap your component with QueryClientProvider?"
      );
    return t;
  },
  Pr = (t) => {
    cs(De, t);
  },
  rn = "$$_isRestoring",
  on = () => {
    try {
      const t = fe(rn);
      return t || M(!1);
    } catch {
      return M(!1);
    }
  };
function an() {
  return on();
}
function Ce(t) {
  return t || nn();
}
function Ae(t) {
  return "subscribe" in t && typeof t.subscribe == "function";
}
function ke(t, e, s) {
  const n = Ce(s),
    r = an(),
    i = Ae(t) ? t : M(t),
    u = x([i, r], ([h, l]) => {
      const y = n.defaultQueryOptions(h);
      return (y._optimisticResults = l ? "isRestoring" : "optimistic"), y;
    }),
    c = new e(n, de(u));
  u.subscribe((h) => {
    c.setOptions(h, { listeners: !1 });
  });
  const a = x(r, (h, l) => {
      const y = h ? () => {} : c.subscribe(S.batchCalls(l));
      return c.updateResult(), y;
    }),
    { subscribe: o } = x(
      [a, u],
      ([h, l]) => (
        (h = c.getOptimisticResult(l)),
        l.notifyOnChangeProps ? h : c.trackResult(h)
      )
    );
  return { subscribe: o };
}
function un(t, e) {
  return ke(t, Te, e);
}
function cn(t, e) {
  return ke(t, en, e);
}
function ln(t, e) {
  const s = Ce(e),
    n = Ae(t) ? t : M(t),
    r = new sn(s, de(n));
  let i;
  n.subscribe((a) => {
    (i = (o, h) => {
      r.mutate(o, h).catch(hn);
    }),
      r.setOptions(a);
  });
  const u = M(r.getCurrentResult(), (a) =>
      r.subscribe(S.batchCalls((o) => a(o)))
    ),
    { subscribe: c } = x(u, (a) => ({
      ...a,
      mutate: i,
      mutateAsync: a.mutate,
    }));
  return { subscribe: c };
}
function hn() {}
function V(t, e, s) {
  const n = typeof e < "u",
    r = s && s !== "any";
  if (!n && !r) return t.length ? [t] : [];
  const i = {};
  return n && (i.input = e), r && (i.type = s), [t, i];
}
function J(t) {
  if (t === void 0) return [];
  const e = { context: t.context, signal: t.signal };
  return delete t.context, delete t.signal, [t, e];
}
var fn = {
  invalidate: "any",
  prefetch: "query",
  prefetchInfinite: "infinite",
  fetch: "query",
  fetchInfinite: "infinite",
  refetch: "any",
  cancel: "any",
  reset: "any",
  setData: "query",
  setInfiniteData: "infinite",
  getData: "query",
  getInfiniteData: "infinite",
};
function dn(t, e, s, n, r) {
  const i = fn[n],
    u = V(s, r[0], i),
    c = () => {
      const a = r[1] ?? {};
      return (a.queryKey = u), a;
    };
  switch (n) {
    case "prefetch":
    case "fetch":
    case "prefetchInfinite":
    case "fetchInfinite": {
      const a = s.join("."),
        o = r[1],
        [h, l] = J(o),
        y =
          i === "query"
            ? () => t.query(a, r[0], h)
            : (d) => {
                const m = { ...r[0], cursor: d.pageParam };
                return t.query(a, m, h);
              };
      return e[n + "Query"]({ ...l, queryKey: u, queryFn: y });
    }
    case "invalidate":
      return e.invalidateQueries(c(), r[2]);
    case "refetch":
      return e.refetchQueries(c(), r[2]);
    case "cancel":
      return e.cancelQueries(c(), r[2]);
    case "reset":
      return e.resetQueries(c(), r[2]);
    case "setData":
    case "setInfiniteData":
      return e.setQueryData(u, r[1], r[2]);
    case "getData":
    case "getInfiniteData":
      return e.getQueryData(u);
    default:
      throw new TypeError(`trpc.${s}.${n} is not a function`);
  }
}
function pn(t) {
  return t;
}
function yn(t) {
  return t.length === 0
    ? pn
    : t.length === 1
    ? t[0]
    : function (s) {
        return t.reduce((n, r) => r(n), s);
      };
}
function Ne(t) {
  const e = {
    subscribe(s) {
      let n = null,
        r = !1,
        i = !1,
        u = !1;
      function c() {
        if (n === null) {
          u = !0;
          return;
        }
        i || ((i = !0), typeof n == "function" ? n() : n && n.unsubscribe());
      }
      return (
        (n = t({
          next(a) {
            r || s.next?.(a);
          },
          error(a) {
            r || ((r = !0), s.error?.(a), c());
          },
          complete() {
            r || ((r = !0), s.complete?.(), c());
          },
        })),
        u && c(),
        { unsubscribe: c }
      );
    },
    pipe(...s) {
      return yn(s)(e);
    },
  };
  return e;
}
function mn(t) {
  return (e) => {
    let s = 0,
      n = null;
    const r = [];
    function i() {
      n ||
        (n = e.subscribe({
          next(c) {
            for (const a of r) a.next?.(c);
          },
          error(c) {
            for (const a of r) a.error?.(c);
          },
          complete() {
            for (const c of r) c.complete?.();
          },
        }));
    }
    function u() {
      if (s === 0 && n) {
        const c = n;
        (n = null), c.unsubscribe();
      }
    }
    return {
      subscribe(c) {
        return (
          s++,
          r.push(c),
          i(),
          {
            unsubscribe() {
              s--, u();
              const a = r.findIndex((o) => o === c);
              a > -1 && r.splice(a, 1);
            },
          }
        );
      },
    };
  };
}
class Mt extends Error {
  constructor(e) {
    super(e),
      (this.name = "ObservableAbortError"),
      Object.setPrototypeOf(this, Mt.prototype);
  }
}
function gn(t) {
  let e;
  return {
    promise: new Promise((n, r) => {
      let i = !1;
      function u() {
        i ||
          ((i = !0), r(new Mt("This operation was aborted.")), c.unsubscribe());
      }
      const c = t.subscribe({
        next(a) {
          (i = !0), n(a), u();
        },
        error(a) {
          (i = !0), r(a), u();
        },
        complete() {
          (i = !0), u();
        },
      });
      e = u;
    }),
    abort: e,
  };
}
function _n(t) {
  return Ne((e) => {
    function s(r = 0, i = t.op) {
      const u = t.links[r];
      if (!u)
        throw new Error(
          "No more links to execute - did you forget to add an ending link?"
        );
      return u({
        op: i,
        next(a) {
          return s(r + 1, a);
        },
      });
    }
    return s().subscribe(e);
  });
}
function st(t) {
  return !!t && !Array.isArray(t) && typeof t == "object";
}
function bn(t, e) {
  if ("error" in t) {
    const n = e.transformer.deserialize(t.error);
    return { ok: !1, error: { ...t, error: n } };
  }
  return {
    ok: !0,
    result: {
      ...t.result,
      ...((!t.result.type || t.result.type === "data") && {
        type: "data",
        data: e.transformer.deserialize(t.result.data),
      }),
    },
  };
}
class mt extends Error {
  constructor() {
    super("Unable to transform response from server");
  }
}
function En(t, e) {
  let s;
  try {
    s = bn(t, e);
  } catch {
    throw new mt();
  }
  if (!s.ok && (!st(s.error.error) || typeof s.error.error.code != "number"))
    throw new mt();
  if (s.ok && !st(s.result)) throw new mt();
  return s;
}
function Sn(t) {
  return t instanceof D || (t instanceof Error && t.name === "TRPCClientError");
}
function vn(t) {
  return (
    st(t) &&
    st(t.error) &&
    typeof t.error.code == "number" &&
    typeof t.error.message == "string"
  );
}
class D extends Error {
  static from(e, s = {}) {
    const n = e;
    return Sn(n)
      ? (s.meta && (n.meta = { ...n.meta, ...s.meta }), n)
      : vn(n)
      ? new D(n.error.message, { ...s, result: n })
      : n instanceof Error
      ? new D(n.message, { ...s, cause: n })
      : new D("Unknown error", { ...s, cause: n });
  }
  constructor(e, s) {
    const n = s?.cause;
    super(e, { cause: n }),
      (this.meta = s?.meta),
      (this.cause = n),
      (this.shape = s?.result?.error),
      (this.data = s?.result?.error.data),
      (this.name = "TRPCClientError"),
      Object.setPrototypeOf(this, D.prototype);
  }
}
function xe(t) {
  const e = Object.create(null);
  for (const s in t) {
    const n = t[s];
    e[n] = s;
  }
  return e;
}
const Ie = {
  PARSE_ERROR: -32700,
  BAD_REQUEST: -32600,
  INTERNAL_SERVER_ERROR: -32603,
  NOT_IMPLEMENTED: -32603,
  UNAUTHORIZED: -32001,
  FORBIDDEN: -32003,
  NOT_FOUND: -32004,
  METHOD_NOT_SUPPORTED: -32005,
  TIMEOUT: -32008,
  CONFLICT: -32009,
  PRECONDITION_FAILED: -32012,
  PAYLOAD_TOO_LARGE: -32013,
  UNPROCESSABLE_CONTENT: -32022,
  TOO_MANY_REQUESTS: -32029,
  CLIENT_CLOSED_REQUEST: -32099,
};
xe(Ie);
xe(Ie);
const Me = () => {};
function $e(t, e) {
  return new Proxy(Me, {
    get(n, r) {
      if (!(typeof r != "string" || r === "then")) return $e(t, [...e, r]);
    },
    apply(n, r, i) {
      const u = e[e.length - 1] === "apply";
      return t({
        args: u ? (i.length >= 2 ? i[1] : []) : i,
        path: u ? e.slice(0, -1) : e,
      });
    },
  });
}
const On = (t) => $e(t, []),
  wn = (t) =>
    new Proxy(Me, {
      get(e, s) {
        if (!(typeof s != "string" || s === "then")) return t(s);
      },
    }),
  Zt = (t) => typeof t == "function";
function Rn(t) {
  if (t) return t;
  if (typeof window < "u" && Zt(window.fetch)) return window.fetch;
  if (typeof globalThis < "u" && Zt(globalThis.fetch)) return globalThis.fetch;
  throw new Error("No fetch implementation found");
}
function Pn(t) {
  return (
    t ||
    (typeof window < "u" && window.AbortController
      ? window.AbortController
      : typeof globalThis < "u" && globalThis.AbortController
      ? globalThis.AbortController
      : null)
  );
}
function Tn(t) {
  return {
    url: t.url.toString().replace(/\/$/, ""),
    fetch: t.fetch,
    AbortController: Pn(t.AbortController),
  };
}
function Dn(t) {
  const e = {};
  for (let s = 0; s < t.length; s++) {
    const n = t[s];
    e[s] = n;
  }
  return e;
}
const Cn = { query: "GET", mutation: "POST" };
function Fe(t) {
  return "input" in t
    ? t.runtime.transformer.serialize(t.input)
    : Dn(t.inputs.map((e) => t.runtime.transformer.serialize(e)));
}
const je = (t) => {
    let e = t.url + "/" + t.path;
    const s = [];
    if (("inputs" in t && s.push("batch=1"), t.type === "query")) {
      const n = Fe(t);
      n !== void 0 && s.push(`input=${encodeURIComponent(JSON.stringify(n))}`);
    }
    return s.length && (e += "?" + s.join("&")), e;
  },
  An = (t) => {
    if (t.type === "query") return;
    const e = Fe(t);
    return e !== void 0 ? JSON.stringify(e) : void 0;
  },
  kn = (t) =>
    xn({
      ...t,
      contentTypeHeader: "application/json",
      getUrl: je,
      getBody: An,
    });
async function Nn(t, e) {
  const s = t.getUrl(t),
    n = t.getBody(t),
    { type: r } = t,
    i = await t.headers();
  /* istanbul ignore if -- @preserve */ if (r === "subscription")
    throw new Error("Subscriptions should use wsLink");
  const u = {
    ...(t.contentTypeHeader ? { "content-type": t.contentTypeHeader } : {}),
    ...(t.batchModeHeader ? { "trpc-batch-mode": t.batchModeHeader } : {}),
    ...i,
  };
  return Rn(t.fetch)(s, {
    method: Cn[r],
    signal: e?.signal,
    body: n,
    headers: u,
  });
}
function xn(t) {
  const e = t.AbortController ? new t.AbortController() : null,
    s = {};
  let n = !1;
  return {
    promise: new Promise((u, c) => {
      Nn(t, e)
        .then((a) => ((s.response = a), (n = !0), a.json()))
        .then((a) => {
          (s.responseJSON = a), u({ json: a, meta: s });
        })
        .catch((a) => {
          (n = !0), c(D.from(a, { meta: s }));
        });
    }),
    cancel: () => {
      n || e?.abort();
    },
  };
}
const gt = () => {
  throw new Error(
    "Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new"
  );
};
function _t(t) {
  let e = null,
    s = null;
  const n = () => {
    clearTimeout(s), (s = null), (e = null);
  };
  function r(c) {
    const a = [[]];
    let o = 0;
    for (;;) {
      const h = c[o];
      if (!h) break;
      const l = a[a.length - 1];
      if (h.aborted) {
        h.reject?.(new Error("Aborted")), o++;
        continue;
      }
      if (t.validate(l.concat(h).map((d) => d.key))) {
        l.push(h), o++;
        continue;
      }
      if (l.length === 0) {
        h.reject?.(new Error("Input is too big for a single dispatch")), o++;
        continue;
      }
      a.push([]);
    }
    return a;
  }
  function i() {
    const c = r(e);
    n();
    for (const a of c) {
      if (!a.length) continue;
      const o = { items: a, cancel: gt };
      for (const d of a) d.batch = o;
      const h = (d, m) => {
          const f = o.items[d];
          f.resolve?.(m),
            (f.batch = null),
            (f.reject = null),
            (f.resolve = null);
        },
        { promise: l, cancel: y } = t.fetch(
          o.items.map((d) => d.key),
          h
        );
      (o.cancel = y),
        l
          .then((d) => {
            for (let m = 0; m < d.length; m++) {
              const f = d[m];
              h(m, f);
            }
            for (const m of o.items)
              m.reject?.(new Error("Missing result")), (m.batch = null);
          })
          .catch((d) => {
            for (const m of o.items) m.reject?.(d), (m.batch = null);
          });
    }
  }
  function u(c) {
    const a = { aborted: !1, key: c, batch: null, resolve: gt, reject: gt },
      o = new Promise((l, y) => {
        (a.reject = y), (a.resolve = l), e || (e = []), e.push(a);
      });
    return (
      s || (s = setTimeout(i)),
      {
        promise: o,
        cancel: () => {
          (a.aborted = !0),
            a.batch?.items.every((l) => l.aborted) &&
              (a.batch.cancel(), (a.batch = null));
        },
      }
    );
  }
  return { load: u };
}
function In(t) {
  return function (s) {
    const n = Tn(s),
      r = s.maxURLLength ?? 1 / 0;
    return (i) => {
      const u = (l) => {
          const y = (m) => {
              if (r === 1 / 0) return !0;
              const f = m.map((_) => _.path).join(","),
                p = m.map((_) => _.input);
              return (
                je({ ...n, runtime: i, type: l, path: f, inputs: p }).length <=
                r
              );
            },
            d = t({ ...n, runtime: i, type: l, opts: s });
          return { validate: y, fetch: d };
        },
        c = _t(u("query")),
        a = _t(u("mutation")),
        o = _t(u("subscription")),
        h = { query: c, subscription: o, mutation: a };
      return ({ op: l }) =>
        Ne((y) => {
          const d = h[l.type],
            { promise: m, cancel: f } = d.load(l);
          let p;
          return (
            m
              .then((g) => {
                p = g;
                const _ = En(g.json, i);
                if (!_.ok) {
                  y.error(D.from(_.error, { meta: g.meta }));
                  return;
                }
                y.next({ context: g.meta, result: _.result }), y.complete();
              })
              .catch((g) => {
                y.error(D.from(g, { meta: p?.meta }));
              }),
            () => {
              f();
            }
          );
        });
    };
  };
}
const Mn = (t) => (e) => {
    const s = e.map((u) => u.path).join(","),
      n = e.map((u) => u.input),
      { promise: r, cancel: i } = kn({
        ...t,
        path: s,
        inputs: n,
        headers() {
          return t.opts.headers
            ? typeof t.opts.headers == "function"
              ? t.opts.headers({ opList: e })
              : t.opts.headers
            : {};
        },
      });
    return {
      promise: r.then((u) =>
        (Array.isArray(u.json) ? u.json : e.map(() => u.json)).map((o) => ({
          meta: u.meta,
          json: o,
        }))
      ),
      cancel: i,
    };
  },
  $n = In(Mn);
class Fn {
  $request({ type: e, input: s, path: n, context: r = {} }) {
    return _n({
      links: this.links,
      op: { id: ++this.requestId, type: e, path: n, input: s, context: r },
    }).pipe(mn());
  }
  requestAsPromise(e) {
    const s = this.$request(e),
      { promise: n, abort: r } = gn(s);
    return new Promise((u, c) => {
      e.signal?.addEventListener("abort", r),
        n
          .then((a) => {
            u(a.result.data);
          })
          .catch((a) => {
            c(D.from(a));
          });
    });
  }
  query(e, s, n) {
    return this.requestAsPromise({
      type: "query",
      path: e,
      input: s,
      context: n?.context,
      signal: n?.signal,
    });
  }
  mutation(e, s, n) {
    return this.requestAsPromise({
      type: "mutation",
      path: e,
      input: s,
      context: n?.context,
      signal: n?.signal,
    });
  }
  subscription(e, s, n) {
    return this.$request({
      type: "subscription",
      path: e,
      input: s,
      context: n?.context,
    }).subscribe({
      next(i) {
        i.result.type === "started"
          ? n.onStarted?.()
          : i.result.type === "stopped"
          ? n.onStopped?.()
          : n.onData?.(i.result.data);
      },
      error(i) {
        n.onError?.(i);
      },
      complete() {
        n.onComplete?.();
      },
    });
  }
  constructor(e) {
    this.requestId = 0;
    const s = (() => {
      const n = e.transformer;
      return n
        ? "input" in n
          ? e.transformer
          : { input: n, output: n }
        : {
            input: { serialize: (r) => r, deserialize: (r) => r },
            output: { serialize: (r) => r, deserialize: (r) => r },
          };
    })();
    (this.runtime = {
      transformer: {
        serialize: (n) => s.input.serialize(n),
        deserialize: (n) => s.output.deserialize(n),
      },
      combinedTransformer: s,
    }),
      (this.links = e.links.map((n) => n(this.runtime)));
  }
}
function jn(t) {
  return new Fn(t);
}
function Xt(t) {
  return (
    typeof t == "object" && "subscribe" in t && typeof t.subscribe == "function"
  );
}
var Un = {
  query: [1, "query"],
  mutation: [0, "any"],
  infiniteQuery: [1, "infinite"],
};
function qn(t, e) {
  let s;
  return (
    (s = new Zs(e.queryClientConfig)),
    wn((n) => {
      switch (n) {
        case "queryClient":
          return s;
        case "hydrateFromServer":
          return (r) => {
            let i = s;
            for (const [u, c] of r) i.setQueryData(u, c);
            return i;
          };
      }
      return On(({ path: r, args: i }) => {
        r.unshift(n);
        const u = r.pop(),
          c = r.join("."),
          a = Un[u];
        if (!a) {
          if (r.pop() === "utils") return dn(t, s, r, u, i);
          throw new TypeError(`trpc.${c}.${u} is not a function`);
        }
        const o = i,
          [h, l] = a,
          y = o[h],
          d = y && Xt(y) ? y : M(y ?? {}),
          m = u === "mutation" ? void 0 : o[0] && Xt(o[0]) ? o[0] : M(o[0]);
        switch (u) {
          case "query": {
            const f = x([m, d], ([p, g]) => {
              const [_, v] = J(g),
                O = V(r, p, l);
              return {
                ..._,
                enabled: _.enabled !== !1 && Bt,
                queryKey: O,
                queryFn: () => t.query(c, p, v),
              };
            });
            return un(f);
          }
          case "mutation": {
            const f = x(d, (p) => {
              const [g, _] = J(p),
                v = V(r, void 0, l);
              return {
                ...g,
                mutationKey: v,
                mutationFn: (O) => t.mutation(c, O, _),
              };
            });
            return ln(f);
          }
          case "infiniteQuery": {
            const f = x([m, d], ([p, g]) => {
              const [_, v] = J(g),
                O = V(r, p, l);
              return {
                ..._,
                enabled: _.enabled !== !1 && Bt,
                queryKey: O,
                queryFn: (E) => {
                  const A = { ...p, cursor: E.pageParam };
                  return t.query(c, A, v);
                },
              };
            });
            return cn(f);
          }
          default:
            throw new TypeError(`trpc.${c}.${u} is not a function`);
        }
      });
    })
  );
}
function Ln(t) {
  const e = jn(t);
  return qn(e, t);
}
const Qn = {
  input: { serialize: (t) => Fs(t), deserialize: (t) => ws(t) },
  output: {
    serialize: (t) =>
      Ns(t, (e) => {
        if (e instanceof Uint8Array)
          return `new Uint8Array(${JSON.stringify(Array.from(e))})`;
      }),
    deserialize: (t) => (0, eval)(`(${t})`),
  },
};
function Ue(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Tr(t) {
  return Math.sin((-13 * (t + 1) * Math.PI) / 2) * Math.pow(2, -10 * t) + 1;
}
function Bn(t, { delay: e = 0, duration: s = 400, easing: n = ls } = {}) {
  const r = +getComputedStyle(t).opacity;
  return { delay: e, duration: s, easing: n, css: (i) => `opacity: ${i * r}` };
}
function Hn(
  t,
  {
    delay: e = 0,
    duration: s = 400,
    easing: n = Ue,
    x: r = 0,
    y: i = 0,
    opacity: u = 0,
  } = {}
) {
  const c = getComputedStyle(t),
    a = +c.opacity,
    o = c.transform === "none" ? "" : c.transform,
    h = a * (1 - u),
    [l, y] = Ft(r),
    [d, m] = Ft(i);
  return {
    delay: e,
    duration: s,
    easing: n,
    css: (f, p) => `
			transform: ${o} translate(${(1 - f) * l}${y}, ${(1 - f) * d}${m});
			opacity: ${a - h * p}`,
  };
}
function Dr(
  t,
  {
    delay: e = 0,
    duration: s = 400,
    easing: n = Ue,
    start: r = 0,
    opacity: i = 0,
  } = {}
) {
  const u = getComputedStyle(t),
    c = +u.opacity,
    a = u.transform === "none" ? "" : u.transform,
    o = 1 - r,
    h = c * (1 - i);
  return {
    delay: e,
    duration: s,
    easing: n,
    css: (l, y) => `
			transform: ${a} scale(${1 - o * y});
			opacity: ${c - h * y}
		`,
  };
}
function te(t, e, s) {
  const n = t.slice();
  return (n[2] = e[s]), (n[4] = s), n;
}
function ee(t, e) {
  let s,
    n,
    r = e[2].message + "",
    i,
    u,
    c,
    a = "×",
    o,
    h,
    l,
    y = `translate(-50%, -${(e[1] - e[4] - 1) * 120}%)`,
    d,
    m,
    f;
  return {
    key: t,
    first: null,
    c() {
      (s = ct("div")),
        (n = ct("span")),
        (i = ds(r)),
        (u = Ut()),
        (c = ct("button")),
        (c.textContent = a),
        (o = Ut()),
        this.h();
    },
    l(p) {
      s = lt(p, "DIV", { class: !0 });
      var g = qt(s);
      n = lt(g, "SPAN", { class: !0 });
      var _ = qt(n);
      (i = ps(_, r)),
        _.forEach(Y),
        (u = Lt(g)),
        (c = lt(g, "BUTTON", { class: !0, "data-svelte-h": !0 })),
        ys(c) !== "svelte-1it2bgt" && (c.textContent = a),
        (o = Lt(g)),
        g.forEach(Y),
        this.h();
    },
    h() {
      ht(n, "class", "mr-4"),
        ht(
          c,
          "class",
          "ml-auto rounded-full px-2 transition-colors hover:bg-white/10 active:bg-white/20"
        ),
        ht(
          s,
          "class",
          "fixed bottom-4 left-1/2 z-50 flex items-center rounded-full bg-red-600 py-2 pl-8 pr-4 text-xl font-bold text-white transition-transform duration-300 ease-out"
        ),
        Qt(s, "transform", y),
        (this.first = s);
    },
    m(p, g) {
      pe(p, s, g),
        Q(s, n),
        Q(n, i),
        Q(s, u),
        Q(s, c),
        Q(s, o),
        (d = !0),
        m ||
          ((f = ms(c, "click", function () {
            gs(e[2].remove) && e[2].remove.apply(this, arguments);
          })),
          (m = !0));
    },
    p(p, g) {
      (e = p),
        (!d || g & 1) && r !== (r = e[2].message + "") && _s(i, r),
        g & 3 &&
          y !== (y = `translate(-50%, -${(e[1] - e[4] - 1) * 120}%)`) &&
          Qt(s, "transform", y);
    },
    i(p) {
      d ||
        (p &&
          bs(() => {
            d &&
              (l && l.end(1),
              (h = is(s, Hn, { y: "100%", duration: 300 })),
              h.start());
          }),
        (d = !0));
    },
    o(p) {
      h && h.invalidate(), p && (l = os(s, Bn, { duration: 100 })), (d = !1);
    },
    d(p) {
      p && Y(s), p && l && l.end(), (m = !1), f();
    },
  };
}
function Gn(t) {
  let e = [],
    s = new Map(),
    n,
    r,
    i = Ht(t[0]);
  const u = (c) => c[2].id;
  for (let c = 0; c < i.length; c += 1) {
    let a = te(t, i, c),
      o = u(a);
    s.set(o, (e[c] = ee(o, a)));
  }
  return {
    c() {
      for (let c = 0; c < e.length; c += 1) e[c].c();
      n = jt();
    },
    l(c) {
      for (let a = 0; a < e.length; a += 1) e[a].l(c);
      n = jt();
    },
    m(c, a) {
      for (let o = 0; o < e.length; o += 1) e[o] && e[o].m(c, a);
      pe(c, n, a), (r = !0);
    },
    p(c, [a]) {
      a & 3 &&
        ((i = Ht(c[0])),
        ns(),
        (e = Ps(e, a, u, 1, c, i, s, n.parentNode, Rs, ee, n, te)),
        rs());
    },
    i(c) {
      if (!r) {
        for (let a = 0; a < i.length; a += 1) he(e[a]);
        r = !0;
      }
    },
    o(c) {
      for (let a = 0; a < e.length; a += 1) le(e[a]);
      r = !1;
    },
    d(c) {
      c && Y(n);
      for (let a = 0; a < e.length; a += 1) e[a].d(c);
    },
  };
}
let bt = !1;
const Et = [];
function qe(t) {
  if (bt) {
    Et.push(t);
    return;
  }
  (bt = !0),
    setTimeout(() => {
      (bt = !1), Et.length && qe(Et.shift());
    }, 350),
    W.update((i) => (i.length < 5 ? i : i.slice(1)));
  const e = crypto.randomUUID(),
    s = () => {
      clearTimeout(r), W.update((i) => i.filter((u) => u.id !== e));
    },
    n = { id: e, message: t, remove: s };
  W.update((i) => (i.push(n), i));
  const r = setTimeout(s, 5e3);
}
const W = as([]);
function Kn(t, e, s) {
  let n, r;
  return (
    fs(t, W, (i) => s(0, (r = i))),
    (t.$$.update = () => {
      t.$$.dirty & 1 && s(1, (n = r.length));
    }),
    [r, n]
  );
}
class Cr extends es {
  constructor(e) {
    super(), ss(this, e, Kn, Gn, hs, {});
  }
}
const Le = Object.prototype.toString;
function Yn(t) {
  switch (Le.call(t)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return !0;
    default:
      return it(t, Error);
  }
}
function L(t, e) {
  return Le.call(t) === `[object ${e}]`;
}
function Ar(t) {
  return L(t, "ErrorEvent");
}
function kr(t) {
  return L(t, "DOMError");
}
function Nr(t) {
  return L(t, "DOMException");
}
function Dt(t) {
  return L(t, "String");
}
function xr(t) {
  return t === null || (typeof t != "object" && typeof t != "function");
}
function $t(t) {
  return L(t, "Object");
}
function zn(t) {
  return typeof Event < "u" && it(t, Event);
}
function Vn(t) {
  return typeof Element < "u" && it(t, Element);
}
function Jn(t) {
  return L(t, "RegExp");
}
function Qe(t) {
  return !!(t && t.then && typeof t.then == "function");
}
function Ir(t) {
  return (
    $t(t) &&
    "nativeEvent" in t &&
    "preventDefault" in t &&
    "stopPropagation" in t
  );
}
function Mr(t) {
  return typeof t == "number" && t !== t;
}
function it(t, e) {
  try {
    return t instanceof e;
  } catch {
    return !1;
  }
}
function Wn(t) {
  return !!(typeof t == "object" && t !== null && (t.__isVue || t._isVue));
}
function se(t, e = 0) {
  return typeof t != "string" || e === 0 || t.length <= e
    ? t
    : `${t.slice(0, e)}...`;
}
function $r(t, e) {
  if (!Array.isArray(t)) return "";
  const s = [];
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    try {
      Wn(r) ? s.push("[VueViewModel]") : s.push(String(r));
    } catch {
      s.push("[value cannot be serialized]");
    }
  }
  return s.join(e);
}
function Zn(t, e, s = !1) {
  return Dt(t)
    ? Jn(e)
      ? e.test(t)
      : Dt(e)
      ? s
        ? t === e
        : t.includes(e)
      : !1
    : !1;
}
function Fr(t, e = [], s = !1) {
  return e.some((n) => Zn(t, n, s));
}
function K(t) {
  return t && t.Math == Math ? t : void 0;
}
const C =
  (typeof globalThis == "object" && K(globalThis)) ||
  (typeof window == "object" && K(window)) ||
  (typeof self == "object" && K(self)) ||
  (typeof global == "object" && K(global)) ||
  (function () {
    return this;
  })() ||
  {};
function Be() {
  return C;
}
function He(t, e, s) {
  const n = s || C,
    r = (n.__SENTRY__ = n.__SENTRY__ || {});
  return r[t] || (r[t] = e());
}
const Z = Be(),
  Xn = 80;
function tr(t, e = {}) {
  if (!t) return "<unknown>";
  try {
    let s = t;
    const n = 5,
      r = [];
    let i = 0,
      u = 0;
    const c = " > ",
      a = c.length;
    let o;
    const h = Array.isArray(e) ? e : e.keyAttrs,
      l = (!Array.isArray(e) && e.maxStringLength) || Xn;
    for (
      ;
      s &&
      i++ < n &&
      ((o = er(s, h)),
      !(o === "html" || (i > 1 && u + r.length * a + o.length >= l)));

    )
      r.push(o), (u += o.length), (s = s.parentNode);
    return r.reverse().join(c);
  } catch {
    return "<unknown>";
  }
}
function er(t, e) {
  const s = t,
    n = [];
  let r, i, u, c, a;
  if (!s || !s.tagName) return "";
  n.push(s.tagName.toLowerCase());
  const o =
    e && e.length
      ? e.filter((l) => s.getAttribute(l)).map((l) => [l, s.getAttribute(l)])
      : null;
  if (o && o.length)
    o.forEach((l) => {
      n.push(`[${l[0]}="${l[1]}"]`);
    });
  else if ((s.id && n.push(`#${s.id}`), (r = s.className), r && Dt(r)))
    for (i = r.split(/\s+/), a = 0; a < i.length; a++) n.push(`.${i[a]}`);
  const h = ["aria-label", "type", "name", "title", "alt"];
  for (a = 0; a < h.length; a++)
    (u = h[a]), (c = s.getAttribute(u)), c && n.push(`[${u}="${c}"]`);
  return n.join("");
}
function jr() {
  try {
    return Z.document.location.href;
  } catch {
    return "";
  }
}
function Ur(t) {
  return Z.document && Z.document.querySelector
    ? Z.document.querySelector(t)
    : null;
}
const sr = "Sentry Logger ",
  ne = ["debug", "info", "warn", "error", "log", "assert", "trace"],
  re = {};
function Ge(t) {
  if (!("console" in C)) return t();
  const e = C.console,
    s = {},
    n = Object.keys(re);
  n.forEach((r) => {
    const i = re[r];
    (s[r] = e[r]), (e[r] = i);
  });
  try {
    return t();
  } finally {
    n.forEach((r) => {
      e[r] = s[r];
    });
  }
}
function nr() {
  let t = !1;
  const e = {
    enable: () => {
      t = !0;
    },
    disable: () => {
      t = !1;
    },
    isEnabled: () => t,
  };
  return (
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
      ? ne.forEach((s) => {
          e[s] = (...n) => {
            t &&
              Ge(() => {
                C.console[s](`${sr}[${s}]:`, ...n);
              });
          };
        })
      : ne.forEach((s) => {
          e[s] = () => {};
        }),
    e
  );
}
const nt = nr();
function qr(t, e, s) {
  if (!(e in t)) return;
  const n = t[e],
    r = s(n);
  typeof r == "function" && rr(r, n), (t[e] = r);
}
function Ke(t, e, s) {
  try {
    Object.defineProperty(t, e, { value: s, writable: !0, configurable: !0 });
  } catch {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      nt.log(`Failed to add non-enumerable property "${e}" to object`, t);
  }
}
function rr(t, e) {
  try {
    const s = e.prototype || {};
    (t.prototype = e.prototype = s), Ke(t, "__sentry_original__", e);
  } catch {}
}
function Lr(t) {
  return t.__sentry_original__;
}
function Qr(t) {
  return Object.keys(t)
    .map((e) => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)
    .join("&");
}
function ir(t) {
  if (Yn(t))
    return { message: t.message, name: t.name, stack: t.stack, ...oe(t) };
  if (zn(t)) {
    const e = {
      type: t.type,
      target: ie(t.target),
      currentTarget: ie(t.currentTarget),
      ...oe(t),
    };
    return (
      typeof CustomEvent < "u" && it(t, CustomEvent) && (e.detail = t.detail), e
    );
  } else return t;
}
function ie(t) {
  try {
    return Vn(t) ? tr(t) : Object.prototype.toString.call(t);
  } catch {
    return "<unknown>";
  }
}
function oe(t) {
  if (typeof t == "object" && t !== null) {
    const e = {};
    for (const s in t)
      Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    return e;
  } else return {};
}
function Br(t, e = 40) {
  const s = Object.keys(ir(t));
  if ((s.sort(), !s.length)) return "[object has no keys]";
  if (s[0].length >= e) return se(s[0], e);
  for (let n = s.length; n > 0; n--) {
    const r = s.slice(0, n).join(", ");
    if (!(r.length > e)) return n === s.length ? r : se(r, e);
  }
  return "";
}
function or(t) {
  return Ct(t, new Map());
}
function Ct(t, e) {
  if ($t(t)) {
    const s = e.get(t);
    if (s !== void 0) return s;
    const n = {};
    e.set(t, n);
    for (const r of Object.keys(t)) typeof t[r] < "u" && (n[r] = Ct(t[r], e));
    return n;
  }
  if (Array.isArray(t)) {
    const s = e.get(t);
    if (s !== void 0) return s;
    const n = [];
    return (
      e.set(t, n),
      t.forEach((r) => {
        n.push(Ct(r, e));
      }),
      n
    );
  }
  return t;
}
function I() {
  const t = C,
    e = t.crypto || t.msCrypto;
  let s = () => Math.random() * 16;
  try {
    if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
    e &&
      e.getRandomValues &&
      (s = () => e.getRandomValues(new Uint8Array(1))[0]);
  } catch {}
  return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (n) =>
    (n ^ ((s() & 15) >> (n / 4))).toString(16)
  );
}
function Ye(t) {
  return t.exception && t.exception.values ? t.exception.values[0] : void 0;
}
function Hr(t) {
  const { message: e, event_id: s } = t;
  if (e) return e;
  const n = Ye(t);
  return n
    ? n.type && n.value
      ? `${n.type}: ${n.value}`
      : n.type || n.value || s || "<unknown>"
    : s || "<unknown>";
}
function Gr(t, e, s) {
  const n = (t.exception = t.exception || {}),
    r = (n.values = n.values || []),
    i = (r[0] = r[0] || {});
  i.value || (i.value = e || ""), i.type || (i.type = s || "Error");
}
function Kr(t, e) {
  const s = Ye(t);
  if (!s) return;
  const n = { type: "generic", handled: !0 },
    r = s.mechanism;
  if (((s.mechanism = { ...n, ...r, ...e }), e && "data" in e)) {
    const i = { ...(r && r.data), ...e.data };
    s.mechanism.data = i;
  }
}
function Yr(t) {
  if (t && t.__sentry_captured__) return !0;
  try {
    Ke(t, "__sentry_captured__", !0);
  } catch {}
  return !1;
}
function ar(t) {
  return Array.isArray(t) ? t : [t];
}
function ur() {
  return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__;
}
function zr() {
  return "npm";
}
function cr() {
  return (
    !ur() &&
    Object.prototype.toString.call(typeof process < "u" ? process : 0) ===
      "[object process]"
  );
}
function lr(t, e) {
  return t.require(e);
}
var k;
(function (t) {
  t[(t.PENDING = 0)] = "PENDING";
  const s = 1;
  t[(t.RESOLVED = s)] = "RESOLVED";
  const n = 2;
  t[(t.REJECTED = n)] = "REJECTED";
})(k || (k = {}));
function Vr(t) {
  return new T((e) => {
    e(t);
  });
}
function Jr(t) {
  return new T((e, s) => {
    s(t);
  });
}
class T {
  constructor(e) {
    T.prototype.__init.call(this),
      T.prototype.__init2.call(this),
      T.prototype.__init3.call(this),
      T.prototype.__init4.call(this),
      (this._state = k.PENDING),
      (this._handlers = []);
    try {
      e(this._resolve, this._reject);
    } catch (s) {
      this._reject(s);
    }
  }
  then(e, s) {
    return new T((n, r) => {
      this._handlers.push([
        !1,
        (i) => {
          if (!e) n(i);
          else
            try {
              n(e(i));
            } catch (u) {
              r(u);
            }
        },
        (i) => {
          if (!s) r(i);
          else
            try {
              n(s(i));
            } catch (u) {
              r(u);
            }
        },
      ]),
        this._executeHandlers();
    });
  }
  catch(e) {
    return this.then((s) => s, e);
  }
  finally(e) {
    return new T((s, n) => {
      let r, i;
      return this.then(
        (u) => {
          (i = !1), (r = u), e && e();
        },
        (u) => {
          (i = !0), (r = u), e && e();
        }
      ).then(() => {
        if (i) {
          n(r);
          return;
        }
        s(r);
      });
    });
  }
  __init() {
    this._resolve = (e) => {
      this._setResult(k.RESOLVED, e);
    };
  }
  __init2() {
    this._reject = (e) => {
      this._setResult(k.REJECTED, e);
    };
  }
  __init3() {
    this._setResult = (e, s) => {
      if (this._state === k.PENDING) {
        if (Qe(s)) {
          s.then(this._resolve, this._reject);
          return;
        }
        (this._state = e), (this._value = s), this._executeHandlers();
      }
    };
  }
  __init4() {
    this._executeHandlers = () => {
      if (this._state === k.PENDING) return;
      const e = this._handlers.slice();
      (this._handlers = []),
        e.forEach((s) => {
          s[0] ||
            (this._state === k.RESOLVED && s[1](this._value),
            this._state === k.REJECTED && s[2](this._value),
            (s[0] = !0));
        });
    };
  }
}
const ze = Be(),
  At = { nowSeconds: () => Date.now() / 1e3 };
function hr() {
  const { performance: t } = ze;
  if (!t || !t.now) return;
  const e = Date.now() - t.now();
  return { now: () => t.now(), timeOrigin: e };
}
function fr() {
  try {
    return lr(module, "perf_hooks").performance;
  } catch {
    return;
  }
}
const St = cr() ? fr() : hr(),
  ae =
    St === void 0 ? At : { nowSeconds: () => (St.timeOrigin + St.now()) / 1e3 },
  Ve = At.nowSeconds.bind(At),
  Je = ae.nowSeconds.bind(ae),
  Wr = (() => {
    const { performance: t } = ze;
    if (!t || !t.now) return;
    const e = 3600 * 1e3,
      s = t.now(),
      n = Date.now(),
      r = t.timeOrigin ? Math.abs(t.timeOrigin + s - n) : e,
      i = r < e,
      u = t.timing && t.timing.navigationStart,
      a = typeof u == "number" ? Math.abs(u + s - n) : e,
      o = a < e;
    return i || o ? (r <= a ? t.timeOrigin : u) : n;
  })(),
  dr = "production";
function We() {
  return He("globalEventProcessors", () => []);
}
function Zr(t) {
  We().push(t);
}
function kt(t, e, s, n = 0) {
  return new T((r, i) => {
    const u = t[n];
    if (e === null || typeof u != "function") r(e);
    else {
      const c = u({ ...e }, s);
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        u.id &&
        c === null &&
        nt.log(`Event processor "${u.id}" dropped event`),
        Qe(c)
          ? c.then((a) => kt(t, a, s, n + 1).then(r)).then(null, i)
          : kt(t, c, s, n + 1)
              .then(r)
              .then(null, i);
    }
  });
}
function pr(t) {
  const e = Je(),
    s = {
      sid: I(),
      init: !0,
      timestamp: e,
      started: e,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => mr(s),
    };
  return t && ot(s, t), s;
}
function ot(t, e = {}) {
  if (
    (e.user &&
      (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address),
      !t.did &&
        !e.did &&
        (t.did = e.user.id || e.user.email || e.user.username)),
    (t.timestamp = e.timestamp || Je()),
    e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
    e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
    e.sid && (t.sid = e.sid.length === 32 ? e.sid : I()),
    e.init !== void 0 && (t.init = e.init),
    !t.did && e.did && (t.did = `${e.did}`),
    typeof e.started == "number" && (t.started = e.started),
    t.ignoreDuration)
  )
    t.duration = void 0;
  else if (typeof e.duration == "number") t.duration = e.duration;
  else {
    const s = t.timestamp - t.started;
    t.duration = s >= 0 ? s : 0;
  }
  e.release && (t.release = e.release),
    e.environment && (t.environment = e.environment),
    !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
    !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
    typeof e.errors == "number" && (t.errors = e.errors),
    e.status && (t.status = e.status);
}
function yr(t, e) {
  let s = {};
  e ? (s = { status: e }) : t.status === "ok" && (s = { status: "exited" }),
    ot(t, s);
}
function mr(t) {
  return or({
    sid: `${t.sid}`,
    init: t.init,
    started: new Date(t.started * 1e3).toISOString(),
    timestamp: new Date(t.timestamp * 1e3).toISOString(),
    status: t.status,
    errors: t.errors,
    did:
      typeof t.did == "number" || typeof t.did == "string"
        ? `${t.did}`
        : void 0,
    duration: t.duration,
    abnormal_mechanism: t.abnormal_mechanism,
    attrs: {
      release: t.release,
      environment: t.environment,
      ip_address: t.ipAddress,
      user_agent: t.userAgent,
    },
  });
}
const gr = 100;
class j {
  constructor() {
    (this._notifyingListeners = !1),
      (this._scopeListeners = []),
      (this._eventProcessors = []),
      (this._breadcrumbs = []),
      (this._attachments = []),
      (this._user = {}),
      (this._tags = {}),
      (this._extra = {}),
      (this._contexts = {}),
      (this._sdkProcessingMetadata = {}),
      (this._propagationContext = ue());
  }
  static clone(e) {
    const s = new j();
    return (
      e &&
        ((s._breadcrumbs = [...e._breadcrumbs]),
        (s._tags = { ...e._tags }),
        (s._extra = { ...e._extra }),
        (s._contexts = { ...e._contexts }),
        (s._user = e._user),
        (s._level = e._level),
        (s._span = e._span),
        (s._session = e._session),
        (s._transactionName = e._transactionName),
        (s._fingerprint = e._fingerprint),
        (s._eventProcessors = [...e._eventProcessors]),
        (s._requestSession = e._requestSession),
        (s._attachments = [...e._attachments]),
        (s._sdkProcessingMetadata = { ...e._sdkProcessingMetadata }),
        (s._propagationContext = { ...e._propagationContext })),
      s
    );
  }
  addScopeListener(e) {
    this._scopeListeners.push(e);
  }
  addEventProcessor(e) {
    return this._eventProcessors.push(e), this;
  }
  setUser(e) {
    return (
      (this._user = e || {}),
      this._session && ot(this._session, { user: e }),
      this._notifyScopeListeners(),
      this
    );
  }
  getUser() {
    return this._user;
  }
  getRequestSession() {
    return this._requestSession;
  }
  setRequestSession(e) {
    return (this._requestSession = e), this;
  }
  setTags(e) {
    return (
      (this._tags = { ...this._tags, ...e }), this._notifyScopeListeners(), this
    );
  }
  setTag(e, s) {
    return (
      (this._tags = { ...this._tags, [e]: s }),
      this._notifyScopeListeners(),
      this
    );
  }
  setExtras(e) {
    return (
      (this._extra = { ...this._extra, ...e }),
      this._notifyScopeListeners(),
      this
    );
  }
  setExtra(e, s) {
    return (
      (this._extra = { ...this._extra, [e]: s }),
      this._notifyScopeListeners(),
      this
    );
  }
  setFingerprint(e) {
    return (this._fingerprint = e), this._notifyScopeListeners(), this;
  }
  setLevel(e) {
    return (this._level = e), this._notifyScopeListeners(), this;
  }
  setTransactionName(e) {
    return (this._transactionName = e), this._notifyScopeListeners(), this;
  }
  setContext(e, s) {
    return (
      s === null ? delete this._contexts[e] : (this._contexts[e] = s),
      this._notifyScopeListeners(),
      this
    );
  }
  setSpan(e) {
    return (this._span = e), this._notifyScopeListeners(), this;
  }
  getSpan() {
    return this._span;
  }
  getTransaction() {
    const e = this.getSpan();
    return e && e.transaction;
  }
  setSession(e) {
    return (
      e ? (this._session = e) : delete this._session,
      this._notifyScopeListeners(),
      this
    );
  }
  getSession() {
    return this._session;
  }
  update(e) {
    if (!e) return this;
    if (typeof e == "function") {
      const s = e(this);
      return s instanceof j ? s : this;
    }
    return (
      e instanceof j
        ? ((this._tags = { ...this._tags, ...e._tags }),
          (this._extra = { ...this._extra, ...e._extra }),
          (this._contexts = { ...this._contexts, ...e._contexts }),
          e._user && Object.keys(e._user).length && (this._user = e._user),
          e._level && (this._level = e._level),
          e._fingerprint && (this._fingerprint = e._fingerprint),
          e._requestSession && (this._requestSession = e._requestSession),
          e._propagationContext &&
            (this._propagationContext = e._propagationContext))
        : $t(e) &&
          ((e = e),
          (this._tags = { ...this._tags, ...e.tags }),
          (this._extra = { ...this._extra, ...e.extra }),
          (this._contexts = { ...this._contexts, ...e.contexts }),
          e.user && (this._user = e.user),
          e.level && (this._level = e.level),
          e.fingerprint && (this._fingerprint = e.fingerprint),
          e.requestSession && (this._requestSession = e.requestSession),
          e.propagationContext &&
            (this._propagationContext = e.propagationContext)),
      this
    );
  }
  clear() {
    return (
      (this._breadcrumbs = []),
      (this._tags = {}),
      (this._extra = {}),
      (this._user = {}),
      (this._contexts = {}),
      (this._level = void 0),
      (this._transactionName = void 0),
      (this._fingerprint = void 0),
      (this._requestSession = void 0),
      (this._span = void 0),
      (this._session = void 0),
      this._notifyScopeListeners(),
      (this._attachments = []),
      (this._propagationContext = ue()),
      this
    );
  }
  addBreadcrumb(e, s) {
    const n = typeof s == "number" ? s : gr;
    if (n <= 0) return this;
    const r = { timestamp: Ve(), ...e },
      i = this._breadcrumbs;
    return (
      i.push(r),
      (this._breadcrumbs = i.length > n ? i.slice(-n) : i),
      this._notifyScopeListeners(),
      this
    );
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
  }
  addAttachment(e) {
    return this._attachments.push(e), this;
  }
  getAttachments() {
    return this._attachments;
  }
  clearAttachments() {
    return (this._attachments = []), this;
  }
  applyToEvent(e, s = {}, n) {
    if (
      (this._extra &&
        Object.keys(this._extra).length &&
        (e.extra = { ...this._extra, ...e.extra }),
      this._tags &&
        Object.keys(this._tags).length &&
        (e.tags = { ...this._tags, ...e.tags }),
      this._user &&
        Object.keys(this._user).length &&
        (e.user = { ...this._user, ...e.user }),
      this._contexts &&
        Object.keys(this._contexts).length &&
        (e.contexts = { ...this._contexts, ...e.contexts }),
      this._level && (e.level = this._level),
      this._transactionName && (e.transaction = this._transactionName),
      this._span)
    ) {
      e.contexts = { trace: this._span.getTraceContext(), ...e.contexts };
      const u = this._span.transaction;
      if (u) {
        e.sdkProcessingMetadata = {
          dynamicSamplingContext: u.getDynamicSamplingContext(),
          ...e.sdkProcessingMetadata,
        };
        const c = u.name;
        c && (e.tags = { transaction: c, ...e.tags });
      }
    }
    this._applyFingerprint(e);
    const r = this._getBreadcrumbs(),
      i = [...(e.breadcrumbs || []), ...r];
    return (
      (e.breadcrumbs = i.length > 0 ? i : void 0),
      (e.sdkProcessingMetadata = {
        ...e.sdkProcessingMetadata,
        ...this._sdkProcessingMetadata,
        propagationContext: this._propagationContext,
      }),
      kt([...(n || []), ...We(), ...this._eventProcessors], e, s)
    );
  }
  setSDKProcessingMetadata(e) {
    return (
      (this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...e }),
      this
    );
  }
  setPropagationContext(e) {
    return (this._propagationContext = e), this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  _getBreadcrumbs() {
    return this._breadcrumbs;
  }
  _notifyScopeListeners() {
    this._notifyingListeners ||
      ((this._notifyingListeners = !0),
      this._scopeListeners.forEach((e) => {
        e(this);
      }),
      (this._notifyingListeners = !1));
  }
  _applyFingerprint(e) {
    (e.fingerprint = e.fingerprint ? ar(e.fingerprint) : []),
      this._fingerprint &&
        (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
      e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
  }
}
function ue() {
  return { traceId: I(), spanId: I().substring(16) };
}
const Ze = 4,
  _r = 100;
class Xe {
  constructor(e, s = new j(), n = Ze) {
    (this._version = n),
      (this._stack = [{ scope: s }]),
      e && this.bindClient(e);
  }
  isOlderThan(e) {
    return this._version < e;
  }
  bindClient(e) {
    const s = this.getStackTop();
    (s.client = e), e && e.setupIntegrations && e.setupIntegrations();
  }
  pushScope() {
    const e = j.clone(this.getScope());
    return this.getStack().push({ client: this.getClient(), scope: e }), e;
  }
  popScope() {
    return this.getStack().length <= 1 ? !1 : !!this.getStack().pop();
  }
  withScope(e) {
    const s = this.pushScope();
    try {
      e(s);
    } finally {
      this.popScope();
    }
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getStack() {
    return this._stack;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  captureException(e, s) {
    const n = (this._lastEventId = s && s.event_id ? s.event_id : I()),
      r = new Error("Sentry syntheticException");
    return (
      this._withClient((i, u) => {
        i.captureException(
          e,
          { originalException: e, syntheticException: r, ...s, event_id: n },
          u
        );
      }),
      n
    );
  }
  captureMessage(e, s, n) {
    const r = (this._lastEventId = n && n.event_id ? n.event_id : I()),
      i = new Error(e);
    return (
      this._withClient((u, c) => {
        u.captureMessage(
          e,
          s,
          { originalException: e, syntheticException: i, ...n, event_id: r },
          c
        );
      }),
      r
    );
  }
  captureEvent(e, s) {
    const n = s && s.event_id ? s.event_id : I();
    return (
      e.type || (this._lastEventId = n),
      this._withClient((r, i) => {
        r.captureEvent(e, { ...s, event_id: n }, i);
      }),
      n
    );
  }
  lastEventId() {
    return this._lastEventId;
  }
  addBreadcrumb(e, s) {
    const { scope: n, client: r } = this.getStackTop();
    if (!r) return;
    const { beforeBreadcrumb: i = null, maxBreadcrumbs: u = _r } =
      (r.getOptions && r.getOptions()) || {};
    if (u <= 0) return;
    const a = { timestamp: Ve(), ...e },
      o = i ? Ge(() => i(a, s)) : a;
    o !== null &&
      (r.emit && r.emit("beforeAddBreadcrumb", o, s), n.addBreadcrumb(o, u));
  }
  setUser(e) {
    this.getScope().setUser(e);
  }
  setTags(e) {
    this.getScope().setTags(e);
  }
  setExtras(e) {
    this.getScope().setExtras(e);
  }
  setTag(e, s) {
    this.getScope().setTag(e, s);
  }
  setExtra(e, s) {
    this.getScope().setExtra(e, s);
  }
  setContext(e, s) {
    this.getScope().setContext(e, s);
  }
  configureScope(e) {
    const { scope: s, client: n } = this.getStackTop();
    n && e(s);
  }
  run(e) {
    const s = ce(this);
    try {
      e(this);
    } finally {
      ce(s);
    }
  }
  getIntegration(e) {
    const s = this.getClient();
    if (!s) return null;
    try {
      return s.getIntegration(e);
    } catch {
      return (
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          nt.warn(`Cannot retrieve integration ${e.id} from the current Hub`),
        null
      );
    }
  }
  startTransaction(e, s) {
    const n = this._callExtensionMethod("startTransaction", e, s);
    if ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && !n) {
      const r = this.getClient();
      console.warn(
        r
          ? `Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`
          : "Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'"
      );
    }
    return n;
  }
  traceHeaders() {
    return this._callExtensionMethod("traceHeaders");
  }
  captureSession(e = !1) {
    if (e) return this.endSession();
    this._sendSessionUpdate();
  }
  endSession() {
    const s = this.getStackTop().scope,
      n = s.getSession();
    n && yr(n), this._sendSessionUpdate(), s.setSession();
  }
  startSession(e) {
    const { scope: s, client: n } = this.getStackTop(),
      { release: r, environment: i = dr } = (n && n.getOptions()) || {},
      { userAgent: u } = C.navigator || {},
      c = pr({
        release: r,
        environment: i,
        user: s.getUser(),
        ...(u && { userAgent: u }),
        ...e,
      }),
      a = s.getSession && s.getSession();
    return (
      a && a.status === "ok" && ot(a, { status: "exited" }),
      this.endSession(),
      s.setSession(c),
      c
    );
  }
  shouldSendDefaultPii() {
    const e = this.getClient(),
      s = e && e.getOptions();
    return !!(s && s.sendDefaultPii);
  }
  _sendSessionUpdate() {
    const { scope: e, client: s } = this.getStackTop(),
      n = e.getSession();
    n && s && s.captureSession && s.captureSession(n);
  }
  _withClient(e) {
    const { scope: s, client: n } = this.getStackTop();
    n && e(n, s);
  }
  _callExtensionMethod(e, ...s) {
    const r = at().__SENTRY__;
    if (r && r.extensions && typeof r.extensions[e] == "function")
      return r.extensions[e].apply(this, s);
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      nt.warn(`Extension method ${e} couldn't be found, doing nothing.`);
  }
}
function at() {
  return (C.__SENTRY__ = C.__SENTRY__ || { extensions: {}, hub: void 0 }), C;
}
function ce(t) {
  const e = at(),
    s = Nt(e);
  return ts(e, t), s;
}
function ut() {
  const t = at();
  if (t.__SENTRY__ && t.__SENTRY__.acs) {
    const e = t.__SENTRY__.acs.getCurrentHub();
    if (e) return e;
  }
  return br(t);
}
function br(t = at()) {
  return (!Er(t) || Nt(t).isOlderThan(Ze)) && ts(t, new Xe()), Nt(t);
}
function Er(t) {
  return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
}
function Nt(t) {
  return He("hub", () => new Xe(), t);
}
function ts(t, e) {
  if (!t) return !1;
  const s = (t.__SENTRY__ = t.__SENTRY__ || {});
  return (s.hub = e), !0;
}
function Sr(t, e) {
  return ut().captureException(t, { captureContext: e });
}
function Xr(t, e) {
  ut().setContext(t, e);
}
function ti(t) {
  ut().setUser(t);
}
function ei(t) {
  ut().withScope(t);
}
const si = Ln({
  links: [
    $n({
      url: "/api/trpc",
      fetch: (t, e) => fetch(t, { ...e, keepalive: !0 }),
    }),
  ],
  transformer: Qn,
  queryClientConfig: {
    defaultOptions: {
      mutations: {
        onError(t) {
          qe(t.message), Sr(t);
        },
      },
      queries: { retry: !1 },
    },
  },
});
export {
  Sr as $,
  ut as A,
  Bt as B,
  ne as C,
  Je as D,
  dr as E,
  at as F,
  C as G,
  Qr as H,
  ar as I,
  Zr as J,
  j as K,
  kt as L,
  We as M,
  Yr as N,
  xr as O,
  ot as P,
  Zs as Q,
  Qe as R,
  T as S,
  $t as T,
  Lr as U,
  Hr as V,
  Fr as W,
  rr as X,
  ei as Y,
  Gr as Z,
  Kr as _,
  qe as a,
  Ar as a0,
  kr as a1,
  Nr as a2,
  Yn as a3,
  zn as a4,
  Br as a5,
  zr as a6,
  jr as a7,
  $r as a8,
  tr as a9,
  Wr as aa,
  Ur as ab,
  Xr as ac,
  ti as ad,
  Cr as ae,
  Tr as b,
  un as c,
  Pr as d,
  Ht as e,
  Hn as f,
  se as g,
  Be as h,
  it as i,
  qr as j,
  Dt as k,
  nt as l,
  Ke as m,
  cr as n,
  re as o,
  Mr as p,
  ir as q,
  Wn as r,
  Dr as s,
  si as t,
  I as u,
  Ir as v,
  Jr as w,
  Vr as x,
  or as y,
  Ve as z,
};
//# sourceMappingURL=index.ee14482c.js.map
