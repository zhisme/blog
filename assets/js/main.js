(() => {
  var e = {
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var s in i)
                      Object.prototype.hasOwnProperty.call(i, s) &&
                        (e[s] = i[s]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            i =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            s = t && "IntersectionObserver" in window,
            n = t && "classList" in document.createElement("p"),
            o = t && window.devicePixelRatio > 1,
            a = {
              elements_selector: ".lazy",
              container: i || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            r = function (t) {
              return e({}, a, t);
            },
            l = function (e, t) {
              var i,
                s = "LazyLoad::Initialized",
                n = new e(t);
              try {
                i = new CustomEvent(s, { detail: { instance: n } });
              } catch (e) {
                (i = document.createEvent("CustomEvent")).initCustomEvent(
                  s,
                  !1,
                  !1,
                  { instance: n }
                );
              }
              window.dispatchEvent(i);
            },
            c = "src",
            d = "srcset",
            h = "sizes",
            u = "poster",
            p = "llOriginalAttrs",
            f = "data",
            g = "loading",
            m = "loaded",
            v = "applied",
            b = "error",
            y = "native",
            w = "data-",
            S = "ll-status",
            x = function (e, t) {
              return e.getAttribute(w + t);
            },
            E = function (e) {
              return x(e, S);
            },
            C = function (e, t) {
              return (function (e, t, i) {
                var s = "data-ll-status";
                null !== i ? e.setAttribute(s, i) : e.removeAttribute(s);
              })(e, 0, t);
            },
            T = function (e) {
              return C(e, null);
            },
            P = function (e) {
              return null === E(e);
            },
            M = function (e) {
              return E(e) === y;
            },
            O = [g, m, v, b],
            L = function (e, t, i, s) {
              e &&
                "function" == typeof e &&
                (void 0 === s ? (void 0 === i ? e(t) : e(t, i)) : e(t, i, s));
            },
            A = function (e, t) {
              n
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            k = function (e, t) {
              n
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            I = function (e) {
              return e.llTempImage;
            },
            _ = function (e, t) {
              if (t) {
                var i = t._observer;
                i && i.unobserve(e);
              }
            },
            z = function (e, t) {
              e && (e.loadingCount += t);
            },
            $ = function (e, t) {
              e && (e.toLoadCount = t);
            },
            D = function (e) {
              for (var t, i = [], s = 0; (t = e.children[s]); s += 1)
                "SOURCE" === t.tagName && i.push(t);
              return i;
            },
            R = function (e, t) {
              var i = e.parentNode;
              i && "PICTURE" === i.tagName && D(i).forEach(t);
            },
            F = function (e, t) {
              D(e).forEach(t);
            },
            j = [c],
            B = [c, u],
            N = [c, d, h],
            H = [f],
            q = function (e) {
              return !!e[p];
            },
            W = function (e) {
              return e[p];
            },
            G = function (e) {
              return delete e[p];
            },
            V = function (e, t) {
              if (!q(e)) {
                var i = {};
                t.forEach(function (t) {
                  i[t] = e.getAttribute(t);
                }),
                  (e[p] = i);
              }
            },
            X = function (e, t) {
              if (q(e)) {
                var i = W(e);
                t.forEach(function (t) {
                  !(function (e, t, i) {
                    i ? e.setAttribute(t, i) : e.removeAttribute(t);
                  })(e, t, i[t]);
                });
              }
            },
            Y = function (e, t, i) {
              A(e, t.class_applied),
                C(e, v),
                i &&
                  (t.unobserve_completed && _(e, t),
                  L(t.callback_applied, e, i));
            },
            Z = function (e, t, i) {
              A(e, t.class_loading),
                C(e, g),
                i && (z(i, 1), L(t.callback_loading, e, i));
            },
            U = function (e, t, i) {
              i && e.setAttribute(t, i);
            },
            K = function (e, t) {
              U(e, h, x(e, t.data_sizes)),
                U(e, d, x(e, t.data_srcset)),
                U(e, c, x(e, t.data_src));
            },
            J = {
              IMG: function (e, t) {
                R(e, function (e) {
                  V(e, N), K(e, t);
                }),
                  V(e, N),
                  K(e, t);
              },
              IFRAME: function (e, t) {
                V(e, j), U(e, c, x(e, t.data_src));
              },
              VIDEO: function (e, t) {
                F(e, function (e) {
                  V(e, j), U(e, c, x(e, t.data_src));
                }),
                  V(e, B),
                  U(e, u, x(e, t.data_poster)),
                  U(e, c, x(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                V(e, H), U(e, f, x(e, t.data_src));
              },
            },
            Q = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                L(e.callback_finish, t);
            },
            te = function (e, t, i) {
              e.addEventListener(t, i), (e.llEvLisnrs[t] = i);
            },
            ie = function (e, t, i) {
              e.removeEventListener(t, i);
            },
            se = function (e) {
              return !!e.llEvLisnrs;
            },
            ne = function (e) {
              if (se(e)) {
                var t = e.llEvLisnrs;
                for (var i in t) {
                  var s = t[i];
                  ie(e, i, s);
                }
                delete e.llEvLisnrs;
              }
            },
            oe = function (e, t, i) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                z(i, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(i),
                k(e, t.class_loading),
                t.unobserve_completed && _(e, i);
            },
            ae = function (e, t, i) {
              var s = I(e) || e;
              se(s) ||
                (function (e, t, i) {
                  se(e) || (e.llEvLisnrs = {});
                  var s = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, s, t), te(e, "error", i);
                })(
                  s,
                  function (n) {
                    !(function (e, t, i, s) {
                      var n = M(t);
                      oe(t, i, s),
                        A(t, i.class_loaded),
                        C(t, m),
                        L(i.callback_loaded, t, s),
                        n || ee(i, s);
                    })(0, e, t, i),
                      ne(s);
                  },
                  function (n) {
                    !(function (e, t, i, s) {
                      var n = M(t);
                      oe(t, i, s),
                        A(t, i.class_error),
                        C(t, b),
                        L(i.callback_error, t, s),
                        i.restore_on_error && X(t, N),
                        n || ee(i, s);
                    })(0, e, t, i),
                      ne(s);
                  }
                );
            },
            re = function (e, t, i) {
              !(function (e) {
                return Q.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, i) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      ae(e, t, i),
                      (function (e) {
                        q(e) ||
                          (e[p] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, i) {
                        var s = x(e, t.data_bg),
                          n = x(e, t.data_bg_hidpi),
                          a = o && n ? n : s;
                        a &&
                          ((e.style.backgroundImage = 'url("'.concat(a, '")')),
                          I(e).setAttribute(c, a),
                          Z(e, t, i));
                      })(e, t, i),
                      (function (e, t, i) {
                        var s = x(e, t.data_bg_multi),
                          n = x(e, t.data_bg_multi_hidpi),
                          a = o && n ? n : s;
                        a && ((e.style.backgroundImage = a), Y(e, t, i));
                      })(e, t, i),
                      (function (e, t, i) {
                        var s = x(e, t.data_bg_set);
                        if (s) {
                          var n = s.split("|"),
                            o = n.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = o.join()),
                            "" === e.style.backgroundImage &&
                              ((o = n.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = o.join())),
                            Y(e, t, i);
                        }
                      })(e, t, i);
                  })(e, t, i)
                : (function (e, t, i) {
                    ae(e, t, i),
                      (function (e, t, i) {
                        var s = J[e.tagName];
                        s && (s(e, t), Z(e, t, i));
                      })(e, t, i);
                  })(e, t, i);
            },
            le = function (e) {
              e.removeAttribute(c), e.removeAttribute(d), e.removeAttribute(h);
            },
            ce = function (e) {
              R(e, function (e) {
                X(e, N);
              }),
                X(e, N);
            },
            de = {
              IMG: ce,
              IFRAME: function (e) {
                X(e, j);
              },
              VIDEO: function (e) {
                F(e, function (e) {
                  X(e, j);
                }),
                  X(e, B),
                  e.load();
              },
              OBJECT: function (e) {
                X(e, H);
              },
            },
            he = function (e, t) {
              (function (e) {
                var t = de[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (q(e)) {
                        var t = W(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  P(e) ||
                    M(e) ||
                    (k(e, t.class_entered),
                    k(e, t.class_exited),
                    k(e, t.class_applied),
                    k(e, t.class_loading),
                    k(e, t.class_loaded),
                    k(e, t.class_error));
                })(e, t),
                T(e),
                G(e);
            },
            ue = ["IMG", "IFRAME", "VIDEO"],
            pe = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            fe = function (e, t, i) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, i, s) {
                      var n = (function (e) {
                        return O.indexOf(E(e)) >= 0;
                      })(e);
                      C(e, "entered"),
                        A(e, i.class_entered),
                        k(e, i.class_exited),
                        (function (e, t, i) {
                          t.unobserve_entered && _(e, i);
                        })(e, i, s),
                        L(i.callback_enter, e, t, s),
                        n || re(e, i, s);
                    })(e.target, e, t, i)
                  : (function (e, t, i, s) {
                      P(e) ||
                        (A(e, i.class_exited),
                        (function (e, t, i, s) {
                          i.cancel_on_exit &&
                            (function (e) {
                              return E(e) === g;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ne(e),
                            (function (e) {
                              R(e, function (e) {
                                le(e);
                              }),
                                le(e);
                            })(e),
                            ce(e),
                            k(e, i.class_loading),
                            z(s, -1),
                            T(e),
                            L(i.callback_cancel, e, t, s));
                        })(e, t, i, s),
                        L(i.callback_exit, e, t, s));
                    })(e.target, e, t, i);
              });
            },
            ge = function (e) {
              return Array.prototype.slice.call(e);
            },
            me = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return E(e) === b;
              })(e);
            },
            be = function (e, t) {
              return (function (e) {
                return ge(e).filter(P);
              })(e || me(t));
            },
            ye = function (e, i) {
              var n = r(e);
              (this._settings = n),
                (this.loadingCount = 0),
                (function (e, t) {
                  s &&
                    !pe(e) &&
                    (t._observer = new IntersectionObserver(
                      function (i) {
                        fe(i, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(n, this),
                (function (e, i) {
                  t &&
                    ((i._onlineHandler = function () {
                      !(function (e, t) {
                        var i;
                        ((i = me(e)), ge(i).filter(ve)).forEach(function (t) {
                          k(t, e.class_error), T(t);
                        }),
                          t.update();
                      })(e, i);
                    }),
                    window.addEventListener("online", i._onlineHandler));
                })(n, this),
                this.update(i);
            };
          return (
            (ye.prototype = {
              update: function (e) {
                var t,
                  n,
                  o = this._settings,
                  a = be(e, o);
                $(this, a.length),
                  !i && s
                    ? pe(o)
                      ? (function (e, t, i) {
                          e.forEach(function (e) {
                            -1 !== ue.indexOf(e.tagName) &&
                              (function (e, t, i) {
                                e.setAttribute("loading", "lazy"),
                                  ae(e, t, i),
                                  (function (e, t) {
                                    var i = J[e.tagName];
                                    i && i(e, t);
                                  })(e, t),
                                  C(e, y);
                              })(e, t, i);
                          }),
                            $(i, 0);
                        })(a, o, this)
                      : ((n = a),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, n))
                    : this.loadAll(a);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  me(this._settings).forEach(function (e) {
                    G(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  i = this._settings;
                be(e, i).forEach(function (e) {
                  _(e, t), re(e, i, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                me(e).forEach(function (t) {
                  he(t, e);
                });
              },
            }),
            (ye.load = function (e, t) {
              var i = r(t);
              re(e, i);
            }),
            (ye.resetStatus = function (e) {
              T(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var i, s = 0; (i = t[s]); s += 1) l(e, i);
                  else l(e, t);
              })(ye, window.lazyLoadOptions),
            ye
          );
        })();
      },
    },
    t = {};
  function i(s) {
    var n = t[s];
    if (void 0 !== n) return n.exports;
    var o = (t[s] = { exports: {} });
    return e[s].call(o.exports, o, o.exports, i), o.exports;
  }
  (() => {
    "use strict";
    const e = {};
    let t = (e, t = 500, i = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = i ? `${i}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !i),
              !i && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !i && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: e } })
              );
          }, t));
      },
      s = (e, t = 500, i = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            i && e.style.removeProperty("height");
          let s = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = i ? `${i}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = s + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: e } })
                );
            }, t);
        }
      },
      n = (e, i = 500) => (e.hidden ? s(e, i) : t(e, i)),
      o = !0,
      a = (e = 500) => {
        document.documentElement.classList.contains("lock") ? r(e) : l(e);
      },
      r = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
          let i = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < i.length; e++) {
              i[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, e);
        }
      },
      l = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
          let i = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < i.length; e++) {
            i[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, e);
        }
      };
    function c(e) {
      setTimeout(() => {
        window.FLS;
      }, 0);
    }
    function d(e) {
      return e.filter(function (e, t, i) {
        return i.indexOf(e) === t;
      });
    }
    (e.popup = new (class {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const i = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${i}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : a(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            o &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              a(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          i = Array.prototype.slice.call(t),
          s = i.indexOf(document.activeElement);
        e.shiftKey && 0 === s && (i[i.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            s !== i.length - 1 ||
            (i[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && c();
      }
    })({})),
      (window.flsModules = e);
    let h = {
      getErrors(e) {
        let t = 0,
          i = e.querySelectorAll("*[data-required]");
        return (
          i.length &&
            i.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(t) {
        t.reset(),
          setTimeout(() => {
            let i = t.querySelectorAll("input,textarea");
            for (let e = 0; e < i.length; e++) {
              const t = i[e];
              t.parentElement.classList.remove("_form-focus"),
                t.classList.remove("_form-focus"),
                h.removeError(t);
            }
            let s = t.querySelectorAll(".checkbox__input");
            if (s.length > 0)
              for (let e = 0; e < s.length; e++) {
                s[e].checked = !1;
              }
            if (e.select) {
              let i = t.querySelectorAll(".select");
              if (i.length)
                for (let t = 0; t < i.length; t++) {
                  const s = i[t].querySelector("select");
                  e.select.selectBuild(s);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    function u(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function p(e = {}, t = {}) {
      Object.keys(t).forEach((i) => {
        void 0 === e[i]
          ? (e[i] = t[i])
          : u(t[i]) && u(e[i]) && Object.keys(t[i]).length > 0 && p(e[i], t[i]);
      });
    }
    (e.select = new (class {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`Проснулся, построил селектов: (${e.length})`))
            : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          );
      }
      selectInit(e, t) {
        const i = this;
        let s = document.createElement("div");
        if (
          (s.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(s, e),
          s.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          s.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            s,
            this.selectClasses.classSelectTitle
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            i.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          i = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const s = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ).dataset.selectId
                  }"]`
                ),
            n = this.getSelectElement(s).originalSelect;
          if ("click" === i) {
            if (!n.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ),
                  i = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                  );
                this.optionAction(s, n, i);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle)
                )
              )
                this.selectAction(s);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                )
              ) {
                const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                );
                this.optionAction(s, n, e);
              }
          } else
            "focusin" === i || "focusout" === i
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect)
                ) &&
                ("focusin" === i
                  ? s.classList.add(this.selectClasses.classSelectFocus)
                  : s.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === i && "Escape" === e.code && this.selectsСlose();
        } else this.selectsСlose();
      }
      selectsСlose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          i = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement;
        i.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          n(i, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const i = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement;
        s && s.remove(),
          i.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let i = this.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((i = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    t
                  )}</span>`
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = i),
              t.hasAttribute("data-search") && (i = !1))),
          (i = i.length ? i : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${i}" data-placeholder="${i}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${i}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          i = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let s = "";
        return (
          (s += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (s += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (s += t ? i : ""),
          (s += t ? "</span>" : ""),
          (s += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (s += e.textContent),
          (s += t ? "</span>" : ""),
          (s += t ? "</span>" : ""),
          s
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let i = [];
        return (
          e.multiple
            ? (i = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : i.push(e.options[e.selectedIndex]),
          {
            elements: i.map((e) => e),
            values: i.filter((e) => e.value).map((e) => e.value),
            html: i.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          i = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          s = Array.from(e.options);
        if (s.length > 0) {
          let n = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (s = s.filter((e) => e.value)),
            (n += t
              ? `<div ${t} ${i} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            s.forEach((t) => {
              n += this.getOption(t, e);
            }),
            (n += t ? "</div>" : ""),
            n
          );
        }
      }
      getOption(e, t) {
        const i =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          s =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          n = e.dataset.class ? ` ${e.dataset.class}` : "",
          o = !!e.dataset.href && e.dataset.href,
          a = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let r = "";
        return (
          (r += o
            ? `<a ${a} ${s} href="${o}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${n}${i}">`
            : `<button ${s} class="${this.selectClasses.classSelectOption}${n}${i}" data-value="${e.value}" type="button">`),
          (r += this.getSelectElementContent(e)),
          (r += o ? "</a>" : "</button>"),
          r
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, i) {
        if (t.multiple) {
          i.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected)
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected"
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ).hidden = !1),
            (i.hidden = !0)),
            (t.value = i.hasAttribute("data-value")
              ? i.dataset.value
              : i.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && h.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !0))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput
          ).selectElement,
          i = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement,
          s = i.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          n = this;
        t.addEventListener("input", function () {
          s.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === i.hidden && n.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } })
        );
      }
      setLogging(e) {
        this.config.logging && c();
      }
    })({})),
      (window.select = e.select);
    const f = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function g() {
      const e = "undefined" != typeof document ? document : {};
      return p(e, f), e;
    }
    const m = {
      document: f,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function v() {
      const e = "undefined" != typeof window ? window : {};
      return p(e, m), e;
    }
    class b extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function y(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...y(e)) : t.push(e);
        }),
        t
      );
    }
    function w(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function S(e, t) {
      const i = v(),
        s = g();
      let n = [];
      if (!t && e instanceof b) return e;
      if (!e) return new b(n);
      if ("string" == typeof e) {
        const i = e.trim();
        if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
          let e = "div";
          0 === i.indexOf("<li") && (e = "ul"),
            0 === i.indexOf("<tr") && (e = "tbody"),
            (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (e = "tr"),
            0 === i.indexOf("<tbody") && (e = "table"),
            0 === i.indexOf("<option") && (e = "select");
          const t = s.createElement(e);
          t.innerHTML = i;
          for (let e = 0; e < t.childNodes.length; e += 1)
            n.push(t.childNodes[e]);
        } else
          n = (function (e, t) {
            if ("string" != typeof e) return [e];
            const i = [],
              s = t.querySelectorAll(e);
            for (let e = 0; e < s.length; e += 1) i.push(s[e]);
            return i;
          })(e.trim(), t || s);
      } else if (e.nodeType || e === i || e === s) n.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof b) return e;
        n = e;
      }
      return new b(
        (function (e) {
          const t = [];
          for (let i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i]);
          return t;
        })(n)
      );
    }
    S.fn = b.prototype;
    const x = "resize scroll".split(" ");
    function E(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            x.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : S(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    E("click"),
      E("blur"),
      E("focus"),
      E("focusin"),
      E("focusout"),
      E("keyup"),
      E("keydown"),
      E("keypress"),
      E("submit"),
      E("change"),
      E("mousedown"),
      E("mousemove"),
      E("mouseup"),
      E("mouseenter"),
      E("mouseleave"),
      E("mouseout"),
      E("mouseover"),
      E("touchstart"),
      E("touchend"),
      E("touchmove"),
      E("resize"),
      E("scroll");
    const C = {
      addClass: function (...e) {
        const t = y(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = y(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = y(e.map((e) => e.split(" ")));
        return (
          w(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = y(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let i = 0; i < this.length; i += 1)
          if (2 === arguments.length) this[i].setAttribute(e, t);
          else
            for (const t in e)
              (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, i, s, n] = e;
        function o(e) {
          const t = e.target;
          if (!t) return;
          const n = e.target.dom7EventData || [];
          if ((n.indexOf(e) < 0 && n.unshift(e), S(t).is(i))) s.apply(t, n);
          else {
            const e = S(t).parents();
            for (let t = 0; t < e.length; t += 1)
              S(e[t]).is(i) && s.apply(e[t], n);
          }
        }
        function a(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
        }
        "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
          n || (n = !1);
        const r = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (i)
            for (l = 0; l < r.length; l += 1) {
              const e = r[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: s, proxyListener: o }),
                t.addEventListener(e, o, n);
            }
          else
            for (l = 0; l < r.length; l += 1) {
              const e = r[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: s, proxyListener: a }),
                t.addEventListener(e, a, n);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, i, s, n] = e;
        "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
          n || (n = !1);
        const o = t.split(" ");
        for (let e = 0; e < o.length; e += 1) {
          const t = o[e];
          for (let e = 0; e < this.length; e += 1) {
            const o = this[e];
            let a;
            if (
              (!i && o.dom7Listeners
                ? (a = o.dom7Listeners[t])
                : i && o.dom7LiveListeners && (a = o.dom7LiveListeners[t]),
              a && a.length)
            )
              for (let e = a.length - 1; e >= 0; e -= 1) {
                const i = a[e];
                (s && i.listener === s) ||
                (s &&
                  i.listener &&
                  i.listener.dom7proxy &&
                  i.listener.dom7proxy === s)
                  ? (o.removeEventListener(t, i.proxyListener, n),
                    a.splice(e, 1))
                  : s ||
                    (o.removeEventListener(t, i.proxyListener, n),
                    a.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = v(),
          i = e[0].split(" "),
          s = e[1];
        for (let n = 0; n < i.length; n += 1) {
          const o = i[n];
          for (let i = 0; i < this.length; i += 1) {
            const n = this[i];
            if (t.CustomEvent) {
              const i = new t.CustomEvent(o, {
                detail: s,
                bubbles: !0,
                cancelable: !0,
              });
              (n.dom7EventData = e.filter((e, t) => t > 0)),
                n.dispatchEvent(i),
                (n.dom7EventData = []),
                delete n.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function i(s) {
              s.target === this && (e.call(this, s), t.off("transitionend", i));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = v();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = v(),
            t = g(),
            i = this[0],
            s = i.getBoundingClientRect(),
            n = t.body,
            o = i.clientTop || n.clientTop || 0,
            a = i.clientLeft || n.clientLeft || 0,
            r = i === e ? e.scrollY : i.scrollTop,
            l = i === e ? e.scrollX : i.scrollLeft;
          return { top: s.top + r - o, left: s.left + l - a };
        }
        return null;
      },
      css: function (e, t) {
        const i = v();
        let s;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (s = 0; s < this.length; s += 1)
              for (const t in e) this[s].style[t] = e[t];
            return this;
          }
          if (this[0])
            return i.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, i) => {
              e.apply(t, [t, i]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = v(),
          i = g(),
          s = this[0];
        let n, o;
        if (!s || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (s.matches) return s.matches(e);
          if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
          if (s.msMatchesSelector) return s.msMatchesSelector(e);
          for (n = S(e), o = 0; o < n.length; o += 1) if (n[o] === s) return !0;
          return !1;
        }
        if (e === i) return s === i;
        if (e === t) return s === t;
        if (e.nodeType || e instanceof b) {
          for (n = e.nodeType ? [e] : e, o = 0; o < n.length; o += 1)
            if (n[o] === s) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return S([]);
        if (e < 0) {
          const i = t + e;
          return S(i < 0 ? [] : [this[i]]);
        }
        return S([this[e]]);
      },
      append: function (...e) {
        let t;
        const i = g();
        for (let s = 0; s < e.length; s += 1) {
          t = e[s];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const s = i.createElement("div");
              for (s.innerHTML = t; s.firstChild; )
                this[e].appendChild(s.firstChild);
            } else if (t instanceof b)
              for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = g();
        let i, s;
        for (i = 0; i < this.length; i += 1)
          if ("string" == typeof e) {
            const n = t.createElement("div");
            for (n.innerHTML = e, s = n.childNodes.length - 1; s >= 0; s -= 1)
              this[i].insertBefore(n.childNodes[s], this[i].childNodes[0]);
          } else if (e instanceof b)
            for (s = 0; s < e.length; s += 1)
              this[i].insertBefore(e[s], this[i].childNodes[0]);
          else this[i].insertBefore(e, this[i].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && S(this[0].nextElementSibling).is(e)
              ? S([this[0].nextElementSibling])
              : S([])
            : this[0].nextElementSibling
            ? S([this[0].nextElementSibling])
            : S([])
          : S([]);
      },
      nextAll: function (e) {
        const t = [];
        let i = this[0];
        if (!i) return S([]);
        for (; i.nextElementSibling; ) {
          const s = i.nextElementSibling;
          e ? S(s).is(e) && t.push(s) : t.push(s), (i = s);
        }
        return S(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && S(t.previousElementSibling).is(e)
              ? S([t.previousElementSibling])
              : S([])
            : t.previousElementSibling
            ? S([t.previousElementSibling])
            : S([]);
        }
        return S([]);
      },
      prevAll: function (e) {
        const t = [];
        let i = this[0];
        if (!i) return S([]);
        for (; i.previousElementSibling; ) {
          const s = i.previousElementSibling;
          e ? S(s).is(e) && t.push(s) : t.push(s), (i = s);
        }
        return S(t);
      },
      parent: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1)
          null !== this[i].parentNode &&
            (e
              ? S(this[i].parentNode).is(e) && t.push(this[i].parentNode)
              : t.push(this[i].parentNode));
        return S(t);
      },
      parents: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          let s = this[i].parentNode;
          for (; s; )
            e ? S(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
        }
        return S(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? S([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          const s = this[i].querySelectorAll(e);
          for (let e = 0; e < s.length; e += 1) t.push(s[e]);
        }
        return S(t);
      },
      children: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          const s = this[i].children;
          for (let i = 0; i < s.length; i += 1)
            (e && !S(s[i]).is(e)) || t.push(s[i]);
        }
        return S(t);
      },
      filter: function (e) {
        return S(w(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(C).forEach((e) => {
      Object.defineProperty(S.fn, e, { value: C[e], writable: !0 });
    });
    const T = S;
    function P(e, t = 0) {
      return setTimeout(e, t);
    }
    function M() {
      return Date.now();
    }
    function O(e, t = "x") {
      const i = v();
      let s, n, o;
      const a = (function (e) {
        const t = v();
        let i;
        return (
          t.getComputedStyle && (i = t.getComputedStyle(e, null)),
          !i && e.currentStyle && (i = e.currentStyle),
          i || (i = e.style),
          i
        );
      })(e);
      return (
        i.WebKitCSSMatrix
          ? ((n = a.transform || a.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (o = new i.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((o =
              a.MozTransform ||
              a.OTransform ||
              a.MsTransform ||
              a.msTransform ||
              a.transform ||
              a
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (s = o.toString().split(","))),
        "x" === t &&
          (n = i.WebKitCSSMatrix
            ? o.m41
            : 16 === s.length
            ? parseFloat(s[12])
            : parseFloat(s[4])),
        "y" === t &&
          (n = i.WebKitCSSMatrix
            ? o.m42
            : 16 === s.length
            ? parseFloat(s[13])
            : parseFloat(s[5])),
        n || 0
      );
    }
    function L(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function A(...e) {
      const t = Object(e[0]),
        i = ["__proto__", "constructor", "prototype"];
      for (let n = 1; n < e.length; n += 1) {
        const o = e[n];
        if (
          null != o &&
          ((s = o),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? s instanceof HTMLElement
            : s && (1 === s.nodeType || 11 === s.nodeType)))
        ) {
          const e = Object.keys(Object(o)).filter((e) => i.indexOf(e) < 0);
          for (let i = 0, s = e.length; i < s; i += 1) {
            const s = e[i],
              n = Object.getOwnPropertyDescriptor(o, s);
            void 0 !== n &&
              n.enumerable &&
              (L(t[s]) && L(o[s])
                ? o[s].__swiper__
                  ? (t[s] = o[s])
                  : A(t[s], o[s])
                : !L(t[s]) && L(o[s])
                ? ((t[s] = {}), o[s].__swiper__ ? (t[s] = o[s]) : A(t[s], o[s]))
                : (t[s] = o[s]));
          }
        }
      }
      var s;
      return t;
    }
    function k(e, t, i) {
      e.style.setProperty(t, i);
    }
    function I({ swiper: e, targetPosition: t, side: i }) {
      const s = v(),
        n = -e.translate;
      let o,
        a = null;
      const r = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        s.cancelAnimationFrame(e.cssModeFrameID);
      const l = t > n ? "next" : "prev",
        c = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
        d = () => {
          (o = new Date().getTime()), null === a && (a = o);
          const l = Math.max(Math.min((o - a) / r, 1), 0),
            h = 0.5 - Math.cos(l * Math.PI) / 2;
          let u = n + h * (t - n);
          if ((c(u, t) && (u = t), e.wrapperEl.scrollTo({ [i]: u }), c(u, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [i]: u });
              }),
              void s.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = s.requestAnimationFrame(d);
        };
      d();
    }
    let _, z, $;
    function D() {
      return (
        _ ||
          (_ = (function () {
            const e = v(),
              t = g();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const i = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, i);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        _
      );
    }
    function R(e = {}) {
      return (
        z ||
          (z = (function ({ userAgent: e } = {}) {
            const t = D(),
              i = v(),
              s = i.navigator.platform,
              n = e || i.navigator.userAgent,
              o = { ios: !1, android: !1 },
              a = i.screen.width,
              r = i.screen.height,
              l = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = n.match(/(iPad).*OS\s([\d_]+)/);
            const d = n.match(/(iPod)(.*OS\s([\d_]+))?/),
              h = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              u = "Win32" === s;
            let p = "MacIntel" === s;
            return (
              !c &&
                p &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${a}x${r}`) >= 0 &&
                ((c = n.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (p = !1)),
              l && !u && ((o.os = "android"), (o.android = !0)),
              (c || h || d) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
        z
      );
    }
    function F() {
      return (
        $ ||
          ($ = (function () {
            const e = v();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        $
      );
    }
    const j = {
      on(e, t, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof t) return s;
        const n = i ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            s.eventsListeners[e] || (s.eventsListeners[e] = []),
              s.eventsListeners[e][n](t);
          }),
          s
        );
      },
      once(e, t, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof t) return s;
        function n(...i) {
          s.off(e, n),
            n.__emitterProxy && delete n.__emitterProxy,
            t.apply(s, i);
        }
        return (n.__emitterProxy = t), s.on(e, n, i);
      },
      onAny(e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof e) return i;
        const s = t ? "unshift" : "push";
        return (
          i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const i = t.eventsAnyListeners.indexOf(e);
        return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
      },
      off(e, t) {
        const i = this;
        return !i.eventsListeners || i.destroyed
          ? i
          : i.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (i.eventsListeners[e] = [])
                : i.eventsListeners[e] &&
                  i.eventsListeners[e].forEach((s, n) => {
                    (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                      i.eventsListeners[e].splice(n, 1);
                  });
            }),
            i)
          : i;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsListeners) return t;
        let i, s, n;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((i = e[0]), (s = e.slice(1, e.length)), (n = t))
          : ((i = e[0].events), (s = e[0].data), (n = e[0].context || t)),
          s.unshift(n);
        return (
          (Array.isArray(i) ? i : i.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(n, [e, ...s]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(n, s);
                });
          }),
          t
        );
      },
    };
    const B = {
      updateSize: function () {
        const e = this;
        let t, i;
        const s = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : s[0].clientWidth),
          (i =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : s[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === i && e.isVertical()) ||
            ((t =
              t -
              parseInt(s.css("padding-left") || 0, 10) -
              parseInt(s.css("padding-right") || 0, 10)),
            (i =
              i -
              parseInt(s.css("padding-top") || 0, 10) -
              parseInt(s.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(i) && (i = 0),
            Object.assign(e, {
              width: t,
              height: i,
              size: e.isHorizontal() ? t : i,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function i(e, i) {
          return parseFloat(e.getPropertyValue(t(i)) || 0);
        }
        const s = e.params,
          { $wrapperEl: n, size: o, rtlTranslate: a, wrongRTL: r } = e,
          l = e.virtual && s.virtual.enabled,
          c = l ? e.virtual.slides.length : e.slides.length,
          d = n.children(`.${e.params.slideClass}`),
          h = l ? e.virtual.slides.length : d.length;
        let u = [];
        const p = [],
          f = [];
        let g = s.slidesOffsetBefore;
        "function" == typeof g && (g = s.slidesOffsetBefore.call(e));
        let m = s.slidesOffsetAfter;
        "function" == typeof m && (m = s.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          b = e.slidesGrid.length;
        let y = s.spaceBetween,
          w = -g,
          S = 0,
          x = 0;
        if (void 0 === o) return;
        "string" == typeof y &&
          y.indexOf("%") >= 0 &&
          (y = (parseFloat(y.replace("%", "")) / 100) * o),
          (e.virtualSize = -y),
          a
            ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          s.centeredSlides &&
            s.cssMode &&
            (k(e.wrapperEl, "--swiper-centered-offset-before", ""),
            k(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const E = s.grid && s.grid.rows > 1 && e.grid;
        let C;
        E && e.grid.initSlides(h);
        const T =
          "auto" === s.slidesPerView &&
          s.breakpoints &&
          Object.keys(s.breakpoints).filter(
            (e) => void 0 !== s.breakpoints[e].slidesPerView
          ).length > 0;
        for (let n = 0; n < h; n += 1) {
          C = 0;
          const a = d.eq(n);
          if (
            (E && e.grid.updateSlide(n, a, h, t), "none" !== a.css("display"))
          ) {
            if ("auto" === s.slidesPerView) {
              T && (d[n].style[t("width")] = "");
              const o = getComputedStyle(a[0]),
                r = a[0].style.transform,
                l = a[0].style.webkitTransform;
              if (
                (r && (a[0].style.transform = "none"),
                l && (a[0].style.webkitTransform = "none"),
                s.roundLengths)
              )
                C = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
              else {
                const e = i(o, "width"),
                  t = i(o, "padding-left"),
                  s = i(o, "padding-right"),
                  n = i(o, "margin-left"),
                  r = i(o, "margin-right"),
                  l = o.getPropertyValue("box-sizing");
                if (l && "border-box" === l) C = e + n + r;
                else {
                  const { clientWidth: i, offsetWidth: o } = a[0];
                  C = e + t + s + n + r + (o - i);
                }
              }
              r && (a[0].style.transform = r),
                l && (a[0].style.webkitTransform = l),
                s.roundLengths && (C = Math.floor(C));
            } else
              (C = (o - (s.slidesPerView - 1) * y) / s.slidesPerView),
                s.roundLengths && (C = Math.floor(C)),
                d[n] && (d[n].style[t("width")] = `${C}px`);
            d[n] && (d[n].swiperSlideSize = C),
              f.push(C),
              s.centeredSlides
                ? ((w = w + C / 2 + S / 2 + y),
                  0 === S && 0 !== n && (w = w - o / 2 - y),
                  0 === n && (w = w - o / 2 - y),
                  Math.abs(w) < 0.001 && (w = 0),
                  s.roundLengths && (w = Math.floor(w)),
                  x % s.slidesPerGroup == 0 && u.push(w),
                  p.push(w))
                : (s.roundLengths && (w = Math.floor(w)),
                  (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                    e.params.slidesPerGroup ==
                    0 && u.push(w),
                  p.push(w),
                  (w = w + C + y)),
              (e.virtualSize += C + y),
              (S = C),
              (x += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, o) + m),
          a &&
            r &&
            ("slide" === s.effect || "coverflow" === s.effect) &&
            n.css({ width: `${e.virtualSize + s.spaceBetween}px` }),
          s.setWrapperSize &&
            n.css({ [t("width")]: `${e.virtualSize + s.spaceBetween}px` }),
          E && e.grid.updateWrapperSize(C, u, t),
          !s.centeredSlides)
        ) {
          const t = [];
          for (let i = 0; i < u.length; i += 1) {
            let n = u[i];
            s.roundLengths && (n = Math.floor(n)),
              u[i] <= e.virtualSize - o && t.push(n);
          }
          (u = t),
            Math.floor(e.virtualSize - o) - Math.floor(u[u.length - 1]) > 1 &&
              u.push(e.virtualSize - o);
        }
        if ((0 === u.length && (u = [0]), 0 !== s.spaceBetween)) {
          const i = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
          d.filter((e, t) => !s.cssMode || t !== d.length - 1).css({
            [i]: `${y}px`,
          });
        }
        if (s.centeredSlides && s.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t) => {
            e += t + (s.spaceBetween ? s.spaceBetween : 0);
          }),
            (e -= s.spaceBetween);
          const t = e - o;
          u = u.map((e) => (e < 0 ? -g : e > t ? t + m : e));
        }
        if (s.centerInsufficientSlides) {
          let e = 0;
          if (
            (f.forEach((t) => {
              e += t + (s.spaceBetween ? s.spaceBetween : 0);
            }),
            (e -= s.spaceBetween),
            e < o)
          ) {
            const t = (o - e) / 2;
            u.forEach((e, i) => {
              u[i] = e - t;
            }),
              p.forEach((e, i) => {
                p[i] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: d,
            snapGrid: u,
            slidesGrid: p,
            slidesSizesGrid: f,
          }),
          s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
        ) {
          k(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
            k(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - f[f.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            i = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + i));
        }
        if (
          (h !== c && e.emit("slidesLengthChange"),
          u.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          p.length !== b && e.emit("slidesGridLengthChange"),
          s.watchSlidesProgress && e.updateSlidesOffset(),
          !(l || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
        ) {
          const t = `${s.containerModifierClass}backface-hidden`,
            i = e.$el.hasClass(t);
          h <= s.maxBackfaceHiddenSlides
            ? i || e.$el.addClass(t)
            : i && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          i = [],
          s = t.virtual && t.params.virtual.enabled;
        let n,
          o = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const a = (e) =>
          s
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || T([])).each((e) => {
              i.push(e);
            });
          else
            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
              const e = t.activeIndex + n;
              if (e > t.slides.length && !s) break;
              i.push(a(e));
            }
        else i.push(a(t.activeIndex));
        for (n = 0; n < i.length; n += 1)
          if (void 0 !== i[n]) {
            const e = i[n].offsetHeight;
            o = e > o ? e : o;
          }
        (o || 0 === o) && t.$wrapperEl.css("height", `${o}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let i = 0; i < t.length; i += 1)
          t[i].swiperSlideOffset = e.isHorizontal()
            ? t[i].offsetLeft
            : t[i].offsetTop;
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          i = t.params,
          { slides: s, rtlTranslate: n, snapGrid: o } = t;
        if (0 === s.length) return;
        void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
        let a = -e;
        n && (a = e),
          s.removeClass(i.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < s.length; e += 1) {
          const r = s[e];
          let l = r.swiperSlideOffset;
          i.cssMode && i.centeredSlides && (l -= s[0].swiperSlideOffset);
          const c =
              (a + (i.centeredSlides ? t.minTranslate() : 0) - l) /
              (r.swiperSlideSize + i.spaceBetween),
            d =
              (a - o[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) /
              (r.swiperSlideSize + i.spaceBetween),
            h = -(a - l),
            u = h + t.slidesSizesGrid[e];
          ((h >= 0 && h < t.size - 1) ||
            (u > 1 && u <= t.size) ||
            (h <= 0 && u >= t.size)) &&
            (t.visibleSlides.push(r),
            t.visibleSlidesIndexes.push(e),
            s.eq(e).addClass(i.slideVisibleClass)),
            (r.progress = n ? -c : c),
            (r.originalProgress = n ? -d : d);
        }
        t.visibleSlides = T(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const i = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * i) || 0;
        }
        const i = t.params,
          s = t.maxTranslate() - t.minTranslate();
        let { progress: n, isBeginning: o, isEnd: a } = t;
        const r = o,
          l = a;
        0 === s
          ? ((n = 0), (o = !0), (a = !0))
          : ((n = (e - t.minTranslate()) / s), (o = n <= 0), (a = n >= 1)),
          Object.assign(t, { progress: n, isBeginning: o, isEnd: a }),
          (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
            t.updateSlidesProgress(e),
          o && !r && t.emit("reachBeginning toEdge"),
          a && !l && t.emit("reachEnd toEdge"),
          ((r && !o) || (l && !a)) && t.emit("fromEdge"),
          t.emit("progress", n);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: i,
            $wrapperEl: s,
            activeIndex: n,
            realIndex: o,
          } = e,
          a = e.virtual && i.virtual.enabled;
        let r;
        t.removeClass(
          `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
        ),
          (r = a
            ? e.$wrapperEl.find(
                `.${i.slideClass}[data-swiper-slide-index="${n}"]`
              )
            : t.eq(n)),
          r.addClass(i.slideActiveClass),
          i.loop &&
            (r.hasClass(i.slideDuplicateClass)
              ? s
                  .children(
                    `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${o}"]`
                  )
                  .addClass(i.slideDuplicateActiveClass)
              : s
                  .children(
                    `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${o}"]`
                  )
                  .addClass(i.slideDuplicateActiveClass));
        let l = r.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
        i.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(i.slideNextClass));
        let c = r.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
        i.loop &&
          0 === c.length &&
          ((c = t.eq(-1)), c.addClass(i.slidePrevClass)),
          i.loop &&
            (l.hasClass(i.slideDuplicateClass)
              ? s
                  .children(
                    `.${i.slideClass}:not(.${
                      i.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicateNextClass)
              : s
                  .children(
                    `.${i.slideClass}.${
                      i.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicateNextClass),
            c.hasClass(i.slideDuplicateClass)
              ? s
                  .children(
                    `.${i.slideClass}:not(.${
                      i.slideDuplicateClass
                    })[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicatePrevClass)
              : s
                  .children(
                    `.${i.slideClass}.${
                      i.slideDuplicateClass
                    }[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          i = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: s,
            snapGrid: n,
            params: o,
            activeIndex: a,
            realIndex: r,
            snapIndex: l,
          } = t;
        let c,
          d = e;
        if (void 0 === d) {
          for (let e = 0; e < s.length; e += 1)
            void 0 !== s[e + 1]
              ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2
                ? (d = e)
                : i >= s[e] && i < s[e + 1] && (d = e + 1)
              : i >= s[e] && (d = e);
          o.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }
        if (n.indexOf(i) >= 0) c = n.indexOf(i);
        else {
          const e = Math.min(o.slidesPerGroupSkip, d);
          c = e + Math.floor((d - e) / o.slidesPerGroup);
        }
        if ((c >= n.length && (c = n.length - 1), d === a))
          return void (
            c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
          );
        const h = parseInt(
          t.slides.eq(d).attr("data-swiper-slide-index") || d,
          10
        );
        Object.assign(t, {
          snapIndex: c,
          realIndex: h,
          previousIndex: a,
          activeIndex: d,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          r !== h && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          i = t.params,
          s = T(e).closest(`.${i.slideClass}`)[0];
        let n,
          o = !1;
        if (s)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === s) {
              (o = !0), (n = e);
              break;
            }
        if (!s || !o)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = s),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                T(s).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = n),
          i.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const N = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const {
          params: t,
          rtlTranslate: i,
          translate: s,
          $wrapperEl: n,
        } = this;
        if (t.virtualTranslate) return i ? -s : s;
        if (t.cssMode) return s;
        let o = O(n[0], e);
        return i && (o = -o), o || 0;
      },
      setTranslate: function (e, t) {
        const i = this,
          {
            rtlTranslate: s,
            params: n,
            $wrapperEl: o,
            wrapperEl: a,
            progress: r,
          } = i;
        let l,
          c = 0,
          d = 0;
        i.isHorizontal() ? (c = s ? -e : e) : (d = e),
          n.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
          n.cssMode
            ? (a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                i.isHorizontal() ? -c : -d)
            : n.virtualTranslate ||
              o.transform(`translate3d(${c}px, ${d}px, 0px)`),
          (i.previousTranslate = i.translate),
          (i.translate = i.isHorizontal() ? c : d);
        const h = i.maxTranslate() - i.minTranslate();
        (l = 0 === h ? 0 : (e - i.minTranslate()) / h),
          l !== r && i.updateProgress(e),
          i.emit("setTranslate", i.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, i = !0, s = !0, n) {
        const o = this,
          { params: a, wrapperEl: r } = o;
        if (o.animating && a.preventInteractionOnTransition) return !1;
        const l = o.minTranslate(),
          c = o.maxTranslate();
        let d;
        if (
          ((d = s && e > l ? l : s && e < c ? c : e),
          o.updateProgress(d),
          a.cssMode)
        ) {
          const e = o.isHorizontal();
          if (0 === t) r[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!o.support.smoothScroll)
              return (
                I({ swiper: o, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            r.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (o.setTransition(0),
              o.setTranslate(d),
              i &&
                (o.emit("beforeTransitionStart", t, n),
                o.emit("transitionEnd")))
            : (o.setTransition(t),
              o.setTranslate(d),
              i &&
                (o.emit("beforeTransitionStart", t, n),
                o.emit("transitionStart")),
              o.animating ||
                ((o.animating = !0),
                o.onTranslateToWrapperTransitionEnd ||
                  (o.onTranslateToWrapperTransitionEnd = function (e) {
                    o &&
                      !o.destroyed &&
                      e.target === this &&
                      (o.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        o.onTranslateToWrapperTransitionEnd
                      ),
                      o.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        o.onTranslateToWrapperTransitionEnd
                      ),
                      (o.onTranslateToWrapperTransitionEnd = null),
                      delete o.onTranslateToWrapperTransitionEnd,
                      i && o.emit("transitionEnd"));
                  }),
                o.$wrapperEl[0].addEventListener(
                  "transitionend",
                  o.onTranslateToWrapperTransitionEnd
                ),
                o.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  o.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function H({ swiper: e, runCallbacks: t, direction: i, step: s }) {
      const { activeIndex: n, previousIndex: o } = e;
      let a = i;
      if (
        (a || (a = n > o ? "next" : n < o ? "prev" : "reset"),
        e.emit(`transition${s}`),
        t && n !== o)
      ) {
        if ("reset" === a) return void e.emit(`slideResetTransition${s}`);
        e.emit(`slideChangeTransition${s}`),
          "next" === a
            ? e.emit(`slideNextTransition${s}`)
            : e.emit(`slidePrevTransition${s}`);
      }
    }
    const q = {
      slideTo: function (e = 0, t = this.params.speed, i = !0, s, n) {
        if ("number" != typeof e && "string" != typeof e)
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const o = this;
        let a = e;
        a < 0 && (a = 0);
        const {
          params: r,
          snapGrid: l,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: h,
          rtlTranslate: u,
          wrapperEl: p,
          enabled: f,
        } = o;
        if (
          (o.animating && r.preventInteractionOnTransition) ||
          (!f && !s && !n)
        )
          return !1;
        const g = Math.min(o.params.slidesPerGroupSkip, a);
        let m = g + Math.floor((a - g) / o.params.slidesPerGroup);
        m >= l.length && (m = l.length - 1);
        const v = -l[m];
        if (r.normalizeSlideIndex)
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              i = Math.floor(100 * c[e]),
              s = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= i && t < s - (s - i) / 2
                ? (a = e)
                : t >= i && t < s && (a = e + 1)
              : t >= i && (a = e);
          }
        if (o.initialized && a !== h) {
          if (!o.allowSlideNext && v < o.translate && v < o.minTranslate())
            return !1;
          if (
            !o.allowSlidePrev &&
            v > o.translate &&
            v > o.maxTranslate() &&
            (h || 0) !== a
          )
            return !1;
        }
        let b;
        if (
          (a !== (d || 0) && i && o.emit("beforeSlideChangeStart"),
          o.updateProgress(v),
          (b = a > h ? "next" : a < h ? "prev" : "reset"),
          (u && -v === o.translate) || (!u && v === o.translate))
        )
          return (
            o.updateActiveIndex(a),
            r.autoHeight && o.updateAutoHeight(),
            o.updateSlidesClasses(),
            "slide" !== r.effect && o.setTranslate(v),
            "reset" !== b && (o.transitionStart(i, b), o.transitionEnd(i, b)),
            !1
          );
        if (r.cssMode) {
          const e = o.isHorizontal(),
            i = u ? v : -v;
          if (0 === t) {
            const t = o.virtual && o.params.virtual.enabled;
            t &&
              ((o.wrapperEl.style.scrollSnapType = "none"),
              (o._immediateVirtual = !0)),
              (p[e ? "scrollLeft" : "scrollTop"] = i),
              t &&
                requestAnimationFrame(() => {
                  (o.wrapperEl.style.scrollSnapType = ""),
                    (o._swiperImmediateVirtual = !1);
                });
          } else {
            if (!o.support.smoothScroll)
              return (
                I({ swiper: o, targetPosition: i, side: e ? "left" : "top" }),
                !0
              );
            p.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
          }
          return !0;
        }
        return (
          o.setTransition(t),
          o.setTranslate(v),
          o.updateActiveIndex(a),
          o.updateSlidesClasses(),
          o.emit("beforeTransitionStart", t, s),
          o.transitionStart(i, b),
          0 === t
            ? o.transitionEnd(i, b)
            : o.animating ||
              ((o.animating = !0),
              o.onSlideToWrapperTransitionEnd ||
                (o.onSlideToWrapperTransitionEnd = function (e) {
                  o &&
                    !o.destroyed &&
                    e.target === this &&
                    (o.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      o.onSlideToWrapperTransitionEnd
                    ),
                    o.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      o.onSlideToWrapperTransitionEnd
                    ),
                    (o.onSlideToWrapperTransitionEnd = null),
                    delete o.onSlideToWrapperTransitionEnd,
                    o.transitionEnd(i, b));
                }),
              o.$wrapperEl[0].addEventListener(
                "transitionend",
                o.onSlideToWrapperTransitionEnd
              ),
              o.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                o.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, i = !0, s) {
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const n = this;
        let o = e;
        return n.params.loop && (o += n.loopedSlides), n.slideTo(o, t, i, s);
      },
      slideNext: function (e = this.params.speed, t = !0, i) {
        const s = this,
          { animating: n, enabled: o, params: a } = s;
        if (!o) return s;
        let r = a.slidesPerGroup;
        "auto" === a.slidesPerView &&
          1 === a.slidesPerGroup &&
          a.slidesPerGroupAuto &&
          (r = Math.max(s.slidesPerViewDynamic("current", !0), 1));
        const l = s.activeIndex < a.slidesPerGroupSkip ? 1 : r;
        if (a.loop) {
          if (n && a.loopPreventsSlide) return !1;
          s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
        }
        return a.rewind && s.isEnd
          ? s.slideTo(0, e, t, i)
          : s.slideTo(s.activeIndex + l, e, t, i);
      },
      slidePrev: function (e = this.params.speed, t = !0, i) {
        const s = this,
          {
            params: n,
            animating: o,
            snapGrid: a,
            slidesGrid: r,
            rtlTranslate: l,
            enabled: c,
          } = s;
        if (!c) return s;
        if (n.loop) {
          if (o && n.loopPreventsSlide) return !1;
          s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const h = d(l ? s.translate : -s.translate),
          u = a.map((e) => d(e));
        let p = a[u.indexOf(h) - 1];
        if (void 0 === p && n.cssMode) {
          let e;
          a.forEach((t, i) => {
            h >= t && (e = i);
          }),
            void 0 !== e && (p = a[e > 0 ? e - 1 : e]);
        }
        let f = 0;
        if (
          (void 0 !== p &&
            ((f = r.indexOf(p)),
            f < 0 && (f = s.activeIndex - 1),
            "auto" === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              ((f = f - s.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0)))),
          n.rewind && s.isBeginning)
        ) {
          const n =
            s.params.virtual && s.params.virtual.enabled && s.virtual
              ? s.virtual.slides.length - 1
              : s.slides.length - 1;
          return s.slideTo(n, e, t, i);
        }
        return s.slideTo(f, e, t, i);
      },
      slideReset: function (e = this.params.speed, t = !0, i) {
        return this.slideTo(this.activeIndex, e, t, i);
      },
      slideToClosest: function (e = this.params.speed, t = !0, i, s = 0.5) {
        const n = this;
        let o = n.activeIndex;
        const a = Math.min(n.params.slidesPerGroupSkip, o),
          r = a + Math.floor((o - a) / n.params.slidesPerGroup),
          l = n.rtlTranslate ? n.translate : -n.translate;
        if (l >= n.snapGrid[r]) {
          const e = n.snapGrid[r];
          l - e > (n.snapGrid[r + 1] - e) * s && (o += n.params.slidesPerGroup);
        } else {
          const e = n.snapGrid[r - 1];
          l - e <= (n.snapGrid[r] - e) * s && (o -= n.params.slidesPerGroup);
        }
        return (
          (o = Math.max(o, 0)),
          (o = Math.min(o, n.slidesGrid.length - 1)),
          n.slideTo(o, e, t, i)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: i } = e,
          s =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let n,
          o = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (n = parseInt(T(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? o < e.loopedSlides - s / 2 ||
                o > e.slides.length - e.loopedSlides + s / 2
                ? (e.loopFix(),
                  (o = i
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  P(() => {
                    e.slideTo(o);
                  }))
                : e.slideTo(o)
              : o > e.slides.length - s
              ? (e.loopFix(),
                (o = i
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                P(() => {
                  e.slideTo(o);
                }))
              : e.slideTo(o);
        } else e.slideTo(o);
      },
    };
    const W = {
      loopCreate: function () {
        const e = this,
          t = g(),
          { params: i, $wrapperEl: s } = e,
          n = s.children().length > 0 ? T(s.children()[0].parentNode) : s;
        n.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
        let o = n.children(`.${i.slideClass}`);
        if (i.loopFillGroupWithBlank) {
          const e = i.slidesPerGroup - (o.length % i.slidesPerGroup);
          if (e !== i.slidesPerGroup) {
            for (let s = 0; s < e; s += 1) {
              const e = T(t.createElement("div")).addClass(
                `${i.slideClass} ${i.slideBlankClass}`
              );
              n.append(e);
            }
            o = n.children(`.${i.slideClass}`);
          }
        }
        "auto" !== i.slidesPerView ||
          i.loopedSlides ||
          (i.loopedSlides = o.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(i.loopedSlides || i.slidesPerView, 10)
          )),
          (e.loopedSlides += i.loopAdditionalSlides),
          e.loopedSlides > o.length &&
            e.params.loopedSlidesLimit &&
            (e.loopedSlides = o.length);
        const a = [],
          r = [];
        o.each((e, t) => {
          T(e).attr("data-swiper-slide-index", t);
        });
        for (let t = 0; t < e.loopedSlides; t += 1) {
          const e = t - Math.floor(t / o.length) * o.length;
          r.push(o.eq(e)[0]), a.unshift(o.eq(o.length - e - 1)[0]);
        }
        for (let e = 0; e < r.length; e += 1)
          n.append(T(r[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
        for (let e = a.length - 1; e >= 0; e -= 1)
          n.prepend(T(a[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: i,
          loopedSlides: s,
          allowSlidePrev: n,
          allowSlideNext: o,
          snapGrid: a,
          rtlTranslate: r,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const c = -a[t] - e.getTranslate();
        if (t < s) {
          (l = i.length - 3 * s + t), (l += s);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((r ? -e.translate : e.translate) - c);
        } else if (t >= i.length - s) {
          (l = -i.length + t + s), (l += s);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((r ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = n), (e.allowSlideNext = o), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: i } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          i.removeAttr("data-swiper-slide-index");
      },
    };
    function G(e) {
      const t = this,
        i = g(),
        s = v(),
        n = t.touchEventsData,
        { params: o, touches: a, enabled: r } = t;
      if (!r) return;
      if (t.animating && o.preventInteractionOnTransition) return;
      !t.animating && o.cssMode && o.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let c = T(l.target);
      if ("wrapper" === o.touchEventsTarget && !c.closest(t.wrapperEl).length)
        return;
      if (
        ((n.isTouchEvent = "touchstart" === l.type),
        !n.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!n.isTouchEvent && "button" in l && l.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      const d = !!o.noSwipingClass && "" !== o.noSwipingClass,
        h = e.composedPath ? e.composedPath() : e.path;
      d && l.target && l.target.shadowRoot && h && (c = T(h[0]));
      const u = o.noSwipingSelector
          ? o.noSwipingSelector
          : `.${o.noSwipingClass}`,
        p = !(!l.target || !l.target.shadowRoot);
      if (
        o.noSwiping &&
        (p
          ? (function (e, t = this) {
              return (function t(i) {
                if (!i || i === g() || i === v()) return null;
                i.assignedSlot && (i = i.assignedSlot);
                const s = i.closest(e);
                return s || i.getRootNode ? s || t(i.getRootNode().host) : null;
              })(t);
            })(u, c[0])
          : c.closest(u)[0])
      )
        return void (t.allowClick = !0);
      if (o.swipeHandler && !c.closest(o.swipeHandler)[0]) return;
      (a.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (a.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const f = a.currentX,
        m = a.currentY,
        b = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
        y = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
      if (b && (f <= y || f >= s.innerWidth - y)) {
        if ("prevent" !== b) return;
        e.preventDefault();
      }
      if (
        (Object.assign(n, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (a.startX = f),
        (a.startY = m),
        (n.touchStartTime = M()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        o.threshold > 0 && (n.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        c.is(n.focusableElements) &&
          ((e = !1), "SELECT" === c[0].nodeName && (n.isTouched = !1)),
          i.activeElement &&
            T(i.activeElement).is(n.focusableElements) &&
            i.activeElement !== c[0] &&
            i.activeElement.blur();
        const s = e && t.allowTouchMove && o.touchStartPreventDefault;
        (!o.touchStartForcePreventDefault && !s) ||
          c[0].isContentEditable ||
          l.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !o.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function V(e) {
      const t = g(),
        i = this,
        s = i.touchEventsData,
        { params: n, touches: o, rtlTranslate: a, enabled: r } = i;
      if (!r) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !s.isTouched))
        return void (
          s.startMoving &&
          s.isScrolling &&
          i.emit("touchMoveOpposite", l)
        );
      if (s.isTouchEvent && "touchmove" !== l.type) return;
      const c =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        d = "touchmove" === l.type ? c.pageX : l.pageX,
        h = "touchmove" === l.type ? c.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (o.startX = d), void (o.startY = h);
      if (!i.allowTouchMove)
        return (
          T(l.target).is(s.focusableElements) || (i.allowClick = !1),
          void (
            s.isTouched &&
            (Object.assign(o, {
              startX: d,
              startY: h,
              currentX: d,
              currentY: h,
            }),
            (s.touchStartTime = M()))
          )
        );
      if (s.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
        if (i.isVertical()) {
          if (
            (h < o.startY && i.translate <= i.maxTranslate()) ||
            (h > o.startY && i.translate >= i.minTranslate())
          )
            return (s.isTouched = !1), void (s.isMoved = !1);
        } else if (
          (d < o.startX && i.translate <= i.maxTranslate()) ||
          (d > o.startX && i.translate >= i.minTranslate())
        )
          return;
      if (
        s.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        T(l.target).is(s.focusableElements)
      )
        return (s.isMoved = !0), void (i.allowClick = !1);
      if (
        (s.allowTouchCallbacks && i.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (o.currentX = d), (o.currentY = h);
      const u = o.currentX - o.startX,
        p = o.currentY - o.startY;
      if (i.params.threshold && Math.sqrt(u ** 2 + p ** 2) < i.params.threshold)
        return;
      if (void 0 === s.isScrolling) {
        let e;
        (i.isHorizontal() && o.currentY === o.startY) ||
        (i.isVertical() && o.currentX === o.startX)
          ? (s.isScrolling = !1)
          : u * u + p * p >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(p), Math.abs(u))) / Math.PI),
            (s.isScrolling = i.isHorizontal()
              ? e > n.touchAngle
              : 90 - e > n.touchAngle));
      }
      if (
        (s.isScrolling && i.emit("touchMoveOpposite", l),
        void 0 === s.startMoving &&
          ((o.currentX === o.startX && o.currentY === o.startY) ||
            (s.startMoving = !0)),
        s.isScrolling)
      )
        return void (s.isTouched = !1);
      if (!s.startMoving) return;
      (i.allowClick = !1),
        !n.cssMode && l.cancelable && l.preventDefault(),
        n.touchMoveStopPropagation && !n.nested && l.stopPropagation(),
        s.isMoved ||
          (n.loop && !n.cssMode && i.loopFix(),
          (s.startTranslate = i.getTranslate()),
          i.setTransition(0),
          i.animating &&
            i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (s.allowMomentumBounce = !1),
          !n.grabCursor ||
            (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
            i.setGrabCursor(!0),
          i.emit("sliderFirstMove", l)),
        i.emit("sliderMove", l),
        (s.isMoved = !0);
      let f = i.isHorizontal() ? u : p;
      (o.diff = f),
        (f *= n.touchRatio),
        a && (f = -f),
        (i.swipeDirection = f > 0 ? "prev" : "next"),
        (s.currentTranslate = f + s.startTranslate);
      let m = !0,
        v = n.resistanceRatio;
      if (
        (n.touchReleaseOnEdges && (v = 0),
        f > 0 && s.currentTranslate > i.minTranslate()
          ? ((m = !1),
            n.resistance &&
              (s.currentTranslate =
                i.minTranslate() -
                1 +
                (-i.minTranslate() + s.startTranslate + f) ** v))
          : f < 0 &&
            s.currentTranslate < i.maxTranslate() &&
            ((m = !1),
            n.resistance &&
              (s.currentTranslate =
                i.maxTranslate() +
                1 -
                (i.maxTranslate() - s.startTranslate - f) ** v)),
        m && (l.preventedByNestedSwiper = !0),
        !i.allowSlideNext &&
          "next" === i.swipeDirection &&
          s.currentTranslate < s.startTranslate &&
          (s.currentTranslate = s.startTranslate),
        !i.allowSlidePrev &&
          "prev" === i.swipeDirection &&
          s.currentTranslate > s.startTranslate &&
          (s.currentTranslate = s.startTranslate),
        i.allowSlidePrev ||
          i.allowSlideNext ||
          (s.currentTranslate = s.startTranslate),
        n.threshold > 0)
      ) {
        if (!(Math.abs(f) > n.threshold || s.allowThresholdMove))
          return void (s.currentTranslate = s.startTranslate);
        if (!s.allowThresholdMove)
          return (
            (s.allowThresholdMove = !0),
            (o.startX = o.currentX),
            (o.startY = o.currentY),
            (s.currentTranslate = s.startTranslate),
            void (o.diff = i.isHorizontal()
              ? o.currentX - o.startX
              : o.currentY - o.startY)
          );
      }
      n.followFinger &&
        !n.cssMode &&
        (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
          n.watchSlidesProgress) &&
          (i.updateActiveIndex(), i.updateSlidesClasses()),
        i.params.freeMode &&
          n.freeMode.enabled &&
          i.freeMode &&
          i.freeMode.onTouchMove(),
        i.updateProgress(s.currentTranslate),
        i.setTranslate(s.currentTranslate));
    }
    function X(e) {
      const t = this,
        i = t.touchEventsData,
        {
          params: s,
          touches: n,
          rtlTranslate: o,
          slidesGrid: a,
          enabled: r,
        } = t;
      if (!r) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", l),
        (i.allowTouchCallbacks = !1),
        !i.isTouched)
      )
        return (
          i.isMoved && s.grabCursor && t.setGrabCursor(!1),
          (i.isMoved = !1),
          void (i.startMoving = !1)
        );
      s.grabCursor &&
        i.isMoved &&
        i.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = M(),
        d = c - i.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          d < 300 &&
            c - i.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((i.lastClickTime = M()),
        P(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !i.isTouched ||
          !i.isMoved ||
          !t.swipeDirection ||
          0 === n.diff ||
          i.currentTranslate === i.startTranslate)
      )
        return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
      let h;
      if (
        ((i.isTouched = !1),
        (i.isMoved = !1),
        (i.startMoving = !1),
        (h = s.followFinger
          ? o
            ? t.translate
            : -t.translate
          : -i.currentTranslate),
        s.cssMode)
      )
        return;
      if (t.params.freeMode && s.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: h });
      let u = 0,
        p = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < a.length;
        e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
      ) {
        const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        void 0 !== a[e + t]
          ? h >= a[e] && h < a[e + t] && ((u = e), (p = a[e + t] - a[e]))
          : h >= a[e] && ((u = e), (p = a[a.length - 1] - a[a.length - 2]));
      }
      let f = null,
        g = null;
      s.rewind &&
        (t.isBeginning
          ? (g =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (f = 0));
      const m = (h - a[u]) / p,
        v = u < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      if (d > s.longSwipesMs) {
        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (m >= s.longSwipesRatio
            ? t.slideTo(s.rewind && t.isEnd ? f : u + v)
            : t.slideTo(u)),
          "prev" === t.swipeDirection &&
            (m > 1 - s.longSwipesRatio
              ? t.slideTo(u + v)
              : null !== g && m < 0 && Math.abs(m) > s.longSwipesRatio
              ? t.slideTo(g)
              : t.slideTo(u));
      } else {
        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(u + v)
            : t.slideTo(u)
          : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : u + v),
            "prev" === t.swipeDirection && t.slideTo(null !== g ? g : u));
      }
    }
    function Y() {
      const e = this,
        { params: t, el: i } = e;
      if (i && 0 === i.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: s, allowSlidePrev: n, snapGrid: o } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = s),
        e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
    }
    function Z(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function U() {
      const e = this,
        { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
      if (!s) return;
      let n;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const o = e.maxTranslate() - e.minTranslate();
      (n = 0 === o ? 0 : (e.translate - e.minTranslate()) / o),
        n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let K = !1;
    function J() {}
    const Q = (e, t) => {
      const i = g(),
        {
          params: s,
          touchEvents: n,
          el: o,
          wrapperEl: a,
          device: r,
          support: l,
        } = e,
        c = !!s.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        h = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== n.start ||
          !l.passiveListener ||
          !s.passiveListeners
        ) && { passive: !0, capture: !1 };
        o[d](n.start, e.onTouchStart, t),
          o[d](
            n.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: c } : c
          ),
          o[d](n.end, e.onTouchEnd, t),
          n.cancel && o[d](n.cancel, e.onTouchEnd, t);
      } else
        o[d](n.start, e.onTouchStart, !1),
          i[d](n.move, e.onTouchMove, c),
          i[d](n.end, e.onTouchEnd, !1);
      (s.preventClicks || s.preventClicksPropagation) &&
        o[d]("click", e.onClick, !0),
        s.cssMode && a[d]("scroll", e.onScroll),
        s.updateOnWindowResize
          ? e[h](
              r.ios || r.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              Y,
              !0
            )
          : e[h]("observerUpdate", Y, !0);
    };
    const ee = {
        attachEvents: function () {
          const e = this,
            t = g(),
            { params: i, support: s } = e;
          (e.onTouchStart = G.bind(e)),
            (e.onTouchMove = V.bind(e)),
            (e.onTouchEnd = X.bind(e)),
            i.cssMode && (e.onScroll = U.bind(e)),
            (e.onClick = Z.bind(e)),
            s.touch && !K && (t.addEventListener("touchstart", J), (K = !0)),
            Q(e, "on");
        },
        detachEvents: function () {
          Q(this, "off");
        },
      },
      te = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const ie = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: i,
            loopedSlides: s = 0,
            params: n,
            $el: o,
          } = e,
          a = n.breakpoints;
        if (!a || (a && 0 === Object.keys(a).length)) return;
        const r = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
        if (!r || e.currentBreakpoint === r) return;
        const l = (r in a ? a[r] : void 0) || e.originalParams,
          c = te(e, n),
          d = te(e, l),
          h = n.enabled;
        c && !d
          ? (o.removeClass(
              `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !c &&
            d &&
            (o.addClass(`${n.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === n.grid.fill)) &&
              o.addClass(`${n.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          ["navigation", "pagination", "scrollbar"].forEach((t) => {
            const i = n[t] && n[t].enabled,
              s = l[t] && l[t].enabled;
            i && !s && e[t].disable(), !i && s && e[t].enable();
          });
        const u = l.direction && l.direction !== n.direction,
          p = n.loop && (l.slidesPerView !== n.slidesPerView || u);
        u && i && e.changeDirection(), A(e.params, l);
        const f = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          h && !f ? e.disable() : !h && f && e.enable(),
          (e.currentBreakpoint = r),
          e.emit("_beforeBreakpoint", l),
          p &&
            i &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - s + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t = "window", i) {
        if (!e || ("container" === t && !i)) return;
        let s = !1;
        const n = v(),
          o = "window" === t ? n.innerHeight : i.clientHeight,
          a = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: o * t, point: e };
            }
            return { value: e, point: e };
          });
        a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < a.length; e += 1) {
          const { point: o, value: r } = a[e];
          "window" === t
            ? n.matchMedia(`(min-width: ${r}px)`).matches && (s = o)
            : r <= i.clientWidth && (s = o);
        }
        return s || "max";
      },
    };
    const se = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: i,
            rtl: s,
            $el: n,
            device: o,
            support: a,
          } = e,
          r = (function (e, t) {
            const i = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((s) => {
                      e[s] && i.push(t + s);
                    })
                  : "string" == typeof e && i.push(t + e);
              }),
              i
            );
          })(
            [
              "initialized",
              i.direction,
              { "pointer-events": !a.touch },
              { "free-mode": e.params.freeMode && i.freeMode.enabled },
              { autoheight: i.autoHeight },
              { rtl: s },
              { grid: i.grid && i.grid.rows > 1 },
              {
                "grid-column":
                  i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
              },
              { android: o.android },
              { ios: o.ios },
              { "css-mode": i.cssMode },
              { centered: i.cssMode && i.centeredSlides },
              { "watch-progress": i.watchSlidesProgress },
            ],
            i.containerModifierClass
          );
        t.push(...r), n.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const ne = {
      loadImage: function (e, t, i, s, n, o) {
        const a = v();
        let r;
        function l() {
          o && o();
        }
        T(e).parent("picture")[0] || (e.complete && n)
          ? l()
          : t
          ? ((r = new a.Image()),
            (r.onload = l),
            (r.onerror = l),
            s && (r.sizes = s),
            i && (r.srcset = i),
            t && (r.src = t))
          : l();
      },
      preloadImages: function () {
        const e = this;
        function t() {
          null != e &&
            e &&
            !e.destroyed &&
            (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
            e.imagesLoaded === e.imagesToLoad.length &&
              (e.params.updateOnImagesReady && e.update(),
              e.emit("imagesReady")));
        }
        e.imagesToLoad = e.$el.find("img");
        for (let i = 0; i < e.imagesToLoad.length; i += 1) {
          const s = e.imagesToLoad[i];
          e.loadImage(
            s,
            s.currentSrc || s.getAttribute("src"),
            s.srcset || s.getAttribute("srcset"),
            s.sizes || s.getAttribute("sizes"),
            !0,
            t
          );
        }
      },
    };
    const oe = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: !0,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function ae(e, t) {
      return function (i = {}) {
        const s = Object.keys(i)[0],
          n = i[s];
        "object" == typeof n && null !== n
          ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
              !0 === e[s] &&
              (e[s] = { auto: !0 }),
            s in e && "enabled" in n
              ? (!0 === e[s] && (e[s] = { enabled: !0 }),
                "object" != typeof e[s] ||
                  "enabled" in e[s] ||
                  (e[s].enabled = !0),
                e[s] || (e[s] = { enabled: !1 }),
                A(t, i))
              : A(t, i))
          : A(t, i);
      };
    }
    const re = {
        eventsEmitter: j,
        update: B,
        translate: N,
        transition: {
          setTransition: function (e, t) {
            const i = this;
            i.params.cssMode || i.$wrapperEl.transition(e),
              i.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const i = this,
              { params: s } = i;
            s.cssMode ||
              (s.autoHeight && i.updateAutoHeight(),
              H({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const i = this,
              { params: s } = i;
            (i.animating = !1),
              s.cssMode ||
                (i.setTransition(0),
                H({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: q,
        loop: W,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const i =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (i.style.cursor = "move"),
              (i.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: ee,
        breakpoints: ie,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: i } = e,
              { slidesOffsetBefore: s } = i;
            if (s) {
              const t = e.slides.length - 1,
                i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
              e.isLocked = e.size > i;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: se,
        images: ne,
      },
      le = {};
    class ce {
      constructor(...e) {
        let t, i;
        if (
          (1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (i = e[0])
            : ([t, i] = e),
          i || (i = {}),
          (i = A({}, i)),
          t && !i.el && (i.el = t),
          i.el && T(i.el).length > 1)
        ) {
          const e = [];
          return (
            T(i.el).each((t) => {
              const s = A({}, i, { el: t });
              e.push(new ce(s));
            }),
            e
          );
        }
        const s = this;
        (s.__swiper__ = !0),
          (s.support = D()),
          (s.device = R({ userAgent: i.userAgent })),
          (s.browser = F()),
          (s.eventsListeners = {}),
          (s.eventsAnyListeners = []),
          (s.modules = [...s.__modules__]),
          i.modules && Array.isArray(i.modules) && s.modules.push(...i.modules);
        const n = {};
        s.modules.forEach((e) => {
          e({
            swiper: s,
            extendParams: ae(i, n),
            on: s.on.bind(s),
            once: s.once.bind(s),
            off: s.off.bind(s),
            emit: s.emit.bind(s),
          });
        });
        const o = A({}, oe, n);
        return (
          (s.params = A({}, o, le, i)),
          (s.originalParams = A({}, s.params)),
          (s.passedParams = A({}, i)),
          s.params &&
            s.params.on &&
            Object.keys(s.params.on).forEach((e) => {
              s.on(e, s.params.on[e]);
            }),
          s.params && s.params.onAny && s.onAny(s.params.onAny),
          (s.$ = T),
          Object.assign(s, {
            enabled: s.params.enabled,
            el: t,
            classNames: [],
            slides: T(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === s.params.direction,
            isVertical: () => "vertical" === s.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: s.params.allowSlideNext,
            allowSlidePrev: s.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (s.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (s.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                s.support.touch || !s.params.simulateTouch
                  ? s.touchEventsTouch
                  : s.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: s.params.focusableElements,
              lastClickTime: M(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: s.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          s.emit("_swiper"),
          s.params.init && s.init(),
          s
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const s = i.minTranslate(),
          n = (i.maxTranslate() - s) * e + s;
        i.translateTo(n, void 0 === t ? 0 : t),
          i.updateActiveIndex(),
          i.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((i) => {
          const s = e.getSlideClasses(i);
          t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: i,
          slides: s,
          slidesGrid: n,
          slidesSizesGrid: o,
          size: a,
          activeIndex: r,
        } = this;
        let l = 1;
        if (i.centeredSlides) {
          let e,
            t = s[r].swiperSlideSize;
          for (let i = r + 1; i < s.length; i += 1)
            s[i] &&
              !e &&
              ((t += s[i].swiperSlideSize), (l += 1), t > a && (e = !0));
          for (let i = r - 1; i >= 0; i -= 1)
            s[i] &&
              !e &&
              ((t += s[i].swiperSlideSize), (l += 1), t > a && (e = !0));
        } else if ("current" === e)
          for (let e = r + 1; e < s.length; e += 1) {
            (t ? n[e] + o[e] - n[r] < a : n[e] - n[r] < a) && (l += 1);
          }
        else
          for (let e = r - 1; e >= 0; e -= 1) {
            n[r] - n[e] < a && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: i } = e;
        function s() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let n;
        i.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (s(), e.params.autoHeight && e.updateAutoHeight())
            : ((n =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              n || s()),
          i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const i = this,
          s = i.params.direction;
        return (
          e || (e = "horizontal" === s ? "vertical" : "horizontal"),
          e === s ||
            ("horizontal" !== e && "vertical" !== e) ||
            (i.$el
              .removeClass(`${i.params.containerModifierClass}${s}`)
              .addClass(`${i.params.containerModifierClass}${e}`),
            i.emitContainerClasses(),
            (i.params.direction = e),
            i.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            i.emit("changeDirection"),
            t && i.update()),
          i
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const i = T(e || t.params.el);
        if (!(e = i[0])) return !1;
        e.swiper = t;
        const s = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let n = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = T(e.shadowRoot.querySelector(s()));
            return (t.children = (e) => i.children(e)), t;
          }
          return i.children ? i.children(s()) : T(i).children(s());
        })();
        if (0 === n.length && t.params.createElements) {
          const e = g().createElement("div");
          (n = T(e)),
            (e.className = t.params.wrapperClass),
            i.append(e),
            i.children(`.${t.params.slideClass}`).each((e) => {
              n.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: i,
            el: e,
            $wrapperEl: n,
            wrapperEl: n[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
            wrongRTL: "-webkit-box" === n.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const i = this,
          { params: s, $el: n, $wrapperEl: o, slides: a } = i;
        return (
          void 0 === i.params ||
            i.destroyed ||
            (i.emit("beforeDestroy"),
            (i.initialized = !1),
            i.detachEvents(),
            s.loop && i.loopDestroy(),
            t &&
              (i.removeClasses(),
              n.removeAttr("style"),
              o.removeAttr("style"),
              a &&
                a.length &&
                a
                  .removeClass(
                    [
                      s.slideVisibleClass,
                      s.slideActiveClass,
                      s.slideNextClass,
                      s.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((e) => {
              i.off(e);
            }),
            !1 !== e &&
              ((i.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(i)),
            (i.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        A(le, e);
      }
      static get extendedDefaults() {
        return le;
      }
      static get defaults() {
        return oe;
      }
      static installModule(e) {
        ce.prototype.__modules__ || (ce.prototype.__modules__ = []);
        const t = ce.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => ce.installModule(e)), ce)
          : (ce.installModule(e), ce);
      }
    }
    Object.keys(re).forEach((e) => {
      Object.keys(re[e]).forEach((t) => {
        ce.prototype[t] = re[e][t];
      });
    }),
      ce.use([
        function ({ swiper: e, on: t, emit: i }) {
          const s = v();
          let n = null,
            o = null;
          const a = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (i("beforeResize"), i("resize"));
            },
            r = () => {
              e && !e.destroyed && e.initialized && i("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== s.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((n = new ResizeObserver((t) => {
                  o = s.requestAnimationFrame(() => {
                    const { width: i, height: s } = e;
                    let n = i,
                      o = s;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: i, target: s }) => {
                        (s && s !== e.el) ||
                          ((n = i ? i.width : (t[0] || t).inlineSize),
                          (o = i ? i.height : (t[0] || t).blockSize));
                      }
                    ),
                      (n === i && o === s) || a();
                  });
                })),
                n.observe(e.el))
              : (s.addEventListener("resize", a),
                s.addEventListener("orientationchange", r));
          }),
            t("destroy", () => {
              o && s.cancelAnimationFrame(o),
                n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
                s.removeEventListener("resize", a),
                s.removeEventListener("orientationchange", r);
            });
        },
        function ({ swiper: e, extendParams: t, on: i, emit: s }) {
          const n = [],
            o = v(),
            a = (e, t = {}) => {
              const i = new (o.MutationObserver || o.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void s("observerUpdate", e[0]);
                  const t = function () {
                    s("observerUpdate", e[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(t)
                    : o.setTimeout(t, 0);
                }
              );
              i.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                n.push(i);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) a(t[e]);
                }
                a(e.$el[0], { childList: e.params.observeSlideChildren }),
                  a(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            i("destroy", () => {
              n.forEach((e) => {
                e.disconnect();
              }),
                n.splice(0, n.length);
            });
        },
      ]);
    const de = ce;
    function he({ swiper: e, extendParams: t, on: i, emit: s }) {
      function n(t) {
        let i;
        return (
          t &&
            ((i = T(t)),
            e.params.uniqueNavElements &&
              "string" == typeof t &&
              i.length > 1 &&
              1 === e.$el.find(t).length &&
              (i = e.$el.find(t))),
          i
        );
      }
      function o(t, i) {
        const s = e.params.navigation;
        t &&
          t.length > 0 &&
          (t[i ? "addClass" : "removeClass"](s.disabledClass),
          t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = i),
          e.params.watchOverflow &&
            e.enabled &&
            t[e.isLocked ? "addClass" : "removeClass"](s.lockClass));
      }
      function a() {
        if (e.params.loop) return;
        const { $nextEl: t, $prevEl: i } = e.navigation;
        o(i, e.isBeginning && !e.params.rewind),
          o(t, e.isEnd && !e.params.rewind);
      }
      function r(t) {
        t.preventDefault(),
          (!e.isBeginning || e.params.loop || e.params.rewind) &&
            (e.slidePrev(), s("navigationPrev"));
      }
      function l(t) {
        t.preventDefault(),
          (!e.isEnd || e.params.loop || e.params.rewind) &&
            (e.slideNext(), s("navigationNext"));
      }
      function c() {
        const t = e.params.navigation;
        if (
          ((e.params.navigation = (function (e, t, i, s) {
            const n = g();
            return (
              e.params.createElements &&
                Object.keys(s).forEach((o) => {
                  if (!i[o] && !0 === i.auto) {
                    let a = e.$el.children(`.${s[o]}`)[0];
                    a ||
                      ((a = n.createElement("div")),
                      (a.className = s[o]),
                      e.$el.append(a)),
                      (i[o] = a),
                      (t[o] = a);
                  }
                }),
              i
            );
          })(e, e.originalParams.navigation, e.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev",
          })),
          !t.nextEl && !t.prevEl)
        )
          return;
        const i = n(t.nextEl),
          s = n(t.prevEl);
        i && i.length > 0 && i.on("click", l),
          s && s.length > 0 && s.on("click", r),
          Object.assign(e.navigation, {
            $nextEl: i,
            nextEl: i && i[0],
            $prevEl: s,
            prevEl: s && s[0],
          }),
          e.enabled ||
            (i && i.addClass(t.lockClass), s && s.addClass(t.lockClass));
      }
      function d() {
        const { $nextEl: t, $prevEl: i } = e.navigation;
        t &&
          t.length &&
          (t.off("click", l), t.removeClass(e.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off("click", r),
            i.removeClass(e.params.navigation.disabledClass));
      }
      t({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (e.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        i("init", () => {
          !1 === e.params.navigation.enabled ? h() : (c(), a());
        }),
        i("toEdge fromEdge lock unlock", () => {
          a();
        }),
        i("destroy", () => {
          d();
        }),
        i("enable disable", () => {
          const { $nextEl: t, $prevEl: i } = e.navigation;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            ),
            i &&
              i[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              );
        }),
        i("click", (t, i) => {
          const { $nextEl: n, $prevEl: o } = e.navigation,
            a = i.target;
          if (e.params.navigation.hideOnClick && !T(a).is(o) && !T(a).is(n)) {
            if (
              e.pagination &&
              e.params.pagination &&
              e.params.pagination.clickable &&
              (e.pagination.el === a || e.pagination.el.contains(a))
            )
              return;
            let t;
            n
              ? (t = n.hasClass(e.params.navigation.hiddenClass))
              : o && (t = o.hasClass(e.params.navigation.hiddenClass)),
              s(!0 === t ? "navigationShow" : "navigationHide"),
              n && n.toggleClass(e.params.navigation.hiddenClass),
              o && o.toggleClass(e.params.navigation.hiddenClass);
          }
        });
      const h = () => {
        e.$el.addClass(e.params.navigation.navigationDisabledClass), d();
      };
      Object.assign(e.navigation, {
        enable: () => {
          e.$el.removeClass(e.params.navigation.navigationDisabledClass),
            c(),
            a();
        },
        disable: h,
        update: a,
        init: c,
        destroy: d,
      });
    }
    function ue(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function pe({ swiper: e, extendParams: t, on: i }) {
      t({
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group",
          id: null,
        },
      }),
        (e.a11y = { clicked: !1 });
      let s = null;
      function n(e) {
        const t = s;
        0 !== t.length && (t.html(""), t.html(e));
      }
      function o(e) {
        e.attr("tabIndex", "0");
      }
      function a(e) {
        e.attr("tabIndex", "-1");
      }
      function r(e, t) {
        e.attr("role", t);
      }
      function l(e, t) {
        e.attr("aria-roledescription", t);
      }
      function c(e, t) {
        e.attr("aria-label", t);
      }
      function d(e) {
        e.attr("aria-disabled", !0);
      }
      function h(e) {
        e.attr("aria-disabled", !1);
      }
      function u(t) {
        if (13 !== t.keyCode && 32 !== t.keyCode) return;
        const i = e.params.a11y,
          s = T(t.target);
        e.navigation &&
          e.navigation.$nextEl &&
          s.is(e.navigation.$nextEl) &&
          ((e.isEnd && !e.params.loop) || e.slideNext(),
          e.isEnd ? n(i.lastSlideMessage) : n(i.nextSlideMessage)),
          e.navigation &&
            e.navigation.$prevEl &&
            s.is(e.navigation.$prevEl) &&
            ((e.isBeginning && !e.params.loop) || e.slidePrev(),
            e.isBeginning ? n(i.firstSlideMessage) : n(i.prevSlideMessage)),
          e.pagination &&
            s.is(ue(e.params.pagination.bulletClass)) &&
            s[0].click();
      }
      function p() {
        return (
          e.pagination && e.pagination.bullets && e.pagination.bullets.length
        );
      }
      function f() {
        return p() && e.params.pagination.clickable;
      }
      const g = (e, t, i) => {
          o(e),
            "BUTTON" !== e[0].tagName && (r(e, "button"), e.on("keydown", u)),
            c(e, i),
            (function (e, t) {
              e.attr("aria-controls", t);
            })(e, t);
        },
        m = () => {
          e.a11y.clicked = !0;
        },
        v = () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              e.destroyed || (e.a11y.clicked = !1);
            });
          });
        },
        b = (t) => {
          if (e.a11y.clicked) return;
          const i = t.target.closest(`.${e.params.slideClass}`);
          if (!i || !e.slides.includes(i)) return;
          const s = e.slides.indexOf(i) === e.activeIndex,
            n =
              e.params.watchSlidesProgress &&
              e.visibleSlides &&
              e.visibleSlides.includes(i);
          s ||
            n ||
            (t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents) ||
            (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
            e.slideTo(e.slides.indexOf(i), 0));
        },
        y = () => {
          const t = e.params.a11y;
          t.itemRoleDescriptionMessage &&
            l(T(e.slides), t.itemRoleDescriptionMessage),
            t.slideRole && r(T(e.slides), t.slideRole);
          const i = e.params.loop
            ? e.slides.filter(
                (t) => !t.classList.contains(e.params.slideDuplicateClass)
              ).length
            : e.slides.length;
          t.slideLabelMessage &&
            e.slides.each((s, n) => {
              const o = T(s),
                a = e.params.loop
                  ? parseInt(o.attr("data-swiper-slide-index"), 10)
                  : n;
              c(
                o,
                t.slideLabelMessage
                  .replace(/\{\{index\}\}/, a + 1)
                  .replace(/\{\{slidesLength\}\}/, i)
              );
            });
        },
        w = () => {
          const t = e.params.a11y;
          e.$el.append(s);
          const i = e.$el;
          t.containerRoleDescriptionMessage &&
            l(i, t.containerRoleDescriptionMessage),
            t.containerMessage && c(i, t.containerMessage);
          const n = e.$wrapperEl,
            o =
              t.id ||
              n.attr("id") ||
              `swiper-wrapper-${(function (e = 16) {
                return "x"
                  .repeat(e)
                  .replace(/x/g, () =>
                    Math.round(16 * Math.random()).toString(16)
                  );
              })(16)}`,
            a =
              e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
          var r;
          let d, h;
          (r = o),
            n.attr("id", r),
            (function (e, t) {
              e.attr("aria-live", t);
            })(n, a),
            y(),
            e.navigation && e.navigation.$nextEl && (d = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (h = e.navigation.$prevEl),
            d && d.length && g(d, o, t.nextSlideMessage),
            h && h.length && g(h, o, t.prevSlideMessage),
            f() &&
              e.pagination.$el.on(
                "keydown",
                ue(e.params.pagination.bulletClass),
                u
              ),
            e.$el.on("focus", b, !0),
            e.$el.on("pointerdown", m, !0),
            e.$el.on("pointerup", v, !0);
        };
      i("beforeInit", () => {
        s = T(
          `<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
        );
      }),
        i("afterInit", () => {
          e.params.a11y.enabled && w();
        }),
        i(
          "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
          () => {
            e.params.a11y.enabled && y();
          }
        ),
        i("fromEdge toEdge afterInit lock unlock", () => {
          e.params.a11y.enabled &&
            (function () {
              if (e.params.loop || e.params.rewind || !e.navigation) return;
              const { $nextEl: t, $prevEl: i } = e.navigation;
              i &&
                i.length > 0 &&
                (e.isBeginning ? (d(i), a(i)) : (h(i), o(i))),
                t && t.length > 0 && (e.isEnd ? (d(t), a(t)) : (h(t), o(t)));
            })();
        }),
        i("paginationUpdate", () => {
          e.params.a11y.enabled &&
            (function () {
              const t = e.params.a11y;
              p() &&
                e.pagination.bullets.each((i) => {
                  const s = T(i);
                  e.params.pagination.clickable &&
                    (o(s),
                    e.params.pagination.renderBullet ||
                      (r(s, "button"),
                      c(
                        s,
                        t.paginationBulletMessage.replace(
                          /\{\{index\}\}/,
                          s.index() + 1
                        )
                      ))),
                    s.is(`.${e.params.pagination.bulletActiveClass}`)
                      ? s.attr("aria-current", "true")
                      : s.removeAttr("aria-current");
                });
            })();
        }),
        i("destroy", () => {
          e.params.a11y.enabled &&
            (function () {
              let t, i;
              s && s.length > 0 && s.remove(),
                e.navigation &&
                  e.navigation.$nextEl &&
                  (t = e.navigation.$nextEl),
                e.navigation &&
                  e.navigation.$prevEl &&
                  (i = e.navigation.$prevEl),
                t && t.off("keydown", u),
                i && i.off("keydown", u),
                f() &&
                  e.pagination.$el.off(
                    "keydown",
                    ue(e.params.pagination.bulletClass),
                    u
                  ),
                e.$el.off("focus", b, !0),
                e.$el.off("pointerdown", m, !0),
                e.$el.off("pointerup", v, !0);
            })();
        });
    }
    function fe(e, t) {
      return e.transformEl
        ? t
            .find(e.transformEl)
            .css({
              "backface-visibility": "hidden",
              "-webkit-backface-visibility": "hidden",
            })
        : t;
    }
    if (document.querySelector(".categories")) {
      new de(".categories", {
        modules: [he, pe],
        slidesPerView: "auto",
        navigation: { nextEl: ".swiper-button-next-category" },
      });
    }
    function ge() {
      let e;
      window.innerWidth < 991.98 &&
        document.querySelector(".sidebar-articles") &&
        (e = new de(".sidebar-articles", {
          modules: [he, pe],
          navigation: { nextEl: ".swiper-button-next-article" },
          breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 16 },
            700: { slidesPerView: 3, spaceBetween: 16 },
          },
        })),
        window.innerWidth > 991.98 && void 0 !== e && e.destroy();
    }
    if (
      (window.addEventListener("resize", function () {
        ge();
      }),
      ge(),
      document.querySelector(".slider-container"))
    ) {
      let e = new de(".slider-bottom", {
        spaceBetween: 10,
        slidesPerView: 6,
        slideToClickedSlide: !0,
        breakpoints: {
          320: { spaceBetween: 8, slidesPerView: 4 },
          450: { spaceBetween: 8, slidesPerView: 4 },
          600: { spaceBetween: 8, slidesPerView: 6 },
          768: { spaceBetween: 9, slidesPerView: 8 },
        },
      });
      new de(".slider-top", {
        modules: [
          function ({ swiper: e, extendParams: t, on: i }) {
            t({
              thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs",
              },
            });
            let s = !1,
              n = !1;
            function o() {
              const t = e.thumbs.swiper;
              if (!t || t.destroyed) return;
              const i = t.clickedIndex,
                s = t.clickedSlide;
              if (s && T(s).hasClass(e.params.thumbs.slideThumbActiveClass))
                return;
              if (null == i) return;
              let n;
              if (
                ((n = t.params.loop
                  ? parseInt(
                      T(t.clickedSlide).attr("data-swiper-slide-index"),
                      10
                    )
                  : i),
                e.params.loop)
              ) {
                let t = e.activeIndex;
                e.slides.eq(t).hasClass(e.params.slideDuplicateClass) &&
                  (e.loopFix(),
                  (e._clientLeft = e.$wrapperEl[0].clientLeft),
                  (t = e.activeIndex));
                const i = e.slides
                    .eq(t)
                    .prevAll(`[data-swiper-slide-index="${n}"]`)
                    .eq(0)
                    .index(),
                  s = e.slides
                    .eq(t)
                    .nextAll(`[data-swiper-slide-index="${n}"]`)
                    .eq(0)
                    .index();
                n = void 0 === i ? s : void 0 === s ? i : s - t < t - i ? s : i;
              }
              e.slideTo(n);
            }
            function a() {
              const { thumbs: t } = e.params;
              if (s) return !1;
              s = !0;
              const i = e.constructor;
              if (t.swiper instanceof i)
                (e.thumbs.swiper = t.swiper),
                  Object.assign(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }),
                  Object.assign(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  });
              else if (L(t.swiper)) {
                const s = Object.assign({}, t.swiper);
                Object.assign(s, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                }),
                  (e.thumbs.swiper = new i(s)),
                  (n = !0);
              }
              return (
                e.thumbs.swiper.$el.addClass(
                  e.params.thumbs.thumbsContainerClass
                ),
                e.thumbs.swiper.on("tap", o),
                !0
              );
            }
            function r(t) {
              const i = e.thumbs.swiper;
              if (!i || i.destroyed) return;
              const s =
                "auto" === i.params.slidesPerView
                  ? i.slidesPerViewDynamic()
                  : i.params.slidesPerView;
              let n = 1;
              const o = e.params.thumbs.slideThumbActiveClass;
              if (
                (e.params.slidesPerView > 1 &&
                  !e.params.centeredSlides &&
                  (n = e.params.slidesPerView),
                e.params.thumbs.multipleActiveThumbs || (n = 1),
                (n = Math.floor(n)),
                i.slides.removeClass(o),
                i.params.loop || (i.params.virtual && i.params.virtual.enabled))
              )
                for (let t = 0; t < n; t += 1)
                  i.$wrapperEl
                    .children(`[data-swiper-slide-index="${e.realIndex + t}"]`)
                    .addClass(o);
              else
                for (let t = 0; t < n; t += 1)
                  i.slides.eq(e.realIndex + t).addClass(o);
              const a = e.params.thumbs.autoScrollOffset,
                r = a && !i.params.loop;
              if (e.realIndex !== i.realIndex || r) {
                let n,
                  o,
                  l = i.activeIndex;
                if (i.params.loop) {
                  i.slides.eq(l).hasClass(i.params.slideDuplicateClass) &&
                    (i.loopFix(),
                    (i._clientLeft = i.$wrapperEl[0].clientLeft),
                    (l = i.activeIndex));
                  const t = i.slides
                      .eq(l)
                      .prevAll(`[data-swiper-slide-index="${e.realIndex}"]`)
                      .eq(0)
                      .index(),
                    s = i.slides
                      .eq(l)
                      .nextAll(`[data-swiper-slide-index="${e.realIndex}"]`)
                      .eq(0)
                      .index();
                  (n =
                    void 0 === t
                      ? s
                      : void 0 === s
                      ? t
                      : s - l == l - t
                      ? i.params.slidesPerGroup > 1
                        ? s
                        : l
                      : s - l < l - t
                      ? s
                      : t),
                    (o = e.activeIndex > e.previousIndex ? "next" : "prev");
                } else
                  (n = e.realIndex),
                    (o = n > e.previousIndex ? "next" : "prev");
                r && (n += "next" === o ? a : -1 * a),
                  i.visibleSlidesIndexes &&
                    i.visibleSlidesIndexes.indexOf(n) < 0 &&
                    (i.params.centeredSlides
                      ? (n =
                          n > l
                            ? n - Math.floor(s / 2) + 1
                            : n + Math.floor(s / 2) - 1)
                      : n > l && i.params.slidesPerGroup,
                    i.slideTo(n, t ? 0 : void 0));
              }
            }
            (e.thumbs = { swiper: null }),
              i("beforeInit", () => {
                const { thumbs: t } = e.params;
                t && t.swiper && (a(), r(!0));
              }),
              i("slideChange update resize observerUpdate", () => {
                r();
              }),
              i("setTransition", (t, i) => {
                const s = e.thumbs.swiper;
                s && !s.destroyed && s.setTransition(i);
              }),
              i("beforeDestroy", () => {
                const t = e.thumbs.swiper;
                t && !t.destroyed && n && t.destroy();
              }),
              Object.assign(e.thumbs, { init: a, update: r });
          },
          function ({ swiper: e, extendParams: t, on: i }) {
            t({ fadeEffect: { crossFade: !1, transformEl: null } }),
              (function (e) {
                const {
                  effect: t,
                  swiper: i,
                  on: s,
                  setTranslate: n,
                  setTransition: o,
                  overwriteParams: a,
                  perspective: r,
                  recreateShadows: l,
                  getEffectParams: c,
                } = e;
                let d;
                s("beforeInit", () => {
                  if (i.params.effect !== t) return;
                  i.classNames.push(`${i.params.containerModifierClass}${t}`),
                    r &&
                      r() &&
                      i.classNames.push(`${i.params.containerModifierClass}3d`);
                  const e = a ? a() : {};
                  Object.assign(i.params, e),
                    Object.assign(i.originalParams, e);
                }),
                  s("setTranslate", () => {
                    i.params.effect === t && n();
                  }),
                  s("setTransition", (e, s) => {
                    i.params.effect === t && o(s);
                  }),
                  s("transitionEnd", () => {
                    if (i.params.effect === t && l) {
                      if (!c || !c().slideShadows) return;
                      i.slides.each((e) => {
                        i.$(e)
                          .find(
                            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                          )
                          .remove();
                      }),
                        l();
                    }
                  }),
                  s("virtualUpdate", () => {
                    i.params.effect === t &&
                      (i.slides.length || (d = !0),
                      requestAnimationFrame(() => {
                        d && i.slides && i.slides.length && (n(), (d = !1));
                      }));
                  });
              })({
                effect: "fade",
                swiper: e,
                on: i,
                setTranslate: () => {
                  const { slides: t } = e,
                    i = e.params.fadeEffect;
                  for (let s = 0; s < t.length; s += 1) {
                    const t = e.slides.eq(s);
                    let n = -t[0].swiperSlideOffset;
                    e.params.virtualTranslate || (n -= e.translate);
                    let o = 0;
                    e.isHorizontal() || ((o = n), (n = 0));
                    const a = e.params.fadeEffect.crossFade
                      ? Math.max(1 - Math.abs(t[0].progress), 0)
                      : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                    fe(i, t)
                      .css({ opacity: a })
                      .transform(`translate3d(${n}px, ${o}px, 0px)`);
                  }
                },
                setTransition: (t) => {
                  const { transformEl: i } = e.params.fadeEffect;
                  (i ? e.slides.find(i) : e.slides).transition(t),
                    (function ({
                      swiper: e,
                      duration: t,
                      transformEl: i,
                      allSlides: s,
                    }) {
                      const { slides: n, activeIndex: o, $wrapperEl: a } = e;
                      if (e.params.virtualTranslate && 0 !== t) {
                        let t,
                          r = !1;
                        (t = s
                          ? i
                            ? n.find(i)
                            : n
                          : i
                          ? n.eq(o).find(i)
                          : n.eq(o)),
                          t.transitionEnd(() => {
                            if (r) return;
                            if (!e || e.destroyed) return;
                            (r = !0), (e.animating = !1);
                            const t = ["webkitTransitionEnd", "transitionend"];
                            for (let e = 0; e < t.length; e += 1)
                              a.trigger(t[e]);
                          });
                      }
                    })({
                      swiper: e,
                      duration: t,
                      transformEl: i,
                      allSlides: !0,
                    });
                },
                overwriteParams: () => ({
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !e.params.cssMode,
                }),
              });
          },
          he,
          pe,
        ],
        thumbs: { swiper: e },
        navigation: {
          nextEl: ".swiper-arrow-right",
          prevEl: ".swiper-arrow-left",
        },
        effect: "fade",
        observer: !0,
        observeParents: !0,
        speed: 800,
        crossFade: !0,
        breakpoints: { 320: { autoHeight: !1 }, 991: { autoHeight: !1 } },
        on: {
          init: function (e) {
            setTimeout(() => {
              const t = e.$wrapperEl[0],
                i = e.slides[e.activeIndex].offsetHeight;
              t.style.minHeight = `${i}px`;
            }, 0),
              window.addEventListener("resize", function () {
                setTimeout(() => {
                  const t = e.$wrapperEl[0],
                    i = e.slides[e.activeIndex].offsetHeight;
                  t.style.minHeight = `${i}px`;
                }, 0);
              });
          },
          slideChange: function (e) {
            setTimeout(() => {
              const t = e.$wrapperEl[0],
                i = e.slides[e.activeIndex].offsetHeight;
              t.style.minHeight = `${i}px`;
            }, 0);
          },
        },
      });
    }
    new (i(732))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    e.watcher = new (class {
      constructor(e) {
        (this.config = Object.assign({ logging: !0 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${e.length})...`
          ),
            d(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let i = t.split("|"),
                s = { root: i[0], margin: i[1], threshold: i[2] },
                n = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    i = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    n = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === s.root &&
                    String(i) === s.margin &&
                    String(n) === s.threshold
                  )
                    return e;
                }),
                o = this.getScrollWatcherConfig(s);
              this.scrollWatcherInit(n, o);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${e.root} нет на странице`
              ),
          (t.rootMargin = e.margin),
          !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
        ) {
          if ("prx" === e.threshold) {
            e.threshold = [];
            for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
          } else e.threshold = e.threshold.split(",");
          return (t.threshold = e.threshold), t;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
        );
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${t.classList}, добавил класс _watcher-view`
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${t.classList}, убрал класс _watcher-view`
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging && c();
      }
      scrollWatcherCallback(e, t) {
        const i = e.target;
        this.scrollWatcherIntersecting(e, i),
          i.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(i, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } })
          );
      }
    })({});
    let me = !1;
    setTimeout(() => {
      if (me) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    const ve = (e, t = 1e4) => (
        (e = parseFloat(e + "") || 0), Math.round((e + Number.EPSILON) * t) / t
      ),
      be = function (e) {
        if (!(e && e instanceof Element && e.offsetParent)) return !1;
        const t = e.scrollHeight > e.clientHeight,
          i = window.getComputedStyle(e).overflowY,
          s = -1 !== i.indexOf("hidden"),
          n = -1 !== i.indexOf("visible");
        return t && !s && !n;
      },
      ye = function (e, t = void 0) {
        return (
          !(!e || e === document.body || (t && e === t)) &&
          (be(e) ? e : ye(e.parentElement, t))
        );
      },
      we = function (e) {
        var t = new DOMParser().parseFromString(e, "text/html").body;
        if (t.childElementCount > 1) {
          for (var i = document.createElement("div"); t.firstChild; )
            i.appendChild(t.firstChild);
          return i;
        }
        return t.firstChild;
      },
      Se = (e) => `${e || ""}`.split(" ").filter((e) => !!e),
      xe = (e, t, i) => {
        e &&
          Se(t).forEach((t) => {
            e.classList.toggle(t, i || !1);
          });
      };
    class Ee {
      constructor(e) {
        Object.defineProperty(this, "pageX", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
          Object.defineProperty(this, "pageY", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "clientX", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "clientY", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "id", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "time", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "nativePointer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.nativePointer = e),
          (this.pageX = e.pageX),
          (this.pageY = e.pageY),
          (this.clientX = e.clientX),
          (this.clientY = e.clientY),
          (this.id = self.Touch && e instanceof Touch ? e.identifier : -1),
          (this.time = Date.now());
      }
    }
    const Ce = { passive: !1 };
    class Te {
      constructor(
        e,
        { start: t = () => !0, move: i = () => {}, end: s = () => {} }
      ) {
        Object.defineProperty(this, "element", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
          Object.defineProperty(this, "startCallback", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "moveCallback", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "endCallback", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "currentPointers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "startPointers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          (this.element = e),
          (this.startCallback = t),
          (this.moveCallback = i),
          (this.endCallback = s);
        for (const e of [
          "onPointerStart",
          "onTouchStart",
          "onMove",
          "onTouchEnd",
          "onPointerEnd",
          "onWindowBlur",
        ])
          this[e] = this[e].bind(this);
        this.element.addEventListener("mousedown", this.onPointerStart, Ce),
          this.element.addEventListener("touchstart", this.onTouchStart, Ce),
          this.element.addEventListener("touchmove", this.onMove, Ce),
          this.element.addEventListener("touchend", this.onTouchEnd),
          this.element.addEventListener("touchcancel", this.onTouchEnd);
      }
      onPointerStart(e) {
        if (!e.buttons || 0 !== e.button) return;
        const t = new Ee(e);
        this.currentPointers.some((e) => e.id === t.id) ||
          (this.triggerPointerStart(t, e) &&
            (window.addEventListener("mousemove", this.onMove),
            window.addEventListener("mouseup", this.onPointerEnd),
            window.addEventListener("blur", this.onWindowBlur)));
      }
      onTouchStart(e) {
        for (const t of Array.from(e.changedTouches || []))
          this.triggerPointerStart(new Ee(t), e);
        window.addEventListener("blur", this.onWindowBlur);
      }
      onMove(e) {
        const t = this.currentPointers.slice(),
          i =
            "changedTouches" in e
              ? Array.from(e.changedTouches || []).map((e) => new Ee(e))
              : [new Ee(e)],
          s = [];
        for (const e of i) {
          const t = this.currentPointers.findIndex((t) => t.id === e.id);
          t < 0 || (s.push(e), (this.currentPointers[t] = e));
        }
        s.length && this.moveCallback(e, this.currentPointers.slice(), t);
      }
      onPointerEnd(e) {
        (e.buttons > 0 && 0 !== e.button) ||
          (this.triggerPointerEnd(e, new Ee(e)),
          window.removeEventListener("mousemove", this.onMove),
          window.removeEventListener("mouseup", this.onPointerEnd),
          window.removeEventListener("blur", this.onWindowBlur));
      }
      onTouchEnd(e) {
        for (const t of Array.from(e.changedTouches || []))
          this.triggerPointerEnd(e, new Ee(t));
      }
      triggerPointerStart(e, t) {
        return (
          !!this.startCallback(t, e, this.currentPointers.slice()) &&
          (this.currentPointers.push(e), this.startPointers.push(e), !0)
        );
      }
      triggerPointerEnd(e, t) {
        const i = this.currentPointers.findIndex((e) => e.id === t.id);
        i < 0 ||
          (this.currentPointers.splice(i, 1),
          this.startPointers.splice(i, 1),
          this.endCallback(e, t, this.currentPointers.slice()));
      }
      onWindowBlur() {
        this.clear();
      }
      clear() {
        for (; this.currentPointers.length; ) {
          const e = this.currentPointers[this.currentPointers.length - 1];
          this.currentPointers.splice(this.currentPointers.length - 1, 1),
            this.startPointers.splice(this.currentPointers.length - 1, 1),
            this.endCallback(
              new Event("touchend", {
                bubbles: !0,
                cancelable: !0,
                clientX: e.clientX,
                clientY: e.clientY,
              }),
              e,
              this.currentPointers.slice()
            );
        }
      }
      stop() {
        this.element.removeEventListener("mousedown", this.onPointerStart, Ce),
          this.element.removeEventListener("touchstart", this.onTouchStart, Ce),
          this.element.removeEventListener("touchmove", this.onMove, Ce),
          this.element.removeEventListener("touchend", this.onTouchEnd),
          this.element.removeEventListener("touchcancel", this.onTouchEnd),
          window.removeEventListener("mousemove", this.onMove),
          window.removeEventListener("mouseup", this.onPointerEnd),
          window.removeEventListener("blur", this.onWindowBlur);
      }
    }
    function Pe(e, t) {
      return t
        ? Math.sqrt(
            Math.pow(t.clientX - e.clientX, 2) +
              Math.pow(t.clientY - e.clientY, 2)
          )
        : 0;
    }
    function Me(e, t) {
      return t
        ? {
            clientX: (e.clientX + t.clientX) / 2,
            clientY: (e.clientY + t.clientY) / 2,
          }
        : e;
    }
    const Oe = (e) =>
        "object" == typeof e &&
        null !== e &&
        e.constructor === Object &&
        "[object Object]" === Object.prototype.toString.call(e),
      Le = (e, ...t) => {
        const i = t.length;
        for (let s = 0; s < i; s++) {
          const i = t[s] || {};
          Object.entries(i).forEach(([t, i]) => {
            const s = Array.isArray(i) ? [] : {};
            e[t] || Object.assign(e, { [t]: s }),
              Oe(i)
                ? Object.assign(e[t], Le(s, i))
                : Array.isArray(i)
                ? Object.assign(e, { [t]: [...i] })
                : Object.assign(e, { [t]: i });
          });
        }
        return e;
      },
      Ae = function (e, t) {
        return e
          .split(".")
          .reduce((e, t) => ("object" == typeof e ? e[t] : void 0), t);
      };
    class ke {
      constructor(e = {}) {
        Object.defineProperty(this, "options", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: e,
        }),
          Object.defineProperty(this, "events", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Map(),
          }),
          this.setOptions(e);
        for (const e of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
          e.startsWith("on") &&
            "function" == typeof this[e] &&
            (this[e] = this[e].bind(this));
      }
      setOptions(e) {
        this.options = e ? Le({}, this.constructor.defaults, e) : {};
        for (const [e, t] of Object.entries(this.option("on") || {}))
          this.on(e, t);
      }
      option(e, ...t) {
        let i = Ae(e, this.options);
        return i && "function" == typeof i && (i = i.call(this, this, ...t)), i;
      }
      optionFor(e, t, i, ...s) {
        let n = Ae(t, e);
        var o;
        "string" != typeof (o = n) ||
          isNaN(o) ||
          isNaN(parseFloat(o)) ||
          (n = parseFloat(n)),
          "true" === n && (n = !0),
          "false" === n && (n = !1),
          n && "function" == typeof n && (n = n.call(this, this, e, ...s));
        let a = Ae(t, this.options);
        return (
          a && "function" == typeof a
            ? (n = a.call(this, this, e, ...s, n))
            : void 0 === n && (n = a),
          void 0 === n ? i : n
        );
      }
      cn(e) {
        const t = this.options.classes;
        return (t && t[e]) || "";
      }
      localize(e, t = []) {
        e = String(e).replace(/\{\{(\w+).?(\w+)?\}\}/g, (e, t, i) => {
          let s = "";
          return (
            i
              ? (s = this.option(
                  `${t[0] + t.toLowerCase().substring(1)}.l10n.${i}`
                ))
              : t && (s = this.option(`l10n.${t}`)),
            s || (s = e),
            s
          );
        });
        for (let i = 0; i < t.length; i++) e = e.split(t[i][0]).join(t[i][1]);
        return e.replace(/\{\{(.*?)\}\}/g, (e, t) => t);
      }
      on(e, t) {
        let i = [];
        "string" == typeof e ? (i = e.split(" ")) : Array.isArray(e) && (i = e),
          this.events || (this.events = new Map()),
          i.forEach((e) => {
            let i = this.events.get(e);
            i || (this.events.set(e, []), (i = [])),
              i.includes(t) || i.push(t),
              this.events.set(e, i);
          });
      }
      off(e, t) {
        let i = [];
        "string" == typeof e ? (i = e.split(" ")) : Array.isArray(e) && (i = e),
          i.forEach((e) => {
            const i = this.events.get(e);
            if (Array.isArray(i)) {
              const e = i.indexOf(t);
              e > -1 && i.splice(e, 1);
            }
          });
      }
      emit(e, ...t) {
        [...(this.events.get(e) || [])].forEach((e) => e(this, ...t)),
          "*" !== e && this.emit("*", e, ...t);
      }
    }
    Object.defineProperty(ke, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "5.0.33",
    }),
      Object.defineProperty(ke, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {},
      });
    class Ie extends ke {
      constructor(e = {}) {
        super(e),
          Object.defineProperty(this, "plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {},
          });
      }
      attachPlugins(e = {}) {
        const t = new Map();
        for (const [i, s] of Object.entries(e)) {
          const e = this.option(i),
            n = this.plugins[i];
          n || !1 === e
            ? n && !1 === e && (n.detach(), delete this.plugins[i])
            : t.set(i, new s(this, e || {}));
        }
        for (const [e, i] of t) (this.plugins[e] = i), i.attach();
      }
      detachPlugins(e) {
        e = e || Object.keys(this.plugins);
        for (const t of e) {
          const e = this.plugins[t];
          e && e.detach(), delete this.plugins[t];
        }
        return this.emit("detachPlugins"), this;
      }
    }
    var _e;
    !(function (e) {
      (e[(e.Init = 0)] = "Init"),
        (e[(e.Error = 1)] = "Error"),
        (e[(e.Ready = 2)] = "Ready"),
        (e[(e.Panning = 3)] = "Panning"),
        (e[(e.Mousemove = 4)] = "Mousemove"),
        (e[(e.Destroy = 5)] = "Destroy");
    })(_e || (_e = {}));
    const ze = ["a", "b", "c", "d", "e", "f"],
      $e = {
        PANUP: "Move up",
        PANDOWN: "Move down",
        PANLEFT: "Move left",
        PANRIGHT: "Move right",
        ZOOMIN: "Zoom in",
        ZOOMOUT: "Zoom out",
        TOGGLEZOOM: "Toggle zoom level",
        TOGGLE1TO1: "Toggle zoom level",
        ITERATEZOOM: "Toggle zoom level",
        ROTATECCW: "Rotate counterclockwise",
        ROTATECW: "Rotate clockwise",
        FLIPX: "Flip horizontally",
        FLIPY: "Flip vertically",
        FITX: "Fit horizontally",
        FITY: "Fit vertically",
        RESET: "Reset",
        TOGGLEFS: "Toggle fullscreen",
      },
      De = {
        content: null,
        width: "auto",
        height: "auto",
        panMode: "drag",
        touch: !0,
        dragMinThreshold: 3,
        lockAxis: !1,
        mouseMoveFactor: 1,
        mouseMoveFriction: 0.12,
        zoom: !0,
        pinchToZoom: !0,
        panOnlyZoomed: "auto",
        minScale: 1,
        maxScale: 2,
        friction: 0.25,
        dragFriction: 0.35,
        decelFriction: 0.05,
        click: "toggleZoom",
        dblClick: !1,
        wheel: "zoom",
        wheelLimit: 7,
        spinner: !0,
        bounds: "auto",
        infinite: !1,
        rubberband: !0,
        bounce: !0,
        maxVelocity: 75,
        transformParent: !1,
        classes: {
          content: "f-panzoom__content",
          isLoading: "is-loading",
          canZoomIn: "can-zoom_in",
          canZoomOut: "can-zoom_out",
          isDraggable: "is-draggable",
          isDragging: "is-dragging",
          inFullscreen: "in-fullscreen",
          htmlHasFullscreen: "with-panzoom-in-fullscreen",
        },
        l10n: $e,
      },
      Re = '<circle cx="25" cy="25" r="20"></circle>',
      Fe =
        '<div class="f-spinner"><svg viewBox="0 0 50 50">' +
        Re +
        Re +
        "</svg></div>",
      je = (e) => e && null !== e && e instanceof Element && "nodeType" in e,
      Be = (e, t) => {
        e &&
          Se(t).forEach((t) => {
            e.classList.remove(t);
          });
      },
      Ne = (e, t) => {
        e &&
          Se(t).forEach((t) => {
            e.classList.add(t);
          });
      },
      He = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
      qe = 1e4,
      We = "mousemove",
      Ge = "drag",
      Ve = "content";
    let Xe = null,
      Ye = null;
    class Ze extends Ie {
      get fits() {
        return (
          this.contentRect.width - this.contentRect.fitWidth < 1 &&
          this.contentRect.height - this.contentRect.fitHeight < 1
        );
      }
      get isTouchDevice() {
        return (
          null === Ye && (Ye = window.matchMedia("(hover: none)").matches), Ye
        );
      }
      get isMobile() {
        return (
          null === Xe &&
            (Xe = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),
          Xe
        );
      }
      get panMode() {
        return this.options.panMode !== We || this.isTouchDevice ? Ge : We;
      }
      get panOnlyZoomed() {
        const e = this.options.panOnlyZoomed;
        return "auto" === e ? this.isTouchDevice : e;
      }
      get isInfinite() {
        return this.option("infinite");
      }
      get angle() {
        return (
          (180 * Math.atan2(this.current.b, this.current.a)) / Math.PI || 0
        );
      }
      get targetAngle() {
        return (180 * Math.atan2(this.target.b, this.target.a)) / Math.PI || 0;
      }
      get scale() {
        const { a: e, b: t } = this.current;
        return Math.sqrt(e * e + t * t) || 1;
      }
      get targetScale() {
        const { a: e, b: t } = this.target;
        return Math.sqrt(e * e + t * t) || 1;
      }
      get minScale() {
        return this.option("minScale") || 1;
      }
      get fullScale() {
        const { contentRect: e } = this;
        return e.fullWidth / e.fitWidth || 1;
      }
      get maxScale() {
        return this.fullScale * (this.option("maxScale") || 1) || 1;
      }
      get coverScale() {
        const { containerRect: e, contentRect: t } = this,
          i = Math.max(e.height / t.fitHeight, e.width / t.fitWidth) || 1;
        return Math.min(this.fullScale, i);
      }
      get isScaling() {
        return (
          Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting
        );
      }
      get isContentLoading() {
        const e = this.content;
        return !!(e && e instanceof HTMLImageElement) && !e.complete;
      }
      get isResting() {
        if (this.isBouncingX || this.isBouncingY) return !1;
        for (const e of ze) {
          const t = "e" == e || "f" === e ? 1e-4 : 1e-5;
          if (Math.abs(this.target[e] - this.current[e]) > t) return !1;
        }
        return !(!this.ignoreBounds && !this.checkBounds().inBounds);
      }
      constructor(e, t = {}, i = {}) {
        var s;
        if (
          (super(t),
          Object.defineProperty(this, "pointerTracker", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "resizeObserver", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "updateTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "clickTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "rAF", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "isTicking", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "ignoreBounds", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "isBouncingX", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "isBouncingY", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "clicks", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "trackingPoints", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "pwt", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "cwd", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "pmme", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "friction", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: _e.Init,
          }),
          Object.defineProperty(this, "isDragging", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "content", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "spinner", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "containerRect", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: { width: 0, height: 0, innerWidth: 0, innerHeight: 0 },
          }),
          Object.defineProperty(this, "contentRect", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              fullWidth: 0,
              fullHeight: 0,
              fitWidth: 0,
              fitHeight: 0,
              width: 0,
              height: 0,
            },
          }),
          Object.defineProperty(this, "dragStart", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: { x: 0, y: 0, top: 0, left: 0, time: 0 },
          }),
          Object.defineProperty(this, "dragOffset", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: { x: 0, y: 0, time: 0 },
          }),
          Object.defineProperty(this, "current", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Object.assign({}, He),
          }),
          Object.defineProperty(this, "target", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Object.assign({}, He),
          }),
          Object.defineProperty(this, "velocity", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 },
          }),
          Object.defineProperty(this, "lockedAxis", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          !e)
        )
          throw new Error("Container Element Not Found");
        (this.container = e),
          this.initContent(),
          this.attachPlugins(Object.assign(Object.assign({}, Ze.Plugins), i)),
          this.emit("attachPlugins"),
          this.emit("init");
        const n = this.content;
        if (
          (n.addEventListener("load", this.onLoad),
          n.addEventListener("error", this.onError),
          this.isContentLoading)
        ) {
          if (this.option("spinner")) {
            e.classList.add(this.cn("isLoading"));
            const t = we(Fe);
            !e.contains(n) || n.parentElement instanceof HTMLPictureElement
              ? (this.spinner = e.appendChild(t))
              : (this.spinner =
                  (null === (s = n.parentElement) || void 0 === s
                    ? void 0
                    : s.insertBefore(t, n)) || null);
          }
          this.emit("beforeLoad");
        } else
          queueMicrotask(() => {
            this.enable();
          });
      }
      initContent() {
        const { container: e } = this,
          t = this.cn(Ve);
        let i = this.option(Ve) || e.querySelector(`.${t}`);
        if (
          (i ||
            ((i = e.querySelector("img,picture") || e.firstElementChild),
            i && Ne(i, t)),
          i instanceof HTMLPictureElement && (i = i.querySelector("img")),
          !i)
        )
          throw new Error("No content found");
        this.content = i;
      }
      onLoad() {
        const { spinner: e, container: t, state: i } = this;
        e && (e.remove(), (this.spinner = null)),
          this.option("spinner") && t.classList.remove(this.cn("isLoading")),
          this.emit("afterLoad"),
          i === _e.Init ? this.enable() : this.updateMetrics();
      }
      onError() {
        this.state !== _e.Destroy &&
          (this.spinner && (this.spinner.remove(), (this.spinner = null)),
          this.stop(),
          this.detachEvents(),
          (this.state = _e.Error),
          this.emit("error"));
      }
      getNextScale(e) {
        const {
          fullScale: t,
          targetScale: i,
          coverScale: s,
          maxScale: n,
          minScale: o,
        } = this;
        let a = o;
        switch (e) {
          case "toggleMax":
            a = i - o < 0.5 * (n - o) ? n : o;
            break;
          case "toggleCover":
            a = i - o < 0.5 * (s - o) ? s : o;
            break;
          case "toggleZoom":
            a = i - o < 0.5 * (t - o) ? t : o;
            break;
          case "iterateZoom":
            let e = [1, t, n].sort((e, t) => e - t),
              r = e.findIndex((e) => e > i + 1e-5);
            a = e[r] || 1;
        }
        return a;
      }
      attachObserver() {
        var e;
        const t = () => {
          const { container: e, containerRect: t } = this;
          return (
            Math.abs(t.width - e.getBoundingClientRect().width) > 0.1 ||
            Math.abs(t.height - e.getBoundingClientRect().height) > 0.1
          );
        };
        this.resizeObserver ||
          void 0 === window.ResizeObserver ||
          (this.resizeObserver = new ResizeObserver(() => {
            this.updateTimer ||
              (t()
                ? (this.onResize(),
                  this.isMobile &&
                    (this.updateTimer = setTimeout(() => {
                      t() && this.onResize(), (this.updateTimer = null);
                    }, 500)))
                : this.updateTimer &&
                  (clearTimeout(this.updateTimer), (this.updateTimer = null)));
          })),
          null === (e = this.resizeObserver) ||
            void 0 === e ||
            e.observe(this.container);
      }
      detachObserver() {
        var e;
        null === (e = this.resizeObserver) || void 0 === e || e.disconnect();
      }
      attachEvents() {
        const { container: e } = this;
        e.addEventListener("click", this.onClick, { passive: !1, capture: !1 }),
          e.addEventListener("wheel", this.onWheel, { passive: !1 }),
          (this.pointerTracker = new Te(e, {
            start: this.onPointerDown,
            move: this.onPointerMove,
            end: this.onPointerUp,
          })),
          document.addEventListener(We, this.onMouseMove);
      }
      detachEvents() {
        var e;
        const { container: t } = this;
        t.removeEventListener("click", this.onClick, {
          passive: !1,
          capture: !1,
        }),
          t.removeEventListener("wheel", this.onWheel, { passive: !1 }),
          null === (e = this.pointerTracker) || void 0 === e || e.stop(),
          (this.pointerTracker = null),
          document.removeEventListener(We, this.onMouseMove),
          document.removeEventListener("keydown", this.onKeydown, !0),
          this.clickTimer &&
            (clearTimeout(this.clickTimer), (this.clickTimer = null)),
          this.updateTimer &&
            (clearTimeout(this.updateTimer), (this.updateTimer = null));
      }
      animate() {
        this.setTargetForce();
        const e = this.friction,
          t = this.option("maxVelocity");
        for (const i of ze)
          e
            ? ((this.velocity[i] *= 1 - e),
              t &&
                !this.isScaling &&
                (this.velocity[i] = Math.max(
                  Math.min(this.velocity[i], t),
                  -1 * t
                )),
              (this.current[i] += this.velocity[i]))
            : (this.current[i] = this.target[i]);
        this.setTransform(),
          this.setEdgeForce(),
          !this.isResting || this.isDragging
            ? (this.rAF = requestAnimationFrame(() => this.animate()))
            : this.stop("current");
      }
      setTargetForce() {
        for (const e of ze)
          ("e" === e && this.isBouncingX) ||
            ("f" === e && this.isBouncingY) ||
            (this.velocity[e] =
              (1 / (1 - this.friction) - 1) *
              (this.target[e] - this.current[e]));
      }
      checkBounds(e = 0, t = 0) {
        const { current: i } = this,
          s = i.e + e,
          n = i.f + t,
          o = this.getBounds(),
          { x: a, y: r } = o,
          l = a.min,
          c = a.max,
          d = r.min,
          h = r.max;
        let u = 0,
          p = 0;
        return (
          l !== 1 / 0 && s < l
            ? (u = l - s)
            : c !== 1 / 0 && s > c && (u = c - s),
          d !== 1 / 0 && n < d
            ? (p = d - n)
            : h !== 1 / 0 && n > h && (p = h - n),
          Math.abs(u) < 1e-4 && (u = 0),
          Math.abs(p) < 1e-4 && (p = 0),
          Object.assign(Object.assign({}, o), {
            xDiff: u,
            yDiff: p,
            inBounds: !u && !p,
          })
        );
      }
      clampTargetBounds() {
        const { target: e } = this,
          { x: t, y: i } = this.getBounds();
        t.min !== 1 / 0 && (e.e = Math.max(e.e, t.min)),
          t.max !== 1 / 0 && (e.e = Math.min(e.e, t.max)),
          i.min !== 1 / 0 && (e.f = Math.max(e.f, i.min)),
          i.max !== 1 / 0 && (e.f = Math.min(e.f, i.max));
      }
      calculateContentDim(e = this.current) {
        const { content: t, contentRect: i } = this,
          { fitWidth: s, fitHeight: n, fullWidth: o, fullHeight: a } = i;
        let r = o,
          l = a;
        if (this.option("zoom") || 0 !== this.angle) {
          const i = !(
              t instanceof HTMLImageElement ||
              ("none" !== window.getComputedStyle(t).maxWidth &&
                "none" !== window.getComputedStyle(t).maxHeight)
            ),
            c = i ? o : s,
            d = i ? a : n,
            h = this.getMatrix(e),
            u = new DOMPoint(0, 0).matrixTransform(h),
            p = new DOMPoint(0 + c, 0).matrixTransform(h),
            f = new DOMPoint(0 + c, 0 + d).matrixTransform(h),
            g = new DOMPoint(0, 0 + d).matrixTransform(h),
            m = Math.abs(f.x - u.x),
            v = Math.abs(f.y - u.y),
            b = Math.abs(g.x - p.x),
            y = Math.abs(g.y - p.y);
          (r = Math.max(m, b)), (l = Math.max(v, y));
        }
        return { contentWidth: r, contentHeight: l };
      }
      setEdgeForce() {
        if (
          this.ignoreBounds ||
          this.isDragging ||
          this.panMode === We ||
          this.targetScale < this.scale
        )
          return (this.isBouncingX = !1), void (this.isBouncingY = !1);
        const { target: e } = this,
          { x: t, y: i, xDiff: s, yDiff: n } = this.checkBounds(),
          o = this.option("maxVelocity");
        let a = this.velocity.e,
          r = this.velocity.f;
        0 !== s
          ? ((this.isBouncingX = !0),
            s * a <= 0
              ? (a += 0.14 * s)
              : ((a = 0.14 * s),
                t.min !== 1 / 0 && (this.target.e = Math.max(e.e, t.min)),
                t.max !== 1 / 0 && (this.target.e = Math.min(e.e, t.max))),
            o && (a = Math.max(Math.min(a, o), -1 * o)))
          : (this.isBouncingX = !1),
          0 !== n
            ? ((this.isBouncingY = !0),
              n * r <= 0
                ? (r += 0.14 * n)
                : ((r = 0.14 * n),
                  i.min !== 1 / 0 && (this.target.f = Math.max(e.f, i.min)),
                  i.max !== 1 / 0 && (this.target.f = Math.min(e.f, i.max))),
              o && (r = Math.max(Math.min(r, o), -1 * o)))
            : (this.isBouncingY = !1),
          this.isBouncingX && (this.velocity.e = a),
          this.isBouncingY && (this.velocity.f = r);
      }
      enable() {
        const { content: e } = this,
          t = new DOMMatrixReadOnly(window.getComputedStyle(e).transform);
        for (const e of ze) this.current[e] = this.target[e] = t[e];
        this.updateMetrics(),
          this.attachObserver(),
          this.attachEvents(),
          (this.state = _e.Ready),
          this.emit("ready");
      }
      onClick(e) {
        var t;
        "click" === e.type &&
          0 === e.detail &&
          ((this.dragOffset.x = 0), (this.dragOffset.y = 0)),
          this.isDragging &&
            (null === (t = this.pointerTracker) || void 0 === t || t.clear(),
            (this.trackingPoints = []),
            this.startDecelAnim());
        const i = e.target;
        if (!i || e.defaultPrevented) return;
        if (i.hasAttribute("disabled"))
          return e.preventDefault(), void e.stopPropagation();
        if (
          (() => {
            const e = window.getSelection();
            return e && "Range" === e.type;
          })() &&
          !i.closest("button")
        )
          return;
        const s = i.closest("[data-panzoom-action]"),
          n = i.closest("[data-panzoom-change]"),
          o = s || n,
          a = o && je(o) ? o.dataset : null;
        if (a) {
          const t = a.panzoomChange,
            i = a.panzoomAction;
          if (((t || i) && e.preventDefault(), t)) {
            let i = {};
            try {
              i = JSON.parse(t);
            } catch (e) {
              console && console.warn("The given data was not valid JSON");
            }
            return void this.applyChange(i);
          }
          if (i) return void (this[i] && this[i]());
        }
        if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3)
          return e.preventDefault(), void e.stopPropagation();
        if (i.closest("[data-fancybox]")) return;
        const r = this.content.getBoundingClientRect(),
          l = this.dragStart;
        if (
          l.time &&
          !this.canZoomOut() &&
          (Math.abs(r.x - l.x) > 2 || Math.abs(r.y - l.y) > 2)
        )
          return;
        this.dragStart.time = 0;
        const c = (t) => {
            this.option("zoom", e) &&
              t &&
              "string" == typeof t &&
              /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(
                t
              ) &&
              "function" == typeof this[t] &&
              (e.preventDefault(), this[t]({ event: e }));
          },
          d = this.option("click", e),
          h = this.option("dblClick", e);
        h
          ? (this.clicks++,
            1 == this.clicks &&
              (this.clickTimer = setTimeout(() => {
                1 === this.clicks
                  ? (this.emit("click", e), !e.defaultPrevented && d && c(d))
                  : (this.emit("dblClick", e), e.defaultPrevented || c(h)),
                  (this.clicks = 0),
                  (this.clickTimer = null);
              }, 350)))
          : (this.emit("click", e), !e.defaultPrevented && d && c(d));
      }
      addTrackingPoint(e) {
        const t = this.trackingPoints.filter((e) => e.time > Date.now() - 100);
        t.push(e), (this.trackingPoints = t);
      }
      onPointerDown(e, t, i) {
        var s;
        if (!1 === this.option("touch", e)) return !1;
        (this.pwt = 0),
          (this.dragOffset = { x: 0, y: 0, time: 0 }),
          (this.trackingPoints = []);
        const n = this.content.getBoundingClientRect();
        if (
          ((this.dragStart = {
            x: n.x,
            y: n.y,
            top: n.top,
            left: n.left,
            time: Date.now(),
          }),
          this.clickTimer)
        )
          return !1;
        if (this.panMode === We && this.targetScale > 1)
          return e.preventDefault(), e.stopPropagation(), !1;
        const o = e.composedPath()[0];
        if (!i.length) {
          if (
            [
              "TEXTAREA",
              "OPTION",
              "INPUT",
              "SELECT",
              "VIDEO",
              "IFRAME",
            ].includes(o.nodeName) ||
            o.closest(
              "[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]"
            )
          )
            return !1;
          null === (s = window.getSelection()) ||
            void 0 === s ||
            s.removeAllRanges();
        }
        if ("mousedown" === e.type)
          ["A", "BUTTON"].includes(o.nodeName) || e.preventDefault();
        else if (Math.abs(this.velocity.a) > 0.3) return !1;
        return (
          (this.target.e = this.current.e),
          (this.target.f = this.current.f),
          this.stop(),
          this.isDragging ||
            ((this.isDragging = !0),
            this.addTrackingPoint(t),
            this.emit("touchStart", e)),
          !0
        );
      }
      onPointerMove(e, t, i) {
        if (!1 === this.option("touch", e)) return;
        if (!this.isDragging) return;
        if (
          t.length < 2 &&
          this.panOnlyZoomed &&
          ve(this.targetScale) <= ve(this.minScale)
        )
          return;
        if ((this.emit("touchMove", e), e.defaultPrevented)) return;
        this.addTrackingPoint(t[0]);
        const { content: s } = this,
          n = Me(i[0], i[1]),
          o = Me(t[0], t[1]);
        let a = 0,
          r = 0;
        if (t.length > 1) {
          const e = s.getBoundingClientRect();
          (a = n.clientX - e.left - 0.5 * e.width),
            (r = n.clientY - e.top - 0.5 * e.height);
        }
        const l = Pe(i[0], i[1]),
          c = Pe(t[0], t[1]);
        let d = l ? c / l : 1,
          h = o.clientX - n.clientX,
          u = o.clientY - n.clientY;
        (this.dragOffset.x += h),
          (this.dragOffset.y += u),
          (this.dragOffset.time = Date.now() - this.dragStart.time);
        let p =
          ve(this.targetScale) === ve(this.minScale) && this.option("lockAxis");
        if (p && !this.lockedAxis)
          if ("xy" === p || "y" === p || "touchmove" === e.type) {
            if (
              Math.abs(this.dragOffset.x) < 6 &&
              Math.abs(this.dragOffset.y) < 6
            )
              return void e.preventDefault();
            const t = Math.abs(
              (180 * Math.atan2(this.dragOffset.y, this.dragOffset.x)) / Math.PI
            );
            (this.lockedAxis = t > 45 && t < 135 ? "y" : "x"),
              (this.dragOffset.x = 0),
              (this.dragOffset.y = 0),
              (h = 0),
              (u = 0);
          } else this.lockedAxis = p;
        if (
          (ye(e.target, this.content) && ((p = "x"), (this.dragOffset.y = 0)),
          p &&
            "xy" !== p &&
            this.lockedAxis !== p &&
            ve(this.targetScale) === ve(this.minScale))
        )
          return;
        e.cancelable && e.preventDefault(),
          this.container.classList.add(this.cn("isDragging"));
        const f = this.checkBounds(h, u);
        this.option("rubberband")
          ? ("x" !== this.isInfinite &&
              ((f.xDiff > 0 && h < 0) || (f.xDiff < 0 && h > 0)) &&
              (h *= Math.max(
                0,
                0.5 - Math.abs((0.75 / this.contentRect.fitWidth) * f.xDiff)
              )),
            "y" !== this.isInfinite &&
              ((f.yDiff > 0 && u < 0) || (f.yDiff < 0 && u > 0)) &&
              (u *= Math.max(
                0,
                0.5 - Math.abs((0.75 / this.contentRect.fitHeight) * f.yDiff)
              )))
          : (f.xDiff && (h = 0), f.yDiff && (u = 0));
        const g = this.targetScale,
          m = this.minScale,
          v = this.maxScale;
        g < 0.5 * m && (d = Math.max(d, m)),
          g > 1.5 * v && (d = Math.min(d, v)),
          "y" === this.lockedAxis && ve(g) === ve(m) && (h = 0),
          "x" === this.lockedAxis && ve(g) === ve(m) && (u = 0),
          this.applyChange({
            originX: a,
            originY: r,
            panX: h,
            panY: u,
            scale: d,
            friction: this.option("dragFriction"),
            ignoreBounds: !0,
          });
      }
      onPointerUp(e, t, i) {
        if (i.length)
          return (
            (this.dragOffset.x = 0),
            (this.dragOffset.y = 0),
            void (this.trackingPoints = [])
          );
        this.container.classList.remove(this.cn("isDragging")),
          this.isDragging &&
            (this.addTrackingPoint(t),
            this.panOnlyZoomed &&
              this.contentRect.width - this.contentRect.fitWidth < 1 &&
              this.contentRect.height - this.contentRect.fitHeight < 1 &&
              (this.trackingPoints = []),
            ye(e.target, this.content) &&
              "y" === this.lockedAxis &&
              (this.trackingPoints = []),
            this.emit("touchEnd", e),
            (this.isDragging = !1),
            (this.lockedAxis = !1),
            this.state !== _e.Destroy &&
              (e.defaultPrevented || this.startDecelAnim()));
      }
      startDecelAnim() {
        var e;
        const t = this.isScaling;
        this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
          (this.isBouncingX = !1),
          (this.isBouncingY = !1);
        for (const e of ze) this.velocity[e] = 0;
        (this.target.e = this.current.e),
          (this.target.f = this.current.f),
          Be(this.container, "is-scaling"),
          Be(this.container, "is-animating"),
          (this.isTicking = !1);
        const { trackingPoints: i } = this,
          s = i[0],
          n = i[i.length - 1];
        let o = 0,
          a = 0,
          r = 0;
        n &&
          s &&
          ((o = n.clientX - s.clientX),
          (a = n.clientY - s.clientY),
          (r = n.time - s.time));
        const l =
          (null === (e = window.visualViewport) || void 0 === e
            ? void 0
            : e.scale) || 1;
        1 !== l && ((o *= l), (a *= l));
        let c = 0,
          d = 0,
          h = 0,
          u = 0,
          p = this.option("decelFriction");
        const f = this.targetScale;
        if (r > 0) {
          (h = Math.abs(o) > 3 ? o / (r / 30) : 0),
            (u = Math.abs(a) > 3 ? a / (r / 30) : 0);
          const e = this.option("maxVelocity");
          e &&
            ((h = Math.max(Math.min(h, e), -1 * e)),
            (u = Math.max(Math.min(u, e), -1 * e)));
        }
        h && (c = h / (1 / (1 - p) - 1)),
          u && (d = u / (1 / (1 - p) - 1)),
          ("y" === this.option("lockAxis") ||
            ("xy" === this.option("lockAxis") &&
              "y" === this.lockedAxis &&
              ve(f) === this.minScale)) &&
            (c = h = 0),
          ("x" === this.option("lockAxis") ||
            ("xy" === this.option("lockAxis") &&
              "x" === this.lockedAxis &&
              ve(f) === this.minScale)) &&
            (d = u = 0);
        const g = this.dragOffset.x,
          m = this.dragOffset.y,
          v = this.option("dragMinThreshold") || 0;
        Math.abs(g) < v && Math.abs(m) < v && ((c = d = 0), (h = u = 0)),
          ((this.option("zoom") &&
            (f < this.minScale - 1e-5 || f > this.maxScale + 1e-5)) ||
            (t && !c && !d)) &&
            (p = 0.35),
          this.applyChange({ panX: c, panY: d, friction: p }),
          this.emit("decel", h, u, g, m);
      }
      onWheel(e) {
        var t = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(
          function (e, t) {
            return Math.abs(t) > Math.abs(e) ? t : e;
          }
        );
        const i = Math.max(-1, Math.min(1, t));
        if ((this.emit("wheel", e, i), this.panMode === We)) return;
        if (e.defaultPrevented) return;
        const s = this.option("wheel");
        "pan" === s
          ? (e.preventDefault(),
            (this.panOnlyZoomed && !this.canZoomOut()) ||
              this.applyChange({
                panX: 2 * -e.deltaX,
                panY: 2 * -e.deltaY,
                bounce: !1,
              }))
          : "zoom" === s && !1 !== this.option("zoom") && this.zoomWithWheel(e);
      }
      onMouseMove(e) {
        this.panWithMouse(e);
      }
      onKeydown(e) {
        "Escape" === e.key && this.toggleFS();
      }
      onResize() {
        this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
      }
      setTransform() {
        this.emit("beforeTransform");
        const { current: e, target: t, content: i, contentRect: s } = this,
          n = Object.assign({}, He);
        for (const i of ze) {
          const s = "e" == i || "f" === i ? qe : 1e5;
          (n[i] = ve(e[i], s)),
            Math.abs(t[i] - e[i]) < ("e" == i || "f" === i ? 0.51 : 0.001) &&
              (e[i] = t[i]);
        }
        let { a: o, b: a, c: r, d: l, e: c, f: d } = n,
          h = `matrix(${o}, ${a}, ${r}, ${l}, ${c}, ${d})`,
          u =
            i.parentElement instanceof HTMLPictureElement ? i.parentElement : i;
        if (
          (this.option("transformParent") && (u = u.parentElement || u),
          u.style.transform === h)
        )
          return;
        u.style.transform = h;
        const { contentWidth: p, contentHeight: f } =
          this.calculateContentDim();
        (s.width = p), (s.height = f), this.emit("afterTransform");
      }
      updateMetrics(e = !1) {
        var t;
        if (!this || this.state === _e.Destroy) return;
        if (this.isContentLoading) return;
        const i = Math.max(
            1,
            (null === (t = window.visualViewport) || void 0 === t
              ? void 0
              : t.scale) || 1
          ),
          { container: s, content: n } = this,
          o = n instanceof HTMLImageElement,
          a = s.getBoundingClientRect(),
          r = getComputedStyle(this.container);
        let l = a.width * i,
          c = a.height * i;
        const d = parseFloat(r.paddingTop) + parseFloat(r.paddingBottom),
          h = l - (parseFloat(r.paddingLeft) + parseFloat(r.paddingRight)),
          u = c - d;
        this.containerRect = {
          width: l,
          height: c,
          innerWidth: h,
          innerHeight: u,
        };
        let p = this.option("width") || "auto",
          f = this.option("height") || "auto";
        "auto" === p &&
          (p =
            parseFloat(n.dataset.width || "") ||
            ((e) => {
              let t = 0;
              return (
                (t =
                  e instanceof HTMLImageElement
                    ? e.naturalWidth
                    : e instanceof SVGElement
                    ? e.width.baseVal.value
                    : Math.max(e.offsetWidth, e.scrollWidth)),
                t || 0
              );
            })(n)),
          "auto" === f &&
            (f =
              parseFloat(n.dataset.height || "") ||
              ((e) => {
                let t = 0;
                return (
                  (t =
                    e instanceof HTMLImageElement
                      ? e.naturalHeight
                      : e instanceof SVGElement
                      ? e.height.baseVal.value
                      : Math.max(e.offsetHeight, e.scrollHeight)),
                  t || 0
                );
              })(n));
        let g =
          n.parentElement instanceof HTMLPictureElement ? n.parentElement : n;
        this.option("transformParent") && (g = g.parentElement || g);
        const m = g.getAttribute("style") || "";
        g.style.setProperty("transform", "none", "important"),
          o && ((g.style.width = ""), (g.style.height = "")),
          g.offsetHeight;
        const v = n.getBoundingClientRect();
        let b = v.width * i,
          y = v.height * i,
          w = 0,
          S = 0;
        o &&
          (Math.abs(p - b) > 1 || Math.abs(f - y) > 1) &&
          ({
            width: b,
            height: y,
            top: w,
            left: S,
          } = ((e, t, i, s) => {
            const n = i / s;
            return (
              n > e / t ? ((i = e), (s = e / n)) : ((i = t * n), (s = t)),
              { width: i, height: s, top: 0.5 * (t - s), left: 0.5 * (e - i) }
            );
          })(b, y, p, f)),
          (this.contentRect = Object.assign(
            Object.assign({}, this.contentRect),
            {
              top: v.top - a.top + w,
              bottom: a.bottom - v.bottom + w,
              left: v.left - a.left + S,
              right: a.right - v.right + S,
              fitWidth: b,
              fitHeight: y,
              width: b,
              height: y,
              fullWidth: p,
              fullHeight: f,
            }
          )),
          (g.style.cssText = m),
          o && ((g.style.width = `${b}px`), (g.style.height = `${y}px`)),
          this.setTransform(),
          !0 !== e && this.emit("refresh"),
          this.ignoreBounds ||
            (ve(this.targetScale) < ve(this.minScale)
              ? this.zoomTo(this.minScale, { friction: 0 })
              : this.targetScale > this.maxScale
              ? this.zoomTo(this.maxScale, { friction: 0 })
              : this.state === _e.Init ||
                this.checkBounds().inBounds ||
                this.requestTick()),
          this.updateControls();
      }
      calculateBounds() {
        const { contentWidth: e, contentHeight: t } = this.calculateContentDim(
            this.target
          ),
          { targetScale: i, lockedAxis: s } = this,
          { fitWidth: n, fitHeight: o } = this.contentRect;
        let a = 0,
          r = 0,
          l = 0,
          c = 0;
        const d = this.option("infinite");
        if (!0 === d || (s && d === s))
          (a = -1 / 0), (l = 1 / 0), (r = -1 / 0), (c = 1 / 0);
        else {
          let { containerRect: s, contentRect: d } = this,
            h = ve(n * i, qe),
            u = ve(o * i, qe),
            { innerWidth: p, innerHeight: f } = s;
          if (
            (s.width === h && (p = s.width),
            s.width === u && (f = s.height),
            e > p)
          ) {
            (l = 0.5 * (e - p)), (a = -1 * l);
            let t = 0.5 * (d.right - d.left);
            (a += t), (l += t);
          }
          if (
            (n > p && e < p && ((a -= 0.5 * (n - p)), (l -= 0.5 * (n - p))),
            t > f)
          ) {
            (c = 0.5 * (t - f)), (r = -1 * c);
            let e = 0.5 * (d.bottom - d.top);
            (r += e), (c += e);
          }
          o > f && t < f && ((a -= 0.5 * (o - f)), (l -= 0.5 * (o - f)));
        }
        return { x: { min: a, max: l }, y: { min: r, max: c } };
      }
      getBounds() {
        const e = this.option("bounds");
        return "auto" !== e ? e : this.calculateBounds();
      }
      updateControls() {
        const e = this,
          t = e.container,
          { panMode: i, contentRect: s, targetScale: n, minScale: o } = e;
        let a = o,
          r = e.option("click") || !1;
        r && (a = e.getNextScale(r));
        let l = e.canZoomIn(),
          c = e.canZoomOut(),
          d = i === Ge && !!this.option("touch"),
          h = c && d;
        if (
          (d &&
            (ve(n) < ve(o) && !this.panOnlyZoomed && (h = !0),
            (ve(s.width, 1) > ve(s.fitWidth, 1) ||
              ve(s.height, 1) > ve(s.fitHeight, 1)) &&
              (h = !0)),
          ve(s.width * n, 1) < ve(s.fitWidth, 1) && (h = !1),
          i === We && (h = !1),
          xe(t, this.cn("isDraggable"), h),
          !this.option("zoom"))
        )
          return;
        let u = l && ve(a) > ve(n),
          p = !u && !h && c && ve(a) < ve(n);
        xe(t, this.cn("canZoomIn"), u), xe(t, this.cn("canZoomOut"), p);
        for (const e of t.querySelectorAll("[data-panzoom-action]")) {
          let t = !1,
            i = !1;
          switch (e.dataset.panzoomAction) {
            case "zoomIn":
              l ? (t = !0) : (i = !0);
              break;
            case "zoomOut":
              c ? (t = !0) : (i = !0);
              break;
            case "toggleZoom":
            case "iterateZoom":
              l || c ? (t = !0) : (i = !0);
              const s = e.querySelector("g");
              s && (s.style.display = l ? "" : "none");
          }
          t
            ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"))
            : i &&
              (e.setAttribute("disabled", ""),
              e.setAttribute("tabindex", "-1"));
        }
      }
      panTo({
        x: e = this.target.e,
        y: t = this.target.f,
        scale: i = this.targetScale,
        friction: s = this.option("friction"),
        angle: n = 0,
        originX: o = 0,
        originY: a = 0,
        flipX: r = !1,
        flipY: l = !1,
        ignoreBounds: c = !1,
      }) {
        this.state !== _e.Destroy &&
          this.applyChange({
            panX: e - this.target.e,
            panY: t - this.target.f,
            scale: i / this.targetScale,
            angle: n,
            originX: o,
            originY: a,
            friction: s,
            flipX: r,
            flipY: l,
            ignoreBounds: c,
          });
      }
      applyChange({
        panX: e = 0,
        panY: t = 0,
        scale: i = 1,
        angle: s = 0,
        originX: n = -this.current.e,
        originY: o = -this.current.f,
        friction: a = this.option("friction"),
        flipX: r = !1,
        flipY: l = !1,
        ignoreBounds: c = !1,
        bounce: d = this.option("bounce"),
      }) {
        const h = this.state;
        if (h === _e.Destroy) return;
        this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
          (this.friction = a || 0),
          (this.ignoreBounds = c);
        const { current: u } = this,
          p = u.e,
          f = u.f,
          g = this.getMatrix(this.target);
        let m = new DOMMatrix().translate(p, f).translate(n, o).translate(e, t);
        if (this.option("zoom")) {
          if (!c) {
            const e = this.targetScale,
              t = this.minScale,
              s = this.maxScale;
            e * i < t && (i = t / e), e * i > s && (i = s / e);
          }
          m = m.scale(i);
        }
        (m = m.translate(-n, -o).translate(-p, -f).multiply(g)),
          s && (m = m.rotate(s)),
          r && (m = m.scale(-1, 1)),
          l && (m = m.scale(1, -1));
        for (const e of ze)
          "e" !== e &&
          "f" !== e &&
          (m[e] > this.minScale + 1e-5 || m[e] < this.minScale - 1e-5)
            ? (this.target[e] = m[e])
            : (this.target[e] = ve(m[e], qe));
        (this.targetScale < this.scale ||
          Math.abs(i - 1) > 0.1 ||
          this.panMode === We ||
          !1 === d) &&
          !c &&
          this.clampTargetBounds(),
          h === _e.Init
            ? this.animate()
            : this.isResting || ((this.state = _e.Panning), this.requestTick());
      }
      stop(e = !1) {
        if (this.state === _e.Init || this.state === _e.Destroy) return;
        const t = this.isTicking;
        this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
          (this.isBouncingX = !1),
          (this.isBouncingY = !1);
        for (const t of ze)
          (this.velocity[t] = 0),
            "current" === e
              ? (this.current[t] = this.target[t])
              : "target" === e && (this.target[t] = this.current[t]);
        this.setTransform(),
          Be(this.container, "is-scaling"),
          Be(this.container, "is-animating"),
          (this.isTicking = !1),
          (this.state = _e.Ready),
          t && (this.emit("endAnimation"), this.updateControls());
      }
      requestTick() {
        this.isTicking ||
          (this.emit("startAnimation"),
          this.updateControls(),
          Ne(this.container, "is-animating"),
          this.isScaling && Ne(this.container, "is-scaling")),
          (this.isTicking = !0),
          this.rAF || (this.rAF = requestAnimationFrame(() => this.animate()));
      }
      panWithMouse(e, t = this.option("mouseMoveFriction")) {
        if (((this.pmme = e), this.panMode !== We || !e)) return;
        if (ve(this.targetScale) <= ve(this.minScale)) return;
        this.emit("mouseMove", e);
        const { container: i, containerRect: s, contentRect: n } = this,
          o = s.width,
          a = s.height,
          r = i.getBoundingClientRect(),
          l = (e.clientX || 0) - r.left,
          c = (e.clientY || 0) - r.top;
        let { contentWidth: d, contentHeight: h } = this.calculateContentDim(
          this.target
        );
        const u = this.option("mouseMoveFactor");
        u > 1 && (d !== o && (d *= u), h !== a && (h *= u));
        let p = 0.5 * (d - o) - (((l / o) * 100) / 100) * (d - o);
        p += 0.5 * (n.right - n.left);
        let f = 0.5 * (h - a) - (((c / a) * 100) / 100) * (h - a);
        (f += 0.5 * (n.bottom - n.top)),
          this.applyChange({
            panX: p - this.target.e,
            panY: f - this.target.f,
            friction: t,
          });
      }
      zoomWithWheel(e) {
        if (this.state === _e.Destroy || this.state === _e.Init) return;
        const t = Date.now();
        if (t - this.pwt < 45) return void e.preventDefault();
        this.pwt = t;
        var i = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(
          function (e, t) {
            return Math.abs(t) > Math.abs(e) ? t : e;
          }
        );
        const s = Math.max(-1, Math.min(1, i)),
          { targetScale: n, maxScale: o, minScale: a } = this;
        let r = (n * (100 + 45 * s)) / 100;
        ve(r) < ve(a) && ve(n) <= ve(a)
          ? ((this.cwd += Math.abs(s)), (r = a))
          : ve(r) > ve(o) && ve(n) >= ve(o)
          ? ((this.cwd += Math.abs(s)), (r = o))
          : ((this.cwd = 0), (r = Math.max(Math.min(r, o), a))),
          this.cwd > this.option("wheelLimit") ||
            (e.preventDefault(),
            ve(r) !== ve(n) && this.zoomTo(r, { event: e }));
      }
      canZoomIn() {
        return (
          this.option("zoom") &&
          (ve(this.contentRect.width, 1) < ve(this.contentRect.fitWidth, 1) ||
            ve(this.targetScale) < ve(this.maxScale))
        );
      }
      canZoomOut() {
        return this.option("zoom") && ve(this.targetScale) > ve(this.minScale);
      }
      zoomIn(e = 1.25, t) {
        this.zoomTo(this.targetScale * e, t);
      }
      zoomOut(e = 0.8, t) {
        this.zoomTo(this.targetScale * e, t);
      }
      zoomToFit(e) {
        this.zoomTo("fit", e);
      }
      zoomToCover(e) {
        this.zoomTo("cover", e);
      }
      zoomToFull(e) {
        this.zoomTo("full", e);
      }
      zoomToMax(e) {
        this.zoomTo("max", e);
      }
      toggleZoom(e) {
        this.zoomTo(this.getNextScale("toggleZoom"), e);
      }
      toggleMax(e) {
        this.zoomTo(this.getNextScale("toggleMax"), e);
      }
      toggleCover(e) {
        this.zoomTo(this.getNextScale("toggleCover"), e);
      }
      iterateZoom(e) {
        this.zoomTo("next", e);
      }
      zoomTo(
        e = 1,
        {
          friction: t = "auto",
          originX: i = "auto",
          originY: s = "auto",
          event: n,
        } = {}
      ) {
        if (this.isContentLoading || this.state === _e.Destroy) return;
        const {
          targetScale: o,
          fullScale: a,
          maxScale: r,
          coverScale: l,
        } = this;
        if (
          (this.stop(),
          this.panMode === We && (n = this.pmme || n),
          n || "auto" === i || "auto" === s)
        ) {
          const e = this.content.getBoundingClientRect(),
            t = this.container.getBoundingClientRect(),
            o = n ? n.clientX : t.left + 0.5 * t.width,
            a = n ? n.clientY : t.top + 0.5 * t.height;
          (i = o - e.left - 0.5 * e.width), (s = a - e.top - 0.5 * e.height);
        }
        let c = 1;
        "number" == typeof e
          ? (c = e)
          : "full" === e
          ? (c = a)
          : "cover" === e
          ? (c = l)
          : "max" === e
          ? (c = r)
          : "fit" === e
          ? (c = 1)
          : "next" === e && (c = this.getNextScale("iterateZoom")),
          (c = c / o || 1),
          (t = "auto" === t ? (c > 1 ? 0.15 : 0.25) : t),
          this.applyChange({ scale: c, originX: i, originY: s, friction: t }),
          n && this.panMode === We && this.panWithMouse(n, t);
      }
      rotateCCW() {
        this.applyChange({ angle: -90 });
      }
      rotateCW() {
        this.applyChange({ angle: 90 });
      }
      flipX() {
        this.applyChange({ flipX: !0 });
      }
      flipY() {
        this.applyChange({ flipY: !0 });
      }
      fitX() {
        this.stop("target");
        const { containerRect: e, contentRect: t, target: i } = this;
        this.applyChange({
          panX: 0.5 * e.width - (t.left + 0.5 * t.fitWidth) - i.e,
          panY: 0.5 * e.height - (t.top + 0.5 * t.fitHeight) - i.f,
          scale: e.width / t.fitWidth / this.targetScale,
          originX: 0,
          originY: 0,
          ignoreBounds: !0,
        });
      }
      fitY() {
        this.stop("target");
        const { containerRect: e, contentRect: t, target: i } = this;
        this.applyChange({
          panX: 0.5 * e.width - (t.left + 0.5 * t.fitWidth) - i.e,
          panY: 0.5 * e.innerHeight - (t.top + 0.5 * t.fitHeight) - i.f,
          scale: e.height / t.fitHeight / this.targetScale,
          originX: 0,
          originY: 0,
          ignoreBounds: !0,
        });
      }
      toggleFS() {
        const { container: e } = this,
          t = this.cn("inFullscreen"),
          i = this.cn("htmlHasFullscreen");
        e.classList.toggle(t);
        const s = e.classList.contains(t);
        s
          ? (document.documentElement.classList.add(i),
            document.addEventListener("keydown", this.onKeydown, !0))
          : (document.documentElement.classList.remove(i),
            document.removeEventListener("keydown", this.onKeydown, !0)),
          this.updateMetrics(),
          this.emit(s ? "enterFS" : "exitFS");
      }
      getMatrix(e = this.current) {
        const { a: t, b: i, c: s, d: n, e: o, f: a } = e;
        return new DOMMatrix([t, i, s, n, o, a]);
      }
      reset(e) {
        if (this.state !== _e.Init && this.state !== _e.Destroy) {
          this.stop("current");
          for (const e of ze) this.target[e] = He[e];
          (this.target.a = this.minScale),
            (this.target.d = this.minScale),
            this.clampTargetBounds(),
            this.isResting ||
              ((this.friction = void 0 === e ? this.option("friction") : e),
              (this.state = _e.Panning),
              this.requestTick());
        }
      }
      destroy() {
        this.stop(),
          (this.state = _e.Destroy),
          this.detachEvents(),
          this.detachObserver();
        const { container: e, content: t } = this,
          i = this.option("classes") || {};
        for (const t of Object.values(i)) e.classList.remove(t + "");
        t &&
          (t.removeEventListener("load", this.onLoad),
          t.removeEventListener("error", this.onError)),
          this.detachPlugins();
      }
    }
    Object.defineProperty(Ze, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: De,
    }),
      Object.defineProperty(Ze, "Plugins", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {},
      });
    const Ue = function (e, t) {
        let i = !0;
        return (...s) => {
          i &&
            ((i = !1),
            e(...s),
            setTimeout(() => {
              i = !0;
            }, t));
        };
      },
      Ke = (e, t) => {
        let i = [];
        return (
          e.childNodes.forEach((e) => {
            e.nodeType !== Node.ELEMENT_NODE ||
              (t && !e.matches(t)) ||
              i.push(e);
          }),
          i
        );
      };
    var Je;
    !(function (e) {
      (e[(e.Init = 0)] = "Init"),
        (e[(e.Ready = 1)] = "Ready"),
        (e[(e.Destroy = 2)] = "Destroy");
    })(Je || (Je = {}));
    const Qe = (e) => {
        if ("string" == typeof e || e instanceof HTMLElement) e = { html: e };
        else {
          const t = e.thumb;
          void 0 !== t &&
            ("string" == typeof t && (e.thumbSrc = t),
            t instanceof HTMLImageElement &&
              ((e.thumbEl = t), (e.thumbElSrc = t.src), (e.thumbSrc = t.src)),
            delete e.thumb);
        }
        return Object.assign(
          {
            html: "",
            el: null,
            isDom: !1,
            class: "",
            customClass: "",
            index: -1,
            dim: 0,
            gap: 0,
            pos: 0,
            transition: !1,
          },
          e
        );
      },
      et = (e = {}) =>
        Object.assign({ index: -1, slides: [], dim: 0, pos: -1 }, e);
    class tt extends ke {
      constructor(e, t) {
        super(t),
          Object.defineProperty(this, "instance", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
      }
      attach() {}
      detach() {}
    }
    class it extends tt {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "isDynamic", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "list", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          });
      }
      onRefresh() {
        this.refresh();
      }
      build() {
        let e = this.list;
        if (!e) {
          (e = document.createElement("ul")),
            Ne(e, this.cn("list")),
            e.setAttribute("role", "tablist");
          const t = this.instance.container;
          t.appendChild(e), Ne(t, this.cn("hasDots")), (this.list = e);
        }
        return e;
      }
      refresh() {
        var e;
        const t = this.instance.pages.length,
          i = Math.min(2, this.option("minCount")),
          s = Math.max(2e3, this.option("maxCount")),
          n = this.option("dynamicFrom");
        if (t < i || t > s) return void this.cleanup();
        const o = "number" == typeof n && t > 5 && t >= n,
          a =
            !this.list ||
            this.isDynamic !== o ||
            this.list.children.length !== t;
        a && this.cleanup();
        const r = this.build();
        if ((xe(r, this.cn("isDynamic"), !!o), a))
          for (let e = 0; e < t; e++) r.append(this.createItem(e));
        let l,
          c = 0;
        for (const t of [...r.children]) {
          const i = c === this.instance.page;
          i && (l = t),
            xe(t, this.cn("isCurrent"), i),
            null === (e = t.children[0]) ||
              void 0 === e ||
              e.setAttribute("aria-selected", i ? "true" : "false");
          for (const e of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"])
            Be(t, this.cn(e));
          c++;
        }
        if (((l = l || r.firstChild), o && l)) {
          const e = l.previousElementSibling,
            t = e && e.previousElementSibling;
          Ne(e, this.cn("isPrev")), Ne(t, this.cn("isBeforePrev"));
          const i = l.nextElementSibling,
            s = i && i.nextElementSibling;
          Ne(i, this.cn("isNext")), Ne(s, this.cn("isAfterNext"));
        }
        this.isDynamic = o;
      }
      createItem(e = 0) {
        var t;
        const i = document.createElement("li");
        i.setAttribute("role", "presentation");
        const s = we(
          this.instance
            .localize(this.option("dotTpl"), [["%d", e + 1]])
            .replace(/\%i/g, e + "")
        );
        return (
          i.appendChild(s),
          null === (t = i.children[0]) ||
            void 0 === t ||
            t.setAttribute("role", "tab"),
          i
        );
      }
      cleanup() {
        this.list && (this.list.remove(), (this.list = null)),
          (this.isDynamic = !1),
          Be(this.instance.container, this.cn("hasDots"));
      }
      attach() {
        this.instance.on(["refresh", "change"], this.onRefresh);
      }
      detach() {
        this.instance.off(["refresh", "change"], this.onRefresh),
          this.cleanup();
      }
    }
    Object.defineProperty(it, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        classes: {
          list: "f-carousel__dots",
          isDynamic: "is-dynamic",
          hasDots: "has-dots",
          dot: "f-carousel__dot",
          isBeforePrev: "is-before-prev",
          isPrev: "is-prev",
          isCurrent: "is-current",
          isNext: "is-next",
          isAfterNext: "is-after-next",
        },
        dotTpl:
          '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
        dynamicFrom: 11,
        maxCount: 1 / 0,
        minCount: 2,
      },
    });
    const st = "disabled",
      nt = "next",
      ot = "prev";
    class at extends tt {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "prev", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "next", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "isDom", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          });
      }
      onRefresh() {
        const e = this.instance,
          t = e.pages.length,
          i = e.page;
        if (t < 2) return void this.cleanup();
        this.build();
        let s = this.prev,
          n = this.next;
        s &&
          n &&
          (s.removeAttribute(st),
          n.removeAttribute(st),
          e.isInfinite ||
            (i <= 0 && s.setAttribute(st, ""),
            i >= t - 1 && n.setAttribute(st, "")));
      }
      addBtn(e) {
        var t;
        const i = this.instance,
          s = document.createElement("button");
        s.setAttribute("tabindex", "0"),
          s.setAttribute("title", i.localize(`{{${e.toUpperCase()}}}`)),
          Ne(
            s,
            this.cn("button") + " " + this.cn(e === nt ? "isNext" : "isPrev")
          );
        const n = i.isRTL ? (e === nt ? ot : nt) : e;
        var o;
        return (
          (s.innerHTML = i.localize(this.option(`${n}Tpl`))),
          (s.dataset[
            `carousel${
              ((o = e),
              o
                ? o.match("^[a-z]")
                  ? o.charAt(0).toUpperCase() + o.substring(1)
                  : o
                : "")
            }`
          ] = "true"),
          null === (t = this.container) || void 0 === t || t.appendChild(s),
          s
        );
      }
      build() {
        const e = this.instance.container,
          t = this.cn("container");
        let { container: i, prev: s, next: n } = this;
        i || ((i = e.querySelector("." + t)), (this.isDom = !!i)),
          i ||
            ((i = document.createElement("div")), Ne(i, t), e.appendChild(i)),
          (this.container = i),
          n || (n = i.querySelector("[data-carousel-next]")),
          n || (n = this.addBtn(nt)),
          (this.next = n),
          s || (s = i.querySelector("[data-carousel-prev]")),
          s || (s = this.addBtn(ot)),
          (this.prev = s);
      }
      cleanup() {
        this.isDom ||
          (this.prev && this.prev.remove(),
          this.next && this.next.remove(),
          this.container && this.container.remove()),
          (this.prev = null),
          (this.next = null),
          (this.container = null),
          (this.isDom = !1);
      }
      attach() {
        this.instance.on(["refresh", "change"], this.onRefresh);
      }
      detach() {
        this.instance.off(["refresh", "change"], this.onRefresh),
          this.cleanup();
      }
    }
    Object.defineProperty(at, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        classes: {
          container: "f-carousel__nav",
          button: "f-button",
          isNext: "is-next",
          isPrev: "is-prev",
        },
        nextTpl:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
        prevTpl:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
      },
    });
    class rt extends tt {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "selectedIndex", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "target", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "nav", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          });
      }
      addAsTargetFor(e) {
        (this.target = this.instance), (this.nav = e), this.attachEvents();
      }
      addAsNavFor(e) {
        (this.nav = this.instance), (this.target = e), this.attachEvents();
      }
      attachEvents() {
        const { nav: e, target: t } = this;
        e &&
          t &&
          ((e.options.initialSlide = t.options.initialPage),
          e.state === Je.Ready
            ? this.onNavReady(e)
            : e.on("ready", this.onNavReady),
          t.state === Je.Ready
            ? this.onTargetReady(t)
            : t.on("ready", this.onTargetReady));
      }
      onNavReady(e) {
        e.on("createSlide", this.onNavCreateSlide),
          e.on("Panzoom.click", this.onNavClick),
          e.on("Panzoom.touchEnd", this.onNavTouch),
          this.onTargetChange();
      }
      onTargetReady(e) {
        e.on("change", this.onTargetChange),
          e.on("Panzoom.refresh", this.onTargetChange),
          this.onTargetChange();
      }
      onNavClick(e, t, i) {
        this.onNavTouch(e, e.panzoom, i);
      }
      onNavTouch(e, t, i) {
        var s, n;
        if (Math.abs(t.dragOffset.x) > 3 || Math.abs(t.dragOffset.y) > 3)
          return;
        const o = i.target,
          { nav: a, target: r } = this;
        if (!a || !r || !o) return;
        const l = o.closest("[data-index]");
        if ((i.stopPropagation(), i.preventDefault(), !l)) return;
        const c = parseInt(l.dataset.index || "", 10) || 0,
          d = r.getPageForSlide(c),
          h = a.getPageForSlide(c);
        a.slideTo(h),
          r.slideTo(d, {
            friction:
              (null ===
                (n =
                  null === (s = this.nav) || void 0 === s
                    ? void 0
                    : s.plugins) || void 0 === n
                ? void 0
                : n.Sync.option("friction")) || 0,
          }),
          this.markSelectedSlide(c);
      }
      onNavCreateSlide(e, t) {
        t.index === this.selectedIndex && this.markSelectedSlide(t.index);
      }
      onTargetChange() {
        var e, t;
        const { target: i, nav: s } = this;
        if (!i || !s) return;
        if (s.state !== Je.Ready || i.state !== Je.Ready) return;
        const n =
            null ===
              (t =
                null === (e = i.pages[i.page]) || void 0 === e
                  ? void 0
                  : e.slides[0]) || void 0 === t
              ? void 0
              : t.index,
          o = s.getPageForSlide(n);
        this.markSelectedSlide(n),
          s.slideTo(
            o,
            null === s.prevPage && null === i.prevPage
              ? { friction: 0 }
              : void 0
          );
      }
      markSelectedSlide(e) {
        const t = this.nav;
        t &&
          t.state === Je.Ready &&
          ((this.selectedIndex = e),
          [...t.slides].map((t) => {
            t.el &&
              t.el.classList[t.index === e ? "add" : "remove"](
                "is-nav-selected"
              );
          }));
      }
      attach() {
        const e = this;
        let t = e.options.target,
          i = e.options.nav;
        t ? e.addAsNavFor(t) : i && e.addAsTargetFor(i);
      }
      detach() {
        const e = this,
          t = e.nav,
          i = e.target;
        t &&
          (t.off("ready", e.onNavReady),
          t.off("createSlide", e.onNavCreateSlide),
          t.off("Panzoom.click", e.onNavClick),
          t.off("Panzoom.touchEnd", e.onNavTouch)),
          (e.nav = null),
          i &&
            (i.off("ready", e.onTargetReady),
            i.off("refresh", e.onTargetChange),
            i.off("change", e.onTargetChange)),
          (e.target = null);
      }
    }
    Object.defineProperty(rt, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: { friction: 0.35 },
    });
    const lt = { Navigation: at, Dots: it, Sync: rt },
      ct = "animationend",
      dt = "isSelected",
      ht = "slide";
    class ut extends Ie {
      get axis() {
        return this.isHorizontal ? "e" : "f";
      }
      get isEnabled() {
        return this.state === Je.Ready;
      }
      get isInfinite() {
        let e = !1;
        const { contentDim: t, viewportDim: i, pages: s, slides: n } = this,
          o = n[0];
        return (
          s.length >= 2 && o && t + o.dim >= i && (e = this.option("infinite")),
          e
        );
      }
      get isRTL() {
        return "rtl" === this.option("direction");
      }
      get isHorizontal() {
        return "x" === this.option("axis");
      }
      constructor(e, t = {}, i = {}) {
        if (
          (super(),
          Object.defineProperty(this, "bp", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "",
          }),
          Object.defineProperty(this, "lp", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "userOptions", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {},
          }),
          Object.defineProperty(this, "userPlugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {},
          }),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Je.Init,
          }),
          Object.defineProperty(this, "page", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "prevPage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "viewport", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "track", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "slides", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "pages", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "panzoom", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "inTransition", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Set(),
          }),
          Object.defineProperty(this, "contentDim", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "viewportDim", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          "string" == typeof e && (e = document.querySelector(e)),
          !e || !je(e))
        )
          throw new Error("No Element found");
        (this.container = e),
          (this.slideNext = Ue(this.slideNext.bind(this), 150)),
          (this.slidePrev = Ue(this.slidePrev.bind(this), 150)),
          (this.userOptions = t),
          (this.userPlugins = i),
          queueMicrotask(() => {
            this.processOptions();
          });
      }
      processOptions() {
        var e, t;
        const i = Le({}, ut.defaults, this.userOptions);
        let s = "";
        const n = i.breakpoints;
        if (n && Oe(n))
          for (const [e, t] of Object.entries(n))
            window.matchMedia(e).matches && Oe(t) && ((s += e), Le(i, t));
        (s === this.bp && this.state !== Je.Init) ||
          ((this.bp = s),
          this.state === Je.Ready &&
            (i.initialSlide =
              (null ===
                (t =
                  null === (e = this.pages[this.page]) || void 0 === e
                    ? void 0
                    : e.slides[0]) || void 0 === t
                ? void 0
                : t.index) || 0),
          this.state !== Je.Init && this.destroy(),
          super.setOptions(i),
          !1 === this.option("enabled")
            ? this.attachEvents()
            : setTimeout(() => {
                this.init();
              }, 0));
      }
      init() {
        (this.state = Je.Init),
          this.emit("init"),
          this.attachPlugins(
            Object.assign(Object.assign({}, ut.Plugins), this.userPlugins)
          ),
          this.emit("attachPlugins"),
          this.initLayout(),
          this.initSlides(),
          this.updateMetrics(),
          this.setInitialPosition(),
          this.initPanzoom(),
          this.attachEvents(),
          (this.state = Je.Ready),
          this.emit("ready");
      }
      initLayout() {
        const { container: e } = this,
          t = this.option("classes");
        Ne(e, this.cn("container")),
          xe(e, t.isLTR, !this.isRTL),
          xe(e, t.isRTL, this.isRTL),
          xe(e, t.isVertical, !this.isHorizontal),
          xe(e, t.isHorizontal, this.isHorizontal);
        let i = this.option("viewport") || e.querySelector(`.${t.viewport}`);
        i ||
          ((i = document.createElement("div")),
          Ne(i, t.viewport),
          i.append(...Ke(e, `.${t.slide}`)),
          e.prepend(i)),
          i.addEventListener("scroll", this.onScroll);
        let s = this.option("track") || e.querySelector(`.${t.track}`);
        s ||
          ((s = document.createElement("div")),
          Ne(s, t.track),
          s.append(...Array.from(i.childNodes))),
          s.setAttribute("aria-live", "polite"),
          i.contains(s) || i.prepend(s),
          (this.viewport = i),
          (this.track = s),
          this.emit("initLayout");
      }
      initSlides() {
        const { track: e } = this;
        if (!e) return;
        const t = [...this.slides],
          i = [];
        [...Ke(e, `.${this.cn(ht)}`)].forEach((e) => {
          if (je(e)) {
            const t = Qe({ el: e, isDom: !0, index: this.slides.length });
            i.push(t);
          }
        });
        for (let e of [...(this.option("slides", []) || []), ...t])
          i.push(Qe(e));
        this.slides = i;
        for (let e = 0; e < this.slides.length; e++) this.slides[e].index = e;
        for (const e of i)
          this.emit("beforeInitSlide", e, e.index),
            this.emit("initSlide", e, e.index);
        this.emit("initSlides");
      }
      setInitialPage() {
        const e = this.option("initialSlide");
        this.page =
          "number" == typeof e
            ? this.getPageForSlide(e)
            : parseInt(this.option("initialPage", 0) + "", 10) || 0;
      }
      setInitialPosition() {
        const { track: e, pages: t, isHorizontal: i } = this;
        if (!e || !t.length) return;
        let s = this.page;
        t[s] || (this.page = s = 0);
        const n = (t[s].pos || 0) * (this.isRTL && i ? 1 : -1),
          o = i ? `${n}px` : "0",
          a = i ? "0" : `${n}px`;
        (e.style.transform = `translate3d(${o}, ${a}, 0) scale(1)`),
          this.option("adaptiveHeight") && this.setViewportHeight();
      }
      initPanzoom() {
        this.panzoom && (this.panzoom.destroy(), (this.panzoom = null));
        const e = this.option("Panzoom") || {};
        (this.panzoom = new Ze(
          this.viewport,
          Le(
            {},
            {
              content: this.track,
              zoom: !1,
              panOnlyZoomed: !1,
              lockAxis: this.isHorizontal ? "x" : "y",
              infinite: this.isInfinite,
              click: !1,
              dblClick: !1,
              touch: (e) => !(this.pages.length < 2 && !e.options.infinite),
              bounds: () => this.getBounds(),
              maxVelocity: (e) =>
                Math.abs(e.target[this.axis] - e.current[this.axis]) <
                2 * this.viewportDim
                  ? 100
                  : 0,
            },
            e
          )
        )),
          this.panzoom.on("*", (e, t, ...i) => {
            this.emit(`Panzoom.${t}`, e, ...i);
          }),
          this.panzoom.on("decel", this.onDecel),
          this.panzoom.on("refresh", this.onRefresh),
          this.panzoom.on("beforeTransform", this.onBeforeTransform),
          this.panzoom.on("endAnimation", this.onEndAnimation);
      }
      attachEvents() {
        const e = this.container;
        e &&
          (e.addEventListener("click", this.onClick, {
            passive: !1,
            capture: !1,
          }),
          e.addEventListener("slideTo", this.onSlideTo)),
          window.addEventListener("resize", this.onResize);
      }
      createPages() {
        let e = [];
        const { contentDim: t, viewportDim: i } = this;
        let s = this.option("slidesPerPage");
        s =
          ("auto" === s || t <= i) && !1 !== this.option("fill")
            ? 1 / 0
            : parseFloat(s + "");
        let n = 0,
          o = 0,
          a = 0;
        for (const t of this.slides)
          (!e.length || o + t.dim - i > 0.05 || a >= s) &&
            (e.push(et()), (n = e.length - 1), (o = 0), (a = 0)),
            e[n].slides.push(t),
            (o += t.dim + t.gap),
            a++;
        return e;
      }
      processPages() {
        const e = this.pages,
          { contentDim: t, viewportDim: i, isInfinite: s } = this,
          n = this.option("center"),
          o = this.option("fill"),
          a = o && n && t > i && !s;
        if (
          (e.forEach((e, s) => {
            var o;
            (e.index = s),
              (e.pos =
                (null === (o = e.slides[0]) || void 0 === o ? void 0 : o.pos) ||
                0),
              (e.dim = 0);
            for (const [t, i] of e.slides.entries())
              (e.dim += i.dim), t < e.slides.length - 1 && (e.dim += i.gap);
            a && e.pos + 0.5 * e.dim < 0.5 * i
              ? (e.pos = 0)
              : a && e.pos + 0.5 * e.dim >= t - 0.5 * i
              ? (e.pos = t - i)
              : n && (e.pos += -0.5 * (i - e.dim));
          }),
          e.forEach((e) => {
            o &&
              !s &&
              t > i &&
              ((e.pos = Math.max(e.pos, 0)), (e.pos = Math.min(e.pos, t - i))),
              (e.pos = ve(e.pos, 1e3)),
              (e.dim = ve(e.dim, 1e3)),
              Math.abs(e.pos) <= 0.1 && (e.pos = 0);
          }),
          s)
        )
          return e;
        const r = [];
        let l;
        return (
          e.forEach((e) => {
            const t = Object.assign({}, e);
            l && t.pos === l.pos
              ? ((l.dim += t.dim), (l.slides = [...l.slides, ...t.slides]))
              : ((t.index = r.length), (l = t), r.push(t));
          }),
          r
        );
      }
      getPageFromIndex(e = 0) {
        const t = this.pages.length;
        let i;
        return (
          (e = parseInt((e || 0).toString()) || 0),
          (i = this.isInfinite
            ? ((e % t) + t) % t
            : Math.max(Math.min(e, t - 1), 0)),
          i
        );
      }
      getSlideMetrics(e) {
        var t, i;
        const s = this.isHorizontal ? "width" : "height";
        let n = 0,
          o = 0,
          a = e.el;
        const r = !(!a || a.parentNode);
        if (
          (a
            ? (n = parseFloat(a.dataset[s] || "") || 0)
            : ((a = document.createElement("div")),
              (a.style.visibility = "hidden"),
              (this.track || document.body).prepend(a)),
          Ne(a, this.cn(ht) + " " + e.class + " " + e.customClass),
          n)
        )
          (a.style[s] = `${n}px`),
            (a.style["width" === s ? "height" : "width"] = "");
        else {
          r && (this.track || document.body).prepend(a),
            (n =
              a.getBoundingClientRect()[s] *
              Math.max(
                1,
                (null === (t = window.visualViewport) || void 0 === t
                  ? void 0
                  : t.scale) || 1
              ));
          let e = a[this.isHorizontal ? "offsetWidth" : "offsetHeight"];
          e - 1 > n && (n = e);
        }
        const l = getComputedStyle(a);
        return (
          "content-box" === l.boxSizing &&
            (this.isHorizontal
              ? ((n += parseFloat(l.paddingLeft) || 0),
                (n += parseFloat(l.paddingRight) || 0))
              : ((n += parseFloat(l.paddingTop) || 0),
                (n += parseFloat(l.paddingBottom) || 0))),
          (o =
            parseFloat(l[this.isHorizontal ? "marginRight" : "marginBottom"]) ||
            0),
          r
            ? null === (i = a.parentElement) || void 0 === i || i.removeChild(a)
            : e.el || a.remove(),
          { dim: ve(n, 1e3), gap: ve(o, 1e3) }
        );
      }
      getBounds() {
        const { isInfinite: e, isRTL: t, isHorizontal: i, pages: s } = this;
        let n = { min: 0, max: 0 };
        if (e) n = { min: -1 / 0, max: 1 / 0 };
        else if (s.length) {
          const e = s[0].pos,
            o = s[s.length - 1].pos;
          n = t && i ? { min: e, max: o } : { min: -1 * o, max: -1 * e };
        }
        return { x: i ? n : { min: 0, max: 0 }, y: i ? { min: 0, max: 0 } : n };
      }
      repositionSlides() {
        let e,
          {
            isHorizontal: t,
            isRTL: i,
            isInfinite: s,
            viewport: n,
            viewportDim: o,
            contentDim: a,
            page: r,
            pages: l,
            slides: c,
            panzoom: d,
          } = this,
          h = 0,
          u = 0,
          p = 0,
          f = 0;
        d ? (f = -1 * d.current[this.axis]) : l[r] && (f = l[r].pos || 0),
          (e = t ? (i ? "right" : "left") : "top"),
          i && t && (f *= -1);
        for (const t of c) {
          const i = t.el;
          i
            ? ("top" === e
                ? ((i.style.right = ""), (i.style.left = ""))
                : (i.style.top = ""),
              t.index !== h
                ? (i.style[e] = 0 === u ? "" : `${ve(u, 1e3)}px`)
                : (i.style[e] = ""),
              (p += t.dim + t.gap),
              h++)
            : (u += t.dim + t.gap);
        }
        if (s && p && n) {
          let i = getComputedStyle(n),
            s = "padding",
            r = t ? "Right" : "Bottom",
            l = parseFloat(i[s + (t ? "Left" : "Top")]);
          (f -= l), (o += l), (o += parseFloat(i[s + r]));
          for (const t of c)
            t.el &&
              (ve(t.pos) < ve(o) &&
                ve(t.pos + t.dim + t.gap) < ve(f) &&
                ve(f) > ve(a - o) &&
                (t.el.style[e] = `${ve(u + p, 1e3)}px`),
              ve(t.pos + t.gap) >= ve(a - o) &&
                ve(t.pos) > ve(f + o) &&
                ve(f) < ve(o) &&
                (t.el.style[e] = `-${ve(p, 1e3)}px`));
        }
        let g,
          m,
          v = [...this.inTransition];
        if ((v.length > 1 && ((g = l[v[0]]), (m = l[v[1]])), g && m)) {
          let t = 0;
          for (const i of c)
            i.el
              ? this.inTransition.has(i.index) &&
                g.slides.indexOf(i) < 0 &&
                (i.el.style[e] = `${ve(t + (g.pos - m.pos), 1e3)}px`)
              : (t += i.dim + i.gap);
        }
      }
      createSlideEl(e) {
        const { track: t, slides: i } = this;
        if (!t || !e) return;
        if (e.el && e.el.parentNode) return;
        const s = e.el || document.createElement("div");
        Ne(s, this.cn(ht)), Ne(s, e.class), Ne(s, e.customClass);
        const n = e.html;
        n &&
          (n instanceof HTMLElement
            ? s.appendChild(n)
            : (s.innerHTML = e.html + ""));
        const o = [];
        i.forEach((e, t) => {
          e.el && o.push(t);
        });
        const a = e.index;
        let r = null;
        o.length &&
          (r =
            i[o.reduce((e, t) => (Math.abs(t - a) < Math.abs(e - a) ? t : e))]);
        const l =
          r && r.el && r.el.parentNode
            ? r.index < e.index
              ? r.el.nextSibling
              : r.el
            : null;
        t.insertBefore(s, t.contains(l) ? l : null),
          (e.el = s),
          this.emit("createSlide", e);
      }
      removeSlideEl(e, t = !1) {
        const i = null == e ? void 0 : e.el;
        if (!i || !i.parentNode) return;
        const s = this.cn(dt);
        if (
          (i.classList.contains(s) && (Be(i, s), this.emit("unselectSlide", e)),
          e.isDom && !t)
        )
          return (
            i.removeAttribute("aria-hidden"),
            i.removeAttribute("data-index"),
            void (i.style.left = "")
          );
        this.emit("removeSlide", e);
        const n = new CustomEvent(ct);
        i.dispatchEvent(n), e.el && (e.el.remove(), (e.el = null));
      }
      transitionTo(e = 0, t = this.option("transition")) {
        var i, s, n, o;
        if (!t) return !1;
        const a = this.page,
          { pages: r, panzoom: l } = this;
        e = parseInt((e || 0).toString()) || 0;
        const c = this.getPageFromIndex(e);
        if (
          !l ||
          !r[c] ||
          r.length < 2 ||
          Math.abs(
            ((null ===
              (s =
                null === (i = r[a]) || void 0 === i ? void 0 : i.slides[0]) ||
            void 0 === s
              ? void 0
              : s.dim) || 0) - this.viewportDim
          ) > 1
        )
          return !1;
        const d = e > a ? 1 : -1,
          h = r[c].pos * (this.isRTL ? 1 : -1);
        if (a === c && Math.abs(h - l.target[this.axis]) < 1) return !1;
        this.clearTransitions();
        const u = l.isResting;
        Ne(this.container, this.cn("inTransition"));
        const p =
            (null === (n = r[a]) || void 0 === n ? void 0 : n.slides[0]) ||
            null,
          f =
            (null === (o = r[c]) || void 0 === o ? void 0 : o.slides[0]) ||
            null;
        this.inTransition.add(f.index), this.createSlideEl(f);
        let g = p.el,
          m = f.el;
        u || t === ht || ((t = "fadeFast"), (g = null));
        const v = this.isRTL ? "next" : "prev",
          b = this.isRTL ? "prev" : "next";
        return (
          g &&
            (this.inTransition.add(p.index),
            (p.transition = t),
            g.addEventListener(ct, this.onAnimationEnd),
            g.classList.add(`f-${t}Out`, `to-${d > 0 ? b : v}`)),
          m &&
            ((f.transition = t),
            m.addEventListener(ct, this.onAnimationEnd),
            m.classList.add(`f-${t}In`, `from-${d > 0 ? v : b}`)),
          (l.current[this.axis] = h),
          (l.target[this.axis] = h),
          l.requestTick(),
          this.onChange(c),
          !0
        );
      }
      manageSlideVisiblity() {
        const e = new Set(),
          t = new Set(),
          i = this.getVisibleSlides(
            parseFloat(this.option("preload", 0) + "") || 0
          );
        for (const s of this.slides) i.has(s) ? e.add(s) : t.add(s);
        for (const t of this.inTransition) e.add(this.slides[t]);
        for (const t of e) this.createSlideEl(t), this.lazyLoadSlide(t);
        for (const i of t) e.has(i) || this.removeSlideEl(i);
        this.markSelectedSlides(), this.repositionSlides();
      }
      markSelectedSlides() {
        if (!this.pages[this.page] || !this.pages[this.page].slides) return;
        const e = "aria-hidden";
        let t = this.cn(dt);
        if (t)
          for (const i of this.slides) {
            const s = i.el;
            s &&
              ((s.dataset.index = `${i.index}`),
              s.classList.contains("f-thumbs__slide")
                ? this.getVisibleSlides(0).has(i)
                  ? s.removeAttribute(e)
                  : s.setAttribute(e, "true")
                : this.pages[this.page].slides.includes(i)
                ? (s.classList.contains(t) ||
                    (Ne(s, t), this.emit("selectSlide", i)),
                  s.removeAttribute(e))
                : (s.classList.contains(t) &&
                    (Be(s, t), this.emit("unselectSlide", i)),
                  s.setAttribute(e, "true")));
          }
      }
      flipInfiniteTrack() {
        const {
            axis: e,
            isHorizontal: t,
            isInfinite: i,
            isRTL: s,
            viewportDim: n,
            contentDim: o,
          } = this,
          a = this.panzoom;
        if (!a || !i) return;
        let r = a.current[e],
          l = a.target[e] - r,
          c = 0,
          d = 0.5 * n;
        s && t
          ? (r < -d && ((c = -1), (r += o)), r > o - d && ((c = 1), (r -= o)))
          : (r > d && ((c = 1), (r -= o)), r < -o + d && ((c = -1), (r += o))),
          c && ((a.current[e] = r), (a.target[e] = r + l));
      }
      lazyLoadImg(e, t) {
        const i = this,
          s = "f-fadeIn",
          n = "is-preloading";
        let o = !1,
          a = null;
        const r = () => {
          o ||
            ((o = !0),
            a && (a.remove(), (a = null)),
            Be(t, n),
            t.complete &&
              (Ne(t, s),
              setTimeout(() => {
                Be(t, s);
              }, 350)),
            this.option("adaptiveHeight") &&
              e.el &&
              this.pages[this.page].slides.indexOf(e) > -1 &&
              (i.updateMetrics(), i.setViewportHeight()),
            this.emit("load", e));
        };
        Ne(t, n),
          (t.src = t.dataset.lazySrcset || t.dataset.lazySrc || ""),
          delete t.dataset.lazySrc,
          delete t.dataset.lazySrcset,
          t.addEventListener("error", () => {
            r();
          }),
          t.addEventListener("load", () => {
            r();
          }),
          setTimeout(() => {
            const i = t.parentNode;
            i &&
              e.el &&
              (t.complete ? r() : o || ((a = we(Fe)), i.insertBefore(a, t)));
          }, 300);
      }
      lazyLoadSlide(e) {
        const t = e && e.el;
        if (!t) return;
        const i = new Set();
        let s = Array.from(
          t.querySelectorAll("[data-lazy-src],[data-lazy-srcset]")
        );
        t.dataset.lazySrc && s.push(t),
          s.map((e) => {
            e instanceof HTMLImageElement
              ? i.add(e)
              : e instanceof HTMLElement &&
                e.dataset.lazySrc &&
                ((e.style.backgroundImage = `url('${e.dataset.lazySrc}')`),
                delete e.dataset.lazySrc);
          });
        for (const t of i) this.lazyLoadImg(e, t);
      }
      onAnimationEnd(e) {
        var t;
        const i = e.target,
          s = i ? parseInt(i.dataset.index || "", 10) || 0 : -1,
          n = this.slides[s],
          o = e.animationName;
        if (!i || !n || !o) return;
        const a = !!this.inTransition.has(s) && n.transition;
        a &&
          o.substring(0, a.length + 2) === `f-${a}` &&
          this.inTransition.delete(s),
          this.inTransition.size || this.clearTransitions(),
          s === this.page &&
            (null === (t = this.panzoom) || void 0 === t
              ? void 0
              : t.isResting) &&
            this.emit("settle");
      }
      onDecel(e, t = 0, i = 0, s = 0, n = 0) {
        if (this.option("dragFree")) return void this.setPageFromPosition();
        const { isRTL: o, isHorizontal: a, axis: r, pages: l } = this,
          c = l.length,
          d = Math.abs(Math.atan2(i, t) / (Math.PI / 180));
        let h = 0;
        if (((h = d > 45 && d < 135 ? (a ? 0 : i) : a ? t : 0), !c)) return;
        let u = this.page,
          p = o && a ? 1 : -1;
        const f = e.current[r] * p;
        let { pageIndex: g } = this.getPageFromPosition(f);
        Math.abs(h) > 5
          ? (l[u].dim <
              document.documentElement[
                "client" + (this.isHorizontal ? "Width" : "Height")
              ] -
                1 && (u = g),
            (u = o && a ? (h < 0 ? u - 1 : u + 1) : h < 0 ? u + 1 : u - 1))
          : (u = 0 === s && 0 === n ? u : g),
          this.slideTo(u, {
            transition: !1,
            friction: e.option("decelFriction"),
          });
      }
      onClick(e) {
        const t = e.target,
          i = t && je(t) ? t.dataset : null;
        let s, n;
        i &&
          (void 0 !== i.carouselPage
            ? ((n = "slideTo"), (s = i.carouselPage))
            : void 0 !== i.carouselNext
            ? (n = "slideNext")
            : void 0 !== i.carouselPrev && (n = "slidePrev")),
          n
            ? (e.preventDefault(),
              e.stopPropagation(),
              t && !t.hasAttribute("disabled") && this[n](s))
            : this.emit("click", e);
      }
      onSlideTo(e) {
        const t = e.detail || 0;
        this.slideTo(this.getPageForSlide(t), { friction: 0 });
      }
      onChange(e, t = 0) {
        const i = this.page;
        (this.prevPage = i),
          (this.page = e),
          this.option("adaptiveHeight") && this.setViewportHeight(),
          e !== i && (this.markSelectedSlides(), this.emit("change", e, i, t));
      }
      onRefresh() {
        let e = this.contentDim,
          t = this.viewportDim;
        this.updateMetrics(),
          (this.contentDim === e && this.viewportDim === t) ||
            this.slideTo(this.page, { friction: 0, transition: !1 });
      }
      onScroll() {
        var e;
        null === (e = this.viewport) || void 0 === e || e.scroll(0, 0);
      }
      onResize() {
        this.option("breakpoints") && this.processOptions();
      }
      onBeforeTransform(e) {
        this.lp !== e.current[this.axis] &&
          (this.flipInfiniteTrack(), this.manageSlideVisiblity()),
          (this.lp = e.current.e);
      }
      onEndAnimation() {
        this.inTransition.size || this.emit("settle");
      }
      reInit(e = null, t = null) {
        this.destroy(),
          (this.state = Je.Init),
          (this.prevPage = null),
          (this.userOptions = e || this.userOptions),
          (this.userPlugins = t || this.userPlugins),
          this.processOptions();
      }
      slideTo(
        e = 0,
        {
          friction: t = this.option("friction"),
          transition: i = this.option("transition"),
        } = {}
      ) {
        if (this.state === Je.Destroy) return;
        e = parseInt((e || 0).toString()) || 0;
        const s = this.getPageFromIndex(e),
          { axis: n, isHorizontal: o, isRTL: a, pages: r, panzoom: l } = this,
          c = r.length,
          d = a && o ? 1 : -1;
        if (!l || !c) return;
        if (this.page !== s) {
          const t = new Event("beforeChange", { bubbles: !0, cancelable: !0 });
          if ((this.emit("beforeChange", t, e), t.defaultPrevented)) return;
        }
        if (this.transitionTo(e, i)) return;
        let h = r[s].pos;
        if (this.isInfinite) {
          const t = this.contentDim,
            i = l.target[n] * d;
          2 === c
            ? (h += t * Math.floor(parseFloat(e + "") / 2))
            : (h = [h, h - t, h + t].reduce(function (e, t) {
                return Math.abs(t - i) < Math.abs(e - i) ? t : e;
              }));
        }
        (h *= d),
          Math.abs(l.target[n] - h) < 1 ||
            (l.panTo({ x: o ? h : 0, y: o ? 0 : h, friction: t }),
            this.onChange(s));
      }
      slideToClosest(e) {
        if (this.panzoom) {
          const { pageIndex: t } = this.getPageFromPosition();
          this.slideTo(t, e);
        }
      }
      slideNext() {
        this.slideTo(this.page + 1);
      }
      slidePrev() {
        this.slideTo(this.page - 1);
      }
      clearTransitions() {
        this.inTransition.clear(), Be(this.container, this.cn("inTransition"));
        const e = ["to-prev", "to-next", "from-prev", "from-next"];
        for (const t of this.slides) {
          const i = t.el;
          if (i) {
            i.removeEventListener(ct, this.onAnimationEnd),
              i.classList.remove(...e);
            const s = t.transition;
            s && i.classList.remove(`f-${s}Out`, `f-${s}In`);
          }
        }
        this.manageSlideVisiblity();
      }
      addSlide(e, t) {
        var i, s, n, o;
        const a = this.panzoom,
          r =
            (null === (i = this.pages[this.page]) || void 0 === i
              ? void 0
              : i.pos) || 0,
          l =
            (null === (s = this.pages[this.page]) || void 0 === s
              ? void 0
              : s.dim) || 0,
          c = this.contentDim < this.viewportDim;
        let d = Array.isArray(t) ? t : [t];
        const h = [];
        for (const e of d) h.push(Qe(e));
        this.slides.splice(e, 0, ...h);
        for (let e = 0; e < this.slides.length; e++) this.slides[e].index = e;
        for (const e of h) this.emit("beforeInitSlide", e, e.index);
        if (
          (this.page >= e && (this.page += h.length), this.updateMetrics(), a)
        ) {
          const t =
              (null === (n = this.pages[this.page]) || void 0 === n
                ? void 0
                : n.pos) || 0,
            i =
              (null === (o = this.pages[this.page]) || void 0 === o
                ? void 0
                : o.dim) || 0,
            s = this.pages.length || 1,
            d = this.isRTL ? l - i : i - l,
            h = this.isRTL ? r - t : t - r;
          c && 1 === s
            ? (e <= this.page &&
                ((a.current[this.axis] -= d), (a.target[this.axis] -= d)),
              a.panTo({ [this.isHorizontal ? "x" : "y"]: -1 * t }))
            : h &&
              e <= this.page &&
              ((a.target[this.axis] -= h),
              (a.current[this.axis] -= h),
              a.requestTick());
        }
        for (const e of h) this.emit("initSlide", e, e.index);
      }
      prependSlide(e) {
        this.addSlide(0, e);
      }
      appendSlide(e) {
        this.addSlide(this.slides.length, e);
      }
      removeSlide(e) {
        const t = this.slides.length;
        e = ((e % t) + t) % t;
        const i = this.slides[e];
        if (i) {
          this.removeSlideEl(i, !0), this.slides.splice(e, 1);
          for (let e = 0; e < this.slides.length; e++) this.slides[e].index = e;
          this.updateMetrics(),
            this.slideTo(this.page, { friction: 0, transition: !1 }),
            this.emit("destroySlide", i);
        }
      }
      updateMetrics() {
        const {
          panzoom: e,
          viewport: t,
          track: i,
          slides: s,
          isHorizontal: n,
          isInfinite: o,
        } = this;
        if (!i) return;
        const a = n ? "width" : "height",
          r = n ? "offsetWidth" : "offsetHeight";
        if (t) {
          let e = Math.max(t[r], ve(t.getBoundingClientRect()[a], 1e3)),
            i = getComputedStyle(t),
            s = "padding",
            o = n ? "Right" : "Bottom";
          (e -= parseFloat(i[s + (n ? "Left" : "Top")]) + parseFloat(i[s + o])),
            (this.viewportDim = e);
        }
        let l,
          c = 0;
        for (const [e, t] of s.entries()) {
          let i = 0,
            n = 0;
          !t.el && l
            ? ((i = l.dim), (n = l.gap))
            : (({ dim: i, gap: n } = this.getSlideMetrics(t)), (l = t)),
            (i = ve(i, 1e3)),
            (n = ve(n, 1e3)),
            (t.dim = i),
            (t.gap = n),
            (t.pos = c),
            (c += i),
            (o || e < s.length - 1) && (c += n);
        }
        (c = ve(c, 1e3)),
          (this.contentDim = c),
          e &&
            ((e.contentRect[a] = c),
            (e.contentRect[n ? "fullWidth" : "fullHeight"] = c)),
          (this.pages = this.createPages()),
          (this.pages = this.processPages()),
          this.state === Je.Init && this.setInitialPage(),
          (this.page = Math.max(0, Math.min(this.page, this.pages.length - 1))),
          this.manageSlideVisiblity(),
          this.emit("refresh");
      }
      getProgress(e, t = !1, i = !1) {
        void 0 === e && (e = this.page);
        const s = this,
          n = s.panzoom,
          o = s.contentDim,
          a = s.pages[e] || 0;
        if (!a || !n) return e > this.page ? -1 : 1;
        let r = -1 * n.current.e,
          l = ve((r - a.pos) / (1 * a.dim), 1e3),
          c = l,
          d = l;
        this.isInfinite &&
          !0 !== i &&
          ((c = ve((r - a.pos + o) / (1 * a.dim), 1e3)),
          (d = ve((r - a.pos - o) / (1 * a.dim), 1e3)));
        let h = [l, c, d].reduce(function (e, t) {
          return Math.abs(t) < Math.abs(e) ? t : e;
        });
        return t ? h : h > 1 ? 1 : h < -1 ? -1 : h;
      }
      setViewportHeight() {
        const { page: e, pages: t, viewport: i, isHorizontal: s } = this;
        if (!i || !t[e]) return;
        let n = 0;
        s &&
          this.track &&
          ((this.track.style.height = "auto"),
          t[e].slides.forEach((e) => {
            e.el && (n = Math.max(n, e.el.offsetHeight));
          })),
          (i.style.height = n ? `${n}px` : "");
      }
      getPageForSlide(e) {
        for (const t of this.pages)
          for (const i of t.slides) if (i.index === e) return t.index;
        return -1;
      }
      getVisibleSlides(e = 0) {
        var t;
        const i = new Set();
        let {
          panzoom: s,
          contentDim: n,
          viewportDim: o,
          pages: a,
          page: r,
        } = this;
        if (o) {
          n =
            n +
              (null === (t = this.slides[this.slides.length - 1]) ||
              void 0 === t
                ? void 0
                : t.gap) || 0;
          let l = 0;
          (l =
            s && s.state !== _e.Init && s.state !== _e.Destroy
              ? -1 * s.current[this.axis]
              : (a[r] && a[r].pos) || 0),
            this.isInfinite && (l -= Math.floor(l / n) * n),
            this.isRTL && this.isHorizontal && (l *= -1);
          const c = l - o * e,
            d = l + o * (e + 1),
            h = this.isInfinite ? [-1, 0, 1] : [0];
          for (const e of this.slides)
            for (const t of h) {
              const s = e.pos + t * n,
                o = s + e.dim + e.gap;
              s < d && o > c && i.add(e);
            }
        }
        return i;
      }
      getPageFromPosition(e) {
        const {
            viewportDim: t,
            contentDim: i,
            slides: s,
            pages: n,
            panzoom: o,
          } = this,
          a = n.length,
          r = s.length,
          l = s[0],
          c = s[r - 1],
          d = this.option("center");
        let h = 0,
          u = 0,
          p = 0,
          f =
            void 0 === e
              ? -1 * ((null == o ? void 0 : o.target[this.axis]) || 0)
              : e;
        d && (f += 0.5 * t),
          this.isInfinite
            ? (f < l.pos - 0.5 * c.gap && ((f -= i), (p = -1)),
              f > c.pos + c.dim + 0.5 * c.gap && ((f -= i), (p = 1)))
            : (f = Math.max(l.pos || 0, Math.min(f, c.pos)));
        let g = c,
          m = s.find((e) => {
            const t = e.pos - 0.5 * g.gap,
              i = e.pos + e.dim + 0.5 * e.gap;
            return (g = e), f >= t && f < i;
          });
        return (
          m || (m = c),
          (u = this.getPageForSlide(m.index)),
          (h = u + p * a),
          { page: h, pageIndex: u }
        );
      }
      setPageFromPosition() {
        const { pageIndex: e } = this.getPageFromPosition();
        this.onChange(e);
      }
      destroy() {
        if ([Je.Destroy].includes(this.state)) return;
        this.state = Je.Destroy;
        const {
            container: e,
            viewport: t,
            track: i,
            slides: s,
            panzoom: n,
          } = this,
          o = this.option("classes");
        e.removeEventListener("click", this.onClick, {
          passive: !1,
          capture: !1,
        }),
          e.removeEventListener("slideTo", this.onSlideTo),
          window.removeEventListener("resize", this.onResize),
          n && (n.destroy(), (this.panzoom = null)),
          s &&
            s.forEach((e) => {
              this.removeSlideEl(e);
            }),
          this.detachPlugins(),
          t &&
            (t.removeEventListener("scroll", this.onScroll),
            t.offsetParent &&
              i &&
              i.offsetParent &&
              t.replaceWith(...i.childNodes));
        for (const [t, i] of Object.entries(o))
          "container" !== t && i && e.classList.remove(i);
        (this.track = null),
          (this.viewport = null),
          (this.page = 0),
          (this.slides = []);
        const a = this.events.get("ready");
        (this.events = new Map()), a && this.events.set("ready", a);
      }
    }
    Object.defineProperty(ut, "Panzoom", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: Ze,
    }),
      Object.defineProperty(ut, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          viewport: null,
          track: null,
          enabled: !0,
          slides: [],
          axis: "x",
          transition: "fade",
          preload: 1,
          slidesPerPage: "auto",
          initialPage: 0,
          friction: 0.12,
          Panzoom: { decelFriction: 0.12 },
          center: !0,
          infinite: !0,
          fill: !0,
          dragFree: !1,
          adaptiveHeight: !1,
          direction: "ltr",
          classes: {
            container: "f-carousel",
            viewport: "f-carousel__viewport",
            track: "f-carousel__track",
            slide: "f-carousel__slide",
            isLTR: "is-ltr",
            isRTL: "is-rtl",
            isHorizontal: "is-horizontal",
            isVertical: "is-vertical",
            inTransition: "in-transition",
            isSelected: "is-selected",
          },
          l10n: {
            NEXT: "Next slide",
            PREV: "Previous slide",
            GOTO: "Go to slide #%d",
          },
        },
      }),
      Object.defineProperty(ut, "Plugins", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: lt,
      });
    const pt = function (e) {
        if (!je(e)) return 0;
        const t = window.scrollY,
          i = window.innerHeight,
          s = t + i,
          n = e.getBoundingClientRect(),
          o = n.y + t,
          a = n.height,
          r = o + a;
        if (t > r || s < o) return 0;
        if (t < o && s > r) return 100;
        if (o < t && r > s) return 100;
        let l = a;
        o < t && (l -= t - o), r > s && (l -= r - s);
        const c = (l / i) * 100;
        return Math.round(c);
      },
      ft = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
    let gt;
    const mt = [
        "a[href]",
        "area[href]",
        'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
        "select:not([disabled]):not([aria-hidden])",
        "textarea:not([disabled]):not([aria-hidden])",
        "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)",
        "iframe",
        "object",
        "embed",
        "video",
        "audio",
        "[contenteditable]",
        '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])',
      ].join(","),
      vt = (e) => {
        if (e && ft) {
          void 0 === gt &&
            document.createElement("div").focus({
              get preventScroll() {
                return (gt = !0), !1;
              },
            });
          try {
            if (gt) e.focus({ preventScroll: !0 });
            else {
              const t = window.scrollY || document.body.scrollTop,
                i = window.scrollX || document.body.scrollLeft;
              e.focus(),
                document.body.scrollTo({ top: t, left: i, behavior: "auto" });
            }
          } catch (e) {}
        }
      },
      bt = () => {
        const e = document;
        let t,
          i = "",
          s = "",
          n = "";
        return (
          e.fullscreenEnabled
            ? ((i = "requestFullscreen"),
              (s = "exitFullscreen"),
              (n = "fullscreenElement"))
            : e.webkitFullscreenEnabled &&
              ((i = "webkitRequestFullscreen"),
              (s = "webkitExitFullscreen"),
              (n = "webkitFullscreenElement")),
          i &&
            (t = {
              request: function (t = e.documentElement) {
                return "webkitRequestFullscreen" === i
                  ? t[i](Element.ALLOW_KEYBOARD_INPUT)
                  : t[i]();
              },
              exit: function () {
                return e[n] && e[s]();
              },
              isFullscreen: function () {
                return e[n];
              },
            }),
          t
        );
      },
      yt = {
        dragToClose: !0,
        hideScrollbar: !0,
        Carousel: {
          classes: {
            container: "fancybox__carousel",
            viewport: "fancybox__viewport",
            track: "fancybox__track",
            slide: "fancybox__slide",
          },
        },
        contentClick: "toggleZoom",
        contentDblClick: !1,
        backdropClick: "close",
        animated: !0,
        idle: 3500,
        showClass: "f-zoomInUp",
        hideClass: "f-fadeOut",
        commonCaption: !1,
        parentEl: null,
        startIndex: 0,
        l10n: Object.assign(Object.assign({}, $e), {
          CLOSE: "Close",
          NEXT: "Next",
          PREV: "Previous",
          MODAL: "You can close this modal content with the ESC key",
          ERROR: "Something Went Wrong, Please Try Again Later",
          IMAGE_ERROR: "Image Not Found",
          ELEMENT_NOT_FOUND: "HTML Element Not Found",
          AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
          AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
          IFRAME_ERROR: "Error Loading Page",
          TOGGLE_ZOOM: "Toggle zoom level",
          TOGGLE_THUMBS: "Toggle thumbnails",
          TOGGLE_SLIDESHOW: "Toggle slideshow",
          TOGGLE_FULLSCREEN: "Toggle full-screen mode",
          DOWNLOAD: "Download",
        }),
        tpl: {
          closeButton:
            '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
          main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>',
        },
        groupAll: !1,
        groupAttr: "data-fancybox",
        defaultType: "image",
        defaultDisplay: "block",
        autoFocus: !0,
        trapFocus: !0,
        placeFocusBack: !0,
        closeButton: "auto",
        keyboard: {
          Escape: "close",
          Delete: "close",
          Backspace: "close",
          PageUp: "next",
          PageDown: "prev",
          ArrowUp: "prev",
          ArrowDown: "next",
          ArrowRight: "next",
          ArrowLeft: "prev",
        },
        Fullscreen: { autoStart: !1 },
        compact: () =>
          window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
        wheel: "zoom",
      };
    var wt, St;
    !(function (e) {
      (e[(e.Init = 0)] = "Init"),
        (e[(e.Ready = 1)] = "Ready"),
        (e[(e.Closing = 2)] = "Closing"),
        (e[(e.CustomClosing = 3)] = "CustomClosing"),
        (e[(e.Destroy = 4)] = "Destroy");
    })(wt || (wt = {})),
      (function (e) {
        (e[(e.Loading = 0)] = "Loading"),
          (e[(e.Opening = 1)] = "Opening"),
          (e[(e.Ready = 2)] = "Ready"),
          (e[(e.Closing = 3)] = "Closing");
      })(St || (St = {}));
    let xt = "",
      Et = !1,
      Ct = !1,
      Tt = null;
    const Pt = () => {
        let e = "",
          t = "";
        const i = Ri.getInstance();
        if (i) {
          const s = i.carousel,
            n = i.getSlide();
          if (s && n) {
            let o = n.slug || void 0,
              a = n.triggerEl || void 0;
            (t = o || i.option("slug") || ""),
              !t && a && a.dataset && (t = a.dataset.fancybox || ""),
              t &&
                "true" !== t &&
                (e =
                  "#" +
                  t +
                  (!o && s.slides.length > 1 ? "-" + (n.index + 1) : ""));
          }
        }
        return { hash: e, slug: t, index: 1 };
      },
      Mt = () => {
        const e = new URL(document.URL).hash,
          t = e.slice(1).split("-"),
          i = t[t.length - 1],
          s = (i && /^\+?\d+$/.test(i) && parseInt(t.pop() || "1", 10)) || 1;
        return { hash: e, slug: t.join("-"), index: s };
      },
      Ot = () => {
        const { slug: e, index: t } = Mt();
        if (!e) return;
        let i = document.querySelector(`[data-slug="${e}"]`);
        if (
          (i &&
            i.dispatchEvent(
              new CustomEvent("click", { bubbles: !0, cancelable: !0 })
            ),
          Ri.getInstance())
        )
          return;
        const s = document.querySelectorAll(`[data-fancybox="${e}"]`);
        s.length &&
          ((i = s[t - 1]),
          i &&
            i.dispatchEvent(
              new CustomEvent("click", { bubbles: !0, cancelable: !0 })
            ));
      },
      Lt = () => {
        if (!1 === Ri.defaults.Hash) return;
        const e = Ri.getInstance();
        if (!1 === (null == e ? void 0 : e.options.Hash)) return;
        const { slug: t, index: i } = Mt(),
          { slug: s } = Pt();
        e && (t === s ? e.jumpTo(i - 1) : ((Et = !0), e.close())), Ot();
      },
      At = () => {
        Tt && clearTimeout(Tt),
          queueMicrotask(() => {
            Lt();
          });
      },
      kt = () => {
        window.addEventListener("hashchange", At, !1),
          setTimeout(() => {
            Lt();
          }, 500);
      };
    ft &&
      (/complete|interactive|loaded/.test(document.readyState)
        ? kt()
        : document.addEventListener("DOMContentLoaded", kt));
    const It = "is-zooming-in";
    class _t extends tt {
      onCreateSlide(e, t, i) {
        const s = this.instance.optionFor(i, "src") || "";
        i.el &&
          "image" === i.type &&
          "string" == typeof s &&
          this.setImage(i, s);
      }
      onRemoveSlide(e, t, i) {
        i.panzoom && i.panzoom.destroy(),
          (i.panzoom = void 0),
          (i.imageEl = void 0);
      }
      onChange(e, t, i, s) {
        Be(this.instance.container, It);
        for (const e of t.slides) {
          const t = e.panzoom;
          t && e.index !== i && t.reset(0.35);
        }
      }
      onClose() {
        var e;
        const t = this.instance,
          i = t.container,
          s = t.getSlide();
        if (!i || !i.parentElement || !s) return;
        const { el: n, contentEl: o, panzoom: a, thumbElSrc: r } = s;
        if (
          !n ||
          !r ||
          !o ||
          !a ||
          a.isContentLoading ||
          a.state === _e.Init ||
          a.state === _e.Destroy
        )
          return;
        a.updateMetrics();
        let l = this.getZoomInfo(s);
        if (!l) return;
        (this.instance.state = wt.CustomClosing),
          i.classList.remove(It),
          i.classList.add("is-zooming-out"),
          (o.style.backgroundImage = `url('${r}')`);
        const c = i.getBoundingClientRect();
        1 ===
          ((null === (e = window.visualViewport) || void 0 === e
            ? void 0
            : e.scale) || 1) &&
          Object.assign(i.style, {
            position: "absolute",
            top: `${i.offsetTop + window.scrollY}px`,
            left: `${i.offsetLeft + window.scrollX}px`,
            bottom: "auto",
            right: "auto",
            width: `${c.width}px`,
            height: `${c.height}px`,
            overflow: "hidden",
          });
        const { x: d, y: h, scale: u, opacity: p } = l;
        if (p) {
          const e = ((e, t, i, s) => {
            const n = t - e;
            return (t) => 1 + (((t - e) / n) * -1 || 0);
          })(a.scale, u);
          a.on("afterTransform", () => {
            o.style.opacity = e(a.scale) + "";
          });
        }
        a.on("endAnimation", () => {
          t.destroy();
        }),
          (a.target.a = u),
          (a.target.b = 0),
          (a.target.c = 0),
          (a.target.d = u),
          a.panTo({
            x: d,
            y: h,
            scale: u,
            friction: p ? 0.2 : 0.33,
            ignoreBounds: !0,
          }),
          a.isResting && t.destroy();
      }
      setImage(e, t) {
        const i = this.instance;
        (e.src = t),
          this.process(e, t).then(
            (t) => {
              const { contentEl: s, imageEl: n, thumbElSrc: o, el: a } = e;
              if (i.isClosing() || !s || !n) return;
              s.offsetHeight;
              const r = !!i.isOpeningSlide(e) && this.getZoomInfo(e);
              if (this.option("protected") && a) {
                a.addEventListener("contextmenu", (e) => {
                  e.preventDefault();
                });
                const e = document.createElement("div");
                Ne(e, "fancybox-protected"), s.appendChild(e);
              }
              if (o && r) {
                const n = t.contentRect,
                  a = Math.max(n.fullWidth, n.fullHeight);
                let c = null;
                !r.opacity &&
                  a > 1200 &&
                  ((c = document.createElement("img")),
                  Ne(c, "fancybox-ghost"),
                  (c.src = o),
                  s.appendChild(c));
                const d = () => {
                  c &&
                    (Ne(c, "f-fadeFastOut"),
                    setTimeout(() => {
                      c && (c.remove(), (c = null));
                    }, 200));
                };
                ((l = o),
                new Promise((e, t) => {
                  const i = new Image();
                  (i.onload = e), (i.onerror = t), (i.src = l);
                })).then(
                  () => {
                    i.hideLoading(e),
                      (e.state = St.Opening),
                      this.instance.emit("reveal", e),
                      this.zoomIn(e).then(
                        () => {
                          d(), this.instance.done(e);
                        },
                        () => {}
                      ),
                      c &&
                        setTimeout(
                          () => {
                            d();
                          },
                          a > 2500 ? 800 : 200
                        );
                  },
                  () => {
                    i.hideLoading(e), i.revealContent(e);
                  }
                );
              } else {
                const s = this.optionFor(e, "initialSize"),
                  n = this.optionFor(e, "zoom"),
                  o = {
                    event: i.prevMouseMoveEvent || i.options.event,
                    friction: n ? 0.12 : 0,
                  };
                let a = i.optionFor(e, "showClass") || void 0,
                  r = !0;
                i.isOpeningSlide(e) &&
                  ("full" === s
                    ? t.zoomToFull(o)
                    : "cover" === s
                    ? t.zoomToCover(o)
                    : "max" === s
                    ? t.zoomToMax(o)
                    : (r = !1),
                  t.stop("current")),
                  r && a && (a = t.isDragging ? "f-fadeIn" : ""),
                  i.hideLoading(e),
                  i.revealContent(e, a);
              }
              var l;
            },
            () => {
              i.setError(e, "{{IMAGE_ERROR}}");
            }
          );
      }
      process(e, t) {
        return new Promise((i, s) => {
          var n;
          const o = this.instance,
            a = e.el;
          o.clearContent(e), o.showLoading(e);
          let r = this.optionFor(e, "content");
          if (("string" == typeof r && (r = we(r)), !r || !je(r))) {
            if (
              ((r = document.createElement("img")),
              r instanceof HTMLImageElement)
            ) {
              let i = "",
                s = e.caption;
              (i =
                "string" == typeof s && s
                  ? s.replace(/<[^>]+>/gi, "").substring(0, 1e3)
                  : `Image ${e.index + 1} of ${
                      (null === (n = o.carousel) || void 0 === n
                        ? void 0
                        : n.pages.length) || 1
                    }`),
                (r.src = t || ""),
                (r.alt = i),
                (r.draggable = !1),
                e.srcset && r.setAttribute("srcset", e.srcset),
                this.instance.isOpeningSlide(e) && (r.fetchPriority = "high");
            }
            e.sizes && r.setAttribute("sizes", e.sizes);
          }
          Ne(r, "fancybox-image"),
            (e.imageEl = r),
            o.setContent(e, r, !1),
            (e.panzoom = new Ze(
              a,
              Le({ transformParent: !0 }, this.option("Panzoom") || {}, {
                content: r,
                width: o.optionFor(e, "width", "auto"),
                height: o.optionFor(e, "height", "auto"),
                wheel: () => {
                  const e = o.option("wheel");
                  return ("zoom" === e || "pan" == e) && e;
                },
                click: (t, i) => {
                  var s, n;
                  if (o.isCompact || o.isClosing()) return !1;
                  if (
                    e.index !==
                    (null === (s = o.getSlide()) || void 0 === s
                      ? void 0
                      : s.index)
                  )
                    return !1;
                  if (i) {
                    const e = i.composedPath()[0];
                    if (
                      [
                        "A",
                        "BUTTON",
                        "TEXTAREA",
                        "OPTION",
                        "INPUT",
                        "SELECT",
                        "VIDEO",
                      ].includes(e.nodeName)
                    )
                      return !1;
                  }
                  let a =
                    !i ||
                    (i.target &&
                      (null === (n = e.contentEl) || void 0 === n
                        ? void 0
                        : n.contains(i.target)));
                  return o.option(a ? "contentClick" : "backdropClick") || !1;
                },
                dblClick: () =>
                  o.isCompact
                    ? "toggleZoom"
                    : o.option("contentDblClick") || !1,
                spinner: !1,
                panOnlyZoomed: !0,
                wheelLimit: 1 / 0,
                on: {
                  ready: (e) => {
                    i(e);
                  },
                  error: () => {
                    s();
                  },
                  destroy: () => {
                    s();
                  },
                },
              })
            ));
        });
      }
      zoomIn(e) {
        return new Promise((t, i) => {
          const s = this.instance,
            n = s.container,
            { panzoom: o, contentEl: a, el: r } = e;
          o && o.updateMetrics();
          const l = this.getZoomInfo(e);
          if (!(l && r && a && o && n)) return void i();
          const { x: c, y: d, scale: h, opacity: u } = l,
            p = () => {
              e.state !== St.Closing &&
                (u &&
                  (a.style.opacity =
                    Math.max(Math.min(1, 1 - (1 - o.scale) / (1 - h)), 0) + ""),
                o.scale >= 1 && o.scale > o.targetScale - 0.1 && t(o));
            },
            f = (e) => {
              ((e.scale < 0.99 || e.scale > 1.01) && !e.isDragging) ||
                (Be(n, It),
                (a.style.opacity = ""),
                e.off("endAnimation", f),
                e.off("touchStart", f),
                e.off("afterTransform", p),
                t(e));
            };
          o.on("endAnimation", f),
            o.on("touchStart", f),
            o.on("afterTransform", p),
            o.on(["error", "destroy"], () => {
              i();
            }),
            o.panTo({ x: c, y: d, scale: h, friction: 0, ignoreBounds: !0 }),
            o.stop("current");
          const g = {
              event:
                "mousemove" === o.panMode
                  ? s.prevMouseMoveEvent || s.options.event
                  : void 0,
            },
            m = this.optionFor(e, "initialSize");
          Ne(n, It),
            s.hideLoading(e),
            "full" === m
              ? o.zoomToFull(g)
              : "cover" === m
              ? o.zoomToCover(g)
              : "max" === m
              ? o.zoomToMax(g)
              : o.reset(0.172);
        });
      }
      getZoomInfo(e) {
        const { el: t, imageEl: i, thumbEl: s, panzoom: n } = e,
          o = this.instance,
          a = o.container;
        if (
          !t ||
          !i ||
          !s ||
          !n ||
          pt(s) < 3 ||
          !this.optionFor(e, "zoom") ||
          !a ||
          o.state === wt.Destroy
        )
          return !1;
        if ("0" === getComputedStyle(a).getPropertyValue("--f-images-zoom"))
          return !1;
        const r = window.visualViewport || null;
        if (1 !== (r ? r.scale : 1)) return !1;
        let {
            top: l,
            left: c,
            width: d,
            height: h,
          } = s.getBoundingClientRect(),
          { top: u, left: p, fitWidth: f, fitHeight: g } = n.contentRect;
        if (!(d && h && f && g)) return !1;
        const m = n.container.getBoundingClientRect();
        (p += m.left), (u += m.top);
        const v = -1 * (p + 0.5 * f - (c + 0.5 * d)),
          b = -1 * (u + 0.5 * g - (l + 0.5 * h)),
          y = d / f;
        let w = this.option("zoomOpacity") || !1;
        return (
          "auto" === w && (w = Math.abs(d / h - f / g) > 0.1),
          { x: v, y: b, scale: y, opacity: w }
        );
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("Carousel.change", e.onChange),
          t.on("Carousel.createSlide", e.onCreateSlide),
          t.on("Carousel.removeSlide", e.onRemoveSlide),
          t.on("close", e.onClose);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("Carousel.change", e.onChange),
          t.off("Carousel.createSlide", e.onCreateSlide),
          t.off("Carousel.removeSlide", e.onRemoveSlide),
          t.off("close", e.onClose);
      }
    }
    Object.defineProperty(_t, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        initialSize: "fit",
        Panzoom: { maxScale: 1 },
        protected: !1,
        zoom: !0,
        zoomOpacity: "auto",
      },
    }),
      "function" == typeof SuppressedError && SuppressedError;
    const zt = "html",
      $t = "image",
      Dt = "map",
      Rt = "youtube",
      Ft = "vimeo",
      jt = "html5video",
      Bt = (e, t = {}) => {
        const i = new URL(e),
          s = new URLSearchParams(i.search),
          n = new URLSearchParams();
        for (const [e, i] of [...s, ...Object.entries(t)]) {
          let t = i + "";
          if ("t" === e) {
            let e = t.match(/((\d*)m)?(\d*)s?/);
            e &&
              n.set(
                "start",
                60 * parseInt(e[2] || "0") + parseInt(e[3] || "0") + ""
              );
          } else n.set(e, t);
        }
        let o = n + "",
          a = e.match(/#t=((.*)?\d+s)/);
        return a && (o += `#t=${a[1]}`), o;
      },
      Nt = [
        "image",
        "html",
        "ajax",
        "inline",
        "clone",
        "iframe",
        "map",
        "pdf",
        "html5video",
        "youtube",
        "vimeo",
      ];
    class Ht extends tt {
      onBeforeInitSlide(e, t, i) {
        this.processType(i);
      }
      onCreateSlide(e, t, i) {
        this.setContent(i);
      }
      onClearContent(e, t) {
        t.xhr && (t.xhr.abort(), (t.xhr = null));
        const i = t.iframeEl;
        i &&
          ((i.onload = i.onerror = null),
          (i.src = "//about:blank"),
          (t.iframeEl = null));
        const s = t.contentEl,
          n = t.placeholderEl;
        if ("inline" === t.type && s && n)
          s.classList.remove("fancybox__content"),
            "none" !== s.style.display && (s.style.display = "none"),
            n.parentNode && n.parentNode.insertBefore(s, n),
            n.remove(),
            (t.contentEl = void 0),
            (t.placeholderEl = void 0);
        else
          for (; t.el && t.el.firstChild; ) t.el.removeChild(t.el.firstChild);
      }
      onSelectSlide(e, t, i) {
        i.state === St.Ready && this.playVideo();
      }
      onUnselectSlide(e, t, i) {
        var s, n;
        if (i.type === jt) {
          try {
            null ===
              (n =
                null === (s = i.el) || void 0 === s
                  ? void 0
                  : s.querySelector("video")) ||
              void 0 === n ||
              n.pause();
          } catch (e) {}
          return;
        }
        let o;
        i.type === Ft
          ? (o = { method: "pause", value: "true" })
          : i.type === Rt && (o = { event: "command", func: "pauseVideo" }),
          o &&
            i.iframeEl &&
            i.iframeEl.contentWindow &&
            i.iframeEl.contentWindow.postMessage(JSON.stringify(o), "*"),
          i.poller && clearTimeout(i.poller);
      }
      onDone(e, t) {
        e.isCurrentSlide(t) && !e.isClosing() && this.playVideo();
      }
      onRefresh(e, t) {
        t.slides.forEach((e) => {
          e.el && (this.resizeIframe(e), this.setAspectRatio(e));
        });
      }
      onMessage(e) {
        try {
          let t = JSON.parse(e.data);
          if ("https://player.vimeo.com" === e.origin) {
            if ("ready" === t.event)
              for (let t of Array.from(
                document.getElementsByClassName("fancybox__iframe")
              ))
                t instanceof HTMLIFrameElement &&
                  t.contentWindow === e.source &&
                  (t.dataset.ready = "true");
          } else if (
            e.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) &&
            "onReady" === t.event
          ) {
            const e = document.getElementById(t.id);
            e && (e.dataset.ready = "true");
          }
        } catch (e) {}
      }
      loadAjaxContent(e) {
        const t = this.instance.optionFor(e, "src") || "";
        this.instance.showLoading(e);
        const i = this.instance,
          s = new XMLHttpRequest();
        i.showLoading(e),
          (s.onreadystatechange = function () {
            s.readyState === XMLHttpRequest.DONE &&
              i.state === wt.Ready &&
              (i.hideLoading(e),
              200 === s.status
                ? i.setContent(e, s.responseText)
                : i.setError(
                    e,
                    404 === s.status
                      ? "{{AJAX_NOT_FOUND}}"
                      : "{{AJAX_FORBIDDEN}}"
                  ));
          });
        const n = e.ajax || null;
        s.open(n ? "POST" : "GET", t + ""),
          s.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          ),
          s.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
          s.send(n),
          (e.xhr = s);
      }
      setInlineContent(e) {
        let t = null;
        if (je(e.src)) t = e.src;
        else if ("string" == typeof e.src) {
          const i = e.src.split("#", 2).pop();
          t = i ? document.getElementById(i) : null;
        }
        if (t) {
          if ("clone" === e.type || t.closest(".fancybox__slide")) {
            t = t.cloneNode(!0);
            const i = t.dataset.animationName;
            i && (t.classList.remove(i), delete t.dataset.animationName);
            let s = t.getAttribute("id");
            (s = s ? `${s}--clone` : `clone-${this.instance.id}-${e.index}`),
              t.setAttribute("id", s);
          } else if (t.parentNode) {
            const i = document.createElement("div");
            i.classList.add("fancybox-placeholder"),
              t.parentNode.insertBefore(i, t),
              (e.placeholderEl = i);
          }
          this.instance.setContent(e, t);
        } else this.instance.setError(e, "{{ELEMENT_NOT_FOUND}}");
      }
      setIframeContent(e) {
        const { src: t, el: i } = e;
        if (!t || "string" != typeof t || !i) return;
        i.classList.add("is-loading");
        const s = this.instance,
          n = document.createElement("iframe");
        (n.className = "fancybox__iframe"),
          n.setAttribute("id", `fancybox__iframe_${s.id}_${e.index}`);
        for (const [t, i] of Object.entries(
          this.optionFor(e, "iframeAttr") || {}
        ))
          n.setAttribute(t, i);
        (n.onerror = () => {
          s.setError(e, "{{IFRAME_ERROR}}");
        }),
          (e.iframeEl = n);
        const o = this.optionFor(e, "preload");
        if ("iframe" !== e.type || !1 === o)
          return (
            n.setAttribute("src", e.src + ""),
            s.setContent(e, n, !1),
            this.resizeIframe(e),
            void s.revealContent(e)
          );
        s.showLoading(e),
          (n.onload = () => {
            if (!n.src.length) return;
            const t = "true" !== n.dataset.ready;
            (n.dataset.ready = "true"),
              this.resizeIframe(e),
              t ? s.revealContent(e) : s.hideLoading(e);
          }),
          n.setAttribute("src", t),
          s.setContent(e, n, !1);
      }
      resizeIframe(e) {
        const { type: t, iframeEl: i } = e;
        if (t === Rt || t === Ft) return;
        const s = null == i ? void 0 : i.parentElement;
        if (!i || !s) return;
        let n = e.autoSize;
        void 0 === n && (n = this.optionFor(e, "autoSize"));
        let o = e.width || 0,
          a = e.height || 0;
        o && a && (n = !1);
        const r = s && s.style;
        if (!1 !== e.preload && !1 !== n && r)
          try {
            const e = window.getComputedStyle(s),
              t = parseFloat(e.paddingLeft) + parseFloat(e.paddingRight),
              n = parseFloat(e.paddingTop) + parseFloat(e.paddingBottom),
              l = i.contentWindow;
            if (l) {
              const e = l.document,
                i = e.getElementsByTagName(zt)[0],
                s = e.body;
              (r.width = ""),
                (s.style.overflow = "hidden"),
                (o = o || i.scrollWidth + t),
                (r.width = `${o}px`),
                (s.style.overflow = ""),
                (r.flex = "0 0 auto"),
                (r.height = `${s.scrollHeight}px`),
                (a = i.scrollHeight + n);
            }
          } catch (e) {}
        if (o || a) {
          const e = { flex: "0 1 auto", width: "", height: "" };
          o && "auto" !== o && (e.width = `${o}px`),
            a && "auto" !== a && (e.height = `${a}px`),
            Object.assign(r, e);
        }
      }
      playVideo() {
        const e = this.instance.getSlide();
        if (!e) return;
        const { el: t } = e;
        if (!t || !t.offsetParent) return;
        if (!this.optionFor(e, "videoAutoplay")) return;
        if (e.type === jt)
          try {
            const e = t.querySelector("video");
            if (e) {
              const t = e.play();
              void 0 !== t &&
                t
                  .then(() => {})
                  .catch((t) => {
                    (e.muted = !0), e.play();
                  });
            }
          } catch (e) {}
        if (e.type !== Rt && e.type !== Ft) return;
        const i = () => {
          if (e.iframeEl && e.iframeEl.contentWindow) {
            let t;
            if ("true" === e.iframeEl.dataset.ready)
              return (
                (t =
                  e.type === Rt
                    ? { event: "command", func: "playVideo" }
                    : { method: "play", value: "true" }),
                t &&
                  e.iframeEl.contentWindow.postMessage(JSON.stringify(t), "*"),
                void (e.poller = void 0)
              );
            e.type === Rt &&
              ((t = { event: "listening", id: e.iframeEl.getAttribute("id") }),
              e.iframeEl.contentWindow.postMessage(JSON.stringify(t), "*"));
          }
          e.poller = setTimeout(i, 250);
        };
        i();
      }
      processType(e) {
        if (e.html) return (e.type = zt), (e.src = e.html), void (e.html = "");
        const t = this.instance.optionFor(e, "src", "");
        if (!t || "string" != typeof t) return;
        let i = e.type,
          s = null;
        if (
          (s = t.match(
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i
          ))
        ) {
          const n = this.optionFor(e, Rt),
            { nocookie: o } = n,
            a = (function (e, t) {
              var i = {};
              for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) &&
                  t.indexOf(s) < 0 &&
                  (i[s] = e[s]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var n = 0;
                for (s = Object.getOwnPropertySymbols(e); n < s.length; n++)
                  t.indexOf(s[n]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, s[n]) &&
                    (i[s[n]] = e[s[n]]);
              }
              return i;
            })(n, ["nocookie"]),
            r = `www.youtube${o ? "-nocookie" : ""}.com`,
            l = Bt(t, a),
            c = encodeURIComponent(s[2]);
          (e.videoId = c),
            (e.src = `https://${r}/embed/${c}?${l}`),
            (e.thumbSrc =
              e.thumbSrc || `https://i.ytimg.com/vi/${c}/mqdefault.jpg`),
            (i = Rt);
        } else if (
          (s = t.match(
            /^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/
          ))
        ) {
          const n = Bt(t, this.optionFor(e, Ft)),
            o = encodeURIComponent(s[1]),
            a = s[4] || "";
          (e.videoId = o),
            (e.src = `https://player.vimeo.com/video/${o}?${
              a ? `h=${a}${n ? "&" : ""}` : ""
            }${n}`),
            (i = Ft);
        }
        if (!i && e.triggerEl) {
          const t = e.triggerEl.dataset.type;
          Nt.includes(t) && (i = t);
        }
        i ||
          ("string" == typeof t &&
            ("#" === t.charAt(0)
              ? (i = "inline")
              : (s = t.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
              ? ((i = jt),
                (e.videoFormat =
                  e.videoFormat || "video/" + ("ogv" === s[1] ? "ogg" : s[1])))
              : t.match(
                  /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                )
              ? (i = $t)
              : t.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf"))),
          (s = t.match(
            /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i
          ))
            ? ((e.src = `https://maps.google.${s[1]}/?ll=${(s[2]
                ? s[2] +
                  "&z=" +
                  Math.floor(parseFloat(s[3])) +
                  (s[4] ? s[4].replace(/^\//, "&") : "")
                : s[4] + ""
              ).replace(/\?/, "&")}&output=${
                s[4] && s[4].indexOf("layer=c") > 0 ? "svembed" : "embed"
              }`),
              (i = Dt))
            : (s = t.match(
                /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i
              )) &&
              ((e.src = `https://maps.google.${s[1]}/maps?q=${s[2]
                .replace("query=", "q=")
                .replace("api=1", "")}&output=embed`),
              (i = Dt)),
          (i = i || this.instance.option("defaultType")),
          (e.type = i),
          i === $t && (e.thumbSrc = e.thumbSrc || e.src);
      }
      setContent(e) {
        const t = this.instance.optionFor(e, "src") || "";
        if (e && e.type && t) {
          switch (e.type) {
            case zt:
              this.instance.setContent(e, t);
              break;
            case jt:
              const i = this.option("videoTpl");
              i &&
                this.instance.setContent(
                  e,
                  i
                    .replace(/\{\{src\}\}/gi, t + "")
                    .replace(
                      /\{\{format\}\}/gi,
                      this.optionFor(e, "videoFormat") || ""
                    )
                    .replace(/\{\{poster\}\}/gi, e.poster || e.thumbSrc || "")
                );
              break;
            case "inline":
            case "clone":
              this.setInlineContent(e);
              break;
            case "ajax":
              this.loadAjaxContent(e);
              break;
            case "pdf":
            case Dt:
            case Rt:
            case Ft:
              e.preload = !1;
            case "iframe":
              this.setIframeContent(e);
          }
          this.setAspectRatio(e);
        }
      }
      setAspectRatio(e) {
        const t = e.contentEl;
        if (!(e.el && t && e.type && [Rt, Ft, jt].includes(e.type))) return;
        let i,
          s = e.width || "auto",
          n = e.height || "auto";
        if ("auto" === s || "auto" === n) {
          i = this.optionFor(e, "videoRatio");
          const t = (i + "").match(/(\d+)\s*\/\s?(\d+)/);
          i =
            t && t.length > 2
              ? parseFloat(t[1]) / parseFloat(t[2])
              : parseFloat(i + "");
        } else s && n && (i = s / n);
        if (!i) return;
        (t.style.aspectRatio = ""),
          (t.style.width = ""),
          (t.style.height = ""),
          t.offsetHeight;
        const o = t.getBoundingClientRect(),
          a = o.width || 1,
          r = o.height || 1;
        (t.style.aspectRatio = i + ""),
          i < a / r
            ? ((n = "auto" === n ? r : Math.min(r, n)),
              (t.style.width = "auto"),
              (t.style.height = `${n}px`))
            : ((s = "auto" === s ? a : Math.min(a, s)),
              (t.style.width = `${s}px`),
              (t.style.height = "auto"));
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("Carousel.beforeInitSlide", e.onBeforeInitSlide),
          t.on("Carousel.createSlide", e.onCreateSlide),
          t.on("Carousel.selectSlide", e.onSelectSlide),
          t.on("Carousel.unselectSlide", e.onUnselectSlide),
          t.on("Carousel.Panzoom.refresh", e.onRefresh),
          t.on("done", e.onDone),
          t.on("clearContent", e.onClearContent),
          window.addEventListener("message", e.onMessage);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("Carousel.beforeInitSlide", e.onBeforeInitSlide),
          t.off("Carousel.createSlide", e.onCreateSlide),
          t.off("Carousel.selectSlide", e.onSelectSlide),
          t.off("Carousel.unselectSlide", e.onUnselectSlide),
          t.off("Carousel.Panzoom.refresh", e.onRefresh),
          t.off("done", e.onDone),
          t.off("clearContent", e.onClearContent),
          window.removeEventListener("message", e.onMessage);
      }
    }
    Object.defineProperty(Ht, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        ajax: null,
        autoSize: !0,
        iframeAttr: { allow: "autoplay; fullscreen", scrolling: "auto" },
        preload: !0,
        videoAutoplay: !0,
        videoRatio: 16 / 9,
        videoTpl:
          '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
        videoFormat: "",
        vimeo: { byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0 },
        youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 },
      },
    });
    const qt = "play",
      Wt = "pause",
      Gt = "ready";
    class Vt extends tt {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Gt,
          }),
          Object.defineProperty(this, "inHover", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "timer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "progressBar", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          });
      }
      get isActive() {
        return this.state !== Gt;
      }
      onReady(e) {
        this.option("autoStart") &&
          (e.isInfinite || e.page < e.pages.length - 1) &&
          this.start();
      }
      onChange() {
        this.removeProgressBar(), this.pause();
      }
      onSettle() {
        this.resume();
      }
      onVisibilityChange() {
        "visible" === document.visibilityState ? this.resume() : this.pause();
      }
      onMouseEnter() {
        (this.inHover = !0), this.pause();
      }
      onMouseLeave() {
        var e;
        (this.inHover = !1),
          (null === (e = this.instance.panzoom) || void 0 === e
            ? void 0
            : e.isResting) && this.resume();
      }
      onTimerEnd() {
        const e = this.instance;
        "play" === this.state &&
          (e.isInfinite || e.page !== e.pages.length - 1
            ? e.slideNext()
            : e.slideTo(0));
      }
      removeProgressBar() {
        this.progressBar &&
          (this.progressBar.remove(), (this.progressBar = null));
      }
      createProgressBar() {
        var e;
        if (!this.option("showProgress")) return null;
        this.removeProgressBar();
        const t = this.instance,
          i =
            (null === (e = t.pages[t.page]) || void 0 === e
              ? void 0
              : e.slides) || [];
        let s = this.option("progressParentEl");
        if ((s || (s = (1 === i.length ? i[0].el : null) || t.viewport), !s))
          return null;
        const n = document.createElement("div");
        return (
          Ne(n, "f-progress"),
          s.prepend(n),
          (this.progressBar = n),
          n.offsetHeight,
          n
        );
      }
      set() {
        const e = this,
          t = e.instance;
        if (t.pages.length < 2) return;
        if (e.timer) return;
        const i = e.option("timeout");
        (e.state = qt), Ne(t.container, "has-autoplay");
        let s = e.createProgressBar();
        s &&
          ((s.style.transitionDuration = `${i}ms`),
          (s.style.transform = "scaleX(1)")),
          (e.timer = setTimeout(() => {
            (e.timer = null), e.inHover || e.onTimerEnd();
          }, i)),
          e.emit("set");
      }
      clear() {
        const e = this;
        e.timer && (clearTimeout(e.timer), (e.timer = null)),
          e.removeProgressBar();
      }
      start() {
        const e = this;
        if ((e.set(), e.state !== Gt)) {
          if (e.option("pauseOnHover")) {
            const t = e.instance.container;
            t.addEventListener("mouseenter", e.onMouseEnter, !1),
              t.addEventListener("mouseleave", e.onMouseLeave, !1);
          }
          document.addEventListener(
            "visibilitychange",
            e.onVisibilityChange,
            !1
          ),
            e.emit("start");
        }
      }
      stop() {
        const e = this,
          t = e.state,
          i = e.instance.container;
        e.clear(),
          (e.state = Gt),
          i.removeEventListener("mouseenter", e.onMouseEnter, !1),
          i.removeEventListener("mouseleave", e.onMouseLeave, !1),
          document.removeEventListener(
            "visibilitychange",
            e.onVisibilityChange,
            !1
          ),
          Be(i, "has-autoplay"),
          t !== Gt && e.emit("stop");
      }
      pause() {
        const e = this;
        e.state === qt && ((e.state = Wt), e.clear(), e.emit(Wt));
      }
      resume() {
        const e = this,
          t = e.instance;
        if (t.isInfinite || t.page !== t.pages.length - 1)
          if (e.state !== qt) {
            if (e.state === Wt && !e.inHover) {
              const t = new Event("resume", { bubbles: !0, cancelable: !0 });
              e.emit("resume", t), t.defaultPrevented || e.set();
            }
          } else e.set();
        else e.stop();
      }
      toggle() {
        this.state === qt || this.state === Wt ? this.stop() : this.start();
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("ready", e.onReady),
          t.on("Panzoom.startAnimation", e.onChange),
          t.on("Panzoom.endAnimation", e.onSettle),
          t.on("Panzoom.touchMove", e.onChange);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("ready", e.onReady),
          t.off("Panzoom.startAnimation", e.onChange),
          t.off("Panzoom.endAnimation", e.onSettle),
          t.off("Panzoom.touchMove", e.onChange),
          e.stop();
      }
    }
    Object.defineProperty(Vt, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        autoStart: !0,
        pauseOnHover: !0,
        progressParentEl: null,
        showProgress: !0,
        timeout: 3e3,
      },
    });
    class Xt extends tt {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "ref", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          });
      }
      onPrepare(e) {
        const t = e.carousel;
        if (!t) return;
        const i = e.container;
        i &&
          ((t.options.Autoplay = Le(
            { autoStart: !1 },
            this.option("Autoplay") || {},
            {
              pauseOnHover: !1,
              timeout: this.option("timeout"),
              progressParentEl: () => this.option("progressParentEl") || null,
              on: {
                start: () => {
                  e.emit("startSlideshow");
                },
                set: (t) => {
                  var s;
                  i.classList.add("has-slideshow"),
                    (null === (s = e.getSlide()) || void 0 === s
                      ? void 0
                      : s.state) !== St.Ready && t.pause();
                },
                stop: () => {
                  i.classList.remove("has-slideshow"),
                    e.isCompact || e.endIdle(),
                    e.emit("endSlideshow");
                },
                resume: (t, i) => {
                  var s, n, o;
                  !i ||
                    !i.cancelable ||
                    ((null === (s = e.getSlide()) || void 0 === s
                      ? void 0
                      : s.state) === St.Ready &&
                      (null ===
                        (o =
                          null === (n = e.carousel) || void 0 === n
                            ? void 0
                            : n.panzoom) || void 0 === o
                        ? void 0
                        : o.isResting)) ||
                    i.preventDefault();
                },
              },
            }
          )),
          t.attachPlugins({ Autoplay: Vt }),
          (this.ref = t.plugins.Autoplay));
      }
      onReady(e) {
        const t = e.carousel,
          i = this.ref;
        i &&
          t &&
          this.option("playOnStart") &&
          (t.isInfinite || t.page < t.pages.length - 1) &&
          i.start();
      }
      onDone(e, t) {
        const i = this.ref,
          s = e.carousel;
        if (!i || !s) return;
        const n = t.panzoom;
        n &&
          n.on("startAnimation", () => {
            e.isCurrentSlide(t) && i.stop();
          }),
          e.isCurrentSlide(t) && i.resume();
      }
      onKeydown(e, t) {
        var i;
        const s = this.ref;
        s &&
          t === this.option("key") &&
          "BUTTON" !==
            (null === (i = document.activeElement) || void 0 === i
              ? void 0
              : i.nodeName) &&
          s.toggle();
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("Carousel.init", e.onPrepare),
          t.on("Carousel.ready", e.onReady),
          t.on("done", e.onDone),
          t.on("keydown", e.onKeydown);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("Carousel.init", e.onPrepare),
          t.off("Carousel.ready", e.onReady),
          t.off("done", e.onDone),
          t.off("keydown", e.onKeydown);
      }
    }
    Object.defineProperty(Xt, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        key: " ",
        playOnStart: !1,
        progressParentEl: (e) => {
          var t;
          return (
            (null === (t = e.instance.container) || void 0 === t
              ? void 0
              : t.querySelector(
                  ".fancybox__toolbar [data-fancybox-toggle-slideshow]"
                )) || e.instance.container
          );
        },
        timeout: 3e3,
      },
    });
    const Yt = {
      classes: {
        container: "f-thumbs f-carousel__thumbs",
        viewport: "f-thumbs__viewport",
        track: "f-thumbs__track",
        slide: "f-thumbs__slide",
        isResting: "is-resting",
        isSelected: "is-selected",
        isLoading: "is-loading",
        hasThumbs: "has-thumbs",
      },
      minCount: 2,
      parentEl: null,
      thumbTpl:
        '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
      type: "modern",
    };
    var Zt;
    !(function (e) {
      (e[(e.Init = 0)] = "Init"),
        (e[(e.Ready = 1)] = "Ready"),
        (e[(e.Hidden = 2)] = "Hidden");
    })(Zt || (Zt = {}));
    const Ut = "isResting",
      Kt = "thumbWidth",
      Jt = "thumbHeight",
      Qt = "thumbClipWidth";
    let ei = class extends tt {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "type", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "modern",
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "track", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "carousel", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "thumbWidth", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "thumbClipWidth", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "thumbHeight", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "thumbGap", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "thumbExtraGap", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zt.Init,
          });
      }
      get isModern() {
        return "modern" === this.type;
      }
      onInitSlide(e, t) {
        const i = t.el ? t.el.dataset : void 0;
        i &&
          ((t.thumbSrc = i.thumbSrc || t.thumbSrc || ""),
          (t[Qt] = parseFloat(i[Qt] || "") || t[Qt] || 0),
          (t[Jt] = parseFloat(i.thumbHeight || "") || t[Jt] || 0)),
          this.addSlide(t);
      }
      onInitSlides() {
        this.build();
      }
      onChange() {
        var e;
        if (!this.isModern) return;
        const t = this.container,
          i = this.instance,
          s = i.panzoom,
          n = this.carousel,
          o = n ? n.panzoom : null,
          a = i.page;
        if (s && n && o) {
          if (s.isDragging) {
            Be(t, this.cn(Ut));
            let s =
              (null === (e = n.pages[a]) || void 0 === e ? void 0 : e.pos) || 0;
            s += i.getProgress(a) * (this[Qt] + this.thumbGap);
            let r = o.getBounds();
            -1 * s > r.x.min &&
              -1 * s < r.x.max &&
              o.panTo({ x: -1 * s, friction: 0.12 });
          } else xe(t, this.cn(Ut), s.isResting);
          this.shiftModern();
        }
      }
      onRefresh() {
        this.updateProps();
        for (const e of this.instance.slides || []) this.resizeModernSlide(e);
        this.shiftModern();
      }
      isDisabled() {
        const e = this.option("minCount") || 0;
        if (e) {
          const t = this.instance;
          let i = 0;
          for (const e of t.slides || []) e.thumbSrc && i++;
          if (i < e) return !0;
        }
        const t = this.option("type");
        return ["modern", "classic"].indexOf(t) < 0;
      }
      getThumb(e) {
        const t = this.option("thumbTpl") || "";
        return {
          html: this.instance.localize(t, [
            ["%i", e.index],
            ["%d", e.index + 1],
            [
              "%s",
              e.thumbSrc ||
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            ],
          ]),
        };
      }
      addSlide(e) {
        const t = this.carousel;
        t && t.addSlide(e.index, this.getThumb(e));
      }
      getSlides() {
        const e = [];
        for (const t of this.instance.slides || []) e.push(this.getThumb(t));
        return e;
      }
      resizeModernSlide(e) {
        this.isModern &&
          (e[Kt] =
            e[Qt] && e[Jt] ? Math.round(this[Jt] * (e[Qt] / e[Jt])) : this[Kt]);
      }
      updateProps() {
        const e = this.container;
        if (!e) return;
        const t = (t) =>
          parseFloat(getComputedStyle(e).getPropertyValue("--f-thumb-" + t)) ||
          0;
        (this.thumbGap = t("gap")),
          (this.thumbExtraGap = t("extra-gap")),
          (this[Kt] = t("width") || 40),
          (this[Qt] = t("clip-width") || 40),
          (this[Jt] = t("height") || 40);
      }
      build() {
        const e = this;
        if (e.state !== Zt.Init) return;
        if (e.isDisabled()) return void e.emit("disabled");
        const t = e.instance,
          i = t.container,
          s = e.getSlides(),
          n = e.option("type");
        e.type = n;
        const o = e.option("parentEl"),
          a = e.cn("container"),
          r = e.cn("track");
        let l = null == o ? void 0 : o.querySelector("." + a);
        l ||
          ((l = document.createElement("div")),
          Ne(l, a),
          o ? o.appendChild(l) : i.after(l)),
          Ne(l, `is-${n}`),
          Ne(i, e.cn("hasThumbs")),
          (e.container = l),
          e.updateProps();
        let c = l.querySelector("." + r);
        c ||
          ((c = document.createElement("div")),
          Ne(c, e.cn("track")),
          l.appendChild(c)),
          (e.track = c);
        const d = Le(
            {},
            {
              track: c,
              infinite: !1,
              center: !0,
              fill: "classic" === n,
              dragFree: !0,
              slidesPerPage: 1,
              transition: !1,
              preload: 0.25,
              friction: 0.12,
              Panzoom: { maxVelocity: 0 },
              Dots: !1,
              Navigation: !1,
              classes: {
                container: "f-thumbs",
                viewport: "f-thumbs__viewport",
                track: "f-thumbs__track",
                slide: "f-thumbs__slide",
              },
            },
            e.option("Carousel") || {},
            { Sync: { target: t }, slides: s }
          ),
          h = new t.constructor(l, d);
        h.on("createSlide", (t, i) => {
          e.setProps(i.index), e.emit("createSlide", i, i.el);
        }),
          h.on("ready", () => {
            e.shiftModern(), e.emit("ready");
          }),
          h.on("refresh", () => {
            e.shiftModern();
          }),
          h.on("Panzoom.click", (t, i, s) => {
            e.onClick(s);
          }),
          (e.carousel = h),
          (e.state = Zt.Ready);
      }
      onClick(e) {
        e.preventDefault(), e.stopPropagation();
        const t = this.instance,
          { pages: i, page: s } = t,
          n = (e) => {
            if (e) {
              const t = e.closest("[data-carousel-index]");
              if (t)
                return [parseInt(t.dataset.carouselIndex || "", 10) || 0, t];
            }
            return [-1, void 0];
          },
          o = (e, t) => {
            const i = document.elementFromPoint(e, t);
            return i ? n(i) : [-1, void 0];
          };
        let [a, r] = n(e.target);
        if (a > -1) return;
        const l = this[Qt],
          c = e.clientX,
          d = e.clientY;
        let [h, u] = o(c - l, d),
          [p, f] = o(c + l, d);
        u && f
          ? ((a =
              Math.abs(c - u.getBoundingClientRect().right) <
              Math.abs(c - f.getBoundingClientRect().left)
                ? h
                : p),
            a === s && (a = a === h ? p : h))
          : u
          ? (a = h)
          : f && (a = p),
          a > -1 && i[a] && t.slideTo(a);
      }
      getShift(e) {
        var t;
        const i = this,
          { instance: s } = i,
          n = i.carousel;
        if (!s || !n) return 0;
        const o = i[Kt],
          a = i[Qt],
          r = i.thumbGap,
          l = i.thumbExtraGap;
        if (!(null === (t = n.slides[e]) || void 0 === t ? void 0 : t.el))
          return 0;
        const c = 0.5 * (o - a),
          d = s.pages.length - 1;
        let h = s.getProgress(0),
          u = s.getProgress(d),
          p = s.getProgress(e, !1, !0),
          f = 0,
          g = c + l + r;
        const m = h < 0 && h > -1,
          v = u > 0 && u < 1;
        return (
          0 === e
            ? ((f = g * Math.abs(h)), v && 1 === h && (f -= g * Math.abs(u)))
            : e === d
            ? ((f = g * Math.abs(u) * -1),
              m && -1 === u && (f += g * Math.abs(h)))
            : m || v
            ? ((f = -1 * g),
              (f += g * Math.abs(h)),
              (f += g * (1 - Math.abs(u))))
            : (f = g * p),
          f
        );
      }
      setProps(e) {
        var t;
        const i = this;
        if (!i.isModern) return;
        const { instance: s } = i,
          n = i.carousel;
        if (s && n) {
          const o = null === (t = n.slides[e]) || void 0 === t ? void 0 : t.el;
          if (o && o.childNodes.length) {
            let t = ve(1 - Math.abs(s.getProgress(e))),
              n = ve(i.getShift(e));
            o.style.setProperty("--progress", t ? t + "" : ""),
              o.style.setProperty("--shift", n + "");
          }
        }
      }
      shiftModern() {
        const e = this;
        if (!e.isModern) return;
        const { instance: t, track: i } = e,
          s = t.panzoom,
          n = e.carousel;
        if (!(t && i && s && n)) return;
        if (s.state === _e.Init || s.state === _e.Destroy) return;
        for (const i of t.slides) e.setProps(i.index);
        let o = (e[Qt] + e.thumbGap) * (n.slides.length || 0);
        i.style.setProperty("--width", o + "");
      }
      cleanup() {
        const e = this;
        e.carousel && e.carousel.destroy(),
          (e.carousel = null),
          e.container && e.container.remove(),
          (e.container = null),
          e.track && e.track.remove(),
          (e.track = null),
          (e.state = Zt.Init),
          Be(e.instance.container, e.cn("hasThumbs"));
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("initSlide", e.onInitSlide),
          t.state === Je.Init
            ? t.on("initSlides", e.onInitSlides)
            : e.onInitSlides(),
          t.on(["change", "Panzoom.afterTransform"], e.onChange),
          t.on("Panzoom.refresh", e.onRefresh);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("initSlide", e.onInitSlide),
          t.off("initSlides", e.onInitSlides),
          t.off(["change", "Panzoom.afterTransform"], e.onChange),
          t.off("Panzoom.refresh", e.onRefresh),
          e.cleanup();
      }
    };
    Object.defineProperty(ei, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: Yt,
    });
    const ti = Object.assign(Object.assign({}, Yt), {
        key: "t",
        showOnStart: !0,
        parentEl: null,
      }),
      ii = "is-masked",
      si = "aria-hidden";
    class ni extends tt {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "ref", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "hidden", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          });
      }
      get isEnabled() {
        const e = this.ref;
        return e && !e.isDisabled();
      }
      get isHidden() {
        return this.hidden;
      }
      onClick(e, t) {
        t.stopPropagation();
      }
      onCreateSlide(e, t) {
        var i, s, n;
        const o =
            (null ===
              (n =
                null ===
                  (s =
                    null === (i = this.instance) || void 0 === i
                      ? void 0
                      : i.carousel) || void 0 === s
                  ? void 0
                  : s.slides[t.index]) || void 0 === n
              ? void 0
              : n.type) || "",
          a = t.el;
        if (a && o) {
          let e = `for-${o}`;
          ["video", "youtube", "vimeo", "html5video"].includes(o) &&
            (e += " for-video"),
            Ne(a, e);
        }
      }
      onInit() {
        var e;
        const t = this,
          i = t.instance,
          s = i.carousel;
        if (t.ref || !s) return;
        const n = t.option("parentEl") || i.footer || i.container;
        if (!n) return;
        const o = Le({}, t.options, {
          parentEl: n,
          classes: { container: "f-thumbs fancybox__thumbs" },
          Carousel: { Sync: { friction: i.option("Carousel.friction") || 0 } },
          on: {
            ready: (e) => {
              const i = e.container;
              i &&
                this.hidden &&
                (t.refresh(),
                (i.style.transition = "none"),
                t.hide(),
                i.offsetHeight,
                queueMicrotask(() => {
                  (i.style.transition = ""), t.show();
                }));
            },
          },
        });
        (o.Carousel = o.Carousel || {}),
          (o.Carousel.on = Le(
            (null === (e = t.options.Carousel) || void 0 === e
              ? void 0
              : e.on) || {},
            { click: this.onClick, createSlide: this.onCreateSlide }
          )),
          (s.options.Thumbs = o),
          s.attachPlugins({ Thumbs: ei }),
          (t.ref = s.plugins.Thumbs),
          t.option("showOnStart") ||
            ((t.ref.state = Zt.Hidden), (t.hidden = !0));
      }
      onResize() {
        var e;
        const t =
          null === (e = this.ref) || void 0 === e ? void 0 : e.container;
        t && (t.style.maxHeight = "");
      }
      onKeydown(e, t) {
        const i = this.option("key");
        i && i === t && this.toggle();
      }
      toggle() {
        const e = this.ref;
        if (e && !e.isDisabled())
          return e.state === Zt.Hidden
            ? ((e.state = Zt.Init), void e.build())
            : void (this.hidden ? this.show() : this.hide());
      }
      show() {
        const e = this.ref;
        if (!e || e.isDisabled()) return;
        const t = e.container;
        t &&
          (this.refresh(),
          t.offsetHeight,
          t.removeAttribute(si),
          t.classList.remove(ii),
          (this.hidden = !1));
      }
      hide() {
        const e = this.ref,
          t = e && e.container;
        t &&
          (this.refresh(),
          t.offsetHeight,
          t.classList.add(ii),
          t.setAttribute(si, "true")),
          (this.hidden = !0);
      }
      refresh() {
        const e = this.ref;
        if (!e || !e.state) return;
        const t = e.container,
          i = (null == t ? void 0 : t.firstChild) || null;
        t &&
          i &&
          i.childNodes.length &&
          (t.style.maxHeight = `${i.getBoundingClientRect().height}px`);
      }
      attach() {
        const e = this,
          t = e.instance;
        t.state === wt.Init ? t.on("Carousel.init", e.onInit) : e.onInit(),
          t.on("resize", e.onResize),
          t.on("keydown", e.onKeydown);
      }
      detach() {
        var e;
        const t = this,
          i = t.instance;
        i.off("Carousel.init", t.onInit),
          i.off("resize", t.onResize),
          i.off("keydown", t.onKeydown),
          null === (e = i.carousel) ||
            void 0 === e ||
            e.detachPlugins(["Thumbs"]),
          (t.ref = null);
      }
    }
    Object.defineProperty(ni, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ti,
    });
    const oi = {
      panLeft: {
        icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
        change: { panX: -100 },
      },
      panRight: {
        icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
        change: { panX: 100 },
      },
      panUp: {
        icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
        change: { panY: -100 },
      },
      panDown: {
        icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
        change: { panY: 100 },
      },
      zoomIn: {
        icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
        action: "zoomIn",
      },
      zoomOut: {
        icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "zoomOut",
      },
      toggle1to1: {
        icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
        action: "toggleZoom",
      },
      toggleZoom: {
        icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "toggleZoom",
      },
      iterateZoom: {
        icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "iterateZoom",
      },
      rotateCCW: {
        icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
        action: "rotateCCW",
      },
      rotateCW: {
        icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
        action: "rotateCW",
      },
      flipX: {
        icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
        action: "flipX",
      },
      flipY: {
        icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
        action: "flipY",
      },
      fitX: {
        icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
        action: "fitX",
      },
      fitY: {
        icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
        action: "fitY",
      },
      reset: {
        icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
        action: "reset",
      },
      toggleFS: {
        icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
        action: "toggleFS",
      },
    };
    var ai;
    !(function (e) {
      (e[(e.Init = 0)] = "Init"),
        (e[(e.Ready = 1)] = "Ready"),
        (e[(e.Disabled = 2)] = "Disabled");
    })(ai || (ai = {}));
    const ri = {
        tabindex: "-1",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
      },
      li = "has-toolbar",
      ci = "fancybox__toolbar";
    class di extends tt {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ai.Init,
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          });
      }
      onReady(e) {
        var t;
        if (!e.carousel) return;
        let i = this.option("display"),
          s = this.option("absolute"),
          n = this.option("enabled");
        if ("auto" === n) {
          const e = this.instance.carousel;
          let t = 0;
          if (e)
            for (const i of e.slides) (i.panzoom || "image" === i.type) && t++;
          t || (n = !1);
        }
        n || (i = void 0);
        let o = 0;
        const a = { left: [], middle: [], right: [] };
        if (i)
          for (const e of ["left", "middle", "right"])
            for (const s of i[e]) {
              const i = this.createEl(s);
              i && (null === (t = a[e]) || void 0 === t || t.push(i), o++);
            }
        let r = null;
        if ((o && (r = this.createContainer()), r)) {
          for (const [e, t] of Object.entries(a)) {
            const i = document.createElement("div");
            Ne(i, ci + "__column is-" + e);
            for (const e of t) i.appendChild(e);
            "auto" !== s || "middle" !== e || t.length || (s = !0),
              r.appendChild(i);
          }
          !0 === s && Ne(r, "is-absolute"),
            (this.state = ai.Ready),
            this.onRefresh();
        } else this.state = ai.Disabled;
      }
      onClick(e) {
        var t, i;
        const s = this.instance,
          n = s.getSlide(),
          o = null == n ? void 0 : n.panzoom,
          a = e.target,
          r = a && je(a) ? a.dataset : null;
        if (!r) return;
        if (void 0 !== r.fancyboxToggleThumbs)
          return (
            e.preventDefault(),
            e.stopPropagation(),
            void (null === (t = s.plugins.Thumbs) || void 0 === t || t.toggle())
          );
        if (void 0 !== r.fancyboxToggleFullscreen)
          return (
            e.preventDefault(),
            e.stopPropagation(),
            void this.instance.toggleFullscreen()
          );
        if (void 0 !== r.fancyboxToggleSlideshow) {
          e.preventDefault(), e.stopPropagation();
          const t =
            null === (i = s.carousel) || void 0 === i
              ? void 0
              : i.plugins.Autoplay;
          let n = t.isActive;
          return (
            o && "mousemove" === o.panMode && !n && o.reset(),
            void (n ? t.stop() : t.start())
          );
        }
        const l = r.panzoomAction,
          c = r.panzoomChange;
        if (((c || l) && (e.preventDefault(), e.stopPropagation()), c)) {
          let t = {};
          try {
            t = JSON.parse(c);
          } catch (e) {}
          o && o.applyChange(t);
        } else l && o && o[l] && o[l]();
      }
      onChange() {
        this.onRefresh();
      }
      onRefresh() {
        if (this.instance.isClosing()) return;
        const e = this.container;
        if (!e) return;
        const t = this.instance.getSlide();
        if (!t || t.state !== St.Ready) return;
        const i = t && !t.error && t.panzoom;
        for (const t of e.querySelectorAll("[data-panzoom-action]"))
          i
            ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
            : (t.setAttribute("disabled", ""),
              t.setAttribute("tabindex", "-1"));
        let s = i && i.canZoomIn(),
          n = i && i.canZoomOut();
        for (const t of e.querySelectorAll('[data-panzoom-action="zoomIn"]'))
          s
            ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
            : (t.setAttribute("disabled", ""),
              t.setAttribute("tabindex", "-1"));
        for (const t of e.querySelectorAll('[data-panzoom-action="zoomOut"]'))
          n
            ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
            : (t.setAttribute("disabled", ""),
              t.setAttribute("tabindex", "-1"));
        for (const t of e.querySelectorAll(
          '[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]'
        )) {
          n || s
            ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
            : (t.setAttribute("disabled", ""),
              t.setAttribute("tabindex", "-1"));
          const e = t.querySelector("g");
          e && (e.style.display = s ? "" : "none");
        }
      }
      onDone(e, t) {
        var i;
        null === (i = t.panzoom) ||
          void 0 === i ||
          i.on("afterTransform", () => {
            this.instance.isCurrentSlide(t) && this.onRefresh();
          }),
          this.instance.isCurrentSlide(t) && this.onRefresh();
      }
      createContainer() {
        const e = this.instance.container;
        if (!e) return null;
        const t = this.option("parentEl") || e;
        let i = t.querySelector("." + ci);
        return (
          i || ((i = document.createElement("div")), Ne(i, ci), t.prepend(i)),
          i.addEventListener("click", this.onClick, {
            passive: !1,
            capture: !0,
          }),
          e && Ne(e, li),
          (this.container = i),
          i
        );
      }
      createEl(e) {
        const t = this.instance,
          i = t.carousel;
        if (!i) return null;
        if ("toggleFS" === e) return null;
        if ("fullscreen" === e && !bt()) return null;
        let s = null;
        const n = i.slides.length || 0;
        let o = 0,
          a = 0;
        for (const e of i.slides)
          (e.panzoom || "image" === e.type) && o++,
            ("image" === e.type || e.downloadSrc) && a++;
        if (n < 2 && ["infobar", "prev", "next"].includes(e)) return s;
        if (void 0 !== oi[e] && !o) return null;
        if ("download" === e && !a) return null;
        if ("thumbs" === e) {
          const e = t.plugins.Thumbs;
          if (!e || !e.isEnabled) return null;
        }
        if ("slideshow" === e && (!i.plugins.Autoplay || n < 2)) return null;
        if (void 0 !== oi[e]) {
          const t = oi[e];
          (s = document.createElement("button")),
            s.setAttribute(
              "title",
              this.instance.localize(`{{${e.toUpperCase()}}}`)
            ),
            Ne(s, "f-button"),
            t.action && (s.dataset.panzoomAction = t.action),
            t.change && (s.dataset.panzoomChange = JSON.stringify(t.change)),
            s.appendChild(we(this.instance.localize(t.icon)));
        } else {
          const t = (this.option("items") || [])[e];
          t &&
            ((s = we(this.instance.localize(t.tpl))),
            "function" == typeof t.click &&
              s.addEventListener("click", (e) => {
                e.preventDefault(),
                  e.stopPropagation(),
                  "function" == typeof t.click && t.click.call(this, this, e);
              }));
        }
        const r = null == s ? void 0 : s.querySelector("svg");
        if (r)
          for (const [e, t] of Object.entries(ri))
            r.getAttribute(e) || r.setAttribute(e, String(t));
        return s;
      }
      removeContainer() {
        const e = this.container;
        e && e.remove(), (this.container = null), (this.state = ai.Disabled);
        const t = this.instance.container;
        t && Be(t, li);
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("Carousel.initSlides", e.onReady),
          t.on("done", e.onDone),
          t.on(["reveal", "Carousel.change"], e.onChange),
          e.onReady(e.instance);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("Carousel.initSlides", e.onReady),
          t.off("done", e.onDone),
          t.off(["reveal", "Carousel.change"], e.onChange),
          e.removeContainer();
      }
    }
    Object.defineProperty(di, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        absolute: "auto",
        display: {
          left: ["infobar"],
          middle: [],
          right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"],
        },
        enabled: "auto",
        items: {
          infobar: {
            tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>',
          },
          download: {
            tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>',
          },
          prev: {
            tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>',
          },
          next: {
            tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>',
          },
          slideshow: {
            tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>',
          },
          fullscreen: {
            tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>',
          },
          thumbs: {
            tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>',
          },
          close: {
            tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>',
          },
        },
        parentEl: null,
      },
    });
    const hi = {
        Hash: class extends tt {
          onReady() {
            Et = !1;
          }
          onChange(e) {
            Tt && clearTimeout(Tt);
            const { hash: t } = Pt(),
              { hash: i } = Mt(),
              s = e.isOpeningSlide(e.getSlide());
            s && (xt = i === t ? "" : i),
              t &&
                t !== i &&
                (Tt = setTimeout(() => {
                  try {
                    if (e.state === wt.Ready) {
                      let e = "replaceState";
                      s && !Ct && ((e = "pushState"), (Ct = !0)),
                        window.history[e](
                          {},
                          document.title,
                          window.location.pathname + window.location.search + t
                        );
                    }
                  } catch (e) {}
                }, 300));
          }
          onClose(e) {
            if ((Tt && clearTimeout(Tt), !Et && Ct))
              return (Ct = !1), (Et = !1), void window.history.back();
            if (!Et)
              try {
                window.history.replaceState(
                  {},
                  document.title,
                  window.location.pathname + window.location.search + (xt || "")
                );
              } catch (e) {}
          }
          attach() {
            const e = this.instance;
            e.on("ready", this.onReady),
              e.on(["Carousel.ready", "Carousel.change"], this.onChange),
              e.on("close", this.onClose);
          }
          detach() {
            const e = this.instance;
            e.off("ready", this.onReady),
              e.off(["Carousel.ready", "Carousel.change"], this.onChange),
              e.off("close", this.onClose);
          }
          static parseURL() {
            return Mt();
          }
          static startFromUrl() {
            Ot();
          }
          static destroy() {
            window.removeEventListener("hashchange", At, !1);
          }
        },
        Html: Ht,
        Images: _t,
        Slideshow: Xt,
        Thumbs: ni,
        Toolbar: di,
      },
      ui = "with-fancybox",
      pi = "hide-scrollbar",
      fi = "--fancybox-scrollbar-compensate",
      gi = "--fancybox-body-margin",
      mi = "aria-hidden",
      vi = "is-using-tab",
      bi = "is-animated",
      yi = "is-compact",
      wi = "is-loading",
      Si = "is-opening",
      xi = "has-caption",
      Ei = "disabled",
      Ci = "tabindex",
      Ti = "download",
      Pi = "href",
      Mi = "src",
      Oi = (e) => "string" == typeof e,
      Li = function () {
        var e = window.getSelection();
        return !!e && "Range" === e.type;
      };
    let Ai,
      ki = null,
      Ii = null,
      _i = 0,
      zi = 0;
    const $i = new Map();
    let Di = 0;
    class Ri extends Ie {
      get isIdle() {
        return this.idle;
      }
      get isCompact() {
        return this.option("compact");
      }
      constructor(e = [], t = {}, i = {}) {
        super(t),
          Object.defineProperty(this, "userSlides", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "userPlugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {},
          }),
          Object.defineProperty(this, "idle", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "idleTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "clickTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "pwt", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "ignoreFocusChange", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "startedFs", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wt.Init,
          }),
          Object.defineProperty(this, "id", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "caption", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "footer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "carousel", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "lastFocus", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "prevMouseMoveEvent", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Ai || (Ai = bt()),
          (this.id = t.id || ++Di),
          $i.set(this.id, this),
          (this.userSlides = e),
          (this.userPlugins = i),
          queueMicrotask(() => {
            this.init();
          });
      }
      init() {
        if (this.state === wt.Destroy) return;
        (this.state = wt.Init),
          this.attachPlugins(
            Object.assign(Object.assign({}, Ri.Plugins), this.userPlugins)
          ),
          this.emit("init"),
          this.emit("attachPlugins"),
          !0 === this.option("hideScrollbar") &&
            (() => {
              if (!ft) return;
              const e = document,
                t = e.body,
                i = e.documentElement;
              if (t.classList.contains(pi)) return;
              let s = window.innerWidth - i.getBoundingClientRect().width;
              const n = parseFloat(window.getComputedStyle(t).marginRight);
              s < 0 && (s = 0),
                i.style.setProperty(fi, `${s}px`),
                n && t.style.setProperty(gi, `${n}px`),
                t.classList.add(pi);
            })(),
          this.initLayout(),
          this.scale();
        const e = () => {
          this.initCarousel(this.userSlides),
            (this.state = wt.Ready),
            this.attachEvents(),
            this.emit("ready"),
            setTimeout(() => {
              this.container && this.container.setAttribute(mi, "false");
            }, 16);
        };
        this.option("Fullscreen.autoStart") && Ai && !Ai.isFullscreen()
          ? Ai.request()
              .then(() => {
                (this.startedFs = !0), e();
              })
              .catch(() => e())
          : e();
      }
      initLayout() {
        var e, t;
        const i = this.option("parentEl") || document.body,
          s = we(this.localize(this.option("tpl.main") || ""));
        s &&
          (s.setAttribute("id", `fancybox-${this.id}`),
          s.setAttribute("aria-label", this.localize("{{MODAL}}")),
          s.classList.toggle(yi, this.isCompact),
          Ne(s, this.option("mainClass") || ""),
          Ne(s, Si),
          (this.container = s),
          (this.footer = s.querySelector(".fancybox__footer")),
          i.appendChild(s),
          Ne(document.documentElement, ui),
          (ki && Ii) ||
            ((ki = document.createElement("span")),
            Ne(ki, "fancybox-focus-guard"),
            ki.setAttribute(Ci, "0"),
            ki.setAttribute(mi, "true"),
            ki.setAttribute("aria-label", "Focus guard"),
            (Ii = ki.cloneNode()),
            null === (e = s.parentElement) ||
              void 0 === e ||
              e.insertBefore(ki, s),
            null === (t = s.parentElement) || void 0 === t || t.append(Ii)),
          s.addEventListener("mousedown", (e) => {
            (_i = e.pageX), (zi = e.pageY), Be(s, vi);
          }),
          this.option("animated") &&
            (Ne(s, bi),
            setTimeout(() => {
              this.isClosing() || Be(s, bi);
            }, 350)),
          this.emit("initLayout"));
      }
      initCarousel(e) {
        const t = this.container;
        if (!t) return;
        const i = t.querySelector(".fancybox__carousel");
        if (!i) return;
        const s = (this.carousel = new ut(
          i,
          Le(
            {},
            {
              slides: e,
              transition: "fade",
              Panzoom: {
                lockAxis: this.option("dragToClose") ? "xy" : "x",
                infinite: !!this.option("dragToClose") && "y",
              },
              Dots: !1,
              Navigation: {
                classes: {
                  container: "fancybox__nav",
                  button: "f-button",
                  isNext: "is-next",
                  isPrev: "is-prev",
                },
              },
              initialPage: this.option("startIndex"),
              l10n: this.option("l10n"),
            },
            this.option("Carousel") || {}
          )
        ));
        s.on("*", (e, t, ...i) => {
          this.emit(`Carousel.${t}`, e, ...i);
        }),
          s.on(["ready", "change"], () => {
            this.manageCaption();
          }),
          this.on("Carousel.removeSlide", (e, t, i) => {
            this.clearContent(i), (i.state = void 0);
          }),
          s.on("Panzoom.touchStart", () => {
            var e, t;
            this.isCompact || this.endIdle(),
              (null === (e = document.activeElement) || void 0 === e
                ? void 0
                : e.closest(".f-thumbs")) &&
                (null === (t = this.container) || void 0 === t || t.focus());
          }),
          s.on("settle", () => {
            this.idleTimer ||
              this.isCompact ||
              !this.option("idle") ||
              this.setIdle(),
              this.option("autoFocus") && !this.isClosing && this.checkFocus();
          }),
          this.option("dragToClose") &&
            (s.on("Panzoom.afterTransform", (e, t) => {
              const i = this.getSlide();
              if (i && be(i.el)) return;
              const s = this.container;
              if (s) {
                const e = Math.abs(t.current.f),
                  i =
                    e < 1
                      ? ""
                      : Math.max(
                          0.5,
                          Math.min(1, 1 - (e / t.contentRect.fitHeight) * 1.5)
                        );
                s.style.setProperty("--fancybox-ts", i ? "0s" : ""),
                  s.style.setProperty("--fancybox-opacity", i + "");
              }
            }),
            s.on("Panzoom.touchEnd", (e, t, i) => {
              var s;
              const n = this.getSlide();
              if (n && be(n.el)) return;
              if (
                t.isMobile &&
                document.activeElement &&
                -1 !==
                  ["TEXTAREA", "INPUT"].indexOf(
                    null === (s = document.activeElement) || void 0 === s
                      ? void 0
                      : s.nodeName
                  )
              )
                return;
              const o = Math.abs(t.dragOffset.y);
              "y" === t.lockedAxis &&
                (o >= 200 || (o >= 50 && t.dragOffset.time < 300)) &&
                (i && i.cancelable && i.preventDefault(),
                this.close(
                  i,
                  "f-throwOut" + (t.current.f < 0 ? "Up" : "Down")
                ));
            })),
          s.on("change", (e) => {
            var t;
            let i =
              null === (t = this.getSlide()) || void 0 === t
                ? void 0
                : t.triggerEl;
            if (i) {
              const t = new CustomEvent("slideTo", {
                bubbles: !0,
                cancelable: !0,
                detail: e.page,
              });
              i.dispatchEvent(t);
            }
          }),
          s.on(["refresh", "change"], (e) => {
            const t = this.container;
            if (!t) return;
            for (const i of t.querySelectorAll("[data-fancybox-current-index]"))
              i.innerHTML = e.page + 1;
            for (const i of t.querySelectorAll("[data-fancybox-count]"))
              i.innerHTML = e.pages.length;
            if (!e.isInfinite) {
              for (const i of t.querySelectorAll("[data-fancybox-next]"))
                e.page < e.pages.length - 1
                  ? (i.removeAttribute(Ei), i.removeAttribute(Ci))
                  : (i.setAttribute(Ei, ""), i.setAttribute(Ci, "-1"));
              for (const i of t.querySelectorAll("[data-fancybox-prev]"))
                e.page > 0
                  ? (i.removeAttribute(Ei), i.removeAttribute(Ci))
                  : (i.setAttribute(Ei, ""), i.setAttribute(Ci, "-1"));
            }
            const i = this.getSlide();
            if (!i) return;
            let s = i.downloadSrc || "";
            s || "image" !== i.type || i.error || !Oi(i[Mi]) || (s = i[Mi]);
            for (const e of t.querySelectorAll("[data-fancybox-download]")) {
              const t = i.downloadFilename;
              s
                ? (e.removeAttribute(Ei),
                  e.removeAttribute(Ci),
                  e.setAttribute(Pi, s),
                  e.setAttribute(Ti, t || s),
                  e.setAttribute("target", "_blank"))
                : (e.setAttribute(Ei, ""),
                  e.setAttribute(Ci, "-1"),
                  e.removeAttribute(Pi),
                  e.removeAttribute(Ti));
            }
          }),
          this.emit("initCarousel");
      }
      attachEvents() {
        const e = this,
          t = e.container;
        if (!t) return;
        t.addEventListener("click", e.onClick, { passive: !1, capture: !1 }),
          t.addEventListener("wheel", e.onWheel, { passive: !1, capture: !1 }),
          document.addEventListener("keydown", e.onKeydown, {
            passive: !1,
            capture: !0,
          }),
          document.addEventListener(
            "visibilitychange",
            e.onVisibilityChange,
            !1
          ),
          document.addEventListener("mousemove", e.onMousemove),
          e.option("trapFocus") &&
            document.addEventListener("focus", e.onFocus, !0),
          window.addEventListener("resize", e.onResize);
        const i = window.visualViewport;
        i &&
          (i.addEventListener("scroll", e.onResize),
          i.addEventListener("resize", e.onResize));
      }
      detachEvents() {
        const e = this,
          t = e.container;
        if (!t) return;
        document.removeEventListener("keydown", e.onKeydown, {
          passive: !1,
          capture: !0,
        }),
          t.removeEventListener("wheel", e.onWheel, {
            passive: !1,
            capture: !1,
          }),
          t.removeEventListener("click", e.onClick, {
            passive: !1,
            capture: !1,
          }),
          document.removeEventListener("mousemove", e.onMousemove),
          window.removeEventListener("resize", e.onResize);
        const i = window.visualViewport;
        i &&
          (i.removeEventListener("resize", e.onResize),
          i.removeEventListener("scroll", e.onResize)),
          document.removeEventListener(
            "visibilitychange",
            e.onVisibilityChange,
            !1
          ),
          document.removeEventListener("focus", e.onFocus, !0);
      }
      scale() {
        const e = this.container;
        if (!e) return;
        const t = window.visualViewport,
          i = Math.max(1, (null == t ? void 0 : t.scale) || 1);
        let s = "",
          n = "",
          o = "";
        if (t && i > 1) {
          let e = `${t.offsetLeft}px`,
            a = `${t.offsetTop}px`;
          (s = t.width * i + "px"),
            (n = t.height * i + "px"),
            (o = `translate3d(${e}, ${a}, 0) scale(${1 / i})`);
        }
        (e.style.transform = o), (e.style.width = s), (e.style.height = n);
      }
      onClick(e) {
        var t;
        const { container: i, isCompact: s } = this;
        if (!i || this.isClosing()) return;
        !s && this.option("idle") && this.resetIdle();
        const n = e.composedPath()[0];
        if (
          n.closest(".fancybox-spinner") ||
          n.closest("[data-fancybox-close]")
        )
          return e.preventDefault(), void this.close(e);
        if (n.closest("[data-fancybox-prev]"))
          return e.preventDefault(), void this.prev();
        if (n.closest("[data-fancybox-next]"))
          return e.preventDefault(), void this.next();
        if ("click" === e.type && 0 === e.detail) return;
        if (Math.abs(e.pageX - _i) > 30 || Math.abs(e.pageY - zi) > 30) return;
        const o = document.activeElement;
        if (Li() && o && i.contains(o)) return;
        if (
          s &&
          "image" ===
            (null === (t = this.getSlide()) || void 0 === t ? void 0 : t.type)
        )
          return void (this.clickTimer
            ? (clearTimeout(this.clickTimer), (this.clickTimer = null))
            : (this.clickTimer = setTimeout(() => {
                this.toggleIdle(), (this.clickTimer = null);
              }, 350)));
        if ((this.emit("click", e), e.defaultPrevented)) return;
        let a = !1;
        if (n.closest(".fancybox__content")) {
          if (o) {
            if (o.closest("[contenteditable]")) return;
            n.matches(mt) || o.blur();
          }
          if (Li()) return;
          a = this.option("contentClick");
        } else
          n.closest(".fancybox__carousel") &&
            !n.matches(mt) &&
            (a = this.option("backdropClick"));
        "close" === a
          ? (e.preventDefault(), this.close(e))
          : "next" === a
          ? (e.preventDefault(), this.next())
          : "prev" === a && (e.preventDefault(), this.prev());
      }
      onWheel(e) {
        const t = e.target;
        let i = this.option("wheel", e);
        t.closest(".fancybox__thumbs") && (i = "slide");
        const s = "slide" === i,
          n = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function (
            e,
            t
          ) {
            return Math.abs(t) > Math.abs(e) ? t : e;
          }),
          o = Math.max(-1, Math.min(1, n)),
          a = Date.now();
        this.pwt && a - this.pwt < 300
          ? s && e.preventDefault()
          : ((this.pwt = a),
            this.emit("wheel", e, o),
            e.defaultPrevented ||
              ("close" === i
                ? (e.preventDefault(), this.close(e))
                : "slide" === i &&
                  (ye(t) ||
                    (e.preventDefault(), this[o > 0 ? "prev" : "next"]()))));
      }
      onKeydown(e) {
        if (!this.isTopmost()) return;
        this.isCompact ||
          !this.option("idle") ||
          this.isClosing() ||
          this.resetIdle();
        const t = e.key,
          i = this.option("keyboard");
        if (!i) return;
        const s = e.composedPath()[0],
          n = document.activeElement && document.activeElement.classList,
          o =
            (n && n.contains("f-button")) ||
            s.dataset.carouselPage ||
            s.dataset.carouselIndex;
        if (
          "Escape" !== t &&
          !o &&
          je(s) &&
          (s.isContentEditable ||
            -1 !==
              ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(
                s.nodeName
              ))
        )
          return;
        if (
          ("Tab" === e.key ? Ne(this.container, vi) : Be(this.container, vi),
          e.ctrlKey || e.altKey || e.shiftKey)
        )
          return;
        this.emit("keydown", t, e);
        const a = i[t];
        a && "function" == typeof this[a] && (e.preventDefault(), this[a]());
      }
      onResize() {
        const e = this.container;
        if (!e) return;
        const t = this.isCompact;
        e.classList.toggle(yi, t),
          this.manageCaption(this.getSlide()),
          this.isCompact ? this.clearIdle() : this.endIdle(),
          this.scale(),
          this.emit("resize");
      }
      onFocus(e) {
        this.isTopmost() && this.checkFocus(e);
      }
      onMousemove(e) {
        (this.prevMouseMoveEvent = e),
          !this.isCompact && this.option("idle") && this.resetIdle();
      }
      onVisibilityChange() {
        "visible" === document.visibilityState
          ? this.checkFocus()
          : this.endIdle();
      }
      manageCloseBtn(e) {
        const t = this.optionFor(e, "closeButton") || !1;
        if ("auto" === t) {
          const e = this.plugins.Toolbar;
          if (e && e.state === ai.Ready) return;
        }
        if (!t) return;
        if (!e.contentEl || e.closeBtnEl) return;
        const i = this.option("tpl.closeButton");
        if (i) {
          const t = we(this.localize(i));
          (e.closeBtnEl = e.contentEl.appendChild(t)),
            e.el && Ne(e.el, "has-close-btn");
        }
      }
      manageCaption(e = void 0) {
        var t, i;
        const s = "fancybox__caption",
          n = this.container;
        if (!n) return;
        Be(n, xi);
        const o = this.isCompact || this.option("commonCaption"),
          a = !o;
        if (
          (this.caption && this.stop(this.caption),
          a && this.caption && (this.caption.remove(), (this.caption = null)),
          o && !this.caption)
        )
          for (const e of (null === (t = this.carousel) || void 0 === t
            ? void 0
            : t.slides) || [])
            e.captionEl &&
              (e.captionEl.remove(),
              (e.captionEl = void 0),
              Be(e.el, xi),
              null === (i = e.el) ||
                void 0 === i ||
                i.removeAttribute("aria-labelledby"));
        if ((e || (e = this.getSlide()), !e || (o && !this.isCurrentSlide(e))))
          return;
        const r = e.el;
        let l = this.optionFor(e, "caption", "");
        if (!l)
          return void (
            o &&
            this.caption &&
            this.animate(this.caption, "f-fadeOut", () => {
              this.caption && (this.caption.innerHTML = "");
            })
          );
        let c = null;
        if (a) {
          if (((c = e.captionEl || null), r && !c)) {
            const t = s + `_${this.id}_${e.index}`;
            (c = document.createElement("div")),
              Ne(c, s),
              c.setAttribute("id", t),
              (e.captionEl = r.appendChild(c)),
              Ne(r, xi),
              r.setAttribute("aria-labelledby", t);
          }
        } else
          (c = this.caption),
            c || (c = n.querySelector("." + s)),
            c ||
              ((c = document.createElement("div")),
              (c.dataset.fancyboxCaption = ""),
              Ne(c, s),
              (this.footer || n).prepend(c)),
            Ne(n, xi),
            (this.caption = c);
        c &&
          ((c.innerHTML = ""),
          Oi(l) || "number" == typeof l
            ? (c.innerHTML = l + "")
            : l instanceof HTMLElement && c.appendChild(l));
      }
      checkFocus(e) {
        this.focus(e);
      }
      focus(e) {
        var t;
        if (this.ignoreFocusChange) return;
        const i = document.activeElement || null,
          s = (null == e ? void 0 : e.target) || null,
          n = this.container,
          o =
            null === (t = this.carousel) || void 0 === t ? void 0 : t.viewport;
        if (!n || !o) return;
        if (!e && i && n.contains(i)) return;
        const a = this.getSlide(),
          r = a && a.state === St.Ready ? a.el : null;
        if (!r || r.contains(i) || n === i) return;
        e && e.cancelable && e.preventDefault(), (this.ignoreFocusChange = !0);
        const l = Array.from(n.querySelectorAll(mt));
        let c = [],
          d = null;
        for (let e of l) {
          const t = !e.offsetParent || !!e.closest('[aria-hidden="true"]'),
            i = r && r.contains(e),
            s = !o.contains(e);
          if (e === n || ((i || s) && !t)) {
            c.push(e);
            const t = e.dataset.origTabindex;
            void 0 !== t && t && (e.tabIndex = parseFloat(t)),
              e.removeAttribute("data-orig-tabindex"),
              (!e.hasAttribute("autoFocus") && d) || (d = e);
          } else {
            const t =
              void 0 === e.dataset.origTabindex
                ? e.getAttribute("tabindex") || ""
                : e.dataset.origTabindex;
            t && (e.dataset.origTabindex = t), (e.tabIndex = -1);
          }
        }
        let h = null;
        e
          ? (!s || c.indexOf(s) < 0) &&
            ((h = d || n),
            c.length &&
              (i === Ii
                ? (h = c[0])
                : (this.lastFocus !== n && i !== ki) || (h = c[c.length - 1])))
          : (h = a && "image" === a.type ? n : d || n),
          h && vt(h),
          (this.lastFocus = document.activeElement),
          (this.ignoreFocusChange = !1);
      }
      next() {
        const e = this.carousel;
        e && e.pages.length > 1 && e.slideNext();
      }
      prev() {
        const e = this.carousel;
        e && e.pages.length > 1 && e.slidePrev();
      }
      jumpTo(...e) {
        this.carousel && this.carousel.slideTo(...e);
      }
      isTopmost() {
        var e;
        return (
          (null === (e = Ri.getInstance()) || void 0 === e ? void 0 : e.id) ==
          this.id
        );
      }
      animate(e = null, t = "", i) {
        if (!e || !t) return void (i && i());
        this.stop(e);
        const s = (n) => {
          n.target === e &&
            e.dataset.animationName &&
            (e.removeEventListener("animationend", s),
            delete e.dataset.animationName,
            i && i(),
            Be(e, t));
        };
        (e.dataset.animationName = t),
          e.addEventListener("animationend", s),
          Ne(e, t);
      }
      stop(e) {
        e &&
          e.dispatchEvent(
            new CustomEvent("animationend", {
              bubbles: !1,
              cancelable: !0,
              currentTarget: e,
            })
          );
      }
      setContent(e, t = "", i = !0) {
        if (this.isClosing()) return;
        const s = e.el;
        if (!s) return;
        let n = null;
        if (
          (je(t)
            ? (n = t)
            : ((n = we(t + "")),
              je(n) ||
                ((n = document.createElement("div")), (n.innerHTML = t + ""))),
          ["img", "picture", "iframe", "video", "audio"].includes(
            n.nodeName.toLowerCase()
          ))
        ) {
          const e = document.createElement("div");
          e.appendChild(n), (n = e);
        }
        je(n) && e.filter && !e.error && (n = n.querySelector(e.filter)),
          n && je(n)
            ? (Ne(n, "fancybox__content"),
              e.id && n.setAttribute("id", e.id),
              ("none" !== n.style.display &&
                "none" !== getComputedStyle(n).getPropertyValue("display")) ||
                (n.style.display =
                  e.display || this.option("defaultDisplay") || "flex"),
              s.classList.add(`has-${e.error ? "error" : e.type || "unknown"}`),
              s.prepend(n),
              (e.contentEl = n),
              i && this.revealContent(e),
              this.manageCloseBtn(e),
              this.manageCaption(e))
            : this.setError(e, "{{ELEMENT_NOT_FOUND}}");
      }
      revealContent(e, t) {
        const i = e.el,
          s = e.contentEl;
        i &&
          s &&
          (this.emit("reveal", e),
          this.hideLoading(e),
          (e.state = St.Opening),
          (t = this.isOpeningSlide(e)
            ? void 0 === t
              ? this.optionFor(e, "showClass")
              : t
            : "f-fadeIn")
            ? this.animate(s, t, () => {
                this.done(e);
              })
            : this.done(e));
      }
      done(e) {
        this.isClosing() ||
          ((e.state = St.Ready),
          this.emit("done", e),
          Ne(e.el, "is-done"),
          this.isCurrentSlide(e) &&
            this.option("autoFocus") &&
            queueMicrotask(() => {
              var t;
              null === (t = e.panzoom) || void 0 === t || t.updateControls(),
                this.option("autoFocus") && this.focus();
            }),
          this.isOpeningSlide(e) &&
            (Be(this.container, Si),
            !this.isCompact && this.option("idle") && this.setIdle()));
      }
      isCurrentSlide(e) {
        const t = this.getSlide();
        return !(!e || !t) && t.index === e.index;
      }
      isOpeningSlide(e) {
        var t, i;
        return (
          null ===
            (null === (t = this.carousel) || void 0 === t
              ? void 0
              : t.prevPage) &&
          e &&
          e.index ===
            (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.index)
        );
      }
      showLoading(e) {
        e.state = St.Loading;
        const t = e.el;
        t &&
          (Ne(t, wi),
          this.emit("loading", e),
          e.spinnerEl ||
            setTimeout(() => {
              if (!this.isClosing() && !e.spinnerEl && e.state === St.Loading) {
                let i = we(Fe);
                Ne(i, "fancybox-spinner"),
                  (e.spinnerEl = i),
                  t.prepend(i),
                  this.animate(i, "f-fadeIn");
              }
            }, 250));
      }
      hideLoading(e) {
        const t = e.el;
        if (!t) return;
        const i = e.spinnerEl;
        this.isClosing()
          ? null == i || i.remove()
          : (Be(t, wi),
            i &&
              this.animate(i, "f-fadeOut", () => {
                i.remove();
              }),
            e.state === St.Loading &&
              (this.emit("loaded", e), (e.state = St.Ready)));
      }
      setError(e, t) {
        if (this.isClosing()) return;
        const i = new Event("error", { bubbles: !0, cancelable: !0 });
        if ((this.emit("error", i, e), i.defaultPrevented)) return;
        (e.error = t), this.hideLoading(e), this.clearContent(e);
        const s = document.createElement("div");
        s.classList.add("fancybox-error"),
          (s.innerHTML = this.localize(t || "<p>{{ERROR}}</p>")),
          this.setContent(e, s);
      }
      clearContent(e) {
        if (void 0 === e.state) return;
        this.emit("clearContent", e),
          e.contentEl && (e.contentEl.remove(), (e.contentEl = void 0));
        const t = e.el;
        t &&
          (Be(t, "has-error"),
          Be(t, "has-unknown"),
          Be(t, `has-${e.type || "unknown"}`)),
          e.closeBtnEl && e.closeBtnEl.remove(),
          (e.closeBtnEl = void 0),
          e.captionEl && e.captionEl.remove(),
          (e.captionEl = void 0),
          e.spinnerEl && e.spinnerEl.remove(),
          (e.spinnerEl = void 0);
      }
      getSlide() {
        var e;
        const t = this.carousel;
        return (
          (null ===
            (e = null == t ? void 0 : t.pages[null == t ? void 0 : t.page]) ||
          void 0 === e
            ? void 0
            : e.slides[0]) || void 0
        );
      }
      close(e, t) {
        if (this.isClosing()) return;
        const i = new Event("shouldClose", { bubbles: !0, cancelable: !0 });
        if ((this.emit("shouldClose", i, e), i.defaultPrevented)) return;
        e && e.cancelable && (e.preventDefault(), e.stopPropagation());
        const s = () => {
          this.proceedClose(e, t);
        };
        this.startedFs && Ai && Ai.isFullscreen()
          ? Promise.resolve(Ai.exit()).then(() => s())
          : s();
      }
      clearIdle() {
        this.idleTimer && clearTimeout(this.idleTimer), (this.idleTimer = null);
      }
      setIdle(e = !1) {
        const t = () => {
          this.clearIdle(),
            (this.idle = !0),
            Ne(this.container, "is-idle"),
            this.emit("setIdle");
        };
        if ((this.clearIdle(), !this.isClosing()))
          if (e) t();
          else {
            const e = this.option("idle");
            e && (this.idleTimer = setTimeout(t, e));
          }
      }
      endIdle() {
        this.clearIdle(),
          this.idle &&
            !this.isClosing() &&
            ((this.idle = !1),
            Be(this.container, "is-idle"),
            this.emit("endIdle"));
      }
      resetIdle() {
        this.endIdle(), this.setIdle();
      }
      toggleIdle() {
        this.idle ? this.endIdle() : this.setIdle(!0);
      }
      toggleFullscreen() {
        Ai &&
          (Ai.isFullscreen()
            ? Ai.exit()
            : Ai.request().then(() => {
                this.startedFs = !0;
              }));
      }
      isClosing() {
        return [wt.Closing, wt.CustomClosing, wt.Destroy].includes(this.state);
      }
      proceedClose(e, t) {
        var i, s;
        (this.state = wt.Closing), this.clearIdle(), this.detachEvents();
        const n = this.container,
          o = this.carousel,
          a = this.getSlide(),
          r =
            a && this.option("placeFocusBack")
              ? a.triggerEl || this.option("triggerEl")
              : null;
        if (
          (r && (pt(r) ? vt(r) : r.focus()),
          n &&
            (Be(n, Si),
            Ne(n, "is-closing"),
            n.setAttribute(mi, "true"),
            this.option("animated") && Ne(n, bi),
            (n.style.pointerEvents = "none")),
          o)
        ) {
          o.clearTransitions(),
            null === (i = o.panzoom) || void 0 === i || i.destroy(),
            null === (s = o.plugins.Navigation) || void 0 === s || s.detach();
          for (const e of o.slides) {
            (e.state = St.Closing), this.hideLoading(e);
            const t = e.contentEl;
            t && this.stop(t);
            const i = null == e ? void 0 : e.panzoom;
            i && (i.stop(), i.detachEvents(), i.detachObserver()),
              this.isCurrentSlide(e) || o.emit("removeSlide", e);
          }
        }
        this.emit("close", e),
          this.state !== wt.CustomClosing
            ? (void 0 === t && a && (t = this.optionFor(a, "hideClass")),
              t && a
                ? (this.animate(a.contentEl, t, () => {
                    o && o.emit("removeSlide", a);
                  }),
                  setTimeout(() => {
                    this.destroy();
                  }, 500))
                : this.destroy())
            : setTimeout(() => {
                this.destroy();
              }, 500);
      }
      destroy() {
        var e;
        if (this.state === wt.Destroy) return;
        (this.state = wt.Destroy),
          null === (e = this.carousel) || void 0 === e || e.destroy();
        const t = this.container;
        t && t.remove(), $i.delete(this.id);
        const i = Ri.getInstance();
        i
          ? i.focus()
          : (ki && (ki.remove(), (ki = null)),
            Ii && (Ii.remove(), (Ii = null)),
            Be(document.documentElement, ui),
            (() => {
              if (!ft) return;
              const e = document,
                t = e.body;
              t.classList.remove(pi),
                t.style.setProperty(gi, ""),
                e.documentElement.style.setProperty(fi, "");
            })(),
            this.emit("destroy"));
      }
      static bind(e, t, i) {
        if (!ft) return;
        let s,
          n = "",
          o = {};
        if (
          (void 0 === e
            ? (s = document.body)
            : Oi(e)
            ? ((s = document.body),
              (n = e),
              "object" == typeof t && (o = t || {}))
            : ((s = e),
              Oi(t) && (n = t),
              "object" == typeof i && (o = i || {})),
          !s || !je(s))
        )
          return;
        n = n || "[data-fancybox]";
        const a = Ri.openers.get(s) || new Map();
        a.set(n, o),
          Ri.openers.set(s, a),
          1 === a.size && s.addEventListener("click", Ri.fromEvent);
      }
      static unbind(e, t) {
        let i,
          s = "";
        if (
          (Oi(e) ? ((i = document.body), (s = e)) : ((i = e), Oi(t) && (s = t)),
          !i)
        )
          return;
        const n = Ri.openers.get(i);
        n && s && n.delete(s),
          (s && n) ||
            (Ri.openers.delete(i),
            i.removeEventListener("click", Ri.fromEvent));
      }
      static destroy() {
        let e;
        for (; (e = Ri.getInstance()); ) e.destroy();
        for (const e of Ri.openers.keys())
          e.removeEventListener("click", Ri.fromEvent);
        Ri.openers = new Map();
      }
      static fromEvent(e) {
        if (e.defaultPrevented) return;
        if (e.button && 0 !== e.button) return;
        if (e.ctrlKey || e.metaKey || e.shiftKey) return;
        let t = e.composedPath()[0];
        const i = t.closest("[data-fancybox-trigger]");
        if (i) {
          const e = i.dataset.fancyboxTrigger || "",
            s = document.querySelectorAll(`[data-fancybox="${e}"]`),
            n = parseInt(i.dataset.fancyboxIndex || "", 10) || 0;
          t = s[n] || t;
        }
        if (!(t && t instanceof Element)) return;
        let s, n, o, a;
        if (
          ([...Ri.openers].reverse().find(
            ([e, i]) =>
              !(
                !e.contains(t) ||
                ![...i].reverse().find(([i, r]) => {
                  let l = t.closest(i);
                  return !!l && ((s = e), (n = i), (o = l), (a = r), !0);
                })
              )
          ),
          !s || !n || !o)
        )
          return;
        (a = a || {}), e.preventDefault(), (t = o);
        let r = [],
          l = Le({}, yt, a);
        (l.event = e), (l.triggerEl = t), (l.delegate = i);
        const c = l.groupAll,
          d = l.groupAttr,
          h = d && t ? t.getAttribute(`${d}`) : "";
        if (
          ((!t || h || c) && (r = [].slice.call(s.querySelectorAll(n))),
          t &&
            !c &&
            (r = h ? r.filter((e) => e.getAttribute(`${d}`) === h) : [t]),
          !r.length)
        )
          return;
        const u = Ri.getInstance();
        return u && u.options.triggerEl && r.indexOf(u.options.triggerEl) > -1
          ? void 0
          : (t && (l.startIndex = r.indexOf(t)), Ri.fromNodes(r, l));
      }
      static fromSelector(e, t, i) {
        let s = null,
          n = "",
          o = {};
        if (
          (Oi(e)
            ? ((s = document.body),
              (n = e),
              "object" == typeof t && (o = t || {}))
            : e instanceof HTMLElement &&
              Oi(t) &&
              ((s = e), (n = t), "object" == typeof i && (o = i || {})),
          !s || !n)
        )
          return !1;
        const a = Ri.openers.get(s);
        return (
          !!a &&
          ((o = Le({}, a.get(n) || {}, o)),
          !!o && Ri.fromNodes(Array.from(s.querySelectorAll(n)), o))
        );
      }
      static fromNodes(e, t) {
        t = Le({}, yt, t || {});
        const i = [];
        for (const s of e) {
          const e = s.dataset || {},
            n =
              e[Mi] ||
              s.getAttribute(Pi) ||
              s.getAttribute("currentSrc") ||
              s.getAttribute(Mi) ||
              void 0;
          let o;
          const a = t.delegate;
          let r;
          a &&
            i.length === t.startIndex &&
            (o =
              a instanceof HTMLImageElement
                ? a
                : a.querySelector("img:not([aria-hidden])")),
            o ||
              (o =
                s instanceof HTMLImageElement
                  ? s
                  : s.querySelector("img:not([aria-hidden])")),
            o &&
              ((r = o.currentSrc || o[Mi] || void 0),
              !r &&
                o.dataset &&
                (r = o.dataset.lazySrc || o.dataset[Mi] || void 0));
          const l = {
            src: n,
            triggerEl: s,
            thumbEl: o,
            thumbElSrc: r,
            thumbSrc: r,
          };
          for (const t in e) {
            let i = e[t] + "";
            (i = "false" !== i && ("true" === i || i)), (l[t] = i);
          }
          i.push(l);
        }
        return new Ri(i, t);
      }
      static getInstance(e) {
        return e
          ? $i.get(e)
          : Array.from($i.values())
              .reverse()
              .find((e) => !e.isClosing() && e) || null;
      }
      static getSlide() {
        var e;
        return (
          (null === (e = Ri.getInstance()) || void 0 === e
            ? void 0
            : e.getSlide()) || null
        );
      }
      static show(e = [], t = {}) {
        return new Ri(e, t);
      }
      static next() {
        const e = Ri.getInstance();
        e && e.next();
      }
      static prev() {
        const e = Ri.getInstance();
        e && e.prev();
      }
      static close(e = !0, ...t) {
        if (e) for (const e of $i.values()) e.close(...t);
        else {
          const e = Ri.getInstance();
          e && e.close(...t);
        }
      }
    }
    Object.defineProperty(Ri, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "5.0.33",
    }),
      Object.defineProperty(Ri, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: yt,
      }),
      Object.defineProperty(Ri, "Plugins", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: hi,
      }),
      Object.defineProperty(Ri, "openers", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: new Map(),
      }),
      document.querySelector(".slider-top") &&
        Ri.bind('[data-fancybox="slider"]', {
          groupAll: !0,
          Images: { initialSize: "fit" },
        }),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            o && (a(), document.documentElement.classList.toggle("menu-open"));
          });
      })();
  })();
})();
