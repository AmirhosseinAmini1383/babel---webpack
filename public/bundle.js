(() => {
  "use strict";
  var e = {
      944: (e, n, t) => {
        t.d(n, { A: () => c });
        var r = t(601),
          o = t.n(r),
          a = t(314),
          i = t.n(a)()(o());
        i.push([
          e.id,
          "main {\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n}\n",
          "",
        ]);
        const c = i;
      },
      16: (e, n, t) => {
        t.d(n, { A: () => c });
        var r = t(601),
          o = t.n(r),
          a = t(314),
          i = t.n(a)()(o());
        i.push([
          e.id,
          ".container {\n  text-align: center;\n}\n#value {\n  font-size: 6rem;\n  font-weight: bold;\n}\n\n.btn {\n  text-transform: uppercase;\n  background: transparent;\n  color: #444;\n  padding: 0.375rem 0.75rem;\n  display: inline-block;\n  transition: all 0.3s ease-in-out;\n  font-size: 0.875rem;\n  border: 2px solid #444;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  margin: 0.5rem;\n}\n.btn:hover {\n  color: var(--clr-white);\n  background: var(--clr-black);\n}\n",
          "",
        ]);
        const c = i;
      },
      314: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var l = [].concat(e[u]);
                (r && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  t &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = t))
                      : (l[2] = t)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  n.push(l));
              }
            }),
            n
          );
        };
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      72: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var a = {}, i = [], c = 0; c < e.length; c++) {
            var s = e[c],
              u = r.base ? s[0] + r.base : s[0],
              l = a[u] || 0,
              d = "".concat(u, " ").concat(l);
            a[u] = l + 1;
            var p = t(d),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) n[p].references++, n[p].updater(f);
            else {
              var v = o(f, r);
              (r.byIndex = c),
                n.splice(c, 0, { identifier: d, updater: v, references: 1 });
            }
            i.push(d);
          }
          return i;
        }
        function o(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var c = t(a[i]);
              n[c].references--;
            }
            for (var s = r(e, o), u = 0; u < a.length; u++) {
              var l = t(a[u]);
              0 === n[l].references && (n[l].updater(), n.splice(l, 1));
            }
            a = s;
          };
        };
      },
      659: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      540: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      56: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      113: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var a = (n[r] = { id: r, exports: {} });
    return e[r](a, a.exports, t), a.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.nc = void 0);
  var r = document.querySelector("#value"),
    o = document.querySelectorAll(".btn"),
    a = t(72),
    i = t.n(a),
    c = t(825),
    s = t.n(c),
    u = t(659),
    l = t.n(u),
    d = t(56),
    p = t.n(d),
    f = t(540),
    v = t.n(f),
    m = t(113),
    h = t.n(m),
    y = t(944),
    b = {};
  (b.styleTagTransform = h()),
    (b.setAttributes = p()),
    (b.insert = l().bind(null, "head")),
    (b.domAPI = s()),
    (b.insertStyleElement = v()),
    i()(y.A, b),
    y.A && y.A.locals && y.A.locals;
  var g = t(16),
    x = {};
  (x.styleTagTransform = h()),
    (x.setAttributes = p()),
    (x.insert = l().bind(null, "head")),
    (x.domAPI = s()),
    (x.insertStyleElement = v()),
    i()(g.A, x),
    g.A && g.A.locals && g.A.locals;
  var A = 0;
  o.forEach(function (e) {
    e.addEventListener("click", function (e) {
      var n = e.currentTarget.classList;
      n.contains("decrease") ? A-- : n.contains("increase") ? A++ : (A = 0),
        A > 0 && (r.style.color = "green"),
        A < 0 && (r.style.color = "red"),
        0 === A && (r.style.color = "#222"),
        (r.textContent = A);
    });
  });
})();
