var tg = Object.defineProperty;
var rg = (Gt, je, ci) =>
  je in Gt
    ? tg(Gt, je, { enumerable: !0, configurable: !0, writable: !0, value: ci })
    : (Gt[je] = ci);
var q = (Gt, je, ci) => rg(Gt, typeof je != "symbol" ? je + "" : je, ci);
(function (Gt) {
  typeof define == "function" && define.amd ? define(Gt) : Gt();
})(function () {
  "use strict";
  var Gt = document.createElement("style");
  ((Gt.textContent = `@keyframes splide-loading{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.splide__track--draggable{-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.splide__track--fade>.splide__list>.splide__slide{margin:0!important;opacity:0;z-index:0}.splide__track--fade>.splide__list>.splide__slide.is-active{opacity:1;z-index:1}.splide--rtl{direction:rtl}.splide__track--ttb>.splide__list{display:block}.splide__container{box-sizing:border-box;position:relative}.splide__list{backface-visibility:hidden;display:-ms-flexbox;display:flex;height:100%;margin:0!important;padding:0!important}.splide.is-initialized:not(.is-active) .splide__list{display:block}.splide__pagination{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center;margin:0;pointer-events:none}.splide__pagination li{display:inline-block;line-height:1;list-style-type:none;margin:0;pointer-events:auto}.splide:not(.is-overflow) .splide__pagination{display:none}.splide__progress__bar{width:0}.splide{position:relative;visibility:hidden}.splide.is-initialized,.splide.is-rendered{visibility:visible}.splide__slide{backface-visibility:hidden;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;list-style-type:none!important;margin:0;position:relative}.splide__slide img{vertical-align:bottom}.splide__spinner{animation:splide-loading 1s linear infinite;border:2px solid #999;border-left-color:transparent;border-radius:50%;bottom:0;contain:strict;display:inline-block;height:20px;left:0;margin:auto;position:absolute;right:0;top:0;width:20px}.splide__sr{clip:rect(0 0 0 0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.splide__toggle.is-active .splide__toggle__play,.splide__toggle__pause{display:none}.splide__toggle.is-active .splide__toggle__pause{display:inline}.splide__track{overflow:hidden;position:relative;z-index:0}
/*$vite$:1*/`),
    document.head.appendChild(Gt));
  function je(n) {
    if (n === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return n;
  }
  function ci(n, e) {
    ((n.prototype = Object.create(e.prototype)),
      (n.prototype.constructor = n),
      (n.__proto__ = e));
  }
  /*!
   * GSAP 3.14.2
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Ct = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    qi = { duration: 0.5, overwrite: !1, delay: 0 },
    qo,
    Ke,
    me,
    Nt = 1e8,
    de = 1 / Nt,
    Yo = Math.PI * 2,
    Zf = Yo / 4,
    Qf = 0,
    Lu = Math.sqrt,
    Jf = Math.cos,
    eh = Math.sin,
    qe = function (e) {
      return typeof e == "string";
    },
    Te = function (e) {
      return typeof e == "function";
    },
    mr = function (e) {
      return typeof e == "number";
    },
    Xo = function (e) {
      return typeof e > "u";
    },
    ir = function (e) {
      return typeof e == "object";
    },
    gt = function (e) {
      return e !== !1;
    },
    Uo = function () {
      return typeof window < "u";
    },
    Ls = function (e) {
      return Te(e) || qe(e);
    },
    Mu =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    tt = Array.isArray,
    th = /random\([^)]+\)/g,
    rh = /,\s*/g,
    Iu = /(?:-?\.?\d|\.)+/gi,
    Nu = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Yi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Go = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Bu = /[+-]=-?[.\d]+/,
    ih = /[^,'"\[\]\s]+/gi,
    nh = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    we,
    nr,
    $o,
    jo,
    xt = {},
    Ms = {},
    zu,
    Hu = function (e) {
      return (Ms = Ui(e, xt)) && mt;
    },
    Ko = function (e, t) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        t,
        "Missing plugin? gsap.registerPlugin()",
      );
    },
    An = function (e, t) {
      return !t && console.warn(e);
    },
    Vu = function (e, t) {
      return (e && (xt[e] = t) && Ms && (Ms[e] = t)) || xt;
    },
    Fn = function () {
      return 0;
    },
    sh = { suppressEvents: !0, isStart: !0, kill: !1 },
    Is = { suppressEvents: !0, kill: !1 },
    oh = { suppressEvents: !0 },
    Zo = {},
    Mr = [],
    Qo = {},
    Wu,
    St = {},
    Jo = {},
    qu = 30,
    Ns = [],
    ea = "",
    ta = function (e) {
      var t = e[0],
        r,
        i;
      if ((ir(t) || Te(t) || (e = [e]), !(r = (t._gsap || {}).harness))) {
        for (i = Ns.length; i-- && !Ns[i].targetTest(t); );
        r = Ns[i];
      }
      for (i = e.length; i--; )
        (e[i] && (e[i]._gsap || (e[i]._gsap = new Dl(e[i], r)))) ||
          e.splice(i, 1);
      return e;
    },
    fi = function (e) {
      return e._gsap || ta(zt(e))[0]._gsap;
    },
    Yu = function (e, t, r) {
      return (r = e[t]) && Te(r)
        ? e[t]()
        : (Xo(r) && e.getAttribute && e.getAttribute(t)) || r;
    },
    vt = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    Oe = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    be = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    Xi = function (e, t) {
      var r = t.charAt(0),
        i = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
      );
    },
    ah = function (e, t) {
      for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r; );
      return i < r;
    },
    Bs = function () {
      var e = Mr.length,
        t = Mr.slice(0),
        r,
        i;
      for (Qo = {}, Mr.length = 0, r = 0; r < e; r++)
        ((i = t[r]),
          i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0));
    },
    ra = function (e) {
      return !!(e._initted || e._startAt || e.add);
    },
    Xu = function (e, t, r, i) {
      (Mr.length && !Ke && Bs(),
        e.render(t, r, !!(Ke && t < 0 && ra(e))),
        Mr.length && !Ke && Bs());
    },
    Uu = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(ih).length < 2
        ? t
        : qe(e)
          ? e.trim()
          : e;
    },
    Gu = function (e) {
      return e;
    },
    Tt = function (e, t) {
      for (var r in t) r in e || (e[r] = t[r]);
      return e;
    },
    uh = function (e) {
      return function (t, r) {
        for (var i in r)
          i in t || (i === "duration" && e) || i === "ease" || (t[i] = r[i]);
      };
    },
    Ui = function (e, t) {
      for (var r in t) e[r] = t[r];
      return e;
    },
    $u = function n(e, t) {
      for (var r in t)
        r !== "__proto__" &&
          r !== "constructor" &&
          r !== "prototype" &&
          (e[r] = ir(t[r]) ? n(e[r] || (e[r] = {}), t[r]) : t[r]);
      return e;
    },
    zs = function (e, t) {
      var r = {},
        i;
      for (i in e) i in t || (r[i] = e[i]);
      return r;
    },
    Pn = function (e) {
      var t = e.parent || we,
        r = e.keyframes ? uh(tt(e.keyframes)) : Tt;
      if (gt(e.inherit))
        for (; t; ) (r(e, t.vars.defaults), (t = t.parent || t._dp));
      return e;
    },
    lh = function (e, t) {
      for (var r = e.length, i = r === t.length; i && r-- && e[r] === t[r]; );
      return r < 0;
    },
    ju = function (e, t, r, i, s) {
      var o = e[i],
        a;
      if (s) for (a = t[s]; o && o[s] > a; ) o = o._prev;
      return (
        o
          ? ((t._next = o._next), (o._next = t))
          : ((t._next = e[r]), (e[r] = t)),
        t._next ? (t._next._prev = t) : (e[i] = t),
        (t._prev = o),
        (t.parent = t._dp = e),
        t
      );
    },
    Hs = function (e, t, r, i) {
      (r === void 0 && (r = "_first"), i === void 0 && (i = "_last"));
      var s = t._prev,
        o = t._next;
      (s ? (s._next = o) : e[r] === t && (e[r] = o),
        o ? (o._prev = s) : e[i] === t && (e[i] = s),
        (t._next = t._prev = t.parent = null));
    },
    Ir = function (e, t) {
      (e.parent &&
        (!t || e.parent.autoRemoveChildren) &&
        e.parent.remove &&
        e.parent.remove(e),
        (e._act = 0));
    },
    hi = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var r = e; r; ) ((r._dirty = 1), (r = r.parent));
      return e;
    },
    ch = function (e) {
      for (var t = e.parent; t && t.parent; )
        ((t._dirty = 1), t.totalDuration(), (t = t.parent));
      return e;
    },
    ia = function (e, t, r, i) {
      return (
        e._startAt &&
        (Ke
          ? e._startAt.revert(Is)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, i))
      );
    },
    fh = function n(e) {
      return !e || (e._ts && n(e.parent));
    },
    Ku = function (e) {
      return e._repeat ? Gi(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    Gi = function (e, t) {
      var r = Math.floor((e = be(e / t)));
      return e && r === e ? r - 1 : r;
    },
    Vs = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    Ws = function (e) {
      return (e._end = be(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || de) || 0),
      ));
    },
    qs = function (e, t) {
      var r = e._dp;
      return (
        r &&
          r.smoothChildTiming &&
          e._ts &&
          ((e._start = be(
            r._time -
              (e._ts > 0
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts),
          )),
          Ws(e),
          r._dirty || hi(r, e)),
        e
      );
    },
    Zu = function (e, t) {
      var r;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((r = Vs(e.rawTime(), t)),
          (!t._dur || kn(0, t.totalDuration(), r) - t._tTime > de) &&
            t.render(r, !0)),
        hi(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (r = e; r._dp; )
            (r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp));
        e._zTime = -de;
      }
    },
    sr = function (e, t, r, i) {
      return (
        t.parent && Ir(t),
        (t._start = be(
          (mr(r) ? r : r || e !== we ? Bt(e, r, t) : e._time) + t._delay,
        )),
        (t._end = be(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0),
        )),
        ju(e, t, "_first", "_last", e._sort ? "_start" : 0),
        na(t) || (e._recent = t),
        i || Zu(e, t),
        e._ts < 0 && qs(e, e._tTime),
        e
      );
    },
    Qu = function (e, t) {
      return (
        (xt.ScrollTrigger || Ko("scrollTrigger", t)) &&
        xt.ScrollTrigger.create(t, e)
      );
    },
    Ju = function (e, t, r, i, s) {
      if ((da(e, t, s), !e._initted)) return 1;
      if (
        !r &&
        e._pt &&
        !Ke &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        Wu !== Ft.frame
      )
        return (Mr.push(e), (e._lazy = [s, i]), 1);
    },
    hh = function n(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t));
    },
    na = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    dh = function (e, t, r, i) {
      var s = e.ratio,
        o =
          t < 0 ||
          (!t &&
            ((!e._start && hh(e) && !(!e._initted && na(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !na(e))))
            ? 0
            : 1,
        a = e._rDelay,
        u = 0,
        l,
        c,
        p;
      if (
        (a &&
          e._repeat &&
          ((u = kn(0, e._tDur, t)),
          (c = Gi(u, a)),
          e._yoyo && c & 1 && (o = 1 - o),
          c !== Gi(e._tTime, a) &&
            ((s = 1 - o),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        o !== s || Ke || i || e._zTime === de || (!t && e._zTime))
      ) {
        if (!e._initted && Ju(e, t, i, r, u)) return;
        for (
          p = e._zTime,
            e._zTime = t || (r ? de : 0),
            r || (r = t && !p),
            e.ratio = o,
            e._from && (o = 1 - o),
            e._time = 0,
            e._tTime = u,
            l = e._pt;
          l;
        )
          (l.r(o, l.d), (l = l._next));
        (t < 0 && ia(e, t, r, !0),
          e._onUpdate && !r && At(e, "onUpdate"),
          u && e._repeat && !r && e.parent && At(e, "onRepeat"),
          (t >= e._tDur || t < 0) &&
            e.ratio === o &&
            (o && Ir(e, 1),
            !r &&
              !Ke &&
              (At(e, o ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom())));
      } else e._zTime || (e._zTime = t);
    },
    ph = function (e, t, r) {
      var i;
      if (r > t)
        for (i = e._first; i && i._start <= r; ) {
          if (i.data === "isPause" && i._start > t) return i;
          i = i._next;
        }
      else
        for (i = e._last; i && i._start >= r; ) {
          if (i.data === "isPause" && i._start < t) return i;
          i = i._prev;
        }
    },
    $i = function (e, t, r, i) {
      var s = e._repeat,
        o = be(t) || 0,
        a = e._tTime / e._tDur;
      return (
        a && !i && (e._time *= o / e._dur),
        (e._dur = o),
        (e._tDur = s ? (s < 0 ? 1e10 : be(o * (s + 1) + e._rDelay * s)) : o),
        a > 0 && !i && qs(e, (e._tTime = e._tDur * a)),
        e.parent && Ws(e),
        r || hi(e.parent, e),
        e
      );
    },
    el = function (e) {
      return e instanceof lt ? hi(e) : $i(e, e._dur);
    },
    _h = { _start: 0, endTime: Fn, totalDuration: Fn },
    Bt = function n(e, t, r) {
      var i = e.labels,
        s = e._recent || _h,
        o = e.duration() >= Nt ? s.endTime(!1) : e._dur,
        a,
        u,
        l;
      return qe(t) && (isNaN(t) || t in i)
        ? ((u = t.charAt(0)),
          (l = t.substr(-1) === "%"),
          (a = t.indexOf("=")),
          u === "<" || u === ">"
            ? (a >= 0 && (t = t.replace(/=/, "")),
              (u === "<" ? s._start : s.endTime(s._repeat >= 0)) +
                (parseFloat(t.substr(1)) || 0) *
                  (l ? (a < 0 ? s : r).totalDuration() / 100 : 1))
            : a < 0
              ? (t in i || (i[t] = o), i[t])
              : ((u = parseFloat(t.charAt(a - 1) + t.substr(a + 1))),
                l && r && (u = (u / 100) * (tt(r) ? r[0] : r).totalDuration()),
                a > 1 ? n(e, t.substr(0, a - 1), r) + u : o + u))
        : t == null
          ? o
          : +t;
    },
    On = function (e, t, r) {
      var i = mr(t[1]),
        s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[s],
        a,
        u;
      if ((i && (o.duration = t[1]), (o.parent = r), e)) {
        for (a = o, u = r; u && !("immediateRender" in a); )
          ((a = u.vars.defaults || {}), (u = gt(u.vars.inherit) && u.parent));
        ((o.immediateRender = gt(a.immediateRender)),
          e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]));
      }
      return new Me(t[0], o, t[s + 1]);
    },
    Nr = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    kn = function (e, t, r) {
      return r < e ? e : r > t ? t : r;
    },
    rt = function (e, t) {
      return !qe(e) || !(t = nh.exec(e)) ? "" : t[1];
    },
    gh = function (e, t, r) {
      return Nr(r, function (i) {
        return kn(e, t, i);
      });
    },
    sa = [].slice,
    tl = function (e, t) {
      return (
        e &&
        ir(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && ir(e[0]))) &&
        !e.nodeType &&
        e !== nr
      );
    },
    vh = function (e, t, r) {
      return (
        r === void 0 && (r = []),
        e.forEach(function (i) {
          var s;
          return (qe(i) && !t) || tl(i, 1)
            ? (s = r).push.apply(s, zt(i))
            : r.push(i);
        }) || r
      );
    },
    zt = function (e, t, r) {
      return me && !t && me.selector
        ? me.selector(e)
        : qe(e) && !r && ($o || !Ki())
          ? sa.call((t || jo).querySelectorAll(e), 0)
          : tt(e)
            ? vh(e, r)
            : tl(e)
              ? sa.call(e, 0)
              : e
                ? [e]
                : [];
    },
    oa = function (e) {
      return (
        (e = zt(e)[0] || An("Invalid scope") || {}),
        function (t) {
          var r = e.current || e.nativeElement || e;
          return zt(
            t,
            r.querySelectorAll
              ? r
              : r === e
                ? An("Invalid scope") || jo.createElement("div")
                : e,
          );
        }
      );
    },
    rl = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    il = function (e) {
      if (Te(e)) return e;
      var t = ir(e) ? e : { each: e },
        r = di(t.ease),
        i = t.from || 0,
        s = parseFloat(t.base) || 0,
        o = {},
        a = i > 0 && i < 1,
        u = isNaN(i) || a,
        l = t.axis,
        c = i,
        p = i;
      return (
        qe(i)
          ? (c = p = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
          : !a && u && ((c = i[0]), (p = i[1])),
        function (h, d, _) {
          var f = (_ || t).length,
            g = o[f],
            D,
            m,
            E,
            w,
            b,
            S,
            y,
            A,
            T;
          if (!g) {
            if (((T = t.grid === "auto" ? 0 : (t.grid || [1, Nt])[1]), !T)) {
              for (
                y = -Nt;
                y < (y = _[T++].getBoundingClientRect().left) && T < f;
              );
              T < f && T--;
            }
            for (
              g = o[f] = [],
                D = u ? Math.min(T, f) * c - 0.5 : i % T,
                m = T === Nt ? 0 : u ? (f * p) / T - 0.5 : (i / T) | 0,
                y = 0,
                A = Nt,
                S = 0;
              S < f;
              S++
            )
              ((E = (S % T) - D),
                (w = m - ((S / T) | 0)),
                (g[S] = b =
                  l ? Math.abs(l === "y" ? w : E) : Lu(E * E + w * w)),
                b > y && (y = b),
                b < A && (A = b));
            (i === "random" && rl(g),
              (g.max = y - A),
              (g.min = A),
              (g.v = f =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (T > f
                      ? f - 1
                      : l
                        ? l === "y"
                          ? f / T
                          : T
                        : Math.max(T, f / T)) ||
                  0) * (i === "edges" ? -1 : 1)),
              (g.b = f < 0 ? s - f : s),
              (g.u = rt(t.amount || t.each) || 0),
              (r = r && f < 0 ? _l(r) : r));
          }
          return (
            (f = (g[h] - g.min) / g.max || 0),
            be(g.b + (r ? r(f) : f) * g.v) + g.u
          );
        }
      );
    },
    aa = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (r) {
        var i = be(Math.round(parseFloat(r) / e) * e * t);
        return (i - (i % 1)) / t + (mr(r) ? 0 : rt(r));
      };
    },
    nl = function (e, t) {
      var r = tt(e),
        i,
        s;
      return (
        !r &&
          ir(e) &&
          ((i = r = e.radius || Nt),
          e.values
            ? ((e = zt(e.values)), (s = !mr(e[0])) && (i *= i))
            : (e = aa(e.increment))),
        Nr(
          t,
          r
            ? Te(e)
              ? function (o) {
                  return ((s = e(o)), Math.abs(s - o) <= i ? s : o);
                }
              : function (o) {
                  for (
                    var a = parseFloat(s ? o.x : o),
                      u = parseFloat(s ? o.y : 0),
                      l = Nt,
                      c = 0,
                      p = e.length,
                      h,
                      d;
                    p--;
                  )
                    (s
                      ? ((h = e[p].x - a),
                        (d = e[p].y - u),
                        (h = h * h + d * d))
                      : (h = Math.abs(e[p] - a)),
                      h < l && ((l = h), (c = p)));
                  return (
                    (c = !i || l <= i ? e[c] : o),
                    s || c === o || mr(o) ? c : c + rt(o)
                  );
                }
            : aa(e),
        )
      );
    },
    sl = function (e, t, r, i) {
      return Nr(tt(e) ? !t : r === !0 ? !!(r = 0) : !i, function () {
        return tt(e)
          ? e[~~(Math.random() * e.length)]
          : (r = r || 1e-5) &&
              (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (e - r / 2 + Math.random() * (t - e + r * 0.99)) / r,
                ) *
                  r *
                  i,
              ) / i;
      });
    },
    Dh = function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (i) {
        return t.reduce(function (s, o) {
          return o(s);
        }, i);
      };
    },
    mh = function (e, t) {
      return function (r) {
        return e(parseFloat(r)) + (t || rt(r));
      };
    },
    yh = function (e, t, r) {
      return al(e, t, 0, 1, r);
    },
    ol = function (e, t, r) {
      return Nr(r, function (i) {
        return e[~~t(i)];
      });
    },
    Eh = function n(e, t, r) {
      var i = t - e;
      return tt(e)
        ? ol(e, n(0, e.length), t)
        : Nr(r, function (s) {
            return ((i + ((s - e) % i)) % i) + e;
          });
    },
    wh = function n(e, t, r) {
      var i = t - e,
        s = i * 2;
      return tt(e)
        ? ol(e, n(0, e.length - 1), t)
        : Nr(r, function (o) {
            return (
              (o = (s + ((o - e) % s)) % s || 0),
              e + (o > i ? s - o : o)
            );
          });
    },
    Rn = function (e) {
      return e.replace(th, function (t) {
        var r = t.indexOf("[") + 1,
          i = t.substring(r || 7, r ? t.indexOf("]") : t.length - 1).split(rh);
        return sl(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5);
      });
    },
    al = function (e, t, r, i, s) {
      var o = t - e,
        a = i - r;
      return Nr(s, function (u) {
        return r + (((u - e) / o) * a || 0);
      });
    },
    bh = function n(e, t, r, i) {
      var s = isNaN(e + t)
        ? 0
        : function (d) {
            return (1 - d) * e + d * t;
          };
      if (!s) {
        var o = qe(e),
          a = {},
          u,
          l,
          c,
          p,
          h;
        if ((r === !0 && (i = 1) && (r = null), o))
          ((e = { p: e }), (t = { p: t }));
        else if (tt(e) && !tt(t)) {
          for (c = [], p = e.length, h = p - 2, l = 1; l < p; l++)
            c.push(n(e[l - 1], e[l]));
          (p--,
            (s = function (_) {
              _ *= p;
              var f = Math.min(h, ~~_);
              return c[f](_ - f);
            }),
            (r = t));
        } else i || (e = Ui(tt(e) ? [] : {}, e));
        if (!c) {
          for (u in t) fa.call(a, e, u, "get", t[u]);
          s = function (_) {
            return ga(_, a) || (o ? e.p : e);
          };
        }
      }
      return Nr(r, s);
    },
    ul = function (e, t, r) {
      var i = e.labels,
        s = Nt,
        o,
        a,
        u;
      for (o in i)
        ((a = i[o] - t),
          a < 0 == !!r && a && s > (a = Math.abs(a)) && ((u = o), (s = a)));
      return u;
    },
    At = function (e, t, r) {
      var i = e.vars,
        s = i[t],
        o = me,
        a = e._ctx,
        u,
        l,
        c;
      if (s)
        return (
          (u = i[t + "Params"]),
          (l = i.callbackScope || e),
          r && Mr.length && Bs(),
          a && (me = a),
          (c = u ? s.apply(l, u) : s.call(l)),
          (me = o),
          c
        );
    },
    Ln = function (e) {
      return (
        Ir(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!Ke),
        e.progress() < 1 && At(e, "onInterrupt"),
        e
      );
    },
    ji,
    ll = [],
    cl = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), Uo() || e.headless)) {
          var t = e.name,
            r = Te(e),
            i =
              t && !r && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            s = {
              init: Fn,
              render: ga,
              add: fa,
              kill: zh,
              modifier: Bh,
              rawVars: 0,
            },
            o = {
              targetTest: 0,
              get: 0,
              getSetter: _a,
              aliases: {},
              register: 0,
            };
          if ((Ki(), e !== i)) {
            if (St[t]) return;
            (Tt(i, Tt(zs(e, s), o)),
              Ui(i.prototype, Ui(s, zs(e, o))),
              (St[(i.prop = t)] = i),
              e.targetTest && (Ns.push(i), (Zo[t] = 1)),
              (t =
                (t === "css"
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"));
          }
          (Vu(t, i), e.register && e.register(mt, i, Dt));
        } else ll.push(e);
    },
    pe = 255,
    Mn = {
      aqua: [0, pe, pe],
      lime: [0, pe, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, pe],
      navy: [0, 0, 128],
      white: [pe, pe, pe],
      olive: [128, 128, 0],
      yellow: [pe, pe, 0],
      orange: [pe, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [pe, 0, 0],
      pink: [pe, 192, 203],
      cyan: [0, pe, pe],
      transparent: [pe, pe, pe, 0],
    },
    ua = function (e, t, r) {
      return (
        (e += e < 0 ? 1 : e > 1 ? -1 : 0),
        ((e * 6 < 1
          ? t + (r - t) * e * 6
          : e < 0.5
            ? r
            : e * 3 < 2
              ? t + (r - t) * (2 / 3 - e) * 6
              : t) *
          pe +
          0.5) |
          0
      );
    },
    fl = function (e, t, r) {
      var i = e ? (mr(e) ? [e >> 16, (e >> 8) & pe, e & pe] : 0) : Mn.black,
        s,
        o,
        a,
        u,
        l,
        c,
        p,
        h,
        d,
        _;
      if (!i) {
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Mn[e]))
          i = Mn[e];
        else if (e.charAt(0) === "#") {
          if (
            (e.length < 6 &&
              ((s = e.charAt(1)),
              (o = e.charAt(2)),
              (a = e.charAt(3)),
              (e =
                "#" +
                s +
                s +
                o +
                o +
                a +
                a +
                (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
            e.length === 9)
          )
            return (
              (i = parseInt(e.substr(1, 6), 16)),
              [i >> 16, (i >> 8) & pe, i & pe, parseInt(e.substr(7), 16) / 255]
            );
          ((e = parseInt(e.substr(1), 16)),
            (i = [e >> 16, (e >> 8) & pe, e & pe]));
        } else if (e.substr(0, 3) === "hsl") {
          if (((i = _ = e.match(Iu)), !t))
            ((u = (+i[0] % 360) / 360),
              (l = +i[1] / 100),
              (c = +i[2] / 100),
              (o = c <= 0.5 ? c * (l + 1) : c + l - c * l),
              (s = c * 2 - o),
              i.length > 3 && (i[3] *= 1),
              (i[0] = ua(u + 1 / 3, s, o)),
              (i[1] = ua(u, s, o)),
              (i[2] = ua(u - 1 / 3, s, o)));
          else if (~e.indexOf("="))
            return ((i = e.match(Nu)), r && i.length < 4 && (i[3] = 1), i);
        } else i = e.match(Iu) || Mn.transparent;
        i = i.map(Number);
      }
      return (
        t &&
          !_ &&
          ((s = i[0] / pe),
          (o = i[1] / pe),
          (a = i[2] / pe),
          (p = Math.max(s, o, a)),
          (h = Math.min(s, o, a)),
          (c = (p + h) / 2),
          p === h
            ? (u = l = 0)
            : ((d = p - h),
              (l = c > 0.5 ? d / (2 - p - h) : d / (p + h)),
              (u =
                p === s
                  ? (o - a) / d + (o < a ? 6 : 0)
                  : p === o
                    ? (a - s) / d + 2
                    : (s - o) / d + 4),
              (u *= 60)),
          (i[0] = ~~(u + 0.5)),
          (i[1] = ~~(l * 100 + 0.5)),
          (i[2] = ~~(c * 100 + 0.5))),
        r && i.length < 4 && (i[3] = 1),
        i
      );
    },
    hl = function (e) {
      var t = [],
        r = [],
        i = -1;
      return (
        e.split(Br).forEach(function (s) {
          var o = s.match(Yi) || [];
          (t.push.apply(t, o), r.push((i += o.length + 1)));
        }),
        (t.c = r),
        t
      );
    },
    dl = function (e, t, r) {
      var i = "",
        s = (e + i).match(Br),
        o = t ? "hsla(" : "rgba(",
        a = 0,
        u,
        l,
        c,
        p;
      if (!s) return e;
      if (
        ((s = s.map(function (h) {
          return (
            (h = fl(h, t, 1)) &&
            o +
              (t
                ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3]
                : h.join(",")) +
              ")"
          );
        })),
        r && ((c = hl(e)), (u = r.c), u.join(i) !== c.c.join(i)))
      )
        for (l = e.replace(Br, "1").split(Yi), p = l.length - 1; a < p; a++)
          i +=
            l[a] +
            (~u.indexOf(a)
              ? s.shift() || o + "0,0,0,0)"
              : (c.length ? c : s.length ? s : r).shift());
      if (!l)
        for (l = e.split(Br), p = l.length - 1; a < p; a++) i += l[a] + s[a];
      return i + l[p];
    },
    Br = (function () {
      var n =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in Mn) n += "|" + e + "\\b";
      return new RegExp(n + ")", "gi");
    })(),
    Ch = /hsl[a]?\(/,
    pl = function (e) {
      var t = e.join(" "),
        r;
      if (((Br.lastIndex = 0), Br.test(t)))
        return (
          (r = Ch.test(t)),
          (e[1] = dl(e[1], r)),
          (e[0] = dl(e[0], r, hl(e[1]))),
          !0
        );
    },
    In,
    Ft = (function () {
      var n = Date.now,
        e = 500,
        t = 33,
        r = n(),
        i = r,
        s = 1e3 / 240,
        o = s,
        a = [],
        u,
        l,
        c,
        p,
        h,
        d,
        _ = function f(g) {
          var D = n() - i,
            m = g === !0,
            E,
            w,
            b,
            S;
          if (
            ((D > e || D < 0) && (r += D - t),
            (i += D),
            (b = i - r),
            (E = b - o),
            (E > 0 || m) &&
              ((S = ++p.frame),
              (h = b - p.time * 1e3),
              (p.time = b = b / 1e3),
              (o += E + (E >= s ? 4 : s - E)),
              (w = 1)),
            m || (u = l(f)),
            w)
          )
            for (d = 0; d < a.length; d++) a[d](b, h, S, g);
        };
      return (
        (p = {
          time: 0,
          frame: 0,
          tick: function () {
            _(!0);
          },
          deltaRatio: function (g) {
            return h / (1e3 / (g || 60));
          },
          wake: function () {
            zu &&
              (!$o &&
                Uo() &&
                ((nr = $o = window),
                (jo = nr.document || {}),
                (xt.gsap = mt),
                (nr.gsapVersions || (nr.gsapVersions = [])).push(mt.version),
                Hu(Ms || nr.GreenSockGlobals || (!nr.gsap && nr) || {}),
                ll.forEach(cl)),
              (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
              u && p.sleep(),
              (l =
                c ||
                function (g) {
                  return setTimeout(g, (o - p.time * 1e3 + 1) | 0);
                }),
              (In = 1),
              _(2));
          },
          sleep: function () {
            ((c ? cancelAnimationFrame : clearTimeout)(u), (In = 0), (l = Fn));
          },
          lagSmoothing: function (g, D) {
            ((e = g || 1 / 0), (t = Math.min(D || 33, e)));
          },
          fps: function (g) {
            ((s = 1e3 / (g || 240)), (o = p.time * 1e3 + s));
          },
          add: function (g, D, m) {
            var E = D
              ? function (w, b, S, y) {
                  (g(w, b, S, y), p.remove(E));
                }
              : g;
            return (p.remove(g), a[m ? "unshift" : "push"](E), Ki(), E);
          },
          remove: function (g, D) {
            ~(D = a.indexOf(g)) && a.splice(D, 1) && d >= D && d--;
          },
          _listeners: a,
        }),
        p
      );
    })(),
    Ki = function () {
      return !In && Ft.wake();
    },
    ae = {},
    xh = /^[\d.\-M][\d.\-,\s]/,
    Sh = /["']/g,
    Th = function (e) {
      for (
        var t = {},
          r = e.substr(1, e.length - 3).split(":"),
          i = r[0],
          s = 1,
          o = r.length,
          a,
          u,
          l;
        s < o;
        s++
      )
        ((u = r[s]),
          (a = s !== o - 1 ? u.lastIndexOf(",") : u.length),
          (l = u.substr(0, a)),
          (t[i] = isNaN(l) ? l.replace(Sh, "").trim() : +l),
          (i = u.substr(a + 1).trim()));
      return t;
    },
    Ah = function (e) {
      var t = e.indexOf("(") + 1,
        r = e.indexOf(")"),
        i = e.indexOf("(", t);
      return e.substring(t, ~i && i < r ? e.indexOf(")", r + 1) : r);
    },
    Fh = function (e) {
      var t = (e + "").split("("),
        r = ae[t[0]];
      return r && t.length > 1 && r.config
        ? r.config.apply(
            null,
            ~e.indexOf("{") ? [Th(t[1])] : Ah(e).split(",").map(Uu),
          )
        : ae._CE && xh.test(e)
          ? ae._CE("", e)
          : r;
    },
    _l = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    gl = function n(e, t) {
      for (var r = e._first, i; r; )
        (r instanceof lt
          ? n(r, t)
          : r.vars.yoyoEase &&
            (!r._yoyo || !r._repeat) &&
            r._yoyo !== t &&
            (r.timeline
              ? n(r.timeline, t)
              : ((i = r._ease),
                (r._ease = r._yEase),
                (r._yEase = i),
                (r._yoyo = t))),
          (r = r._next));
    },
    di = function (e, t) {
      return (e && (Te(e) ? e : ae[e] || Fh(e))) || t;
    },
    pi = function (e, t, r, i) {
      (r === void 0 &&
        (r = function (u) {
          return 1 - t(1 - u);
        }),
        i === void 0 &&
          (i = function (u) {
            return u < 0.5 ? t(u * 2) / 2 : 1 - t((1 - u) * 2) / 2;
          }));
      var s = { easeIn: t, easeOut: r, easeInOut: i },
        o;
      return (
        vt(e, function (a) {
          ((ae[a] = xt[a] = s), (ae[(o = a.toLowerCase())] = r));
          for (var u in s)
            ae[
              o + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")
            ] = ae[a + "." + u] = s[u];
        }),
        s
      );
    },
    vl = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    la = function n(e, t, r) {
      var i = t >= 1 ? t : 1,
        s = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        o = (s / Yo) * (Math.asin(1 / i) || 0),
        a = function (c) {
          return c === 1 ? 1 : i * Math.pow(2, -10 * c) * eh((c - o) * s) + 1;
        },
        u =
          e === "out"
            ? a
            : e === "in"
              ? function (l) {
                  return 1 - a(1 - l);
                }
              : vl(a);
      return (
        (s = Yo / s),
        (u.config = function (l, c) {
          return n(e, l, c);
        }),
        u
      );
    },
    ca = function n(e, t) {
      t === void 0 && (t = 1.70158);
      var r = function (o) {
          return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
        },
        i =
          e === "out"
            ? r
            : e === "in"
              ? function (s) {
                  return 1 - r(1 - s);
                }
              : vl(r);
      return (
        (i.config = function (s) {
          return n(e, s);
        }),
        i
      );
    };
  (vt("Linear,Quad,Cubic,Quart,Quint,Strong", function (n, e) {
    var t = e < 5 ? e + 1 : e;
    pi(
      n + ",Power" + (t - 1),
      e
        ? function (r) {
            return Math.pow(r, t);
          }
        : function (r) {
            return r;
          },
      function (r) {
        return 1 - Math.pow(1 - r, t);
      },
      function (r) {
        return r < 0.5
          ? Math.pow(r * 2, t) / 2
          : 1 - Math.pow((1 - r) * 2, t) / 2;
      },
    );
  }),
    (ae.Linear.easeNone = ae.none = ae.Linear.easeIn),
    pi("Elastic", la("in"), la("out"), la()),
    (function (n, e) {
      var t = 1 / e,
        r = 2 * t,
        i = 2.5 * t,
        s = function (a) {
          return a < t
            ? n * a * a
            : a < r
              ? n * Math.pow(a - 1.5 / e, 2) + 0.75
              : a < i
                ? n * (a -= 2.25 / e) * a + 0.9375
                : n * Math.pow(a - 2.625 / e, 2) + 0.984375;
        };
      pi(
        "Bounce",
        function (o) {
          return 1 - s(1 - o);
        },
        s,
      );
    })(7.5625, 2.75),
    pi("Expo", function (n) {
      return Math.pow(2, 10 * (n - 1)) * n + n * n * n * n * n * n * (1 - n);
    }),
    pi("Circ", function (n) {
      return -(Lu(1 - n * n) - 1);
    }),
    pi("Sine", function (n) {
      return n === 1 ? 1 : -Jf(n * Zf) + 1;
    }),
    pi("Back", ca("in"), ca("out"), ca()),
    (ae.SteppedEase =
      ae.steps =
      xt.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var r = 1 / e,
              i = e + (t ? 0 : 1),
              s = t ? 1 : 0,
              o = 1 - de;
            return function (a) {
              return (((i * kn(0, o, a)) | 0) + s) * r;
            };
          },
        }),
    (qi.ease = ae["quad.out"]),
    vt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (n) {
        return (ea += n + "," + n + "Params,");
      },
    ));
  var Dl = function (e, t) {
      ((this.id = Qf++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : Yu),
        (this.set = t ? t.getSetter : _a));
    },
    Nn = (function () {
      function n(t) {
        ((this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          $i(this, +t.duration, 1, 1),
          (this.data = t.data),
          me && ((this._ctx = me), me.data.push(this)),
          In || Ft.wake());
      }
      var e = n.prototype;
      return (
        (e.delay = function (r) {
          return r || r === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + r - this._delay),
              (this._delay = r),
              this)
            : this._delay;
        }),
        (e.duration = function (r) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r,
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (r) {
          return arguments.length
            ? ((this._dirty = 0),
              $i(
                this,
                this._repeat < 0
                  ? r
                  : (r - this._repeat * this._rDelay) / (this._repeat + 1),
              ))
            : this._tDur;
        }),
        (e.totalTime = function (r, i) {
          if ((Ki(), !arguments.length)) return this._tTime;
          var s = this._dp;
          if (s && s.smoothChildTiming && this._ts) {
            for (
              qs(this, r), !s._dp || s.parent || Zu(s, this);
              s && s.parent;
            )
              (s.parent._time !==
                s._start +
                  (s._ts >= 0
                    ? s._tTime / s._ts
                    : (s.totalDuration() - s._tTime) / -s._ts) &&
                s.totalTime(s._tTime, !0),
                (s = s.parent));
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && r < this._tDur) ||
                (this._ts < 0 && r > 0) ||
                (!this._tDur && !r)) &&
              sr(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== r ||
              (!this._dur && !i) ||
              (this._initted && Math.abs(this._zTime) === de) ||
              (!this._initted && this._dur && r) ||
              (!r && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = r), Xu(this, r, i)),
            this
          );
        }),
        (e.time = function (r, i) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), r + Ku(this)) %
                  (this._dur + this._rDelay) || (r ? this._dur : 0),
                i,
              )
            : this._time;
        }),
        (e.totalProgress = function (r, i) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * r, i)
            : this.totalDuration()
              ? Math.min(1, this._tTime / this._tDur)
              : this.rawTime() >= 0 && this._initted
                ? 1
                : 0;
        }),
        (e.progress = function (r, i) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
                  Ku(this),
                i,
              )
            : this.duration()
              ? Math.min(1, this._time / this._dur)
              : this.rawTime() > 0
                ? 1
                : 0;
        }),
        (e.iteration = function (r, i) {
          var s = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (r - 1) * s, i)
            : this._repeat
              ? Gi(this._tTime, s) + 1
              : 1;
        }),
        (e.timeScale = function (r, i) {
          if (!arguments.length) return this._rts === -de ? 0 : this._rts;
          if (this._rts === r) return this;
          var s =
            this.parent && this._ts ? Vs(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +r || 0),
            (this._ts = this._ps || r === -de ? 0 : this._rts),
            this.totalTime(
              kn(-Math.abs(this._delay), this.totalDuration(), s),
              i !== !1,
            ),
            Ws(this),
            ch(this)
          );
        }),
        (e.paused = function (r) {
          return arguments.length
            ? (this._ps !== r &&
                ((this._ps = r),
                r
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (Ki(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== de &&
                        (this._tTime -= de),
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (r) {
          if (arguments.length) {
            this._start = be(r);
            var i = this.parent || this._dp;
            return (
              i &&
                (i._sort || !this.parent) &&
                sr(i, this, this._start - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (r) {
          return (
            this._start +
            (gt(r) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (e.rawTime = function (r) {
          var i = this.parent || this._dp;
          return i
            ? r &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
                ? Vs(i.rawTime(r), this)
                : this._tTime
            : this._tTime;
        }),
        (e.revert = function (r) {
          r === void 0 && (r = oh);
          var i = Ke;
          return (
            (Ke = r),
            ra(this) &&
              (this.timeline && this.timeline.revert(r),
              this.totalTime(-0.01, r.suppressEvents)),
            this.data !== "nested" && r.kill !== !1 && this.kill(),
            (Ke = i),
            this
          );
        }),
        (e.globalTime = function (r) {
          for (var i = this, s = arguments.length ? r : i.rawTime(); i; )
            ((s = i._start + s / (Math.abs(i._ts) || 1)), (i = i._dp));
          return !this.parent && this._sat ? this._sat.globalTime(r) : s;
        }),
        (e.repeat = function (r) {
          return arguments.length
            ? ((this._repeat = r === 1 / 0 ? -2 : r), el(this))
            : this._repeat === -2
              ? 1 / 0
              : this._repeat;
        }),
        (e.repeatDelay = function (r) {
          if (arguments.length) {
            var i = this._time;
            return ((this._rDelay = r), el(this), i ? this.time(i) : this);
          }
          return this._rDelay;
        }),
        (e.yoyo = function (r) {
          return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
        }),
        (e.seek = function (r, i) {
          return this.totalTime(Bt(this, r), gt(i));
        }),
        (e.restart = function (r, i) {
          return (
            this.play().totalTime(r ? -this._delay : 0, gt(i)),
            this._dur || (this._zTime = -de),
            this
          );
        }),
        (e.play = function (r, i) {
          return (r != null && this.seek(r, i), this.reversed(!1).paused(!1));
        }),
        (e.reverse = function (r, i) {
          return (
            r != null && this.seek(r || this.totalDuration(), i),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (r, i) {
          return (r != null && this.seek(r, i), this.paused(!0));
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (r) {
          return arguments.length
            ? (!!r !== this.reversed() &&
                this.timeScale(-this._rts || (r ? -de : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return ((this._initted = this._act = 0), (this._zTime = -de), this);
        }),
        (e.isActive = function () {
          var r = this.parent || this._dp,
            i = this._start,
            s;
          return !!(
            !r ||
            (this._ts &&
              this._initted &&
              r.isActive() &&
              (s = r.rawTime(!0)) >= i &&
              s < this.endTime(!0) - de)
          );
        }),
        (e.eventCallback = function (r, i, s) {
          var o = this.vars;
          return arguments.length > 1
            ? (i
                ? ((o[r] = i),
                  s && (o[r + "Params"] = s),
                  r === "onUpdate" && (this._onUpdate = i))
                : delete o[r],
              this)
            : o[r];
        }),
        (e.then = function (r) {
          var i = this,
            s = i._prom;
          return new Promise(function (o) {
            var a = Te(r) ? r : Gu,
              u = function () {
                var c = i.then;
                ((i.then = null),
                  s && s(),
                  Te(a) && (a = a(i)) && (a.then || a === i) && (i.then = c),
                  o(a),
                  (i.then = c));
              };
            (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
            (!i._tTime && i._ts < 0)
              ? u()
              : (i._prom = u);
          });
        }),
        (e.kill = function () {
          Ln(this);
        }),
        n
      );
    })();
  Tt(Nn.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -de,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var lt = (function (n) {
    ci(e, n);
    function e(r, i) {
      var s;
      return (
        r === void 0 && (r = {}),
        (s = n.call(this, r) || this),
        (s.labels = {}),
        (s.smoothChildTiming = !!r.smoothChildTiming),
        (s.autoRemoveChildren = !!r.autoRemoveChildren),
        (s._sort = gt(r.sortChildren)),
        we && sr(r.parent || we, je(s), i),
        r.reversed && s.reverse(),
        r.paused && s.paused(!0),
        r.scrollTrigger && Qu(je(s), r.scrollTrigger),
        s
      );
    }
    var t = e.prototype;
    return (
      (t.to = function (i, s, o) {
        return (On(0, arguments, this), this);
      }),
      (t.from = function (i, s, o) {
        return (On(1, arguments, this), this);
      }),
      (t.fromTo = function (i, s, o, a) {
        return (On(2, arguments, this), this);
      }),
      (t.set = function (i, s, o) {
        return (
          (s.duration = 0),
          (s.parent = this),
          Pn(s).repeatDelay || (s.repeat = 0),
          (s.immediateRender = !!s.immediateRender),
          new Me(i, s, Bt(this, o), 1),
          this
        );
      }),
      (t.call = function (i, s, o) {
        return sr(this, Me.delayedCall(0, i, s), o);
      }),
      (t.staggerTo = function (i, s, o, a, u, l, c) {
        return (
          (o.duration = s),
          (o.stagger = o.stagger || a),
          (o.onComplete = l),
          (o.onCompleteParams = c),
          (o.parent = this),
          new Me(i, o, Bt(this, u)),
          this
        );
      }),
      (t.staggerFrom = function (i, s, o, a, u, l, c) {
        return (
          (o.runBackwards = 1),
          (Pn(o).immediateRender = gt(o.immediateRender)),
          this.staggerTo(i, s, o, a, u, l, c)
        );
      }),
      (t.staggerFromTo = function (i, s, o, a, u, l, c, p) {
        return (
          (a.startAt = o),
          (Pn(a).immediateRender = gt(a.immediateRender)),
          this.staggerTo(i, s, a, u, l, c, p)
        );
      }),
      (t.render = function (i, s, o) {
        var a = this._time,
          u = this._dirty ? this.totalDuration() : this._tDur,
          l = this._dur,
          c = i <= 0 ? 0 : be(i),
          p = this._zTime < 0 != i < 0 && (this._initted || !l),
          h,
          d,
          _,
          f,
          g,
          D,
          m,
          E,
          w,
          b,
          S,
          y;
        if (
          (this !== we && c > u && i >= 0 && (c = u),
          c !== this._tTime || o || p)
        ) {
          if (
            (a !== this._time &&
              l &&
              ((c += this._time - a), (i += this._time - a)),
            (h = c),
            (w = this._start),
            (E = this._ts),
            (D = !E),
            p && (l || (a = this._zTime), (i || !s) && (this._zTime = i)),
            this._repeat)
          ) {
            if (
              ((S = this._yoyo),
              (g = l + this._rDelay),
              this._repeat < -1 && i < 0)
            )
              return this.totalTime(g * 100 + i, s, o);
            if (
              ((h = be(c % g)),
              c === u
                ? ((f = this._repeat), (h = l))
                : ((b = be(c / g)),
                  (f = ~~b),
                  f && f === b && ((h = l), f--),
                  h > l && (h = l)),
              (b = Gi(this._tTime, g)),
              !a &&
                this._tTime &&
                b !== f &&
                this._tTime - b * g - this._dur <= 0 &&
                (b = f),
              S && f & 1 && ((h = l - h), (y = 1)),
              f !== b && !this._lock)
            ) {
              var A = S && b & 1,
                T = A === (S && f & 1);
              if (
                (f < b && (A = !A),
                (a = A ? 0 : c % l ? l : c),
                (this._lock = 1),
                (this.render(a || (y ? 0 : be(f * g)), s, !l)._lock = 0),
                (this._tTime = c),
                !s && this.parent && At(this, "onRepeat"),
                this.vars.repeatRefresh &&
                  !y &&
                  ((this.invalidate()._lock = 1), (b = f)),
                (a && a !== this._time) ||
                  D !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((l = this._dur),
                (u = this._tDur),
                T &&
                  ((this._lock = 2),
                  (a = A ? l : -1e-4),
                  this.render(a, !0),
                  this.vars.repeatRefresh && !y && this.invalidate()),
                (this._lock = 0),
                !this._ts && !D)
              )
                return this;
              gl(this, y);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((m = ph(this, be(a), be(h))), m && (c -= h - (h = m._start))),
            (this._tTime = c),
            (this._time = h),
            (this._act = !E),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = i),
              (a = 0)),
            !a &&
              c &&
              l &&
              !s &&
              !b &&
              (At(this, "onStart"), this._tTime !== c))
          )
            return this;
          if (h >= a && i >= 0)
            for (d = this._first; d; ) {
              if (
                ((_ = d._next), (d._act || h >= d._start) && d._ts && m !== d)
              ) {
                if (d.parent !== this) return this.render(i, s, o);
                if (
                  (d.render(
                    d._ts > 0
                      ? (h - d._start) * d._ts
                      : (d._dirty ? d.totalDuration() : d._tDur) +
                          (h - d._start) * d._ts,
                    s,
                    o,
                  ),
                  h !== this._time || (!this._ts && !D))
                ) {
                  ((m = 0), _ && (c += this._zTime = -de));
                  break;
                }
              }
              d = _;
            }
          else {
            d = this._last;
            for (var x = i < 0 ? i : h; d; ) {
              if (
                ((_ = d._prev), (d._act || x <= d._end) && d._ts && m !== d)
              ) {
                if (d.parent !== this) return this.render(i, s, o);
                if (
                  (d.render(
                    d._ts > 0
                      ? (x - d._start) * d._ts
                      : (d._dirty ? d.totalDuration() : d._tDur) +
                          (x - d._start) * d._ts,
                    s,
                    o || (Ke && ra(d)),
                  ),
                  h !== this._time || (!this._ts && !D))
                ) {
                  ((m = 0), _ && (c += this._zTime = x ? -de : de));
                  break;
                }
              }
              d = _;
            }
          }
          if (
            m &&
            !s &&
            (this.pause(),
            (m.render(h >= a ? 0 : -de)._zTime = h >= a ? 1 : -1),
            this._ts)
          )
            return ((this._start = w), Ws(this), this.render(i, s, o));
          (this._onUpdate && !s && At(this, "onUpdate", !0),
            ((c === u && this._tTime >= this.totalDuration()) || (!c && a)) &&
              (w === this._start || Math.abs(E) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((i || !l) &&
                  ((c === u && this._ts > 0) || (!c && this._ts < 0)) &&
                  Ir(this, 1),
                !s &&
                  !(i < 0 && !a) &&
                  (c || a || !u) &&
                  (At(
                    this,
                    c === u && i >= 0 ? "onComplete" : "onReverseComplete",
                    !0,
                  ),
                  this._prom &&
                    !(c < u && this.timeScale() > 0) &&
                    this._prom()))));
        }
        return this;
      }),
      (t.add = function (i, s) {
        var o = this;
        if ((mr(s) || (s = Bt(this, s, i)), !(i instanceof Nn))) {
          if (tt(i))
            return (
              i.forEach(function (a) {
                return o.add(a, s);
              }),
              this
            );
          if (qe(i)) return this.addLabel(i, s);
          if (Te(i)) i = Me.delayedCall(0, i);
          else return this;
        }
        return this !== i ? sr(this, i, s) : this;
      }),
      (t.getChildren = function (i, s, o, a) {
        (i === void 0 && (i = !0),
          s === void 0 && (s = !0),
          o === void 0 && (o = !0),
          a === void 0 && (a = -Nt));
        for (var u = [], l = this._first; l; )
          (l._start >= a &&
            (l instanceof Me
              ? s && u.push(l)
              : (o && u.push(l),
                i && u.push.apply(u, l.getChildren(!0, s, o)))),
            (l = l._next));
        return u;
      }),
      (t.getById = function (i) {
        for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
          if (s[o].vars.id === i) return s[o];
      }),
      (t.remove = function (i) {
        return qe(i)
          ? this.removeLabel(i)
          : Te(i)
            ? this.killTweensOf(i)
            : (i.parent === this && Hs(this, i),
              i === this._recent && (this._recent = this._last),
              hi(this));
      }),
      (t.totalTime = function (i, s) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = be(
                Ft.time -
                  (this._ts > 0
                    ? i / this._ts
                    : (this.totalDuration() - i) / -this._ts),
              )),
            n.prototype.totalTime.call(this, i, s),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (t.addLabel = function (i, s) {
        return ((this.labels[i] = Bt(this, s)), this);
      }),
      (t.removeLabel = function (i) {
        return (delete this.labels[i], this);
      }),
      (t.addPause = function (i, s, o) {
        var a = Me.delayedCall(0, s || Fn, o);
        return (
          (a.data = "isPause"),
          (this._hasPause = 1),
          sr(this, a, Bt(this, i))
        );
      }),
      (t.removePause = function (i) {
        var s = this._first;
        for (i = Bt(this, i); s; )
          (s._start === i && s.data === "isPause" && Ir(s), (s = s._next));
      }),
      (t.killTweensOf = function (i, s, o) {
        for (var a = this.getTweensOf(i, o), u = a.length; u--; )
          zr !== a[u] && a[u].kill(i, s);
        return this;
      }),
      (t.getTweensOf = function (i, s) {
        for (var o = [], a = zt(i), u = this._first, l = mr(s), c; u; )
          (u instanceof Me
            ? ah(u._targets, a) &&
              (l
                ? (!zr || (u._initted && u._ts)) &&
                  u.globalTime(0) <= s &&
                  u.globalTime(u.totalDuration()) > s
                : !s || u.isActive()) &&
              o.push(u)
            : (c = u.getTweensOf(a, s)).length && o.push.apply(o, c),
            (u = u._next));
        return o;
      }),
      (t.tweenTo = function (i, s) {
        s = s || {};
        var o = this,
          a = Bt(o, i),
          u = s,
          l = u.startAt,
          c = u.onStart,
          p = u.onStartParams,
          h = u.immediateRender,
          d,
          _ = Me.to(
            o,
            Tt(
              {
                ease: s.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration:
                  s.duration ||
                  Math.abs(
                    (a - (l && "time" in l ? l.time : o._time)) / o.timeScale(),
                  ) ||
                  de,
                onStart: function () {
                  if ((o.pause(), !d)) {
                    var g =
                      s.duration ||
                      Math.abs(
                        (a - (l && "time" in l ? l.time : o._time)) /
                          o.timeScale(),
                      );
                    (_._dur !== g && $i(_, g, 0, 1).render(_._time, !0, !0),
                      (d = 1));
                  }
                  c && c.apply(_, p || []);
                },
              },
              s,
            ),
          );
        return h ? _.render(0) : _;
      }),
      (t.tweenFromTo = function (i, s, o) {
        return this.tweenTo(s, Tt({ startAt: { time: Bt(this, i) } }, o));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (i) {
        return (i === void 0 && (i = this._time), ul(this, Bt(this, i)));
      }),
      (t.previousLabel = function (i) {
        return (i === void 0 && (i = this._time), ul(this, Bt(this, i), 1));
      }),
      (t.currentLabel = function (i) {
        return arguments.length
          ? this.seek(i, !0)
          : this.previousLabel(this._time + de);
      }),
      (t.shiftChildren = function (i, s, o) {
        o === void 0 && (o = 0);
        var a = this._first,
          u = this.labels,
          l;
        for (i = be(i); a; )
          (a._start >= o && ((a._start += i), (a._end += i)), (a = a._next));
        if (s) for (l in u) u[l] >= o && (u[l] += i);
        return hi(this);
      }),
      (t.invalidate = function (i) {
        var s = this._first;
        for (this._lock = 0; s; ) (s.invalidate(i), (s = s._next));
        return n.prototype.invalidate.call(this, i);
      }),
      (t.clear = function (i) {
        i === void 0 && (i = !0);
        for (var s = this._first, o; s; )
          ((o = s._next), this.remove(s), (s = o));
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          i && (this.labels = {}),
          hi(this)
        );
      }),
      (t.totalDuration = function (i) {
        var s = 0,
          o = this,
          a = o._last,
          u = Nt,
          l,
          c,
          p;
        if (arguments.length)
          return o.timeScale(
            (o._repeat < 0 ? o.duration() : o.totalDuration()) /
              (o.reversed() ? -i : i),
          );
        if (o._dirty) {
          for (p = o.parent; a; )
            ((l = a._prev),
              a._dirty && a.totalDuration(),
              (c = a._start),
              c > u && o._sort && a._ts && !o._lock
                ? ((o._lock = 1), (sr(o, a, c - a._delay, 1)._lock = 0))
                : (u = c),
              c < 0 &&
                a._ts &&
                ((s -= c),
                ((!p && !o._dp) || (p && p.smoothChildTiming)) &&
                  ((o._start += be(c / o._ts)),
                  (o._time -= c),
                  (o._tTime -= c)),
                o.shiftChildren(-c, !1, -1 / 0),
                (u = 0)),
              a._end > s && a._ts && (s = a._end),
              (a = l));
          ($i(o, o === we && o._time > s ? o._time : s, 1, 1), (o._dirty = 0));
        }
        return o._tDur;
      }),
      (e.updateRoot = function (i) {
        if ((we._ts && (Xu(we, Vs(i, we)), (Wu = Ft.frame)), Ft.frame >= qu)) {
          qu += Ct.autoSleep || 120;
          var s = we._first;
          if ((!s || !s._ts) && Ct.autoSleep && Ft._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || Ft.sleep();
          }
        }
      }),
      e
    );
  })(Nn);
  Tt(lt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Ph = function (e, t, r, i, s, o, a) {
      var u = new Dt(this._pt, e, t, 0, 1, Cl, null, s),
        l = 0,
        c = 0,
        p,
        h,
        d,
        _,
        f,
        g,
        D,
        m;
      for (
        u.b = r,
          u.e = i,
          r += "",
          i += "",
          (D = ~i.indexOf("random(")) && (i = Rn(i)),
          o && ((m = [r, i]), o(m, e, t), (r = m[0]), (i = m[1])),
          h = r.match(Go) || [];
        (p = Go.exec(i));
      )
        ((_ = p[0]),
          (f = i.substring(l, p.index)),
          d ? (d = (d + 1) % 5) : f.substr(-5) === "rgba(" && (d = 1),
          _ !== h[c++] &&
            ((g = parseFloat(h[c - 1]) || 0),
            (u._pt = {
              _next: u._pt,
              p: f || c === 1 ? f : ",",
              s: g,
              c: _.charAt(1) === "=" ? Xi(g, _) - g : parseFloat(_) - g,
              m: d && d < 4 ? Math.round : 0,
            }),
            (l = Go.lastIndex)));
      return (
        (u.c = l < i.length ? i.substring(l, i.length) : ""),
        (u.fp = a),
        (Bu.test(i) || D) && (u.e = 0),
        (this._pt = u),
        u
      );
    },
    fa = function (e, t, r, i, s, o, a, u, l, c) {
      Te(i) && (i = i(s || 0, e, o));
      var p = e[t],
        h =
          r !== "get"
            ? r
            : Te(p)
              ? l
                ? e[
                    t.indexOf("set") || !Te(e["get" + t.substr(3)])
                      ? t
                      : "get" + t.substr(3)
                  ](l)
                : e[t]()
              : p,
        d = Te(p) ? (l ? Mh : wl) : pa,
        _;
      if (
        (qe(i) &&
          (~i.indexOf("random(") && (i = Rn(i)),
          i.charAt(1) === "=" &&
            ((_ = Xi(h, i) + (rt(h) || 0)), (_ || _ === 0) && (i = _))),
        !c || h !== i || ha)
      )
        return !isNaN(h * i) && i !== ""
          ? ((_ = new Dt(
              this._pt,
              e,
              t,
              +h || 0,
              i - (h || 0),
              typeof p == "boolean" ? Nh : bl,
              0,
              d,
            )),
            l && (_.fp = l),
            a && _.modifier(a, this, e),
            (this._pt = _))
          : (!p && !(t in e) && Ko(t, i),
            Ph.call(this, e, t, h, i, d, u || Ct.stringFilter, l));
    },
    Oh = function (e, t, r, i, s) {
      if (
        (Te(e) && (e = Bn(e, s, t, r, i)),
        !ir(e) || (e.style && e.nodeType) || tt(e) || Mu(e))
      )
        return qe(e) ? Bn(e, s, t, r, i) : e;
      var o = {},
        a;
      for (a in e) o[a] = Bn(e[a], s, t, r, i);
      return o;
    },
    ml = function (e, t, r, i, s, o) {
      var a, u, l, c;
      if (
        St[e] &&
        (a = new St[e]()).init(
          s,
          a.rawVars ? t[e] : Oh(t[e], i, s, o, r),
          r,
          i,
          o,
        ) !== !1 &&
        ((r._pt = u = new Dt(r._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
        r !== ji)
      )
        for (l = r._ptLookup[r._targets.indexOf(s)], c = a._props.length; c--; )
          l[a._props[c]] = u;
      return a;
    },
    zr,
    ha,
    da = function n(e, t, r) {
      var i = e.vars,
        s = i.ease,
        o = i.startAt,
        a = i.immediateRender,
        u = i.lazy,
        l = i.onUpdate,
        c = i.runBackwards,
        p = i.yoyoEase,
        h = i.keyframes,
        d = i.autoRevert,
        _ = e._dur,
        f = e._startAt,
        g = e._targets,
        D = e.parent,
        m = D && D.data === "nested" ? D.vars.targets : g,
        E = e._overwrite === "auto" && !qo,
        w = e.timeline,
        b,
        S,
        y,
        A,
        T,
        x,
        P,
        C,
        O,
        k,
        R,
        V,
        z;
      if (
        (w && (!h || !s) && (s = "none"),
        (e._ease = di(s, qi.ease)),
        (e._yEase = p ? _l(di(p === !0 ? s : p, qi.ease)) : 0),
        p &&
          e._yoyo &&
          !e._repeat &&
          ((p = e._yEase), (e._yEase = e._ease), (e._ease = p)),
        (e._from = !w && !!i.runBackwards),
        !w || (h && !i.stagger))
      ) {
        if (
          ((C = g[0] ? fi(g[0]).harness : 0),
          (V = C && i[C.prop]),
          (b = zs(i, Zo)),
          f &&
            (f._zTime < 0 && f.progress(1),
            t < 0 && c && a && !d
              ? f.render(-1, !0)
              : f.revert(c && _ ? Is : sh),
            (f._lazy = 0)),
          o)
        ) {
          if (
            (Ir(
              (e._startAt = Me.set(
                g,
                Tt(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: D,
                    immediateRender: !0,
                    lazy: !f && gt(u),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      l &&
                      function () {
                        return At(e, "onUpdate");
                      },
                    stagger: 0,
                  },
                  o,
                ),
              )),
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Ke || (!a && !d)) && e._startAt.revert(Is),
            a && _ && t <= 0 && r <= 0)
          ) {
            t && (e._zTime = t);
            return;
          }
        } else if (c && _ && !f) {
          if (
            (t && (a = !1),
            (y = Tt(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !f && gt(u),
                immediateRender: a,
                stagger: 0,
                parent: D,
              },
              b,
            )),
            V && (y[C.prop] = V),
            Ir((e._startAt = Me.set(g, y))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Ke ? e._startAt.revert(Is) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            !a)
          )
            n(e._startAt, de, de);
          else if (!t) return;
        }
        for (
          e._pt = e._ptCache = 0, u = (_ && gt(u)) || (u && !_), S = 0;
          S < g.length;
          S++
        ) {
          if (
            ((T = g[S]),
            (P = T._gsap || ta(g)[S]._gsap),
            (e._ptLookup[S] = k = {}),
            Qo[P.id] && Mr.length && Bs(),
            (R = m === g ? S : m.indexOf(T)),
            C &&
              (O = new C()).init(T, V || b, e, R, m) !== !1 &&
              ((e._pt = A =
                new Dt(e._pt, T, O.name, 0, 1, O.render, O, 0, O.priority)),
              O._props.forEach(function (I) {
                k[I] = A;
              }),
              O.priority && (x = 1)),
            !C || V)
          )
            for (y in b)
              St[y] && (O = ml(y, b, e, R, T, m))
                ? O.priority && (x = 1)
                : (k[y] = A =
                    fa.call(e, T, y, "get", b[y], R, m, 0, i.stringFilter));
          (e._op && e._op[S] && e.kill(T, e._op[S]),
            E &&
              e._pt &&
              ((zr = e),
              we.killTweensOf(T, k, e.globalTime(t)),
              (z = !e.parent),
              (zr = 0)),
            e._pt && u && (Qo[P.id] = 1));
        }
        (x && xl(e), e._onInit && e._onInit(e));
      }
      ((e._onUpdate = l),
        (e._initted = (!e._op || e._pt) && !z),
        h && t <= 0 && w.render(Nt, !0, !0));
    },
    kh = function (e, t, r, i, s, o, a, u) {
      var l = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
        c,
        p,
        h,
        d;
      if (!l)
        for (
          l = e._ptCache[t] = [], h = e._ptLookup, d = e._targets.length;
          d--;
        ) {
          if (((c = h[d][t]), c && c.d && c.d._pt))
            for (c = c.d._pt; c && c.p !== t && c.fp !== t; ) c = c._next;
          if (!c)
            return (
              (ha = 1),
              (e.vars[t] = "+=0"),
              da(e, a),
              (ha = 0),
              u ? An(t + " not eligible for reset") : 1
            );
          l.push(c);
        }
      for (d = l.length; d--; )
        ((p = l[d]),
          (c = p._pt || p),
          (c.s = (i || i === 0) && !s ? i : c.s + (i || 0) + o * c.c),
          (c.c = r - c.s),
          p.e && (p.e = Oe(r) + rt(p.e)),
          p.b && (p.b = c.s + rt(p.b)));
    },
    Rh = function (e, t) {
      var r = e[0] ? fi(e[0]).harness : 0,
        i = r && r.aliases,
        s,
        o,
        a,
        u;
      if (!i) return t;
      s = Ui({}, t);
      for (o in i)
        if (o in s)
          for (u = i[o].split(","), a = u.length; a--; ) s[u[a]] = s[o];
      return s;
    },
    Lh = function (e, t, r, i) {
      var s = t.ease || i || "power1.inOut",
        o,
        a;
      if (tt(t))
        ((a = r[e] || (r[e] = [])),
          t.forEach(function (u, l) {
            return a.push({ t: (l / (t.length - 1)) * 100, v: u, e: s });
          }));
      else
        for (o in t)
          ((a = r[o] || (r[o] = [])),
            o === "ease" || a.push({ t: parseFloat(e), v: t[o], e: s }));
    },
    Bn = function (e, t, r, i, s) {
      return Te(e)
        ? e.call(t, r, i, s)
        : qe(e) && ~e.indexOf("random(")
          ? Rn(e)
          : e;
    },
    yl = ea + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    El = {};
  vt(yl + ",id,stagger,delay,duration,paused,scrollTrigger", function (n) {
    return (El[n] = 1);
  });
  var Me = (function (n) {
    ci(e, n);
    function e(r, i, s, o) {
      var a;
      (typeof i == "number" && ((s.duration = i), (i = s), (s = null)),
        (a = n.call(this, o ? i : Pn(i)) || this));
      var u = a.vars,
        l = u.duration,
        c = u.delay,
        p = u.immediateRender,
        h = u.stagger,
        d = u.overwrite,
        _ = u.keyframes,
        f = u.defaults,
        g = u.scrollTrigger,
        D = u.yoyoEase,
        m = i.parent || we,
        E = (tt(r) || Mu(r) ? mr(r[0]) : "length" in i) ? [r] : zt(r),
        w,
        b,
        S,
        y,
        A,
        T,
        x,
        P;
      if (
        ((a._targets = E.length
          ? ta(E)
          : An(
              "GSAP target " + r + " not found. https://gsap.com",
              !Ct.nullTargetWarn,
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = d),
        _ || h || Ls(l) || Ls(c))
      ) {
        if (
          ((i = a.vars),
          (w = a.timeline =
            new lt({
              data: "nested",
              defaults: f || {},
              targets: m && m.data === "nested" ? m.vars.targets : E,
            })),
          w.kill(),
          (w.parent = w._dp = je(a)),
          (w._start = 0),
          h || Ls(l) || Ls(c))
        ) {
          if (((y = E.length), (x = h && il(h)), ir(h)))
            for (A in h) ~yl.indexOf(A) && (P || (P = {}), (P[A] = h[A]));
          for (b = 0; b < y; b++)
            ((S = zs(i, El)),
              (S.stagger = 0),
              D && (S.yoyoEase = D),
              P && Ui(S, P),
              (T = E[b]),
              (S.duration = +Bn(l, je(a), b, T, E)),
              (S.delay = (+Bn(c, je(a), b, T, E) || 0) - a._delay),
              !h &&
                y === 1 &&
                S.delay &&
                ((a._delay = c = S.delay), (a._start += c), (S.delay = 0)),
              w.to(T, S, x ? x(b, T, E) : 0),
              (w._ease = ae.none));
          w.duration() ? (l = c = 0) : (a.timeline = 0);
        } else if (_) {
          (Pn(Tt(w.vars.defaults, { ease: "none" })),
            (w._ease = di(_.ease || i.ease || "none")));
          var C = 0,
            O,
            k,
            R;
          if (tt(_))
            (_.forEach(function (V) {
              return w.to(E, V, ">");
            }),
              w.duration());
          else {
            S = {};
            for (A in _)
              A === "ease" || A === "easeEach" || Lh(A, _[A], S, _.easeEach);
            for (A in S)
              for (
                O = S[A].sort(function (V, z) {
                  return V.t - z.t;
                }),
                  C = 0,
                  b = 0;
                b < O.length;
                b++
              )
                ((k = O[b]),
                  (R = {
                    ease: k.e,
                    duration: ((k.t - (b ? O[b - 1].t : 0)) / 100) * l,
                  }),
                  (R[A] = k.v),
                  w.to(E, R, C),
                  (C += R.duration));
            w.duration() < l && w.to({}, { duration: l - w.duration() });
          }
        }
        l || a.duration((l = w.duration()));
      } else a.timeline = 0;
      return (
        d === !0 && !qo && ((zr = je(a)), we.killTweensOf(E), (zr = 0)),
        sr(m, je(a), s),
        i.reversed && a.reverse(),
        i.paused && a.paused(!0),
        (p ||
          (!l &&
            !_ &&
            a._start === be(m._time) &&
            gt(p) &&
            fh(je(a)) &&
            m.data !== "nested")) &&
          ((a._tTime = -de), a.render(Math.max(0, -c) || 0)),
        g && Qu(je(a), g),
        a
      );
    }
    var t = e.prototype;
    return (
      (t.render = function (i, s, o) {
        var a = this._time,
          u = this._tDur,
          l = this._dur,
          c = i < 0,
          p = i > u - de && !c ? u : i < de ? 0 : i,
          h,
          d,
          _,
          f,
          g,
          D,
          m,
          E,
          w;
        if (!l) dh(this, i, s, o);
        else if (
          p !== this._tTime ||
          !i ||
          o ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== c) ||
          this._lazy
        ) {
          if (((h = p), (E = this.timeline), this._repeat)) {
            if (((f = l + this._rDelay), this._repeat < -1 && c))
              return this.totalTime(f * 100 + i, s, o);
            if (
              ((h = be(p % f)),
              p === u
                ? ((_ = this._repeat), (h = l))
                : ((g = be(p / f)),
                  (_ = ~~g),
                  _ && _ === g ? ((h = l), _--) : h > l && (h = l)),
              (D = this._yoyo && _ & 1),
              D && ((w = this._yEase), (h = l - h)),
              (g = Gi(this._tTime, f)),
              h === a && !o && this._initted && _ === g)
            )
              return ((this._tTime = p), this);
            _ !== g &&
              (E && this._yEase && gl(E, D),
              this.vars.repeatRefresh &&
                !D &&
                !this._lock &&
                h !== f &&
                this._initted &&
                ((this._lock = o = 1),
                (this.render(be(f * _), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Ju(this, c ? i : h, o, s, p)) return ((this._tTime = 0), this);
            if (a !== this._time && !(o && this.vars.repeatRefresh && _ !== g))
              return this;
            if (l !== this._dur) return this.render(i, s, o);
          }
          if (
            ((this._tTime = p),
            (this._time = h),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = m = (w || this._ease)(h / l)),
            this._from && (this.ratio = m = 1 - m),
            !a && p && !s && !g && (At(this, "onStart"), this._tTime !== p))
          )
            return this;
          for (d = this._pt; d; ) (d.r(m, d.d), (d = d._next));
          ((E && E.render(i < 0 ? i : E._dur * E._ease(h / this._dur), s, o)) ||
            (this._startAt && (this._zTime = i)),
            this._onUpdate &&
              !s &&
              (c && ia(this, i, s, o), At(this, "onUpdate")),
            this._repeat &&
              _ !== g &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              At(this, "onRepeat"),
            (p === this._tDur || !p) &&
              this._tTime === p &&
              (c && !this._onUpdate && ia(this, i, !0, !0),
              (i || !l) &&
                ((p === this._tDur && this._ts > 0) || (!p && this._ts < 0)) &&
                Ir(this, 1),
              !s &&
                !(c && !a) &&
                (p || a || D) &&
                (At(this, p === u ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(p < u && this.timeScale() > 0) &&
                  this._prom())));
        }
        return this;
      }),
      (t.targets = function () {
        return this._targets;
      }),
      (t.invalidate = function (i) {
        return (
          (!i || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(i),
          n.prototype.invalidate.call(this, i)
        );
      }),
      (t.resetTo = function (i, s, o, a, u) {
        (In || Ft.wake(), this._ts || this.play());
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          c;
        return (
          this._initted || da(this, l),
          (c = this._ease(l / this._dur)),
          kh(this, i, s, o, a, c, l, u)
            ? this.resetTo(i, s, o, a, 1)
            : (qs(this, 0),
              this.parent ||
                ju(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0,
                ),
              this.render(0))
        );
      }),
      (t.kill = function (i, s) {
        if ((s === void 0 && (s = "all"), !i && (!s || s === "all")))
          return (
            (this._lazy = this._pt = 0),
            this.parent
              ? Ln(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!Ke),
            this
          );
        if (this.timeline) {
          var o = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(i, s, zr && zr.vars.overwrite !== !0)
              ._first || Ln(this),
            this.parent &&
              o !== this.timeline.totalDuration() &&
              $i(this, (this._dur * this.timeline._tDur) / o, 0, 1),
            this
          );
        }
        var a = this._targets,
          u = i ? zt(i) : a,
          l = this._ptLookup,
          c = this._pt,
          p,
          h,
          d,
          _,
          f,
          g,
          D;
        if ((!s || s === "all") && lh(a, u))
          return (s === "all" && (this._pt = 0), Ln(this));
        for (
          p = this._op = this._op || [],
            s !== "all" &&
              (qe(s) &&
                ((f = {}),
                vt(s, function (m) {
                  return (f[m] = 1);
                }),
                (s = f)),
              (s = Rh(a, s))),
            D = a.length;
          D--;
        )
          if (~u.indexOf(a[D])) {
            ((h = l[D]),
              s === "all"
                ? ((p[D] = s), (_ = h), (d = {}))
                : ((d = p[D] = p[D] || {}), (_ = s)));
            for (f in _)
              ((g = h && h[f]),
                g &&
                  ((!("kill" in g.d) || g.d.kill(f) === !0) &&
                    Hs(this, g, "_pt"),
                  delete h[f]),
                d !== "all" && (d[f] = 1));
          }
        return (this._initted && !this._pt && c && Ln(this), this);
      }),
      (e.to = function (i, s) {
        return new e(i, s, arguments[2]);
      }),
      (e.from = function (i, s) {
        return On(1, arguments);
      }),
      (e.delayedCall = function (i, s, o, a) {
        return new e(s, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: i,
          onComplete: s,
          onReverseComplete: s,
          onCompleteParams: o,
          onReverseCompleteParams: o,
          callbackScope: a,
        });
      }),
      (e.fromTo = function (i, s, o) {
        return On(2, arguments);
      }),
      (e.set = function (i, s) {
        return ((s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(i, s));
      }),
      (e.killTweensOf = function (i, s, o) {
        return we.killTweensOf(i, s, o);
      }),
      e
    );
  })(Nn);
  (Tt(Me.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0,
  }),
    vt("staggerTo,staggerFrom,staggerFromTo", function (n) {
      Me[n] = function () {
        var e = new lt(),
          t = sa.call(arguments, 0);
        return (
          t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0),
          e[n].apply(e, t)
        );
      };
    }));
  var pa = function (e, t, r) {
      return (e[t] = r);
    },
    wl = function (e, t, r) {
      return e[t](r);
    },
    Mh = function (e, t, r, i) {
      return e[t](i.fp, r);
    },
    Ih = function (e, t, r) {
      return e.setAttribute(t, r);
    },
    _a = function (e, t) {
      return Te(e[t]) ? wl : Xo(e[t]) && e.setAttribute ? Ih : pa;
    },
    bl = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    Nh = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    Cl = function (e, t) {
      var r = t._pt,
        i = "";
      if (!e && t.b) i = t.b;
      else if (e === 1 && t.e) i = t.e;
      else {
        for (; r; )
          ((i =
            r.p +
            (r.m
              ? r.m(r.s + r.c * e)
              : Math.round((r.s + r.c * e) * 1e4) / 1e4) +
            i),
            (r = r._next));
        i += t.c;
      }
      t.set(t.t, t.p, i, t);
    },
    ga = function (e, t) {
      for (var r = t._pt; r; ) (r.r(e, r.d), (r = r._next));
    },
    Bh = function (e, t, r, i) {
      for (var s = this._pt, o; s; )
        ((o = s._next), s.p === i && s.modifier(e, t, r), (s = o));
    },
    zh = function (e) {
      for (var t = this._pt, r, i; t; )
        ((i = t._next),
          (t.p === e && !t.op) || t.op === e
            ? Hs(this, t, "_pt")
            : t.dep || (r = 1),
          (t = i));
      return !r;
    },
    Hh = function (e, t, r, i) {
      i.mSet(e, t, i.m.call(i.tween, r, i.mt), i);
    },
    xl = function (e) {
      for (var t = e._pt, r, i, s, o; t; ) {
        for (r = t._next, i = s; i && i.pr > t.pr; ) i = i._next;
        ((t._prev = i ? i._prev : o) ? (t._prev._next = t) : (s = t),
          (t._next = i) ? (i._prev = t) : (o = t),
          (t = r));
      }
      e._pt = s;
    },
    Dt = (function () {
      function n(t, r, i, s, o, a, u, l, c) {
        ((this.t = r),
          (this.s = s),
          (this.c = o),
          (this.p = i),
          (this.r = a || bl),
          (this.d = u || this),
          (this.set = l || pa),
          (this.pr = c || 0),
          (this._next = t),
          t && (t._prev = this));
      }
      var e = n.prototype;
      return (
        (e.modifier = function (r, i, s) {
          ((this.mSet = this.mSet || this.set),
            (this.set = Hh),
            (this.m = r),
            (this.mt = s),
            (this.tween = i));
        }),
        n
      );
    })();
  (vt(
    ea +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (n) {
      return (Zo[n] = 1);
    },
  ),
    (xt.TweenMax = xt.TweenLite = Me),
    (xt.TimelineLite = xt.TimelineMax = lt),
    (we = new lt({
      sortChildren: !1,
      defaults: qi,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Ct.stringFilter = pl));
  var _i = [],
    Ys = {},
    Vh = [],
    Sl = 0,
    Wh = 0,
    va = function (e) {
      return (Ys[e] || Vh).map(function (t) {
        return t();
      });
    },
    Da = function () {
      var e = Date.now(),
        t = [];
      e - Sl > 2 &&
        (va("matchMediaInit"),
        _i.forEach(function (r) {
          var i = r.queries,
            s = r.conditions,
            o,
            a,
            u,
            l;
          for (a in i)
            ((o = nr.matchMedia(i[a]).matches),
              o && (u = 1),
              o !== s[a] && ((s[a] = o), (l = 1)));
          l && (r.revert(), u && t.push(r));
        }),
        va("matchMediaRevert"),
        t.forEach(function (r) {
          return r.onMatch(r, function (i) {
            return r.add(null, i);
          });
        }),
        (Sl = e),
        va("matchMedia"));
    },
    Tl = (function () {
      function n(t, r) {
        ((this.selector = r && oa(r)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = Wh++),
          t && this.add(t));
      }
      var e = n.prototype;
      return (
        (e.add = function (r, i, s) {
          Te(r) && ((s = i), (i = r), (r = Te));
          var o = this,
            a = function () {
              var l = me,
                c = o.selector,
                p;
              return (
                l && l !== o && l.data.push(o),
                s && (o.selector = oa(s)),
                (me = o),
                (p = i.apply(o, arguments)),
                Te(p) && o._r.push(p),
                (me = l),
                (o.selector = c),
                (o.isReverted = !1),
                p
              );
            };
          return (
            (o.last = a),
            r === Te
              ? a(o, function (u) {
                  return o.add(null, u);
                })
              : r
                ? (o[r] = a)
                : a
          );
        }),
        (e.ignore = function (r) {
          var i = me;
          ((me = null), r(this), (me = i));
        }),
        (e.getTweens = function () {
          var r = [];
          return (
            this.data.forEach(function (i) {
              return i instanceof n
                ? r.push.apply(r, i.getTweens())
                : i instanceof Me &&
                    !(i.parent && i.parent.data === "nested") &&
                    r.push(i);
            }),
            r
          );
        }),
        (e.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (e.kill = function (r, i) {
          var s = this;
          if (
            (r
              ? (function () {
                  for (var a = s.getTweens(), u = s.data.length, l; u--; )
                    ((l = s.data[u]),
                      l.data === "isFlip" &&
                        (l.revert(),
                        l.getChildren(!0, !0, !1).forEach(function (c) {
                          return a.splice(a.indexOf(c), 1);
                        })));
                  for (
                    a
                      .map(function (c) {
                        return {
                          g:
                            c._dur ||
                            c._delay ||
                            (c._sat && !c._sat.vars.immediateRender)
                              ? c.globalTime(0)
                              : -1 / 0,
                          t: c,
                        };
                      })
                      .sort(function (c, p) {
                        return p.g - c.g || -1 / 0;
                      })
                      .forEach(function (c) {
                        return c.t.revert(r);
                      }),
                      u = s.data.length;
                    u--;
                  )
                    ((l = s.data[u]),
                      l instanceof lt
                        ? l.data !== "nested" &&
                          (l.scrollTrigger && l.scrollTrigger.revert(),
                          l.kill())
                        : !(l instanceof Me) && l.revert && l.revert(r));
                  (s._r.forEach(function (c) {
                    return c(r, s);
                  }),
                    (s.isReverted = !0));
                })()
              : this.data.forEach(function (a) {
                  return a.kill && a.kill();
                }),
            this.clear(),
            i)
          )
            for (var o = _i.length; o--; )
              _i[o].id === this.id && _i.splice(o, 1);
        }),
        (e.revert = function (r) {
          this.kill(r || {});
        }),
        n
      );
    })(),
    qh = (function () {
      function n(t) {
        ((this.contexts = []), (this.scope = t), me && me.data.push(this));
      }
      var e = n.prototype;
      return (
        (e.add = function (r, i, s) {
          ir(r) || (r = { matches: r });
          var o = new Tl(0, s || this.scope),
            a = (o.conditions = {}),
            u,
            l,
            c;
          (me && !o.selector && (o.selector = me.selector),
            this.contexts.push(o),
            (i = o.add("onMatch", i)),
            (o.queries = r));
          for (l in r)
            l === "all"
              ? (c = 1)
              : ((u = nr.matchMedia(r[l])),
                u &&
                  (_i.indexOf(o) < 0 && _i.push(o),
                  (a[l] = u.matches) && (c = 1),
                  u.addListener
                    ? u.addListener(Da)
                    : u.addEventListener("change", Da)));
          return (
            c &&
              i(o, function (p) {
                return o.add(null, p);
              }),
            this
          );
        }),
        (e.revert = function (r) {
          this.kill(r || {});
        }),
        (e.kill = function (r) {
          this.contexts.forEach(function (i) {
            return i.kill(r, !0);
          });
        }),
        n
      );
    })(),
    Xs = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        t.forEach(function (i) {
          return cl(i);
        });
      },
      timeline: function (e) {
        return new lt(e);
      },
      getTweensOf: function (e, t) {
        return we.getTweensOf(e, t);
      },
      getProperty: function (e, t, r, i) {
        qe(e) && (e = zt(e)[0]);
        var s = fi(e || {}).get,
          o = r ? Gu : Uu;
        return (
          r === "native" && (r = ""),
          e &&
            (t
              ? o(((St[t] && St[t].get) || s)(e, t, r, i))
              : function (a, u, l) {
                  return o(((St[a] && St[a].get) || s)(e, a, u, l));
                })
        );
      },
      quickSetter: function (e, t, r) {
        if (((e = zt(e)), e.length > 1)) {
          var i = e.map(function (c) {
              return mt.quickSetter(c, t, r);
            }),
            s = i.length;
          return function (c) {
            for (var p = s; p--; ) i[p](c);
          };
        }
        e = e[0] || {};
        var o = St[t],
          a = fi(e),
          u = (a.harness && (a.harness.aliases || {})[t]) || t,
          l = o
            ? function (c) {
                var p = new o();
                ((ji._pt = 0),
                  p.init(e, r ? c + r : c, ji, 0, [e]),
                  p.render(1, p),
                  ji._pt && ga(1, ji));
              }
            : a.set(e, u);
        return o
          ? l
          : function (c) {
              return l(e, u, r ? c + r : c, a, 1);
            };
      },
      quickTo: function (e, t, r) {
        var i,
          s = mt.to(
            e,
            Tt(
              ((i = {}), (i[t] = "+=0.1"), (i.paused = !0), (i.stagger = 0), i),
              r || {},
            ),
          ),
          o = function (u, l, c) {
            return s.resetTo(t, u, l, c);
          };
        return ((o.tween = s), o);
      },
      isTweening: function (e) {
        return we.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return (e && e.ease && (e.ease = di(e.ease, qi.ease)), $u(qi, e || {}));
      },
      config: function (e) {
        return $u(Ct, e || {});
      },
      registerEffect: function (e) {
        var t = e.name,
          r = e.effect,
          i = e.plugins,
          s = e.defaults,
          o = e.extendTimeline;
        ((i || "").split(",").forEach(function (a) {
          return (
            a &&
            !St[a] &&
            !xt[a] &&
            An(t + " effect requires " + a + " plugin.")
          );
        }),
          (Jo[t] = function (a, u, l) {
            return r(zt(a), Tt(u || {}, s), l);
          }),
          o &&
            (lt.prototype[t] = function (a, u, l) {
              return this.add(Jo[t](a, ir(u) ? u : (l = u) && {}, this), l);
            }));
      },
      registerEase: function (e, t) {
        ae[e] = di(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? di(e, t) : ae;
      },
      getById: function (e) {
        return we.getById(e);
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var r = new lt(e),
          i,
          s;
        for (
          r.smoothChildTiming = gt(e.smoothChildTiming),
            we.remove(r),
            r._dp = 0,
            r._time = r._tTime = we._time,
            i = we._first;
          i;
        )
          ((s = i._next),
            (t ||
              !(
                !i._dur &&
                i instanceof Me &&
                i.vars.onComplete === i._targets[0]
              )) &&
              sr(r, i, i._start - i._delay),
            (i = s));
        return (sr(we, r, 0), r);
      },
      context: function (e, t) {
        return e ? new Tl(e, t) : me;
      },
      matchMedia: function (e) {
        return new qh(e);
      },
      matchMediaRefresh: function () {
        return (
          _i.forEach(function (e) {
            var t = e.conditions,
              r,
              i;
            for (i in t) t[i] && ((t[i] = !1), (r = 1));
            r && e.revert();
          }) || Da()
        );
      },
      addEventListener: function (e, t) {
        var r = Ys[e] || (Ys[e] = []);
        ~r.indexOf(t) || r.push(t);
      },
      removeEventListener: function (e, t) {
        var r = Ys[e],
          i = r && r.indexOf(t);
        i >= 0 && r.splice(i, 1);
      },
      utils: {
        wrap: Eh,
        wrapYoyo: wh,
        distribute: il,
        random: sl,
        snap: nl,
        normalize: yh,
        getUnit: rt,
        clamp: gh,
        splitColor: fl,
        toArray: zt,
        selector: oa,
        mapRange: al,
        pipe: Dh,
        unitize: mh,
        interpolate: bh,
        shuffle: rl,
      },
      install: Hu,
      effects: Jo,
      ticker: Ft,
      updateRoot: lt.updateRoot,
      plugins: St,
      globalTimeline: we,
      core: {
        PropTween: Dt,
        globals: Vu,
        Tween: Me,
        Timeline: lt,
        Animation: Nn,
        getCache: fi,
        _removeLinkedListItem: Hs,
        reverting: function () {
          return Ke;
        },
        context: function (e) {
          return (e && me && (me.data.push(e), (e._ctx = me)), me);
        },
        suppressOverwrites: function (e) {
          return (qo = e);
        },
      },
    };
  (vt("to,from,fromTo,delayedCall,set,killTweensOf", function (n) {
    return (Xs[n] = Me[n]);
  }),
    Ft.add(lt.updateRoot),
    (ji = Xs.to({}, { duration: 0 })));
  var Yh = function (e, t) {
      for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
        r = r._next;
      return r;
    },
    Xh = function (e, t) {
      var r = e._targets,
        i,
        s,
        o;
      for (i in t)
        for (s = r.length; s--; )
          ((o = e._ptLookup[s][i]),
            o &&
              (o = o.d) &&
              (o._pt && (o = Yh(o, i)),
              o && o.modifier && o.modifier(t[i], e, r[s], i)));
    },
    ma = function (e, t) {
      return {
        name: e,
        headless: 1,
        rawVars: 1,
        init: function (i, s, o) {
          o._onInit = function (a) {
            var u, l;
            if (
              (qe(s) &&
                ((u = {}),
                vt(s, function (c) {
                  return (u[c] = 1);
                }),
                (s = u)),
              t)
            ) {
              u = {};
              for (l in s) u[l] = t(s[l]);
              s = u;
            }
            Xh(a, s);
          };
        },
      };
    },
    mt =
      Xs.registerPlugin(
        {
          name: "attr",
          init: function (e, t, r, i, s) {
            var o, a, u;
            this.tween = r;
            for (o in t)
              ((u = e.getAttribute(o) || ""),
                (a = this.add(
                  e,
                  "setAttribute",
                  (u || 0) + "",
                  t[o],
                  i,
                  s,
                  0,
                  0,
                  o,
                )),
                (a.op = o),
                (a.b = u),
                this._props.push(o));
          },
          render: function (e, t) {
            for (var r = t._pt; r; )
              (Ke ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next));
          },
        },
        {
          name: "endArray",
          headless: 1,
          init: function (e, t) {
            for (var r = t.length; r--; )
              this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
          },
        },
        ma("roundProps", aa),
        ma("modifiers"),
        ma("snap", nl),
      ) || Xs;
  ((Me.version = lt.version = mt.version = "3.14.2"),
    (zu = 1),
    Uo() && Ki(),
    ae.Power0,
    ae.Power1,
    ae.Power2,
    ae.Power3,
    ae.Power4,
    ae.Linear,
    ae.Quad,
    ae.Cubic,
    ae.Quart,
    ae.Quint,
    ae.Strong,
    ae.Elastic,
    ae.Back,
    ae.SteppedEase,
    ae.Bounce,
    ae.Sine,
    ae.Expo,
    ae.Circ);
  /*!
   * CSSPlugin 3.14.2
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Al,
    Hr,
    Zi,
    ya,
    gi,
    Fl,
    Ea,
    Uh = function () {
      return typeof window < "u";
    },
    yr = {},
    vi = 180 / Math.PI,
    Qi = Math.PI / 180,
    Ji = Math.atan2,
    Pl = 1e8,
    wa = /([A-Z])/g,
    Gh = /(left|right|width|margin|padding|x)/i,
    $h = /[\s,\(]\S/,
    or = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    ba = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    jh = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
        t,
      );
    },
    Kh = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
        t,
      );
    },
    Zh = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
        t,
      );
    },
    Qh = function (e, t) {
      var r = t.s + t.c * e;
      t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    Ol = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    kl = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    Jh = function (e, t, r) {
      return (e.style[t] = r);
    },
    ed = function (e, t, r) {
      return e.style.setProperty(t, r);
    },
    td = function (e, t, r) {
      return (e._gsap[t] = r);
    },
    rd = function (e, t, r) {
      return (e._gsap.scaleX = e._gsap.scaleY = r);
    },
    id = function (e, t, r, i, s) {
      var o = e._gsap;
      ((o.scaleX = o.scaleY = r), o.renderTransform(s, o));
    },
    nd = function (e, t, r, i, s) {
      var o = e._gsap;
      ((o[t] = r), o.renderTransform(s, o));
    },
    Ce = "transform",
    yt = Ce + "Origin",
    sd = function n(e, t) {
      var r = this,
        i = this.target,
        s = i.style,
        o = i._gsap;
      if (e in yr && s) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          ((e = or[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (a) {
                  return (r.tfm[a] = Er(i, a));
                })
              : (this.tfm[e] = o.x ? o[e] : Er(i, e)),
            e === yt && (this.tfm.zOrigin = o.zOrigin));
        else
          return or.transform.split(",").forEach(function (a) {
            return n.call(r, a, t);
          });
        if (this.props.indexOf(Ce) >= 0) return;
        (o.svg &&
          ((this.svgo = i.getAttribute("data-svg-origin")),
          this.props.push(yt, t, "")),
          (e = Ce));
      }
      (s || t) && this.props.push(e, t, s[e]);
    },
    Rl = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    od = function () {
      var e = this.props,
        t = this.target,
        r = t.style,
        i = t._gsap,
        s,
        o;
      for (s = 0; s < e.length; s += 3)
        e[s + 1]
          ? e[s + 1] === 2
            ? t[e[s]](e[s + 2])
            : (t[e[s]] = e[s + 2])
          : e[s + 2]
            ? (r[e[s]] = e[s + 2])
            : r.removeProperty(
                e[s].substr(0, 2) === "--"
                  ? e[s]
                  : e[s].replace(wa, "-$1").toLowerCase(),
              );
      if (this.tfm) {
        for (o in this.tfm) i[o] = this.tfm[o];
        (i.svg &&
          (i.renderTransform(),
          t.setAttribute("data-svg-origin", this.svgo || "")),
          (s = Ea()),
          (!s || !s.isStart) &&
            !r[Ce] &&
            (Rl(r),
            i.zOrigin &&
              r[yt] &&
              ((r[yt] += " " + i.zOrigin + "px"),
              (i.zOrigin = 0),
              i.renderTransform()),
            (i.uncache = 1)));
      }
    },
    Ll = function (e, t) {
      var r = { target: e, props: [], revert: od, save: sd };
      return (
        e._gsap || mt.core.getCache(e),
        t &&
          e.style &&
          e.nodeType &&
          t.split(",").forEach(function (i) {
            return r.save(i);
          }),
        r
      );
    },
    Ml,
    Ca = function (e, t) {
      var r = Hr.createElementNS
        ? Hr.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e,
          )
        : Hr.createElement(e);
      return r && r.style ? r : Hr.createElement(e);
    },
    Pt = function n(e, t, r) {
      var i = getComputedStyle(e);
      return (
        i[t] ||
        i.getPropertyValue(t.replace(wa, "-$1").toLowerCase()) ||
        i.getPropertyValue(t) ||
        (!r && n(e, en(t) || t, 1)) ||
        ""
      );
    },
    Il = "O,Moz,ms,Ms,Webkit".split(","),
    en = function (e, t, r) {
      var i = t || gi,
        s = i.style,
        o = 5;
      if (e in s && !r) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        o-- && !(Il[o] + e in s);
      );
      return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Il[o] : "") + e;
    },
    xa = function () {
      Uh() &&
        window.document &&
        ((Al = window),
        (Hr = Al.document),
        (Zi = Hr.documentElement),
        (gi = Ca("div") || { style: {} }),
        Ca("div"),
        (Ce = en(Ce)),
        (yt = Ce + "Origin"),
        (gi.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Ml = !!en("perspective")),
        (Ea = mt.core.reverting),
        (ya = 1));
    },
    Nl = function (e) {
      var t = e.ownerSVGElement,
        r = Ca(
          "svg",
          (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg",
        ),
        i = e.cloneNode(!0),
        s;
      ((i.style.display = "block"), r.appendChild(i), Zi.appendChild(r));
      try {
        s = i.getBBox();
      } catch {}
      return (r.removeChild(i), Zi.removeChild(r), s);
    },
    Bl = function (e, t) {
      for (var r = t.length; r--; )
        if (e.hasAttribute(t[r])) return e.getAttribute(t[r]);
    },
    zl = function (e) {
      var t, r;
      try {
        t = e.getBBox();
      } catch {
        ((t = Nl(e)), (r = 1));
      }
      return (
        (t && (t.width || t.height)) || r || (t = Nl(e)),
        t && !t.width && !t.x && !t.y
          ? {
              x: +Bl(e, ["x", "cx", "x1"]) || 0,
              y: +Bl(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : t
      );
    },
    Hl = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && zl(e));
    },
    Vr = function (e, t) {
      if (t) {
        var r = e.style,
          i;
        (t in yr && t !== yt && (t = Ce),
          r.removeProperty
            ? ((i = t.substr(0, 2)),
              (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
              r.removeProperty(
                i === "--" ? t : t.replace(wa, "-$1").toLowerCase(),
              ))
            : r.removeAttribute(t));
      }
    },
    Wr = function (e, t, r, i, s, o) {
      var a = new Dt(e._pt, t, r, 0, 1, o ? kl : Ol);
      return ((e._pt = a), (a.b = i), (a.e = s), e._props.push(r), a);
    },
    Vl = { deg: 1, rad: 1, turn: 1 },
    ad = { grid: 1, flex: 1 },
    qr = function n(e, t, r, i) {
      var s = parseFloat(r) || 0,
        o = (r + "").trim().substr((s + "").length) || "px",
        a = gi.style,
        u = Gh.test(t),
        l = e.tagName.toLowerCase() === "svg",
        c = (l ? "client" : "offset") + (u ? "Width" : "Height"),
        p = 100,
        h = i === "px",
        d = i === "%",
        _,
        f,
        g,
        D;
      if (i === o || !s || Vl[i] || Vl[o]) return s;
      if (
        (o !== "px" && !h && (s = n(e, t, r, "px")),
        (D = e.getCTM && Hl(e)),
        (d || o === "%") && (yr[t] || ~t.indexOf("adius")))
      )
        return (
          (_ = D ? e.getBBox()[u ? "width" : "height"] : e[c]),
          Oe(d ? (s / _) * p : (s / 100) * _)
        );
      if (
        ((a[u ? "width" : "height"] = p + (h ? o : i)),
        (f =
          (i !== "rem" && ~t.indexOf("adius")) ||
          (i === "em" && e.appendChild && !l)
            ? e
            : e.parentNode),
        D && (f = (e.ownerSVGElement || {}).parentNode),
        (!f || f === Hr || !f.appendChild) && (f = Hr.body),
        (g = f._gsap),
        g && d && g.width && u && g.time === Ft.time && !g.uncache)
      )
        return Oe((s / g.width) * p);
      if (d && (t === "height" || t === "width")) {
        var m = e.style[t];
        ((e.style[t] = p + i), (_ = e[c]), m ? (e.style[t] = m) : Vr(e, t));
      } else
        ((d || o === "%") &&
          !ad[Pt(f, "display")] &&
          (a.position = Pt(e, "position")),
          f === e && (a.position = "static"),
          f.appendChild(gi),
          (_ = gi[c]),
          f.removeChild(gi),
          (a.position = "absolute"));
      return (
        u && d && ((g = fi(f)), (g.time = Ft.time), (g.width = f[c])),
        Oe(h ? (_ * s) / p : _ && s ? (p / _) * s : 0)
      );
    },
    Er = function (e, t, r, i) {
      var s;
      return (
        ya || xa(),
        t in or &&
          t !== "transform" &&
          ((t = or[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        yr[t] && t !== "transform"
          ? ((s = Hn(e, i)),
            (s =
              t !== "transformOrigin"
                ? s[t]
                : s.svg
                  ? s.origin
                  : Gs(Pt(e, yt)) + " " + s.zOrigin + "px"))
          : ((s = e.style[t]),
            (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) &&
              (s =
                (Us[t] && Us[t](e, t, r)) ||
                Pt(e, t) ||
                Yu(e, t) ||
                (t === "opacity" ? 1 : 0))),
        r && !~(s + "").trim().indexOf(" ") ? qr(e, t, s, r) + r : s
      );
    },
    ud = function (e, t, r, i) {
      if (!r || r === "none") {
        var s = en(t, e, 1),
          o = s && Pt(e, s, 1);
        o && o !== r
          ? ((t = s), (r = o))
          : t === "borderColor" && (r = Pt(e, "borderTopColor"));
      }
      var a = new Dt(this._pt, e.style, t, 0, 1, Cl),
        u = 0,
        l = 0,
        c,
        p,
        h,
        d,
        _,
        f,
        g,
        D,
        m,
        E,
        w,
        b;
      if (
        ((a.b = r),
        (a.e = i),
        (r += ""),
        (i += ""),
        i.substring(0, 6) === "var(--" &&
          (i = Pt(e, i.substring(4, i.indexOf(")")))),
        i === "auto" &&
          ((f = e.style[t]),
          (e.style[t] = i),
          (i = Pt(e, t) || i),
          f ? (e.style[t] = f) : Vr(e, t)),
        (c = [r, i]),
        pl(c),
        (r = c[0]),
        (i = c[1]),
        (h = r.match(Yi) || []),
        (b = i.match(Yi) || []),
        b.length)
      ) {
        for (; (p = Yi.exec(i)); )
          ((g = p[0]),
            (m = i.substring(u, p.index)),
            _
              ? (_ = (_ + 1) % 5)
              : (m.substr(-5) === "rgba(" || m.substr(-5) === "hsla(") &&
                (_ = 1),
            g !== (f = h[l++] || "") &&
              ((d = parseFloat(f) || 0),
              (w = f.substr((d + "").length)),
              g.charAt(1) === "=" && (g = Xi(d, g) + w),
              (D = parseFloat(g)),
              (E = g.substr((D + "").length)),
              (u = Yi.lastIndex - E.length),
              E ||
                ((E = E || Ct.units[t] || w),
                u === i.length && ((i += E), (a.e += E))),
              w !== E && (d = qr(e, t, f, E) || 0),
              (a._pt = {
                _next: a._pt,
                p: m || l === 1 ? m : ",",
                s: d,
                c: D - d,
                m: (_ && _ < 4) || t === "zIndex" ? Math.round : 0,
              })));
        a.c = u < i.length ? i.substring(u, i.length) : "";
      } else a.r = t === "display" && i === "none" ? kl : Ol;
      return (Bu.test(i) && (a.e = 0), (this._pt = a), a);
    },
    Wl = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    ld = function (e) {
      var t = e.split(" "),
        r = t[0],
        i = t[1] || "50%";
      return (
        (r === "top" || r === "bottom" || i === "left" || i === "right") &&
          ((e = r), (r = i), (i = e)),
        (t[0] = Wl[r] || r),
        (t[1] = Wl[i] || i),
        t.join(" ")
      );
    },
    cd = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var r = t.t,
          i = r.style,
          s = t.u,
          o = r._gsap,
          a,
          u,
          l;
        if (s === "all" || s === !0) ((i.cssText = ""), (u = 1));
        else
          for (s = s.split(","), l = s.length; --l > -1; )
            ((a = s[l]),
              yr[a] && ((u = 1), (a = a === "transformOrigin" ? yt : Ce)),
              Vr(r, a));
        u &&
          (Vr(r, Ce),
          o &&
            (o.svg && r.removeAttribute("transform"),
            (i.scale = i.rotate = i.translate = "none"),
            Hn(r, 1),
            (o.uncache = 1),
            Rl(i)));
      }
    },
    Us = {
      clearProps: function (e, t, r, i, s) {
        if (s.data !== "isFromStart") {
          var o = (e._pt = new Dt(e._pt, t, r, 0, 0, cd));
          return ((o.u = i), (o.pr = -10), (o.tween = s), e._props.push(r), 1);
        }
      },
    },
    zn = [1, 0, 0, 1, 0, 0],
    ql = {},
    Yl = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    Xl = function (e) {
      var t = Pt(e, Ce);
      return Yl(t) ? zn : t.substr(7).match(Nu).map(Oe);
    },
    Sa = function (e, t) {
      var r = e._gsap || fi(e),
        i = e.style,
        s = Xl(e),
        o,
        a,
        u,
        l;
      return r.svg && e.getAttribute("transform")
        ? ((u = e.transform.baseVal.consolidate().matrix),
          (s = [u.a, u.b, u.c, u.d, u.e, u.f]),
          s.join(",") === "1,0,0,1,0,0" ? zn : s)
        : (s === zn &&
            !e.offsetParent &&
            e !== Zi &&
            !r.svg &&
            ((u = i.display),
            (i.display = "block"),
            (o = e.parentNode),
            (!o || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((l = 1), (a = e.nextElementSibling), Zi.appendChild(e)),
            (s = Xl(e)),
            u ? (i.display = u) : Vr(e, "display"),
            l &&
              (a
                ? o.insertBefore(e, a)
                : o
                  ? o.appendChild(e)
                  : Zi.removeChild(e))),
          t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    Ta = function (e, t, r, i, s, o) {
      var a = e._gsap,
        u = s || Sa(e, !0),
        l = a.xOrigin || 0,
        c = a.yOrigin || 0,
        p = a.xOffset || 0,
        h = a.yOffset || 0,
        d = u[0],
        _ = u[1],
        f = u[2],
        g = u[3],
        D = u[4],
        m = u[5],
        E = t.split(" "),
        w = parseFloat(E[0]) || 0,
        b = parseFloat(E[1]) || 0,
        S,
        y,
        A,
        T;
      (r
        ? u !== zn &&
          (y = d * g - _ * f) &&
          ((A = w * (g / y) + b * (-f / y) + (f * m - g * D) / y),
          (T = w * (-_ / y) + b * (d / y) - (d * m - _ * D) / y),
          (w = A),
          (b = T))
        : ((S = zl(e)),
          (w = S.x + (~E[0].indexOf("%") ? (w / 100) * S.width : w)),
          (b =
            S.y + (~(E[1] || E[0]).indexOf("%") ? (b / 100) * S.height : b))),
        i || (i !== !1 && a.smooth)
          ? ((D = w - l),
            (m = b - c),
            (a.xOffset = p + (D * d + m * f) - D),
            (a.yOffset = h + (D * _ + m * g) - m))
          : (a.xOffset = a.yOffset = 0),
        (a.xOrigin = w),
        (a.yOrigin = b),
        (a.smooth = !!i),
        (a.origin = t),
        (a.originIsAbsolute = !!r),
        (e.style[yt] = "0px 0px"),
        o &&
          (Wr(o, a, "xOrigin", l, w),
          Wr(o, a, "yOrigin", c, b),
          Wr(o, a, "xOffset", p, a.xOffset),
          Wr(o, a, "yOffset", h, a.yOffset)),
        e.setAttribute("data-svg-origin", w + " " + b));
    },
    Hn = function (e, t) {
      var r = e._gsap || new Dl(e);
      if ("x" in r && !t && !r.uncache) return r;
      var i = e.style,
        s = r.scaleX < 0,
        o = "px",
        a = "deg",
        u = getComputedStyle(e),
        l = Pt(e, yt) || "0",
        c,
        p,
        h,
        d,
        _,
        f,
        g,
        D,
        m,
        E,
        w,
        b,
        S,
        y,
        A,
        T,
        x,
        P,
        C,
        O,
        k,
        R,
        V,
        z,
        I,
        L,
        v,
        B,
        Y,
        he,
        te,
        De;
      return (
        (c = p = h = f = g = D = m = E = w = 0),
        (d = _ = 1),
        (r.svg = !!(e.getCTM && Hl(e))),
        u.translate &&
          ((u.translate !== "none" ||
            u.scale !== "none" ||
            u.rotate !== "none") &&
            (i[Ce] =
              (u.translate !== "none"
                ? "translate3d(" +
                  (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") +
              (u.scale !== "none"
                ? "scale(" + u.scale.split(" ").join(",") + ") "
                : "") +
              (u[Ce] !== "none" ? u[Ce] : "")),
          (i.scale = i.rotate = i.translate = "none")),
        (y = Sa(e, r.svg)),
        r.svg &&
          (r.uncache
            ? ((I = e.getBBox()),
              (l = r.xOrigin - I.x + "px " + (r.yOrigin - I.y) + "px"),
              (z = ""))
            : (z = !t && e.getAttribute("data-svg-origin")),
          Ta(e, z || l, !!z || r.originIsAbsolute, r.smooth !== !1, y)),
        (b = r.xOrigin || 0),
        (S = r.yOrigin || 0),
        y !== zn &&
          ((P = y[0]),
          (C = y[1]),
          (O = y[2]),
          (k = y[3]),
          (c = R = y[4]),
          (p = V = y[5]),
          y.length === 6
            ? ((d = Math.sqrt(P * P + C * C)),
              (_ = Math.sqrt(k * k + O * O)),
              (f = P || C ? Ji(C, P) * vi : 0),
              (m = O || k ? Ji(O, k) * vi + f : 0),
              m && (_ *= Math.abs(Math.cos(m * Qi))),
              r.svg && ((c -= b - (b * P + S * O)), (p -= S - (b * C + S * k))))
            : ((De = y[6]),
              (he = y[7]),
              (v = y[8]),
              (B = y[9]),
              (Y = y[10]),
              (te = y[11]),
              (c = y[12]),
              (p = y[13]),
              (h = y[14]),
              (A = Ji(De, Y)),
              (g = A * vi),
              A &&
                ((T = Math.cos(-A)),
                (x = Math.sin(-A)),
                (z = R * T + v * x),
                (I = V * T + B * x),
                (L = De * T + Y * x),
                (v = R * -x + v * T),
                (B = V * -x + B * T),
                (Y = De * -x + Y * T),
                (te = he * -x + te * T),
                (R = z),
                (V = I),
                (De = L)),
              (A = Ji(-O, Y)),
              (D = A * vi),
              A &&
                ((T = Math.cos(-A)),
                (x = Math.sin(-A)),
                (z = P * T - v * x),
                (I = C * T - B * x),
                (L = O * T - Y * x),
                (te = k * x + te * T),
                (P = z),
                (C = I),
                (O = L)),
              (A = Ji(C, P)),
              (f = A * vi),
              A &&
                ((T = Math.cos(A)),
                (x = Math.sin(A)),
                (z = P * T + C * x),
                (I = R * T + V * x),
                (C = C * T - P * x),
                (V = V * T - R * x),
                (P = z),
                (R = I)),
              g &&
                Math.abs(g) + Math.abs(f) > 359.9 &&
                ((g = f = 0), (D = 180 - D)),
              (d = Oe(Math.sqrt(P * P + C * C + O * O))),
              (_ = Oe(Math.sqrt(V * V + De * De))),
              (A = Ji(R, V)),
              (m = Math.abs(A) > 2e-4 ? A * vi : 0),
              (w = te ? 1 / (te < 0 ? -te : te) : 0)),
          r.svg &&
            ((z = e.getAttribute("transform")),
            (r.forceCSS = e.setAttribute("transform", "") || !Yl(Pt(e, Ce))),
            z && e.setAttribute("transform", z))),
        Math.abs(m) > 90 &&
          Math.abs(m) < 270 &&
          (s
            ? ((d *= -1),
              (m += f <= 0 ? 180 : -180),
              (f += f <= 0 ? 180 : -180))
            : ((_ *= -1), (m += m <= 0 ? 180 : -180))),
        (t = t || r.uncache),
        (r.x =
          c -
          ((r.xPercent =
            c &&
            ((!t && r.xPercent) ||
              (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
            ? (e.offsetWidth * r.xPercent) / 100
            : 0) +
          o),
        (r.y =
          p -
          ((r.yPercent =
            p &&
            ((!t && r.yPercent) ||
              (Math.round(e.offsetHeight / 2) === Math.round(-p) ? -50 : 0)))
            ? (e.offsetHeight * r.yPercent) / 100
            : 0) +
          o),
        (r.z = h + o),
        (r.scaleX = Oe(d)),
        (r.scaleY = Oe(_)),
        (r.rotation = Oe(f) + a),
        (r.rotationX = Oe(g) + a),
        (r.rotationY = Oe(D) + a),
        (r.skewX = m + a),
        (r.skewY = E + a),
        (r.transformPerspective = w + o),
        (r.zOrigin = parseFloat(l.split(" ")[2]) || (!t && r.zOrigin) || 0) &&
          (i[yt] = Gs(l)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = Ct.force3D),
        (r.renderTransform = r.svg ? hd : Ml ? Ul : fd),
        (r.uncache = 0),
        r
      );
    },
    Gs = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    Aa = function (e, t, r) {
      var i = rt(t);
      return Oe(parseFloat(t) + parseFloat(qr(e, "x", r + "px", i))) + i;
    },
    fd = function (e, t) {
      ((t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        Ul(e, t));
    },
    Di = "0deg",
    Vn = "0px",
    mi = ") ",
    Ul = function (e, t) {
      var r = t || this,
        i = r.xPercent,
        s = r.yPercent,
        o = r.x,
        a = r.y,
        u = r.z,
        l = r.rotation,
        c = r.rotationY,
        p = r.rotationX,
        h = r.skewX,
        d = r.skewY,
        _ = r.scaleX,
        f = r.scaleY,
        g = r.transformPerspective,
        D = r.force3D,
        m = r.target,
        E = r.zOrigin,
        w = "",
        b = (D === "auto" && e && e !== 1) || D === !0;
      if (E && (p !== Di || c !== Di)) {
        var S = parseFloat(c) * Qi,
          y = Math.sin(S),
          A = Math.cos(S),
          T;
        ((S = parseFloat(p) * Qi),
          (T = Math.cos(S)),
          (o = Aa(m, o, y * T * -E)),
          (a = Aa(m, a, -Math.sin(S) * -E)),
          (u = Aa(m, u, A * T * -E + E)));
      }
      (g !== Vn && (w += "perspective(" + g + mi),
        (i || s) && (w += "translate(" + i + "%, " + s + "%) "),
        (b || o !== Vn || a !== Vn || u !== Vn) &&
          (w +=
            u !== Vn || b
              ? "translate3d(" + o + ", " + a + ", " + u + ") "
              : "translate(" + o + ", " + a + mi),
        l !== Di && (w += "rotate(" + l + mi),
        c !== Di && (w += "rotateY(" + c + mi),
        p !== Di && (w += "rotateX(" + p + mi),
        (h !== Di || d !== Di) && (w += "skew(" + h + ", " + d + mi),
        (_ !== 1 || f !== 1) && (w += "scale(" + _ + ", " + f + mi),
        (m.style[Ce] = w || "translate(0, 0)"));
    },
    hd = function (e, t) {
      var r = t || this,
        i = r.xPercent,
        s = r.yPercent,
        o = r.x,
        a = r.y,
        u = r.rotation,
        l = r.skewX,
        c = r.skewY,
        p = r.scaleX,
        h = r.scaleY,
        d = r.target,
        _ = r.xOrigin,
        f = r.yOrigin,
        g = r.xOffset,
        D = r.yOffset,
        m = r.forceCSS,
        E = parseFloat(o),
        w = parseFloat(a),
        b,
        S,
        y,
        A,
        T;
      ((u = parseFloat(u)),
        (l = parseFloat(l)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (l += c), (u += c)),
        u || l
          ? ((u *= Qi),
            (l *= Qi),
            (b = Math.cos(u) * p),
            (S = Math.sin(u) * p),
            (y = Math.sin(u - l) * -h),
            (A = Math.cos(u - l) * h),
            l &&
              ((c *= Qi),
              (T = Math.tan(l - c)),
              (T = Math.sqrt(1 + T * T)),
              (y *= T),
              (A *= T),
              c &&
                ((T = Math.tan(c)),
                (T = Math.sqrt(1 + T * T)),
                (b *= T),
                (S *= T))),
            (b = Oe(b)),
            (S = Oe(S)),
            (y = Oe(y)),
            (A = Oe(A)))
          : ((b = p), (A = h), (S = y = 0)),
        ((E && !~(o + "").indexOf("px")) || (w && !~(a + "").indexOf("px"))) &&
          ((E = qr(d, "x", o, "px")), (w = qr(d, "y", a, "px"))),
        (_ || f || g || D) &&
          ((E = Oe(E + _ - (_ * b + f * y) + g)),
          (w = Oe(w + f - (_ * S + f * A) + D))),
        (i || s) &&
          ((T = d.getBBox()),
          (E = Oe(E + (i / 100) * T.width)),
          (w = Oe(w + (s / 100) * T.height))),
        (T =
          "matrix(" +
          b +
          "," +
          S +
          "," +
          y +
          "," +
          A +
          "," +
          E +
          "," +
          w +
          ")"),
        d.setAttribute("transform", T),
        m && (d.style[Ce] = T));
    },
    dd = function (e, t, r, i, s) {
      var o = 360,
        a = qe(s),
        u = parseFloat(s) * (a && ~s.indexOf("rad") ? vi : 1),
        l = u - i,
        c = i + l + "deg",
        p,
        h;
      return (
        a &&
          ((p = s.split("_")[1]),
          p === "short" &&
            ((l %= o), l !== l % (o / 2) && (l += l < 0 ? o : -o)),
          p === "cw" && l < 0
            ? (l = ((l + o * Pl) % o) - ~~(l / o) * o)
            : p === "ccw" && l > 0 && (l = ((l - o * Pl) % o) - ~~(l / o) * o)),
        (e._pt = h = new Dt(e._pt, t, r, i, l, jh)),
        (h.e = c),
        (h.u = "deg"),
        e._props.push(r),
        h
      );
    },
    Gl = function (e, t) {
      for (var r in t) e[r] = t[r];
      return e;
    },
    pd = function (e, t, r) {
      var i = Gl({}, r._gsap),
        s = "perspective,force3D,transformOrigin,svgOrigin",
        o = r.style,
        a,
        u,
        l,
        c,
        p,
        h,
        d,
        _;
      i.svg
        ? ((l = r.getAttribute("transform")),
          r.setAttribute("transform", ""),
          (o[Ce] = t),
          (a = Hn(r, 1)),
          Vr(r, Ce),
          r.setAttribute("transform", l))
        : ((l = getComputedStyle(r)[Ce]),
          (o[Ce] = t),
          (a = Hn(r, 1)),
          (o[Ce] = l));
      for (u in yr)
        ((l = i[u]),
          (c = a[u]),
          l !== c &&
            s.indexOf(u) < 0 &&
            ((d = rt(l)),
            (_ = rt(c)),
            (p = d !== _ ? qr(r, u, l, _) : parseFloat(l)),
            (h = parseFloat(c)),
            (e._pt = new Dt(e._pt, a, u, p, h - p, ba)),
            (e._pt.u = _ || 0),
            e._props.push(u)));
      Gl(a, i);
    };
  vt("padding,margin,Width,Radius", function (n, e) {
    var t = "Top",
      r = "Right",
      i = "Bottom",
      s = "Left",
      o = (e < 3 ? [t, r, i, s] : [t + s, t + r, i + r, i + s]).map(
        function (a) {
          return e < 2 ? n + a : "border" + a + n;
        },
      );
    Us[e > 1 ? "border" + n : n] = function (a, u, l, c, p) {
      var h, d;
      if (arguments.length < 4)
        return (
          (h = o.map(function (_) {
            return Er(a, _, l);
          })),
          (d = h.join(" ")),
          d.split(h[0]).length === 5 ? h[0] : d
        );
      ((h = (c + "").split(" ")),
        (d = {}),
        o.forEach(function (_, f) {
          return (d[_] = h[f] = h[f] || h[((f - 1) / 2) | 0]);
        }),
        a.init(u, d, p));
    };
  });
  var $l = {
    name: "css",
    register: xa,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, t, r, i, s) {
      var o = this._props,
        a = e.style,
        u = r.vars.startAt,
        l,
        c,
        p,
        h,
        d,
        _,
        f,
        g,
        D,
        m,
        E,
        w,
        b,
        S,
        y,
        A,
        T;
      (ya || xa(),
        (this.styles = this.styles || Ll(e)),
        (A = this.styles.props),
        (this.tween = r));
      for (f in t)
        if (
          f !== "autoRound" &&
          ((c = t[f]), !(St[f] && ml(f, t, r, i, e, s)))
        ) {
          if (
            ((d = typeof c),
            (_ = Us[f]),
            d === "function" && ((c = c.call(r, i, e, s)), (d = typeof c)),
            d === "string" && ~c.indexOf("random(") && (c = Rn(c)),
            _)
          )
            _(this, e, f, c, r) && (y = 1);
          else if (f.substr(0, 2) === "--")
            ((l = (getComputedStyle(e).getPropertyValue(f) + "").trim()),
              (c += ""),
              (Br.lastIndex = 0),
              Br.test(l) ||
                ((g = rt(l)),
                (D = rt(c)),
                D ? g !== D && (l = qr(e, f, l, D) + D) : g && (c += g)),
              this.add(a, "setProperty", l, c, i, s, 0, 0, f),
              o.push(f),
              A.push(f, 0, a[f]));
          else if (d !== "undefined") {
            if (
              (u && f in u
                ? ((l =
                    typeof u[f] == "function" ? u[f].call(r, i, e, s) : u[f]),
                  qe(l) && ~l.indexOf("random(") && (l = Rn(l)),
                  rt(l + "") ||
                    l === "auto" ||
                    (l += Ct.units[f] || rt(Er(e, f)) || ""),
                  (l + "").charAt(1) === "=" && (l = Er(e, f)))
                : (l = Er(e, f)),
              (h = parseFloat(l)),
              (m = d === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              m && (c = c.substr(2)),
              (p = parseFloat(c)),
              f in or &&
                (f === "autoAlpha" &&
                  (h === 1 && Er(e, "visibility") === "hidden" && p && (h = 0),
                  A.push("visibility", 0, a.visibility),
                  Wr(
                    this,
                    a,
                    "visibility",
                    h ? "inherit" : "hidden",
                    p ? "inherit" : "hidden",
                    !p,
                  )),
                f !== "scale" &&
                  f !== "transform" &&
                  ((f = or[f]), ~f.indexOf(",") && (f = f.split(",")[0]))),
              (E = f in yr),
              E)
            ) {
              if (
                (this.styles.save(f),
                (T = c),
                d === "string" && c.substring(0, 6) === "var(--")
              ) {
                if (
                  ((c = Pt(e, c.substring(4, c.indexOf(")")))),
                  c.substring(0, 5) === "calc(")
                ) {
                  var x = e.style.perspective;
                  ((e.style.perspective = c),
                    (c = Pt(e, "perspective")),
                    x ? (e.style.perspective = x) : Vr(e, "perspective"));
                }
                p = parseFloat(c);
              }
              if (
                (w ||
                  ((b = e._gsap),
                  (b.renderTransform && !t.parseTransform) ||
                    Hn(e, t.parseTransform),
                  (S = t.smoothOrigin !== !1 && b.smooth),
                  (w = this._pt =
                    new Dt(this._pt, a, Ce, 0, 1, b.renderTransform, b, 0, -1)),
                  (w.dep = 1)),
                f === "scale")
              )
                ((this._pt = new Dt(
                  this._pt,
                  b,
                  "scaleY",
                  b.scaleY,
                  (m ? Xi(b.scaleY, m + p) : p) - b.scaleY || 0,
                  ba,
                )),
                  (this._pt.u = 0),
                  o.push("scaleY", f),
                  (f += "X"));
              else if (f === "transformOrigin") {
                (A.push(yt, 0, a[yt]),
                  (c = ld(c)),
                  b.svg
                    ? Ta(e, c, 0, S, 0, this)
                    : ((D = parseFloat(c.split(" ")[2]) || 0),
                      D !== b.zOrigin && Wr(this, b, "zOrigin", b.zOrigin, D),
                      Wr(this, a, f, Gs(l), Gs(c))));
                continue;
              } else if (f === "svgOrigin") {
                Ta(e, c, 1, S, 0, this);
                continue;
              } else if (f in ql) {
                dd(this, b, f, h, m ? Xi(h, m + c) : c);
                continue;
              } else if (f === "smoothOrigin") {
                Wr(this, b, "smooth", b.smooth, c);
                continue;
              } else if (f === "force3D") {
                b[f] = c;
                continue;
              } else if (f === "transform") {
                pd(this, c, e);
                continue;
              }
            } else f in a || (f = en(f) || f);
            if (
              E ||
              ((p || p === 0) && (h || h === 0) && !$h.test(c) && f in a)
            )
              ((g = (l + "").substr((h + "").length)),
                p || (p = 0),
                (D = rt(c) || (f in Ct.units ? Ct.units[f] : g)),
                g !== D && (h = qr(e, f, l, D)),
                (this._pt = new Dt(
                  this._pt,
                  E ? b : a,
                  f,
                  h,
                  (m ? Xi(h, m + p) : p) - h,
                  !E && (D === "px" || f === "zIndex") && t.autoRound !== !1
                    ? Qh
                    : ba,
                )),
                (this._pt.u = D || 0),
                E && T !== c
                  ? ((this._pt.b = l), (this._pt.e = T), (this._pt.r = Zh))
                  : g !== D &&
                    D !== "%" &&
                    ((this._pt.b = l), (this._pt.r = Kh)));
            else if (f in a) ud.call(this, e, f, l, m ? m + c : c);
            else if (f in e) this.add(e, f, l || e[f], m ? m + c : c, i, s);
            else if (f !== "parseTransform") {
              Ko(f, c);
              continue;
            }
            (E ||
              (f in a
                ? A.push(f, 0, a[f])
                : typeof e[f] == "function"
                  ? A.push(f, 2, e[f]())
                  : A.push(f, 1, l || e[f])),
              o.push(f));
          }
        }
      y && xl(this);
    },
    render: function (e, t) {
      if (t.tween._time || !Ea())
        for (var r = t._pt; r; ) (r.r(e, r.d), (r = r._next));
      else t.styles.revert();
    },
    get: Er,
    aliases: or,
    getSetter: function (e, t, r) {
      var i = or[t];
      return (
        i && i.indexOf(",") < 0 && (t = i),
        t in yr && t !== yt && (e._gsap.x || Er(e, "x"))
          ? r && Fl === r
            ? t === "scale"
              ? rd
              : td
            : (Fl = r || {}) && (t === "scale" ? id : nd)
          : e.style && !Xo(e.style[t])
            ? Jh
            : ~t.indexOf("-")
              ? ed
              : _a(e, t)
      );
    },
    core: { _removeProperty: Vr, _getMatrix: Sa },
  };
  ((mt.utils.checkPrefix = en),
    (mt.core.getStyleSaver = Ll),
    (function (n, e, t, r) {
      var i = vt(n + "," + e + "," + t, function (s) {
        yr[s] = 1;
      });
      (vt(e, function (s) {
        ((Ct.units[s] = "deg"), (ql[s] = 1));
      }),
        (or[i[13]] = n + "," + e),
        vt(r, function (s) {
          var o = s.split(":");
          or[o[1]] = i[o[0]];
        }));
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
    ),
    vt(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (n) {
        Ct.units[n] = "px";
      },
    ),
    mt.registerPlugin($l));
  var K = mt.registerPlugin($l) || mt;
  K.core.Tween;
  const tn = { scale: 0.05, duration: 0.25 },
    jl = {
      navbarEl: document.querySelector(".navbar"),
      menuBtn: document.querySelector('[aria-controls="navbar"]'),
      menuBtnIcons: document.querySelectorAll(".navbar_header_button-icon"),
      menuIcon: document.querySelector(".navbar_header_icon"),
      menuBody: document.querySelector(".navbar_body-wrapper"),
      menuLinks: document.querySelectorAll(".navbar_body_link"),
      menuCards: document.querySelectorAll(".navbar_body_brand-card-wrapper"),
      underlay: document.querySelector(".navbar_underlay"),
      isMenuOpen: !1,
      async openMenu(n = !1) {
        const e = K.timeline();
        return (
          e.set(this.underlay, { display: "block" }),
          e.set(this.menuBody, {
            height: "0rem",
            overflow: "hidden",
            opacity: 0,
          }),
          e.set(this.menuBody, { display: "block" }),
          e.set(this.menuLinks, { opacity: 0, y: "-0.4rem" }),
          e.set(this.menuCards, { opacity: 0, scale: 0.95 }),
          e.to(this.menuBtnIcons, { y: "-1.125rem", duration: 0.3 }),
          e.to(
            this.menuIcon,
            { rotate: 180, ease: "linear", duration: 0.4 },
            "<",
          ),
          e.to(
            this.menuBody,
            { height: "auto", opacity: 1, duration: 0.4, ease: "power2.inOut" },
            "<",
          ),
          e.to(this.menuLinks, {
            opacity: 1,
            y: "",
            stagger: 0.05,
            duration: 0.2,
            delay: -0.15,
          }),
          e.to(this.menuCards, { opacity: 1, scale: 1, duration: 0.4 }, "<"),
          (this.isMenuOpen = !0),
          this.menuBtn.setAttribute("aria-expanded", !0),
          this.menuBtn.setAttribute("aria-label", "Close menu"),
          e
        );
      },
      async closeMenu(n = !1) {
        const e = K.timeline();
        return (
          e.set(this.underlay, { display: "none" }),
          e.to(this.menuBody, {
            height: "0rem",
            opacity: 0,
            duration: 0.4,
            ease: "power2.inOut",
          }),
          e.to(
            this.menuIcon,
            { rotate: 0, ease: "linear", duration: 0.4 },
            "<",
          ),
          e.to(this.menuBtnIcons, { y: "", duration: 0.3 }, "<"),
          e.set(this.menuBody, { height: "auto" }),
          e.set(this.menuBody, { display: "none" }),
          (this.isMenuOpen = !1),
          this.menuBtn.setAttribute("aria-expanded", !1),
          this.menuBtn.setAttribute("aria-label", "Open menu"),
          e
        );
      },
      async handleMenuClick() {
        this.menuBtn.addEventListener("click", async () => {
          this.isMenuOpen ? await this.closeMenu() : await this.openMenu();
        });
      },
      async handleUnderlayClick() {
        this.underlay.addEventListener("click", async () => {
          this.isMenuOpen ? await this.closeMenu() : await this.openMenu();
        });
      },
      cardsOnHover() {
        this.menuCards.forEach((n) => {
          const e = n.querySelector("img"),
            t = K.getProperty(e, "scale");
          (n.addEventListener("mouseenter", () => {
            K.to(e, { scale: t + tn.scale, duration: tn.duration });
          }),
            n.addEventListener("mouseleave", () => {
              K.to(e, { scale: t, duration: 0.2 });
            }));
        });
      },
      init() {
        let n = this.navbarEl.getAttribute("data-navbar-is-initiated");
        n == "false" &&
          (this.handleMenuClick(),
          this.handleUnderlayClick(),
          this.cardsOnHover(),
          this.navbarEl.setAttribute("data-navbar-is-initiated", !0),
          (n = "true"));
      },
    };
  var _d = "1.3.17";
  function Kl(n, e, t) {
    return Math.max(n, Math.min(e, t));
  }
  function gd(n, e, t) {
    return (1 - t) * n + t * e;
  }
  function vd(n, e, t, r) {
    return gd(n, e, 1 - Math.exp(-t * r));
  }
  function Dd(n, e) {
    return ((n % e) + e) % e;
  }
  var md = class {
    constructor() {
      q(this, "isRunning", !1);
      q(this, "value", 0);
      q(this, "from", 0);
      q(this, "to", 0);
      q(this, "currentTime", 0);
      q(this, "lerp");
      q(this, "duration");
      q(this, "easing");
      q(this, "onUpdate");
    }
    advance(n) {
      var t;
      if (!this.isRunning) return;
      let e = !1;
      if (this.duration && this.easing) {
        this.currentTime += n;
        const r = Kl(0, this.currentTime / this.duration, 1);
        e = r >= 1;
        const i = e ? 1 : this.easing(r);
        this.value = this.from + (this.to - this.from) * i;
      } else
        this.lerp
          ? ((this.value = vd(this.value, this.to, this.lerp * 60, n)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (e = !0)))
          : ((this.value = this.to), (e = !0));
      (e && this.stop(),
        (t = this.onUpdate) == null || t.call(this, this.value, e));
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(n, e, { lerp: t, duration: r, easing: i, onStart: s, onUpdate: o }) {
      ((this.from = this.value = n),
        (this.to = e),
        (this.lerp = t),
        (this.duration = r),
        (this.easing = i),
        (this.currentTime = 0),
        (this.isRunning = !0),
        s == null || s(),
        (this.onUpdate = o));
    }
  };
  function yd(n, e) {
    let t;
    return function (...r) {
      let i = this;
      (clearTimeout(t),
        (t = setTimeout(() => {
          ((t = void 0), n.apply(i, r));
        }, e)));
    };
  }
  var Ed = class {
      constructor(n, e, { autoResize: t = !0, debounce: r = 250 } = {}) {
        q(this, "width", 0);
        q(this, "height", 0);
        q(this, "scrollHeight", 0);
        q(this, "scrollWidth", 0);
        q(this, "debouncedResize");
        q(this, "wrapperResizeObserver");
        q(this, "contentResizeObserver");
        q(this, "resize", () => {
          (this.onWrapperResize(), this.onContentResize());
        });
        q(this, "onWrapperResize", () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        });
        q(this, "onContentResize", () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        });
        ((this.wrapper = n),
          (this.content = e),
          t &&
            ((this.debouncedResize = yd(this.resize, r)),
            this.wrapper instanceof Window
              ? window.addEventListener("resize", this.debouncedResize, !1)
              : ((this.wrapperResizeObserver = new ResizeObserver(
                  this.debouncedResize,
                )),
                this.wrapperResizeObserver.observe(this.wrapper)),
            (this.contentResizeObserver = new ResizeObserver(
              this.debouncedResize,
            )),
            this.contentResizeObserver.observe(this.content)),
          this.resize());
      }
      destroy() {
        var n, e;
        ((n = this.wrapperResizeObserver) == null || n.disconnect(),
          (e = this.contentResizeObserver) == null || e.disconnect(),
          this.wrapper === window &&
            this.debouncedResize &&
            window.removeEventListener("resize", this.debouncedResize, !1));
      }
      get limit() {
        return {
          x: this.scrollWidth - this.width,
          y: this.scrollHeight - this.height,
        };
      }
    },
    Zl = class {
      constructor() {
        q(this, "events", {});
      }
      emit(n, ...e) {
        var r;
        let t = this.events[n] || [];
        for (let i = 0, s = t.length; i < s; i++)
          (r = t[i]) == null || r.call(t, ...e);
      }
      on(n, e) {
        var t;
        return (
          ((t = this.events[n]) != null && t.push(e)) || (this.events[n] = [e]),
          () => {
            var r;
            this.events[n] =
              (r = this.events[n]) == null ? void 0 : r.filter((i) => e !== i);
          }
        );
      }
      off(n, e) {
        var t;
        this.events[n] =
          (t = this.events[n]) == null ? void 0 : t.filter((r) => e !== r);
      }
      destroy() {
        this.events = {};
      }
    },
    Ql = 100 / 6,
    Yr = { passive: !1 },
    wd = class {
      constructor(n, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        q(this, "touchStart", { x: 0, y: 0 });
        q(this, "lastDelta", { x: 0, y: 0 });
        q(this, "window", { width: 0, height: 0 });
        q(this, "emitter", new Zl());
        q(this, "onTouchStart", (n) => {
          const { clientX: e, clientY: t } = n.targetTouches
            ? n.targetTouches[0]
            : n;
          ((this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: n }));
        });
        q(this, "onTouchMove", (n) => {
          const { clientX: e, clientY: t } = n.targetTouches
              ? n.targetTouches[0]
              : n,
            r = -(e - this.touchStart.x) * this.options.touchMultiplier,
            i = -(t - this.touchStart.y) * this.options.touchMultiplier;
          ((this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit("scroll", { deltaX: r, deltaY: i, event: n }));
        });
        q(this, "onTouchEnd", (n) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: n,
          });
        });
        q(this, "onWheel", (n) => {
          let { deltaX: e, deltaY: t, deltaMode: r } = n;
          const i = r === 1 ? Ql : r === 2 ? this.window.width : 1,
            s = r === 1 ? Ql : r === 2 ? this.window.height : 1;
          ((e *= i),
            (t *= s),
            (e *= this.options.wheelMultiplier),
            (t *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: e, deltaY: t, event: n }));
        });
        q(this, "onWindowResize", () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        });
        ((this.element = n),
          (this.options = e),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, Yr),
          this.element.addEventListener("touchstart", this.onTouchStart, Yr),
          this.element.addEventListener("touchmove", this.onTouchMove, Yr),
          this.element.addEventListener("touchend", this.onTouchEnd, Yr));
      }
      on(n, e) {
        return this.emitter.on(n, e);
      }
      destroy() {
        (this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, Yr),
          this.element.removeEventListener("touchstart", this.onTouchStart, Yr),
          this.element.removeEventListener("touchmove", this.onTouchMove, Yr),
          this.element.removeEventListener("touchend", this.onTouchEnd, Yr));
      }
    },
    Jl = (n) => Math.min(1, 1.001 - Math.pow(2, -10 * n)),
    bd = class {
      constructor({
        wrapper: n = window,
        content: e = document.documentElement,
        eventsTarget: t = n,
        smoothWheel: r = !0,
        syncTouch: i = !1,
        syncTouchLerp: s = 0.075,
        touchInertiaExponent: o = 1.7,
        duration: a,
        easing: u,
        lerp: l = 0.1,
        infinite: c = !1,
        orientation: p = "vertical",
        gestureOrientation: h = p === "horizontal" ? "both" : "vertical",
        touchMultiplier: d = 1,
        wheelMultiplier: _ = 1,
        autoResize: f = !0,
        prevent: g,
        virtualScroll: D,
        overscroll: m = !0,
        autoRaf: E = !1,
        anchors: w = !1,
        autoToggle: b = !1,
        allowNestedScroll: S = !1,
        __experimental__naiveDimensions: y = !1,
        naiveDimensions: A = y,
        stopInertiaOnNavigate: T = !1,
      } = {}) {
        q(this, "_isScrolling", !1);
        q(this, "_isStopped", !1);
        q(this, "_isLocked", !1);
        q(this, "_preventNextNativeScrollEvent", !1);
        q(this, "_resetVelocityTimeout", null);
        q(this, "_rafId", null);
        q(this, "isTouching");
        q(this, "time", 0);
        q(this, "userData", {});
        q(this, "lastVelocity", 0);
        q(this, "velocity", 0);
        q(this, "direction", 0);
        q(this, "options");
        q(this, "targetScroll");
        q(this, "animatedScroll");
        q(this, "animate", new md());
        q(this, "emitter", new Zl());
        q(this, "dimensions");
        q(this, "virtualScroll");
        q(this, "onScrollEnd", (n) => {
          n instanceof CustomEvent ||
            ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
              n.stopPropagation());
        });
        q(this, "dispatchScrollendEvent", () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            }),
          );
        });
        q(this, "onTransitionEnd", (n) => {
          n.propertyName.includes("overflow") && this.checkOverflow();
        });
        q(this, "onClick", (n) => {
          const t = n
            .composedPath()
            .filter(
              (r) => r instanceof HTMLAnchorElement && r.getAttribute("href"),
            );
          if (this.options.anchors) {
            const r = t.find((i) => {
              var s;
              return (s = i.getAttribute("href")) == null
                ? void 0
                : s.includes("#");
            });
            if (r) {
              const i = r.getAttribute("href");
              if (i) {
                const s =
                    typeof this.options.anchors == "object" &&
                    this.options.anchors
                      ? this.options.anchors
                      : void 0,
                  o = `#${i.split("#")[1]}`;
                this.scrollTo(o, s);
              }
            }
          }
          this.options.stopInertiaOnNavigate &&
            t.find((i) => i.host === window.location.host) &&
            this.reset();
        });
        q(this, "onPointerDown", (n) => {
          n.button === 1 && this.reset();
        });
        q(this, "onVirtualScroll", (n) => {
          if (
            typeof this.options.virtualScroll == "function" &&
            this.options.virtualScroll(n) === !1
          )
            return;
          const { deltaX: e, deltaY: t, event: r } = n;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: e,
              deltaY: t,
              event: r,
            }),
            r.ctrlKey || r.lenisStopPropagation)
          )
            return;
          const i = r.type.includes("touch"),
            s = r.type.includes("wheel");
          this.isTouching = r.type === "touchstart" || r.type === "touchmove";
          const o = e === 0 && t === 0;
          if (
            this.options.syncTouch &&
            i &&
            r.type === "touchstart" &&
            o &&
            !this.isStopped &&
            !this.isLocked
          ) {
            this.reset();
            return;
          }
          const u =
            (this.options.gestureOrientation === "vertical" && t === 0) ||
            (this.options.gestureOrientation === "horizontal" && e === 0);
          if (o || u) return;
          let l = r.composedPath();
          l = l.slice(0, l.indexOf(this.rootElement));
          const c = this.options.prevent;
          if (
            l.find((g) => {
              var D, m, E;
              return (
                g instanceof HTMLElement &&
                ((typeof c == "function" && (c == null ? void 0 : c(g))) ||
                  ((D = g.hasAttribute) == null
                    ? void 0
                    : D.call(g, "data-lenis-prevent")) ||
                  (i &&
                    ((m = g.hasAttribute) == null
                      ? void 0
                      : m.call(g, "data-lenis-prevent-touch"))) ||
                  (s &&
                    ((E = g.hasAttribute) == null
                      ? void 0
                      : E.call(g, "data-lenis-prevent-wheel"))) ||
                  (this.options.allowNestedScroll &&
                    this.checkNestedScroll(g, { deltaX: e, deltaY: t })))
              );
            })
          )
            return;
          if (this.isStopped || this.isLocked) {
            r.cancelable && r.preventDefault();
            return;
          }
          if (
            !((this.options.syncTouch && i) || (this.options.smoothWheel && s))
          ) {
            ((this.isScrolling = "native"),
              this.animate.stop(),
              (r.lenisStopPropagation = !0));
            return;
          }
          let h = t;
          (this.options.gestureOrientation === "both"
            ? (h = Math.abs(t) > Math.abs(e) ? t : e)
            : this.options.gestureOrientation === "horizontal" && (h = e),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== window &&
                this.limit > 0 &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && t > 0) ||
                  (this.animatedScroll === this.limit && t < 0)))) &&
              (r.lenisStopPropagation = !0),
            r.cancelable && r.preventDefault());
          const d = i && this.options.syncTouch,
            f = i && r.type === "touchend";
          (f &&
            (h =
              Math.sign(this.velocity) *
              Math.pow(
                Math.abs(this.velocity),
                this.options.touchInertiaExponent,
              )),
            this.scrollTo(this.targetScroll + h, {
              programmatic: !1,
              ...(d
                ? { lerp: f ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            }));
        });
        q(this, "onNativeScroll", () => {
          if (
            (this._resetVelocityTimeout !== null &&
              (clearTimeout(this._resetVelocityTimeout),
              (this._resetVelocityTimeout = null)),
            this._preventNextNativeScrollEvent)
          ) {
            this._preventNextNativeScrollEvent = !1;
            return;
          }
          if (this.isScrolling === !1 || this.isScrolling === "native") {
            const n = this.animatedScroll;
            ((this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - n),
              (this.direction = Math.sign(this.animatedScroll - n)),
              this.isStopped || (this.isScrolling = "native"),
              this.emit(),
              this.velocity !== 0 &&
                (this._resetVelocityTimeout = setTimeout(() => {
                  ((this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit());
                }, 400)));
          }
        });
        q(this, "raf", (n) => {
          const e = n - (this.time || n);
          ((this.time = n),
            this.animate.advance(e * 0.001),
            this.options.autoRaf &&
              (this._rafId = requestAnimationFrame(this.raf)));
        });
        ((window.lenisVersion = _d),
          (!n || n === document.documentElement) && (n = window),
          typeof a == "number" && typeof u != "function"
            ? (u = Jl)
            : typeof u == "function" && typeof a != "number" && (a = 1),
          (this.options = {
            wrapper: n,
            content: e,
            eventsTarget: t,
            smoothWheel: r,
            syncTouch: i,
            syncTouchLerp: s,
            touchInertiaExponent: o,
            duration: a,
            easing: u,
            lerp: l,
            infinite: c,
            gestureOrientation: h,
            orientation: p,
            touchMultiplier: d,
            wheelMultiplier: _,
            autoResize: f,
            prevent: g,
            virtualScroll: D,
            overscroll: m,
            autoRaf: E,
            anchors: w,
            autoToggle: b,
            allowNestedScroll: S,
            naiveDimensions: A,
            stopInertiaOnNavigate: T,
          }),
          (this.dimensions = new Ed(n, e, { autoResize: f })),
          this.updateClassName(),
          (this.targetScroll = this.animatedScroll = this.actualScroll),
          this.options.wrapper.addEventListener(
            "scroll",
            this.onNativeScroll,
            !1,
          ),
          this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
            capture: !0,
          }),
          (this.options.anchors || this.options.stopInertiaOnNavigate) &&
            this.options.wrapper.addEventListener("click", this.onClick, !1),
          this.options.wrapper.addEventListener(
            "pointerdown",
            this.onPointerDown,
            !1,
          ),
          (this.virtualScroll = new wd(t, {
            touchMultiplier: d,
            wheelMultiplier: _,
          })),
          this.virtualScroll.on("scroll", this.onVirtualScroll),
          this.options.autoToggle &&
            (this.checkOverflow(),
            this.rootElement.addEventListener(
              "transitionend",
              this.onTransitionEnd,
              { passive: !0 },
            )),
          this.options.autoRaf &&
            (this._rafId = requestAnimationFrame(this.raf)));
      }
      destroy() {
        (this.emitter.destroy(),
          this.options.wrapper.removeEventListener(
            "scroll",
            this.onNativeScroll,
            !1,
          ),
          this.options.wrapper.removeEventListener(
            "scrollend",
            this.onScrollEnd,
            { capture: !0 },
          ),
          this.options.wrapper.removeEventListener(
            "pointerdown",
            this.onPointerDown,
            !1,
          ),
          (this.options.anchors || this.options.stopInertiaOnNavigate) &&
            this.options.wrapper.removeEventListener("click", this.onClick, !1),
          this.virtualScroll.destroy(),
          this.dimensions.destroy(),
          this.cleanUpClassName(),
          this._rafId && cancelAnimationFrame(this._rafId));
      }
      on(n, e) {
        return this.emitter.on(n, e);
      }
      off(n, e) {
        return this.emitter.off(n, e);
      }
      get overflow() {
        const n = this.isHorizontal ? "overflow-x" : "overflow-y";
        return getComputedStyle(this.rootElement)[n];
      }
      checkOverflow() {
        ["hidden", "clip"].includes(this.overflow)
          ? this.internalStop()
          : this.internalStart();
      }
      setScroll(n) {
        this.isHorizontal
          ? this.options.wrapper.scrollTo({ left: n, behavior: "instant" })
          : this.options.wrapper.scrollTo({ top: n, behavior: "instant" });
      }
      resize() {
        (this.dimensions.resize(),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          this.emit());
      }
      emit() {
        this.emitter.emit("scroll", this);
      }
      reset() {
        ((this.isLocked = !1),
          (this.isScrolling = !1),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          (this.lastVelocity = this.velocity = 0),
          this.animate.stop());
      }
      start() {
        if (this.isStopped) {
          if (this.options.autoToggle) {
            this.rootElement.style.removeProperty("overflow");
            return;
          }
          this.internalStart();
        }
      }
      internalStart() {
        this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
      }
      stop() {
        if (!this.isStopped) {
          if (this.options.autoToggle) {
            this.rootElement.style.setProperty("overflow", "clip");
            return;
          }
          this.internalStop();
        }
      }
      internalStop() {
        this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
      }
      scrollTo(
        n,
        {
          offset: e = 0,
          immediate: t = !1,
          lock: r = !1,
          programmatic: i = !0,
          lerp: s = i ? this.options.lerp : void 0,
          duration: o = i ? this.options.duration : void 0,
          easing: a = i ? this.options.easing : void 0,
          onStart: u,
          onComplete: l,
          force: c = !1,
          userData: p,
        } = {},
      ) {
        if (!((this.isStopped || this.isLocked) && !c)) {
          if (typeof n == "string" && ["top", "left", "start", "#"].includes(n))
            n = 0;
          else if (
            typeof n == "string" &&
            ["bottom", "right", "end"].includes(n)
          )
            n = this.limit;
          else {
            let h;
            if (
              (typeof n == "string"
                ? ((h = document.querySelector(n)),
                  h ||
                    (n === "#top"
                      ? (n = 0)
                      : console.warn("Lenis: Target not found", n)))
                : n instanceof HTMLElement &&
                  n != null &&
                  n.nodeType &&
                  (h = n),
              h)
            ) {
              if (this.options.wrapper !== window) {
                const _ = this.rootElement.getBoundingClientRect();
                e -= this.isHorizontal ? _.left : _.top;
              }
              const d = h.getBoundingClientRect();
              n = (this.isHorizontal ? d.left : d.top) + this.animatedScroll;
            }
          }
          if (typeof n == "number") {
            if (((n += e), (n = Math.round(n)), this.options.infinite)) {
              if (i) {
                this.targetScroll = this.animatedScroll = this.scroll;
                const h = n - this.animatedScroll;
                h > this.limit / 2
                  ? (n = n - this.limit)
                  : h < -this.limit / 2 && (n = n + this.limit);
              }
            } else n = Kl(0, n, this.limit);
            if (n === this.targetScroll) {
              (u == null || u(this), l == null || l(this));
              return;
            }
            if (((this.userData = p ?? {}), t)) {
              ((this.animatedScroll = this.targetScroll = n),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                l == null || l(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                }));
              return;
            }
            (i || (this.targetScroll = n),
              typeof o == "number" && typeof a != "function"
                ? (a = Jl)
                : typeof a == "function" && typeof o != "number" && (o = 1),
              this.animate.fromTo(this.animatedScroll, n, {
                duration: o,
                easing: a,
                lerp: s,
                onStart: () => {
                  (r && (this.isLocked = !0),
                    (this.isScrolling = "smooth"),
                    u == null || u(this));
                },
                onUpdate: (h, d) => {
                  ((this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = h - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = h),
                    this.setScroll(this.scroll),
                    i && (this.targetScroll = h),
                    d || this.emit(),
                    d &&
                      (this.reset(),
                      this.emit(),
                      l == null || l(this),
                      (this.userData = {}),
                      requestAnimationFrame(() => {
                        this.dispatchScrollendEvent();
                      }),
                      this.preventNextNativeScrollEvent()));
                },
              }));
          }
        }
      }
      preventNextNativeScrollEvent() {
        ((this._preventNextNativeScrollEvent = !0),
          requestAnimationFrame(() => {
            this._preventNextNativeScrollEvent = !1;
          }));
      }
      checkNestedScroll(n, { deltaX: e, deltaY: t }) {
        const r = Date.now(),
          i = n._lenis ?? (n._lenis = {});
        let s, o, a, u, l, c, p, h;
        const d = this.options.gestureOrientation;
        if (r - (i.time ?? 0) > 2e3) {
          i.time = Date.now();
          const b = window.getComputedStyle(n);
          i.computedStyle = b;
          const S = b.overflowX,
            y = b.overflowY;
          if (
            ((s = ["auto", "overlay", "scroll"].includes(S)),
            (o = ["auto", "overlay", "scroll"].includes(y)),
            (i.hasOverflowX = s),
            (i.hasOverflowY = o),
            (!s && !o) ||
              (d === "vertical" && !o) ||
              (d === "horizontal" && !s))
          )
            return !1;
          ((l = n.scrollWidth),
            (c = n.scrollHeight),
            (p = n.clientWidth),
            (h = n.clientHeight),
            (a = l > p),
            (u = c > h),
            (i.isScrollableX = a),
            (i.isScrollableY = u),
            (i.scrollWidth = l),
            (i.scrollHeight = c),
            (i.clientWidth = p),
            (i.clientHeight = h));
        } else
          ((a = i.isScrollableX),
            (u = i.isScrollableY),
            (s = i.hasOverflowX),
            (o = i.hasOverflowY),
            (l = i.scrollWidth),
            (c = i.scrollHeight),
            (p = i.clientWidth),
            (h = i.clientHeight));
        if (
          (!s && !o) ||
          (!a && !u) ||
          (d === "vertical" && (!o || !u)) ||
          (d === "horizontal" && (!s || !a))
        )
          return !1;
        let _;
        if (d === "horizontal") _ = "x";
        else if (d === "vertical") _ = "y";
        else {
          const b = e !== 0,
            S = t !== 0;
          (b && s && a && (_ = "x"), S && o && u && (_ = "y"));
        }
        if (!_) return !1;
        let f, g, D, m, E;
        if (_ === "x")
          ((f = n.scrollLeft), (g = l - p), (D = e), (m = s), (E = a));
        else if (_ === "y")
          ((f = n.scrollTop), (g = c - h), (D = t), (m = o), (E = u));
        else return !1;
        return (D > 0 ? f < g : f > 0) && m && E;
      }
      get rootElement() {
        return this.options.wrapper === window
          ? document.documentElement
          : this.options.wrapper;
      }
      get limit() {
        return this.options.naiveDimensions
          ? this.isHorizontal
            ? this.rootElement.scrollWidth - this.rootElement.clientWidth
            : this.rootElement.scrollHeight - this.rootElement.clientHeight
          : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
      }
      get isHorizontal() {
        return this.options.orientation === "horizontal";
      }
      get actualScroll() {
        const n = this.options.wrapper;
        return this.isHorizontal
          ? (n.scrollX ?? n.scrollLeft)
          : (n.scrollY ?? n.scrollTop);
      }
      get scroll() {
        return this.options.infinite
          ? Dd(this.animatedScroll, this.limit)
          : this.animatedScroll;
      }
      get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
      }
      get isScrolling() {
        return this._isScrolling;
      }
      set isScrolling(n) {
        this._isScrolling !== n &&
          ((this._isScrolling = n), this.updateClassName());
      }
      get isStopped() {
        return this._isStopped;
      }
      set isStopped(n) {
        this._isStopped !== n &&
          ((this._isStopped = n), this.updateClassName());
      }
      get isLocked() {
        return this._isLocked;
      }
      set isLocked(n) {
        this._isLocked !== n && ((this._isLocked = n), this.updateClassName());
      }
      get isSmooth() {
        return this.isScrolling === "smooth";
      }
      get className() {
        let n = "lenis";
        return (
          this.options.autoToggle && (n += " lenis-autoToggle"),
          this.isStopped && (n += " lenis-stopped"),
          this.isLocked && (n += " lenis-locked"),
          this.isScrolling && (n += " lenis-scrolling"),
          this.isScrolling === "smooth" && (n += " lenis-smooth"),
          n
        );
      }
      updateClassName() {
        (this.cleanUpClassName(),
          (this.rootElement.className =
            `${this.rootElement.className} ${this.className}`.trim()));
      }
      cleanUpClassName() {
        this.rootElement.className = this.rootElement.className
          .replace(/lenis(-\w+)?/g, "")
          .trim();
      }
    };
  function Cd(n, e) {
    for (var t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(n, r.key, r));
    }
  }
  function xd(n, e, t) {
    return (e && Cd(n.prototype, e), n);
  }
  /*!
   * Observer 3.14.2
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Ze,
    $s,
    Ot,
    Xr,
    Ur,
    rn,
    ec,
    yi,
    Wn,
    tc,
    wr,
    $t,
    rc,
    ic = function () {
      return (
        Ze ||
        (typeof window < "u" && (Ze = window.gsap) && Ze.registerPlugin && Ze)
      );
    },
    nc = 1,
    nn = [],
    ie = [],
    ar = [],
    qn = Date.now,
    Fa = function (e, t) {
      return t;
    },
    Sd = function () {
      var e = Wn.core,
        t = e.bridge || {},
        r = e._scrollers,
        i = e._proxies;
      (r.push.apply(r, ie),
        i.push.apply(i, ar),
        (ie = r),
        (ar = i),
        (Fa = function (o, a) {
          return t[o](a);
        }));
    },
    Gr = function (e, t) {
      return ~ar.indexOf(e) && ar[ar.indexOf(e) + 1][t];
    },
    Yn = function (e) {
      return !!~tc.indexOf(e);
    },
    ct = function (e, t, r, i, s) {
      return e.addEventListener(t, r, { passive: i !== !1, capture: !!s });
    },
    ft = function (e, t, r, i) {
      return e.removeEventListener(t, r, !!i);
    },
    js = "scrollLeft",
    Ks = "scrollTop",
    Pa = function () {
      return (wr && wr.isPressed) || ie.cache++;
    },
    Zs = function (e, t) {
      var r = function i(s) {
        if (s || s === 0) {
          nc && (Ot.history.scrollRestoration = "manual");
          var o = wr && wr.isPressed;
          ((s = i.v = Math.round(s) || (wr && wr.iOS ? 1 : 0)),
            e(s),
            (i.cacheID = ie.cache),
            o && Fa("ss", s));
        } else
          (t || ie.cache !== i.cacheID || Fa("ref")) &&
            ((i.cacheID = ie.cache), (i.v = e()));
        return i.v + i.offset;
      };
      return ((r.offset = 0), e && r);
    },
    ht = {
      s: js,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: Zs(function (n) {
        return arguments.length
          ? Ot.scrollTo(n, Be.sc())
          : Ot.pageXOffset || Xr[js] || Ur[js] || rn[js] || 0;
      }),
    },
    Be = {
      s: Ks,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: ht,
      sc: Zs(function (n) {
        return arguments.length
          ? Ot.scrollTo(ht.sc(), n)
          : Ot.pageYOffset || Xr[Ks] || Ur[Ks] || rn[Ks] || 0;
      }),
    },
    Et = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || Ze.utils.toArray)(e)[0] ||
        (typeof e == "string" && Ze.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    Td = function (e, t) {
      for (var r = t.length; r--; )
        if (t[r] === e || t[r].contains(e)) return !0;
      return !1;
    },
    $r = function (e, t) {
      var r = t.s,
        i = t.sc;
      Yn(e) && (e = Xr.scrollingElement || Ur);
      var s = ie.indexOf(e),
        o = i === Be.sc ? 1 : 2;
      (!~s && (s = ie.push(e) - 1), ie[s + o] || ct(e, "scroll", Pa));
      var a = ie[s + o],
        u =
          a ||
          (ie[s + o] =
            Zs(Gr(e, r), !0) ||
            (Yn(e)
              ? i
              : Zs(function (l) {
                  return arguments.length ? (e[r] = l) : e[r];
                })));
      return (
        (u.target = e),
        a || (u.smooth = Ze.getProperty(e, "scrollBehavior") === "smooth"),
        u
      );
    },
    Oa = function (e, t, r) {
      var i = e,
        s = e,
        o = qn(),
        a = o,
        u = t || 50,
        l = Math.max(500, u * 3),
        c = function (_, f) {
          var g = qn();
          f || g - o > u
            ? ((s = i), (i = _), (a = o), (o = g))
            : r
              ? (i += _)
              : (i = s + ((_ - s) / (g - a)) * (o - a));
        },
        p = function () {
          ((s = i = r ? 0 : i), (a = o = 0));
        },
        h = function (_) {
          var f = a,
            g = s,
            D = qn();
          return (
            (_ || _ === 0) && _ !== i && c(_),
            o === a || D - a > l
              ? 0
              : ((i + (r ? g : -g)) / ((r ? D : o) - f)) * 1e3
          );
        };
      return { update: c, reset: p, getVelocity: h };
    },
    Xn = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    sc = function (e) {
      var t = Math.max.apply(Math, e),
        r = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(r) ? t : r;
    },
    oc = function () {
      ((Wn = Ze.core.globals().ScrollTrigger), Wn && Wn.core && Sd());
    },
    ac = function (e) {
      return (
        (Ze = e || ic()),
        !$s &&
          Ze &&
          typeof document < "u" &&
          document.body &&
          ((Ot = window),
          (Xr = document),
          (Ur = Xr.documentElement),
          (rn = Xr.body),
          (tc = [Ot, Xr, Ur, rn]),
          Ze.utils.clamp,
          (rc = Ze.core.context || function () {}),
          (yi = "onpointerenter" in rn ? "pointer" : "mouse"),
          (ec = ke.isTouch =
            Ot.matchMedia &&
            Ot.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Ot ||
                  navigator.maxTouchPoints > 0 ||
                  navigator.msMaxTouchPoints > 0
                ? 2
                : 0),
          ($t = ke.eventTypes =
            (
              "ontouchstart" in Ur
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Ur
                  ? "pointerdown,pointermove,pointercancel,pointerup"
                  : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (nc = 0);
          }, 500),
          oc(),
          ($s = 1)),
        $s
      );
    };
  ((ht.op = Be), (ie.cache = 0));
  var ke = (function () {
    function n(t) {
      this.init(t);
    }
    var e = n.prototype;
    return (
      (e.init = function (r) {
        ($s || ac(Ze) || console.warn("Please gsap.registerPlugin(Observer)"),
          Wn || oc());
        var i = r.tolerance,
          s = r.dragMinimum,
          o = r.type,
          a = r.target,
          u = r.lineHeight,
          l = r.debounce,
          c = r.preventDefault,
          p = r.onStop,
          h = r.onStopDelay,
          d = r.ignore,
          _ = r.wheelSpeed,
          f = r.event,
          g = r.onDragStart,
          D = r.onDragEnd,
          m = r.onDrag,
          E = r.onPress,
          w = r.onRelease,
          b = r.onRight,
          S = r.onLeft,
          y = r.onUp,
          A = r.onDown,
          T = r.onChangeX,
          x = r.onChangeY,
          P = r.onChange,
          C = r.onToggleX,
          O = r.onToggleY,
          k = r.onHover,
          R = r.onHoverEnd,
          V = r.onMove,
          z = r.ignoreCheck,
          I = r.isNormalizer,
          L = r.onGestureStart,
          v = r.onGestureEnd,
          B = r.onWheel,
          Y = r.onEnable,
          he = r.onDisable,
          te = r.onClick,
          De = r.scrollSpeed,
          N = r.capture,
          G = r.allowClicks,
          fe = r.lockAxis,
          se = r.onLockAxis;
        ((this.target = a = Et(a) || Ur),
          (this.vars = r),
          d && (d = Ze.utils.toArray(d)),
          (i = i || 1e-9),
          (s = s || 0),
          (_ = _ || 1),
          (De = De || 1),
          (o = o || "wheel,touch,pointer"),
          (l = l !== !1),
          u || (u = parseFloat(Ot.getComputedStyle(rn).lineHeight) || 22));
        var ye,
          Qe,
          Ue,
          M,
          $,
          Ae,
          Ve,
          F = this,
          Mt = 0,
          Pr = 0,
          si = r.passive || (!c && r.passive !== !1),
          Fe = $r(a, ht),
          Or = $r(a, Be),
          oi = Fe(),
          Bi = Or(),
          Ge =
            ~o.indexOf("touch") &&
            !~o.indexOf("pointer") &&
            $t[0] === "pointerdown",
          ai = Yn(a),
          Re = a.ownerDocument || Xr,
          Qt = [0, 0, 0],
          Ut = [0, 0, 0],
          kr = 0,
          Ps = function () {
            return (kr = qn());
          },
          Ne = function (U, le) {
            return (
              ((F.event = U) && d && Td(U.target, d)) ||
              (le && Ge && U.pointerType !== "touch") ||
              (z && z(U, le))
            );
          },
          Ho = function () {
            (F._vx.reset(), F._vy.reset(), Qe.pause(), p && p(F));
          },
          Rr = function () {
            var U = (F.deltaX = sc(Qt)),
              le = (F.deltaY = sc(Ut)),
              H = Math.abs(U) >= i,
              Z = Math.abs(le) >= i;
            (P && (H || Z) && P(F, U, le, Qt, Ut),
              H &&
                (b && F.deltaX > 0 && b(F),
                S && F.deltaX < 0 && S(F),
                T && T(F),
                C && F.deltaX < 0 != Mt < 0 && C(F),
                (Mt = F.deltaX),
                (Qt[0] = Qt[1] = Qt[2] = 0)),
              Z &&
                (A && F.deltaY > 0 && A(F),
                y && F.deltaY < 0 && y(F),
                x && x(F),
                O && F.deltaY < 0 != Pr < 0 && O(F),
                (Pr = F.deltaY),
                (Ut[0] = Ut[1] = Ut[2] = 0)),
              (M || Ue) &&
                (V && V(F),
                Ue && (g && Ue === 1 && g(F), m && m(F), (Ue = 0)),
                (M = !1)),
              Ae && !(Ae = !1) && se && se(F),
              $ && (B(F), ($ = !1)),
              (ye = 0));
          },
          xn = function (U, le, H) {
            ((Qt[H] += U),
              (Ut[H] += le),
              F._vx.update(U),
              F._vy.update(le),
              l ? ye || (ye = requestAnimationFrame(Rr)) : Rr());
          },
          Sn = function (U, le) {
            (fe &&
              !Ve &&
              ((F.axis = Ve = Math.abs(U) > Math.abs(le) ? "x" : "y"),
              (Ae = !0)),
              Ve !== "y" && ((Qt[2] += U), F._vx.update(U, !0)),
              Ve !== "x" && ((Ut[2] += le), F._vy.update(le, !0)),
              l ? ye || (ye = requestAnimationFrame(Rr)) : Rr());
          },
          ui = function (U) {
            if (!Ne(U, 1)) {
              U = Xn(U, c);
              var le = U.clientX,
                H = U.clientY,
                Z = le - F.x,
                X = H - F.y,
                Q = F.isDragging;
              ((F.x = le),
                (F.y = H),
                (Q ||
                  ((Z || X) &&
                    (Math.abs(F.startX - le) >= s ||
                      Math.abs(F.startY - H) >= s))) &&
                  (Ue || (Ue = Q ? 2 : 1), Q || (F.isDragging = !0), Sn(Z, X)));
            }
          },
          zi = (F.onPress = function (J) {
            Ne(J, 1) ||
              (J && J.button) ||
              ((F.axis = Ve = null),
              Qe.pause(),
              (F.isPressed = !0),
              (J = Xn(J)),
              (Mt = Pr = 0),
              (F.startX = F.x = J.clientX),
              (F.startY = F.y = J.clientY),
              F._vx.reset(),
              F._vy.reset(),
              ct(I ? a : Re, $t[1], ui, si, !0),
              (F.deltaX = F.deltaY = 0),
              E && E(F));
          }),
          oe = (F.onRelease = function (J) {
            if (!Ne(J, 1)) {
              ft(I ? a : Re, $t[1], ui, !0);
              var U = !isNaN(F.y - F.startY),
                le = F.isDragging,
                H =
                  le &&
                  (Math.abs(F.x - F.startX) > 3 ||
                    Math.abs(F.y - F.startY) > 3),
                Z = Xn(J);
              (!H &&
                U &&
                (F._vx.reset(),
                F._vy.reset(),
                c &&
                  G &&
                  Ze.delayedCall(0.08, function () {
                    if (qn() - kr > 300 && !J.defaultPrevented) {
                      if (J.target.click) J.target.click();
                      else if (Re.createEvent) {
                        var X = Re.createEvent("MouseEvents");
                        (X.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Ot,
                          1,
                          Z.screenX,
                          Z.screenY,
                          Z.clientX,
                          Z.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null,
                        ),
                          J.target.dispatchEvent(X));
                      }
                    }
                  })),
                (F.isDragging = F.isGesturing = F.isPressed = !1),
                p && le && !I && Qe.restart(!0),
                Ue && Rr(),
                D && le && D(F),
                w && w(F, H));
            }
          }),
          Hi = function (U) {
            return (
              U.touches &&
              U.touches.length > 1 &&
              (F.isGesturing = !0) &&
              L(U, F.isDragging)
            );
          },
          Jt = function () {
            return (F.isGesturing = !1) || v(F);
          },
          er = function (U) {
            if (!Ne(U)) {
              var le = Fe(),
                H = Or();
              (xn((le - oi) * De, (H - Bi) * De, 1),
                (oi = le),
                (Bi = H),
                p && Qe.restart(!0));
            }
          },
          tr = function (U) {
            if (!Ne(U)) {
              ((U = Xn(U, c)), B && ($ = !0));
              var le =
                (U.deltaMode === 1
                  ? u
                  : U.deltaMode === 2
                    ? Ot.innerHeight
                    : 1) * _;
              (xn(U.deltaX * le, U.deltaY * le, 0), p && !I && Qe.restart(!0));
            }
          },
          Vi = function (U) {
            if (!Ne(U)) {
              var le = U.clientX,
                H = U.clientY,
                Z = le - F.x,
                X = H - F.y;
              ((F.x = le),
                (F.y = H),
                (M = !0),
                p && Qe.restart(!0),
                (Z || X) && Sn(Z, X));
            }
          },
          Tn = function (U) {
            ((F.event = U), k(F));
          },
          Lr = function (U) {
            ((F.event = U), R(F));
          },
          Os = function (U) {
            return Ne(U) || (Xn(U, c) && te(F));
          };
        ((Qe = F._dc = Ze.delayedCall(h || 0.25, Ho).pause()),
          (F.deltaX = F.deltaY = 0),
          (F._vx = Oa(0, 50, !0)),
          (F._vy = Oa(0, 50, !0)),
          (F.scrollX = Fe),
          (F.scrollY = Or),
          (F.isDragging = F.isGesturing = F.isPressed = !1),
          rc(this),
          (F.enable = function (J) {
            return (
              F.isEnabled ||
                (ct(ai ? Re : a, "scroll", Pa),
                o.indexOf("scroll") >= 0 &&
                  ct(ai ? Re : a, "scroll", er, si, N),
                o.indexOf("wheel") >= 0 && ct(a, "wheel", tr, si, N),
                ((o.indexOf("touch") >= 0 && ec) ||
                  o.indexOf("pointer") >= 0) &&
                  (ct(a, $t[0], zi, si, N),
                  ct(Re, $t[2], oe),
                  ct(Re, $t[3], oe),
                  G && ct(a, "click", Ps, !0, !0),
                  te && ct(a, "click", Os),
                  L && ct(Re, "gesturestart", Hi),
                  v && ct(Re, "gestureend", Jt),
                  k && ct(a, yi + "enter", Tn),
                  R && ct(a, yi + "leave", Lr),
                  V && ct(a, yi + "move", Vi)),
                (F.isEnabled = !0),
                (F.isDragging = F.isGesturing = F.isPressed = M = Ue = !1),
                F._vx.reset(),
                F._vy.reset(),
                (oi = Fe()),
                (Bi = Or()),
                J && J.type && zi(J),
                Y && Y(F)),
              F
            );
          }),
          (F.disable = function () {
            F.isEnabled &&
              (nn.filter(function (J) {
                return J !== F && Yn(J.target);
              }).length || ft(ai ? Re : a, "scroll", Pa),
              F.isPressed &&
                (F._vx.reset(), F._vy.reset(), ft(I ? a : Re, $t[1], ui, !0)),
              ft(ai ? Re : a, "scroll", er, N),
              ft(a, "wheel", tr, N),
              ft(a, $t[0], zi, N),
              ft(Re, $t[2], oe),
              ft(Re, $t[3], oe),
              ft(a, "click", Ps, !0),
              ft(a, "click", Os),
              ft(Re, "gesturestart", Hi),
              ft(Re, "gestureend", Jt),
              ft(a, yi + "enter", Tn),
              ft(a, yi + "leave", Lr),
              ft(a, yi + "move", Vi),
              (F.isEnabled = F.isPressed = F.isDragging = !1),
              he && he(F));
          }),
          (F.kill = F.revert =
            function () {
              F.disable();
              var J = nn.indexOf(F);
              (J >= 0 && nn.splice(J, 1), wr === F && (wr = 0));
            }),
          nn.push(F),
          I && Yn(a) && (wr = F),
          F.enable(f));
      }),
      xd(n, [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]),
      n
    );
  })();
  ((ke.version = "3.14.2"),
    (ke.create = function (n) {
      return new ke(n);
    }),
    (ke.register = ac),
    (ke.getAll = function () {
      return nn.slice();
    }),
    (ke.getById = function (n) {
      return nn.filter(function (e) {
        return e.vars.id === n;
      })[0];
    }),
    ic() && Ze.registerPlugin(ke));
  /*!
   * ScrollTrigger 3.14.2
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var W,
    sn,
    ne,
    ge,
    kt,
    ce,
    ka,
    Qs,
    Un,
    Gn,
    $n,
    Js,
    it,
    eo,
    Ra,
    dt,
    uc,
    lc,
    on,
    cc,
    La,
    fc,
    pt,
    Ma,
    hc,
    dc,
    jr,
    Ia,
    Na,
    an,
    Ba,
    jn,
    za,
    Ha,
    to = 1,
    nt = Date.now,
    Va = nt(),
    Ht = 0,
    Kn = 0,
    pc = function (e, t, r) {
      var i = Rt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return ((r["_" + t + "Clamp"] = i), i ? e.substr(6, e.length - 7) : e);
    },
    _c = function (e, t) {
      return t && (!Rt(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    Ad = function n() {
      return Kn && requestAnimationFrame(n);
    },
    gc = function () {
      return (eo = 1);
    },
    vc = function () {
      return (eo = 0);
    },
    ur = function (e) {
      return e;
    },
    Zn = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Dc = function () {
      return typeof window < "u";
    },
    mc = function () {
      return W || (Dc() && (W = window.gsap) && W.registerPlugin && W);
    },
    Ei = function (e) {
      return !!~ka.indexOf(e);
    },
    yc = function (e) {
      return (
        (e === "Height" ? Ba : ne["inner" + e]) ||
        kt["client" + e] ||
        ce["client" + e]
      );
    },
    Ec = function (e) {
      return (
        Gr(e, "getBoundingClientRect") ||
        (Ei(e)
          ? function () {
              return ((_o.width = ne.innerWidth), (_o.height = Ba), _o);
            }
          : function () {
              return br(e);
            })
      );
    },
    Fd = function (e, t, r) {
      var i = r.d,
        s = r.d2,
        o = r.a;
      return (o = Gr(e, "getBoundingClientRect"))
        ? function () {
            return o()[i];
          }
        : function () {
            return (t ? yc(s) : e["client" + s]) || 0;
          };
    },
    Pd = function (e, t) {
      return !t || ~ar.indexOf(e)
        ? Ec(e)
        : function () {
            return _o;
          };
    },
    lr = function (e, t) {
      var r = t.s,
        i = t.d2,
        s = t.d,
        o = t.a;
      return Math.max(
        0,
        (r = "scroll" + i) && (o = Gr(e, r))
          ? o() - Ec(e)()[s]
          : Ei(e)
            ? (kt[r] || ce[r]) - yc(i)
            : e[r] - e["offset" + i],
      );
    },
    ro = function (e, t) {
      for (var r = 0; r < on.length; r += 3)
        (!t || ~t.indexOf(on[r + 1])) && e(on[r], on[r + 1], on[r + 2]);
    },
    Rt = function (e) {
      return typeof e == "string";
    },
    st = function (e) {
      return typeof e == "function";
    },
    Qn = function (e) {
      return typeof e == "number";
    },
    wi = function (e) {
      return typeof e == "object";
    },
    Jn = function (e, t, r) {
      return e && e.progress(t ? 0 : 1) && r && e.pause();
    },
    Wa = function (e, t) {
      if (e.enabled) {
        var r = e._ctx
          ? e._ctx.add(function () {
              return t(e);
            })
          : t(e);
        r && r.totalTime && (e.callbackAnimation = r);
      }
    },
    un = Math.abs,
    wc = "left",
    bc = "top",
    qa = "right",
    Ya = "bottom",
    bi = "width",
    Ci = "height",
    es = "Right",
    ts = "Left",
    rs = "Top",
    is = "Bottom",
    Ie = "padding",
    Vt = "margin",
    ln = "Width",
    Xa = "Height",
    ze = "px",
    Wt = function (e) {
      return ne.getComputedStyle(e);
    },
    Od = function (e) {
      var t = Wt(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    Cc = function (e, t) {
      for (var r in t) r in e || (e[r] = t[r]);
      return e;
    },
    br = function (e, t) {
      var r =
          t &&
          Wt(e)[Ra] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          W.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        i = e.getBoundingClientRect();
      return (r && r.progress(0).kill(), i);
    },
    io = function (e, t) {
      var r = t.d2;
      return e["offset" + r] || e["client" + r] || 0;
    },
    xc = function (e) {
      var t = [],
        r = e.labels,
        i = e.duration(),
        s;
      for (s in r) t.push(r[s] / i);
      return t;
    },
    kd = function (e) {
      return function (t) {
        return W.utils.snap(xc(e), t);
      };
    },
    Ua = function (e) {
      var t = W.utils.snap(e),
        r =
          Array.isArray(e) &&
          e.slice(0).sort(function (i, s) {
            return i - s;
          });
      return r
        ? function (i, s, o) {
            o === void 0 && (o = 0.001);
            var a;
            if (!s) return t(i);
            if (s > 0) {
              for (i -= o, a = 0; a < r.length; a++) if (r[a] >= i) return r[a];
              return r[a - 1];
            } else for (a = r.length, i += o; a--; ) if (r[a] <= i) return r[a];
            return r[0];
          }
        : function (i, s, o) {
            o === void 0 && (o = 0.001);
            var a = t(i);
            return !s || Math.abs(a - i) < o || a - i < 0 == s < 0
              ? a
              : t(s < 0 ? i - e : i + e);
          };
    },
    Rd = function (e) {
      return function (t, r) {
        return Ua(xc(e))(t, r.direction);
      };
    },
    no = function (e, t, r, i) {
      return r.split(",").forEach(function (s) {
        return e(t, s, i);
      });
    },
    Ye = function (e, t, r, i, s) {
      return e.addEventListener(t, r, { passive: !i, capture: !!s });
    },
    Xe = function (e, t, r, i) {
      return e.removeEventListener(t, r, !!i);
    },
    so = function (e, t, r) {
      ((r = r && r.wheelHandler),
        r && (e(t, "wheel", r), e(t, "touchmove", r)));
    },
    Sc = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    oo = { toggleActions: "play", anticipatePin: 0 },
    ao = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    uo = function (e, t) {
      if (Rt(e)) {
        var r = e.indexOf("="),
          i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
        (~r && (e.indexOf("%") > r && (i *= t / 100), (e = e.substr(0, r - 1))),
          (e =
            i +
            (e in ao
              ? ao[e] * t
              : ~e.indexOf("%")
                ? (parseFloat(e) * t) / 100
                : parseFloat(e) || 0)));
      }
      return e;
    },
    lo = function (e, t, r, i, s, o, a, u) {
      var l = s.startColor,
        c = s.endColor,
        p = s.fontSize,
        h = s.indent,
        d = s.fontWeight,
        _ = ge.createElement("div"),
        f = Ei(r) || Gr(r, "pinType") === "fixed",
        g = e.indexOf("scroller") !== -1,
        D = f ? ce : r,
        m = e.indexOf("start") !== -1,
        E = m ? l : c,
        w =
          "border-color:" +
          E +
          ";font-size:" +
          p +
          ";color:" +
          E +
          ";font-weight:" +
          d +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (w += "position:" + ((g || u) && f ? "fixed;" : "absolute;")),
        (g || u || !f) &&
          (w += (i === Be ? qa : Ya) + ":" + (o + parseFloat(h)) + "px;"),
        a &&
          (w +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (_._isStart = m),
        _.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (_.style.cssText = w),
        (_.innerText = t || t === 0 ? e + "-" + t : e),
        D.children[0] ? D.insertBefore(_, D.children[0]) : D.appendChild(_),
        (_._offset = _["offset" + i.op.d2]),
        co(_, 0, i, m),
        _
      );
    },
    co = function (e, t, r, i) {
      var s = { display: "block" },
        o = r[i ? "os2" : "p2"],
        a = r[i ? "p2" : "os2"];
      ((e._isFlipped = i),
        (s[r.a + "Percent"] = i ? -100 : 0),
        (s[r.a] = i ? "1px" : 0),
        (s["border" + o + ln] = 1),
        (s["border" + a + ln] = 0),
        (s[r.p] = t + "px"),
        W.set(e, s));
    },
    re = [],
    Ga = {},
    ns,
    Tc = function () {
      return nt() - Ht > 34 && (ns || (ns = requestAnimationFrame(Cr)));
    },
    cn = function () {
      (!pt || !pt.isPressed || pt.startX > ce.clientWidth) &&
        (ie.cache++,
        pt ? ns || (ns = requestAnimationFrame(Cr)) : Cr(),
        Ht || Si("scrollStart"),
        (Ht = nt()));
    },
    $a = function () {
      ((dc = ne.innerWidth), (hc = ne.innerHeight));
    },
    ss = function (e) {
      (ie.cache++,
        (e === !0 ||
          (!it &&
            !fc &&
            !ge.fullscreenElement &&
            !ge.webkitFullscreenElement &&
            (!Ma ||
              dc !== ne.innerWidth ||
              Math.abs(ne.innerHeight - hc) > ne.innerHeight * 0.25))) &&
          Qs.restart(!0));
    },
    xi = {},
    Ld = [],
    Ac = function n() {
      return Xe(j, "scrollEnd", n) || Ai(!0);
    },
    Si = function (e) {
      return (
        (xi[e] &&
          xi[e].map(function (t) {
            return t();
          })) ||
        Ld
      );
    },
    Lt = [],
    Fc = function (e) {
      for (var t = 0; t < Lt.length; t += 5)
        (!e || (Lt[t + 4] && Lt[t + 4].query === e)) &&
          ((Lt[t].style.cssText = Lt[t + 1]),
          Lt[t].getBBox && Lt[t].setAttribute("transform", Lt[t + 2] || ""),
          (Lt[t + 3].uncache = 1));
    },
    Pc = function () {
      return ie.forEach(function (e) {
        return st(e) && ++e.cacheID && (e.rec = e());
      });
    },
    ja = function (e, t) {
      var r;
      for (dt = 0; dt < re.length; dt++)
        ((r = re[dt]),
          r && (!t || r._ctx === t) && (e ? r.kill(1) : r.revert(!0, !0)));
      ((jn = !0), t && Fc(t), t || Si("revert"));
    },
    Oc = function (e, t) {
      (ie.cache++,
        (t || !_t) &&
          ie.forEach(function (r) {
            return st(r) && r.cacheID++ && (r.rec = 0);
          }),
        Rt(e) && (ne.history.scrollRestoration = Na = e));
    },
    _t,
    Ti = 0,
    kc,
    Md = function () {
      if (kc !== Ti) {
        var e = (kc = Ti);
        requestAnimationFrame(function () {
          return e === Ti && Ai(!0);
        });
      }
    },
    Rc = function () {
      (ce.appendChild(an),
        (Ba = (!pt && an.offsetHeight) || ne.innerHeight),
        ce.removeChild(an));
    },
    Lc = function (e) {
      return Un(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    Ai = function (e, t) {
      if (
        ((kt = ge.documentElement),
        (ce = ge.body),
        (ka = [ne, ge, kt, ce]),
        Ht && !e && !jn)
      ) {
        Ye(j, "scrollEnd", Ac);
        return;
      }
      (Rc(), (_t = j.isRefreshing = !0), jn || Pc());
      var r = Si("refreshInit");
      (cc && j.sort(),
        t || ja(),
        ie.forEach(function (i) {
          st(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
        }),
        re.slice(0).forEach(function (i) {
          return i.refresh();
        }),
        (jn = !1),
        re.forEach(function (i) {
          if (i._subPinOffset && i.pin) {
            var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
              o = i.pin[s];
            (i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - o), i.refresh());
          }
        }),
        (za = 1),
        Lc(!0),
        re.forEach(function (i) {
          var s = lr(i.scroller, i._dir),
            o = i.vars.end === "max" || (i._endClamp && i.end > s),
            a = i._startClamp && i.start >= s;
          (o || a) &&
            i.setPositions(
              a ? s - 1 : i.start,
              o ? Math.max(a ? s : i.start + 1, s) : i.end,
              !0,
            );
        }),
        Lc(!1),
        (za = 0),
        r.forEach(function (i) {
          return i && i.render && i.render(-1);
        }),
        ie.forEach(function (i) {
          st(i) &&
            (i.smooth &&
              requestAnimationFrame(function () {
                return (i.target.style.scrollBehavior = "smooth");
              }),
            i.rec && i(i.rec));
        }),
        Oc(Na, 1),
        Qs.pause(),
        Ti++,
        (_t = 2),
        Cr(2),
        re.forEach(function (i) {
          return st(i.vars.onRefresh) && i.vars.onRefresh(i);
        }),
        (_t = j.isRefreshing = !1),
        Si("refresh"));
    },
    Ka = 0,
    fo = 1,
    os,
    Cr = function (e) {
      if (e === 2 || (!_t && !jn)) {
        ((j.isUpdating = !0), os && os.update(0));
        var t = re.length,
          r = nt(),
          i = r - Va >= 50,
          s = t && re[0].scroll();
        if (
          ((fo = Ka > s ? -1 : 1),
          _t || (Ka = s),
          i &&
            (Ht && !eo && r - Ht > 200 && ((Ht = 0), Si("scrollEnd")),
            ($n = Va),
            (Va = r)),
          fo < 0)
        ) {
          for (dt = t; dt-- > 0; ) re[dt] && re[dt].update(0, i);
          fo = 1;
        } else for (dt = 0; dt < t; dt++) re[dt] && re[dt].update(0, i);
        j.isUpdating = !1;
      }
      ns = 0;
    },
    Za = [
      wc,
      bc,
      Ya,
      qa,
      Vt + is,
      Vt + es,
      Vt + rs,
      Vt + ts,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    ho = Za.concat([
      bi,
      Ci,
      "boxSizing",
      "max" + ln,
      "max" + Xa,
      "position",
      Vt,
      Ie,
      Ie + rs,
      Ie + es,
      Ie + is,
      Ie + ts,
    ]),
    Id = function (e, t, r) {
      fn(r);
      var i = e._gsap;
      if (i.spacerIsNative) fn(i.spacerState);
      else if (e._gsap.swappedIn) {
        var s = t.parentNode;
        s && (s.insertBefore(e, t), s.removeChild(t));
      }
      e._gsap.swappedIn = !1;
    },
    Qa = function (e, t, r, i) {
      if (!e._gsap.swappedIn) {
        for (var s = Za.length, o = t.style, a = e.style, u; s--; )
          ((u = Za[s]), (o[u] = r[u]));
        ((o.position = r.position === "absolute" ? "absolute" : "relative"),
          r.display === "inline" && (o.display = "inline-block"),
          (a[Ya] = a[qa] = "auto"),
          (o.flexBasis = r.flexBasis || "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o[bi] = io(e, ht) + ze),
          (o[Ci] = io(e, Be) + ze),
          (o[Ie] = a[Vt] = a[bc] = a[wc] = "0"),
          fn(i),
          (a[bi] = a["max" + ln] = r[bi]),
          (a[Ci] = a["max" + Xa] = r[Ci]),
          (a[Ie] = r[Ie]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0));
      }
    },
    Nd = /([A-Z])/g,
    fn = function (e) {
      if (e) {
        var t = e.t.style,
          r = e.length,
          i = 0,
          s,
          o;
        for ((e.t._gsap || W.core.getCache(e.t)).uncache = 1; i < r; i += 2)
          ((o = e[i + 1]),
            (s = e[i]),
            o
              ? (t[s] = o)
              : t[s] && t.removeProperty(s.replace(Nd, "-$1").toLowerCase()));
      }
    },
    po = function (e) {
      for (var t = ho.length, r = e.style, i = [], s = 0; s < t; s++)
        i.push(ho[s], r[ho[s]]);
      return ((i.t = e), i);
    },
    Bd = function (e, t, r) {
      for (var i = [], s = e.length, o = r ? 8 : 0, a; o < s; o += 2)
        ((a = e[o]), i.push(a, a in t ? t[a] : e[o + 1]));
      return ((i.t = e.t), i);
    },
    _o = { left: 0, top: 0 },
    Mc = function (e, t, r, i, s, o, a, u, l, c, p, h, d, _) {
      (st(e) && (e = e(u)),
        Rt(e) &&
          e.substr(0, 3) === "max" &&
          (e = h + (e.charAt(4) === "=" ? uo("0" + e.substr(3), r) : 0)));
      var f = d ? d.time() : 0,
        g,
        D,
        m;
      if ((d && d.seek(0), isNaN(e) || (e = +e), Qn(e)))
        (d &&
          (e = W.utils.mapRange(
            d.scrollTrigger.start,
            d.scrollTrigger.end,
            0,
            h,
            e,
          )),
          a && co(a, r, i, !0));
      else {
        st(t) && (t = t(u));
        var E = (e || "0").split(" "),
          w,
          b,
          S,
          y;
        ((m = Et(t, u) || ce),
          (w = br(m) || {}),
          (!w || (!w.left && !w.top)) &&
            Wt(m).display === "none" &&
            ((y = m.style.display),
            (m.style.display = "block"),
            (w = br(m)),
            y ? (m.style.display = y) : m.style.removeProperty("display")),
          (b = uo(E[0], w[i.d])),
          (S = uo(E[1] || "0", r)),
          (e = w[i.p] - l[i.p] - c + b + s - S),
          a && co(a, S, i, r - S < 20 || (a._isStart && S > 20)),
          (r -= r - S));
      }
      if ((_ && ((u[_] = e || -0.001), e < 0 && (e = 0)), o)) {
        var A = e + r,
          T = o._isStart;
        ((g = "scroll" + i.d2),
          co(
            o,
            A,
            i,
            (T && A > 20) ||
              (!T && (p ? Math.max(ce[g], kt[g]) : o.parentNode[g]) <= A + 1),
          ),
          p &&
            ((l = br(a)),
            p && (o.style[i.op.p] = l[i.op.p] - i.op.m - o._offset + ze)));
      }
      return (
        d &&
          m &&
          ((g = br(m)),
          d.seek(h),
          (D = br(m)),
          (d._caScrollDist = g[i.p] - D[i.p]),
          (e = (e / d._caScrollDist) * h)),
        d && d.seek(f),
        d ? e : Math.round(e)
      );
    },
    zd = /(webkit|moz|length|cssText|inset)/i,
    Ic = function (e, t, r, i) {
      if (e.parentNode !== t) {
        var s = e.style,
          o,
          a;
        if (t === ce) {
          ((e._stOrig = s.cssText), (a = Wt(e)));
          for (o in a)
            !+o &&
              !zd.test(o) &&
              a[o] &&
              typeof s[o] == "string" &&
              o !== "0" &&
              (s[o] = a[o]);
          ((s.top = r), (s.left = i));
        } else s.cssText = e._stOrig;
        ((W.core.getCache(e).uncache = 1), t.appendChild(e));
      }
    },
    Nc = function (e, t, r) {
      var i = t,
        s = i;
      return function (o) {
        var a = Math.round(e());
        return (
          a !== i &&
            a !== s &&
            Math.abs(a - i) > 3 &&
            Math.abs(a - s) > 3 &&
            ((o = a), r && r()),
          (s = i),
          (i = Math.round(o)),
          i
        );
      };
    },
    go = function (e, t, r) {
      var i = {};
      ((i[t.p] = "+=" + r), W.set(e, i));
    },
    Bc = function (e, t) {
      var r = $r(e, t),
        i = "_scroll" + t.p2,
        s = function o(a, u, l, c, p) {
          var h = o.tween,
            d = u.onComplete,
            _ = {};
          l = l || r();
          var f = Nc(r, l, function () {
            (h.kill(), (o.tween = 0));
          });
          return (
            (p = (c && p) || 0),
            (c = c || a - l),
            h && h.kill(),
            (u[i] = a),
            (u.inherit = !1),
            (u.modifiers = _),
            (_[i] = function () {
              return f(l + c * h.ratio + p * h.ratio * h.ratio);
            }),
            (u.onUpdate = function () {
              (ie.cache++, o.tween && Cr());
            }),
            (u.onComplete = function () {
              ((o.tween = 0), d && d.call(h));
            }),
            (h = o.tween = W.to(e, u)),
            h
          );
        };
      return (
        (e[i] = r),
        (r.wheelHandler = function () {
          return s.tween && s.tween.kill() && (s.tween = 0);
        }),
        Ye(e, "wheel", r.wheelHandler),
        j.isTouch && Ye(e, "touchmove", r.wheelHandler),
        s
      );
    },
    j = (function () {
      function n(t, r) {
        (sn ||
          n.register(W) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          Ia(this),
          this.init(t, r));
      }
      var e = n.prototype;
      return (
        (e.init = function (r, i) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !Kn)
          ) {
            this.update = this.refresh = this.kill = ur;
            return;
          }
          r = Cc(Rt(r) || Qn(r) || r.nodeType ? { trigger: r } : r, oo);
          var s = r,
            o = s.onUpdate,
            a = s.toggleClass,
            u = s.id,
            l = s.onToggle,
            c = s.onRefresh,
            p = s.scrub,
            h = s.trigger,
            d = s.pin,
            _ = s.pinSpacing,
            f = s.invalidateOnRefresh,
            g = s.anticipatePin,
            D = s.onScrubComplete,
            m = s.onSnapComplete,
            E = s.once,
            w = s.snap,
            b = s.pinReparent,
            S = s.pinSpacer,
            y = s.containerAnimation,
            A = s.fastScrollEnd,
            T = s.preventOverlaps,
            x =
              r.horizontal || (r.containerAnimation && r.horizontal !== !1)
                ? ht
                : Be,
            P = !p && p !== 0,
            C = Et(r.scroller || ne),
            O = W.core.getCache(C),
            k = Ei(C),
            R =
              ("pinType" in r
                ? r.pinType
                : Gr(C, "pinType") || (k && "fixed")) === "fixed",
            V = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
            z = P && r.toggleActions.split(" "),
            I = "markers" in r ? r.markers : oo.markers,
            L = k ? 0 : parseFloat(Wt(C)["border" + x.p2 + ln]) || 0,
            v = this,
            B =
              r.onRefreshInit &&
              function () {
                return r.onRefreshInit(v);
              },
            Y = Fd(C, k, x),
            he = Pd(C, k),
            te = 0,
            De = 0,
            N = 0,
            G = $r(C, x),
            fe,
            se,
            ye,
            Qe,
            Ue,
            M,
            $,
            Ae,
            Ve,
            F,
            Mt,
            Pr,
            si,
            Fe,
            Or,
            oi,
            Bi,
            Ge,
            ai,
            Re,
            Qt,
            Ut,
            kr,
            Ps,
            Ne,
            Ho,
            Rr,
            xn,
            Sn,
            ui,
            zi,
            oe,
            Hi,
            Jt,
            er,
            tr,
            Vi,
            Tn,
            Lr;
          if (
            ((v._startClamp = v._endClamp = !1),
            (v._dir = x),
            (g *= 45),
            (v.scroller = C),
            (v.scroll = y ? y.time.bind(y) : G),
            (Qe = G()),
            (v.vars = r),
            (i = i || r.animation),
            "refreshPriority" in r &&
              ((cc = 1), r.refreshPriority === -9999 && (os = v)),
            (O.tweenScroll = O.tweenScroll || {
              top: Bc(C, Be),
              left: Bc(C, ht),
            }),
            (v.tweenTo = fe = O.tweenScroll[x.p]),
            (v.scrubDuration = function (H) {
              ((Hi = Qn(H) && H),
                Hi
                  ? oe
                    ? oe.duration(H)
                    : (oe = W.to(i, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: Hi,
                        paused: !0,
                        onComplete: function () {
                          return D && D(v);
                        },
                      }))
                  : (oe && oe.progress(1).kill(), (oe = 0)));
            }),
            i &&
              ((i.vars.lazy = !1),
              (i._initted && !v.isReverted) ||
                (i.vars.immediateRender !== !1 &&
                  r.immediateRender !== !1 &&
                  i.duration() &&
                  i.render(0, !0, !0)),
              (v.animation = i.pause()),
              (i.scrollTrigger = v),
              v.scrubDuration(p),
              (ui = 0),
              u || (u = i.vars.id)),
            w &&
              ((!wi(w) || w.push) && (w = { snapTo: w }),
              "scrollBehavior" in ce.style &&
                W.set(k ? [ce, kt] : C, { scrollBehavior: "auto" }),
              ie.forEach(function (H) {
                return (
                  st(H) &&
                  H.target === (k ? ge.scrollingElement || kt : C) &&
                  (H.smooth = !1)
                );
              }),
              (ye = st(w.snapTo)
                ? w.snapTo
                : w.snapTo === "labels"
                  ? kd(i)
                  : w.snapTo === "labelsDirectional"
                    ? Rd(i)
                    : w.directional !== !1
                      ? function (H, Z) {
                          return Ua(w.snapTo)(
                            H,
                            nt() - De < 500 ? 0 : Z.direction,
                          );
                        }
                      : W.utils.snap(w.snapTo)),
              (Jt = w.duration || { min: 0.1, max: 2 }),
              (Jt = wi(Jt) ? Gn(Jt.min, Jt.max) : Gn(Jt, Jt)),
              (er = W.delayedCall(w.delay || Hi / 2 || 0.1, function () {
                var H = G(),
                  Z = nt() - De < 500,
                  X = fe.tween;
                if (
                  (Z || Math.abs(v.getVelocity()) < 10) &&
                  !X &&
                  !eo &&
                  te !== H
                ) {
                  var Q = (H - M) / Fe,
                    $e = i && !P ? i.totalProgress() : Q,
                    ue = Z ? 0 : (($e - zi) / (nt() - $n)) * 1e3 || 0,
                    Le = W.utils.clamp(-Q, 1 - Q, (un(ue / 2) * ue) / 0.185),
                    ot = Q + (w.inertia === !1 ? 0 : Le),
                    Pe,
                    Ee,
                    _e = w,
                    rr = _e.onStart,
                    Se = _e.onInterrupt,
                    It = _e.onComplete;
                  if (
                    ((Pe = ye(ot, v)),
                    Qn(Pe) || (Pe = ot),
                    (Ee = Math.max(0, Math.round(M + Pe * Fe))),
                    H <= $ && H >= M && Ee !== H)
                  ) {
                    if (X && !X._initted && X.data <= un(Ee - H)) return;
                    (w.inertia === !1 && (Le = Pe - Q),
                      fe(
                        Ee,
                        {
                          duration: Jt(
                            un(
                              (Math.max(un(ot - $e), un(Pe - $e)) * 0.185) /
                                ue /
                                0.05 || 0,
                            ),
                          ),
                          ease: w.ease || "power3",
                          data: un(Ee - H),
                          onInterrupt: function () {
                            return er.restart(!0) && Se && Se(v);
                          },
                          onComplete: function () {
                            (v.update(),
                              (te = G()),
                              i &&
                                !P &&
                                (oe
                                  ? oe.resetTo(
                                      "totalProgress",
                                      Pe,
                                      i._tTime / i._tDur,
                                    )
                                  : i.progress(Pe)),
                              (ui = zi =
                                i && !P ? i.totalProgress() : v.progress),
                              m && m(v),
                              It && It(v));
                          },
                        },
                        H,
                        Le * Fe,
                        Ee - H - Le * Fe,
                      ),
                      rr && rr(v, fe.tween));
                  }
                } else v.isActive && te !== H && er.restart(!0);
              }).pause())),
            u && (Ga[u] = v),
            (h = v.trigger = Et(h || (d !== !0 && d))),
            (Lr = h && h._gsap && h._gsap.stRevert),
            Lr && (Lr = Lr(v)),
            (d = d === !0 ? h : Et(d)),
            Rt(a) && (a = { targets: h, className: a }),
            d &&
              (_ === !1 ||
                _ === Vt ||
                (_ =
                  !_ &&
                  d.parentNode &&
                  d.parentNode.style &&
                  Wt(d.parentNode).display === "flex"
                    ? !1
                    : Ie),
              (v.pin = d),
              (se = W.core.getCache(d)),
              se.spacer
                ? (Or = se.pinState)
                : (S &&
                    ((S = Et(S)),
                    S && !S.nodeType && (S = S.current || S.nativeElement),
                    (se.spacerIsNative = !!S),
                    S && (se.spacerState = po(S))),
                  (se.spacer = Ge = S || ge.createElement("div")),
                  Ge.classList.add("pin-spacer"),
                  u && Ge.classList.add("pin-spacer-" + u),
                  (se.pinState = Or = po(d))),
              r.force3D !== !1 && W.set(d, { force3D: !0 }),
              (v.spacer = Ge = se.spacer),
              (Sn = Wt(d)),
              (Ps = Sn[_ + x.os2]),
              (Re = W.getProperty(d)),
              (Qt = W.quickSetter(d, x.a, ze)),
              Qa(d, Ge, Sn),
              (Bi = po(d))),
            I)
          ) {
            ((Pr = wi(I) ? Cc(I, Sc) : Sc),
              (F = lo("scroller-start", u, C, x, Pr, 0)),
              (Mt = lo("scroller-end", u, C, x, Pr, 0, F)),
              (ai = F["offset" + x.op.d2]));
            var Os = Et(Gr(C, "content") || C);
            ((Ae = this.markerStart = lo("start", u, Os, x, Pr, ai, 0, y)),
              (Ve = this.markerEnd = lo("end", u, Os, x, Pr, ai, 0, y)),
              y && (Tn = W.quickSetter([Ae, Ve], x.a, ze)),
              !R &&
                !(ar.length && Gr(C, "fixedMarkers") === !0) &&
                (Od(k ? ce : C),
                W.set([F, Mt], { force3D: !0 }),
                (Ho = W.quickSetter(F, x.a, ze)),
                (xn = W.quickSetter(Mt, x.a, ze))));
          }
          if (y) {
            var J = y.vars.onUpdate,
              U = y.vars.onUpdateParams;
            y.eventCallback("onUpdate", function () {
              (v.update(0, 0, 1), J && J.apply(y, U || []));
            });
          }
          if (
            ((v.previous = function () {
              return re[re.indexOf(v) - 1];
            }),
            (v.next = function () {
              return re[re.indexOf(v) + 1];
            }),
            (v.revert = function (H, Z) {
              if (!Z) return v.kill(!0);
              var X = H !== !1 || !v.enabled,
                Q = it;
              X !== v.isReverted &&
                (X &&
                  ((tr = Math.max(G(), v.scroll.rec || 0)),
                  (N = v.progress),
                  (Vi = i && i.progress())),
                Ae &&
                  [Ae, Ve, F, Mt].forEach(function ($e) {
                    return ($e.style.display = X ? "none" : "block");
                  }),
                X && ((it = v), v.update(X)),
                d &&
                  (!b || !v.isActive) &&
                  (X ? Id(d, Ge, Or) : Qa(d, Ge, Wt(d), Ne)),
                X || v.update(X),
                (it = Q),
                (v.isReverted = X));
            }),
            (v.refresh = function (H, Z, X, Q) {
              if (!((it || !v.enabled) && !Z)) {
                if (d && H && Ht) {
                  Ye(n, "scrollEnd", Ac);
                  return;
                }
                (!_t && B && B(v),
                  (it = v),
                  fe.tween && !X && (fe.tween.kill(), (fe.tween = 0)),
                  oe && oe.pause(),
                  f &&
                    i &&
                    (i.revert({ kill: !1 }).invalidate(),
                    i.getChildren
                      ? i.getChildren(!0, !0, !1).forEach(function (li) {
                          return (
                            li.vars.immediateRender && li.render(0, !0, !0)
                          );
                        })
                      : i.vars.immediateRender && i.render(0, !0, !0)),
                  v.isReverted || v.revert(!0, !0),
                  (v._subPinOffset = !1));
                var $e = Y(),
                  ue = he(),
                  Le = y ? y.duration() : lr(C, x),
                  ot = Fe <= 0.01 || !Fe,
                  Pe = 0,
                  Ee = Q || 0,
                  _e = wi(X) ? X.end : r.end,
                  rr = r.endTrigger || h,
                  Se = wi(X)
                    ? X.start
                    : r.start ||
                      (r.start === 0 || !h ? 0 : d ? "0 0" : "0 100%"),
                  It = (v.pinnedContainer =
                    r.pinnedContainer && Et(r.pinnedContainer, v)),
                  gr = (h && Math.max(0, re.indexOf(v))) || 0,
                  Je = gr,
                  et,
                  at,
                  Wi,
                  Vo,
                  ut,
                  We,
                  vr,
                  Ru,
                  Kf,
                  ks,
                  Dr,
                  Rs,
                  Wo;
                for (
                  I &&
                  wi(X) &&
                  ((Rs = W.getProperty(F, x.p)), (Wo = W.getProperty(Mt, x.p)));
                  Je-- > 0;
                )
                  ((We = re[Je]),
                    We.end || We.refresh(0, 1) || (it = v),
                    (vr = We.pin),
                    vr &&
                      (vr === h || vr === d || vr === It) &&
                      !We.isReverted &&
                      (ks || (ks = []), ks.unshift(We), We.revert(!0, !0)),
                    We !== re[Je] && (gr--, Je--));
                for (
                  st(Se) && (Se = Se(v)),
                    Se = pc(Se, "start", v),
                    M =
                      Mc(
                        Se,
                        h,
                        $e,
                        x,
                        G(),
                        Ae,
                        F,
                        v,
                        ue,
                        L,
                        R,
                        Le,
                        y,
                        v._startClamp && "_startClamp",
                      ) || (d ? -0.001 : 0),
                    st(_e) && (_e = _e(v)),
                    Rt(_e) &&
                      !_e.indexOf("+=") &&
                      (~_e.indexOf(" ")
                        ? (_e = (Rt(Se) ? Se.split(" ")[0] : "") + _e)
                        : ((Pe = uo(_e.substr(2), $e)),
                          (_e = Rt(Se)
                            ? Se
                            : (y
                                ? W.utils.mapRange(
                                    0,
                                    y.duration(),
                                    y.scrollTrigger.start,
                                    y.scrollTrigger.end,
                                    M,
                                  )
                                : M) + Pe),
                          (rr = h))),
                    _e = pc(_e, "end", v),
                    $ =
                      Math.max(
                        M,
                        Mc(
                          _e || (rr ? "100% 0" : Le),
                          rr,
                          $e,
                          x,
                          G() + Pe,
                          Ve,
                          Mt,
                          v,
                          ue,
                          L,
                          R,
                          Le,
                          y,
                          v._endClamp && "_endClamp",
                        ),
                      ) || -0.001,
                    Pe = 0,
                    Je = gr;
                  Je--;
                )
                  ((We = re[Je] || {}),
                    (vr = We.pin),
                    vr &&
                      We.start - We._pinPush <= M &&
                      !y &&
                      We.end > 0 &&
                      ((et =
                        We.end -
                        (v._startClamp ? Math.max(0, We.start) : We.start)),
                      ((vr === h && We.start - We._pinPush < M) || vr === It) &&
                        isNaN(Se) &&
                        (Pe += et * (1 - We.progress)),
                      vr === d && (Ee += et)));
                if (
                  ((M += Pe),
                  ($ += Pe),
                  v._startClamp && (v._startClamp += Pe),
                  v._endClamp &&
                    !_t &&
                    ((v._endClamp = $ || -0.001), ($ = Math.min($, lr(C, x)))),
                  (Fe = $ - M || ((M -= 0.01) && 0.001)),
                  ot && (N = W.utils.clamp(0, 1, W.utils.normalize(M, $, tr))),
                  (v._pinPush = Ee),
                  Ae &&
                    Pe &&
                    ((et = {}),
                    (et[x.a] = "+=" + Pe),
                    It && (et[x.p] = "-=" + G()),
                    W.set([Ae, Ve], et)),
                  d && !(za && v.end >= lr(C, x)))
                )
                  ((et = Wt(d)),
                    (Vo = x === Be),
                    (Wi = G()),
                    (Ut = parseFloat(Re(x.a)) + Ee),
                    !Le &&
                      $ > 1 &&
                      ((Dr = (k ? ge.scrollingElement || kt : C).style),
                      (Dr = {
                        style: Dr,
                        value: Dr["overflow" + x.a.toUpperCase()],
                      }),
                      k &&
                        Wt(ce)["overflow" + x.a.toUpperCase()] !== "scroll" &&
                        (Dr.style["overflow" + x.a.toUpperCase()] = "scroll")),
                    Qa(d, Ge, et),
                    (Bi = po(d)),
                    (at = br(d, !0)),
                    (Ru = R && $r(C, Vo ? ht : Be)()),
                    _
                      ? ((Ne = [_ + x.os2, Fe + Ee + ze]),
                        (Ne.t = Ge),
                        (Je = _ === Ie ? io(d, x) + Fe + Ee : 0),
                        Je &&
                          (Ne.push(x.d, Je + ze),
                          Ge.style.flexBasis !== "auto" &&
                            (Ge.style.flexBasis = Je + ze)),
                        fn(Ne),
                        It &&
                          re.forEach(function (li) {
                            li.pin === It &&
                              li.vars.pinSpacing !== !1 &&
                              (li._subPinOffset = !0);
                          }),
                        R && G(tr))
                      : ((Je = io(d, x)),
                        Je &&
                          Ge.style.flexBasis !== "auto" &&
                          (Ge.style.flexBasis = Je + ze)),
                    R &&
                      ((ut = {
                        top: at.top + (Vo ? Wi - M : Ru) + ze,
                        left: at.left + (Vo ? Ru : Wi - M) + ze,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (ut[bi] = ut["max" + ln] = Math.ceil(at.width) + ze),
                      (ut[Ci] = ut["max" + Xa] = Math.ceil(at.height) + ze),
                      (ut[Vt] =
                        ut[Vt + rs] =
                        ut[Vt + es] =
                        ut[Vt + is] =
                        ut[Vt + ts] =
                          "0"),
                      (ut[Ie] = et[Ie]),
                      (ut[Ie + rs] = et[Ie + rs]),
                      (ut[Ie + es] = et[Ie + es]),
                      (ut[Ie + is] = et[Ie + is]),
                      (ut[Ie + ts] = et[Ie + ts]),
                      (oi = Bd(Or, ut, b)),
                      _t && G(0)),
                    i
                      ? ((Kf = i._initted),
                        La(1),
                        i.render(i.duration(), !0, !0),
                        (kr = Re(x.a) - Ut + Fe + Ee),
                        (Rr = Math.abs(Fe - kr) > 1),
                        R && Rr && oi.splice(oi.length - 2, 2),
                        i.render(0, !0, !0),
                        Kf || i.invalidate(!0),
                        i.parent || i.totalTime(i.totalTime()),
                        La(0))
                      : (kr = Fe),
                    Dr &&
                      (Dr.value
                        ? (Dr.style["overflow" + x.a.toUpperCase()] = Dr.value)
                        : Dr.style.removeProperty("overflow-" + x.a)));
                else if (h && G() && !y)
                  for (at = h.parentNode; at && at !== ce; )
                    (at._pinOffset &&
                      ((M -= at._pinOffset), ($ -= at._pinOffset)),
                      (at = at.parentNode));
                (ks &&
                  ks.forEach(function (li) {
                    return li.revert(!1, !0);
                  }),
                  (v.start = M),
                  (v.end = $),
                  (Qe = Ue = _t ? tr : G()),
                  !y && !_t && (Qe < tr && G(tr), (v.scroll.rec = 0)),
                  v.revert(!1, !0),
                  (De = nt()),
                  er && ((te = -1), er.restart(!0)),
                  (it = 0),
                  i &&
                    P &&
                    (i._initted || Vi) &&
                    i.progress() !== Vi &&
                    i.progress(Vi || 0, !0).render(i.time(), !0, !0),
                  (ot || N !== v.progress || y || f || (i && !i._initted)) &&
                    (i &&
                      !P &&
                      (i._initted || N || i.vars.immediateRender !== !1) &&
                      i.totalProgress(
                        y && M < -0.001 && !N ? W.utils.normalize(M, $, 0) : N,
                        !0,
                      ),
                    (v.progress = ot || (Qe - M) / Fe === N ? 0 : N)),
                  d && _ && (Ge._pinOffset = Math.round(v.progress * kr)),
                  oe && oe.invalidate(),
                  isNaN(Rs) ||
                    ((Rs -= W.getProperty(F, x.p)),
                    (Wo -= W.getProperty(Mt, x.p)),
                    go(F, x, Rs),
                    go(Ae, x, Rs - (Q || 0)),
                    go(Mt, x, Wo),
                    go(Ve, x, Wo - (Q || 0))),
                  ot && !_t && v.update(),
                  c && !_t && !si && ((si = !0), c(v), (si = !1)));
              }
            }),
            (v.getVelocity = function () {
              return ((G() - Ue) / (nt() - $n)) * 1e3 || 0;
            }),
            (v.endAnimation = function () {
              (Jn(v.callbackAnimation),
                i &&
                  (oe
                    ? oe.progress(1)
                    : i.paused()
                      ? P || Jn(i, v.direction < 0, 1)
                      : Jn(i, i.reversed())));
            }),
            (v.labelToScroll = function (H) {
              return (
                (i &&
                  i.labels &&
                  (M || v.refresh() || M) +
                    (i.labels[H] / i.duration()) * Fe) ||
                0
              );
            }),
            (v.getTrailing = function (H) {
              var Z = re.indexOf(v),
                X =
                  v.direction > 0 ? re.slice(0, Z).reverse() : re.slice(Z + 1);
              return (
                Rt(H)
                  ? X.filter(function (Q) {
                      return Q.vars.preventOverlaps === H;
                    })
                  : X
              ).filter(function (Q) {
                return v.direction > 0 ? Q.end <= M : Q.start >= $;
              });
            }),
            (v.update = function (H, Z, X) {
              if (!(y && !X && !H)) {
                var Q = _t === !0 ? tr : v.scroll(),
                  $e = H ? 0 : (Q - M) / Fe,
                  ue = $e < 0 ? 0 : $e > 1 ? 1 : $e || 0,
                  Le = v.progress,
                  ot,
                  Pe,
                  Ee,
                  _e,
                  rr,
                  Se,
                  It,
                  gr;
                if (
                  (Z &&
                    ((Ue = Qe),
                    (Qe = y ? G() : Q),
                    w && ((zi = ui), (ui = i && !P ? i.totalProgress() : ue))),
                  g &&
                    d &&
                    !it &&
                    !to &&
                    Ht &&
                    (!ue && M < Q + ((Q - Ue) / (nt() - $n)) * g
                      ? (ue = 1e-4)
                      : ue === 1 &&
                        $ > Q + ((Q - Ue) / (nt() - $n)) * g &&
                        (ue = 0.9999)),
                  ue !== Le && v.enabled)
                ) {
                  if (
                    ((ot = v.isActive = !!ue && ue < 1),
                    (Pe = !!Le && Le < 1),
                    (Se = ot !== Pe),
                    (rr = Se || !!ue != !!Le),
                    (v.direction = ue > Le ? 1 : -1),
                    (v.progress = ue),
                    rr &&
                      !it &&
                      ((Ee = ue && !Le ? 0 : ue === 1 ? 1 : Le === 1 ? 2 : 3),
                      P &&
                        ((_e =
                          (!Se && z[Ee + 1] !== "none" && z[Ee + 1]) || z[Ee]),
                        (gr =
                          i &&
                          (_e === "complete" || _e === "reset" || _e in i)))),
                    T &&
                      (Se || gr) &&
                      (gr || p || !i) &&
                      (st(T)
                        ? T(v)
                        : v.getTrailing(T).forEach(function (Wi) {
                            return Wi.endAnimation();
                          })),
                    P ||
                      (oe && !it && !to
                        ? (oe._dp._time - oe._start !== oe._time &&
                            oe.render(oe._dp._time - oe._start),
                          oe.resetTo
                            ? oe.resetTo(
                                "totalProgress",
                                ue,
                                i._tTime / i._tDur,
                              )
                            : ((oe.vars.totalProgress = ue),
                              oe.invalidate().restart()))
                        : i && i.totalProgress(ue, !!(it && (De || H)))),
                    d)
                  ) {
                    if ((H && _ && (Ge.style[_ + x.os2] = Ps), !R))
                      Qt(Zn(Ut + kr * ue));
                    else if (rr) {
                      if (
                        ((It = !H && ue > Le && $ + 1 > Q && Q + 1 >= lr(C, x)),
                        b)
                      )
                        if (!H && (ot || It)) {
                          var Je = br(d, !0),
                            et = Q - M;
                          Ic(
                            d,
                            ce,
                            Je.top + (x === Be ? et : 0) + ze,
                            Je.left + (x === Be ? 0 : et) + ze,
                          );
                        } else Ic(d, Ge);
                      (fn(ot || It ? oi : Bi),
                        (Rr && ue < 1 && ot) ||
                          Qt(Ut + (ue === 1 && !It ? kr : 0)));
                    }
                  }
                  (w && !fe.tween && !it && !to && er.restart(!0),
                    a &&
                      (Se || (E && ue && (ue < 1 || !Ha))) &&
                      Un(a.targets).forEach(function (Wi) {
                        return Wi.classList[ot || E ? "add" : "remove"](
                          a.className,
                        );
                      }),
                    o && !P && !H && o(v),
                    rr && !it
                      ? (P &&
                          (gr &&
                            (_e === "complete"
                              ? i.pause().totalProgress(1)
                              : _e === "reset"
                                ? i.restart(!0).pause()
                                : _e === "restart"
                                  ? i.restart(!0)
                                  : i[_e]()),
                          o && o(v)),
                        (Se || !Ha) &&
                          (l && Se && Wa(v, l),
                          V[Ee] && Wa(v, V[Ee]),
                          E && (ue === 1 ? v.kill(!1, 1) : (V[Ee] = 0)),
                          Se ||
                            ((Ee = ue === 1 ? 1 : 3), V[Ee] && Wa(v, V[Ee]))),
                        A &&
                          !ot &&
                          Math.abs(v.getVelocity()) > (Qn(A) ? A : 2500) &&
                          (Jn(v.callbackAnimation),
                          oe
                            ? oe.progress(1)
                            : Jn(i, _e === "reverse" ? 1 : !ue, 1)))
                      : P && o && !it && o(v));
                }
                if (xn) {
                  var at = y ? (Q / y.duration()) * (y._caScrollDist || 0) : Q;
                  (Ho(at + (F._isFlipped ? 1 : 0)), xn(at));
                }
                Tn && Tn((-Q / y.duration()) * (y._caScrollDist || 0));
              }
            }),
            (v.enable = function (H, Z) {
              v.enabled ||
                ((v.enabled = !0),
                Ye(C, "resize", ss),
                k || Ye(C, "scroll", cn),
                B && Ye(n, "refreshInit", B),
                H !== !1 && ((v.progress = N = 0), (Qe = Ue = te = G())),
                Z !== !1 && v.refresh());
            }),
            (v.getTween = function (H) {
              return H && fe ? fe.tween : oe;
            }),
            (v.setPositions = function (H, Z, X, Q) {
              if (y) {
                var $e = y.scrollTrigger,
                  ue = y.duration(),
                  Le = $e.end - $e.start;
                ((H = $e.start + (Le * H) / ue),
                  (Z = $e.start + (Le * Z) / ue));
              }
              (v.refresh(
                !1,
                !1,
                {
                  start: _c(H, X && !!v._startClamp),
                  end: _c(Z, X && !!v._endClamp),
                },
                Q,
              ),
                v.update());
            }),
            (v.adjustPinSpacing = function (H) {
              if (Ne && H) {
                var Z = Ne.indexOf(x.d) + 1;
                ((Ne[Z] = parseFloat(Ne[Z]) + H + ze),
                  (Ne[1] = parseFloat(Ne[1]) + H + ze),
                  fn(Ne));
              }
            }),
            (v.disable = function (H, Z) {
              if (
                (H !== !1 && v.revert(!0, !0),
                v.enabled &&
                  ((v.enabled = v.isActive = !1),
                  Z || (oe && oe.pause()),
                  (tr = 0),
                  se && (se.uncache = 1),
                  B && Xe(n, "refreshInit", B),
                  er &&
                    (er.pause(), fe.tween && fe.tween.kill() && (fe.tween = 0)),
                  !k))
              ) {
                for (var X = re.length; X--; )
                  if (re[X].scroller === C && re[X] !== v) return;
                (Xe(C, "resize", ss), k || Xe(C, "scroll", cn));
              }
            }),
            (v.kill = function (H, Z) {
              (v.disable(H, Z), oe && !Z && oe.kill(), u && delete Ga[u]);
              var X = re.indexOf(v);
              (X >= 0 && re.splice(X, 1),
                X === dt && fo > 0 && dt--,
                (X = 0),
                re.forEach(function (Q) {
                  return Q.scroller === v.scroller && (X = 1);
                }),
                X || _t || (v.scroll.rec = 0),
                i &&
                  ((i.scrollTrigger = null),
                  H && i.revert({ kill: !1 }),
                  Z || i.kill()),
                Ae &&
                  [Ae, Ve, F, Mt].forEach(function (Q) {
                    return Q.parentNode && Q.parentNode.removeChild(Q);
                  }),
                os === v && (os = 0),
                d &&
                  (se && (se.uncache = 1),
                  (X = 0),
                  re.forEach(function (Q) {
                    return Q.pin === d && X++;
                  }),
                  X || (se.spacer = 0)),
                r.onKill && r.onKill(v));
            }),
            re.push(v),
            v.enable(!1, !1),
            Lr && Lr(v),
            i && i.add && !Fe)
          ) {
            var le = v.update;
            ((v.update = function () {
              ((v.update = le), ie.cache++, M || $ || v.refresh());
            }),
              W.delayedCall(0.01, v.update),
              (Fe = 0.01),
              (M = $ = 0));
          } else v.refresh();
          d && Md();
        }),
        (n.register = function (r) {
          return (
            sn ||
              ((W = r || mc()),
              Dc() && window.document && n.enable(),
              (sn = Kn)),
            sn
          );
        }),
        (n.defaults = function (r) {
          if (r) for (var i in r) oo[i] = r[i];
          return oo;
        }),
        (n.disable = function (r, i) {
          ((Kn = 0),
            re.forEach(function (o) {
              return o[i ? "kill" : "disable"](r);
            }),
            Xe(ne, "wheel", cn),
            Xe(ge, "scroll", cn),
            clearInterval(Js),
            Xe(ge, "touchcancel", ur),
            Xe(ce, "touchstart", ur),
            no(Xe, ge, "pointerdown,touchstart,mousedown", gc),
            no(Xe, ge, "pointerup,touchend,mouseup", vc),
            Qs.kill(),
            ro(Xe));
          for (var s = 0; s < ie.length; s += 3)
            (so(Xe, ie[s], ie[s + 1]), so(Xe, ie[s], ie[s + 2]));
        }),
        (n.enable = function () {
          if (
            ((ne = window),
            (ge = document),
            (kt = ge.documentElement),
            (ce = ge.body),
            W &&
              ((Un = W.utils.toArray),
              (Gn = W.utils.clamp),
              (Ia = W.core.context || ur),
              (La = W.core.suppressOverwrites || ur),
              (Na = ne.history.scrollRestoration || "auto"),
              (Ka = ne.pageYOffset || 0),
              W.core.globals("ScrollTrigger", n),
              ce))
          ) {
            ((Kn = 1),
              (an = document.createElement("div")),
              (an.style.height = "100vh"),
              (an.style.position = "absolute"),
              Rc(),
              Ad(),
              ke.register(W),
              (n.isTouch = ke.isTouch),
              (jr =
                ke.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Ma = ke.isTouch === 1),
              Ye(ne, "wheel", cn),
              (ka = [ne, ge, kt, ce]),
              W.matchMedia
                ? ((n.matchMedia = function (l) {
                    var c = W.matchMedia(),
                      p;
                    for (p in l) c.add(p, l[p]);
                    return c;
                  }),
                  W.addEventListener("matchMediaInit", function () {
                    (Pc(), ja());
                  }),
                  W.addEventListener("matchMediaRevert", function () {
                    return Fc();
                  }),
                  W.addEventListener("matchMedia", function () {
                    (Ai(0, 1), Si("matchMedia"));
                  }),
                  W.matchMedia().add("(orientation: portrait)", function () {
                    return ($a(), $a);
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              $a(),
              Ye(ge, "scroll", cn));
            var r = ce.hasAttribute("style"),
              i = ce.style,
              s = i.borderTopStyle,
              o = W.core.Animation.prototype,
              a,
              u;
            for (
              o.revert ||
                Object.defineProperty(o, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                i.borderTopStyle = "solid",
                a = br(ce),
                Be.m = Math.round(a.top + Be.sc()) || 0,
                ht.m = Math.round(a.left + ht.sc()) || 0,
                s
                  ? (i.borderTopStyle = s)
                  : i.removeProperty("border-top-style"),
                r ||
                  (ce.setAttribute("style", ""), ce.removeAttribute("style")),
                Js = setInterval(Tc, 250),
                W.delayedCall(0.5, function () {
                  return (to = 0);
                }),
                Ye(ge, "touchcancel", ur),
                Ye(ce, "touchstart", ur),
                no(Ye, ge, "pointerdown,touchstart,mousedown", gc),
                no(Ye, ge, "pointerup,touchend,mouseup", vc),
                Ra = W.utils.checkPrefix("transform"),
                ho.push(Ra),
                sn = nt(),
                Qs = W.delayedCall(0.2, Ai).pause(),
                on = [
                  ge,
                  "visibilitychange",
                  function () {
                    var l = ne.innerWidth,
                      c = ne.innerHeight;
                    ge.hidden
                      ? ((uc = l), (lc = c))
                      : (uc !== l || lc !== c) && ss();
                  },
                  ge,
                  "DOMContentLoaded",
                  Ai,
                  ne,
                  "load",
                  Ai,
                  ne,
                  "resize",
                  ss,
                ],
                ro(Ye),
                re.forEach(function (l) {
                  return l.enable(0, 1);
                }),
                u = 0;
              u < ie.length;
              u += 3
            )
              (so(Xe, ie[u], ie[u + 1]), so(Xe, ie[u], ie[u + 2]));
          }
        }),
        (n.config = function (r) {
          "limitCallbacks" in r && (Ha = !!r.limitCallbacks);
          var i = r.syncInterval;
          ((i && clearInterval(Js)) || ((Js = i) && setInterval(Tc, i)),
            "ignoreMobileResize" in r &&
              (Ma = n.isTouch === 1 && r.ignoreMobileResize),
            "autoRefreshEvents" in r &&
              (ro(Xe) || ro(Ye, r.autoRefreshEvents || "none"),
              (fc = (r.autoRefreshEvents + "").indexOf("resize") === -1)));
        }),
        (n.scrollerProxy = function (r, i) {
          var s = Et(r),
            o = ie.indexOf(s),
            a = Ei(s);
          (~o && ie.splice(o, a ? 6 : 2),
            i && (a ? ar.unshift(ne, i, ce, i, kt, i) : ar.unshift(s, i)));
        }),
        (n.clearMatchMedia = function (r) {
          re.forEach(function (i) {
            return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
          });
        }),
        (n.isInViewport = function (r, i, s) {
          var o = (Rt(r) ? Et(r) : r).getBoundingClientRect(),
            a = o[s ? bi : Ci] * i || 0;
          return s
            ? o.right - a > 0 && o.left + a < ne.innerWidth
            : o.bottom - a > 0 && o.top + a < ne.innerHeight;
        }),
        (n.positionInViewport = function (r, i, s) {
          Rt(r) && (r = Et(r));
          var o = r.getBoundingClientRect(),
            a = o[s ? bi : Ci],
            u =
              i == null
                ? a / 2
                : i in ao
                  ? ao[i] * a
                  : ~i.indexOf("%")
                    ? (parseFloat(i) * a) / 100
                    : parseFloat(i) || 0;
          return s
            ? (o.left + u) / ne.innerWidth
            : (o.top + u) / ne.innerHeight;
        }),
        (n.killAll = function (r) {
          if (
            (re.slice(0).forEach(function (s) {
              return s.vars.id !== "ScrollSmoother" && s.kill();
            }),
            r !== !0)
          ) {
            var i = xi.killAll || [];
            ((xi = {}),
              i.forEach(function (s) {
                return s();
              }));
          }
        }),
        n
      );
    })();
  ((j.version = "3.14.2"),
    (j.saveStyles = function (n) {
      return n
        ? Un(n).forEach(function (e) {
            if (e && e.style) {
              var t = Lt.indexOf(e);
              (t >= 0 && Lt.splice(t, 5),
                Lt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  W.core.getCache(e),
                  Ia(),
                ));
            }
          })
        : Lt;
    }),
    (j.revert = function (n, e) {
      return ja(!n, e);
    }),
    (j.create = function (n, e) {
      return new j(n, e);
    }),
    (j.refresh = function (n) {
      return n ? ss(!0) : (sn || j.register()) && Ai(!0);
    }),
    (j.update = function (n) {
      return ++ie.cache && Cr(n === !0 ? 2 : 0);
    }),
    (j.clearScrollMemory = Oc),
    (j.maxScroll = function (n, e) {
      return lr(n, e ? ht : Be);
    }),
    (j.getScrollFunc = function (n, e) {
      return $r(Et(n), e ? ht : Be);
    }),
    (j.getById = function (n) {
      return Ga[n];
    }),
    (j.getAll = function () {
      return re.filter(function (n) {
        return n.vars.id !== "ScrollSmoother";
      });
    }),
    (j.isScrolling = function () {
      return !!Ht;
    }),
    (j.snapDirectional = Ua),
    (j.addEventListener = function (n, e) {
      var t = xi[n] || (xi[n] = []);
      ~t.indexOf(e) || t.push(e);
    }),
    (j.removeEventListener = function (n, e) {
      var t = xi[n],
        r = t && t.indexOf(e);
      r >= 0 && t.splice(r, 1);
    }),
    (j.batch = function (n, e) {
      var t = [],
        r = {},
        i = e.interval || 0.016,
        s = e.batchMax || 1e9,
        o = function (l, c) {
          var p = [],
            h = [],
            d = W.delayedCall(i, function () {
              (c(p, h), (p = []), (h = []));
            }).pause();
          return function (_) {
            (p.length || d.restart(!0),
              p.push(_.trigger),
              h.push(_),
              s <= p.length && d.progress(1));
          };
        },
        a;
      for (a in e)
        r[a] =
          a.substr(0, 2) === "on" && st(e[a]) && a !== "onRefreshInit"
            ? o(a, e[a])
            : e[a];
      return (
        st(s) &&
          ((s = s()),
          Ye(j, "refresh", function () {
            return (s = e.batchMax());
          })),
        Un(n).forEach(function (u) {
          var l = {};
          for (a in r) l[a] = r[a];
          ((l.trigger = u), t.push(j.create(l)));
        }),
        t
      );
    }));
  var zc = function (e, t, r, i) {
      return (
        t > i ? e(i) : t < 0 && e(0),
        r > i ? (i - t) / (r - t) : r < 0 ? t / (t - r) : 1
      );
    },
    Ja = function n(e, t) {
      (t === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            t === !0
              ? "auto"
              : t
                ? "pan-" + t + (ke.isTouch ? " pinch-zoom" : "")
                : "none"),
        e === kt && n(ce, t));
    },
    vo = { auto: 1, scroll: 1 },
    Hd = function (e) {
      var t = e.event,
        r = e.target,
        i = e.axis,
        s = (t.changedTouches ? t.changedTouches[0] : t).target,
        o = s._gsap || W.core.getCache(s),
        a = nt(),
        u;
      if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (
          ;
          s &&
          s !== ce &&
          ((s.scrollHeight <= s.clientHeight &&
            s.scrollWidth <= s.clientWidth) ||
            !(vo[(u = Wt(s)).overflowY] || vo[u.overflowX]));
        )
          s = s.parentNode;
        ((o._isScroll =
          s &&
          s !== r &&
          !Ei(s) &&
          (vo[(u = Wt(s)).overflowY] || vo[u.overflowX])),
          (o._isScrollT = a));
      }
      (o._isScroll || i === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    Hc = function (e, t, r, i) {
      return ke.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (i = i && Hd),
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function () {
          return r && Ye(ge, ke.eventTypes[0], Wc, !1, !0);
        },
        onDisable: function () {
          return Xe(ge, ke.eventTypes[0], Wc, !0);
        },
      });
    },
    Vd = /(input|label|select|textarea)/i,
    Vc,
    Wc = function (e) {
      var t = Vd.test(e.target.tagName);
      (t || Vc) && ((e._gsapAllow = !0), (Vc = t));
    },
    Wd = function (e) {
      (wi(e) || (e = {}),
        (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
        e.type || (e.type = "wheel,touch"),
        (e.debounce = !!e.debounce),
        (e.id = e.id || "normalizer"));
      var t = e,
        r = t.normalizeScrollX,
        i = t.momentum,
        s = t.allowNestedScroll,
        o = t.onRelease,
        a,
        u,
        l = Et(e.target) || kt,
        c = W.core.globals().ScrollSmoother,
        p = c && c.get(),
        h =
          jr &&
          ((e.content && Et(e.content)) ||
            (p && e.content !== !1 && !p.smooth() && p.content())),
        d = $r(l, Be),
        _ = $r(l, ht),
        f = 1,
        g =
          (ke.isTouch && ne.visualViewport
            ? ne.visualViewport.scale * ne.visualViewport.width
            : ne.outerWidth) / ne.innerWidth,
        D = 0,
        m = st(i)
          ? function () {
              return i(a);
            }
          : function () {
              return i || 2.8;
            },
        E,
        w,
        b = Hc(l, e.type, !0, s),
        S = function () {
          return (w = !1);
        },
        y = ur,
        A = ur,
        T = function () {
          ((u = lr(l, Be)),
            (A = Gn(jr ? 1 : 0, u)),
            r && (y = Gn(0, lr(l, ht))),
            (E = Ti));
        },
        x = function () {
          ((h._gsap.y = Zn(parseFloat(h._gsap.y) + d.offset) + "px"),
            (h.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(h._gsap.y) +
              ", 0, 1)"),
            (d.offset = d.cacheID = 0));
        },
        P = function () {
          if (w) {
            requestAnimationFrame(S);
            var I = Zn(a.deltaY / 2),
              L = A(d.v - I);
            if (h && L !== d.v + d.offset) {
              d.offset = L - d.v;
              var v = Zn((parseFloat(h && h._gsap.y) || 0) - d.offset);
              ((h.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                v +
                ", 0, 1)"),
                (h._gsap.y = v + "px"),
                (d.cacheID = ie.cache),
                Cr());
            }
            return !0;
          }
          (d.offset && x(), (w = !0));
        },
        C,
        O,
        k,
        R,
        V = function () {
          (T(),
            C.isActive() &&
              C.vars.scrollY > u &&
              (d() > u ? C.progress(1) && d(u) : C.resetTo("scrollY", u)));
        };
      return (
        h && W.set(h, { y: "+=0" }),
        (e.ignoreCheck = function (z) {
          return (
            (jr && z.type === "touchmove" && P()) ||
            (f > 1.05 && z.type !== "touchstart") ||
            a.isGesturing ||
            (z.touches && z.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          w = !1;
          var z = f;
          ((f = Zn(((ne.visualViewport && ne.visualViewport.scale) || 1) / g)),
            C.pause(),
            z !== f && Ja(l, f > 1.01 ? !0 : r ? !1 : "x"),
            (O = _()),
            (k = d()),
            T(),
            (E = Ti));
        }),
        (e.onRelease = e.onGestureStart =
          function (z, I) {
            if ((d.offset && x(), !I)) R.restart(!0);
            else {
              ie.cache++;
              var L = m(),
                v,
                B;
              (r &&
                ((v = _()),
                (B = v + (L * 0.05 * -z.velocityX) / 0.227),
                (L *= zc(_, v, B, lr(l, ht))),
                (C.vars.scrollX = y(B))),
                (v = d()),
                (B = v + (L * 0.05 * -z.velocityY) / 0.227),
                (L *= zc(d, v, B, lr(l, Be))),
                (C.vars.scrollY = A(B)),
                C.invalidate().duration(L).play(0.01),
                ((jr && C.vars.scrollY >= u) || v >= u - 1) &&
                  W.to({}, { onUpdate: V, duration: L }));
            }
            o && o(z);
          }),
        (e.onWheel = function () {
          (C._ts && C.pause(), nt() - D > 1e3 && ((E = 0), (D = nt())));
        }),
        (e.onChange = function (z, I, L, v, B) {
          if (
            (Ti !== E && T(),
            I && r && _(y(v[2] === I ? O + (z.startX - z.x) : _() + I - v[1])),
            L)
          ) {
            d.offset && x();
            var Y = B[2] === L,
              he = Y ? k + z.startY - z.y : d() + L - B[1],
              te = A(he);
            (Y && he !== te && (k += te - he), d(te));
          }
          (L || I) && Cr();
        }),
        (e.onEnable = function () {
          (Ja(l, r ? !1 : "x"),
            j.addEventListener("refresh", V),
            Ye(ne, "resize", V),
            d.smooth &&
              ((d.target.style.scrollBehavior = "auto"),
              (d.smooth = _.smooth = !1)),
            b.enable());
        }),
        (e.onDisable = function () {
          (Ja(l, !0),
            Xe(ne, "resize", V),
            j.removeEventListener("refresh", V),
            b.kill());
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (a = new ke(e)),
        (a.iOS = jr),
        jr && !d() && d(1),
        jr && W.ticker.add(ur),
        (R = a._dc),
        (C = W.to(a, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: r ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: Nc(d, d(), function () {
              return C.pause();
            }),
          },
          onUpdate: Cr,
          onComplete: R.vars.onComplete,
        })),
        a
      );
    };
  ((j.sort = function (n) {
    if (st(n)) return re.sort(n);
    var e = ne.pageYOffset || 0;
    return (
      j.getAll().forEach(function (t) {
        return (t._sortY = t.trigger
          ? e + t.trigger.getBoundingClientRect().top
          : t.start + ne.innerHeight);
      }),
      re.sort(
        n ||
          function (t, r) {
            return (
              (t.vars.refreshPriority || 0) * -1e6 +
              (t.vars.containerAnimation ? 1e6 : t._sortY) -
              ((r.vars.containerAnimation ? 1e6 : r._sortY) +
                (r.vars.refreshPriority || 0) * -1e6)
            );
          },
      )
    );
  }),
    (j.observe = function (n) {
      return new ke(n);
    }),
    (j.normalizeScroll = function (n) {
      if (typeof n > "u") return pt;
      if (n === !0 && pt) return pt.enable();
      if (n === !1) {
        (pt && pt.kill(), (pt = n));
        return;
      }
      var e = n instanceof ke ? n : Wd(n);
      return (
        pt && pt.target === e.target && pt.kill(),
        Ei(e.target) && (pt = e),
        e
      );
    }),
    (j.core = {
      _getVelocityProp: Oa,
      _inputObserver: Hc,
      _scrollers: ie,
      _proxies: ar,
      bridge: {
        ss: function () {
          (Ht || Si("scrollStart"), (Ht = nt()));
        },
        ref: function () {
          return it;
        },
      },
    }),
    mc() && W.registerPlugin(j));
  function qd() {
    K.registerPlugin(j);
    let n = new bd({ lerp: 0.8, smooth: !0 });
    return (
      K.ticker.add((e) => {
        (n.raf(e * 1e3), j.update());
      }),
      K.ticker.lagSmoothing(0),
      console.log("lenis initiated"),
      n
    );
  }
  const Yd = (n = document) => {
      n.querySelectorAll(".xe-brands_brand, [data-cursor-icon-frame]").forEach(
        (t) => {
          K.set(t, { overflow: "hidden" });
          const r = t.querySelector(
              ".xe-brands_cursor, [data-cursor-icon-cursor]",
            ),
            i = t.querySelector(
              ".xe-brands_logo-wrapper, [data-cursor-icon-logo]",
            );
          if (!r) return;
          const s = new AbortController();
          ((r._cursorIconAbortController = s),
            K.set(r, {
              opacity: 0,
              display: "none",
              left: "0%",
              top: "0%",
              pointerEvents: "none",
            }));
          const o = (c) => {
              const p = t.getBoundingClientRect(),
                h = r.getBoundingClientRect(),
                d = c.clientX - p.left - h.width / 2,
                _ = c.clientY - p.top - h.height / 2;
              (K.set(r, { display: "block", x: d, y: _ }),
                K.to(r, { opacity: 1, duration: 0.2 }),
                i &&
                  (K.killTweensOf(i),
                  K.set(i, { x: "0em", y: "0em", rotate: "0.001deg" })));
            },
            a = (c) => {
              const p = t.getBoundingClientRect(),
                h = r.getBoundingClientRect(),
                d = c.clientX - p.left - h.width / 2,
                _ = c.clientY - p.top - h.height / 2;
              if (
                (K.to(r, { x: d, y: _, duration: 0.3, ease: "power2.out" }), i)
              ) {
                const f =
                    parseFloat(t.getAttribute("data-magnetic-strength")) || 25,
                  g = ((c.clientX - p.left) / t.offsetWidth - 0.5) * (f / 16),
                  D = ((c.clientY - p.top) / t.offsetHeight - 0.5) * (f / 16);
                K.to(i, {
                  x: g + "em",
                  y: D + "em",
                  rotate: "0.001deg",
                  ease: "power4.out",
                  duration: 1.6,
                });
              }
            },
            u = () => {
              ((t.style.cursor = ""),
                K.to(r, {
                  opacity: 0,
                  duration: 0.2,
                  onComplete: () => {
                    K.set(r, { display: "none" });
                  },
                }),
                i &&
                  K.to(i, {
                    x: "0em",
                    y: "0em",
                    ease: "elastic.out(1, 0.5)",
                    duration: 1,
                    clearProps: "all",
                  }));
            },
            l = { signal: s.signal };
          (t.addEventListener("mouseenter", o, l),
            t.addEventListener("mousemove", a, l),
            t.addEventListener("mouseleave", u, l));
        },
      );
    },
    Xd = (n = document) => {
      n.querySelectorAll(".xe-brands_brand, [data-cursor-icon-frame]").forEach(
        (t) => {
          const r = t.querySelector(
              ".xe-brands_cursor, [data-cursor-icon-cursor]",
            ),
            i = t.querySelector(
              ".xe-brands_logo-wrapper, [data-cursor-icon-logo]",
            );
          r &&
            ((t.style.cursor = ""),
            r._cursorIconAbortController &&
              (r._cursorIconAbortController.abort(),
              delete r._cursorIconAbortController),
            K.killTweensOf(r),
            i &&
              (K.killTweensOf(i), K.set(i, { x: 0, y: 0, clearProps: "all" })),
            K.set(r, { opacity: 0, display: "none", x: 0, y: 0 }));
        },
      );
    };
  function Ud(n, e) {
    for (var t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(n, r.key, r));
    }
  }
  function Gd(n, e, t) {
    return (
      e && Ud(n.prototype, e),
      Object.defineProperty(n, "prototype", { writable: !1 }),
      n
    );
  }
  /*!
   * Splide.js
   * Version  : 4.1.4
   * License  : MIT
   * Copyright: 2022 Naotoshi Fujita
   */ var qc = "(prefers-reduced-motion: reduce)",
    hn = 1,
    $d = 2,
    dn = 3,
    pn = 4,
    as = 5,
    Do = 6,
    mo = 7,
    jd = {
      CREATED: hn,
      MOUNTED: $d,
      IDLE: dn,
      MOVING: pn,
      SCROLLING: as,
      DRAGGING: Do,
      DESTROYED: mo,
    };
  function xr(n) {
    n.length = 0;
  }
  function Kr(n, e, t) {
    return Array.prototype.slice.call(n, e, t);
  }
  function ve(n) {
    return n.bind.apply(n, [null].concat(Kr(arguments, 1)));
  }
  var Yc = setTimeout,
    eu = function () {};
  function Xc(n) {
    return requestAnimationFrame(n);
  }
  function yo(n, e) {
    return typeof e === n;
  }
  function us(n) {
    return !ru(n) && yo("object", n);
  }
  var tu = Array.isArray,
    Uc = ve(yo, "function"),
    Zr = ve(yo, "string"),
    ls = ve(yo, "undefined");
  function ru(n) {
    return n === null;
  }
  function Gc(n) {
    try {
      return n instanceof (n.ownerDocument.defaultView || window).HTMLElement;
    } catch {
      return !1;
    }
  }
  function cs(n) {
    return tu(n) ? n : [n];
  }
  function qt(n, e) {
    cs(n).forEach(e);
  }
  function iu(n, e) {
    return n.indexOf(e) > -1;
  }
  function Eo(n, e) {
    return (n.push.apply(n, cs(e)), n);
  }
  function Sr(n, e, t) {
    n &&
      qt(e, function (r) {
        r && n.classList[t ? "add" : "remove"](r);
      });
  }
  function cr(n, e) {
    Sr(n, Zr(e) ? e.split(" ") : e, !0);
  }
  function fs(n, e) {
    qt(e, n.appendChild.bind(n));
  }
  function nu(n, e) {
    qt(n, function (t) {
      var r = (e || t).parentNode;
      r && r.insertBefore(t, e);
    });
  }
  function hs(n, e) {
    return Gc(n) && (n.msMatchesSelector || n.matches).call(n, e);
  }
  function $c(n, e) {
    var t = n ? Kr(n.children) : [];
    return e
      ? t.filter(function (r) {
          return hs(r, e);
        })
      : t;
  }
  function ds(n, e) {
    return e ? $c(n, e)[0] : n.firstElementChild;
  }
  var ps = Object.keys;
  function Fi(n, e, t) {
    return (
      n &&
        (t ? ps(n).reverse() : ps(n)).forEach(function (r) {
          r !== "__proto__" && e(n[r], r);
        }),
      n
    );
  }
  function _s(n) {
    return (
      Kr(arguments, 1).forEach(function (e) {
        Fi(e, function (t, r) {
          n[r] = e[r];
        });
      }),
      n
    );
  }
  function Qr(n) {
    return (
      Kr(arguments, 1).forEach(function (e) {
        Fi(e, function (t, r) {
          tu(t)
            ? (n[r] = t.slice())
            : us(t)
              ? (n[r] = Qr({}, us(n[r]) ? n[r] : {}, t))
              : (n[r] = t);
        });
      }),
      n
    );
  }
  function jc(n, e) {
    qt(e || ps(n), function (t) {
      delete n[t];
    });
  }
  function fr(n, e) {
    qt(n, function (t) {
      qt(e, function (r) {
        t && t.removeAttribute(r);
      });
    });
  }
  function ee(n, e, t) {
    us(e)
      ? Fi(e, function (r, i) {
          ee(n, i, r);
        })
      : qt(n, function (r) {
          ru(t) || t === "" ? fr(r, e) : r.setAttribute(e, String(t));
        });
  }
  function _n(n, e, t) {
    var r = document.createElement(n);
    return (e && (Zr(e) ? cr(r, e) : ee(r, e)), t && fs(t, r), r);
  }
  function jt(n, e, t) {
    if (ls(t)) return getComputedStyle(n)[e];
    ru(t) || (n.style[e] = "" + t);
  }
  function gs(n, e) {
    jt(n, "display", e);
  }
  function Kc(n) {
    (n.setActive && n.setActive()) || n.focus({ preventScroll: !0 });
  }
  function Kt(n, e) {
    return n.getAttribute(e);
  }
  function Zc(n, e) {
    return n && n.classList.contains(e);
  }
  function Yt(n) {
    return n.getBoundingClientRect();
  }
  function Pi(n) {
    qt(n, function (e) {
      e && e.parentNode && e.parentNode.removeChild(e);
    });
  }
  function Qc(n) {
    return ds(new DOMParser().parseFromString(n, "text/html").body);
  }
  function Tr(n, e) {
    (n.preventDefault(),
      e && (n.stopPropagation(), n.stopImmediatePropagation()));
  }
  function Jc(n, e) {
    return n && n.querySelector(e);
  }
  function su(n, e) {
    return e ? Kr(n.querySelectorAll(e)) : [];
  }
  function Ar(n, e) {
    Sr(n, e, !1);
  }
  function ou(n) {
    return n.timeStamp;
  }
  function Oi(n) {
    return Zr(n) ? n : n ? n + "px" : "";
  }
  var vs = "splide",
    au = "data-" + vs;
  function Ds(n, e) {
    if (!n) throw new Error("[" + vs + "] " + (e || ""));
  }
  var Jr = Math.min,
    wo = Math.max,
    bo = Math.floor,
    ms = Math.ceil,
    wt = Math.abs;
  function ef(n, e, t) {
    return wt(n - e) < t;
  }
  function Co(n, e, t, r) {
    var i = Jr(e, t),
      s = wo(e, t);
    return r ? i < n && n < s : i <= n && n <= s;
  }
  function gn(n, e, t) {
    var r = Jr(e, t),
      i = wo(e, t);
    return Jr(wo(r, n), i);
  }
  function uu(n) {
    return +(n > 0) - +(n < 0);
  }
  function lu(n, e) {
    return (
      qt(e, function (t) {
        n = n.replace("%s", "" + t);
      }),
      n
    );
  }
  function cu(n) {
    return n < 10 ? "0" + n : "" + n;
  }
  var tf = {};
  function Kd(n) {
    return "" + n + cu((tf[n] = (tf[n] || 0) + 1));
  }
  function rf() {
    var n = [];
    function e(o, a, u, l) {
      i(o, a, function (c, p, h) {
        var d = "addEventListener" in c,
          _ = d
            ? c.removeEventListener.bind(c, p, u, l)
            : c.removeListener.bind(c, u);
        (d ? c.addEventListener(p, u, l) : c.addListener(u),
          n.push([c, p, h, u, _]));
      });
    }
    function t(o, a, u) {
      i(o, a, function (l, c, p) {
        n = n.filter(function (h) {
          return h[0] === l && h[1] === c && h[2] === p && (!u || h[3] === u)
            ? (h[4](), !1)
            : !0;
        });
      });
    }
    function r(o, a, u) {
      var l,
        c = !0;
      return (
        typeof CustomEvent == "function"
          ? (l = new CustomEvent(a, { bubbles: c, detail: u }))
          : ((l = document.createEvent("CustomEvent")),
            l.initCustomEvent(a, c, !1, u)),
        o.dispatchEvent(l),
        l
      );
    }
    function i(o, a, u) {
      qt(o, function (l) {
        l &&
          qt(a, function (c) {
            c.split(" ").forEach(function (p) {
              var h = p.split(".");
              u(l, h[0], h[1]);
            });
          });
      });
    }
    function s() {
      (n.forEach(function (o) {
        o[4]();
      }),
        xr(n));
    }
    return { bind: e, unbind: t, dispatch: r, destroy: s };
  }
  var ki = "mounted",
    nf = "ready",
    ei = "move",
    ys = "moved",
    sf = "click",
    Zd = "active",
    Qd = "inactive",
    Jd = "visible",
    ep = "hidden",
    He = "refresh",
    bt = "updated",
    Es = "resize",
    fu = "resized",
    tp = "drag",
    rp = "dragging",
    ip = "dragged",
    hu = "scroll",
    vn = "scrolled",
    np = "overflow",
    of = "destroy",
    sp = "arrows:mounted",
    op = "arrows:updated",
    ap = "pagination:mounted",
    up = "pagination:updated",
    af = "navigation:mounted",
    uf = "autoplay:play",
    lp = "autoplay:playing",
    lf = "autoplay:pause",
    cf = "lazyload:loaded",
    ff = "sk",
    hf = "sh",
    xo = "ei";
  function xe(n) {
    var e = n ? n.event.bus : document.createDocumentFragment(),
      t = rf();
    function r(s, o) {
      t.bind(e, cs(s).join(" "), function (a) {
        o.apply(o, tu(a.detail) ? a.detail : []);
      });
    }
    function i(s) {
      t.dispatch(e, s, Kr(arguments, 1));
    }
    return (
      n && n.event.on(of, t.destroy),
      _s(t, { bus: e, on: r, off: ve(t.unbind, e), emit: i })
    );
  }
  function So(n, e, t, r) {
    var i = Date.now,
      s,
      o = 0,
      a,
      u = !0,
      l = 0;
    function c() {
      if (!u) {
        if (
          ((o = n ? Jr((i() - s) / n, 1) : 1),
          t && t(o),
          o >= 1 && (e(), (s = i()), r && ++l >= r))
        )
          return h();
        a = Xc(c);
      }
    }
    function p(D) {
      (D || _(), (s = i() - (D ? o * n : 0)), (u = !1), (a = Xc(c)));
    }
    function h() {
      u = !0;
    }
    function d() {
      ((s = i()), (o = 0), t && t(o));
    }
    function _() {
      (a && cancelAnimationFrame(a), (o = 0), (a = 0), (u = !0));
    }
    function f(D) {
      n = D;
    }
    function g() {
      return u;
    }
    return { start: p, rewind: d, pause: h, cancel: _, set: f, isPaused: g };
  }
  function cp(n) {
    var e = n;
    function t(i) {
      e = i;
    }
    function r(i) {
      return iu(cs(i), e);
    }
    return { set: t, is: r };
  }
  function fp(n, e) {
    var t = So(0, n, null, 1);
    return function () {
      t.isPaused() && t.start();
    };
  }
  function hp(n, e, t) {
    var r = n.state,
      i = t.breakpoints || {},
      s = t.reducedMotion || {},
      o = rf(),
      a = [];
    function u() {
      var _ = t.mediaQuery === "min";
      (ps(i)
        .sort(function (f, g) {
          return _ ? +f - +g : +g - +f;
        })
        .forEach(function (f) {
          c(i[f], "(" + (_ ? "min" : "max") + "-width:" + f + "px)");
        }),
        c(s, qc),
        p());
    }
    function l(_) {
      _ && o.destroy();
    }
    function c(_, f) {
      var g = matchMedia(f);
      (o.bind(g, "change", p), a.push([_, g]));
    }
    function p() {
      var _ = r.is(mo),
        f = t.direction,
        g = a.reduce(function (D, m) {
          return Qr(D, m[1].matches ? m[0] : {});
        }, {});
      (jc(t),
        d(g),
        t.destroy
          ? n.destroy(t.destroy === "completely")
          : _
            ? (l(!0), n.mount())
            : f !== t.direction && n.refresh());
    }
    function h(_) {
      matchMedia(qc).matches && (_ ? Qr(t, s) : jc(t, ps(s)));
    }
    function d(_, f, g) {
      (Qr(t, _),
        f && Qr(Object.getPrototypeOf(t), _),
        (g || !r.is(hn)) && n.emit(bt, t));
    }
    return { setup: u, destroy: l, reduce: h, set: d };
  }
  var To = "Arrow",
    Ao = To + "Left",
    Fo = To + "Right",
    df = To + "Up",
    pf = To + "Down",
    _f = "rtl",
    Po = "ttb",
    du = {
      width: ["height"],
      left: ["top", "right"],
      right: ["bottom", "left"],
      x: ["y"],
      X: ["Y"],
      Y: ["X"],
      ArrowLeft: [df, Fo],
      ArrowRight: [pf, Ao],
    };
  function dp(n, e, t) {
    function r(s, o, a) {
      a = a || t.direction;
      var u = a === _f && !o ? 1 : a === Po ? 0 : -1;
      return (
        (du[s] && du[s][u]) ||
        s.replace(/width|left|right/i, function (l, c) {
          var p = du[l.toLowerCase()][u] || l;
          return c > 0 ? p.charAt(0).toUpperCase() + p.slice(1) : p;
        })
      );
    }
    function i(s) {
      return s * (t.direction === _f ? 1 : -1);
    }
    return { resolve: r, orient: i };
  }
  var Fr = "role",
    Dn = "tabindex",
    pp = "disabled",
    Zt = "aria-",
    ws = Zt + "controls",
    gf = Zt + "current",
    vf = Zt + "selected",
    Xt = Zt + "label",
    pu = Zt + "labelledby",
    Df = Zt + "hidden",
    _u = Zt + "orientation",
    bs = Zt + "roledescription",
    mf = Zt + "live",
    yf = Zt + "busy",
    Ef = Zt + "atomic",
    gu = [Fr, Dn, pp, ws, gf, Xt, pu, Df, _u, bs],
    hr = vs + "__",
    ti = "is-",
    vu = vs,
    wf = hr + "track",
    _p = hr + "list",
    Oo = hr + "slide",
    bf = Oo + "--clone",
    gp = Oo + "__container",
    Du = hr + "arrows",
    ko = hr + "arrow",
    Cf = ko + "--prev",
    xf = ko + "--next",
    Ro = hr + "pagination",
    Sf = Ro + "__page",
    vp = hr + "progress",
    Dp = vp + "__bar",
    mp = hr + "toggle",
    yp = hr + "spinner",
    Ep = hr + "sr",
    wp = ti + "initialized",
    Ri = ti + "active",
    Tf = ti + "prev",
    Af = ti + "next",
    mu = ti + "visible",
    yu = ti + "loading",
    Ff = ti + "focus-in",
    Pf = ti + "overflow",
    bp = [Ri, mu, Tf, Af, yu, Ff, Pf],
    Cp = {
      slide: Oo,
      clone: bf,
      arrows: Du,
      arrow: ko,
      prev: Cf,
      next: xf,
      pagination: Ro,
      page: Sf,
      spinner: yp,
    };
  function xp(n, e) {
    if (Uc(n.closest)) return n.closest(e);
    for (var t = n; t && t.nodeType === 1 && !hs(t, e); ) t = t.parentElement;
    return t;
  }
  var Sp = 5,
    Of = 200,
    kf = "touchstart mousedown",
    Eu = "touchmove mousemove",
    wu = "touchend touchcancel mouseup click";
  function Tp(n, e, t) {
    var r = xe(n),
      i = r.on,
      s = r.bind,
      o = n.root,
      a = t.i18n,
      u = {},
      l = [],
      c = [],
      p = [],
      h,
      d,
      _;
    function f() {
      (E(), w(), m());
    }
    function g() {
      (i(He, D),
        i(He, f),
        i(bt, m),
        s(
          document,
          kf + " keydown",
          function (y) {
            _ = y.type === "keydown";
          },
          { capture: !0 },
        ),
        s(o, "focusin", function () {
          Sr(o, Ff, !!_);
        }));
    }
    function D(y) {
      var A = gu.concat("style");
      (xr(l), Ar(o, c), Ar(h, p), fr([h, d], A), fr(o, y ? A : ["style", bs]));
    }
    function m() {
      (Ar(o, c),
        Ar(h, p),
        (c = S(vu)),
        (p = S(wf)),
        cr(o, c),
        cr(h, p),
        ee(o, Xt, t.label),
        ee(o, pu, t.labelledby));
    }
    function E() {
      ((h = b("." + wf)),
        (d = ds(h, "." + _p)),
        Ds(h && d, "A track/list element is missing."),
        Eo(l, $c(d, "." + Oo + ":not(." + bf + ")")),
        Fi(
          {
            arrows: Du,
            pagination: Ro,
            prev: Cf,
            next: xf,
            bar: Dp,
            toggle: mp,
          },
          function (y, A) {
            u[A] = b("." + y);
          },
        ),
        _s(u, { root: o, track: h, list: d, slides: l }));
    }
    function w() {
      var y = o.id || Kd(vs),
        A = t.role;
      ((o.id = y),
        (h.id = h.id || y + "-track"),
        (d.id = d.id || y + "-list"),
        !Kt(o, Fr) && o.tagName !== "SECTION" && A && ee(o, Fr, A),
        ee(o, bs, a.carousel),
        ee(d, Fr, "presentation"));
    }
    function b(y) {
      var A = Jc(o, y);
      return A && xp(A, "." + vu) === o ? A : void 0;
    }
    function S(y) {
      return [
        y + "--" + t.type,
        y + "--" + t.direction,
        t.drag && y + "--draggable",
        t.isNavigation && y + "--nav",
        y === vu && Ri,
      ];
    }
    return _s(u, { setup: f, mount: g, destroy: D });
  }
  var mn = "slide",
    yn = "loop",
    Cs = "fade";
  function Ap(n, e, t, r) {
    var i = xe(n),
      s = i.on,
      o = i.emit,
      a = i.bind,
      u = n.Components,
      l = n.root,
      c = n.options,
      p = c.isNavigation,
      h = c.updateOnMove,
      d = c.i18n,
      _ = c.pagination,
      f = c.slideFocus,
      g = u.Direction.resolve,
      D = Kt(r, "style"),
      m = Kt(r, Xt),
      E = t > -1,
      w = ds(r, "." + gp),
      b;
    function S() {
      (E ||
        ((r.id = l.id + "-slide" + cu(e + 1)),
        ee(r, Fr, _ ? "tabpanel" : "group"),
        ee(r, bs, d.slide),
        ee(r, Xt, m || lu(d.slideLabel, [e + 1, n.length]))),
        y());
    }
    function y() {
      (a(r, "click", ve(o, sf, I)),
        a(r, "keydown", ve(o, ff, I)),
        s([ys, hf, vn], P),
        s(af, T),
        h && s(ei, x));
    }
    function A() {
      ((b = !0),
        i.destroy(),
        Ar(r, bp),
        fr(r, gu),
        ee(r, "style", D),
        ee(r, Xt, m || ""));
    }
    function T() {
      var L = n.splides
        .map(function (v) {
          var B = v.splide.Components.Slides.getAt(e);
          return B ? B.slide.id : "";
        })
        .join(" ");
      (ee(r, Xt, lu(d.slideX, (E ? t : e) + 1)),
        ee(r, ws, L),
        ee(r, Fr, f ? "button" : ""),
        f && fr(r, bs));
    }
    function x() {
      b || P();
    }
    function P() {
      if (!b) {
        var L = n.index;
        (C(), O(), Sr(r, Tf, e === L - 1), Sr(r, Af, e === L + 1));
      }
    }
    function C() {
      var L = R();
      L !== Zc(r, Ri) &&
        (Sr(r, Ri, L), ee(r, gf, (p && L) || ""), o(L ? Zd : Qd, I));
    }
    function O() {
      var L = V(),
        v = !L && (!R() || E);
      if (
        (n.state.is([pn, as]) || ee(r, Df, v || ""),
        ee(su(r, c.focusableNodes || ""), Dn, v ? -1 : ""),
        f && ee(r, Dn, v ? -1 : 0),
        L !== Zc(r, mu) && (Sr(r, mu, L), o(L ? Jd : ep, I)),
        !L && document.activeElement === r)
      ) {
        var B = u.Slides.getAt(n.index);
        B && Kc(B.slide);
      }
    }
    function k(L, v, B) {
      jt((B && w) || r, L, v);
    }
    function R() {
      var L = n.index;
      return L === e || (c.cloneStatus && L === t);
    }
    function V() {
      if (n.is(Cs)) return R();
      var L = Yt(u.Elements.track),
        v = Yt(r),
        B = g("left", !0),
        Y = g("right", !0);
      return bo(L[B]) <= ms(v[B]) && bo(v[Y]) <= ms(L[Y]);
    }
    function z(L, v) {
      var B = wt(L - e);
      return (
        !E && (c.rewind || n.is(yn)) && (B = Jr(B, n.length - B)),
        B <= v
      );
    }
    var I = {
      index: e,
      slideIndex: t,
      slide: r,
      container: w,
      isClone: E,
      mount: S,
      destroy: A,
      update: P,
      style: k,
      isWithin: z,
    };
    return I;
  }
  function Fp(n, e, t) {
    var r = xe(n),
      i = r.on,
      s = r.emit,
      o = r.bind,
      a = e.Elements,
      u = a.slides,
      l = a.list,
      c = [];
    function p() {
      (h(), i(He, d), i(He, h));
    }
    function h() {
      u.forEach(function (P, C) {
        f(P, C, -1);
      });
    }
    function d() {
      (b(function (P) {
        P.destroy();
      }),
        xr(c));
    }
    function _() {
      b(function (P) {
        P.update();
      });
    }
    function f(P, C, O) {
      var k = Ap(n, C, O, P);
      (k.mount(),
        c.push(k),
        c.sort(function (R, V) {
          return R.index - V.index;
        }));
    }
    function g(P) {
      return P
        ? S(function (C) {
            return !C.isClone;
          })
        : c;
    }
    function D(P) {
      var C = e.Controller,
        O = C.toIndex(P),
        k = C.hasFocus() ? 1 : t.perPage;
      return S(function (R) {
        return Co(R.index, O, O + k - 1);
      });
    }
    function m(P) {
      return S(P)[0];
    }
    function E(P, C) {
      (qt(P, function (O) {
        if ((Zr(O) && (O = Qc(O)), Gc(O))) {
          var k = u[C];
          (k ? nu(O, k) : fs(l, O), cr(O, t.classes.slide), A(O, ve(s, Es)));
        }
      }),
        s(He));
    }
    function w(P) {
      (Pi(
        S(P).map(function (C) {
          return C.slide;
        }),
      ),
        s(He));
    }
    function b(P, C) {
      g(C).forEach(P);
    }
    function S(P) {
      return c.filter(
        Uc(P)
          ? P
          : function (C) {
              return Zr(P) ? hs(C.slide, P) : iu(cs(P), C.index);
            },
      );
    }
    function y(P, C, O) {
      b(function (k) {
        k.style(P, C, O);
      });
    }
    function A(P, C) {
      var O = su(P, "img"),
        k = O.length;
      k
        ? O.forEach(function (R) {
            o(R, "load error", function () {
              --k || C();
            });
          })
        : C();
    }
    function T(P) {
      return P ? u.length : c.length;
    }
    function x() {
      return c.length > t.perPage;
    }
    return {
      mount: p,
      destroy: d,
      update: _,
      register: f,
      get: g,
      getIn: D,
      getAt: m,
      add: E,
      remove: w,
      forEach: b,
      filter: S,
      style: y,
      getLength: T,
      isEnough: x,
    };
  }
  function Pp(n, e, t) {
    var r = xe(n),
      i = r.on,
      s = r.bind,
      o = r.emit,
      a = e.Slides,
      u = e.Direction.resolve,
      l = e.Elements,
      c = l.root,
      p = l.track,
      h = l.list,
      d = a.getAt,
      _ = a.style,
      f,
      g,
      D;
    function m() {
      (E(), s(window, "resize load", fp(ve(o, Es))), i([bt, He], E), i(Es, w));
    }
    function E() {
      ((f = t.direction === Po),
        jt(c, "maxWidth", Oi(t.width)),
        jt(p, u("paddingLeft"), b(!1)),
        jt(p, u("paddingRight"), b(!0)),
        w(!0));
    }
    function w(I) {
      var L = Yt(c);
      (I || g.width !== L.width || g.height !== L.height) &&
        (jt(p, "height", S()),
        _(u("marginRight"), Oi(t.gap)),
        _("width", A()),
        _("height", T(), !0),
        (g = L),
        o(fu),
        D !== (D = z()) && (Sr(c, Pf, D), o(np, D)));
    }
    function b(I) {
      var L = t.padding,
        v = u(I ? "right" : "left");
      return (L && Oi(L[v] || (us(L) ? 0 : L))) || "0px";
    }
    function S() {
      var I = "";
      return (
        f &&
          ((I = y()),
          Ds(I, "height or heightRatio is missing."),
          (I = "calc(" + I + " - " + b(!1) + " - " + b(!0) + ")")),
        I
      );
    }
    function y() {
      return Oi(t.height || Yt(h).width * t.heightRatio);
    }
    function A() {
      return t.autoWidth ? null : Oi(t.fixedWidth) || (f ? "" : x());
    }
    function T() {
      return Oi(t.fixedHeight) || (f ? (t.autoHeight ? null : x()) : y());
    }
    function x() {
      var I = Oi(t.gap);
      return (
        "calc((100%" +
        (I && " + " + I) +
        ")/" +
        (t.perPage || 1) +
        (I && " - " + I) +
        ")"
      );
    }
    function P() {
      return Yt(h)[u("width")];
    }
    function C(I, L) {
      var v = d(I || 0);
      return v ? Yt(v.slide)[u("width")] + (L ? 0 : R()) : 0;
    }
    function O(I, L) {
      var v = d(I);
      if (v) {
        var B = Yt(v.slide)[u("right")],
          Y = Yt(h)[u("left")];
        return wt(B - Y) + (L ? 0 : R());
      }
      return 0;
    }
    function k(I) {
      return O(n.length - 1) - O(0) + C(0, I);
    }
    function R() {
      var I = d(0);
      return (I && parseFloat(jt(I.slide, u("marginRight")))) || 0;
    }
    function V(I) {
      return parseFloat(jt(p, u("padding" + (I ? "Right" : "Left")))) || 0;
    }
    function z() {
      return n.is(Cs) || k(!0) > P();
    }
    return {
      mount: m,
      resize: w,
      listSize: P,
      slideSize: C,
      sliderSize: k,
      totalSize: O,
      getPadding: V,
      isOverflow: z,
    };
  }
  var Op = 2;
  function kp(n, e, t) {
    var r = xe(n),
      i = r.on,
      s = e.Elements,
      o = e.Slides,
      a = e.Direction.resolve,
      u = [],
      l;
    function c() {
      (i(He, p), i([bt, Es], d), (l = g()) && (_(l), e.Layout.resize(!0)));
    }
    function p() {
      (h(), c());
    }
    function h() {
      (Pi(u), xr(u), r.destroy());
    }
    function d() {
      var D = g();
      l !== D && (l < D || !D) && r.emit(He);
    }
    function _(D) {
      var m = o.get().slice(),
        E = m.length;
      if (E) {
        for (; m.length < D; ) Eo(m, m);
        Eo(m.slice(-D), m.slice(0, D)).forEach(function (w, b) {
          var S = b < D,
            y = f(w.slide, b);
          (S ? nu(y, m[0].slide) : fs(s.list, y),
            Eo(u, y),
            o.register(y, b - D + (S ? 0 : E), w.index));
        });
      }
    }
    function f(D, m) {
      var E = D.cloneNode(!0);
      return (
        cr(E, t.classes.clone),
        (E.id = n.root.id + "-clone" + cu(m + 1)),
        E
      );
    }
    function g() {
      var D = t.clones;
      if (!n.is(yn)) D = 0;
      else if (ls(D)) {
        var m = t[a("fixedWidth")] && e.Layout.slideSize(0),
          E = m && ms(Yt(s.track)[a("width")] / m);
        D = E || (t[a("autoWidth")] && n.length) || t.perPage * Op;
      }
      return D;
    }
    return { mount: c, destroy: h };
  }
  function Rp(n, e, t) {
    var r = xe(n),
      i = r.on,
      s = r.emit,
      o = n.state.set,
      a = e.Layout,
      u = a.slideSize,
      l = a.getPadding,
      c = a.totalSize,
      p = a.listSize,
      h = a.sliderSize,
      d = e.Direction,
      _ = d.resolve,
      f = d.orient,
      g = e.Elements,
      D = g.list,
      m = g.track,
      E;
    function w() {
      ((E = e.Transition), i([ki, fu, bt, He], b));
    }
    function b() {
      e.Controller.isBusy() ||
        (e.Scroll.cancel(), y(n.index), e.Slides.update());
    }
    function S(v, B, Y, he) {
      (v !== B && I(v > Y) && (P(), A(x(k(), v > Y), !0)),
        o(pn),
        s(ei, B, Y, v),
        E.start(B, function () {
          (o(dn), s(ys, B, Y, v), he && he());
        }));
    }
    function y(v) {
      A(O(v, !0));
    }
    function A(v, B) {
      if (!n.is(Cs)) {
        var Y = B ? v : T(v);
        (jt(D, "transform", "translate" + _("X") + "(" + Y + "px)"),
          v !== Y && s(hf));
      }
    }
    function T(v) {
      if (n.is(yn)) {
        var B = C(v),
          Y = B > e.Controller.getEnd(),
          he = B < 0;
        (he || Y) && (v = x(v, Y));
      }
      return v;
    }
    function x(v, B) {
      var Y = v - z(B),
        he = h();
      return ((v -= f(he * (ms(wt(Y) / he) || 1)) * (B ? 1 : -1)), v);
    }
    function P() {
      (A(k(), !0), E.cancel());
    }
    function C(v) {
      for (
        var B = e.Slides.get(), Y = 0, he = 1 / 0, te = 0;
        te < B.length;
        te++
      ) {
        var De = B[te].index,
          N = wt(O(De, !0) - v);
        if (N <= he) ((he = N), (Y = De));
        else break;
      }
      return Y;
    }
    function O(v, B) {
      var Y = f(c(v - 1) - V(v));
      return B ? R(Y) : Y;
    }
    function k() {
      var v = _("left");
      return Yt(D)[v] - Yt(m)[v] + f(l(!1));
    }
    function R(v) {
      return (t.trimSpace && n.is(mn) && (v = gn(v, 0, f(h(!0) - p()))), v);
    }
    function V(v) {
      var B = t.focus;
      return B === "center" ? (p() - u(v, !0)) / 2 : +B * u(v) || 0;
    }
    function z(v) {
      return O(v ? e.Controller.getEnd() : 0, !!t.trimSpace);
    }
    function I(v) {
      var B = f(x(k(), v));
      return v ? B >= 0 : B <= D[_("scrollWidth")] - Yt(m)[_("width")];
    }
    function L(v, B) {
      B = ls(B) ? k() : B;
      var Y = v !== !0 && f(B) < f(z(!1)),
        he = v !== !1 && f(B) > f(z(!0));
      return Y || he;
    }
    return {
      mount: w,
      move: S,
      jump: y,
      translate: A,
      shift: x,
      cancel: P,
      toIndex: C,
      toPosition: O,
      getPosition: k,
      getLimit: z,
      exceededLimit: L,
      reposition: b,
    };
  }
  function Lp(n, e, t) {
    var r = xe(n),
      i = r.on,
      s = r.emit,
      o = e.Move,
      a = o.getPosition,
      u = o.getLimit,
      l = o.toPosition,
      c = e.Slides,
      p = c.isEnough,
      h = c.getLength,
      d = t.omitEnd,
      _ = n.is(yn),
      f = n.is(mn),
      g = ve(k, !1),
      D = ve(k, !0),
      m = t.start || 0,
      E,
      w = m,
      b,
      S,
      y;
    function A() {
      (T(), i([bt, He, xo], T), i(fu, x));
    }
    function T() {
      ((b = h(!0)), (S = t.perMove), (y = t.perPage), (E = I()));
      var N = gn(m, 0, d ? E : b - 1);
      N !== m && ((m = N), o.reposition());
    }
    function x() {
      E !== I() && s(xo);
    }
    function P(N, G, fe) {
      if (!De()) {
        var se = O(N),
          ye = z(se);
        ye > -1 && (G || ye !== m) && (Y(ye), o.move(se, ye, w, fe));
      }
    }
    function C(N, G, fe, se) {
      e.Scroll.scroll(N, G, fe, function () {
        var ye = z(o.toIndex(a()));
        (Y(d ? Jr(ye, E) : ye), se && se());
      });
    }
    function O(N) {
      var G = m;
      if (Zr(N)) {
        var fe = N.match(/([+\-<>])(\d+)?/) || [],
          se = fe[1],
          ye = fe[2];
        se === "+" || se === "-"
          ? (G = R(m + +("" + se + (+ye || 1)), m))
          : se === ">"
            ? (G = ye ? L(+ye) : g(!0))
            : se === "<" && (G = D(!0));
      } else G = _ ? N : gn(N, 0, E);
      return G;
    }
    function k(N, G) {
      var fe = S || (te() ? 1 : y),
        se = R(m + fe * (N ? -1 : 1), m, !(S || te()));
      return se === -1 && f && !ef(a(), u(!N), 1)
        ? N
          ? 0
          : E
        : G
          ? se
          : z(se);
    }
    function R(N, G, fe) {
      if (p() || te()) {
        var se = V(N);
        (se !== N && ((G = N), (N = se), (fe = !1)),
          N < 0 || N > E
            ? !S && (Co(0, N, G, !0) || Co(E, G, N, !0))
              ? (N = L(v(N)))
              : _
                ? (N = fe ? (N < 0 ? -(b % y || y) : b) : N)
                : t.rewind
                  ? (N = N < 0 ? E : 0)
                  : (N = -1)
            : fe && N !== G && (N = L(v(G) + (N < G ? -1 : 1))));
      } else N = -1;
      return N;
    }
    function V(N) {
      if (f && t.trimSpace === "move" && N !== m)
        for (var G = a(); G === l(N, !0) && Co(N, 0, n.length - 1, !t.rewind); )
          N < m ? --N : ++N;
      return N;
    }
    function z(N) {
      return _ ? (N + b) % b || 0 : N;
    }
    function I() {
      for (var N = b - (te() || (_ && S) ? 1 : y); d && N-- > 0; )
        if (l(b - 1, !0) !== l(N, !0)) {
          N++;
          break;
        }
      return gn(N, 0, b - 1);
    }
    function L(N) {
      return gn(te() ? N : y * N, 0, E);
    }
    function v(N) {
      return te() ? Jr(N, E) : bo((N >= E ? b - 1 : N) / y);
    }
    function B(N) {
      var G = o.toIndex(N);
      return f ? gn(G, 0, E) : G;
    }
    function Y(N) {
      N !== m && ((w = m), (m = N));
    }
    function he(N) {
      return N ? w : m;
    }
    function te() {
      return !ls(t.focus) || t.isNavigation;
    }
    function De() {
      return n.state.is([pn, as]) && !!t.waitForTransition;
    }
    return {
      mount: A,
      go: P,
      scroll: C,
      getNext: g,
      getPrev: D,
      getAdjacent: k,
      getEnd: I,
      setIndex: Y,
      getIndex: he,
      toIndex: L,
      toPage: v,
      toDest: B,
      hasFocus: te,
      isBusy: De,
    };
  }
  var Mp = "http://www.w3.org/2000/svg",
    Ip =
      "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
    Lo = 40;
  function Np(n, e, t) {
    var r = xe(n),
      i = r.on,
      s = r.bind,
      o = r.emit,
      a = t.classes,
      u = t.i18n,
      l = e.Elements,
      c = e.Controller,
      p = l.arrows,
      h = l.track,
      d = p,
      _ = l.prev,
      f = l.next,
      g,
      D,
      m = {};
    function E() {
      (b(), i(bt, w));
    }
    function w() {
      (S(), E());
    }
    function b() {
      var C = t.arrows;
      (C && !(_ && f) && T(),
        _ &&
          f &&
          (_s(m, { prev: _, next: f }),
          gs(d, C ? "" : "none"),
          cr(d, (D = Du + "--" + t.direction)),
          C && (y(), P(), ee([_, f], ws, h.id), o(sp, _, f))));
    }
    function S() {
      (r.destroy(),
        Ar(d, D),
        g ? (Pi(p ? [_, f] : d), (_ = f = null)) : fr([_, f], gu));
    }
    function y() {
      (i([ki, ys, He, vn, xo], P),
        s(f, "click", ve(A, ">")),
        s(_, "click", ve(A, "<")));
    }
    function A(C) {
      c.go(C, !0);
    }
    function T() {
      ((d = p || _n("div", a.arrows)),
        (_ = x(!0)),
        (f = x(!1)),
        (g = !0),
        fs(d, [_, f]),
        !p && nu(d, h));
    }
    function x(C) {
      var O =
        '<button class="' +
        a.arrow +
        " " +
        (C ? a.prev : a.next) +
        '" type="button"><svg xmlns="' +
        Mp +
        '" viewBox="0 0 ' +
        Lo +
        " " +
        Lo +
        '" width="' +
        Lo +
        '" height="' +
        Lo +
        '" focusable="false"><path d="' +
        (t.arrowPath || Ip) +
        '" />';
      return Qc(O);
    }
    function P() {
      if (_ && f) {
        var C = n.index,
          O = c.getPrev(),
          k = c.getNext(),
          R = O > -1 && C < O ? u.last : u.prev,
          V = k > -1 && C > k ? u.first : u.next;
        ((_.disabled = O < 0),
          (f.disabled = k < 0),
          ee(_, Xt, R),
          ee(f, Xt, V),
          o(op, _, f, O, k));
      }
    }
    return { arrows: m, mount: E, destroy: S, update: P };
  }
  var Bp = au + "-interval";
  function zp(n, e, t) {
    var r = xe(n),
      i = r.on,
      s = r.bind,
      o = r.emit,
      a = So(t.interval, n.go.bind(n, ">"), y),
      u = a.isPaused,
      l = e.Elements,
      c = e.Elements,
      p = c.root,
      h = c.toggle,
      d = t.autoplay,
      _,
      f,
      g = d === "pause";
    function D() {
      d && (m(), h && ee(h, ws, l.track.id), g || E(), S());
    }
    function m() {
      (t.pauseOnHover &&
        s(p, "mouseenter mouseleave", function (T) {
          ((_ = T.type === "mouseenter"), b());
        }),
        t.pauseOnFocus &&
          s(p, "focusin focusout", function (T) {
            ((f = T.type === "focusin"), b());
          }),
        h &&
          s(h, "click", function () {
            g ? E() : w(!0);
          }),
        i([ei, hu, He], a.rewind),
        i(ei, A));
    }
    function E() {
      u() &&
        e.Slides.isEnough() &&
        (a.start(!t.resetProgress), (f = _ = g = !1), S(), o(uf));
    }
    function w(T) {
      (T === void 0 && (T = !0), (g = !!T), S(), u() || (a.pause(), o(lf)));
    }
    function b() {
      g || (_ || f ? w(!1) : E());
    }
    function S() {
      h && (Sr(h, Ri, !g), ee(h, Xt, t.i18n[g ? "play" : "pause"]));
    }
    function y(T) {
      var x = l.bar;
      (x && jt(x, "width", T * 100 + "%"), o(lp, T));
    }
    function A(T) {
      var x = e.Slides.getAt(T);
      a.set((x && +Kt(x.slide, Bp)) || t.interval);
    }
    return { mount: D, destroy: a.cancel, play: E, pause: w, isPaused: u };
  }
  function Hp(n, e, t) {
    var r = xe(n),
      i = r.on;
    function s() {
      t.cover && (i(cf, ve(a, !0)), i([ki, bt, He], ve(o, !0)));
    }
    function o(u) {
      e.Slides.forEach(function (l) {
        var c = ds(l.container || l.slide, "img");
        c && c.src && a(u, c, l);
      });
    }
    function a(u, l, c) {
      (c.style(
        "background",
        u ? 'center/cover no-repeat url("' + l.src + '")' : "",
        !0,
      ),
        gs(l, u ? "none" : ""));
    }
    return { mount: s, destroy: ve(o, !1) };
  }
  var Vp = 10,
    Wp = 600,
    qp = 0.6,
    Yp = 1.5,
    Xp = 800;
  function Up(n, e, t) {
    var r = xe(n),
      i = r.on,
      s = r.emit,
      o = n.state.set,
      a = e.Move,
      u = a.getPosition,
      l = a.getLimit,
      c = a.exceededLimit,
      p = a.translate,
      h = n.is(mn),
      d,
      _,
      f = 1;
    function g() {
      (i(ei, w), i([bt, He], b));
    }
    function D(y, A, T, x, P) {
      var C = u();
      if ((w(), T && (!h || !c()))) {
        var O = e.Layout.sliderSize(),
          k = uu(y) * O * bo(wt(y) / O) || 0;
        y = a.toPosition(e.Controller.toDest(y % O)) + k;
      }
      var R = ef(C, y, 1);
      ((f = 1),
        (A = R ? 0 : A || wo(wt(y - C) / Yp, Xp)),
        (_ = x),
        (d = So(A, m, ve(E, C, y, P), 1)),
        o(as),
        s(hu),
        d.start());
    }
    function m() {
      (o(dn), _ && _(), s(vn));
    }
    function E(y, A, T, x) {
      var P = u(),
        C = y + (A - y) * S(x),
        O = (C - P) * f;
      (p(P + O),
        h &&
          !T &&
          c() &&
          ((f *= qp), wt(O) < Vp && D(l(c(!0)), Wp, !1, _, !0)));
    }
    function w() {
      d && d.cancel();
    }
    function b() {
      d && !d.isPaused() && (w(), m());
    }
    function S(y) {
      var A = t.easingFunc;
      return A ? A(y) : 1 - Math.pow(1 - y, 4);
    }
    return { mount: g, destroy: w, scroll: D, cancel: b };
  }
  var En = { passive: !1, capture: !0 };
  function Gp(n, e, t) {
    var r = xe(n),
      i = r.on,
      s = r.emit,
      o = r.bind,
      a = r.unbind,
      u = n.state,
      l = e.Move,
      c = e.Scroll,
      p = e.Controller,
      h = e.Elements.track,
      d = e.Media.reduce,
      _ = e.Direction,
      f = _.resolve,
      g = _.orient,
      D = l.getPosition,
      m = l.exceededLimit,
      E,
      w,
      b,
      S,
      y,
      A = !1,
      T,
      x,
      P;
    function C() {
      (o(h, Eu, eu, En),
        o(h, wu, eu, En),
        o(h, kf, k, En),
        o(h, "click", z, { capture: !0 }),
        o(h, "dragstart", Tr),
        i([ki, bt], O));
    }
    function O() {
      var M = t.drag;
      (Ue(!M), (S = M === "free"));
    }
    function k(M) {
      if (((T = !1), !x)) {
        var $ = ye(M);
        se(M.target) &&
          ($ || !M.button) &&
          (p.isBusy()
            ? Tr(M, !0)
            : ((P = $ ? h : window),
              (y = u.is([pn, as])),
              (b = null),
              o(P, Eu, R, En),
              o(P, wu, V, En),
              l.cancel(),
              c.cancel(),
              I(M)));
      }
    }
    function R(M) {
      if ((u.is(Do) || (u.set(Do), s(tp)), M.cancelable))
        if (y) {
          l.translate(E + fe(te(M)));
          var $ = De(M) > Of,
            Ae = A !== (A = m());
          (($ || Ae) && I(M), (T = !0), s(rp), Tr(M));
        } else B(M) && ((y = v(M)), Tr(M));
    }
    function V(M) {
      (u.is(Do) && (u.set(dn), s(ip)),
        y && (L(M), Tr(M)),
        a(P, Eu, R),
        a(P, wu, V),
        (y = !1));
    }
    function z(M) {
      !x && T && Tr(M, !0);
    }
    function I(M) {
      ((b = w), (w = M), (E = D()));
    }
    function L(M) {
      var $ = Y(M),
        Ae = he($),
        Ve = t.rewind && t.rewindByDrag;
      (d(!1),
        S
          ? p.scroll(Ae, 0, t.snap)
          : n.is(Cs)
            ? p.go(g(uu($)) < 0 ? (Ve ? "<" : "-") : Ve ? ">" : "+")
            : n.is(mn) && A && Ve
              ? p.go(m(!0) ? ">" : "<")
              : p.go(p.toDest(Ae), !0),
        d(!0));
    }
    function v(M) {
      var $ = t.dragMinThreshold,
        Ae = us($),
        Ve = (Ae && $.mouse) || 0,
        F = (Ae ? $.touch : +$) || 10;
      return wt(te(M)) > (ye(M) ? F : Ve);
    }
    function B(M) {
      return wt(te(M)) > wt(te(M, !0));
    }
    function Y(M) {
      if (n.is(yn) || !A) {
        var $ = De(M);
        if ($ && $ < Of) return te(M) / $;
      }
      return 0;
    }
    function he(M) {
      return (
        D() +
        uu(M) *
          Jr(
            wt(M) * (t.flickPower || 600),
            S ? 1 / 0 : e.Layout.listSize() * (t.flickMaxPages || 1),
          )
      );
    }
    function te(M, $) {
      return G(M, $) - G(N(M), $);
    }
    function De(M) {
      return ou(M) - ou(N(M));
    }
    function N(M) {
      return (w === M && b) || w;
    }
    function G(M, $) {
      return (ye(M) ? M.changedTouches[0] : M)["page" + f($ ? "Y" : "X")];
    }
    function fe(M) {
      return M / (A && n.is(mn) ? Sp : 1);
    }
    function se(M) {
      var $ = t.noDrag;
      return !hs(M, "." + Sf + ", ." + ko) && (!$ || !hs(M, $));
    }
    function ye(M) {
      return typeof TouchEvent < "u" && M instanceof TouchEvent;
    }
    function Qe() {
      return y;
    }
    function Ue(M) {
      x = M;
    }
    return { mount: C, disable: Ue, isDragging: Qe };
  }
  var $p = { Spacebar: " ", Right: Fo, Left: Ao, Up: df, Down: pf };
  function bu(n) {
    return ((n = Zr(n) ? n : n.key), $p[n] || n);
  }
  var Rf = "keydown";
  function jp(n, e, t) {
    var r = xe(n),
      i = r.on,
      s = r.bind,
      o = r.unbind,
      a = n.root,
      u = e.Direction.resolve,
      l,
      c;
    function p() {
      (h(), i(bt, d), i(bt, h), i(ei, f));
    }
    function h() {
      var D = t.keyboard;
      D && ((l = D === "global" ? window : a), s(l, Rf, g));
    }
    function d() {
      o(l, Rf);
    }
    function _(D) {
      c = D;
    }
    function f() {
      var D = c;
      ((c = !0),
        Yc(function () {
          c = D;
        }));
    }
    function g(D) {
      if (!c) {
        var m = bu(D);
        m === u(Ao) ? n.go("<") : m === u(Fo) && n.go(">");
      }
    }
    return { mount: p, destroy: d, disable: _ };
  }
  var xs = au + "-lazy",
    Mo = xs + "-srcset",
    Kp = "[" + xs + "], [" + Mo + "]";
  function Zp(n, e, t) {
    var r = xe(n),
      i = r.on,
      s = r.off,
      o = r.bind,
      a = r.emit,
      u = t.lazyLoad === "sequential",
      l = [ys, vn],
      c = [];
    function p() {
      t.lazyLoad && (h(), i(He, h));
    }
    function h() {
      (xr(c), d(), u ? D() : (s(l), i(l, _), _()));
    }
    function d() {
      e.Slides.forEach(function (m) {
        su(m.slide, Kp).forEach(function (E) {
          var w = Kt(E, xs),
            b = Kt(E, Mo);
          if (w !== E.src || b !== E.srcset) {
            var S = t.classes.spinner,
              y = E.parentElement,
              A = ds(y, "." + S) || _n("span", S, y);
            (c.push([E, m, A]), E.src || gs(E, "none"));
          }
        });
      });
    }
    function _() {
      ((c = c.filter(function (m) {
        var E = t.perPage * ((t.preloadPages || 1) + 1) - 1;
        return m[1].isWithin(n.index, E) ? f(m) : !0;
      })),
        c.length || s(l));
    }
    function f(m) {
      var E = m[0];
      (cr(m[1].slide, yu),
        o(E, "load error", ve(g, m)),
        ee(E, "src", Kt(E, xs)),
        ee(E, "srcset", Kt(E, Mo)),
        fr(E, xs),
        fr(E, Mo));
    }
    function g(m, E) {
      var w = m[0],
        b = m[1];
      (Ar(b.slide, yu),
        E.type !== "error" && (Pi(m[2]), gs(w, ""), a(cf, w, b), a(Es)),
        u && D());
    }
    function D() {
      c.length && f(c.shift());
    }
    return { mount: p, destroy: ve(xr, c), check: _ };
  }
  function Qp(n, e, t) {
    var r = xe(n),
      i = r.on,
      s = r.emit,
      o = r.bind,
      a = e.Slides,
      u = e.Elements,
      l = e.Controller,
      c = l.hasFocus,
      p = l.getIndex,
      h = l.go,
      d = e.Direction.resolve,
      _ = u.pagination,
      f = [],
      g,
      D;
    function m() {
      (E(), i([bt, He, xo], m));
      var x = t.pagination;
      (_ && gs(_, x ? "" : "none"),
        x &&
          (i([ei, hu, vn], T),
          w(),
          T(),
          s(ap, { list: g, items: f }, A(n.index))));
    }
    function E() {
      (g && (Pi(_ ? Kr(g.children) : g), Ar(g, D), xr(f), (g = null)),
        r.destroy());
    }
    function w() {
      var x = n.length,
        P = t.classes,
        C = t.i18n,
        O = t.perPage,
        k = c() ? l.getEnd() + 1 : ms(x / O);
      ((g = _ || _n("ul", P.pagination, u.track.parentElement)),
        cr(g, (D = Ro + "--" + y())),
        ee(g, Fr, "tablist"),
        ee(g, Xt, C.select),
        ee(g, _u, y() === Po ? "vertical" : ""));
      for (var R = 0; R < k; R++) {
        var V = _n("li", null, g),
          z = _n("button", { class: P.page, type: "button" }, V),
          I = a.getIn(R).map(function (v) {
            return v.slide.id;
          }),
          L = !c() && O > 1 ? C.pageX : C.slideX;
        (o(z, "click", ve(b, R)),
          t.paginationKeyboard && o(z, "keydown", ve(S, R)),
          ee(V, Fr, "presentation"),
          ee(z, Fr, "tab"),
          ee(z, ws, I.join(" ")),
          ee(z, Xt, lu(L, R + 1)),
          ee(z, Dn, -1),
          f.push({ li: V, button: z, page: R }));
      }
    }
    function b(x) {
      h(">" + x, !0);
    }
    function S(x, P) {
      var C = f.length,
        O = bu(P),
        k = y(),
        R = -1;
      O === d(Fo, !1, k)
        ? (R = ++x % C)
        : O === d(Ao, !1, k)
          ? (R = (--x + C) % C)
          : O === "Home"
            ? (R = 0)
            : O === "End" && (R = C - 1);
      var V = f[R];
      V && (Kc(V.button), h(">" + R), Tr(P, !0));
    }
    function y() {
      return t.paginationDirection || t.direction;
    }
    function A(x) {
      return f[l.toPage(x)];
    }
    function T() {
      var x = A(p(!0)),
        P = A(p());
      if (x) {
        var C = x.button;
        (Ar(C, Ri), fr(C, vf), ee(C, Dn, -1));
      }
      if (P) {
        var O = P.button;
        (cr(O, Ri), ee(O, vf, !0), ee(O, Dn, ""));
      }
      s(up, { list: g, items: f }, x, P);
    }
    return { items: f, mount: m, destroy: E, getAt: A, update: T };
  }
  var Jp = [" ", "Enter"];
  function e_(n, e, t) {
    var r = t.isNavigation,
      i = t.slideFocus,
      s = [];
    function o() {
      (n.splides.forEach(function (_) {
        _.isParent || (l(n, _.splide), l(_.splide, n));
      }),
        r && c());
    }
    function a() {
      (s.forEach(function (_) {
        _.destroy();
      }),
        xr(s));
    }
    function u() {
      (a(), o());
    }
    function l(_, f) {
      var g = xe(_);
      (g.on(ei, function (D, m, E) {
        f.go(f.is(yn) ? E : D);
      }),
        s.push(g));
    }
    function c() {
      var _ = xe(n),
        f = _.on;
      (f(sf, h), f(ff, d), f([ki, bt], p), s.push(_), _.emit(af, n.splides));
    }
    function p() {
      ee(e.Elements.list, _u, t.direction === Po ? "vertical" : "");
    }
    function h(_) {
      n.go(_.index);
    }
    function d(_, f) {
      iu(Jp, bu(f)) && (h(_), Tr(f));
    }
    return {
      setup: ve(e.Media.set, { slideFocus: ls(i) ? r : i }, !0),
      mount: o,
      destroy: a,
      remount: u,
    };
  }
  function t_(n, e, t) {
    var r = xe(n),
      i = r.bind,
      s = 0;
    function o() {
      t.wheel && i(e.Elements.track, "wheel", a, En);
    }
    function a(l) {
      if (l.cancelable) {
        var c = l.deltaY,
          p = c < 0,
          h = ou(l),
          d = t.wheelMinThreshold || 0,
          _ = t.wheelSleep || 0;
        (wt(c) > d && h - s > _ && (n.go(p ? "<" : ">"), (s = h)),
          u(p) && Tr(l));
      }
    }
    function u(l) {
      return (
        !t.releaseWheel || n.state.is(pn) || e.Controller.getAdjacent(l) !== -1
      );
    }
    return { mount: o };
  }
  var r_ = 90;
  function i_(n, e, t) {
    var r = xe(n),
      i = r.on,
      s = e.Elements.track,
      o = t.live && !t.isNavigation,
      a = _n("span", Ep),
      u = So(r_, ve(c, !1));
    function l() {
      o &&
        (h(!e.Autoplay.isPaused()),
        ee(s, Ef, !0),
        (a.textContent = "…"),
        i(uf, ve(h, !0)),
        i(lf, ve(h, !1)),
        i([ys, vn], ve(c, !0)));
    }
    function c(d) {
      (ee(s, yf, d), d ? (fs(s, a), u.start()) : (Pi(a), u.cancel()));
    }
    function p() {
      (fr(s, [mf, Ef, yf]), Pi(a));
    }
    function h(d) {
      o && ee(s, mf, d ? "off" : "polite");
    }
    return { mount: l, disable: h, destroy: p };
  }
  var n_ = Object.freeze({
      __proto__: null,
      Media: hp,
      Direction: dp,
      Elements: Tp,
      Slides: Fp,
      Layout: Pp,
      Clones: kp,
      Move: Rp,
      Controller: Lp,
      Arrows: Np,
      Autoplay: zp,
      Cover: Hp,
      Scroll: Up,
      Drag: Gp,
      Keyboard: jp,
      LazyLoad: Zp,
      Pagination: Qp,
      Sync: e_,
      Wheel: t_,
      Live: i_,
    }),
    s_ = {
      prev: "Previous slide",
      next: "Next slide",
      first: "Go to first slide",
      last: "Go to last slide",
      slideX: "Go to slide %s",
      pageX: "Go to page %s",
      play: "Start autoplay",
      pause: "Pause autoplay",
      carousel: "carousel",
      slide: "slide",
      select: "Select a slide to show",
      slideLabel: "%s of %s",
    },
    o_ = {
      type: "slide",
      role: "region",
      speed: 400,
      perPage: 1,
      cloneStatus: !0,
      arrows: !0,
      pagination: !0,
      paginationKeyboard: !0,
      interval: 5e3,
      pauseOnHover: !0,
      pauseOnFocus: !0,
      resetProgress: !0,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      drag: !0,
      direction: "ltr",
      trimSpace: !0,
      focusableNodes: "a, button, textarea, input, select, iframe",
      live: !0,
      classes: Cp,
      i18n: s_,
      reducedMotion: { speed: 0, rewindSpeed: 0, autoplay: "pause" },
    };
  function a_(n, e, t) {
    var r = e.Slides;
    function i() {
      xe(n).on([ki, He], s);
    }
    function s() {
      r.forEach(function (a) {
        a.style("transform", "translateX(-" + 100 * a.index + "%)");
      });
    }
    function o(a, u) {
      (r.style("transition", "opacity " + t.speed + "ms " + t.easing), Yc(u));
    }
    return { mount: i, start: o, cancel: eu };
  }
  function u_(n, e, t) {
    var r = e.Move,
      i = e.Controller,
      s = e.Scroll,
      o = e.Elements.list,
      a = ve(jt, o, "transition"),
      u;
    function l() {
      xe(n).bind(o, "transitionend", function (d) {
        d.target === o && u && (p(), u());
      });
    }
    function c(d, _) {
      var f = r.toPosition(d, !0),
        g = r.getPosition(),
        D = h(d);
      wt(f - g) >= 1 && D >= 1
        ? t.useScroll
          ? s.scroll(f, D, !1, _)
          : (a("transform " + D + "ms " + t.easing),
            r.translate(f, !0),
            (u = _))
        : (r.jump(d), _());
    }
    function p() {
      (a(""), s.cancel());
    }
    function h(d) {
      var _ = t.rewindSpeed;
      if (n.is(mn) && _) {
        var f = i.getIndex(!0),
          g = i.getEnd();
        if ((f === 0 && d >= g) || (f >= g && d === 0)) return _;
      }
      return t.speed;
    }
    return { mount: l, start: c, cancel: p };
  }
  var l_ = (function () {
      function n(t, r) {
        ((this.event = xe()),
          (this.Components = {}),
          (this.state = cp(hn)),
          (this.splides = []),
          (this._o = {}),
          (this._E = {}));
        var i = Zr(t) ? Jc(document, t) : t;
        (Ds(i, i + " is invalid."),
          (this.root = i),
          (r = Qr(
            { label: Kt(i, Xt) || "", labelledby: Kt(i, pu) || "" },
            o_,
            n.defaults,
            r || {},
          )));
        try {
          Qr(r, JSON.parse(Kt(i, au)));
        } catch {
          Ds(!1, "Invalid JSON");
        }
        this._o = Object.create(Qr({}, r));
      }
      var e = n.prototype;
      return (
        (e.mount = function (r, i) {
          var s = this,
            o = this.state,
            a = this.Components;
          (Ds(o.is([hn, mo]), "Already mounted!"),
            o.set(hn),
            (this._C = a),
            (this._T = i || this._T || (this.is(Cs) ? a_ : u_)),
            (this._E = r || this._E));
          var u = _s({}, n_, this._E, { Transition: this._T });
          return (
            Fi(u, function (l, c) {
              var p = l(s, a, s._o);
              ((a[c] = p), p.setup && p.setup());
            }),
            Fi(a, function (l) {
              l.mount && l.mount();
            }),
            this.emit(ki),
            cr(this.root, wp),
            o.set(dn),
            this.emit(nf),
            this
          );
        }),
        (e.sync = function (r) {
          return (
            this.splides.push({ splide: r }),
            r.splides.push({ splide: this, isParent: !0 }),
            this.state.is(dn) &&
              (this._C.Sync.remount(), r.Components.Sync.remount()),
            this
          );
        }),
        (e.go = function (r) {
          return (this._C.Controller.go(r), this);
        }),
        (e.on = function (r, i) {
          return (this.event.on(r, i), this);
        }),
        (e.off = function (r) {
          return (this.event.off(r), this);
        }),
        (e.emit = function (r) {
          var i;
          return (
            (i = this.event).emit.apply(i, [r].concat(Kr(arguments, 1))),
            this
          );
        }),
        (e.add = function (r, i) {
          return (this._C.Slides.add(r, i), this);
        }),
        (e.remove = function (r) {
          return (this._C.Slides.remove(r), this);
        }),
        (e.is = function (r) {
          return this._o.type === r;
        }),
        (e.refresh = function () {
          return (this.emit(He), this);
        }),
        (e.destroy = function (r) {
          r === void 0 && (r = !0);
          var i = this.event,
            s = this.state;
          return (
            s.is(hn)
              ? xe(this).on(nf, this.destroy.bind(this, r))
              : (Fi(
                  this._C,
                  function (o) {
                    o.destroy && o.destroy(r);
                  },
                  !0,
                ),
                i.emit(of),
                i.destroy(),
                r && xr(this.splides),
                s.set(mo)),
            this
          );
        }),
        Gd(n, [
          {
            key: "options",
            get: function () {
              return this._o;
            },
            set: function (r) {
              this._C.Media.set(r, !0, !0);
            },
          },
          {
            key: "length",
            get: function () {
              return this._C.Slides.getLength(!0);
            },
          },
          {
            key: "index",
            get: function () {
              return this._C.Controller.getIndex();
            },
          },
        ]),
        n
      );
    })(),
    Cu = l_;
  ((Cu.defaults = {}), (Cu.STATES = jd));
  const Lf = {
      default: { pagination: !1, easing: "cubic-bezier(0.45, 0, 0.55, 1)" },
      feature_extra_block: {
        type: "loop",
        pagination: !1,
        perPage: 2,
        breakpoints: {
          480: {
            perPage: 1,
            padding: {
              left: "calc(var(--sizes-gaps--au-padding) - 1.25rem)",
              right: "calc(var(--sizes-gaps--au-padding) + 1.25rem)",
            },
          },
        },
        perMove: 1,
        focus: 0,
        trimSpace: !1,
        updateOnMove: !0,
        padding: {
          left: "calc(var(--sizes-gaps--au-padding) - 1rem)",
          right: "var(--sizes-gaps--au-padding)",
        },
      },
    },
    c_ = (n) => {
      const e = n.querySelectorAll(".splide");
      e &&
        e.forEach((t) => {
          if (
            !t.querySelector(".splide__track") ||
            !t.querySelector(".splide__list")
          )
            return;
          let r = Lf.default;
          t.classList.contains("is-feature-extra-block") &&
            (r = Lf.feature_extra_block);
          let i = new Cu(t, r);
          (i.mount(), (t._splideInstance = i));
        });
    },
    f_ = (n) => {
      const e = n.querySelectorAll(".splide");
      e &&
        e.forEach((t) => {
          t._splideInstance &&
            (t._splideInstance.destroy(), delete t._splideInstance);
        });
    },
    h_ = (n = document) => {
      (n.querySelectorAll("[data-expandable-block]").forEach((t) => {
        const r = t.parentElement,
          i = t.getAttribute("data-expandable-block"),
          s = n.querySelector(`[data-expandable-block-button="${i}"]`),
          o = s.querySelector(".au-button_svg-wrapper.is-horizontal"),
          a = s.querySelector(".au-button_svg-wrapper.is-vertical"),
          u = t.querySelectorAll(".splide__slide"),
          l = t.querySelectorAll(".extra-block-button");
        if (!s) return;
        ((s._expandableBlockState = {
          isExpanded: !1,
          block: t,
          abortController: new AbortController(),
        }),
          K.set(r, {
            display: "none",
            delay: 0.1,
            onComplete: () => {
              (Mi.resize(), j.refresh());
            },
          }));
        const c = () => {
            const _ = s._expandableBlockState,
              f = K.timeline();
            (f.to(l, { opacity: 0 }),
              f.to(u, { scale: 0.98, duration: 0.4 }, "<"),
              f.to(
                r,
                { height: "0rem", ease: "power2.inOut", duration: 0.4 },
                "<",
              ),
              f.to(o, { rotate: 0, ease: "power2.inOut", duration: 0.4 }, "<"),
              f.to(
                a,
                { scaleY: 1, rotate: 0, ease: "power2.inOut", duration: 0.2 },
                "<",
              ),
              f.set(r, { display: "none" }),
              (_.isExpanded = !1),
              Mi.resize(),
              j.refresh());
          },
          p = () => {
            const _ = s._expandableBlockState,
              f = K.timeline();
            (f.set(".splide__track", { overflow: "auto" }),
              f.set(u, { opacity: 0.1, scale: 0.95 }),
              f.set(l, { opacity: 0 }),
              f.set(r, {
                display: "block",
                height: "0rem",
                overflow: "hidden",
              }),
              f.to(
                r,
                {
                  height: "auto",
                  opacity: 1,
                  duration: 0.6,
                  ease: "power2.inOut",
                },
                "<",
              ),
              f.to(o, { rotate: 180, ease: "power2.out", duration: 0.6 }, "<"),
              f.to(
                a,
                {
                  scaleY: 0,
                  rotate: 360,
                  ease: "power2.out",
                  duration: 0.2,
                  delay: 0,
                },
                "<",
              ),
              f.to(u, { opacity: "", scale: 1, duration: 0.4, delay: -0.35 }),
              f.to(l, { opacity: 1, delay: -0.3 }),
              f.set(".splide__track", { overflow: "" }),
              (_.isExpanded = !0),
              Mi.resize(),
              j.refresh());
          },
          h = () => {
            s._expandableBlockState.isExpanded ? c() : p();
          };
        s.addEventListener("click", h, {
          signal: s._expandableBlockState.abortController.signal,
        });
        const d = t.querySelector('[data-expandable-block-button="close"]');
        d &&
          d.addEventListener("click", c, {
            signal: s._expandableBlockState.abortController.signal,
          });
      }),
        Mi.resize(),
        j.refresh());
    },
    d_ = (n = document) => {
      n.querySelectorAll("[data-expandable-block]").forEach((t) => {
        const r = t.getAttribute("data-expandable-block"),
          i = n.querySelector(`[data-expandable-block-button="${r}"]`);
        !i ||
          !i._expandableBlockState ||
          (i._expandableBlockState.abortController.abort(),
          K.killTweensOf(t),
          K.set(t, { clearProps: "all" }),
          delete i._expandableBlockState);
      });
    };
  /*!
   * strings: 3.14.2
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var p_ = /(?:^\s+|\s+$)/g,
    __ =
      /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function xu(n) {
    var e = n.nodeType,
      t = "";
    if (e === 1 || e === 9 || e === 11) {
      if (typeof n.textContent == "string") return n.textContent;
      for (n = n.firstChild; n; n = n.nextSibling) t += xu(n);
    } else if (e === 3 || e === 4) return n.nodeValue;
    return t;
  }
  function dr(n, e, t, r, i) {
    if (
      ((n += ""),
      t && (n = n.trim ? n.trim() : n.replace(p_, "")),
      e && e !== "")
    )
      return n.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
    for (var s = [], o = n.length, a = 0, u, l; a < o; a++)
      ((l = n.charAt(a)),
        ((l.charCodeAt(0) >= 55296 && l.charCodeAt(0) <= 56319) ||
          (n.charCodeAt(a + 1) >= 65024 && n.charCodeAt(a + 1) <= 65039)) &&
          ((u = ((n.substr(a, 12).split(__) || [])[1] || "").length || 2),
          (l = n.substr(a, u)),
          (s.emoji = 1),
          (a += u - 1)),
        s.push(
          i
            ? l
            : l === ">"
              ? "&gt;"
              : l === "<"
                ? "&lt;"
                : r &&
                    l === " " &&
                    (n.charAt(a - 1) === " " || n.charAt(a + 1) === " ")
                  ? "&nbsp;"
                  : l,
        ));
    return s;
  }
  /*!
   * ScrambleTextPlugin 3.14.2
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Io = (function () {
      function n(t) {
        ((this.chars = dr(t)), (this.sets = []), (this.length = 50));
        for (var r = 0; r < 20; r++) this.sets[r] = Bf(80, this.chars);
      }
      var e = n.prototype;
      return (
        (e.grow = function (r) {
          for (var i = 0; i < 20; i++)
            this.sets[i] += Bf(r - this.length, this.chars);
          this.length = r;
        }),
        n
      );
    })(),
    Li,
    Mf,
    If = function () {
      return (
        Li ||
        (typeof window < "u" && (Li = window.gsap) && Li.registerPlugin && Li)
      );
    },
    g_ = 1,
    Nf = /\s+/g,
    Bf = function (e, t) {
      for (var r = t.length, i = ""; --e > -1; ) i += t[~~(Math.random() * r)];
      return i;
    },
    Su = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    zf = Su.toLowerCase(),
    v_ = {
      upperCase: new Io(Su),
      lowerCase: new Io(zf),
      upperAndLowerCase: new Io(Su + zf),
    },
    Hf = function () {
      Mf = Li = If();
    },
    No = {
      version: "3.14.2",
      name: "scrambleText",
      register: function (e, t, r) {
        ((Li = e), Hf());
      },
      init: function (e, t, r, i, s) {
        if (
          (Mf || Hf(),
          (this.prop =
            "innerHTML" in e
              ? "innerHTML"
              : "textContent" in e
                ? "textContent"
                : 0),
          !!this.prop)
        ) {
          ((this.target = e), typeof t != "object" && (t = { text: t }));
          var o = t.text || t.value || "",
            a = t.trim !== !1,
            u = this,
            l,
            c,
            p,
            h;
          return (
            (u.delimiter = l = t.delimiter || ""),
            (u.original = dr(
              xu(e).replace(Nf, " ").split("&nbsp;").join(""),
              l,
              a,
            )),
            (o === "{original}" || o === !0 || o == null) &&
              (o = u.original.join(l)),
            (u.text = dr((o || "").replace(Nf, " "), l, a)),
            (u.hasClass = !!(t.newClass || t.oldClass)),
            (u.newClass = t.newClass),
            (u.oldClass = t.oldClass),
            (h = l === ""),
            (u.textHasEmoji = h && !!u.text.emoji),
            (u.charsHaveEmoji = !!t.chars && !!dr(t.chars).emoji),
            (u.length = h ? u.original.length : u.original.join(l).length),
            (u.lengthDif =
              (h ? u.text.length : u.text.join(l).length) - u.length),
            (u.fillChar =
              t.fillChar || (t.chars && ~t.chars.indexOf(" ")) ? "&nbsp;" : ""),
            (u.charSet = p = v_[t.chars || "upperCase"] || new Io(t.chars)),
            (u.speed = 0.05 / (t.speed || 1)),
            (u.prevScrambleTime = 0),
            (u.setIndex = (Math.random() * 20) | 0),
            (c = u.length + Math.max(u.lengthDif, 0)),
            c > p.length && p.grow(c),
            (u.chars = p.sets[u.setIndex]),
            (u.revealDelay = t.revealDelay || 0),
            (u.tweenLength = t.tweenLength !== !1),
            (u.tween = r),
            (u.rightToLeft = !!t.rightToLeft),
            u._props.push("scrambleText", "text"),
            g_
          );
        }
      },
      render: function (e, t) {
        var r = t.target,
          i = t.prop,
          s = t.text,
          o = t.delimiter,
          a = t.tween,
          u = t.prevScrambleTime,
          l = t.revealDelay,
          c = t.setIndex,
          p = t.chars,
          h = t.charSet,
          d = t.length,
          _ = t.textHasEmoji,
          f = t.charsHaveEmoji,
          g = t.lengthDif,
          D = t.tweenLength,
          m = t.oldClass,
          E = t.newClass,
          w = t.rightToLeft,
          b = t.fillChar,
          S = t.speed,
          y = t.original,
          A = t.hasClass,
          T = s.length,
          x = a._time,
          P = x - u,
          C,
          O,
          k,
          R,
          V,
          z,
          I,
          L,
          v,
          B,
          Y;
        (l &&
          (a._from && (x = a._dur - x),
          (e =
            x === 0
              ? 0
              : x < l
                ? 1e-6
                : x === a._dur
                  ? 1
                  : a._ease((x - l) / (a._dur - l)))),
          e < 0 ? (e = 0) : e > 1 && (e = 1),
          w && (e = 1 - e),
          (C = ~~(e * T + 0.5)),
          e
            ? ((P > S || P < -S) &&
                ((t.setIndex = c = (c + ((Math.random() * 19) | 0)) % 20),
                (t.chars = h.sets[c]),
                (t.prevScrambleTime += P)),
              (R = p))
            : (R = y.join(o)),
          (Y = a._from ? e : 1 - e),
          (B = d + (D ? (a._from ? Y * Y * Y : 1 - Y * Y * Y) : 1) * g),
          w
            ? e === 1 && (a._from || a.data === "isFromStart")
              ? ((k = ""), (R = y.join(o)))
              : ((I = s.slice(C).join(o)),
                f
                  ? (k = dr(R)
                      .slice(0, (B - (_ ? dr(I) : I).length + 0.5) | 0)
                      .join(""))
                  : (k = R.substr(0, (B - (_ ? dr(I) : I).length + 0.5) | 0)),
                (R = I))
            : ((k = s.slice(0, C).join(o)),
              (O = (_ ? dr(k) : k).length),
              f
                ? (R = dr(R)
                    .slice(O, (B + 0.5) | 0)
                    .join(""))
                : (R = R.substr(O, (B - O + 0.5) | 0))),
          A
            ? ((L = w ? m : E),
              (v = w ? E : m),
              (V = L && C !== 0),
              (z = v && C !== T),
              (I =
                (V ? "<span class='" + L + "'>" : "") +
                k +
                (V ? "</span>" : "") +
                (z ? "<span class='" + v + "'>" : "") +
                o +
                R +
                (z ? "</span>" : "")))
            : (I = k + o + R),
          (r[i] =
            b === "&nbsp;" && ~I.indexOf("  ")
              ? I.split("  ").join("&nbsp;&nbsp;")
              : I));
      },
    };
  ((No.emojiSafeSplit = dr),
    (No.getText = xu),
    If() && Li.registerPlugin(No),
    K.registerPlugin(j, No));
  let Vf = [];
  const D_ = (n = document) => {
      n.querySelectorAll(
        ".au_display:not([data-disable-animation]), [data-display-animation], .xe_display:not([data-disable-animation])",
      ).forEach((t) => {});
    },
    m_ = (n = document) => {
      (j.getAll().forEach((e) => e.kill()),
        Vf.forEach((e) => {
          (K.killTweensOf(e), K.set(e, { clearProps: "all" }));
        }),
        (Vf = []));
    },
    y_ = (n = document) => {
      n.querySelectorAll(".footer_subbrand-link").forEach((t) => {
        const r = t.querySelector("img"),
          i = K.getProperty(r, "scale");
        (t.addEventListener("mouseenter", () => {
          K.to(r, { scale: i + tn.scale / 5, duration: tn.duration });
        }),
          t.addEventListener("mouseleave", () => {
            K.to(r, { scale: i, duration: 0.2 });
          }));
      });
    },
    E_ = (n = document) => {
      n.querySelectorAll(".article_wrapper").forEach((t) => {
        const r = t.querySelector("img"),
          i = K.getProperty(r, "scale"),
          s = new AbortController();
        t._articleScaleAbortController = s;
        const o = { signal: s.signal };
        (t.addEventListener(
          "mouseenter",
          () => {
            K.to(r, { scale: i + tn.scale / 3, duration: tn.duration });
          },
          o,
        ),
          t.addEventListener(
            "mouseleave",
            () => {
              K.to(r, { scale: i, duration: 0.2 });
            },
            o,
          ));
      });
    },
    w_ = (n = document) => {
      n.querySelectorAll(".article_wrapper").forEach((t) => {
        const r = t.querySelector("img");
        (t._articleScaleAbortController &&
          (t._articleScaleAbortController.abort(),
          delete t._articleScaleAbortController),
          r && K.killTweensOf(r));
      });
    },
    b_ = (n = document) => {
      const e = n.querySelector("#au-solution-toggle"),
        t = n.querySelector(".au-solution_video");
      if (!e || !t) return;
      const r = e.querySelector("input"),
        i = t.querySelector("video");
      if (!r || !i) return;
      (console.log(r, i),
        setTimeout(() => {
          i.pause();
        }, 10),
        K.set(t, { filter: "saturate(0%) brightness(60%)" }));
      const s = K.timeline({ paused: !0, onComplete: () => i.play() });
      s.to(t, {
        filter: "saturate(100%) brightness(100%)",
        ease: "power2.inOut",
      });
      const o = K.timeline({ paused: !0, onComplete: () => i.pause() });
      (o.to(t, {
        filter: "saturate(0%) brightness(60%)",
        ease: "power2.inOut",
      }),
        r.addEventListener("change", () => {
          r.checked ? (o.pause(), s.restart()) : (s.pause(), o.restart());
        }));
    },
    Wf = (n = document) => {
      (Yd(n),
        c_(n),
        h_(n),
        D_(n),
        y_(n),
        E_(n),
        b_(n),
        console.log("components init"));
    },
    C_ = (n = document) => {
      (Xd(n), d_(n), f_(n), m_(n), w_(n), console.log("components cleanup"));
    };
  var Mi = qd();
  const x_ = async () => {
    (jl.init(), Wf(document), console.log("globalInit"));
  };
  function S_(n, e) {
    for (var t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(
          n,
          typeof (i = (function (s, o) {
            if (typeof s != "object" || s === null) return s;
            var a = s[Symbol.toPrimitive];
            if (a !== void 0) {
              var u = a.call(s, "string");
              if (typeof u != "object") return u;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(s);
          })(r.key)) == "symbol"
            ? i
            : String(i),
          r,
        ));
    }
    var i;
  }
  function Tu(n, e, t) {
    return (
      e && S_(n.prototype, e),
      Object.defineProperty(n, "prototype", { writable: !1 }),
      n
    );
  }
  function pr() {
    return (
      (pr = Object.assign
        ? Object.assign.bind()
        : function (n) {
            for (var e = 1; e < arguments.length; e++) {
              var t = arguments[e];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            }
            return n;
          }),
      pr.apply(this, arguments)
    );
  }
  function Bo(n, e) {
    ((n.prototype = Object.create(e.prototype)),
      (n.prototype.constructor = n),
      Ss(n, e));
  }
  function Au(n) {
    return (
      (Au = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      Au(n)
    );
  }
  function Ss(n, e) {
    return (
      (Ss = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, r) {
            return ((t.__proto__ = r), t);
          }),
      Ss(n, e)
    );
  }
  function T_() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
  function Fu(n, e, t) {
    return (
      (Fu = T_()
        ? Reflect.construct.bind()
        : function (r, i, s) {
            var o = [null];
            o.push.apply(o, i);
            var a = new (Function.bind.apply(r, o))();
            return (s && Ss(a, s.prototype), a);
          }),
      Fu.apply(null, arguments)
    );
  }
  function Pu(n) {
    var e = typeof Map == "function" ? new Map() : void 0;
    return (
      (Pu = function (t) {
        if (
          t === null ||
          Function.toString.call(t).indexOf("[native code]") === -1
        )
          return t;
        if (typeof t != "function")
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        if (e !== void 0) {
          if (e.has(t)) return e.get(t);
          e.set(t, r);
        }
        function r() {
          return Fu(t, arguments, Au(this).constructor);
        }
        return (
          (r.prototype = Object.create(t.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          Ss(r, t)
        );
      }),
      Pu(n)
    );
  }
  function A_(n) {
    if (n === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return n;
  }
  var ri,
    F_ = function () {
      ((this.before = void 0),
        (this.beforeLeave = void 0),
        (this.leave = void 0),
        (this.afterLeave = void 0),
        (this.beforeEnter = void 0),
        (this.enter = void 0),
        (this.afterEnter = void 0),
        (this.after = void 0));
    };
  (function (n) {
    ((n[(n.off = 0)] = "off"),
      (n[(n.error = 1)] = "error"),
      (n[(n.warning = 2)] = "warning"),
      (n[(n.info = 3)] = "info"),
      (n[(n.debug = 4)] = "debug"));
  })(ri || (ri = {}));
  var qf = ri.off,
    Ii = (function () {
      function n(t) {
        ((this.t = void 0), (this.t = t));
      }
      ((n.getLevel = function () {
        return qf;
      }),
        (n.setLevel = function (t) {
          return (qf = ri[t]);
        }));
      var e = n.prototype;
      return (
        (e.error = function () {
          this.i(console.error, ri.error, [].slice.call(arguments));
        }),
        (e.warn = function () {
          this.i(console.warn, ri.warning, [].slice.call(arguments));
        }),
        (e.info = function () {
          this.i(console.info, ri.info, [].slice.call(arguments));
        }),
        (e.debug = function () {
          this.i(console.log, ri.debug, [].slice.call(arguments));
        }),
        (e.i = function (t, r, i) {
          r <= n.getLevel() &&
            t.apply(console, ["[" + this.t + "] "].concat(i));
        }),
        n
      );
    })();
  function wn(n) {
    return n.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  }
  function Yf(n) {
    return n && n.sensitive ? "" : "i";
  }
  var _r = {
      container: "container",
      history: "history",
      namespace: "namespace",
      prefix: "data-barba",
      prevent: "prevent",
      wrapper: "wrapper",
    },
    Ni = new ((function () {
      function n() {
        ((this.o = _r),
          (this.u = void 0),
          (this.h = { after: null, before: null, parent: null }));
      }
      var e = n.prototype;
      return (
        (e.toString = function (t) {
          return t.outerHTML;
        }),
        (e.toDocument = function (t) {
          return (
            this.u || (this.u = new DOMParser()),
            this.u.parseFromString(t, "text/html")
          );
        }),
        (e.toElement = function (t) {
          var r = document.createElement("div");
          return ((r.innerHTML = t), r);
        }),
        (e.getHtml = function (t) {
          return (
            t === void 0 && (t = document),
            this.toString(t.documentElement)
          );
        }),
        (e.getWrapper = function (t) {
          return (
            t === void 0 && (t = document),
            t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
          );
        }),
        (e.getContainer = function (t) {
          return (
            t === void 0 && (t = document),
            t.querySelector(
              "[" + this.o.prefix + '="' + this.o.container + '"]',
            )
          );
        }),
        (e.removeContainer = function (t) {
          document.body.contains(t) && (this.v(t), t.parentNode.removeChild(t));
        }),
        (e.addContainer = function (t, r) {
          var i = this.getContainer() || this.h.before;
          i
            ? this.l(t, i)
            : this.h.after
              ? this.h.after.parentNode.insertBefore(t, this.h.after)
              : this.h.parent
                ? this.h.parent.appendChild(t)
                : r.appendChild(t);
        }),
        (e.getSibling = function () {
          return this.h;
        }),
        (e.getNamespace = function (t) {
          t === void 0 && (t = document);
          var r = t.querySelector(
            "[" + this.o.prefix + "-" + this.o.namespace + "]",
          );
          return r
            ? r.getAttribute(this.o.prefix + "-" + this.o.namespace)
            : null;
        }),
        (e.getHref = function (t) {
          if (t.tagName && t.tagName.toLowerCase() === "a") {
            if (typeof t.href == "string") return t.href;
            var r = t.getAttribute("href") || t.getAttribute("xlink:href");
            if (r) return this.resolveUrl(r.baseVal || r);
          }
          return null;
        }),
        (e.resolveUrl = function () {
          var t = [].slice.call(arguments).length;
          if (t === 0)
            throw new Error(
              "resolveUrl requires at least one argument; got none.",
            );
          var r = document.createElement("base");
          if (((r.href = arguments[0]), t === 1)) return r.href;
          var i = document.getElementsByTagName("head")[0];
          i.insertBefore(r, i.firstChild);
          for (var s, o = document.createElement("a"), a = 1; a < t; a++)
            ((o.href = arguments[a]), (r.href = s = o.href));
          return (i.removeChild(r), s);
        }),
        (e.l = function (t, r) {
          r.parentNode.insertBefore(t, r.nextSibling);
        }),
        (e.v = function (t) {
          return (
            (this.h = {
              after: t.nextElementSibling,
              before: t.previousElementSibling,
              parent: t.parentElement,
            }),
            this.h
          );
        }),
        n
      );
    })())(),
    P_ = (function () {
      function n() {
        ((this.p = void 0), (this.m = []), (this.P = -1));
      }
      var e = n.prototype;
      return (
        (e.init = function (t, r) {
          this.p = "barba";
          var i = {
            data: {},
            ns: r,
            scroll: { x: window.scrollX, y: window.scrollY },
            url: t,
          };
          ((this.P = 0), this.m.push(i));
          var s = { from: this.p, index: this.P, states: [].concat(this.m) };
          window.history && window.history.replaceState(s, "", t);
        }),
        (e.change = function (t, r, i) {
          if (i && i.state) {
            var s = i.state,
              o = s.index;
            ((r = this.g(this.P - o)), this.replace(s.states), (this.P = o));
          } else this.add(t, r);
          return r;
        }),
        (e.add = function (t, r, i, s) {
          var o = i ?? this.R(r),
            a = {
              data: s ?? {},
              ns: "tmp",
              scroll: { x: window.scrollX, y: window.scrollY },
              url: t,
            };
          switch (o) {
            case "push":
              ((this.P = this.size), this.m.push(a));
              break;
            case "replace":
              this.set(this.P, a);
          }
          var u = { from: this.p, index: this.P, states: [].concat(this.m) };
          switch (o) {
            case "push":
              window.history && window.history.pushState(u, "", t);
              break;
            case "replace":
              window.history && window.history.replaceState(u, "", t);
          }
        }),
        (e.store = function (t, r) {
          var i = r || this.P,
            s = this.get(i);
          ((s.data = pr({}, s.data, t)), this.set(i, s));
          var o = { from: this.p, index: this.P, states: [].concat(this.m) };
          window.history.replaceState(o, "");
        }),
        (e.update = function (t, r) {
          var i = r || this.P,
            s = pr({}, this.get(i), t);
          this.set(i, s);
        }),
        (e.remove = function (t) {
          (t ? this.m.splice(t, 1) : this.m.pop(), this.P--);
        }),
        (e.clear = function () {
          ((this.m = []), (this.P = -1));
        }),
        (e.replace = function (t) {
          this.m = t;
        }),
        (e.get = function (t) {
          return this.m[t];
        }),
        (e.set = function (t, r) {
          return (this.m[t] = r);
        }),
        (e.R = function (t) {
          var r = "push",
            i = t,
            s = _r.prefix + "-" + _r.history;
          return (
            i.hasAttribute && i.hasAttribute(s) && (r = i.getAttribute(s)),
            r
          );
        }),
        (e.g = function (t) {
          return Math.abs(t) > 1
            ? t > 0
              ? "forward"
              : "back"
            : t === 0
              ? "popstate"
              : t > 0
                ? "back"
                : "forward";
        }),
        Tu(n, [
          {
            key: "current",
            get: function () {
              return this.m[this.P];
            },
          },
          {
            key: "previous",
            get: function () {
              return this.P < 1 ? null : this.m[this.P - 1];
            },
          },
          {
            key: "size",
            get: function () {
              return this.m.length;
            },
          },
        ]),
        n
      );
    })(),
    Xf = new P_(),
    zo = function (n, e) {
      try {
        var t = (function () {
          if (!e.next.html)
            return Promise.resolve(n).then(function (r) {
              var i = e.next;
              if (r) {
                var s = Ni.toElement(r.html);
                ((i.namespace = Ni.getNamespace(s)),
                  (i.container = Ni.getContainer(s)),
                  (i.url = r.url),
                  (i.html = r.html),
                  Xf.update({ ns: i.namespace }));
                var o = Ni.toDocument(r.html);
                document.title = o.title;
              }
            });
        })();
        return Promise.resolve(t && t.then ? t.then(function () {}) : void 0);
      } catch (r) {
        return Promise.reject(r);
      }
    },
    Uf = function n(e, t, r) {
      return e instanceof RegExp
        ? (function (i, s) {
            if (!s) return i;
            for (
              var o = /\((?:\?<(.*?)>)?(?!\?)/g, a = 0, u = o.exec(i.source);
              u;
            )
              (s.push({
                name: u[1] || a++,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: "",
              }),
                (u = o.exec(i.source)));
            return i;
          })(e, t)
        : Array.isArray(e)
          ? (function (i, s, o) {
              var a = i.map(function (u) {
                return n(u, s, o).source;
              });
              return new RegExp("(?:".concat(a.join("|"), ")"), Yf(o));
            })(e, t, r)
          : (function (i, s, o) {
              return (function (a, u, l) {
                l === void 0 && (l = {});
                for (
                  var c = l.strict,
                    p = c !== void 0 && c,
                    h = l.start,
                    d = h === void 0 || h,
                    _ = l.end,
                    f = _ === void 0 || _,
                    g = l.encode,
                    D =
                      g === void 0
                        ? function (V) {
                            return V;
                          }
                        : g,
                    m = l.delimiter,
                    E = m === void 0 ? "/#?" : m,
                    w = l.endsWith,
                    b = "[".concat(wn(w === void 0 ? "" : w), "]|$"),
                    S = "[".concat(wn(E), "]"),
                    y = d ? "^" : "",
                    A = 0,
                    T = a;
                  A < T.length;
                  A++
                ) {
                  var x = T[A];
                  if (typeof x == "string") y += wn(D(x));
                  else {
                    var P = wn(D(x.prefix)),
                      C = wn(D(x.suffix));
                    if (x.pattern)
                      if ((u && u.push(x), P || C))
                        if (x.modifier === "+" || x.modifier === "*") {
                          var O = x.modifier === "*" ? "?" : "";
                          y += "(?:"
                            .concat(P, "((?:")
                            .concat(x.pattern, ")(?:")
                            .concat(C)
                            .concat(P, "(?:")
                            .concat(x.pattern, "))*)")
                            .concat(C, ")")
                            .concat(O);
                        } else
                          y += "(?:"
                            .concat(P, "(")
                            .concat(x.pattern, ")")
                            .concat(C, ")")
                            .concat(x.modifier);
                      else
                        y +=
                          x.modifier === "+" || x.modifier === "*"
                            ? "((?:"
                                .concat(x.pattern, ")")
                                .concat(x.modifier, ")")
                            : "(".concat(x.pattern, ")").concat(x.modifier);
                    else y += "(?:".concat(P).concat(C, ")").concat(x.modifier);
                  }
                }
                if (f)
                  (p || (y += "".concat(S, "?")),
                    (y += l.endsWith ? "(?=".concat(b, ")") : "$"));
                else {
                  var k = a[a.length - 1],
                    R =
                      typeof k == "string"
                        ? S.indexOf(k[k.length - 1]) > -1
                        : k === void 0;
                  (p || (y += "(?:".concat(S, "(?=").concat(b, "))?")),
                    R || (y += "(?=".concat(S, "|").concat(b, ")")));
                }
                return new RegExp(y, Yf(l));
              })(
                (function (a, u) {
                  u === void 0 && (u = {});
                  for (
                    var l = (function (C) {
                        for (var O = [], k = 0; k < C.length; ) {
                          var R = C[k];
                          if (R !== "*" && R !== "+" && R !== "?")
                            if (R !== "\\")
                              if (R !== "{")
                                if (R !== "}")
                                  if (R !== ":")
                                    if (R !== "(")
                                      O.push({
                                        type: "CHAR",
                                        index: k,
                                        value: C[k++],
                                      });
                                    else {
                                      var V = 1,
                                        z = "";
                                      if (C[(L = k + 1)] === "?")
                                        throw new TypeError(
                                          'Pattern cannot start with "?" at '.concat(
                                            L,
                                          ),
                                        );
                                      for (; L < C.length; )
                                        if (C[L] !== "\\") {
                                          if (C[L] === ")") {
                                            if (--V == 0) {
                                              L++;
                                              break;
                                            }
                                          } else if (
                                            C[L] === "(" &&
                                            (V++, C[L + 1] !== "?")
                                          )
                                            throw new TypeError(
                                              "Capturing groups are not allowed at ".concat(
                                                L,
                                              ),
                                            );
                                          z += C[L++];
                                        } else z += C[L++] + C[L++];
                                      if (V)
                                        throw new TypeError(
                                          "Unbalanced pattern at ".concat(k),
                                        );
                                      if (!z)
                                        throw new TypeError(
                                          "Missing pattern at ".concat(k),
                                        );
                                      (O.push({
                                        type: "PATTERN",
                                        index: k,
                                        value: z,
                                      }),
                                        (k = L));
                                    }
                                  else {
                                    for (
                                      var I = "", L = k + 1;
                                      L < C.length;
                                    ) {
                                      var v = C.charCodeAt(L);
                                      if (
                                        !(
                                          (v >= 48 && v <= 57) ||
                                          (v >= 65 && v <= 90) ||
                                          (v >= 97 && v <= 122) ||
                                          v === 95
                                        )
                                      )
                                        break;
                                      I += C[L++];
                                    }
                                    if (!I)
                                      throw new TypeError(
                                        "Missing parameter name at ".concat(k),
                                      );
                                    (O.push({
                                      type: "NAME",
                                      index: k,
                                      value: I,
                                    }),
                                      (k = L));
                                  }
                                else
                                  O.push({
                                    type: "CLOSE",
                                    index: k,
                                    value: C[k++],
                                  });
                              else
                                O.push({
                                  type: "OPEN",
                                  index: k,
                                  value: C[k++],
                                });
                            else
                              O.push({
                                type: "ESCAPED_CHAR",
                                index: k++,
                                value: C[k++],
                              });
                          else
                            O.push({
                              type: "MODIFIER",
                              index: k,
                              value: C[k++],
                            });
                        }
                        return (
                          O.push({ type: "END", index: k, value: "" }),
                          O
                        );
                      })(a),
                      c = u.prefixes,
                      p = c === void 0 ? "./" : c,
                      h = "[^".concat(wn(u.delimiter || "/#?"), "]+?"),
                      d = [],
                      _ = 0,
                      f = 0,
                      g = "",
                      D = function (C) {
                        if (f < l.length && l[f].type === C)
                          return l[f++].value;
                      },
                      m = function (C) {
                        var O = D(C);
                        if (O !== void 0) return O;
                        var k = l[f],
                          R = k.index;
                        throw new TypeError(
                          "Unexpected "
                            .concat(k.type, " at ")
                            .concat(R, ", expected ")
                            .concat(C),
                        );
                      },
                      E = function () {
                        for (
                          var C, O = "";
                          (C = D("CHAR") || D("ESCAPED_CHAR"));
                        )
                          O += C;
                        return O;
                      };
                    f < l.length;
                  ) {
                    var w = D("CHAR"),
                      b = D("NAME"),
                      S = D("PATTERN");
                    if (b || S)
                      (p.indexOf((A = w || "")) === -1 && ((g += A), (A = "")),
                        g && (d.push(g), (g = "")),
                        d.push({
                          name: b || _++,
                          prefix: A,
                          suffix: "",
                          pattern: S || h,
                          modifier: D("MODIFIER") || "",
                        }));
                    else {
                      var y = w || D("ESCAPED_CHAR");
                      if (y) g += y;
                      else if ((g && (d.push(g), (g = "")), D("OPEN"))) {
                        var A = E(),
                          T = D("NAME") || "",
                          x = D("PATTERN") || "",
                          P = E();
                        (m("CLOSE"),
                          d.push({
                            name: T || (x ? _++ : ""),
                            pattern: T && !x ? h : x,
                            prefix: A,
                            suffix: P,
                            modifier: D("MODIFIER") || "",
                          }));
                      } else m("END");
                    }
                  }
                  return d;
                })(i, o),
                s,
                o,
              );
            })(e, t, r);
    },
    O_ = {
      __proto__: null,
      update: zo,
      nextTick: function () {
        return new Promise(function (n) {
          window.requestAnimationFrame(n);
        });
      },
      pathToRegexp: Uf,
    },
    Gf = function () {
      return window.location.origin;
    },
    Ts = function (n) {
      return (n === void 0 && (n = window.location.href), ii(n).port);
    },
    ii = function (n) {
      var e,
        t = n.match(/:\d+/);
      if (t === null)
        (/^http/.test(n) && (e = 80), /^https/.test(n) && (e = 443));
      else {
        var r = t[0].substring(1);
        e = parseInt(r, 10);
      }
      var i,
        s = n.replace(Gf(), ""),
        o = {},
        a = s.indexOf("#");
      a >= 0 && ((i = s.slice(a + 1)), (s = s.slice(0, a)));
      var u = s.indexOf("?");
      return (
        u >= 0 && ((o = $f(s.slice(u + 1))), (s = s.slice(0, u))),
        { hash: i, path: s, port: e, query: o }
      );
    },
    $f = function (n) {
      return n.split("&").reduce(function (e, t) {
        var r = t.split("=");
        return ((e[r[0]] = r[1]), e);
      }, {});
    },
    Ou = function (n) {
      return (
        n === void 0 && (n = window.location.href),
        n.replace(/(\/#.*|\/|#.*)$/, "")
      );
    },
    k_ = {
      __proto__: null,
      getHref: function () {
        return window.location.href;
      },
      getAbsoluteHref: function (n, e) {
        return (e === void 0 && (e = document.baseURI), new URL(n, e).href);
      },
      getOrigin: Gf,
      getPort: Ts,
      getPath: function (n) {
        return (n === void 0 && (n = window.location.href), ii(n).path);
      },
      getQuery: function (n, e) {
        return (
          e === void 0 && (e = !1),
          e ? JSON.stringify(ii(n).query) : ii(n).query
        );
      },
      getHash: function (n) {
        return ii(n).hash;
      },
      parse: ii,
      parseQuery: $f,
      clean: Ou,
    };
  function R_(n, e, t, r, i) {
    return (
      e === void 0 && (e = 2e3),
      new Promise(function (s, o) {
        var a = new XMLHttpRequest();
        ((a.onreadystatechange = function () {
          if (a.readyState === XMLHttpRequest.DONE) {
            if (a.status === 200) {
              var u =
                a.responseURL !== "" && a.responseURL !== n ? a.responseURL : n;
              (s({ html: a.responseText, url: pr({ href: u }, ii(u)) }),
                r.update(n, { status: "fulfilled", target: u }));
            } else if (a.status) {
              var l = { status: a.status, statusText: a.statusText };
              (t(n, l), o(l), r.update(n, { status: "rejected" }));
            }
          }
        }),
          (a.ontimeout = function () {
            var u = new Error("Timeout error [" + e + "]");
            (t(n, u), o(u), r.update(n, { status: "rejected" }));
          }),
          (a.onerror = function () {
            var u = new Error("Fetch error");
            (t(n, u), o(u), r.update(n, { status: "rejected" }));
          }),
          a.open("GET", n),
          (a.timeout = e),
          a.setRequestHeader(
            "Accept",
            "text/html,application/xhtml+xml,application/xml",
          ),
          a.setRequestHeader("x-barba", "yes"),
          i.all().forEach(function (u, l) {
            a.setRequestHeader(l, u);
          }),
          a.send());
      })
    );
  }
  function L_(n) {
    return (
      !!n &&
      (typeof n == "object" || typeof n == "function") &&
      typeof n.then == "function"
    );
  }
  function bn(n, e) {
    return (
      e === void 0 && (e = {}),
      function () {
        var t = arguments,
          r = !1,
          i = new Promise(function (s, o) {
            e.async = function () {
              return (
                (r = !0),
                function (u, l) {
                  u ? o(u) : s(l);
                }
              );
            };
            var a = n.apply(e, [].slice.call(t));
            r || (L_(a) ? a.then(s, o) : s(a));
          });
        return i;
      }
    );
  }
  var ni = new ((function (n) {
      function e() {
        var r;
        return (
          ((r = n.call(this) || this).logger = new Ii("@barba/core")),
          (r.all = [
            "ready",
            "page",
            "reset",
            "currentAdded",
            "currentRemoved",
            "nextAdded",
            "nextRemoved",
            "beforeOnce",
            "once",
            "afterOnce",
            "before",
            "beforeLeave",
            "leave",
            "afterLeave",
            "beforeEnter",
            "enter",
            "afterEnter",
            "after",
          ]),
          (r.registered = new Map()),
          r.init(),
          r
        );
      }
      Bo(e, n);
      var t = e.prototype;
      return (
        (t.init = function () {
          var r = this;
          (this.registered.clear(),
            this.all.forEach(function (i) {
              r[i] ||
                (r[i] = function (s, o) {
                  (r.registered.has(i) || r.registered.set(i, new Set()),
                    r.registered.get(i).add({ ctx: o || {}, fn: s }));
                });
            }));
        }),
        (t.do = function (r) {
          var i = arguments,
            s = this;
          if (this.registered.has(r)) {
            var o = Promise.resolve();
            return (
              this.registered.get(r).forEach(function (a) {
                o = o.then(function () {
                  return bn(a.fn, a.ctx).apply(void 0, [].slice.call(i, 1));
                });
              }),
              o.catch(function (a) {
                (s.logger.debug("Hook error [" + r + "]"), s.logger.error(a));
              })
            );
          }
          return Promise.resolve();
        }),
        (t.clear = function () {
          var r = this;
          (this.all.forEach(function (i) {
            delete r[i];
          }),
            this.init());
        }),
        (t.help = function () {
          this.logger.info("Available hooks: " + this.all.join(","));
          var r = [];
          (this.registered.forEach(function (i, s) {
            return r.push(s);
          }),
            this.logger.info("Registered hooks: " + r.join(",")));
        }),
        e
      );
    })(F_))(),
    jf = (function () {
      function n(e) {
        if (((this.k = void 0), (this.O = []), typeof e == "boolean"))
          this.k = e;
        else {
          var t = Array.isArray(e) ? e : [e];
          this.O = t.map(function (r) {
            return Uf(r);
          });
        }
      }
      return (
        (n.prototype.checkHref = function (e) {
          if (typeof this.k == "boolean") return this.k;
          var t = ii(e).path;
          return this.O.some(function (r) {
            return r.exec(t) !== null;
          });
        }),
        n
      );
    })(),
    M_ = (function (n) {
      function e(r) {
        var i;
        return (((i = n.call(this, r) || this).T = new Map()), i);
      }
      Bo(e, n);
      var t = e.prototype;
      return (
        (t.set = function (r, i, s, o, a) {
          return (
            this.T.set(r, { action: s, request: i, status: o, target: a ?? r }),
            { action: s, request: i, status: o, target: a }
          );
        }),
        (t.get = function (r) {
          return this.T.get(r);
        }),
        (t.getRequest = function (r) {
          return this.T.get(r).request;
        }),
        (t.getAction = function (r) {
          return this.T.get(r).action;
        }),
        (t.getStatus = function (r) {
          return this.T.get(r).status;
        }),
        (t.getTarget = function (r) {
          return this.T.get(r).target;
        }),
        (t.has = function (r) {
          return !this.checkHref(r) && this.T.has(r);
        }),
        (t.delete = function (r) {
          return this.T.delete(r);
        }),
        (t.update = function (r, i) {
          var s = pr({}, this.T.get(r), i);
          return (this.T.set(r, s), s);
        }),
        e
      );
    })(jf),
    I_ = (function () {
      function n() {
        this.A = new Map();
      }
      var e = n.prototype;
      return (
        (e.set = function (t, r) {
          return (this.A.set(t, r), { name: r });
        }),
        (e.get = function (t) {
          return this.A.get(t);
        }),
        (e.all = function () {
          return this.A;
        }),
        (e.has = function (t) {
          return this.A.has(t);
        }),
        (e.delete = function (t) {
          return this.A.delete(t);
        }),
        (e.clear = function () {
          return this.A.clear();
        }),
        n
      );
    })(),
    N_ = function () {
      return !window.history.pushState;
    },
    B_ = function (n) {
      return !n.el || !n.href;
    },
    z_ = function (n) {
      var e = n.event;
      return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
    },
    H_ = function (n) {
      var e = n.el;
      return e.hasAttribute("target") && e.target === "_blank";
    },
    V_ = function (n) {
      var e = n.el;
      return (
        (e.protocol !== void 0 && window.location.protocol !== e.protocol) ||
        (e.hostname !== void 0 && window.location.hostname !== e.hostname)
      );
    },
    W_ = function (n) {
      var e = n.el;
      return e.port !== void 0 && Ts() !== Ts(e.href);
    },
    q_ = function (n) {
      var e = n.el;
      return e.getAttribute && typeof e.getAttribute("download") == "string";
    },
    Y_ = function (n) {
      return n.el.hasAttribute(_r.prefix + "-" + _r.prevent);
    },
    X_ = function (n) {
      return !!n.el.closest("[" + _r.prefix + "-" + _r.prevent + '="all"]');
    },
    U_ = function (n) {
      var e = n.href;
      return Ou(e) === Ou() && Ts(e) === Ts();
    },
    G_ = (function (n) {
      function e(r) {
        var i;
        return (
          ((i = n.call(this, r) || this).suite = []),
          (i.tests = new Map()),
          i.init(),
          i
        );
      }
      Bo(e, n);
      var t = e.prototype;
      return (
        (t.init = function () {
          (this.add("pushState", N_),
            this.add("exists", B_),
            this.add("newTab", z_),
            this.add("blank", H_),
            this.add("corsDomain", V_),
            this.add("corsPort", W_),
            this.add("download", q_),
            this.add("preventSelf", Y_),
            this.add("preventAll", X_),
            this.add("sameUrl", U_, !1));
        }),
        (t.add = function (r, i, s) {
          (s === void 0 && (s = !0),
            this.tests.set(r, i),
            s && this.suite.push(r));
        }),
        (t.run = function (r, i, s, o) {
          return this.tests.get(r)({ el: i, event: s, href: o });
        }),
        (t.checkLink = function (r, i, s) {
          var o = this;
          return this.suite.some(function (a) {
            return o.run(a, r, i, s);
          });
        }),
        e
      );
    })(jf),
    ku = (function (n) {
      function e(t, r) {
        var i;
        return (
          r === void 0 && (r = "Barba error"),
          ((i =
            n.call.apply(n, [this].concat([].slice.call(arguments, 2))) ||
            this).error = void 0),
          (i.label = void 0),
          (i.error = t),
          (i.label = r),
          Error.captureStackTrace && Error.captureStackTrace(A_(i), e),
          (i.name = "BarbaError"),
          i
        );
      }
      return (Bo(e, n), e);
    })(Pu(Error)),
    $_ = (function () {
      function n(t) {
        (t === void 0 && (t = []),
          (this.logger = new Ii("@barba/core")),
          (this.all = []),
          (this.page = []),
          (this.once = []),
          (this.j = [
            { name: "namespace", type: "strings" },
            { name: "custom", type: "function" },
          ]),
          t && (this.all = this.all.concat(t)),
          this.update());
      }
      var e = n.prototype;
      return (
        (e.add = function (t, r) {
          (t === "rule"
            ? this.j.splice(r.position || 0, 0, r.value)
            : this.all.push(r),
            this.update());
        }),
        (e.resolve = function (t, r) {
          var i = this;
          r === void 0 && (r = {});
          var s = r.once ? this.once : this.page;
          s = s.filter(
            r.self
              ? function (h) {
                  return h.name && h.name === "self";
                }
              : function (h) {
                  return !h.name || h.name !== "self";
                },
          );
          var o = new Map(),
            a = s.find(function (h) {
              var d = !0,
                _ = {};
              return r.self && h.name === "self"
                ? (o.set(h, _), !0)
                : (i.j.reverse().forEach(function (f) {
                    d &&
                      ((d = i.M(h, f, t, _)),
                      h.from &&
                        h.to &&
                        (d = i.M(h, f, t, _, "from") && i.M(h, f, t, _, "to")),
                      h.from && !h.to && (d = i.M(h, f, t, _, "from")),
                      !h.from && h.to && (d = i.M(h, f, t, _, "to")));
                  }),
                  o.set(h, _),
                  d);
            }),
            u = o.get(a),
            l = [];
          if ((l.push(r.once ? "once" : "page"), r.self && l.push("self"), u)) {
            var c,
              p = [a];
            (Object.keys(u).length > 0 && p.push(u),
              (c = this.logger).info.apply(
                c,
                ["Transition found [" + l.join(",") + "]"].concat(p),
              ));
          } else this.logger.info("No transition found [" + l.join(",") + "]");
          return a;
        }),
        (e.update = function () {
          var t = this;
          ((this.all = this.all
            .map(function (r) {
              return t.N(r);
            })
            .sort(function (r, i) {
              return r.priority - i.priority;
            })
            .reverse()
            .map(function (r) {
              return (delete r.priority, r);
            })),
            (this.page = this.all.filter(function (r) {
              return r.leave !== void 0 || r.enter !== void 0;
            })),
            (this.once = this.all.filter(function (r) {
              return r.once !== void 0;
            })));
        }),
        (e.M = function (t, r, i, s, o) {
          var a = !0,
            u = !1,
            l = t,
            c = r.name,
            p = c,
            h = c,
            d = c,
            _ = o ? l[o] : l,
            f = o === "to" ? i.next : i.current;
          if (o ? _ && _[c] : _[c]) {
            switch (r.type) {
              case "strings":
              default:
                var g = Array.isArray(_[p]) ? _[p] : [_[p]];
                (f[p] && g.indexOf(f[p]) !== -1 && (u = !0),
                  g.indexOf(f[p]) === -1 && (a = !1));
                break;
              case "object":
                var D = Array.isArray(_[h]) ? _[h] : [_[h]];
                f[h]
                  ? (f[h].name && D.indexOf(f[h].name) !== -1 && (u = !0),
                    D.indexOf(f[h].name) === -1 && (a = !1))
                  : (a = !1);
                break;
              case "function":
                _[d](i) ? (u = !0) : (a = !1);
            }
            u &&
              (o ? ((s[o] = s[o] || {}), (s[o][c] = l[o][c])) : (s[c] = l[c]));
          }
          return a;
        }),
        (e.S = function (t, r, i) {
          var s = 0;
          return (
            (t[r] || (t.from && t.from[r]) || (t.to && t.to[r])) &&
              ((s += Math.pow(10, i)),
              t.from && t.from[r] && (s += 1),
              t.to && t.to[r] && (s += 2)),
            s
          );
        }),
        (e.N = function (t) {
          var r = this;
          t.priority = 0;
          var i = 0;
          return (
            this.j.forEach(function (s, o) {
              i += r.S(t, s.name, o + 1);
            }),
            (t.priority = i),
            t
          );
        }),
        n
      );
    })();
  function As(n, e) {
    try {
      var t = n();
    } catch (r) {
      return e(r);
    }
    return t && t.then ? t.then(void 0, e) : t;
  }
  var j_ = (function () {
      function n(t) {
        (t === void 0 && (t = []),
          (this.logger = new Ii("@barba/core")),
          (this.store = void 0),
          (this.C = !1),
          (this.store = new $_(t)));
      }
      var e = n.prototype;
      return (
        (e.get = function (t, r) {
          return this.store.resolve(t, r);
        }),
        (e.doOnce = function (t) {
          var r = t.data,
            i = t.transition;
          try {
            var s = function () {
                o.C = !1;
              },
              o = this,
              a = i || {};
            o.C = !0;
            var u = As(
              function () {
                return Promise.resolve(o.L("beforeOnce", r, a)).then(
                  function () {
                    return Promise.resolve(o.once(r, a)).then(function () {
                      return Promise.resolve(o.L("afterOnce", r, a)).then(
                        function () {},
                      );
                    });
                  },
                );
              },
              function (l) {
                ((o.C = !1),
                  o.logger.debug("Transition error [before/after/once]"),
                  o.logger.error(l));
              },
            );
            return Promise.resolve(u && u.then ? u.then(s) : s());
          } catch (l) {
            return Promise.reject(l);
          }
        }),
        (e.doPage = function (t) {
          var r = t.data,
            i = t.transition,
            s = t.page,
            o = t.wrapper;
          try {
            var a = function (h) {
                u.C = !1;
              },
              u = this,
              l = i || {},
              c = l.sync === !0 || !1;
            u.C = !0;
            var p = As(
              function () {
                function h() {
                  return Promise.resolve(u.L("before", r, l)).then(function () {
                    function _(g) {
                      return Promise.resolve(u.remove(r)).then(function () {
                        return Promise.resolve(u.L("after", r, l)).then(
                          function () {},
                        );
                      });
                    }
                    var f = (function () {
                      if (c)
                        return As(
                          function () {
                            return Promise.resolve(u.add(r, o)).then(
                              function () {
                                return Promise.resolve(
                                  u.L("beforeLeave", r, l),
                                ).then(function () {
                                  return Promise.resolve(
                                    u.L("beforeEnter", r, l),
                                  ).then(function () {
                                    return Promise.resolve(
                                      Promise.all([
                                        u.leave(r, l),
                                        u.enter(r, l),
                                      ]),
                                    ).then(function () {
                                      return Promise.resolve(
                                        u.L("afterLeave", r, l),
                                      ).then(function () {
                                        return Promise.resolve(
                                          u.L("afterEnter", r, l),
                                        ).then(function () {});
                                      });
                                    });
                                  });
                                });
                              },
                            );
                          },
                          function (E) {
                            if (u.H(E))
                              throw new ku(E, "Transition error [sync]");
                          },
                        );
                      var g = function (E) {
                          return As(
                            function () {
                              var w = (function () {
                                if (D !== !1)
                                  return Promise.resolve(u.add(r, o)).then(
                                    function () {
                                      return Promise.resolve(
                                        u.L("beforeEnter", r, l),
                                      ).then(function () {
                                        return Promise.resolve(
                                          u.enter(r, l, D),
                                        ).then(function () {
                                          return Promise.resolve(
                                            u.L("afterEnter", r, l),
                                          ).then(function () {});
                                        });
                                      });
                                    },
                                  );
                              })();
                              if (w && w.then) return w.then(function () {});
                            },
                            function (w) {
                              if (u.H(w))
                                throw new ku(
                                  w,
                                  "Transition error [before/after/enter]",
                                );
                            },
                          );
                        },
                        D = !1,
                        m = As(
                          function () {
                            return Promise.resolve(
                              u.L("beforeLeave", r, l),
                            ).then(function () {
                              return Promise.resolve(
                                Promise.all([u.leave(r, l), zo(s, r)]).then(
                                  function (E) {
                                    return E[0];
                                  },
                                ),
                              ).then(function (E) {
                                return (
                                  (D = E),
                                  Promise.resolve(u.L("afterLeave", r, l)).then(
                                    function () {},
                                  )
                                );
                              });
                            });
                          },
                          function (E) {
                            if (u.H(E))
                              throw new ku(
                                E,
                                "Transition error [before/after/leave]",
                              );
                          },
                        );
                      return m && m.then ? m.then(g) : g();
                    })();
                    return f && f.then ? f.then(_) : _();
                  });
                }
                var d = (function () {
                  if (c) return Promise.resolve(zo(s, r)).then(function () {});
                })();
                return d && d.then ? d.then(h) : h();
              },
              function (h) {
                throw (
                  (u.C = !1),
                  h.name && h.name === "BarbaError"
                    ? (u.logger.debug(h.label), u.logger.error(h.error), h)
                    : (u.logger.debug("Transition error [page]"),
                      u.logger.error(h),
                      h)
                );
              },
            );
            return Promise.resolve(p && p.then ? p.then(a) : a());
          } catch (h) {
            return Promise.reject(h);
          }
        }),
        (e.once = function (t, r) {
          try {
            return Promise.resolve(ni.do("once", t, r)).then(function () {
              return r.once ? bn(r.once, r)(t) : Promise.resolve();
            });
          } catch (i) {
            return Promise.reject(i);
          }
        }),
        (e.leave = function (t, r) {
          try {
            return Promise.resolve(ni.do("leave", t, r)).then(function () {
              return r.leave ? bn(r.leave, r)(t) : Promise.resolve();
            });
          } catch (i) {
            return Promise.reject(i);
          }
        }),
        (e.enter = function (t, r, i) {
          try {
            return Promise.resolve(ni.do("enter", t, r)).then(function () {
              return r.enter ? bn(r.enter, r)(t, i) : Promise.resolve();
            });
          } catch (s) {
            return Promise.reject(s);
          }
        }),
        (e.add = function (t, r) {
          try {
            return (
              Ni.addContainer(t.next.container, r),
              ni.do("nextAdded", t),
              Promise.resolve()
            );
          } catch (i) {
            return Promise.reject(i);
          }
        }),
        (e.remove = function (t) {
          try {
            return (
              Ni.removeContainer(t.current.container),
              ni.do("currentRemoved", t),
              Promise.resolve()
            );
          } catch (r) {
            return Promise.reject(r);
          }
        }),
        (e.H = function (t) {
          return t.message
            ? !/Timeout error|Fetch error/.test(t.message)
            : !t.status;
        }),
        (e.L = function (t, r, i) {
          try {
            return Promise.resolve(ni.do(t, r, i)).then(function () {
              return i[t] ? bn(i[t], i)(r) : Promise.resolve();
            });
          } catch (s) {
            return Promise.reject(s);
          }
        }),
        Tu(n, [
          {
            key: "isRunning",
            get: function () {
              return this.C;
            },
            set: function (t) {
              this.C = t;
            },
          },
          {
            key: "hasOnce",
            get: function () {
              return this.store.once.length > 0;
            },
          },
          {
            key: "hasSelf",
            get: function () {
              return this.store.all.some(function (t) {
                return t.name === "self";
              });
            },
          },
          {
            key: "shouldWait",
            get: function () {
              return this.store.all.some(function (t) {
                return (t.to && !t.to.route) || t.sync;
              });
            },
          },
        ]),
        n
      );
    })(),
    K_ = (function () {
      function n(e) {
        var t = this;
        ((this.names = [
          "beforeLeave",
          "afterLeave",
          "beforeEnter",
          "afterEnter",
        ]),
          (this.byNamespace = new Map()),
          e.length !== 0 &&
            (e.forEach(function (r) {
              t.byNamespace.set(r.namespace, r);
            }),
            this.names.forEach(function (r) {
              ni[r](t._(r));
            })));
      }
      return (
        (n.prototype._ = function (e) {
          var t = this;
          return function (r) {
            var i = e.match(/enter/i) ? r.next : r.current,
              s = t.byNamespace.get(i.namespace);
            return s && s[e] ? bn(s[e], s)(r) : Promise.resolve();
          };
        }),
        n
      );
    })();
  (Element.prototype.matches ||
    (Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector),
    Element.prototype.closest ||
      (Element.prototype.closest = function (n) {
        var e = this;
        do {
          if (e.matches(n)) return e;
          e = e.parentElement || e.parentNode;
        } while (e !== null && e.nodeType === 1);
        return null;
      }));
  var Z_ = {
      container: null,
      html: "",
      namespace: "",
      url: { hash: "", href: "", path: "", port: null, query: {} },
    },
    Fs = new ((function () {
      function n() {
        ((this.version = "2.10.3"),
          (this.schemaPage = Z_),
          (this.Logger = Ii),
          (this.logger = new Ii("@barba/core")),
          (this.plugins = []),
          (this.timeout = void 0),
          (this.cacheIgnore = void 0),
          (this.cacheFirstPage = void 0),
          (this.prefetchIgnore = void 0),
          (this.preventRunning = void 0),
          (this.hooks = ni),
          (this.cache = void 0),
          (this.headers = void 0),
          (this.prevent = void 0),
          (this.transitions = void 0),
          (this.views = void 0),
          (this.dom = Ni),
          (this.helpers = O_),
          (this.history = Xf),
          (this.request = R_),
          (this.url = k_),
          (this.D = void 0),
          (this.B = void 0),
          (this.q = void 0),
          (this.F = void 0));
      }
      var e = n.prototype;
      return (
        (e.use = function (t, r) {
          var i = this.plugins;
          i.indexOf(t) > -1
            ? this.logger.warn("Plugin [" + t.name + "] already installed.")
            : typeof t.install == "function"
              ? (t.install(this, r), i.push(t))
              : this.logger.warn(
                  "Plugin [" + t.name + '] has no "install" method.',
                );
        }),
        (e.init = function (t) {
          var r = t === void 0 ? {} : t,
            i = r.transitions,
            s = i === void 0 ? [] : i,
            o = r.views,
            a = o === void 0 ? [] : o,
            u = r.schema,
            l = u === void 0 ? _r : u,
            c = r.requestError,
            p = r.timeout,
            h = p === void 0 ? 2e3 : p,
            d = r.cacheIgnore,
            _ = d !== void 0 && d,
            f = r.cacheFirstPage,
            g = f !== void 0 && f,
            D = r.prefetchIgnore,
            m = D !== void 0 && D,
            E = r.preventRunning,
            w = E !== void 0 && E,
            b = r.prevent,
            S = b === void 0 ? null : b,
            y = r.debug,
            A = r.logLevel;
          if (
            (Ii.setLevel(
              (y !== void 0 && y) === !0 ? "debug" : A === void 0 ? "off" : A,
            ),
            this.logger.info(this.version),
            Object.keys(l).forEach(function (P) {
              _r[P] && (_r[P] = l[P]);
            }),
            (this.B = c),
            (this.timeout = h),
            (this.cacheIgnore = _),
            (this.cacheFirstPage = g),
            (this.prefetchIgnore = m),
            (this.preventRunning = w),
            (this.q = this.dom.getWrapper()),
            !this.q)
          )
            throw new Error("[@barba/core] No Barba wrapper found");
          this.I();
          var T = this.data.current;
          if (!T.container)
            throw new Error("[@barba/core] No Barba container found");
          if (
            ((this.cache = new M_(_)),
            (this.headers = new I_()),
            (this.prevent = new G_(m)),
            (this.transitions = new j_(s)),
            (this.views = new K_(a)),
            S !== null)
          ) {
            if (typeof S != "function")
              throw new Error("[@barba/core] Prevent should be a function");
            this.prevent.add("preventCustom", S);
          }
          (this.history.init(T.url.href, T.namespace),
            g &&
              this.cache.set(
                T.url.href,
                Promise.resolve({ html: T.html, url: T.url }),
                "init",
                "fulfilled",
              ),
            (this.U = this.U.bind(this)),
            (this.$ = this.$.bind(this)),
            (this.X = this.X.bind(this)),
            this.G(),
            this.plugins.forEach(function (P) {
              return P.init();
            }));
          var x = this.data;
          ((x.trigger = "barba"),
            (x.next = x.current),
            (x.current = pr({}, this.schemaPage)),
            this.hooks.do("ready", x),
            this.once(x),
            this.I());
        }),
        (e.destroy = function () {
          (this.I(),
            this.J(),
            this.history.clear(),
            this.hooks.clear(),
            (this.plugins = []));
        }),
        (e.force = function (t) {
          window.location.assign(t);
        }),
        (e.go = function (t, r, i) {
          var s;
          if (
            (r === void 0 && (r = "barba"),
            (this.F = null),
            this.transitions.isRunning)
          )
            this.force(t);
          else if (
            !(s =
              r === "popstate"
                ? this.history.current &&
                  this.url.getPath(this.history.current.url) ===
                    this.url.getPath(t) &&
                  this.url.getQuery(this.history.current.url, !0) ===
                    this.url.getQuery(t, !0)
                : this.prevent.run("sameUrl", null, null, t)) ||
            this.transitions.hasSelf
          )
            return (
              (r = this.history.change(
                this.cache.has(t) ? this.cache.get(t).target : t,
                r,
                i,
              )),
              i && (i.stopPropagation(), i.preventDefault()),
              this.page(t, r, i ?? void 0, s)
            );
        }),
        (e.once = function (t) {
          try {
            var r = this;
            return Promise.resolve(r.hooks.do("beforeEnter", t)).then(
              function () {
                function i() {
                  return Promise.resolve(r.hooks.do("afterEnter", t)).then(
                    function () {},
                  );
                }
                var s = (function () {
                  if (r.transitions.hasOnce) {
                    var o = r.transitions.get(t, { once: !0 });
                    return Promise.resolve(
                      r.transitions.doOnce({ transition: o, data: t }),
                    ).then(function () {});
                  }
                })();
                return s && s.then ? s.then(i) : i();
              },
            );
          } catch (i) {
            return Promise.reject(i);
          }
        }),
        (e.page = function (t, r, i, s) {
          try {
            var o,
              a = function () {
                var p = u.data;
                return Promise.resolve(u.hooks.do("page", p)).then(function () {
                  var h = (function (d, _) {
                    try {
                      var f =
                        ((g = u.transitions.get(p, { once: !1, self: s })),
                        Promise.resolve(
                          u.transitions.doPage({
                            data: p,
                            page: o,
                            transition: g,
                            wrapper: u.q,
                          }),
                        ).then(function () {
                          u.I();
                        }));
                    } catch {
                      return _();
                    }
                    var g;
                    return f && f.then ? f.then(void 0, _) : f;
                  })(0, function () {
                    Ii.getLevel() === 0 && u.force(p.next.url.href);
                  });
                  if (h && h.then) return h.then(function () {});
                });
              },
              u = this;
            if (
              ((u.data.next.url = pr({ href: t }, u.url.parse(t))),
              (u.data.trigger = r),
              (u.data.event = i),
              u.cache.has(t))
            )
              o = u.cache.update(t, { action: "click" }).request;
            else {
              var l = u.request(
                t,
                u.timeout,
                u.onRequestError.bind(u, r),
                u.cache,
                u.headers,
              );
              (l.then(function (p) {
                p.url.href !== t && u.history.add(p.url.href, r, "replace");
              }),
                (o = u.cache.set(t, l, "click", "pending").request));
            }
            var c = (function () {
              if (u.transitions.shouldWait)
                return Promise.resolve(zo(o, u.data)).then(function () {});
            })();
            return Promise.resolve(c && c.then ? c.then(a) : a());
          } catch (p) {
            return Promise.reject(p);
          }
        }),
        (e.onRequestError = function (t) {
          this.transitions.isRunning = !1;
          var r = [].slice.call(arguments, 1),
            i = r[0],
            s = r[1],
            o = this.cache.getAction(i);
          return (
            this.cache.delete(i),
            (this.B && this.B(t, o, i, s) === !1) ||
              (o === "click" && this.force(i)),
            !1
          );
        }),
        (e.prefetch = function (t) {
          var r = this;
          ((t = this.url.getAbsoluteHref(t)),
            this.cache.has(t) ||
              this.cache.set(
                t,
                this.request(
                  t,
                  this.timeout,
                  this.onRequestError.bind(this, "barba"),
                  this.cache,
                  this.headers,
                ).catch(function (i) {
                  r.logger.error(i);
                }),
                "prefetch",
                "pending",
              ));
        }),
        (e.G = function () {
          (this.prefetchIgnore !== !0 &&
            (document.addEventListener("mouseover", this.U),
            document.addEventListener("touchstart", this.U)),
            document.addEventListener("click", this.$),
            window.addEventListener("popstate", this.X));
        }),
        (e.J = function () {
          (this.prefetchIgnore !== !0 &&
            (document.removeEventListener("mouseover", this.U),
            document.removeEventListener("touchstart", this.U)),
            document.removeEventListener("click", this.$),
            window.removeEventListener("popstate", this.X));
        }),
        (e.U = function (t) {
          var r = this,
            i = this.W(t);
          if (i) {
            var s = this.url.getAbsoluteHref(this.dom.getHref(i));
            this.prevent.checkHref(s) ||
              this.cache.has(s) ||
              this.cache.set(
                s,
                this.request(
                  s,
                  this.timeout,
                  this.onRequestError.bind(this, i),
                  this.cache,
                  this.headers,
                ).catch(function (o) {
                  r.logger.error(o);
                }),
                "enter",
                "pending",
              );
          }
        }),
        (e.$ = function (t) {
          var r = this.W(t);
          if (r) {
            if (this.transitions.isRunning && this.preventRunning)
              return (t.preventDefault(), void t.stopPropagation());
            ((this.F = t), this.go(this.dom.getHref(r), r, t));
          }
        }),
        (e.X = function (t) {
          this.go(this.url.getHref(), "popstate", t);
        }),
        (e.W = function (t) {
          for (var r = t.target; r && !this.dom.getHref(r); ) r = r.parentNode;
          if (r && !this.prevent.checkLink(r, t, this.dom.getHref(r))) return r;
        }),
        (e.I = function () {
          var t = this.url.getHref(),
            r = {
              container: this.dom.getContainer(),
              html: this.dom.getHtml(),
              namespace: this.dom.getNamespace(),
              url: pr({ href: t }, this.url.parse(t)),
            };
          ((this.D = {
            current: r,
            event: void 0,
            next: pr({}, this.schemaPage),
            trigger: void 0,
          }),
            this.hooks.do("reset", this.data));
        }),
        Tu(n, [
          {
            key: "data",
            get: function () {
              return this.D;
            },
          },
          {
            key: "wrapper",
            get: function () {
              return this.q;
            },
          },
        ]),
        n
      );
    })())();
  const Q_ = () => {
      console.log("Home page initialized");
    },
    J_ = () => {
      console.log("Home page cleaned up");
    };
  function eg() {
    Fs.init({
      transitions: [
        {
          name: "default-transition",
          async leave(n) {
            await jl.closeMenu();
            const e = K.timeline();
            return (
              e.to(n.current.container, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut",
              }),
              e
            );
          },
          afterLeave(n) {
            (console.log("after leave"),
              C_(n.current.container),
              Mi.scrollTo(0, { immediate: !0 }));
          },
          enter(n) {
            return (
              Wf(n.next.container),
              new Promise((e) => {
                (K.from(n.next.container, {
                  opacity: 0,
                  duration: 0.3,
                  ease: "power2.inOut",
                }),
                  e());
              })
            );
          },
          afterEnter() {
            (Mi.resize(), j.refresh());
          },
        },
      ],
      views: [
        {
          namespace: "home",
          beforeEnter() {
            Q_();
          },
          beforeLeave() {
            J_();
          },
        },
      ],
    });
  }
  let Cn = null;
  (Fs.hooks.afterEnter(() => {
    window.FinsweetAttributes &&
      window.FinsweetAttributes.push([
        "list",
        async () => {
          await window.FinsweetAttributes.modules.list.restart();
          const n = document.querySelector('[fs-list-element="list"]');
          n &&
            ((Cn = new ResizeObserver(() => {
              requestAnimationFrame(() => {
                Mi.resize();
              });
            })),
            Cn.observe(n));
        },
      ]);
  }),
    Fs.hooks.beforeLeave(() => {
      (Cn == null || Cn.disconnect(), (Cn = null));
    }),
    Fs.hooks.afterEnter((n) => {
      n.next.container.querySelectorAll("video").forEach((t) => {
        t.play();
      });
    }),
    Fs.hooks.afterEnter((n) => {
      var i;
      const r = new DOMParser()
        .parseFromString(n.next.html, "text/html")
        .documentElement.getAttribute("data-wf-page");
      (r && document.documentElement.setAttribute("data-wf-page", r),
        window.Webflow &&
          (window.Webflow.destroy(),
          window.Webflow.ready(),
          (i = window.Webflow.require("ix2")) == null || i.init(),
          document.dispatchEvent(new Event("readystatechange"))));
    }),
    x_(),
    eg(),
    console.log("Hello, Pupsik!"));
});
