(function(n) {
    function e(e) { for (var r, i, c = e[0], u = e[1], f = e[2], s = 0, p = []; s < c.length; s++) i = c[s], Object.prototype.hasOwnProperty.call(o, i) && o[i] && p.push(o[i][0]), o[i] = 0; for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (n[r] = u[r]);
        l && l(e); while (p.length) p.shift()(); return a.push.apply(a, f || []), t() }

    function t() { for (var n, e = 0; e < a.length; e++) { for (var t = a[e], r = !0, c = 1; c < t.length; c++) { var u = t[c];
                0 !== o[u] && (r = !1) }
            r && (a.splice(e--, 1), n = i(i.s = t[0])) } return n } var r = {},
        o = { app: 0 },
        a = [];

    function i(e) { if (r[e]) return r[e].exports; var t = r[e] = { i: e, l: !1, exports: {} }; return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports }
    i.m = n, i.c = r, i.d = function(n, e, t) { i.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: t }) }, i.r = function(n) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 }) }, i.t = function(n, e) { if (1 & e && (n = i(n)), 8 & e) return n; if (4 & e && "object" === typeof n && n && n.__esModule) return n; var t = Object.create(null); if (i.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: n }), 2 & e && "string" != typeof n)
            for (var r in n) i.d(t, r, function(e) { return n[e] }.bind(null, r)); return t }, i.n = function(n) { var e = n && n.__esModule ? function() { return n["default"] } : function() { return n }; return i.d(e, "a", e), e }, i.o = function(n, e) { return Object.prototype.hasOwnProperty.call(n, e) }, i.p = "/"; var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        u = c.push.bind(c);
    c.push = e, c = c.slice(); for (var f = 0; f < c.length; f++) e(c[f]); var l = u;
    a.push([0, "chunk-vendors"]), t() })({ 0: function(n, e, t) { n.exports = t("56d7") }, "034f": function(n, e, t) { "use strict"; var r = t("85ec"),
            o = t.n(r);
        o.a }, "56d7": function(n, e, t) { "use strict";
        t.r(e);
        t("e260"), t("e6cf"), t("cca6"), t("a79d"); var r = t("2b0e"),
            o = function() { var n = this,
                    e = n.$createElement,
                    r = n._self._c || e; return r("div", { attrs: { id: "app" } }, [r("img", { attrs: { alt: "Vue logo", src: t("cf05") } }), r("HelloWorld", { attrs: { msg: "Welcome to Your Vue.js App" } })], 1) },
            a = [],
            i = function() { var n = this,
                    e = n.$createElement,
                    t = n._self._c || e; return t("div", { staticClass: "hello" }, [t("h1", [n._v(n._s(n.msg))])]) },
            c = [],
            u = (t("cb29"), t("b963")),
            f = 4,
            l = 20,
            s = new Array(f).fill(new Array(l).fill(0)),
            p = function(n) { return new u["Engine"](f, l, n, s) },
            d = (t("99af"), t("ac1f"), t("1276"), function(n) { window.location.hash = "|".concat(n) }),
            g = function(n) { var e = document.title.split("|")[0];
                document.title = "".concat(e, "|").concat(n) },
            m = (t("d81d"), t("26e9"), t("284c")),
            h = { mirror: function(n) { return n.map((function(n) { return Object(m["a"])(n).reverse() })) }, transpose: function(n) { return n[0].map((function(e, t) { return n.map((function(n) { return n[t] })) })) }, projectSideways: function(n) { return h.mirror(h.transpose(n)) } },
            v = t("7cb8"),
            b = function(n, e) { if (!n.length) return null; var t = h.projectSideways(n),
                    r = v["a"].convert(t, l);
                d(r), g(r) },
            w = { name: "HelloWorld", props: { msg: String }, data: function() { return { gameState: { body: [] } } }, methods: { render: function(n) { 3 == n.gameStatus && alert("game over"), b(n.body) }, onKeyDown: function(n) { if (n && n.key && this) switch (n.key) {
                            case "ArrowRight":
                                this.$gameEngine.rotate(); break;
                            case "ArrowUp":
                                this.$gameEngine.moveLeft(); break;
                            case "ArrowDown":
                                this.$gameEngine.moveRight(); break;
                            case "ArrowLeft":
                                this.$gameEngine.moveDown(); break } } }, beforeMount: function() { var n = this;
                    this.$gameEngine = p(this.render), window.document.body.addEventListener("keydown", this.onKeyDown.bind(this)), this.$gameEngine.start(), setInterval((function() { n.$gameEngine.moveDown() }), 500) } },
            y = w,
            j = t("2877"),
            x = Object(j["a"])(y, i, c, !1, null, null, null),
            O = x.exports,
            _ = { name: "app", components: { HelloWorld: O } },
            E = _,
            S = (t("034f"), Object(j["a"])(E, o, a, !1, null, null, null)),
            k = S.exports;
        r["a"].config.productionTip = !1, new r["a"]({ render: function(n) { return n(k) } }).$mount("#app") }, "7cb8": function(n, e, t) { "use strict";
        (function(n) { t.d(e, "a", (function() { return a }));
            t("99af"), t("a15b"), t("d81d"), t("0d03"), t("a9e3"), t("25eb"), t("d3b7"), t("ac1f"), t("25f0"), t("5319"); var r = t("4238"),
                o = t.n(r),
                a = { prefixHex: function(n) { return 1 === n.length ? "0".concat(n) : n }, getColumnBinary: function(n, e) { return n.map((function(n) { return n[e] })).map((function(n) { var e = n.val; return e })).join("") }, convert: function(e, t) { for (var r = "", i = 0; i < t; i += 2) { var c = a.getColumnBinary(e, i),
                                u = a.getColumnBinary(e, i + 1),
                                f = "".concat(c).concat(u).replace(/2/g, "1"),
                                l = Number.parseInt(f, 2),
                                s = l.toString(16),
                                p = a.prefixHex(s),
                                d = new n(p, "hex"),
                                g = o.a.encode(d);
                            r = r.concat(g) } return r } } }).call(this, t("fd40").Buffer) }, "85ec": function(n, e, t) {}, cf05: function(n, e, t) { n.exports = t.p + "./img/logo.82b9c7a5.png" } });
//# sourceMappingURL=app.a89df72f.js.map