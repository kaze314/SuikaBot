import { G as ge, O as me } from "../chunks/scheduler.023ced08.js";
import {
  S as Ve,
  a as Fe,
  I as N,
  g as je,
  f as De,
  b as we,
  d as le,
  e as ee,
  i as ye,
  s as V,
  o as Ce,
  P as Te,
  h as We,
} from "../chunks/singletons.5faec7ad.js";
import { b as K } from "../chunks/paths.1fc180d1.js";
import { u as Ye } from "../chunks/parse.1d943ae3.js";
import { R as Ne, H as te } from "../chunks/control.aec33eca.js";
(function () {
  try {
    var n =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      o = new Error().stack;
    o &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[o] = "c36c8aee-7106-4810-b7c6-849b039850c7"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-c36c8aee-7106-4810-b7c6-849b039850c7"));
  } catch {}
})();
function Xe(n, o) {
  return n === "/" || o === "ignore"
    ? n
    : o === "never"
    ? n.endsWith("/")
      ? n.slice(0, -1)
      : n
    : o === "always" && !n.endsWith("/")
    ? n + "/"
    : n;
}
function Qe(n) {
  return n.split("%25").map(decodeURI).join("%25");
}
function Ze(n) {
  for (const o in n) n[o] = decodeURIComponent(n[o]);
  return n;
}
const et = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function tt(n, o) {
  const l = new URL(n);
  for (const c of et)
    Object.defineProperty(l, c, {
      get() {
        return o(), n[c];
      },
      enumerable: !0,
      configurable: !0,
    });
  return nt(l), l;
}
function nt(n) {
  Object.defineProperty(n, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    },
  });
}
const at = "/__data.json";
function rt(n) {
  return n.replace(/\/$/, "") + at;
}
function ot(...n) {
  let o = 5381;
  for (const l of n)
    if (typeof l == "string") {
      let c = l.length;
      for (; c; ) o = (o * 33) ^ l.charCodeAt(--c);
    } else if (ArrayBuffer.isView(l)) {
      const c = new Uint8Array(l.buffer, l.byteOffset, l.byteLength);
      let h = c.length;
      for (; h; ) o = (o * 33) ^ c[--h];
    } else throw new TypeError("value must be a string or TypedArray");
  return (o >>> 0).toString(36);
}
const Ke = window.fetch;
window.fetch = (n, o) => (
  (n instanceof Request ? n.method : o?.method || "GET") !== "GET" &&
    ne.delete(Se(n)),
  Ke(n, o)
);
const ne = new Map();
function it(n, o) {
  const l = Se(n, o),
    c = document.querySelector(l);
  if (c?.textContent) {
    const { body: h, ...v } = JSON.parse(c.textContent),
      b = c.getAttribute("data-ttl");
    return (
      b && ne.set(l, { body: h, init: v, ttl: 1e3 * Number(b) }),
      Promise.resolve(new Response(h, v))
    );
  }
  return window.fetch(n, o);
}
function st(n, o, l) {
  if (ne.size > 0) {
    const c = Se(n, l),
      h = ne.get(c);
    if (h) {
      if (
        performance.now() < h.ttl &&
        ["default", "force-cache", "only-if-cached", void 0].includes(l?.cache)
      )
        return new Response(h.body, h.init);
      ne.delete(c);
    }
  }
  return window.fetch(o, l);
}
function Se(n, o) {
  let c = `script[data-sveltekit-fetched][data-url=${JSON.stringify(
    n instanceof Request ? n.url : n
  )}]`;
  if (o?.headers || o?.body) {
    const h = [];
    o.headers && h.push([...new Headers(o.headers)].join(",")),
      o.body &&
        (typeof o.body == "string" || ArrayBuffer.isView(o.body)) &&
        h.push(o.body),
      (c += `[data-hash="${ot(...h)}"]`);
  }
  return c;
}
const ct = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function lt(n) {
  const o = [];
  return {
    pattern:
      n === "/"
        ? /^\/$/
        : new RegExp(
            `^${ut(n)
              .map((c) => {
                const h = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);
                if (h)
                  return (
                    o.push({
                      name: h[1],
                      matcher: h[2],
                      optional: !1,
                      rest: !0,
                      chained: !0,
                    }),
                    "(?:/(.*))?"
                  );
                const v = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);
                if (v)
                  return (
                    o.push({
                      name: v[1],
                      matcher: v[2],
                      optional: !0,
                      rest: !1,
                      chained: !0,
                    }),
                    "(?:/([^/]+))?"
                  );
                if (!c) return;
                const b = c.split(/\[(.+?)\](?!\])/);
                return (
                  "/" +
                  b
                    .map((y, m) => {
                      if (m % 2) {
                        if (y.startsWith("x+"))
                          return ve(
                            String.fromCharCode(parseInt(y.slice(2), 16))
                          );
                        if (y.startsWith("u+"))
                          return ve(
                            String.fromCharCode(
                              ...y
                                .slice(2)
                                .split("-")
                                .map((T) => parseInt(T, 16))
                            )
                          );
                        const d = ct.exec(y);
                        if (!d)
                          throw new Error(
                            `Invalid param: ${y}. Params and matcher names can only have underscores and alphanumeric characters.`
                          );
                        const [, $, O, k, A] = d;
                        return (
                          o.push({
                            name: k,
                            matcher: A,
                            optional: !!$,
                            rest: !!O,
                            chained: O ? m === 1 && b[0] === "" : !1,
                          }),
                          O ? "(.*?)" : $ ? "([^/]*)?" : "([^/]+?)"
                        );
                      }
                      return ve(y);
                    })
                    .join("")
                );
              })
              .join("")}/?$`
          ),
    params: o,
  };
}
function ft(n) {
  return !/^\([^)]+\)$/.test(n);
}
function ut(n) {
  return n.slice(1).split("/").filter(ft);
}
function dt(n, o, l) {
  const c = {},
    h = n.slice(1),
    v = h.filter((g) => g !== void 0);
  let b = 0;
  for (let g = 0; g < o.length; g += 1) {
    const y = o[g];
    let m = h[g - b];
    if (
      (y.chained &&
        y.rest &&
        b &&
        ((m = h
          .slice(g - b, g + 1)
          .filter((d) => d)
          .join("/")),
        (b = 0)),
      m === void 0)
    ) {
      y.rest && (c[y.name] = "");
      continue;
    }
    if (!y.matcher || l[y.matcher](m)) {
      c[y.name] = m;
      const d = o[g + 1],
        $ = h[g + 1];
      d && !d.rest && d.optional && $ && y.chained && (b = 0),
        !d && !$ && Object.keys(c).length === v.length && (b = 0);
      continue;
    }
    if (y.optional && y.chained) {
      b++;
      continue;
    }
    return;
  }
  if (!b) return c;
}
function ve(n) {
  return n
    .normalize()
    .replace(/[[\]]/g, "\\$&")
    .replace(/%/g, "%25")
    .replace(/\//g, "%2[Ff]")
    .replace(/\?/g, "%3[Ff]")
    .replace(/#/g, "%23")
    .replace(/[.*+?^${}()|\\]/g, "\\$&");
}
function pt({ nodes: n, server_loads: o, dictionary: l, matchers: c }) {
  const h = new Set(o);
  return Object.entries(l).map(([g, [y, m, d]]) => {
    const { pattern: $, params: O } = lt(g),
      k = {
        id: g,
        exec: (A) => {
          const T = $.exec(A);
          if (T) return dt(T, O, c);
        },
        errors: [1, ...(d || [])].map((A) => n[A]),
        layouts: [0, ...(m || [])].map(b),
        leaf: v(y),
      };
    return (
      (k.errors.length = k.layouts.length =
        Math.max(k.errors.length, k.layouts.length)),
      k
    );
  });
  function v(g) {
    const y = g < 0;
    return y && (g = ~g), [y, n[g]];
  }
  function b(g) {
    return g === void 0 ? g : [h.has(g), n[g]];
  }
}
function ze(n) {
  try {
    return JSON.parse(sessionStorage[n]);
  } catch {}
}
function qe(n, o) {
  const l = JSON.stringify(o);
  try {
    sessionStorage[n] = l;
  } catch {}
}
function ht(n) {
  return n.filter((o) => o != null);
}
const Ge = new Set([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config",
]);
[...Ge];
const _t = new Set([...Ge]);
[..._t];
async function gt(n) {
  for (const o in n)
    if (typeof n[o]?.then == "function")
      return Object.fromEntries(
        await Promise.all(Object.entries(n).map(async ([l, c]) => [l, await c]))
      );
  return n;
}
const mt = "x-sveltekit-invalidated",
  wt = "x-sveltekit-trailing-slash",
  z = ze(Ve) ?? {},
  Z = ze(Fe) ?? {};
function be(n) {
  z[n] = ee();
}
function G(n) {
  return (location.href = n.href), new Promise(() => {});
}
function yt(n, o) {
  const l = pt(n),
    c = n.nodes[0],
    h = n.nodes[1];
  c(), h();
  const v = document.documentElement,
    b = [],
    g = [];
  let y = null;
  const m = { before_navigate: [], on_navigate: [], after_navigate: [] };
  let d = { branch: [], error: null, url: null },
    $ = !1,
    O = !1,
    k = !0,
    A = !1,
    T = !1,
    M = !1,
    F = !1,
    J,
    P = history.state?.[N];
  P ||
    ((P = Date.now()),
    history.replaceState({ ...history.state, [N]: P }, "", location.href));
  const fe = z[P];
  fe && ((history.scrollRestoration = "manual"), scrollTo(fe.x, fe.y));
  let H, B, W;
  async function xe() {
    if (((W = W || Promise.resolve()), await W, !W)) return;
    W = null;
    const e = new URL(location.href),
      t = X(e, !0);
    y = null;
    const r = (B = {}),
      a = t && (await pe(t));
    if (r === B && a) {
      if (a.type === "redirect")
        return ae(new URL(a.location, e).href, {}, 1, r);
      a.props.page !== void 0 && (H = a.props.page), J.$set(a.props);
    }
  }
  function Re(e) {
    g.some((t) => t?.snapshot) && (Z[e] = g.map((t) => t?.snapshot?.capture()));
  }
  function ke(e) {
    Z[e]?.forEach((t, r) => {
      g[r]?.snapshot?.restore(t);
    });
  }
  function Le() {
    be(P), qe(Ve, z), Re(P), qe(Fe, Z);
  }
  async function ae(
    e,
    {
      noScroll: t = !1,
      replaceState: r = !1,
      keepFocus: a = !1,
      state: i = {},
      invalidateAll: s = !1,
    },
    p,
    _
  ) {
    return (
      typeof e == "string" && (e = new URL(e, je(document))),
      se({
        url: e,
        scroll: t ? ee() : null,
        keepfocus: a,
        redirect_count: p,
        details: { state: i, replaceState: r },
        nav_token: _,
        accepted: () => {
          s && (F = !0);
        },
        blocked: () => {},
        type: "goto",
      })
    );
  }
  async function Ae(e) {
    return (
      (y = {
        id: e.id,
        promise: pe(e).then(
          (t) => (t.type === "loaded" && t.state.error && (y = null), t)
        ),
      }),
      y.promise
    );
  }
  async function re(...e) {
    const r = l
      .filter((a) => e.some((i) => a.exec(i)))
      .map((a) => Promise.all([...a.layouts, a.leaf].map((i) => i?.[1]())));
    await Promise.all(r);
  }
  function Pe(e) {
    d = e.state;
    const t = document.querySelector("style[data-sveltekit]");
    t && t.remove(),
      (H = e.props.page),
      (J = new n.root({
        target: o,
        props: { ...e.props, stores: V, components: g },
        hydrate: !0,
      })),
      ke(P);
    const r = {
      from: null,
      to: {
        params: d.params,
        route: { id: d.route?.id ?? null },
        url: new URL(location.href),
      },
      willUnload: !1,
      type: "enter",
      complete: Promise.resolve(),
    };
    m.after_navigate.forEach((a) => a(r)), (O = !0);
  }
  async function Y({
    url: e,
    params: t,
    branch: r,
    status: a,
    error: i,
    route: s,
    form: p,
  }) {
    let _ = "never";
    for (const u of r) u?.slash !== void 0 && (_ = u.slash);
    (e.pathname = Xe(e.pathname, _)), (e.search = e.search);
    const E = {
      type: "loaded",
      state: { url: e, params: t, branch: r, error: i, route: s },
      props: { constructors: ht(r).map((u) => u.node.component) },
    };
    p !== void 0 && (E.props.form = p);
    let w = {},
      R = !H,
      f = 0;
    for (let u = 0; u < Math.max(r.length, d.branch.length); u += 1) {
      const I = r[u],
        q = d.branch[u];
      I?.data !== q?.data && (R = !0),
        I &&
          ((w = { ...w, ...I.data }),
          R && (E.props[`data_${f}`] = w),
          (f += 1));
    }
    return (
      (!d.url ||
        e.href !== d.url.href ||
        d.error !== i ||
        (p !== void 0 && p !== H.form) ||
        R) &&
        (E.props.page = {
          error: i,
          params: t,
          route: { id: s?.id ?? null },
          status: a,
          url: new URL(e),
          form: p ?? null,
          data: R ? w : H.data,
        }),
      E
    );
  }
  async function ue({
    loader: e,
    parent: t,
    url: r,
    params: a,
    route: i,
    server_data_node: s,
  }) {
    let p = null;
    const _ = {
        dependencies: new Set(),
        params: new Set(),
        parent: !1,
        route: !1,
        url: !1,
      },
      E = await e();
    if (E.universal?.load) {
      let w = function (...f) {
        for (const S of f) {
          const { href: u } = new URL(S, r);
          _.dependencies.add(u);
        }
      };
      const R = {
        route: new Proxy(i, { get: (f, S) => ((_.route = !0), f[S]) }),
        params: new Proxy(a, { get: (f, S) => (_.params.add(S), f[S]) }),
        data: s?.data ?? null,
        url: tt(r, () => {
          _.url = !0;
        }),
        async fetch(f, S) {
          let u;
          f instanceof Request
            ? ((u = f.url),
              (S = {
                body:
                  f.method === "GET" || f.method === "HEAD"
                    ? void 0
                    : await f.blob(),
                cache: f.cache,
                credentials: f.credentials,
                headers: f.headers,
                integrity: f.integrity,
                keepalive: f.keepalive,
                method: f.method,
                mode: f.mode,
                redirect: f.redirect,
                referrer: f.referrer,
                referrerPolicy: f.referrerPolicy,
                signal: f.signal,
                ...S,
              }))
            : (u = f);
          const I = new URL(u, r);
          return (
            w(I.href),
            I.origin === r.origin && (u = I.href.slice(r.origin.length)),
            O ? st(u, I.href, S) : it(u, S)
          );
        },
        setHeaders: () => {},
        depends: w,
        parent() {
          return (_.parent = !0), t();
        },
      };
      (p = (await E.universal.load.call(null, R)) ?? null),
        (p = p ? await gt(p) : null);
    }
    return {
      node: E,
      loader: e,
      server: s,
      universal: E.universal?.load ? { type: "data", data: p, uses: _ } : null,
      data: p ?? s?.data ?? null,
      slash: E.universal?.trailingSlash ?? s?.slash,
    };
  }
  function Ie(e, t, r, a, i) {
    if (F) return !0;
    if (!a) return !1;
    if ((a.parent && e) || (a.route && t) || (a.url && r)) return !0;
    for (const s of a.params) if (i[s] !== d.params[s]) return !0;
    for (const s of a.dependencies) if (b.some((p) => p(new URL(s)))) return !0;
    return !1;
  }
  function de(e, t) {
    return e?.type === "data" ? e : e?.type === "skip" ? t ?? null : null;
  }
  async function pe({ id: e, invalidating: t, url: r, params: a, route: i }) {
    if (y?.id === e) return y.promise;
    const { errors: s, layouts: p, leaf: _ } = i,
      E = [...p, _];
    s.forEach((x) => x?.().catch(() => {})),
      E.forEach((x) => x?.[1]().catch(() => {}));
    let w = null;
    const R = d.url ? e !== d.url.pathname + d.url.search : !1,
      f = d.route ? i.id !== d.route.id : !1;
    let S = !1;
    const u = E.map((x, j) => {
      const C = d.branch[j],
        D = !!x?.[0] && (C?.loader !== x[1] || Ie(S, f, R, C.server?.uses, a));
      return D && (S = !0), D;
    });
    if (u.some(Boolean)) {
      try {
        w = await Me(r, u);
      } catch (x) {
        return oe({
          status: x instanceof te ? x.status : 500,
          error: await Q(x, { url: r, params: a, route: { id: i.id } }),
          url: r,
          route: i,
        });
      }
      if (w.type === "redirect") return w;
    }
    const I = w?.nodes;
    let q = !1;
    const L = E.map(async (x, j) => {
      if (!x) return;
      const C = d.branch[j],
        D = I?.[j];
      if (
        (!D || D.type === "skip") &&
        x[1] === C?.loader &&
        !Ie(q, f, R, C.universal?.uses, a)
      )
        return C;
      if (((q = !0), D?.type === "error")) throw D;
      return ue({
        loader: x[1],
        url: r,
        params: a,
        route: i,
        parent: async () => {
          const he = {};
          for (let _e = 0; _e < j; _e += 1)
            Object.assign(he, (await L[_e])?.data);
          return he;
        },
        server_data_node: de(
          D === void 0 && x[0] ? { type: "skip" } : D ?? null,
          x[0] ? C?.server : void 0
        ),
      });
    });
    for (const x of L) x.catch(() => {});
    const U = [];
    for (let x = 0; x < E.length; x += 1)
      if (E[x])
        try {
          U.push(await L[x]);
        } catch (j) {
          if (j instanceof Ne)
            return { type: "redirect", location: j.location };
          let C = 500,
            D;
          if (I?.includes(j)) (C = j.status ?? C), (D = j.error);
          else if (j instanceof te) (C = j.status), (D = j.body);
          else {
            if (await V.updated.check()) return await G(r);
            D = await Q(j, { params: a, url: r, route: { id: i.id } });
          }
          const ce = await Oe(x, U, s);
          return ce
            ? await Y({
                url: r,
                params: a,
                branch: U.slice(0, ce.idx).concat(ce.node),
                status: C,
                error: D,
                route: i,
              })
            : await $e(r, { id: i.id }, D, C);
        }
      else U.push(void 0);
    return await Y({
      url: r,
      params: a,
      branch: U,
      status: 200,
      error: null,
      route: i,
      form: t ? void 0 : null,
    });
  }
  async function Oe(e, t, r) {
    for (; e--; )
      if (r[e]) {
        let a = e;
        for (; !t[a]; ) a -= 1;
        try {
          return {
            idx: a + 1,
            node: {
              node: await r[e](),
              loader: r[e],
              data: {},
              server: null,
              universal: null,
            },
          };
        } catch {
          continue;
        }
      }
  }
  async function oe({ status: e, error: t, url: r, route: a }) {
    const i = {};
    let s = null;
    if (n.server_loads[0] === 0)
      try {
        const w = await Me(r, [!0]);
        if (w.type !== "data" || (w.nodes[0] && w.nodes[0].type !== "data"))
          throw 0;
        s = w.nodes[0] ?? null;
      } catch {
        (r.origin !== Ce || r.pathname !== location.pathname || $) &&
          (await G(r));
      }
    const _ = await ue({
        loader: c,
        url: r,
        params: i,
        route: a,
        parent: () => Promise.resolve({}),
        server_data_node: de(s),
      }),
      E = {
        node: await h(),
        loader: h,
        universal: null,
        server: null,
        data: null,
      };
    return await Y({
      url: r,
      params: i,
      branch: [_, E],
      status: e,
      error: t,
      route: null,
    });
  }
  function X(e, t) {
    if (ye(e, K)) return;
    const r = ie(e);
    for (const a of l) {
      const i = a.exec(r);
      if (i)
        return {
          id: e.pathname + e.search,
          invalidating: t,
          route: a,
          params: Ze(i),
          url: e,
        };
    }
  }
  function ie(e) {
    return Qe(e.pathname.slice(K.length) || "/");
  }
  function Ue({ url: e, type: t, intent: r, delta: a }) {
    let i = !1;
    const s = He(d, r, e, t);
    a !== void 0 && (s.navigation.delta = a);
    const p = {
      ...s.navigation,
      cancel: () => {
        (i = !0), s.reject(new Error("navigation was cancelled"));
      },
    };
    return T || m.before_navigate.forEach((_) => _(p)), i ? null : s;
  }
  async function se({
    url: e,
    scroll: t,
    keepfocus: r,
    redirect_count: a,
    details: i,
    type: s,
    delta: p,
    nav_token: _ = {},
    accepted: E,
    blocked: w,
  }) {
    const R = X(e, !1),
      f = Ue({ url: e, type: s, delta: p, intent: R });
    if (!f) {
      w();
      return;
    }
    const S = P;
    E(), (T = !0), O && V.navigating.set(f.navigation), (B = _);
    let u = R && (await pe(R));
    if (!u) {
      if (ye(e, K)) return await G(e);
      u = await $e(
        e,
        { id: null },
        await Q(new Error(`Not found: ${e.pathname}`), {
          url: e,
          params: {},
          route: { id: null },
        }),
        404
      );
    }
    if (((e = R?.url || e), B !== _))
      return f.reject(new Error("navigation was aborted")), !1;
    if (u.type === "redirect")
      if (a >= 20)
        u = await oe({
          status: 500,
          error: await Q(new Error("Redirect loop"), {
            url: e,
            params: {},
            route: { id: null },
          }),
          url: e,
          route: { id: null },
        });
      else return ae(new URL(u.location, e).href, {}, a + 1, _), !1;
    else
      u.props.page?.status >= 400 && (await V.updated.check()) && (await G(e));
    if (
      ((b.length = 0),
      (F = !1),
      (A = !0),
      be(S),
      Re(S),
      u.props.page?.url &&
        u.props.page.url.pathname !== e.pathname &&
        (e.pathname = u.props.page?.url.pathname),
      i)
    ) {
      const L = i.replaceState ? 0 : 1;
      if (
        ((i.state[N] = P += L),
        history[i.replaceState ? "replaceState" : "pushState"](i.state, "", e),
        !i.replaceState)
      ) {
        let U = P + 1;
        for (; Z[U] || z[U]; ) delete Z[U], delete z[U], (U += 1);
      }
    }
    if (((y = null), O)) {
      (d = u.state), u.props.page && (u.props.page.url = e);
      const L = (
        await Promise.all(m.on_navigate.map((U) => U(f.navigation)))
      ).filter((U) => typeof U == "function");
      if (L.length > 0) {
        let U = function () {
          m.after_navigate = m.after_navigate.filter((x) => !L.includes(x));
        };
        L.push(U), m.after_navigate.push(...L);
      }
      J.$set(u.props);
    } else Pe(u);
    const { activeElement: I } = document;
    if ((await me(), k)) {
      const L =
        e.hash && document.getElementById(decodeURIComponent(e.hash.slice(1)));
      t ? scrollTo(t.x, t.y) : L ? L.scrollIntoView() : scrollTo(0, 0);
    }
    const q =
      document.activeElement !== I && document.activeElement !== document.body;
    !r && !q && Ee(),
      (k = !0),
      u.props.page && (H = u.props.page),
      (T = !1),
      s === "popstate" && ke(P),
      f.fulfil(void 0),
      m.after_navigate.forEach((L) => L(f.navigation)),
      V.navigating.set(null),
      (A = !1);
  }
  async function $e(e, t, r, a) {
    return e.origin === Ce && e.pathname === location.pathname && !$
      ? await oe({ status: a, error: r, url: e, route: t })
      : await G(e);
  }
  function Be() {
    let e;
    v.addEventListener("mousemove", (s) => {
      const p = s.target;
      clearTimeout(e),
        (e = setTimeout(() => {
          a(p, 2);
        }, 20));
    });
    function t(s) {
      a(s.composedPath()[0], 1);
    }
    v.addEventListener("mousedown", t),
      v.addEventListener("touchstart", t, { passive: !0 });
    const r = new IntersectionObserver(
      (s) => {
        for (const p of s)
          p.isIntersecting &&
            (re(ie(new URL(p.target.href))), r.unobserve(p.target));
      },
      { threshold: 0 }
    );
    function a(s, p) {
      const _ = De(s, v);
      if (!_) return;
      const { url: E, external: w, download: R } = we(_, K);
      if (w || R) return;
      const f = le(_);
      if (!f.reload)
        if (p <= f.preload_data) {
          const S = X(E, !1);
          S && Ae(S);
        } else p <= f.preload_code && re(ie(E));
    }
    function i() {
      r.disconnect();
      for (const s of v.querySelectorAll("a")) {
        const { url: p, external: _, download: E } = we(s, K);
        if (_ || E) continue;
        const w = le(s);
        w.reload ||
          (w.preload_code === Te.viewport && r.observe(s),
          w.preload_code === Te.eager && re(ie(p)));
      }
    }
    m.after_navigate.push(i), i();
  }
  function Q(e, t) {
    return e instanceof te
      ? e.body
      : n.hooks.handleError({ error: e, event: t }) ?? {
          message: t.route.id != null ? "Internal Error" : "Not Found",
        };
  }
  return {
    after_navigate: (e) => {
      ge(
        () => (
          m.after_navigate.push(e),
          () => {
            const t = m.after_navigate.indexOf(e);
            m.after_navigate.splice(t, 1);
          }
        )
      );
    },
    before_navigate: (e) => {
      ge(
        () => (
          m.before_navigate.push(e),
          () => {
            const t = m.before_navigate.indexOf(e);
            m.before_navigate.splice(t, 1);
          }
        )
      );
    },
    on_navigate: (e) => {
      ge(
        () => (
          m.on_navigate.push(e),
          () => {
            const t = m.on_navigate.indexOf(e);
            m.on_navigate.splice(t, 1);
          }
        )
      );
    },
    disable_scroll_handling: () => {
      (A || !O) && (k = !1);
    },
    goto: (e, t = {}) => ae(e, t, 0),
    invalidate: (e) => {
      if (typeof e == "function") b.push(e);
      else {
        const { href: t } = new URL(e, location.href);
        b.push((r) => r.href === t);
      }
      return xe();
    },
    invalidate_all: () => ((F = !0), xe()),
    preload_data: async (e) => {
      const t = new URL(e, je(document)),
        r = X(t, !1);
      if (!r)
        throw new Error(
          `Attempted to preload a URL that does not belong to this app: ${t}`
        );
      await Ae(r);
    },
    preload_code: re,
    apply_action: async (e) => {
      if (e.type === "error") {
        const t = new URL(location.href),
          { branch: r, route: a } = d;
        if (!a) return;
        const i = await Oe(d.branch.length, r, a.errors);
        if (i) {
          const s = await Y({
            url: t,
            params: d.params,
            branch: r.slice(0, i.idx).concat(i.node),
            status: e.status ?? 500,
            error: e.error,
            route: a,
          });
          (d = s.state), J.$set(s.props), me().then(Ee);
        }
      } else
        e.type === "redirect"
          ? ae(e.location, { invalidateAll: !0 }, 0)
          : (J.$set({
              form: null,
              page: { ...H, form: e.data, status: e.status },
            }),
            await me(),
            J.$set({ form: e.data }),
            e.type === "success" && Ee());
    },
    _start_router: () => {
      (history.scrollRestoration = "manual"),
        addEventListener("beforeunload", (t) => {
          let r = !1;
          if ((Le(), !T)) {
            const a = He(d, void 0, null, "leave"),
              i = {
                ...a.navigation,
                cancel: () => {
                  (r = !0), a.reject(new Error("navigation was cancelled"));
                },
              };
            m.before_navigate.forEach((s) => s(i));
          }
          r
            ? (t.preventDefault(), (t.returnValue = ""))
            : (history.scrollRestoration = "auto");
        }),
        addEventListener("visibilitychange", () => {
          document.visibilityState === "hidden" && Le();
        }),
        navigator.connection?.saveData || Be(),
        v.addEventListener("click", (t) => {
          if (
            t.button ||
            t.which !== 1 ||
            t.metaKey ||
            t.ctrlKey ||
            t.shiftKey ||
            t.altKey ||
            t.defaultPrevented
          )
            return;
          const r = De(t.composedPath()[0], v);
          if (!r) return;
          const { url: a, external: i, target: s, download: p } = we(r, K);
          if (!a) return;
          if (s === "_parent" || s === "_top") {
            if (window.parent !== window) return;
          } else if (s && s !== "_self") return;
          const _ = le(r);
          if (
            (!(r instanceof SVGAElement) &&
              a.protocol !== location.protocol &&
              !(a.protocol === "https:" || a.protocol === "http:")) ||
            p
          )
            return;
          if (i || _.reload) {
            Ue({ url: a, type: "link" }) ? (T = !0) : t.preventDefault();
            return;
          }
          const [w, R] = a.href.split("#");
          if (R !== void 0 && w === location.href.split("#")[0]) {
            if (d.url.hash === a.hash) {
              t.preventDefault(),
                r.ownerDocument.getElementById(R)?.scrollIntoView();
              return;
            }
            if (((M = !0), be(P), e(a), !_.replace_state)) return;
            (M = !1), t.preventDefault();
          }
          se({
            url: a,
            scroll: _.noscroll ? ee() : null,
            keepfocus: _.keep_focus ?? !1,
            redirect_count: 0,
            details: {
              state: {},
              replaceState: _.replace_state ?? a.href === location.href,
            },
            accepted: () => t.preventDefault(),
            blocked: () => t.preventDefault(),
            type: "link",
          });
        }),
        v.addEventListener("submit", (t) => {
          if (t.defaultPrevented) return;
          const r = HTMLFormElement.prototype.cloneNode.call(t.target),
            a = t.submitter;
          if ((a?.formMethod || r.method) !== "get") return;
          const s = new URL(
            (a?.hasAttribute("formaction") && a?.formAction) || r.action
          );
          if (ye(s, K)) return;
          const p = t.target,
            { keep_focus: _, noscroll: E, reload: w, replace_state: R } = le(p);
          if (w) return;
          t.preventDefault(), t.stopPropagation();
          const f = new FormData(p),
            S = a?.getAttribute("name");
          S && f.append(S, a?.getAttribute("value") ?? ""),
            (s.search = new URLSearchParams(f).toString()),
            se({
              url: s,
              scroll: E ? ee() : null,
              keepfocus: _ ?? !1,
              redirect_count: 0,
              details: {
                state: {},
                replaceState: R ?? s.href === location.href,
              },
              nav_token: {},
              accepted: () => {},
              blocked: () => {},
              type: "form",
            });
        }),
        addEventListener("popstate", async (t) => {
          if (((B = {}), t.state?.[N])) {
            if (t.state[N] === P) return;
            const r = z[t.state[N]],
              a = new URL(location.href);
            if (d.url.href.split("#")[0] === location.href.split("#")[0]) {
              e(a), (z[P] = ee()), (P = t.state[N]), scrollTo(r.x, r.y);
              return;
            }
            const i = t.state[N] - P;
            await se({
              url: a,
              scroll: r,
              keepfocus: !1,
              redirect_count: 0,
              details: null,
              accepted: () => {
                P = t.state[N];
              },
              blocked: () => {
                history.go(-i);
              },
              type: "popstate",
              delta: i,
              nav_token: B,
            });
          } else if (!M) {
            const r = new URL(location.href);
            e(r);
          }
        }),
        addEventListener("hashchange", () => {
          M &&
            ((M = !1),
            history.replaceState(
              { ...history.state, [N]: ++P },
              "",
              location.href
            ));
        });
      for (const t of document.querySelectorAll("link"))
        t.rel === "icon" && (t.href = t.href);
      addEventListener("pageshow", (t) => {
        t.persisted && V.navigating.set(null);
      });
      function e(t) {
        (d.url = t), V.page.set({ ...H, url: t }), V.page.notify();
      }
    },
    _hydrate: async ({
      status: e = 200,
      error: t,
      node_ids: r,
      params: a,
      route: i,
      data: s,
      form: p,
    }) => {
      $ = !0;
      const _ = new URL(location.href);
      ({ params: a = {}, route: i = { id: null } } = X(_, !1) || {});
      let E;
      try {
        const w = r.map(async (S, u) => {
            const I = s[u];
            return (
              I?.uses && (I.uses = Je(I.uses)),
              ue({
                loader: n.nodes[S],
                url: _,
                params: a,
                route: i,
                parent: async () => {
                  const q = {};
                  for (let L = 0; L < u; L += 1)
                    Object.assign(q, (await w[L]).data);
                  return q;
                },
                server_data_node: de(I),
              })
            );
          }),
          R = await Promise.all(w),
          f = l.find(({ id: S }) => S === i.id);
        if (f) {
          const S = f.layouts;
          for (let u = 0; u < S.length; u++) S[u] || R.splice(u, 0, void 0);
        }
        E = await Y({
          url: _,
          params: a,
          branch: R,
          status: e,
          error: t,
          form: p,
          route: f ?? null,
        });
      } catch (w) {
        if (w instanceof Ne) {
          await G(new URL(w.location, location.href));
          return;
        }
        E = await oe({
          status: w instanceof te ? w.status : 500,
          error: await Q(w, { url: _, params: a, route: i }),
          url: _,
          route: i,
        });
      }
      Pe(E);
    },
  };
}
async function Me(n, o) {
  const l = new URL(n);
  (l.pathname = rt(n.pathname)),
    n.pathname.endsWith("/") && l.searchParams.append(wt, "1"),
    l.searchParams.append(mt, o.map((h) => (h ? "1" : "0")).join(""));
  const c = await Ke(l.href);
  if (
    (c.headers.get("content-type")?.includes("text/html") && (await G(n)),
    !c.ok)
  )
    throw new te(c.status, await c.json());
  return new Promise(async (h) => {
    const v = new Map(),
      b = c.body.getReader(),
      g = new TextDecoder();
    function y(d) {
      return Ye(d, {
        Promise: ($) =>
          new Promise((O, k) => {
            v.set($, { fulfil: O, reject: k });
          }),
      });
    }
    let m = "";
    for (;;) {
      const { done: d, value: $ } = await b.read();
      if (d && !m) break;
      for (
        m +=
          !$ && m
            ? `
`
            : g.decode($);
        ;

      ) {
        const O = m.indexOf(`
`);
        if (O === -1) break;
        const k = JSON.parse(m.slice(0, O));
        if (((m = m.slice(O + 1)), k.type === "redirect")) return h(k);
        if (k.type === "data")
          k.nodes?.forEach((A) => {
            A?.type === "data" && ((A.uses = Je(A.uses)), (A.data = y(A.data)));
          }),
            h(k);
        else if (k.type === "chunk") {
          const { id: A, data: T, error: M } = k,
            F = v.get(A);
          v.delete(A), M ? F.reject(y(M)) : F.fulfil(y(T));
        }
      }
    }
  });
}
function Je(n) {
  return {
    dependencies: new Set(n?.dependencies ?? []),
    params: new Set(n?.params ?? []),
    parent: !!n?.parent,
    route: !!n?.route,
    url: !!n?.url,
  };
}
function Ee() {
  const n = document.querySelector("[autofocus]");
  if (n) n.focus();
  else {
    const o = document.body,
      l = o.getAttribute("tabindex");
    (o.tabIndex = -1),
      o.focus({ preventScroll: !0, focusVisible: !1 }),
      l !== null
        ? o.setAttribute("tabindex", l)
        : o.removeAttribute("tabindex");
    const c = getSelection();
    if (c && c.type !== "None") {
      const h = [];
      for (let v = 0; v < c.rangeCount; v += 1) h.push(c.getRangeAt(v));
      setTimeout(() => {
        if (c.rangeCount === h.length) {
          for (let v = 0; v < c.rangeCount; v += 1) {
            const b = h[v],
              g = c.getRangeAt(v);
            if (
              b.commonAncestorContainer !== g.commonAncestorContainer ||
              b.startContainer !== g.startContainer ||
              b.endContainer !== g.endContainer ||
              b.startOffset !== g.startOffset ||
              b.endOffset !== g.endOffset
            )
              return;
          }
          c.removeAllRanges();
        }
      });
    }
  }
}
function He(n, o, l, c) {
  let h, v;
  const b = new Promise((y, m) => {
    (h = y), (v = m);
  });
  return (
    b.catch(() => {}),
    {
      navigation: {
        from: {
          params: n.params,
          route: { id: n.route?.id ?? null },
          url: n.url,
        },
        to: l && {
          params: o?.params ?? null,
          route: { id: o?.route?.id ?? null },
          url: l,
        },
        willUnload: !o,
        type: c,
        complete: b,
      },
      fulfil: h,
      reject: v,
    }
  );
}
async function Rt(n, o, l) {
  const c = yt(n, o);
  We({ client: c }),
    l ? await c._hydrate(l) : c.goto(location.href, { replaceState: !0 }),
    c._start_router();
}
export { Rt as start };
//# sourceMappingURL=start.4929e95a.js.map
