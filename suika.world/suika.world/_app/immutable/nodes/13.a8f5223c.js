import {
  s as C,
  c as R,
  G as O,
  b as v,
  k as H,
  i as N,
  H as A,
} from "../chunks/scheduler.023ced08.js";
import {
  S as E,
  i as J,
  c as x,
  a as S,
  m as I,
  t as p,
  b as $,
  d as T,
  g as V,
  e as j,
} from "../chunks/index.c7cfddcd.js";
import { F as c, c as q, G as z, g as K } from "../chunks/front.38e13373.js";
import {
  G as L,
  r as Q,
  R as U,
  B as W,
  __tla as X,
} from "../chunks/GameLayout.0afab75e.js";
import { d as Y } from "../chunks/index.df959635.js";
import { g as Z } from "../chunks/navigation.fa955013.js";
import { S as ee, C as te } from "../chunks/util.15fd937c.js";
let k,
  re = Promise.all([
    (() => {
      try {
        return X;
      } catch {}
    })(),
  ]).then(async () => {
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
          r = new Error().stack;
        r &&
          ((n._sentryDebugIds = n._sentryDebugIds || {}),
          (n._sentryDebugIds[r] = "ecd99873-0fe2-44e7-bfc5-a0543ae2553f"),
          (n._sentryDebugIdIdentifier =
            "sentry-dbid-ecd99873-0fe2-44e7-bfc5-a0543ae2553f"));
      } catch {}
    })();
    function b(n) {
      let r,
        a,
        t = { player_id: _, settings: n[5] };
      return (
        (r = new W({ props: t })),
        n[8](r),
        r.$on("next_fruit", n[9]),
        r.$on("drop", n[10]),
        r.$on("local_died", n[11]),
        {
          c() {
            x(r.$$.fragment);
          },
          l(e) {
            S(r.$$.fragment, e);
          },
          m(e, o) {
            I(r, e, o), (a = !0);
          },
          p(e, o) {
            const u = {};
            o & 32 && (u.settings = e[5]), r.$set(u);
          },
          i(e) {
            a || (p(r.$$.fragment, e), (a = !0));
          },
          o(e) {
            $(r.$$.fragment, e), (a = !1);
          },
          d(e) {
            n[8](null), T(r, e);
          },
        }
      );
    }
    function D(n) {
      let r,
        a,
        t = n[5] && b(n);
      return {
        c() {
          t && t.c(), (r = v());
        },
        l(e) {
          t && t.l(e), (r = v());
        },
        m(e, o) {
          t && t.m(e, o), H(e, r, o), (a = !0);
        },
        p(e, o) {
          e[5]
            ? t
              ? (t.p(e, o), o & 32 && p(t, 1))
              : ((t = b(e)), t.c(), p(t, 1), t.m(r.parentNode, r))
            : t &&
              (V(),
              $(t, 1, 1, () => {
                t = null;
              }),
              j());
        },
        i(e) {
          a || (p(t), (a = !0));
        },
        o(e) {
          $(t), (a = !1);
        },
        d(e) {
          e && N(r), t && t.d(e);
        },
      };
    }
    function F(n) {
      let r, a;
      return (
        (r = new L({
          props: {
            next_fruit: n[4],
            $$slots: { left: [D] },
            $$scope: { ctx: n },
          },
        })),
        {
          c() {
            x(r.$$.fragment);
          },
          l(t) {
            S(r.$$.fragment, t);
          },
          m(t, e) {
            I(r, t, e), (a = !0);
          },
          p(t, [e]) {
            const o = {};
            e & 16 && (o.next_fruit = t[4]),
              e & 16447 && (o.$$scope = { dirty: e, ctx: t }),
              r.$set(o);
          },
          i(t) {
            a || (p(r.$$.fragment, t), (a = !0));
          },
          o(t) {
            $(r.$$.fragment, t), (a = !1);
          },
          d(t) {
            T(r, t);
          },
        }
      );
    }
    const _ = "_anonymous";
    function G(n) {
      const r = n.slice();
      for (var a = r.length - 1; a > 0; a--) {
        var t = Math.floor(Math.random() * (a + 1)),
          e = r[a];
        (r[a] = r[t]), (r[t] = e);
      }
      return r;
    }
    function M(n, r, a) {
      let t, e;
      const o = [
          c.Cherry,
          c.Cherry,
          c.Strawberry,
          c.Strawberry,
          c.Grape,
          c.Grape,
          c.Orange,
          c.Orange,
          c.Persimmon,
          c.Persimmon,
        ],
        u = [];
      function m(s) {
        const l = Math.floor(s / o.length);
        let i = u[l];
        return i || ((i = G(o)), (u[l] = i)), i[s % o.length];
      }
      let d = 0;
      const h = Y([Q], ([s]) => {
        if (!s) return;
        const l = new Map(),
          { world: i, ground: y } = q(U);
        return (
          l.set(_, {
            player: { username: "", image: "", rating: 1500 },
            isReady: !0,
            isConnected: !0,
            rapierState: i.takeSnapshot(),
            groundHandle: y,
            fruits: new Map(),
            hasFallingFruit: !1,
            fallingFruit: 0,
            killGraceTimer: 0,
            isDead: !1,
            score: 0,
            lastDropTime: 0,
            dropTimer: 1 / 0,
            garbageBar: 0,
          }),
          {
            serverVersion: 1,
            gameState: z.Playing,
            serverTickRate: ee,
            clientTickRate: te,
            garbageTimer: 1 / 0,
            initialFruit: m(0),
            secondFruit: m(1),
            lobby: {
              private: !1,
              createdAt: new Date(),
              region: "",
              gameMode: "singleplayer",
            },
            initialBoardStates: l,
          }
        );
      });
      R(n, h, (s) => a(5, (t = s)));
      let g = !0,
        f = 0;
      O(() => {
        let s = 1 / 0;
        const l = () => {
          if (((i = setTimeout(l, 1e3 / 10)), !(!g || !e))) {
            for (; s < 6; ) y();
            (s = 0), a(3, f++, f);
          }
        };
        let i;
        const y = () => {
          !g || !e || s >= 6 || (e.update(f), s++);
        };
        l();
        const P = setInterval(y, 1e3 / 60);
        return () => {
          clearTimeout(i), clearInterval(P);
        };
      });
      let w;
      function B(s) {
        A[s ? "unshift" : "push"](() => {
          (e = s), a(0, e);
        });
      }
      return [
        e,
        d,
        g,
        f,
        w,
        t,
        m,
        h,
        B,
        (s) => {
          a(4, (w = K(s.detail)));
        },
        (s) => {
          DropFunction = e.drop_fruit;
          previewHelperFunction = m;
          e.can_drop_fruit(f) &&
            (e.drop_fruit({
              tick: f,
              x: s.detail.x,
              type: m(d),
              playerId: _,
              nextPreview: m(d + 2),
            }),
            a(1, d++, d));
        },
        (s) => {
          a(2, (g = !1));
          const l = s.detail;
          localStorage.setItem(
            "last_offline_game",
            JSON.stringify({
              fruits: [...l.fruits.values()].map((i) => ({
                ...i.rigidBody.translation(),
                rotation: i.rigidBody.rotation(),
                type: i.type,
              })),
              score: l.score,
            })
          ),
            Z("/game/offline?over");
        },
      ];
    }
    k = class extends E {
      constructor(n) {
        super(), J(this, n, M, F, C, {});
      }
    };
  });
export { re as __tla, k as component };
