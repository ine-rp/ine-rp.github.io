(function() {
    var _ = window.caf_ = {};
    'use strict';
    var aa, fa, ea, ha, ia, ma, na, oa, va, xa, ya, Ca, Da, Na, Ma, Pa, Oa, Ra, Sa, Qa, Va, Xa, bb, fb, ib, lb, mb, pb, qb, rb, sb, wb, Eb, Ib, Jb, Kb, Lb, Mb, Qb, Tb, Zb, Vb, cc, bc, Xb, fc, gc, mc, nc, oc, pc, qc, rc, tc, uc, yc, wc, zc, Fc, Hc, Kc, Mc, Qc, Tc, Xc, Rc, Cc, Jc, Zc, Wc, Uc, Vc, $c, Yc, Dc, Pc, bd, cd, ed, dd, fd, gd, hd, id, ld, kd, nd, md, od, pd, qd, rd, td, ud, vd, wd, xd, yd, zd, Ad, Bd, Cd, Dd, Ed, Fd, Gd, Jd, Nd, Qd, Sd, Td, Rd, Pd, Ud, Wd, Xd, Yd, Zd, $d, be, ce, ie, je, Md, he, me, ne, pe, qe, re, le, se, te, ue, ke, ve, we, xe, ye, ze, Ae, Be, Ce, De, Fe, Ie, Le, Ge, He, Me, Ne, Oe, Pe, Qe, Re, Se, Ke, Ve, We, bf, cf, df,
        af, ef, ff, Xe, Ye, gf, jf, Ze, kf, lf, $e, mf, nf, of, pf, qf, rf, sf, tf, uf, vf, wf, zf, yf, xf, Cf, Df, Ef, Gf, Hf, If, Jf, Kf, Mf, Of, Ff, Nf, Qf, Pf, Sf, Af, Lf, Tf, Uf, Vf, Wf, Xf, Yf, Zf, $f, ag, bg, cg, dg, eg, fg, gg, hg, jg, ig, kg, lg, mg, ng, rg, qg, vg, og, wg, xg, yg, pg, zg, Ag, Bg, Cg, Eg, Gg, Hg, ug, Ig, tg, sg, Fg, Dg, Jg, Kg, Lg, Mg, Ng, Og, Pg, Qg, Rg, Sg, Ug, Tg, Xg, Zg, $g, Wg, Yg, bh, ch, hh, lh, kh, mh, ih, sh, jh, wh, xh, yh, Bh, zh, Ah, Dh, Eh, Fh, Gh, Hh, Ih, Jh, Kh, Lh, Oh, Mh, Nh, Qh, Uh, Th, Sh, Vh, Wh, Xh, Yh, Zh, Rh, ei, fi, gi, hi, ii, di, ai, bi, ci, ji, ki, li, mi, pi, si, ni, ui, vi, wi, yi, Bi, Ci, Di, ti, zi, xi, oi, Fi,
        Gi, Hi, Ji, Ki, Li, Mi, Ni, Oi, Pi, Ri, Si, Ti, Qi, Ui, Wi, Zi, $i, cj, aj, jj, bj, kj, ej, fj, gj, lj, nj, oj, pj, qj, mj, rj, sj, tj, L, vj, wj, xj, zj, Aj, Bj, Cj, Dj, Ej, Fj, Gj, Hj, Ij, Jj, Kj, Lj, Mj, Nj, Oj, Pj, uj, Qj, Rj, Sj, Tj, Uj, Vj, Wj, Xj, Yj, Zj, ak, bk, yj, ck, dk, gk, hk, ik, jk, kk, lk, mk, nk, ok, pk, qk, rk, sk, tk, uk, vk, wk, xk, yk, zk, Bk, Dk, Ek, Fk, Gk, Hk, Ik, M, Jk, Kk, Lk, Mk, Nk, Ok, Pk, Rk, Sk, Uk, Vk, Wk, Yk, Zk, $k, al, bl, cl, dl, el, fl, gl, hl, il, jl, kl, ll, ml, nl, ol, pl, ql, rl, sl, tl, ul, vl, yl, Al, xl, zl, Bl, Dl, Hl, Il, Kl, Ll, Ml, Nl, Jl, Gl, Cl, Fl, Ol, Ql, Pl, Rl, Sl, Vl, Wl, cm, bm, am, Yl, Zl, fm, gm, hm, im,
        jm, km, lm, mm, nm, om, sm, pm, qm, rm, tm, wm, um, xm, ym, zm, Cm, Dm, Em, Fm, N, Hm, Im, Lm, Jm, Km, Mm, Nm, Sm, Tm, Um, Vm, Wm, Xm, Ym, Zm, an, cn, $m, dn, en, Ck, fn, hn, jn, on, kn, rn, sn, nn, tn, qn, wn, gn, xn, zn, An, Bn, vn, un, yn, Cn, Dn, Gn, pn, ln, Hn, In, Fn, Jn, Kn, Ln, O, Nn, Qn, Rn, Tn, Un, Vn, Wn, Xn, Yn, Zn, $n, ao, bo, co, P, eo, go, ho, io, jo, ko, lo, mo, Q, oo, qo, po, ro, to, wo, vo, xo, yo, Co, zo, Do, Jo, Ko, Lo, Bo, Qo, Oo, Fo, Po, Uo, Ho, No, Xo, Wo, So, To, Io, Go, Mo, Eo, Vo, Ao, pp, op, kp, qp, rp, sp, tp, up, wp, xp, yp, Bp, Ap, Cp, Dp, Ep, Fp, Gp, Hp, Ip, zp, Jp, da, ba, ca, dj;
    aa = function() {
        aa = function() {};
        ba.Symbol || (ba.Symbol = ca)
    };
    fa = function() {
        aa();
        var a = ba.Symbol.iterator;
        a || (a = ba.Symbol.iterator = ba.Symbol("iterator"));
        "function" != typeof Array.prototype[a] && da(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return ea(this)
            }
        });
        fa = function() {}
    };
    ea = function(a) {
        var b = 0;
        return ha(function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        })
    };
    ha = function(a) {
        fa();
        a = {
            next: a
        };
        a[ba.Symbol.iterator] = function() {
            return this
        };
        return a
    };
    _.n = function(a) {
        fa();
        var b = a[window.Symbol.iterator];
        return b ? b.call(a) : ea(a)
    };
    ia = function(a, b) {
        if (b) {
            var c = ba;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && da(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    };
    _.q = function(a, b) {
        a.prototype = ja(b.prototype);
        a.prototype.constructor = a;
        if (ka) ka(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.zb = b.prototype
    };
    _.la = function(a) {
        if (!(a instanceof Array)) {
            a = _.n(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    ma = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                yh: e,
                Gi: f
            }
        }
        return {
            yh: -1,
            Gi: void 0
        }
    };
    na = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    oa = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    _.r = function(a) {
        return void 0 !== a
    };
    _.t = function(a) {
        return "string" == typeof a
    };
    _.u = function(a) {
        return "number" == typeof a
    };
    _.w = function(a, b, c) {
        a = a.split(".");
        c = c || _.v;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) !a.length && _.r(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
    };
    _.pa = function(a) {
        a = a.split(".");
        for (var b = _.v, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    };
    _.x = function() {};
    _.qa = function(a) {
        a.ce = void 0;
        a.H = function() {
            return a.ce ? a.ce : a.ce = new a
        }
    };
    _.ra = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    };
    _.ta = function(a) {
        return "array" == _.ra(a)
    };
    va = function(a) {
        var b = _.ra(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.z = function(a) {
        return "function" == _.ra(a)
    };
    _.wa = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    xa = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    ya = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    _.za = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.za = xa : _.za = ya;
        return _.za.apply(null, arguments)
    };
    _.Aa = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    };
    _.Ba = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.zb = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Xo = function(a, c, f) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };
    Ca = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ca);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    Da = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ca.call(this, c + a[d])
    };
    _.Ea = function(a, b) {
        throw new Da("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    _.Ga = function(a, b) {
        b = _.Fa(a, b, void 0);
        return 0 > b ? null : _.t(a) ? a.charAt(b) : a[b]
    };
    _.Fa = function(a, b, c) {
        for (var d = a.length, e = _.t(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    };
    _.Ia = function(a, b) {
        return 0 <= Ha(a, b)
    };
    _.Ka = function(a, b) {
        b = Ha(a, b);
        var c;
        (c = 0 <= b) && _.Ja(a, b);
        return c
    };
    _.Ja = function(a, b) {
        return 1 == Array.prototype.splice.call(a, b, 1).length
    };
    _.La = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    Na = function(a, b, c, d) {
        return Array.prototype.splice.apply(a, Ma(arguments, 1))
    };
    Ma = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    Pa = function(a, b) {
        if (!va(a) || !va(b) || a.length != b.length) return !1;
        for (var c = a.length, d = Oa, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    };
    Oa = function(a, b) {
        return a === b
    };
    Ra = function(a, b) {
        return 0 == Qa(b, a.substr(0, b.length))
    };
    Sa = function(a, b) {
        return 0 == Qa(b, a.substr(a.length - b.length, b.length))
    };
    Qa = function(a, b) {
        a = String(a).toLowerCase();
        b = String(b).toLowerCase();
        return a < b ? -1 : a == b ? 0 : 1
    };
    _.Ta = function(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    };
    Va = function(a) {
        a = _.r(void 0) ? a.toFixed(void 0) : String(a);
        var b = a.indexOf("."); - 1 == b && (b = a.length);
        return Ua("0", Math.max(0, 2 - b)) + a
    };
    _.Ya = function(a, b) {
        var c = 0;
        a = (0, _.Wa)(String(a)).split(".");
        b = (0, _.Wa)(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = Xa(0 == f[1].length ? 0 : (0, window.parseInt)(f[1], 10), 0 == g[1].length ? 0 : (0, window.parseInt)(g[1], 10)) || Xa(0 == f[2].length, 0 == g[2].length) || Xa(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    };
    Xa = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    _.A = function(a) {
        return -1 != _.Za.indexOf(a)
    };
    _.$a = function(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    };
    _.ab = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    };
    bb = function(a, b) {
        var c = va(b),
            d = c ? b : arguments;
        for (c = c ? 0 : 1; c < d.length; c++) {
            if (null == a) return;
            a = a[d[c]]
        }
        return a
    };
    _.cb = function(a, b) {
        return null !== a && b in a
    };
    _.db = function(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    };
    _.eb = function(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    fb = function(a) {
        var b = _.ra(a);
        if ("object" == b || "array" == b) {
            if (_.z(a.clone)) return a.clone();
            b = "array" == b ? [] : {};
            for (var c in a) b[c] = fb(a[c]);
            return b
        }
        return a
    };
    _.hb = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < gb.length; f++) c = gb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    ib = function(a) {
        ib[" "](a);
        return a
    };
    _.jb = function(a, b) {
        try {
            return ib(a[b]), !0
        } catch (c) {}
        return !1
    };
    lb = function(a, b) {
        var c = kb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    mb = function() {
        var a = _.v.document;
        return a ? a.documentMode : void 0
    };
    _.ob = function(a) {
        return lb(a, function() {
            return 0 <= _.Ya(nb, a)
        })
    };
    pb = function(a, b, c) {
        this.reset(a, b, c, void 0, void 0)
    };
    qb = function(a) {
        this.B = a;
        this.g = this.o = this.h = this.l = null
    };
    rb = function(a, b) {
        this.name = a;
        this.value = b
    };
    sb = function(a) {
        if (a.h) return a.h;
        if (a.l) return sb(a.l);
        _.Ea("Root logger has no level set.");
        return null
    };
    wb = function() {
        tb || (tb = new qb(""), ub[""] = tb, tb.h = vb)
    };
    _.B = function(a) {
        wb();
        var b;
        if (!(b = ub[a])) {
            b = new qb(a);
            var c = a.lastIndexOf("."),
                d = a.substr(c + 1);
            c = _.B(a.substr(0, c));
            c.o || (c.o = {});
            c.o[d] = b;
            b.l = c;
            ub[a] = b
        }
        return b
    };
    _.xb = function() {
        this.F = this.F;
        this.B = this.B
    };
    _.yb = function(a, b) {
        a.F ? _.r(void 0) ? b.call(void 0) : b() : (a.B || (a.B = []), a.B.push(_.r(void 0) ? (0, _.za)(b, void 0) : b))
    };
    _.zb = function(a) {
        a && "function" == typeof a.ka && a.ka()
    };
    _.Ab = function(a, b) {
        this.type = a;
        this.g = this.target = b;
        this.gi = !0
    };
    Eb = function(a, b) {
        _.Ab.call(this, a ? a.type : "");
        this.relatedTarget = this.g = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.l = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.g = b;
            (b = a.relatedTarget) ? _.Bb && (_.jb(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" ==
                c && (b = a.toElement);
            this.relatedTarget = b;
            null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
            this.button = a.button;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId =
                a.pointerId || 0;
            this.pointerType = _.t(a.pointerType) ? a.pointerType : Db[a.pointerType] || "";
            this.state = a.state;
            this.l = a;
            a.defaultPrevented && this.h()
        }
    };
    _.Gb = function(a) {
        return !(!a || !a[Fb])
    };
    Ib = function(a, b, c, d, e) {
        this.listener = a;
        this.g = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.$d = e;
        this.key = ++Hb;
        this.Ec = this.Gd = !1
    };
    Jb = function(a) {
        a.Ec = !0;
        a.listener = null;
        a.g = null;
        a.src = null;
        a.$d = null
    };
    Kb = function(a) {
        this.src = a;
        this.g = {};
        this.h = 0
    };
    Lb = function(a, b) {
        var c = b.type;
        c in a.g && _.Ka(a.g[c], b) && (Jb(b), 0 == a.g[c].length && (delete a.g[c], a.h--))
    };
    Mb = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Ec && f.listener == b && f.capture == !!c && f.$d == d) return e
        }
        return -1
    };
    _.Ob = function(a, b, c, d, e) {
        if (d && d.once) return _.Nb(a, b, c, d, e);
        if (_.ta(b)) {
            for (var f = 0; f < b.length; f++) _.Ob(a, b[f], c, d, e);
            return null
        }
        c = _.Pb(c);
        return _.Gb(a) ? a.Ha(b, c, _.wa(d) ? !!d.capture : !!d, e) : Qb(a, b, c, !1, d, e)
    };
    Qb = function(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = _.wa(e) ? !!e.capture : !!e,
            k = _.Rb(a);
        k || (a[Sb] = k = new Kb(a));
        c = k.add(b, c, d, g, f);
        if (c.g) return c;
        d = Tb();
        c.g = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) Ub || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(Vb(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        Wb++;
        return c
    };
    Tb = function() {
        var a = Xb,
            b = Yb ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    };
    _.Nb = function(a, b, c, d, e) {
        if (_.ta(b)) {
            for (var f = 0; f < b.length; f++) _.Nb(a, b[f], c, d, e);
            return null
        }
        c = _.Pb(c);
        return _.Gb(a) ? a.Eh(b, c, _.wa(d) ? !!d.capture : !!d, e) : Qb(a, b, c, !0, d, e)
    };
    Zb = function(a, b, c, d, e) {
        if (_.ta(b))
            for (var f = 0; f < b.length; f++) Zb(a, b[f], c, d, e);
        else d = _.wa(d) ? !!d.capture : !!d, c = _.Pb(c), _.Gb(a) ? a.Kc(b, c, d, e) : a && (a = _.Rb(a)) && (b = a.$c(b, c, d, e)) && _.$b(b)
    };
    _.$b = function(a) {
        if (!_.u(a) && a && !a.Ec) {
            var b = a.src;
            if (_.Gb(b)) Lb(b.h, a);
            else {
                var c = a.type,
                    d = a.g;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Vb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                Wb--;
                (c = _.Rb(b)) ? (Lb(c, a), 0 == c.h && (c.src = null, b[Sb] = null)) : Jb(a)
            }
        }
    };
    Vb = function(a) {
        return a in ac ? ac[a] : ac[a] = "on" + a
    };
    cc = function(a, b, c, d) {
        var e = !0;
        if (a = _.Rb(a))
            if (b = a.g[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.Ec && (f = bc(f, d), e = e && !1 !== f)
                }
            return e
    };
    bc = function(a, b) {
        var c = a.listener,
            d = a.$d || a.src;
        a.Gd && _.$b(a);
        return c.call(d, b)
    };
    Xb = function(a, b) {
        if (a.Ec) return !0;
        if (!Yb) {
            var c = b || _.pa("window.event");
            b = new Eb(c, this);
            var d = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == c.keyCode) try {
                        c.keyCode = -1;
                        break a
                    } catch (g) {
                        e = !0
                    }
                    if (e || void 0 == c.returnValue) c.returnValue = !0
                }
                c = [];
                for (e = b.g; e; e = e.parentNode) c.push(e);a = a.type;
                for (e = c.length - 1; 0 <= e; e--) {
                    b.g = c[e];
                    var f = cc(c[e], a, !0, b);
                    d = d && f
                }
                for (e = 0; e < c.length; e++) b.g = c[e],
                f = cc(c[e], a, !1, b),
                d = d && f
            }
            return d
        }
        return bc(a, new Eb(b, this))
    };
    _.Rb = function(a) {
        a = a[Sb];
        return a instanceof Kb ? a : null
    };
    _.Pb = function(a) {
        if (_.z(a)) return a;
        a[dc] || (a[dc] = function(b) {
            return a.handleEvent(b)
        });
        return a[dc]
    };
    _.ec = function() {
        _.xb.call(this);
        this.h = new Kb(this);
        this.ca = this;
        this.G = null
    };
    fc = function(a, b, c, d) {
        b = a.h.g[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Ec && g.capture == c) {
                var k = g.listener,
                    l = g.$d || g.src;
                g.Gd && Lb(a.h, g);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && 0 != d.gi
    };
    gc = function(a, b, c) {
        a && a.log(b, c, void 0)
    };
    _.C = function(a, b) {
        a && a.log(hc, b, void 0)
    };
    _.E = function(a, b, c) {
        a && a.log(ic, b, c)
    };
    _.F = function(a, b) {
        a && a.log(jc, b, void 0)
    };
    _.lc = function(a, b) {
        a && a.log(kc, b, void 0)
    };
    mc = function(a, b) {
        this.l = a;
        this.o = b;
        this.h = 0;
        this.g = null
    };
    nc = function(a, b) {
        a.o(b);
        100 > a.h && (a.h++, b.next = a.g, a.g = b)
    };
    oc = function(a) {
        function b() {
            c = 0
        }
        var c = 0;
        return function(d) {
            c || (c = _.v.setTimeout(b, 3E5), a.apply(void 0, arguments))
        }
    };
    pc = function(a) {
        _.v.setTimeout(function() {
            throw a;
        }, 0)
    };
    qc = function() {
        var a = _.v.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !_.A("Presto") && (a = function() {
            var a = window.document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            window.document.documentElement.appendChild(a);
            var b = a.contentWindow;
            a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(),
                d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
            a = (0, _.za)(function(a) {
                if (("*" ==
                        d || a.origin == d) && a.data == c) this.port1.onmessage()
            }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    b.postMessage(c, d)
                }
            }
        });
        if ("undefined" !== typeof a && !_.A("Trident") && !_.A("MSIE")) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (_.r(c.next)) {
                    c = c.next;
                    var a = c.ah;
                    c.ah = null;
                    a()
                }
            };
            return function(a) {
                d.next = {
                    ah: a
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof window.document && "onreadystatechange" in window.document.createElement("SCRIPT") ? function(a) {
            var b =
                window.document.createElement("SCRIPT");
            b.onreadystatechange = function() {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            };
            window.document.documentElement.appendChild(b)
        } : function(a) {
            _.v.setTimeout(a, 0)
        }
    };
    rc = function() {
        this.h = this.g = null
    };
    tc = function() {
        var a = sc,
            b = null;
        a.g && (b = a.g, a.g = a.g.next, a.g || (a.h = null), b.next = null);
        return b
    };
    uc = function() {
        this.next = this.h = this.g = null
    };
    yc = function(a, b) {
        vc || wc();
        xc || (vc(), xc = !0);
        sc.add(a, b)
    };
    wc = function() {
        if (_.v.Promise && _.v.Promise.resolve) {
            var a = _.v.Promise.resolve(void 0);
            vc = function() {
                a.then(zc)
            }
        } else vc = function() {
            var a = zc;
            !_.z(_.v.setImmediate) || _.v.Window && _.v.Window.prototype && !_.A("Edge") && _.v.Window.prototype.setImmediate == _.v.setImmediate ? (Ac || (Ac = qc()), Ac(a)) : _.v.setImmediate(a)
        }
    };
    zc = function() {
        for (var a; a = tc();) {
            try {
                a.g.call(a.h)
            } catch (b) {
                pc(b)
            }
            nc(Bc, a)
        }
        xc = !1
    };
    _.Ec = function(a, b) {
        this.g = 0;
        this.C = void 0;
        this.o = this.h = this.l = null;
        this.w = this.B = !1;
        if (a != _.x) try {
            var c = this;
            a.call(b, function(a) {
                Cc(c, 2, a)
            }, function(a) {
                if (!(a instanceof Dc)) try {
                    if (a instanceof Error) throw a;
                    throw Error("Promise rejected.");
                } catch (e) {}
                Cc(c, 3, a)
            })
        } catch (d) {
            Cc(this, 3, d)
        }
    };
    Fc = function() {
        this.next = this.context = this.h = this.l = this.g = null;
        this.o = !1
    };
    Hc = function(a, b, c) {
        var d = Gc.get();
        d.l = a;
        d.h = b;
        d.context = c;
        return d
    };
    _.H = function(a) {
        if (a instanceof _.Ec) return a;
        var b = new _.Ec(_.x);
        Cc(b, 2, a);
        return b
    };
    _.Ic = function(a) {
        return new _.Ec(function(b, c) {
            c(a)
        })
    };
    Kc = function(a, b, c) {
        Jc(a, b, c, null) || yc(_.Aa(b, a))
    };
    _.Lc = function(a) {
        return new _.Ec(function(b, c) {
            var d = a.length,
                e = [];
            if (d)
                for (var f = function(a, c) {
                        d--;
                        e[a] = c;
                        0 == d && b(e)
                    }, g = function(a) {
                        c(a)
                    }, k = 0, l; k < a.length; k++) l = a[k], Kc(l, _.Aa(f, k), g);
            else b(e)
        })
    };
    Mc = function(a) {
        return new _.Ec(function(b) {
            var c = a.length,
                d = [];
            if (c)
                for (var e = function(a, e, f) {
                        c--;
                        d[a] = e ? {
                            kf: !0,
                            value: f
                        } : {
                            kf: !1,
                            reason: f
                        };
                        0 == c && b(d)
                    }, f = 0, g; f < a.length; f++) g = a[f], Kc(g, _.Aa(e, f, !0), _.Aa(e, f, !1));
            else b(d)
        })
    };
    Qc = function() {
        var a, b, c = new _.Ec(function(c, e) {
            a = c;
            b = e
        });
        return new Pc(c, a, b)
    };
    _.Sc = function(a, b) {
        return Rc(a, null, b, void 0)
    };
    Tc = function(a, b) {
        if (0 == a.g)
            if (a.l) {
                var c = a.l;
                if (c.h) {
                    for (var d = 0, e = null, f = null, g = c.h; g && (g.o || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.g && 1 == d ? Tc(c, b) : (f ? (d = f, d.next == c.o && (c.o = d), d.next = d.next.next) : Uc(c), Vc(c, e, 3, b)))
                }
                a.l = null
            } else Cc(a, 3, b)
    };
    Xc = function(a, b) {
        a.h || 2 != a.g && 3 != a.g || Wc(a);
        a.o ? a.o.next = b : a.h = b;
        a.o = b
    };
    Rc = function(a, b, c, d) {
        var e = Hc(null, null, null);
        e.g = new _.Ec(function(a, g) {
            e.l = b ? function(c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (p) {
                    g(p)
                }
            } : a;
            e.h = c ? function(b) {
                try {
                    var e = c.call(d, b);
                    !_.r(e) && b instanceof Dc ? g(b) : a(e)
                } catch (p) {
                    g(p)
                }
            } : g
        });
        e.g.l = a;
        Xc(a, e);
        return e.g
    };
    Cc = function(a, b, c) {
        0 == a.g && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.g = 1, Jc(c, a.D, a.G, a) || (a.C = c, a.g = b, a.l = null, Wc(a), 3 != b || c instanceof Dc || Yc(a, c)))
    };
    Jc = function(a, b, c, d) {
        if (a instanceof _.Ec) return Xc(a, Hc(b || _.x, c || null, d)), !0;
        if (a) try {
            var e = !!a.$goog_Thenable
        } catch (g) {
            e = !1
        } else e = !1;
        if (e) return a.then(b, c, d), !0;
        if (_.wa(a)) try {
            var f = a.then;
            if (_.z(f)) return Zc(a, f, b, c, d), !0
        } catch (g) {
            return c.call(d, g), !0
        }
        return !1
    };
    Zc = function(a, b, c, d, e) {
        function f(a) {
            k || (k = !0, d.call(e, a))
        }

        function g(a) {
            k || (k = !0, c.call(e, a))
        }
        var k = !1;
        try {
            b.call(a, g, f)
        } catch (l) {
            f(l)
        }
    };
    Wc = function(a) {
        a.B || (a.B = !0, yc(a.F, a))
    };
    Uc = function(a) {
        var b = null;
        a.h && (b = a.h, a.h = b.next, b.next = null);
        a.h || (a.o = null);
        return b
    };
    Vc = function(a, b, c, d) {
        if (3 == c && b.h && !b.o)
            for (; a && a.w; a = a.l) a.w = !1;
        if (b.g) b.g.l = null, $c(b, c, d);
        else try {
            b.o ? b.l.call(b.context) : $c(b, c, d)
        } catch (e) {
            ad.call(null, e)
        }
        nc(Gc, b)
    };
    $c = function(a, b, c) {
        2 == b ? a.l.call(a.context, c) : a.h && a.h.call(a.context, c)
    };
    Yc = function(a, b) {
        a.w = !0;
        yc(function() {
            a.w && ad.call(null, b)
        })
    };
    Dc = function(a) {
        Ca.call(this, a)
    };
    Pc = function(a, b, c) {
        this.g = a;
        this.resolve = b;
        this.reject = c
    };
    bd = function(a, b, c) {
        if (_.z(a)) c && (a = (0, _.za)(a, c));
        else if (a && "function" == typeof a.handleEvent) a = (0, _.za)(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : _.v.setTimeout(a, b || 0)
    };
    cd = function() {
        var a = null;
        return _.Sc(new _.Ec(function(b, c) {
            a = bd(function() {
                b(void 0)
            }, 3E3); - 1 == a && c(Error("Failed to schedule timer."))
        }), function(b) {
            _.v.clearTimeout(a);
            throw b;
        })
    };
    ed = function(a, b) {
        _.ec.call(this);
        "object" != typeof a && (a = {
            g: a,
            h: b
        });
        this.o = 0 != a.g;
        this.l = a.h || dd;
        this.w = a.l || "blob";
        this.g = this.l(this.ud)
    };
    dd = function(a) {
        return Math.min(1E3 * Math.pow(2, a), 6E4)
    };
    fd = function(a) {
        _.Ab.call(this, "c");
        this.message = a
    };
    gd = function(a) {
        _.Ab.call(this, "b");
        this.data = a
    };
    hd = function() {
        this.h = new _.ec;
        this.g = !1
    };
    id = function(a, b) {
        b = _.t(b) ? new _.Ab(b) : b;
        b.target = a;
        a.h.dispatchEvent(b)
    };
    ld = function() {
        this.g = null;
        window.cast.__platform__ && window.cast.__platform__.channel ? (_.F(jd, "Opening platform websocket"), kd(this, new hd)) : (_.F(jd, "Opening net websocket"), kd(this, new ed(!0)));
        this.h = new _.ec
    };
    kd = function(a, b) {
        a.g && a.g.ka();
        a.g = b;
        a.g.addEventListener("d", a.Ek.bind(a));
        a.g.addEventListener("a", a.Bk.bind(a));
        a.g.addEventListener("b", a.Ck.bind(a));
        a.g.addEventListener("c", a.Dk.bind(a))
    };
    nd = function(a, b) {
        _.lc(jd, "IpcChannel " + b);
        b = new md(window.cast.receiver.ma.Ad, window.cast.receiver.ma.Ab, JSON.stringify({
            type: b
        }));
        b.target = a;
        a.h.dispatchEvent(b)
    };
    md = function(a, b, c) {
        _.Ab.call(this, a);
        this.senderId = b;
        this.data = c
    };
    od = function(a) {
        return Ra(a, "text/") || "application/ttml+xml" === a
    };
    pd = function(a) {
        if (!a) return 100;
        switch (a.code) {
            case window.MediaError.MEDIA_ERR_ABORTED:
                return 101;
            case window.MediaError.MEDIA_ERR_NETWORK:
                return 103;
            case window.MediaError.MEDIA_ERR_DECODE:
                return 102;
            case window.MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                return 104;
            default:
                return 100
        }
    };
    qd = function() {
        this.contentId = "";
        this.contentUrl = void 0;
        this.streamType = "NONE";
        this.contentType = "";
        this.userActionStates = this.vmapAdsRequest = this.hlsVideoSegmentFormat = this.hlsSegmentFormat = this.breakClips = this.breaks = this.customData = this.textTrackStyle = this.tracks = this.startAbsoluteTime = this.duration = this.entity = this.metadata = void 0
    };
    rd = function() {
        this.repeatMode = this.description = this.name = this.queueType = this.entity = this.id = void 0;
        this.shuffle = !1;
        this.containerMetadata = this.startTime = this.startIndex = this.items = void 0
    };
    td = function() {
        this.muted = this.level = void 0
    };
    ud = function(a, b, c) {
        this.width = a;
        this.height = b;
        this.hdrType = c
    };
    vd = function(a) {
        this.playerState = "LOADING";
        this.media = a
    };
    wd = function(a, b) {
        this.trackId = a;
        this.trackContentType = this.trackContentId = void 0;
        this.type = b;
        this.customData = this.subtype = this.language = this.name = void 0
    };
    xd = function() {
        this.textTrackStyle = this.language = this.activeTrackIds = this.tracks = void 0
    };
    yd = function() {
        this.type = "QUEUE_CHANGE";
        this.sequenceNumber = this.insertBefore = this.itemIds = this.changeType = this.requestId = void 0
    };
    zd = function() {
        this.type = "QUEUE_ITEMS";
        this.items = this.requestId = void 0
    };
    Ad = function() {
        this.type = "QUEUE_ITEM_IDS";
        this.itemIds = this.requestId = void 0
    };
    Bd = function(a, b) {
        this.currentBreakTime = a;
        this.currentBreakClipTime = b;
        this.whenSkippable = this.breakClipId = this.breakId = void 0
    };
    Cd = function(a, b, c, d) {
        _.xb.call(this);
        this.h = a;
        this.C = b;
        this.D = !1;
        this.J = [];
        this.o = d || "STRING";
        this.w = new _.ec;
        this.l = null;
        this.G = this.ml;
        this.L = this.Ok;
        this.g = {};
        a = _.n(c);
        for (b = a.next(); !b.done; b = a.next()) this.g[b.value] = null;
        this.I = this.Xh.bind(this);
        this.C.addEventListener(this.h, this.I)
    };
    Dd = function(a, b, c, d) {
        a.Xh(new md(b, c, d))
    };
    Ed = function(a, b) {
        a.J.push(b)
    };
    Fd = function(a, b) {
        b.target = a;
        return a.w.dispatchEvent(b)
    };
    Gd = function(a, b, c) {
        _.Ab.call(this, a);
        this.senderId = b;
        this.data = c
    };
    _.Hd = function(a, b) {
        this.h = {};
        this.g = [];
        this.l = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof _.Hd)
                for (c = a.nb(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    _.Kd = function(a, b) {
        _.Id(a.h, b) && (delete a.h[b], a.l--, a.g.length > 2 * a.l && Jd(a))
    };
    Jd = function(a) {
        if (a.l != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length;) {
                var d = a.g[b];
                _.Id(a.h, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.l != a.g.length) {
            var e = {};
            for (c = b = 0; b < a.g.length;) d = a.g[b], _.Id(e, d) || (a.g[c++] = d, e[d] = 1), b++;
            a.g.length = c
        }
    };
    _.Id = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    Nd = function() {
        this.l = _.Ld.H();
        this.w = 0;
        this.h = null;
        this.g = new _.Hd;
        this.C = this.F.bind(this);
        this.o = Md(this.l, window.cast.receiver.cc.nj, "JSON");
        this.o.l = this.B.bind(this);
        for (var a = _.n([window.cast.receiver.Bb.Mb, window.cast.receiver.media.Qa]), b = a.next(); !b.done; b = a.next())(b = this.l.g[b.value] || null) && Ed(b, this.C)
    };
    Qd = function(a, b, c, d, e, f) {
        _.C(Od, b);
        a.o.send(c, new Pd(d, e || "INJECT_ERROR", _.r(f) ? JSON.stringify(f) : void 0));
        "WRAPPED_ERROR" == e ? window.cast.receiver.Ka.Jf(f && f.code || "") : window.cast.receiver.Ka.Jf("INJECT_ERROR")
    };
    Sd = function(a, b, c, d) {
        a.o.send(b, new Rd(c, d));
        window.cast.receiver.Ka.Jf("SUCCESS")
    };
    Td = function(a, b, c) {
        this.type = a;
        this.requestId = b;
        this.data = c
    };
    Rd = function(a, b) {
        Td.call(this, "SUCCESS", a, b)
    };
    Pd = function(a, b, c) {
        Td.call(this, "ERROR", a, c);
        this.code = b
    };
    Ud = function() {
        this.g = (0, _.J)()
    };
    Wd = function(a) {
        this.o = a || "";
        Vd || (Vd = new Ud);
        this.w = Vd
    };
    Xd = function(a) {
        return 10 > a ? "0" + a : String(a)
    };
    Yd = function(a, b) {
        a = (a.l - b) / 1E3;
        b = a.toFixed(3);
        var c = 0;
        if (1 > a) c = 2;
        else
            for (; 100 > a;) c++, a *= 10;
        for (; 0 < c--;) b = " " + b;
        return b
    };
    Zd = function(a) {
        Wd.call(this, a)
    };
    $d = function() {
        this.w = (0, _.za)(this.l, this);
        this.g = new Zd;
        this.g.h = !1;
        this.g.l = !1;
        this.h = this.g.g = !1;
        this.o = {}
    };
    be = function() {
        var a = ae;
        if (1 != a.h) {
            wb();
            var b = tb;
            var c = a.w;
            b.g || (b.g = []);
            b.g.push(c);
            a.h = !0
        }
    };
    ce = function(a, b, c) {
        if (a[b]) a[b](c);
        else a.log(c)
    };
    _.Ld = function() {
        _.xb.call(this);
        ae || (ae = new $d);
        ae && be();
        this.h = _.eb(de);
        this.T = !1;
        this.L = new ld;
        this.l = {};
        this.J = new _.ec;
        this.w = new Cd(window.cast.receiver.ma.Ad, this.L, _.ab(this.l), "JSON");
        _.yb(this, _.Aa(_.zb, this.w));
        this.o = this.P = null;
        this.ca = !1;
        this.D = this.G = null;
        this.M = !0;
        this.C = "notstarted";
        this.ja = null;
        this.g = {};
        this.U = this.aa = this.X = this.V = null;
        this.ga = !1;
        this.w.addEventListener(window.cast.receiver.ma.Ab, this.pn.bind(this));
        _.Ob(window, "unload", this.Wf, !1, this);
        _.Ob(window.document, "visibilitychange",
            this.Uh, !1, this);
        gc(ee, fe, "Version: " + window.cast.receiver.VERSION + "." + window.cast.receiver.uj);
        ge && ge(this);
        this.ha = Qc();
        this.I = Qc();
        var a = window.cast.receiver.platform.gb("device-capabilities");
        a && he(this, a)
    };
    ie = function(a) {
        var b = a.toLocaleLowerCase();
        return ["com.vizio.vue", "com.vizio.smartcast"].some(function(a) {
            return b.includes(a)
        })
    };
    je = function(a, b, c) {
        var d = {
            type: "setappstate"
        };
        void 0 != b && (d.statusText = b);
        void 0 != c && (d.dialData = c);
        a.w.send(window.cast.receiver.ma.Ab, d)
    };
    Md = function(a, b, c) {
        if (b == window.cast.receiver.ma.Ad) throw Error("Protected namespace");
        if (0 != b.lastIndexOf(window.cast.receiver.ma.Qc, 0)) throw Error("Invalid namespace prefix");
        if (!a.g[b]) {
            if (a.ca) throw Error("New namespaces can not be requested after start has been called");
            a.g[b] = new Cd(b, a.L, _.ab(a.l), c);
            _.yb(a, _.Aa(_.zb, a.g[b]))
        }
        if (c && a.g[b].o != c) throw Error("Invalid messageType for the namespace");
        return a.g[b]
    };
    he = function(a, b) {
        a.o = b ? _.eb(b) : {};
        window.cast.receiver.platform.wh() && (a.o.hasOwnProperty("is_hdr_supported") || (a.o.is_hdr_supported = window.cast.receiver.platform.canDisplayType("video/mp4; codecs=hev1.2.4.L153.B0; eotf=smpte2084")), a.o.hasOwnProperty("is_dv_supported") || (a.o.is_dv_supported = window.cast.receiver.platform.canDisplayType("video/mp4; codecs=dvhe.04.06")))
    };
    me = function(a, b) {
        b == a.G ? _.F(ee, "Ignoring visibility changed event, state is already " + b) : (_.F(ee, "Dispatching visibility changed event " + b), a.G = b, b = new ke(0 != b), a.aa && a.aa(b), le(a, b))
    };
    ne = function(a, b) {
        window.cast.receiver.platform.setTouchInputSupport(b).then(function(c) {
            b ? a.I.resolve("touch-optimized") : c && c.displayControls ? a.I.resolve("non-touch-optimized") : a.I.resolve("no-controls")
        }, function() {
            a.I.resolve("no-controls")
        });
        a.ga = !0
    };
    pe = function(a) {
        var b = Qc();
        a.ha.g.then(function() {
            a.o && a.o.touch_input_supported ? b.resolve(!0) : b.resolve(!1)
        });
        return b.g
    };
    qe = function(a) {
        var b = Qc();
        pe(a).then(function(c) {
            a.I.g.then(function(a) {
                c || (a = "no-controls");
                b.resolve(a)
            })
        });
        return b.g
    };
    re = function(a) {
        if (!a.N) return _.C(ee, "No System Version"), !1;
        var b = ["1", "11"];
        if (!b.length) return _.C(ee, "Version provided is not valid: 1.11"), !1;
        var c = a.N.split(".");
        if (!c.length) return _.C(ee, "System Version format is not valid " + a.N), !1;
        for (var d = 0; d < b.length; d++) {
            var e = (0, window.parseInt)(b[d], 10);
            if ((0, window.isNaN)(e)) return _.C(ee, "Version is not numeric: 1.11"), !1;
            var f = c.length > d ? (0, window.parseInt)(c[d], 10) : 0;
            if ((0, window.isNaN)(f)) return _.C(ee, "System Version is not numeric: " + a.N), !1;
            if (e > f) return !1
        }
        return !0
    };
    le = function(a, b) {
        b.target = a;
        var c = !1;
        try {
            c = a.J.dispatchEvent(b)
        } catch (d) {
            window.setTimeout(function() {
                throw d;
            }, 0)
        }
        return c
    };
    se = function(a, b) {
        _.Ab.call(this, a);
        this.data = b
    };
    te = function(a, b, c) {
        se.call(this, "senderdisconnected", a);
        this.senderId = a;
        this.userAgent = b;
        this.reason = c
    };
    ue = function(a, b) {
        se.call(this, "senderconnected", a);
        this.senderId = a;
        this.userAgent = b
    };
    ke = function(a) {
        se.call(this, "visibilitychanged", a);
        this.isVisible = a
    };
    ve = function(a) {
        se.call(this, "standbychanged", null);
        this.isStandby = a
    };
    we = function(a) {
        se.call(this, "systemvolumechanged", a);
        this.data = a
    };
    xe = function(a) {
        se.call(this, "ready", a);
        this.data = a
    };
    ye = function() {
        se.call(this, "shutdown", null)
    };
    ze = function(a) {
        se.call(this, "maxvideoresolutionchanged", null);
        this.height = a
    };
    Ae = function() {
        this.g = _.Ld.H();
        this.h = Md(this.g, "urn:x-cast:com.google.cast.broadcast", "JSON");
        this.h.l = this.l.bind(this)
    };
    Be = function(a) {
        this.element = a
    };
    Ce = function(a, b) {
        a.element.setAttribute("aria-disabled", String(b))
    };
    De = function(a, b, c) {
        c = void 0 === c ? null : c;
        var d = window.document.createElement("dg-ripple"),
            e = window.document.createElement("img");
        e.setAttribute("role", "presentation");
        e.classList.add("btn-icon");
        var f = window.document.createElement("div");
        f.appendChild(d);
        f.appendChild(e);
        f.className = "btn";
        c && f.classList.add(c);
        f.src = "";
        f.title = b;
        f.setAttribute("role", "button");
        f.addEventListener("click", a);
        return f
    };
    Fe = function() {
        this.g = this.G = this.F = this.D = this.C = this.o = this.w = null;
        this.B = _.Ld.H();
        this.h = Md(this.B, Ee, "JSON");
        this.h.l = this.I.bind(this);
        this.l = new _.Hd
    };
    Ie = function(a, b, c, d) {
        _.H().then(function() {
            return d(c)
        }).then(function(d) {
            d = Ge(c, d);
            "ERROR" === d.type && a.g && a.g(d);
            a.h.send(b, d)
        }, function(d) {
            d && "ERROR" == d.type ? (d = Ge(c, d), a.g && a.g(d), a.h.send(b, d)) : He(a, "Got a rejected promise " + JSON.stringify(d), b, c, "APP_ERROR")
        })
    };
    Le = function(a, b, c) {
        _.C(Je, a);
        a = new Ke(c);
        a.requestId = b.requestId;
        return a
    };
    Ge = function(a, b) {
        if (!b) return Le("No response data", a, "APP_ERROR");
        switch (b.type) {
            case "SUCCESS":
            case "ERROR":
                return b.requestId = a.requestId, b
        }
        return Le("Invalid response data " + JSON.stringify(b), a, "APP_ERROR")
    };
    He = function(a, b, c, d, e) {
        var f = Le(b, d, e);
        a.g && a.g(f);
        a.h.send(c, Le(b, d, e))
    };
    Me = function(a, b, c) {
        if (b) {
            var d = a.l.get(b);
            d ? (_.Kd(a.l, b), d(c)) : _.E(Je, "No matching request for response " + JSON.stringify(c))
        }
    };
    Ne = function(a) {
        this.type = a
    };
    Oe = function() {
        this.type = "REFRESH_CREDENTIALS"
    };
    Pe = function(a, b) {
        this.type = "PLAY_STRING";
        this.stringId = a;
        this.arguments = b
    };
    Qe = function() {
        this.type = "USER_ACTION"
    };
    Re = function(a) {
        this.type = a
    };
    Se = function(a) {
        this.type = "SUCCESS";
        this.status = a
    };
    Ke = function(a, b) {
        this.type = "ERROR";
        this.code = a;
        this.reason = b
    };
    Ve = function(a) {
        if (!Te.test(a)) throw Error("'" + a + "' is not a valid alpha hex color");
        5 == a.length && (a = a.replace(Ue, "#$1$1$2$2$3$3$4$4"));
        a = a.toLowerCase();
        return [(0, window.parseInt)(a.substr(1, 2), 16), (0, window.parseInt)(a.substr(3, 2), 16), (0, window.parseInt)(a.substr(5, 2), 16), (0, window.parseInt)(a.substr(7, 2), 16) / 255]
    };
    We = function(a) {
        var b = a.slice(0);
        b[3] = Math.round(1E3 * a[3]) / 1E3;
        return "rgba(" + b.join(",") + ")"
    };
    bf = function(a, b, c, d) {
        _.xb.call(this);
        this.g = a;
        this.l = this.o = null;
        for (a = this.g; a.parentNode;) a = a.parentNode;
        this.D = 0 > a.toString().toLowerCase().indexOf("shadow") ? window.document.head : a;
        this.h = [];
        this.C = !1;
        this.w = "cast-captions-" + Math.floor(1E6 * Math.random()).toString();
        this.I = "[" + this.w + '="true"]::cue ';
        this.J = new RegExp(/^[\.'":%,;\s\-0-9a-z]+$/i);
        this.G = void 0;
        Xe(this, b);
        Ye(this);
        Ze(this);
        d && $e(this, d);
        af(this, c)
    };
    cf = function(a, b) {
        a = _.n(a.h);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = c.track;
            b(c) ? d.mode = "showing" : (d.mode = "showing", d.mode = "disabled")
        }
    };
    df = function(a) {
        return a.h.map(function(a) {
            return (0, window.parseInt)(a.id, 10)
        })
    };
    af = function(a, b) {
        cf(a, function(a) {
            return _.Ia(b, (0, window.parseInt)(a.id, 10))
        })
    };
    ef = function(a, b) {
        cf(a, function(a) {
            return window.cast.receiver.Bc(b, a.srclang)
        })
    };
    ff = function(a) {
        var b = [];
        a = _.n(a.h);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, "showing" == c.track.mode && b.push((0, window.parseInt)(c.id, 10));
        return b
    };
    Xe = function(a, b) {
        b = _.n(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = c.trackContentId;
            if ("TEXT" == c.type && d) {
                var e = c.trackContentType;
                if (Sa(d, "vtt") || _.r(e) && 0 == Qa(e, "text/vtt")) d = window.document.createElement("track"), d.src = c.trackContentId, d.id = c.trackId, d.label = c.name, d.srclang = c.language, d.kind = (c.subtype || "CAPTIONS").toLowerCase(), a.h.push(d)
            }
        }
        gf(a);
        0 < a.h.length && !a.g.getAttribute("crossorigin") && (a.g.setAttribute("crossorigin", "anonymous"), a.C = !0);
        b = _.n(a.h);
        for (c = b.next(); !c.done; c =
            b.next()) c = c.value, a.g.contains(c) || a.g.appendChild(c)
    };
    Ye = function(a) {
        a.l && (a.g.removeAttribute(a.w), a.D.removeChild(a.l), a.o = null)
    };
    gf = function(a) {
        a.C && (a.g.removeAttribute("crossorigin"), a.C = !1)
    };
    jf = function(a, b, c) {
        1 == c || a.J.test(b) ? a.o.insertRule(a.I + "{ " + b + " }", a.o.cssRules.length) : _.E(hf, "Invalid css cue: " + b)
    };
    Ze = function(a) {
        var b = window.document.createElement("style");
        b.type = "text/css";
        a.D.appendChild(b);
        b.appendChild(window.document.createTextNode(""));
        a.l = b;
        a.o = a.l.sheet;
        jf(a, "font-size: 4.1vh;");
        jf(a, "font-family: monospace;");
        jf(a, "font-style: normal;");
        jf(a, "font-weight: normal;");
        jf(a, "background-color: black;");
        jf(a, "color: white;");
        a.g.setAttribute(a.w, !0)
    };
    kf = function(a, b) {
        try {
            var c = We(Ve(a))
        } catch (d) {
            _.E(hf, "Invalid color: " + a)
        }
        if (c) switch (a = "rgba(204, 204, 204, " + (0, window.parseInt)(a.substring(7, 9), 16) + ")", b) {
            case "OUTLINE":
                return "text-shadow: 0 0 4px " + c + ", 0 0 4px " + c + ", 0 0 4px " + c + ", 0 0 4px " + c + ";";
            case "DROP_SHADOW":
                return "text-shadow: 0px 2px 3px " + c + ", 0px 2px 4px " + c + ", 0px 2px 5px " + c + ";";
            case "RAISED":
                return "text-shadow: 1px 1px " + c + ", 2px 2px " + c + ", 3px 3px " + c + ";";
            case "DEPRESSED":
                return "text-shadow: 1px 1px " + a + ", 0 1px " + a + ", -1px -1px " +
                    c + ", 0 -1px " + c + ";"
        }
        return ""
    };
    lf = function(a) {
        switch (a) {
            case "BOLD":
                return "font-weight: bold;";
            case "BOLD_ITALIC":
                return "font-style: italic; font-weight: bold;";
            case "ITALIC":
                return "font-style: italic;"
        }
        return "font-style: normal;"
    };
    $e = function(a, b) {
        a.G = b;
        if (_.r(b.foregroundColor)) try {
            var c = We(Ve(b.foregroundColor));
            jf(a, "color: " + c + ";", !0)
        } catch (k) {
            _.E(hf, "Invalid color: " + b.foregroundColor)
        }
        if (_.r(b.backgroundColor)) try {
            var d = We(Ve(b.backgroundColor));
            jf(a, "background-color: " + d + ";", !0)
        } catch (k) {
            _.E(hf, "Invalid color: " + b.backgroundColor)
        }
        _.r(b.fontScale) && jf(a, "font-size: " + 100 * b.fontScale + "%;");
        if (_.r(b.fontFamily) || _.r(b.fontGenericFamily)) {
            c = b.fontFamily;
            d = b.fontGenericFamily;
            var e = "font-family: ",
                f = "";
            _.r(c) && (e += '"' +
                c + '"', f = ", ");
            if (_.r(d)) {
                switch (d) {
                    case "SANS_SERIF":
                        var g = '"Droid Sans", sans-serif';
                        break;
                    case "MONOSPACED_SANS_SERIF":
                        g = '"Droid Sans Mono", monospace';
                        break;
                    case "SERIF":
                        g = '"Droid Serif", serif';
                        break;
                    case "MONOSPACED_SERIF":
                        g = '"Cutive Mono", serif-monospace';
                        break;
                    case "CASUAL":
                        g = '"Short Stack", casual';
                        break;
                    case "CURSIVE":
                        g = "Quintessential, cursive";
                        break;
                    case "SMALL_CAPITALS":
                        g = '"Alegreya Sans SC", sans-serif-smallcaps'
                }
                e += f + g
            }
            jf(a, e + ";")
        }
        _.r(b.fontStyle) && jf(a, lf(b.fontStyle));
        _.r(b.edgeType) &&
            (g = _.r(b.foregroundColor) ? b.foregroundColor : "#FFFFFFFF", b = _.r(b.edgeColor) ? kf(b.edgeColor, b.edgeType) : kf(g, b.edgeType), jf(a, b, !0))
    };
    mf = function(a) {
        this.W = K;
        this.g = a;
        this.I = this.D = this.G = _.x;
        this.w = 0;
        this.o = this.C = null;
        this.J = 0;
        this.l = this.h = null;
        this.B = !1;
        this.F = !0;
        _.Ob(this.g, "error", this.zk, !1, this);
        _.Ob(this.g, "ended", this.Zg, !1, this);
        _.Ob(this.g, "loadedmetadata", this.Ak, !1, this);
        _.F(this.W, "Using default Player")
    };
    nf = function(a) {
        var b = a.g.duration;
        if ((0, window.isNaN)(b) || null == a.o) return b;
        if (null != a.C) return a.C;
        a.C = 0 <= a.o ? Math.min(a.J + a.o, b) : Math.max(b + a.o, a.w);
        return a.C
    };
    of = function(a) {
        null != a.o && (Zb(a.g, "timeupdate", a.Vh, !1, a), a.C = null, a.o = null)
    };
    pf = function(a) {
        if (null == a.o) return !1;
        var b = nf(a);
        return (0, window.isNaN)(b) ? !1 : a.g.currentTime >= b ? (a.Zg(), !0) : !1
    };
    qf = function(a, b) {
        a.l = b ? b.slice(0) : a.l;
        a.l = a.l || [];
        if (a.h) {
            var c = df(a.h);
            a.l = a.l.filter(function(a) {
                return !c.includes(a)
            }).concat(ff(a.h))
        }
        0 == a.l.length && (a.l = null)
    };
    rf = function(a) {
        this.itemId = a;
        this.customData = this.activeTrackIds = this.preloadTime = this.playbackDuration = this.startTime = this.autoplay = this.media = void 0
    };
    sf = function(a, b) {
        var c = new rf(a.itemId);
        c.autoplay = a.autoplay;
        c.startTime = a.startTime;
        c.playbackDuration = a.playbackDuration;
        c.preloadTime = a.preloadTime;
        c.activeTrackIds = a.activeTrackIds;
        c.customData = a.customData;
        if (void 0 === b || b) c.media = a.media;
        return c
    };
    tf = function(a) {
        this.g = void 0;
        this.o = "REPEAT_OFF";
        this.C = this.h = 0;
        this.w = this.l = void 0;
        this.D = a;
        this.B = 1;
        this.F = 0
    };
    uf = function(a) {
        a.F = 0;
        a.g.forEach(function(b, c) {
            b.orderId = c;
            a.F++
        })
    };
    vf = function(a, b) {
        a.w && (a.w.shuffle = b)
    };
    wf = function(a) {
        return !(!a.w || !a.w.shuffle)
    };
    zf = function(a, b) {
        if (a.l) return window.Promise.resolve(a.l.initialize(b)).then(function(c) {
            c ? xf(a, c, !0, !0) : yf(a, b)
        });
        yf(a, b)
    };
    yf = function(a, b) {
        var c = b.queueData;
        c && c.items ? xf(a, c) : (c = new rf(a.D()), c.media = b.media, c.autoplay = b.autoplay, c.activeTrackIds = b.activeTrackIds, c.customData = b.customData, a.g = [c]);
        uf(a)
    };
    xf = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        Af(a, b, void 0 === c ? !1 : c) || _.E(Bf, "The passed in queueData is not completely valid: " + b);
        a.w = b;
        d && b.items && Cf(b.items);
        a.g = b.items;
        a.o = b.repeatMode || a.o;
        a.h = b.startIndex || 0;
        a.C = b.startTime || 0
    };
    Cf = function(a) {
        a = _.n(a);
        for (var b = a.next(); !b.done; b = a.next()) b = b.value, b.preloadTime = null != b.preloadTime ? b.preloadTime : 0
    };
    Df = function(a, b, c) {
        var d = new zd;
        d.requestId = b;
        d.items = [];
        if (a.g)
            for (b = _.n(c), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                for (var e = _.n(a.g), f = e.next(); !f.done; f = e.next())
                    if (f = f.value, f.itemId == c) {
                        d.items.push(f);
                        break
                    }
                _.E(Bf, "Unknown item id: " + c)
            }
        return d
    };
    Ef = function(a, b) {
        var c = new Ad;
        c.requestId = b;
        c.itemIds = a.Vb().map(function(a) {
            return a.itemId
        });
        return c
    };
    Gf = function(a, b) {
        return new window.Promise(function(c, d) {
            var e = void 0,
                f = a.h + b;
            0 <= f && f < a.g.length ? (e = new yd, e.changeType = "NO_CHANGE", c(e)) : (f = 0 > a.h ? void 0 : a.g[a.h].itemId, 1 == b ? e = a.l.nextItems.bind(a.l, f) : -1 == b ? e = a.l.prevItems.bind(a.l, f) : 1 < b ? e = a.l.fetchItems.bind(a.l, f, b, 0) : -1 > b ? e = a.l.fetchItems.bind(a.l, f, 0, -b) : d("Should not be requesting more items on the current item"), window.Promise.resolve(e()).then(function(d) {
                Cf(d);
                var e = new yd;
                if (0 < d.length) {
                    _.F(Bf, "Fetched more items " + d);
                    var f = 0 <= b ? void 0 :
                        a.g[0].itemId;
                    Ff(a, d, f);
                    e.changeType = "INSERT";
                    e.itemIds = d.map(function(a) {
                        return a.itemId
                    });
                    e.insertBefore = f;
                    e.sequenceNumber = a.B++
                } else e.changeType = "NO_CHANGE", e.sequenceNumber = a.B - 1;
                c(e)
            }, function() {
                return d("Failed to get more items from the queue.")
            }))
        })
    };
    Hf = function(a, b) {
        a.o = b;
        a.w && (a.w.repeatMode = b)
    };
    If = function(a, b) {
        for (var c = [], d = 0; d < b.length; d++)
            for (var e = 0; e < a.g.length; e++)
                if (b[d] == a.g[e].itemId) {
                    c.push(b[d]);
                    break
                }
        return c
    };
    Jf = function(a, b) {
        for (var c = 0; c < a.g.length; c++)
            if (b == a.g[c].itemId) return c;
        return -1
    };
    Kf = function(a) {
        return "REPEAT_ALL_AND_SHUFFLE" == a.o || "REPEAT_ALL" == a.o
    };
    Mf = function(a, b) {
        b = Jf(a, b);
        if (-1 == b || a.h == b) return !1;
        Lf(a, b);
        return !0
    };
    Of = function(a, b, c) {
        if (!Nf(a, "reorderItems") && b && 0 != b.length) {
            var d = a.g[a.h].itemId,
                e = _.r(c) ? c : -1;
            c = a.g.length - b.length;
            for (var f = [], g = -1 == e ? !0 : !1, k = 0; k < a.g.length; k++) _.Ia(b, a.g[k].itemId) ? g || a.g[k].itemId != b[0] || (c = f.length) : (f.push(a.g[k]), e == a.g[k].itemId && (c = f.length - 1, g = !0));
            e = [];
            for (g = 0; g < b.length; g++) {
                a: {
                    for (k = 0; k < a.g.length; k++)
                        if (b[g] == a.g[k].itemId) {
                            k = a.g[k];
                            break a
                        }
                    k = null
                }
                e.push(k)
            }
            _.Aa(Na, f, c, 0).apply(null, e);
            a.g = f;
            _.r(d) && Mf(a, d);
            wf(a) || uf(a)
        }
    };
    Ff = function(a, b, c, d) {
        for (var e = _.n(b), f = e.next(); !f.done; f = e.next()) f = f.value, _.u(f.itemId) || (f.itemId = a.D());
        e = _.u(c) ? Jf(a, c) : a.g.length;
        e = -1 == e ? a.g.length : e;
        _.Aa(Na, a.g, e, 0).apply(null, b);
        _.r(d) ? a.h = e + d : a.h >= e && (a.h += b.length);
        if (a.l) a.l.onItemsInserted(b, c);
        wf(a) ? b.forEach(function(b) {
            b.orderId = a.F;
            a.F++
        }) : uf(a);
        return b.map(function(a) {
            return a.itemId
        })
    };
    Nf = function(a, b) {
        return a.l ? (b && _.E(Bf, b + " not supported when external queue is provided."), !0) : !1
    };
    Qf = function(a, b, c) {
        if (0 > a.h) return "QUEUE_ENDED";
        b = a.h + b;
        var d = !1;
        b >= a.g.length ? (b = Kf(a) ? b % a.g.length : -1, d = !0) : 0 > b && (b = Kf(a) ? a.g.length + (b + 1) % a.g.length - 1 : 0, d = !0);
        c && Lf(a, b);
        return -1 == b ? "QUEUE_ENDED" : d ? ("REPEAT_ALL_AND_SHUFFLE" === a.o && vf(a, !0), wf(a) ? (Pf(a), "QUEUE_SHUFFLED") : "QUEUE_LOOP") : "QUEUE_ACTIVE"
    };
    Pf = function(a) {
        var b = a.g.length;
        if (!(3 > a.g.length))
            for (vf(a, !0); 0 < b;) {
                var c = Math.floor(Math.random() * b);
                --b;
                var d = a.g[c];
                a.g[c] = a.g[b];
                a.g[b] = d
            }
    };
    Sf = function(a) {
        3 > a.g.length || (vf(a, !1), a.g.sort(function(a, c) {
            return a.orderId - c.orderId
        }))
    };
    Af = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        if (_.r(b.startIndex) && (!_.u(b.startIndex) || 0 > b.startIndex)) return _.C(Bf, "Invalid startIndex " + b.startIndex), !1;
        var d = (b.startIndex || 0) + 1;
        if (!b.items || b.items.length < d) return _.C(Bf, "Invalid number of items"), !1;
        if (b.repeatMode && !window.cast.receiver.media.zh(b.repeatMode)) return _.C(Bf, "Invalid repeatMode"), !1;
        for (d = 0; d < b.items.length; d++)
            if (b.items[d].media) {
                if (!c && _.r(b.items[d].itemId)) return _.C(Bf, "ItemId should not be defined, element at index: " + d), !1;
                b.items[d].itemId = _.u(b.items[d].itemId) ? b.items[d].itemId : a.D()
            } else return _.C(Bf, "Media is mandatory, missing in element at index: " + d), !1;
        return !0
    };
    Lf = function(a, b) {
        a.h = b;
        if (a.l && 0 <= b && b < a.g.length) a.l.onCurrentItemIdChanged(a.g[b].itemId)
    };
    Tf = function(a) {
        return a.l && a.g && 0 < a.g.length && a.h == a.g.length - 1 ? Gf(a, 1) : window.Promise.reject("No need to prefetch more for now.")
    };
    Uf = function(a) {
        var b = this;
        this.l = a;
        this.g = null;
        this.h = "sdr";
        this.o = function() {
            b.l()
        }
    };
    Vf = function(a) {
        return a.g ? a.g.videoWidth : 0
    };
    Wf = function(a) {
        return a.g ? a.g.videoHeight : 0
    };
    Xf = function(a) {
        return !!a && "function" === typeof a.then
    };
    Yf = function() {
        this.g = [];
        this.h = []
    };
    Zf = function(a) {
        0 == a.g.length && (a.g = a.h, a.g.reverse(), a.h = []);
        return a.g.pop()
    };
    $f = function(a) {
        return 0 == a.g.length && 0 == a.h.length
    };
    ag = function(a, b, c) {
        var d = this;
        this.Aa = _.Ld.H();
        Ae.H();
        this.T = c || "local";
        window.cast.receiver.Ka.Dn(this.T);
        this.w = Md(this.Aa, window.cast.receiver.media.Qa, "JSON");
        this.D = 0;
        this.X = this.J = null;
        this.I = 1;
        this.Tb = b || 12303;
        this.$h = this.Zd = this.G = this.F = this.g = this.l = null;
        this.C = !1;
        this.lb = void 0;
        this.B = this.o = null;
        this.ga = !0;
        this.V = null;
        this.va = this.Fk.bind(this);
        this.h = new tf(this.jh.bind(this));
        this.U = !1;
        this.L = null;
        this.xn = 1;
        this.oa = -1;
        this.ha = new Yf;
        this.N = !1;
        this.M = [];
        this.$e = this.Nk;
        this.Ta = null;
        this.ld = this.Yk;
        this.Za = this.bl;
        this.Rh = this.al;
        this.$a = this.hl;
        this.sd = null;
        this.re = this.il;
        this.Ya = this.$k;
        this.Kb = this.ll;
        this.se = this.jl;
        this.ie = this.Qk;
        this.he = this.Pk;
        this.oe = this.el;
        this.ne = this.dl;
        this.qd = this.eh;
        this.pe = this.fl;
        this.qe = this.gl;
        this.La = null;
        this.Uf = this.Zk;
        this.Gh = this.Xk;
        this.Rb = this.Rk;
        this.ja = this.cl;
        this.ae = _.x;
        this.Pd = this.Sk;
        this.ca = this.md = _.x;
        this.pd = this.od = null;
        this.Ah = this.Tk;
        this.Bh = this.Uk;
        this.Ch = this.Vk;
        this.Sh = this.kl;
        this.Ue = this.kd = null;
        this.je = this.Wk;
        this.rd =
            this.td = null;
        this.aa = new Uf(this.$.bind(this, !1));
        this.Aa.U = function(a) {
            var b = d.aa;
            b.h = a;
            b.l()
        };
        this.Ea = new _.ec;
        this.bb = this.ug = this.P = !1;
        this.ib(a);
        this.w.l = this.Tf.bind(this);
        this.V = bd(this.va, 1E3)
    };
    bg = function(a) {
        return a.g ? a.g.activeTrackIds || null : null
    };
    cg = function(a) {
        return _.r(a.h.g) ? a.h : null
    };
    dg = function(a) {
        for (var b = 0; b < a.length; b++)
            if (!_.r(a[b].trackId) || !_.r(a[b].type)) return !1;
        return !0
    };
    eg = function(a, b) {
        if (!b || 0 == b.length) return !0;
        if (!a || b.length > a.length) return _.C(K, "Too many track IDs"), !1;
        for (var c = 0, d = 0, e = 0; e < b.length; e++) {
            for (var f = !1, g = 0; g < a.length; g++)
                if (b[e] == a[g].trackId) {
                    f = !0;
                    break
                }
            if (!f) return _.C(K, "Track ID does not exist: " + b[e]), !1;
            "AUDIO" == a[g].type ? d++ : "VIDEO" == a[g].type && c++;
            if (1 < d || 1 < c) return _.C(K, "Maximum one active video and one active audio track supported"), !1
        }
        return !0
    };
    fg = function(a, b, c) {
        c.mediaSessionId = a.D;
        window.cast.receiver.Ka.Lf(c.type, b);
        a.Tf(new Gd("message", b, c))
    };
    gg = function(a, b, c, d) {
        b && (_.C(K, "Sending error: " + b.type + " " + b.reason), a.md && c == a.T ? (b.requestId = d, a.md(b)) : a.za(c, d, b.type, b.reason))
    };
    hg = function(a) {
        if (!a.g) return "IDLE";
        var b = a.l.getState();
        return "PLAYING" == b && !a.ug && a.C ? "BUFFERING" : b
    };
    jg = function(a, b, c, d) {
        function e(a) {
            a ? f.status = [a] : f = null;
            return f
        }
        var f = {
                type: "MEDIA_STATUS"
            },
            g = a.o && a.o.message.media || null;
        if (!a.g && !a.F && !g) return f.status = [], f;
        a = ig(a, b, c, void 0 === d ? !1 : d);
        return Xf(a) ? a.then(e) : e(a)
    };
    ig = function(a, b, c, d) {
        var e = !1;
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var f = a.o && a.o.message.media || null;
        if (!a.g && !a.F && !f) return window.Promise.resolve(null);
        var g = {
            mediaSessionId: a.D,
            playbackRate: a.I,
            playerState: hg(a),
            currentTime: a.l.getCurrentTimeSec(),
            supportedMediaCommands: a.Tb,
            volume: a.l.getVolume()
        };
        a.L && (g.preloadedItemId = a.L);
        var k = Vf(a.aa),
            l = Wf(a.aa);
        0 < k && 0 < l && (g.videoInfo = new ud(k, l, a.aa.h));
        if (a.g) g.activeTrackIds = a.g.activeTrackIds, b && (g.media = a.vc() || void 0, k = a.h.w) && (g.queueData = _.eb(k),
            g.queueData.items = void 0), g.currentItemId = a.g.itemId;
        else if (a.F && (b && (g.media = a.F.media || void 0), g.currentItemId = a.F.itemId, a.F = null), _.r(a.h.g) && (k = a.h.Eb())) g.loadingItemId = k.itemId;
        "IDLE" === g.playerState ? (a.B && (g.idleReason = a.B), f && (g.extendedStatus = new vd(f))) : a.B = null;
        null != c && (g.customData = c);
        _.r(a.h.g) && (d && (g.items = a.h.Vb(b, a.P && !e)), g.repeatMode = a.h.o);
        if (!a.$e) return g;
        b = a.$e(g);
        if (Xf(b)) return b.then(function(b) {
            a.bb = !!g.breakStatus;
            return b
        });
        a.bb = !!g.breakStatus;
        return b
    };
    kg = function(a) {
        null != a.X && (_.v.clearTimeout(a.X), a.X = null)
    };
    lg = function(a) {
        var b = a.l.getCurrentTimeSec();
        a.G = b;
        a.Zd = b;
        a.$h = Date.now();
        null != a.V && _.v.clearTimeout(a.V);
        a.V = bd(a.va, 1E3)
    };
    mg = function(a, b) {
        if (a.Ta) {
            b = fb(b);
            b.type = "CLOUD_STATUS";
            try {
                b = a.Ta(b)
            } catch (c) {
                _.C(K, "Cloud status handler failed. " + c);
                return
            }
            Xf(b) ? b.then(function(b) {
                a.w.send("__cloud__", b)
            }) : a.w.send("__cloud__", b)
        }
    };
    ng = function(a) {
        a.o = null;
        if (a.N)
            for (a.N = !1; !$f(a.ha) && !a.N;) a.Tf(Zf(a.ha))
    };
    rg = function(a, b, c, d, e) {
        _.F(K, "Dispatching MediaManager load event");
        _.F(K, "Load message received:" + JSON.stringify(c));
        var f = !1,
            g = e;
        c.media || c.queueData ? c.media && c.media.tracks && !dg(c.media.tracks) ? (_.C(K, "Invalid tracks information"), f = !0) : c.activeTrackIds && c.media && !eg(c.media.tracks, c.activeTrackIds) && (f = !0) : (_.C(K, "Media or QueueData is mandatory"), f = !0);
        e = c.playbackRate;
        if (_.r(e) && (!_.u(e) || .5 > e || 2 < e)) return _.C(K, "Bad value for playback rate " + e), {
            type: "INVALID_REQUEST",
            reason: "INVALID_PARAMS"
        };
        if (f) return g && g(), {
            type: "INVALID_REQUEST",
            reason: "INVALID_PARAMS"
        };
        a.o ? og(a, "LOAD_CANCELLED") : a.g && (pg(a, "INTERRUPTED", !1), g = a.$.bind(a, !0));
        a.o = {
            senderId: b,
            message: c
        };
        g && g();
        a.N = !0;
        if (d && (a.D++, a.B = null, a.U = _.r(c.queueData), d = zf(a.h, c), Xf(d))) return d.then(function() {
            a.U = !0;
            var d = a.h.Eb();
            !d || !d.media || c.media && d.media.contentId == c.media.contentId || (c.media && _.F(K, "Implementation of queueing has provided " + d.media.contentId + " as the first item whilethe original media portion of the LOAD provided " +
                c.media.contentId), c.media = d.media, c.autoplay = c.autoplay || d.autoplay, c.currentTime = c.currentTime || d.startTime || a.h.C);
            qg(a, b, c, g)
        }, function() {
            og(a, "LOAD_FAILED")
        }), null;
        qg(a, b, c, g);
        return null
    };
    qg = function(a, b, c, d) {
        a.g = fb(a.h.Eb());
        a.M = [];
        c.media = a.g.media || c.media;
        a.g.activeTrackIds = c.activeTrackIds;
        kg(a);
        a.J = c;
        if (a.ga && a.l.$g) {
            var e = a.h.C;
            a.l.$g(_.r(c.autoplay) ? c.autoplay : !0, 0 < c.currentTime ? c.currentTime : 0 < e ? e : 0, a.g.playbackDuration, a.g.startTime)
        }
        e = new sg("load", c, b);
        a.ld && (a.I = c.playbackRate ? c.playbackRate : 1, a.ld(e));
        tg(a, e);
        d || a.$(!0);
        a.L = null;
        Tf(a.h).then(function(d) {
            ug(a, d, b, c)
        }, function(a) {
            _.F(K, a)
        })
    };
    vg = function(a, b, c) {
        c = void 0 === c ? !0 : c;
        a.g && a.g.media && (a.g.activeTrackIds = b.activeTrackIds, c && (a.g.media.tracks = b.tracks, a.g.media.textTrackStyle = b.textTrackStyle), a.o || a.$(c))
    };
    og = function(a, b) {
        a.o ? (b = b || "LOAD_FAILED", a.o.senderId == a.T ? a.md && a.md({
            type: b
        }) : "" != a.o.senderId && a.za(a.o.senderId, a.o.message.requestId, b, null, void 0), ng(a)) : _.C(K, "Not sending LOAD error as there is no on going LOAD request")
    };
    wg = function(a) {
        if (a.o) {
            var b = a.o.message.requestId;
            a.$(!0, b, void 0, 0 != b || a.P);
            ng(a)
        } else _.C(K, "Not sending status as there is no on going LOAD request")
    };
    xg = function(a, b) {
        b = void 0 === b ? !1 : b;
        var c = a.h.Xc();
        _.r(a.h.g) && -1 != c && c < a.h.g.length - 1 ? a.Rb("ERROR") : (pg(a, "ERROR", b), a.o && og(a, "LOAD_FAILED"))
    };
    yg = function(a, b, c, d, e, f, g, k) {
        c = a.vm.bind(a, b, c, d, e, f, g, k);
        Nf(a.h) ? Gf(a.h, b).then(c, c) : c()
    };
    pg = function(a, b, c, d) {
        c = !_.r(c) || c;
        if (d && !c) throw Error("customData and requestId should only be provided in broadcast mode");
        a.g ? (a.h.clear(), a.l.reset(b), b && (a.B = b), a.F = a.g, a.g = null, a.M = [], c && a.$(!1, d, void 0, void 0)) : _.F(K, "Nothing to reset, Media is already null");
        a.J && (kg(a), a.X = bd(function() {
            a.J = null;
            a.X = null
        }, 9E5));
        b && "INTERRUPTED" == b && a.ae()
    };
    zg = function(a, b) {
        var c = a.g && a.g.media && a.g.media.tracks;
        if (!c || 0 == c.length) return _.C(K, "No tracks available"), null;
        c = c.filter(function(a) {
            return "TEXT" == a.type
        }).map(function(a) {
            return a.trackId
        });
        if (0 == c.length) return _.C(K, "No text tracks available"), null;
        var d = a.g.activeTrackIds || [],
            e = c.filter(function(a) {
                return 0 <= d.indexOf(a)
            });
        if (!b.enableTextTracks) {
            if (0 < e.length) return a.M = e, d.filter(function(a) {
                return 0 > e.indexOf(a)
            })
        } else if (0 == e.length) return b = d.concat(0 < a.M.length ? a.M : [c[0]]), a.M = [],
            b;
        return d
    };
    Ag = function(a) {
        if (2 > a.length) return !0;
        for (var b = 0; b < a.length; b++)
            for (var c = b + 1; c < a.length; c++)
                if (a[b] == a[c]) return _.C(K, "Duplicate itemId: " + a[b] + "at positions:" + b + " " + c), !1;
        return !0
    };
    Bg = function(a) {
        for (var b = 0; b < a.length; b++) {
            if (!_.u(a[b].itemId)) return _.C(K, "Invalid itemId at position: " + b), !1;
            for (var c = b + 1; c < a.length; c++) {
                if (!_.u(a[c].itemId)) return _.C(K, "Invalid itemId at position: " + c), !1;
                if (a[b].itemId == a[c].itemId) return _.C(K, "Duplicate itemId: " + a[b].itemId + "at positions:" + b + " " + c), !1
            }
        }
        return !0
    };
    Cg = function(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = new rf(a[c].itemId);
            d.media = a[c].media;
            d.autoplay = a[c].autoplay;
            d.startTime = a[c].startTime;
            d.playbackDuration = a[c].playbackDuration;
            d.preloadTime = a[c].preloadTime;
            d.activeTrackIds = a[c].activeTrackIds;
            d.customData = a[c].customData;
            b.push(d)
        }
        return b
    };
    Eg = function(a, b, c, d) {
        if (!b) return null;
        var e = new Dg;
        e.requestId = c || 0;
        e.mediaSessionId = a.D;
        e.type = "LOAD";
        e.autoplay = b.autoplay;
        e.currentTime = _.r(d) ? d : b.startTime;
        e.activeTrackIds = b.activeTrackIds;
        e.customData = b.customData || void 0;
        e.media = b.media;
        return e
    };
    Gg = function(a, b) {
        if (a.g.media.duration - a.l.getCurrentTimeSec() <= b || 0 == b && a.l.ee && a.l.ee()) return !0;
        if (null == a.L) return !1;
        a.L = null;
        if (!a.kd) return !1;
        b = new Fg("CANCEL_PRELOAD");
        b.requestId = 0;
        b.mediaSessionId = a.D;
        b = new sg("cancelpreload", b, "");
        _.F(K, "Sending cancel preload event: " + JSON.stringify(b));
        a.kd(b) && a.$(!1);
        return !1
    };
    Hg = function(a, b, c) {
        _.F(K, "Dispatching MediaManager queueUpdate event");
        var d = !1;
        _.r(a.h.g) ? c.items && !Bg(c.items) ? d = !0 : c.repeatMode && !window.cast.receiver.media.zh(c.repeatMode) && (_.C(K, "Invalid repeatMode"), d = !0) : (_.C(K, "Queue does not exist"), d = !0);
        if (d) return {
            type: "INVALID_REQUEST",
            reason: "INVALID_PARAMS"
        };
        if (c.items && 0 < c.items.length) {
            d = a.h;
            for (var e = c.items, f = [], g = 0; g < e.length; g++)
                for (var k = 0; k < d.g.length; k++)
                    if (e[g].itemId == d.g[k].itemId) {
                        f.push(e[g]);
                        break
                    }
            c.items = Cg(f)
        }
        b = new sg("queueupdate",
            c, b);
        a.qd && a.qd(b);
        tg(a, b);
        return null
    };
    ug = function(a, b, c, d) {
        "NO_CHANGE" == b.changeType && _.r(c) ? a.w.send(c, b) : (a.w.send("*:*", b), a.P && a.$(!0, d.requestId, d.customData, !0))
    };
    Ig = function(a, b, c, d) {
        var e = new yd;
        e.changeType = b;
        e.itemIds = c;
        null != d && (e.insertBefore = d);
        a.w.send("*:*", e)
    };
    tg = function(a, b) {
        b.target = a;
        return a.Ea.dispatchEvent(b)
    };
    sg = function(a, b, c) {
        _.Ab.call(this, a);
        this.data = b;
        this.senderId = c
    };
    Fg = function(a) {
        this.type = a;
        this.requestId = 0;
        this.customData = this.mediaSessionId = void 0
    };
    Dg = function() {
        Fg.call(this, "LOAD");
        this.media = new qd;
        this.autoplay = !1;
        this.loadOptions = this.credentialsType = this.credentials = this.queueData = this.activeTrackIds = this.playbackRate = this.currentTime = void 0
    };
    Jg = function(a) {
        Dg.call(this);
        this.type = "PRELOAD";
        this.itemId = a
    };
    Kg = function() {
        Fg.call(this, "EDIT_TRACKS_INFO");
        this.enableTextTracks = this.isSuggestedLanguage = this.textTrackStyle = this.language = this.activeTrackIds = void 0
    };
    Lg = function() {
        Fg.call(this, "SEEK");
        this.relativeTime = this.currentTime = this.resumeState = void 0
    };
    Mg = function(a) {
        Fg.call(this, "QUEUE_INSERT");
        this.currentTime = this.currentItemId = this.currentItemIndex = this.insertBefore = void 0;
        this.items = a
    };
    Ng = function() {
        Fg.call(this, "QUEUE_UPDATE");
        this.shuffle = this.repeatMode = this.items = this.jump = this.currentTime = this.currentItemId = void 0
    };
    Og = function(a) {
        Fg.call(this, "QUEUE_REMOVE");
        this.currentTime = this.currentItemId = void 0;
        this.itemIds = a
    };
    Pg = function(a) {
        Fg.call(this, "SESSION_STATE");
        this.sessionState = a
    };
    Qg = function(a) {
        this.g = a
    };
    Rg = function(a, b) {
        var c = new Lg;
        c.relativeTime = b;
        a.g.g(c)
    };
    Sg = function(a, b, c) {
        var d = new Qe;
        d.userAction = b;
        c && (d.clear = !0);
        a.g.F(d)
    };
    Ug = function() {
        var a = this;
        this.h = this.l = null;
        this.G = this.D = _.x;
        this.C = _.Ld.H();
        pe(this.C).then(function() {
            Tg(a, a.C)
        })
    };
    Tg = function(a, b) {
        a.l = b.g[window.cast.receiver.media.Qa] || null;
        if (!a.l) throw Error("CastMessageBus with type cast.receiver.media.MEDIA_NAMESPACE is not set up.");
        Ed(a.l, function(b, d, e) {
            if (e && "MEDIA_STATUS" === e.type) {
                if (d = e.status[0]) a.o != d.mediaSessionId && a.G(), a.o = d.mediaSessionId;
                a.D(d)
            }
            return "__touch_controls__" === b
        });
        a.h = b.g[window.cast.receiver.Bb.Mb] || null;
        a.h && Ed(a.h, function(a) {
            return "__touch_controls__" === a
        })
    };
    Xg = function() {
        this.C = 40;
        this.g = 1;
        this.B = 3;
        this.F = this.o = 0;
        this.N = !1;
        this.L = this.J = "";
        this.D = Vg.Hg;
        this.G = "";
        this.h = 1;
        this.w = !1;
        this.l = [];
        this.I = this.M = !1;
        var a = Vg.Xi;
        a.replace(/ /g, "\u00a0");
        var b = [0];
        this.J = Wg(this, a, b);
        for (var c = b[0], d = -1, e = 0, f = 0, g = 0, k = -1, l = a.length, p = !0; b[0] < l && p; b[0]++) switch (a.charAt(b[0])) {
            case "#":
                0 < f ? g++ : e++;
                0 <= k && 0 > d && k++;
                break;
            case "0":
                if (0 < g) throw Error('Unexpected "0" in pattern "' + a + '"');
                f++;
                0 <= k && 0 > d && k++;
                break;
            case ",":
                0 < k && this.l.push(k);
                k = 0;
                break;
            case ".":
                if (0 <= d) throw Error('Multiple decimal separators in pattern "' +
                    a + '"');
                d = e + f + g;
                break;
            case "E":
                if (this.I) throw Error('Multiple exponential symbols in pattern "' + a + '"');
                this.I = !0;
                this.F = 0;
                b[0] + 1 < l && "+" == a.charAt(b[0] + 1) && (b[0]++, this.N = !0);
                for (; b[0] + 1 < l && "0" == a.charAt(b[0] + 1);) b[0]++, this.F++;
                if (1 > e + f || 1 > this.F) throw Error('Malformed exponential pattern "' + a + '"');
                p = !1;
                break;
            default:
                b[0]--, p = !1
        }
        0 == f && 0 < e && 0 <= d && (f = d, 0 == f && f++, g = e - f, e = f - 1, f = 1);
        if (0 > d && 0 < g || 0 <= d && (d < e || d > e + f) || 0 == k) throw Error('Malformed pattern "' + a + '"');
        g = e + f + g;
        this.B = 0 <= d ? g - d : 0;
        0 <= d && (this.o = e +
            f - d, 0 > this.o && (this.o = 0));
        this.g = (0 <= d ? d : g) - e;
        this.I && (this.C = e + this.g, 0 == this.B && 0 == this.g && (this.g = 1));
        this.l.push(Math.max(0, k));
        this.M = 0 == d || d == g;
        c = b[0] - c;
        this.L = Wg(this, a, b);
        b[0] < a.length && ";" == a.charAt(b[0]) ? (b[0]++, 1 != this.h && (this.w = !0), this.D = Wg(this, a, b), b[0] += c, this.G = Wg(this, a, b)) : (this.D += this.J, this.G += this.L)
    };
    Zg = function(a, b, c, d) {
        if (a.o > a.B) throw Error("Min value must be less than max value");
        d || (d = []);
        var e = Math.pow(10, a.B),
            f = Math.round(b * e);
        (0, window.isFinite)(f) ? (b = Math.floor(f / e), e = Math.floor(f - b * e)) : e = 0;
        var g = b;
        b = e;
        var k = 0 < a.o || 0 < b || !1;
        e = a.o;
        k && (e = a.o);
        var l = "";
        for (f = g; 1E20 < f;) l = "0" + l, f = Math.round(f / 10);
        l = f + l;
        var p = Vg.Yi;
        f = Vg.Ng.charCodeAt(0);
        var m = l.length,
            y = 0;
        if (0 < g || 0 < c) {
            for (g = m; g < c; g++) d.push(String.fromCharCode(f));
            if (2 <= a.l.length)
                for (c = 1; c < a.l.length; c++) y += a.l[c];
            c = m - y;
            if (0 < c) {
                g = a.l;
                y = m = 0;
                for (var D, G = Vg.Fg, R = l.length, I = 0; I < R; I++)
                    if (d.push(String.fromCharCode(f + 1 * Number(l.charAt(I)))), 1 < R - I)
                        if (D = g[y], I < c) {
                            var sa = c - I;
                            (1 === D || 0 < D && 1 === sa % D) && d.push(G)
                        } else y < g.length && (I === c ? y += 1 : D === I - c - m + 1 && (d.push(G), m += D, y += 1))
            } else {
                c = l;
                l = a.l;
                g = Vg.Fg;
                D = c.length;
                G = [];
                for (m = l.length - 1; 0 <= m && 0 < D; m--) {
                    y = l[m];
                    for (R = 0; R < y && 0 <= D - R - 1; R++) G.push(String.fromCharCode(f + 1 * Number(c.charAt(D - R - 1))));
                    D -= y;
                    0 < D && G.push(g)
                }
                d.push.apply(d, G.reverse())
            }
        } else k || d.push(String.fromCharCode(f));
        (a.M || k) && d.push(p);
        b = String(b);
        k = b.split("e+");
        2 == k.length && (b = String(Yg((0, window.parseFloat)(k[0]))), b = b.replace(".", ""), b += Ua("0", (0, window.parseInt)(k[1], 10) - b.length + 1));
        a.B + 1 > b.length && (b = "1" + Ua("0", a.B - b.length) + b);
        for (a = b.length;
            "0" == b.charAt(a - 1) && a > e + 1;) a--;
        for (g = 1; g < a; g++) d.push(String.fromCharCode(f + 1 * Number(b.charAt(g))))
    };
    $g = function(a, b, c) {
        c.push(Vg.dj);
        0 > b ? (b = -b, c.push(Vg.Hg)) : a.N && c.push(Vg.Zj);
        b = "" + b;
        for (var d = Vg.Ng, e = b.length; e < a.F; e++) c.push(d);
        c.push(b)
    };
    Wg = function(a, b, c) {
        for (var d = "", e = !1, f = b.length; c[0] < f; c[0]++) {
            var g = b.charAt(c[0]);
            if ("'" == g) c[0] + 1 < f && "'" == b.charAt(c[0] + 1) ? (c[0]++, d += "'") : e = !e;
            else if (e) d += g;
            else switch (g) {
                case "#":
                case "0":
                case ",":
                case ".":
                case ";":
                    return d;
                case "\u00a4":
                    c[0] + 1 < f && "\u00a4" == b.charAt(c[0] + 1) ? (c[0]++, d += Vg.Dg) : d += ah[Vg.Dg][1];
                    break;
                case "%":
                    if (!a.w && 1 != a.h) throw Error("Too many percent/permill");
                    if (a.w && 100 != a.h) throw Error("Inconsistent use of percent/permill characters");
                    a.h = 100;
                    a.w = !1;
                    d += Vg.Wj;
                    break;
                case "\u2030":
                    if (!a.w &&
                        1 != a.h) throw Error("Too many percent/permill");
                    if (a.w && 1E3 != a.h) throw Error("Inconsistent use of percent/permill characters");
                    a.h = 1E3;
                    a.w = !1;
                    d += Vg.Xj;
                    break;
                default:
                    d += g
            }
        }
        return d
    };
    Yg = function(a) {
        if (!a) return a;
        var b = a;
        if ((0, window.isFinite)(b)) {
            for (var c = 0; 1 <= (b /= 10);) c++;
            b = c
        } else b = 0 < b ? b : 0;
        b = 0 - b - 1;
        if (-1 > b) return b = Math.pow(10, 1), Math.round(a / b) * b;
        if (0 > b) return b = Math.pow(10, -b), a = Math.round(a / b), a * b;
        b = Math.pow(10, b);
        a = Math.round(a * b);
        return a / b
    };
    bh = function(a) {
        return 1 == a % 10 && 11 != a % 100 ? "one" : 2 == a % 10 && 12 != a % 100 ? "two" : 3 == a % 10 && 13 != a % 100 ? "few" : "other"
    };
    ch = function(a, b) {
        if (void 0 === b) {
            b = a + "";
            var c = b.indexOf(".");
            b = Math.min(-1 == c ? 0 : b.length - c - 1, 3)
        }
        return 1 == (a | 0) && 0 == b ? "one" : "other"
    };
    hh = function(a) {
        this.o = a;
        this.h = this.g = this.w = null;
        a = Vg;
        var b = dh;
        if (eh !== a || fh !== b) eh = a, fh = b, gh = new Xg;
        this.B = gh
    };
    lh = function(a, b) {
        if (a.o) {
            a.w = [];
            var c = ih(a, a.o);
            a.h = jh(a, c);
            a.o = null
        }
        if (a.h && 0 != a.h.length) {
            a.g = _.La(a.w);
            c = [];
            kh(a, a.h, b, !1, c);
            for (b = c.join(""); 0 < a.g.length;) b = b.replace(a.l(a.g), a.g.pop());
            a = b
        } else a = "";
        return a
    };
    kh = function(a, b, c, d, e) {
        for (var f = 0; f < b.length; f++) switch (b[f].type) {
            case 4:
                e.push(b[f].value);
                break;
            case 3:
                var g = b[f].value,
                    k = a,
                    l = e,
                    p = c[g];
                _.r(p) ? (k.g.push(p), l.push(k.l(k.g))) : l.push("Undefined parameter - " + g);
                break;
            case 2:
                g = b[f].value;
                k = e;
                l = g.Fd;
                _.r(c[l]) ? (l = g[c[l]], _.r(l) || (l = g.other), kh(a, l, c, d, k)) : k.push("Undefined parameter - " + l);
                break;
            case 0:
                g = b[f].value;
                mh(a, g, c, nh, d, e);
                break;
            case 1:
                g = b[f].value;
                mh(a, g, c, oh, d, e);
                break;
            default:
                _.Ea("Unrecognized block type: " + b[f].type)
        }
    };
    mh = function(a, b, c, d, e, f) {
        var g = b.Fd,
            k = b.Sg,
            l = +c[g];
        if ((0, window.isNaN)(l)) f.push("Undefined or invalid parameter - " + g);
        else if (k = l - k, g = b[c[g]], _.r(g) || (d = d(k), g = b[d], _.r(g) || (g = b.other)), b = [], kh(a, g, c, e, b), c = b.join(""), e) f.push(c);
        else {
            a = a.B;
            b = k;
            if ((0, window.isNaN)(b)) a = Vg.Uj;
            else {
                e = [];
                b /= Math.pow(10, ph.pl);
                e.push(ph.prefix);
                k = 0 > b || 0 == b && 0 > 1 / b;
                e.push(k ? a.D : a.J);
                if ((0, window.isFinite)(b))
                    if (b = b * (k ? -1 : 1) * a.h, a.I)
                        if (d = b, 0 == d) Zg(a, d, a.g, e), $g(a, 0, e);
                        else {
                            b = Math.floor(Math.log(d) / Math.log(10) + 2E-15);
                            g = Math.pow(10, b);
                            (0, window.isFinite)(g) && 0 !== g ? d /= g : (g = Math.pow(10, Math.floor(b / 2)), d = d / g / g, 1 == b % 2 && (d = 0 < b ? d / 10 : 10 * d));
                            g = a.g;
                            if (1 < a.C && a.C > a.g) {
                                for (; 0 != b % a.C;) d *= 10, b--;
                                g = 1
                            } else 1 > a.g ? (b++, d /= 10) : (b -= a.g - 1, d *= Math.pow(10, a.g - 1));
                            Zg(a, d, g, e);
                            $g(a, b, e)
                        } else Zg(a, b, a.g, e);
                else e.push(Vg.mj);
                e.push(k ? a.G : a.L);
                e.push(ph.Jn);
                a = e.join("")
            }
            f.push(c.replace(/#/g, a))
        }
    };
    ih = function(a, b) {
        var c = a.w,
            d = (0, _.za)(a.l, a);
        b = b.replace(qh, function() {
            c.push("'");
            return d(c)
        });
        return b = b.replace(rh, function(a, b) {
            c.push(b);
            return d(c)
        })
    };
    sh = function(a) {
        var b = 0,
            c = [],
            d = [],
            e = /[{}]/g;
        e.lastIndex = 0;
        for (var f; f = e.exec(a);) {
            var g = f.index;
            "}" == f[0] ? (c.pop(), 0 == c.length && (f = {
                type: 1
            }, f.value = a.substring(b, g), d.push(f), b = g + 1)) : (0 == c.length && (b = a.substring(b, g), "" != b && d.push({
                type: 0,
                value: b
            }), b = g + 1), c.push("{"))
        }
        b = a.substring(b);
        "" != b && d.push({
            type: 0,
            value: b
        });
        return d
    };
    jh = function(a, b) {
        var c = [];
        b = sh(b);
        for (var d = 0; d < b.length; d++) {
            var e = {};
            if (0 == b[d].type) e.type = 4, e.value = b[d].value;
            else if (1 == b[d].type) {
                var f = b[d].value;
                switch (th.test(f) ? 0 : uh.test(f) ? 1 : vh.test(f) ? 2 : /^\s*\w+\s*/.test(f) ? 3 : 5) {
                    case 2:
                        e.type = 2;
                        e.value = wh(a, b[d].value);
                        break;
                    case 0:
                        e.type = 0;
                        e.value = xh(a, b[d].value);
                        break;
                    case 1:
                        e.type = 1;
                        e.value = yh(a, b[d].value);
                        break;
                    case 3:
                        e.type = 3;
                        e.value = b[d].value;
                        break;
                    default:
                        _.Ea("Unknown block type for pattern: " + b[d].value)
                }
            } else _.Ea("Unknown part of the pattern.");
            c.push(e)
        }
        return c
    };
    wh = function(a, b) {
        var c = "";
        b = b.replace(vh, function(a, b) {
            c = b;
            return ""
        });
        var d = {};
        d.Fd = c;
        b = sh(b);
        for (var e = 0; e < b.length;) {
            var f = b[e].value;
            e++;
            if (1 == b[e].type) var g = jh(a, b[e].value);
            else _.Ea("Expected block type.");
            d[f.replace(/\s/g, "")] = g;
            e++
        }
        return d
    };
    xh = function(a, b) {
        var c = "",
            d = 0;
        b = b.replace(th, function(a, b, e) {
            c = b;
            e && (d = (0, window.parseInt)(e, 10));
            return ""
        });
        var e = {};
        e.Fd = c;
        e.Sg = d;
        b = sh(b);
        for (var f = 0; f < b.length;) {
            var g = b[f].value;
            f++;
            if (1 == b[f].type) var k = jh(a, b[f].value);
            else _.Ea("Expected block type.");
            e[g.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = k;
            f++
        }
        return e
    };
    yh = function(a, b) {
        var c = "";
        b = b.replace(uh, function(a, b) {
            c = b;
            return ""
        });
        var d = {};
        d.Fd = c;
        d.Sg = 0;
        b = sh(b);
        for (var e = 0; e < b.length;) {
            var f = b[e].value;
            e++;
            if (1 == b[e].type) var g = jh(a, b[e].value);
            else _.Ea("Expected block type.");
            d[f.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = g;
            e++
        }
        return d
    };
    Bh = function(a) {
        var b = De(function() {
            a: {
                switch (c.g) {
                    case "REPEAT_OFF":
                        var a = "REPEAT_ALL";
                        break a;
                    case "REPEAT_ALL":
                    case "REPEAT_ALL_AND_SHUFFLE":
                        a = c.l ? "REPEAT_SINGLE" : "REPEAT_OFF";
                        break a
                }
                a = "REPEAT_OFF"
            }
            c.o(a);zh(c, a)
        }, "", "btn-repeat");
        this.element = b;
        var c = this;
        this.h = b;
        this.o = a;
        this.l = !0;
        this.g = "REPEAT_OFF";
        Ah(this, this.g)
    };
    zh = function(a, b) {
        a.g = b;
        "REPEAT_ALL_AND_SHUFFLE" === a.g ? Ah(a, "REPEAT_ALL") : Ah(a, a.g)
    };
    Ah = function(a, b) {
        a.h.dataset.state = Ch[b].state;
        a.h.title = Ch[b].Me
    };
    Dh = function(a, b, c) {
        this.element = De(a, b, c)
    };
    Eh = function(a, b, c) {
        this.element = De(function() {
            d.h(!d.g)
        }, b, c);
        var d = this;
        this.g = !1;
        this.h = a;
        this.element.setAttribute("aria-pressed", String(this.g))
    };
    Fh = function(a, b) {
        b != a.g && (a.g = b, a.element.setAttribute("aria-pressed", String(b)))
    };
    Gh = function() {
        return window.HTMLDivElement.call(this) || this
    };
    Hh = function(a, b) {
        b ? (a.style.setProperty("--album-art-image", "url('" + b + "')"), a.h.src = b) : (a.style.removeProperty("--album-art-image"), a.h.src = "")
    };
    Ih = function(a, b, c) {
        if ("none" === window.getComputedStyle(a.g, null).backgroundImage)
            if (c) {
                var d = new window.Image;
                d.src = c;
                d.decode().then(function() {
                    a.g.textContent = "";
                    a.g.style.backgroundImage = "url('" + c + "')";
                    a.g.classList.add("app-icon")
                }, function() {
                    a.g.style.backgroundImage = "";
                    a.g.classList.remove("app-icon");
                    a.g.textContent = b
                })
            } else a.g.style.backgroundImage = "", a.g.classList.remove("app-icon"), a.g.textContent = b
    };
    Jh = function(a, b) {
        if ((0, window.isNaN)(a) || !(0, window.isFinite)(a)) return "";
        a = (void 0 === b ? 0 : b) ? Math.ceil(a) : Math.floor(a);
        b = Math.floor(a / 3600);
        var c = Math.floor(a / 60) % 60;
        a %= 60;
        return b ? String(b) + ":" + Va(c) + ":" + Va(a) : String(c) + ":" + Va(a)
    };
    Kh = function(a, b, c) {
        var d = this;
        this.h = !1;
        this.o = _.x;
        this.w = c;
        this.B = c.querySelector("#break-countdown-text");
        this.g = a;
        this.l = b;
        this.D = b.querySelector("#skip-ad-btn-countdown-text");
        c.querySelector("#ad-label").textContent = window.cast.receiver.R.Ig;
        a.querySelector("#skip-ad-btn-text").innerText = window.cast.receiver.R.Lg;
        this.g.addEventListener("touchstart", function(a) {
            a.stopPropagation()
        });
        this.g.addEventListener("click", function() {
            d.o()
        })
    };
    Lh = function(a) {
        a.B.textContent = window.cast.receiver.R.mf(Jh(a.C - a.F))
    };
    Oh = function(a) {
        var b = this;
        this.Ya = this.Za = _.x;
        this.g = a;
        this.h = !1;
        this.l = !0;
        this.g.addEventListener("click", function() {
            b.h ? b.Ya() : b.Za()
        });
        Mh(this);
        Nh(this, !0)
    };
    Mh = function(a) {
        a.g.dataset.state = "paused";
        a.g.title = window.cast.receiver.R.Gj;
        a.g.setAttribute("aria-disabled", "false");
        a.h = !1
    };
    Nh = function(a, b) {
        a.l = b;
        a.h && a.g.setAttribute("aria-disabled", String(!b))
    };
    _.Ph = function(a, b, c) {
        _.xb.call(this);
        this.o = null != c ? (0, _.za)(a, c) : a;
        this.l = b;
        this.h = (0, _.za)(this.qn, this);
        this.g = []
    };
    Qh = function(a) {
        a.xc = bd(a.h, a.l);
        a.o.apply(null, a.g)
    };
    Uh = function(a) {
        var b = this;
        this.w = a;
        this.V = this.w.querySelector("#live-label");
        this.l = this.w.querySelector("#scrubber-layer");
        this.g = this.l.querySelector("#scrubber");
        this.C = this.l.querySelector("#progress-fill");
        this.o = 0;
        this.G = this.l.querySelector("#progress-seekable-range");
        this.T = this.l.querySelector("#progress-seekable-played");
        this.D = this.l.querySelector("#progress-breaks");
        this.P = this.l.querySelector("#progress-loading");
        this.M = this.w.querySelector("#current-time");
        this.L = this.w.querySelector("#total-time");
        this.X = (0, window.parseFloat)(this.g.max);
        this.B = this.aa = 0;
        this.J = this.U = this.h = !1;
        this.$a = _.x;
        this.N = !1;
        this.F = this.I = void 0;
        this.ca = new _.Ph(function(a) {
            b.M.textContent = Jh((0, window.parseInt)(a, 10));
            Rh(b, a, b.B)
        }, 100);
        this.g.addEventListener("input", function() {
            b.h = !0;
            var a = b.g.value;
            _.u(b.o) && Sh(b, a);
            b.ca.hf(a)
        });
        this.g.addEventListener("change", function() {
            Th(b)
        });
        this.g.addEventListener("click", function() {
            b.h && Th(b)
        });
        this.g.addEventListener("touchend", function() {
            b.h = !1
        });
        this.g.addEventListener("touchcancel",
            function() {
                b.h = !1
            })
    };
    Th = function(a) {
        a.$a((0, window.parseFloat)(a.g.value) + a.aa);
        a.h = !1
    };
    Sh = function(a, b) {
        var c = a.X - a.o;
        b -= a.o;
        c = c ? b / c : 0;
        b = (.5 - c) / 200;
        0 < c && (c += b);
        a.C.style.transform = "scaleX(" + c + ")";
        a.C.style.left = a.o / a.B * 100 + "%";
        a.I ? b = a.I : (a.I = (0, window.parseInt)(window.getComputedStyle(a.l, null).width, 10), b = a.I || void 0);
        if (a.F) var d = a.F;
        else a.F = (0, window.parseInt)((0, window.getComputedStyle)(a.P).getPropertyValue("--loading-bar-width"), 10), d = a.F || void 0;
        a.P.style.transform = b && d ? "scaleX(" + b / d * (1 - c) + ")" : "scaleX(0)"
    };
    Vh = function(a) {
        return a.N && !a.J && !a.w.classList.contains("hidden")
    };
    Wh = function(a, b) {
        a.P.classList.toggle("hidden", !b);
        Sh(a, a.g.value)
    };
    Xh = function(a, b) {
        a.g.max = b;
        a.X = (0, window.parseFloat)(a.g.max)
    };
    Yh = function(a, b) {
        for (; a.D.firstChild;) a.D.removeChild(a.D.firstChild);
        b && b.forEach(function(b) {
            var c = window.document.createElement("div");
            c.classList.add("break-mark");
            100 < b + 1 ? c.style.right = "0" : c.style.left = b + "%";
            c.style.width = "1%";
            a.D.appendChild(c)
        })
    };
    Zh = function(a, b) {
        a.g.disabled = (void 0 === b ? !1 : b) || !a.U || a.J
    };
    Rh = function(a, b, c) {
        b = (c = void 0 === c ? -1 : c) && (0, window.isFinite)(c) && -1 !== c ? window.cast.receiver.R.Cb(window.cast.receiver.R.yj, {
            CURRENT_TIME: Jh(b),
            DURATION: Jh(c)
        }) : Jh(b);
        a.g.setAttribute("aria-valuetext", b)
    };
    ei = function(a) {
        var b = this;
        this.g = a;
        this.o = a.querySelector("#scrubber");
        this.M = a.querySelector("#controls-toggle");
        this.P = !1;
        this.B = a.querySelector("#controls");
        this.h = a.querySelector("#logo");
        this.w = a.querySelector("#title");
        this.J = a.querySelector("#break-title");
        this.I = a.querySelector("#audio-group-name");
        this.F = a.querySelector("#alert-show-controls");
        this.C = a.querySelector("#alert-hide-controls");
        this.L = a.querySelector("#subtitle");
        this.N = this.D = this.l = !1;
        this.T = $h.VIDEO;
        this.U = 4500;
        this.F.textContent =
            window.cast.receiver.R.wj;
        this.C.textContent = window.cast.receiver.R.vj;
        this.B.addEventListener("touchstart", function(a) {
            b.g.classList.contains("active") && (a.stopPropagation(), ai(b))
        });
        this.g.addEventListener("touchstart", function(a) {
            a.target === b.o || b.T === $h.VIDEO && b.l && b.N || (b.g.classList.contains("active") ? (bi(b, !1), (0, window.clearTimeout)(b.G), ci(b), b.g.classList.remove("scrubbing-ending")) : (di(b), ai(b), a.preventDefault()))
        });
        this.o.addEventListener("input", function() {
            bi(b, !0)
        });
        this.o.addEventListener("change",
            function() {
                bi(b, !1);
                ai(b)
            })
    };
    fi = function(a, b) {
        a.T = b;
        if (!a.g.classList.contains(b)) {
            for (var c in $h) $h.hasOwnProperty(c) && a.g.classList.remove($h[c]);
            a.g.classList.add(b);
            a.U = b === $h.AUDIO ? 8E3 : 4500
        }
    };
    gi = function(a, b) {
        a.g.classList.toggle("disabled", b);
        a.g.setAttribute("aria-hidden", String(b))
    };
    hi = function(a, b, c) {
        if ("none" === window.getComputedStyle(a.h, null).backgroundImage)
            if (c) {
                var d = new window.Image;
                d.src = c;
                d.decode().then(function() {
                    a.h.textContent = "";
                    a.h.style.backgroundImage = "url('" + c + "')";
                    a.h.classList.add("app-icon")
                }, function() {
                    a.h.style.backgroundImage = "";
                    a.h.classList.remove("app-icon");
                    a.h.textContent = b
                })
            } else a.h.style.backgroundImage = "", a.h.classList.remove("app-icon"), a.h.textContent = b
    };
    ii = function(a, b) {
        b ? (a.I.textContent = b, a.B.classList.add("audio-group")) : (a.I.textContent = "", a.B.classList.remove("audio-group"))
    };
    di = function(a) {
        (0, window.clearTimeout)(a.G);
        a.F.classList.remove("hidden");
        a.C.classList.add("hidden");
        a.M.setAttribute("aria-label", window.cast.receiver.R.xj);
        a.g.classList.add("active")
    };
    ai = function(a) {
        (0, window.clearTimeout)(a.G);
        a.P || (a.G = (0, window.setTimeout)(function() {
            a.D || a.l || (ci(a), a.g.classList.remove("scrubbing-ending"))
        }, a.U))
    };
    bi = function(a, b) {
        a.D !== b && (a.D = b, (0, window.clearTimeout)(a.V), a.g.classList.toggle("scrubbing", b), b || (a.g.classList.add("scrubbing-ending"), a.V = (0, window.setTimeout)(function() {
            a.g.classList.remove("scrubbing-ending")
        }, 4E3)))
    };
    ci = function(a) {
        a.F.classList.add("hidden");
        a.C.classList.remove("hidden");
        a.M.setAttribute("aria-label", window.cast.receiver.R.zj);
        a.g.classList.remove("active")
    };
    ji = function() {
        var a = window.HTMLDivElement.call(this) || this;
        a.l = null;
        a.C = null;
        a.F = null;
        a.w = null;
        a.o = null;
        a.h = null;
        a.na = null;
        a.B = {};
        a.Ya = _.x;
        a.Za = _.x;
        a.Kb = _.x;
        a.$a = _.x;
        return a
    };
    ki = function(a, b) {
        a.na.L.innerText = b || "";
        a.g && (a.g.w.textContent = b)
    };
    li = function(a, b) {
        "IDLE" === b ? (gi(a.na, !0), a.g && a.g.classList.add("hidden")) : (gi(a.na, !1), a.g && a.g.classList.remove("hidden"));
        if ("PLAYING" === b) {
            var c = a.w;
            c.g.dataset.state = "playing";
            c.g.title = window.cast.receiver.R.Fj;
            c.g.setAttribute("aria-disabled", String(!c.l));
            c.h = !0;
            c = a.na;
            c.l = !1;
            ai(c)
        }
        "PAUSED" === b && (Mh(a.w), c = a.na, c.l || di(c), c.l = !0);
        "BUFFERING" === b || "LOADING" === b ? (a.na.g.classList.toggle("buffering", !0), Wh(a.h, !0)) : (a.na.g.classList.toggle("buffering", !1), Wh(a.h, !1))
    };
    mi = function(a) {
        a.addEventListener("touchmove", function(a) {
            "range" !== a.target.type && a.preventDefault()
        })
    };
    pi = function(a) {
        var b = this;
        this.I = !0;
        this.h = {};
        this.J = {};
        this.P = this.M();
        this.o = new Qg(this.P);
        this.g = null;
        ni(this);
        var c = window.document.createElement("touch-controls");
        c.id = "player-controls";
        window.document.body.appendChild(c);
        this.g = c;
        oi();
        a || this.g.df();
        this.g.Ya = function() {
            b.o.g.g(new Fg("PAUSE"))
        };
        this.g.Za = function() {
            b.o.g.g(new Fg("PLAY"))
        };
        this.g.Kb = function() {
            b.o.g.g(new Fg("SHUTDOWN"))
        };
        this.g.$a = function(a) {
            var c = b.o,
                d = new Lg;
            d.currentTime = a;
            c.g.g(d)
        };
        this.g.ng(function() {
            b.o.g.g(new Fg("SKIP_AD"))
        });
        fi(this.g.na, $h.VIDEO);
        li(this.g, "IDLE");
        this.g.setDuration(0);
        this.g.Fc(0);
        window.cast.receiver.platform.getAccessibilitySettings().then(function(a) {
            var c = b.g.na;
            a = a.isScreenReaderEnabled;
            (c.P = a) && di(c)
        })
    };
    si = function(a, b, c) {
        if (!Object.values(qi).includes(c)) throw Error("Invalid controls button name '" + c + "'");
        if (!Object.values(ri).includes(b)) throw Error("Invalid controls slot name '" + b + "'");
        "no-button" !== c ? a.J[b] !== c && (a.g.qc(b, a.h[c]), a.J[b] = c) : (a.g.qc(b, null), delete a.J[b])
    };
    ni = function(a) {
        a.h["queue-next"] = new Dh(function() {
            var b = a.o,
                c = new Ng;
            c.jump = 1;
            b.g.g(c)
        }, window.cast.receiver.R.Hj, "btn-next");
        a.h["queue-prev"] = new Dh(function() {
            var b = a.o,
                c = new Ng;
            c.jump = -1;
            b.g.g(c)
        }, window.cast.receiver.R.Ij, "btn-back");
        a.h["seek-forward-10"] = new Dh(function() {
            Rg(a.o, 10)
        }, window.cast.receiver.R.Pj, "btn-seek-forward-10");
        a.h["seek-forward-15"] = new Dh(function() {
            Rg(a.o, 15)
        }, window.cast.receiver.R.Qj, "btn-seek-forward-15");
        a.h["seek-forward-30"] = new Dh(function() {
                Rg(a.o, 30)
            }, window.cast.receiver.R.Rj,
            "btn-seek-forward-30");
        a.h["seek-backward-10"] = new Dh(function() {
            Rg(a.o, -10)
        }, window.cast.receiver.R.Mj, "btn-seek-backward-10");
        a.h["seek-backward-15"] = new Dh(function() {
            Rg(a.o, -15)
        }, window.cast.receiver.R.Nj, "btn-seek-backward-15");
        a.h["seek-backward-30"] = new Dh(function() {
            Rg(a.o, -30)
        }, window.cast.receiver.R.Oj, "btn-seek-backward-30");
        a.h.repeat = a.D = new Bh(function(b) {
            var c = a.o,
                d = new Ng;
            d.repeatMode = b;
            c.g.g(d)
        });
        a.h.shuffle = a.G = new Eh(function(b) {
                var c = a.o,
                    d = new Ng;
                d.shuffle = b;
                c.g.g(d);
                Fh(a.G, b)
            },
            window.cast.receiver.R.Sj, "btn-shuffle");
        a.h.captions = a.L = new Eh(function(b) {
            var c = a.o,
                d = new Kg;
            b ? d.enableTextTracks = !0 : d.activeTrackIds = [];
            c.g.g(d)
        }, window.cast.receiver.R.Bj, "btn-captions");
        a.h.like = a.F = new Eh(function(b) {
            Sg(a.o, "LIKE", !b);
            Fh(a.F, b)
        }, window.cast.receiver.R.Dj, "btn-like");
        a.h.dislike = a.C = new Eh(function(b) {
            Sg(a.o, "DISLIKE", !b);
            Fh(a.C, b)
        }, window.cast.receiver.R.Cj, "btn-dislike")
    };
    ui = function(a, b, c) {
        fi(a.g.na, $h.VIDEO);
        if (a.I) {
            var d = a.B(b, c),
                e = !!(b & 128);
            b = !!(b & 64);
            ti(c) ? si(a, ri.SLOT_1, "captions") : e && d ? si(a, ri.SLOT_1, "queue-prev") : si(a, ri.SLOT_1, "no-button");
            d ? si(a, ri.SLOT_2, "seek-backward-30") : e ? si(a, ri.SLOT_2, "queue-prev") : si(a, ri.SLOT_2, "no-button");
            d ? si(a, ri.SLOT_3, "seek-forward-30") : b ? si(a, ri.SLOT_3, "queue-next") : si(a, ri.SLOT_3, "no-button");
            d && b ? si(a, ri.SLOT_4, "queue-next") : si(a, ri.SLOT_4, "no-button")
        }
    };
    vi = function(a, b) {
        fi(a.g.na, $h.AUDIO);
        a.I && (b & 128 ? si(a, ri.SLOT_2, "queue-prev") : si(a, ri.SLOT_2, "no-button"), b & 64 ? si(a, ri.SLOT_3, "queue-next") : si(a, ri.SLOT_3, "no-button"))
    };
    wi = function(a) {
        fi(a.g.na, $h.PHOTO);
        a.I && (si(a, ri.SLOT_1, "no-button"), si(a, ri.SLOT_2, "no-button"), si(a, ri.SLOT_3, "no-button"), si(a, ri.SLOT_4, "no-button"))
    };
    yi = function(a, b, c) {
        var d = a.g.h,
            e = a.B(c, b);
        e || (d.h = !1);
        d.U = e;
        Zh(d);
        Nh(a.g.w, !!(c & 1));
        Ce(a.h["queue-next"], !(c & 64));
        Ce(a.h["queue-prev"], !(c & 128));
        Ce(a.h.shuffle, !(c & 256));
        d = !a.B(c, b);
        Ce(a.h["seek-forward-10"], d);
        Ce(a.h["seek-forward-15"], d);
        Ce(a.h["seek-forward-30"], d);
        Ce(a.h["seek-backward-10"], d);
        Ce(a.h["seek-backward-15"], d);
        Ce(a.h["seek-backward-30"], d);
        Ce(a.D, !(c & 1024));
        a.D.l = !(c & 2048);
        Ce(a.G, !(c & 256));
        Ce(a.L, !(c & 4096));
        Ce(a.F, !(c & 16384));
        Ce(a.C, !(c & 32768));
        if (b.metadata) switch (b.metadata.metadataType) {
            case 1:
                ui(a,
                    c, b);
                return;
            case 2:
                ui(a, c, b);
                return;
            case 3:
                vi(a, c);
                return;
            case 4:
                wi(a);
                return
        }
        d = xi(b.contentType);
        "audio" === d ? vi(a, c) : "image" === d ? wi(a) : ui(a, c, b)
    };
    Bi = function(a, b) {
        zi(a, "");
        ki(a.g, "");
        if (b) switch (b.metadataType) {
            case 3:
                zi(a, b.title);
                ki(a.g, b.albumArtist || b.artist || b.composer || "");
                var c = a.g;
                c.g && (c.g.o.textContent = b.albumName || "");
                b = b.images;
                a = a.g;
                a.g && Hh(a.g, b && b[0] && b[0].url || "");
                break;
            case 4:
                break;
            case 2:
                zi(a, b.title);
                (b.season || b.episode) && ki(a.g, window.cast.receiver.R.kh(b.season, b.episode));
                break;
            case 1:
                zi(a, b.title);
                ki(a.g, b.subtitle || "");
                break;
            case 0:
                zi(a, b.title);
                ki(a.g, b.subtitle || "");
                b = b.images;
                a = a.g;
                a.g && Hh(a.g, b && b[0] && b[0].url ||
                    "");
                break;
            default:
                _.C(Ai, "Unexpected metadata type: " + b.metadataType)
        }
    };
    Ci = function(a, b) {
        if (b) {
            var c = !!(b.userActionStates || []).find(function(a) {
                return a && "LIKE" == a.userAction
            });
            Fh(a.F, c);
            b = !!(b.userActionStates || []).find(function(a) {
                return a && "DISLIKE" == a.userAction
            });
            Fh(a.C, b)
        } else Fh(a.F, !1), Fh(a.C, !1)
    };
    Di = function(a, b, c) {
        var d = !1;
        if (c && b) {
            c = _.n(c);
            for (var e = c.next(); !e.done; e = c.next()) {
                e = e.value;
                for (var f = _.n(b), g = f.next(); !g.done; g = f.next()) g = g.value, g.trackId == e && "TEXT" == g.type && (d = !0)
            }
        }
        Fh(a.L, d)
    };
    ti = function(a) {
        return a && a.tracks && a.tracks.some(function(a) {
            return "TEXT" == a.type
        }) || !1
    };
    zi = function(a, b) {
        b ? (a = a.g, a.na.w.innerText = b || "", a.g && (a.g.l.textContent = b)) : (b = a.g, a = window.cast.receiver.R.Cb(window.cast.receiver.R.Kg, {
            APP_NAME: a.N || ""
        }), b.na.w.innerText = a || "", b.g && (b.g.l.textContent = a))
    };
    xi = function(a) {
        var b = Ei;
        switch ((a || "").toLowerCase().split("/")[0]) {
            case b.IMAGE:
                return b.IMAGE;
            case b.AUDIO:
                return b.AUDIO;
            case b.VIDEO:
                return b.VIDEO;
            default:
                return b.VIDEO
        }
    };
    oi = function() {
        var a = window.document.createElement("style");
        window.cast.receiver.O.ij.Sa(a);
        window.document.body.appendChild(a)
    };
    Fi = function(a) {
        this.I = Md(a, "urn:x-cast:com.google.cast.debugoverlay", "JSON");
        this.I.l = this.G.bind(this);
        this.h = this.g = this.B = this.w = null;
        this.l = [];
        this.o = []
    };
    Gi = function(a) {
        a.g || a.h || (a.l.length = 0, a.o.length = 0, a.D(), a.g || (a.h = window.setInterval(a.D.bind(a), 1E3)))
    };
    Hi = function(a) {
        if (a.g || a.h) a.w && (window.document.body.removeChild(a.w.parentElement), a.w = null), a.B && (window.clearInterval(a.B), a.B = null), a.g && (Zb(a.g, "seeking", a.F, !1, a), a.g = null), a.h && (window.clearInterval(a.h), a.h = null)
    };
    Ji = function(a, b) {
        _.F(Ii, "found active video");
        a.g = b;
        b = window.document.createElement("div");
        b.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;z-index:9001;-webkit-text-fill-color:black;-webkit-text-stroke-color:red;-webkit-text-stroke-width:1px;padding-left:5vw;padding-top:5vh;margin:0;font-size:24pt";
        var c = window.document.createTextNode("");
        b.appendChild(c);
        b.id = "__CAST_DEBUG_OVERLAY__";
        window.document.body.appendChild(b);
        a.w = c;
        a.C();
        a.B = window.setInterval(a.C.bind(a), 1E3);
        _.Ob(a.g,
            "seeking", a.F, !1, a);
        a.h && (window.clearInterval(a.h), a.h = null)
    };
    Ki = function() {
        var a = this;
        this.o = 1;
        this.h = !1;
        this.l = _.x;
        this.B = function() {
            a.h && a.l()
        }
    };
    Li = function(a) {
        a.h = !0;
        (0, window.clearInterval)(a.F);
        a.F = (0, window.setInterval)(function() {
            a.g || a.B()
        }, 200)
    };
    Mi = function(a, b) {
        a.w = b;
        a.C = (new Date).getTime();
        a.l()
    };
    Ni = function() {
        var a = window.HTMLDivElement.call(this) || this;
        a.h = null;
        a.g = null;
        a.o = 0;
        return a
    };
    Oi = function(a, b, c, d) {
        var e = window.document.createElement("div");
        e.classList.add("wave");
        e.style.transform = "translate(" + b + "px, " + c + "px) scale(" + d + ")";
        a.shadowRoot.appendChild(e);
        (0, window.setTimeout)(function() {
            e.remove()
        }, a.B)
    };
    Pi = function() {};
    Ri = function(a) {
        var b;
        (b = a.g) || (b = {}, Qi(a) && (b[0] = !0, b[1] = !0), b = a.g = b);
        return b
    };
    Si = function() {};
    Ti = function(a) {
        return (a = Qi(a)) ? new window.ActiveXObject(a) : new window.XMLHttpRequest
    };
    Qi = function(a) {
        if (!a.h && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new window.ActiveXObject(d), a.h = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.h
    };
    Ui = function(a) {
        if (a.Wa && "function" == typeof a.Wa) return a.Wa();
        if (_.t(a)) return a.split("");
        if (va(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        b = [];
        c = 0;
        for (d in a) b[c++] = a[d];
        return b
    };
    Wi = function(a, b) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
        else if (va(a) || _.t(a))(0, _.Vi)(a, b, void 0);
        else {
            if (a.nb && "function" == typeof a.nb) var c = a.nb();
            else if (a.Wa && "function" == typeof a.Wa) c = void 0;
            else if (va(a) || _.t(a)) {
                c = [];
                for (var d = a.length, e = 0; e < d; e++) c.push(e)
            } else c = _.ab(a);
            d = Ui(a);
            e = d.length;
            for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        }
    };
    _.Xi = function(a) {
        _.ec.call(this);
        this.headers = new _.Hd;
        this.P = a || null;
        this.l = !1;
        this.N = this.g = null;
        this.X = this.L = "";
        this.w = 0;
        this.D = "";
        this.o = this.U = this.J = this.T = !1;
        this.C = 0;
        this.I = null;
        this.aa = "";
        this.M = this.V = !1
    };
    Zi = function(a) {
        return _.Yi && _.ob(9) && _.u(a.timeout) && _.r(a.ontimeout)
    };
    $i = function(a) {
        return "content-type" == a.toLowerCase()
    };
    cj = function(a, b) {
        a.l = !1;
        a.g && (a.o = !0, a.g.abort(), a.o = !1);
        a.D = b;
        a.w = 5;
        aj(a);
        bj(a)
    };
    aj = function(a) {
        a.T || (a.T = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    };
    jj = function(a) {
        if (a.l && "undefined" != typeof dj)
            if (a.N[1] && 4 == ej(a) && 2 == fj(a)) _.lc(a.W, gj(a, "Local request error detected and ignored"));
            else if (a.J && 4 == ej(a)) bd(a.Zh, 0, a);
        else if (a.dispatchEvent("readystatechange"), 4 == ej(a)) {
            _.lc(a.W, gj(a, "Request complete"));
            a.l = !1;
            try {
                var b = fj(a);
                a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default:
                        c = !1
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var f = String(a.L).match(_.hj)[1] || null;
                        if (!f && _.v.self && _.v.self.location) {
                            var g =
                                _.v.self.location.protocol;
                            f = g.substr(0, g.length - 1)
                        }
                        e = !ij.test(f ? f.toLowerCase() : "")
                    }
                    d = e
                }
                if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");
                else {
                    a.w = 6;
                    try {
                        var k = 2 < ej(a) ? a.g.statusText : ""
                    } catch (l) {
                        _.lc(a.W, "Can not get status: " + l.message), k = ""
                    }
                    a.D = k + " [" + fj(a) + "]";
                    aj(a)
                }
            } finally {
                bj(a)
            }
        }
    };
    bj = function(a, b) {
        if (a.g) {
            kj(a);
            var c = a.g,
                d = a.N[0] ? _.x : null;
            a.g = null;
            a.N = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {
                _.C(a.W, "Problem encountered resetting onreadystatechange: " + e.message)
            }
        }
    };
    kj = function(a) {
        a.g && a.M && (a.g.ontimeout = null);
        a.I && (_.v.clearTimeout(a.I), a.I = null)
    };
    ej = function(a) {
        return a.g ? a.g.readyState : 0
    };
    fj = function(a) {
        try {
            return 2 < ej(a) ? a.g.status : -1
        } catch (b) {
            return -1
        }
    };
    gj = function(a, b) {
        return b + " [" + a.X + " " + a.L + " " + fj(a) + "]"
    };
    lj = function(a) {
        switch (a) {
            case "mp4a.a6":
                return 1;
            case "ec-3":
                return 2;
            case "mp4a.40.2":
                return 3;
            case "mp4a.40.5":
                return 4;
            case "mp4a.67":
                return 5;
            case "avc1.4D40":
                return 6;
            case "avc1.4D401E":
                return 7;
            case "mp4a.a5":
                return 8;
            case "ac-3":
                return 9;
            case "vorbis":
                return 10;
            case "opus":
                return 11;
            case "vp8":
                return 12;
            case "vp9":
                return 13
        }
        return 0 == a.lastIndexOf("avc1", 0) ? 11 : 0 == a.lastIndexOf("mp4a.40", 0) ? 12 : 0
    };
    nj = function(a, b) {
        a: {
            if (b) {
                if (Ra(b, "video/")) {
                    b = "Video";
                    break a
                }
                if (Ra(b, "audio/")) {
                    b = "Audio";
                    break a
                }
            }
            b = void 0
        }
        if (_.r(b)) {
            mj("Cast.Shaka.Available" + b + "Bitrates", a.length);
            for (var c = 0; c < a.length; c++) mj("Cast.Shaka.Available" + b + "Bitrate" + c, a[c])
        }
    };
    oj = function(a, b) {
        window.cast.platform.metrics.logBoolToUma(a, b)
    };
    pj = function(a) {
        a.split(",").forEach(function(a) {
            mj("Cast.Shaka.Codec", lj(a))
        })
    };
    qj = function(a) {
        window.cast.platform.metrics.logEventToUma(a)
    };
    mj = function(a, b) {
        window.cast.platform.metrics.logIntToUma(a, b)
    };
    rj = function(a) {
        this.type = a;
        this.reason = void 0;
        this.requestId = 0;
        this.customData = void 0
    };
    sj = function(a, b) {
        this.start = a;
        this.end = b
    };
    tj = function(a) {
        this.type = "CUSTOM_STATE";
        this.state = a
    };
    L = function(a) {
        this.type = a;
        this.requestId = 0;
        this.customData = this.mediaSessionId = void 0
    };
    vj = function() {
        L.call(this, "LOAD");
        this.media = new uj;
        this.autoplay = !1;
        this.loadOptions = this.credentialsType = this.credentials = this.queueData = this.activeTrackIds = this.playbackRate = this.currentTime = void 0
    };
    wj = function(a) {
        vj.call(this);
        this.type = "PRELOAD";
        this.itemId = a
    };
    xj = function(a) {
        vj.call(this);
        this.type = "PRECACHE";
        this.precacheData = a
    };
    zj = function() {
        L.call(this, "SET_VOLUME");
        this.volume = new yj
    };
    Aj = function() {
        L.call(this, "EDIT_TRACKS_INFO");
        this.enableTextTracks = this.isSuggestedLanguage = this.textTrackStyle = this.language = this.activeTrackIds = void 0
    };
    Bj = function() {
        L.call(this, "EDIT_AUDIO_TRACKS");
        this.isSuggestedLanguage = this.language = void 0
    };
    Cj = function() {
        L.call(this, "SEEK");
        this.relativeTime = this.currentTime = this.resumeState = void 0
    };
    Dj = function() {
        L.call(this, "SET_PLAYBACK_RATE");
        this.relativePlaybackRate = this.playbackRate = void 0
    };
    Ej = function() {
        L.call(this, "GET_STATUS");
        this.options = void 0
    };
    Fj = function(a) {
        L.call(this, "QUEUE_LOAD");
        this.repeatMode = void 0;
        this.items = a;
        this.currentTime = this.startIndex = void 0
    };
    Gj = function(a) {
        L.call(this, "QUEUE_INSERT");
        this.currentTime = this.currentItemId = this.currentItemIndex = this.insertBefore = void 0;
        this.items = a
    };
    Hj = function() {
        L.call(this, "QUEUE_UPDATE");
        this.shuffle = this.repeatMode = this.items = this.jump = this.currentTime = this.currentItemId = void 0
    };
    Ij = function(a) {
        L.call(this, "QUEUE_REMOVE");
        this.currentTime = this.currentItemId = void 0;
        this.itemIds = a
    };
    Jj = function(a) {
        L.call(this, "QUEUE_REORDER");
        this.insertBefore = this.currentTime = this.currentItemId = void 0;
        this.itemIds = a
    };
    Kj = function(a, b, c) {
        L.call(this, "QUEUE_GET_ITEM_RANGE");
        this.itemId = a;
        this.nextCount = b;
        this.prevCount = c
    };
    Lj = function(a) {
        L.call(this, "QUEUE_GET_ITEMS");
        this.itemIds = a
    };
    Mj = function() {
        this.customData = this.loadRequestData = void 0
    };
    Nj = function() {
        L.call(this, "STORE_SESSION")
    };
    Oj = function() {
        L.call(this, "RESUME_SESSION")
    };
    Pj = function(a) {
        L.call(this, "SESSION_STATE");
        this.sessionState = a
    };
    uj = function() {
        this.contentId = "";
        this.contentUrl = void 0;
        this.streamType = "NONE";
        this.contentType = "";
        this.userActionStates = this.vmapAdsRequest = this.hlsVideoSegmentFormat = this.hlsSegmentFormat = this.breakClips = this.breaks = this.customData = this.textTrackStyle = this.tracks = this.startAbsoluteTime = this.duration = this.entity = this.metadata = void 0
    };
    Qj = function(a, b) {
        this.start = a;
        this.end = b
    };
    Rj = function(a, b, c, d) {
        Qj.call(this, a, b);
        this.isMovingWindow = c;
        this.isLiveDone = d
    };
    Sj = function(a, b, c, d, e, f, g) {
        this.id = a;
        this.queueType = this.entity = void 0;
        this.name = b;
        this.description = c;
        this.repeatMode = d;
        this.shuffle = !1;
        this.items = e;
        this.startIndex = f;
        this.startTime = g;
        this.containerMetadata = void 0
    };
    Tj = function(a) {
        this.containerType = void 0 === a ? 0 : a;
        this.containerDuration = this.containerImages = this.sections = this.title = void 0
    };
    Uj = function(a) {
        this.metadataType = a;
        this.queueItemId = this.sectionStartTimeInContainer = this.sectionStartAbsoluteTime = this.sectionStartTimeInMedia = this.sectionDuration = void 0
    };
    Vj = function() {
        Uj.call(this, 0);
        this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = void 0
    };
    Wj = function() {
        Uj.call(this, 1);
        this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = void 0
    };
    Xj = function() {
        Uj.call(this, 2);
        this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = void 0
    };
    Yj = function() {
        Uj.call(this, 3);
        this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = void 0
    };
    Zj = function() {
        Uj.call(this, 4);
        this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = void 0
    };
    ak = function() {
        Tj.call(this, 1);
        this.releaseDate = this.publisher = this.narrators = this.authors = void 0
    };
    bk = function() {
        Uj.call(this, 5);
        this.images = this.subtitle = this.bookTitle = this.title = this.chapterTitle = void 0
    };
    yj = function() {
        this.muted = this.level = void 0
    };
    ck = function() {
        this.type = "MEDIA_STATUS";
        this.mediaSessionId = 0;
        this.videoInfo = this.queueData = this.media = void 0;
        this.playbackRate = 1;
        this.playerState = "IDLE";
        this.idleReason = void 0;
        this.supportedMediaCommands = this.currentTime = 0;
        this.volume = new yj;
        this.disableStreamGrouping = this.liveSeekableRange = this.extendedStatus = this.breakStatus = this.repeatMode = this.items = this.customData = this.preloadedItemId = this.loadingItemId = this.currentItemId = this.activeTrackIds = void 0
    };
    dk = function() {
        ck.call(this)
    };
    _.ek = function(a, b, c) {
        this.id = a;
        this.breakClipIds = b;
        this.position = c;
        this.duration = void 0;
        this.isWatched = !1;
        this.isEmbedded = void 0
    };
    _.fk = function(a) {
        this.id = a;
        this.vastAdsRequest = this.customData = this.hlsSegmentFormat = this.clickThroughUrl = this.posterUrl = this.whenSkippable = this.duration = this.title = this.contentType = this.contentUrl = this.contentId = void 0
    };
    gk = function() {
        L.call(this, "SET_CREDENTIALS")
    };
    hk = function() {
        L.call(this, "LOAD_BY_ENTITY")
    };
    ik = function() {
        L.call(this, "CUSTOM_COMMAND")
    };
    jk = function() {
        L.call(this, "REFRESH_CREDENTIALS")
    };
    kk = function(a, b) {
        L.call(this, "PLAY_STRING");
        this.stringId = a;
        this.arguments = b
    };
    lk = function(a) {
        L.call(this, "EXECUTE_ACTION_SCRIPT");
        this.actionScript = JSON.stringify(a)
    };
    mk = function() {
        L.call(this, "USER_ACTION")
    };
    nk = function() {
        L.call(this, "DISPLAY_STATUS")
    };
    ok = function() {
        L.call(this, "FOCUS_STATE")
    };
    pk = function(a) {
        this.type = a
    };
    qk = function(a, b, c) {
        this.type = "senderdisconnected";
        this.senderId = a;
        this.userAgent = b;
        this.reason = c
    };
    rk = function(a, b) {
        this.type = "senderconnected";
        this.senderId = a;
        this.userAgent = b
    };
    sk = function(a) {
        this.type = "visibilitychanged";
        this.isVisible = a
    };
    tk = function(a) {
        this.type = "standbychanged";
        this.isStandby = a
    };
    uk = function(a) {
        this.type = "systemvolumechanged";
        this.data = a
    };
    vk = function(a) {
        this.type = "ready";
        this.data = a
    };
    wk = function() {
        this.type = "shutdown"
    };
    xk = function() {
        this.type = "feedbackstarted"
    };
    yk = function(a) {
        this.type = "maxvideoresolutionchanged";
        this.height = a
    };
    zk = function() {};
    Bk = function(a) {
        if (!(a instanceof zk)) throw _.C(Ak, "Proper AudioTracksManager object can be acquried by calling cast.framework.PlayerManager.getAudioTracksManager()"), Error("AudioTracksManager is not created properly.");
        this.g = this.h = null
    };
    Dk = function(a) {
        if (!a.g || !Ck(a.g)) throw Error("Tracks info is not available.");
    };
    Ek = function() {};
    Fk = function() {};
    Gk = function() {};
    Hk = function(a) {
        if (!(a instanceof Gk)) throw _.C(Hk.W, "Proper QueueManager object can be acquried by calling cast.framework.PlayerManager.getQueueManager()"), Error("QueueManager is not created properly.");
        this.g = null;
        this.h = !0
    };
    Ik = function() {};
    M = function(a) {
        if (!(a instanceof Ik)) throw _.C(M.W, "Proper TextTracksManager object can be acquried by calling cast.framework.PlayerManager.getTextTracksManager()"), Error("TextTracksManager is not created properly.");
        this.g = this.h = null
    };
    Jk = function(a) {
        if (!a.g || !Ck(a.g)) throw Error("Tracks info is not available.");
    };
    Kk = function() {
        this.h = {};
        this.l = {};
        this.o = {};
        this.g = this.w.bind(this)
    };
    Lk = function(a, b, c) {
        a.o[b] = c || _.x
    };
    Mk = function(a, b) {
        a = a.h[b];
        return a == _.x ? null : a
    };
    Nk = function(a, b) {
        _.$a(b, function(b, d) {
            a.l[d] = b || _.x
        })
    };
    Ok = function(a, b) {
        this.handleEvent = a;
        this.g = b
    };
    Pk = function() {
        _.xb.call(this);
        this.g = {};
        this.h = this.l = null
    };
    Rk = function(a, b, c) {
        var d = a.g[b];
        d && d.slice().forEach(function(d) {
            try {
                d.handleEvent.call(d.g, c)
            } catch (f) {
                _.C(Qk, "Handler for " + b + " encountered an error."), a.h && a.h(b, f), window.setTimeout(function() {
                    throw f;
                }, 0)
            }
        })
    };
    Sk = function(a, b) {
        a.h = b
    };
    Uk = function(a, b) {
        var c = window.document.createElement("script");
        c.type = "text/javascript";
        c.src = a;
        c.onload = function() {
            _.F(Tk, "library(" + a + ") is loaded");
            b.resolve()
        };
        c.onerror = function() {
            _.C(Tk, "library(" + a + ") cannot be loaded");
            b.reject()
        };
        window.document.head.appendChild(c)
    };
    Vk = function(a, b) {
        this.l = a;
        this.o = b;
        this.h = this.g = null
    };
    Wk = function(a) {
        (0, window.clearTimeout)(a.g);
        a.g = null
    };
    Yk = function(a, b) {
        b == a.h ? _.lc(Xk, "state is already set to idle due to " + b) : (a.h = b, b = window.cast.A.common.jj[b], Wk(a), a.g = (0, window.setTimeout)(function() {
            _.F(Xk, "timer expired");
            this.o()
        }.bind(a), 6E4 * b))
    };
    Zk = function(a) {
        this.type = a
    };
    $k = function(a) {
        this.type = "BITRATE_CHANGED";
        this.totalBitrate = a
    };
    al = function(a) {
        this.type = "EMSG";
        this.messageData = a.messageData;
        this.schemeIdUri = a.schemeIdUri;
        this.value = a.value;
        this.startTime = a.startTime;
        this.endTime = a.endTime;
        this.timescale = a.timescale;
        this.presentationTimeDelta = a.presentationTimeDelta;
        this.eventDuration = a.eventDuration;
        this.id = a.id;
        this.segmentData = a.segmentData
    };
    bl = function(a, b) {
        this.type = "ERROR";
        this.detailedErrorCode = a;
        this.error = b
    };
    cl = function(a, b) {
        this.type = "ID3";
        this.segmentData = a;
        this.timestamp = b
    };
    dl = function(a, b) {
        this.type = a;
        this.currentMediaTime = b
    };
    el = function(a, b) {
        b = void 0 === b ? !1 : b;
        dl.call(this, "PAUSE", a);
        this.ended = b
    };
    fl = function(a) {
        this.type = "MEDIA_STATUS";
        this.mediaStatus = a
    };
    gl = function(a) {
        this.type = "CUSTOM_STATE";
        this.state = a
    };
    hl = function(a, b) {
        this.type = "MEDIA_FINISHED";
        this.currentMediaTime = a;
        this.endedReason = b
    };
    il = function(a, b, c) {
        this.type = a;
        this.requestData = b;
        this.senderId = c
    };
    jl = function(a, b) {
        this.type = a;
        this.media = b
    };
    kl = function(a) {
        jl.call(this, "MEDIA_INFORMATION_CHANGED", a)
    };
    ll = function(a, b, c, d, e, f, g, k) {
        this.type = a;
        this.currentMediaTime = b;
        this.index = c;
        this.total = d;
        this.whenSkippable = _.u(e) ? e : void 0;
        this.endedReason = f;
        this.breakClipId = g;
        this.breakId = k
    };
    ml = function(a) {
        this.type = "BUFFERING";
        this.isBuffering = a
    };
    nl = function(a, b) {
        this.type = "CLIP_ENDED";
        this.currentMediaTime = a;
        this.endedReason = b
    };
    ol = function(a, b) {
        this.type = "SEGMENT_DOWNLOADED";
        this.downloadTime = a;
        this.size = b
    };
    pl = function(a) {
        this.type = "CACHE_LOADED";
        this.media = a
    };
    ql = function(a) {
        this.type = "INBAND_TRACK_ADDED";
        this.track = a
    };
    rl = function(a, b) {
        this.type = a;
        this.url = b
    };
    sl = function(a, b) {
        this.type = a;
        this.liveSeekableRange = b
    };
    tl = function(a, b) {
        _.xb.call(this);
        this.L = b;
        this.player = a;
        this.tracks = [];
        this.C = [];
        this.h = null;
        this.o = [];
        this.I = -1;
        this.J = 1;
        this.w = new bf(b, [], [], null);
        _.yb(this, _.Aa(_.zb, this.w));
        this.l = null
    };
    ul = function(a, b, c, d, e, f) {
        return 0 == a.tracks.length ? null : "VIDEO" == b ? a.tracks.find(function(a) {
            return a.type == b
        }) || null : a.tracks.find(function(a) {
            return b == a.type && (c ? c == a.name : !0) && (d ? d == a.language : !0) && (e ? e == a.trackContentType : !0) && (f ? f == a.subtype : !0)
        }) || null
    };
    vl = function(a, b) {
        if (0 !== b.length) {
            b.sort(function(a, b) {
                return a.trackId - b.trackId
            });
            if (b[0].trackId <= a.I) throw Error("track id conflicts");
            for (var c = 1; c < b.length; c++)
                if (b[c].trackId == b[c - 1].trackId) throw Error("track id conflicts");
            a.tracks = a.tracks.concat(b);
            a.I = b[b.length - 1].trackId;
            a.J = Math.max(a.J, a.I + 1);
            b.find(function(a) {
                return !!a.trackContentId
            }) && Xe(a.w, b)
        }
    };
    yl = function(a, b) {
        for (var c = null, d = _.n(a.tracks), e = d.next(); !e.done; e = d.next())
            if (e = e.value, "TEXT" == e.type && e.language && window.cast.receiver.Bc(e.language, b)) {
                c = e.trackId;
                break
            }
        null == c ? _.E(wl, "No matching track.") : xl(a, [c])
    };
    Al = function(a, b) {
        for (var c = null, d = null, e = _.n(a.tracks), f = e.next(); !f.done; f = e.next()) f = f.value, "AUDIO" == f.type && (null == c && f.language && b && window.cast.receiver.Bc(f.language, b) && !f.trackContentId && (c = f.trackId), null != a.h && (d = a.h));
        null === c && (c = a.Sd());
        zl(a, c, a.o);
        a.xd(d, c)
    };
    xl = function(a, b) {
        for (var c = null, d = null, e = [], f = [], g = null, k = _.n(a.tracks), l = k.next(); !l.done; l = k.next()) {
            l = l.value;
            if (b.includes(l.trackId))
                if ("TEXT" == l.type)
                    if (l.trackContentId)
                        if (null != l.trackContentId && Sa(l.trackContentId, ".ttml") || null != l.trackContentType && 0 == Qa(l.trackContentType, "application/ttml+xml"))
                            if (null == g) g = l.trackId;
                            else {
                                _.E(wl, "Can not sideload more than one TTML text track.");
                                continue
                            } else null != l.trackContentId && Sa(l.trackContentId, ".vtt") || null != l.trackContentType && 0 == Qa(l.trackContentType,
                "text/vtt") ? f.push(l.trackId) : _.E(wl, "unsupported track type " + l.trackContentType + ", " + l.trackContentId);
            else e.push(l.trackId);
            else "AUDIO" != l.type || l.trackContentId || (c = l.trackId);
            null != a.h && (d = a.h)
        }
        af(a.w, f);
        a.li(d, c, e, g, f)
    };
    zl = function(a, b, c) {
        if (null != b || c) null != b && (a.h = b), a.o = c, null != a.h ? a.C = a.o.concat(a.h) : a.C = a.o, a.C.sort()
    };
    Bl = function(a, b) {
        if (a.l || null != b) {
            if (!a.l) {
                if (!a.L) {
                    _.C(wl, "Media element is not ready yet.");
                    return
                }
                var c = new window.cast.player.api.Host({
                    url: "",
                    mediaElement: a.L
                });
                a.l = new window.cast.player.api.Player(c)
            }
            a.l.enableCaptions(!1, "ttml");
            null != b && (c = a.tracks.find(function(a) {
                return a.trackId == b
            }), a.l.enableCaptions(!0, "ttml", c.trackContentId))
        }
    };
    Dl = function(a, b, c) {
        this.mediaElement = null;
        this.startTime = b;
        this.l = a;
        this.la = new Pk;
        this.o = 1;
        this.ha = this.V = null;
        this.Ta = !1;
        this.La = c || Cl;
        this.h = null;
        this.oa = [];
        this.M = !1;
        this.ja = Qc();
        this.J = Qc();
        this.F = Qc();
        this.C = Qc();
        this.G = !1;
        this.X = null;
        this.P = this.N = void 0;
        this.bb = this.sk.bind(this);
        this.D = this.L = null;
        this.aa = 1
    };
    Hl = function(a, b) {
        Object.keys(El).forEach(function(c) {
            Fl(a, b, c, function() {
                var b = new dl(El[c], a.getCurrentTimeSec());
                Gl(a, b)
            })
        });
        Fl(a, b, "playing", a.Vm.bind(a));
        Fl(a, b, "ended", a.end.bind(a, "END_OF_STREAM"));
        Fl(a, b, "pause", function() {
            var c = new el(a.getCurrentTimeSec(), b.ended);
            Gl(a, c)
        })
    };
    Il = function(a, b, c) {
        6 !== a.o && (a.o = 5, Gl(a, new bl(b, c)), a.end("ERROR"))
    };
    Kl = function(a) {
        Jl(a).then(function(a) {
            xl(a, a.C);
            a.h = a.Sd()
        });
        a.Ta || (a.M = !0, a.o = 3);
        a.ja.resolve()
    };
    Ll = function(a) {
        if (!a.mediaElement) return [];
        var b = [];
        a = a.mediaElement.buffered;
        for (var c = 0; c < a.length; c++) b.push(new sj(a.start(c), a.end(c)));
        return b
    };
    Ml = function(a, b) {
        if (!a.h) return null;
        b.textTrackStyle && a.h.yb(b.textTrackStyle);
        b.language ? yl(a.h, b.language) : b.activeTrackIds && xl(a.h, b.activeTrackIds);
        return a.h.Ga().activeTrackIds
    };
    Nl = function(a, b) {
        if (!a.h) return null;
        Al(a.h, b.language);
        return a.h.Ga().activeTrackIds
    };
    Jl = function(a) {
        return a.J.g.then(function() {
            return a.h
        })
    };
    Gl = function(a, b) {
        a.la.dispatchEvent(b)
    };
    Cl = function(a, b) {
        return new tl(a, b)
    };
    Fl = function(a, b, c, d) {
        _.Ob(b, c, d);
        a.oa.push({
            type: c,
            listener: d
        })
    };
    Ol = function(a, b) {
        for (var c = _.n(a.oa), d = c.next(); !d.done; d = c.next()) d = d.value, Zb(b, d.type, d.listener);
        a.oa.length = 0
    };
    Ql = function(a, b) {
        b = void 0 === b ? !1 : b;
        Pl(a);
        a.X = a.getCurrentTimeSec();
        b || void 0 !== a.N || void 0 !== a.P || (a.N = a.isLiveDone(), a.P = a.rc());
        a.L = (0, window.setTimeout)(a.bb, 500)
    };
    Pl = function(a) {
        null != a.L && ((0, window.clearTimeout)(a.L), a.L = null)
    };
    Rl = function(a) {
        Dl.call(this, a, 0);
        this.g = null
    };
    Sl = function(a) {
        return new _.Ec(function(b, c) {
            var d = new window.Image;
            d.onerror = c;
            d.onload = b;
            d.src = a
        })
    };
    Vl = function(a, b, c, d) {
        b = b.toLowerCase();
        var e = null;
        if (_.t(a))
            if (_.t(b)) {
                var f;
                if (f = d) f = !_.db(Tl, d);
                f && (e = "content type(" + d + ") is not valid")
            } else e = "mimeType(" + b + ") should be string";
        else e = "Url(" + a + ") should be string";
        if (e) throw _.C(Ul, e), Error(e);
        this.g = d || "audio_video";
        this.mimeType = b;
        this.url = a;
        this.playbackConfig = c || new Fk;
        this.hlsVideoSegmentFormat = this.hlsSegmentFormat = null
    };
    Wl = function(a, b, c, d) {
        Dl.call(this, a, c, d);
        var e = this;
        this.Ea = a;
        this.I = b;
        this.g = null;
        this.Aa = !1;
        this.B = this.U = this.T = null;
        this.ga = void 0;
        this.w = 0;
        this.va = !1;
        this.lb = oc(function() {
            mj("Cast.Shaka.Bandwidth", e.g.getStats().estimatedBandwidth)
        })
    };
    cm = function(a) {
        for (var b = a.Ea.playbackConfig, c = _.n(["autoResumeNumberOfSegments", "autoPauseDuration", "licenseCustomData", "captionsRequestHandler"]), d = c.next(); !d.done; d = c.next()) d = d.value, void 0 !== b[d] && _.E(Xl, d + " is not supported for Shakaplayer. Its value will be ignored.");
        Yl(a, b);
        Zl(a, b);
        c = _.eb($l);
        _.u(b.segmentRequestRetryLimit) && (c.maxAttempts = b.segmentRequestRetryLimit + 1);
        c.backoffFactor = 1;
        c = {
            abr: {
                defaultBandwidthEstimate: b.initialBandwidth || 2E6
            },
            drm: {
                retryParameters: $l,
                servers: am(b),
                advanced: {
                    "com.widevine.alpha": {
                        audioRobustness: "HW_SECURE_CRYPTO",
                        videoRobustness: "HW_SECURE_ALL"
                    }
                }
            },
            manifest: {
                retryParameters: $l
            },
            streaming: {
                jumpLargeGaps: !0,
                rebufferingGoal: b.autoResumeDuration || 10,
                retryParameters: c
            }
        };
        b.shakaConfig && (_.F(Xl, "Supplying custom Shaka configurations is not recommended. Please use cast.framework.PlaybackConfig instead."), bm(a, c, b.shakaConfig));
        a.g.configure(c)
    };
    bm = function(a, b, c, d) {
        d = void 0 === d ? "" : d;
        Object.keys(c).forEach(function(e) {
            var f = d ? d + "." + e : e;
            _.wa(b[e]) && _.wa(c[e]) ? bm(a, b[e], c[e], f) : (e in b && _.F(Xl, "overriding " + f + " Shaka configuration with custom value"), b[e] = c[e])
        })
    };
    am = function(a) {
        var b = {},
            c = a.licenseUrl;
        a = a.protectionSystem;
        if (!c) return {};
        if (a) {
            if (!_.db(dm, a)) return _.E(Xl, a + " is not a supported protection system by Shaka player."), {};
            var d = em[a];
            if (!d) return {};
            b[d] = c;
            return b
        }
        for (d in em) b[em[d]] = c;
        return b
    };
    Yl = function(a, b) {
        (b.manifestRequestHandler || b.segmentRequestHandler || b.licenseRequestHandler) && a.g.getNetworkingEngine().registerRequestFilter(function(c, d) {
            var e = {
                url: d.uris[0],
                headers: d.headers,
                content: d.body,
                withCredentials: d.allowCrossSiteCredentials
            };
            switch (c) {
                case a.I.net.NetworkingEngine.RequestType.MANIFEST:
                    _.z(b.manifestRequestHandler) && b.manifestRequestHandler(e);
                    break;
                case a.I.net.NetworkingEngine.RequestType.SEGMENT:
                    _.z(b.segmentRequestHandler) && b.segmentRequestHandler(e);
                    break;
                case a.I.net.NetworkingEngine.RequestType.LICENSE:
                    _.z(b.licenseRequestHandler) &&
                        b.licenseRequestHandler(e)
            }
            d.uris[0] = e.url;
            d.headers = e.headers;
            d.body = e.content;
            d.allowCrossSiteCredentials = e.withCredentials
        })
    };
    Zl = function(a, b) {
        var c = a.g.getNetworkingEngine(),
            d = a.I.net.NetworkingEngine.RequestType;
        c.registerResponseFilter(function(c, f) {
            var e = f.data,
                k;
            switch (c) {
                case d.MANIFEST:
                    _.z(b.manifestHandler) && e && (k = window.Promise.resolve(b.manifestHandler(String.fromCharCode.apply(String, _.la(new window.Uint16Array((new window.Uint16Array(new window.Uint8Array(e))).buffer))))).then(function(a) {
                        for (var b = new window.ArrayBuffer(2 * a.length), c = new window.Uint16Array(b), d = 0; d < a.length; d++) c[d] = a.charCodeAt(d);
                        f.data = (new window.Uint8Array(new window.Uint16Array(b))).buffer
                    }));
                    break;
                case d.SEGMENT:
                    a.lb();
                    _.z(b.segmentHandler) && (k = window.Promise.resolve(b.segmentHandler(new window.Uint8Array(e))).then(function(a) {
                        f.data = a.buffer
                    }));
                    Gl(a, new ol(f.timeMs, e.byteLength));
                    break;
                case d.LICENSE:
                    _.z(b.licenseHandler) && e && (k = window.Promise.resolve(b.licenseHandler(new window.Uint8Array(e))).then(function(a) {
                        f.data = a.buffer
                    }))
            }
            return k
        })
    };
    fm = function(a, b) {
        Fl(a, b, "loadedmetadata", a.vk.bind(a, b));
        Fl(a, b, "pause", a.Yg.bind(a));
        Fl(a, b, "play", a.wk.bind(a));
        Fl(a, b, "playing", a.jn.bind(a))
    };
    gm = function(a) {
        var b = {};
        a = _.n(a.g.getVariantTracks());
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = void 0;
            c.videoId ? d = "video" : c.audioId && (d = "audio");
            b[d] || (b[d] = []);
            b[d].push(c.bandwidth)
        }
        return b
    };
    hm = function(a, b, c) {
        return window.cast.A.common.Ac.si.then(function() {
            return new Wl(a, window.shaka, b, c)
        })
    };
    im = function(a, b) {
        tl.call(this, a, b);
        this.g = a.g;
        this.D = new window.Map;
        this.G = null
    };
    jm = function(a, b) {
        return new im(a, b)
    };
    km = function(a) {
        for (var b = {}, c = 0; c < a.length; c++) b[a[c].audioId] || (b[a[c].audioId] = a[c].id);
        var d = [],
            e;
        for (e in b) b.hasOwnProperty(e) && d.push(b[e]);
        return a.filter(function(a) {
            return d.includes(a.id)
        })
    };
    lm = function(a, b, c) {
        Dl.call(this, a, b, c)
    };
    mm = function(a, b) {
        Fl(a, b, "loadedmetadata", a.g.bind(a, b));
        Fl(a, b, "error", function() {
            Il(a, pd(b.error))
        })
    };
    nm = function(a) {
        tl.apply(this, arguments)
    };
    om = function(a, b) {
        return new nm(a, b)
    };
    sm = function() {
        this.g = pm;
        this.l = qm;
        this.h = rm
    };
    pm = function(a, b) {
        b = void 0 === b ? {} : b;
        b.url = b.url || a;
        return new window.cast.player.api.Host(b)
    };
    qm = function(a, b, c, d) {
        switch (a) {
            case "application/x-mpegurl":
            case "application/vnd.apple.mpegurl":
            case "audio/mpegurl":
            case "audio/x-mpegurl":
                return window.cast.player.api.CreateHlsStreamingProtocol(d, window.cast.A.media.Oa.nh(b), window.cast.A.media.Oa.oh(c));
            case "application/vnd.ms-sstr+xml":
                return window.cast.player.api.CreateSmoothStreamingProtocol(d);
            case "application/dash+xml":
                return window.cast.player.api.CreateDashStreamingProtocol(d);
            default:
                return _.Ea("Unsupported mimetype: " + a), window.cast.player.api.CreateHlsStreamingProtocol(d)
        }
    };
    rm = function(a) {
        return new window.cast.player.api.Player(a)
    };
    tm = function(a, b, c, d) {
        Dl.call(this, a, c, d);
        this.T = b
    };
    wm = function(a) {
        if (!a.B) {
            var b = a.l.playbackConfig;
            a.w = a.T.g(a.l.url, {
                disableSourceBufferTimeAdjust: b.disableSourceBufferTimeAdjust
            });
            um(a.w, b);
            a.w.onError = a.Xm.bind(a);
            a.w.onManifestReady = a.Rm.bind(a);
            a.w.processMetadata = function(b, d, e) {
                "EMSG" === b ? Gl(a, new al({
                    segmentData: d,
                    startTime: e
                })) : "ID3" === b ? Gl(a, new cl(d, e)) : _.E(vm, "MPL metadata event of type " + b + " was ignored.")
            };
            a.w.trackBandwidth = a.yk.bind(a);
            a.w.getQualityLevel = a.Sl.bind(a);
            a.g = a.T.l(a.l.mimeType, a.l.hlsSegmentFormat, a.l.hlsVideoSegmentFormat,
                a.w);
            a.B = a.T.h(a.w)
        }
    };
    um = function(a, b) {
        null != b.initialBandwidth && (a.initialBandwidth = b.initialBandwidth);
        null != b.autoResumeDuration && (a.autoResumeDuration = b.autoResumeDuration);
        null != b.autoResumeNumberOfSegments && (a.autoResumeNumberOfSegments = b.autoResumeNumberOfSegments);
        null != b.autoPauseDuration && (a.autoPauseDuration = b.autoPauseDuration);
        null != b.segmentRequestRetryLimit && (a.segmentRequestRetryLimit = b.segmentRequestRetryLimit);
        null != b.licenseUrl && (a.licenseUrl = b.licenseUrl);
        null != b.protectionSystem && (a.protectionSystem =
            b.protectionSystem);
        null != b.licenseCustomData && (a.licenseCustomData = b.licenseCustomData);
        null != b.manifestRequestHandler && (a.updateManifestRequestInfo = b.manifestRequestHandler);
        null != b.segmentRequestHandler && (a.updateSegmentRequestInfo = function(a) {
            b.segmentRequestHandler(a)
        });
        null != b.licenseRequestHandler && (a.updateLicenseRequestInfo = b.licenseRequestHandler);
        null != b.captionsRequestHandler && (a.updateCaptionsRequestInfo = b.captionsRequestHandler);
        null != b.manifestHandler && (a.processManifest = b.manifestHandler);
        null != b.segmentHandler && (a.processSegment = function(a, d) {
            b.segmentHandler(d)
        });
        null != b.licenseHandler && (a.processLicense = b.licenseHandler)
    };
    xm = function(a, b, c) {
        return window.cast.A.common.Ac.$f.then(function() {
            return new tm(a, new sm, b, c)
        })
    };
    ym = function(a, b) {
        tl.call(this, a, b);
        this.l = this.g = a.B;
        this.G = a.g;
        this.D = new window.Map
    };
    zm = function(a, b) {
        return new ym(a, b)
    };
    Cm = function(a, b) {
        a = a.toLowerCase();
        if (_.db(Am, a)) return a;
        if ("text/mp2t" == a) return "text/cea608";
        b = b ? b.toLowerCase() : null;
        switch (b) {
            case "ttml":
                return "application/ttml+xml";
            case "webvtt":
                return "text/vtt"
        }
        _.E(Bm, "cannot guess text mime type. Defaults to VTT");
        return "text/vtt"
    };
    Dm = function(a, b) {
        var c = a.mimeType.toLowerCase();
        switch (c) {
            case "application/x-mpegurl":
            case "application/vnd.apple.mpegurl":
            case "audio/mpegurl":
            case "audio/x-mpegurl":
            case "application/vnd.ms-sstr+xml":
            case "application/dash+xml":
                var d = xm,
                    e = zm;
                window.cast.A.common.Ac.Fi && "application/dash+xml" == c && (d = hm, e = jm);
                return d(a, b, e)
        }
        return c.startsWith("image/") ? _.H(new Rl(a)) : _.H(new lm(a, b, om))
    };
    Em = function(a, b, c) {
        this.seekFrom = a;
        this.seekTo = b;
        this.breaks = c
    };
    Fm = function(a) {
        this.break = a
    };
    _.Gm = function(a, b) {
        this.breaks = a;
        this.breakClips = b
    };
    N = function() {};
    Hm = function(a, b, c) {
        this.h = a;
        this.l = b;
        this.g = c
    };
    Im = function(a, b) {
        b.breakId = a.h.id;
        b.breakClipId = a.g.id;
        a = a.g.whenSkippable;
        _.u(a) && (b.whenSkippable = a)
    };
    Lm = function(a, b, c, d) {
        c = void 0 === c ? [] : c;
        d = void 0 === d ? [] : d;
        this.g = [];
        this.h = new window.Map;
        this.B = new window.Map;
        this.isEmbedded = a;
        this.o = b;
        this.la = new Pk;
        this.F = 0;
        this.w = !1;
        Jm(this, d);
        Km(this, c);
        b = this.Ub();
        a = fb(this.g);
        b = fb(b);
        this.D = new _.Gm(a, b)
    };
    Jm = function(a, b) {
        b.forEach(function(b) {
            Mm(a, b) && a.h.set(b.id, b)
        })
    };
    Km = function(a, b) {
        b.forEach(function(b) {
            a: {
                if (Nm(a, b))
                    if (0 > b.position) 0 == a.g.length || 0 <= a.g[a.g.length - 1].position ? a.g.push(b) : a.g[a.g.length - 1].breakClipIds.push.apply(a.g[a.g.length - 1].breakClipIds, _.la(b.breakClipIds));
                    else {
                        for (var c = 0; c < a.g.length; c++) {
                            var e = a.g[c];
                            if (e.position == b.position) {
                                e.breakClipIds.push.apply(e.breakClipIds, _.la(b.breakClipIds));
                                b = void 0;
                                break a
                            }
                            if (e.position > b.position || 0 > e.position) {
                                a.g.splice(c, 0, b);
                                b = void 0;
                                break a
                            }
                        }
                        a.g.push(b)
                    }
                b = void 0
            }
            return b
        })
    };
    Mm = function(a, b) {
        return b.id ? a.isEmbedded && (!_.u(b.duration) || 0 >= b.duration) ? (_.C(Rm, "Break Clip with invalid duation is ignored"), !1) : a.h.has(b.id) ? (_.E(Rm, "Duplicate break clip id, " + b.id + ", clip is ignored"), !1) : !0 : (_.C(Rm, "Break Clip with no clip id is ignored"), !1)
    };
    Nm = function(a, b) {
        if (!b.id) return _.C(Rm, "Break with no clip is ignored"), !1;
        if (a.isEmbedded && !b.isEmbedded) return _.C(Rm, "Stitched break is ignored in embedded timeline"), !1;
        if (!a.isEmbedded && b.isEmbedded) return _.C(Rm, "Embedded break is ignored in stitched timeline"), !1;
        if (!_.u(b.position)) return _.C(Rm, "Break with no position is ignored."), !1;
        if (0 > b.position && b.isEmbedded) return _.C(Rm, "Break with negative position is ignored."), !1;
        var c = b.breakClipIds || [],
            d = c.filter(function(b) {
                return a.h.has(b)
            });
        d.length < c.length && (_.E(Rm, "Unknown clip id in break is ignored."), b.breakClipIds = d);
        return 0 == d.length ? (_.C(Rm, "Break with no break clips is ignored."), !1) : !0
    };
    Sm = function(a, b, c, d) {
        var e = [];
        d.forEach(function(b) {
            if (!b.id) {
                for (; a.h.has("GENERATED:" + a.F);) a.F++;
                b.id = "GENERATED:" + a.F
            }
            a.h.has(b.id) ? a.h.get(b.id) !== b && _.E(Rm, "BreakClip with existing id is ignored. BreakClip id = " + b.id) : Mm(a, b) && a.h.set(b.id, b);
            e.push(b.id)
        });
        b.breakClipIds.splice.apply(b.breakClipIds, [c, 1].concat(_.la(e)))
    };
    Tm = function(a, b) {
        b.isWatched || (a.w = !0);
        b.isWatched = !0;
        a.B.has(b.id) && (a.B.get(b.id).forEach(function(a) {
            a.isWatched = !0
        }), a.B.delete(b.id))
    };
    Um = function(a, b, c, d, e) {
        this.va = a;
        this.Aa = b.contentUrl || b.contentId;
        this.G = c;
        this.Ea = e;
        this.la = new Pk;
        this.g = this.mediaElement = null;
        this.timeline = d;
        this.h = null;
        this.N = this.isPlayingBreak = !1;
        this.U = this.P = this.V = _.x;
        this.w = 1;
        this.ca = Qc();
        this.ca.g.then(this.Qm.bind(this));
        this.oa = Qc();
        this.F = window.NaN;
        a = new xd;
        b.tracks && (a.tracks = window.cast.A.K.tg(b.tracks));
        b.textTrackStyle && (a.textTrackStyle = window.cast.A.K.Bi(b.textTrackStyle));
        this.C = a;
        this.L = Qc();
        this.ja = !1;
        this.T = this.ga = null;
        this.la.addEventListener("BREAK_STARTED",
            this.Zn, this);
        this.la.addEventListener("BREAK_ENDED", this.Yn, this);
        this.la.addEventListener("CLIP_STARTED", this.ao, this);
        this.la.addEventListener("CLIP_ENDED", this.$n, this)
    };
    Vm = function(a) {
        if (!a.h) return !1;
        var b = a.h.g.whenSkippable;
        a = a.Db();
        return _.u(b) && Number(b) <= a
    };
    Wm = function(a) {
        return a.g ? a.g.Re() : {}
    };
    Xm = function(a, b, c, d, e, f) {
        a.mediaElement = b;
        a.C.activeTrackIds = e || a.C.activeTrackIds;
        return a.Hf(c, d).then(function() {
            3 > a.w && (a.w = 3);
            a.Qb(f);
            return a.oa.g
        })
    };
    Ym = function(a, b) {
        a.g && a.g.Ua() && (b.startAbsoluteTime || (a = (a = a.g.Va()) ? a.end : 0, b.startAbsoluteTime = (0, _.J)() / 1E3 - a), b.metadata && (0 == b.metadata.sectionStartTimeInMedia || b.metadata.sectionStartTimeInMedia ? b.metadata.sectionStartAbsoluteTime = b.metadata.sectionStartTimeInMedia + b.startAbsoluteTime : b.metadata.sectionStartAbsoluteTime ? b.metadata.sectionStartTimeInMedia = b.metadata.sectionStartAbsoluteTime - b.startAbsoluteTime : b.metadata.sectionDuration && (b.metadata.sectionStartTimeInMedia = 0, b.metadata.sectionStartAbsoluteTime =
            b.startAbsoluteTime)))
    };
    Zm = function(a, b, c, d) {
        var e = b.h,
            f = b.g;
        b = b.l + 1;
        var g = e.breakClipIds.length,
            k = f.whenSkippable,
            l = a.Db() || 0;
        "BREAK_CLIP_ENDED" == c && (l = _.r(a.I) ? a.I : l);
        a.la.dispatchEvent(new ll(c, l, b, g, k, d, f.id, e.id))
    };
    an = function(a) {
        a.w = 4;
        "PAUSED" == a.getState() && $m(a)
    };
    cn = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        var e = c != a.h,
            f = !1;
        a.h && e && Zm(a, a.h, "BREAK_CLIP_ENDED", d);
        a.h && "BREAK_ENDED" == b && (Zm(a, a.h, b), f = !0, a.isPlayingBreak = !1, a.N = !1);
        if (a.h = c) mj("Cast.CAF.AdMimeType", bn[a.h.g.contentType] || 0), d = a.h.g, f = d.whenSkippable, oj("Cast.CAF.AdSkippable", null != f && f < d.duration), a.isPlayingBreak || (Zm(a, c, "BREAK_STARTED"), a.isPlayingBreak = !0, a.N = Vm(a), d = c.h, Tm(a.timeline, d)), e && "BREAK_CLIP_STARTED" == b && Zm(a, c, "BREAK_CLIP_LOADING"), Zm(a, c, b), f = !0;
        f && $m(a)
    };
    $m = function(a) {
        var b = a.ja || a.timeline.w;
        a.Ea(b);
        b && (a.timeline.w = !1, a.ja = !1)
    };
    dn = function(a, b, c) {
        a.g.la.addEventListener(b, c, a)
    };
    en = function(a) {
        a.g.la.De(a.la);
        dn(a, "ERROR", a.ke);
        dn(a, "TIME_UPDATE", a.nd)
    };
    Ck = function(a) {
        return a.g && a.g.h
    };
    fn = function(a, b, c, d, e) {
        Um.call(this, a, b, c, d, e);
        this.l = null
    };
    hn = function(a, b) {
        var c = a.timeline;
        _.r(b) && (b = gn(c, b));
        return Dm(a.G, b)
    };
    jn = function(a, b, c, d, e) {
        Um.call(this, a, b, c, d, e);
        this.B = this.X = null;
        this.D = this.timeline;
        this.J = this.l = this.o = null;
        this.M = void 0;
        this.aa = Qc();
        this.ha = 1;
        this.D.la.De(this.la)
    };
    on = function(a, b, c, d) {
        kn(a);
        return ln(a.D, b, 0, a.G).then(function(b) {
            if (!b) return _.F(mn, "Fail to create seek clip"), !1;
            Dm(b.g, b.startTime).then(function(e) {
                var f = _.r(d) ? "PLAYBACK_START" == d : !a.mediaElement.paused;
                if (a.g) {
                    a.g.la.removeEventListener("CLIP_ENDED", a.Te);
                    var k = a.g.end("STOPPED")
                } else k = _.H();
                a.J = c;
                k.then(function() {
                    nn(a, e, b, f)
                })
            });
            return !0
        })
    };
    kn = function(a) {
        a.l && (a.l.cancel("0"), a.l = null);
        a.B && (a.B.cancel("0"), a.B = null)
    };
    rn = function(a, b) {
        a.l = pn(a.D, b, a.G);
        var c = a.l;
        a.B = _.Sc(a.l.then(function(b) {
            return b ? Dm(b.g, b.startTime).then(function(c) {
                var d = null;
                b.breakStatus || (qn(a, c), d = a.C);
                a.aa.g.then(function() {
                    _.F(mn, "Preloading Next Clip");
                    c.fc(d)
                });
                return c
            }) : (_.F(mn, "No more clip afterwards"), null)
        }), function(a) {
            a && "0" === a.message && _.F(mn, "Next player creation is interrupted by seek.")
        }).then(function(b) {
            if (b) return b;
            c === a.l && (a.l = null);
            _.F(mn, "No more player afterwards");
            return null
        })
    };
    sn = function(a) {
        _.F(mn, "switchPlayerAndCip");
        if (a.l) {
            if (a.B) return _.Sc(_.Lc([a.l, a.B]).then(function(b) {
                var c = _.n(b);
                b = c.next().value;
                c = c.next().value;
                if (!b || !c) return !0;
                a.l = null;
                a.B = null;
                nn(a, c, b, !0);
                return !1
            }), function(a) {
                if (a && "0" === a.message) return _.F(mn, "Player switching is interrupted by seek."), !1;
                _.C(mn, "Switch player failed " + a.message);
                return !0
            });
            _.F(mn, "switchPlayerAndClip_: No next player.");
            return _.H(!0)
        }
        _.F(mn, "switchPlayerAndClip_: No next clip.");
        return _.H(!0)
    };
    nn = function(a, b, c, d) {
        _.F(mn, "loadCurrentPlayerAndCreateNext_: " + c.startTime);
        window.cast.A.common.ia.Fh(b);
        a.g = b;
        a.o = c;
        en(a);
        dn(a, "CLIP_STARTED", a.Nm);
        dn(a, "CLIP_ENDED", a.Te);
        a.o.breakStatus && cn(a, "BREAK_CLIP_LOADING", a.o.breakStatus, a.M);
        a.M = void 0;
        var e = c.breakStatus ? null : a.C,
            f = a.mediaElement;
        a.aa = Qc();
        b = b.Jd(f, d, e).then(function() {
            a.o.breakStatus || Um.prototype.Qb.call(a, a.ha)
        });
        rn(a, c);
        return b
    };
    tn = function(a) {
        return (a.X || Dm(a.G, 0)).then(function(b) {
            b.la.addEventListener("ERROR", function(b) {
                return Um.prototype.ke.call(a, b)
            });
            var c = qn(a, b);
            b.Jd(a.mediaElement, !1, a.C);
            return c.then(function() {
                return b.end("STOPPED")
            })
        })
    };
    qn = function(a, b) {
        var c = b.getDurationSec().then(function(b) {
            a.ca.resolve(b)
        });
        b = Jl(b).then(function(b) {
            a.oa.resolve(b)
        });
        return _.Lc([c, b])
    };
    wn = function(a, b, c) {
        b = void 0 === b ? [] : b;
        c = void 0 === c ? [] : c;
        Lm.call(this, !0, a, b, c);
        this.l = [];
        this.C = new un;
        a = 0;
        b = _.n(this.g);
        for (c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            for (var d = 0, e = 0; e < c.breakClipIds.length; e++) {
                var f = this.eb(c.breakClipIds[e]);
                f && (this.l.push(new vn(c, f, e, a, d)), d += f.duration)
            }
            a += d
        }
    };
    gn = function(a, b) {
        return (a = a.l.slice(0).reverse().find(function(a) {
            return a.bf < b
        })) ? a.gc + (b - a.bf) : b
    };
    xn = function(a, b) {
        return a.l.find(function(a) {
            return a.Lb <= b && (0 > a.gc || b <= a.gc)
        }) || null
    };
    zn = function(a, b) {
        if (yn(a.C, b)) return a.C.g;
        var c = null,
            d = xn(a, b);
        if (d) {
            c = a.g.find(function(a) {
                return a == d.Ug
            });
            var e = d.Lb;
            var f = d.gc;
            c = new Hm(c, d.l, d.h)
        } else f = a.l.find(function(a) {
            return a.Lb > b
        }), e = b, f = f ? f.Lb : window.Infinity, c = null;
        a.C.cache(c, e, f);
        return c
    };
    An = function(a, b) {
        return (a = xn(a, b)) ? a.gc : b
    };
    Bn = function(a, b) {
        return a.l.slice(0).reverse().find(function(a) {
            return a.Ug === b
        }).gc
    };
    vn = function(a, b, c, d, e) {
        this.Ug = a;
        this.h = b;
        this.bf = a.position;
        this.g = a.position + d;
        this.Lb = this.g + e;
        this.gc = this.Lb + b.duration;
        this.l = c
    };
    un = function() {
        this.h = this.l = this.g = null
    };
    yn = function(a, b) {
        return a.l < b && b < a.h
    };
    Cn = function(a, b, c, d) {
        d = void 0 === d ? window.Infinity : d;
        this.g = a;
        this.breakStatus = b;
        this.startTime = void 0 === c ? 0 : c;
        this.endTime = d
    };
    Dn = function(a, b, c) {
        b = void 0 === b ? [] : b;
        c = void 0 === c ? [] : c;
        Lm.call(this, !1, a, b, c)
    };
    Gn = function(a, b, c) {
        return _.H().then(function() {
            var d = a.g.find(function(c) {
                return !(c.isWatched && !a.o.Wb()) && c.position == b
            });
            return d ? _.Sc(ln(a, d, 0, c), function() {
                _.F(En, "createMediaClipAt: Cannot create a stitching media clip");
                return null
            }) : null
        }).then(function(d) {
            return d ? d : new Cn(c, null, b, Fn(a, b))
        })
    };
    pn = function(a, b, c) {
        return _.H().then(function() {
            if (b.isPlayingBreak()) {
                var d = b.breakStatus,
                    e = d.h,
                    f = d.l + 1;
                return _.H().then(function() {
                    if (e.breakClipIds.length > f) return _.Sc(ln(a, e, f, c), function(a) {
                        if (a instanceof Dc) return _.Ic(a);
                        _.F(En, "createNextMediaClip: Cannot create stitching clip in break.")
                    });
                    _.F(En, "createNextMediaClip: No more break clip");
                    return null
                }).then(function(a) {
                    if (a) return a;
                    a = d.h.position;
                    _.F(En, "createNextMediaClip: The current break status position is: " + a);
                    return a
                })
            }
            var g =
                a.g.find(function(c) {
                    return !(c.isWatched && !a.o.Wb()) && (c.position >= b.endTime || 0 > c.position)
                });
            if (g) return _.Sc(ln(a, g, 0, c), function(a) {
                return a instanceof Dc ? _.Ic(a) : null
            }).then(function(a) {
                if (a) return a;
                _.F(En, "createNextMediaClip: next break is skipped.");
                return g.position
            });
            _.F(En, "createNextMediaClip: No next break");
            return -1
        }).then(function(b) {
            return "number" !== typeof b ? b : 0 > b ? (_.F(En, "createNextMediaClip: No more clip"), null) : new Cn(c, null, b, Fn(a, b))
        })
    };
    ln = function(a, b, c, d) {
        var e = _.H();
        0 === c && (e = Hn(a, b));
        return e.then(function() {
            for (var e = c; e < b.breakClipIds.length; e++) {
                var g = b;
                var k = e,
                    l = d,
                    p = a.eb(g.breakClipIds[k]);
                p ? g = new Cn(window.cast.A.media.util.$l(p, l.playbackConfig), new Hm(g, k, p), 0) : (_.F(En, "createStitchingMediaClipAt_:No next clip at " + k), g = null);
                if (g) return g
            }
            _.F(En, "createValidStitchingClip:No more valid break clip in a break");
            return null
        })
    };
    Hn = function(a, b) {
        if (0 === b.breakClipIds.length) return _.H();
        var c = new Fm(b),
            d = b.breakClipIds.map(function(b) {
                return (b = a.eb(b)) ? (b = new window.Proxy(b, {
                    set: function(b, c, d) {
                        d !== b[c] && (b[c] = d, a.w = !0);
                        return !0
                    }
                }), a.o.L(b, c)) : _.H([])
            });
        return Mc(d).then(function(c) {
            var d = 0,
                e = b.breakClipIds.slice();
            c.forEach(function(c) {
                c.kf ? (Sm(a, b, d, c.value), d += c.value.length) : (a.la.dispatchEvent(new bl(901, Error(c.reason))), d++)
            });
            Pa(e, b.breakClipIds) || (a.w = !0)
        })
    };
    In = function(a, b, c) {
        var d = b > c,
            e = d ? c : b,
            f = d ? b : c;
        return a.g.filter(function(a) {
            return a.position > e && a.position <= f
        })
    };
    Fn = function(a, b) {
        var c = a.g.find(function(c) {
            return !(c.isWatched && !a.o.Wb()) && c.position > b
        });
        return c ? c.position : window.Infinity
    };
    Jn = function(a) {
        this.g = a
    };
    Kn = function(a, b, c, d) {
        return b.N(c).then(function() {
            var e = null;
            c.breaks && 0 !== c.breaks.length || !c.vmapAdsRequest || (e = b.G(c.vmapAdsRequest).then(function(a) {
                a && (c.breaks = a.breaks, c.breakClips = a.breakClips)
            }));
            return _.H(e).then(function() {
                if (c.breaks && 0 < c.breaks.length && !c.breaks[0].isEmbedded) {
                    var e = new Dn(b, c.breaks, c.breakClips);
                    var g = new jn(b, c, d, e, a.g)
                } else e = new wn(b, c.breaks, c.breakClips), g = new fn(b, c, d, e, a.g);
                b.U(e);
                return _.H(g)
            })
        })
    };
    Ln = function(a) {
        this.g = a
    };
    O = function(a) {
        if (!(a instanceof Ln)) throw _.C(Mn, "Proper Player object can be acquried by calling getPlayer() of cast.framework.Application object"), Error("player is not created properly.");
        this.o = new Pk;
        this.Tb = new Jn(this.$.bind(this));
        this.g = new Kk;
        this.B = new Kk;
        this.l = null;
        this.G = Qc();
        this.w = Fe.H();
        this.ga = this.La = this.F = this.h = this.Aa = this.oa = this.X = this.ca = this.U = this.T = null;
        this.L = new Bk(new zk);
        this.D = new M(new Ik);
        this.Ta = new Hk(new Gk);
        this.M = a.g;
        this.lb = 1;
        this.P = new window.Map;
        this.C = 0;
        this.N = null;
        this.J = 1;
        this.V = this.I = null;
        this.aa = !1;
        this.Ea = (0, _.J)();
        this.ja = this.va = 0;
        this.ha = !1;
        Nn(this)
    };
    Nn = function(a) {
        Sk(a.o, function(b, d) {
            "ERROR" !== b && a.o.dispatchEvent(new bl(900, d))
        });
        a.o.addEventListener("MEDIA_FINISHED", a.Wm, a);
        a.o.addEventListener("LIVE_IS_MOVING_WINDOW_CHANGED", a.$, a);
        a.o.addEventListener("LIVE_ENDED", a.$, a);
        a.o.addEventListener("RATE_CHANGE", a.kn, a);
        a.o.addEventListener("ERROR", a.nk, a);
        a.o.addEventListener("REQUEST_PRECACHE", a.Rb, a);
        a.o.addEventListener("BUFFERING", a.Pd, a);
        a.w.w = a.nn.bind(a);
        a.w.o = a.Sm.bind(a);
        Lk(a.B, "LOAD_BY_ENTITY", a.w.o.bind(a.w));
        a.w.o = a.B.g;
        Lk(a.B, "SET_CREDENTIALS",
            a.w.w.bind(a.w));
        a.w.w = a.B.g;
        a.w.C = a.B.g;
        a.w.D = a.B.g;
        a.w.F = a.B.g;
        a.w.G = a.B.g;
        a.w.g = a.Vf.bind(a);
        var b = Object.keys(On).reduce(function(b, d) {
            b[d] = a.zf.bind(a);
            return b
        }, {});
        Nk(a.g, b);
        b = Object.keys(Pn).reduce(function(b, d) {
            b[d] = a.zf.bind(a);
            return b
        }, {});
        Nk(a.B, b);
        window.cast.A.common.Ac.$f.then(function() {
            _.pa("cast.player.api.ContentCache.setCacheInsertCallback") && (window.cast.player.api.ContentCache.setCacheInsertCallback(a.Km.bind(a)), window.cast.player.api.ContentCache.setCacheHitCallback(a.Jm.bind(a)))
        })
    };
    Qn = function(a) {
        var b = (0, _.J)(),
            c = (b - a.Ea) / 1E3;
        a.Ea = b;
        a.ha && (a.aa ? a.ja += c : a.va += c)
    };
    Rn = function(a) {
        return (a = a.X.getVideoPlaybackQuality && a.X.getVideoPlaybackQuality()) ? {
            droppedFrames: a.droppedVideoFrames,
            decodedFrames: a.totalVideoFrames,
            height: a.videoHeight,
            width: a.videoWidth
        } : {}
    };
    Tn = function(a, b, c) {
        mj("Cast.CAF.EventListenerAdded", window.cast.A.common.ia.mh(b));
        if (!_.db(Sn, b)) throw a = "addEventListener(" + b + ") failed due to invalid event type", _.C(Mn, a), Error(a);
        a.o.addEventListener(b, c)
    };
    Un = function(a, b, c) {
        mj("Cast.CAF.EventListenerRemoved", window.cast.A.common.ia.mh(b));
        a.o.removeEventListener(b, c)
    };
    Vn = function(a, b, c, d, e) {
        a.l.za(b.senderId, b.data.requestId, c || ("LOAD" == b.data.type ? "LOAD_FAILED" : "ERROR"), void 0 === d ? "APP_ERROR" : d, e)
    };
    Wn = function(a) {
        mj("Cast.CAF.MessageInterceptorDuration", (0, _.J)() - a)
    };
    Xn = function(a) {
        return function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
            var e = (0, _.J)();
            return window.Promise.resolve(a.apply(null, _.la(c))).then(function(a) {
                Wn(e);
                return a
            }).catch(function(a) {
                Wn(e);
                return window.Promise.reject(a)
            })
        }
    };
    Yn = function(a, b) {
        b.requestId = a.lb++;
        var c = Qc();
        a.P.set(b.requestId, c);
        return window.Promise.resolve(c.g)
    };
    Zn = function(a, b) {
        if (b) {
            a.C = 0;
            var c = a.P.get(b);
            c && (c.resolve(), a.P.delete(b))
        }
    };
    $n = function(a, b, c) {
        if (b) {
            a.C = 0;
            var d = a.P.get(b);
            d && (d.reject(c), a.P.delete(b))
        }
    };
    ao = function(a) {
        var b = a.D.getTracks().length;
        mj("Cast.CAF.NumSubtitles", b);
        a.D.getTracks().forEach(function(a) {
            (a = a.trackContentType) && mj("Cast.CAF.SubtitleType", bn[a] || 0)
        })
    };
    bo = function(a, b) {
        var c = b.media,
            d = Object.assign(new Fk, a.ga);
        a.T && (d = a.T(b, d));
        var e = a.U ? a.U(b) : c.contentUrl || c.contentId;
        return _.H(d).then(function(b) {
            return b ? _.H(e).then(function(d) {
                if (!d) return _.C(Mn, "Load failed, missing content url."), _.Ic();
                d = window.cast.A.media.util.rh(c, b, d);
                c.contentType = d.mimeType;
                return Kn(a.Tb, a.M, c, d)
            }) : (_.C(Mn, "Load failed, missing playback config."), _.Ic())
        })
    };
    co = function(a, b) {
        if (a.h && Ck(a.h)) {
            var c = a.D,
                d = c.lh();
            0 < d.length ? a.I = d[0].language || null : b && null != a.I ? 0 < c.Yd(a.I).length && c.Ae(a.I) : a.I = null;
            (d = c.Yb()) ? a.V = d: b && null != a.V && c.yb(a.V)
        }
    };
    P = function() {
        this.h = null;
        this.F = this.I.bind(this);
        this.D = this.J.bind(this);
        this.B = !1;
        this.o = this.w = this.l = this.g = null;
        this.C = void 0
    };
    eo = function(a, b, c) {
        try {
            var d = a(b, c);
            return _.H(d)
        } catch (e) {
            return _.Ic(e)
        }
    };
    go = function(a) {
        if (null !== a && !_.z(a)) throw _.C(fo, "Fail to set interceptor since interceptor is not a function"), Error("Fail to set interceptor since interceptor is not a function");
    };
    ho = function(a) {
        if (a.vmapAdsRequest) return !0;
        if (a.breakClips) {
            a = _.n(a.breakClips);
            for (var b = a.next(); !b.done; b = a.next())
                if (b = b.value, b.vastAdsRequest && !b.contentId) return !0
        }
        return !1
    };
    io = function() {
        this.progressCurrentTime = null;
        this.progressDuration = -1;
        this.isDurationVisible = !0;
        this.seekableRange = this.liveProgressStart = null;
        this.timeOffset = 0;
        this.isPlayingLive = !1
    };
    jo = function(a, b, c, d) {
        this.name = a;
        this.isRemoteControl = void 0 === d ? !1 : d;
        this.iconUrl = b;
        this.groupName = void 0 === c ? "" : c
    };
    ko = function() {
        this.applicationData = null;
        this.state = "launching";
        this.isSeeking = !1;
        this.currentTime = this.duration = 0;
        this.playbackRate = 1;
        this.metadata = null;
        this.mediaSessionId = 0;
        this.queueData = this.media = null;
        this.nextThumbnailUrl = this.nextSubtitle = this.nextTitle = this.thumbnailUrl = this.subtitle = this.title = "";
        this.preloadingNext = !1;
        this.contentType = null;
        this.supportedMediaCommands = 0;
        this.isLive = !1;
        this.sectionDuration = this.sectionStartTimeInMedia = this.mediaStartAbsoluteTime = this.liveSeekableRange = null;
        this.breakPercentagePositions = [];
        this.isBreakSkippable = this.isPlayingBreak = !1;
        this.whenSkippable = void 0;
        this.currentBreakClipNumber = this.numberBreakClips = 0;
        this.breakTitle = "";
        this.displayStatus = !1;
        this.displayType = "tv";
        this.presentation = new io;
        this.customState = null;
        this.activeTrackIds = []
    };
    lo = function(a, b, c) {
        this.type = a;
        this.field = b;
        this.value = c
    };
    mo = function() {};
    Q = function(a) {
        if (!(a instanceof mo)) throw _.C(no, "CastReceiverContext is a singleton.Please call CastReceiverContext.getInstance() instead."), Error("CastReceiverContext is not created properly.");
        ae || (ae = new $d);
        ae && be();
        window.cast.receiver.vb.w(window.cast.Gg ? 0 : 1E3);
        gc(no, fe, "CAF Recever Version: " + window.cast.A.VERSION);
        window.cast.A.common.ia.ym();
        this.h = _.Ld.H();
        this.w = new P;
        this.l = new O(new Ln(this.w));
        this.w.w = this.l;
        this.g = null;
        this.o = !1
    };
    oo = function(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        a.o || (oj("Cast.CAF.UseLegacy", b), window.cast.A.common.Ac.load(b, c, d), a.o = !0)
    };
    qo = function() {
        var a = window.document.getElementsByTagName("video"),
            b = window.document.getElementsByTagName("audio"),
            c = po();
        if (0 == a.length && 0 == b.length && !c) return _.E(no, "MediaElement is not created yet"), null;
        if (c) return c.getMediaElement();
        c = _.n(a);
        for (var d = c.next(); !d.done; d = c.next())
            if (d = d.value, d.classList && d.classList.contains("castMediaElement")) return d;
        c = _.n(b);
        for (d = c.next(); !d.done; d = c.next())
            if (d = d.value, d.classList && d.classList.contains("castMediaElement")) return d;
        return 0 < a.length ? a[0] :
            b[0]
    };
    po = function() {
        var a = window.document.getElementsByTagName("cast-media-player");
        return 0 < a.length ? a[0] : null
    };
    ro = function(a, b) {
        return Md(a.h, b, window.cast.A.K.Ai(a.g && a.g.customNamespaces && a.g.customNamespaces[b] || "JSON"))
    };
    to = function() {
        so || (so = new Q(new mo));
        return so
    };
    wo = function() {
        var a = this;
        this.h = new Pk;
        this.g = to();
        if (this.l = this.g.isRemoteControl()) gc(uo, fe, "App Running as a Remote Control"), this.g.Rg("urn:x-cast:com.google.cast.remotecontrol", this.o.bind(this)), this.addEventListener("APPLICATION_CHANGED", function() {
            return vo(a, new Ej)
        })
    };
    vo = function(a, b) {
        a.g.ki("urn:x-cast:com.google.cast.remotecontrol", "system-0", b)
    };
    xo = function() {
        this.g = Qc();
        this.h = _.Lc([cd(), this.g.g])
    };
    yo = function() {
        Ug.call(this);
        var a = this;
        this.w = to().isRemoteControl();
        this.B = window.cast.A.Le.H();
        this.w && this.B.addEventListener("MEDIA_STATUS", function(b) {
            b && b.status && b.status[0] && (a.o = b.status[0].mediaSessionId)
        })
    };
    Co = function(a) {
        this.o = to();
        this.h = this.o.l;
        this.D = window.cast.A.Le.H();
        this.w = new Pk;
        this.l = void 0;
        this.N = !1;
        this.L = [];
        this.F = 0;
        this.g = zo(this, a);
        Ao(this);
        this.G = this.I = this.J = this.C = this.B = null;
        this.M = new Ki;
        Bo(this)
    };
    zo = function(a, b) {
        return new window.Proxy(b, {
            set: function(b, d, e) {
                if (e === b[d] && "object" != typeof e) return !0;
                b[d] = e;
                b = new lo(d + window.cast.A.O.Z, d, e);
                a.N ? a.L.push(b) : a.w.dispatchEvent(b);
                return !0
            }
        })
    };
    Do = function(a, b) {
        return function(c) {
            for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
            a.N = !0;
            b.apply(null, _.la(d));
            for (a.N = !1; 0 < a.L.length;) d = a.L.shift(), a.w.dispatchEvent(d)
        }
    };
    Jo = function(a, b) {
        b = (a.g.media = b) || new uj;
        a: {
            switch ((b.contentType || "").toLowerCase().split("/")[0]) {
                case "image":
                    var c = "image";
                    break a;
                case "audio":
                    c = "audio";
                    break a
            }
            c = "video"
        }
        a.g.contentType = c;
        a.g.isLive = "LIVE" == b.streamType;
        a.g.metadata = b.metadata || null;
        c = b.metadata || {};
        a.g.title = c.title || "";
        a.g.subtitle = c.subtitle || "";
        c = c.images;
        a.g.thumbnailUrl = c && c[0] && c[0].url || "";
        a.F = 0;
        Eo(a, Fo(a));
        Go(a);
        Ho(a, b);
        Io(a)
    };
    Ko = function(a, b) {
        b ? (a.g.preloadingNext = !0, a.g.nextTitle = b.title || "", a.g.nextSubtitle = b.subtitle || "", a.g.nextThumbnailUrl = b.images && b.images[0] && b.images[0].url || "") : (a.g.preloadingNext = !1, a.g.nextTitle = "", a.g.nextSubtitle = "", a.g.nextThumbnailUrl = "")
    };
    Lo = function(a, b) {
        return a && _.u(b) && !(0, window.isNaN)(b) && 0 != b ? a.map(function(a) {
            return 0 > a.position ? 100 : Math.min(100, a.position / b * 100)
        }) : []
    };
    Bo = function(a) {
        a.o.isRemoteControl() ? (a.M.l = Do(a, function() {
            var b = a.M;
            a.g.currentTime = b.g ? b.g.currentTime : b.h ? b.w + ((new Date).getTime() - b.C) / 1E3 * b.o : b.w || 0;
            Io(a);
            Mo(a)
        }), a.D.addEventListener("MEDIA_STATUS", Do(a, function(b) {
            if (b && b.status && b.status[0]) {
                var c = b.status[0];
                if ("IDLE" != c.playerState || !c.extendedStatus || "LOADING" !== c.extendedStatus.playerState) {
                    c.media && (Jo(a, c.media), c.breakStatus || (a.g.duration = c.media.duration || 0), No(a, c.media, c.liveSeekableRange));
                    c.breakStatus ? (a.g.isPlayingBreak = !0,
                        a.l = c.breakStatus.whenSkippable, Oo(a, c.breakStatus)) : (a.g.isPlayingBreak = !1, a.l = void 0);
                    switch (c.playerState) {
                        case "IDLE":
                            Po(a, "idle");
                            break;
                        case "PLAYING":
                            Po(a, "playing");
                            break;
                        case "PAUSED":
                            Po(a, "paused");
                            break;
                        case "BUFFERING":
                            Po(a, "buffering")
                    }
                    Qo(a, c);
                    b = a.M;
                    c = window.cast.A.K.Un(c);
                    var d = c.breakStatus ? c.breakStatus.currentBreakClipTime : c.currentTime;
                    _.u(d) && (0, window.isFinite)(d) && !(0, window.isNaN)(d) ? Mi(b, d) : b.h && (Mi(b, b.w + ((new Date).getTime() - b.C) / 1E3 * b.o), "IDLE" !== c.playerState && (b.g || _.E(Ro,
                        "currentTime was not synchronized from Media Status. Possible incorrect progress bar position")));
                    "IDLE" === c.playerState && c.extendedStatus && "LOADING" === c.extendedStatus.playerState && Mi(b, 0);
                    "PLAYING" === c.playerState ? Li(b) : (b.h = !1, (0, window.clearInterval)(b.F));
                    if (d = !c.breakStatus) d = c.playbackRate, d = _.u(d) && (0, window.isFinite)(d) && !(0, window.isNaN)(d);
                    b.o = d ? c.playbackRate : 1
                }
            }
        })), a.D.addEventListener("APPLICATION_CHANGED", function(b) {
            var c = "",
                d = b.iconUrl,
                e = b.deviceName || "";
            if (b = b.application) c = b.displayName,
                b = b.appImages, d = d || b && b[0] && b[0].url || "";
            a.g.applicationData = new jo(c, d, e, !0)
        }), a.D.addEventListener("CUSTOM_STATE", function(b) {
            a.g.customState = b.state
        })) : (a.h.addEventListener("MEDIA_FINISHED", Do(a, function() {
            So(a);
            Po(a, "idle")
        })), a.h.addEventListener("PLAYER_LOADING", Do(a, function(b) {
            Jo(a, b.media);
            "image" === a.g.contentType ? Po(a, "playing") : Po(a, "loading")
        })), a.h.addEventListener("PLAYER_LOAD_COMPLETE", Do(a, function(b) {
            Jo(a, b.media);
            "PAUSED" == a.h.Xb() && Po(a, "paused");
            No(a, b.media, a.h.Va())
        })), a.h.addEventListener("MEDIA_INFORMATION_CHANGED",
            Do(a, function(b) {
                Jo(a, b.media)
            })), a.h.addEventListener("PLAYING", Do(a, function() {
            return Po(a, "playing")
        })), a.h.addEventListener("PAUSE", Do(a, function(b) {
            b.ended ? Ko(a, void 0) : Po(a, "paused")
        })), a.h.addEventListener("BUFFERING", Do(a, function(b) {
            b.isBuffering ? Po(a, "buffering") : "buffering" === a.g.state && Po(a, "playing")
        })), a.h.addEventListener("SEEKING", Do(a, function() {
            a.g.isSeeking = !0;
            Eo(a, Fo(a));
            To(a);
            Ko(a, void 0)
        })), a.h.addEventListener("SEEKED", Do(a, function() {
            a.g.isSeeking = !1;
            Eo(a, Fo(a));
            To(a)
        })), a.h.addEventListener("BREAK_STARTED",
            Do(a, function(b) {
                return Uo(a, b)
            })), a.h.addEventListener("BREAK_ENDED", Do(a, function(b) {
            return Uo(a, b)
        })), a.h.addEventListener("BREAK_CLIP_LOADING", Do(a, function(b) {
            return Uo(a, b)
        })), a.h.addEventListener("BREAK_CLIP_STARTED", Do(a, function(b) {
            return Uo(a, b)
        })), a.h.addEventListener("BREAK_CLIP_ENDED", Do(a, function(b) {
            return Uo(a, b)
        })), a.h.addEventListener("DURATION_CHANGE", Do(a, function() {
            return To(a)
        })), a.h.addEventListener("TIME_UPDATE", Do(a, function() {
            return To(a)
        })), a.h.addEventListener("REQUEST_DISPLAY_STATUS",
            Do(a, function() {
                "video" === a.g.contentType && Vo(a)
            })), a.h.addEventListener("REQUEST_PLAY", function() {
            "video" === a.g.contentType && "playing" === a.g.state && Vo(a)
        }), a.h.addEventListener("PLAYER_PRELOADING", Do(a, function(b) {
            Ko(a, b.media.metadata)
        })), a.h.addEventListener("MEDIA_STATUS", Do(a, function(b) {
            b.mediaStatus && Qo(a, b.mediaStatus)
        })), a.h.addEventListener("CUSTOM_STATE", function(b) {
            a.g.customState = b.state
        }), a.o.addEventListener("ready", function() {
            var b = a.o.Qd();
            b && (a.g.applicationData = new jo(b.name, b.iconUrl))
        }));
        pe(a.o.h).then(function(b) {
            a.g.displayType = b ? "touch" : "tv"
        })
    };
    Qo = function(a, b) {
        a.g.mediaSessionId != b.mediaSessionId ? (a.g.mediaSessionId = b.mediaSessionId, b.media || (a.g.media = b.media), a.g.queueData = b.queueData) : b.queueData && (a.g.queueData = b.queueData);
        _.u(b.supportedMediaCommands) && (a.g.supportedMediaCommands = b.supportedMediaCommands);
        if (b.liveSeekableRange) {
            var c = b.liveSeekableRange;
            a.g.isLive && (So(a), a.g.supportedMediaCommands & 2 ? (a.g.liveSeekableRange = c, Wo(a), Xo(a)) : a.g.liveSeekableRange = null, Io(a))
        }
        b.activeTrackIds && (a.g.activeTrackIds = b.activeTrackIds);
        switch (b.playerState) {
            case "PLAYING":
                Po(a,
                    "playing");
                break;
            case "PAUSED":
                Po(a, "paused");
                break;
            case "BUFFERING":
                Po(a, "buffering")
        }
    };
    Oo = function(a, b) {
        var c = a.g.media && a.g.media.breakClips || [],
            d = (a.g.media && a.g.media.breaks || []).find(function(a) {
                return a.id == b.breakId
            });
        c = c.find(function(a) {
            return a.id == b.breakClipId
        });
        d && c && d.breakClipIds && (a.g.duration = c.duration || 0, a.g.numberBreakClips = d.breakClipIds.length, d = d.breakClipIds.indexOf(c.id), a.g.currentBreakClipNumber = 0 > d ? 0 : d)
    };
    Fo = function(a) {
        if ("audio" === a.g.contentType || "video" === a.g.contentType && a.g.applicationData && a.g.applicationData.isRemoteControl) switch (a.g.state) {
            case "playing":
            case "loading":
            case "buffering":
            case "paused":
                return !0;
            default:
                return !1
        }
        if ("video" === a.g.contentType) switch (a.g.state) {
            case "loading":
            case "buffering":
                return !0;
            case "playing":
            case "paused":
                return a.g.isSeeking
        }
        return !1
    };
    Po = function(a, b) {
        a.g.state != b && (a.g.state = b, "video" === a.g.contentType && "paused" === b ? Vo(a) : Eo(a, Fo(a)))
    };
    Uo = function(a, b) {
        "BREAK_STARTED" == b.type ? a.g.isPlayingBreak = !0 : "BREAK_ENDED" == b.type && (a.g.isPlayingBreak = !1);
        if (a.g.isPlayingBreak) {
            a.g.numberBreakClips = b.total || 0;
            a.g.currentBreakClipNumber = b.index || 0;
            a.l = b.whenSkippable;
            var c = (a.g.media && a.g.media.breakClips || []).find(function(a) {
                return a.id == b.breakClipId
            });
            a.g.breakTitle = c && c.title || ""
        } else a.l = void 0, a.g.breakTitle = ""
    };
    Ho = function(a, b) {
        a.g.mediaStartAbsoluteTime = b.startAbsoluteTime || null;
        b.metadata && (a.g.sectionStartTimeInMedia = _.u(b.metadata.sectionStartTimeInMedia) ? b.metadata.sectionStartTimeInMedia : null, a.g.sectionDuration = b.metadata.sectionDuration || null)
    };
    No = function(a, b, c) {
        b && (a.g.isLive = "LIVE" == b.streamType, Ho(a, b), a.g.isLive && a.g.supportedMediaCommands & 2 && c && _.u(c.start) && _.u(c.end) && null == a.C ? (a.g.liveSeekableRange = c, Wo(a), Xo(a)) : a.g.liveSeekableRange = null, Io(a))
    };
    Xo = function(a) {
        var b = (0, _.J)() / 1E3 - a.J;
        a.g.liveSeekableRange.isMovingWindow && (a.g.liveSeekableRange.start = a.I + b);
        a.g.liveSeekableRange.isLiveDone || (a.g.liveSeekableRange.end = a.G + b);
        Io(a);
        a.w.dispatchEvent(new lo(Yo, "liveSeekableRange", a.g.liveSeekableRange));
        a.C = (0, window.setTimeout)(function() {
            Xo(a)
        }, 500)
    };
    Wo = function(a) {
        a.I = a.g.liveSeekableRange.start;
        a.G = a.g.liveSeekableRange.end;
        a.J = (0, _.J)() / 1E3
    };
    So = function(a) {
        null != a.C && ((0, window.clearTimeout)(a.C), a.C = null, a.J = null, a.I = null, a.G = null)
    };
    To = function(a) {
        a.g.isPlayingBreak ? (a.g.duration = a.h.Rd() || 0, a.g.currentTime = a.h.Db() || 0) : (a.g.duration = a.h.getDurationSec() || 0, a.g.currentTime = a.h.getCurrentTimeSec() || 0);
        Io(a);
        Go(a);
        Mo(a)
    };
    Io = function(a) {
        a = a.g;
        if ("loading" != a.state && "launching" != a.state) {
            var b = new io;
            a.isLive ? (a.liveSeekableRange || a.sectionDuration || (b.isDurationVisible = !1, b.isPlayingLive = !0), a.liveSeekableRange && !a.sectionDuration && (b.timeOffset = _.u(a.sectionStartTimeInMedia) ? a.sectionStartTimeInMedia : a.liveSeekableRange.start, b.progressCurrentTime = a.currentTime - b.timeOffset, b.progressDuration = a.liveSeekableRange.end - b.timeOffset, b.seekableRange = new Rj(a.liveSeekableRange.start - b.timeOffset, a.liveSeekableRange.end -
                b.timeOffset, a.liveSeekableRange.isMovingWindow, a.liveSeekableRange.isLiveDone), b.isPlayingLive = a.currentTime == a.liveSeekableRange.end, b.isDurationVisible = !b.isPlayingLive), !a.liveSeekableRange && a.sectionDuration && (b.timeOffset = a.sectionStartTimeInMedia || 0, b.progressCurrentTime = a.currentTime - b.timeOffset, b.progressDuration = a.sectionDuration, b.liveProgressStart = 0 > b.timeOffset ? 0 - b.timeOffset : 0, b.isPlayingLive = !0), a.liveSeekableRange && a.sectionDuration && (b.timeOffset = a.sectionStartTimeInMedia || 0, b.progressCurrentTime =
                a.currentTime - b.timeOffset, b.progressDuration = a.sectionDuration, b.seekableRange = new Rj(a.liveSeekableRange.start - b.timeOffset, a.liveSeekableRange.end - b.timeOffset, a.liveSeekableRange.isMovingWindow, a.liveSeekableRange.isLiveDone), b.isPlayingLive = a.currentTime == a.liveSeekableRange.end)) : (b.timeOffset = a.sectionStartTimeInMedia || 0, b.progressCurrentTime = a.currentTime - b.timeOffset, b.progressDuration = a.sectionDuration ? a.sectionDuration : a.duration - b.timeOffset);
            0 > b.progressCurrentTime && (b.progressCurrentTime =
                0);
            b.seekableRange && (0 > b.seekableRange.start && (b.seekableRange.start = 0), b.seekableRange.end > b.progressDuration && (b.seekableRange.end = b.progressDuration));
            a.presentation = b
        }
    };
    Go = function(a) {
        a.g.isPlayingBreak ? (a.g.breakPercentagePositions = [], a.F = 0) : a.F != a.g.duration && (a.g.breakPercentagePositions = Lo(a.g.media && a.g.media.breaks, a.g.duration), a.F = a.g.duration)
    };
    Mo = function(a) {
        if (_.u(a.l)) {
            var b = a.l - a.g.currentTime;
            0 < b ? (a.g.isBreakSkippable = !1, a.g.whenSkippable = b) : (a.g.whenSkippable = 0, a.g.isBreakSkippable = !0)
        } else a.g.whenSkippable = void 0, a.g.isBreakSkippable = !1
    };
    Eo = function(a, b) {
        null !== a.B && ((0, window.clearTimeout)(a.B), a.B = null);
        a.g.displayStatus = b
    };
    Vo = function(a) {
        Eo(a, !0);
        a.B = (0, window.setTimeout)(function() {
            a.g.displayStatus = Fo(a);
            a.B = null
        }, 5E3)
    };
    Ao = function(a) {
        var b = Zo;
        if (b) {
            var c = a.g;
            Object.keys(b).forEach(function(a) {
                return c[a] = b[a]
            })
        } else a.g.supportedMediaCommands = a.h.wc()
    };
    pp = function(a) {
        pi.call(this, a);
        var b = this;
        this.l = new ko;
        this.w = new Co(this.l);
        this.w.addEventListener($o, function() {
            if (b.l.media) {
                var a = window.cast.A.K.Jc(b.l.media);
                yi(b, a, b.l.supportedMediaCommands);
                Ci(b, a);
                Di(b, a.tracks, b.l.activeTrackIds)
            }
        });
        this.w.addEventListener(ap, function(a) {
            (a = a.value) ? (a.repeatMode && zh(b.D, a.repeatMode), Fh(b.G, !!a.shuffle)) : (zh(b.D, "REPEAT_OFF"), Fh(b.G, !1))
        });
        this.w.addEventListener(bp, function() {
            b.l.media && Di(b, b.l.media.tracks ? window.cast.A.K.tg(b.l.media.tracks) : void 0,
                b.l.activeTrackIds)
        });
        this.w.addEventListener(cp, function(a) {
            Bi(b, a.value)
        });
        this.w.addEventListener(dp, function(a) {
            b.l.media && yi(b, window.cast.A.K.Jc(b.l.media), a.value)
        });
        this.w.addEventListener(ep, function(a) {
            li(b.g, fp[a.value] || "IDLE")
        });
        this.w.addEventListener(gp, function(a) {
            var c = b.g;
            a = a.value;
            var e = c.na;
            e.w.classList.toggle("hidden", a);
            e.L.classList.toggle("hidden", a);
            e.J.classList.toggle("hidden", !a);
            e = c.o;
            e.h = a;
            e.w.classList.toggle("hidden", !a);
            e.h && Lh(e);
            e = c.h;
            e.C.classList.toggle("break",
                a);
            e.J = a;
            Zh(e);
            e.V.classList.toggle("hidden", !Vh(e));
            c.C.classList.toggle("break", a)
        });
        this.w.addEventListener(hp, function() {
            b.g.na.J.innerText = b.l.breakTitle || ""
        });
        this.w.addEventListener(ip, function(a) {
            Yh(b.g.h, a.value)
        });
        this.w.addEventListener(jp, function(a) {
            var c = b.g.h;
            a = a.value;
            c.N = a;
            c.V.classList.toggle("hidden", !Vh(c));
            c.C.classList.toggle("live", a);
            kp(b)
        });
        this.w.addEventListener(Yo, function() {
            b.l.media && yi(b, window.cast.A.K.Jc(b.l.media), b.l.supportedMediaCommands)
        });
        this.w.addEventListener(lp,
            function() {
                kp(b)
            });
        this.w.addEventListener(mp, function() {
            var a = b.g.o,
                d = b.l.whenSkippable;
            void 0 === d ? (a.g.classList.add("hidden"), a.l.classList.add("hidden")) : 0 < d ? (a.g.classList.add("hidden"), a.l.classList.remove("hidden"), a.D.textContent = window.cast.receiver.R.lf(Jh(d, !0))) : (a.g.classList.remove("hidden"), a.l.classList.add("hidden"))
        });
        this.w.addEventListener(np, function(a) {
            a.value && op(b, a.value)
        });
        this.l.applicationData && op(this, this.l.applicationData);
        window.document.querySelector("cast-media-player") &&
            this.g.na.g.classList.toggle("hidden-audio-scrim", !0)
    };
    op = function(a, b) {
        var c = b.name,
            d = b.iconUrl;
        a.N = c;
        var e = a.g;
        hi(e.na, c, d);
        e.g && Ih(e.g, c, d);
        a.g.na.g.classList.toggle("remote-controls", !!b.isRemoteControl);
        b.groupName ? ii(a.g.na, b.groupName) : ii(a.g.na, "");
        Bi(a, a.l.metadata)
    };
    kp = function(a) {
        var b = a.l.presentation,
            c = b.progressCurrentTime,
            d = b.progressDuration,
            e = b.seekableRange;
        a.g.h.aa = b.timeOffset;
        var f = a.g.h,
            g = (e = window.cast.A.K.yi(e)) && _.u(c);
        f.G.classList.toggle("hidden", !g);
        f.T.classList.toggle("hidden", !g);
        if (g && !f.h) {
            f.g.min = e.start;
            Xh(f, e.end);
            g = e.start / d * 100;
            var k = (c - e.start) / d * 100;
            d = (e.end - e.start) / d * 100;
            f.T.style.left = g + "%";
            f.T.style.width = k + "%";
            f.G.style.left = g + "%";
            f.G.style.width = d + "%";
            f.g.style.left = g + "%";
            f.g.style.width = d + "%"
        }
        a.g.setDuration(b.progressDuration);
        a.g.h.L.classList.toggle("hidden", !b.isDurationVisible);
        f = a.g.h;
        d = a.l.isLive ? b.liveProgressStart : 0;
        f.o = d;
        f.C.classList.toggle("hidden", !_.u(d));
        a.g.h.M.classList.toggle("hidden", null == c);
        a.g.Fc(b.progressCurrentTime || 0)
    };
    qp = function() {
        var a = this;
        this.l = _.Ld.H();
        this.g = null;
        this.h = Qc();
        qe(this.l).then(function(b) {
            "touch-optimized" === b ? (a.g = new pp(!0), a.h.resolve(!0)) : (a.h.resolve(!1), "non-touch-optimized" === b && (a.g = new pp(!1)))
        })
    };
    rp = function(a, b) {
        a.h.g.then(function(c) {
            c && b.call(a)
        })
    };
    sp = function(a) {
        this.o = a;
        this.D = window.getComputedStyle(this.o)
    };
    tp = function(a) {
        a.F = (0, window.setTimeout)(function() {
            void 0 !== a.l && a.g[a.l].classList.remove("visible")
        }, a.w)
    };
    up = function(a) {
        return a.o && a.o.children ? Array.from(a.o.children).filter(function(a) {
            var b = window.getComputedStyle(a).backgroundImage;
            if (b && "none" !== b) return a
        }) : []
    };
    wp = function(a, b) {
        a = a.D.getPropertyValue(b) || "";
        a = a.toLocaleLowerCase().trim();
        var c = (0, window.parseFloat)(a);
        switch (a.replace(/[-+.0-9]/g, "").trim()) {
            case "ms":
                return c;
            case "s":
                return 1E3 * c;
            default:
                return _.C(vp, "Cannot parse value " + a + " of CSS style " + b), 0
        }
    };
    xp = function() {
        var a = window.HTMLElement.call(this) || this;
        a.w = null;
        return a
    };
    yp = function(a, b) {
        if (b) {
            a.h.setAttribute("isRemoteControl", b.isRemoteControl);
            var c = a.h.querySelector(".logo"),
                d = window.getComputedStyle(c, null);
            "none" == d.backgroundImage && (c.textContent = b.name);
            c = a.h.querySelector(".splash");
            "none" == window.getComputedStyle(c, null).backgroundImage && ("none" == d.backgroundImage ? c.textContent = b.name : c.classList.add("logo"));
            var e = a.h.querySelector(".playback-logo");
            "none" === window.getComputedStyle(e, null).backgroundImage && (b.iconUrl ? (a = new window.Image, a.src = b.iconUrl,
                a.decode().then(function() {
                    e.style.backgroundImage = "url('" + b.iconUrl + "')";
                    e.classList.add("app-icon");
                    e.textContent = ""
                }, function() {
                    e.textContent = b.name;
                    e.style.backgroundImage = "";
                    e.classList.remove("app-icon")
                })) : (e.textContent = b.name, e.style.backgroundImage = "", e.classList.remove("app-icon")))
        }
    };
    Bp = function(a, b) {
        if (b)
            if ("touch" === a.g.displayType) {
                a.o.style.width = "";
                a.o.style.height = "";
                a.P.classList.add("start-animation");
                var c = zp(b);
                a.T = c;
                c.then(function(b) {
                    if (c === a.T) {
                        a.P.classList.remove("start-animation");
                        var d = window.getComputedStyle(a.va),
                            f = (0, window.parseInt)(d.width, 10);
                        d = (0, window.parseInt)(d.height, 10);
                        b.naturalHeight < b.naturalWidth && 0 !== b.naturalWidth ? (f = d * b.naturalHeight / b.naturalWidth, (0, window.isNaN)(f) || (a.o.style.height = f + "px")) : b.naturalHeight > b.naturalWidth && 0 !== b.naturalHeight &&
                            (f = f * b.naturalWidth / b.naturalHeight, (0, window.isNaN)(f) || (a.o.style.width = f + "px"));
                        Ap(a, b.src)
                    }
                })
            } else Ap(a, b);
        else a.h.style.removeProperty("--album-art-image"), a.o.style.removeProperty("background-image"), a.T = null
    };
    Ap = function(a, b) {
        b = 'url("' + (0, window.encodeURI)(b) + '")';
        a.o.style.backgroundImage = b;
        a.h.style.setProperty("--album-art-image", b)
    };
    Cp = function(a, b, c, d) {
        a.X.textContent = b ? b : "touch" === d ? window.cast.receiver.R.Cb(window.cast.receiver.R.Kg, {
            APP_NAME: c && c.name || ""
        }) : ""
    };
    Dp = function(a, b) {
        if (b) {
            var c = window.document.createElement("span");
            c.innerText = b;
            a.appendChild(c)
        }
    };
    Ep = function(a) {
        var b = Math.floor(a);
        a = Va(b % 60);
        b = Math.floor(b / 60);
        a = Va(b % 60) + ":" + a;
        b = Math.floor(b / 60);
        0 < b && (a = Va(b) + ":" + a);
        return a
    };
    Fp = function(a) {
        var b = "";
        a.g.isBreakSkippable ? b = Ep(a.g.duration - a.g.currentTime) : a.g.whenSkippable && (b = window.cast.A.R.lf(a.g.whenSkippable.toFixed(0)));
        a.C.innerText = b
    };
    Gp = function(a, b) {
        for (var c = _.n(a.N.querySelectorAll(".breakMarker")), d = c.next(); !d.done; d = c.next()) d.value.remove();
        b && b.forEach(function(b) {
            var c = window.document.createElement("div");
            c.classList.add("breakMarker");
            c.style.left = b + "%";
            a.N.appendChild(c)
        })
    };
    Hp = function(a) {
        Array.prototype.forEach.call(a.h.getElementsByClassName("breakIcon"), function(a) {
            return a.dataset.adLabel = window.cast.receiver.R.Ig
        });
        Array.prototype.forEach.call(a.h.getElementsByClassName("breakSkip"), function(a) {
            return a.dataset.skipAdLabel = window.cast.receiver.R.Lg
        });
        Array.prototype.forEach.call(a.h.getElementsByClassName("liveLabel"), function(a) {
            return a.dataset.liveLabel = window.cast.receiver.R.Jg
        })
    };
    Ip = function(a, b) {
        b ? (a.h.setAttribute("isSeeking", !0), a.w = new xo, a.w.then(function() {
            a.h.setAttribute("isSeeking", !1)
        })) : a.w && (a.w.resolve(), a.w = null)
    };
    zp = function(a) {
        var b = new window.Image;
        b.src = a;
        return b.decode().then(function() {
            return b
        }).catch(function() {
            return b
        })
    };
    Jp = function() {};
    da = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    };
    ba = "undefined" != typeof window && window === this ? this : "undefined" != typeof window.global && null != window.global ? window.global : this;
    ca = function() {
        var a = 0;
        return function(b) {
            return "jscomp_symbol_" + (b || "") + a++
        }
    }();
    ia("Promise", function(a) {
        function b(a) {
            this.h = 0;
            this.l = void 0;
            this.g = [];
            var b = this.o();
            try {
                a(b.resolve, b.reject)
            } catch (l) {
                b.reject(l)
            }
        }

        function c() {
            this.g = null
        }

        function d(a) {
            return a instanceof b ? a : new b(function(b) {
                b(a)
            })
        }
        if (a) return a;
        c.prototype.h = function(a) {
            null == this.g && (this.g = [], this.o());
            this.g.push(a)
        };
        c.prototype.o = function() {
            var a = this;
            this.l(function() {
                a.B()
            })
        };
        var e = ba.setTimeout;
        c.prototype.l = function(a) {
            e(a, 0)
        };
        c.prototype.B = function() {
            for (; this.g && this.g.length;) {
                var a = this.g;
                this.g = [];
                for (var b = 0; b < a.length; ++b) {
                    var c = a[b];
                    a[b] = null;
                    try {
                        c()
                    } catch (p) {
                        this.w(p)
                    }
                }
            }
            this.g = null
        };
        c.prototype.w = function(a) {
            this.l(function() {
                throw a;
            })
        };
        b.prototype.o = function() {
            function a(a) {
                return function(d) {
                    c || (c = !0, a.call(b, d))
                }
            }
            var b = this,
                c = !1;
            return {
                resolve: a(this.G),
                reject: a(this.w)
            }
        };
        b.prototype.G = function(a) {
            if (a === this) this.w(new TypeError("A Promise cannot resolve to itself"));
            else if (a instanceof b) this.I(a);
            else {
                a: switch (typeof a) {
                    case "object":
                        var c = null != a;
                        break a;
                    case "function":
                        c = !0;
                        break a;
                    default:
                        c = !1
                }
                c ? this.D(a) : this.B(a)
            }
        };
        b.prototype.D = function(a) {
            var b = void 0;
            try {
                b = a.then
            } catch (l) {
                this.w(l);
                return
            }
            "function" == typeof b ? this.J(b, a) : this.B(a)
        };
        b.prototype.w = function(a) {
            this.C(2, a)
        };
        b.prototype.B = function(a) {
            this.C(1, a)
        };
        b.prototype.C = function(a, b) {
            if (0 != this.h) throw Error("Cannot settle(" + a + ", " + b + "): Promise already settled in state" + this.h);
            this.h = a;
            this.l = b;
            this.F()
        };
        b.prototype.F = function() {
            if (null != this.g) {
                for (var a = 0; a < this.g.length; ++a) f.h(this.g[a]);
                this.g = null
            }
        };
        var f = new c;
        b.prototype.I = function(a) {
            var b = this.o();
            a.Hd(b.resolve, b.reject)
        };
        b.prototype.J = function(a, b) {
            var c = this.o();
            try {
                a.call(b, c.resolve, c.reject)
            } catch (p) {
                c.reject(p)
            }
        };
        b.prototype.then = function(a, c) {
            function d(a, b) {
                return "function" == typeof a ? function(b) {
                    try {
                        e(a(b))
                    } catch (I) {
                        f(I)
                    }
                } : b
            }
            var e, f, g = new b(function(a, b) {
                e = a;
                f = b
            });
            this.Hd(d(a, e), d(c, f));
            return g
        };
        b.prototype.catch = function(a) {
            return this.then(void 0, a)
        };
        b.prototype.Hd = function(a, b) {
            function c() {
                switch (d.h) {
                    case 1:
                        a(d.l);
                        break;
                    case 2:
                        b(d.l);
                        break;
                    default:
                        throw Error("Unexpected state: " + d.h);
                }
            }
            var d = this;
            null == this.g ? f.h(c) : this.g.push(c)
        };
        b.resolve = d;
        b.reject = function(a) {
            return new b(function(b, c) {
                c(a)
            })
        };
        b.race = function(a) {
            return new b(function(b, c) {
                for (var e = _.n(a), f = e.next(); !f.done; f = e.next()) d(f.value).Hd(b, c)
            })
        };
        b.all = function(a) {
            var c = _.n(a),
                e = c.next();
            return e.done ? d([]) : new b(function(a, b) {
                function f(b) {
                    return function(c) {
                        g[b] = c;
                        k--;
                        0 == k && a(g)
                    }
                }
                var g = [],
                    k = 0;
                do g.push(void 0), k++, d(e.value).Hd(f(g.length - 1), b), e = c.next(); while (!e.done)
            })
        };
        return b
    });
    var Kp;
    if ("function" == typeof Object.setPrototypeOf) Kp = Object.setPrototypeOf;
    else {
        var Lp;
        a: {
            var Mp = {
                    jk: !0
                },
                Np = {};
            try {
                Np.__proto__ = Mp;
                Lp = Np.jk;
                break a
            } catch (a) {}
            Lp = !1
        }
        Kp = Lp ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ka = Kp,
        ja = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        };
    ia("Array.prototype.findIndex", function(a) {
        return a ? a : function(a, c) {
            return ma(this, a, c).yh
        }
    });
    ia("Array.prototype.find", function(a) {
        return a ? a : function(a, c) {
            return ma(this, a, c).Gi
        }
    });
    ia("Object.is", function(a) {
        return a ? a : function(a, c) {
            return a === c ? 0 !== a || 1 / a === 1 / c : a !== a && c !== c
        }
    });
    ia("Array.prototype.includes", function(a) {
        return a ? a : function(a, c) {
            var b = this;
            b instanceof String && (b = String(b));
            var e = b.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = b[c];
                if (f === a || Object.is(f, a)) return !0
            }
            return !1
        }
    });
    ia("String.prototype.includes", function(a) {
        return a ? a : function(a, c) {
            return -1 !== na(this, a, "includes").indexOf(a, c || 0)
        }
    });
    ia("String.prototype.endsWith", function(a) {
        return a ? a : function(a, c) {
            var b = na(this, a, "endsWith");
            a += "";
            void 0 === c && (c = b.length);
            c = Math.max(0, Math.min(c | 0, b.length));
            for (var e = a.length; 0 < e && 0 < c;)
                if (b[--c] != a[--e]) return !1;
            return 0 >= e
        }
    });
    ia("Number.isFinite", function(a) {
        return a ? a : function(a) {
            return "number" !== typeof a ? !1 : !(0, window.isNaN)(a) && window.Infinity !== a && -window.Infinity !== a
        }
    });
    ia("Number.isInteger", function(a) {
        return a ? a : function(a) {
            return Number.isFinite(a) ? a === Math.floor(a) : !1
        }
    });
    ia("String.prototype.startsWith", function(a) {
        return a ? a : function(a, c) {
            var b = na(this, a, "startsWith");
            a += "";
            var e = b.length,
                f = a.length;
            c = Math.max(0, Math.min(c | 0, b.length));
            for (var g = 0; g < f && c < e;)
                if (b[c++] != a[g++]) return !1;
            return g >= f
        }
    });
    ia("Object.values", function(a) {
        return a ? a : function(a) {
            var b = [],
                d;
            for (d in a) oa(a, d) && b.push(a[d]);
            return b
        }
    });
    ia("WeakMap", function(a) {
        function b(a) {
            this.g = (f += Math.random() + 1).toString();
            if (a) {
                aa();
                fa();
                a = _.n(a);
                for (var b; !(b = a.next()).done;) b = b.value, this.set(b[0], b[1])
            }
        }

        function c(a) {
            oa(a, e) || da(a, e, {
                value: {}
            })
        }

        function d(a) {
            var b = Object[a];
            b && (Object[a] = function(a) {
                c(a);
                return b(a)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var b = Object.seal({}),
                        c = Object.seal({}),
                        d = new a([
                            [b, 2],
                            [c, 3]
                        ]);
                    if (2 != d.get(b) || 3 != d.get(c)) return !1;
                    d.delete(b);
                    d.set(c, 4);
                    return !d.has(b) && 4 == d.get(c)
                } catch (p) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random();
        d("freeze");
        d("preventExtensions");
        d("seal");
        var f = 0;
        b.prototype.set = function(a, b) {
            c(a);
            if (!oa(a, e)) throw Error("WeakMap key fail: " + a);
            a[e][this.g] = b;
            return this
        };
        b.prototype.get = function(a) {
            return oa(a, e) ? a[e][this.g] : void 0
        };
        b.prototype.has = function(a) {
            return oa(a, e) && oa(a[e], this.g)
        };
        b.prototype.delete = function(a) {
            return oa(a, e) && oa(a[e], this.g) ? delete a[e][this.g] : !1
        };
        return b
    });
    ia("Map", function(a) {
        function b() {
            var a = {};
            return a.wb = a.next = a.head = a
        }

        function c(a, b) {
            var c = a.g;
            return ha(function() {
                if (c) {
                    for (; c.head != a.g;) c = c.wb;
                    for (; c.next != c.head;) return c = c.next, {
                        done: !1,
                        value: b(c)
                    };
                    c = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(a, b) {
            var c = b && typeof b;
            "object" == c || "function" == c ? f.has(b) ? c = f.get(b) : (c = "" + ++g, f.set(b, c)) : c = "p_" + b;
            var d = a.h[c];
            if (d && oa(a.h, c))
                for (a = 0; a < d.length; a++) {
                    var e = d[a];
                    if (b !== b && e.key !== e.key || b === e.key) return {
                        id: c,
                        list: d,
                        index: a,
                        Ca: e
                    }
                }
            return {
                id: c,
                list: d,
                index: -1,
                Ca: void 0
            }
        }

        function e(a) {
            this.h = {};
            this.g = b();
            this.size = 0;
            if (a) {
                a = _.n(a);
                for (var c; !(c = a.next()).done;) c = c.value, this.set(c[0], c[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var b = Object.seal({
                            x: 4
                        }),
                        c = new a(_.n([
                            [b, "s"]
                        ]));
                    if ("s" != c.get(b) || 1 != c.size || c.get({
                            x: 4
                        }) || c.set({
                            x: 4
                        }, "t") != c || 2 != c.size) return !1;
                    var d = c.entries(),
                        e = d.next();
                    if (e.done || e.value[0] != b || "s" != e.value[1]) return !1;
                    e = d.next();
                    return e.done || 4 != e.value[0].x ||
                        "t" != e.value[1] || !d.next().done ? !1 : !0
                } catch (y) {
                    return !1
                }
            }()) return a;
        aa();
        fa();
        var f = new window.WeakMap;
        e.prototype.set = function(a, b) {
            a = 0 === a ? 0 : a;
            var c = d(this, a);
            c.list || (c.list = this.h[c.id] = []);
            c.Ca ? c.Ca.value = b : (c.Ca = {
                next: this.g,
                wb: this.g.wb,
                head: this.g,
                key: a,
                value: b
            }, c.list.push(c.Ca), this.g.wb.next = c.Ca, this.g.wb = c.Ca, this.size++);
            return this
        };
        e.prototype.delete = function(a) {
            a = d(this, a);
            return a.Ca && a.list ? (a.list.splice(a.index, 1), a.list.length || delete this.h[a.id], a.Ca.wb.next = a.Ca.next, a.Ca.next.wb =
                a.Ca.wb, a.Ca.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.h = {};
            this.g = this.g.wb = b();
            this.size = 0
        };
        e.prototype.has = function(a) {
            return !!d(this, a).Ca
        };
        e.prototype.get = function(a) {
            return (a = d(this, a).Ca) && a.value
        };
        e.prototype.entries = function() {
            return c(this, function(a) {
                return [a.key, a.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(a) {
                return a.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(a) {
                return a.value
            })
        };
        e.prototype.forEach = function(a, b) {
            for (var c = this.entries(),
                    d; !(d = c.next()).done;) d = d.value, a.call(b, d[1], d[0], this)
        };
        e.prototype[window.Symbol.iterator] = e.prototype.entries;
        var g = 0;
        return e
    });
    ia("Array.from", function(a) {
        return a ? a : function(a, c, d) {
            fa();
            c = null != c ? c : function(a) {
                return a
            };
            var b = [],
                f = a[window.Symbol.iterator];
            if ("function" == typeof f) {
                a = f.call(a);
                for (var g = 0; !(f = a.next()).done;) b.push(c.call(d, f.value, g++))
            } else
                for (f = a.length, g = 0; g < f; g++) b.push(c.call(d, a[g], g));
            return b
        }
    });
    var Op = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) oa(d, e) && (a[e] = d[e])
        }
        return a
    };
    ia("Object.assign", function(a) {
        return a || Op
    });
    ia("Math.trunc", function(a) {
        return a ? a : function(a) {
            a = Number(a);
            if ((0, window.isNaN)(a) || window.Infinity === a || -window.Infinity === a || 0 === a) return a;
            var b = Math.floor(Math.abs(a));
            return 0 > a ? -b : b
        }
    });
    ia("Array.prototype.fill", function(a) {
        return a ? a : function(a, c, d) {
            var b = this.length || 0;
            0 > c && (c = Math.max(0, b + c));
            if (null == d || d > b) d = b;
            d = Number(d);
            0 > d && (d = Math.max(0, b + d));
            for (c = Number(c || 0); c < d; c++) this[c] = a;
            return this
        }
    });
    ia("Set", function(a) {
        function b(a) {
            this.g = new window.Map;
            if (a) {
                a = _.n(a);
                for (var b; !(b = a.next()).done;) this.add(b.value)
            }
            this.size = this.g.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var b = Object.seal({
                            x: 4
                        }),
                        d = new a(_.n([b]));
                    if (!d.has(b) || 1 != d.size || d.add(b) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != b || f.value[1] != b) return !1;
                    f = e.next();
                    return f.done || f.value[0] == b || 4 !=
                        f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        aa();
        fa();
        b.prototype.add = function(a) {
            a = 0 === a ? 0 : a;
            this.g.set(a, a);
            this.size = this.g.size;
            return this
        };
        b.prototype.delete = function(a) {
            a = this.g.delete(a);
            this.size = this.g.size;
            return a
        };
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function(a) {
            return this.g.has(a)
        };
        b.prototype.entries = function() {
            return this.g.entries()
        };
        b.prototype.values = function() {
            return this.g.values()
        };
        b.prototype.keys =
            b.prototype.values;
        b.prototype[window.Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(a, b) {
            var c = this;
            this.g.forEach(function(d) {
                return a.call(b, d, d, c)
            })
        };
        return b
    });
    dj = dj || {};
    _.v = this;
    _.Pp = "closure_uid_" + (1E9 * Math.random() >>> 0);
    _.J = Date.now || function() {
        return +new Date
    };
    _.v.cast = _.v.cast || {};
    window.cast = _.v.cast;
    window.cast.Gg = !1;
    window.cast.platform = {};
    window.cast.platform.metrics = {};
    window.cast.platform.metrics.fd = function() {
        return !(!window.cast.__platform__ || !window.cast.__platform__.metrics)
    };
    window.cast.platform.metrics.logBoolToUma = function(a, b) {
        window.cast.platform.metrics.fd() && window.cast.__platform__.metrics.logBoolToUma(a, b)
    };
    window.cast.platform.metrics.logEventToUma = function(a) {
        window.cast.platform.metrics.fd() && window.cast.__platform__.metrics.logEventToUma(a)
    };
    window.cast.platform.metrics.logHistogramValueToUma = function(a, b, c, d, e) {
        window.cast.platform.metrics.fd() && window.cast.__platform__.metrics.logHistogramValueToUma(a, b, c, d, e)
    };
    window.cast.platform.metrics.logIntToUma = function(a, b) {
        window.cast.platform.metrics.fd() && window.cast.__platform__.metrics.logIntToUma(a, b)
    };
    window.cast.platform.metrics.setMplVersion = function(a) {
        window.cast.platform.metrics.fd() && window.cast.__platform__.metrics.setMplVersion(a)
    };
    window.cast.receiver = {};
    window.cast.receiver.ia = {};
    window.cast.receiver.ia.zm = window.cast.platform.metrics.logEventToUma;
    window.cast.receiver.ia.ep = window.cast.platform.metrics.logBoolToUma;
    window.cast.receiver.ia.Kf = window.cast.platform.metrics.logIntToUma;
    window.cast.receiver.ia.fp = window.cast.platform.metrics.logHistogramValueToUma;
    window.cast.receiver.VERSION = "2.0.0";
    window.cast.receiver.uj = "0073";
    window.cast.receiver.Bc = function(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return 0 == a.indexOf(b) || 0 == b.indexOf(a)
    };
    _.Ba(Ca, Error);
    Ca.prototype.name = "CustomError";
    _.Ba(Da, Ca);
    Da.prototype.name = "AssertionError";
    var Ha;
    Ha = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if (_.t(a)) return _.t(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    _.Vi = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = _.t(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    };
    _.Qp = Array.prototype.filter ? function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = [], e = 0, f = _.t(a) ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var k = f[g];
                b.call(void 0, k, g, a) && (d[e++] = k)
            }
        return d
    };
    _.Rp = Array.prototype.map ? function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = Array(c), e = _.t(a) ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    };
    _.Sp = Array.prototype.reduce ? function(a, b, c) {
        return Array.prototype.reduce.call(a, b, c)
    } : function(a, b, c) {
        var d = c;
        (0, _.Vi)(a, function(c, f) {
            d = b.call(void 0, d, c, f, a)
        });
        return d
    };
    _.Tp = Array.prototype.some ? function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = _.t(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    };
    var Ua;
    _.Wa = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    Ua = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    } : function(a, b) {
        return Array(b + 1).join(a)
    };
    a: {
        var Up = _.v.navigator;
        if (Up) {
            var Vp = Up.userAgent;
            if (Vp) {
                _.Za = Vp;
                break a
            }
        }
        _.Za = ""
    };
    var gb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    ib[" "] = _.x;
    var Xp, Zp, nb, kb;
    _.Wp = _.A("Opera");
    _.Yi = _.A("Trident") || _.A("MSIE");
    Xp = _.A("Edge");
    _.Bb = _.A("Gecko") && !(_.Ta(_.Za, "WebKit") && !_.A("Edge")) && !(_.A("Trident") || _.A("MSIE")) && !_.A("Edge");
    _.Yp = _.Ta(_.Za, "WebKit") && !_.A("Edge");
    a: {
        var $p = "",
            aq = function() {
                var a = _.Za;
                if (_.Bb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Xp) return /Edge\/([\d\.]+)/.exec(a);
                if (_.Yi) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (_.Yp) return /WebKit\/(\S+)/.exec(a);
                if (_.Wp) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
        aq && ($p = aq ? aq[1] : "");
        if (_.Yi) {
            var bq = mb();
            if (null != bq && bq > (0, window.parseFloat)($p)) {
                Zp = String(bq);
                break a
            }
        }
        Zp = $p
    }
    nb = Zp;
    kb = {};
    var dq = _.v.document;
    _.cq = dq && _.Yi ? mb() || ("CSS1Compat" == dq.compatMode ? (0, window.parseInt)(nb, 10) : 5) : void 0;
    var eq = Object.freeze || function(a) {
        return a
    };
    pb.prototype.g = null;
    var fq = 0;
    pb.prototype.reset = function(a, b, c, d, e) {
        "number" == typeof e || fq++;
        this.l = d || (0, _.J)();
        this.o = a;
        this.w = b;
        this.h = c;
        delete this.g
    };
    rb.prototype.toString = function() {
        return this.name
    };
    var fe = new rb("SHOUT", 1200),
        hc = new rb("SEVERE", 1E3),
        ic = new rb("WARNING", 900),
        jc = new rb("INFO", 800),
        vb = new rb("CONFIG", 700),
        kc = new rb("FINE", 500),
        gq = new rb("FINER", 400),
        hq = [new rb("OFF", window.Infinity), fe, hc, ic, jc, vb, kc, gq, new rb("FINEST", 300), new rb("ALL", 0)],
        iq = null;
    qb.prototype.log = function(a, b, c) {
        if (a.value >= sb(this).value)
            for (_.z(b) && (b = b()), a = new pb(a, String(b), this.B), c && (a.g = c), c = this; c;) {
                var d = c,
                    e = a;
                if (d.g)
                    for (var f = 0; b = d.g[f]; f++) b(e);
                c = c.l
            }
    };
    var ub = {},
        tb = null;
    _.xb.prototype.F = !1;
    _.xb.prototype.tb = function() {
        return this.F
    };
    _.xb.prototype.ka = function() {
        this.F || (this.F = !0, this.ea())
    };
    _.xb.prototype.ea = function() {
        if (this.B)
            for (; this.B.length;) this.B.shift()()
    };
    _.Ab.prototype.h = function() {
        this.gi = !1
    };
    var Yb = !_.Yi || 9 <= Number(_.cq),
        jq = _.Yi && !_.ob("9"),
        Ub = function() {
            if (!_.v.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
            try {
                _.v.addEventListener("test", _.x, b), _.v.removeEventListener("test", _.x, b)
            } catch (c) {}
            return a
        }();
    _.Ba(Eb, _.Ab);
    var Db = eq({
        2: "touch",
        3: "pen",
        4: "mouse"
    });
    Eb.prototype.h = function() {
        Eb.zb.h.call(this);
        var a = this.l;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, jq) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Fb = "closure_listenable_" + (1E6 * Math.random() | 0),
        Hb = 0;
    Kb.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.h++);
        var g = Mb(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Gd = !1)) : (b = new Ib(b, this.src, f, !!d, e), b.Gd = c, a.push(b));
        return b
    };
    Kb.prototype.$c = function(a, b, c, d) {
        a = this.g[a.toString()];
        var e = -1;
        a && (e = Mb(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    var Sb = "closure_lm_" + (1E6 * Math.random() | 0),
        ac = {},
        Wb = 0,
        dc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    _.Ba(_.ec, _.xb);
    _.ec.prototype[Fb] = !0;
    _.h = _.ec.prototype;
    _.h.De = function(a) {
        this.G = a
    };
    _.h.addEventListener = function(a, b, c, d) {
        _.Ob(this, a, b, c, d)
    };
    _.h.removeEventListener = function(a, b, c, d) {
        Zb(this, a, b, c, d)
    };
    _.h.dispatchEvent = function(a) {
        var b, c = this.G;
        if (c)
            for (b = []; c; c = c.G) b.push(c);
        c = this.ca;
        var d = a.type || a;
        if (_.t(a)) a = new _.Ab(a, c);
        else if (a instanceof _.Ab) a.target = a.target || c;
        else {
            var e = a;
            a = new _.Ab(d, c);
            _.hb(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; 0 <= f; f--) {
                var g = a.g = b[f];
                e = fc(g, d, !0, a) && e
            }
        g = a.g = c;
        e = fc(g, d, !0, a) && e;
        e = fc(g, d, !1, a) && e;
        if (b)
            for (f = 0; f < b.length; f++) g = a.g = b[f], e = fc(g, d, !1, a) && e;
        return e
    };
    _.h.ea = function() {
        _.ec.zb.ea.call(this);
        if (this.h) {
            var a = this.h,
                b = 0,
                c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++) ++b, Jb(d[e]);
                delete a.g[c];
                a.h--
            }
        }
        this.G = null
    };
    _.h.Ha = function(a, b, c, d) {
        return this.h.add(String(a), b, !1, c, d)
    };
    _.h.Eh = function(a, b, c, d) {
        return this.h.add(String(a), b, !0, c, d)
    };
    _.h.Kc = function(a, b, c, d) {
        var e = this.h;
        a = String(a).toString();
        if (a in e.g) {
            var f = e.g[a];
            b = Mb(f, b, c, d); - 1 < b && (Jb(f[b]), _.Ja(f, b), 0 == f.length && (delete e.g[a], e.h--))
        }
    };
    _.h.$c = function(a, b, c, d) {
        return this.h.$c(String(a), b, c, d)
    };
    _.B("cast.receiver.CastChannel");
    mc.prototype.get = function() {
        if (0 < this.h) {
            this.h--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else a = this.l();
        return a
    };
    var Ac;
    var Bc = new mc(function() {
        return new uc
    }, function(a) {
        a.reset()
    });
    rc.prototype.add = function(a, b) {
        var c = Bc.get();
        c.set(a, b);
        this.h ? this.h.next = c : this.g = c;
        this.h = c
    };
    uc.prototype.set = function(a, b) {
        this.g = a;
        this.h = b;
        this.next = null
    };
    uc.prototype.reset = function() {
        this.next = this.h = this.g = null
    };
    var vc, xc = !1,
        sc = new rc;
    Fc.prototype.reset = function() {
        this.context = this.h = this.l = this.g = null;
        this.o = !1
    };
    var Gc = new mc(function() {
        return new Fc
    }, function(a) {
        a.reset()
    });
    _.Ec.prototype.then = function(a, b, c) {
        return Rc(this, _.z(a) ? a : null, _.z(b) ? b : null, c)
    };
    _.Ec.prototype.then = _.Ec.prototype.then;
    _.Ec.prototype.$goog_Thenable = !0;
    _.Ec.prototype.cancel = function(a) {
        0 == this.g && yc(function() {
            var b = new Dc(a);
            Tc(this, b)
        }, this)
    };
    _.Ec.prototype.D = function(a) {
        this.g = 0;
        Cc(this, 2, a)
    };
    _.Ec.prototype.G = function(a) {
        this.g = 0;
        Cc(this, 3, a)
    };
    _.Ec.prototype.F = function() {
        for (var a; a = Uc(this);) Vc(this, a, this.g, this.C);
        this.B = !1
    };
    var ad = pc;
    _.Ba(Dc, Ca);
    Dc.prototype.name = "cancel";
    _.Ba(ed, _.ec);
    _.h = ed.prototype;
    _.h.Pa = null;
    _.h.qb = null;
    _.h.yc = void 0;
    _.h.We = !1;
    _.h.ud = 0;
    _.h.hc = null;
    _.h.W = _.B("goog.net.WebSocket");
    _.h.open = function(a, b) {
        null != this.hc && _.v.clearTimeout(this.hc);
        this.hc = null;
        this.qb = a;
        (this.yc = b) ? (_.F(this.W, "Opening the WebSocket on " + this.qb + " with protocol " + this.yc), this.Pa = new window.WebSocket(this.qb, this.yc)) : (_.F(this.W, "Opening the WebSocket on " + this.qb), this.Pa = new window.WebSocket(this.qb));
        this.Pa.binaryType = this.w;
        this.Pa.onopen = (0, _.za)(this.dn, this);
        this.Pa.onclose = (0, _.za)(this.Om, this);
        this.Pa.onmessage = (0, _.za)(this.Zl, this);
        this.Pa.onerror = (0, _.za)(this.Yl, this)
    };
    _.h.close = function() {
        null != this.hc && _.v.clearTimeout(this.hc);
        this.hc = null;
        this.Pa && (_.F(this.W, "Closing the WebSocket."), this.We = !0, this.Pa.close(), this.Pa = null)
    };
    _.h.send = function(a) {
        this.Pa.send(a)
    };
    _.h.dn = function() {
        _.F(this.W, "WebSocket opened on " + this.qb);
        this.dispatchEvent("d");
        this.ud = 0;
        this.g = this.l(this.ud)
    };
    _.h.Om = function(a) {
        _.F(this.W, "The WebSocket on " + this.qb + " closed.");
        this.dispatchEvent("a");
        this.Pa = null;
        this.We ? (_.F(this.W, "The WebSocket closed normally."), this.qb = null, this.yc = void 0) : (_.C(this.W, "The WebSocket disconnected unexpectedly: " + a.data), this.o && (_.F(this.W, "Seconds until next reconnect attempt: " + Math.floor(this.g / 1E3)), this.hc = bd((0, _.za)(this.open, this, this.qb, this.yc), this.g, this), this.ud++, this.g = this.l(this.ud)));
        this.We = !1
    };
    _.h.Zl = function(a) {
        this.dispatchEvent(new fd(a.data))
    };
    _.h.Yl = function(a) {
        a = a.data;
        _.C(this.W, "An error occurred: " + a);
        this.dispatchEvent(new gd(a))
    };
    _.h.ea = function() {
        ed.zb.ea.call(this);
        this.close()
    };
    _.Ba(fd, _.Ab);
    _.Ba(gd, _.Ab);
    window.cast.receiver.platform = {};
    window.cast.receiver.platform.Cg = {
        "port-for-web-server": "8008"
    };
    window.cast.receiver.platform.wh = function() {
        return !(!window.cast.__platform__ || !window.cast.__platform__.canDisplayType)
    };
    window.cast.receiver.platform.canDisplayType = function(a) {
        return window.cast.__platform__.canDisplayType(a)
    };
    window.cast.receiver.platform.setTouchInputSupport = function(a) {
        return window.cast.__platform__ && _.z(window.cast.__platform__.setTouchInputSupport) ? window.cast.__platform__.setTouchInputSupport(a) : window.Promise.reject()
    };
    window.cast.receiver.platform.getAccessibilitySettings = function() {
        return window.cast.__platform__ && window.cast.__platform__.accessibility && window.cast.__platform__.accessibility.getAccessibilitySettings ? window.cast.__platform__.accessibility.getAccessibilitySettings() : window.Promise.resolve({
            isScreenReaderEnabled: !1,
            isColorInversionEnabled: !1
        })
    };
    window.cast.__platform__ && window.cast.__platform__.canDisplayType || delete window.cast.receiver.platform.canDisplayType;
    window.cast.receiver.platform.gb = function(a) {
        if (window.cast.__platform__ && window.cast.__platform__.queryPlatformValue) return window.cast.__platform__.queryPlatformValue(a);
        if (a in window.cast.receiver.platform.Cg) return window.cast.receiver.platform.Cg[a]
    };
    window.cast.receiver.platform.getHdcpVersion = function() {
        return window.cast.__platform__ && window.cast.__platform__.display && window.cast.__platform__.display.getHdcpVersion ? window.cast.__platform__.display.getHdcpVersion() : window.Promise.reject(Error("getHdcpVersion is not available"))
    };
    _.h = hd.prototype;
    _.h.open = function() {
        this.g ? _.C(kq, "PlatformChannel Already open") : window.cast.__platform__.channel.open((0, _.za)(this.Lk, this), (0, _.za)(this.Kk, this))
    };
    _.h.close = function() {
        this.g ? window.cast.__platform__.channel.close((0, _.za)(this.Jk, this)) : _.C(kq, "PlatformChannel Cannot close unopened channel")
    };
    _.h.send = function(a) {
        window.cast.__platform__.channel.send(a)
    };
    _.h.Lk = function(a) {
        this.g = a;
        id(this, a ? "d" : "b")
    };
    _.h.Jk = function() {
        this.g && (this.g = !1, id(this, "a"))
    };
    _.h.Kk = function(a) {
        id(this, new fd(a))
    };
    _.h.addEventListener = function(a, b) {
        this.h.Ha(a, b)
    };
    _.h.removeEventListener = function(a, b) {
        this.h.Kc(a, b)
    };
    var kq = _.B("cast.receiver.platform.WebSocket");
    window.cast.receiver.ma = {};
    window.cast.receiver.ma.Qc = "urn:x-cast:";
    window.cast.receiver.ma.Ad = window.cast.receiver.ma.Qc + "com.google.cast.system";
    window.cast.receiver.ma.qj = "1.0";
    window.cast.receiver.ma.Ab = "SystemSender";
    _.h = ld.prototype;
    _.h.Ek = function() {
        nd(this, "opened")
    };
    _.h.Bk = function() {
        nd(this, "closed")
    };
    _.h.Ck = function() {
        nd(this, "error")
    };
    _.h.Dk = function(a) {
        _.lc(jd, "Received message: " + a.message);
        var b = (a = JSON.parse(a.message)) && a.namespace;
        a && b && a.senderId && a.data ? (a = new md(b, a.senderId, a.data), a.target = this, this.h.dispatchEvent(a)) : _.C(jd, "IpcChannel Message received is invalid")
    };
    _.h.open = function() {
        _.F(jd, "Opening message bus websocket");
        this.g.open("ws://localhost:" + window.cast.receiver.platform.gb("port-for-web-server") + "/v2/ipc")
    };
    _.h.close = function() {
        _.F(jd, "Closing message bus websocket");
        this.g.close()
    };
    _.h.send = function(a, b, c) {
        a = JSON.stringify({
            namespace: a,
            senderId: b,
            data: c
        });
        _.lc(jd, "IPC message sent: " + a);
        this.g.send(a)
    };
    _.h.addEventListener = function(a, b) {
        this.h.Ha(a, b)
    };
    _.h.removeEventListener = function(a, b) {
        this.h.Kc(a, b)
    };
    var jd = _.B("cast.receiver.IpcChannel");
    _.q(md, _.Ab);
    var lq = /dv(he|av).[s|d|p][e|t|w][n|r|h|b][a|h]?[e|t|w]?/;
    window.cast.receiver.media = {};
    window.cast.receiver.media.Qa = window.cast.receiver.ma.Qc + "com.google.cast.media";
    var mq = {
        INVALID_PLAYER_STATE: "INVALID_PLAYER_STATE",
        LOAD_FAILED: "LOAD_FAILED",
        LOAD_CANCELLED: "LOAD_CANCELLED",
        INVALID_REQUEST: "INVALID_REQUEST",
        ERROR: "ERROR"
    };
    _.w("cast.receiver.media.repeatMode", {
        REPEAT_OFF: "REPEAT_OFF",
        REPEAT_ALL: "REPEAT_ALL",
        REPEAT_SINGLE: "REPEAT_SINGLE",
        REPEAT_ALL_AND_SHUFFLE: "REPEAT_ALL_AND_SHUFFLE"
    }, void 0);
    window.cast.receiver.media.zh = function(a) {
        return "REPEAT_OFF" == a || "REPEAT_ALL" == a || "REPEAT_SINGLE" == a || "REPEAT_ALL_AND_SHUFFLE" == a
    };
    _.q(Cd, _.xb);
    _.h = Cd.prototype;
    _.h.Xh = function(a) {
        gc(nq, gq, "Dispatching CastMessageBus message");
        var b = "STRING" == this.o ? a.data : this.L(a.data);
        Fd(this, new Gd(a.senderId, a.senderId, b));
        a = new Gd("message", a.senderId, b);
        this.l && this.l(a);
        Fd(this, a)
    };
    _.h.send = function(a, b) {
        this.D || this.h == window.cast.receiver.ma.Ad || _.E(nq, "Application should not send requests before the system is ready (they will be ignored)");
        Fd(this, new Gd("send", a, b));
        for (var c = _.n(this.J), d = c.next(); !d.done; d = c.next())
            if (d = d.value, d(a, this.h, b)) return;
        if ("STRING" == this.o) {
            if (!_.t(b)) throw Error("Wrong argument, CastMessageBus type is STRING");
            this.C.send(this.h, a, b)
        } else this.C.send(this.h, a, this.G(b))
    };
    _.h.ml = function(a) {
        if ("JSON" != this.o) throw Error("Unexpected message type for JSON serialization");
        return this.h === window.cast.receiver.media.Qa ? JSON.stringify(a, function(a, c) {
            return null === c ? void 0 : c
        }) : JSON.stringify(a)
    };
    _.h.Ok = function(a) {
        if ("JSON" != this.o) throw Error("Unexpected message type for JSON serialization");
        return JSON.parse(a)
    };
    _.h.ea = function() {
        _.xb.prototype.ea.call(this);
        this.C.removeEventListener(this.h, this.I);
        this.w.ka();
        for (var a in this.g) this.g[a] && this.g[a].close();
        this.g = {};
        gc(nq, gq, "Disposed " + ("CastMessageBus[" + this.h + "]"))
    };
    _.h.addEventListener = function(a, b) {
        _.Ob(this.w, a, b)
    };
    _.h.removeEventListener = function(a, b) {
        Zb(this.w, a, b)
    };
    _.h.dispatchEvent = function(a) {
        return Fd(this, a)
    };
    var nq = _.B("cast.receiver.CastMessageBus");
    _.q(Gd, _.Ab);
    window.cast.receiver.Bb = {};
    window.cast.receiver.Bb.Mb = window.cast.receiver.ma.Qc + "com.google.cast.cac";
    window.cast.receiver.cc = {};
    window.cast.receiver.cc.nj = window.cast.receiver.ma.Qc + "com.google.cast.inject";
    window.cast.receiver.cc.zd = "__inject__";
    _.h = _.Hd.prototype;
    _.h.Wa = function() {
        Jd(this);
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
        return a
    };
    _.h.nb = function() {
        Jd(this);
        return this.g.concat()
    };
    _.h.clear = function() {
        this.h = {};
        this.l = this.g.length = 0
    };
    _.h.get = function(a, b) {
        return _.Id(this.h, a) ? this.h[a] : b
    };
    _.h.set = function(a, b) {
        _.Id(this.h, a) || (this.l++, this.g.push(a));
        this.h[a] = b
    };
    _.h.forEach = function(a, b) {
        for (var c = this.nb(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    _.h.clone = function() {
        return new _.Hd(this)
    };
    Nd.prototype.B = function(a) {
        var b = this,
            c = a.data,
            d = c.requestId,
            e = a.senderId;
        if ("WRAPPED" != c.type) Qd(this, "Unsupported message type " + c.type, e, d);
        else {
            a = JSON.parse(c.data);
            c = a.namespace;
            var f = this.l.g[c] || null;
            if (f) {
                var g = !1;
                if (c == window.cast.receiver.Bb.Mb) a.data.requestId = d, g = !0;
                else if (c == window.cast.receiver.media.Qa) {
                    var k = a.data;
                    k.requestId = d;
                    k.mediaSessionId = this.w
                } else {
                    Qd(this, "Unsupported namespace " + c, e, d);
                    return
                }
                this.g.set(d, e);
                try {
                    this.h = null, Dd(f, c, window.cast.receiver.cc.zd, JSON.stringify(a.data))
                } catch (p) {
                    throw _.Kd(this.g,
                        d), Qd(this, "Injecting " + a.data + " failed with " + p, e, d), p;
                }
                if (!g) {
                    var l = function() {
                        return b.h ? (_.Kd(b.g, d), Qd(b, "Error " + JSON.stringify(b.h), e, d, "WRAPPED_ERROR", b.h), !0) : !1
                    };
                    l() || (0, window.setTimeout)(function() {
                        l() || (_.Kd(b.g, d), Sd(b, e, d))
                    }, 5)
                }
            } else Qd(this, "Unregistered namespace " + c, e, d, "WRAPPED_ERROR", {
                type: "ERROR",
                code: "UNREGISTERED_NAMESPACE"
            })
        }
    };
    Nd.prototype.F = function(a, b, c) {
        if (b == window.cast.receiver.media.Qa && "STRING" == (this.l.g[b] || null).o) try {
            c = JSON.parse(c)
        } catch (e) {
            return _.C(Od, "Parse failed: " + c), !1
        }
        var d = c.type;
        b == window.cast.receiver.media.Qa && "MEDIA_STATUS" == d && c.status && c.status[0] && (this.w = c.status[0].mediaSessionId);
        if (a != window.cast.receiver.cc.zd) return !1;
        a = c.requestId;
        if (!_.r(a)) return _.E(Od, "No requestId in " + c), !0;
        if (b == window.cast.receiver.media.Qa) {
            switch (d) {
                case "INVALID_REQUEST":
                case "INVALID_PLAYER_STATE":
                    b = c.reason,
                        this.h = {
                            type: "ERROR",
                            code: b ? b : d
                        }
            }
            return !0
        }
        d = this.g.get(a);
        if (!d) return _.C(Od, "Request not found " + a), !0;
        _.Kd(this.g, a);
        if (b != window.cast.receiver.Bb.Mb) return _.C(Od, "Unsupported namespace " + b), !0;
        b = c;
        switch (b.type) {
            case "SUCCESS":
                Sd(this, d, a, Object.getOwnPropertyNames(c).some(function(a) {
                    return "type" != a && "requestId" != a && _.r(c[a])
                }) ? JSON.stringify(c) : void 0);
                break;
            case "ERROR":
                Qd(this, "Wrapped error", d, a, "WRAPPED_ERROR", b);
                break;
            default:
                Qd(this, "Unknown message type " + c, d, a)
        }
        return !0
    };
    _.qa(Nd);
    var Od = _.B("cast.receiver.InjectManager");
    _.q(Rd, Td);
    _.q(Pd, Td);
    var Vd = null;
    Ud.prototype.set = function(a) {
        this.g = a
    };
    Ud.prototype.reset = function() {
        this.set((0, _.J)())
    };
    Ud.prototype.get = function() {
        return this.g
    };
    Wd.prototype.g = !0;
    Wd.prototype.h = !0;
    Wd.prototype.l = !1;
    _.Ba(Zd, Wd);
    $d.prototype.l = function(a) {
        if (!this.o[a.h]) {
            var b = this.g;
            var c = [];
            c.push(b.o, " ");
            if (b.h) {
                var d = new Date(a.l);
                c.push("[", Xd(d.getFullYear() - 2E3) + Xd(d.getMonth() + 1) + Xd(d.getDate()) + " " + Xd(d.getHours()) + ":" + Xd(d.getMinutes()) + ":" + Xd(d.getSeconds()) + "." + Xd(Math.floor(d.getMilliseconds() / 10)), "] ")
            }
            c.push("[", Yd(a, b.w.get()), "s] ");
            c.push("[", a.h, "] ");
            c.push(a.w);
            b.l && (d = a.g) && c.push("\n", d instanceof Error ? d.message : d.toString());
            b.g && c.push("\n");
            b = c.join("");
            if (c = oq) switch (a.o) {
                case fe:
                    ce(c, "info",
                        b);
                    break;
                case hc:
                    ce(c, "error", b);
                    break;
                case ic:
                    ce(c, "warn", b);
                    break;
                default:
                    ce(c, "log", b)
            }
        }
    };
    var ae = null,
        oq = _.v.console;
    _.q(_.Ld, _.xb);
    _.h = _.Ld.prototype;
    _.h.start = function(a) {
        if (a) {
            if (!a) throw Error("Cannot validate undefined config.");
            if (void 0 != a.maxInactivity && 5 > a.maxInactivity) throw Error("config.maxInactivity must be greater than or equal to 5 seconds.");
            _.hb(this.h, a || {})
        }
        this.h.versionCode && 0 <= this.h.versionCode && (Number.isInteger(this.h.versionCode) ? (window.cast.receiver.ia.Kf("Cast.Receiver.VersionCode", this.h.versionCode), _.F(ee, "App Version " + this.h.versionCode)) : _.C(ee, "Receiver versionCode needs to be an integer"));
        Nd.H();
        this.ga || ne(this, !1);
        this.ca = !0;
        this.L.open()
    };
    _.h.stop = function() {
        this.ka();
        window.close()
    };
    _.h.zc = function() {
        return "ready" == this.C
    };
    _.h.getSenders = function() {
        return _.ab(this.l)
    };
    _.h.Wd = function(a) {
        return this.l[a] ? _.eb(this.l[a]) : null
    };
    _.h.wf = function() {
        return null == this.G ? this.D ? "notvisible" : "unknown" : this.G ? "visible" : "notvisible"
    };
    _.h.tf = function() {
        return null == this.D ? this.G ? "notstandby" : "unknown" : this.D ? "standby" : "notstandby"
    };
    _.h.Xd = function() {
        "notstarted" == this.C && (this.C = /[&?]google_cast_bg=true(&|$)/.test(window.location.search) ? "startinginbackground" : "starting");
        return this.C
    };
    _.h.Qd = function() {
        return this.P
    };
    _.h.Yc = function() {
        return this.o
    };
    _.h.vd = function(a) {
        this.zc() ? je(this, a) : this.h.statusText != a && (this.h.statusText = a, this.T = !0)
    };
    _.h.og = function(a) {
        if (0 > a || 1 < a) throw Error("Invalid level value");
        this.w.send(window.cast.receiver.ma.Ab, {
            type: "setvolume",
            level: a
        })
    };
    _.h.pg = function(a) {
        this.w.send(window.cast.receiver.ma.Ab, {
            type: "setvolume",
            muted: a
        })
    };
    _.h.bd = function() {
        return this.ja
    };
    _.h.Be = function(a) {
        this.w.send(window.cast.receiver.ma.Ab, {
            type: "startheartbeat",
            maxInactivity: a
        })
    };
    _.h.ye = function(a) {
        this.w.send(window.cast.receiver.ma.Ab, {
            type: "sendfeedbackmessage",
            message: a
        })
    };
    _.h.pn = function(a) {
        a = a.data;
        switch (a.type) {
            case "opened":
                _.F(ee, "Underlying message bus is open");
                var b = _.ab(this.g),
                    c = this.h.statusText;
                a = this.h.nl;
                var d = {
                    type: "ready"
                };
                c && (d.statusText = c);
                a && (d.dialData = a);
                d.activeNamespaces = b;
                d.version = window.cast.receiver.VERSION;
                d.messagesVersion = window.cast.receiver.ma.qj;
                this.w.send(window.cast.receiver.ma.Ab, d);
                this.h.maxInactivity && this.Be(this.h.maxInactivity);
                break;
            case "closed":
                this.Wf();
                break;
            case "error":
                le(this, new se("error", null));
                break;
            case "ready":
                b =
                    a.launchingSenderId;
                c = _.ab(this.g);
                this.N = a.version;
                this.M = !re(this);
                he(this, a.deviceCapabilities);
                this.P = {
                    id: a.applicationId,
                    name: a.applicationName,
                    iconUrl: a.iconUrl,
                    sessionId: a.sessionId,
                    namespaces: c,
                    launchingSenderId: b,
                    launchedFrom: a.launchedFrom || "UNKNOWN"
                };
                this.C = "ready";
                for (d in this.g) this.g[d].D = !0;
                this.ha.resolve();
                this.T && (this.T = !1, je(this, this.h.statusText, this.h.nl));
                _.F(ee, "Dispatching CastReceiverManager system ready event");
                b = new xe(this.P);
                this.V && this.V(b);
                le(this, b);
                break;
            case "senderconnected":
                b = {
                    id: a.senderId,
                    userAgent: a.userAgent
                };
                if (ie(b.id)) _.F(ee, "Ignored connection from " + b.id);
                else {
                    _.F(ee, "Dispatching CastReceiverManager sender connected event [" + b.id + "]");
                    _.cb(this.l, b.id) && _.C(ee, "Unexpected connected message for already connected sender: " + b.id);
                    this.l[b.id] = b;
                    a = new ue(b.id, b.userAgent);
                    for (c in this.g) {
                        d = this.g[c];
                        var e = b.id;
                        _.cb(d.g, e) ? _.C(nq, "Unexpected sender already registered [" + d.h + ", " + e + "]") : (_.F(nq, "Registering sender [" + d.h + ", " + e + "]"), d.g[e] = null)
                    }
                    le(this, a)
                }
                break;
            case "senderdisconnected":
                c =
                    a.senderId;
                a = a.reason;
                if (ie(c)) _.F(ee, "Ignored disconnection from " + c);
                else {
                    switch (a) {
                        case "closed_by_peer":
                            a = "requested_by_sender";
                            break;
                        case "transport_invalid_message":
                            a = "error";
                            break;
                        default:
                            a = "unknown"
                    }
                    _.F(ee, "Dispatching sender disconnected event [" + c + "] Reason: " + a);
                    if (_.cb(this.l, c)) {
                        d = this.l[c].userAgent;
                        delete this.l[c];
                        a = new te(c, d, a);
                        for (b in this.g) d = this.g[b], e = c, _.cb(d.g, e) && (_.F(nq, "Unregistering sender [" + d.h + ", " + e + "]"), d.g[e] && d.g[e].close(), delete d.g[e]);
                        le(this, _.eb(a));
                        this.X &&
                            this.X(a)
                    } else _.C(ee, "Unknown sender disconnected: " + c)
                }
                break;
            case "volumechanged":
                this.ja = b = {
                    level: a.level,
                    muted: a.muted
                };
                _.F(ee, "Dispatching system volume changed event [" + b.level + ", " + b.muted + "]");
                le(this, new we(b));
                break;
            case "visibilitychanged":
                this.M || (b = a.visible, me(this, _.r(b) ? b : null));
                break;
            case "standbychanged":
                this.M || (b = a.standby, b = _.r(b) ? b : null, b != this.D && (_.F(ee, "Dispatching standby changed event " + b), this.D = b, le(this, new ve(1 == b))));
                break;
            case "maxvideoresolutionchanged":
                b = a.height;
                _.F(ee, "Dispatching maxvideoresolutionchanged " + b);
                le(this, new ze(b));
                break;
            case "hdroutputtypechanged":
                this.U && this.U(a.hdrType);
                break;
            case "screenresolutionchanged":
                break;
            case "feedbackstarted":
                _.F(ee, "Dispatching feedback started event");
                this.ye("");
                break;
            default:
                throw Error("Unexpected message type: " + a.type);
        }
    };
    _.h.canDisplayType = function(a, b, c, d, e) {
        if (!window.cast.receiver.platform.wh()) return !0;
        if (!Ra(a, "video/") && !Ra(a, "audio/")) throw Error("Not video or audio types.");
        b && (a += "; codecs=" + b);
        c && d && (a += "; width=" + c + "; height=" + d);
        e && (a += "; framerate=" + e);
        if (c = b) a: for (c = !1, b = b.split(","), d = 0; d < b.length; d++) {
            if (b[d].match(lq)) {
                c = !1;
                break a
            }
            0 === b[d].indexOf("hev1.2") && (c = !0)
        }
        c && (a += "; eotf=smpte2084");
        return window.cast.receiver.platform.canDisplayType(a)
    };
    _.h.Uh = function() {
        this.M && me(this, "visible" == window.document.visibilityState)
    };
    _.h.Wf = function() {
        _.F(ee, "Dispatching shutdown event");
        this.Xd();
        this.C = "startinginbackground" == this.C ? "stoppinginbackground" : "stopping";
        for (var a in this.g) this.g[a].D = !1;
        le(this, new ye)
    };
    _.h.ea = function() {
        this.L.close();
        _.xb.prototype.ea.call(this);
        window && Zb(window, "unload", this.Wf, !1, this);
        window.document && Zb(window.document, "visibilitychange", this.Uh, !1, this);
        this.J.ka();
        delete _.Ld.ce;
        _.lc(ee, "Disposed CastReceiverManager")
    };
    _.h.addEventListener = function(a, b) {
        _.Ob(this.J, a, b)
    };
    _.h.removeEventListener = function(a, b) {
        Zb(this.J, a, b)
    };
    _.h.dispatchEvent = function(a) {
        return le(this, a)
    };
    _.qa(_.Ld);
    _.Ld.getInstance = _.Ld.H;
    var ge = null,
        ee = _.B("cast.receiver.CastReceiverManager");
    _.q(se, _.Ab);
    _.q(te, se);
    _.q(ue, se);
    _.q(ke, se);
    _.q(ve, se);
    _.q(we, se);
    _.q(xe, se);
    _.q(ye, se);
    _.q(ze, se);
    var de = {
        maxInactivity: 10
    };
    Ae.prototype.l = function(a) {
        if (this.g.zc()) _.E(pq, "Ignoring broadcast request, system is ready.");
        else {
            a = a.data;
            var b = a.type;
            if ("APPLICATION_BROADCAST" != b) _.C(pq, "Ignoring message type: " + b);
            else if (b = a.g) {
                var c = this.g.g[b] || null;
                if (c) switch (b) {
                    case window.cast.receiver.media.Qa:
                        var d = JSON.parse(a.message);
                        if ("PRECACHE" != d.type) {
                            _.C(pq, "Unsupported type for media namespace: " + d.type);
                            break
                        }
                        Dd(c, b, "__broadcast__", a.message);
                        break;
                    default:
                        _.C(pq, "Unsupported namespace: " + a.g)
                } else _.C(pq, "Invalid message bus for namespace: " +
                    b)
            } else _.C(pq, "Missing namespace: " + b)
        }
    };
    _.qa(Ae);
    var pq = _.B("cast.receiver.BroadcastManager");
    window.cast.receiver.O = {};
    Fe.prototype.I = function(a) {
        var b = a.data,
            c = b.type;
        a = a.senderId;
        switch (c) {
            case "SET_CREDENTIALS":
                Me(this, b.forRequestId, b);
                var d = this.w;
                break;
            case "LOAD_BY_ENTITY":
                d = this.o;
                break;
            case "USER_ACTION":
                d = this.C;
                break;
            case "DISPLAY_STATUS":
                d = this.D;
                break;
            case "CUSTOM_COMMAND":
                d = this.F;
                break;
            case "FOCUS_STATE":
                (d = this.G) && this.B.Yc().focus_state_supported && d(b);
                return;
            case "SUCCESS":
            case "ERROR":
                Me(this, b.requestId, b);
                return;
            default:
                He(this, "Unsupported event " + c, a, b, "INVALID_REQUEST");
                return
        }
        d ? Ie(this, a,
            b, d) : He(this, "Handler for " + c + " not implemented", a, b, "NOT_SUPPORTED")
    };
    Fe.prototype.Zf = function(a, b) {
        var c = this,
            d = this.B.Yc();
        if (d && !0 === d.display_supported && !d.audio_assistant) return window.Promise.resolve(new Ke("NOT_SUPPORTED"));
        d = (0, _.J)();
        if (_.Id(this.l.h, d)) return window.Promise.reject(Error("Duplicate request"));
        var e = new Pe(a, b);
        e.requestId = d;
        return new window.Promise(function(a) {
            c.l.set(e.requestId, a);
            c.h.send("system-0", e)
        })
    };
    Fe.prototype.cg = function() {
        var a = this,
            b = (0, _.J)(),
            c = new Oe;
        c.requestId = b;
        return new window.Promise(function(b) {
            a.l.set(c.requestId, b);
            a.h.send("system-0", c)
        })
    };
    _.qa(Fe);
    Fe.getInstance = Fe.H;
    var Ee = window.cast.receiver.Bb.Mb,
        Je = _.B("cast.receiver.CommandAndControlManager");
    _.q(Oe, Ne);
    _.q(Pe, Ne);
    _.q(Qe, Ne);
    _.q(Re, Ne);
    _.q(Se, Re);
    _.q(Ke, Re);
    var Ue = /#(.)(.)(.)(.)/,
        Te = /^#(?:[0-9a-f]{4}){1,2}$/i;
    _.q(bf, _.xb);
    bf.prototype.Yb = function() {
        return this.G
    };
    bf.prototype.yb = function(a) {
        Ye(this);
        Ze(this);
        $e(this, a)
    };
    bf.prototype.ea = function() {
        _.xb.prototype.ea.call(this);
        for (var a = _.n(this.h), b = a.next(); !b.done; b = a.next()) this.g.removeChild(b.value);
        this.h.length = 0;
        Ye(this);
        gf(this);
        gc(hf, gq, "Disposed TextTracksManager")
    };
    var hf = _.B("cast.receiver.TextTracksManager");
    _.h = mf.prototype;
    _.h.$g = function(a, b, c, d) {
        of(this);
        this.F = a;
        this.w = b;
        this.J = d || 0;
        this.o = c || null
    };
    _.h.zk = function(a) {
        of(this);
        this.G(a)
    };
    _.h.Zg = function() {
        of(this);
        this.D()
    };
    _.h.Ak = function() {
        this.h && this.l && af(this.h, this.l);
        this.I()
    };
    _.h.registerErrorCallback = function(a) {
        this.G = a
    };
    _.h.registerEndedCallback = function(a) {
        this.D = a
    };
    _.h.registerLoadCallback = function(a) {
        this.I = a
    };
    _.h.unregisterErrorCallback = function() {
        this.G = _.x
    };
    _.h.unregisterEndedCallback = function() {
        this.D = _.x
    };
    _.h.unregisterLoadCallback = function() {
        this.I = _.x
    };
    _.h.Vh = function() {
        pf(this)
    };
    _.h.load = function(a, b, c, d, e, f) {
        this.h && (this.h.ka(), this.h = null);
        this.B = !1;
        d && d.tracks && this.g && (this.h && this.h.ka(), this.h = new bf(this.g, d.tracks, d.activeTrackIds || [], d.textTrackStyle || null), d.language && ef(this.h, d.language));
        null != this.o && _.Ob(this.g, "timeupdate", this.Vh, !1, this);
        e || (this.w = c && 0 < c ? c : 0, _.F(this.W, "Load - contentId: " + a + " autoplay: " + b + " time: " + this.w), this.g.autoplay = !1, a && (this.g.src = a), this.g.autoplay = b, this.g.load(), _.r(f) && (this.g.playbackRate = f))
    };
    _.h.reset = function() {
        this.B = !1;
        this.h && (this.h.ka(), this.h = null);
        this.l = null;
        this.g.removeAttribute("src");
        this.w = 0;
        this.g.load();
        of(this)
    };
    _.h.play = function() {
        this.B = !1;
        this.g.play()
    };
    _.h.seek = function(a, b) {
        this.g.currentTime != a && (this.g.currentTime = a);
        pf(this) || ("PLAYBACK_START" == b && this.g.paused ? this.g.play() : "PLAYBACK_PAUSE" != b || this.g.paused || this.g.pause())
    };
    _.h.Qb = function(a) {
        return this.g.playbackRate = a
    };
    _.h.pause = function() {
        this.B = !0;
        this.g.pause()
    };
    _.h.getState = function() {
        null == this.F && (this.F = this.g.autoplay);
        return this.g.paused || (0, window.isNaN)(this.g.duration) ? this.g.duration && (this.g.currentTime || 0 == this.g.currentTime) && this.g.currentTime < nf(this) ? this.g.currentTime == this.w && this.F && !this.B ? "BUFFERING" : "PAUSED" : "IDLE" : "PLAYING"
    };
    _.h.getCurrentTimeSec = function() {
        var a = nf(this);
        return (0, window.isNaN)(a) ? this.g.currentTime : this.g.currentTime < a ? this.g.currentTime : a
    };
    _.h.getDurationSec = function() {
        return nf(this)
    };
    _.h.getVolume = function() {
        return {
            level: this.g.volume,
            muted: this.g.muted
        }
    };
    _.h.setVolume = function(a) {
        _.r(a.level) && (this.g.volume = a.level);
        _.r(a.muted) && (this.g.muted = a.muted)
    };
    _.h.editTracksInfo = function(a) {
        this.h && (a.textTrackStyle && this.h.yb(a.textTrackStyle), a.language ? ef(this.h, a.language) : a.activeTrackIds && af(this.h, a.activeTrackIds));
        qf(this, a.activeTrackIds);
        return this.l
    };
    _.h = tf.prototype;
    _.h.mg = function(a) {
        this.l = a
    };
    _.h.fetchItems = function(a, b, c, d) {
        var e = this,
            f = void 0,
            g = Jf(this, b);
        this.l ? 0 < c && 0 < d ? f = "Queue operations only support expanding the front or back." : 0 > g && (f = "Reference item id is not in current queue.") : f = "Fetch items is only supported with an external queue.";
        if (f) return _.E(Bf, f), window.Promise.reject(f);
        0 < c ? (f = this.g.length - 1, c -= f - g, b = this.g[f].itemId) : 0 < d && (d -= g, b = this.g[0].itemId);
        var k = new yd;
        k.requestId = a;
        return 0 >= c && 0 >= d ? (k.changeType = "NO_CHANGE", k.sequenceNumber = this.B - 1, window.Promise.resolve(k)) :
            window.Promise.resolve(this.l.fetchItems(b, c, d)).then(function(a) {
                if (a && 0 != a.length) {
                    var d = 0 < c ? void 0 : b;
                    Ff(e, a, d);
                    k.changeType = "INSERT";
                    k.itemIds = a.map(function(a) {
                        return a.itemId
                    });
                    k.insertBefore = d;
                    k.sequenceNumber = e.B++
                } else k.changeType = "NO_CHANGE", k.sequenceNumber = e.B - 1;
                return k
            })
    };
    _.h.clear = function() {
        this.g = void 0;
        this.o = "REPEAT_OFF";
        vf(this, !1);
        this.C = this.h = 0
    };
    _.h.Vb = function(a, b) {
        a = void 0 === a ? !0 : a;
        b = void 0 === b ? !1 : b;
        var c = [],
            d = this.g.length;
        d = b && this.h < d - 1 ? this.h + 1 : d - 1;
        for (b = b && 0 < this.h ? this.h - 1 : 0; b <= d; b++) c.push(a ? this.g[b] : sf(this.g[b], a));
        return c
    };
    _.h.Eb = function() {
        return !this.g || 0 > this.h ? null : this.g[this.h]
    };
    _.h.Xc = function() {
        return this.h
    };
    _.h.wg = function(a) {
        for (var b = 0; b < a.length; b++)
            for (var c = 0; c < this.g.length; c++) a[b].itemId == this.g[c].itemId && (this.g[c] = a[b])
    };
    _.h.reset = function() {
        this.h = -1
    };
    _.h.Ff = function(a, b, c) {
        return Ff(this, a, b, c)
    };
    _.h.dg = function(a) {
        for (var b = !1, c = 0; c < a.length; c++)
            for (var d = 0; d < this.g.length; d++)
                if (a[c] == this.g[d].itemId) {
                    this.g.splice(d, 1);
                    this.h == d ? b = !0 : this.h > d && this.h--;
                    break
                }
        this.h >= this.g.length && (this.h = Kf(this) ? 0 : -1, wf(this) && 0 == this.h && Pf(this));
        if (this.l) this.l.onItemsRemoved(a);
        return b
    };
    _.h.shuffle = function() {
        var a = this;
        if (this.l) return window.Promise.resolve(this.l.shuffle()).then(function(b) {
            b && (vf(a, !0), a.g = b)
        });
        Pf(this);
        return window.Promise.resolve()
    };
    _.h.Ge = function() {
        var a = this;
        if (this.l) return window.Promise.resolve(this.l.Ge()).then(function(b) {
            b && (vf(a, !1), a.g = b)
        });
        Sf(this);
        return window.Promise.resolve()
    };
    var Bf = _.B("cast.receiver.MediaQueue");
    window.cast.receiver.Ka = {};
    var S = {},
        qq = (S.LOAD = "Cast.Receiver.Message.LOAD", S.GET_STATUS = "Cast.Receiver.Message.GET_STATUS", S.LOAD = "Cast.Receiver.Message.LOAD", S.PAUSE = "Cast.Receiver.Message.PAUSE", S.STOP = "Cast.Receiver.Message.STOP", S.SKIP_AD = "Cast.Receiver.Message.SKIP_AD", S.PLAY = "Cast.Receiver.Message.PLAY", S.PLAY_AGAIN = "Cast.Receiver.Message.PLAY_AGAIN", S.SEEK = "Cast.Receiver.Message.SEEK", S.SET_PLAYBACK_RATE = "Cast.Receiver.Message.SET_PLAYBACK_RATE", S.SET_VOLUME = "Cast.Receiver.Message.SET_VOLUME", S.EDIT_TRACKS_INFO = "Cast.Receiver.Message.EDIT_TRACKS_INFO",
            S.EDIT_AUDIO_TRACKS = "Cast.Receiver.Message.EDIT_AUDIO_TRACKS", S.PRELOAD = "Cast.Receiver.Message.PRELOAD", S.CANCEL_PRELOAD = "Cast.Receiver.Message.CANCEL_PRELOAD", S.PRECACHE = "Cast.Receiver.Message.PRECACHE", S.QUEUE_LOAD = "Cast.Receiver.Message.QUEUE_LOAD", S.QUEUE_INSERT = "Cast.Receiver.Message.QUEUE_INSERT", S.QUEUE_UPDATE = "Cast.Receiver.Message.QUEUE_UPDATE", S.QUEUE_REMOVE = "Cast.Receiver.Message.QUEUE_REMOVE", S.QUEUE_REORDER = "Cast.Receiver.Message.QUEUE_REORDER", S.QUEUE_NEXT = "Cast.Receiver.Message.QUEUE_NEXT",
            S.QUEUE_PREV = "Cast.Receiver.Message.QUEUE_PREV", S.QUEUE_GET_ITEM_RANGE = "Cast.Receiver.Message.QUEUE_GET_ITEM_RANGE", S.QUEUE_GET_ITEMS = "Cast.Receiver.Message.QUEUE_GET_ITEMS", S.QUEUE_GET_ITEM_IDS = "Cast.Receiver.Message.QUEUE_GET_ITEM_IDS", S.QUEUE_SHUFFLE = "Cast.Receiver.Message.QUEUE_SHUFFLE", S.USER_ACTION = "Cast.Receiver.Message.MEDIA_USER_ACTION", S.SET_CREDENTIALS = "Cast.Receiver.Message.SET_CREDENTIALS", S.LOAD_BY_ENTITY = "Cast.Receiver.Message.LOAD_BY_ENTITY", S.USER_ACTION = "Cast.Receiver.Message.USER_ACTION",
            S.DISPLAY_STATUS = "Cast.Receiver.Message.DISPLAY_STATUS", S.CUSTOM_COMMAND = "Cast.Receiver.Message.CUSTOM_COMMAND", S),
        rq = {},
        sq = (rq.UNKNOWN = 1, rq.SUCCESS = 2, rq.INJECT_ERROR = 3, rq.INVALID_COMMAND = 3, rq.INVALID_PARAMS = 4, rq.INVALID_MEDIA_SESSION_ID = 5, rq.SKIP_LIMIT_REACHED = 6, rq.NOT_SUPPORTED = 7, rq.LANGUAGE_NOT_SUPPORTED = 8, rq.END_OF_QUEUE = 9, rq.DUPLICATE_REQUEST_ID = 10, rq.APP_ERROR = 11, rq.AUTHENTICATION_EXPIRED = 12, rq.PREMIUM_ACCOUNT_REQUIRED = 13, rq.CONCURRENT_STREAM_LIMIT = 14, rq.PARENTAL_CONTROL_RESTRICTED = 15, rq.NOT_AVAILABLE_IN_REGION =
            16, rq.CONTENT_ALREADY_PLAYING = 17, rq.INVALID_REQUEST = 18, rq.GENERIC_LOAD_ERROR = 19, rq),
        tq = "local";
    window.cast.receiver.Ka.Dn = function(a) {
        tq = a
    };
    window.cast.receiver.Ka.Lf = function(a, b) {
        a = qq[a];
        b = b == tq ? 2 : "__touch_controls__" == b ? 3 : b == window.cast.receiver.cc.zd ? 4 : 1;
        a && window.cast.receiver.ia.Kf(a, b)
    };
    window.cast.receiver.Ka.bo = function() {
        var a = _.Ld.H(),
            b = a.g[window.cast.receiver.media.Qa] || null;
        b && b.addEventListener("message", function(a) {
            a.data && a.data.type && window.cast.receiver.Ka.Lf(a.data.type, a.senderId)
        });
        (a = a.g[window.cast.receiver.Bb.Mb] || null) && a.addEventListener("message", function(a) {
            a.data && a.data.type && window.cast.receiver.Ka.Lf(a.data.type, a.senderId)
        })
    };
    window.cast.receiver.Ka.Jf = function(a) {
        window.cast.receiver.ia.Kf("Cast.Receiver.CACResponse", sq[a] || 1)
    };
    _.Ld.H().addEventListener("ready", window.cast.receiver.Ka.bo);
    Yf.prototype.clear = function() {
        this.g = [];
        this.h = []
    };
    Yf.prototype.contains = function(a) {
        return _.Ia(this.g, a) || _.Ia(this.h, a)
    };
    Yf.prototype.Wa = function() {
        for (var a = [], b = this.g.length - 1; 0 <= b; --b) a.push(this.g[b]);
        var c = this.h.length;
        for (b = 0; b < c; ++b) a.push(this.h[b]);
        return a
    };
    _.h = ag.prototype;
    _.h.jh = function() {
        return this.xn++
    };
    _.h.vc = function() {
        return this.g ? this.g.media || null : null
    };
    _.h.Ce = function(a, b, c) {
        b = !_.r(b) || b;
        if (c && !b) throw Error("No broadcast call but status customData has been provided");
        this.g && (this.g.media = a);
        b && this.$(!0, null, c)
    };
    _.h.wc = function() {
        return this.Tb
    };
    _.h.wd = function(a, b) {
        this.Tb = a;
        (void 0 === b || b) && this.g && this.$(!1)
    };
    _.h.Ed = function(a) {
        this.wd(a | this.wc())
    };
    _.h.eg = function(a) {
        this.wd(~a & this.wc())
    };
    _.h.hb = function(a) {
        fg(this, this.T, a)
    };
    _.h.Tf = function(a) {
        var b = a.data,
            c = b.type;
        if ("SHUTDOWN" == c) this.Aa.stop();
        else if (!this.N || $f(this.ha) && "LOAD" == c) {
            a = a.senderId;
            var d = b.type;
            var e = b.requestId;
            if (_.u(e) && e == Math.floor(e)) {
                var f = !1;
                void 0 != b.mediaSessionId && b.mediaSessionId != this.D ? (_.C(K, "Invalid media session ID: " + b.mediaSessionId + "  does not match the expected ID: " + this.D), f = !0) : "LOAD" != d && "PLAY_AGAIN" != d && "GET_STATUS" != d && "QUEUE_LOAD" != d && "PRECACHE" != d && "STORE_SESSION" != d && "RESUME_SESSION" != d && (_.r(b.mediaSessionId) ? "IDLE" == hg(this) &&
                    (_.C(K, "Unexpected command, player is in IDLE state so the media session ID is not valid yet"), f = !0) : (_.C(K, "Invalid media session ID, it is undefined"), f = !0));
                f ? (this.za(a, e, "INVALID_REQUEST", "INVALID_MEDIA_SESSION_ID"), d = !1) : (gc(K, gq, "MediaManager message received"), d = !0)
            } else _.C(K, "Ignoring request, requestId is not an integer: " + e), d = !1;
            if (d) {
                d = b.requestId;
                e = null;
                switch (c) {
                    case "LOAD":
                        this.U = !1;
                        e = rg(this, a, b, !0);
                        break;
                    case "GET_STATUS":
                        _.F(K, "Dispatching MediaManager getStatus event");
                        b = new sg("getstatus",
                            b, a);
                        this.je && this.je(b);
                        tg(this, b);
                        e = null;
                        break;
                    case "PLAY":
                        _.F(K, "Dispatching MediaManager play event");
                        b = new sg("play", b, a);
                        this.Za && this.Za(b);
                        tg(this, b);
                        e = null;
                        break;
                    case "PLAY_AGAIN":
                        _.F(K, "Dispatching MediaManager play again event");
                        b = new sg("playagain", b, a);
                        this.Rh && this.Rh(b);
                        tg(this, b);
                        e = null;
                        break;
                    case "SEEK":
                        _.r(b.currentTime) || _.r(b.relativeTime) ? (_.F(K, "Dispatching MediaManager seek event"), b = new sg("seek", b, a), this.$a && this.$a(b), tg(this, b), e = null) : (_.C(K, "currentTime or relativeTime is required"),
                            e = {
                                type: "INVALID_REQUEST",
                                reason: "INVALID_PARAMS"
                            });
                        break;
                    case "SET_PLAYBACK_RATE":
                        (e = b.playbackRate) || (e = b.relativePlaybackRate * this.I);
                        !_.u(e) || .5 > e || 2 < e ? (_.C(K, "Bad value for playback rate " + e), e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        }) : (_.F(K, "Dispatching MediaManager playback rate event"), b = new sg("setplaybackrate", b, a), this.re && this.re(b), tg(this, b), e = null);
                        break;
                    case "STOP":
                        _.F(K, "Dispatching MediaManager stop event");
                        b = new sg("stop", b, a);
                        this.Kb && this.Kb(b);
                        tg(this, b);
                        e = null;
                        break;
                    case "PAUSE":
                        _.F(K, "Dispatching MediaManager pause event");
                        b = new sg("pause", b, a);
                        this.Ya && this.Ya(b);
                        tg(this, b);
                        e = null;
                        break;
                    case "SKIP_AD":
                        _.F(K, "Dispatching MediaManager skip ad event");
                        e = new sg("skipad", b, a);
                        this.sd ? this.sd(e) : this.za(a, b.requestId, "INVALID_REQUEST", "NOT_SUPPORTED");
                        tg(this, e);
                        e = null;
                        break;
                    case "SET_VOLUME":
                        b.volume && (_.r(b.volume.level) || _.r(b.volume.muted)) ? void 0 != b.volume.level && 0 > b.volume.level || 1 < b.volume.level ? (_.C(K, "volume level is invalid"), e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        }) : (_.F(K, "Dispatching MediaManager setvolume event"), b = new sg("setvolume", b, a), this.se && this.se(b), tg(this, b), e = null) : (_.C(K, "volume is invalid"), e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        });
                        break;
                    case "EDIT_TRACKS_INFO":
                        _.F(K, "Dispatching MediaManager editTracksInfo event");
                        eg(this.g.media.tracks, b.activeTrackIds) ? (e = new sg("edittracksinfo", b, a), b.textTrackStyle && (this.g.media.textTrackStyle = b.textTrackStyle), b.activeTrackIds && (this.g.activeTrackIds = b.activeTrackIds),
                            this.ie && this.ie(e), tg(this, e), e = null) : (_.C(K, "Invalid track info"), e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        });
                        break;
                    case "EDIT_AUDIO_TRACKS":
                        _.F(K, "Dispatching MediaManager editAudioTracks event");
                        b = new sg("editaudiotracks", b, a);
                        this.he && this.he(b);
                        tg(this, b);
                        e = null;
                        break;
                    case "QUEUE_LOAD":
                        this.U = !0;
                        _.F(K, "Dispatching MediaManager queueLoad event");
                        Af(this.h, b) ? (b.items = Cg(b.items), b = new sg("queueload", b, a), this.oe && this.oe(b), tg(this, b), e = null) : e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        };
                        break;
                    case "QUEUE_INSERT":
                        this.U = !0;
                        _.F(K, "Dispatching MediaManager queueInsert event");
                        e = !1;
                        if (_.r(this.h.g))
                            if (b.items && 0 != b.items.length)
                                if (_.r(b.currentItemId) && _.r(b.currentItemIndex)) _.C(K, "Maximum one currentItem must be provided"), e = !0;
                                else if (_.r(b.currentItemIndex) && (!_.u(b.currentItemIndex) || 0 > b.currentItemIndex || b.currentItemIndex >= b.items.length)) _.C(K, "Invalid currentItemIndex"), e = !0;
                        else if (_.r(b.currentItemId) && (!_.u(b.currentItemId) || 0 > b.currentItemId)) _.C(K, "Invalid currentItemId"),
                            e = !0;
                        else
                            for (c = 0; c < b.items.length; c++)
                                if (_.u(b.items[c].itemId)) {
                                    _.C(K, "Item contains an itemId at index: " + c);
                                    e = !0;
                                    break
                                } else b.items[c].itemId = this.jh();
                        else _.C(K, "No items to insert"), e = !0;
                        else _.C(K, "Queue does not exist"), e = !0;
                        e ? e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        } : (b.items = Cg(b.items), b = new sg("queueinsert", b, a), this.ne && this.ne(b), tg(this, b), e = null);
                        break;
                    case "QUEUE_UPDATE":
                        e = Hg(this, a, b);
                        break;
                    case "QUEUE_REMOVE":
                        _.F(K, "Dispatching MediaManager queueRemove event");
                        e = !1;
                        _.r(this.h.g) ?
                            b.itemIds && 0 != b.itemIds.length ? Ag(b.itemIds) || (e = !0) : (_.C(K, "No itemIds to remove"), e = !0) : (_.C(K, "Queue does not exist"), e = !0);
                        e ? e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        } : (b.itemIds && (b.itemIds = If(this.h, b.itemIds)), b = new sg("queueremove", b, a), this.pe && this.pe(b), tg(this, b), e = null);
                        break;
                    case "QUEUE_REORDER":
                        _.F(K, "Dispatching MediaManager queueReorder event");
                        e = !1;
                        _.r(this.h.g) ? b.itemIds && 0 != b.itemIds.length ? Ag(b.itemIds) ? _.r(b.insertBefore) && _.Ia(b.itemIds, b.insertBefore) && (_.C(K, "insertBefore can not be one of the reordered items"),
                            e = !0) : e = !0 : (_.C(K, "No itemIds to reorder"), e = !0) : (_.C(K, "Queue does not exist"), e = !0);
                        e ? e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        } : (b.itemIds && (b.itemIds = If(this.h, b.itemIds)), b = new sg("queuereorder", b, a), this.qe && this.qe(b), tg(this, b), e = null);
                        break;
                    case "PRECACHE":
                        b = new sg("precache", b, "__broadcast__");
                        this.od && this.od(b);
                        tg(this, b);
                        break;
                    case "QUEUE_NEXT":
                        c = new Ng;
                        c.jump = 1;
                        c.requestId = b.requestId;
                        Hg(this, a, c);
                        break;
                    case "QUEUE_PREV":
                        c = new Ng;
                        c.jump = -1;
                        c.requestId = b.requestId;
                        Hg(this, a, c);
                        break;
                    case "QUEUE_GET_ITEM_RANGE":
                        b = new sg("getitemsrange", b, a);
                        this.Ah && this.Ah(b);
                        tg(this, b);
                        break;
                    case "QUEUE_GET_ITEMS":
                        b = new sg("getitemsinfo", b, a);
                        this.Bh && this.Bh(b);
                        tg(this, b);
                        break;
                    case "QUEUE_GET_ITEM_IDS":
                        b = new sg("getqueueids", b, a);
                        this.Ch && this.Ch(b);
                        tg(this, b);
                        break;
                    case "QUEUE_SHUFFLE":
                        b = new sg("shuffle", b, a);
                        this.Sh && this.Sh(b);
                        tg(this, b);
                        break;
                    case "USER_ACTION":
                        c = new sg("useraction", b, a);
                        this.La ? this.La(c) : this.za(a, b.requestId, "INVALID_REQUEST", "NOT_SUPPORTED");
                        tg(this, c);
                        break;
                    case "STORE_SESSION":
                        c = new sg("storesession", b, a);
                        this.td ? this.td(c) : this.za(a, b.requestId, "INVALID_REQUEST", "NOT_SUPPORTED");
                        tg(this, c);
                        break;
                    case "RESUME_SESSION":
                        c = new sg("resumesession", b, a);
                        this.rd ? this.rd(c) : this.za(a, b.requestId, "INVALID_REQUEST", "NOT_SUPPORTED");
                        tg(this, c);
                        break;
                    default:
                        _.C(K, "Unexpected message type: " + c), e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_COMMAND"
                        }
                }
                gg(this, e, a, d)
            }
        } else _.E(K, "Load is in progress, media command is being queued."), this.ha.h.push(a)
    };
    _.h.Fk = function() {
        this.V = bd(this.va, 1E3);
        var a = hg(this);
        if ("IDLE" != a && "PAUSED" != a) {
            this.N && "PLAYING" == a && (_.E(K, "Triggering load complete, since media is playing."), wg(this));
            var b = this.G;
            this.G = this.l.getCurrentTimeSec();
            var c = this.C;
            this.C = this.ug ? "BUFFERING" === this.l.getState() : 100 > 1E3 * Math.abs(this.G - b);
            c != this.C ? (gc(K, gq, "Buffering state changed, isPlayerBuffering: " + this.C + " old time: " + b + " current time: " + this.G), this.$(!1)) : this.lb !== a ? (gc(K, gq, "Player state changed, playerState: " + a + " old state: " +
                this.lb + " current time: " + this.G), this.$(!1)) : this.C || this.bb || (a = 1E3 * (this.G - this.Zd) - this.I * (Date.now() - this.$h), 1E3 < Math.abs(a) ? (gc(K, gq, "Time drifted: " + a), this.$(!1)) : this.g && _.r(this.h.g) && (a = this.h, (a = 0 > a.h ? null : "REPEAT_SINGLE" == a.o ? a.g[a.h] : a.h + 1 >= a.g.length && ("REPEAT_ALL_AND_SHUFFLE" == a.o || "REPEAT_OFF" == a.o) ? null : a.g[(a.h + 1) % a.g.length]) && _.u(a.preloadTime) && this.g.media && !this.o && "LIVE" != this.g.media.streamType && Gg(this, a.preloadTime) && this.L != a.itemId && (this.pd ? (b = new Jg(a.itemId), b.requestId =
                0, b.mediaSessionId = this.D, b.autoplay = a.autoplay, b.currentTime = a.startTime, b.customData = a.customData || void 0, b.activeTrackIds = a.activeTrackIds, b.media = a.media, b = new sg("preload", b, ""), this.L = a.itemId, _.F(K, "Sending preload event: " + JSON.stringify(b)), this.pd(b) && this.$(!1)) : _.F(K, "Not sending preload event"))))
        }
    };
    _.h.$ = function(a, b, c, d) {
        var e = this;
        if (this.l) {
            gc(K, gq, "Sending broadcast status message");
            var f = function(a) {
                null != a && (a.status && (e.ca && e.ca(a.status[0] || null), _.wa(a.status[0]) && (e.lb = a.status[0].playerState)), a.requestId = b || 0, e.w.send("*:*", a), lg(e), mg(e, a))
            };
            a = jg(this, a, c, d);
            Xf(a) ? a.then(f) : f(a)
        } else _.C(K, "Not sending broadcast status message, state is invalid")
    };
    _.h.lg = function(a) {
        gc(K, gq, "Setting IDLE reason: " + a);
        this.B = a
    };
    _.h.za = function(a, b, c, d, e) {
        _.F(K, "Sending error message to " + a);
        var f = {};
        f.requestId = b;
        f.type = c;
        d && (f.reason = d);
        e && (f.customData = e);
        this.Ue && this.Ue(f);
        this.w.send(a, f)
    };
    _.h.ze = function(a, b, c, d, e) {
        var f = this;
        if (this.l) {
            gc(K, gq, "Sending status message to " + a);
            var g = function(c) {
                null != c && (f.ca && c.status && f.ca(c.status[0] || null), c.requestId = b, f.w.send(a, c), lg(f))
            };
            c = jg(this, c, d, e);
            Xf(c) ? c.then(g) : g(c)
        } else _.C(K, "State is invalid"), this.za(a, b, "INVALID_PLAYER_STATE", null, d)
    };
    _.h.Nk = function(a) {
        return a
    };
    _.h.load = function(a) {
        a.type = "LOAD";
        fg(this, this.T, a)
    };
    _.h.Yk = function(a) {
        a = a.data;
        if (a.media && (a.media.contentUrl || a.media.contentId)) {
            var b = _.r(a.autoplay) ? a.autoplay : !0,
                c = a.media.contentUrl || a.media.contentId;
            a.media.tracks ? this.l.load(c, b, a.currentTime, {
                tracks: a.media.tracks,
                activeTrackIds: a.activeTrackIds,
                textTrackStyle: a.media.textTrackStyle
            }, void 0, a.playbackRate) : this.l.load(c, b, a.currentTime, void 0, void 0, a.playbackRate)
        }
    };
    _.h.ib = function(a) {
        if (a != this.l) {
            this.l && (this.l.unregisterErrorCallback(), this.l.unregisterEndedCallback(), this.l.unregisterLoadCallback());
            (this.ga = a.getState ? !1 : !0) ? this.l = new mf(a): this.l = a;
            this.l.registerErrorCallback(this.Hk.bind(this));
            this.l.registerEndedCallback(this.Gk.bind(this));
            this.l.registerLoadCallback(this.Ik.bind(this));
            var b = this.aa;
            b.g && b.g.removeEventListener("resize", b.o);
            var c = null;
            a.tagName && "video" == a.tagName.toLowerCase() ? c = a : (a = window.document.getElementsByTagName("video"),
                1 == a.length && (c = a[0]));
            b.g = c;
            b.g && b.g.addEventListener("resize", b.o)
        }
    };
    _.h.mg = function(a) {
        this.h.mg(a)
    };
    _.h.Ik = function() {
        if (this.o) {
            _.F(K, "Metadata loaded");
            if (this.g && this.g.media) {
                var a = this.l.getDurationSec(); - 1 != a && window.Infinity != a || this.g.media.streamType && "NONE" != this.g.media.streamType ? -1 == a || window.Infinity == a || this.g.media.streamType && "NONE" != this.g.media.streamType || (_.E(K, "Media streamType is initially set wrong, changed to buffered."), this.g.media.streamType = "BUFFERED") : (_.E(K, "Media streamType is initially set wrong, changed to live."), this.g.media.streamType = "LIVE");
                this.g.media.duration =
                    a;
                this.h.Eb().media.duration = a
            }
            this.C = !0;
            this.Uf ? this.Uf(this.o) : ng(this)
        }
    };
    _.h.Zk = function(a) {
        this.ga && a.message && void 0 != a.message.currentTime && a.message.currentTime != this.l.getCurrentTimeSec() && this.l.seek(a.message.currentTime);
        wg(this)
    };
    _.h.Hk = function(a) {
        this.o ? (_.C(K, "Load metadata error: " + a), this.Gh ? this.Gh(this.o) : ng(this)) : this.Pd && this.Pd(a)
    };
    _.h.Sk = function() {
        xg(this)
    };
    _.h.Xk = function() {
        this.o && "" == this.o.senderId && this.o.message && 0 == this.o.message.requestId ? xg(this, !0) : xg(this, !1)
    };
    _.h.Gk = function() {
        this.Rb && this.Rb()
    };
    _.h.Rk = function(a) {
        if (_.r(this.h.g)) {
            var b = -1 != this.oa ? this.oa : void 0;
            this.oa = -1;
            yg(this, "REPEAT_SINGLE" == this.h.o ? 0 : 1, !1, b, void 0, void 0, void 0, void 0 === a ? "FINISHED" : a)
        }
    };
    _.h.cl = function(a, b) {
        pg(this, a, !0, b)
    };
    _.h.vm = function(a, b, c, d, e, f, g) {
        g = g || "INTERRUPTED";
        if (_.r(this.h.g) && "QUEUE_ENDED" != Qf(this.h, a, !1)) {
            var k = Qf(this.h, a, !0);
            _.F(K, "After " + a + " jump, transition is: " + k);
            (a = Eg(this, this.h.Eb(), void 0, f)) ? (this.g && (this.B = g, this.F = this.g, this.g = null, this.M = [], "QUEUE_SHUFFLED" == k && (e = !0), "INTERRUPTED" == this.B && this.ae()), rg(this, "", a, !1, this.$.bind(this, b, c, d, e))) : this.ja && this.ja(g, c)
        } else this.ja && this.ja(g, c)
    };
    _.h.Wk = function(a) {
        gc(K, gq, "onGetStatus");
        var b = a.data;
        gc(K, gq, "onGetStatus: " + JSON.stringify(b));
        var c = !0,
            d = !0;
        b.options && (b.options & 1 && (c = !1), b.options & 1 && (d = !1));
        this.ze(a.senderId, a.data.requestId, c, null, d)
    };
    _.h.bl = function(a) {
        gc(K, gq, "onPlay");
        this.l.play();
        this.$(!1, a.data.requestId)
    };
    _.h.al = function(a) {
        gc(K, gq, "onPlayAgain");
        this.g ? (this.l.seek(0), this.l.play(), this.$(!1, a.data.requestId)) : this.J && (this.J.type = "LOAD", this.J.autoplay = !0, fg(this, this.T, this.J))
    };
    _.h.hl = function(a) {
        a = a.data;
        gc(K, gq, "onSeek: " + JSON.stringify(a));
        var b = _.r(a.relativeTime) ? this.l.getCurrentTimeSec() + a.relativeTime : a.currentTime;
        this.l.seek(b, a.resumeState);
        "PAUSED" != this.l.getState() && (this.C = !0);
        this.l.getCurrentTimeSec() < this.l.getDurationSec() ? this.$(!1, a.requestId) : this.oa = a.requestId
    };
    _.h.il = function(a) {
        a = a.data;
        gc(K, gq, "onSetPlaybackRate: " + JSON.stringify(a));
        this.l.Qb ? this.I = this.l.Qb(Number(a.playbackRate ? a.playbackRate : this.I * a.relativePlaybackRate)) : _.E(K, "setPlaybackRate is not supported");
        this.$(!1, a.requestId)
    };
    _.h.getPlaybackRate = function() {
        return this.I
    };
    _.h.ll = function(a) {
        pg(this, "CANCELLED", !0, a.data.requestId)
    };
    _.h.$k = function(a) {
        this.l.pause();
        this.$(!1, a.data.requestId)
    };
    _.h.jl = function(a) {
        a = a.data;
        this.l.setVolume(a.volume);
        this.$(!1, a.requestId)
    };
    _.h.Qk = function(a) {
        var b = a.data,
            c;
        a: {
            var d = this.g.media.tracks;
            if (c = b.language) {
                if (d) {
                    d = _.n(d);
                    for (var e = d.next(); !e.done; e = d.next())
                        if (e = e.value, "TEXT" == e.type && _.r(e.language) && window.cast.receiver.Bc(e.language, c)) {
                            c = !0;
                            break a
                        }
                }
                c = !1
            } else c = !0
        }
        if (c) {
            if (!b.activeTrackIds && !b.language && _.r(b.enableTextTracks))
                if (c = zg(this, b)) b.activeTrackIds = c;
                else {
                    this.za(a.senderId, b.requestId, "INVALID_REQUEST", "INVALID_PARAMS");
                    return
                }
            a = {
                activeTrackIds: b.activeTrackIds,
                language: b.language,
                textTrackStyle: b.textTrackStyle
            };
            this.l.editTracksInfo && (this.g.activeTrackIds = this.l.editTracksInfo(a) || void 0);
            this.$(b.textTrackStyle ? !0 : !1, b.requestId)
        } else _.C(K, "Invalid track language"), this.za(a.senderId, b.requestId, "INVALID_REQUEST", "LANGUAGE_NOT_SUPPORTED")
    };
    _.h.Pk = function(a) {
        var b = a.data,
            c;
        a: {
            var d = this.g.media.tracks;
            if (c = b.language) {
                if (d) {
                    d = _.n(d);
                    for (var e = d.next(); !e.done; e = d.next())
                        if (e = e.value, "AUDIO" == e.type && _.r(e.language) && window.cast.receiver.Bc(e.language, c)) {
                            c = !0;
                            break a
                        }
                }
                c = !1
            } else c = !0
        }
        c ? (this.l.Se && (this.g.activeTrackIds = this.l.Se(b)), this.$(!1, b.requestId)) : (_.C(K, "Invalid audio track language"), this.za(a.senderId, b.requestId, "INVALID_REQUEST", "LANGUAGE_NOT_SUPPORTED"))
    };
    _.h.el = function(a) {
        var b = a.data,
            c = Eg(this, b.items ? b.items[b.startIndex || 0] : null, b.requestId, b.currentTime),
            d = new rd;
        d.items = b.items;
        d.startIndex = b.startIndex || 0;
        d.startTime = b.currentTime;
        d.repeatMode = b.repeatMode || "REPEAT_OFF";
        c.queueData = d;
        c ? rg(this, a.senderId, c, !0) : _.C(K, "Queue Load request is invalid")
    };
    _.h.dl = function(a) {
        a = a.data;
        _.F(K, "Queue insert data: " + JSON.stringify(a));
        var b = !1;
        _.r(a.currentItemId) && (b = Mf(this.h, a.currentItemId));
        _.r(a.currentItemIndex) && (b = !0);
        var c = this.h.Ff(a.items, a.insertBefore, a.currentItemIndex);
        Ig(this, "INSERT", c, a.insertBefore);
        b ? yg(this, 0, !0, a.requestId, a.customData, !0, a.currentTime) : this.$(!0, a.requestId, a.customData, !0)
    };
    _.h.Tk = function(a) {
        var b = this,
            c = a.data;
        this.h.fetchItems(c.requestId, c.itemId, c.nextCount, c.prevCount).then(function(d) {
            ug(b, d, a.senderId, c)
        }, function() {
            gg(b, {
                type: "INVALID_REQUEST",
                reason: "INVALID_COMMAND"
            }, a.senderId, c.requestId)
        })
    };
    _.h.Uk = function(a) {
        var b = a.data;
        this.w.send(a.senderId, Df(this.h, b.requestId, b.itemIds))
    };
    _.h.Vk = function(a) {
        this.w.send(a.senderId, Ef(this.h, a.data.requestId))
    };
    _.h.kl = function(a) {
        var b = this,
            c = a.data;
        this.h.shuffle().then(function() {
            b.$(!1, c.requestId, c.customData, !0)
        })
    };
    _.h.eh = function(a) {
        var b = a.data;
        if (this.U) {
            _.F(K, "Queue update data: " + JSON.stringify(b));
            var c = a = !1;
            _.u(b.currentItemId) && (c = Mf(this.h, b.currentItemId));
            _.u(b.jump) && (c = !0, this.P && (a = !0));
            b.repeatMode && Hf(this.h, b.repeatMode);
            if (b.items && 0 < b.items.length) {
                this.h.wg(b.items);
                a = !0;
                var d = "ITEMS_CHANGE";
                var e = b.items.map(function(a) {
                    return a.itemId
                })
            }
            _.r(b.shuffle) && (b.shuffle ? this.h.shuffle() : this.h.Ge(), c = !0, d = "UPDATE", e = this.h.Vb().map(function(a) {
                return a.itemId
            }));
            d && e && Ig(this, d, e);
            c ? yg(this, b.jump ||
                0, a, b.requestId, b.customData, a, b.currentTime) : this.$(a, b.requestId, b.customData, a)
        } else d = a.senderId, d == window.cast.receiver.cc.zd && this.qd == this.eh ? this.za(d, b.requestId, "INVALID_REQUEST", "INVALID_COMMAND") : (_.F(K, "QUEUE_UPDATE request ignored"), this.$(!1, b.requestId))
    };
    _.h.fl = function(a) {
        a = a.data;
        _.F(K, "Queue remove data: " + JSON.stringify(a));
        var b = !1;
        _.u(a.currentItemId) && (b = Mf(this.h, a.currentItemId));
        a.itemIds && 0 != a.itemIds.length ? (b = b || this.h.dg(a.itemIds), Ig(this, "REMOVE", a.itemIds), b ? yg(this, 0, !1, a.requestId, a.customData, !0, a.currentTime) : this.$(!1, a.requestId, a.customData, !0)) : _.C(K, "No itemIds to remove")
    };
    _.h.gl = function(a) {
        a = a.data;
        _.F(K, "Queue reorder data: " + JSON.stringify(a));
        var b = !1,
            c = !1;
        _.u(a.currentItemId) && (c = Mf(this.h, a.currentItemId));
        a.itemIds && 0 < a.itemIds.length && (Of(this.h, a.itemIds, a.insertBefore), b = !0);
        var d = this.h.Vb().map(function(a) {
            return a.itemId
        });
        Ig(this, "UPDATE", d, a.insertBefore);
        c ? yg(this, 0, !1, a.requestId, a.customData, b, a.currentTime) : this.$(!1, a.requestId, a.customData, b)
    };
    _.h.addEventListener = function(a, b) {
        _.Ob(this.Ea, a, b)
    };
    _.h.removeEventListener = function(a, b) {
        Zb(this.Ea, a, b)
    };
    _.h.dispatchEvent = function(a) {
        return tg(this, a)
    };
    var K = _.B("cast.receiver.MediaManager");
    _.q(sg, _.Ab);
    _.q(Dg, Fg);
    _.q(Jg, Dg);
    _.q(Kg, Fg);
    _.q(Lg, Fg);
    _.q(Mg, Fg);
    _.q(Ng, Fg);
    _.q(Og, Fg);
    _.q(Pg, Fg);
    var qi = {
        QUEUE_NEXT: "queue-next",
        QUEUE_PREV: "queue-prev",
        SEEK_FORWARD_10: "seek-forward-10",
        SEEK_FORWARD_15: "seek-forward-15",
        SEEK_FORWARD_30: "seek-forward-30",
        SEEK_BACKWARD_10: "seek-backward-10",
        SEEK_BACKWARD_15: "seek-backward-15",
        SEEK_BACKWARD_30: "seek-backward-30",
        CAPTIONS: "captions",
        REPEAT: "repeat",
        SHUFFLE: "shuffle",
        LIKE: "like",
        DISLIKE: "dislike",
        NO_BUTTON: "no-button"
    };
    Ug.prototype.g = function(a) {
        if (!this.l) throw Error("Media channel is not set");
        if (!this.o) throw Error("Invalid Media Session Id");
        "SHUTDOWN" == a.type ? this.C.stop() : (a.mediaSessionId = this.o, Dd(this.l, window.cast.receiver.media.Qa, "__touch_controls__", this.l.G(a)))
    };
    Ug.prototype.F = function(a) {
        if (!this.h) throw Error("Command and control channel is not set");
        Dd(this.h, window.cast.receiver.Bb.Mb, "__touch_controls__", this.h.G(a))
    };
    var ri = {
        SLOT_1: "slot-1",
        SLOT_2: "slot-2",
        SLOT_3: "slot-3",
        SLOT_4: "slot-4"
    };
    var uq = {
            so: {
                1E3: {
                    other: "0K"
                },
                1E4: {
                    other: "00K"
                },
                1E5: {
                    other: "000K"
                },
                1E6: {
                    other: "0M"
                },
                1E7: {
                    other: "00M"
                },
                1E8: {
                    other: "000M"
                },
                1E9: {
                    other: "0B"
                },
                1E10: {
                    other: "00B"
                },
                1E11: {
                    other: "000B"
                },
                1E12: {
                    other: "0T"
                },
                1E13: {
                    other: "00T"
                },
                1E14: {
                    other: "000T"
                }
            },
            ro: {
                1E3: {
                    other: "0 thousand"
                },
                1E4: {
                    other: "00 thousand"
                },
                1E5: {
                    other: "000 thousand"
                },
                1E6: {
                    other: "0 million"
                },
                1E7: {
                    other: "00 million"
                },
                1E8: {
                    other: "000 million"
                },
                1E9: {
                    other: "0 billion"
                },
                1E10: {
                    other: "00 billion"
                },
                1E11: {
                    other: "000 billion"
                },
                1E12: {
                    other: "0 trillion"
                },
                1E13: {
                    other: "00 trillion"
                },
                1E14: {
                    other: "000 trillion"
                }
            }
        },
        dh = uq;
    dh = uq;
    var ah = {
        AED: [2, "dh", "\u062f.\u0625.", "DH"],
        ALL: [0, "Lek", "Lek"],
        AUD: [2, "$", "AU$"],
        BDT: [2, "\u09f3", "Tk"],
        BGN: [2, "lev", "lev"],
        BRL: [2, "R$", "R$"],
        CAD: [2, "$", "C$"],
        CDF: [2, "FrCD", "CDF"],
        CHF: [2, "CHF", "CHF"],
        CLP: [0, "$", "CL$"],
        CNY: [2, "\u00a5", "RMB\u00a5"],
        COP: [32, "$", "COL$"],
        CRC: [0, "\u20a1", "CR\u20a1"],
        CZK: [50, "K\u010d", "K\u010d"],
        DKK: [50, "kr.", "kr."],
        DOP: [2, "RD$", "RD$"],
        EGP: [2, "\u00a3", "LE"],
        ETB: [2, "Birr", "Birr"],
        EUR: [2, "\u20ac", "\u20ac"],
        GBP: [2, "\u00a3", "GB\u00a3"],
        HKD: [2, "$", "HK$"],
        HRK: [2, "kn", "kn"],
        HUF: [34,
            "Ft", "Ft"
        ],
        IDR: [0, "Rp", "Rp"],
        ILS: [34, "\u20aa", "IL\u20aa"],
        INR: [2, "\u20b9", "Rs"],
        IRR: [0, "Rial", "IRR"],
        ISK: [0, "kr", "kr"],
        JMD: [2, "$", "JA$"],
        JPY: [0, "\u00a5", "JP\u00a5"],
        KRW: [0, "\u20a9", "KR\u20a9"],
        LKR: [2, "Rs", "SLRs"],
        LTL: [2, "Lt", "Lt"],
        MNT: [0, "\u20ae", "MN\u20ae"],
        MVR: [2, "Rf", "MVR"],
        MXN: [2, "$", "Mex$"],
        MYR: [2, "RM", "RM"],
        NOK: [50, "kr", "NOkr"],
        PAB: [2, "B/.", "B/."],
        PEN: [2, "S/.", "S/."],
        PHP: [2, "\u20b1", "PHP"],
        PKR: [0, "Rs", "PKRs."],
        PLN: [50, "z\u0142", "z\u0142"],
        RON: [2, "RON", "RON"],
        RSD: [0, "din", "RSD"],
        RUB: [50, "\u20bd",
            "RUB"
        ],
        SAR: [2, "Rial", "Rial"],
        SEK: [50, "kr", "kr"],
        SGD: [2, "$", "S$"],
        THB: [2, "\u0e3f", "THB"],
        TRY: [2, "\u20ba", "TRY"],
        TWD: [2, "NT$", "NT$"],
        TZS: [0, "TSh", "TSh"],
        UAH: [2, "\u0433\u0440\u043d.", "UAH"],
        USD: [2, "$", "US$"],
        UYU: [2, "$", "$U"],
        VND: [48, "\u20ab", "VN\u20ab"],
        YER: [0, "Rial", "Rial"],
        ZAR: [2, "R", "ZAR"]
    };
    var vq = {
            Yi: ".",
            Fg: ",",
            Wj: "%",
            Ng: "0",
            Zj: "+",
            Hg: "-",
            dj: "E",
            Xj: "\u2030",
            mj: "\u221e",
            Uj: "NaN",
            Xi: "#,##0.###",
            Ro: "#E0",
            Qo: "#,##0%",
            to: "\u00a4#,##0.00",
            Dg: "USD"
        },
        Vg = vq;
    Vg = vq;
    var ph = {
        prefix: "",
        Jn: "",
        pl: 0
    };
    var oh = bh;
    oh = bh;
    var nh = ch;
    nh = ch;
    var eh = null,
        fh = null,
        gh = null,
        rh = /'([{}#].*?)'/g,
        qh = /''/g,
        th = /^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/,
        uh = /^\s*(\w+)\s*,\s*selectordinal\s*,/,
        vh = /^\s*(\w+)\s*,\s*select\s*,/;
    hh.prototype.l = function(a) {
        return "\ufddf_" + (a.length - 1).toString(10) + "_"
    };
    window.cast.receiver.R = {
        Jg: "LIVE",
        Gj: "Play",
        Fj: "Pause",
        Hj: "Next item",
        Ij: "Previous item",
        Pj: "Seek forward 10 seconds",
        Qj: "Seek forward 15 seconds",
        Rj: "Seek forward 30 seconds",
        Mj: "Seek backward 10 seconds",
        Nj: "Seek backward 15 seconds",
        Oj: "Seek backward 30 seconds",
        Sj: "Shuffle",
        Bj: "Captions",
        Dj: "Thumbs up",
        Cj: "Thumbs down",
        Kj: "Repeat. State: Off.",
        Jj: "Repeat. State: All.",
        Lj: "Repeat. State: One.",
        Lg: "Skip Ad",
        Ig: "Ad",
        zj: "Show controls.",
        xj: "Hide controls.",
        wj: "Controls are visible.",
        vj: "Controls are hidden.",
        yj: "{CURRENT_TIME} of {DURATION}",
        Kg: "Playing {APP_NAME}"
    };
    window.cast.receiver.R.Cb = function(a, b) {
        return lh(new hh(a), b)
    };
    window.cast.receiver.R.mf = function(a) {
        return window.cast.receiver.R.Cb("Your video will play in {FORMATTED_TIME}", {
            FORMATTED_TIME: a
        })
    };
    window.cast.receiver.R.lf = function(a) {
        return window.cast.receiver.R.Cb("Skip in {FORMATTED_TIME}", {
            FORMATTED_TIME: a
        })
    };
    window.cast.receiver.R.kh = function(a, b) {
        return b ? a ? window.cast.receiver.R.Cb("Season {SEASON}, Episode {EPISODE}", {
            SEASON: a,
            EPISODE: b
        }) : window.cast.receiver.R.Cb("Episode {EPISODE}", {
            EPISODE: b
        }) : window.cast.receiver.R.Cb("Season {SEASON}", {
            SEASON: a
        })
    };
    var wq = {},
        Ch = (wq.REPEAT_OFF = {
            state: "off",
            Me: window.cast.receiver.R.Kj
        }, wq.REPEAT_ALL = {
            state: "all",
            Me: window.cast.receiver.R.Jj
        }, wq.REPEAT_SINGLE = {
            state: "single",
            Me: window.cast.receiver.R.Lj
        }, wq);
    _.q(Bh, Be);
    _.q(Dh, Be);
    _.q(Eh, Be);
    var $h = {
        AUDIO: "audio",
        VIDEO: "video",
        PHOTO: "photo"
    };
    window.cast.receiver.O.ij = {
        Sa: function(a) {
            a.innerHTML = "@import url(//fonts.googleapis.com/css?family=Google+Sans:400,500);html{--cast-controls-horizontal-padding:56px;--cast-controls-safe-area-height:calc(100vh - 192px)}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){html{--cast-controls-horizontal-padding:112px;--cast-controls-safe-area-height:calc(100vh - 240px)}}"
        }
    };
    window.cast.receiver.O.Li = {
        Sa: function(a) {
            a.innerHTML = ".audio-player-glanceable{width:100vw;height:100vh;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden}.bg-image,.scrim{position:absolute;width:100%;height:100%}.bg-image{background:#000 center / cover no-repeat;background-image:var(--album-art-image, url('//www.gstatic.com/cast/sdk/assets/touch_no_image_1024_600.jpg'));transform:scale(1.25);transform-origin:center;filter:blur(37px)}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.bg-image{filter:blur(50px);background-image:var(--album-art-image, url('//www.gstatic.com/cast/sdk/assets/touch_no_image_1280_800.jpg'))}}.scrim{background:rgba(0,0,0,0.7)}.playback-logo{background-image:var(--playback-logo-image);background-position-x:left;background-repeat:no-repeat;background-size:contain;color:#fff;font-family:'Roboto',Arial,sans-serif;font-weight:500;order:-2;overflow:hidden;font-size:36px;height:40px;line-height:40px}.playback-logo.app-icon{height:68px}.overlay{top:0;left:0;position:absolute;box-sizing:border-box;width:100%;padding:0 var(--cast-controls-horizontal-padding);display:flex;flex-direction:column;justify-content:center;height:calc(var(--cast-controls-safe-area-height) + 30px);padding-top:2px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.overlay{height:calc(var(--cast-controls-safe-area-height) + 48px);padding-top:38px}}.content{display:flex;justify-content:space-between;flex-direction:row;height:352px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.content{height:420px}}.metadataPlaceHolder{display:flex;flex-direction:column;justify-content:center;margin-top:0;height:100%;flex:none;margin-right:5%;width:55%}.album-art{object-fit:contain;margin:0 0 auto auto;zoom:5;border-radius:calc(3px);max-width:40%;max-height:100%}.album{font-weight:500;margin-top:auto;text-transform:uppercase;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#dfe1e5;font-size:24px;letter-spacing:1.2px;line-height:24px}.title{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:#fff;font-weight:normal;margin-top:18px;font-size:56px;line-height:76px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.title{margin-top:32px;font-size:68px;line-height:80px}}.artist{margin-bottom:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:normal;color:#dfe1e5;font-size:28px;letter-spacing:1.4;line-height:30px;margin-top:14px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.artist{font-size:32px;letter-spacing:1.6;line-height:40px;margin-top:24px}}"
        }
    };
    window.cast.receiver.O.Mi = {
        Sa: function(a) {
            a.innerHTML = '<div class=audio-player-glanceable><div class=bg-image id=bg-image></div><div class=scrim></div><div class=overlay><div class=content><div class=metadataPlaceHolder><div class=playback-logo id=logo></div><div class=album id=album></div><div class=title id=title></div><div class=artist id=artist></div></div><img alt="" class=album-art id=album-art></div></div></div>'
        }
    };
    _.q(Gh, window.HTMLDivElement);
    Gh.prototype.createdCallback = function() {
        var a = this.createShadowRoot();
        window.cast.receiver.O.Mi.Sa(a);
        var b = window.document.createElement("style");
        window.cast.receiver.O.Li.Sa(b);
        a.insertBefore(b, a.firstChild);
        this.l = a.getElementById("title");
        this.o = a.getElementById("album");
        this.w = a.getElementById("artist");
        this.h = a.getElementById("album-art");
        this.g = a.getElementById("logo")
    };
    window.cast.receiver.O.Ni = Gh;
    window.document.registerElement("audio-player-compatibility", {
        prototype: window.cast.receiver.O.Ni.prototype
    });
    Kh.prototype.Fc = function(a) {
        this.F = a;
        this.h && Lh(this)
    };
    Kh.prototype.setDuration = function(a) {
        this.C = a;
        this.h && Lh(this)
    };
    Kh.prototype.ng = function(a) {
        this.o = a
    };
    window.cast.receiver.O.gk = {
        Sa: function(a) {
            a.innerHTML = '.break-countdown{position:absolute;bottom:65px;left:56px;z-index:-1;font-size:24px;text-shadow:0 2px 4px rgba(0,0,0,0.5);color:rgba(255,255,255,0.7)}.break-countdown .ad-label{color:#fff}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.break-countdown{bottom:82px;left:112px}}.break-skip{position:absolute;bottom:38px;right:24px;font-size:40px;font-weight:500;padding:0 40px;height:80px;display:flex;align-items:center;justify-content:center;flex-direction:row;border-radius:40px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.break-skip{bottom:54px;right:74px}}.break-skip .break-skip-scrim{border:2px solid rgba(255,255,255,0.2);position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);border-radius:40px}.break-skip .break-skip-highlight{position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background-color:transparent;border-radius:40px}.break-skip:active .break-skip-scrim{background-color:rgba(0,0,0,0.3)}.break-skip .skip-ad-text{-webkit-font-smoothing:antialiased;font-weight:500}.break-skip .skip-ad-icon{margin-left:20px;margin-right:-8px;width:40px;height:40px}.break-skip-btn-countdown{min-width:220px}.loading-bar{--loading-bar-width:1000px;height:100%;overflow:hidden;position:relative;transform:translateZ(0);transition:opacity 250ms linear;width:1000px}.loading-bar .rect,.loading-bar .rect-inner{height:100%;position:absolute;width:1000px}.loading-bar .rect{transform-origin:top left}.loading-bar .rect-primary{transform:scaleX(0)}.loading-bar .rect-inner{background-color:#9aa0a6;display:inline-block}.loading-bar .rect-primary{animation:primary-indeterminate-translate 2s infinite linear}.loading-bar .rect-primary>.rect-inner{animation:primary-indeterminate-scale 2s infinite linear}.loading-bar .rect-auxiliary{animation:auxiliary-indeterminate-translate 2s infinite linear}.loading-bar .rect-auxiliary>.rect-inner{animation:auxiliary-indeterminate-scale 2s infinite linear}@keyframes primary-indeterminate-translate{0%{transform:translateX(-1451.66611px)}20%{animation-timing-function:cubic-bezier(.5, 0, .701732, .495819);transform:translateX(-1451.66611px)}59.15%{animation-timing-function:cubic-bezier(.302435, .381352, .55, .956352);transform:translateX(-614.95191px)}100%{transform:translateX(554.44446px)}}@keyframes primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.334731, .12482, .785844, 1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06, .11, .6, 1);transform:scaleX(.661479)}100%{transform:scaleX(.08)}}@keyframes auxiliary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15, 0, .515058, .409685);transform:translateX(-548.88891px)}25%{animation-timing-function:cubic-bezier(.31033, .284058, .8, .733712);transform:translateX(-172.36978px)}48.35%{animation-timing-function:cubic-bezier(.4, .627035, .6, .902026);transform:translateX(294.97274px)}100%{transform:translateX(1053.88891px)}}@keyframes auxiliary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.205028, .057051, .57661, .453971);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.152313, .196432, .648374, 1.004315);transform:scaleX(.457104)}44.15%{animation-timing-function:cubic-bezier(.257759, .003163, .211762, 1.38179);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}:host{bottom:0;color:#fff;font-family:\'Google Sans\',\'Roboto\',Arial,sans-serif;left:0;position:fixed;right:0;top:0;z-index:1000000}.controls-layer{display:flex;position:relative;flex-direction:column;justify-content:flex-start;height:100%}.controls-toggle{position:absolute;width:100%;height:100%;top:0;left:0}.accessibility-alert{opacity:0;position:absolute;left:-9999px}.controls{box-sizing:border-box;flex:none;display:flex;flex-direction:column;justify-content:flex-end;height:192px;padding:0 56px 14px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.controls{height:240px;padding:0 112px 30px}}audio-player-compatibility{position:absolute;display:none}.scrim,.buffering-scrim{bottom:0;height:100vh;left:0;position:absolute;width:100vw;z-index:-1}.buffering-scrim{background-color:rgba(0,0,0,0.6);visibility:hidden}.video-metadata{display:none}.hidden{display:none !important}.invisible{visibility:hidden}.touch-layer{height:100%;touch-action:manipulation;user-select:none;width:100%}.touch-layer.video:not(.remote-controls) .scrim{background:linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5) 42.5%, rgba(0,0,0,0.92))}.touch-layer.video:not(.remote-controls).compatibility-mode-scrim .scrim{background:linear-gradient(to bottom, rgba(0,0,0,0.78), #000)}.touch-layer.video:not(.remote-controls) .video-metadata{align-items:flex-start;box-sizing:border-box;display:flex;flex-direction:column;flex-grow:1;text-align:left;padding:44px 56px 0}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.touch-layer.video:not(.remote-controls) .video-metadata{padding:112px 112px 0}}.touch-layer.video:not(.remote-controls) .logo{background-image:var(--playback-logo-image);background-position-x:left;background-repeat:no-repeat;background-size:contain;color:rgba(255,255,255,0.7);font-family:\'Roboto\',Arial,sans-serif;font-size:36px;font-weight:500;height:40px;line-height:40px;width:100%}.touch-layer.video:not(.remote-controls) .logo.app-icon{height:68px}.touch-layer.video:not(.remote-controls) .title{-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-box-pack:end;display:-webkit-box;font-weight:normal;overflow:hidden;width:auto;margin-top:0;margin-bottom:0;font-size:56px;line-height:76px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.touch-layer.video:not(.remote-controls) .title{margin-bottom:4px;font-size:68px;line-height:80px}}.touch-layer.video:not(.remote-controls).active .title,.touch-layer.video:not(.remote-controls).buffering .title{width:100%}.touch-layer.video:not(.remote-controls) .subtitle{font-weight:normal;margin:0;opacity:.7;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;letter-spacing:1.6;line-height:30px;font-size:28px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.touch-layer.video:not(.remote-controls) .subtitle{letter-spacing:1.4;line-height:40px;font-size:32px}}.touch-layer.video:not(.remote-controls) .subtitle-container{margin-top:auto;margin-bottom:16px;max-width:100%}.touch-layer.video:not(.remote-controls) .scrim{will-change:opacity;opacity:0;transition:visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls) .break-countdown,.touch-layer.video:not(.remote-controls) .break-skip .break-skip-scrim{opacity:1;transition:opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls) .logo{will-change:opacity,transform;opacity:0;transform:translateY(32px);transition:transform 350ms cubic-bezier(.2, 0, 0, 1),visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls) .subtitle-container,.touch-layer.video:not(.remote-controls) .title{will-change:opacity,transform;opacity:0;transform:translateY(44px);transition:transform 350ms cubic-bezier(.2, 0, 0, 1),visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls) .controls{will-change:transform;transform:translateY(56px);transition:transform 350ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.video:not(.remote-controls) .scrubber-layer,.touch-layer.video:not(.remote-controls) .time-numbers{will-change:opacity;opacity:0;transition:visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls) .slot{opacity:0;transition:visibility 0s 100ms,opacity 100ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls).active .break-skip[role="button"]:active .break-skip-highlight,.touch-layer.video:not(.remote-controls).buffering .break-skip[role="button"]:active .break-skip-highlight{background-color:rgba(255,255,255,0.1)}.touch-layer.video:not(.remote-controls).active .scrim{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls).active .break-countdown,.touch-layer.video:not(.remote-controls).active .break-skip .break-skip-scrim{opacity:0;transition:visibility 0s 200ms,opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls).active .logo,.touch-layer.video:not(.remote-controls).active .subtitle-container,.touch-layer.video:not(.remote-controls).active .title{opacity:1;transform:translateY(0);transition:transform 400ms cubic-bezier(.2, 0, 0, 1),opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls).active .controls{transform:translateY(0);transition:transform 400ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.video:not(.remote-controls).active .scrubber-layer,.touch-layer.video:not(.remote-controls).active .time-numbers,.touch-layer.video:not(.remote-controls).active .slot{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls).active .slot-2,.touch-layer.video:not(.remote-controls).active .slot-3{transition-delay:50ms}.touch-layer.video:not(.remote-controls).active .slot-1,.touch-layer.video:not(.remote-controls).active .slot-4,.touch-layer.video:not(.remote-controls).active .audio-group-slot{transition-delay:100ms}.touch-layer.video:not(.remote-controls).buffering .buffering-scrim{visibility:visible}.touch-layer.video:not(.remote-controls).buffering .scrim,.touch-layer.video:not(.remote-controls).buffering .logo,.touch-layer.video:not(.remote-controls).buffering .subtitle-container,.touch-layer.video:not(.remote-controls).buffering .title,.touch-layer.video:not(.remote-controls).buffering .controls,.touch-layer.video:not(.remote-controls).buffering .scrubber-layer,.touch-layer.video:not(.remote-controls).buffering .time-numbers,.touch-layer.video:not(.remote-controls).buffering .slot{opacity:1;visibility:visible;transition:none;transform:none}.touch-layer.audio audio-player-compatibility,.touch-layer.remote-controls audio-player-compatibility{display:block}.touch-layer.audio .controls,.touch-layer.remote-controls .controls{margin-top:auto}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.touch-layer.audio .btn-play-pause .btn-icon,.touch-layer.remote-controls .btn-play-pause .btn-icon,.touch-layer.audio .btn-stop .btn-icon,.touch-layer.remote-controls .btn-stop .btn-icon{width:124px;height:124px}}.touch-layer.audio .scrim,.touch-layer.remote-controls .scrim{background:linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.92));height:192px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.touch-layer.audio .scrim,.touch-layer.remote-controls .scrim{height:240px}}.touch-layer.audio .time-numbers,.touch-layer.remote-controls .time-numbers,.touch-layer.audio .slot,.touch-layer.remote-controls .slot{will-change:opacity;opacity:0;transition:visibility 0s 100ms,opacity 100ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.audio .scrubber::-webkit-slider-thumb,.touch-layer.remote-controls .scrubber::-webkit-slider-thumb{will-change:transform;transform:scaleY(.2);transition:transform 350ms cubic-bezier(.2, 0, 0, 1),visibility 0s 350ms;visibility:hidden}.touch-layer.audio .controls,.touch-layer.remote-controls .controls{will-change:transform;transform:translateY(56px);transition:transform 350ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.audio.active .time-numbers,.touch-layer.remote-controls.active .time-numbers,.touch-layer.audio.active .slot,.touch-layer.remote-controls.active .slot{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.audio.active .slot-2,.touch-layer.remote-controls.active .slot-2,.touch-layer.audio.active .slot-3,.touch-layer.remote-controls.active .slot-3{transition-delay:50ms}.touch-layer.audio.active .slot-1,.touch-layer.remote-controls.active .slot-1,.touch-layer.audio.active .slot-4,.touch-layer.remote-controls.active .slot-4,.touch-layer.audio.active .audio-group-slot,.touch-layer.remote-controls.active .audio-group-slot{transition-delay:100ms}.touch-layer.audio.active .scrubber::-webkit-slider-thumb,.touch-layer.remote-controls.active .scrubber::-webkit-slider-thumb{transform:scaleY(1);transition:transform 400ms cubic-bezier(.2, 0, 0, 1);visibility:visible}.touch-layer.audio.active .controls,.touch-layer.remote-controls.active .controls{transform:translateY(0);transition:transform 400ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.audio.scrubbing .scrubber::-webkit-slider-thumb,.touch-layer.remote-controls.scrubbing .scrubber::-webkit-slider-thumb{transform:scaleY(1);transition:transform 400ms cubic-bezier(.2, 0, 0, 1);visibility:visible}.touch-layer.audio.scrubbing .time-numbers,.touch-layer.remote-controls.scrubbing .time-numbers{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.audio.scrubbing-ending .time-numbers,.touch-layer.remote-controls.scrubbing-ending .time-numbers{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.audio.hidden-audio-scrim .scrim,.touch-layer.remote-controls.hidden-audio-scrim .scrim,.touch-layer.audio.compatibility-mode-scrim .scrim,.touch-layer.remote-controls.compatibility-mode-scrim .scrim{display:none}.touch-layer.remote-controls .btn-stop{display:flex}.touch-layer.remote-controls .slot.center{margin-left:12px;margin-right:12px;width:218px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.touch-layer.remote-controls .slot.center{margin-left:24px;margin-right:24px;width:268px}}.touch-layer.photo audio-player-compatibility,.touch-layer.disabled audio-player-compatibility,.touch-layer.photo .scrim,.touch-layer.disabled .scrim,.touch-layer.photo .buffering-scrim,.touch-layer.disabled .buffering-scrim,.touch-layer.photo .video-metadata,.touch-layer.disabled .video-metadata,.touch-layer.photo .controls-layer,.touch-layer.disabled .controls-layer,.touch-layer.photo .break-countdown,.touch-layer.disabled .break-countdown,.touch-layer.photo .break-skip,.touch-layer.disabled .break-skip{display:none !important}.buttons{align-items:center;display:grid;grid-template-columns:[slot1-left] 96px 1fr [slot2-left] 96px [slot-center-left] auto [slot3-left] 96px 1fr [slot4-left] 96px;flex:none;margin-top:-8px;justify-content:center}.buttons.break .slot:not(.center) .btn{display:none}.btn[aria-disabled=true]{pointer-events:none}.btn[aria-disabled=true] .btn-icon{opacity:.5}.slot{height:96px;margin:0;width:96px}.slot.center{height:104px;width:104px;margin:12px 28px;grid-column:slot-center-left;display:flex;justify-content:space-between}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.slot.center{height:128px;width:128px;margin:0 28px}}.slot.slot-1{margin-left:-24px;grid-column:slot1-left}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.slot.slot-1{margin-left:-20px}}.slot.slot-4{justify-self:end;margin-right:-24px;grid-column:slot4-left}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.slot.slot-4{margin-right:-20px}}.slot.slot-2{grid-column:slot2-left}.slot.slot-3{grid-column:slot3-left}.audio-group-slot{display:none;align-items:center;font-size:24px;font-weight:400;width:auto}.active  .audio-group-slot,.buffering  .audio-group-slot{width:100%}.audio-group-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%20fill=%27%23fff%27%3E%0A%20%20%20%20%3Cpath%20d=%27M21%2C10.62l-7.94%2C7.94A1.5%2C1.5%2C0%2C0%2C1%2C12%2C19H7V29h5a1.5%2C1.5%2C0%2C0%2C1%2C1.06.44L21%2C37.38ZM7%2C32a3%2C3%2C0%2C0%2C1-3-3H4V19a3%2C3%2C0%2C0%2C1%2C3-3h4.38L21.44%2C5.94A1.5%2C1.5%2C0%2C0%2C1%2C24%2C7V41a1.5%2C1.5%2C0%2C0%2C1-2.56%2C1.06L11.38%2C32Z%27/%3E%0A%20%20%20%20%3Cpath%20d=%27M28.12%2C8.56a1.5%2C1.5%2C0%2C1%2C1%2C.77-2.9%2C19%2C19%2C0%2C0%2C1%2C0%2C36.69%2C1.5%2C1.5%2C0%2C1%2C1-.77-2.9h0a16%2C16%2C0%2C0%2C0%2C0-30.89Z%27/%3E%0A%20%20%20%20%3Cpath%20d=%27M29.29%2C32.47a1.5%2C1.5%2C0%2C0%2C1-1.61-2.53h0a7%2C7%2C0%2C0%2C0%2C0-11.85%2C1.5%2C1.5%2C0%2C0%2C1%2C1.58-2.55%2C10%2C10%2C0%2C0%2C1%2C0%2C17Z%27/%3E%0A%3C/svg%3E%0A");height:36px;margin-right:10px;width:36px;display:none}.audio-group-name{-webkit-line-clamp:3;-webkit-box-orient:vertical;-webkit-box-pack:end;display:-webkit-box;font-weight:normal;overflow:hidden;padding-right:20px}.btn{height:96px;width:96px;display:flex;justify-content:center;align-items:center;position:relative}.btn-icon{height:48px;width:48px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.btn-icon{height:56px;width:56px}}.btn-stop{display:none}.controls.audio-group .audio-group-slot{display:flex;grid-column:group-name-left / span 3}.controls.audio-group .slot-1{grid-row:1}.controls.audio-group .buttons{grid-template-columns:[group-name-left] 96px 96px 1fr [slot2-left] 96px [slot-center-left] auto [slot3-left] 96px 1fr [slot1-left] 96px [slot4-left] 96px}@media (orientation:landscape) and (max-width: 1199px),(orientation:portrait) and (max-height: 1199px){.controls.audio-group .slot-1,.controls.audio-group .slot-4{height:64px;width:64px}}@media (orientation:landscape) and (max-width: 1199px),(orientation:portrait) and (max-height: 1199px){.controls.audio-group .slot-1 .btn-icon,.controls.audio-group .slot-4 .btn-icon{height:32px;width:32px}}@media (orientation:landscape) and (max-width: 1199px),(orientation:portrait) and (max-height: 1199px){.controls.audio-group .slot-1 .btn,.controls.audio-group .slot-4 .btn{height:64px;width:64px}}.controls.audio-group .slot.slot-1{grid-column:slot1-left;margin-left:52px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.controls.audio-group .slot.slot-1{margin-left:0}}.controls.audio-group .slot.slot-4{margin-right:-16px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.controls.audio-group .slot.slot-4{margin-right:-20px}}.btn-play-pause,.btn-stop{height:104px;width:104px}.btn-play-pause .btn-icon,.btn-stop .btn-icon{height:88px;width:88px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.btn-play-pause,.btn-stop{height:128px;width:128px}.btn-play-pause .btn-icon,.btn-stop .btn-icon{height:112px;width:112px}}.btn-play-pause .pause-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%20d=%27M32%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20vector-effect=%27non-scaling-stroke%27%0A%20%20%20%20%20%20stroke-width=%274%27/%3E%0A%20%20%3Cpath%20d=%27M16%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20vector-effect=%27non-scaling-stroke%27%0A%20%20%20%20%20%20stroke-width=%274%27/%3E%0A%3C/svg%3E%0A")}.btn-play-pause .play-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpolygon%20points=%2738.5%2024%2015.5%2038.5%2015.5%209.5%2038.5%2024%27%20fill=%27none%27%0A%20%20%20%20%20%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%0A%20%20%20%20%20%20stroke-width=%274%27%20vector-effect=%27non-scaling-stroke%27/%3E%0A%3C/svg%3E%0A")}.btn-play-pause[data-state=\'playing\'] .play-icon{display:none}.btn-play-pause[data-state=\'paused\'] .pause-icon{display:none}.btn-stop .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Crect%20id=%27Rectangle%27%20stroke=%27%23FFFFFF%27%20fill=%27none%27%20stroke-width=%274%27%0A%20%20%20%20%20%20vector-effect=%27non-scaling-stroke%27%20fill-rule=%27nonzero%27%20x=%2711.5%27%20y=%2710.5%27%20width=%2726%27%0A%20%20%20%20%20%20height=%2726%27%20rx=%272%27%3E%3C/rect%3E%0A%3C/svg%3E%0A")}.btn-next .btn-icon,.skip-ad-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%20d=%27M37%2C9.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v29a1.5%2C1.5%2C0%2C0%2C1-3%2C0Z%27%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M11%2C12.22V35.78L29.69%2C24ZM33.3%2C25.27l-23%2C14.5A1.5%2C1.5%2C0%2C0%2C1%2C8%2C38.5V9.5a1.5%2C1.5%2C0%2C0%2C1%2C2.3-1.27l23%2C14.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C2.54Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-back .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%20d=%27M8%2C9.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v29a1.5%2C1.5%2C0%2C0%2C1-3%2C0Z%27%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M14.7%2C25.27a1.5%2C1.5%2C0%2C0%2C1%2C0-2.54l23-14.5A1.5%2C1.5%2C0%2C0%2C1%2C40%2C9.5v29a1.5%2C1.5%2C0%2C0%2C1-2.3%2C1.27ZM37%2C35.78V12.22L18.31%2C24Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-forward-10 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2024a1.5%201.5%200%200%201%203%200c0%2011.046-8.954%2020-20%2020S4%2035.046%204%2024%2012.954%204%2024%204h3.5a1.5%201.5%200%200%201%200%203H24C14.611%207%207%2014.611%207%2024s7.611%2017%2017%2017%2017-7.611%2017-17z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M24.44%202.56A1.5%201.5%200%200%201%2026.56.44l4%204a1.5%201.5%200%200%201%200%202.12l-4%204a1.5%201.5%200%200%201-2.12-2.12l2.939-2.94-2.94-2.94zM17.82%2030v-8.67l-2%20.82-.89-2.15%203.42-1.6h2V30zM27.65%2030.27A4.48%204.48%200%200%201%2024%2028.54a5.91%205.91%200%200%201-1-1.93%208.59%208.59%200%200%201%200-4.84%205.92%205.92%200%200%201%201-1.93%204.64%204.64%200%200%201%207.28%200%205.93%205.93%200%200%201%201%201.93%208.59%208.59%200%200%201%200%204.84%205.92%205.92%200%200%201-1%201.93%204.51%204.51%200%200%201-3.64%201.73h.01zm0-2.38a1.91%201.91%200%200%200%201-.28%202.44%202.44%200%200%200%20.76-.77%203.78%203.78%200%200%200%20.48-1.17%206.83%206.83%200%200%200%200-3%203.78%203.78%200%200%200-.48-1.17%202.44%202.44%200%200%200-.76-.77%202%202%200%200%200-2.06%200%202.44%202.44%200%200%200-.76.77%203.78%203.78%200%200%200-.48%201.17%206.87%206.87%200%200%200%200%203c.093.414.255.81.48%201.17.193.31.452.573.76.77a1.91%201.91%200%200%200%201.06.28z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-forward-15 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2024a1.5%201.5%200%200%201%203%200c0%2011.046-8.954%2020-20%2020S4%2035.046%204%2024%2012.954%204%2024%204h3.5a1.5%201.5%200%200%201%200%203H24C14.611%207%207%2014.611%207%2024s7.611%2017%2017%2017%2017-7.611%2017-17z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M24.44%202.56A1.5%201.5%200%200%201%2026.56.44l4%204a1.5%201.5%200%200%201%200%202.12l-4%204a1.5%201.5%200%200%201-2.12-2.12l2.939-2.94-2.94-2.94zM18.51%2030v-8.67l-2%20.82-.89-2.15L19%2018.37h2V30zM27.69%2030.27a5.17%205.17%200%200%201-1.38-.19%204%204%200%200%201-2.25-1.58%203.9%203.9%200%200%201-.61-1.39l2.33-.9c.083.474.31.91.65%201.25a1.75%201.75%200%200%200%201.26.45%201.57%201.57%200%200%200%201.16-.48%201.74%201.74%200%200%200%200-2.38%201.59%201.59%200%200%200-1.18-.48%201.81%201.81%200%200%200-.85.19%202.12%202.12%200%200%200-.61.48l-2.45-1.12.63-5.76h6.78v2.18h-4.65L26.08%2023l.17.05a3.94%203.94%200%200%201%20.81-.48%202.84%202.84%200%200%201%201.18-.22%203.44%203.44%200%200%201%201.37.28c.435.184.83.453%201.16.79.347.358.622.779.81%201.24a4.19%204.19%200%200%201%20.31%201.63%204.25%204.25%200%200%201-.31%201.64%203.6%203.6%200%200%201-.87%201.27%203.94%203.94%200%200%201-1.33.82%204.72%204.72%200%200%201-1.69.25z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-forward-30 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2024a1.5%201.5%200%200%201%203%200c0%2011.046-8.954%2020-20%2020S4%2035.046%204%2024%2012.954%204%2024%204h3.5a1.5%201.5%200%200%201%200%203H24C14.611%207%207%2014.611%207%2024s7.611%2017%2017%2017%2017-7.611%2017-17z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M24.44%202.56A1.5%201.5%200%200%201%2026.56.44l4%204a1.5%201.5%200%200%201%200%202.12l-4%204a1.5%201.5%200%200%201-2.12-2.12l2.939-2.94-2.94-2.94zM18.31%2030.27a4.67%204.67%200%200%201-2.76-.8A4.15%204.15%200%200%201%2014%2027.14l2.43-1c.1.96.936%201.673%201.9%201.62a1.7%201.7%200%200%200%201.07-.36%201.15%201.15%200%200%200%20.46-1c0-.92-.667-1.38-2-1.38h-1v-2.23h.94c.199%200%20.397-.024.59-.07.184-.04.36-.112.52-.21a1.07%201.07%200%200%200%20.37-.38%201.19%201.19%200%200%200%20.14-.59c0-.294-.12-.575-.33-.78a1.23%201.23%200%200%200-.93-.34%201.45%201.45%200%200%200-1%20.36%201.79%201.79%200%200%200-.52.85l-2.33-1a4.21%204.21%200%200%201%20.48-.92c.22-.315.49-.592.8-.82a4.17%204.17%200%200%201%201.14-.59%204.47%204.47%200%200%201%201.49-.23%204.9%204.9%200%200%201%201.57.24A3.74%203.74%200%200%201%2021%2019c.324.273.583.615.76%201%20.164.364.246.76.24%201.16a3.25%203.25%200%200%201-.46%201.7%202.54%202.54%200%200%201-.46.56%202.11%202.11%200%200%201-.51.35v.17a3%203%200%200%201%201.34%201%203%203%200%200%201%20.53%201.82%203.32%203.32%200%200%201-.29%201.39%203.21%203.21%200%200%201-.82%201.1A3.85%203.85%200%200%201%2020%2030a5.31%205.31%200%200%201-1.69.27zM29%2030.27a4.49%204.49%200%200%201-3.64-1.73%205.9%205.9%200%200%201-1-1.93%208.59%208.59%200%200%201%200-4.84%205.91%205.91%200%200%201%201-1.93%204.64%204.64%200%200%201%207.28%200%205.91%205.91%200%200%201%201%201.93%208.57%208.57%200%200%201%200%204.84%205.9%205.9%200%200%201-1%201.93A4.51%204.51%200%200%201%2029%2030.27zm0-2.38a1.91%201.91%200%200%200%201-.28%202.44%202.44%200%200%200%20.77-.77%203.8%203.8%200%200%200%20.47-1.17%206.83%206.83%200%200%200%200-3%203.81%203.81%200%200%200-.47-1.17%202.44%202.44%200%200%200-.77-.77%202%202%200%200%200-2.06%200%202.44%202.44%200%200%200-.77.77%203.81%203.81%200%200%200-.47%201.17%206.83%206.83%200%200%200%200%203c.09.413.25.809.47%201.17.195.311.459.575.77.77a1.9%201.9%200%200%200%201.06.28z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-backward-10 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M4%2024a1.5%201.5%200%200%201%203%200c0%209.389%207.611%2017%2017%2017s17-7.611%2017-17S33.389%207%2024%207h-3.5a1.5%201.5%200%200%201%200-3H24c11.046%200%2020%208.954%2020%2020s-8.954%2020-20%2020S4%2035.046%204%2024z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M20.621%205.5l2.94%202.94a1.5%201.5%200%200%201-2.122%202.12l-4-4a1.5%201.5%200%200%201%200-2.12l4-4a1.5%201.5%200%200%201%202.122%202.12L20.62%205.5zM17.82%2030v-8.67l-2%20.82-.89-2.15%203.42-1.6h2V30zm9.83.27A4.48%204.48%200%200%201%2024%2028.54a5.91%205.91%200%200%201-1-1.93%208.59%208.59%200%200%201%200-4.84%205.92%205.92%200%200%201%201-1.93%204.64%204.64%200%200%201%207.28%200%205.93%205.93%200%200%201%201%201.93%208.59%208.59%200%200%201%200%204.84%205.92%205.92%200%200%201-1%201.93%204.51%204.51%200%200%201-3.64%201.73h.01zm0-2.38a1.91%201.91%200%200%200%201-.28%202.44%202.44%200%200%200%20.76-.77%203.78%203.78%200%200%200%20.48-1.17%206.83%206.83%200%200%200%200-3%203.78%203.78%200%200%200-.48-1.17%202.44%202.44%200%200%200-.76-.77%202%202%200%200%200-2.06%200%202.44%202.44%200%200%200-.76.77%203.78%203.78%200%200%200-.48%201.17%206.87%206.87%200%200%200%200%203c.093.414.255.81.48%201.17.193.31.452.573.76.77a1.91%201.91%200%200%200%201.06.28z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-backward-15 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M4%2024a1.5%201.5%200%200%201%203%200c0%209.389%207.611%2017%2017%2017s17-7.611%2017-17S33.389%207%2024%207h-3.5a1.5%201.5%200%200%201%200-3H24c11.046%200%2020%208.954%2020%2020s-8.954%2020-20%2020S4%2035.046%204%2024z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M20.621%205.5l2.94%202.94a1.5%201.5%200%200%201-2.122%202.12l-4-4a1.5%201.5%200%200%201%200-2.12l4-4a1.5%201.5%200%200%201%202.122%202.12L20.62%205.5zM18.51%2030v-8.67l-2%20.82-.89-2.15L19%2018.37h2V30zM27.69%2030.27a5.17%205.17%200%200%201-1.38-.19%204%204%200%200%201-2.25-1.58%203.9%203.9%200%200%201-.61-1.39l2.33-.9c.083.474.31.91.65%201.25a1.75%201.75%200%200%200%201.26.45%201.57%201.57%200%200%200%201.16-.48%201.74%201.74%200%200%200%200-2.38%201.59%201.59%200%200%200-1.18-.48%201.81%201.81%200%200%200-.85.19%202.12%202.12%200%200%200-.61.48l-2.45-1.12.63-5.76h6.78v2.18h-4.65L26.08%2023l.17.05a3.94%203.94%200%200%201%20.81-.48%202.84%202.84%200%200%201%201.18-.22%203.44%203.44%200%200%201%201.37.28c.435.184.83.453%201.16.79.347.358.622.779.81%201.24a4.19%204.19%200%200%201%20.31%201.63%204.25%204.25%200%200%201-.31%201.64%203.6%203.6%200%200%201-.87%201.27%203.94%203.94%200%200%201-1.33.82%204.72%204.72%200%200%201-1.69.25z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-backward-30 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M4%2024a1.5%201.5%200%200%201%203%200c0%209.389%207.611%2017%2017%2017s17-7.611%2017-17S33.389%207%2024%207h-3.5a1.5%201.5%200%200%201%200-3H24c11.046%200%2020%208.954%2020%2020s-8.954%2020-20%2020S4%2035.046%204%2024z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M20.621%205.5l2.94%202.94a1.5%201.5%200%200%201-2.122%202.12l-4-4a1.5%201.5%200%200%201%200-2.12l4-4a1.5%201.5%200%200%201%202.122%202.12L20.62%205.5zM18.31%2030.27a4.67%204.67%200%200%201-2.76-.8A4.15%204.15%200%200%201%2014%2027.14l2.43-1c.1.96.936%201.673%201.9%201.62a1.7%201.7%200%200%200%201.07-.36%201.15%201.15%200%200%200%20.46-1c0-.92-.667-1.38-2-1.38h-1v-2.23h.94c.199%200%20.397-.024.59-.07.184-.04.36-.112.52-.21a1.07%201.07%200%200%200%20.37-.38%201.19%201.19%200%200%200%20.14-.59c0-.294-.12-.575-.33-.78a1.23%201.23%200%200%200-.93-.34%201.45%201.45%200%200%200-1%20.36%201.79%201.79%200%200%200-.52.85l-2.33-1a4.21%204.21%200%200%201%20.48-.92c.22-.315.49-.592.8-.82a4.17%204.17%200%200%201%201.14-.59%204.47%204.47%200%200%201%201.49-.23%204.9%204.9%200%200%201%201.57.24A3.74%203.74%200%200%201%2021%2019c.324.273.583.615.76%201%20.164.364.246.76.24%201.16a3.25%203.25%200%200%201-.46%201.7%202.54%202.54%200%200%201-.46.56%202.11%202.11%200%200%201-.51.35v.17a3%203%200%200%201%201.34%201%203%203%200%200%201%20.53%201.82%203.32%203.32%200%200%201-.29%201.39%203.21%203.21%200%200%201-.82%201.1A3.85%203.85%200%200%201%2020%2030a5.31%205.31%200%200%201-1.69.27zM29%2030.27a4.49%204.49%200%200%201-3.64-1.73%205.9%205.9%200%200%201-1-1.93%208.59%208.59%200%200%201%200-4.84%205.91%205.91%200%200%201%201-1.93%204.64%204.64%200%200%201%207.28%200%205.91%205.91%200%200%201%201%201.93%208.57%208.57%200%200%201%200%204.84%205.9%205.9%200%200%201-1%201.93A4.51%204.51%200%200%201%2029%2030.27zm0-2.38a1.91%201.91%200%200%200%201-.28%202.44%202.44%200%200%200%20.77-.77%203.8%203.8%200%200%200%20.47-1.17%206.83%206.83%200%200%200%200-3%203.81%203.81%200%200%200-.47-1.17%202.44%202.44%200%200%200-.77-.77%202%202%200%200%200-2.06%200%202.44%202.44%200%200%200-.77.77%203.81%203.81%200%200%200-.47%201.17%206.83%206.83%200%200%200%200%203c.09.413.25.809.47%201.17.195.311.459.575.77.77a1.9%201.9%200%200%200%201.06.28z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-repeat[data-state=\'off\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M39%2C32H33.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C44%2C30.5h0v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-5A20%2C20%2C0%2C0%2C1%2C5.27%2C31a1.5%2C1.5%2C0%2C1%2C1%2C2.8-1A17%2C17%2C0%2C0%2C0%2C39%2C32ZM9%2C16h5.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C3h-9A1.5%2C1.5%2C0%2C0%2C1%2C4%2C17.5v-9a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v5A20%2C20%2C0%2C0%2C1%2C42.73%2C17a1.5%2C1.5%2C0%2C0%2C1-2.8%2C1A17%2C17%2C0%2C0%2C0%2C9%2C16Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-repeat[data-state=\'all\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M39%2C32H33.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C44%2C30.5h0v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-5A20%2C20%2C0%2C0%2C1%2C5.27%2C31a1.5%2C1.5%2C0%2C1%2C1%2C2.8-1A17%2C17%2C0%2C0%2C0%2C39%2C32ZM9%2C16h5.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C3h-9A1.5%2C1.5%2C0%2C0%2C1%2C4%2C17.5v-9a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v5A20%2C20%2C0%2C0%2C1%2C42.73%2C17a1.5%2C1.5%2C0%2C0%2C1-2.8%2C1A17%2C17%2C0%2C0%2C0%2C9%2C16Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%3C/svg%3E%0A")}.btn-repeat[data-state=\'single\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M39%2C32H33.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C44%2C30.5h0v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-5A20%2C20%2C0%2C0%2C1%2C5.27%2C31a1.5%2C1.5%2C0%2C1%2C1%2C2.8-1A17%2C17%2C0%2C0%2C0%2C39%2C32ZM9%2C16h5.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C3h-9A1.5%2C1.5%2C0%2C0%2C1%2C4%2C17.5v-9a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v5A20%2C20%2C0%2C0%2C1%2C42.73%2C17a1.5%2C1.5%2C0%2C0%2C1-2.8%2C1A17%2C17%2C0%2C0%2C0%2C9%2C16Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%20%20%3Cpolygon%20fill=%27%234285F4%27%20fill-rule=%27nonzero%27%0A%20%20%20%20%20%20points=%2723.8%2029.92%2023.8%2021.25%2021.8%2022.07%2020.87%2019.89%2024.28%2018.29%2026.28%2018.29%2026.28%2029.92%27%3E%3C/polygon%3E%0A%3C/svg%3E%0A")}.btn-shuffle .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C11H29.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C40%2C9.5v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M8.44%2C10.56a1.5%2C1.5%2C0%2C0%2C1%2C2.12-2.12l27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12%2C2.12Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M35.44%2C10.44a1.5%2C1.5%2C0%2C0%2C1%2C2.12%2C2.12l-27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12-2.12Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C37V29.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v9A1.5%2C1.5%2C0%2C0%2C1%2C38.5%2C40h-9a1.5%2C1.5%2C0%2C0%2C1%2C0-3Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-shuffle[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C11H29.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C40%2C9.5v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M8.44%2C10.56a1.5%2C1.5%2C0%2C0%2C1%2C2.12-2.12l27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12%2C2.12Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M35.44%2C10.44a1.5%2C1.5%2C0%2C0%2C1%2C2.12%2C2.12l-27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12-2.12Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C37V29.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v9A1.5%2C1.5%2C0%2C0%2C1%2C38.5%2C40h-9a1.5%2C1.5%2C0%2C0%2C1%2C0-3Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%3C/svg%3E%0A")}.btn-captions .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20%20%20d=%27M7%2011v26h34V11H7zm-.75-3h35.5A2.25%202.25%200%200%201%2044%2010.25v27.5A2.25%202.25%200%200%201%2041.75%2040H6.25A2.25%202.25%200%200%201%204%2037.75v-27.5A2.25%202.25%200%200%201%206.25%208z%27%0A%20%20%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20%20%20d=%27M23.38%2028a6%206%200%200%201-4.88%202.24A6.35%206.35%200%200%201%2016%2018a6.47%206.47%200%200%201%202.53-.49%206.1%206.1%200%200%201%202.59.51%206.42%206.42%200%200%201%202%201.48l-1.85%201.8a4.18%204.18%200%200%200-1.14-.91%203.23%203.23%200%200%200-1.58-.37%204%204%200%200%200-1.49.27%203.48%203.48%200%200%200-1.2.78%203.66%203.66%200%200%200-.8%201.22%204.42%204.42%200%200%200%200%203.15c.182.456.454.871.8%201.22.342.34.75.606%201.2.78a4%204%200%200%200%201.49.27%203.45%203.45%200%200%200%201.68-.39%204.27%204.27%200%200%200%201.29-1.12l1.86%201.8zM36%2028a6%206%200%200%201-4.88%202.24%206.48%206.48%200%200%201-2.53-.49%206.35%206.35%200%200%201%200-11.73%206.48%206.48%200%200%201%202.53-.49%206.11%206.11%200%200%201%202.59.51%206.41%206.41%200%200%201%202%201.48l-1.85%201.8a4.18%204.18%200%200%200-1.14-.91%203.22%203.22%200%200%200-1.58-.37%204%204%200%200%200-1.49.27%203.48%203.48%200%200%200-1.2.78%203.64%203.64%200%200%200-.8%201.22%204.42%204.42%200%200%200%200%203.15c.182.456.454.871.8%201.22.342.34.75.606%201.2.78a4%204%200%200%200%201.49.27%203.45%203.45%200%200%200%201.68-.39c.5-.283.94-.664%201.29-1.12L36%2028z%27%0A%20%20%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-captions[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M7%2011v26h34V11H7zm-.75-3h35.5A2.25%202.25%200%200%201%2044%2010.25v27.5A2.25%202.25%200%200%201%2041.75%2040H6.25A2.25%202.25%200%200%201%204%2037.75v-27.5A2.25%202.25%200%200%201%206.25%208z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M23.38%2028a6%206%200%200%201-4.88%202.24A6.35%206.35%200%200%201%2016%2018a6.47%206.47%200%200%201%202.53-.49%206.1%206.1%200%200%201%202.59.51%206.42%206.42%200%200%201%202%201.48l-1.85%201.8a4.18%204.18%200%200%200-1.14-.91%203.23%203.23%200%200%200-1.58-.37%204%204%200%200%200-1.49.27%203.48%203.48%200%200%200-1.2.78%203.66%203.66%200%200%200-.8%201.22%204.42%204.42%200%200%200%200%203.15c.182.456.454.871.8%201.22.342.34.75.606%201.2.78a4%204%200%200%200%201.49.27%203.45%203.45%200%200%200%201.68-.39%204.27%204.27%200%200%200%201.29-1.12l1.86%201.8zM36%2028a6%206%200%200%201-4.88%202.24%206.48%206.48%200%200%201-2.53-.49%206.35%206.35%200%200%201%200-11.73%206.48%206.48%200%200%201%202.53-.49%206.11%206.11%200%200%201%202.59.51%206.41%206.41%200%200%201%202%201.48l-1.85%201.8a4.18%204.18%200%200%200-1.14-.91%203.22%203.22%200%200%200-1.58-.37%204%204%200%200%200-1.49.27%203.48%203.48%200%200%200-1.2.78%203.64%203.64%200%200%200-.8%201.22%204.42%204.42%200%200%200%200%203.15c.182.456.454.871.8%201.22.342.34.75.606%201.2.78a4%204%200%200%200%201.49.27%203.45%203.45%200%200%200%201.68-.39c.5-.283.94-.664%201.29-1.12L36%2028z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-like .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M7%2C41.5a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-21a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0Zm29.82.21A2.59%2C2.59%2C0%2C0%2C1%2C34.31%2C43H11.5A1.5%2C1.5%2C0%2C0%2C1%2C10%2C41.5v-22a1.5%2C1.5%2C0%2C0%2C1%2C.44-1.06l11-11A11%2C11%2C0%2C0%2C1%2C22.8%2C6.28a7.15%2C7.15%2C0%2C0%2C1%2C2.15-1.12%2C3.31%2C3.31%2C0%2C0%2C1%2C2.89.35%2C5%2C5%2C0%2C0%2C1%2C2%2C2.89%2C7.94%2C7.94%2C0%2C0%2C1%2C.2%2C3c0%2C.18%2C0%2C.33-.06.42a1.5%2C1.5%2C0%2C0%2C1-.07.25l-2.24%2C6H39c2.81%2C0%2C5%2C2.63%2C5%2C5.5v2.94a3.36%2C3.36%2C0%2C0%2C1-.42%2C1.43ZM33.5%2C40h.83L40.9%2C26.5l.05-.1s0-1%2C0-2.9A2.39%2C2.39%2C0%2C0%2C0%2C39%2C21H25.5a1.5%2C1.5%2C0%2C0%2C1-1.4-2L27%2C11.12a5.21%2C5.21%2C0%2C0%2C0-.1-1.93A2%2C2%2C0%2C0%2C0%2C26.16%2C8S26%2C8%2C25.8%2C8a4.37%2C4.37%2C0%2C0%2C0-1.23.67%2C8.89%2C8.89%2C0%2C0%2C0-.73.59l-.28.26L13%2C20.12V40Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-like[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M7%2C41.5a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-21a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0Zm29.82.21A2.59%2C2.59%2C0%2C0%2C1%2C34.31%2C43H11.5A1.5%2C1.5%2C0%2C0%2C1%2C10%2C41.5v-22a1.5%2C1.5%2C0%2C0%2C1%2C.44-1.06l11-11A11%2C11%2C0%2C0%2C1%2C22.8%2C6.28a7.15%2C7.15%2C0%2C0%2C1%2C2.15-1.12%2C3.31%2C3.31%2C0%2C0%2C1%2C2.89.35%2C5%2C5%2C0%2C0%2C1%2C2%2C2.89%2C7.94%2C7.94%2C0%2C0%2C1%2C.2%2C3c0%2C.18%2C0%2C.33-.06.42a1.5%2C1.5%2C0%2C0%2C1-.07.25l-2.24%2C6H39c2.81%2C0%2C5%2C2.63%2C5%2C5.5v2.94a3.36%2C3.36%2C0%2C0%2C1-.42%2C1.43ZM33.5%2C40h.83L40.9%2C26.5l.05-.1s0-1%2C0-2.9A2.39%2C2.39%2C0%2C0%2C0%2C39%2C21H25.5a1.5%2C1.5%2C0%2C0%2C1-1.4-2L27%2C11.12a5.21%2C5.21%2C0%2C0%2C0-.1-1.93A2%2C2%2C0%2C0%2C0%2C26.16%2C8S26%2C8%2C25.8%2C8a4.37%2C4.37%2C0%2C0%2C0-1.23.67%2C8.89%2C8.89%2C0%2C0%2C0-.73.59l-.28.26L13%2C20.12V40Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%3C/svg%3E%0A")}.btn-dislike .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2C6.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v21a1.5%2C1.5%2C0%2C0%2C1-3%2C0ZM11.18%2C6.29A2.59%2C2.59%2C0%2C0%2C1%2C13.69%2C5H36.5A1.5%2C1.5%2C0%2C0%2C1%2C38%2C6.5v22a1.5%2C1.5%2C0%2C0%2C1-.44%2C1.06l-11%2C11a11%2C11%2C0%2C0%2C1-1.38%2C1.18%2C7.15%2C7.15%2C0%2C0%2C1-2.15%2C1.12%2C3.31%2C3.31%2C0%2C0%2C1-2.89-.35%2C5%2C5%2C0%2C0%2C1-2-2.89%2C7.94%2C7.94%2C0%2C0%2C1-.2-3c0-.18%2C0-.33.06-.42A1.5%2C1.5%2C0%2C0%2C1%2C18.1%2C36l2.24-6H9c-2.81%2C0-5-2.63-5-5.5V21.56a3.36%2C3.36%2C0%2C0%2C1%2C.42-1.43ZM35%2C8H13.67L7.1%2C21.5%2C7%2C21.6s0%2C1%2C0%2C2.9A2.39%2C2.39%2C0%2C0%2C0%2C9%2C27H22.5a1.5%2C1.5%2C0%2C0%2C1%2C1.4%2C2L21%2C36.88a5.21%2C5.21%2C0%2C0%2C0%2C.1%2C1.93%2C2%2C2%2C0%2C0%2C0%2C.78%2C1.2s.12%2C0%2C.36%2C0a4.37%2C4.37%2C0%2C0%2C0%2C1.23-.67%2C8.89%2C8.89%2C0%2C0%2C0%2C.73-.59l.28-.26L35%2C27.88Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-dislike[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2C6.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v21a1.5%2C1.5%2C0%2C0%2C1-3%2C0ZM11.18%2C6.29A2.59%2C2.59%2C0%2C0%2C1%2C13.69%2C5H36.5A1.5%2C1.5%2C0%2C0%2C1%2C38%2C6.5v22a1.5%2C1.5%2C0%2C0%2C1-.44%2C1.06l-11%2C11a11%2C11%2C0%2C0%2C1-1.38%2C1.18%2C7.15%2C7.15%2C0%2C0%2C1-2.15%2C1.12%2C3.31%2C3.31%2C0%2C0%2C1-2.89-.35%2C5%2C5%2C0%2C0%2C1-2-2.89%2C7.94%2C7.94%2C0%2C0%2C1-.2-3c0-.18%2C0-.33.06-.42A1.5%2C1.5%2C0%2C0%2C1%2C18.1%2C36l2.24-6H9c-2.81%2C0-5-2.63-5-5.5V21.56a3.36%2C3.36%2C0%2C0%2C1%2C.42-1.43ZM35%2C8H13.67L7.1%2C21.5%2C7%2C21.6s0%2C1%2C0%2C2.9A2.39%2C2.39%2C0%2C0%2C0%2C9%2C27H22.5a1.5%2C1.5%2C0%2C0%2C1%2C1.4%2C2L21%2C36.88a5.21%2C5.21%2C0%2C0%2C0%2C.1%2C1.93%2C2%2C2%2C0%2C0%2C0%2C.78%2C1.2s.12%2C0%2C.36%2C0a4.37%2C4.37%2C0%2C0%2C0%2C1.23-.67%2C8.89%2C8.89%2C0%2C0%2C0%2C.73-.59l.28-.26L35%2C27.88Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%3C/svg%3E%0A")}.timeline{flex:none;margin-bottom:-13px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.timeline{margin-bottom:1px}}.time-numbers .left{float:left}.time-numbers .right{float:right}.time-numbers .right .time-indicator{margin-left:20px}.time-numbers:after{clear:both;content:"";display:table}.time-indicator,.live-label{display:inline-block;font-size:24px;line-height:24px;opacity:.5}.scrubber-layer{margin:-15px 0;height:60px;position:relative}.progress-bar{background-color:rgba(255,255,255,0.4);border-radius:2px;height:4px;left:0;overflow:hidden;position:absolute;top:28px;width:100%}.progress-fill{background-color:#fff;height:100%;left:0;position:absolute;top:0;transform:scaleX(0);transform-origin:left center;width:100%;will-change:transform}.progress-fill.break{background-color:#fbbc04}.progress-fill.live{background-color:#f00}.progress-seekable-range,.progress-seekable-played{height:100%;position:absolute;top:0}.progress-seekable-played{background-color:#f00}.progress-seekable-range{background-color:rgba(255,255,255,0.5)}.progress-breaks{height:100%;left:0;position:absolute;top:0;width:100%}.break-mark{position:absolute;height:100%;background-color:#fbbc04}.progress-loading{height:100%;right:0;position:absolute;top:0;transform-origin:right center;will-change:transform}input[type=range].scrubber{-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-focus-ring-color:rgba(255,255,255,0);-webkit-appearance:none;background-color:transparent;height:60px;left:0;margin:0;outline:none;position:absolute;top:0;width:100%;will-change:transform}input[type=range].scrubber::-webkit-slider-thumb{-webkit-appearance:none;background:#fff;border-radius:2px;cursor:pointer;height:24px;margin-top:18px;width:4px}input[type=range].scrubber::-webkit-slider-runnable-track{background:transparent;cursor:pointer;height:60px;width:100%}input[type=range].scrubber[disabled]::-webkit-slider-thumb{display:none}'
        }
    };
    window.cast.receiver.O.Mg = {
        Sa: function(a) {
            a.innerHTML = '<div class=scrim></div><div class=buffering-scrim></div><div class=controls-layer><div class=controls-toggle id=controls-toggle role=button></div><div class=video-metadata><div alt=logo class=logo id=logo src=""></div><div class=subtitle-container><h2 class=subtitle id=subtitle></h2></div><h1 class=title id=title></h1><h1 class="title hidden" id=break-title></h1></div><div class=controls id=controls><div class=timeline id=timeline><div class=scrubber-layer id=scrubber-layer><div class=progress-bar><div class=progress-fill id=progress-fill></div><div class=progress-seekable-range id=progress-seekable-range></div><div class=progress-seekable-played id=progress-seekable-played></div><div class="progress-loading loading-bar" id=progress-loading><div class="rect rect-primary"><span class=rect-inner></span></div><div class="rect rect-auxiliary"><span class=rect-inner></span></div></div><div class=progress-breaks id=progress-breaks></div></div><input class=scrubber id=scrubber max=300 min=0 step=any type=range></div><div class=time-numbers><div class="time-indicator left" id=current-time role=presentation>0:00</div><div class=right><div class="live-label hidden" id=live-label></div><div class=time-indicator id=total-time role=presentation>0:00</div></div></div></div><div class=buttons id=buttons><div class="slot audio-group-slot"><img alt="" class=audio-group-icon role=presentation src=""><span class=audio-group-name id=audio-group-name></span></div><div class="slot slot-1"></div><div class="slot slot-2"></div><div class="slot center"><div class="btn btn-play-pause" id=play-pause role=button><dg-ripple></dg-ripple><img alt="" class="play-icon btn-icon" role=presentation src=""><img alt="" class="pause-icon btn-icon" role=presentation src=""></div><div class="btn btn-stop" id=stop role=button><dg-ripple></dg-ripple><img alt="" class=btn-icon role=presentation src=""></div></div><div class="slot slot-3"></div><div class="slot slot-4"></div></div></div></div><div class="break-countdown hidden" id=break-countdown><span class=ad-label id=ad-label></span> &middot; <span id=break-countdown-text></span></div><div class="break-skip hidden" id=break-skip-btn role=button><span class=skip-ad-text id=skip-ad-btn-text></span><img alt="" class=skip-ad-icon role=presentation src=""><div class=break-skip-scrim></div><div class=break-skip-highlight></div></div><div class="break-skip break-skip-btn-countdown hidden" id=break-skip-btn-countdown><span class=skip-ad-text id=skip-ad-btn-countdown-text></span><div class=break-skip-scrim></div></div><div aria-live=assertive class="hidden accessibility-alert" id=alert-show-controls></div><div aria-live=assertive class="hidden accessibility-alert" id=alert-hide-controls></div>'
        }
    };
    _.Ba(_.Ph, _.xb);
    _.h = _.Ph.prototype;
    _.h.Ee = !1;
    _.h.Xf = 0;
    _.h.xc = null;
    _.h.hf = function(a) {
        this.g = arguments;
        this.xc || this.Xf ? this.Ee = !0 : Qh(this)
    };
    _.h.stop = function() {
        this.xc && (_.v.clearTimeout(this.xc), this.xc = null, this.Ee = !1, this.g = [])
    };
    _.h.pause = function() {
        this.Xf++
    };
    _.h.ea = function() {
        _.Ph.zb.ea.call(this);
        this.stop()
    };
    _.h.qn = function() {
        this.xc = null;
        this.Ee && !this.Xf && (this.Ee = !1, Qh(this))
    };
    Uh.prototype.pi = function(a) {
        this.w.classList.toggle("hidden", !a)
    };
    Uh.prototype.Fc = function(a) {
        this.h || (this.g.value = a, this.M.textContent = Jh(a), Rh(this, a, this.B), _.u(this.o) && Sh(this, this.g.value))
    };
    Uh.prototype.setDuration = function(a) {
        a !== this.B && (this.B = a, 0 > a ? (Xh(this, 0), this.L.textContent = "", Rh(this, this.g.value)) : (!this.G.classList.contains("hidden") && this.N || Xh(this, a), this.L.textContent = Jh(a), Rh(this, this.g.value, a)), Zh(this, 0 >= a))
    };
    ei.prototype.df = function() {
        this.N = !0;
        this.g.classList.add("compatibility-mode-scrim")
    };
    _.q(ji, window.HTMLDivElement);
    _.h = ji.prototype;
    _.h.createdCallback = function() {
        var a = this;
        this.B = {};
        this.$a = this.Kb = this.Za = this.Ya = _.x;
        var b = this.createShadowRoot(),
            c = window.document.createElement("style");
        window.cast.receiver.O.gk.Sa(c);
        this.l = window.document.createElement("div");
        this.l.classList.add("touch-layer");
        this.l.innerHTML = window.cast.receiver.O.Mg;
        window.cast.receiver.O.Mg.Sa(this.l);
        b.appendChild(c);
        b.appendChild(this.l);
        b.getElementById("live-label").innerText = window.cast.receiver.R.Jg;
        this.na = new ei(this.l);
        mi(b);
        this.C = b.getElementById("buttons");
        this.w = new Oh(b.getElementById("play-pause"));
        this.F = b.getElementById("stop");
        this.o = new Kh(b.getElementById("break-skip-btn"), b.getElementById("break-skip-btn-countdown"), b.getElementById("break-countdown"));
        this.h = new Uh(b.getElementById("timeline"));
        for (var d in ri) ri.hasOwnProperty(d) && (b = ri[d], this.B[b] = this.l.querySelector(".slot." + b));
        this.w.Ya = function() {
            a.Ya()
        };
        this.w.Za = function() {
            a.Za()
        };
        this.h.$a = function(b) {
            a.$a(b)
        };
        this.F.addEventListener("click", function() {
            a.Kb()
        })
    };
    _.h.df = function() {
        this.g = window.document.createElement("audio-player-compatibility");
        this.l.insertBefore(this.g, this.l.firstChild);
        this.na.df()
    };
    _.h.qc = function(a, b) {
        if (!this.B.hasOwnProperty(a)) throw Error("Invalid controls slot name. - " + a);
        for (a = this.B[a]; a.firstChild;) a.removeChild(a.firstChild);
        b && a.appendChild(b.element)
    };
    _.h.Fc = function(a) {
        this.h.Fc(a);
        this.o.Fc(a)
    };
    _.h.setDuration = function(a) {
        this.h.setDuration(a);
        this.o.setDuration(a)
    };
    _.h.ng = function(a) {
        this.o.ng(a)
    };
    window.document.registerElement("touch-controls", {
        prototype: ji.prototype
    });
    pi.prototype.M = function() {
        return new Ug
    };
    pi.prototype.Ve = function() {
        si(this, ri.SLOT_1, "no-button");
        si(this, ri.SLOT_2, "no-button");
        si(this, ri.SLOT_3, "no-button");
        si(this, ri.SLOT_4, "no-button");
        this.I = !1
    };
    pi.prototype.B = function(a, b) {
        a = !!(a & 2);
        return b ? a && !(0, window.isNaN)(b.duration) && window.Infinity != b.duration && 0 < b.duration : a
    };
    var Ei = {
            VIDEO: "video",
            AUDIO: "audio",
            IMAGE: "image"
        },
        Ai = _.B("cast.receiver.ui.ControlsBaseImplementation");
    window.cast.receiver.crypto = {};
    window.cast.receiver.cryptokeys = {};
    window.cast.receiver.crypto.Pc = window.crypto && window.crypto.subtle || {};
    window.cast.receiver.crypto.fo = !(!window.cast.__platform__ || !window.cast.__platform__.cryptokeys);
    window.cast.receiver.crypto.Nc = !(!window.cast.__platform__ || !window.cast.__platform__.crypto);
    window.cast.receiver.cryptokeys.getKeyByName = window.cast.receiver.crypto.fo ? window.cast.__platform__.cryptokeys.getKeyByName : window.cryptokeys && window.cryptokeys.getKeyByName;
    window.cast.receiver.crypto.decrypt = window.cast.receiver.crypto.Nc ? window.cast.__platform__.crypto.decrypt : window.cast.receiver.crypto.Pc.decrypt;
    window.cast.receiver.crypto.encrypt = window.cast.receiver.crypto.Nc ? window.cast.__platform__.crypto.encrypt : window.cast.receiver.crypto.Pc.encrypt;
    window.cast.receiver.crypto.sign = window.cast.receiver.crypto.Nc ? window.cast.__platform__.crypto.sign : window.cast.receiver.crypto.Pc.sign;
    window.cast.receiver.crypto.unwrapKey = window.cast.receiver.crypto.Nc ? window.cast.__platform__.crypto.unwrapKey : window.cast.receiver.crypto.Pc.unwrapKey;
    window.cast.receiver.crypto.verify = window.cast.receiver.crypto.Nc ? window.cast.__platform__.crypto.verify : window.cast.receiver.crypto.Pc.verify;
    window.cast.receiver.crypto.wrapKey = window.cast.receiver.crypto.Nc ? window.cast.__platform__.crypto.wrapKey : window.cast.receiver.crypto.Pc.wrapKey;
    Fi.prototype.G = function(a) {
        _.F(Ii, "DebugOverlay: " + JSON.stringify(a.data));
        switch (a.data.type) {
            case "SHOW":
                Gi(this);
                break;
            case "HIDE":
                Hi(this)
        }
    };
    Fi.prototype.C = function() {
        var a = this.g;
        if (a && a.src && !a.error && !a.ended && 1 <= a.readyState) {
            var b = a.videoWidth,
                c = a.videoHeight;
            if (0 >= b || 0 >= c) _.lc(Ii, "canceling draw because video not initialized");
            else {
                var d = 0;
                if (a.paused || a.seeking) _.lc(Ii, "not calculating fps because paused or seeking");
                else {
                    d = a.webkitDecodedFrameCount;
                    a = a.currentTime;
                    var e = 0;
                    if (0 < this.l.length && 0 < this.o.length) {
                        var f = this.l[0],
                            g = this.o[0];
                        a > f && d > g && (e = (d - g) / (a - f))
                    }
                    this.l.push(a);
                    this.o.push(d);
                    5 <= this.l.length && 5 <= this.o.length &&
                        (this.l.splice(0, this.l.length - 5), this.o.splice(0, this.o.length - 5));
                    d = e
                }
                b = b + "x" + c + "(" + (0 < d ? Math.round(d).toString() : "?") + ")";
                _.lc(Ii, "video is " + b);
                this.w.textContent = b
            }
        } else if (_.lc(Ii, "video is no longer active, restarting search procedure"), this.g || this.h) Hi(this), Gi(this)
    };
    Fi.prototype.F = function() {
        _.F(Ii, "onSeeking");
        this.l = [this.g.currentTime];
        this.o = [this.g.webkitDecodedFrameCount]
    };
    Fi.prototype.D = function() {
        function a(b) {
            for (var c = _.n(b.document.getElementsByTagName("video")), e = c.next(); !e.done; e = c.next())
                if (e = e.value, e.src && !e.error && !e.ended && 1 <= e.readyState) return e;
            for (c = 0; c < b.frames.length; ++c) try {
                var f = a(b.frames[c]);
                if (f) return f
            } catch (g) {}
            return null
        }
        var b = a(window);
        b && Ji(this, b)
    };
    var Ii = _.B("cast.receiver.DebugOverlay");
    ge = function(a) {
        new Fi(a)
    };
    window.cast.receiver.eme = {};
    window.cast.receiver.eme.oo = new window.Uint8Array([43, 248, 102, 128, 198, 229, 78, 36, 190, 35, 15, 129, 90, 96, 110, 178]);
    window.cast.receiver.eme.wo = 2;
    window.cast.receiver.vb = _.B("cast");
    window.cast.receiver.vb.w = function(a) {
        if (window.cast.receiver.vb) {
            var b = window.cast.receiver.vb;
            a: {
                if (!iq) {
                    iq = {};
                    for (var c = 0, d; d = hq[c]; c++) iq[d.value] = d, iq[d.name] = d
                }
                if (a in iq) a = iq[a];
                else {
                    for (c = 0; c < hq.length; ++c)
                        if (d = hq[c], d.value <= a) {
                            a = d;
                            break a
                        }
                    a = null
                }
            }
            b.h = a
        }
    };
    if (window.cast.receiver.vb) {
        var xq = window.cast.Gg ? 800 : 1E3,
            yq = (0, window.parseInt)(window.cast.receiver.platform.gb("log-level-cast-receiver"), 10);
        window.cast.receiver.vb.w(yq || xq)
    };
    var Ro = _.B("cast.receiver.ui.PlaybackTimeTracker");
    Ki.prototype.ib = function(a) {
        a !== this.g && (this.g && (this.g.removeEventListener("timeupdate", this.B), this.g = null), a && (this.g = a, this.g.addEventListener("timeupdate", this.B)))
    };
    window.cast.receiver.O.Zi = {
        Sa: function(a) {
            a.innerHTML = ":host{display:block;position:absolute;pointer-events:none;width:100%;height:100%;--wave-fade-duration:500ms}.highlight,.wave{pointer-events:none;position:absolute;top:0;left:0;background-color:#fff;border-radius:50%;width:100%;height:100%}.highlight{opacity:0;transition:opacity 200ms;will-change:opacity}.highlight.active{opacity:.04;transition:none}.wave{opacity:0;will-change:transform,opacity;animation:wave-fade-in-out var(--wave-fade-duration) linear,wave-expand 300ms linear forwards}@keyframes wave-fade-in-out{0%{opacity:0}10%{opacity:.07}100%{opacity:0}}@keyframes wave-expand{100%{transform:translate(0, 0) scale(1, 1)}}"
        }
    };
    _.q(Ni, window.HTMLDivElement);
    _.h = Ni.prototype;
    _.h.createdCallback = function() {
        var a = this.createShadowRoot(),
            b = window.document.createElement("style");
        window.cast.receiver.O.Zi.Sa(b);
        a.appendChild(b);
        this.h = window.document.createElement("div");
        this.h.classList.add("highlight");
        a.appendChild(this.h);
        this.B = (0, window.parseInt)(this.style.getPropertyValue("--wave-fade-duration"), 10) || 500;
        this.w = this.tn.bind(this);
        this.l = this.rn.bind(this)
    };
    _.h.attachedCallback = function() {
        11 === this.parentNode.nodeType ? this.g = this.shadowRoot : this.g = this.parentNode;
        this.g.addEventListener("touchstart", this.w);
        this.g.addEventListener("touchend", this.l);
        this.g.addEventListener("touchcancel", this.l)
    };
    _.h.detachedCallback = function() {
        this.g.removeEventListener("touchstart", this.w);
        this.g.removeEventListener("touchend", this.l);
        this.g.removeEventListener("touchcancel", this.l);
        this.g = null
    };
    _.h.rn = function() {
        var a = this,
            b = this.C + 200 - Date.now();
        0 >= b ? this.h.classList.remove("active") : this.o = (0, window.setTimeout)(function() {
            a.h.classList.remove("active")
        }, b)
    };
    _.h.tn = function(a) {
        var b = this.getBoundingClientRect(),
            c = a.targetTouches[0];
        a = b.width;
        var d = -(a / 2 - (c.clientX - b.left));
        b = -(b.height / 2 - (c.clientY - b.top));
        c = (a - 50) / 2;
        var e = Math.sqrt(d * d + b * b);
        e > c && (d *= c / e, b *= c / e);
        Oi(this, d, b, 50 / a);
        (0, window.clearTimeout)(this.o);
        this.h.classList.add("active");
        this.C = Date.now()
    };
    window.cast.receiver.O.$i = Ni;
    window.document.registerElement("dg-ripple", {
        prototype: window.cast.receiver.O.$i.prototype
    });
    _.zq = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
    Pi.prototype.g = null;
    var Aq;
    _.Ba(Si, Pi);
    Aq = new Si;
    _.hj = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    _.Ba(_.Xi, _.ec);
    _.Xi.prototype.W = _.B("goog.net.XhrIo");
    var ij = /^https?$/i,
        Bq = ["POST", "PUT"];
    _.h = _.Xi.prototype;
    _.h.send = function(a, b, c, d) {
        if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.L + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.L = a;
        this.D = "";
        this.w = 0;
        this.X = b;
        this.T = !1;
        this.l = !0;
        this.g = this.P ? Ti(this.P) : Ti(Aq);
        this.N = this.P ? Ri(this.P) : Ri(Aq);
        this.g.onreadystatechange = (0, _.za)(this.Zh, this);
        try {
            _.lc(this.W, gj(this, "Opening Xhr")), this.U = !0, this.g.open(b, String(a), !0), this.U = !1
        } catch (f) {
            _.lc(this.W, gj(this, "Error opening Xhr: " + f.message));
            cj(this, f);
            return
        }
        a = c || "";
        var e = this.headers.clone();
        d && Wi(d, function(a, b) {
            e.set(b, a)
        });
        d = _.Ga(e.nb(), $i);
        c = _.v.FormData && a instanceof _.v.FormData;
        !_.Ia(Bq, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(a, b) {
            this.g.setRequestHeader(b, a)
        }, this);
        this.aa && (this.g.responseType = this.aa);
        "withCredentials" in this.g && this.g.withCredentials !== this.V && (this.g.withCredentials = this.V);
        try {
            kj(this), 0 < this.C && (this.M = Zi(this.g), _.lc(this.W, gj(this, "Will abort after " + this.C + "ms if incomplete, xhr2 " +
                this.M)), this.M ? (this.g.timeout = this.C, this.g.ontimeout = (0, _.za)(this.qh, this)) : this.I = bd(this.qh, this.C, this)), _.lc(this.W, gj(this, "Sending request")), this.J = !0, this.g.send(a), this.J = !1
        } catch (f) {
            _.lc(this.W, gj(this, "Send error: " + f.message)), cj(this, f)
        }
    };
    _.h.qh = function() {
        "undefined" != typeof dj && this.g && (this.D = "Timed out after " + this.C + "ms, aborting", this.w = 8, _.lc(this.W, gj(this, this.D)), this.dispatchEvent("timeout"), this.abort(8))
    };
    _.h.abort = function(a) {
        this.g && this.l && (_.lc(this.W, gj(this, "Aborting")), this.l = !1, this.o = !0, this.g.abort(), this.o = !1, this.w = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), bj(this))
    };
    _.h.ea = function() {
        this.g && (this.l && (this.l = !1, this.o = !0, this.g.abort(), this.o = !1), bj(this, !0));
        _.Xi.zb.ea.call(this)
    };
    _.h.Zh = function() {
        this.tb() || (this.U || this.J || this.o ? jj(this) : this.ln())
    };
    _.h.ln = function() {
        jj(this)
    };
    var Cq = {},
        bn = (Cq["application/ttml+xml"] = 1, Cq["text/vtt"] = 2, Cq["text/mp4"] = 3, Cq["audio/mp4"] = 4, Cq["video/mp4"] = 5, Cq["video/mp2t"] = 6, Cq["audio/webm"] = 7, Cq["video/webm"] = 8, Cq["application/x-mpegurl"] = 9, Cq["application/vnd.apple.mpegurl"] = 10, Cq["application/dash+xml"] = 11, Cq["application/vnd.ms-sstr+xml"] = 12, Cq["text/cea608"] = 13, Cq["video/ogg"] = 14, Cq["audio/aac"] = 15, Cq["audio/mp3"] = 16, Cq["audio/ogg"] = 17, Cq["audio/wav"] = 18, Cq["image/gif"] = 19, Cq["image/jpg"] = 20, Cq["image/png"] = 21, Cq["text/mp2t"] = 22, Cq["application/mp4"] =
            23, Cq);
    window.cast.A = {};
    window.cast.A.Wi = "<style>@import url(//fonts.googleapis.com/css?family=Open+Sans:300,400);@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@-webkit-keyframes loading{0%{margin-left:-100%}100%{margin-left:100%}}@-webkit-keyframes flashing{0%{background-color:#80868b}50%{background-color:#5f6368}100%{background-color:#80868b}}.background{background:var(--background, url('data:image/svg+xml,%3Csvg%20width=%271280%27%20height=%27720%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id=%27background%27%20x1=%270%25%27%20y1=%270%25%27%20x2=%270%25%27%20y2=%27100%25%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset=%2710%25%27%20stop-color=%27black%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset=%27100%25%27%20style=%27stop-color:rgb%2830%2C30%2C30%29%27/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20fill=%27url%28%23background%29%27%20x=%270%27%20y=%270%27%20width=%271280%27%20height=%27720%27/%3E%0A%3C/svg%3E%0A'));background-color:var(--background-color);background-image:var(--background-image);background-position:center;background-repeat:var(--background-repeat, no-repeat);background-size:var(--background-size, cover)}.breakIcon{border-radius:2px;color:#fff;display:block;font-weight:bold;padding:2px 4px}.breakIcon:after{content:var(--ad-title, attr(data-ad-label))}.breakMetadata{display:none;overflow:auto;padding-bottom:54px}.breakInfo{float:left}.breakPosition{margin-left:5px}.breakPosition,.breakTime{text-shadow:0 1px 4px #000}.breakSkip{background-color:rgba(0,0,0,0.7);border:1px solid rgba(255,255,255,0.5);color:#fff;display:block;float:right;font-size:16px;font-weight:400;line-height:24px;padding:5px 10px;visibility:hidden}.breakSkip:after{content:var(--skip-ad-title, attr(data-skip-ad-label))}.breakMarker{background-color:#fff;bottom:0;height:100%;opacity:.8;position:absolute;width:2px}.splash{background:var(--splash-background);background-color:var(--splash-color);background-image:var(--splash-image);background-repeat:var(--splash-repeat);background-size:var(--splash-size)}.logo{background:var(--logo-background);background-color:var(--logo-color);background-image:var(--logo-image);background-repeat:var(--logo-repeat);background-size:var(--logo-size)}.playback-logo{background-image:var(--playback-logo-image);background-position-x:left;background-repeat:no-repeat;background-size:contain;color:#fff;display:none;font-family:'Roboto',Arial,sans-serif;font-weight:500;order:-2;overflow:hidden}.nextMetadata{display:flex;flex-direction:row-reverse}.nextMetadataImage{object-fit:contain;max-height:143px;max-width:286px;margin-right:32px}.nextMetadataPlaceHolder{font-weight:bold;margin-right:32px;display:flex;flex-direction:column;align-self:flex-end}.nextMetadataTitle{font-size:44px}.nextMetadataSubtitle,.nextMetadataSubtitle2,.nextMetadataSubtitle3,.nextMetadataCountdown{font-size:22px}.nextOverlay{display:inherit;opacity:0;position:absolute;bottom:0;left:0;right:0;padding:64px}.watermark{background:var(--watermark-background);background-color:var(--watermark-color);background-image:var(--watermark-image);background-position:var(--watermark-position, bottom right);background-repeat:var(--watermark-repeat, no-repeat);background-size:var(--watermark-size);display:none;margin-bottom:54px}.player{background:#111;color:#f1f1f1;font-family:var(--font-family, ''),'Open Sans',sans-serif;font-weight:300}.player,.background,.foreground,.audioPlaybackBackground,.audioPlaybackBackgroundScrim,.gradient,.slideshow,.logo,.splash{bottom:0;left:0;position:absolute;right:0;top:0}.breakOverlay,.overlay,.watermark{bottom:64px;left:64px;position:absolute;right:64px;top:64px}.logo,.splash{background-position:center;background-repeat:no-repeat;color:rgba(221,221,221,0.8);display:none;font-size:44px;padding-top:25%;position:absolute;text-align:center}video{background-color:#000;background-position:center;background-repeat:no-repeat;background-size:contain;display:none;height:100%;width:100%}.overlay{top:auto}[displayStatus=false] .gradient,[displayStatus=false] .metadata,[displayStatus=false] .controlsProgress,[displayStatus=false] .controlsCurTime,[displayStatus=false] .audioPlaybackBackground,[displayStatus=false] .audioPlaybackBackgroundScrim,[displayStatus=false][state='playing'] .controlsPlayPause,[displayStatus=false] .controlsTotalTime{opacity:0;visibility:hidden;-webkit-transition:opacity 1s linear,visibility 1s linear}.breakOverlay{display:none;top:auto}.gradient{background:linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0) 72%, rgba(0,0,0,0) 100%);display:block;opacity:.9}.metadataPlaceHolder{min-width:0;width:100%}.metadata{padding-bottom:54px}.liveIndicator{display:none}.liveLabel:after{content:attr(data-live-label)}.metadataTitle{color:rgba(255,255,255,0.8);font-size:44px;font-weight:300;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.metadataSubtitle,.metadataSubtitle2{color:rgba(203,203,203,0.8);font-size:22px;font-weight:300;line-height:33px;margin:0;max-height:66px;overflow:hidden}.metadataSubtitle span:not(:first-child):before,.metadataSubtitle2 span:not(:first-child):before{content:'\u00b7';font-weight:bold;padding-left:10px;padding-right:10px}.controls{bottom:0;height:30px;left:0;position:absolute;right:0}.controlsPlayPause{background-size:cover;border:0;float:left;height:32px;margin-left:-4px;margin-top:-3px;width:32px}.controlsProgress{background-color:rgba(255,255,255,0.2);height:8px;margin-bottom:11px;margin-top:11px;overflow:hidden;position:relative}.controlsProgressInner{height:100%;opacity:.8}.controlsSeekable{background-color:#fff;height:100%;position:absolute;top:0}.controlsSeekablePlayed{background-color:var(--live-progress-color, #d0021b);height:100%;position:absolute;top:0}.controlsCurTime,.controlsTotalTime{color:rgba(255,255,255,0.8);font-size:16px;font-weight:400}.controlsCurTime{float:left;line-height:30px;margin-left:15px;margin-right:15px}.controlsTotalTime{float:right;line-height:30px;margin-left:15px}.hidden{display:none}.player[isLive='true'][contentType='video'] .videoLiveIndicator{display:block}.player[isLive='true'][contentType='audio'] .audioLiveIndicator{display:flex}.player[isLive='true'] .controlsProgressInner{background-color:var(--live-progress-color, #d0021b);position:absolute}.player[state='launching'] .logo{display:block}.player[state='launching'] .spinner{background-image:var(--spinner-image, url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20x=%270px%27%20y=%270px%27%20width=%2724px%27%20height=%2724px%27%20viewBox=%270%200%2024%2024%27%20enable-background=%27new%200%200%2024%2024%27%20xml:space=%27preserve%27%20fill=%27%23FFFFFF%27%3E%0A%20%20%20%20%3Cpath%20d=%27M12%2C22C6.49%2C22%2C2%2C17.51%2C2%2C12C2%2C6.49%2C6.49%2C2%2C12%2C2c0.55%2C0%2C1%2C0.45%2C1%2C1s-0.45%2C1-1%2C1c-4.41%2C0-8%2C3.59-8%2C8s3.59%2C8%2C8%2C8s8-3.59%2C8-8c0-0.55%2C0.45-1%2C1-1s1%2C0.45%2C1%2C1C22%2C17.51%2C17.51%2C22%2C12%2C22z%27/%3E%0A%20%20%20%20%3Crect%20fill=%27none%27%20width=%2724%27%20height=%2724%27/%3E%0A%3C/svg%3E%0A'));background-size:cover;bottom:64px;display:block;height:32px;left:50%;margin-left:-16px;position:absolute;-webkit-animation:spin 1s infinite linear;width:32px}.player[state='loading'] .controlsCurTime,.player[state='loading'] .controlsTotalTime,.player[state='loading'] .controlsSeekablePlayed,.player[state='loading'] .controlsSeekable,.player[state='loading'] .controlsPlayPause{display:none}.player[state='loading'] .controlsProgressInner{-webkit-animation:loading 2s infinite linear;width:90% !important}.player[state='buffering'] .controlsPlayPause{background-image:var(--buffering-image, url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20x=%270px%27%20y=%270px%27%20width=%2724px%27%20height=%2724px%27%20viewBox=%270%200%2024%2024%27%20enable-background=%27new%200%200%2024%2024%27%20xml:space=%27preserve%27%20fill=%27%23FFFFFF%27%3E%0A%20%20%20%20%3Cpath%20d=%27M12%2C22C6.49%2C22%2C2%2C17.51%2C2%2C12C2%2C6.49%2C6.49%2C2%2C12%2C2c0.55%2C0%2C1%2C0.45%2C1%2C1s-0.45%2C1-1%2C1c-4.41%2C0-8%2C3.59-8%2C8s3.59%2C8%2C8%2C8s8-3.59%2C8-8c0-0.55%2C0.45-1%2C1-1s1%2C0.45%2C1%2C1C22%2C17.51%2C17.51%2C22%2C12%2C22z%27/%3E%0A%20%20%20%20%3Crect%20fill=%27none%27%20width=%2724%27%20height=%2724%27/%3E%0A%3C/svg%3E%0A'));-webkit-animation:spin 1s infinite linear}.player[state='paused'] .controlsPlayPause{background-image:var(--pause-image, url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724px%27%20height=%2724px%27%20viewBox=%270%200%2024%2024%27%20fill=%27%23FFFFFF%27%3E%0A%20%20%20%20%3Cpath%20d=%27M6%2019h4V5H6v14zm8-14v14h4V5h-4z%27/%3E%0A%20%20%20%20%3Cpath%20d=%27M0%200h24v24H0z%27%20fill=%27none%27/%3E%0A%3C/svg%3E%0A'))}.player[state='playing'] .controlsPlayPause{background-image:var(--play-image, none)}.player[state='idle'] .slideshow,.player[state='idle'] .splash{display:block}.player[isPlayingBreak=true] .breakMetadata,.player[isPlayingBreak=true] .breakTime{display:block}.player[isPlayingBreak=true] .breakIcon{display:inline-block}.player[isBreakSkippable=true] .breakSkip{visibility:visible}.player[contentType='image'] video{display:block}.player[contentType='image'] .background{background-color:#111;background-image:none}.player[contentType='image'] .controls{display:none}.player[contentType='audio'] .audioPlaybackBackground,.player[isRemoteControl='true'][displayType='touch'] .audioPlaybackBackground{background:var(--album-art-image, url('//www.gstatic.com/cast/sdk/assets/touch_no_image_1024_600.jpg')) center / cover no-repeat}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[contentType='audio'] .audioPlaybackBackground,.player[isRemoteControl='true'][displayType='touch'] .audioPlaybackBackground{background:var(--album-art-image, url('//www.gstatic.com/cast/sdk/assets/touch_no_image_1280_800.jpg')) center / cover no-repeat}}.player[contentType='audio'] .metadata,.player[isRemoteControl='true'][displayType='touch'] .metadata{display:flex;flex-direction:row;justify-content:space-between;padding:0}.player[contentType='audio'] .metadataPlaceHolder,.player[isRemoteControl='true'][displayType='touch'] .metadataPlaceHolder{order:-1;display:flex;flex-direction:column;justify-content:center;margin-top:0}.player[contentType='audio'] .playback-logo,.player[isRemoteControl='true'][displayType='touch'] .playback-logo{display:inline-block}.player[contentType='audio'] .metadataTitle,.player[isRemoteControl='true'][displayType='touch'] .metadataTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:initial;color:#fff;font-weight:400}.player[contentType='audio'] .metadataSubtitle,.player[isRemoteControl='true'][displayType='touch'] .metadataSubtitle{margin-bottom:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:400}.player[contentType='audio'] .metadataSubtitle2,.player[isRemoteControl='true'][displayType='touch'] .metadataSubtitle2{font-weight:500;order:-1;margin-top:auto;text-transform:uppercase;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.player[contentType='audio']:not([displayType='touch']){overflow:hidden;user-select:none;font-family:var(--font-family, ''),'Roboto',Arial,sans-serif;font-weight:400}.player[contentType='audio']:not([displayType='touch']) .breakOverlay,.player[contentType='audio']:not([displayType='touch']) .nextOverlay{display:none}.player[contentType='audio']:not([displayType='touch']) .audioLiveIndicator{flex-direction:row;align-items:center;line-height:1.25vw;font-size:1.25vw;text-align:right;position:absolute;bottom:-3.4375vw;right:0}.player[contentType='audio']:not([displayType='touch']) .liveDot{background-color:#fa5847;border-radius:50%;height:1.015625vw;width:1.015625vw;margin-right:.703125vw}.player[contentType='audio']:not([displayType='touch']) .audioPlaybackBackgroundScrim{background:rgba(0,0,0,0.9)}.player[contentType='audio']:not([displayType='touch']) .overlay{margin:auto;margin-left:7.8125vw;margin-right:7.8125vw;height:39.0625vw;top:0;left:0;bottom:0;right:0;position:absolute}.player[contentType='audio']:not([displayType='touch']) .metadataTitle{font-size:3.75vw;line-height:4.6875vw;margin-top:1.5625vw}.player[contentType='audio']:not([displayType='touch']) .metadataSubtitle{color:rgba(255,255,255,0.6);font-size:1.5625vw;line-height:1.875vw;margin-top:1.09375vw}.player[contentType='audio']:not([displayType='touch']) .metadataSubtitle2{color:rgba(255,255,255,0.6);font-size:1.25vw;line-height:1.25vw;letter-spacing:.0625vw}.player[contentType='audio']:not([displayType='touch']) .metadataPlaceHolder{margin-right:6.25vw;width:auto;height:39.0625vw;box-sizing:border-box;padding-bottom:2.8125vw}.player[contentType='audio']:not([displayType='touch']) .metadataImage{content:none !important;background:#000 var(--album-art-image) center / contain no-repeat;border-radius:.3125vw;width:39.0625vw;height:39.0625vw;flex:none;box-shadow:0 .9375vw .9375vw rgba(0,0,0,0.5)}.player[contentType='audio']:not([displayType='touch']) .playback-logo{font-size:2.5vw;height:2.8125vw;line-height:2.8125vw}.player[contentType='audio']:not([displayType='touch']) .playback-logo.app-icon{height:4.6875vw}.player[contentType='audio']:not([displayType='touch']) .controls{width:39.0625vw;height:39.0625vw;position:absolute;bottom:0;right:0;left:auto;border-radius:.3125vw;display:flex;justify-content:center;align-items:center}.player[contentType='audio']:not([displayType='touch']) .controlsProgress{box-shadow:0 -0.078125vw 0 rgba(0,0,0,0.25);background-color:rgba(0,0,0,0.3);height:.3125vw;width:100%;border-bottom-left-radius:.3125vw;border-bottom-right-radius:.3125vw;margin:0;position:absolute;bottom:0}.player[contentType='audio']:not([displayType='touch']) .controlsPlayPause{height:9.6875vw;width:9.6875vw}.player[contentType='audio']:not([displayType='touch']) .controlsCurTime,.player[contentType='audio']:not([displayType='touch']) .controlsTotalTime{position:absolute;bottom:1.40625vw;margin:0;font-size:1.09375vw;line-height:1.25vw;color:rgba(255,255,255,0.7);text-shadow:0 0 .3125vw rgba(0,0,0,0.5)}.player[contentType='audio']:not([displayType='touch']) .controlsCurTime{left:1.09375vw}.player[contentType='audio']:not([displayType='touch']) .controlsTotalTime{right:1.09375vw}.player[contentType='audio']:not([displayType='touch']) .progressBar{background-color:var(--progress-color, #fff)}.player[contentType='audio']:not([displayType='touch']) .breakMarker{background-color:#fbbc04;width:.78125vw}.player[contentType='audio']:not([displayType='touch'])[state='loading'] .controlsProgress{display:none}.player[contentType='audio']:not([displayType='touch'])[state='buffering'] .controlsPlayPause,.player[contentType='audio']:not([displayType='touch'])[state='loading'] .controlsPlayPause{-webkit-animation:spin 1s infinite linear;display:block;width:5.625vw;height:5.625vw;background-image:var(--buffering-image, url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%2072%2072%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%20d=%27M36%2C64%20C20.536027%2C64%208%2C51.463973%208%2C36%20C8%2C28.3421054%2011.0742312%2C21.402236%2016.0558797%2C16.3472055%20L18.9049104%2C19.1548779%20C14.5062491%2C23.6183335%2012.0001567%2C29.6058259%2012%2C35.9992989%20C12%2C49.2547411%2022.7450731%2C60%2036%2C60%20L36%2C64%20Z%20M64%2C36%20C64%2C51.463973%2051.463973%2C64%2036%2C64%20L36%2C60%20C49.254834%2C60%2060%2C49.254834%2060%2C36%20C60%2C28.2977044%2056.3514655%2C21.2105352%2050.2785664%2C16.7073115%20L52.6611093%2C13.4942928%20C59.5409482%2C18.5958848%2064%2C26.7772087%2064%2C36%20Z%27%20fill=%27%23FFFFFF%27%20fill-rule=%27nonzero%27%3E%3C/path%3E%0A%3C/svg%3E%0A'))}.player[contentType='audio']:not([displayType='touch'])[state='paused'] .controlsPlayPause{filter:drop-shadow(0 0 .3125vw rgba(0,0,0,0.5));background-image:var(--pause-image, url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%20d=%27M32%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20vector-effect=%27non-scaling-stroke%27%0A%20%20%20%20%20%20stroke-width=%274%27/%3E%0A%20%20%3Cpath%20d=%27M16%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20vector-effect=%27non-scaling-stroke%27%0A%20%20%20%20%20%20stroke-width=%274%27/%3E%0A%3C/svg%3E%0A'))}.player[contentType='audio']:not([displayType='touch'])[state='buffering'] .controls,.player[contentType='audio']:not([displayType='touch'])[state='paused'] .controls{background-color:rgba(0,0,0,0.3);box-shadow:inset 0 -9.375vw 7.03125vw -7.03125vw rgba(0,0,0,0.5)}.player[contentType='audio']:not([displayType='touch'])[state='playing'] .controlsCurTime,.player[contentType='audio']:not([displayType='touch'])[state='playing'] .controlsTotalTime{display:none}.player[displayType='touch'][contentType='audio'],.player[displayType='touch'][isRemoteControl='true']{overflow:hidden;user-select:none;font-family:'Google Sans','Roboto',Arial,sans-serif;font-weight:400}.player[displayType='touch'][contentType='audio'] .slideshow,.player[displayType='touch'][isRemoteControl='true'] .slideshow,.player[displayType='touch'][contentType='audio'] .controls,.player[displayType='touch'][isRemoteControl='true'] .controls,.player[displayType='touch'][contentType='audio'] .gradient,.player[displayType='touch'][isRemoteControl='true'] .gradient,.player[displayType='touch'][contentType='audio'] .spinner,.player[displayType='touch'][isRemoteControl='true'] .spinner,.player[displayType='touch'][contentType='audio'] .watermark,.player[displayType='touch'][isRemoteControl='true'] .watermark,.player[displayType='touch'][contentType='audio'] .liveIndicator,.player[displayType='touch'][isRemoteControl='true'] .liveIndicator,.player[displayType='touch'][contentType='audio'] .breakOverlay,.player[displayType='touch'][isRemoteControl='true'] .breakOverlay,.player[displayType='touch'][contentType='audio'] .nextOverlay,.player[displayType='touch'][isRemoteControl='true'] .nextOverlay{display:none !important}.player[displayType='touch'][contentType='audio'] .audioPlaybackBackground,.player[displayType='touch'][isRemoteControl='true'] .audioPlaybackBackground{background-color:#000;transform:scale(1.25);transform-origin:center;filter:blur(37px)}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][contentType='audio'] .audioPlaybackBackground,.player[displayType='touch'][isRemoteControl='true'] .audioPlaybackBackground{filter:blur(50px)}}.player[displayType='touch'][contentType='audio'] .audioPlaybackBackgroundScrim,.player[displayType='touch'][isRemoteControl='true'] .audioPlaybackBackgroundScrim{background:rgba(0,0,0,0.7)}.player[displayType='touch'][contentType='audio'] .overlay,.player[displayType='touch'][isRemoteControl='true'] .overlay{top:0;left:0;position:absolute;box-sizing:border-box;width:100%;padding:0 var(--cast-controls-horizontal-padding);display:flex;flex-direction:column;justify-content:center;height:calc(var(--cast-controls-safe-area-height) + 30px);padding-top:2px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][contentType='audio'] .overlay,.player[displayType='touch'][isRemoteControl='true'] .overlay{height:calc(var(--cast-controls-safe-area-height) + 48px);padding-top:38px}}.player[displayType='touch'][contentType='audio'] .metadata,.player[displayType='touch'][isRemoteControl='true'] .metadata{height:352px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][contentType='audio'] .metadata,.player[displayType='touch'][isRemoteControl='true'] .metadata{height:420px}}.player[displayType='touch'][contentType='audio'] .metadataTitle,.player[displayType='touch'][isRemoteControl='true'] .metadataTitle{margin-top:18px;font-size:56px;line-height:76px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][contentType='audio'] .metadataTitle,.player[displayType='touch'][isRemoteControl='true'] .metadataTitle{margin-top:32px;font-size:68px;line-height:80px}}.player[displayType='touch'][contentType='audio'] .metadataSubtitle,.player[displayType='touch'][isRemoteControl='true'] .metadataSubtitle{color:#dfe1e5;font-size:28px;letter-spacing:1.4;line-height:30px;margin-top:14px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][contentType='audio'] .metadataSubtitle,.player[displayType='touch'][isRemoteControl='true'] .metadataSubtitle{font-size:32px;letter-spacing:1.6;line-height:40px;margin-top:24px}}.player[displayType='touch'][contentType='audio'] .metadataSubtitle2,.player[displayType='touch'][isRemoteControl='true'] .metadataSubtitle2{color:#dfe1e5;font-size:24px;letter-spacing:1.2px;line-height:24px}.player[displayType='touch'][contentType='audio'] .metadataPlaceHolder,.player[displayType='touch'][isRemoteControl='true'] .metadataPlaceHolder{flex:none;height:100%;margin-right:5%;width:55%}.player[displayType='touch'][contentType='audio'] .metadataImageContainer,.player[displayType='touch'][isRemoteControl='true'] .metadataImageContainer{width:40%;height:100%;display:flex}.player[displayType='touch'][contentType='audio'] .metadataImageContainer .metadataImage,.player[displayType='touch'][isRemoteControl='true'] .metadataImageContainer .metadataImage{margin:auto 0 auto auto;background-size:cover;background-position:center;border-radius:15px;width:100%;height:100%;overflow:hidden;transition:width .5s ease,height .5s ease}.player[displayType='touch'][contentType='audio'] .imageLoadingAnimation,.player[displayType='touch'][isRemoteControl='true'] .imageLoadingAnimation{height:100%;animation:flashing 1.3s infinite linear;animation-play-state:paused;transition:opacity 350ms cubic-bezier(.33, 0, .67, 1);opacity:0}.player[displayType='touch'][contentType='audio'] .imageLoadingAnimation.start-animation,.player[displayType='touch'][isRemoteControl='true'] .imageLoadingAnimation.start-animation{opacity:1;animation-play-state:running}.player[displayType='touch'][contentType='audio'] .playback-logo,.player[displayType='touch'][isRemoteControl='true'] .playback-logo{font-size:36px;height:40px;line-height:40px}.player[displayType='touch'][contentType='audio'] .playback-logo.app-icon,.player[displayType='touch'][isRemoteControl='true'] .playback-logo.app-icon{height:68px}.player[contentType='video']:not([isRemoteControl='true']) .metadata{display:flex}.player[contentType='video']:not([isRemoteControl='true']) .metadataImageContainer{content:var(--album-art-image);align-self:flex-end;height:143px;margin-right:32px;width:auto}.player[contentType='video']:not([isRemoteControl='true']) .metadataImageContainer .metadataImage{display:none}.player[contentType='video']:not([isRemoteControl='true']) .metadataPlaceHolder{align-self:flex-end}.player[contentType='video']:not([isRemoteControl='true'])[state='loading'] .watermark{display:block}.player[contentType='video']:not([isRemoteControl='true'])[state='buffering'] video{display:block}.player[contentType='video']:not([isRemoteControl='true'])[state='buffering'] .gradient{opacity:.1}.player[contentType='video']:not([isRemoteControl='true'])[state='buffering'] .metadata{display:none}.player[contentType='video']:not([isRemoteControl='true'])[state='buffering'][isSeeking=false] .controlsCurTime,.player[contentType='video']:not([isRemoteControl='true'])[state='buffering'][isSeeking=false] .controlsTotalTime,.player[contentType='video']:not([isRemoteControl='true'])[state='buffering'][isSeeking=false] .controlsProgress{display:none}.player[contentType='video']:not([isRemoteControl='true'])[state='paused'] video{display:block}.player[contentType='video']:not([isRemoteControl='true'])[state='paused'][isSeeking='true'] .metadata{display:none}.player[contentType='video']:not([isRemoteControl='true'])[state='paused'] .watermark{display:block;visibility:visible}.player[contentType='video']:not([isRemoteControl='true'])[state='paused'][displayStatus=false] .gradient{opacity:.1}.player[contentType='video']:not([isRemoteControl='true'])[state='playing'] video{display:block}.player[contentType='video']:not([isRemoteControl='true'])[state='playing'] .watermark{display:block;visibility:hidden}.player[contentType='video']:not([isRemoteControl='true'])[state='playing'][isSeeking=true] .metadata{display:none}.player[contentType='video']:not([isRemoteControl='true'])[state='playing'][isPlayingBreak=false][isSeeking=false][preloadingNext=true] .gradient,.player[contentType='video']:not([isRemoteControl='true'])[state='playing'][isPlayingBreak=false][isSeeking=false][preloadingNext=true] .nextOverlay{opacity:1;visibility:var(--next-preview-visibility, visible);-webkit-transition:opacity 1s linear}.player[contentType='video']:not([isRemoteControl='true'])[isPlayingBreak=true] .breakOverlay{display:block;visibility:visible}.player[contentType='video']:not([isRemoteControl='true'])[isPlayingBreak=true] .metadata,.player[contentType='video']:not([isRemoteControl='true'])[isPlayingBreak=true] .watermark{display:none}.player[displayType='touch'][contentType='video']:not([state='idle']):not([isRemoteControl='true']) .background,.player[displayType='touch'][contentType='video']:not([state='idle']):not([isRemoteControl='true']) .foreground>*:not(video){display:none}.slideshow{--animation-duration:var(--slideshow-animation-duration, 2s);display:none;--interval-duration:var(--slideshow-interval-duration, 10s)}.slideshow .slide{background-color:#000;background-position:center center;background-repeat:no-repeat;background-size:contain;height:100%;opacity:0;position:absolute;width:100%}.slideshow .slide.visible{opacity:1;-webkit-transition-property:opacity;-webkit-transition-duration:var(--slideshow-animation-duration, 2s)}.slideshow .slide.top{z-index:100}.slideshow .slideshow-image-1{background-image:var(--slideshow-image-1)}.slideshow .slideshow-image-2{background-image:var(--slideshow-image-2)}.slideshow .slideshow-image-3{background-image:var(--slideshow-image-3)}.slideshow .slideshow-image-4{background-image:var(--slideshow-image-4)}.slideshow .slideshow-image-5{background-image:var(--slideshow-image-5)}.slideshow .slideshow-image-6{background-image:var(--slideshow-image-6)}.slideshow .slideshow-image-7{background-image:var(--slideshow-image-7)}.slideshow .slideshow-image-8{background-image:var(--slideshow-image-8)}.slideshow .slideshow-image-9{background-image:var(--slideshow-image-9)}.slideshow .slideshow-image-10{background-image:var(--slideshow-image-10)}.progressBar {  background-color: var(--progress-color, hsl(var(--theme-hue, 42), 95%, 60%));}.breakIcon {  background-color: var(--break-color, hsl(var(--theme-hue, 42), 100%, 50%));}</style><div class=player id=castPlayer live=false state=launching><div class=background></div><div class=foreground><video aria-hidden=true class=mediaElement id=castMediaElement style=height:100%;width:100%></video><div class=logo></div><div class=spinner></div><div class=splash></div><div class=slideshow id=castSlideshowElement><div class=\"slide slideshow-image-1\"></div><div class=\"slide slideshow-image-2\"></div><div class=\"slide slideshow-image-3\"></div><div class=\"slide slideshow-image-4\"></div><div class=\"slide slideshow-image-5\"></div><div class=\"slide slideshow-image-6\"></div><div class=\"slide slideshow-image-7\"></div><div class=\"slide slideshow-image-8\"></div><div class=\"slide slideshow-image-9\"></div><div class=\"slide slideshow-image-10\"></div></div><div class=gradient></div><div class=watermark></div><div class=audioPlaybackBackground></div><div class=audioPlaybackBackgroundScrim></div><div class=breakOverlay><div class=breakMetadata id=castBreakMetadata><div class=breakInfo><span class=breakIcon></span><span class=breakPosition id=castBreakPosition></span><div class=breakTime id=castBreakTime></div></div><div class=breakSkip></div></div></div><div class=overlay><div class=metadata><div class=metadataImageContainer id=castMetadataImageContainer><div class=metadataImage id=castMetadataImage><div class=imageLoadingAnimation id=castMetadataImageAnimation></div></div></div><div class=metadataPlaceHolder><div class=playback-logo></div><div class=\"videoLiveIndicator liveIndicator\"><span>\u2022 </span><span class=liveLabel></span></div><h1 class=metadataTitle id=castMetadataTitle></h1><h2 class=metadataSubtitle id=castMetadataSubtitle></h2><h2 class=metadataSubtitle2 id=castMetadataSubtitle2></h2></div></div><div class=controls><div class=\"audioLiveIndicator liveIndicator\"><div class=liveDot></div><span class=liveLabel></span></div><span class=controlsPlayPause></span><span class=controlsCurTime id=castControlsCurTime></span><span class=controlsTotalTime id=castControlsTotalTime></span><div class=controlsProgress id=castControlsProgress><div class=\"controlsProgressInner progressBar\" id=castControlsProgressInner></div><div class=controlsSeekable id=castControlsSeekable></div><div class=controlsSeekablePlayed id=castControlsSeekablePlayed></div></div></div></div><div class=nextOverlay><div class=nextMetadata><div class=nextMetadataImage id=nextMetadataImage></div><div class=nextMetadataPlaceHolder><div class=nextMetadataCountdown id=nextMetadataCountdown></div><div class=nextMetadataTitle id=nextMetadataTitle></div><div class=nextMetadataSubtitle id=nextMetadataSubtitle></div></div></div></div></div></div>";
    window.cast.A.hp = {};
    var Dq = {
        MEDIA_STATUS: "MEDIA_STATUS",
        CUSTOM_STATE: "CUSTOM_STATE",
        CLOUD_STATUS: "CLOUD_STATUS",
        QUEUE_CHANGE: "QUEUE_CHANGE",
        QUEUE_ITEMS: "QUEUE_ITEMS",
        QUEUE_ITEM_IDS: "QUEUE_ITEM_IDS",
        GET_STATUS: "GET_STATUS",
        LOAD: "LOAD",
        PAUSE: "PAUSE",
        STOP: "STOP",
        PLAY: "PLAY",
        SKIP_AD: "SKIP_AD",
        PLAY_AGAIN: "PLAY_AGAIN",
        SEEK: "SEEK",
        SET_PLAYBACK_RATE: "SET_PLAYBACK_RATE",
        SET_VOLUME: "SET_VOLUME",
        EDIT_TRACKS_INFO: "EDIT_TRACKS_INFO",
        EDIT_AUDIO_TRACKS: "EDIT_AUDIO_TRACKS",
        PRECACHE: "PRECACHE",
        PRELOAD: "PRELOAD",
        QUEUE_LOAD: "QUEUE_LOAD",
        QUEUE_INSERT: "QUEUE_INSERT",
        QUEUE_UPDATE: "QUEUE_UPDATE",
        QUEUE_REMOVE: "QUEUE_REMOVE",
        QUEUE_REORDER: "QUEUE_REORDER",
        QUEUE_NEXT: "QUEUE_NEXT",
        QUEUE_PREV: "QUEUE_PREV",
        QUEUE_GET_ITEM_RANGE: "QUEUE_GET_ITEM_RANGE",
        QUEUE_GET_ITEMS: "QUEUE_GET_ITEMS",
        QUEUE_GET_ITEM_IDS: "QUEUE_GET_ITEM_IDS",
        QUEUE_SHUFFLE: "QUEUE_SHUFFLE",
        SET_CREDENTIALS: "SET_CREDENTIALS",
        LOAD_BY_ENTITY: "LOAD_BY_ENTITY",
        USER_ACTION: "USER_ACTION",
        DISPLAY_STATUS: "DISPLAY_STATUS",
        FOCUS_STATE: "FOCUS_STATE",
        CUSTOM_COMMAND: "CUSTOM_COMMAND",
        STORE_SESSION: "STORE_SESSION",
        RESUME_SESSION: "RESUME_SESSION",
        SESSION_STATE: "SESSION_STATE",
        REFRESH_CREDENTIALS: "REFRESH_CREDENTIALS",
        PLAY_STRING: "PLAY_STRING",
        EXECUTE_ACTION_SCRIPT: "EXECUTE_ACTION_SCRIPT",
        APPLICATION_CHANGED: "APPLICATION_CHANGED"
    };
    _.w("cast.framework.messages.MessageType", Dq, void 0);
    var Eq = {
        INVALID_COMMAND: "INVALID_COMMAND",
        INVALID_PARAMS: "INVALID_PARAMS",
        INVALID_MEDIA_SESSION_ID: "INVALID_MEDIA_SESSION_ID",
        SKIP_LIMIT_REACHED: "SKIP_LIMIT_REACHED",
        NOT_SUPPORTED: "NOT_SUPPORTED",
        LANGUAGE_NOT_SUPPORTED: "LANGUAGE_NOT_SUPPORTED",
        END_OF_QUEUE: "END_OF_QUEUE",
        DUPLICATE_REQUEST_ID: "DUPLICATE_REQUEST_ID",
        APP_ERROR: "APP_ERROR",
        AUTHENTICATION_EXPIRED: "AUTHENTICATION_EXPIRED",
        PREMIUM_ACCOUNT_REQUIRED: "PREMIUM_ACCOUNT_REQUIRED",
        CONCURRENT_STREAM_LIMIT: "CONCURRENT_STREAM_LIMIT",
        PARENTAL_CONTROL_RESTRICTED: "PARENTAL_CONTROL_RESTRICTED",
        CONTENT_FILTERED: "CONTENT_FILTER",
        NOT_AVAILABLE_IN_REGION: "NOT_AVAILABLE_IN_REGION",
        CONTENT_ALREADY_PLAYING: "CONTENT_ALREADY_PLAYING",
        INVALID_REQUEST: "INVALID_REQUEST",
        GENERIC_LOAD_ERROR: "GENERIC_LOAD_ERROR"
    };
    _.w("cast.framework.messages.ErrorReason", Eq, void 0);
    _.w("cast.framework.messages.ErrorData", rj, void 0);
    _.w("cast.framework.messages.Range", sj, void 0);
    _.w("cast.framework.messages.CustomStateMessage", tj, void 0);
    _.w("cast.framework.messages.RequestData", L, void 0);
    _.q(vj, L);
    _.w("cast.framework.messages.LoadRequestData", vj, void 0);
    _.q(wj, vj);
    _.w("cast.framework.messages.PreloadRequestData", wj, void 0);
    _.q(xj, vj);
    _.w("cast.framework.messages.PrecacheRequestData", xj, void 0);
    _.q(zj, L);
    _.w("cast.framework.messages.VolumeRequestData", zj, void 0);
    _.q(Aj, L);
    _.w("cast.framework.messages.EditTracksInfoRequestData", Aj, void 0);
    _.q(Bj, L);
    _.w("cast.framework.messages.EditAudioTracksRequestData", Bj, void 0);
    _.q(Cj, L);
    _.w("cast.framework.messages.SeekRequestData", Cj, void 0);
    _.q(Dj, L);
    _.w("cast.framework.messages.SetPlaybackRateRequestData", Dj, void 0);
    _.q(Ej, L);
    _.w("cast.framework.messages.GetStatusRequestData", Ej, void 0);
    _.q(Fj, L);
    _.w("cast.framework.messages.QueueLoadRequestData", Fj, void 0);
    _.q(Gj, L);
    _.w("cast.framework.messages.QueueInsertRequestData", Gj, void 0);
    _.q(Hj, L);
    _.w("cast.framework.messages.QueueUpdateRequestData", Hj, void 0);
    _.q(Ij, L);
    _.w("cast.framework.messages.QueueRemoveRequestData", Ij, void 0);
    _.q(Jj, L);
    _.w("cast.framework.messages.QueueReorderRequestData", Jj, void 0);
    _.q(Kj, L);
    _.w("cast.framework.messages.FetchItemsRequestData", Kj, void 0);
    _.q(Lj, L);
    _.w("cast.framework.messages.GetItemsInfoRequestData", Lj, void 0);
    _.w("cast.framework.messages.SessionState", Mj, void 0);
    _.q(Nj, L);
    _.w("cast.framework.messages.StoreSessionRequestData", Nj, void 0);
    _.q(Oj, L);
    _.w("cast.framework.messages.ResumeSessionRequestData", Oj, void 0);
    _.q(Pj, L);
    _.w("cast.framework.messages.StoreSessionResponseData", Pj, void 0);
    _.w("cast.framework.messages.HlsSegmentFormat", {
        AAC: "aac",
        AC3: "ac3",
        MP3: "mp3",
        TS: "ts",
        TS_AAC: "ts_aac",
        E_AC3: "e_ac3",
        FMP4: "fmp4"
    }, void 0);
    _.w("cast.framework.messages.HlsVideoSegmentFormat", {
        MPEG2_TS: "mpeg2_ts",
        FMP4: "fmp4"
    }, void 0);
    _.w("cast.framework.messages.StreamType", {
        BUFFERED: "BUFFERED",
        LIVE: "LIVE",
        NONE: "NONE"
    }, void 0);
    _.w("cast.framework.messages.HdrType", {
        SDR: "sdr",
        HDR: "hdr",
        DV: "dv"
    }, void 0);
    var Fq = {
        INVALID_PLAYER_STATE: "INVALID_PLAYER_STATE",
        LOAD_FAILED: "LOAD_FAILED",
        LOAD_CANCELLED: "LOAD_CANCELLED",
        INVALID_REQUEST: "INVALID_REQUEST",
        ERROR: "ERROR"
    };
    _.w("cast.framework.messages.ErrorType", Fq, void 0);
    _.w("cast.framework.messages.IdleReason", {
        CANCELLED: "CANCELLED",
        INTERRUPTED: "INTERRUPTED",
        FINISHED: "FINISHED",
        ERROR: "ERROR"
    }, void 0);
    _.w("cast.framework.messages.SeekResumeState", {
        PLAYBACK_START: "PLAYBACK_START",
        PLAYBACK_PAUSE: "PLAYBACK_PAUSE"
    }, void 0);
    _.w("cast.framework.messages.PlayerState", {
        IDLE: "IDLE",
        PLAYING: "PLAYING",
        PAUSED: "PAUSED",
        BUFFERING: "BUFFERING"
    }, void 0);
    _.w("cast.framework.messages.ExtendedPlayerState", {
        LOADING: "LOADING"
    }, void 0);
    _.w("cast.framework.messages.MediaInformation", uj, void 0);
    _.w("cast.framework.messages.SeekableRange", Qj, void 0);
    _.q(Rj, Qj);
    _.w("cast.framework.messages.LiveSeekableRange", Rj, void 0);
    _.w("cast.framework.messages.QueueData", Sj, void 0);
    _.w("cast.framework.messages.QueueType", {
        ALBUM: "ALBUM",
        PLAYLIST: "PLAYLIST",
        AUDIOBOOK: "AUDIOBOOK",
        RADIO_STATION: "RADIO_STATION",
        PODCAST_SERIES: "PODCAST_SERIES",
        TV_SERIES: "TV_SERIES",
        VIDEO_PLAYLIST: "VIDEO_PLAYLIST",
        LIVE_TV: "LIVE_TV",
        MOVIE: "MOVIE"
    }, void 0);
    _.w("cast.framework.messages.ContainerType", {
        GENERIC_CONTAINER: 0,
        AUDIOBOOK_CONTAINER: 1
    }, void 0);
    _.w("cast.framework.messages.ContainerMetadata", Tj, void 0);
    _.w("cast.framework.messages.StreamingProtocolType", {
        UNKNOWN: 0,
        MPEG_DASH: 1,
        HLS: 2,
        SMOOTH_STREAMING: 3
    }, void 0);
    _.w("cast.framework.messages.MetadataType", {
        GENERIC: 0,
        MOVIE: 1,
        TV_SHOW: 2,
        MUSIC_TRACK: 3,
        PHOTO: 4,
        AUDIOBOOK_CHAPTER: 5
    }, void 0);
    _.w("cast.framework.messages.MediaMetadata", Uj, void 0);
    _.q(Vj, Uj);
    _.w("cast.framework.messages.GenericMediaMetadata", Vj, void 0);
    _.q(Wj, Uj);
    _.w("cast.framework.messages.MovieMediaMetadata", Wj, void 0);
    _.q(Xj, Uj);
    _.w("cast.framework.messages.TvShowMediaMetadata", Xj, void 0);
    _.q(Yj, Uj);
    _.w("cast.framework.messages.MusicTrackMediaMetadata", Yj, void 0);
    _.q(Zj, Uj);
    _.w("cast.framework.messages.PhotoMediaMetadata", Zj, void 0);
    _.q(ak, Tj);
    _.w("cast.framework.messages.AudiobookContainerMetadata", ak, void 0);
    _.q(bk, Uj);
    _.w("cast.framework.messages.AudiobookChapterMediaMetadata", bk, void 0);
    _.w("cast.framework.messages.Image", function(a) {
        this.url = a;
        this.width = this.height = void 0
    }, void 0);
    _.w("cast.framework.messages.Volume", yj, void 0);
    _.w("cast.framework.messages.VideoInformation", function(a, b, c) {
        this.width = a;
        this.height = b;
        this.hdrType = c
    }, void 0);
    _.w("cast.framework.messages.MediaStatus", ck, void 0);
    _.w("cast.framework.messages.ExtendedMediaStatus", function(a, b) {
        this.playerState = a;
        this.media = b
    }, void 0);
    _.q(dk, ck);
    _.w("cast.framework.messages.CloudMediaStatus", dk, void 0);
    _.w("cast.framework.messages.Command", {
        PAUSE: 1,
        SEEK: 2,
        STREAM_VOLUME: 4,
        STREAM_MUTE: 8,
        ALL_BASIC_MEDIA: 12303,
        QUEUE_NEXT: 64,
        QUEUE_PREV: 128,
        QUEUE_SHUFFLE: 256,
        QUEUE_REPEAT_ALL: 1024,
        QUEUE_REPEAT_ONE: 2048,
        QUEUE_REPEAT: 3072,
        SKIP_AD: 512,
        EDIT_TRACKS: 4096,
        PLAYBACK_RATE: 8192,
        LIKE: 16384,
        DISLIKE: 32768,
        FOLLOW: 65536,
        UNFOLLOW: 131072,
        STREAM_TRANSFER: 262144
    }, void 0);
    _.w("cast.framework.messages.TrackType", {
        TEXT: "TEXT",
        AUDIO: "AUDIO",
        VIDEO: "VIDEO"
    }, void 0);
    var Am = {
        CEA608: "text/cea608",
        TTML: "application/ttml+xml",
        VTT: "text/vtt",
        TTML_MP4: "application/mp4"
    };
    _.w("cast.framework.messages.CaptionMimeType", Am, void 0);
    _.w("cast.framework.messages.TextTrackType", {
        SUBTITLES: "SUBTITLES",
        CAPTIONS: "CAPTIONS",
        DESCRIPTIONS: "DESCRIPTIONS",
        CHAPTERS: "CHAPTERS",
        METADATA: "METADATA"
    }, void 0);
    _.w("cast.framework.messages.TextTrackEdgeType", {
        NONE: "NONE",
        OUTLINE: "OUTLINE",
        DROP_SHADOW: "DROP_SHADOW",
        RAISED: "RAISED",
        DEPRESSED: "DEPRESSED"
    }, void 0);
    _.w("cast.framework.messages.TextTrackWindowType", {
        NONE: "NONE",
        NORMAL: "NORMAL",
        ROUNDED_CORNERS: "ROUNDED_CORNERS"
    }, void 0);
    _.w("cast.framework.messages.TextTrackFontGenericFamily", {
        SANS_SERIF: "SANS_SERIF",
        MONOSPACED_SANS_SERIF: "MONOSPACED_SANS_SERIF",
        SERIF: "SERIF",
        MONOSPACED_SERIF: "MONOSPACED_SERIF",
        CASUAL: "CASUAL",
        CURSIVE: "CURSIVE",
        SMALL_CAPITALS: "SMALL_CAPITALS"
    }, void 0);
    _.w("cast.framework.messages.TextTrackFontStyle", {
        NORMAL: "NORMAL",
        BOLD: "BOLD",
        BOLD_ITALIC: "BOLD_ITALIC",
        ITALIC: "ITALIC"
    }, void 0);
    _.w("cast.framework.messages.Track", function(a, b) {
        this.trackId = a;
        this.trackContentType = this.trackContentId = void 0;
        this.type = b;
        this.customData = this.subtype = this.language = this.name = void 0
    }, void 0);
    _.w("cast.framework.messages.TextTrackStyle", function() {
        this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = this.fontScale = void 0
    }, void 0);
    _.w("cast.framework.messages.RepeatMode", {
        REPEAT_OFF: "REPEAT_OFF",
        REPEAT_ALL: "REPEAT_ALL",
        REPEAT_SINGLE: "REPEAT_SINGLE",
        REPEAT_ALL_AND_SHUFFLE: "REPEAT_ALL_AND_SHUFFLE"
    }, void 0);
    _.w("cast.framework.messages.QueueChangeType", {
        INSERT: "INSERT",
        REMOVE: "REMOVE",
        ITEMS_CHANGE: "ITEMS_CHANGE",
        UPDATE: "UPDATE",
        NO_CHANGE: "NO_CHANGE"
    }, void 0);
    _.w("cast.framework.messages.QueueChange", function() {
        this.type = "QUEUE_CHANGE";
        this.sequenceNumber = this.insertBefore = this.itemIds = this.changeType = this.requestId = void 0
    }, void 0);
    _.w("cast.framework.messages.ItemsInfo", function() {
        this.type = "QUEUE_ITEMS";
        this.items = this.requestId = void 0
    }, void 0);
    _.w("cast.framework.messages.QueueIds", function() {
        this.type = "QUEUE_ITEM_IDS";
        this.itemIds = this.requestId = void 0
    }, void 0);
    _.w("cast.framework.messages.GetStatusOptions", {
        NO_METADATA: 1,
        NO_QUEUE_ITEMS: 2
    }, void 0);
    _.w("cast.framework.messages.Break", _.ek, void 0);
    _.w("cast.framework.messages.BreakClip", _.fk, void 0);
    _.w("cast.framework.messages.VastAdsRequest", function() {
        this.adsResponse = this.adTagUrl = void 0
    }, void 0);
    _.w("cast.framework.messages.BreakStatus", function(a, b) {
        this.currentBreakTime = a;
        this.currentBreakClipTime = b;
        this.whenSkippable = this.breakClipId = this.breakId = void 0
    }, void 0);
    _.w("cast.framework.messages.UserActionState", function(a) {
        this.userAction = a;
        this.customData = void 0
    }, void 0);
    _.w("cast.framework.messages.ContentFilteringMode", {
        FILTER_EXPLICIT: "FILTER_EXPLICIT"
    }, void 0);
    _.w("cast.framework.messages.LoadOptions", function() {
        this.contentFilteringMode = void 0
    }, void 0);
    _.w("cast.framework.messages.PlayStringId", {
        FREE_TRIAL_ABOUT_TO_EXPIRE: "FREE_TRIAL_ABOUT_TO_EXPIRE",
        SUBSCRIPTION_ABOUT_TO_EXPIRE: "SUBSCRIPTION_ABOUT_TO_EXPIRE",
        STREAM_HIJACKED: "STREAM_HIJACKED",
        PLAYING_ALTERNATE_MIX: "PLAYING_ALTERNATE_MIX"
    }, void 0);
    _.q(gk, L);
    _.w("cast.framework.messages.SetCredentialsRequestData", gk, void 0);
    _.q(hk, L);
    _.w("cast.framework.messages.LoadByEntityRequestData", hk, void 0);
    _.q(ik, L);
    _.w("cast.framework.messages.CustomCommandRequestData", ik, void 0);
    _.q(jk, L);
    _.w("cast.framework.messages.RefreshCredentialsRequestData", jk, void 0);
    _.q(kk, L);
    _.w("cast.framework.messages.PlayStringRequestData", kk, void 0);
    _.q(lk, L);
    _.w("cast.framework.messages.ExecuteActionScriptRequestData", lk, void 0);
    _.w("cast.framework.messages.ScriptAction", function(a, b) {
        this.app_id = a;
        this.action = b;
        this.custom_data = void 0
    }, void 0);
    _.w("cast.framework.messages.UserAction", {
        LIKE: "LIKE",
        DISLIKE: "DISLIKE",
        FOLLOW: "FOLLOW",
        UNFOLLOW: "UNFOLLOW",
        FLAG: "FLAG",
        SKIP_AD: "SKIP_AD"
    }, void 0);
    _.w("cast.framework.messages.UserActionContext", {
        UNKNOWN_CONTEXT: "UNKNOWN_CONTEXT",
        TRACK: "TRACK",
        ALBUM: "ALBUM",
        ARTIST: "ARTIST",
        PLAYLIST: "PLAYLIST",
        EPISODE: "EPISODE",
        SERIES: "SERIES",
        MOVIE: "MOVIE",
        CHANNEL: "CHANNEL",
        TEAM: "TEAM",
        PLAYER: "PLAYER",
        COACH: "COACH"
    }, void 0);
    _.q(mk, L);
    _.w("cast.framework.messages.UserActionRequestData", mk, void 0);
    _.q(nk, L);
    _.w("cast.framework.messages.DisplayStatusRequestData", nk, void 0);
    _.q(ok, L);
    _.w("cast.framework.messages.FocusStateRequestData", ok, void 0);
    _.w("cast.framework.messages.FocusState", {
        IN_FOCUS: "IN_FOCUS",
        NOT_IN_FOCUS: "NOT_IN_FOCUS"
    }, void 0);
    _.w("cast.framework.messages.QueueItem", function(a) {
        this.itemId = a;
        this.customData = this.activeTrackIds = this.preloadTime = this.playbackDuration = this.startTime = this.autoplay = this.media = void 0
    }, void 0);
    window.cast.A.ma = {};
    _.w("cast.framework.system.Event", pk, void 0);
    _.w("cast.framework.system.MessageType", {
        STRING: "STRING",
        JSON: "JSON"
    }, void 0);
    _.w("cast.framework.system.LaunchedFrom", {
        UNKNOWN: "UNKNOWN",
        DIAL: "DIAL",
        CAST: "CAST",
        CLOUD: "CLOUD"
    }, void 0);
    _.w("cast.framework.system.ApplicationData", function() {
        this.iconUrl = this.name = this.id = "";
        this.sessionId = 0;
        this.namespaces = [];
        this.launchingSenderId = "";
        this.launchedFrom = "UNKNOWN"
    }, void 0);
    _.w("cast.framework.system.SystemVolumeData", function() {
        this.level = 1;
        this.muted = !1
    }, void 0);
    _.w("cast.framework.system.Sender", function() {
        this.userAgent = this.id = "";
        this.largeMessageSupported = void 0
    }, void 0);
    _.w("cast.framework.system.VisibilityState", {
        VISIBLE: "visible",
        NOT_VISIBLE: "notvisible",
        UNKNOWN: "unknown"
    }, void 0);
    _.w("cast.framework.system.StandbyState", {
        STANDBY: "standby",
        NOT_STANDBY: "notstandby",
        UNKNOWN: "unknown"
    }, void 0);
    _.w("cast.framework.system.SystemState", {
        NOT_STARTED: "notstarted",
        STARTING_IN_BACKGROUND: "startinginbackground",
        STARTING: "starting",
        READY: "ready",
        STOPPING_IN_BACKGROUND: "stoppinginbackground",
        STOPPING: "stopping"
    }, void 0);
    _.w("cast.framework.system.DeviceCapabilities", {
        AUDIO_ASSISTANT: "audio_assistant",
        BLUETOOTH_SUPPORTED: "bluetooth_supported",
        DISPLAY_SUPPORTED: "display_supported",
        HI_RES_AUDIO_SUPPORTED: "hi_res_audio_supported",
        IS_DV_SUPPORTED: "is_dv_supported",
        IS_HDR_SUPPORTED: "is_hdr_supported",
        TOUCH_INPUT_SUPPORTED: "touch_input_supported",
        IS_GROUP: "is_group"
    }, void 0);
    _.w("cast.framework.system.EventType", {
        READY: "ready",
        SHUTDOWN: "shutdown",
        SENDER_CONNECTED: "senderconnected",
        SENDER_DISCONNECTED: "senderdisconnected",
        ERROR: "error",
        SYSTEM_VOLUME_CHANGED: "systemvolumechanged",
        VISIBILITY_CHANGED: "visibilitychanged",
        STANDBY_CHANGED: "standbychanged",
        MAX_VIDEO_RESOLUTION_CHANGED: "maxvideoresolutionchanged",
        FEEDBACK_STARTED: "feedbackstarted"
    }, void 0);
    _.w("cast.framework.system.DisconnectReason", {
        REQUESTED_BY_SENDER: "requested_by_sender",
        ERROR: "error",
        UNKNOWN: "unknown"
    }, void 0);
    _.q(qk, pk);
    _.w("cast.framework.system.SenderDisconnectedEvent", qk, void 0);
    _.q(rk, pk);
    _.w("cast.framework.system.SenderConnectedEvent", rk, void 0);
    _.q(sk, pk);
    _.w("cast.framework.system.VisibilityChangedEvent", sk, void 0);
    _.q(tk, pk);
    _.w("cast.framework.system.StandbyChangedEvent", tk, void 0);
    _.q(uk, pk);
    _.w("cast.framework.system.SystemVolumeChangedEvent", uk, void 0);
    _.q(vk, pk);
    _.w("cast.framework.system.ReadyEvent", vk, void 0);
    _.q(wk, pk);
    _.w("cast.framework.system.ShutdownEvent", wk, void 0);
    _.q(xk, pk);
    _.w("cast.framework.system.FeedbackStartedEvent", xk, void 0);
    _.q(yk, pk);
    _.w("cast.framework.system.MaxVideoResolutionChangedEvent", yk, void 0);
    window.cast.Pi = 1525977556;
    window.cast.A.VERSION = "3.0.0033";
    _.w("cast.framework.VERSION", window.cast.A.VERSION, void 0);
    var Gq = {
            HLS: "application/x-mpegurl",
            Ao: "application/vnd.apple.mpegurl",
            Bo: "audio/mpegurl",
            Co: "audio/x-mpegurl",
            uo: "application/dash+xml",
            So: "application/vnd.ms-sstr+xml"
        },
        Tl = {
            lo: "audio_video",
            ko: "audio_only",
            IMAGE: "image"
        };
    window.cast.A.R = {};
    window.cast.A.R.Aj = "Skippable after {SECONDS} sec(s)";
    window.cast.A.R.Oi = new hh(window.cast.A.R.Aj);
    window.cast.A.R.lf = function(a) {
        return lh(window.cast.A.R.Oi, {
            SECONDS: a
        })
    };
    window.cast.A.R.Ej = "Playing in {SECONDS} sec(s)";
    window.cast.A.R.Vj = new hh(window.cast.A.R.Ej);
    window.cast.A.R.mf = function(a) {
        return lh(window.cast.A.R.Vj, {
            SECONDS: a
        })
    };
    window.cast.A.K = {};
    window.cast.A.K.hh = function(a) {
        return a
    };
    window.cast.A.K.Gl = function(a) {
        return a
    };
    window.cast.A.K.Bl = function(a) {
        return a
    };
    window.cast.A.K.Cl = function(a) {
        return a
    };
    window.cast.A.K.ql = function(a) {
        return a
    };
    window.cast.A.K.Dl = function(a) {
        return a
    };
    window.cast.A.K.Ai = function(a) {
        return a
    };
    window.cast.A.K.Rn = function(a) {
        return a
    };
    window.cast.A.K.Qn = function(a) {
        return a
    };
    window.cast.A.K.Sn = function(a) {
        return a
    };
    window.cast.A.K.Pn = function(a) {
        return a
    };
    window.cast.A.K.tl = function(a) {
        return a
    };
    window.cast.A.K.ul = function(a) {
        return a
    };
    window.cast.A.K.Un = function(a) {
        return a
    };
    window.cast.A.K.ap = function(a) {
        return a
    };
    window.cast.A.K.Jc = function(a) {
        return a
    };
    window.cast.A.K.vl = function(a) {
        return a
    };
    window.cast.A.K.Vn = function(a) {
        return a
    };
    window.cast.A.K.Tn = function(a) {
        return a
    };
    window.cast.A.K.$o = function(a) {
        return a
    };
    window.cast.A.K.On = function(a) {
        return a
    };
    window.cast.A.K.Nn = function(a) {
        return a
    };
    window.cast.A.K.sl = function(a) {
        return a
    };
    window.cast.A.K.xl = function(a) {
        return a
    };
    window.cast.A.K.wl = function(a) {
        return a
    };
    window.cast.A.K.gh = function(a) {
        return a
    };
    window.cast.A.K.Wn = function(a) {
        return a
    };
    window.cast.A.K.Fl = function(a) {
        return a
    };
    window.cast.A.K.jp = function(a) {
        return a
    };
    window.cast.A.K.ih = function(a) {
        return a
    };
    window.cast.A.K.tg = function(a) {
        return a
    };
    window.cast.A.K.El = function(a) {
        return a
    };
    window.cast.A.K.Bi = function(a) {
        return a
    };
    window.cast.A.K.Mn = function(a) {
        return a
    };
    window.cast.A.K.ip = function(a) {
        return a
    };
    window.cast.A.K.yl = function(a) {
        return a
    };
    window.cast.A.K.zl = function(a) {
        return a
    };
    window.cast.A.K.zi = function(a) {
        return a
    };
    window.cast.A.K.yi = function(a) {
        return a
    };
    window.cast.A.K.Xn = function(a) {
        return a
    };
    window.cast.A.K.Al = function(a) {
        return a
    };
    window.cast.A.K.rl = function(a) {
        return a
    };
    window.cast.A.media = {};
    window.cast.A.media.Da = {};
    window.cast.A.media.Da.getTrackById = function(a, b) {
        return b.find(function(b) {
            return b.trackId == a
        }) || null
    };
    window.cast.A.media.Da.rf = function(a, b) {
        return b.filter(function(b) {
            return b.language && window.cast.receiver.Bc(b.language, a)
        })
    };
    window.cast.A.media.Da.xh = function(a, b) {
        return 0 !== window.cast.A.media.Da.rf(a, b).length
    };
    window.cast.A.media.Da.ho = function(a) {
        if (a.find(function(a) {
                return "TEXT" != a.type
            })) throw Error("Type is not matching.");
    };
    window.cast.A.media.Da.Hi = function(a, b) {
        if (b.filter(function(b) {
                return a.includes(b.trackId)
            }).length !== a.length) throw Error("Invalid id.");
    };
    _.w("cast.framework.AudioTracksManager", Bk, void 0);
    Bk.prototype.reset = function() {
        this.g = null
    };
    Bk.prototype.getTracks = function() {
        Dk(this);
        var a = Ck(this.g).getTracks("AUDIO");
        return window.cast.A.K.ih(a)
    };
    Bk.prototype.getTracks = Bk.prototype.getTracks;
    Bk.prototype.getTrackById = function(a) {
        Dk(this);
        if (0 > a) throw Error("Invalid track id.");
        return window.cast.A.media.Da.getTrackById(a, this.getTracks())
    };
    Bk.prototype.getTrackById = Bk.prototype.getTrackById;
    Bk.prototype.Yd = function(a) {
        if (!a) throw Error("Need language as input.");
        return window.cast.A.media.Da.rf(a, this.getTracks())
    };
    Bk.prototype.getTracksByLanguage = Bk.prototype.Yd;
    Bk.prototype.Jl = function() {
        Dk(this);
        var a = Ck(this.g).h;
        return null === a ? null : this.getTrackById(a)
    };
    Bk.prototype.getActiveTrack = Bk.prototype.Jl;
    Bk.prototype.Hl = function() {
        Dk(this);
        return Ck(this.g).h
    };
    Bk.prototype.getActiveId = Bk.prototype.Hl;
    Bk.prototype.Bn = function(a) {
        Dk(this);
        if (null === a) _.E(Ak, "No valid id, persist the current behavior.");
        else {
            window.cast.A.media.Da.Hi([a], this.getTracks());
            var b = Ck(this.g).o.sort();
            b = b.concat(a);
            xl(Ck(this.g), b);
            this.h && vg(this.h, Ck(this.g).Ga(), !1)
        }
    };
    Bk.prototype.setActiveById = Bk.prototype.Bn;
    Bk.prototype.Ae = function(a) {
        Dk(this);
        if (!window.cast.A.media.Da.xh(a, this.getTracks())) throw Error("No matching track.");
        Al(Ck(this.g), a);
        this.h && vg(this.h, Ck(this.g).Ga(), !1)
    };
    Bk.prototype.setActiveByLanguage = Bk.prototype.Ae;
    Bk.prototype.Ga = function() {
        Dk(this);
        return Ck(this.g).Ga()
    };
    var Ak = _.B("cast.framework.AudioTracksManager");
    _.w("cast.framework.NetworkRequestInfo", function() {
        this.headers = this.url = null;
        this.withCredentials = !1;
        this.content = null
    }, void 0);
    window.cast.A.O = {};
    _.w("cast.framework.ui.UiConfig", function() {}, void 0);
    _.w("cast.framework.CastReceiverOptions", Ek, void 0);
    _.w("cast.framework.PlaybackConfig", Fk, void 0);
    _.w("cast.framework.QueueManager", Hk, void 0);
    Hk.prototype.Gn = function(a) {
        this.h = a;
        this.g && (this.g.P = this.h)
    };
    Hk.prototype.setQueueStatusLimit = Hk.prototype.Gn;
    Hk.prototype.Vb = function() {
        var a = [],
            b = cg(this.g);
        b && (a = b.Vb(!0));
        return window.cast.A.K.zl(a)
    };
    Hk.prototype.getItems = Hk.prototype.Vb;
    Hk.prototype.Eb = function() {
        var a = null,
            b = cg(this.g);
        b && (a = b.Eb());
        return window.cast.A.K.yl(a)
    };
    Hk.prototype.getCurrentItem = Hk.prototype.Eb;
    Hk.prototype.Xc = function() {
        var a = -1,
            b = cg(this.g);
        b && (a = b.Xc());
        return a
    };
    Hk.prototype.getCurrentItemIndex = Hk.prototype.Xc;
    Hk.prototype.Ff = function(a, b) {
        a = new Mg(window.cast.A.K.zi(a));
        a.insertBefore = b;
        this.g.hb(a)
    };
    Hk.prototype.insertItems = Hk.prototype.Ff;
    Hk.prototype.dg = function(a) {
        this.g.hb(new Og(a))
    };
    Hk.prototype.removeItems = Hk.prototype.dg;
    Hk.prototype.wg = function(a) {
        var b = new Ng;
        b.items = window.cast.A.K.zi(a);
        this.g.hb(b)
    };
    Hk.prototype.updateItems = Hk.prototype.wg;
    _.w("cast.framework.Stats", function() {}, void 0);
    _.w("cast.framework.TextTracksManager", M, void 0);
    M.prototype.reset = function() {
        this.g = null
    };
    M.prototype.getTracks = function() {
        Jk(this);
        var a = Ck(this.g).getTracks("TEXT");
        return window.cast.A.K.ih(a)
    };
    M.prototype.getTracks = M.prototype.getTracks;
    M.prototype.getTrackById = function(a) {
        Jk(this);
        if (0 > a) throw Error("Invalid input.");
        return window.cast.A.media.Da.getTrackById(a, this.getTracks())
    };
    M.prototype.getTrackById = M.prototype.getTrackById;
    M.prototype.Yd = function(a) {
        if (!a) throw Error("Need language as input.");
        return window.cast.A.media.Da.rf(a, this.getTracks())
    };
    M.prototype.getTracksByLanguage = M.prototype.Yd;
    M.prototype.lh = function() {
        var a = this.getTracks(),
            b = Ck(this.g).o.sort(),
            c = [];
        a = _.n(a);
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, b.includes(d.trackId) && c.push(d);
        return c
    };
    M.prototype.getActiveTracks = M.prototype.lh;
    M.prototype.Il = function() {
        Jk(this);
        return Ck(this.g).o.sort()
    };
    M.prototype.getActiveIds = M.prototype.Il;
    M.prototype.sc = function() {
        Jk(this);
        return window.cast.A.K.Fl(Ck(this.g).sc("TEXT"))
    };
    M.prototype.createTrack = M.prototype.sc;
    M.prototype.lk = function(a) {
        Jk(this);
        window.cast.A.media.Da.ho(a);
        vl(Ck(this.g), window.cast.A.K.tg(a));
        this.h && vg(this.h, Ck(this.g).Ga())
    };
    M.prototype.addTracks = M.prototype.lk;
    M.prototype.Cn = function(a) {
        Jk(this);
        null === a || 0 === a.length ? xl(Ck(this.g), []) : (window.cast.A.media.Da.Hi(a, this.getTracks()), xl(Ck(this.g), a), this.h && vg(this.h, Ck(this.g).Ga(), !1))
    };
    M.prototype.setActiveByIds = M.prototype.Cn;
    M.prototype.Ae = function(a) {
        Jk(this);
        if (!window.cast.A.media.Da.xh(a, this.getTracks())) throw Error("No matching track.");
        yl(Ck(this.g), a);
        this.h && vg(this.h, Ck(this.g).Ga(), !1)
    };
    M.prototype.setActiveByLanguage = M.prototype.Ae;
    M.prototype.yb = function(a) {
        Jk(this);
        Ck(this.g).yb(window.cast.A.K.Bi(a));
        this.h && vg(this.h, Ck(this.g).Ga())
    };
    M.prototype.setTextTrackStyle = M.prototype.yb;
    M.prototype.Yb = function() {
        Jk(this);
        var a = Ck(this.g).Yb();
        if (_.r(a)) return window.cast.A.K.El(a)
    };
    M.prototype.getTextTracksStyle = M.prototype.Yb;
    M.prototype.Ga = function() {
        Jk(this);
        return Ck(this.g).Ga()
    };
    window.cast.A.common = {};
    Kk.prototype.kc = function(a, b) {
        this.h[a] = b || _.x
    };
    Kk.prototype.w = function(a) {
        var b = a.type;
        _.F(Hq, "onEvent for " + b);
        var c = this.h[b],
            d = this.l[b],
            e = this.o[b];
        d && d(a);
        c && (a = c(a));
        return window.Promise.resolve(a).then(function(a) {
            return a && a.type == b && e ? e(a) : a
        })
    };
    var Hq = _.B("cast.framework.common.EventHandler");
    window.cast.A.wa = {};
    var Qk = _.B("cast.framework.events.EventTarget");
    _.q(Pk, _.xb);
    _.h = Pk.prototype;
    _.h.addEventListener = function(a, b, c) {
        if (this.tb()) _.C(Qk, "Trying to add an event listener for " + a + " to a disposed EventTarget");
        else {
            this.g[a] || (this.g[a] = []);
            for (var d = _.n(this.g[a]), e = d.next(); !e.done; e = d.next())
                if (e.value.handleEvent === b) return;
            this.g[a].push(new Ok(b, c))
        }
    };
    _.h.removeEventListener = function(a, b) {
        if (this.tb()) _.C(Qk, "Trying to remove an event listener for " + a + " from a disposed EventTarget");
        else if (a = this.g[a]) {
            var c = a.findIndex(function(a) {
                return a.handleEvent === b
            });
            0 <= c && a.splice(c, 1)
        }
    };
    _.h.De = function(a) {
        this.tb() ? _.C(Qk, "Trying to set a parent EventTarget for a disposed EventTarget") : this.l = a
    };
    _.h.dispatchEvent = function(a) {
        var b = a.type;
        this.tb() ? _.C(Qk, "Trying to dispatch an event (" + a.type + ") on a disposed EventTarget") : (this.l && this.l.dispatchEvent(a), Rk(this, b, a), Rk(this, "*", a))
    };
    _.h.ea = function() {
        this.g = {};
        this.h = this.l = null
    };
    var Sn = {
        ALL: "*",
        ABORT: "ABORT",
        CAN_PLAY: "CAN_PLAY",
        CAN_PLAY_THROUGH: "CAN_PLAY_THROUGH",
        DURATION_CHANGE: "DURATION_CHANGE",
        EMPTIED: "EMPTIED",
        ENDED: "ENDED",
        LOADED_DATA: "LOADED_DATA",
        LOADED_METADATA: "LOADED_METADATA",
        LOAD_START: "LOAD_START",
        PAUSE: "PAUSE",
        PLAY: "PLAY",
        PLAYING: "PLAYING",
        PROGRESS: "PROGRESS",
        RATE_CHANGE: "RATE_CHANGE",
        SEEKED: "SEEKED",
        SEEKING: "SEEKING",
        STALLED: "STALLED",
        TIME_UPDATE: "TIME_UPDATE",
        SUSPEND: "SUSPEND",
        WAITING: "WAITING",
        BITRATE_CHANGED: "BITRATE_CHANGED",
        BREAK_STARTED: "BREAK_STARTED",
        BREAK_ENDED: "BREAK_ENDED",
        BREAK_CLIP_LOADING: "BREAK_CLIP_LOADING",
        BREAK_CLIP_STARTED: "BREAK_CLIP_STARTED",
        BREAK_CLIP_ENDED: "BREAK_CLIP_ENDED",
        BUFFERING: "BUFFERING",
        CACHE_LOADED: "CACHE_LOADED",
        CACHE_HIT: "CACHE_HIT",
        CACHE_INSERTED: "CACHE_INSERTED",
        CLIP_STARTED: "CLIP_STARTED",
        CLIP_ENDED: "CLIP_ENDED",
        EMSG: "EMSG",
        ERROR: "ERROR",
        ID3: "ID3",
        MEDIA_STATUS: "MEDIA_STATUS",
        CUSTOM_STATE: "CUSTOM_STATE",
        MEDIA_INFORMATION_CHANGED: "MEDIA_INFORMATION_CHANGED",
        MEDIA_FINISHED: "MEDIA_FINISHED",
        PLAYER_PRELOADING: "PLAYER_PRELOADING",
        PLAYER_PRELOADING_CANCELLED: "PLAYER_PRELOADING_CANCELLED",
        PLAYER_LOAD_COMPLETE: "PLAYER_LOAD_COMPLETE",
        PLAYER_LOADING: "PLAYER_LOADING",
        SEGMENT_DOWNLOADED: "SEGMENT_DOWNLOADED",
        REQUEST_SEEK: "REQUEST_SEEK",
        REQUEST_LOAD: "REQUEST_LOAD",
        REQUEST_STOP: "REQUEST_STOP",
        REQUEST_PAUSE: "REQUEST_PAUSE",
        REQUEST_PRECACHE: "REQUEST_PRECACHE",
        REQUEST_PLAY: "REQUEST_PLAY",
        REQUEST_SKIP_AD: "REQUEST_SKIP_AD",
        REQUEST_PLAY_AGAIN: "REQUEST_PLAY_AGAIN",
        REQUEST_PLAYBACK_RATE_CHANGE: "REQUEST_PLAYBACK_RATE_CHANGE",
        REQUEST_VOLUME_CHANGE: "REQUEST_VOLUME_CHANGE",
        REQUEST_EDIT_TRACKS_INFO: "REQUEST_EDIT_TRACKS_INFO",
        REQUEST_EDIT_AUDIO_TRACKS: "REQUEST_EDIT_AUDIO_TRACKS",
        REQUEST_SET_CREDENTIALS: "REQUEST_SET_CREDENTIALS",
        REQUEST_LOAD_BY_ENTITY: "REQUEST_LOAD_BY_ENTITY",
        REQUEST_USER_ACTION: "REQUEST_USER_ACTION",
        REQUEST_DISPLAY_STATUS: "REQUEST_DISPLAY_STATUS",
        REQUEST_CUSTOM_COMMAND: "REQUEST_CUSTOM_COMMAND",
        REQUEST_FOCUS_STATE: "REQUEST_FOCUS_STATE",
        REQUEST_QUEUE_LOAD: "REQUEST_QUEUE_LOAD",
        REQUEST_QUEUE_INSERT: "REQUEST_QUEUE_INSERT",
        REQUEST_QUEUE_UPDATE: "REQUEST_QUEUE_UPDATE",
        REQUEST_QUEUE_REMOVE: "REQUEST_QUEUE_REMOVE",
        REQUEST_QUEUE_REORDER: "REQUEST_QUEUE_REORDER",
        REQUEST_QUEUE_GET_ITEM_RANGE: "REQUEST_QUEUE_GET_ITEM_RANGE",
        REQUEST_QUEUE_GET_ITEMS: "REQUEST_QUEUE_GET_ITEMS",
        REQUEST_QUEUE_GET_ITEM_IDS: "REQUEST_QUEUE_GET_ITEM_IDS",
        INBAND_TRACK_ADDED: "INBAND_TRACK_ADDED",
        Go: "LIVE_IS_MOVING_WINDOW_CHANGED",
        LIVE_ENDED: "LIVE_ENDED",
        REQUEST_STORE_SESSION: "REQUEST_STORE_SESSION",
        REQUEST_RESUME_SESSION: "REQUEST_RESUME_SESSION"
    };
    _.w("cast.framework.events.EventType", Sn, void 0);
    window.cast.A.common.ia = {};
    var T = {},
        Iq = (T["*"] = 1, T.ABORT = 2, T.CAN_PLAY = 3, T.CAN_PLAY_THROUGH = 4, T.DURATION_CHANGE = 5, T.EMPTIED = 6, T.ENDED = 7, T.LOADED_DATA = 8, T.LOADED_METADATA = 9, T.LOAD_START = 10, T.PAUSE = 11, T.PLAY = 12, T.PLAYING = 13, T.PROGRESS = 14, T.RATE_CHANGE = 15, T.SEEKED = 16, T.SEEKING = 17, T.STALLED = 18, T.TIME_UPDATE = 19, T.SUSPEND = 20, T.WAITING = 21, T.BITRATE_CHANGED = 22, T.BREAK_STARTED = 23, T.BREAK_ENDED = 24, T.BREAK_CLIP_LOADING = 25, T.BREAK_CLIP_STARTED = 26, T.BREAK_CLIP_ENDED = 27, T.BUFFERING = 28, T.CACHE_LOADED = 29, T.CACHE_HIT = 30, T.CACHE_INSERTED = 31,
            T.CLIP_STARTED = 32, T.CLIP_ENDED = 33, T.EMSG = 34, T.ERROR = 35, T.ID3 = 36, T.MEDIA_STATUS = 37, T.MEDIA_FINISHED = 38, T.PLAYER_PRELOADING = 39, T.PLAYER_PRELOADING_CANCELLED = 40, T.PLAYER_LOAD_COMPLETE = 41, T.PLAYER_LOADING = 42, T.SEGMENT_DOWNLOADED = 43, T.REQUEST_SEEK = 44, T.REQUEST_LOAD = 45, T.REQUEST_STOP = 46, T.REQUEST_PAUSE = 47, T.REQUEST_PLAY = 48, T.REQUEST_SKIP_AD = 49, T.REQUEST_PLAY_AGAIN = 50, T.REQUEST_PLAYBACK_RATE_CHANGE = 51, T.REQUEST_VOLUME_CHANGE = 52, T.REQUEST_EDIT_TRACKS_INFO = 53, T.REQUEST_EDIT_AUDIO_TRACKS = 54, T.REQUEST_SET_CREDENTIALS =
            55, T.REQUEST_LOAD_BY_ENTITY = 56, T.REQUEST_USER_ACTION = 57, T.REQUEST_DISPLAY_STATUS = 58, T.REQUEST_CUSTOM_COMMAND = 59, T.REQUEST_FOCUS_STATE = 60, T.REQUEST_QUEUE_LOAD = 61, T.REQUEST_QUEUE_INSERT = 62, T.REQUEST_QUEUE_UPDATE = 63, T.REQUEST_QUEUE_REMOVE = 64, T.REQUEST_QUEUE_REORDER = 65, T.REQUEST_QUEUE_GET_ITEM_RANGE = 66, T.REQUEST_QUEUE_GET_ITEMS = 67, T.REQUEST_QUEUE_GET_ITEM_IDS = 68, T.INBAND_TRACK_ADDED = 69, T.REQUEST_PRECACHE = 70, T.LIVE_IS_MOVING_WINDOW_CHANGED = 71, T.LIVE_ENDED = 72, T.MEDIA_INFORMATION_CHANGED = 73, T.REQUEST_STORE_SESSION =
            74, T.REQUEST_RESUME_SESSION = 75, T.CUSTOM_STATE = 76, T),
        U = {},
        Jq = (U.MEDIA_STATUS = 1, U.CLOUD_STATUS = 2, U.QUEUE_CHANGE = 3, U.QUEUE_ITEMS = 4, U.QUEUE_ITEM_IDS = 5, U.GET_STATUS = 6, U.LOAD = 7, U.PAUSE = 8, U.STOP = 9, U.PLAY = 10, U.SKIP_AD = 11, U.PLAY_AGAIN = 12, U.SEEK = 13, U.SET_PLAYBACK_RATE = 14, U.SET_VOLUME = 15, U.EDIT_TRACKS_INFO = 16, U.EDIT_AUDIO_TRACKS = 17, U.PRECACHE = 18, U.PRELOAD = 19, U.QUEUE_LOAD = 20, U.QUEUE_INSERT = 21, U.QUEUE_UPDATE = 22, U.QUEUE_REMOVE = 23, U.QUEUE_REORDER = 24, U.QUEUE_NEXT = 25, U.QUEUE_PREV = 26, U.QUEUE_GET_ITEM_RANGE = 27, U.QUEUE_GET_ITEMS =
            28, U.QUEUE_GET_ITEM_IDS = 29, U.QUEUE_SHUFFLE = 30, U.SET_CREDENTIALS = 31, U.LOAD_BY_ENTITY = 32, U.USER_ACTION = 33, U.DISPLAY_STATUS = 34, U.FOCUS_STATE = 35, U.CUSTOM_COMMAND = 36, U.STORE_SESSION = 37, U.RESUME_SESSION = 38, U.SESSION_STATE = 39, U),
        Kq = {},
        Lq = (Kq.INVALID_COMMAND = 0, Kq.INVALID_PARAMS = 1, Kq.INVALID_MEDIA_SESSION_ID = 2, Kq.SKIP_LIMIT_REACHED = 3, Kq.NOT_SUPPORTED = 4, Kq.LANGUAGE_NOT_SUPPORTED = 5, Kq.END_OF_QUEUE = 6, Kq.DUPLICATE_REQUEST_ID = 7, Kq.APP_ERROR = 8, Kq.AUTHENTICATION_EXPIRED = 9, Kq.PREMIUM_ACCOUNT_REQUIRED = 10, Kq.CONCURRENT_STREAM_LIMIT =
            11, Kq.PARENTAL_CONTROL_RESTRICTED = 12, Kq.NOT_AVAILABLE_IN_REGION = 13, Kq.CONTENT_ALREADY_PLAYING = 14, Kq.INVALID_REQUEST = 15, Kq.GENERIC_LOAD_ERROR = 16, Kq);
    window.cast.A.common.ia.yd = {
        kj: 1,
        bk: 2,
        dk: 3,
        ek: 4
    };
    window.cast.A.common.ia.mh = function(a) {
        return Iq[a]
    };
    window.cast.A.common.ia.Ml = function(a) {
        return Jq[a]
    };
    window.cast.A.common.ia.Xl = function(a) {
        return Lq[void 0 === a ? "GENERIC_LOAD_ERROR" : a]
    };
    window.cast.A.common.ia.ym = function() {
        mj("Cast.CAF.Version", Number(window.cast.A.VERSION.split(".")[2]))
    };
    window.cast.A.common.ia.Fh = function(a) {
        mj("Cast.CAF.PlayerStarted", a.ad())
    };
    var Tk = _.B("cast.framework.common.libraryloader"),
        Mq = {
            Yj: "//www.gstatic.com/cast/sdk/libs/mediaplayer/1.0.0/media_player.js",
            ck: "//ajax.googleapis.com/ajax/libs/shaka-player/2.4.0/shaka-player.compiled.js"
        };
    Mq.Bg = window.document.currentScript.src;
    var Nq = Qc(),
        Oq = Qc();
    Mq.$f = Nq.g;
    Mq.si = Oq.g;
    Mq.Fi = !1;
    Mq.load = function(a, b, c) {
        a = void 0 === a ? !1 : a;
        Uk(b || Mq.Yj, Nq);
        a || (Uk(c || Mq.ck, Oq), Mq.Fi = !0)
    };
    Mq.xm = function() {
        var a = Mq.Bg.replace(/cast_receiver_framework(_debug|_dogfood)?\.js/, "cast_receiver_framework$1_vast_module.js");
        if (a === Mq.Bg) throw Error("Fail to calculate VAST lib URL");
        var b = Qc();
        Uk(a, b);
        return b.g.then(function() {
            if (window.cast.Pi !== window.cast.Qi) return _.C(Tk, "Wrong version of VAST module is loaded."), _.Ic("Wrong version of VAST module is loaded.")
        })
    };
    Mq.reset = function() {
        Nq = Qc();
        Oq = Qc();
        Mq.$f = Nq.g;
        Mq.si = Oq.g;
        Mq.lp = Qc()
    };
    window.cast.A.common.Ac = Mq;
    window.cast.A.common.Hn = function(a, b) {
        (new Vk(a, b)).start()
    };
    window.cast.A.common.jj = {
        no_media: 5,
        loading: 5,
        paused: 20
    };
    _.h = Vk.prototype;
    _.h.start = function() {
        var a = this.l;
        a.addEventListener("ERROR", this.Yh.bind(this));
        a.addEventListener("MEDIA_FINISHED", this.Yh.bind(this));
        a.addEventListener("PAUSE", this.gn.bind(this));
        a.addEventListener("PLAYER_LOADING", this.fn.bind(this));
        a.addEventListener("PLAYER_LOAD_COMPLETE", this.en.bind(this));
        a.addEventListener("TIME_UPDATE", this.hn.bind(this));
        Yk(this, "no_media")
    };
    _.h.Yh = function() {
        _.lc(Xk, "onPlayerIdle");
        Yk(this, "no_media")
    };
    _.h.gn = function() {
        _.lc(Xk, "onPlayerPaused");
        Yk(this, "paused")
    };
    _.h.fn = function() {
        _.lc(Xk, "onPlayerLoading");
        Yk(this, "loading")
    };
    _.h.en = function() {
        _.lc(Xk, "onPlayerLoadComplete");
        "PAUSED" === this.l.Xb() && Yk(this, "paused")
    };
    _.h.hn = function() {
        this.h = null;
        Wk(this)
    };
    var Xk = _.B("cast.framework.common.IdleTimeoutManager");
    _.w("cast.framework.events.DetailedErrorCode", {
        MEDIA_UNKNOWN: 100,
        MEDIA_ABORTED: 101,
        MEDIA_DECODE: 102,
        MEDIA_NETWORK: 103,
        MEDIA_SRC_NOT_SUPPORTED: 104,
        SOURCE_BUFFER_FAILURE: 110,
        MEDIAKEYS_UNKNOWN: 200,
        MEDIAKEYS_NETWORK: 201,
        MEDIAKEYS_UNSUPPORTED: 202,
        MEDIAKEYS_WEBCRYPTO: 203,
        NETWORK_UNKNOWN: 300,
        SEGMENT_NETWORK: 301,
        HLS_NETWORK_MASTER_PLAYLIST: 311,
        HLS_NETWORK_PLAYLIST: 312,
        HLS_NETWORK_NO_KEY_RESPONSE: 313,
        HLS_NETWORK_KEY_LOAD: 314,
        HLS_NETWORK_INVALID_SEGMENT: 315,
        HLS_SEGMENT_PARSING: 316,
        DASH_NETWORK: 321,
        DASH_NO_INIT: 322,
        SMOOTH_NETWORK: 331,
        SMOOTH_NO_MEDIA_DATA: 332,
        MANIFEST_UNKNOWN: 400,
        HLS_MANIFEST_MASTER: 411,
        HLS_MANIFEST_PLAYLIST: 412,
        DASH_MANIFEST_UNKNOWN: 420,
        DASH_MANIFEST_NO_PERIODS: 421,
        DASH_MANIFEST_NO_MIMETYPE: 422,
        DASH_INVALID_SEGMENT_INFO: 423,
        SMOOTH_MANIFEST: 431,
        SEGMENT_UNKNOWN: 500,
        TEXT_UNKNOWN: 600,
        APP: 900,
        BREAK_CLIP_LOADING_ERROR: 901,
        BREAK_SEEK_INTERCEPTOR_ERROR: 902,
        IMAGE_ERROR: 903,
        LOAD_INTERRUPTED: 904,
        LOAD_FAILED: 905,
        MEDIA_ERROR_MESSAGE: 906,
        GENERIC: 999
    }, void 0);
    window.cast.A.wa.zo = {};
    _.w("cast.framework.events.Event", Zk, void 0);
    _.q($k, Zk);
    _.w("cast.framework.events.BitrateChangedEvent", $k, void 0);
    _.q(al, Zk);
    _.w("cast.framework.events.EmsgEvent", al, void 0);
    _.q(bl, Zk);
    _.w("cast.framework.events.ErrorEvent", bl, void 0);
    _.q(cl, Zk);
    _.w("cast.framework.events.Id3Event", cl, void 0);
    _.q(dl, Zk);
    _.w("cast.framework.events.MediaElementEvent", dl, void 0);
    _.q(el, dl);
    _.w("cast.framework.events.MediaPauseEvent", el, void 0);
    _.q(fl, Zk);
    _.w("cast.framework.events.MediaStatusEvent", fl, void 0);
    _.q(gl, Zk);
    _.w("cast.framework.events.CustomStateEvent", gl, void 0);
    _.q(hl, Zk);
    _.w("cast.framework.events.MediaFinishedEvent", hl, void 0);
    _.q(il, Zk);
    _.w("cast.framework.events.RequestEvent", il, void 0);
    _.q(jl, Zk);
    _.w("cast.framework.events.LoadEvent", jl, void 0);
    _.q(kl, jl);
    _.w("cast.framework.events.MediaInformationChangedEvent", kl, void 0);
    _.q(ll, Zk);
    _.w("cast.framework.events.BreaksEvent", ll, void 0);
    _.q(ml, Zk);
    _.w("cast.framework.events.BufferingEvent", ml, void 0);
    _.q(nl, Zk);
    _.w("cast.framework.events.ClipEndedEvent", nl, void 0);
    _.q(ol, Zk);
    _.w("cast.framework.events.SegmentDownloadedEvent", ol, void 0);
    _.q(pl, Zk);
    _.w("cast.framework.events.CacheLoadedEvent", pl, void 0);
    _.q(ql, Zk);
    _.w("cast.framework.events.InbandTrackAddedEvent", ql, void 0);
    _.q(rl, Zk);
    _.w("cast.framework.events.CacheItemEvent", rl, void 0);
    _.q(sl, Zk);
    _.w("cast.framework.events.LiveStatusEvent", sl, void 0);
    _.w("cast.framework.events.EndedReason", {
        END_OF_STREAM: "END_OF_STREAM",
        ERROR: "ERROR",
        STOPPED: "STOPPED",
        INTERRUPTED: "INTERRUPTED",
        SKIPPED: "SKIPPED",
        BREAK_SWITCH: "BREAK_SWITCH"
    }, void 0);
    _.q(tl, _.xb);
    _.h = tl.prototype;
    _.h.sc = function(a) {
        return new wd(this.J++, a)
    };
    _.h.getTracks = function(a) {
        return _.r(a) ? this.tracks.filter(function(b) {
            return b.type == a
        }) : this.tracks
    };
    _.h.Ga = function() {
        var a = new xd;
        a.tracks = this.tracks;
        a.activeTrackIds = this.C;
        a.textTrackStyle = this.w.Yb();
        return a
    };
    _.h.Mc = function() {};
    _.h.Uc = function() {};
    _.h.xd = function() {};
    _.h.Sd = function() {
        return null
    };
    _.h.li = function(a, b, c, d, e) {
        1 < c.length && (_.E(wl, "Cannot enable more than one inband tracks. Will only enable track " + c[0] + "."), c = [c[0]]);
        zl(this, b, c.concat(null != d ? d : [], e));
        this.Uc(c);
        Bl(this, d);
        null != b && this.xd(a, b)
    };
    _.h.yb = function(a) {
        this.w.yb(a)
    };
    _.h.Yb = function() {
        return this.w.Yb()
    };
    _.h.ea = function() {
        this.l && this.l.unload();
        _.xb.prototype.ea.call(this)
    };
    var wl = _.B("cast.framework.media.TracksManager");
    _.h = Dl.prototype;
    _.h.ad = function() {
        return 0
    };
    _.h.Vm = function() {
        4 > this.o && (this.o = 4, Gl(this, new Zk("CLIP_STARTED")))
    };
    _.h.Wh = function() {};
    _.h.Re = function() {
        return {}
    };
    _.h.pause = function() {
        this.mediaElement && (this.M = !0, Pl(this), this.Gc(!1), this.mediaElement.pause())
    };
    _.h.play = function() {
        this.M = !1;
        this.mediaElement && this.mediaElement.play();
        Ql(this)
    };
    _.h.seek = function(a, b) {
        var c = this.mediaElement;
        if (c) {
            if (this.Ua()) {
                var d = this.Na();
                if (!d) {
                    _.E(Pq, "No seekable range available, could not seek.");
                    return
                }
                a < d.start ? (_.E(Pq, "Seek time is not available any more, jump to seek start point."), a = d.start) : a > d.end && (_.E(Pq, "Seek time is not available yet, jump to live edge."), a = d.end)
            }
            1 > Math.abs(c.currentTime - a) ? _.F(Pq, "ignore seek which tries to jump to too close time") : (this.X = c.currentTime = a, this.G = !1, Ql(this));
            _.r(b) && (c.paused && "PLAYBACK_START" == b ? this.play() :
                c.paused || "PLAYBACK_PAUSE" != b || this.pause())
        } else _.E(Pq, "could not seek while media was not loaded yet")
    };
    _.h.Vg = function() {
        return this.M && this.mediaElement && this.mediaElement.paused ? "PAUSED" : this.isBuffering() ? "BUFFERING" : "PLAYING"
    };
    _.h.Ua = function() {
        return !1
    };
    _.h.rc = function() {};
    _.h.isLiveDone = function() {};
    _.h.Na = function() {
        return null
    };
    _.h.Va = function() {
        return null
    };
    _.h.getCurrentTimeSec = function() {
        return this.V ? this.V : this.mediaElement ? this.mediaElement.currentTime : 0
    };
    _.h.getDurationSec = function() {
        return this.F.g
    };
    _.h.Jd = function(a, b, c) {
        this.mediaElement = a;
        this.Ta = b;
        Hl(this, a);
        this.fe(a, b);
        a = this.h = this.La(this, a);
        c && (c.activeTrackIds && (a.C = c.activeTrackIds), c.textTrackStyle && a.w.yb(c.textTrackStyle), c.tracks && vl(a, c.tracks));
        b && Ql(this, !0);
        return this.ja.g
    };
    _.h.fe = function() {
        throw Error("loadContentInternal must be implemented");
    };
    _.h.fc = function() {
        this.bi()
    };
    _.h.bi = function() {};
    _.h.ai = function() {
        return _.Ic("NOT_SUPPORTED")
    };
    _.h.end = function(a) {
        var b = this;
        Pl(this);
        this.Gc(!1);
        if (6 == this.o) return this.C.g;
        this.o = 6;
        this.Wh();
        var c = this.getCurrentTimeSec();
        this.V = c;
        this.Id();
        this.mediaElement && Ol(this, this.mediaElement);
        this.mediaElement = null;
        this.ha = this.h && this.h.Ga();
        this.h && this.h.ka();
        this.h = null;
        return this.C.g.then(function() {
            Gl(b, new nl(c, a));
            b.la.ka()
        })
    };
    _.h.isBuffering = function() {
        return this.G
    };
    _.h.Id = function() {
        var a = this.mediaElement;
        a && (a.removeAttribute("src"), a.load());
        this.C.resolve()
    };
    _.h.Gc = function(a) {
        a !== this.G && (this.G = a, Gl(this, new ml(this.G)));
        a ? !this.D && 4 <= this.o && (this.D = (0, _.J)()) : this.D && (mj("Cast.CAF.Buffering", (0, _.J)() - this.D), this.D = null)
    };
    _.h.sk = function() {
        this.Gc(1E3 * (this.getCurrentTimeSec() - this.X) < 100 * this.aa);
        var a = this.Va();
        !this.N && this.isLiveDone() && a && (Gl(this, new sl("LIVE_ENDED", a)), this.N = !0);
        !this.P && this.rc() && a && (Gl(this, new sl("LIVE_IS_MOVING_WINDOW_CHANGED", a)), this.P = !0);
        Ql(this)
    };
    var Pq = _.B("cast.framework.media.BasePlayer"),
        El = {
            abort: "ABORT",
            canplay: "CAN_PLAY",
            canplaythrough: "CAN_PLAY_THROUGH",
            durationchange: "DURATION_CHANGE",
            ended: "ENDED",
            emptied: "EMPTIED",
            loadeddata: "LOADED_DATA",
            loadedmetadata: "LOADED_METADATA",
            loadstart: "LOAD_START",
            play: "PLAY",
            playing: "PLAYING",
            progress: "PROGRESS",
            ratechange: "RATE_CHANGE",
            seeked: "SEEKED",
            seeking: "SEEKING",
            stalled: "STALLED",
            suspend: "SUSPEND",
            timeupdate: "TIME_UPDATE",
            waiting: "WAITING"
        };
    _.q(Rl, Dl);
    _.h = Rl.prototype;
    _.h.Jd = function(a) {
        var b = this;
        _.F(Qq, "loadContent");
        var c = this.l.url;
        Sl(c).then(function() {
            a.style.backgroundImage = 'url("' + c.replace(/"/g, '\\"') + '")';
            b.g = a;
            _.F(Qq, "image is set");
            b.F.resolve(0);
            b.h = b.La(b, a);
            b.J.resolve([]);
            b.F.g.then(function() {
                Kl(b)
            })
        }, function() {
            Il(b, 903)
        });
        return this.ja.g
    };
    _.h.ad = function() {
        return window.cast.A.common.ia.yd.kj
    };
    _.h.Vg = function() {
        return "PAUSED"
    };
    _.h.fc = function() {
        _.F(Qq, "ImagePlayer does not handle preload")
    };
    _.h.play = function() {
        _.F(Qq, "ImagePlayer does not support PLAY")
    };
    _.h.pause = function() {
        _.F(Qq, "ImagePlayer does not support PAUSE")
    };
    _.h.seek = function() {
        _.F(Qq, "ImagePlayer does not support SEEK")
    };
    _.h.Id = function() {
        this.g && (this.g.style.backgroundImage = "none");
        this.C.resolve()
    };
    _.h.Gc = function() {};
    var Qq = _.B("cast.framework.media.ImagePlayer");
    var Ul = _.B("cast.framework.ContentConfig");
    var dm = {
        NONE: "none",
        CLEARKEY: "clearkey",
        PLAYREADY: "playready",
        WIDEVINE: "widevine",
        AES_128: "aes_128",
        AES_128_CKP: "aes_128_ckp"
    };
    _.w("cast.framework.ContentProtection", dm, void 0);
    window.cast.A.media.ti = {};
    window.cast.A.media.ti.pf = function(a) {
        switch (a.code) {
            case window.shaka.util.Error.Code.LOAD_INTERRUPTED:
                return 904;
            case window.shaka.util.Error.Code.LICENSE_REQUEST_FAILED:
                return 201;
            case window.shaka.util.Error.Code.NO_RECOGNIZED_KEY_SYSTEMS:
            case window.shaka.util.Error.Code.REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE:
                return 202;
            case window.shaka.util.Error.Code.NO_PERIODS:
                return 421
        }
        switch (a.category) {
            case window.shaka.util.Error.Category.NETWORK:
                return 321;
            case window.shaka.util.Error.Category.TEXT:
                return 600;
            case window.shaka.util.Error.Category.MEDIA:
                return 100;
            case window.shaka.util.Error.Category.MANIFEST:
                return 420;
            case window.shaka.util.Error.Category.DRM:
                return 200
        }
        return 999
    };
    _.q(Wl, Dl);
    _.h = Wl.prototype;
    _.h.ad = function() {
        return window.cast.A.common.ia.yd.bk
    };
    _.h.seek = function(a, b) {
        this.Ua() && (a += this.w);
        return Dl.prototype.seek.call(this, a, b)
    };
    _.h.Ua = function() {
        this.ga || (this.ga = !!this.g && (this.g.isLive() || this.g.isInProgress()));
        return this.ga
    };
    _.h.rc = function() {
        return !!this.g && !this.g.isInProgress()
    };
    _.h.isLiveDone = function() {
        return !!this.g && !this.g.isLive() && !this.g.isInProgress()
    };
    _.h.Na = function() {
        var a = this.g.seekRange();
        return a ? new sj(a.start, a.end) : null
    };
    _.h.Re = function() {
        var a = this.g.getStats();
        return {
            height: a.height,
            estimatedBandwidth: a.estimatedBandwidth,
            streamBandwidth: a.streamBandwidth,
            width: a.width
        }
    };
    _.h.Va = function() {
        if (!this.Ua()) return null;
        var a = this.Na();
        if (!a || !_.u(a.start) || !_.u(a.end)) return null;
        this.w || (this.w = a.start);
        var b = this.rc(),
            c = this.isLiveDone();
        return new Rj(a.start - this.w, a.end - this.w, b, c)
    };
    _.h.getCurrentTimeSec = function() {
        var a = Dl.prototype.getCurrentTimeSec.call(this);
        if (6 != this.o && this.Ua() && a) {
            if (!this.w) return 0;
            a -= this.w
        }
        return a
    };
    _.h.fe = function(a, b) {
        var c = this;
        _.F(Xl, "load: " + this.startTime);
        a.autoplay = b;
        this.g = new this.I.Player(a);
        this.g.addEventListener("error", function(a) {
            c.Xg(a.detail)
        });
        this.g.addEventListener("adaptation", this.fh.bind(this));
        this.g.addEventListener("emsg", function(a) {
            Gl(c, new al(a.detail))
        });
        cm(this);
        this.g.load(this.Ea.url, this.startTime).then(this.Um.bind(this)).catch(this.Xg.bind(this));
        fm(this, a)
    };
    _.h.Xg = function(a) {
        if (a && a.code) {
            _.C(Xl, "category: " + a.category + " code: " + a.code);
            var b = a.code,
                c = {
                    shakaErrorCode: b,
                    shakaErrorData: a.data
                };
            Il(this, window.cast.A.media.ti.pf(a), c);
            mj("Cast.Shaka.Error", b)
        } else _.C(Xl, JSON.stringify(a))
    };
    _.h.fh = function() {
        var a = this.ca;
        this.ca = this.g.getVariantTracks().reduce(function(a, c) {
            return c.active ? a + c.bandwidth : a
        }, 0);
        a !== this.ca && Gl(this, new $k(this.ca))
    };
    _.h.Gc = function(a) {
        Dl.prototype.Gc.call(this, a);
        this.isBuffering() && this.B && (this.Yg(), this.T = (0, _.J)(), mj("Cast.Shaka.PlayTimeBeforeAutoPause", (0, _.J)() - this.B), this.B = null)
    };
    _.h.vk = function(a) {
        this.J.resolve(this.h.Mc());
        this.h.G = this.fh.bind(this);
        a = a.duration;
        this.Ua() && (a = -1, _.r(this.startTime) && (this.va = !0));
        this.F.resolve(a);
        mj("Cast.Shaka.MediaDuration", a);
        Kl(this)
    };
    _.h.Um = function() {
        qj("Cast.Shaka.Load");
        oj("Cast.Shaka.Live", this.g.isLive());
        this.g.getVariantTracks().forEach(function(a) {
            a.codecs && pj(a.codecs);
            a.mimeType && mj("Cast.Shaka.MimeType", bn[a.mimeType] || 0)
        });
        for (var a = gm(this), b = _.n(["audio", "video"]), c = b.next(); !c.done; c = b.next()) c = c.value, a[c] && nj(a[c], c + "/*")
    };
    _.h.Yg = function() {
        qj("Cast.Shaka.Pause")
    };
    _.h.wk = function() {
        this.U = (0, _.J)();
        this.w || (this.w = this.g.seekRange().start);
        if (this.va) {
            var a = this.startTime + this.w,
                b = this.g.seekRange();
            a < b.start ? (_.E(Xl, "Start time is out of seek range, jump to the seek start point."), a = b.start) : a > b.end && (_.E(Xl, "Start time is out of seek range, jump to live."), a = b.end);
            this.mediaElement.currentTime = a;
            this.va = !1
        }
    };
    _.h.jn = function() {
        qj("Cast.Shaka.Playing");
        this.B = (0, _.J)();
        this.T && (mj("Cast.Shaka.AutoPauseTime", this.B - this.T), this.T = null);
        if (this.U) {
            var a = this.B - this.U;
            this.Aa ? mj("Cast.Shaka.PlayLatency", a) : (mj("Cast.Shaka.AutoplayStartupLatency", a), this.Aa = !0);
            this.U = null
        }
    };
    _.h.Wh = function() {
        qj("Cast.Shaka.Ended")
    };
    _.h.Id = function() {
        var a = this;
        this.g ? this.g.destroy().then(function() {
            a.C.resolve()
        }) : this.C.resolve()
    };
    var Xl = _.B("cast.framework.media.ShakaPlayer"),
        $l = {
            maxAttempts: 4,
            baseDelay: 400,
            backoffFactor: 2
        },
        Rq = {},
        em = (Rq.clearkey = "org.w3.clearkey", Rq.playready = "com.chromecast.playready", Rq.widevine = "com.widevine.alpha", Rq);
    _.q(im, tl);
    _.h = im.prototype;
    _.h.Mc = function() {
        var a = km(this.g.getVariantTracks()),
            b = this.g.getTextTracks(),
            c = [];
        c = c.concat(a);
        c = c.concat(b);
        a = _.n(c);
        for (b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var d = "variant" === b.type ? "AUDIO" : b.type.toUpperCase();
            c = "variant" === b.type ? b.audioCodec ? b.audioCodec : void 0 : b.mimeType ? b.mimeType : void 0;
            var e = b.kind ? b.kind.toUpperCase() : void 0,
                f = ul(this, d, void 0, b.language, c, e);
            f ? d = f : (d = this.sc(d), d.language = b.language, d.trackContentType = c, d.subtype = e, vl(this, [d]));
            "AUDIO" == d.type ? this.D.set(d.trackId,
                b.audioId) : this.D.set(d.trackId, b.id)

            var d = "variant" === b.type ? "VIDEO" : b.type.toUpperCase();
            c = "variant" === b.type ? b.videoCodec ? b.videoCodec : void 0 : b.mimeType ? b.mimeType : void 0;
            var e = b.kind ? b.kind.toUpperCase() : void 0,
                f = ul(this, d, void 0, b.language, c, e);
            f ? d = f : (d = this.sc(d), d.language = b.language, d.trackContentType = c, d.subtype = e, vl(this, [d]));
            "VIDEO" == d.type ? this.D.set(d.trackId,
                b.videoId) : this.D.set(d.trackId, b.id)
        }
    };
    _.h.Uc = function(a) {
        var b = this;
        if (a && 0 !== a.length) {
            a = a.map(function(a) {
                return b.D.get(a)
            });
            for (var c = _.n(this.g.getTextTracks()), d = c.next(); !d.done; d = c.next()) d = d.value, a.includes(d.id) && this.g.selectTextTrack(d);
            this.g.setTextTrackVisibility(!0)
        } else this.g.setTextTrackVisibility(!1)
    };
    _.h.xd = function(a, b) {
        if (null !== b) {
            var c = null;
            null === a || (c = this.D.get(a));
            var d = this.D.get(b);
            if (c !== d) {
                a = this.g.getVariantTracks();
                var e = a.find(function(a) {
                    return a.active
                }).videoId;
                (a = a.find(function(a) {
                    return a.audioId === d && a.videoId === e
                })) ? (a.language ? this.g.selectAudioLanguage(a.language) : (this.g.configure({
                    abr: {
                        enabled: !1
                    }
                }), this.g.selectVariantTrack(a, !0)), this.G && this.G()) : _.C(Sq, "cannot find matching shaka variant track")
            }
        }
    };
    _.h.Sd = function() {
        for (var a = -1, b = _.n(km(this.g.getVariantTracks())), c = b.next(); !c.done; c = b.next())
            if (c = c.value, c.primary) {
                a = c.audioId;
                break
            }
        b = null;
        c = _.n(this.D);
        for (var d = c.next(); !d.done; d = c.next()) {
            d = _.n(d.value);
            var e = d.next().value;
            if (d.next().value === a) {
                b = e;
                break
            }
        }
        0 > b && _.C(Sq, "cannot find default shaka audio track");
        return b
    };
    _.h.ea = function() {
        this.G = null;
        tl.prototype.ea.call(this)
    };
    var Sq = _.B("cast.framework.media.ShakaTracksManager");
    _.q(lm, Dl);
    lm.prototype.fe = function(a, b) {
        _.F(Tq, "loadContent: autoplay = " + b + ", initial_time = " + this.startTime);
        mm(this, a);
        a.src = this.l.url;
        a.currentTime = this.startTime || 0;
        a.autoplay = b
    };
    lm.prototype.g = function(a) {
        this.J.resolve(this.h.Mc(this.l));
        Kl(this);
        this.F.resolve(a.duration)
    };
    lm.prototype.ad = function() {
        return window.cast.A.common.ia.yd.dk
    };
    var Tq = _.B("cast.framework.media.SimplePlayer");
    _.q(nm, tl);
    nm.prototype.Mc = function(a) {
        a = "audio_only" == a.g ? "AUDIO" : "VIDEO";
        ul(this, a) || (a = this.sc(a), vl(this, [a]))
    };
    window.cast.A.media.Oa = {};
    window.cast.A.media.Oa.Mk = function(a) {
        var b = a.getStreamCount(),
            c = 0;
        aa();
        fa();
        var d = {};
        return d[window.Symbol.iterator] = function() {
            return {
                next: function() {
                    return c < b ? {
                        done: !1,
                        value: a.getStreamInfo(c++)
                    } : {
                        done: !0
                    }
                }
            }
        }, d
    };
    window.cast.A.media.Oa.pf = function(a) {
        switch (a) {
            case window.cast.player.api.ErrorCode.PLAYBACK:
                return 100;
            case window.cast.player.api.ErrorCode.MEDIAKEYS:
                return 200;
            case window.cast.player.api.ErrorCode.NETWORK:
                return 300;
            case window.cast.player.api.ErrorCode.MANIFEST:
                return 400;
            default:
                return _.Ea("Cannot reach"), 999
        }
    };
    window.cast.A.media.Oa.nh = function(a) {
        switch (a) {
            case "aac":
                return window.cast.player.api.HlsSegmentFormat.MPEG_AUDIO_ES;
            case "ac3":
                return window.cast.player.api.HlsSegmentFormat.PACKED_AUDIO_AC3;
            case "mp3":
                return window.cast.player.api.HlsSegmentFormat.MPEG_LAYER_3;
            case "ts":
                return window.cast.player.api.HlsSegmentFormat.MPEG2_TS;
            case "ts_aac":
                return window.cast.player.api.HlsSegmentFormat.TS_AAC;
            case "e_ac3":
                return window.cast.player.api.HlsSegmentFormat.PACKED_AUDIO_E_AC3;
            case "fmp4":
                return window.cast.player.api.HlsSegmentFormat.FMP4
        }
    };
    window.cast.A.media.Oa.oh = function(a) {
        switch (a) {
            case "mpeg2_ts":
                return window.cast.player.api.HlsVideoSegmentFormat.MPEG2_TS;
            case "fmp4":
                return window.cast.player.api.HlsVideoSegmentFormat.FMP4
        }
    };
    window.cast.A.media.Oa.Vl = function(a) {
        switch (a) {
            case "application/x-mpegurl":
            case "application/vnd.apple.mpegurl":
                return window.cast.player.api.StreamingProtocolType.HLS;
            case "application/vnd.ms-sstr+xml":
                return window.cast.player.api.StreamingProtocolType.SMOOTH_STREAMING;
            case "application/dash+xml":
                return window.cast.player.api.StreamingProtocolType.MPEG_DASH;
            default:
                _.Ea("Not supported mimeType " + a)
        }
        return window.cast.player.api.StreamingProtocolType.UNKNOWN
    };
    _.q(tm, Dl);
    _.h = tm.prototype;
    _.h.ad = function() {
        return window.cast.A.common.ia.yd.ek
    };
    _.h.fe = function(a, b) {
        _.F(vm, "load: " + this.startTime);
        wm(this);
        this.w.mediaElement = a;
        a.autoplay = b;
        2 == this.o ? this.B.load() : this.B.load(this.g, this.startTime);
        Fl(this, a, "loadedmetadata", this.xk.bind(this, a))
    };
    _.h.bi = function() {
        wm(this);
        this.B.preload(this.g, this.startTime);
        this.o = 2
    };
    _.h.ai = function() {
        var a = new window.cast.player.api.ContentCacheHost({
            url: this.l.url,
            initialTime: this.startTime,
            protocolType: window.cast.A.media.Oa.Vl(this.l.mimeType),
            hlsSegmentFormat: window.cast.A.media.Oa.nh(this.l.hlsSegmentFormat),
            hlsVideoSegmentFormat: window.cast.A.media.Oa.oh(this.l.hlsVideoSegmentFormat)
        });
        um(a, this.l.playbackConfig);
        var b = new window.cast.player.api.ContentCache;
        return _.H(b.load([a]))
    };
    _.h.Xm = function(a, b) {
        a = window.cast.A.media.Oa.pf(a);
        Il(this, a, {
            requestStatus: b
        })
    };
    _.h.Rm = function() {};
    _.h.yk = function(a, b, c) {
        Gl(this, new ol(b, c))
    };
    _.h.Re = function() {
        return {
            streamBandwidth: this.I
        }
    };
    _.h.Sl = function(a, b) {
        for (var c = this.I, d = 0, e = 0; e < this.g.getStreamCount(); e++)
            if (this.g.isStreamEnabled(e) && !od(this.g.getStreamInfo(e).mimeType)) {
                var f = e === a ? b : this.g.getQualityLevel(e);
                if (0 > f) return b;
                d += this.g.getStreamInfo(e).bitrates[f]
            }
        this.I = d;
        c !== this.I && Gl(this, new $k(this.I));
        return b
    };
    _.h.Ua = function() {
        return !!(this.g && this.g.isLiveStream && this.g.isLiveStream())
    };
    _.h.rc = function() {
        return this.g.isLiveSeekableRangeMovingWindow && this.g.isLiveSeekableRangeMovingWindow()
    };
    _.h.isLiveDone = function() {
        return this.g.isLiveDone && this.g.isLiveDone()
    };
    _.h.Na = function() {
        var a = this.B.getState(window.cast.player.api.Player.State.SEEKABLE);
        return a && a.seekable ? new sj(a.seekable.start, a.seekable.end) : null
    };
    _.h.Va = function() {
        if (!this.Ua()) return null;
        var a = this.Na(),
            b = this.rc(),
            c = this.isLiveDone();
        return a ? new Rj(a.start, a.end, b, c) : null
    };
    _.h.xk = function() {
        this.F.resolve(this.B.getStreamingProtocol().getDuration());
        this.J.resolve(this.h.Mc());
        if (this.Ua() && !_.r(this.startTime)) {
            var a = this.Na();
            a && a.end && this.seek(a.end)
        }
        Kl(this)
    };
    _.h.play = function() {
        if (this.Ua()) {
            var a = this.Na(),
                b = this.getCurrentTimeSec();
            b > a.end ? b = a.end : b < a.start && (b = a.start);
            this.mediaElement.currentTime = b
        }
        Dl.prototype.play.call(this)
    };
    _.h.Id = function() {
        this.B.unload();
        this.C.resolve()
    };
    var vm = _.B("cast.framework.media.StreamingPlayer");
    _.q(ym, tl);
    _.h = ym.prototype;
    _.h.Mc = function() {
        var a = window.cast.A.media.Oa.Mk(this.G),
            b = 0;
        a = _.n(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = c.mimeType;
            if (d) {
                var e;
                var f = d;
                var g = c.codecs;
                f = f.toLowerCase();
                od(f) || "application/mp4" == f && "stpp" == g ? f = "TEXT" : (!(e = Ra(f, "audio/")) && (e = g) && (g = g.toLowerCase(), e = !g.includes(",") && !!g.match(/^(mp4a|[ae]c-3)/)), f = e ? "AUDIO" : Ra(f, "video/") ? "VIDEO" : null);
                f && ("TEXT" == f && (d = Cm(d, c.codecs)), (g = ul(this, f, c.name, c.language, d)) ? f = g : (f = this.sc(f), f.name = c.name, f.language = c.language, f.trackContentType =
                    d, vl(this, [f])), this.D.set(f.trackId, b), b++)
            }
        }
    };
    _.h.xd = function(a, b) {
        var c = -1,
            d = -1,
            e = this.G;
        null != a ? -1 < a && (c = this.D.get(a)) : c = e.getDefaultAudioStreamIndex();
        null != b ? -1 < b && (d = this.D.get(b)) : d = e.getDefaultAudioStreamIndex();
        c != d && (e.enableStream(c, !1), e.enableStream(d, !0), this.g.onAudioChanged())
    };
    _.h.Sd = function() {
        for (var a = this.G.getDefaultAudioStreamIndex(), b = null, c = _.n(this.D), d = c.next(); !d.done; d = c.next()) {
            d = _.n(d.value);
            var e = d.next().value;
            if (d.next().value === a) {
                b = e;
                break
            }
        }
        return b
    };
    _.h.li = function(a, b, c, d, e) {
        1 < c.length + (null == d ? 0 : 1) && (_.E(Bm, "Can only enable one track. Will enable track " + c[0]), c = [c[0]], d = null);
        zl(this, b, c.concat(null != d ? d : [], e));
        null == d ? (Bl(this, d), this.Uc(c)) : (this.Uc(c), Bl(this, d));
        null != b && this.xd(a, b)
    };
    _.h.Uc = function(a) {
        var b = 0 == a.length ? null : a[0];
        a = null != b ? this.D.get(b) : void 0;
        for (var c = !1, d = this.G, e = d.getStreamCount(), f = void 0 === a, g = 0; g < e; g++) {
            var k = d.getStreamInfo(g).mimeType;
            k && od(k) && (g == a ? "text/mp2t" == k ? this.g.enableCaptions(!0, window.cast.player.api.CaptionsType.CEA608) : (f = !0, d.isStreamEnabled(g) || (d.enableStream(g, !0), c = !0)) : g !== a && d.isStreamEnabled(g) && (d.enableStream(g, !1), c = !0))
        }
        null != b && void 0 == a && this.tracks.find(function(a) {
                return a.trackId == b && "text/cea608" == a.trackContentType
            }) ?
            this.g.enableCaptions(!0, window.cast.player.api.CaptionsType.CEA608) : f && this.g.enableCaptions(!1, window.cast.player.api.CaptionsType.CEA608);
        c && this.g.enableCaptions(!0)
    };
    var Bm = _.B("cast.framework.media.StreamingTracksManager");
    window.cast.A.breaks = {};
    _.w("cast.framework.breaks.BreakSeekData", Em, void 0);
    _.w("cast.framework.breaks.BreakClipLoadInterceptorContext", Fm, void 0);
    _.w("cast.framework.breaks.BreakManager", N, void 0);
    N.prototype.U = function() {};
    N.prototype.reset = function() {};
    N.prototype.Wc = function() {};
    N.prototype.getBreaks = N.prototype.Wc;
    N.prototype.Vc = function() {};
    N.prototype.getBreakById = N.prototype.Vc;
    N.prototype.Ub = function() {};
    N.prototype.getBreakClips = N.prototype.Ub;
    N.prototype.eb = function() {};
    N.prototype.getBreakClipById = N.prototype.eb;
    N.prototype.T = function() {};
    N.prototype.kg = function() {};
    N.prototype.setBreakSeekInterceptor = N.prototype.kg;
    N.prototype.M = function() {};
    N.prototype.P = function() {};
    N.prototype.jg = function() {};
    N.prototype.setBreakClipLoadInterceptor = N.prototype.jg;
    N.prototype.L = function() {};
    N.prototype.Hc = function() {};
    N.prototype.setPlayWatchedBreak = N.prototype.Hc;
    N.prototype.Wb = function() {};
    N.prototype.getPlayWatchedBreak = N.prototype.Wb;
    N.prototype.Ic = function() {};
    N.prototype.setVastTrackingInterceptor = N.prototype.Ic;
    N.prototype.ib = function() {};
    N.prototype.N = function() {};
    N.prototype.G = function() {};
    window.cast.A.timeline = {};
    var Rm = _.B("cast.framework.timeline.Timeline");
    _.h = Lm.prototype;
    _.h.eb = function(a) {
        return this.h.get(a)
    };
    _.h.Ub = function() {
        return Array.from(this.h.values())
    };
    _.h.Vc = function(a) {
        return this.g.find(function(b) {
            return a == b.id
        }) || null
    };
    _.h.Ze = function() {
        _.Ea("Should be implemented")
    };
    _.h.Ud = function() {
        _.Ea("Should be implemented")
    };
    _.h.nf = function() {
        _.Ea("Should be implemented")
    };
    _.h = Um.prototype;
    _.h.Zn = function() {
        null != this.ga && mj("Cast.CAF.VideoToAdLatency", (0, _.J)() - this.ga)
    };
    _.h.Yn = function() {
        this.T = (0, _.J)()
    };
    _.h.ao = function() {
        null != this.T && (mj("Cast.CAF.AdToVideoLatency", (0, _.J)() - this.T), this.T = null)
    };
    _.h.$n = function() {
        this.ga = (0, _.J)()
    };
    _.h.load = function() {};
    _.h.reset = function(a) {
        _.F(Uq, "reset()");
        this.end(a && window.cast.A.media.aj[a] || "STOPPED")
    };
    _.h.getVolume = function() {
        var a = new td;
        a.level = this.mediaElement.volume;
        a.muted = this.mediaElement.muted;
        return a
    };
    _.h.setVolume = function(a) {
        _.r(a.level) && (this.mediaElement.volume = a.level);
        _.r(a.muted) && (this.mediaElement.muted = a.muted)
    };
    _.h.getDurationSec = function() {
        return _.u(this.F) ? this.F : window.Infinity
    };
    _.h.getCurrentTimeSec = function() {
        return this.Td()
    };
    _.h.editTracksInfo = function(a) {
        return Ml(this.g, a)
    };
    _.h.registerErrorCallback = function(a) {
        this.P = a
    };
    _.h.registerEndedCallback = function(a) {
        this.U = a
    };
    _.h.registerLoadCallback = function(a) {
        this.V = a
    };
    _.h.unregisterErrorCallback = function() {
        this.P = _.x
    };
    _.h.unregisterEndedCallback = function() {
        this.U = _.x
    };
    _.h.unregisterLoadCallback = function() {
        this.V = _.x
    };
    _.h.pause = function() {
        _.F(Uq, "pause");
        this.g.pause()
    };
    _.h.play = function() {
        _.F(Uq, "play");
        this.g.play()
    };
    _.h.rg = function() {
        _.Ea("Not implemented")
    };
    _.h.hg = function() {
        _.Ea("Not implemented")
    };
    _.h.seek = function(a, b) {
        this.isPlayingBreak ? _.E(Uq, "seek request during break was ignored.") : (0 > a && (_.F(Uq, "Invalid seek value - " + a), a = 0), this.hg(a, b))
    };
    _.h.getState = function() {
        switch (this.w) {
            case 1:
            case 2:
                return "BUFFERING";
            case 3:
            case 4:
                return this.g ? window.cast.A.K.Vn(this.g.Vg()) : "PLAYING";
            case 5:
            case 6:
                return "IDLE";
            default:
                return _.Ea(), "IDLE"
        }
    };
    _.h.Va = function() {
        return this.g ? this.g.Va() : null
    };
    _.h.Na = function() {
        return this.g ? this.g.Na() : null
    };
    _.h.fc = function(a) {
        this.ag(a)
    };
    _.h.Rd = function() {
        return this.h ? this.h.g.duration || null : null
    };
    _.h.Db = function() {
        return this.h ? this.timeline.nf(this.fb()) : null
    };
    _.h.fb = function() {
        return this.g ? this.g.getCurrentTimeSec() : 0
    };
    _.h.Td = function() {
        var a = this.fb();
        return this.timeline.Ud(a)
    };
    _.h.ee = function() {
        if (!this.g) return !1;
        var a = Ll(this.g);
        if (1 > a.length) return !1;
        var b = a.length - 1,
            c = a[b].end;
        return a[b].start <= this.fb() && c >= this.F
    };
    _.h.yg = function(a) {
        if (a.media) {
            var b = a.media;
            (0, window.isNaN)(this.F) || (b.duration = this.F);
            b.breakClips = window.cast.A.K.On(this.timeline.Ub() || void 0);
            b.breaks = window.cast.A.K.Nn(this.timeline.g || void 0)
        }
        a.currentTime = this.Td();
        a.liveSeekableRange = window.cast.A.K.yi(this.Va()) || void 0;
        this.h && (a.playbackRate = 0, a.supportedMediaCommands &= -3, Vm(this) && (a.supportedMediaCommands |= 512), b = this.timeline.Ze(this.h, this.fb()), a.breakStatus = b)
    };
    _.h.end = function(a) {
        var b = this;
        if (6 == this.w) return this.L.g;
        _.r(this.I) || (this.I = this.getCurrentTimeSec());
        var c = this.w;
        this.w = 6;
        this.P = _.x;
        this.Wg(a);
        return this.L.g.then(function() {
            "END_OF_STREAM" == a && b.U();
            b.isPlayingBreak && cn(b, "BREAK_ENDED");
            5 > c && b.la.dispatchEvent(new hl(b.I, a));
            b.la.ka()
        })
    };
    _.h.Wg = function(a) {
        var b = this;
        _.F(Uq, "endInternal()");
        this.g ? (this.g.end(a).then(function() {
            b.L.resolve()
        }), this.g = null) : this.L.resolve()
    };
    _.h.Hf = function() {
        _.Ea("This should be implemented");
        return _.Ic()
    };
    _.h.ag = function() {};
    _.h.ke = function() {
        _.F(Uq, "player event: error");
        this.P(Error())
    };
    _.h.nd = function() {
        var a = Vm(this);
        a != this.N && (this.N = a, $m(this))
    };
    _.h.Qm = function(a) {
        this.F = a;
        var b = this.timeline;
        if (!b.isEmbedded) {
            for (var c = null, d = b.g.length, e = 0; e < b.g.length; e++) {
                var f = b.g[e];
                if (f.position >= a || 0 > f.position) c ? c.breakClipIds.push.apply(c.breakClipIds, _.la(f.breakClipIds)) : (c = f, d = e, c.position = -1)
            }
            d < b.g.length - 1 && b.g.splice(d + 1)
        }
        this.V()
    };
    _.h.Se = function(a) {
        return Nl(this.g, a)
    };
    _.h.Qb = function(a) {
        var b = this.g;
        b.aa = (void 0 === a ? 1 : a) || 1;
        b.mediaElement && (b.mediaElement.playbackRate = b.aa);
        return a
    };
    var Uq = _.B("cast.framework.media.Player"),
        Vq = {};
    window.cast.A.media.aj = (Vq.CANCELLED = "STOPPED", Vq.INTERRUPTED = "INTERRUPTED", Vq.FINISHED = "END_OF_STREAM", Vq.ERROR = "ERROR", Vq);
    _.q(fn, Um);
    _.h = fn.prototype;
    _.h.Hf = function(a, b) {
        var c = this;
        return (this.l || hn(this, b)).then(function(b) {
            window.cast.A.common.ia.Fh(b);
            b.getDurationSec().then(function(a) {
                a = c.timeline.Ud(a);
                c.ca.resolve(a)
            });
            Jl(b).then(function(a) {
                c.oa.resolve(a)
            });
            c.g = b;
            en(c);
            dn(c, "CLIP_STARTED", c.uk);
            dn(c, "CLIP_ENDED", c.tk);
            return b.Jd(c.mediaElement, a, c.C)
        })
    };
    _.h.ag = function(a) {
        var b = this;
        this.l = hn(this, a).then(function(a) {
            a.fc(b.C);
            return a
        })
    };
    _.h.hg = function(a, b) {
        _.F(Wq, "seek: " + a);
        this.g.seek(gn(this.timeline, a), b)
    };
    _.h.rg = function() {
        var a = this.fb();
        this.g.seek(An(this.timeline, a))
    };
    _.h.nd = function(a) {
        var b = this.fb(),
            c = this.timeline;
        if (b = zn(c, b)) {
            var d;
            (d = !this.h) || (d = this.h, d = !(null !== b && d.h == b.h && d.g == b.g));
            d && (d = b.h, this.h || !d.isWatched || c.o.Wb() ? cn(this, "BREAK_CLIP_STARTED", b) : this.g.seek(Bn(c, d)))
        } else this.h && cn(this, "BREAK_ENDED");
        Um.prototype.nd.call(this, a)
    };
    _.h.uk = function() {
        _.F(Wq, "started");
        an(this)
    };
    _.h.tk = function(a) {
        _.F(Wq, "ended");
        5 > this.w && (cn(this, "BREAK_ENDED", null, a.endedReason), this.g = null, this.I = a.currentMediaTime, this.end(a.endedReason))
    };
    var Wq = _.B("cast.framework.media.EmbeddedPlayer");
    _.q(jn, Um);
    _.h = jn.prototype;
    _.h.Qb = function(a) {
        this.ha = a || 1;
        return this.o.breakStatus ? this.ha : Um.prototype.Qb.call(this, a)
    };
    _.h.Wg = function(a) {
        var b = this;
        _.F(mn, "endInternal()");
        var c = [];
        this.g && (cn(this, "BREAK_ENDED", null, a), this.g.la.removeEventListener("CLIP_ENDED", this.Te), c.push(this.g.end(a)), this.g = null);
        this.l && (this.l.cancel("Main video ends"), this.l = null);
        this.B && (c.push(this.B.then(function(b) {
            if (b) return b.end(a)
        })), this.B = null);
        Mc(c).then(function() {
            b.L.resolve()
        })
    };
    _.h.hg = function(a, b) {
        var c = this;
        _.F(mn, "seek: " + a);
        var d = this.getCurrentTimeSec(),
            e = In(this.D, d, a),
            f = null;
        0 < e.length && (f = this.va.M(new Em(d, a, e)).then(function(b) {
            if (b.breaks && 0 < b.breaks.length) {
                a = b.seekTo;
                var d = [],
                    e = "seek-" + Date.now();
                c.D.B.set(e, b.breaks.slice());
                for (var f = _.n(b.breaks), g = f.next(); !g.done; g = f.next()) d.push.apply(d, _.la(g.value.breakClipIds));
                return new _.ek(e, d, b.seekTo)
            }
            return null
        }, function(a) {
            c.la.dispatchEvent(new bl(902, Error(a)));
            return null
        }));
        _.Sc(_.H(f).then(function(d) {
            return d &&
                0 !== d.breakClipIds.length ? on(c, d, a, b) : (_.F(mn, "No seek break."), !1)
        }), function() {
            _.F(mn, "Fail to create seek clip");
            return !1
        }).then(function(d) {
            d || (d = a, d >= c.o.endTime && (kn(c), c.o.endTime = Fn(c.D, d), rn(c, c.o)), c.g.seek(d, b))
        })
    };
    _.h.rg = function() {
        this.g.end("SKIPPED")
    };
    _.h.ag = function(a) {
        var b = this;
        this.X = Dm(this.G, a || 0).then(function(a) {
            a.fc(b.C);
            return a
        })
    };
    _.h.Hf = function(a, b) {
        var c = this;
        return Gn(this.D, b || 0, this.G).then(function(b) {
            if (b.breakStatus) {
                var d = tn(c),
                    f, g = Dm(b.g, b.startTime).then(function(a) {
                        f = a;
                        a.fc(null)
                    });
                return _.Lc([d, g]).then(function() {
                    return nn(c, f, b, a)
                })
            }
            return (c.X || Dm(b.g, b.startTime)).then(function(d) {
                qn(c, d);
                return nn(c, d, b, a)
            })
        })
    };
    _.h.editTracksInfo = function(a) {
        return this.h || !this.g ? null : Ml(this.g, a)
    };
    _.h.Se = function(a) {
        if (!this.h && this.g) return Nl(this.g, a)
    };
    _.h.fb = function() {
        return Um.prototype.fb.call(this)
    };
    _.h.Td = function() {
        return null === this.J ? this.fb() : this.J
    };
    _.h.ee = function() {
        return this.l ? !1 : Um.prototype.ee.call(this)
    };
    _.h.Nm = function() {
        var a = this;
        _.F(mn, "clip started");
        4 > this.w && an(this);
        var b = this.o.breakStatus;
        b ? this.g.getDurationSec().then(function(c) {
            b.g.duration = c;
            a.ja = !0;
            cn(a, "BREAK_CLIP_STARTED", b)
        }) : this.J = null
    };
    _.h.Te = function(a) {
        var b = this;
        _.F(mn, "clip ended");
        this.M = a.endedReason;
        var c = null;
        this.o.breakStatus ? c = _.Sc(_.H(this.l), function() {
            return null
        }).then(function(a) {
            a && a.breakStatus || (_.F(mn, "onClipEnded_: " + (a ? "Next clip is not a break clip" : "No next clip")), cn(b, "BREAK_ENDED", null, b.M), b.M = void 0)
        }) : (this.J = this.g.getCurrentTimeSec(), this.g.ha && (this.C = this.g.ha));
        _.H(c).then(function() {
            return 5 > b.w ? sn(b) : !1
        }).then(function(c) {
            c && (_.F(mn, "breakList player ends since there is no more player to switch to"),
                b.g = null, b.I = a.currentMediaTime, b.end(a.endedReason))
        })
    };
    _.h.ke = function(a) {
        this.o.breakStatus ? _.F(mn, "player event: break clip error") : Um.prototype.ke.call(this, a)
    };
    _.h.nd = function(a) {
        var b = this;
        this.g.getDurationSec().then(function(c) {
            Um.prototype.nd.call(b, a);
            var d = b.fb(),
                e = Ll(b.g);
            if (1 <= e.length) {
                var f = e.length - 1,
                    g = e[f].end;
                c = Math.min(b.o.endTime, c);
                e[f].start <= d && g >= c && b.aa.resolve()
            }
            d >= b.o.endTime && b.g.end("BREAK_SWITCH")
        })
    };
    _.h.yg = function(a) {
        Um.prototype.yg.call(this, a);
        this.h && (a.currentTime = this.h.h.position)
    };
    var mn = _.B("cast.framework.media.StitchingPlayer");
    _.q(wn, Lm);
    wn.prototype.Ud = function(a) {
        var b = this.l.slice(0).reverse().find(function(b) {
            return b.Lb <= a
        });
        return b ? b.bf + Math.max(0, a - b.gc) : a
    };
    wn.prototype.Ze = function(a, b) {
        var c = xn(this, b);
        b = new Bd(b - c.g, b - c.Lb);
        Im(a, b);
        return b
    };
    wn.prototype.nf = function(a) {
        var b = xn(this, a);
        return b ? a - b.Lb : null
    };
    un.prototype.cache = function(a, b, c) {
        this.g = a;
        this.l = b;
        this.h = c
    };
    window.cast.A.media.util = {};
    window.cast.A.media.util.W = _.B("cast.framework.media.util");
    window.cast.A.media.util.Eg = {
        m3u8: "application/x-mpegurl",
        manifest: "application/vnd.ms-sstr+xml",
        mpd: "application/dash+xml",
        ism: "application/vnd.ms-sstr+xml",
        m4v: "video/mp4",
        mp4: "video/mp4",
        ogv: "video/ogg",
        aac: "audio/aac",
        m4a: "audio/mp4",
        mp3: "audio/mp3",
        oga: "audio/ogg",
        wav: "audio/wav",
        jpg: "image/jpg",
        gif: "image/gif",
        png: "image/png"
    };
    window.cast.A.media.util.tj = {
        video: "audio_video",
        audio: "audio_only",
        image: "image"
    };
    window.cast.A.media.util.bp = function(a) {
        return _.db(Gq, a)
    };
    window.cast.A.media.util.dm = function(a) {
        return (a = window.cast.A.media.util.tj[a.split("/")[0]]) ? a : "audio_video"
    };
    window.cast.A.media.util.qf = function(a) {
        a = a.split("?")[0] || "";
        a = a.split("/").pop() || "";
        return a.split(".").pop() || ""
    };
    window.cast.A.media.util.xf = function(a, b) {
        b = void 0 === b ? "video/mp4" : b;
        if (a = window.cast.A.media.util.Eg[a]) return a;
        _.E(window.cast.A.media.util.W, "cannot guess mime type from given contenId/Type. Assume that this is " + b);
        return b
    };
    window.cast.A.media.util.rh = function(a, b, c) {
        return window.cast.A.media.util.sh(c || a.contentUrl || a.contentId, a.contentType, b, a.hlsSegmentFormat, a.hlsVideoSegmentFormat)
    };
    window.cast.A.media.util.$l = function(a, b) {
        return window.cast.A.media.util.sh(String(a.contentUrl || a.contentId), a.contentType, b, a.hlsSegmentFormat)
    };
    window.cast.A.media.util.sh = function(a, b, c, d, e) {
        var f = window.cast.A.media.util.qf(a.toLowerCase());
        b = (b || "").toLowerCase();
        var g = window.cast.A.media.util.Eg[f];
        !_.db(Gq, b) && g && _.db(Gq, g) && (b = g);
        b = b || window.cast.A.media.util.xf(f);
        a = new Vl(a, b, c, window.cast.A.media.util.dm(b));
        _.r(d) && (a.hlsSegmentFormat = d);
        _.r(e) && (a.hlsVideoSegmentFormat = e);
        return a
    };
    Cn.prototype.isPlayingBreak = function() {
        return null != this.breakStatus
    };
    _.q(Dn, Lm);
    Dn.prototype.Ze = function(a, b) {
        for (var c = a.h, d = a.l, e = 0, f = 0; f < d; f++) {
            var g = this.eb(c.breakClipIds[f]);
            g && g.duration && (e += g.duration)
        }
        b = new Bd(e + b, b);
        Im(a, b);
        return b
    };
    Dn.prototype.nf = function(a) {
        return a
    };
    Dn.prototype.Ud = function(a) {
        return a
    };
    var En = _.B("cast.framework.timeline.StitchingTimeline");
    _.w("cast.framework.PlayerManager", O, void 0);
    O.prototype.Pd = function(a) {
        Qn(this);
        this.aa = a.isBuffering
    };
    O.prototype.getStats = function() {
        Qn(this);
        var a = {};
        a.bufferingTime = this.ja;
        a.playTime = this.va;
        if (!this.X) return a;
        Object.assign(a, Rn(this));
        if (!this.h) return a;
        Object.assign(a, Wm(this.h));
        return a
    };
    O.prototype.getStats = O.prototype.getStats;
    O.prototype.Rb = function() {
        qj("Cast.CAF.RequestPrecache")
    };
    O.prototype.oi = function(a) {
        this.ga = a
    };
    O.prototype.setPlaybackConfig = O.prototype.oi;
    O.prototype.Nl = function() {
        return this.ga
    };
    O.prototype.getPlaybackConfig = O.prototype.Nl;
    O.prototype.Pl = function() {
        return this.J
    };
    O.prototype.getPreferredPlaybackRate = O.prototype.Pl;
    O.prototype.Ql = function() {
        return this.I
    };
    O.prototype.getPreferredTextLanguage = O.prototype.Ql;
    O.prototype.Rl = function() {
        return this.V
    };
    O.prototype.getPreferredTextStyle = O.prototype.Rl;
    O.prototype.Kl = function() {
        return this.L
    };
    O.prototype.getAudioTracksManager = O.prototype.Kl;
    O.prototype.Wl = function() {
        return this.D
    };
    O.prototype.getTextTracksManager = O.prototype.Wl;
    O.prototype.Tl = function() {
        return this.Ta
    };
    O.prototype.getQueueManager = O.prototype.Tl;
    O.prototype.Ll = function() {
        return this.M
    };
    O.prototype.getBreakManager = O.prototype.Ll;
    _.h = O.prototype;
    _.h.Wm = function() {
        Qn(this);
        this.aa = !1;
        this.h = null;
        this.ha = !1;
        this.L.reset();
        this.D.reset();
        this.M.reset()
    };
    _.h.kn = function() {
        var a = this;
        this.ca.then(function(b) {
            null === a.Db() && (a.J = b.playbackRate)
        })
    };
    _.h.nn = function(a) {
        this.N = a.credentials;
        return new Se
    };
    _.h.Sm = function(a) {
        var b = new vj;
        b.media = new uj;
        b.autoplay = !0;
        b.media.entity = a.entity;
        this.N && (b.credentials = this.N, b.credentialsType = "cloud");
        if (void 0 != a.shuffle) {
            var c = new Sj;
            c.repeatMode = a.shuffle ? "REPEAT_ALL_AND_SHUFFLE" : "REPEAT_OFF";
            b.queueData = c
        }
        b.loadOptions = window.cast.A.K.rl(a.loadOptions);
        return this.load(b).then(function() {
            return new Se
        }, function(a) {
            var b = "APP_ERROR";
            a && a.reason && _.db(mq, a.type) && (b = a.reason);
            return new Ke(b)
        })
    };
    _.h.nk = function(a) {
        mj("Cast.CAF.Error", a.detailedErrorCode || 0)
    };
    _.h.addEventListener = function(a, b) {
        var c = this;
        if (!_.z(b)) throw _.C(Mn, "addEventListener failed since handler is not a function"), Error("addEventListener failed since handler is not a function");
        _.ta(a) ? a.forEach(function(a) {
            Tn(c, a, b)
        }) : Tn(this, a, b)
    };
    O.prototype.addEventListener = O.prototype.addEventListener;
    O.prototype.removeEventListener = function(a, b) {
        var c = this;
        _.ta(a) ? a.forEach(function(a) {
            Un(c, a, b)
        }) : Un(this, a, b)
    };
    O.prototype.removeEventListener = O.prototype.removeEventListener;
    O.prototype.kc = function(a, b) {
        var c = this,
            d = null;
        _.db(Dq, a) ? null == b || _.z(b) || (d = "setMessageInterceptor(" + a + ") failed since handler is not a function") : d = "setMessageInterceptor(" + a + ") failed due to invalid request type";
        if (d) throw _.C(Mn, d), Error(d);
        mj("Cast.CAF.MessageInterceptorSet", window.cast.A.common.ia.Ml(a));
        var e = b && Xn(b);
        switch (a) {
            case "MEDIA_STATUS":
                this.oa = e;
                break;
            case "CLOUD_STATUS":
                this.G.g.then(function() {
                    return c.l.Ta = e
                });
                break;
            case "GET_STATUS":
            case "LOAD":
            case "PAUSE":
            case "STOP":
            case "PLAY":
            case "PLAY_AGAIN":
            case "SEEK":
            case "SET_PLAYBACK_RATE":
            case "SET_VOLUME":
            case "SKIP_AD":
            case "EDIT_TRACKS_INFO":
            case "EDIT_AUDIO_TRACKS":
            case "PRECACHE":
            case "PRELOAD":
            case "QUEUE_LOAD":
            case "QUEUE_INSERT":
            case "QUEUE_UPDATE":
            case "QUEUE_REMOVE":
            case "QUEUE_REORDER":
            case "QUEUE_GET_ITEM_RANGE":
            case "QUEUE_GET_ITEMS":
            case "QUEUE_GET_ITEM_IDS":
            case "STORE_SESSION":
            case "RESUME_SESSION":
                b =
                    e && this.ae.bind(this, a, e);
                if ("LOAD" == a) {
                    d = Mk(this.g, Xq.LOAD);
                    var f = Mk(this.g, Xq.PRELOAD),
                        g = Mk(this.g, Xq.PRECACHE);
                    f && f !== d || this.g.kc(Xq.PRELOAD, b);
                    g && g !== d || this.g.kc(Xq.PRECACHE, b)
                }
                this.g.kc(Xq[a], b);
                break;
            case "SET_CREDENTIALS":
            case "LOAD_BY_ENTITY":
            case "DISPLAY_STATUS":
            case "FOCUS_STATE":
            case "CUSTOM_COMMAND":
                this.B.kc(a, e && this.bb.bind(this, a, e));
                break;
            case "SESSION_STATE":
                this.Aa = e;
                break;
            case "USER_ACTION":
                this.B.kc(a, e && this.bb.bind(this, a, e));
                var k = e && this.Zd.bind(this, e);
                this.G.g.then(function() {
                    return c.l.La =
                        k
                });
                break;
            default:
                throw d = "Unknown message type - " + a, _.C(Mn, d), Error(d);
        }
    };
    O.prototype.setMessageInterceptor = O.prototype.kc;
    O.prototype.Zd = function(a, b) {
        var c = this;
        this.zf(b);
        var d = null;
        try {
            d = a(window.cast.A.K.gh(b.data))
        } catch (e) {
            throw _.C(Mn, "UserAction Interceptor Exception " + e), Vn(this, b), e;
        }
        window.Promise.resolve(d).then(function(a) {
            if (a && _.db(Fq, a.type)) return window.Promise.reject(a);
            c.$(!0, b.data.requestId)
        }).then(_.x, function(a) {
            _.C(Mn, "UserAction failed " + a);
            Vn(c, b);
            if (a instanceof Error) throw a;
        })
    };
    O.prototype.ae = function(a, b, c) {
        function d(a) {
            return _.db(Fq, a.type) ? (Vn(e, c, a.type, a.reason, a.customData), $n(e, c.data.requestId, a), !0) : !1
        }
        var e = this,
            f = null;
        try {
            f = b(window.cast.A.K.gh(c.data))
        } catch (g) {
            throw Vn(this, c), g;
        }
        return window.Promise.resolve(f).then(function(a) {
            if (!a) return Zn(e, c.data.requestId), null;
            if (d(a)) return null;
            c.data = a;
            return c
        }).catch(function(b) {
            if (d(b)) return null;
            _.C(Mn, a + " Interceptor Error " + b);
            Vn(e, c);
            $n(e, c.data.requestId);
            if (b instanceof Error) throw b;
            return null
        })
    };
    O.prototype.bb = function(a, b, c) {
        a = b(c);
        return window.Promise.resolve(a).then(function(a) {
            return a ? _.db(mq, a.type) ? new Ke(a.reason || "APP_ERROR") : a : new Se
        }, function(a) {
            var b = "APP_ERROR";
            a && a.reason && _.db(mq, a.type) && (b = a.reason);
            return new Ke(b)
        })
    };
    O.prototype.En = function(a) {
        null == a || _.z(a) ? this.T = a : _.C(Mn, "setMediaPlaybackInfoHandler() cannot set handler since it's not a function")
    };
    O.prototype.setMediaPlaybackInfoHandler = O.prototype.En;
    O.prototype.Fn = function(a) {
        null == a || _.z(a) ? this.U = a : _.C(Mn, "setMediaUrlHandler() cannot set handler since it's not a function")
    };
    O.prototype.setMediaUrlResolver = O.prototype.Fn;
    O.prototype.Zf = function(a, b) {
        return this.w.Zf(a, b).then(function(a) {
            var b = null;
            "ERROR" == a.type && (b = new rj("ERROR"), b.reason = a.code);
            return b
        })
    };
    O.prototype.playString = O.prototype.Zf;
    O.prototype.cg = function() {
        return this.w.cg().then(function(a) {
            if ("ERROR" == a.type) {
                var b = new rj("ERROR");
                b.reason = a.code;
                return window.Promise.reject(b)
            }
        })
    };
    O.prototype.refreshCredentials = O.prototype.cg;
    O.prototype.ib = function(a) {
        var b = this;
        this.ca = _.H(a);
        this.ca.then(function(a) {
            b.X = a;
            !b.h && b.l && (b.l.ib(a), b.M.ib(a))
        })
    };
    O.prototype.setMediaElement = O.prototype.ib;
    O.prototype.vc = function() {
        return this.l ? window.cast.A.K.tl(this.l.vc()) : null
    };
    O.prototype.getMediaInformation = O.prototype.vc;
    O.prototype.Ce = function(a, b) {
        this.l && (this.h && Ym(this.h, window.cast.A.K.Jc(a)), this.l.Ce(window.cast.A.K.Jc(a), b), this.o.dispatchEvent(new kl(a)))
    };
    O.prototype.setMediaInformation = O.prototype.Ce;
    O.prototype.wc = function() {
        return this.l ? this.l.wc() : (_.C(Mn, "getSupportedMediaCommands should not be called before start"), 0)
    };
    O.prototype.getSupportedMediaCommands = O.prototype.wc;
    O.prototype.wd = function(a, b) {
        var c = this;
        b = void 0 === b ? !0 : b;
        this.G.g.then(function() {
            return c.l.wd(a, b)
        })
    };
    O.prototype.setSupportedMediaCommands = O.prototype.wd;
    O.prototype.Ed = function(a, b) {
        var c = this;
        b = void 0 === b ? !0 : b;
        this.G.g.then(function() {
            return c.l.Ed(a, b)
        })
    };
    O.prototype.addSupportedMediaCommands = O.prototype.Ed;
    O.prototype.eg = function(a, b) {
        var c = this;
        b = void 0 === b ? !0 : b;
        this.G.g.then(function() {
            return c.l.eg(a, b)
        })
    };
    O.prototype.removeSupportedMediaCommands = O.prototype.eg;
    O.prototype.$ = function(a, b, c, d) {
        this.l && this.l.$(void 0 === a ? !1 : a, b, c, d)
    };
    O.prototype.broadcastStatus = O.prototype.$;
    O.prototype.ze = function(a, b, c, d, e) {
        this.l && this.l.ze(a, b, void 0 === c ? !1 : c, d, e)
    };
    O.prototype.sendStatus = O.prototype.ze;
    O.prototype.An = function(a) {
        this.l && (this.l.w.send("*:*", new tj(a)), this.o.dispatchEvent(new gl(a)))
    };
    O.prototype.sendCustomState = O.prototype.An;
    O.prototype.lg = function(a) {
        this.l && this.l.lg(window.cast.A.K.Sn(a))
    };
    O.prototype.setIdleReason = O.prototype.lg;
    O.prototype.za = function(a, b, c, d, e) {
        this.l && this.l.za(a, b, window.cast.A.K.Rn(c), window.cast.A.K.Qn(void 0 === d ? null : d), void 0 === e ? null : e)
    };
    O.prototype.sendError = O.prototype.za;
    O.prototype.getCurrentTimeSec = function() {
        return this.h ? this.h.Td() : 0
    };
    O.prototype.getCurrentTimeSec = O.prototype.getCurrentTimeSec;
    O.prototype.Xb = function() {
        return this.h ? window.cast.A.K.vl(this.h.getState()) : "IDLE"
    };
    O.prototype.getPlayerState = O.prototype.Xb;
    O.prototype.getDurationSec = function() {
        return this.h ? this.h.F : window.NaN
    };
    O.prototype.getDurationSec = O.prototype.getDurationSec;
    O.prototype.Db = function() {
        return this.h ? this.h.Db() : null
    };
    O.prototype.getBreakClipCurrentTimeSec = O.prototype.Db;
    O.prototype.getPlaybackRate = function() {
        return this.l ? this.l.getPlaybackRate() : 1
    };
    O.prototype.getPlaybackRate = O.prototype.getPlaybackRate;
    O.prototype.Rd = function() {
        return this.h ? this.h.Rd() : null
    };
    O.prototype.getBreakClipDurationSec = O.prototype.Rd;
    O.prototype.Wc = function() {
        return this.h ? this.h.timeline.g : []
    };
    O.prototype.getBreaks = O.prototype.Wc;
    O.prototype.Va = function() {
        return this.h ? this.h.Va() : null
    };
    O.prototype.getLiveSeekableRange = O.prototype.Va;
    O.prototype.Na = function() {
        return this.h ? this.h.Na() : null
    };
    O.prototype.getRawSeekableRange = O.prototype.Na;
    O.prototype.load = function(a) {
        var b = this,
            c = Yn(this, a);
        this.G.g.then(function() {
            return b.l.load(window.cast.A.K.Tn(a))
        });
        return c
    };
    O.prototype.load = O.prototype.load;
    O.prototype.pause = function() {
        this.hb(new L("PAUSE"))
    };
    O.prototype.pause = O.prototype.pause;
    O.prototype.play = function() {
        this.hb(new L("PLAY"))
    };
    O.prototype.play = O.prototype.play;
    O.prototype.seek = function(a) {
        var b = new Cj;
        b.currentTime = a;
        this.hb(b)
    };
    O.prototype.seek = O.prototype.seek;
    O.prototype.stop = function() {
        this.hb(new L("STOP"))
    };
    O.prototype.stop = O.prototype.stop;
    O.prototype.hb = function(a) {
        var b = this;
        this.G.g.then(function() {
            return b.l.hb(window.cast.A.K.Wn(a))
        })
    };
    O.prototype.sendLocalMediaRequest = O.prototype.hb;
    _.h = O.prototype;
    _.h.$m = function(a) {
        var b = this;
        _.F(Mn, "MediaManagerLoad");
        var c = window.cast.A.K.sl(a.data),
            d = c.media;
        (a = bb(c, "queueData", "items")) && mj("Cast.CAF.QueueItems", a.length);
        var e;
        this.h ? (a = this.h.end("INTERRUPTED"), Qn(this), this.h = null, this.ha = this.aa = !1) : a = _.H();
        var f = this.l;
        d != f.vc() && this.Ce(d, !0);
        _.Sc(a.then(function() {
            b.L.reset();
            b.D.reset();
            b.C && $n(b, b.C, void 0);
            b.C = c.requestId;
            d && (d.contentUrl || d.contentId) ? b.F && b.F.Aa == (d.contentUrl || d.contentId) ? (e = _.H(b.F), b.F = null) : e = bo(b, c) : (_.C(Mn, "LoadRequest data was corrupted"),
                e = _.Ic());
            return e
        }).then(function(a) {
            f.ib(a);
            a.la.De(b.o);
            Qn(b);
            b.h = a;
            return b.ca
        }).then(function(a) {
            if (!a) return _.Ic(Error("No media element"));
            var e = _.r(c.autoplay) ? c.autoplay : !0,
                f = c.currentTime,
                g = c.activeTrackIds || void 0;
            b.J = c.playbackRate || b.J;
            b.o.dispatchEvent(new jl("PLAYER_LOADING", d));
            return Xm(b.h, a, e, f, g, b.J)
        }).then(function(a) {
            b.C == c.requestId && (b.L.g = b.h, b.D.g = b.h, a = a.Ga(), f.o && (a.tracks = a.tracks || void 0, a.tracks && !dg(a.tracks) ? _.C(K, "Invalid tracks information") : a.activeTrackIds && !eg(a.tracks,
                a.activeTrackIds) ? _.C(K, "Invalid active tracks") : (f.g && f.g.media && (f.g.activeTrackIds = a.activeTrackIds, f.g.media.tracks = a.tracks, f.g.media.textTrackStyle = a.textTrackStyle), f.l.load("", !1, void 0, a, !0))), Zn(b, b.C), co(b, !0), Ym(b.h, window.cast.A.K.Jc(d)), b.o.dispatchEvent(new jl("PLAYER_LOAD_COMPLETE", d)), ao(b), Qn(b), b.ha = !0, wg(f))
        }), function(a) {
            a && a.message && _.C(Mn, "Load failed: " + a.message);
            og(f, "LOAD_FAILED");
            mj("Cast.CAF.LoadError", window.cast.A.common.ia.Xl(a && a.reason));
            b.o.dispatchEvent(new bl(905,
                a));
            b.o.dispatchEvent(new hl(void 0, "ERROR"))
        })
    };
    _.h.cn = function(a) {
        var b = this,
            c = window.cast.A.K.xl(a.data),
            d = c.media;
        if (!d || !d.contentUrl && !d.contentId) return _.C(Mn, "PreloadRequest data was corrupted"), !1;
        this.F ? (a = this.F.end("STOPPED"), this.F = null) : a = _.H();
        a.then(function() {
            return bo(b, c)
        }).then(function(a) {
            b.o.dispatchEvent(new jl("PLAYER_PRELOADING", d));
            b.F = a;
            a.fc(c.currentTime || void 0)
        }, function() {
            _.C(Mn, "Cannot create player on preload")
        });
        return !0
    };
    _.h.bn = function(a) {
        var b = this,
            c = window.cast.A.K.wl(a.data),
            d = c.media,
            e = Object.assign(new Fk, this.ga);
        this.T && (e = this.T(c, e));
        var f = this.U ? this.U(c) : d.contentUrl || d.contentId;
        _.H(e).then(function(a) {
            return a ? _.H(f).then(function(e) {
                if (!e) return _.C(Mn, "Load failed, missing content url."), _.Ic("INVALID_PARAMS");
                e = window.cast.A.media.util.rh(d, a, e);
                return Dm(e, c.currentTime).then(function(a) {
                    b.La = a;
                    return a.ai()
                })
            }) : (_.C(Mn, "Load failed, missing playback config."), _.Ic("INVALID_PARAMS"))
        }).then(function() {
            b.La =
                null
        }, function(c) {
            _.db(Eq, c) || (c = "APP_ERROR");
            Vn(b, a, "ERROR", c)
        })
    };
    _.h.Zm = function() {
        this.o.dispatchEvent(new jl("PLAYER_PRELOADING_CANCELLED"));
        return !0
    };
    _.h.Pm = function(a) {
        var b = this;
        this.h && this.h.yg(a);
        a && !a.breakStatus && ["PLAYING", "PAUSED"].includes(a.playerState) && co(this, !1);
        var c = a;
        this.oa && (c = this.oa(a));
        return window.Promise.resolve(c).then(function(a) {
            a = fb(a);
            b.o.dispatchEvent(new fl(window.cast.A.K.ul(a)));
            return a
        })
    };
    _.h.pk = function(a) {
        var b;
        if (b = this.h) b = this.h, b.h ? Vm(b) ? (_.F(Uq, "skipAd"), b.rg(), b = !0) : (_.F(Uq, "skipAd - ad cannot be skipped"), b = !1) : (_.F(Uq, "skipAd - not playing ad"), b = !1);
        b ? this.$(!1, a.data.requestId) : Vn(this, a, "INVALID_REQUEST", "INVALID_REQUEST")
    };
    _.h.Vf = function(a) {
        this.o.dispatchEvent(new bl(906, _.eb(a)))
    };
    _.h.an = function(a) {
        this.Vf(a);
        $n(this, this.C, a)
    };
    _.h.Km = function(a) {
        this.o.dispatchEvent(new rl("CACHE_INSERTED", a))
    };
    _.h.Jm = function(a) {
        this.o.dispatchEvent(new rl("CACHE_HIT", a))
    };
    _.h.on = function(a) {
        var b = this,
            c = this.vc();
        if (c) {
            var d = new vj;
            d.autoplay = "PAUSED" !== this.Xb();
            d.media = c;
            if (d.media && this.h) {
                c = this.h.timeline.D;
                var e = _.eb(d.media);
                e.breaks = c.breaks;
                e.breakClips = c.breakClips;
                d.media = e
            }
            d.playbackRate = this.getPlaybackRate();
            d.currentTime = this.getCurrentTimeSec();
            d.activeTrackIds = bg(this.l) || void 0;
            if (c = cg(this.l))
                if (e = c.w) d.queueData = _.eb(e), c = c.Xc(), 0 <= c && (d.queueData.startIndex = c, d.queueData.startTime = d.currentTime);
            c = new Mj;
            c.loadRequestData = d;
            d = c;
            this.Aa && (d = this.Aa(c));
            window.Promise.resolve(d).then(function(c) {
                if (c) {
                    var d = b.l,
                        e = a.senderId,
                        f = a.data.requestId;
                    (c = window.cast.A.K.Xn(c)) ? (gc(K, kc, "Sending SessionState in StoreSessionResponse.\n         SessionState=" + JSON.stringify(c)), gc(K, gq, "Sending store session response message to " + e), c = new Pg(c), c.requestId = f, d.w.send(e, c)) : _.C(K, "Cannot send store session response. Miss SessionState object.")
                } else Vn(b, a, "ERROR", "NOT_SUPPORTED")
            }, function() {
                Vn(b, a, "ERROR", "APP_ERROR")
            })
        } else _.C(Mn, "No media is being played on StoreSession"),
            Vn(this, a, "INVALID_PLAYER_STATE")
    };
    _.h.mn = function(a) {
        var b = window.cast.A.K.Al(a.data);
        b.sessionState.loadRequestData ? (a = b.sessionState.loadRequestData, a.requestId = b.requestId, this.N && (a.credentials = this.N, a.credentialsType = "cloud"), this.load(a)) : Vn(this, a, "INVALID_REQUEST")
    };
    _.h.zf = function(a) {
        var b = a.type;
        this.o.dispatchEvent(new il(On[a.type] || Pn[b], _.eb(a.data), a.senderId))
    };
    _.h.Hc = function(a) {
        this.M.Hc(a)
    };
    var Mn = _.B("cast.framework.PlayerManager"),
        Yq = {},
        Xq = (Yq.GET_STATUS = "getstatus", Yq.LOAD = "load", Yq.PAUSE = "pause", Yq.STOP = "stop", Yq.PLAY = "play", Yq.SKIP_AD = "skipad", Yq.PLAY_AGAIN = "playagain", Yq.SEEK = "seek", Yq.SET_PLAYBACK_RATE = "setplaybackrate", Yq.SET_VOLUME = "setvolume", Yq.EDIT_TRACKS_INFO = "edittracksinfo", Yq.EDIT_AUDIO_TRACKS = "editaudiotracks", Yq.PRECACHE = "precache", Yq.PRELOAD = "preload", Yq.QUEUE_LOAD = "queueload", Yq.QUEUE_INSERT = "queueinsert", Yq.QUEUE_UPDATE = "queueupdate", Yq.QUEUE_REMOVE = "queueremove",
            Yq.QUEUE_REORDER = "queuereorder", Yq.QUEUE_GET_ITEM_RANGE = "getitemsrange", Yq.QUEUE_GET_ITEMS = "getitemsinfo", Yq.QUEUE_GET_ITEM_IDS = "getqueueids", Yq.USER_ACTION = "useraction", Yq.STORE_SESSION = "storesession", Yq.RESUME_SESSION = "resumesession", Yq),
        Zq = {},
        On = (Zq.load = "REQUEST_LOAD", Zq.stop = "REQUEST_STOP", Zq.pause = "REQUEST_PAUSE", Zq.precache = "REQUEST_PRECACHE", Zq.play = "REQUEST_PLAY", Zq.skipad = "REQUEST_SKIP_AD", Zq.playagain = "REQUEST_PLAY_AGAIN", Zq.seek = "REQUEST_SEEK", Zq.setplaybackrate = "REQUEST_PLAYBACK_RATE_CHANGE",
            Zq.setvolume = "REQUEST_VOLUME_CHANGE", Zq.edittracksinfo = "REQUEST_EDIT_TRACKS_INFO", Zq.editaudiotracks = "REQUEST_EDIT_AUDIO_TRACKS", Zq.queueload = "REQUEST_QUEUE_LOAD", Zq.queueinsert = "REQUEST_QUEUE_INSERT", Zq.queueupdate = "REQUEST_QUEUE_UPDATE", Zq.queueremove = "REQUEST_QUEUE_REMOVE", Zq.queuereorder = "REQUEST_QUEUE_REORDER", Zq.getitemsrange = "REQUEST_QUEUE_GET_ITEM_RANGE", Zq.getitemsinfo = "REQUEST_QUEUE_GET_ITEMS", Zq.getqueueids = "REQUEST_QUEUE_GET_ITEM_IDS", Zq.useraction = "REQUEST_USER_ACTION", Zq.storesession =
            "REQUEST_STORE_SESSION", Zq.resumesession = "REQUEST_RESUME_SESSION", Zq),
        $q = {},
        Pn = ($q.SET_CREDENTIALS = "REQUEST_SET_CREDENTIALS", $q.LOAD_BY_ENTITY = "REQUEST_LOAD_BY_ENTITY", $q.USER_ACTION = "REQUEST_USER_ACTION", $q.DISPLAY_STATUS = "REQUEST_DISPLAY_STATUS", $q.CUSTOM_COMMAND = "REQUEST_CUSTOM_COMMAND", $q.FOCUS_STATE = "REQUEST_FOCUS_STATE", $q);
    _.w("cast.framework.breaks.BreakManagerImpl", P, void 0);
    P.prototype.U = function(a) {
        this.h = a
    };
    P.prototype.ib = function(a) {
        this.o = a;
        this.g && this.g.mi(a)
    };
    P.prototype.reset = function() {
        this.h = null;
        this.g && this.g.reset()
    };
    P.prototype.Wc = function() {
        return this.h ? this.h.g.slice() : []
    };
    P.prototype.getBreaks = P.prototype.Wc;
    P.prototype.Vc = function(a) {
        return this.h ? this.h.Vc(a) : null
    };
    P.prototype.getBreakById = P.prototype.Vc;
    P.prototype.Ub = function() {
        return this.h ? this.h.Ub() : []
    };
    P.prototype.getBreakClips = P.prototype.Ub;
    P.prototype.eb = function(a) {
        return this.h ? this.h.eb(a) : null
    };
    P.prototype.getBreakClipById = P.prototype.eb;
    P.prototype.T = function(a) {
        a && go(a);
        this.D = a || this.J.bind(this)
    };
    P.prototype.kg = function(a) {
        this.T(a)
    };
    P.prototype.setBreakSeekInterceptor = P.prototype.kg;
    P.prototype.M = function(a) {
        _.F(fo, "break seek interceptor is invoked.");
        return eo(this.D, a)
    };
    P.prototype.J = function(a) {
        var b = this;
        a.seekFrom > a.seekTo || a.breaks.reverse();
        var c = a.breaks.find(function(a) {
            return !a.isWatched || b.B
        });
        a.breaks = c ? [c] : [];
        return a
    };
    P.prototype.P = function(a) {
        a && go(a);
        this.F = a || this.I.bind(this)
    };
    P.prototype.jg = function(a) {
        this.P(a)
    };
    P.prototype.setBreakClipLoadInterceptor = P.prototype.jg;
    P.prototype.L = function(a, b) {
        var c = this;
        _.F(fo, "break clip initialize interceptor is invoked. ");
        return eo(this.F, a, b).then(function(a) {
            if (!a) return [];
            a instanceof Array || (a = [a]);
            a = a.map(function(a) {
                return c.g && a.vastAdsRequest && !a.contentId ? c.g.mk(a) : [a]
            });
            return Mc(a).then(function(a) {
                var b = [];
                a.forEach(function(a) {
                    a.kf ? b.push.apply(b, a.value) : c.h.la.dispatchEvent(new bl(901, Error(a.reason)))
                });
                return b
            })
        })
    };
    P.prototype.I = function(a) {
        return a
    };
    P.prototype.Hc = function(a) {
        this.B = a
    };
    P.prototype.setPlayWatchedBreak = P.prototype.Hc;
    P.prototype.Wb = function() {
        return this.B
    };
    P.prototype.getPlayWatchedBreak = P.prototype.Wb;
    P.prototype.Ic = function(a) {
        null === a || _.z(a) ? (this.C = a, this.g && this.g.Ic(a)) : _.C(fo, "setVastTrackingInterceptor failed since handler is not a function")
    };
    P.prototype.setVastTrackingInterceptor = P.prototype.Ic;
    P.prototype.V = function(a) {
        a = this.eb(a.breakClipId);
        this.g.sm(a) && this.g.rk(a)
    };
    P.prototype.N = function(a) {
        var b = this;
        if (!ho(a)) return _.H();
        this.l || (this.l = window.cast.A.common.Ac.xm(), this.l.then(function() {
            b.g = new _.ar(b.w);
            b.w.addEventListener("BREAK_CLIP_LOADING", b.V.bind(b));
            b.o && b.g.mi(b.o);
            void 0 !== b.C && b.g.Ic(b.C)
        }));
        return this.l
    };
    P.prototype.G = function(a) {
        return this.g ? this.g.qk(a) : (_.C(fo, "VastManager hasn't been loaded"), _.H(null))
    };
    var fo = _.B("cast.framework.breaks.BreakManagerImpl");
    _.w("cast.framework.ui.State", {
        LAUNCHING: "launching",
        IDLE: "idle",
        LOADING: "loading",
        BUFFERING: "buffering",
        PAUSED: "paused",
        PLAYING: "playing"
    }, void 0);
    _.w("cast.framework.ui.ContentType", {
        VIDEO: "video",
        AUDIO: "audio",
        IMAGE: "image"
    }, void 0);
    _.w("cast.framework.ui.DisplayType", {
        TV: "tv",
        TOUCH: "touch"
    }, void 0);
    _.w("cast.framework.ui.PresentationData", io, void 0);
    _.w("cast.framework.ui.ApplicationData", jo, void 0);
    _.w("cast.framework.ui.PlayerData", ko, void 0);
    window.cast.A.O.Z = "Changed";
    var np = "applicationData" + window.cast.A.O.Z,
        ep = "state" + window.cast.A.O.Z,
        br = "isSeeking" + window.cast.A.O.Z,
        cr = "currentTime" + window.cast.A.O.Z,
        cp = "metadata" + window.cast.A.O.Z,
        $o = "media" + window.cast.A.O.Z,
        ap = "queueData" + window.cast.A.O.Z,
        dr = "title" + window.cast.A.O.Z,
        er = "thumbnailUrl" + window.cast.A.O.Z,
        fr = "nextTitle" + window.cast.A.O.Z,
        gr = "nextSubtitle" + window.cast.A.O.Z,
        hr = "nextThumbnailUrl" + window.cast.A.O.Z,
        dp = "supportedMediaCommands" + window.cast.A.O.Z,
        jp = "isLive" + window.cast.A.O.Z,
        ip = "breakPercentagePositions" +
        window.cast.A.O.Z,
        gp = "isPlayingBreak" + window.cast.A.O.Z,
        ir = "isBreakSkippable" + window.cast.A.O.Z,
        mp = "whenSkippable" + window.cast.A.O.Z,
        jr = "numberBreakClips" + window.cast.A.O.Z,
        kr = "currentBreakClipNumber" + window.cast.A.O.Z,
        hp = "breakTitle" + window.cast.A.O.Z,
        lr = "displayType" + window.cast.A.O.Z,
        Yo = "liveSeekableRange" + window.cast.A.O.Z,
        lp = "presentation" + window.cast.A.O.Z,
        bp = "activeTrackIds" + window.cast.A.O.Z;
    _.w("cast.framework.ui.PlayerDataEventType", {
        ANY_CHANGE: "*",
        APPLICATION_DATA_CHANGED: np,
        STATE_CHANGED: ep,
        IS_SEEKING_CHANGED: br,
        DURATION_CHANGED: "duration" + window.cast.A.O.Z,
        CURRENT_TIME_CHANGED: cr,
        PLAYBACK_RATE_CHANGED: "playbackRate" + window.cast.A.O.Z,
        METADATA_CHANGED: cp,
        MEDIA_SESSION_ID_CHANGED: "mediaSessionId" + window.cast.A.O.Z,
        MEDIA_CHANGED: $o,
        QUEUE_DATA_CHANGED: ap,
        TITLE_CHANGED: dr,
        SUBTITLE_CHANGED: "subtitle" + window.cast.A.O.Z,
        THUMBNAIL_URL_CHANGED: er,
        NEXT_TITLE_CHANGED: fr,
        NEXT_SUBTITLE_CHANGED: gr,
        NEXT_THUMBNAIL_URL_CHANGED: hr,
        PRELOADING_NEXT_CHANGED: "preloadingNext" + window.cast.A.O.Z,
        CONTENT_TYPE_CHANGED: "contentType" + window.cast.A.O.Z,
        SUPPORTED_MEDIA_COMMANDS_CHANGED: dp,
        IS_LIVE_CHANGED: jp,
        BREAK_PERCENTAGE_POSITIONS_CHANGED: ip,
        IS_PLAYING_BREAK_CHANGED: gp,
        IS_BREAK_SKIPPABLE_CHANGED: ir,
        WHEN_SKIPPABLE_CHANGED: mp,
        NUMBER_BREAK_CLIPS_CHANGED: jr,
        CURRENT_BREAK_CLIP_NUMBER_CHANGED: kr,
        BREAK_TITLE_CHANGED: hp,
        DISPLAY_STATUS_CHANGED: "displayStatus" + window.cast.A.O.Z,
        DISPLAY_TYPE_CHANGED: lr,
        LIVE_SEEKABLE_RANGE_CHANGED: Yo,
        MEDIA_START_ABSOLUTE_TIME_CHANGED: "mediaStartAbsoluteTime" + window.cast.A.O.Z,
        SECTION_START_TIME_IN_MEDIA_CHANGED: "sectionStartTimeInMedia" + window.cast.A.O.Z,
        SECTION_DURATION_CHANGED: "sectionDuration" + window.cast.A.O.Z,
        PRESENTATION_CHANGED: lp,
        CUSTOM_STATE_CHANGED: "customState" + window.cast.A.O.Z,
        ACTIVE_TRACK_IDS_CHANGED: bp
    }, void 0);
    _.w("cast.framework.ui.PlayerDataChangedEvent", lo, void 0);
    window.cast.A.O.W = _.B("cast.framework.ui");
    window.cast.A.O.pm = function() {
        var a = window.document.getElementsByTagName("cast-media-player")[0];
        if (a) {
            var b = window.document.getElementsByClassName("castSplashScreen")[0];
            window.cast.A.O.qm(a, window.document.getElementsByClassName("castWelcomeScreen")[0] || b)
        }
    };
    window.cast.A.O.qm = function(a, b) {
        b = void 0 === b ? null : b;
        var c = window.cast.A.O.W;
        b && (_.F(c, "remove welcome screen"), b.remove());
        a.h.setAttribute("state", "idle")
    };
    _.w("cast.framework.CastReceiverContext", Q, void 0);
    Q.prototype.reset = function() {
        this.g = null;
        this.o = !1
    };
    Q.prototype.wm = function(a) {
        oo(this, void 0 === a ? !1 : a)
    };
    Q.prototype.loadPlayerLibraries = Q.prototype.wm;
    Q.prototype.initialize = function() {
        this.g.yn && (this.h = this.g.yn);
        this.g.vn && (this.l = this.g.vn);
        this.g.playbackConfig && this.l.oi(this.g.playbackConfig);
        this.g.preferredPlaybackRate && (this.l.J = this.g.preferredPlaybackRate);
        this.g.preferredTextLanguage && (this.l.I = this.g.preferredTextLanguage);
        this.g.wn && (this.l.V = this.g.wn);
        if (this.g.customNamespaces)
            for (var a in this.g.customNamespaces) this.g.customNamespaces.hasOwnProperty(a) && Md(this.h, a, window.cast.A.K.Ai(this.g.customNamespaces[a]));
        this.l.Hc(!!this.g.playWatchedBreak);
        a = this.h;
        a.X = this.C.bind(this);
        a.aa = this.F.bind(this);
        a.V = this.B.bind(this);
        this.isRemoteControl() || oo(this, this.g.useLegacyDashSupport, this.g.mplUrl, this.g.shakaUrl)
    };
    Q.prototype.Ol = function() {
        return this.l
    };
    Q.prototype.getPlayerManager = Q.prototype.Ol;
    Q.prototype.getSenders = function() {
        var a = this;
        return this.h.getSenders().map(function(b) {
            return window.cast.A.K.hh(a.h.Wd(b))
        })
    };
    Q.prototype.getSenders = Q.prototype.getSenders;
    Q.prototype.Wd = function(a) {
        return window.cast.A.K.hh(this.h.Wd(a))
    };
    Q.prototype.getSender = Q.prototype.Wd;
    Q.prototype.start = function(a) {
        _.F(no, "start");
        a || (a = new Ek);
        if (this.g) throw Error("Cast receiver options already provided");
        this.g = a;
        this.initialize();
        var b = {
            addEventListener: _.x
        };
        a = a.gp || new ag(this.g.mediaElement || b, this.g.supportedCommands || void 0, this.g.localSenderId || void 0);
        void 0 === this.g.supportedCommands && a.Ed(262144);
        _.r(this.g.queue) && (qj("Cast.CAF.Queue"), a.mg(window.cast.A.K.Mn(this.g.queue)));
        b = this.l;
        b.l = a;
        b.G.resolve();
        b.L.h = a;
        b.D.h = a;
        a.od = b.bn.bind(b);
        a.ld = b.$m.bind(b);
        a.pd = b.cn.bind(b);
        a.kd = b.Zm.bind(b);
        a.$e = b.Pm.bind(b);
        a.Uf = _.x;
        a.md = b.an.bind(b);
        a.sd = b.pk.bind(b);
        a.Ue = b.Vf.bind(b);
        Lk(b.g, "load", a.ld.bind(a));
        a.ld = b.g.g;
        Lk(b.g, "preload", a.pd.bind(a));
        a.pd = b.g.g;
        Lk(b.g, "precache", a.od.bind(a));
        a.od = b.g.g;
        Lk(b.g, "cancelpreload", a.kd.bind(a));
        a.kd = b.g.g;
        Lk(b.g, "stop", a.Kb.bind(a));
        a.Kb = b.g.g;
        Lk(b.g, "pause", a.Ya.bind(a));
        a.Ya = b.g.g;
        Lk(b.g, "play", a.Za.bind(a));
        a.Za = b.g.g;
        Lk(b.g, "skipad", a.sd.bind(a));
        a.sd = b.g.g;
        Lk(b.g, "seek", a.$a.bind(a));
        a.$a = b.g.g;
        Lk(b.g, "setplaybackrate", a.re.bind(a));
        a.re = b.g.g;
        Lk(b.g, "setvolume", a.se.bind(a));
        a.se = b.g.g;
        Lk(b.g, "getstatus", a.je.bind(a));
        a.je = b.g.g;
        Lk(b.g, "editaudiotracks", a.he.bind(a));
        a.he = b.g.g;
        Lk(b.g, "edittracksinfo", a.ie.bind(a));
        a.ie = b.g.g;
        Lk(b.g, "queueload", a.oe.bind(a));
        a.oe = b.g.g;
        Lk(b.g, "queueinsert", a.ne.bind(a));
        a.ne = b.g.g;
        Lk(b.g, "queueupdate", a.qd.bind(a));
        a.qd = b.g.g;
        Lk(b.g, "queueremove", a.pe.bind(a));
        a.pe = b.g.g;
        Lk(b.g, "queuereorder", a.qe.bind(a));
        a.qe = b.g.g;
        a.ug = !0;
        a.td = b.on.bind(b);
        Lk(b.g, "storesession", a.td.bind(a));
        a.td = b.g.g;
        a.rd =
            b.mn.bind(b);
        Lk(b.g, "resumesession", a.rd.bind(a));
        a.rd = b.g.g;
        b = b.Ta;
        b.g = a;
        b.g.P = b.h;
        (a = this.g.mediaElement || qo()) && this.l.ib(a);
        b = po();
        a = this.h;
        b = !!(this.g.uiConfig && this.g.uiConfig.touchScreenOptimizedApp || this.g.touchScreenOptimizedApp || b);
        a.zc() ? _.C(ee, "initTouchScreenOptimizedApp() method cannot be called after CastReceiverManager.start() has been called") : (_.r(b) || _.C(ee, "setTouchScreenOptimizedApp() has to be called with 1 required argument"), ne(a, b));
        this.h.start(window.cast.A.K.Pn(this.g));
        return this
    };
    Q.prototype.start = Q.prototype.start;
    Q.prototype.stop = function() {
        this.h.stop()
    };
    Q.prototype.stop = Q.prototype.stop;
    Q.prototype.isRemoteControl = function() {
        return !!window.cast.receiver.platform.gb("is-remote-control-mode-enabled")
    };
    Q.prototype.isRemoteControl = Q.prototype.isRemoteControl;
    Q.prototype.zc = function() {
        return this.h.zc()
    };
    Q.prototype.isSystemReady = Q.prototype.zc;
    Q.prototype.wf = function() {
        return window.cast.A.K.Gl(this.h.wf())
    };
    Q.prototype.getVisibilityState = Q.prototype.wf;
    Q.prototype.tf = function() {
        return window.cast.A.K.Bl(this.h.tf())
    };
    Q.prototype.getStandbyState = Q.prototype.tf;
    Q.prototype.Xd = function() {
        return window.cast.A.K.Cl(this.h.Xd())
    };
    Q.prototype.getSystemState = Q.prototype.Xd;
    Q.prototype.Qd = function() {
        return window.cast.A.K.ql(this.h.Qd())
    };
    Q.prototype.getApplicationData = Q.prototype.Qd;
    Q.prototype.vd = function(a) {
        this.h.vd(a)
    };
    Q.prototype.setApplicationState = Q.prototype.vd;
    Q.prototype.og = function(a) {
        this.h.og(a)
    };
    Q.prototype.setSystemVolumeLevel = Q.prototype.og;
    Q.prototype.pg = function(a) {
        this.h.pg(a)
    };
    Q.prototype.setSystemVolumeMuted = Q.prototype.pg;
    Q.prototype.bd = function() {
        return window.cast.A.K.Dl(this.h.bd())
    };
    Q.prototype.getSystemVolume = Q.prototype.bd;
    Q.prototype.Be = function(a) {
        this.h.Be(a)
    };
    Q.prototype.setInactivityTimeout = Q.prototype.Be;
    Q.prototype.ye = function(a) {
        this.h.ye(a)
    };
    Q.prototype.sendFeedbackMessage = Q.prototype.ye;
    Q.prototype.Rg = function(a, b) {
        a = ro(this, a);
        if (!_.z(b)) throw Error("listener on custom channel should be a function");
        a.l = b
    };
    Q.prototype.addCustomMessageListener = Q.prototype.Rg;
    Q.prototype.zn = function(a) {
        ro(this, a).l = null
    };
    Q.prototype.removeCustomMessageListener = Q.prototype.zn;
    Q.prototype.ki = function(a, b, c) {
        _.r(b) || (b = "*:*");
        ro(this, a).send(b, c)
    };
    Q.prototype.sendCustomMessage = Q.prototype.ki;
    Q.prototype.C = function(a) {
        _.F(no, "onSenderDisconnected");
        if (_.r(a.senderId) && _.r(a.reason)) {
            var b = a.userAgent.split(","),
                c = 0 == this.h.getSenders().length;
            a = "requested_by_sender" == a.reason;
            var d = b[1];
            b = "iOS CastSDK" == b[0] && 0 >= _.Ya(d, "2.2.0") && "0.0.0" != d;
            c && a && !b && this.stop()
        } else _.F(no, "SenderDisconnectedEvent is corrupted")
    };
    Q.prototype.F = function(a) {
        _.F(no, "onVisibilityChanged");
        _.r(a.isVisible) ? a.isVisible || "IDLE" === this.l.Xb() || this.l.pause() : _.F(no, "VisibilityChangedEvent is corrupted")
    };
    Q.prototype.B = function() {
        _.F(no, "onReady");
        if (!this.isRemoteControl()) {
            this.g.disableIdleTimeout || window.cast.A.common.Hn(this.l, this.stop.bind(this));
            var a = this.l;
            a.addEventListener("PLAYER_LOADING", this.G.bind(this));
            a.addEventListener("MEDIA_FINISHED", this.D.bind(this))
        }
        window.cast.A.O.pm()
    };
    Q.prototype.addEventListener = function(a, b) {
        this.h.addEventListener(a, b)
    };
    Q.prototype.addEventListener = Q.prototype.addEventListener;
    Q.prototype.removeEventListener = function(a, b) {
        this.h.removeEventListener(a, b)
    };
    Q.prototype.removeEventListener = Q.prototype.removeEventListener;
    Q.prototype.D = function() {
        this.h.vd("")
    };
    Q.prototype.G = function(a) {
        (a = a.media.metadata) && a.title && this.h.vd("Casting: " + a.title)
    };
    Q.prototype.Yc = function() {
        return this.h.Yc()
    };
    Q.prototype.getDeviceCapabilities = Q.prototype.Yc;
    Q.prototype.canDisplayType = function(a, b, c, d, e) {
        return this.h.canDisplayType(a, b, c, d, e)
    };
    Q.prototype.canDisplayType = Q.prototype.canDisplayType;
    Q.prototype.setLoggerLevel = function(a) {
        window.cast.receiver.vb.w(a)
    };
    Q.prototype.setLoggerLevel = Q.prototype.setLoggerLevel;
    Q.getInstance = to;
    var so = null,
        no = _.B("cast.framework.Application");
    var uo = _.B("cast.framework.RemoteMedia");
    wo.prototype.o = function(a) {
        a.data && a.data.type ? this.h.dispatchEvent(a.data) : _.C(uo, "Bad message on remote control channel" + JSON.stringify(a))
    };
    wo.prototype.addEventListener = function(a, b) {
        this.h.addEventListener(a, b)
    };
    wo.prototype.removeEventListener = function(a, b) {
        this.h.removeEventListener(a, b)
    };
    var mr = new wo;
    window.cast.A.Le = wo;
    window.cast.A.Le.H = function() {
        return mr
    };
    xo.prototype.then = function(a) {
        this.h.then(a)
    };
    xo.prototype.resolve = function() {
        this.g.resolve()
    };
    window.cast.A.wa.category = {};
    window.cast.A.wa.category.$j = "REQUEST_SEEK REQUEST_LOAD REQUEST_STOP REQUEST_PAUSE REQUEST_PLAY REQUEST_PLAY_AGAIN REQUEST_PLAYBACK_RATE_CHANGE REQUEST_VOLUME_CHANGE REQUEST_EDIT_TRACKS_INFO REQUEST_EDIT_AUDIO_TRACKS REQUEST_SET_CREDENTIALS REQUEST_SKIP_AD REQUEST_LOAD_BY_ENTITY REQUEST_USER_ACTION REQUEST_DISPLAY_STATUS REQUEST_CUSTOM_COMMAND REQUEST_STORE_SESSION REQUEST_RESUME_SESSION REQUEST_FOCUS_STATE REQUEST_PRECACHE REQUEST_QUEUE_LOAD REQUEST_QUEUE_INSERT REQUEST_QUEUE_UPDATE REQUEST_QUEUE_REMOVE REQUEST_QUEUE_REORDER REQUEST_QUEUE_GET_ITEM_RANGE REQUEST_QUEUE_GET_ITEMS REQUEST_QUEUE_GET_ITEM_IDS".split(" ");
    _.w("cast.framework.events.category.REQUEST", window.cast.A.wa.category.$j, void 0);
    window.cast.A.wa.category.Ti = "REQUEST_SEEK REQUEST_LOAD REQUEST_STOP REQUEST_PAUSE REQUEST_PLAY REQUEST_PLAY_AGAIN REQUEST_PLAYBACK_RATE_CHANGE REQUEST_PRECACHE REQUEST_SKIP_AD REQUEST_VOLUME_CHANGE REQUEST_EDIT_TRACKS_INFO REQUEST_EDIT_AUDIO_TRACKS REQUEST_SET_CREDENTIALS REQUEST_LOAD_BY_ENTITY REQUEST_USER_ACTION REQUEST_DISPLAY_STATUS REQUEST_CUSTOM_COMMAND REQUEST_STORE_SESSION REQUEST_RESUME_SESSION REQUEST_FOCUS_STATE REQUEST_QUEUE_LOAD REQUEST_QUEUE_INSERT REQUEST_QUEUE_UPDATE REQUEST_QUEUE_REMOVE REQUEST_QUEUE_REORDER REQUEST_QUEUE_GET_ITEM_RANGE REQUEST_QUEUE_GET_ITEMS REQUEST_QUEUE_GET_ITEM_IDS BREAK_ENDED BREAK_STARTED BREAK_CLIP_ENDED BREAK_CLIP_LOADING BREAK_CLIP_STARTED BUFFERING ERROR LIVE_ENDED LIVE_IS_MOVING_WINDOW_CHANGED MEDIA_FINISHED MEDIA_STATUS CUSTOM_STATE MEDIA_INFORMATION_CHANGED PAUSE PLAYER_LOADING PLAYER_LOAD_COMPLETE PLAYER_PRELOADING PLAYER_PRELOADING_CANCELLED PLAYING RATE_CHANGE SEEKED SEEKING".split(" ");
    _.w("cast.framework.events.category.CORE", window.cast.A.wa.category.Ti, void 0);
    window.cast.A.wa.category.DEBUG = "ABORT BITRATE_CHANGED CAN_PLAY CAN_PLAY_THROUGH CLIP_STARTED CLIP_ENDED CACHE_LOADED CACHE_HIT CACHE_INSERTED DURATION_CHANGE EMPTIED EMSG ENDED ID3 LOADED_DATA LOADED_METADATA LOAD_START PLAY STALLED INBAND_TRACK_ADDED WAITING".split(" ");
    _.w("cast.framework.events.category.DEBUG", window.cast.A.wa.category.DEBUG, void 0);
    window.cast.A.wa.category.ej = ["SEGMENT_DOWNLOADED", "PROGRESS", "SUSPEND", "TIME_UPDATE"];
    _.w("cast.framework.events.category.FINE", window.cast.A.wa.category.ej, void 0);
    _.q(yo, Ug);
    yo.prototype.g = function(a) {
        this.w ? (this.o && (a.mediaSessionId = this.o), vo(this.B, a)) : Ug.prototype.g.call(this, a)
    };
    yo.prototype.F = function(a) {
        this.w ? vo(this.B, a) : Ug.prototype.F.call(this, a)
    };
    _.w("cast.framework.ui.PlayerDataBinder", Co, void 0);
    Co.prototype.addEventListener = function(a, b) {
        this.w.addEventListener(a, b)
    };
    Co.prototype.addEventListener = Co.prototype.addEventListener;
    Co.prototype.removeEventListener = function(a, b) {
        this.w.removeEventListener(a, b)
    };
    Co.prototype.removeEventListener = Co.prototype.removeEventListener;
    var Zo = new ko;
    new Co(Zo);
    _.B("cast.framework.ui.PlayerDataBinder");
    var nr = {},
        fp = (nr.launching = "IDLE", nr.idle = "IDLE", nr.loading = "LOADING", nr.buffering = "BUFFERING", nr.paused = "PAUSED", nr.playing = "PLAYING", nr);
    _.q(pp, pi);
    pp.prototype.M = function() {
        return new yo
    };
    pp.prototype.qc = function(a, b) {
        si(this, a, b)
    };
    pp.prototype.B = function(a, b) {
        return this.l.isLive ? !!this.l.presentation.seekableRange : pi.prototype.B.call(this, a, b)
    };
    _.w("cast.framework.ui.Controls", qp, void 0);
    qp.prototype.qc = function(a, b) {
        var c = this;
        rp(this, function() {
            c.g.qc(a, b)
        })
    };
    qp.prototype.assignButton = qp.prototype.qc;
    qp.prototype.Ve = function() {
        var a = this;
        rp(this, function() {
            a.g.Ve()
        })
    };
    qp.prototype.clearDefaultSlotAssignments = qp.prototype.Ve;
    qp.prototype.pi = function() {
        window.cast.receiver.ia.zm("Cast.Receiver.setScrubberVisibility")
    };
    qp.prototype.setScrubberVisibility = qp.prototype.pi;
    qp.prototype.Ul = function() {
        var a = window.document.createElement("div");
        a.style.position = "absolute";
        a.style.visibility = "hidden";
        a.style.left = "-1000px";
        a.style.setProperty("height", "var(--cast-controls-safe-area-height)");
        window.document.body.appendChild(a);
        var b = (0, window.parseInt)(window.getComputedStyle(a, null).height, 10);
        a.remove();
        return b
    };
    qp.prototype.getSafeAreaHeight = qp.prototype.Ul;
    _.qa(qp);
    qp.getInstance = qp.H;
    window.document.addEventListener("DOMContentLoaded", function() {
        qp.H()
    });
    _.w("cast.framework.ui.ControlsButton", {
        QUEUE_NEXT: "queue-next",
        QUEUE_PREV: "queue-prev",
        SEEK_FORWARD_10: "seek-forward-10",
        SEEK_FORWARD_15: "seek-forward-15",
        SEEK_FORWARD_30: "seek-forward-30",
        SEEK_BACKWARD_10: "seek-backward-10",
        SEEK_BACKWARD_15: "seek-backward-15",
        SEEK_BACKWARD_30: "seek-backward-30",
        CAPTIONS: "captions",
        NO_BUTTON: "no-button",
        REPEAT: "repeat",
        SHUFFLE: "shuffle",
        LIKE: "like",
        DISLIKE: "dislike"
    }, void 0);
    _.w("cast.framework.ui.ControlsSlot", {
        SLOT_1: "slot-1",
        SLOT_2: "slot-2",
        SLOT_3: "slot-3",
        SLOT_4: "slot-4"
    }, void 0);
    sp.prototype.start = function() {
        var a = this;
        this.g = up(this);
        2 > this.g.length || (this.w = wp(this, "--animation-duration"), this.B = Math.max(wp(this, "--interval-duration"), this.w), 0 < this.B && (this.C = (0, window.setInterval)(function() {
            return a.next()
        }, this.B)))
    };
    sp.prototype.stop = function() {
        (0, window.clearInterval)(this.C);
        this.C = void 0;
        (0, window.clearInterval)(this.F);
        this.F = void 0;
        for (var a = _.n(this.g), b = a.next(); !b.done; b = a.next()) b.value.classList.remove("visible", "top");
        this.h = void 0
    };
    sp.prototype.next = function() {
        this.l = this.h;
        this.h = void 0 === this.h ? 0 : (this.h + 1) % this.g.length;
        this.g[this.h].classList.add("top", "visible");
        void 0 !== this.l && this.g[this.l].classList.remove("top");
        tp(this)
    };
    var vp = _.B("cast.framework.ui.SlideshowManager");
    _.q(xp, window.HTMLElement);
    xp.prototype.getMediaElement = function() {
        return this.U
    };
    xp.prototype.getMediaElement = xp.prototype.getMediaElement;
    xp.prototype.createdCallback = function() {
        this.createShadowRoot().innerHTML = window.cast.A.Wi
    };
    xp.prototype.attachedCallback = function() {
        this.h = this.shadowRoot.getElementById("castPlayer");
        this.U = this.shadowRoot.getElementById("castMediaElement");
        this.X = this.shadowRoot.getElementById("castMetadataTitle");
        this.l = this.shadowRoot.getElementById("castMetadataSubtitle");
        this.B = this.shadowRoot.getElementById("castMetadataSubtitle2");
        this.va = this.shadowRoot.getElementById("castMetadataImageContainer");
        this.P = this.shadowRoot.getElementById("castMetadataImageAnimation");
        this.o = this.shadowRoot.getElementById("castMetadataImage");
        this.N = this.shadowRoot.getElementById("castControlsProgress");
        this.F = this.shadowRoot.getElementById("castControlsProgressInner");
        this.D = this.shadowRoot.getElementById("castControlsSeekable");
        this.G = this.shadowRoot.getElementById("castControlsSeekablePlayed");
        this.L = this.shadowRoot.getElementById("castControlsTotalTime");
        this.aa = this.shadowRoot.getElementById("castControlsCurTime");
        this.J = this.shadowRoot.getElementById("castBreakPosition");
        this.C = this.shadowRoot.getElementById("castBreakTime");
        this.hasAttribute("crossorigin") &&
            "" !== this.getAttribute("crossorigin") && this.getMediaElement().setAttribute("crossorigin", this.getAttribute("crossorigin"));
        this.M = this.shadowRoot.getElementById("nextMetadataCountdown");
        this.ha = this.shadowRoot.getElementById("nextMetadataTitle");
        this.ca = this.shadowRoot.getElementById("nextMetadataSubtitle");
        this.ga = this.shadowRoot.getElementById("nextMetadataImage");
        this.g = new ko;
        this.V = new Co(this.g);
        this.V.addEventListener("*", this.ja.bind(this));
        yp(this, this.g.applicationData);
        var a = this.g,
            b;
        for (b in a) this.h.setAttribute(b,
            a[b]);
        Cp(this, this.g.title, this.g.applicationData, this.g.displayType);
        Hp(this);
        this.I = new sp(this.shadowRoot.getElementById("castSlideshowElement"));
        this.I.start()
    };
    xp.prototype.ja = function(a) {
        if (this.I) {
            var b = this.I;
            b.stop();
            "idle" === a.value && b.start()
        }
        if (a.type != br) {
            if (a.type === ep) {
                if ("loading" === this.oa && "buffering" === a.value) return;
                this.oa = a.value
            }
            this.h.setAttribute(a.field, a.value)
        }
        switch (a.type) {
            case np:
                yp(this, a.value);
                Cp(this, this.g.title, this.g.applicationData, this.g.displayType);
                break;
            case br:
                Ip(this, !!a.value);
                break;
            case er:
                Bp(this, String(a.value));
                break;
            case dr:
                Cp(this, String(a.value), this.g.applicationData, this.g.displayType);
                break;
            case lr:
                Cp(this,
                    this.g.title, this.g.applicationData, this.g.displayType);
                break;
            case cp:
                a = a.value;
                this.l.innerHTML = "";
                this.B.innerHTML = "";
                if (a) switch (a.metadataType) {
                    case 1:
                        Dp(this.l, a.subtitle);
                        Dp(this.B, a.studio);
                        (a = a.releaseDate) && Dp(this.B, a.substr(0, 4));
                        break;
                    case 2:
                        (a.season || a.episode) && Dp(this.l, window.cast.receiver.R.kh(a.season, a.episode));
                        (b = a.originalAirdate) && Dp(this.l, b.substr(0, 4));
                        Dp(this.B, a.seriesTitle);
                        break;
                    case 3:
                        Dp(this.l, a.albumArtist || a.artist || a.composer);
                        Dp(this.B, a.albumName);
                        break;
                    default:
                        a.subtitle &&
                            (this.l.innerText = a.subtitle)
                }
                break;
            case lp:
                var c = this.g.presentation,
                    d = c.progressCurrentTime;
                a = c.progressDuration;
                b = c.seekableRange;
                this.aa.innerText = null != d ? Ep(d) : "";
                this.L.innerText = 0 < a ? Ep(a) : "";
                this.L.classList.toggle("hidden", !c.isDurationVisible);
                null == d || 0 >= a ? (this.F.classList.add("hidden"), this.G.classList.add("hidden"), this.D.classList.add("hidden")) : (this.F.classList.remove("hidden"), this.F.style.left = (c.liveProgressStart ? c.liveProgressStart / a * 100 : 0) + "%", this.F.style.width = (null == c.liveProgressStart &&
                    this.g.isLive ? 0 : (d - c.liveProgressStart || 0) / a * 100) + "%", this.G.classList.toggle("hidden", !b), this.D.classList.toggle("hidden", !b), b && (c = b.start / a * 100, d = (d - b.start) / a * 100, a = (b.end - b.start) / a * 100, this.G.style.left = c + "%", this.G.style.width = d + "%", this.D.style.left = c + "%", this.D.style.width = a + "%"));
                break;
            case cr:
                this.g.isPlayingBreak && Fp(this);
                this.g.preloadingNext && (a = window.cast.A.R.mf((this.g.duration - this.g.currentTime).toFixed(0)), this.M.innerText !== a && (this.M.innerText = a));
                break;
            case jr:
            case kr:
                a = this.g.numberBreakClips;
                0 < a ? (this.J.innerText = 1 < a ? this.g.currentBreakClipNumber + "/" + a : "", this.C.innerText = this.C.innerText || " ") : (this.J.innerText = "", this.C.innerText = "");
                break;
            case ip:
                Gp(this, a.value);
                break;
            case mp:
            case ir:
                Fp(this);
                break;
            case hr:
                b = this.ga;
                (a = String(a.value)) ? b.style.content = 'url("' + a.replace(/"/g, '\\"') + '")': b.style.removeProperty("content");
                break;
            case fr:
                this.ha.innerText = String(a.value);
                break;
            case gr:
                this.ca.innerText = String(a.value)
        }
    };
    _.B("cast.framework.ui.CustomPlayerElement");
    window.document.registerElement("cast-media-player", {
        prototype: xp.prototype
    });
    _.w("cast.framework.LoggerLevel", {
        DEBUG: 0,
        VERBOSE: 500,
        INFO: 800,
        WARNING: 900,
        ERROR: 1E3,
        NONE: 1500
    }, void 0);
    _.w("cast.framework.QueueBase", Jp, void 0);
    Jp.prototype.initialize = function() {
        return null
    };
    Jp.prototype.initialize = Jp.prototype.initialize;
    Jp.prototype.onCurrentItemIdChanged = function() {};
    Jp.prototype.onCurrentItemIdChanged = Jp.prototype.onCurrentItemIdChanged;
    Jp.prototype.nextItems = function() {
        return []
    };
    Jp.prototype.nextItems = Jp.prototype.nextItems;
    Jp.prototype.prevItems = function() {
        return []
    };
    Jp.prototype.prevItems = Jp.prototype.prevItems;
    Jp.prototype.fetchItems = function() {
        return []
    };
    Jp.prototype.fetchItems = Jp.prototype.fetchItems;
    Jp.prototype.onItemsInserted = function() {};
    Jp.prototype.onItemsInserted = Jp.prototype.onItemsInserted;
    Jp.prototype.onItemsRemoved = function() {};
    Jp.prototype.onItemsRemoved = Jp.prototype.onItemsRemoved;
    Jp.prototype.shuffle = function() {
        return null
    };
    Jp.prototype.shuffle = Jp.prototype.shuffle;
    Jp.prototype.Ge = function() {
        return null
    };
    Jp.prototype.unshuffle = Jp.prototype.Ge;
})();