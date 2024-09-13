(() => {
  function t(e) {
    return (
      (t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      t(e)
    );
  }
  function e(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, o(r.key), r);
    }
  }
  function o(e) {
    var o = (function (e) {
      if ("object" != t(e) || !e) return e;
      var o = e[Symbol.toPrimitive];
      if (void 0 !== o) {
        var n = o.call(e, "string");
        if ("object" != t(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    })(e);
    return "symbol" == t(o) ? o : o + "";
  }
  new ((function () {
    return (
      (t = function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t);
      }),
      (o = [
        {
          key: "getName",
          value: function () {
            console.log("hello there !");
          },
        },
      ]),
      null && e(t.prototype, null),
      o && e(t, o),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
    var t, o;
  })().getName)(),
    console.log("Test Log");
})();
