(() => {
  // <stdin>
  (() => {
    var e = {
      732: function(e2) {
        e2.exports = function() {
          "use strict";
          function e3() {
            return e3 = Object.assign || function(e4) {
              for (var t3 = 1; t3 < arguments.length; t3++) {
                var i3 = arguments[t3];
                for (var s2 in i3)
                  Object.prototype.hasOwnProperty.call(i3, s2) && (e4[s2] = i3[s2]);
              }
              return e4;
            }, e3.apply(this, arguments);
          }
          var t2 = "undefined" != typeof window, i2 = t2 && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), s = t2 && "IntersectionObserver" in window, n = t2 && "classList" in document.createElement("p"), o = t2 && window.devicePixelRatio > 1, a = {
            elements_selector: ".lazy",
            container: i2 || t2 ? document : null,
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
            unobserve_completed: true,
            unobserve_entered: false,
            cancel_on_exit: true,
            callback_enter: null,
            callback_exit: null,
            callback_applied: null,
            callback_loading: null,
            callback_loaded: null,
            callback_error: null,
            callback_finish: null,
            callback_cancel: null,
            use_native: false,
            restore_on_error: false
          }, r = function(t3) {
            return e3({}, a, t3);
          }, l = function(e4, t3) {
            var i3, s2 = "LazyLoad::Initialized", n2 = new e4(t3);
            try {
              i3 = new CustomEvent(s2, { detail: { instance: n2 } });
            } catch (e5) {
              (i3 = document.createEvent("CustomEvent")).initCustomEvent(
                s2,
                false,
                false,
                { instance: n2 }
              );
            }
            window.dispatchEvent(i3);
          }, c = "src", d = "srcset", h = "sizes", u = "poster", p = "llOriginalAttrs", f = "data", g = "loading", m = "loaded", v = "applied", b = "error", y = "native", w = "data-", S = "ll-status", x = function(e4, t3) {
            return e4.getAttribute(w + t3);
          }, E = function(e4) {
            return x(e4, S);
          }, C = function(e4, t3) {
            return function(e5, t4, i3) {
              var s2 = "data-ll-status";
              null !== i3 ? e5.setAttribute(s2, i3) : e5.removeAttribute(s2);
            }(e4, 0, t3);
          }, T = function(e4) {
            return C(e4, null);
          }, P = function(e4) {
            return null === E(e4);
          }, M = function(e4) {
            return E(e4) === y;
          }, O = [g, m, v, b], L = function(e4, t3, i3, s2) {
            e4 && "function" == typeof e4 && (void 0 === s2 ? void 0 === i3 ? e4(t3) : e4(t3, i3) : e4(t3, i3, s2));
          }, A = function(e4, t3) {
            n ? e4.classList.add(t3) : e4.className += (e4.className ? " " : "") + t3;
          }, k = function(e4, t3) {
            n ? e4.classList.remove(t3) : e4.className = e4.className.replace(new RegExp("(^|\\s+)" + t3 + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
          }, I = function(e4) {
            return e4.llTempImage;
          }, _ = function(e4, t3) {
            if (t3) {
              var i3 = t3._observer;
              i3 && i3.unobserve(e4);
            }
          }, z = function(e4, t3) {
            e4 && (e4.loadingCount += t3);
          }, $ = function(e4, t3) {
            e4 && (e4.toLoadCount = t3);
          }, D = function(e4) {
            for (var t3, i3 = [], s2 = 0; t3 = e4.children[s2]; s2 += 1)
              "SOURCE" === t3.tagName && i3.push(t3);
            return i3;
          }, R = function(e4, t3) {
            var i3 = e4.parentNode;
            i3 && "PICTURE" === i3.tagName && D(i3).forEach(t3);
          }, F = function(e4, t3) {
            D(e4).forEach(t3);
          }, j = [c], B = [c, u], N = [c, d, h], H = [f], q = function(e4) {
            return !!e4[p];
          }, W = function(e4) {
            return e4[p];
          }, G = function(e4) {
            return delete e4[p];
          }, V = function(e4, t3) {
            if (!q(e4)) {
              var i3 = {};
              t3.forEach(function(t4) {
                i3[t4] = e4.getAttribute(t4);
              }), e4[p] = i3;
            }
          }, X = function(e4, t3) {
            if (q(e4)) {
              var i3 = W(e4);
              t3.forEach(function(t4) {
                !function(e5, t5, i4) {
                  i4 ? e5.setAttribute(t5, i4) : e5.removeAttribute(t5);
                }(e4, t4, i3[t4]);
              });
            }
          }, Y = function(e4, t3, i3) {
            A(e4, t3.class_applied), C(e4, v), i3 && (t3.unobserve_completed && _(e4, t3), L(t3.callback_applied, e4, i3));
          }, Z = function(e4, t3, i3) {
            A(e4, t3.class_loading), C(e4, g), i3 && (z(i3, 1), L(t3.callback_loading, e4, i3));
          }, U = function(e4, t3, i3) {
            i3 && e4.setAttribute(t3, i3);
          }, K = function(e4, t3) {
            U(e4, h, x(e4, t3.data_sizes)), U(e4, d, x(e4, t3.data_srcset)), U(e4, c, x(e4, t3.data_src));
          }, J = {
            IMG: function(e4, t3) {
              R(e4, function(e5) {
                V(e5, N), K(e5, t3);
              }), V(e4, N), K(e4, t3);
            },
            IFRAME: function(e4, t3) {
              V(e4, j), U(e4, c, x(e4, t3.data_src));
            },
            VIDEO: function(e4, t3) {
              F(e4, function(e5) {
                V(e5, j), U(e5, c, x(e5, t3.data_src));
              }), V(e4, B), U(e4, u, x(e4, t3.data_poster)), U(e4, c, x(e4, t3.data_src)), e4.load();
            },
            OBJECT: function(e4, t3) {
              V(e4, H), U(e4, f, x(e4, t3.data_src));
            }
          }, Q = ["IMG", "IFRAME", "VIDEO", "OBJECT"], ee = function(e4, t3) {
            !t3 || function(e5) {
              return e5.loadingCount > 0;
            }(t3) || function(e5) {
              return e5.toLoadCount > 0;
            }(t3) || L(e4.callback_finish, t3);
          }, te = function(e4, t3, i3) {
            e4.addEventListener(t3, i3), e4.llEvLisnrs[t3] = i3;
          }, ie = function(e4, t3, i3) {
            e4.removeEventListener(t3, i3);
          }, se = function(e4) {
            return !!e4.llEvLisnrs;
          }, ne = function(e4) {
            if (se(e4)) {
              var t3 = e4.llEvLisnrs;
              for (var i3 in t3) {
                var s2 = t3[i3];
                ie(e4, i3, s2);
              }
              delete e4.llEvLisnrs;
            }
          }, oe = function(e4, t3, i3) {
            !function(e5) {
              delete e5.llTempImage;
            }(e4), z(i3, -1), function(e5) {
              e5 && (e5.toLoadCount -= 1);
            }(i3), k(e4, t3.class_loading), t3.unobserve_completed && _(e4, i3);
          }, ae = function(e4, t3, i3) {
            var s2 = I(e4) || e4;
            se(s2) || function(e5, t4, i4) {
              se(e5) || (e5.llEvLisnrs = {});
              var s3 = "VIDEO" === e5.tagName ? "loadeddata" : "load";
              te(e5, s3, t4), te(e5, "error", i4);
            }(
              s2,
              function(n2) {
                !function(e5, t4, i4, s3) {
                  var n3 = M(t4);
                  oe(t4, i4, s3), A(t4, i4.class_loaded), C(t4, m), L(i4.callback_loaded, t4, s3), n3 || ee(i4, s3);
                }(0, e4, t3, i3), ne(s2);
              },
              function(n2) {
                !function(e5, t4, i4, s3) {
                  var n3 = M(t4);
                  oe(t4, i4, s3), A(t4, i4.class_error), C(t4, b), L(i4.callback_error, t4, s3), i4.restore_on_error && X(t4, N), n3 || ee(i4, s3);
                }(0, e4, t3, i3), ne(s2);
              }
            );
          }, re = function(e4, t3, i3) {
            !function(e5) {
              return Q.indexOf(e5.tagName) > -1;
            }(e4) ? function(e5, t4, i4) {
              !function(e6) {
                e6.llTempImage = document.createElement("IMG");
              }(e5), ae(e5, t4, i4), function(e6) {
                q(e6) || (e6[p] = { backgroundImage: e6.style.backgroundImage });
              }(e5), function(e6, t5, i5) {
                var s2 = x(e6, t5.data_bg), n2 = x(e6, t5.data_bg_hidpi), a2 = o && n2 ? n2 : s2;
                a2 && (e6.style.backgroundImage = 'url("'.concat(a2, '")'), I(e6).setAttribute(c, a2), Z(e6, t5, i5));
              }(e5, t4, i4), function(e6, t5, i5) {
                var s2 = x(e6, t5.data_bg_multi), n2 = x(e6, t5.data_bg_multi_hidpi), a2 = o && n2 ? n2 : s2;
                a2 && (e6.style.backgroundImage = a2, Y(e6, t5, i5));
              }(e5, t4, i4), function(e6, t5, i5) {
                var s2 = x(e6, t5.data_bg_set);
                if (s2) {
                  var n2 = s2.split("|"), o2 = n2.map(function(e7) {
                    return "image-set(".concat(e7, ")");
                  });
                  e6.style.backgroundImage = o2.join(), "" === e6.style.backgroundImage && (o2 = n2.map(function(e7) {
                    return "-webkit-image-set(".concat(e7, ")");
                  }), e6.style.backgroundImage = o2.join()), Y(e6, t5, i5);
                }
              }(e5, t4, i4);
            }(e4, t3, i3) : function(e5, t4, i4) {
              ae(e5, t4, i4), function(e6, t5, i5) {
                var s2 = J[e6.tagName];
                s2 && (s2(e6, t5), Z(e6, t5, i5));
              }(e5, t4, i4);
            }(e4, t3, i3);
          }, le = function(e4) {
            e4.removeAttribute(c), e4.removeAttribute(d), e4.removeAttribute(h);
          }, ce = function(e4) {
            R(e4, function(e5) {
              X(e5, N);
            }), X(e4, N);
          }, de = {
            IMG: ce,
            IFRAME: function(e4) {
              X(e4, j);
            },
            VIDEO: function(e4) {
              F(e4, function(e5) {
                X(e5, j);
              }), X(e4, B), e4.load();
            },
            OBJECT: function(e4) {
              X(e4, H);
            }
          }, he = function(e4, t3) {
            (function(e5) {
              var t4 = de[e5.tagName];
              t4 ? t4(e5) : function(e6) {
                if (q(e6)) {
                  var t5 = W(e6);
                  e6.style.backgroundImage = t5.backgroundImage;
                }
              }(e5);
            })(e4), function(e5, t4) {
              P(e5) || M(e5) || (k(e5, t4.class_entered), k(e5, t4.class_exited), k(e5, t4.class_applied), k(e5, t4.class_loading), k(e5, t4.class_loaded), k(e5, t4.class_error));
            }(e4, t3), T(e4), G(e4);
          }, ue = ["IMG", "IFRAME", "VIDEO"], pe = function(e4) {
            return e4.use_native && "loading" in HTMLImageElement.prototype;
          }, fe = function(e4, t3, i3) {
            e4.forEach(function(e5) {
              return function(e6) {
                return e6.isIntersecting || e6.intersectionRatio > 0;
              }(e5) ? function(e6, t4, i4, s2) {
                var n2 = function(e7) {
                  return O.indexOf(E(e7)) >= 0;
                }(e6);
                C(e6, "entered"), A(e6, i4.class_entered), k(e6, i4.class_exited), function(e7, t5, i5) {
                  t5.unobserve_entered && _(e7, i5);
                }(e6, i4, s2), L(i4.callback_enter, e6, t4, s2), n2 || re(e6, i4, s2);
              }(e5.target, e5, t3, i3) : function(e6, t4, i4, s2) {
                P(e6) || (A(e6, i4.class_exited), function(e7, t5, i5, s3) {
                  i5.cancel_on_exit && function(e8) {
                    return E(e8) === g;
                  }(e7) && "IMG" === e7.tagName && (ne(e7), function(e8) {
                    R(e8, function(e9) {
                      le(e9);
                    }), le(e8);
                  }(e7), ce(e7), k(e7, i5.class_loading), z(s3, -1), T(e7), L(i5.callback_cancel, e7, t5, s3));
                }(e6, t4, i4, s2), L(i4.callback_exit, e6, t4, s2));
              }(e5.target, e5, t3, i3);
            });
          }, ge = function(e4) {
            return Array.prototype.slice.call(e4);
          }, me = function(e4) {
            return e4.container.querySelectorAll(e4.elements_selector);
          }, ve = function(e4) {
            return function(e5) {
              return E(e5) === b;
            }(e4);
          }, be = function(e4, t3) {
            return function(e5) {
              return ge(e5).filter(P);
            }(e4 || me(t3));
          }, ye = function(e4, i3) {
            var n2 = r(e4);
            this._settings = n2, this.loadingCount = 0, function(e5, t3) {
              s && !pe(e5) && (t3._observer = new IntersectionObserver(
                function(i4) {
                  fe(i4, e5, t3);
                },
                function(e6) {
                  return {
                    root: e6.container === document ? null : e6.container,
                    rootMargin: e6.thresholds || e6.threshold + "px"
                  };
                }(e5)
              ));
            }(n2, this), function(e5, i4) {
              t2 && (i4._onlineHandler = function() {
                !function(e6, t3) {
                  var i5;
                  (i5 = me(e6), ge(i5).filter(ve)).forEach(function(t4) {
                    k(t4, e6.class_error), T(t4);
                  }), t3.update();
                }(e5, i4);
              }, window.addEventListener("online", i4._onlineHandler));
            }(n2, this), this.update(i3);
          };
          return ye.prototype = {
            update: function(e4) {
              var t3, n2, o2 = this._settings, a2 = be(e4, o2);
              $(this, a2.length), !i2 && s ? pe(o2) ? function(e5, t4, i3) {
                e5.forEach(function(e6) {
                  -1 !== ue.indexOf(e6.tagName) && function(e7, t5, i4) {
                    e7.setAttribute("loading", "lazy"), ae(e7, t5, i4), function(e8, t6) {
                      var i5 = J[e8.tagName];
                      i5 && i5(e8, t6);
                    }(e7, t5), C(e7, y);
                  }(e6, t4, i3);
                }), $(i3, 0);
              }(a2, o2, this) : (n2 = a2, function(e5) {
                e5.disconnect();
              }(t3 = this._observer), function(e5, t4) {
                t4.forEach(function(t5) {
                  e5.observe(t5);
                });
              }(t3, n2)) : this.loadAll(a2);
            },
            destroy: function() {
              this._observer && this._observer.disconnect(), t2 && window.removeEventListener("online", this._onlineHandler), me(this._settings).forEach(function(e4) {
                G(e4);
              }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
            },
            loadAll: function(e4) {
              var t3 = this, i3 = this._settings;
              be(e4, i3).forEach(function(e5) {
                _(e5, t3), re(e5, i3, t3);
              });
            },
            restoreAll: function() {
              var e4 = this._settings;
              me(e4).forEach(function(t3) {
                he(t3, e4);
              });
            }
          }, ye.load = function(e4, t3) {
            var i3 = r(t3);
            re(e4, i3);
          }, ye.resetStatus = function(e4) {
            T(e4);
          }, t2 && function(e4, t3) {
            if (t3)
              if (t3.length) for (var i3, s2 = 0; i3 = t3[s2]; s2 += 1) l(e4, i3);
              else l(e4, t3);
          }(ye, window.lazyLoadOptions), ye;
        }();
      }
    }, t = {};
    function i(s) {
      var n = t[s];
      if (void 0 !== n) return n.exports;
      var o = t[s] = { exports: {} };
      return e[s].call(o.exports, o, o.exports, i), o.exports;
    }
    (() => {
      "use strict";
      const e2 = {};
      let t2 = (e3, t3 = 500, i2 = 0) => {
        e3.classList.contains("_slide") || (e3.classList.add("_slide"), e3.style.transitionProperty = "height, margin, padding", e3.style.transitionDuration = t3 + "ms", e3.style.height = `${e3.offsetHeight}px`, e3.offsetHeight, e3.style.overflow = "hidden", e3.style.height = i2 ? `${i2}px` : "0px", e3.style.paddingTop = 0, e3.style.paddingBottom = 0, e3.style.marginTop = 0, e3.style.marginBottom = 0, window.setTimeout(() => {
          e3.hidden = !i2, !i2 && e3.style.removeProperty("height"), e3.style.removeProperty("padding-top"), e3.style.removeProperty("padding-bottom"), e3.style.removeProperty("margin-top"), e3.style.removeProperty("margin-bottom"), !i2 && e3.style.removeProperty("overflow"), e3.style.removeProperty("transition-duration"), e3.style.removeProperty("transition-property"), e3.classList.remove("_slide"), document.dispatchEvent(
            new CustomEvent("slideUpDone", { detail: { target: e3 } })
          );
        }, t3));
      }, s = (e3, t3 = 500, i2 = 0) => {
        if (!e3.classList.contains("_slide")) {
          e3.classList.add("_slide"), e3.hidden = !e3.hidden && null, i2 && e3.style.removeProperty("height");
          let s2 = e3.offsetHeight;
          e3.style.overflow = "hidden", e3.style.height = i2 ? `${i2}px` : "0px", e3.style.paddingTop = 0, e3.style.paddingBottom = 0, e3.style.marginTop = 0, e3.style.marginBottom = 0, e3.offsetHeight, e3.style.transitionProperty = "height, margin, padding", e3.style.transitionDuration = t3 + "ms", e3.style.height = s2 + "px", e3.style.removeProperty("padding-top"), e3.style.removeProperty("padding-bottom"), e3.style.removeProperty("margin-top"), e3.style.removeProperty("margin-bottom"), window.setTimeout(() => {
            e3.style.removeProperty("height"), e3.style.removeProperty("overflow"), e3.style.removeProperty("transition-duration"), e3.style.removeProperty("transition-property"), e3.classList.remove("_slide"), document.dispatchEvent(
              new CustomEvent("slideDownDone", { detail: { target: e3 } })
            );
          }, t3);
        }
      }, n = (e3, i2 = 500) => e3.hidden ? s(e3, i2) : t2(e3, i2), o = true, a = (e3 = 500) => {
        document.documentElement.classList.contains("lock") ? r(e3) : l(e3);
      }, r = (e3 = 500) => {
        let t3 = document.querySelector("body");
        if (o) {
          let i2 = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e4 = 0; e4 < i2.length; e4++) {
              i2[e4].style.paddingRight = "0px";
            }
            t3.style.paddingRight = "0px", document.documentElement.classList.remove("lock");
          }, e3), o = false, setTimeout(function() {
            o = true;
          }, e3);
        }
      }, l = (e3 = 500) => {
        let t3 = document.querySelector("body");
        if (o) {
          let i2 = document.querySelectorAll("[data-lp]");
          for (let e4 = 0; e4 < i2.length; e4++) {
            i2[e4].style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
          }
          t3.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px", document.documentElement.classList.add("lock"), o = false, setTimeout(function() {
            o = true;
          }, e3);
        }
      };
      function c(e3) {
        setTimeout(() => {
          window.FLS && console.log(e3);
        }, 0);
      }
      function d(e3) {
        return e3.filter(function(e4, t3, i2) {
          return i2.indexOf(e4) === t3;
        });
      }
      e2.popup = new class {
        constructor(e3) {
          let t3 = {
            logging: true,
            init: true,
            attributeOpenButton: "data-popup",
            attributeCloseButton: "data-close",
            fixElementSelector: "[data-lp]",
            youtubeAttribute: "data-youtube",
            youtubePlaceAttribute: "data-youtube-place",
            setAutoplayYoutube: true,
            classes: {
              popup: "popup",
              popupContent: "popup__content",
              popupActive: "popup_show",
              bodyActive: "popup-show"
            },
            focusCatch: true,
            closeEsc: true,
            bodyLock: true,
            bodyLockDelay: 500,
            hashSettings: { location: true, goHash: true },
            on: {
              beforeOpen: function() {
              },
              afterOpen: function() {
              },
              beforeClose: function() {
              },
              afterClose: function() {
              }
            }
          };
          this.isOpen = false, this.targetOpen = { selector: false, element: false }, this.previousOpen = { selector: false, element: false }, this.lastClosed = { selector: false, element: false }, this._dataValue = false, this.hash = false, this._reopen = false, this._selectorOpen = false, this.lastFocusEl = false, this._focusEl = [
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
            '[tabindex]:not([tabindex^="-"])'
          ], this.options = {
            ...t3,
            ...e3,
            classes: { ...t3.classes, ...e3?.classes },
            hashSettings: { ...t3.hashSettings, ...e3?.hashSettings },
            on: { ...t3.on, ...e3?.on }
          }, this.options.init && this.initPopups();
        }
        initPopups() {
          this.popupLogging("\u041F\u0440\u043E\u0441\u043D\u0443\u043B\u0441\u044F"), this.eventsPopup();
        }
        eventsPopup() {
          document.addEventListener(
            "click",
            function(e3) {
              const t3 = e3.target.closest(`[${this.options.attributeOpenButton}]`);
              if (t3)
                return e3.preventDefault(), this._dataValue = t3.getAttribute(
                  this.options.attributeOpenButton
                ) ? t3.getAttribute(this.options.attributeOpenButton) : "error", "error" !== this._dataValue ? (this.isOpen || (this.lastFocusEl = t3), this.targetOpen.selector = `${this._dataValue}`, this._selectorOpen = true, void this.open()) : void this.popupLogging(
                  `\u041E\u0439 \u043E\u0439, \u043D\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0443 ${t3.classList}`
                );
              return e3.target.closest(`[${this.options.attributeCloseButton}]`) || !e3.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen ? (e3.preventDefault(), void this.close()) : void 0;
            }.bind(this)
          ), document.addEventListener(
            "keydown",
            function(e3) {
              if (this.options.closeEsc && 27 == e3.which && "Escape" === e3.code && this.isOpen)
                return e3.preventDefault(), void this.close();
              this.options.focusCatch && 9 == e3.which && this.isOpen && this._focusCatch(e3);
            }.bind(this)
          ), this.options.hashSettings.goHash && (window.addEventListener(
            "hashchange",
            function() {
              window.location.hash ? this._openToHash() : this.close(this.targetOpen.selector);
            }.bind(this)
          ), window.addEventListener(
            "load",
            function() {
              window.location.hash && this._openToHash();
            }.bind(this)
          ));
        }
        open(e3) {
          if (e3 && "string" == typeof e3 && "" !== e3.trim() && (this.targetOpen.selector = e3, this._selectorOpen = true), this.isOpen && (this._reopen = true, this.close()), this._selectorOpen || (this.targetOpen.selector = this.lastClosed.selector), this._reopen || (this.previousActiveElement = document.activeElement), this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          ), this.targetOpen.element) {
            if (this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)) {
              const e4 = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`, t3 = document.createElement("iframe");
              t3.setAttribute("allowfullscreen", "");
              const i2 = this.options.setAutoplayYoutube ? "autoplay;" : "";
              t3.setAttribute("allow", `${i2}; encrypted-media`), t3.setAttribute("src", e4), this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) && this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(t3);
            }
            this.options.hashSettings.location && (this._getHash(), this._setHash()), this.options.on.beforeOpen(this), this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ), document.body.classList.add(this.options.classes.bodyActive), this._reopen ? this._reopen = false : a(), this.targetOpen.element.setAttribute("aria-hidden", "false"), this.previousOpen.selector = this.targetOpen.selector, this.previousOpen.element = this.targetOpen.element, this._selectorOpen = false, this.isOpen = true, setTimeout(() => {
              this._focusTrap();
            }, 50), document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ), this.popupLogging("\u041E\u0442\u043A\u0440\u044B\u043B \u043F\u043E\u043F\u0430\u043F");
          } else
            this.popupLogging(
              "\u041E\u0439 \u043E\u0439, \u0442\u0430\u043A\u043E\u0433\u043E \u043F\u043E\u043F\u0430\u043F\u0430 \u043D\u0435\u0442. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0441\u0442\u044C \u0432\u0432\u043E\u0434\u0430. "
            );
        }
        close(e3) {
          e3 && "string" == typeof e3 && "" !== e3.trim() && (this.previousOpen.selector = e3), this.isOpen && o && (this.options.on.beforeClose(this), this.targetOpen.element.hasAttribute(
            this.options.youtubeAttribute
          ) && this.targetOpen.element.querySelector(
            `[${this.options.youtubePlaceAttribute}]`
          ) && (this.targetOpen.element.querySelector(
            `[${this.options.youtubePlaceAttribute}]`
          ).innerHTML = ""), this.previousOpen.element.classList.remove(
            this.options.classes.popupActive
          ), this.previousOpen.element.setAttribute("aria-hidden", "true"), this._reopen || (document.body.classList.remove(this.options.classes.bodyActive), a(), this.isOpen = false), this._removeHash(), this._selectorOpen && (this.lastClosed.selector = this.previousOpen.selector, this.lastClosed.element = this.previousOpen.element), this.options.on.afterClose(this), setTimeout(() => {
            this._focusTrap();
          }, 50), this.popupLogging("\u0417\u0430\u043A\u0440\u044B\u043B \u043F\u043E\u043F\u0430\u043F"));
        }
        _getHash() {
          this.options.hashSettings.location && (this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#"));
        }
        _openToHash() {
          let e3 = document.querySelector(
            `.${window.location.hash.replace("#", "")}`
          ) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
          document.querySelector(
            `[${this.options.attributeOpenButton}="${e3}"]`
          ) && e3 && this.open(e3);
        }
        _setHash() {
          history.pushState("", "", this.hash);
        }
        _removeHash() {
          history.pushState("", "", window.location.href.split("#")[0]);
        }
        _focusCatch(e3) {
          const t3 = this.targetOpen.element.querySelectorAll(this._focusEl), i2 = Array.prototype.slice.call(t3), s2 = i2.indexOf(document.activeElement);
          e3.shiftKey && 0 === s2 && (i2[i2.length - 1].focus(), e3.preventDefault()), e3.shiftKey || s2 !== i2.length - 1 || (i2[0].focus(), e3.preventDefault());
        }
        _focusTrap() {
          const e3 = this.previousOpen.element.querySelectorAll(this._focusEl);
          !this.isOpen && this.lastFocusEl ? this.lastFocusEl.focus() : e3[0].focus();
        }
        popupLogging(e3) {
          this.options.logging && c(`[\u041F\u043E\u043F\u0430\u043F\u043E\u0441]: ${e3}`);
        }
      }({}), window.flsModules = e2;
      let h = {
        getErrors(e3) {
          let t3 = 0, i2 = e3.querySelectorAll("*[data-required]");
          return i2.length && i2.forEach((e4) => {
            null === e4.offsetParent && "SELECT" !== e4.tagName || e4.disabled || (t3 += this.validateInput(e4));
          }), t3;
        },
        validateInput(e3) {
          let t3 = 0;
          return "email" === e3.dataset.required ? (e3.value = e3.value.replace(" ", ""), this.emailTest(e3) ? (this.addError(e3), t3++) : this.removeError(e3)) : ("checkbox" !== e3.type || e3.checked) && e3.value ? this.removeError(e3) : (this.addError(e3), t3++), t3;
        },
        addError(e3) {
          e3.classList.add("_form-error"), e3.parentElement.classList.add("_form-error");
          let t3 = e3.parentElement.querySelector(".form__error");
          t3 && e3.parentElement.removeChild(t3), e3.dataset.error && e3.parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="form__error">${e3.dataset.error}</div>`
          );
        },
        removeError(e3) {
          e3.classList.remove("_form-error"), e3.parentElement.classList.remove("_form-error"), e3.parentElement.querySelector(".form__error") && e3.parentElement.removeChild(
            e3.parentElement.querySelector(".form__error")
          );
        },
        formClean(t3) {
          t3.reset(), setTimeout(() => {
            let i2 = t3.querySelectorAll("input,textarea");
            for (let e3 = 0; e3 < i2.length; e3++) {
              const t4 = i2[e3];
              t4.parentElement.classList.remove("_form-focus"), t4.classList.remove("_form-focus"), h.removeError(t4);
            }
            let s2 = t3.querySelectorAll(".checkbox__input");
            if (s2.length > 0)
              for (let e3 = 0; e3 < s2.length; e3++) {
                s2[e3].checked = false;
              }
            if (e2.select) {
              let i3 = t3.querySelectorAll(".select");
              if (i3.length)
                for (let t4 = 0; t4 < i3.length; t4++) {
                  const s3 = i3[t4].querySelector("select");
                  e2.select.selectBuild(s3);
                }
            }
          }, 0);
        },
        emailTest: (e3) => !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e3.value)
      };
      function u(e3) {
        return null !== e3 && "object" == typeof e3 && "constructor" in e3 && e3.constructor === Object;
      }
      function p(e3 = {}, t3 = {}) {
        Object.keys(t3).forEach((i2) => {
          void 0 === e3[i2] ? e3[i2] = t3[i2] : u(t3[i2]) && u(e3[i2]) && Object.keys(t3[i2]).length > 0 && p(e3[i2], t3[i2]);
        });
      }
      e2.select = new class {
        constructor(e3, t3 = null) {
          if (this.config = Object.assign({ init: true, logging: true }, e3), this.selectClasses = {
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
            classSelectOptionSelected: "_select-selected"
          }, this._this = this, this.config.init) {
            const e4 = t3 ? document.querySelectorAll(t3) : document.querySelectorAll("select");
            e4.length ? (this.selectsInit(e4), this.setLogging(`\u041F\u0440\u043E\u0441\u043D\u0443\u043B\u0441\u044F, \u043F\u043E\u0441\u0442\u0440\u043E\u0438\u043B \u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0432: (${e4.length})`)) : this.setLogging("\u0421\u043F\u043B\u044E, \u043D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E select zzZZZzZZz");
          }
        }
        getSelectClass(e3) {
          return `.${e3}`;
        }
        getSelectElement(e3, t3) {
          return {
            originalSelect: e3.querySelector("select"),
            selectElement: e3.querySelector(this.getSelectClass(t3))
          };
        }
        selectsInit(e3) {
          e3.forEach((e4, t3) => {
            this.selectInit(e4, t3 + 1);
          }), document.addEventListener(
            "click",
            function(e4) {
              this.selectsActions(e4);
            }.bind(this)
          ), document.addEventListener(
            "keydown",
            function(e4) {
              this.selectsActions(e4);
            }.bind(this)
          ), document.addEventListener(
            "focusin",
            function(e4) {
              this.selectsActions(e4);
            }.bind(this)
          ), document.addEventListener(
            "focusout",
            function(e4) {
              this.selectsActions(e4);
            }.bind(this)
          );
        }
        selectInit(e3, t3) {
          const i2 = this;
          let s2 = document.createElement("div");
          if (s2.classList.add(this.selectClasses.classSelect), e3.parentNode.insertBefore(s2, e3), s2.appendChild(e3), e3.hidden = true, t3 && (e3.dataset.id = t3), s2.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
          ), this.selectBuild(e3), this.getSelectPlaceholder(e3) && (e3.dataset.placeholder = this.getSelectPlaceholder(e3).value, this.getSelectPlaceholder(e3).label.show)) {
            this.getSelectElement(
              s2,
              this.selectClasses.classSelectTitle
            ).selectElement.insertAdjacentHTML(
              "afterbegin",
              `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(e3).label.text ? this.getSelectPlaceholder(e3).label.text : this.getSelectPlaceholder(e3).value}</span>`
            );
          }
          e3.dataset.speed = e3.dataset.speed ? e3.dataset.speed : "150", e3.addEventListener("change", function(e4) {
            i2.selectChange(e4);
          });
        }
        selectBuild(e3) {
          const t3 = e3.parentElement;
          t3.dataset.id = e3.dataset.id, t3.classList.add(
            e3.getAttribute("class") ? `select_${e3.getAttribute("class")}` : ""
          ), e3.multiple ? t3.classList.add(this.selectClasses.classSelectMultiple) : t3.classList.remove(this.selectClasses.classSelectMultiple), e3.hasAttribute("data-checkbox") && e3.multiple ? t3.classList.add(this.selectClasses.classSelectCheckBox) : t3.classList.remove(this.selectClasses.classSelectCheckBox), this.setSelectTitleValue(t3, e3), this.setOptions(t3, e3), e3.hasAttribute("data-search") && this.searchActions(t3), e3.hasAttribute("data-open") && this.selectAction(t3), this.selectDisabled(t3, e3);
        }
        selectsActions(e3) {
          const t3 = e3.target, i2 = e3.type;
          if (t3.closest(this.getSelectClass(this.selectClasses.classSelect)) || t3.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
            const s2 = t3.closest(".select") ? t3.closest(".select") : document.querySelector(
              `.${this.selectClasses.classSelect}[data-id="${t3.closest(
                this.getSelectClass(this.selectClasses.classSelectTag)
              ).dataset.selectId}"]`
            ), n2 = this.getSelectElement(s2).originalSelect;
            if ("click" === i2) {
              if (!n2.disabled) {
                if (t3.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                )) {
                  const e4 = t3.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ), i3 = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e4.dataset.selectId}"] .select__option[data-value="${e4.dataset.value}"]`
                  );
                  this.optionAction(s2, n2, i3);
                } else if (t3.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle)
                ))
                  this.selectAction(s2);
                else if (t3.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                )) {
                  const e4 = t3.closest(
                    this.getSelectClass(this.selectClasses.classSelectOption)
                  );
                  this.optionAction(s2, n2, e4);
                }
              }
            } else
              "focusin" === i2 || "focusout" === i2 ? t3.closest(
                this.getSelectClass(this.selectClasses.classSelect)
              ) && ("focusin" === i2 ? s2.classList.add(this.selectClasses.classSelectFocus) : s2.classList.remove(this.selectClasses.classSelectFocus)) : "keydown" === i2 && "Escape" === e3.code && this.selects\u0421lose();
          } else this.selects\u0421lose();
        }
        selects\u0421lose() {
          const e3 = document.querySelectorAll(
            `${this.getSelectClass(
              this.selectClasses.classSelect
            )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
          );
          e3.length && e3.forEach((e4) => {
            this.selectAction(e4);
          });
        }
        selectAction(e3) {
          const t3 = this.getSelectElement(e3).originalSelect, i2 = this.getSelectElement(
            e3,
            this.selectClasses.classSelectOptions
          ).selectElement;
          i2.classList.contains("_slide") || (e3.classList.toggle(this.selectClasses.classSelectOpen), n(i2, t3.dataset.speed));
        }
        setSelectTitleValue(e3, t3) {
          const i2 = this.getSelectElement(
            e3,
            this.selectClasses.classSelectBody
          ).selectElement, s2 = this.getSelectElement(
            e3,
            this.selectClasses.classSelectTitle
          ).selectElement;
          s2 && s2.remove(), i2.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e3, t3));
        }
        getSelectTitleValue(e3, t3) {
          let i2 = this.getSelectedOptionsData(t3, 2).html;
          if (t3.multiple && t3.hasAttribute("data-tags") && (i2 = this.getSelectedOptionsData(t3).elements.map(
            (t4) => `<span role="button" data-select-id="${e3.dataset.id}" data-value="${t4.value}" class="_select-tag">${this.getSelectElementContent(
              t4
            )}</span>`
          ).join(""), t3.dataset.tags && document.querySelector(t3.dataset.tags) && (document.querySelector(t3.dataset.tags).innerHTML = i2, t3.hasAttribute("data-search") && (i2 = false))), i2 = i2.length ? i2 : t3.dataset.placeholder, this.getSelectedOptionsData(t3).values.length ? e3.classList.add(this.selectClasses.classSelectActive) : e3.classList.remove(this.selectClasses.classSelectActive), t3.hasAttribute("data-search"))
            return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${i2}" data-placeholder="${i2}" class="${this.selectClasses.classSelectInput}"></span></div>`;
          {
            const e4 = this.getSelectedOptionsData(t3).elements.length && this.getSelectedOptionsData(t3).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(t3).elements[0].dataset.class}` : "";
            return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e4}">${i2}</span></span></button>`;
          }
        }
        getSelectElementContent(e3) {
          const t3 = e3.dataset.asset ? `${e3.dataset.asset}` : "", i2 = t3.indexOf("img") >= 0 ? `<img src="${t3}" alt="">` : t3;
          let s2 = "";
          return s2 += t3 ? `<span class="${this.selectClasses.classSelectRow}">` : "", s2 += t3 ? `<span class="${this.selectClasses.classSelectData}">` : "", s2 += t3 ? i2 : "", s2 += t3 ? "</span>" : "", s2 += t3 ? `<span class="${this.selectClasses.classSelectText}">` : "", s2 += e3.textContent, s2 += t3 ? "</span>" : "", s2 += t3 ? "</span>" : "", s2;
        }
        getSelectPlaceholder(e3) {
          const t3 = Array.from(e3.options).find((e4) => !e4.value);
          if (t3)
            return {
              value: t3.textContent,
              show: t3.hasAttribute("data-show"),
              label: {
                show: t3.hasAttribute("data-label"),
                text: t3.dataset.label
              }
            };
        }
        getSelectedOptionsData(e3, t3) {
          let i2 = [];
          return e3.multiple ? i2 = Array.from(e3.options).filter((e4) => e4.value).filter((e4) => e4.selected) : i2.push(e3.options[e3.selectedIndex]), {
            elements: i2.map((e4) => e4),
            values: i2.filter((e4) => e4.value).map((e4) => e4.value),
            html: i2.map((e4) => this.getSelectElementContent(e4))
          };
        }
        getOptions(e3) {
          let t3 = e3.hasAttribute("data-scroll") ? "data-simplebar" : "", i2 = e3.dataset.scroll ? `style="max-height:${e3.dataset.scroll}px"` : "", s2 = Array.from(e3.options);
          if (s2.length > 0) {
            let n2 = "";
            return (this.getSelectPlaceholder(e3) && !this.getSelectPlaceholder(e3).show || e3.multiple) && (s2 = s2.filter((e4) => e4.value)), n2 += t3 ? `<div ${t3} ${i2} class="${this.selectClasses.classSelectOptionsScroll}">` : "", s2.forEach((t4) => {
              n2 += this.getOption(t4, e3);
            }), n2 += t3 ? "</div>" : "", n2;
          }
        }
        getOption(e3, t3) {
          const i2 = e3.selected && t3.multiple ? ` ${this.selectClasses.classSelectOptionSelected}` : "", s2 = e3.selected && !t3.hasAttribute("data-show-selected") ? "hidden" : "", n2 = e3.dataset.class ? ` ${e3.dataset.class}` : "", o2 = !!e3.dataset.href && e3.dataset.href, a2 = e3.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
          let r2 = "";
          return r2 += o2 ? `<a ${a2} ${s2} href="${o2}" data-value="${e3.value}" class="${this.selectClasses.classSelectOption}${n2}${i2}">` : `<button ${s2} class="${this.selectClasses.classSelectOption}${n2}${i2}" data-value="${e3.value}" type="button">`, r2 += this.getSelectElementContent(e3), r2 += o2 ? "</a>" : "</button>", r2;
        }
        setOptions(e3, t3) {
          this.getSelectElement(
            e3,
            this.selectClasses.classSelectOptions
          ).selectElement.innerHTML = this.getOptions(t3);
        }
        optionAction(e3, t3, i2) {
          if (t3.multiple) {
            i2.classList.toggle(this.selectClasses.classSelectOptionSelected);
            this.getSelectedOptionsData(t3).elements.forEach((e4) => {
              e4.removeAttribute("selected");
            });
            e3.querySelectorAll(
              this.getSelectClass(this.selectClasses.classSelectOptionSelected)
            ).forEach((e4) => {
              t3.querySelector(`option[value="${e4.dataset.value}"]`).setAttribute(
                "selected",
                "selected"
              );
            });
          } else
            t3.hasAttribute("data-show-selected") || (e3.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ) && (e3.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ).hidden = false), i2.hidden = true), t3.value = i2.hasAttribute("data-value") ? i2.dataset.value : i2.textContent, this.selectAction(e3);
          this.setSelectTitleValue(e3, t3), this.setSelectChange(t3);
        }
        selectChange(e3) {
          const t3 = e3.target;
          this.selectBuild(t3), this.setSelectChange(t3);
        }
        setSelectChange(e3) {
          if (e3.hasAttribute("data-validate") && h.validateInput(e3), e3.hasAttribute("data-submit") && e3.value) {
            let t4 = document.createElement("button");
            t4.type = "submit", e3.closest("form").append(t4), t4.click(), t4.remove();
          }
          const t3 = e3.parentElement;
          this.selectCallback(t3, e3);
        }
        selectDisabled(e3, t3) {
          t3.disabled ? (e3.classList.add(this.selectClasses.classSelectDisabled), this.getSelectElement(
            e3,
            this.selectClasses.classSelectTitle
          ).selectElement.disabled = true) : (e3.classList.remove(this.selectClasses.classSelectDisabled), this.getSelectElement(
            e3,
            this.selectClasses.classSelectTitle
          ).selectElement.disabled = false);
        }
        searchActions(e3) {
          this.getSelectElement(e3).originalSelect;
          const t3 = this.getSelectElement(
            e3,
            this.selectClasses.classSelectInput
          ).selectElement, i2 = this.getSelectElement(
            e3,
            this.selectClasses.classSelectOptions
          ).selectElement, s2 = i2.querySelectorAll(`.${this.selectClasses.classSelectOption}`), n2 = this;
          t3.addEventListener("input", function() {
            s2.forEach((e4) => {
              e4.textContent.toUpperCase().indexOf(t3.value.toUpperCase()) >= 0 ? e4.hidden = false : e4.hidden = true;
            }), true === i2.hidden && n2.selectAction(e3);
          });
        }
        selectCallback(e3, t3) {
          document.dispatchEvent(
            new CustomEvent("selectCallback", { detail: { select: t3 } })
          );
        }
        setLogging(e3) {
          this.config.logging && c(`[select]: ${e3}`);
        }
      }({}), window.select = e2.select;
      const f = {
        body: {},
        addEventListener() {
        },
        removeEventListener() {
        },
        activeElement: { blur() {
        }, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {
        } }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {
          },
          getElementsByTagName: () => []
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
          search: ""
        }
      };
      function g() {
        const e3 = "undefined" != typeof document ? document : {};
        return p(e3, f), e3;
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
          search: ""
        },
        history: { replaceState() {
        }, pushState() {
        }, go() {
        }, back() {
        } },
        CustomEvent: function() {
          return this;
        },
        addEventListener() {
        },
        removeEventListener() {
        },
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {
        },
        Date() {
        },
        screen: {},
        setTimeout() {
        },
        clearTimeout() {
        },
        matchMedia: () => ({}),
        requestAnimationFrame: (e3) => "undefined" == typeof setTimeout ? (e3(), null) : setTimeout(e3, 0),
        cancelAnimationFrame(e3) {
          "undefined" != typeof setTimeout && clearTimeout(e3);
        }
      };
      function v() {
        const e3 = "undefined" != typeof window ? window : {};
        return p(e3, m), e3;
      }
      class b extends Array {
        constructor(e3) {
          "number" == typeof e3 ? super(e3) : (super(...e3 || []), function(e4) {
            const t3 = e4.__proto__;
            Object.defineProperty(e4, "__proto__", {
              get: () => t3,
              set(e5) {
                t3.__proto__ = e5;
              }
            });
          }(this));
        }
      }
      function y(e3 = []) {
        const t3 = [];
        return e3.forEach((e4) => {
          Array.isArray(e4) ? t3.push(...y(e4)) : t3.push(e4);
        }), t3;
      }
      function w(e3, t3) {
        return Array.prototype.filter.call(e3, t3);
      }
      function S(e3, t3) {
        const i2 = v(), s2 = g();
        let n2 = [];
        if (!t3 && e3 instanceof b) return e3;
        if (!e3) return new b(n2);
        if ("string" == typeof e3) {
          const i3 = e3.trim();
          if (i3.indexOf("<") >= 0 && i3.indexOf(">") >= 0) {
            let e4 = "div";
            0 === i3.indexOf("<li") && (e4 = "ul"), 0 === i3.indexOf("<tr") && (e4 = "tbody"), 0 !== i3.indexOf("<td") && 0 !== i3.indexOf("<th") || (e4 = "tr"), 0 === i3.indexOf("<tbody") && (e4 = "table"), 0 === i3.indexOf("<option") && (e4 = "select");
            const t4 = s2.createElement(e4);
            t4.innerHTML = i3;
            for (let e5 = 0; e5 < t4.childNodes.length; e5 += 1)
              n2.push(t4.childNodes[e5]);
          } else
            n2 = function(e4, t4) {
              if ("string" != typeof e4) return [e4];
              const i4 = [], s3 = t4.querySelectorAll(e4);
              for (let e5 = 0; e5 < s3.length; e5 += 1) i4.push(s3[e5]);
              return i4;
            }(e3.trim(), t3 || s2);
        } else if (e3.nodeType || e3 === i2 || e3 === s2) n2.push(e3);
        else if (Array.isArray(e3)) {
          if (e3 instanceof b) return e3;
          n2 = e3;
        }
        return new b(
          function(e4) {
            const t4 = [];
            for (let i3 = 0; i3 < e4.length; i3 += 1)
              -1 === t4.indexOf(e4[i3]) && t4.push(e4[i3]);
            return t4;
          }(n2)
        );
      }
      S.fn = b.prototype;
      const x = "resize scroll".split(" ");
      function E(e3) {
        return function(...t3) {
          if (void 0 === t3[0]) {
            for (let t4 = 0; t4 < this.length; t4 += 1)
              x.indexOf(e3) < 0 && (e3 in this[t4] ? this[t4][e3]() : S(this[t4]).trigger(e3));
            return this;
          }
          return this.on(e3, ...t3);
        };
      }
      E("click"), E("blur"), E("focus"), E("focusin"), E("focusout"), E("keyup"), E("keydown"), E("keypress"), E("submit"), E("change"), E("mousedown"), E("mousemove"), E("mouseup"), E("mouseenter"), E("mouseleave"), E("mouseout"), E("mouseover"), E("touchstart"), E("touchend"), E("touchmove"), E("resize"), E("scroll");
      const C = {
        addClass: function(...e3) {
          const t3 = y(e3.map((e4) => e4.split(" ")));
          return this.forEach((e4) => {
            e4.classList.add(...t3);
          }), this;
        },
        removeClass: function(...e3) {
          const t3 = y(e3.map((e4) => e4.split(" ")));
          return this.forEach((e4) => {
            e4.classList.remove(...t3);
          }), this;
        },
        hasClass: function(...e3) {
          const t3 = y(e3.map((e4) => e4.split(" ")));
          return w(this, (e4) => t3.filter((t4) => e4.classList.contains(t4)).length > 0).length > 0;
        },
        toggleClass: function(...e3) {
          const t3 = y(e3.map((e4) => e4.split(" ")));
          this.forEach((e4) => {
            t3.forEach((t4) => {
              e4.classList.toggle(t4);
            });
          });
        },
        attr: function(e3, t3) {
          if (1 === arguments.length && "string" == typeof e3)
            return this[0] ? this[0].getAttribute(e3) : void 0;
          for (let i2 = 0; i2 < this.length; i2 += 1)
            if (2 === arguments.length) this[i2].setAttribute(e3, t3);
            else
              for (const t4 in e3)
                this[i2][t4] = e3[t4], this[i2].setAttribute(t4, e3[t4]);
          return this;
        },
        removeAttr: function(e3) {
          for (let t3 = 0; t3 < this.length; t3 += 1) this[t3].removeAttribute(e3);
          return this;
        },
        transform: function(e3) {
          for (let t3 = 0; t3 < this.length; t3 += 1) this[t3].style.transform = e3;
          return this;
        },
        transition: function(e3) {
          for (let t3 = 0; t3 < this.length; t3 += 1)
            this[t3].style.transitionDuration = "string" != typeof e3 ? `${e3}ms` : e3;
          return this;
        },
        on: function(...e3) {
          let [t3, i2, s2, n2] = e3;
          function o2(e4) {
            const t4 = e4.target;
            if (!t4) return;
            const n3 = e4.target.dom7EventData || [];
            if (n3.indexOf(e4) < 0 && n3.unshift(e4), S(t4).is(i2)) s2.apply(t4, n3);
            else {
              const e5 = S(t4).parents();
              for (let t5 = 0; t5 < e5.length; t5 += 1)
                S(e5[t5]).is(i2) && s2.apply(e5[t5], n3);
            }
          }
          function a2(e4) {
            const t4 = e4 && e4.target && e4.target.dom7EventData || [];
            t4.indexOf(e4) < 0 && t4.unshift(e4), s2.apply(this, t4);
          }
          "function" == typeof e3[1] && ([t3, s2, n2] = e3, i2 = void 0), n2 || (n2 = false);
          const r2 = t3.split(" ");
          let l2;
          for (let e4 = 0; e4 < this.length; e4 += 1) {
            const t4 = this[e4];
            if (i2)
              for (l2 = 0; l2 < r2.length; l2 += 1) {
                const e5 = r2[l2];
                t4.dom7LiveListeners || (t4.dom7LiveListeners = {}), t4.dom7LiveListeners[e5] || (t4.dom7LiveListeners[e5] = []), t4.dom7LiveListeners[e5].push({ listener: s2, proxyListener: o2 }), t4.addEventListener(e5, o2, n2);
              }
            else
              for (l2 = 0; l2 < r2.length; l2 += 1) {
                const e5 = r2[l2];
                t4.dom7Listeners || (t4.dom7Listeners = {}), t4.dom7Listeners[e5] || (t4.dom7Listeners[e5] = []), t4.dom7Listeners[e5].push({ listener: s2, proxyListener: a2 }), t4.addEventListener(e5, a2, n2);
              }
          }
          return this;
        },
        off: function(...e3) {
          let [t3, i2, s2, n2] = e3;
          "function" == typeof e3[1] && ([t3, s2, n2] = e3, i2 = void 0), n2 || (n2 = false);
          const o2 = t3.split(" ");
          for (let e4 = 0; e4 < o2.length; e4 += 1) {
            const t4 = o2[e4];
            for (let e5 = 0; e5 < this.length; e5 += 1) {
              const o3 = this[e5];
              let a2;
              if (!i2 && o3.dom7Listeners ? a2 = o3.dom7Listeners[t4] : i2 && o3.dom7LiveListeners && (a2 = o3.dom7LiveListeners[t4]), a2 && a2.length)
                for (let e6 = a2.length - 1; e6 >= 0; e6 -= 1) {
                  const i3 = a2[e6];
                  s2 && i3.listener === s2 || s2 && i3.listener && i3.listener.dom7proxy && i3.listener.dom7proxy === s2 ? (o3.removeEventListener(t4, i3.proxyListener, n2), a2.splice(e6, 1)) : s2 || (o3.removeEventListener(t4, i3.proxyListener, n2), a2.splice(e6, 1));
                }
            }
          }
          return this;
        },
        trigger: function(...e3) {
          const t3 = v(), i2 = e3[0].split(" "), s2 = e3[1];
          for (let n2 = 0; n2 < i2.length; n2 += 1) {
            const o2 = i2[n2];
            for (let i3 = 0; i3 < this.length; i3 += 1) {
              const n3 = this[i3];
              if (t3.CustomEvent) {
                const i4 = new t3.CustomEvent(o2, {
                  detail: s2,
                  bubbles: true,
                  cancelable: true
                });
                n3.dom7EventData = e3.filter((e4, t4) => t4 > 0), n3.dispatchEvent(i4), n3.dom7EventData = [], delete n3.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function(e3) {
          const t3 = this;
          return e3 && t3.on("transitionend", function i2(s2) {
            s2.target === this && (e3.call(this, s2), t3.off("transitionend", i2));
          }), this;
        },
        outerWidth: function(e3) {
          if (this.length > 0) {
            if (e3) {
              const e4 = this.styles();
              return this[0].offsetWidth + parseFloat(e4.getPropertyValue("margin-right")) + parseFloat(e4.getPropertyValue("margin-left"));
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function(e3) {
          if (this.length > 0) {
            if (e3) {
              const e4 = this.styles();
              return this[0].offsetHeight + parseFloat(e4.getPropertyValue("margin-top")) + parseFloat(e4.getPropertyValue("margin-bottom"));
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function() {
          const e3 = v();
          return this[0] ? e3.getComputedStyle(this[0], null) : {};
        },
        offset: function() {
          if (this.length > 0) {
            const e3 = v(), t3 = g(), i2 = this[0], s2 = i2.getBoundingClientRect(), n2 = t3.body, o2 = i2.clientTop || n2.clientTop || 0, a2 = i2.clientLeft || n2.clientLeft || 0, r2 = i2 === e3 ? e3.scrollY : i2.scrollTop, l2 = i2 === e3 ? e3.scrollX : i2.scrollLeft;
            return { top: s2.top + r2 - o2, left: s2.left + l2 - a2 };
          }
          return null;
        },
        css: function(e3, t3) {
          const i2 = v();
          let s2;
          if (1 === arguments.length) {
            if ("string" != typeof e3) {
              for (s2 = 0; s2 < this.length; s2 += 1)
                for (const t4 in e3) this[s2].style[t4] = e3[t4];
              return this;
            }
            if (this[0])
              return i2.getComputedStyle(this[0], null).getPropertyValue(e3);
          }
          if (2 === arguments.length && "string" == typeof e3) {
            for (s2 = 0; s2 < this.length; s2 += 1) this[s2].style[e3] = t3;
            return this;
          }
          return this;
        },
        each: function(e3) {
          return e3 ? (this.forEach((t3, i2) => {
            e3.apply(t3, [t3, i2]);
          }), this) : this;
        },
        html: function(e3) {
          if (void 0 === e3) return this[0] ? this[0].innerHTML : null;
          for (let t3 = 0; t3 < this.length; t3 += 1) this[t3].innerHTML = e3;
          return this;
        },
        text: function(e3) {
          if (void 0 === e3) return this[0] ? this[0].textContent.trim() : null;
          for (let t3 = 0; t3 < this.length; t3 += 1) this[t3].textContent = e3;
          return this;
        },
        is: function(e3) {
          const t3 = v(), i2 = g(), s2 = this[0];
          let n2, o2;
          if (!s2 || void 0 === e3) return false;
          if ("string" == typeof e3) {
            if (s2.matches) return s2.matches(e3);
            if (s2.webkitMatchesSelector) return s2.webkitMatchesSelector(e3);
            if (s2.msMatchesSelector) return s2.msMatchesSelector(e3);
            for (n2 = S(e3), o2 = 0; o2 < n2.length; o2 += 1) if (n2[o2] === s2) return true;
            return false;
          }
          if (e3 === i2) return s2 === i2;
          if (e3 === t3) return s2 === t3;
          if (e3.nodeType || e3 instanceof b) {
            for (n2 = e3.nodeType ? [e3] : e3, o2 = 0; o2 < n2.length; o2 += 1)
              if (n2[o2] === s2) return true;
            return false;
          }
          return false;
        },
        index: function() {
          let e3, t3 = this[0];
          if (t3) {
            for (e3 = 0; null !== (t3 = t3.previousSibling); )
              1 === t3.nodeType && (e3 += 1);
            return e3;
          }
        },
        eq: function(e3) {
          if (void 0 === e3) return this;
          const t3 = this.length;
          if (e3 > t3 - 1) return S([]);
          if (e3 < 0) {
            const i2 = t3 + e3;
            return S(i2 < 0 ? [] : [this[i2]]);
          }
          return S([this[e3]]);
        },
        append: function(...e3) {
          let t3;
          const i2 = g();
          for (let s2 = 0; s2 < e3.length; s2 += 1) {
            t3 = e3[s2];
            for (let e4 = 0; e4 < this.length; e4 += 1)
              if ("string" == typeof t3) {
                const s3 = i2.createElement("div");
                for (s3.innerHTML = t3; s3.firstChild; )
                  this[e4].appendChild(s3.firstChild);
              } else if (t3 instanceof b)
                for (let i3 = 0; i3 < t3.length; i3 += 1) this[e4].appendChild(t3[i3]);
              else this[e4].appendChild(t3);
          }
          return this;
        },
        prepend: function(e3) {
          const t3 = g();
          let i2, s2;
          for (i2 = 0; i2 < this.length; i2 += 1)
            if ("string" == typeof e3) {
              const n2 = t3.createElement("div");
              for (n2.innerHTML = e3, s2 = n2.childNodes.length - 1; s2 >= 0; s2 -= 1)
                this[i2].insertBefore(n2.childNodes[s2], this[i2].childNodes[0]);
            } else if (e3 instanceof b)
              for (s2 = 0; s2 < e3.length; s2 += 1)
                this[i2].insertBefore(e3[s2], this[i2].childNodes[0]);
            else this[i2].insertBefore(e3, this[i2].childNodes[0]);
          return this;
        },
        next: function(e3) {
          return this.length > 0 ? e3 ? this[0].nextElementSibling && S(this[0].nextElementSibling).is(e3) ? S([this[0].nextElementSibling]) : S([]) : this[0].nextElementSibling ? S([this[0].nextElementSibling]) : S([]) : S([]);
        },
        nextAll: function(e3) {
          const t3 = [];
          let i2 = this[0];
          if (!i2) return S([]);
          for (; i2.nextElementSibling; ) {
            const s2 = i2.nextElementSibling;
            e3 ? S(s2).is(e3) && t3.push(s2) : t3.push(s2), i2 = s2;
          }
          return S(t3);
        },
        prev: function(e3) {
          if (this.length > 0) {
            const t3 = this[0];
            return e3 ? t3.previousElementSibling && S(t3.previousElementSibling).is(e3) ? S([t3.previousElementSibling]) : S([]) : t3.previousElementSibling ? S([t3.previousElementSibling]) : S([]);
          }
          return S([]);
        },
        prevAll: function(e3) {
          const t3 = [];
          let i2 = this[0];
          if (!i2) return S([]);
          for (; i2.previousElementSibling; ) {
            const s2 = i2.previousElementSibling;
            e3 ? S(s2).is(e3) && t3.push(s2) : t3.push(s2), i2 = s2;
          }
          return S(t3);
        },
        parent: function(e3) {
          const t3 = [];
          for (let i2 = 0; i2 < this.length; i2 += 1)
            null !== this[i2].parentNode && (e3 ? S(this[i2].parentNode).is(e3) && t3.push(this[i2].parentNode) : t3.push(this[i2].parentNode));
          return S(t3);
        },
        parents: function(e3) {
          const t3 = [];
          for (let i2 = 0; i2 < this.length; i2 += 1) {
            let s2 = this[i2].parentNode;
            for (; s2; )
              e3 ? S(s2).is(e3) && t3.push(s2) : t3.push(s2), s2 = s2.parentNode;
          }
          return S(t3);
        },
        closest: function(e3) {
          let t3 = this;
          return void 0 === e3 ? S([]) : (t3.is(e3) || (t3 = t3.parents(e3).eq(0)), t3);
        },
        find: function(e3) {
          const t3 = [];
          for (let i2 = 0; i2 < this.length; i2 += 1) {
            const s2 = this[i2].querySelectorAll(e3);
            for (let e4 = 0; e4 < s2.length; e4 += 1) t3.push(s2[e4]);
          }
          return S(t3);
        },
        children: function(e3) {
          const t3 = [];
          for (let i2 = 0; i2 < this.length; i2 += 1) {
            const s2 = this[i2].children;
            for (let i3 = 0; i3 < s2.length; i3 += 1)
              e3 && !S(s2[i3]).is(e3) || t3.push(s2[i3]);
          }
          return S(t3);
        },
        filter: function(e3) {
          return S(w(this, e3));
        },
        remove: function() {
          for (let e3 = 0; e3 < this.length; e3 += 1)
            this[e3].parentNode && this[e3].parentNode.removeChild(this[e3]);
          return this;
        }
      };
      Object.keys(C).forEach((e3) => {
        Object.defineProperty(S.fn, e3, { value: C[e3], writable: true });
      });
      const T = S;
      function P(e3, t3 = 0) {
        return setTimeout(e3, t3);
      }
      function M() {
        return Date.now();
      }
      function O(e3, t3 = "x") {
        const i2 = v();
        let s2, n2, o2;
        const a2 = function(e4) {
          const t4 = v();
          let i3;
          return t4.getComputedStyle && (i3 = t4.getComputedStyle(e4, null)), !i3 && e4.currentStyle && (i3 = e4.currentStyle), i3 || (i3 = e4.style), i3;
        }(e3);
        return i2.WebKitCSSMatrix ? (n2 = a2.transform || a2.webkitTransform, n2.split(",").length > 6 && (n2 = n2.split(", ").map((e4) => e4.replace(",", ".")).join(", ")), o2 = new i2.WebKitCSSMatrix("none" === n2 ? "" : n2)) : (o2 = a2.MozTransform || a2.OTransform || a2.MsTransform || a2.msTransform || a2.transform || a2.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s2 = o2.toString().split(",")), "x" === t3 && (n2 = i2.WebKitCSSMatrix ? o2.m41 : 16 === s2.length ? parseFloat(s2[12]) : parseFloat(s2[4])), "y" === t3 && (n2 = i2.WebKitCSSMatrix ? o2.m42 : 16 === s2.length ? parseFloat(s2[13]) : parseFloat(s2[5])), n2 || 0;
      }
      function L(e3) {
        return "object" == typeof e3 && null !== e3 && e3.constructor && "Object" === Object.prototype.toString.call(e3).slice(8, -1);
      }
      function A(...e3) {
        const t3 = Object(e3[0]), i2 = ["__proto__", "constructor", "prototype"];
        for (let n2 = 1; n2 < e3.length; n2 += 1) {
          const o2 = e3[n2];
          if (null != o2 && (s2 = o2, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s2 instanceof HTMLElement : s2 && (1 === s2.nodeType || 11 === s2.nodeType)))) {
            const e4 = Object.keys(Object(o2)).filter((e5) => i2.indexOf(e5) < 0);
            for (let i3 = 0, s3 = e4.length; i3 < s3; i3 += 1) {
              const s4 = e4[i3], n3 = Object.getOwnPropertyDescriptor(o2, s4);
              void 0 !== n3 && n3.enumerable && (L(t3[s4]) && L(o2[s4]) ? o2[s4].__swiper__ ? t3[s4] = o2[s4] : A(t3[s4], o2[s4]) : !L(t3[s4]) && L(o2[s4]) ? (t3[s4] = {}, o2[s4].__swiper__ ? t3[s4] = o2[s4] : A(t3[s4], o2[s4])) : t3[s4] = o2[s4]);
            }
          }
        }
        var s2;
        return t3;
      }
      function k(e3, t3, i2) {
        e3.style.setProperty(t3, i2);
      }
      function I({ swiper: e3, targetPosition: t3, side: i2 }) {
        const s2 = v(), n2 = -e3.translate;
        let o2, a2 = null;
        const r2 = e3.params.speed;
        e3.wrapperEl.style.scrollSnapType = "none", s2.cancelAnimationFrame(e3.cssModeFrameID);
        const l2 = t3 > n2 ? "next" : "prev", c2 = (e4, t4) => "next" === l2 && e4 >= t4 || "prev" === l2 && e4 <= t4, d2 = () => {
          o2 = (/* @__PURE__ */ new Date()).getTime(), null === a2 && (a2 = o2);
          const l3 = Math.max(Math.min((o2 - a2) / r2, 1), 0), h2 = 0.5 - Math.cos(l3 * Math.PI) / 2;
          let u2 = n2 + h2 * (t3 - n2);
          if (c2(u2, t3) && (u2 = t3), e3.wrapperEl.scrollTo({ [i2]: u2 }), c2(u2, t3))
            return e3.wrapperEl.style.overflow = "hidden", e3.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
              e3.wrapperEl.style.overflow = "", e3.wrapperEl.scrollTo({ [i2]: u2 });
            }), void s2.cancelAnimationFrame(e3.cssModeFrameID);
          e3.cssModeFrameID = s2.requestAnimationFrame(d2);
        };
        d2();
      }
      let _, z, $;
      function D() {
        return _ || (_ = function() {
          const e3 = v(), t3 = g();
          return {
            smoothScroll: t3.documentElement && "scrollBehavior" in t3.documentElement.style,
            touch: !!("ontouchstart" in e3 || e3.DocumentTouch && t3 instanceof e3.DocumentTouch),
            passiveListener: function() {
              let t4 = false;
              try {
                const i2 = Object.defineProperty({}, "passive", {
                  get() {
                    t4 = true;
                  }
                });
                e3.addEventListener("testPassiveListener", null, i2);
              } catch (e4) {
              }
              return t4;
            }(),
            gestures: "ongesturestart" in e3
          };
        }()), _;
      }
      function R(e3 = {}) {
        return z || (z = function({ userAgent: e4 } = {}) {
          const t3 = D(), i2 = v(), s2 = i2.navigator.platform, n2 = e4 || i2.navigator.userAgent, o2 = { ios: false, android: false }, a2 = i2.screen.width, r2 = i2.screen.height, l2 = n2.match(/(Android);?[\s\/]+([\d.]+)?/);
          let c2 = n2.match(/(iPad).*OS\s([\d_]+)/);
          const d2 = n2.match(/(iPod)(.*OS\s([\d_]+))?/), h2 = !c2 && n2.match(/(iPhone\sOS|iOS)\s([\d_]+)/), u2 = "Win32" === s2;
          let p2 = "MacIntel" === s2;
          return !c2 && p2 && t3.touch && [
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
            "1080x810"
          ].indexOf(`${a2}x${r2}`) >= 0 && (c2 = n2.match(/(Version)\/([\d.]+)/), c2 || (c2 = [0, 1, "13_0_0"]), p2 = false), l2 && !u2 && (o2.os = "android", o2.android = true), (c2 || h2 || d2) && (o2.os = "ios", o2.ios = true), o2;
        }(e3)), z;
      }
      function F() {
        return $ || ($ = function() {
          const e3 = v();
          return {
            isSafari: function() {
              const t3 = e3.navigator.userAgent.toLowerCase();
              return t3.indexOf("safari") >= 0 && t3.indexOf("chrome") < 0 && t3.indexOf("android") < 0;
            }(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e3.navigator.userAgent
            )
          };
        }()), $;
      }
      const j = {
        on(e3, t3, i2) {
          const s2 = this;
          if (!s2.eventsListeners || s2.destroyed) return s2;
          if ("function" != typeof t3) return s2;
          const n2 = i2 ? "unshift" : "push";
          return e3.split(" ").forEach((e4) => {
            s2.eventsListeners[e4] || (s2.eventsListeners[e4] = []), s2.eventsListeners[e4][n2](t3);
          }), s2;
        },
        once(e3, t3, i2) {
          const s2 = this;
          if (!s2.eventsListeners || s2.destroyed) return s2;
          if ("function" != typeof t3) return s2;
          function n2(...i3) {
            s2.off(e3, n2), n2.__emitterProxy && delete n2.__emitterProxy, t3.apply(s2, i3);
          }
          return n2.__emitterProxy = t3, s2.on(e3, n2, i2);
        },
        onAny(e3, t3) {
          const i2 = this;
          if (!i2.eventsListeners || i2.destroyed) return i2;
          if ("function" != typeof e3) return i2;
          const s2 = t3 ? "unshift" : "push";
          return i2.eventsAnyListeners.indexOf(e3) < 0 && i2.eventsAnyListeners[s2](e3), i2;
        },
        offAny(e3) {
          const t3 = this;
          if (!t3.eventsListeners || t3.destroyed) return t3;
          if (!t3.eventsAnyListeners) return t3;
          const i2 = t3.eventsAnyListeners.indexOf(e3);
          return i2 >= 0 && t3.eventsAnyListeners.splice(i2, 1), t3;
        },
        off(e3, t3) {
          const i2 = this;
          return !i2.eventsListeners || i2.destroyed ? i2 : i2.eventsListeners ? (e3.split(" ").forEach((e4) => {
            void 0 === t3 ? i2.eventsListeners[e4] = [] : i2.eventsListeners[e4] && i2.eventsListeners[e4].forEach((s2, n2) => {
              (s2 === t3 || s2.__emitterProxy && s2.__emitterProxy === t3) && i2.eventsListeners[e4].splice(n2, 1);
            });
          }), i2) : i2;
        },
        emit(...e3) {
          const t3 = this;
          if (!t3.eventsListeners || t3.destroyed) return t3;
          if (!t3.eventsListeners) return t3;
          let i2, s2, n2;
          "string" == typeof e3[0] || Array.isArray(e3[0]) ? (i2 = e3[0], s2 = e3.slice(1, e3.length), n2 = t3) : (i2 = e3[0].events, s2 = e3[0].data, n2 = e3[0].context || t3), s2.unshift(n2);
          return (Array.isArray(i2) ? i2 : i2.split(" ")).forEach((e4) => {
            t3.eventsAnyListeners && t3.eventsAnyListeners.length && t3.eventsAnyListeners.forEach((t4) => {
              t4.apply(n2, [e4, ...s2]);
            }), t3.eventsListeners && t3.eventsListeners[e4] && t3.eventsListeners[e4].forEach((e5) => {
              e5.apply(n2, s2);
            });
          }), t3;
        }
      };
      const B = {
        updateSize: function() {
          const e3 = this;
          let t3, i2;
          const s2 = e3.$el;
          t3 = void 0 !== e3.params.width && null !== e3.params.width ? e3.params.width : s2[0].clientWidth, i2 = void 0 !== e3.params.height && null !== e3.params.height ? e3.params.height : s2[0].clientHeight, 0 === t3 && e3.isHorizontal() || 0 === i2 && e3.isVertical() || (t3 = t3 - parseInt(s2.css("padding-left") || 0, 10) - parseInt(s2.css("padding-right") || 0, 10), i2 = i2 - parseInt(s2.css("padding-top") || 0, 10) - parseInt(s2.css("padding-bottom") || 0, 10), Number.isNaN(t3) && (t3 = 0), Number.isNaN(i2) && (i2 = 0), Object.assign(e3, {
            width: t3,
            height: i2,
            size: e3.isHorizontal() ? t3 : i2
          }));
        },
        updateSlides: function() {
          const e3 = this;
          function t3(t4) {
            return e3.isHorizontal() ? t4 : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom"
            }[t4];
          }
          function i2(e4, i3) {
            return parseFloat(e4.getPropertyValue(t3(i3)) || 0);
          }
          const s2 = e3.params, { $wrapperEl: n2, size: o2, rtlTranslate: a2, wrongRTL: r2 } = e3, l2 = e3.virtual && s2.virtual.enabled, c2 = l2 ? e3.virtual.slides.length : e3.slides.length, d2 = n2.children(`.${e3.params.slideClass}`), h2 = l2 ? e3.virtual.slides.length : d2.length;
          let u2 = [];
          const p2 = [], f2 = [];
          let g2 = s2.slidesOffsetBefore;
          "function" == typeof g2 && (g2 = s2.slidesOffsetBefore.call(e3));
          let m2 = s2.slidesOffsetAfter;
          "function" == typeof m2 && (m2 = s2.slidesOffsetAfter.call(e3));
          const v2 = e3.snapGrid.length, b2 = e3.slidesGrid.length;
          let y2 = s2.spaceBetween, w2 = -g2, S2 = 0, x2 = 0;
          if (void 0 === o2) return;
          "string" == typeof y2 && y2.indexOf("%") >= 0 && (y2 = parseFloat(y2.replace("%", "")) / 100 * o2), e3.virtualSize = -y2, a2 ? d2.css({ marginLeft: "", marginBottom: "", marginTop: "" }) : d2.css({ marginRight: "", marginBottom: "", marginTop: "" }), s2.centeredSlides && s2.cssMode && (k(e3.wrapperEl, "--swiper-centered-offset-before", ""), k(e3.wrapperEl, "--swiper-centered-offset-after", ""));
          const E2 = s2.grid && s2.grid.rows > 1 && e3.grid;
          let C2;
          E2 && e3.grid.initSlides(h2);
          const T2 = "auto" === s2.slidesPerView && s2.breakpoints && Object.keys(s2.breakpoints).filter(
            (e4) => void 0 !== s2.breakpoints[e4].slidesPerView
          ).length > 0;
          for (let n3 = 0; n3 < h2; n3 += 1) {
            C2 = 0;
            const a3 = d2.eq(n3);
            if (E2 && e3.grid.updateSlide(n3, a3, h2, t3), "none" !== a3.css("display")) {
              if ("auto" === s2.slidesPerView) {
                T2 && (d2[n3].style[t3("width")] = "");
                const o3 = getComputedStyle(a3[0]), r3 = a3[0].style.transform, l3 = a3[0].style.webkitTransform;
                if (r3 && (a3[0].style.transform = "none"), l3 && (a3[0].style.webkitTransform = "none"), s2.roundLengths)
                  C2 = e3.isHorizontal() ? a3.outerWidth(true) : a3.outerHeight(true);
                else {
                  const e4 = i2(o3, "width"), t4 = i2(o3, "padding-left"), s3 = i2(o3, "padding-right"), n4 = i2(o3, "margin-left"), r4 = i2(o3, "margin-right"), l4 = o3.getPropertyValue("box-sizing");
                  if (l4 && "border-box" === l4) C2 = e4 + n4 + r4;
                  else {
                    const { clientWidth: i3, offsetWidth: o4 } = a3[0];
                    C2 = e4 + t4 + s3 + n4 + r4 + (o4 - i3);
                  }
                }
                r3 && (a3[0].style.transform = r3), l3 && (a3[0].style.webkitTransform = l3), s2.roundLengths && (C2 = Math.floor(C2));
              } else
                C2 = (o2 - (s2.slidesPerView - 1) * y2) / s2.slidesPerView, s2.roundLengths && (C2 = Math.floor(C2)), d2[n3] && (d2[n3].style[t3("width")] = `${C2}px`);
              d2[n3] && (d2[n3].swiperSlideSize = C2), f2.push(C2), s2.centeredSlides ? (w2 = w2 + C2 / 2 + S2 / 2 + y2, 0 === S2 && 0 !== n3 && (w2 = w2 - o2 / 2 - y2), 0 === n3 && (w2 = w2 - o2 / 2 - y2), Math.abs(w2) < 1e-3 && (w2 = 0), s2.roundLengths && (w2 = Math.floor(w2)), x2 % s2.slidesPerGroup == 0 && u2.push(w2), p2.push(w2)) : (s2.roundLengths && (w2 = Math.floor(w2)), (x2 - Math.min(e3.params.slidesPerGroupSkip, x2)) % e3.params.slidesPerGroup == 0 && u2.push(w2), p2.push(w2), w2 = w2 + C2 + y2), e3.virtualSize += C2 + y2, S2 = C2, x2 += 1;
            }
          }
          if (e3.virtualSize = Math.max(e3.virtualSize, o2) + m2, a2 && r2 && ("slide" === s2.effect || "coverflow" === s2.effect) && n2.css({ width: `${e3.virtualSize + s2.spaceBetween}px` }), s2.setWrapperSize && n2.css({ [t3("width")]: `${e3.virtualSize + s2.spaceBetween}px` }), E2 && e3.grid.updateWrapperSize(C2, u2, t3), !s2.centeredSlides) {
            const t4 = [];
            for (let i3 = 0; i3 < u2.length; i3 += 1) {
              let n3 = u2[i3];
              s2.roundLengths && (n3 = Math.floor(n3)), u2[i3] <= e3.virtualSize - o2 && t4.push(n3);
            }
            u2 = t4, Math.floor(e3.virtualSize - o2) - Math.floor(u2[u2.length - 1]) > 1 && u2.push(e3.virtualSize - o2);
          }
          if (0 === u2.length && (u2 = [0]), 0 !== s2.spaceBetween) {
            const i3 = e3.isHorizontal() && a2 ? "marginLeft" : t3("marginRight");
            d2.filter((e4, t4) => !s2.cssMode || t4 !== d2.length - 1).css({
              [i3]: `${y2}px`
            });
          }
          if (s2.centeredSlides && s2.centeredSlidesBounds) {
            let e4 = 0;
            f2.forEach((t5) => {
              e4 += t5 + (s2.spaceBetween ? s2.spaceBetween : 0);
            }), e4 -= s2.spaceBetween;
            const t4 = e4 - o2;
            u2 = u2.map((e5) => e5 < 0 ? -g2 : e5 > t4 ? t4 + m2 : e5);
          }
          if (s2.centerInsufficientSlides) {
            let e4 = 0;
            if (f2.forEach((t4) => {
              e4 += t4 + (s2.spaceBetween ? s2.spaceBetween : 0);
            }), e4 -= s2.spaceBetween, e4 < o2) {
              const t4 = (o2 - e4) / 2;
              u2.forEach((e5, i3) => {
                u2[i3] = e5 - t4;
              }), p2.forEach((e5, i3) => {
                p2[i3] = e5 + t4;
              });
            }
          }
          if (Object.assign(e3, {
            slides: d2,
            snapGrid: u2,
            slidesGrid: p2,
            slidesSizesGrid: f2
          }), s2.centeredSlides && s2.cssMode && !s2.centeredSlidesBounds) {
            k(e3.wrapperEl, "--swiper-centered-offset-before", -u2[0] + "px"), k(
              e3.wrapperEl,
              "--swiper-centered-offset-after",
              e3.size / 2 - f2[f2.length - 1] / 2 + "px"
            );
            const t4 = -e3.snapGrid[0], i3 = -e3.slidesGrid[0];
            e3.snapGrid = e3.snapGrid.map((e4) => e4 + t4), e3.slidesGrid = e3.slidesGrid.map((e4) => e4 + i3);
          }
          if (h2 !== c2 && e3.emit("slidesLengthChange"), u2.length !== v2 && (e3.params.watchOverflow && e3.checkOverflow(), e3.emit("snapGridLengthChange")), p2.length !== b2 && e3.emit("slidesGridLengthChange"), s2.watchSlidesProgress && e3.updateSlidesOffset(), !(l2 || s2.cssMode || "slide" !== s2.effect && "fade" !== s2.effect)) {
            const t4 = `${s2.containerModifierClass}backface-hidden`, i3 = e3.$el.hasClass(t4);
            h2 <= s2.maxBackfaceHiddenSlides ? i3 || e3.$el.addClass(t4) : i3 && e3.$el.removeClass(t4);
          }
        },
        updateAutoHeight: function(e3) {
          const t3 = this, i2 = [], s2 = t3.virtual && t3.params.virtual.enabled;
          let n2, o2 = 0;
          "number" == typeof e3 ? t3.setTransition(e3) : true === e3 && t3.setTransition(t3.params.speed);
          const a2 = (e4) => s2 ? t3.slides.filter(
            (t4) => parseInt(t4.getAttribute("data-swiper-slide-index"), 10) === e4
          )[0] : t3.slides.eq(e4)[0];
          if ("auto" !== t3.params.slidesPerView && t3.params.slidesPerView > 1)
            if (t3.params.centeredSlides)
              (t3.visibleSlides || T([])).each((e4) => {
                i2.push(e4);
              });
            else
              for (n2 = 0; n2 < Math.ceil(t3.params.slidesPerView); n2 += 1) {
                const e4 = t3.activeIndex + n2;
                if (e4 > t3.slides.length && !s2) break;
                i2.push(a2(e4));
              }
          else i2.push(a2(t3.activeIndex));
          for (n2 = 0; n2 < i2.length; n2 += 1)
            if (void 0 !== i2[n2]) {
              const e4 = i2[n2].offsetHeight;
              o2 = e4 > o2 ? e4 : o2;
            }
          (o2 || 0 === o2) && t3.$wrapperEl.css("height", `${o2}px`);
        },
        updateSlidesOffset: function() {
          const e3 = this, t3 = e3.slides;
          for (let i2 = 0; i2 < t3.length; i2 += 1)
            t3[i2].swiperSlideOffset = e3.isHorizontal() ? t3[i2].offsetLeft : t3[i2].offsetTop;
        },
        updateSlidesProgress: function(e3 = this && this.translate || 0) {
          const t3 = this, i2 = t3.params, { slides: s2, rtlTranslate: n2, snapGrid: o2 } = t3;
          if (0 === s2.length) return;
          void 0 === s2[0].swiperSlideOffset && t3.updateSlidesOffset();
          let a2 = -e3;
          n2 && (a2 = e3), s2.removeClass(i2.slideVisibleClass), t3.visibleSlidesIndexes = [], t3.visibleSlides = [];
          for (let e4 = 0; e4 < s2.length; e4 += 1) {
            const r2 = s2[e4];
            let l2 = r2.swiperSlideOffset;
            i2.cssMode && i2.centeredSlides && (l2 -= s2[0].swiperSlideOffset);
            const c2 = (a2 + (i2.centeredSlides ? t3.minTranslate() : 0) - l2) / (r2.swiperSlideSize + i2.spaceBetween), d2 = (a2 - o2[0] + (i2.centeredSlides ? t3.minTranslate() : 0) - l2) / (r2.swiperSlideSize + i2.spaceBetween), h2 = -(a2 - l2), u2 = h2 + t3.slidesSizesGrid[e4];
            (h2 >= 0 && h2 < t3.size - 1 || u2 > 1 && u2 <= t3.size || h2 <= 0 && u2 >= t3.size) && (t3.visibleSlides.push(r2), t3.visibleSlidesIndexes.push(e4), s2.eq(e4).addClass(i2.slideVisibleClass)), r2.progress = n2 ? -c2 : c2, r2.originalProgress = n2 ? -d2 : d2;
          }
          t3.visibleSlides = T(t3.visibleSlides);
        },
        updateProgress: function(e3) {
          const t3 = this;
          if (void 0 === e3) {
            const i3 = t3.rtlTranslate ? -1 : 1;
            e3 = t3 && t3.translate && t3.translate * i3 || 0;
          }
          const i2 = t3.params, s2 = t3.maxTranslate() - t3.minTranslate();
          let { progress: n2, isBeginning: o2, isEnd: a2 } = t3;
          const r2 = o2, l2 = a2;
          0 === s2 ? (n2 = 0, o2 = true, a2 = true) : (n2 = (e3 - t3.minTranslate()) / s2, o2 = n2 <= 0, a2 = n2 >= 1), Object.assign(t3, { progress: n2, isBeginning: o2, isEnd: a2 }), (i2.watchSlidesProgress || i2.centeredSlides && i2.autoHeight) && t3.updateSlidesProgress(e3), o2 && !r2 && t3.emit("reachBeginning toEdge"), a2 && !l2 && t3.emit("reachEnd toEdge"), (r2 && !o2 || l2 && !a2) && t3.emit("fromEdge"), t3.emit("progress", n2);
        },
        updateSlidesClasses: function() {
          const e3 = this, {
            slides: t3,
            params: i2,
            $wrapperEl: s2,
            activeIndex: n2,
            realIndex: o2
          } = e3, a2 = e3.virtual && i2.virtual.enabled;
          let r2;
          t3.removeClass(
            `${i2.slideActiveClass} ${i2.slideNextClass} ${i2.slidePrevClass} ${i2.slideDuplicateActiveClass} ${i2.slideDuplicateNextClass} ${i2.slideDuplicatePrevClass}`
          ), r2 = a2 ? e3.$wrapperEl.find(
            `.${i2.slideClass}[data-swiper-slide-index="${n2}"]`
          ) : t3.eq(n2), r2.addClass(i2.slideActiveClass), i2.loop && (r2.hasClass(i2.slideDuplicateClass) ? s2.children(
            `.${i2.slideClass}:not(.${i2.slideDuplicateClass})[data-swiper-slide-index="${o2}"]`
          ).addClass(i2.slideDuplicateActiveClass) : s2.children(
            `.${i2.slideClass}.${i2.slideDuplicateClass}[data-swiper-slide-index="${o2}"]`
          ).addClass(i2.slideDuplicateActiveClass));
          let l2 = r2.nextAll(`.${i2.slideClass}`).eq(0).addClass(i2.slideNextClass);
          i2.loop && 0 === l2.length && (l2 = t3.eq(0), l2.addClass(i2.slideNextClass));
          let c2 = r2.prevAll(`.${i2.slideClass}`).eq(0).addClass(i2.slidePrevClass);
          i2.loop && 0 === c2.length && (c2 = t3.eq(-1), c2.addClass(i2.slidePrevClass)), i2.loop && (l2.hasClass(i2.slideDuplicateClass) ? s2.children(
            `.${i2.slideClass}:not(.${i2.slideDuplicateClass})[data-swiper-slide-index="${l2.attr(
              "data-swiper-slide-index"
            )}"]`
          ).addClass(i2.slideDuplicateNextClass) : s2.children(
            `.${i2.slideClass}.${i2.slideDuplicateClass}[data-swiper-slide-index="${l2.attr(
              "data-swiper-slide-index"
            )}"]`
          ).addClass(i2.slideDuplicateNextClass), c2.hasClass(i2.slideDuplicateClass) ? s2.children(
            `.${i2.slideClass}:not(.${i2.slideDuplicateClass})[data-swiper-slide-index="${c2.attr(
              "data-swiper-slide-index"
            )}"]`
          ).addClass(i2.slideDuplicatePrevClass) : s2.children(
            `.${i2.slideClass}.${i2.slideDuplicateClass}[data-swiper-slide-index="${c2.attr(
              "data-swiper-slide-index"
            )}"]`
          ).addClass(i2.slideDuplicatePrevClass)), e3.emitSlidesClasses();
        },
        updateActiveIndex: function(e3) {
          const t3 = this, i2 = t3.rtlTranslate ? t3.translate : -t3.translate, {
            slidesGrid: s2,
            snapGrid: n2,
            params: o2,
            activeIndex: a2,
            realIndex: r2,
            snapIndex: l2
          } = t3;
          let c2, d2 = e3;
          if (void 0 === d2) {
            for (let e4 = 0; e4 < s2.length; e4 += 1)
              void 0 !== s2[e4 + 1] ? i2 >= s2[e4] && i2 < s2[e4 + 1] - (s2[e4 + 1] - s2[e4]) / 2 ? d2 = e4 : i2 >= s2[e4] && i2 < s2[e4 + 1] && (d2 = e4 + 1) : i2 >= s2[e4] && (d2 = e4);
            o2.normalizeSlideIndex && (d2 < 0 || void 0 === d2) && (d2 = 0);
          }
          if (n2.indexOf(i2) >= 0) c2 = n2.indexOf(i2);
          else {
            const e4 = Math.min(o2.slidesPerGroupSkip, d2);
            c2 = e4 + Math.floor((d2 - e4) / o2.slidesPerGroup);
          }
          if (c2 >= n2.length && (c2 = n2.length - 1), d2 === a2)
            return void (c2 !== l2 && (t3.snapIndex = c2, t3.emit("snapIndexChange")));
          const h2 = parseInt(
            t3.slides.eq(d2).attr("data-swiper-slide-index") || d2,
            10
          );
          Object.assign(t3, {
            snapIndex: c2,
            realIndex: h2,
            previousIndex: a2,
            activeIndex: d2
          }), t3.emit("activeIndexChange"), t3.emit("snapIndexChange"), r2 !== h2 && t3.emit("realIndexChange"), (t3.initialized || t3.params.runCallbacksOnInit) && t3.emit("slideChange");
        },
        updateClickedSlide: function(e3) {
          const t3 = this, i2 = t3.params, s2 = T(e3).closest(`.${i2.slideClass}`)[0];
          let n2, o2 = false;
          if (s2) {
            for (let e4 = 0; e4 < t3.slides.length; e4 += 1)
              if (t3.slides[e4] === s2) {
                o2 = true, n2 = e4;
                break;
              }
          }
          if (!s2 || !o2)
            return t3.clickedSlide = void 0, void (t3.clickedIndex = void 0);
          t3.clickedSlide = s2, t3.virtual && t3.params.virtual.enabled ? t3.clickedIndex = parseInt(
            T(s2).attr("data-swiper-slide-index"),
            10
          ) : t3.clickedIndex = n2, i2.slideToClickedSlide && void 0 !== t3.clickedIndex && t3.clickedIndex !== t3.activeIndex && t3.slideToClickedSlide();
        }
      };
      const N = {
        getTranslate: function(e3 = this.isHorizontal() ? "x" : "y") {
          const {
            params: t3,
            rtlTranslate: i2,
            translate: s2,
            $wrapperEl: n2
          } = this;
          if (t3.virtualTranslate) return i2 ? -s2 : s2;
          if (t3.cssMode) return s2;
          let o2 = O(n2[0], e3);
          return i2 && (o2 = -o2), o2 || 0;
        },
        setTranslate: function(e3, t3) {
          const i2 = this, {
            rtlTranslate: s2,
            params: n2,
            $wrapperEl: o2,
            wrapperEl: a2,
            progress: r2
          } = i2;
          let l2, c2 = 0, d2 = 0;
          i2.isHorizontal() ? c2 = s2 ? -e3 : e3 : d2 = e3, n2.roundLengths && (c2 = Math.floor(c2), d2 = Math.floor(d2)), n2.cssMode ? a2[i2.isHorizontal() ? "scrollLeft" : "scrollTop"] = i2.isHorizontal() ? -c2 : -d2 : n2.virtualTranslate || o2.transform(`translate3d(${c2}px, ${d2}px, 0px)`), i2.previousTranslate = i2.translate, i2.translate = i2.isHorizontal() ? c2 : d2;
          const h2 = i2.maxTranslate() - i2.minTranslate();
          l2 = 0 === h2 ? 0 : (e3 - i2.minTranslate()) / h2, l2 !== r2 && i2.updateProgress(e3), i2.emit("setTranslate", i2.translate, t3);
        },
        minTranslate: function() {
          return -this.snapGrid[0];
        },
        maxTranslate: function() {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function(e3 = 0, t3 = this.params.speed, i2 = true, s2 = true, n2) {
          const o2 = this, { params: a2, wrapperEl: r2 } = o2;
          if (o2.animating && a2.preventInteractionOnTransition) return false;
          const l2 = o2.minTranslate(), c2 = o2.maxTranslate();
          let d2;
          if (d2 = s2 && e3 > l2 ? l2 : s2 && e3 < c2 ? c2 : e3, o2.updateProgress(d2), a2.cssMode) {
            const e4 = o2.isHorizontal();
            if (0 === t3) r2[e4 ? "scrollLeft" : "scrollTop"] = -d2;
            else {
              if (!o2.support.smoothScroll)
                return I({ swiper: o2, targetPosition: -d2, side: e4 ? "left" : "top" }), true;
              r2.scrollTo({ [e4 ? "left" : "top"]: -d2, behavior: "smooth" });
            }
            return true;
          }
          return 0 === t3 ? (o2.setTransition(0), o2.setTranslate(d2), i2 && (o2.emit("beforeTransitionStart", t3, n2), o2.emit("transitionEnd"))) : (o2.setTransition(t3), o2.setTranslate(d2), i2 && (o2.emit("beforeTransitionStart", t3, n2), o2.emit("transitionStart")), o2.animating || (o2.animating = true, o2.onTranslateToWrapperTransitionEnd || (o2.onTranslateToWrapperTransitionEnd = function(e4) {
            o2 && !o2.destroyed && e4.target === this && (o2.$wrapperEl[0].removeEventListener(
              "transitionend",
              o2.onTranslateToWrapperTransitionEnd
            ), o2.$wrapperEl[0].removeEventListener(
              "webkitTransitionEnd",
              o2.onTranslateToWrapperTransitionEnd
            ), o2.onTranslateToWrapperTransitionEnd = null, delete o2.onTranslateToWrapperTransitionEnd, i2 && o2.emit("transitionEnd"));
          }), o2.$wrapperEl[0].addEventListener(
            "transitionend",
            o2.onTranslateToWrapperTransitionEnd
          ), o2.$wrapperEl[0].addEventListener(
            "webkitTransitionEnd",
            o2.onTranslateToWrapperTransitionEnd
          ))), true;
        }
      };
      function H({ swiper: e3, runCallbacks: t3, direction: i2, step: s2 }) {
        const { activeIndex: n2, previousIndex: o2 } = e3;
        let a2 = i2;
        if (a2 || (a2 = n2 > o2 ? "next" : n2 < o2 ? "prev" : "reset"), e3.emit(`transition${s2}`), t3 && n2 !== o2) {
          if ("reset" === a2) return void e3.emit(`slideResetTransition${s2}`);
          e3.emit(`slideChangeTransition${s2}`), "next" === a2 ? e3.emit(`slideNextTransition${s2}`) : e3.emit(`slidePrevTransition${s2}`);
        }
      }
      const q = {
        slideTo: function(e3 = 0, t3 = this.params.speed, i2 = true, s2, n2) {
          if ("number" != typeof e3 && "string" != typeof e3)
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e3}] given.`
            );
          if ("string" == typeof e3) {
            const t4 = parseInt(e3, 10);
            if (!isFinite(t4))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e3}] given.`
              );
            e3 = t4;
          }
          const o2 = this;
          let a2 = e3;
          a2 < 0 && (a2 = 0);
          const {
            params: r2,
            snapGrid: l2,
            slidesGrid: c2,
            previousIndex: d2,
            activeIndex: h2,
            rtlTranslate: u2,
            wrapperEl: p2,
            enabled: f2
          } = o2;
          if (o2.animating && r2.preventInteractionOnTransition || !f2 && !s2 && !n2)
            return false;
          const g2 = Math.min(o2.params.slidesPerGroupSkip, a2);
          let m2 = g2 + Math.floor((a2 - g2) / o2.params.slidesPerGroup);
          m2 >= l2.length && (m2 = l2.length - 1);
          const v2 = -l2[m2];
          if (r2.normalizeSlideIndex)
            for (let e4 = 0; e4 < c2.length; e4 += 1) {
              const t4 = -Math.floor(100 * v2), i3 = Math.floor(100 * c2[e4]), s3 = Math.floor(100 * c2[e4 + 1]);
              void 0 !== c2[e4 + 1] ? t4 >= i3 && t4 < s3 - (s3 - i3) / 2 ? a2 = e4 : t4 >= i3 && t4 < s3 && (a2 = e4 + 1) : t4 >= i3 && (a2 = e4);
            }
          if (o2.initialized && a2 !== h2) {
            if (!o2.allowSlideNext && v2 < o2.translate && v2 < o2.minTranslate())
              return false;
            if (!o2.allowSlidePrev && v2 > o2.translate && v2 > o2.maxTranslate() && (h2 || 0) !== a2)
              return false;
          }
          let b2;
          if (a2 !== (d2 || 0) && i2 && o2.emit("beforeSlideChangeStart"), o2.updateProgress(v2), b2 = a2 > h2 ? "next" : a2 < h2 ? "prev" : "reset", u2 && -v2 === o2.translate || !u2 && v2 === o2.translate)
            return o2.updateActiveIndex(a2), r2.autoHeight && o2.updateAutoHeight(), o2.updateSlidesClasses(), "slide" !== r2.effect && o2.setTranslate(v2), "reset" !== b2 && (o2.transitionStart(i2, b2), o2.transitionEnd(i2, b2)), false;
          if (r2.cssMode) {
            const e4 = o2.isHorizontal(), i3 = u2 ? v2 : -v2;
            if (0 === t3) {
              const t4 = o2.virtual && o2.params.virtual.enabled;
              t4 && (o2.wrapperEl.style.scrollSnapType = "none", o2._immediateVirtual = true), p2[e4 ? "scrollLeft" : "scrollTop"] = i3, t4 && requestAnimationFrame(() => {
                o2.wrapperEl.style.scrollSnapType = "", o2._swiperImmediateVirtual = false;
              });
            } else {
              if (!o2.support.smoothScroll)
                return I({ swiper: o2, targetPosition: i3, side: e4 ? "left" : "top" }), true;
              p2.scrollTo({ [e4 ? "left" : "top"]: i3, behavior: "smooth" });
            }
            return true;
          }
          return o2.setTransition(t3), o2.setTranslate(v2), o2.updateActiveIndex(a2), o2.updateSlidesClasses(), o2.emit("beforeTransitionStart", t3, s2), o2.transitionStart(i2, b2), 0 === t3 ? o2.transitionEnd(i2, b2) : o2.animating || (o2.animating = true, o2.onSlideToWrapperTransitionEnd || (o2.onSlideToWrapperTransitionEnd = function(e4) {
            o2 && !o2.destroyed && e4.target === this && (o2.$wrapperEl[0].removeEventListener(
              "transitionend",
              o2.onSlideToWrapperTransitionEnd
            ), o2.$wrapperEl[0].removeEventListener(
              "webkitTransitionEnd",
              o2.onSlideToWrapperTransitionEnd
            ), o2.onSlideToWrapperTransitionEnd = null, delete o2.onSlideToWrapperTransitionEnd, o2.transitionEnd(i2, b2));
          }), o2.$wrapperEl[0].addEventListener(
            "transitionend",
            o2.onSlideToWrapperTransitionEnd
          ), o2.$wrapperEl[0].addEventListener(
            "webkitTransitionEnd",
            o2.onSlideToWrapperTransitionEnd
          )), true;
        },
        slideToLoop: function(e3 = 0, t3 = this.params.speed, i2 = true, s2) {
          if ("string" == typeof e3) {
            const t4 = parseInt(e3, 10);
            if (!isFinite(t4))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e3}] given.`
              );
            e3 = t4;
          }
          const n2 = this;
          let o2 = e3;
          return n2.params.loop && (o2 += n2.loopedSlides), n2.slideTo(o2, t3, i2, s2);
        },
        slideNext: function(e3 = this.params.speed, t3 = true, i2) {
          const s2 = this, { animating: n2, enabled: o2, params: a2 } = s2;
          if (!o2) return s2;
          let r2 = a2.slidesPerGroup;
          "auto" === a2.slidesPerView && 1 === a2.slidesPerGroup && a2.slidesPerGroupAuto && (r2 = Math.max(s2.slidesPerViewDynamic("current", true), 1));
          const l2 = s2.activeIndex < a2.slidesPerGroupSkip ? 1 : r2;
          if (a2.loop) {
            if (n2 && a2.loopPreventsSlide) return false;
            s2.loopFix(), s2._clientLeft = s2.$wrapperEl[0].clientLeft;
          }
          return a2.rewind && s2.isEnd ? s2.slideTo(0, e3, t3, i2) : s2.slideTo(s2.activeIndex + l2, e3, t3, i2);
        },
        slidePrev: function(e3 = this.params.speed, t3 = true, i2) {
          const s2 = this, {
            params: n2,
            animating: o2,
            snapGrid: a2,
            slidesGrid: r2,
            rtlTranslate: l2,
            enabled: c2
          } = s2;
          if (!c2) return s2;
          if (n2.loop) {
            if (o2 && n2.loopPreventsSlide) return false;
            s2.loopFix(), s2._clientLeft = s2.$wrapperEl[0].clientLeft;
          }
          function d2(e4) {
            return e4 < 0 ? -Math.floor(Math.abs(e4)) : Math.floor(e4);
          }
          const h2 = d2(l2 ? s2.translate : -s2.translate), u2 = a2.map((e4) => d2(e4));
          let p2 = a2[u2.indexOf(h2) - 1];
          if (void 0 === p2 && n2.cssMode) {
            let e4;
            a2.forEach((t4, i3) => {
              h2 >= t4 && (e4 = i3);
            }), void 0 !== e4 && (p2 = a2[e4 > 0 ? e4 - 1 : e4]);
          }
          let f2 = 0;
          if (void 0 !== p2 && (f2 = r2.indexOf(p2), f2 < 0 && (f2 = s2.activeIndex - 1), "auto" === n2.slidesPerView && 1 === n2.slidesPerGroup && n2.slidesPerGroupAuto && (f2 = f2 - s2.slidesPerViewDynamic("previous", true) + 1, f2 = Math.max(f2, 0))), n2.rewind && s2.isBeginning) {
            const n3 = s2.params.virtual && s2.params.virtual.enabled && s2.virtual ? s2.virtual.slides.length - 1 : s2.slides.length - 1;
            return s2.slideTo(n3, e3, t3, i2);
          }
          return s2.slideTo(f2, e3, t3, i2);
        },
        slideReset: function(e3 = this.params.speed, t3 = true, i2) {
          return this.slideTo(this.activeIndex, e3, t3, i2);
        },
        slideToClosest: function(e3 = this.params.speed, t3 = true, i2, s2 = 0.5) {
          const n2 = this;
          let o2 = n2.activeIndex;
          const a2 = Math.min(n2.params.slidesPerGroupSkip, o2), r2 = a2 + Math.floor((o2 - a2) / n2.params.slidesPerGroup), l2 = n2.rtlTranslate ? n2.translate : -n2.translate;
          if (l2 >= n2.snapGrid[r2]) {
            const e4 = n2.snapGrid[r2];
            l2 - e4 > (n2.snapGrid[r2 + 1] - e4) * s2 && (o2 += n2.params.slidesPerGroup);
          } else {
            const e4 = n2.snapGrid[r2 - 1];
            l2 - e4 <= (n2.snapGrid[r2] - e4) * s2 && (o2 -= n2.params.slidesPerGroup);
          }
          return o2 = Math.max(o2, 0), o2 = Math.min(o2, n2.slidesGrid.length - 1), n2.slideTo(o2, e3, t3, i2);
        },
        slideToClickedSlide: function() {
          const e3 = this, { params: t3, $wrapperEl: i2 } = e3, s2 = "auto" === t3.slidesPerView ? e3.slidesPerViewDynamic() : t3.slidesPerView;
          let n2, o2 = e3.clickedIndex;
          if (t3.loop) {
            if (e3.animating) return;
            n2 = parseInt(T(e3.clickedSlide).attr("data-swiper-slide-index"), 10), t3.centeredSlides ? o2 < e3.loopedSlides - s2 / 2 || o2 > e3.slides.length - e3.loopedSlides + s2 / 2 ? (e3.loopFix(), o2 = i2.children(
              `.${t3.slideClass}[data-swiper-slide-index="${n2}"]:not(.${t3.slideDuplicateClass})`
            ).eq(0).index(), P(() => {
              e3.slideTo(o2);
            })) : e3.slideTo(o2) : o2 > e3.slides.length - s2 ? (e3.loopFix(), o2 = i2.children(
              `.${t3.slideClass}[data-swiper-slide-index="${n2}"]:not(.${t3.slideDuplicateClass})`
            ).eq(0).index(), P(() => {
              e3.slideTo(o2);
            })) : e3.slideTo(o2);
          } else e3.slideTo(o2);
        }
      };
      const W = {
        loopCreate: function() {
          const e3 = this, t3 = g(), { params: i2, $wrapperEl: s2 } = e3, n2 = s2.children().length > 0 ? T(s2.children()[0].parentNode) : s2;
          n2.children(`.${i2.slideClass}.${i2.slideDuplicateClass}`).remove();
          let o2 = n2.children(`.${i2.slideClass}`);
          if (i2.loopFillGroupWithBlank) {
            const e4 = i2.slidesPerGroup - o2.length % i2.slidesPerGroup;
            if (e4 !== i2.slidesPerGroup) {
              for (let s3 = 0; s3 < e4; s3 += 1) {
                const e5 = T(t3.createElement("div")).addClass(
                  `${i2.slideClass} ${i2.slideBlankClass}`
                );
                n2.append(e5);
              }
              o2 = n2.children(`.${i2.slideClass}`);
            }
          }
          "auto" !== i2.slidesPerView || i2.loopedSlides || (i2.loopedSlides = o2.length), e3.loopedSlides = Math.ceil(
            parseFloat(i2.loopedSlides || i2.slidesPerView, 10)
          ), e3.loopedSlides += i2.loopAdditionalSlides, e3.loopedSlides > o2.length && e3.params.loopedSlidesLimit && (e3.loopedSlides = o2.length);
          const a2 = [], r2 = [];
          o2.each((e4, t4) => {
            T(e4).attr("data-swiper-slide-index", t4);
          });
          for (let t4 = 0; t4 < e3.loopedSlides; t4 += 1) {
            const e4 = t4 - Math.floor(t4 / o2.length) * o2.length;
            r2.push(o2.eq(e4)[0]), a2.unshift(o2.eq(o2.length - e4 - 1)[0]);
          }
          for (let e4 = 0; e4 < r2.length; e4 += 1)
            n2.append(T(r2[e4].cloneNode(true)).addClass(i2.slideDuplicateClass));
          for (let e4 = a2.length - 1; e4 >= 0; e4 -= 1)
            n2.prepend(T(a2[e4].cloneNode(true)).addClass(i2.slideDuplicateClass));
        },
        loopFix: function() {
          const e3 = this;
          e3.emit("beforeLoopFix");
          const {
            activeIndex: t3,
            slides: i2,
            loopedSlides: s2,
            allowSlidePrev: n2,
            allowSlideNext: o2,
            snapGrid: a2,
            rtlTranslate: r2
          } = e3;
          let l2;
          e3.allowSlidePrev = true, e3.allowSlideNext = true;
          const c2 = -a2[t3] - e3.getTranslate();
          if (t3 < s2) {
            l2 = i2.length - 3 * s2 + t3, l2 += s2;
            e3.slideTo(l2, 0, false, true) && 0 !== c2 && e3.setTranslate((r2 ? -e3.translate : e3.translate) - c2);
          } else if (t3 >= i2.length - s2) {
            l2 = -i2.length + t3 + s2, l2 += s2;
            e3.slideTo(l2, 0, false, true) && 0 !== c2 && e3.setTranslate((r2 ? -e3.translate : e3.translate) - c2);
          }
          e3.allowSlidePrev = n2, e3.allowSlideNext = o2, e3.emit("loopFix");
        },
        loopDestroy: function() {
          const { $wrapperEl: e3, params: t3, slides: i2 } = this;
          e3.children(
            `.${t3.slideClass}.${t3.slideDuplicateClass},.${t3.slideClass}.${t3.slideBlankClass}`
          ).remove(), i2.removeAttr("data-swiper-slide-index");
        }
      };
      function G(e3) {
        const t3 = this, i2 = g(), s2 = v(), n2 = t3.touchEventsData, { params: o2, touches: a2, enabled: r2 } = t3;
        if (!r2) return;
        if (t3.animating && o2.preventInteractionOnTransition) return;
        !t3.animating && o2.cssMode && o2.loop && t3.loopFix();
        let l2 = e3;
        l2.originalEvent && (l2 = l2.originalEvent);
        let c2 = T(l2.target);
        if ("wrapper" === o2.touchEventsTarget && !c2.closest(t3.wrapperEl).length)
          return;
        if (n2.isTouchEvent = "touchstart" === l2.type, !n2.isTouchEvent && "which" in l2 && 3 === l2.which)
          return;
        if (!n2.isTouchEvent && "button" in l2 && l2.button > 0) return;
        if (n2.isTouched && n2.isMoved) return;
        const d2 = !!o2.noSwipingClass && "" !== o2.noSwipingClass, h2 = e3.composedPath ? e3.composedPath() : e3.path;
        d2 && l2.target && l2.target.shadowRoot && h2 && (c2 = T(h2[0]));
        const u2 = o2.noSwipingSelector ? o2.noSwipingSelector : `.${o2.noSwipingClass}`, p2 = !(!l2.target || !l2.target.shadowRoot);
        if (o2.noSwiping && (p2 ? function(e4, t4 = this) {
          return function t5(i3) {
            if (!i3 || i3 === g() || i3 === v()) return null;
            i3.assignedSlot && (i3 = i3.assignedSlot);
            const s3 = i3.closest(e4);
            return s3 || i3.getRootNode ? s3 || t5(i3.getRootNode().host) : null;
          }(t4);
        }(u2, c2[0]) : c2.closest(u2)[0]))
          return void (t3.allowClick = true);
        if (o2.swipeHandler && !c2.closest(o2.swipeHandler)[0]) return;
        a2.currentX = "touchstart" === l2.type ? l2.targetTouches[0].pageX : l2.pageX, a2.currentY = "touchstart" === l2.type ? l2.targetTouches[0].pageY : l2.pageY;
        const f2 = a2.currentX, m2 = a2.currentY, b2 = o2.edgeSwipeDetection || o2.iOSEdgeSwipeDetection, y2 = o2.edgeSwipeThreshold || o2.iOSEdgeSwipeThreshold;
        if (b2 && (f2 <= y2 || f2 >= s2.innerWidth - y2)) {
          if ("prevent" !== b2) return;
          e3.preventDefault();
        }
        if (Object.assign(n2, {
          isTouched: true,
          isMoved: false,
          allowTouchCallbacks: true,
          isScrolling: void 0,
          startMoving: void 0
        }), a2.startX = f2, a2.startY = m2, n2.touchStartTime = M(), t3.allowClick = true, t3.updateSize(), t3.swipeDirection = void 0, o2.threshold > 0 && (n2.allowThresholdMove = false), "touchstart" !== l2.type) {
          let e4 = true;
          c2.is(n2.focusableElements) && (e4 = false, "SELECT" === c2[0].nodeName && (n2.isTouched = false)), i2.activeElement && T(i2.activeElement).is(n2.focusableElements) && i2.activeElement !== c2[0] && i2.activeElement.blur();
          const s3 = e4 && t3.allowTouchMove && o2.touchStartPreventDefault;
          !o2.touchStartForcePreventDefault && !s3 || c2[0].isContentEditable || l2.preventDefault();
        }
        t3.params.freeMode && t3.params.freeMode.enabled && t3.freeMode && t3.animating && !o2.cssMode && t3.freeMode.onTouchStart(), t3.emit("touchStart", l2);
      }
      function V(e3) {
        const t3 = g(), i2 = this, s2 = i2.touchEventsData, { params: n2, touches: o2, rtlTranslate: a2, enabled: r2 } = i2;
        if (!r2) return;
        let l2 = e3;
        if (l2.originalEvent && (l2 = l2.originalEvent), !s2.isTouched)
          return void (s2.startMoving && s2.isScrolling && i2.emit("touchMoveOpposite", l2));
        if (s2.isTouchEvent && "touchmove" !== l2.type) return;
        const c2 = "touchmove" === l2.type && l2.targetTouches && (l2.targetTouches[0] || l2.changedTouches[0]), d2 = "touchmove" === l2.type ? c2.pageX : l2.pageX, h2 = "touchmove" === l2.type ? c2.pageY : l2.pageY;
        if (l2.preventedByNestedSwiper) return o2.startX = d2, void (o2.startY = h2);
        if (!i2.allowTouchMove)
          return T(l2.target).is(s2.focusableElements) || (i2.allowClick = false), void (s2.isTouched && (Object.assign(o2, {
            startX: d2,
            startY: h2,
            currentX: d2,
            currentY: h2
          }), s2.touchStartTime = M()));
        if (s2.isTouchEvent && n2.touchReleaseOnEdges && !n2.loop) {
          if (i2.isVertical()) {
            if (h2 < o2.startY && i2.translate <= i2.maxTranslate() || h2 > o2.startY && i2.translate >= i2.minTranslate())
              return s2.isTouched = false, void (s2.isMoved = false);
          } else if (d2 < o2.startX && i2.translate <= i2.maxTranslate() || d2 > o2.startX && i2.translate >= i2.minTranslate())
            return;
        }
        if (s2.isTouchEvent && t3.activeElement && l2.target === t3.activeElement && T(l2.target).is(s2.focusableElements))
          return s2.isMoved = true, void (i2.allowClick = false);
        if (s2.allowTouchCallbacks && i2.emit("touchMove", l2), l2.targetTouches && l2.targetTouches.length > 1)
          return;
        o2.currentX = d2, o2.currentY = h2;
        const u2 = o2.currentX - o2.startX, p2 = o2.currentY - o2.startY;
        if (i2.params.threshold && Math.sqrt(u2 ** 2 + p2 ** 2) < i2.params.threshold)
          return;
        if (void 0 === s2.isScrolling) {
          let e4;
          i2.isHorizontal() && o2.currentY === o2.startY || i2.isVertical() && o2.currentX === o2.startX ? s2.isScrolling = false : u2 * u2 + p2 * p2 >= 25 && (e4 = 180 * Math.atan2(Math.abs(p2), Math.abs(u2)) / Math.PI, s2.isScrolling = i2.isHorizontal() ? e4 > n2.touchAngle : 90 - e4 > n2.touchAngle);
        }
        if (s2.isScrolling && i2.emit("touchMoveOpposite", l2), void 0 === s2.startMoving && (o2.currentX === o2.startX && o2.currentY === o2.startY || (s2.startMoving = true)), s2.isScrolling)
          return void (s2.isTouched = false);
        if (!s2.startMoving) return;
        i2.allowClick = false, !n2.cssMode && l2.cancelable && l2.preventDefault(), n2.touchMoveStopPropagation && !n2.nested && l2.stopPropagation(), s2.isMoved || (n2.loop && !n2.cssMode && i2.loopFix(), s2.startTranslate = i2.getTranslate(), i2.setTransition(0), i2.animating && i2.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s2.allowMomentumBounce = false, !n2.grabCursor || true !== i2.allowSlideNext && true !== i2.allowSlidePrev || i2.setGrabCursor(true), i2.emit("sliderFirstMove", l2)), i2.emit("sliderMove", l2), s2.isMoved = true;
        let f2 = i2.isHorizontal() ? u2 : p2;
        o2.diff = f2, f2 *= n2.touchRatio, a2 && (f2 = -f2), i2.swipeDirection = f2 > 0 ? "prev" : "next", s2.currentTranslate = f2 + s2.startTranslate;
        let m2 = true, v2 = n2.resistanceRatio;
        if (n2.touchReleaseOnEdges && (v2 = 0), f2 > 0 && s2.currentTranslate > i2.minTranslate() ? (m2 = false, n2.resistance && (s2.currentTranslate = i2.minTranslate() - 1 + (-i2.minTranslate() + s2.startTranslate + f2) ** v2)) : f2 < 0 && s2.currentTranslate < i2.maxTranslate() && (m2 = false, n2.resistance && (s2.currentTranslate = i2.maxTranslate() + 1 - (i2.maxTranslate() - s2.startTranslate - f2) ** v2)), m2 && (l2.preventedByNestedSwiper = true), !i2.allowSlideNext && "next" === i2.swipeDirection && s2.currentTranslate < s2.startTranslate && (s2.currentTranslate = s2.startTranslate), !i2.allowSlidePrev && "prev" === i2.swipeDirection && s2.currentTranslate > s2.startTranslate && (s2.currentTranslate = s2.startTranslate), i2.allowSlidePrev || i2.allowSlideNext || (s2.currentTranslate = s2.startTranslate), n2.threshold > 0) {
          if (!(Math.abs(f2) > n2.threshold || s2.allowThresholdMove))
            return void (s2.currentTranslate = s2.startTranslate);
          if (!s2.allowThresholdMove)
            return s2.allowThresholdMove = true, o2.startX = o2.currentX, o2.startY = o2.currentY, s2.currentTranslate = s2.startTranslate, void (o2.diff = i2.isHorizontal() ? o2.currentX - o2.startX : o2.currentY - o2.startY);
        }
        n2.followFinger && !n2.cssMode && ((n2.freeMode && n2.freeMode.enabled && i2.freeMode || n2.watchSlidesProgress) && (i2.updateActiveIndex(), i2.updateSlidesClasses()), i2.params.freeMode && n2.freeMode.enabled && i2.freeMode && i2.freeMode.onTouchMove(), i2.updateProgress(s2.currentTranslate), i2.setTranslate(s2.currentTranslate));
      }
      function X(e3) {
        const t3 = this, i2 = t3.touchEventsData, {
          params: s2,
          touches: n2,
          rtlTranslate: o2,
          slidesGrid: a2,
          enabled: r2
        } = t3;
        if (!r2) return;
        let l2 = e3;
        if (l2.originalEvent && (l2 = l2.originalEvent), i2.allowTouchCallbacks && t3.emit("touchEnd", l2), i2.allowTouchCallbacks = false, !i2.isTouched)
          return i2.isMoved && s2.grabCursor && t3.setGrabCursor(false), i2.isMoved = false, void (i2.startMoving = false);
        s2.grabCursor && i2.isMoved && i2.isTouched && (true === t3.allowSlideNext || true === t3.allowSlidePrev) && t3.setGrabCursor(false);
        const c2 = M(), d2 = c2 - i2.touchStartTime;
        if (t3.allowClick) {
          const e4 = l2.path || l2.composedPath && l2.composedPath();
          t3.updateClickedSlide(e4 && e4[0] || l2.target), t3.emit("tap click", l2), d2 < 300 && c2 - i2.lastClickTime < 300 && t3.emit("doubleTap doubleClick", l2);
        }
        if (i2.lastClickTime = M(), P(() => {
          t3.destroyed || (t3.allowClick = true);
        }), !i2.isTouched || !i2.isMoved || !t3.swipeDirection || 0 === n2.diff || i2.currentTranslate === i2.startTranslate)
          return i2.isTouched = false, i2.isMoved = false, void (i2.startMoving = false);
        let h2;
        if (i2.isTouched = false, i2.isMoved = false, i2.startMoving = false, h2 = s2.followFinger ? o2 ? t3.translate : -t3.translate : -i2.currentTranslate, s2.cssMode)
          return;
        if (t3.params.freeMode && s2.freeMode.enabled)
          return void t3.freeMode.onTouchEnd({ currentPos: h2 });
        let u2 = 0, p2 = t3.slidesSizesGrid[0];
        for (let e4 = 0; e4 < a2.length; e4 += e4 < s2.slidesPerGroupSkip ? 1 : s2.slidesPerGroup) {
          const t4 = e4 < s2.slidesPerGroupSkip - 1 ? 1 : s2.slidesPerGroup;
          void 0 !== a2[e4 + t4] ? h2 >= a2[e4] && h2 < a2[e4 + t4] && (u2 = e4, p2 = a2[e4 + t4] - a2[e4]) : h2 >= a2[e4] && (u2 = e4, p2 = a2[a2.length - 1] - a2[a2.length - 2]);
        }
        let f2 = null, g2 = null;
        s2.rewind && (t3.isBeginning ? g2 = t3.params.virtual && t3.params.virtual.enabled && t3.virtual ? t3.virtual.slides.length - 1 : t3.slides.length - 1 : t3.isEnd && (f2 = 0));
        const m2 = (h2 - a2[u2]) / p2, v2 = u2 < s2.slidesPerGroupSkip - 1 ? 1 : s2.slidesPerGroup;
        if (d2 > s2.longSwipesMs) {
          if (!s2.longSwipes) return void t3.slideTo(t3.activeIndex);
          "next" === t3.swipeDirection && (m2 >= s2.longSwipesRatio ? t3.slideTo(s2.rewind && t3.isEnd ? f2 : u2 + v2) : t3.slideTo(u2)), "prev" === t3.swipeDirection && (m2 > 1 - s2.longSwipesRatio ? t3.slideTo(u2 + v2) : null !== g2 && m2 < 0 && Math.abs(m2) > s2.longSwipesRatio ? t3.slideTo(g2) : t3.slideTo(u2));
        } else {
          if (!s2.shortSwipes) return void t3.slideTo(t3.activeIndex);
          t3.navigation && (l2.target === t3.navigation.nextEl || l2.target === t3.navigation.prevEl) ? l2.target === t3.navigation.nextEl ? t3.slideTo(u2 + v2) : t3.slideTo(u2) : ("next" === t3.swipeDirection && t3.slideTo(null !== f2 ? f2 : u2 + v2), "prev" === t3.swipeDirection && t3.slideTo(null !== g2 ? g2 : u2));
        }
      }
      function Y() {
        const e3 = this, { params: t3, el: i2 } = e3;
        if (i2 && 0 === i2.offsetWidth) return;
        t3.breakpoints && e3.setBreakpoint();
        const { allowSlideNext: s2, allowSlidePrev: n2, snapGrid: o2 } = e3;
        e3.allowSlideNext = true, e3.allowSlidePrev = true, e3.updateSize(), e3.updateSlides(), e3.updateSlidesClasses(), ("auto" === t3.slidesPerView || t3.slidesPerView > 1) && e3.isEnd && !e3.isBeginning && !e3.params.centeredSlides ? e3.slideTo(e3.slides.length - 1, 0, false, true) : e3.slideTo(e3.activeIndex, 0, false, true), e3.autoplay && e3.autoplay.running && e3.autoplay.paused && e3.autoplay.run(), e3.allowSlidePrev = n2, e3.allowSlideNext = s2, e3.params.watchOverflow && o2 !== e3.snapGrid && e3.checkOverflow();
      }
      function Z(e3) {
        const t3 = this;
        t3.enabled && (t3.allowClick || (t3.params.preventClicks && e3.preventDefault(), t3.params.preventClicksPropagation && t3.animating && (e3.stopPropagation(), e3.stopImmediatePropagation())));
      }
      function U() {
        const e3 = this, { wrapperEl: t3, rtlTranslate: i2, enabled: s2 } = e3;
        if (!s2) return;
        let n2;
        e3.previousTranslate = e3.translate, e3.isHorizontal() ? e3.translate = -t3.scrollLeft : e3.translate = -t3.scrollTop, 0 === e3.translate && (e3.translate = 0), e3.updateActiveIndex(), e3.updateSlidesClasses();
        const o2 = e3.maxTranslate() - e3.minTranslate();
        n2 = 0 === o2 ? 0 : (e3.translate - e3.minTranslate()) / o2, n2 !== e3.progress && e3.updateProgress(i2 ? -e3.translate : e3.translate), e3.emit("setTranslate", e3.translate, false);
      }
      let K = false;
      function J() {
      }
      const Q = (e3, t3) => {
        const i2 = g(), {
          params: s2,
          touchEvents: n2,
          el: o2,
          wrapperEl: a2,
          device: r2,
          support: l2
        } = e3, c2 = !!s2.nested, d2 = "on" === t3 ? "addEventListener" : "removeEventListener", h2 = t3;
        if (l2.touch) {
          const t4 = !("touchstart" !== n2.start || !l2.passiveListener || !s2.passiveListeners) && { passive: true, capture: false };
          o2[d2](n2.start, e3.onTouchStart, t4), o2[d2](
            n2.move,
            e3.onTouchMove,
            l2.passiveListener ? { passive: false, capture: c2 } : c2
          ), o2[d2](n2.end, e3.onTouchEnd, t4), n2.cancel && o2[d2](n2.cancel, e3.onTouchEnd, t4);
        } else
          o2[d2](n2.start, e3.onTouchStart, false), i2[d2](n2.move, e3.onTouchMove, c2), i2[d2](n2.end, e3.onTouchEnd, false);
        (s2.preventClicks || s2.preventClicksPropagation) && o2[d2]("click", e3.onClick, true), s2.cssMode && a2[d2]("scroll", e3.onScroll), s2.updateOnWindowResize ? e3[h2](
          r2.ios || r2.android ? "resize orientationchange observerUpdate" : "resize observerUpdate",
          Y,
          true
        ) : e3[h2]("observerUpdate", Y, true);
      };
      const ee = {
        attachEvents: function() {
          const e3 = this, t3 = g(), { params: i2, support: s2 } = e3;
          e3.onTouchStart = G.bind(e3), e3.onTouchMove = V.bind(e3), e3.onTouchEnd = X.bind(e3), i2.cssMode && (e3.onScroll = U.bind(e3)), e3.onClick = Z.bind(e3), s2.touch && !K && (t3.addEventListener("touchstart", J), K = true), Q(e3, "on");
        },
        detachEvents: function() {
          Q(this, "off");
        }
      }, te = (e3, t3) => e3.grid && t3.grid && t3.grid.rows > 1;
      const ie = {
        setBreakpoint: function() {
          const e3 = this, {
            activeIndex: t3,
            initialized: i2,
            loopedSlides: s2 = 0,
            params: n2,
            $el: o2
          } = e3, a2 = n2.breakpoints;
          if (!a2 || a2 && 0 === Object.keys(a2).length) return;
          const r2 = e3.getBreakpoint(a2, e3.params.breakpointsBase, e3.el);
          if (!r2 || e3.currentBreakpoint === r2) return;
          const l2 = (r2 in a2 ? a2[r2] : void 0) || e3.originalParams, c2 = te(e3, n2), d2 = te(e3, l2), h2 = n2.enabled;
          c2 && !d2 ? (o2.removeClass(
            `${n2.containerModifierClass}grid ${n2.containerModifierClass}grid-column`
          ), e3.emitContainerClasses()) : !c2 && d2 && (o2.addClass(`${n2.containerModifierClass}grid`), (l2.grid.fill && "column" === l2.grid.fill || !l2.grid.fill && "column" === n2.grid.fill) && o2.addClass(`${n2.containerModifierClass}grid-column`), e3.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t4) => {
            const i3 = n2[t4] && n2[t4].enabled, s3 = l2[t4] && l2[t4].enabled;
            i3 && !s3 && e3[t4].disable(), !i3 && s3 && e3[t4].enable();
          });
          const u2 = l2.direction && l2.direction !== n2.direction, p2 = n2.loop && (l2.slidesPerView !== n2.slidesPerView || u2);
          u2 && i2 && e3.changeDirection(), A(e3.params, l2);
          const f2 = e3.params.enabled;
          Object.assign(e3, {
            allowTouchMove: e3.params.allowTouchMove,
            allowSlideNext: e3.params.allowSlideNext,
            allowSlidePrev: e3.params.allowSlidePrev
          }), h2 && !f2 ? e3.disable() : !h2 && f2 && e3.enable(), e3.currentBreakpoint = r2, e3.emit("_beforeBreakpoint", l2), p2 && i2 && (e3.loopDestroy(), e3.loopCreate(), e3.updateSlides(), e3.slideTo(t3 - s2 + e3.loopedSlides, 0, false)), e3.emit("breakpoint", l2);
        },
        getBreakpoint: function(e3, t3 = "window", i2) {
          if (!e3 || "container" === t3 && !i2) return;
          let s2 = false;
          const n2 = v(), o2 = "window" === t3 ? n2.innerHeight : i2.clientHeight, a2 = Object.keys(e3).map((e4) => {
            if ("string" == typeof e4 && 0 === e4.indexOf("@")) {
              const t4 = parseFloat(e4.substr(1));
              return { value: o2 * t4, point: e4 };
            }
            return { value: e4, point: e4 };
          });
          a2.sort((e4, t4) => parseInt(e4.value, 10) - parseInt(t4.value, 10));
          for (let e4 = 0; e4 < a2.length; e4 += 1) {
            const { point: o3, value: r2 } = a2[e4];
            "window" === t3 ? n2.matchMedia(`(min-width: ${r2}px)`).matches && (s2 = o3) : r2 <= i2.clientWidth && (s2 = o3);
          }
          return s2 || "max";
        }
      };
      const se = {
        addClasses: function() {
          const e3 = this, {
            classNames: t3,
            params: i2,
            rtl: s2,
            $el: n2,
            device: o2,
            support: a2
          } = e3, r2 = function(e4, t4) {
            const i3 = [];
            return e4.forEach((e5) => {
              "object" == typeof e5 ? Object.keys(e5).forEach((s3) => {
                e5[s3] && i3.push(t4 + s3);
              }) : "string" == typeof e5 && i3.push(t4 + e5);
            }), i3;
          }(
            [
              "initialized",
              i2.direction,
              { "pointer-events": !a2.touch },
              { "free-mode": e3.params.freeMode && i2.freeMode.enabled },
              { autoheight: i2.autoHeight },
              { rtl: s2 },
              { grid: i2.grid && i2.grid.rows > 1 },
              {
                "grid-column": i2.grid && i2.grid.rows > 1 && "column" === i2.grid.fill
              },
              { android: o2.android },
              { ios: o2.ios },
              { "css-mode": i2.cssMode },
              { centered: i2.cssMode && i2.centeredSlides },
              { "watch-progress": i2.watchSlidesProgress }
            ],
            i2.containerModifierClass
          );
          t3.push(...r2), n2.addClass([...t3].join(" ")), e3.emitContainerClasses();
        },
        removeClasses: function() {
          const { $el: e3, classNames: t3 } = this;
          e3.removeClass(t3.join(" ")), this.emitContainerClasses();
        }
      };
      const ne = {
        loadImage: function(e3, t3, i2, s2, n2, o2) {
          const a2 = v();
          let r2;
          function l2() {
            o2 && o2();
          }
          T(e3).parent("picture")[0] || e3.complete && n2 ? l2() : t3 ? (r2 = new a2.Image(), r2.onload = l2, r2.onerror = l2, s2 && (r2.sizes = s2), i2 && (r2.srcset = i2), t3 && (r2.src = t3)) : l2();
        },
        preloadImages: function() {
          const e3 = this;
          function t3() {
            null != e3 && e3 && !e3.destroyed && (void 0 !== e3.imagesLoaded && (e3.imagesLoaded += 1), e3.imagesLoaded === e3.imagesToLoad.length && (e3.params.updateOnImagesReady && e3.update(), e3.emit("imagesReady")));
          }
          e3.imagesToLoad = e3.$el.find("img");
          for (let i2 = 0; i2 < e3.imagesToLoad.length; i2 += 1) {
            const s2 = e3.imagesToLoad[i2];
            e3.loadImage(
              s2,
              s2.currentSrc || s2.getAttribute("src"),
              s2.srcset || s2.getAttribute("srcset"),
              s2.sizes || s2.getAttribute("sizes"),
              true,
              t3
            );
          }
        }
      };
      const oe = {
        init: true,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: false,
        updateOnWindowResize: true,
        resizeObserver: true,
        nested: false,
        createElements: false,
        enabled: true,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: false,
        userAgent: null,
        url: null,
        edgeSwipeDetection: false,
        edgeSwipeThreshold: 20,
        autoHeight: false,
        setWrapperSize: false,
        virtualTranslate: false,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: false,
        centeredSlides: false,
        centeredSlidesBounds: false,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: true,
        centerInsufficientSlides: false,
        watchOverflow: true,
        roundLengths: false,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 0,
        touchMoveStopPropagation: false,
        touchStartPreventDefault: true,
        touchStartForcePreventDefault: false,
        touchReleaseOnEdges: false,
        uniqueNavElements: true,
        resistance: true,
        resistanceRatio: 0.85,
        watchSlidesProgress: false,
        grabCursor: false,
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        preloadImages: true,
        updateOnImagesReady: true,
        loop: false,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: true,
        loopFillGroupWithBlank: false,
        loopPreventsSlide: true,
        rewind: false,
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null,
        noSwiping: true,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: true,
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
        runCallbacksOnInit: true,
        _emitClasses: false
      };
      function ae(e3, t3) {
        return function(i2 = {}) {
          const s2 = Object.keys(i2)[0], n2 = i2[s2];
          "object" == typeof n2 && null !== n2 ? (["navigation", "pagination", "scrollbar"].indexOf(s2) >= 0 && true === e3[s2] && (e3[s2] = { auto: true }), s2 in e3 && "enabled" in n2 ? (true === e3[s2] && (e3[s2] = { enabled: true }), "object" != typeof e3[s2] || "enabled" in e3[s2] || (e3[s2].enabled = true), e3[s2] || (e3[s2] = { enabled: false }), A(t3, i2)) : A(t3, i2)) : A(t3, i2);
        };
      }
      const re = {
        eventsEmitter: j,
        update: B,
        translate: N,
        transition: {
          setTransition: function(e3, t3) {
            const i2 = this;
            i2.params.cssMode || i2.$wrapperEl.transition(e3), i2.emit("setTransition", e3, t3);
          },
          transitionStart: function(e3 = true, t3) {
            const i2 = this, { params: s2 } = i2;
            s2.cssMode || (s2.autoHeight && i2.updateAutoHeight(), H({ swiper: i2, runCallbacks: e3, direction: t3, step: "Start" }));
          },
          transitionEnd: function(e3 = true, t3) {
            const i2 = this, { params: s2 } = i2;
            i2.animating = false, s2.cssMode || (i2.setTransition(0), H({ swiper: i2, runCallbacks: e3, direction: t3, step: "End" }));
          }
        },
        slide: q,
        loop: W,
        grabCursor: {
          setGrabCursor: function(e3) {
            const t3 = this;
            if (t3.support.touch || !t3.params.simulateTouch || t3.params.watchOverflow && t3.isLocked || t3.params.cssMode)
              return;
            const i2 = "container" === t3.params.touchEventsTarget ? t3.el : t3.wrapperEl;
            i2.style.cursor = "move", i2.style.cursor = e3 ? "grabbing" : "grab";
          },
          unsetGrabCursor: function() {
            const e3 = this;
            e3.support.touch || e3.params.watchOverflow && e3.isLocked || e3.params.cssMode || (e3["container" === e3.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
          }
        },
        events: ee,
        breakpoints: ie,
        checkOverflow: {
          checkOverflow: function() {
            const e3 = this, { isLocked: t3, params: i2 } = e3, { slidesOffsetBefore: s2 } = i2;
            if (s2) {
              const t4 = e3.slides.length - 1, i3 = e3.slidesGrid[t4] + e3.slidesSizesGrid[t4] + 2 * s2;
              e3.isLocked = e3.size > i3;
            } else e3.isLocked = 1 === e3.snapGrid.length;
            true === i2.allowSlideNext && (e3.allowSlideNext = !e3.isLocked), true === i2.allowSlidePrev && (e3.allowSlidePrev = !e3.isLocked), t3 && t3 !== e3.isLocked && (e3.isEnd = false), t3 !== e3.isLocked && e3.emit(e3.isLocked ? "lock" : "unlock");
          }
        },
        classes: se,
        images: ne
      }, le = {};
      class ce {
        constructor(...e3) {
          let t3, i2;
          if (1 === e3.length && e3[0].constructor && "Object" === Object.prototype.toString.call(e3[0]).slice(8, -1) ? i2 = e3[0] : [t3, i2] = e3, i2 || (i2 = {}), i2 = A({}, i2), t3 && !i2.el && (i2.el = t3), i2.el && T(i2.el).length > 1) {
            const e4 = [];
            return T(i2.el).each((t4) => {
              const s3 = A({}, i2, { el: t4 });
              e4.push(new ce(s3));
            }), e4;
          }
          const s2 = this;
          s2.__swiper__ = true, s2.support = D(), s2.device = R({ userAgent: i2.userAgent }), s2.browser = F(), s2.eventsListeners = {}, s2.eventsAnyListeners = [], s2.modules = [...s2.__modules__], i2.modules && Array.isArray(i2.modules) && s2.modules.push(...i2.modules);
          const n2 = {};
          s2.modules.forEach((e4) => {
            e4({
              swiper: s2,
              extendParams: ae(i2, n2),
              on: s2.on.bind(s2),
              once: s2.once.bind(s2),
              off: s2.off.bind(s2),
              emit: s2.emit.bind(s2)
            });
          });
          const o2 = A({}, oe, n2);
          return s2.params = A({}, o2, le, i2), s2.originalParams = A({}, s2.params), s2.passedParams = A({}, i2), s2.params && s2.params.on && Object.keys(s2.params.on).forEach((e4) => {
            s2.on(e4, s2.params.on[e4]);
          }), s2.params && s2.params.onAny && s2.onAny(s2.params.onAny), s2.$ = T, Object.assign(s2, {
            enabled: s2.params.enabled,
            el: t3,
            classNames: [],
            slides: T(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === s2.params.direction,
            isVertical: () => "vertical" === s2.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: true,
            isEnd: false,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            allowSlideNext: s2.params.allowSlideNext,
            allowSlidePrev: s2.params.allowSlidePrev,
            touchEvents: function() {
              const e4 = ["touchstart", "touchmove", "touchend", "touchcancel"], t4 = ["pointerdown", "pointermove", "pointerup"];
              return s2.touchEventsTouch = {
                start: e4[0],
                move: e4[1],
                end: e4[2],
                cancel: e4[3]
              }, s2.touchEventsDesktop = { start: t4[0], move: t4[1], end: t4[2] }, s2.support.touch || !s2.params.simulateTouch ? s2.touchEventsTouch : s2.touchEventsDesktop;
            }(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: s2.params.focusableElements,
              lastClickTime: M(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0
            },
            allowClick: true,
            allowTouchMove: s2.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), s2.emit("_swiper"), s2.params.init && s2.init(), s2;
        }
        enable() {
          const e3 = this;
          e3.enabled || (e3.enabled = true, e3.params.grabCursor && e3.setGrabCursor(), e3.emit("enable"));
        }
        disable() {
          const e3 = this;
          e3.enabled && (e3.enabled = false, e3.params.grabCursor && e3.unsetGrabCursor(), e3.emit("disable"));
        }
        setProgress(e3, t3) {
          const i2 = this;
          e3 = Math.min(Math.max(e3, 0), 1);
          const s2 = i2.minTranslate(), n2 = (i2.maxTranslate() - s2) * e3 + s2;
          i2.translateTo(n2, void 0 === t3 ? 0 : t3), i2.updateActiveIndex(), i2.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e3 = this;
          if (!e3.params._emitClasses || !e3.el) return;
          const t3 = e3.el.className.split(" ").filter(
            (t4) => 0 === t4.indexOf("swiper") || 0 === t4.indexOf(e3.params.containerModifierClass)
          );
          e3.emit("_containerClasses", t3.join(" "));
        }
        getSlideClasses(e3) {
          const t3 = this;
          return t3.destroyed ? "" : e3.className.split(" ").filter(
            (e4) => 0 === e4.indexOf("swiper-slide") || 0 === e4.indexOf(t3.params.slideClass)
          ).join(" ");
        }
        emitSlidesClasses() {
          const e3 = this;
          if (!e3.params._emitClasses || !e3.el) return;
          const t3 = [];
          e3.slides.each((i2) => {
            const s2 = e3.getSlideClasses(i2);
            t3.push({ slideEl: i2, classNames: s2 }), e3.emit("_slideClass", i2, s2);
          }), e3.emit("_slideClasses", t3);
        }
        slidesPerViewDynamic(e3 = "current", t3 = false) {
          const {
            params: i2,
            slides: s2,
            slidesGrid: n2,
            slidesSizesGrid: o2,
            size: a2,
            activeIndex: r2
          } = this;
          let l2 = 1;
          if (i2.centeredSlides) {
            let e4, t4 = s2[r2].swiperSlideSize;
            for (let i3 = r2 + 1; i3 < s2.length; i3 += 1)
              s2[i3] && !e4 && (t4 += s2[i3].swiperSlideSize, l2 += 1, t4 > a2 && (e4 = true));
            for (let i3 = r2 - 1; i3 >= 0; i3 -= 1)
              s2[i3] && !e4 && (t4 += s2[i3].swiperSlideSize, l2 += 1, t4 > a2 && (e4 = true));
          } else if ("current" === e3)
            for (let e4 = r2 + 1; e4 < s2.length; e4 += 1) {
              (t3 ? n2[e4] + o2[e4] - n2[r2] < a2 : n2[e4] - n2[r2] < a2) && (l2 += 1);
            }
          else
            for (let e4 = r2 - 1; e4 >= 0; e4 -= 1) {
              n2[r2] - n2[e4] < a2 && (l2 += 1);
            }
          return l2;
        }
        update() {
          const e3 = this;
          if (!e3 || e3.destroyed) return;
          const { snapGrid: t3, params: i2 } = e3;
          function s2() {
            const t4 = e3.rtlTranslate ? -1 * e3.translate : e3.translate, i3 = Math.min(Math.max(t4, e3.maxTranslate()), e3.minTranslate());
            e3.setTranslate(i3), e3.updateActiveIndex(), e3.updateSlidesClasses();
          }
          let n2;
          i2.breakpoints && e3.setBreakpoint(), e3.updateSize(), e3.updateSlides(), e3.updateProgress(), e3.updateSlidesClasses(), e3.params.freeMode && e3.params.freeMode.enabled ? (s2(), e3.params.autoHeight && e3.updateAutoHeight()) : (n2 = ("auto" === e3.params.slidesPerView || e3.params.slidesPerView > 1) && e3.isEnd && !e3.params.centeredSlides ? e3.slideTo(e3.slides.length - 1, 0, false, true) : e3.slideTo(e3.activeIndex, 0, false, true), n2 || s2()), i2.watchOverflow && t3 !== e3.snapGrid && e3.checkOverflow(), e3.emit("update");
        }
        changeDirection(e3, t3 = true) {
          const i2 = this, s2 = i2.params.direction;
          return e3 || (e3 = "horizontal" === s2 ? "vertical" : "horizontal"), e3 === s2 || "horizontal" !== e3 && "vertical" !== e3 || (i2.$el.removeClass(`${i2.params.containerModifierClass}${s2}`).addClass(`${i2.params.containerModifierClass}${e3}`), i2.emitContainerClasses(), i2.params.direction = e3, i2.slides.each((t4) => {
            "vertical" === e3 ? t4.style.width = "" : t4.style.height = "";
          }), i2.emit("changeDirection"), t3 && i2.update()), i2;
        }
        changeLanguageDirection(e3) {
          const t3 = this;
          t3.rtl && "rtl" === e3 || !t3.rtl && "ltr" === e3 || (t3.rtl = "rtl" === e3, t3.rtlTranslate = "horizontal" === t3.params.direction && t3.rtl, t3.rtl ? (t3.$el.addClass(`${t3.params.containerModifierClass}rtl`), t3.el.dir = "rtl") : (t3.$el.removeClass(`${t3.params.containerModifierClass}rtl`), t3.el.dir = "ltr"), t3.update());
        }
        mount(e3) {
          const t3 = this;
          if (t3.mounted) return true;
          const i2 = T(e3 || t3.params.el);
          if (!(e3 = i2[0])) return false;
          e3.swiper = t3;
          const s2 = () => `.${(t3.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let n2 = (() => {
            if (e3 && e3.shadowRoot && e3.shadowRoot.querySelector) {
              const t4 = T(e3.shadowRoot.querySelector(s2()));
              return t4.children = (e4) => i2.children(e4), t4;
            }
            return i2.children ? i2.children(s2()) : T(i2).children(s2());
          })();
          if (0 === n2.length && t3.params.createElements) {
            const e4 = g().createElement("div");
            n2 = T(e4), e4.className = t3.params.wrapperClass, i2.append(e4), i2.children(`.${t3.params.slideClass}`).each((e5) => {
              n2.append(e5);
            });
          }
          return Object.assign(t3, {
            $el: i2,
            el: e3,
            $wrapperEl: n2,
            wrapperEl: n2[0],
            mounted: true,
            rtl: "rtl" === e3.dir.toLowerCase() || "rtl" === i2.css("direction"),
            rtlTranslate: "horizontal" === t3.params.direction && ("rtl" === e3.dir.toLowerCase() || "rtl" === i2.css("direction")),
            wrongRTL: "-webkit-box" === n2.css("display")
          }), true;
        }
        init(e3) {
          const t3 = this;
          if (t3.initialized) return t3;
          return false === t3.mount(e3) || (t3.emit("beforeInit"), t3.params.breakpoints && t3.setBreakpoint(), t3.addClasses(), t3.params.loop && t3.loopCreate(), t3.updateSize(), t3.updateSlides(), t3.params.watchOverflow && t3.checkOverflow(), t3.params.grabCursor && t3.enabled && t3.setGrabCursor(), t3.params.preloadImages && t3.preloadImages(), t3.params.loop ? t3.slideTo(
            t3.params.initialSlide + t3.loopedSlides,
            0,
            t3.params.runCallbacksOnInit,
            false,
            true
          ) : t3.slideTo(
            t3.params.initialSlide,
            0,
            t3.params.runCallbacksOnInit,
            false,
            true
          ), t3.attachEvents(), t3.initialized = true, t3.emit("init"), t3.emit("afterInit")), t3;
        }
        destroy(e3 = true, t3 = true) {
          const i2 = this, { params: s2, $el: n2, $wrapperEl: o2, slides: a2 } = i2;
          return void 0 === i2.params || i2.destroyed || (i2.emit("beforeDestroy"), i2.initialized = false, i2.detachEvents(), s2.loop && i2.loopDestroy(), t3 && (i2.removeClasses(), n2.removeAttr("style"), o2.removeAttr("style"), a2 && a2.length && a2.removeClass(
            [
              s2.slideVisibleClass,
              s2.slideActiveClass,
              s2.slideNextClass,
              s2.slidePrevClass
            ].join(" ")
          ).removeAttr("style").removeAttr("data-swiper-slide-index")), i2.emit("destroy"), Object.keys(i2.eventsListeners).forEach((e4) => {
            i2.off(e4);
          }), false !== e3 && (i2.$el[0].swiper = null, function(e4) {
            const t4 = e4;
            Object.keys(t4).forEach((e5) => {
              try {
                t4[e5] = null;
              } catch (e6) {
              }
              try {
                delete t4[e5];
              } catch (e6) {
              }
            });
          }(i2)), i2.destroyed = true), null;
        }
        static extendDefaults(e3) {
          A(le, e3);
        }
        static get extendedDefaults() {
          return le;
        }
        static get defaults() {
          return oe;
        }
        static installModule(e3) {
          ce.prototype.__modules__ || (ce.prototype.__modules__ = []);
          const t3 = ce.prototype.__modules__;
          "function" == typeof e3 && t3.indexOf(e3) < 0 && t3.push(e3);
        }
        static use(e3) {
          return Array.isArray(e3) ? (e3.forEach((e4) => ce.installModule(e4)), ce) : (ce.installModule(e3), ce);
        }
      }
      Object.keys(re).forEach((e3) => {
        Object.keys(re[e3]).forEach((t3) => {
          ce.prototype[t3] = re[e3][t3];
        });
      }), ce.use([
        function({ swiper: e3, on: t3, emit: i2 }) {
          const s2 = v();
          let n2 = null, o2 = null;
          const a2 = () => {
            e3 && !e3.destroyed && e3.initialized && (i2("beforeResize"), i2("resize"));
          }, r2 = () => {
            e3 && !e3.destroyed && e3.initialized && i2("orientationchange");
          };
          t3("init", () => {
            e3.params.resizeObserver && void 0 !== s2.ResizeObserver ? e3 && !e3.destroyed && e3.initialized && (n2 = new ResizeObserver((t4) => {
              o2 = s2.requestAnimationFrame(() => {
                const { width: i3, height: s3 } = e3;
                let n3 = i3, o3 = s3;
                t4.forEach(
                  ({ contentBoxSize: t5, contentRect: i4, target: s4 }) => {
                    s4 && s4 !== e3.el || (n3 = i4 ? i4.width : (t5[0] || t5).inlineSize, o3 = i4 ? i4.height : (t5[0] || t5).blockSize);
                  }
                ), n3 === i3 && o3 === s3 || a2();
              });
            }), n2.observe(e3.el)) : (s2.addEventListener("resize", a2), s2.addEventListener("orientationchange", r2));
          }), t3("destroy", () => {
            o2 && s2.cancelAnimationFrame(o2), n2 && n2.unobserve && e3.el && (n2.unobserve(e3.el), n2 = null), s2.removeEventListener("resize", a2), s2.removeEventListener("orientationchange", r2);
          });
        },
        function({ swiper: e3, extendParams: t3, on: i2, emit: s2 }) {
          const n2 = [], o2 = v(), a2 = (e4, t4 = {}) => {
            const i3 = new (o2.MutationObserver || o2.WebkitMutationObserver)(
              (e5) => {
                if (1 === e5.length) return void s2("observerUpdate", e5[0]);
                const t5 = function() {
                  s2("observerUpdate", e5[0]);
                };
                o2.requestAnimationFrame ? o2.requestAnimationFrame(t5) : o2.setTimeout(t5, 0);
              }
            );
            i3.observe(e4, {
              attributes: void 0 === t4.attributes || t4.attributes,
              childList: void 0 === t4.childList || t4.childList,
              characterData: void 0 === t4.characterData || t4.characterData
            }), n2.push(i3);
          };
          t3({ observer: false, observeParents: false, observeSlideChildren: false }), i2("init", () => {
            if (e3.params.observer) {
              if (e3.params.observeParents) {
                const t4 = e3.$el.parents();
                for (let e4 = 0; e4 < t4.length; e4 += 1) a2(t4[e4]);
              }
              a2(e3.$el[0], { childList: e3.params.observeSlideChildren }), a2(e3.$wrapperEl[0], { attributes: false });
            }
          }), i2("destroy", () => {
            n2.forEach((e4) => {
              e4.disconnect();
            }), n2.splice(0, n2.length);
          });
        }
      ]);
      const de = ce;
      function he({ swiper: e3, extendParams: t3, on: i2, emit: s2 }) {
        function n2(t4) {
          let i3;
          return t4 && (i3 = T(t4), e3.params.uniqueNavElements && "string" == typeof t4 && i3.length > 1 && 1 === e3.$el.find(t4).length && (i3 = e3.$el.find(t4))), i3;
        }
        function o2(t4, i3) {
          const s3 = e3.params.navigation;
          t4 && t4.length > 0 && (t4[i3 ? "addClass" : "removeClass"](s3.disabledClass), t4[0] && "BUTTON" === t4[0].tagName && (t4[0].disabled = i3), e3.params.watchOverflow && e3.enabled && t4[e3.isLocked ? "addClass" : "removeClass"](s3.lockClass));
        }
        function a2() {
          if (e3.params.loop) return;
          const { $nextEl: t4, $prevEl: i3 } = e3.navigation;
          o2(i3, e3.isBeginning && !e3.params.rewind), o2(t4, e3.isEnd && !e3.params.rewind);
        }
        function r2(t4) {
          t4.preventDefault(), (!e3.isBeginning || e3.params.loop || e3.params.rewind) && (e3.slidePrev(), s2("navigationPrev"));
        }
        function l2(t4) {
          t4.preventDefault(), (!e3.isEnd || e3.params.loop || e3.params.rewind) && (e3.slideNext(), s2("navigationNext"));
        }
        function c2() {
          const t4 = e3.params.navigation;
          if (e3.params.navigation = function(e4, t5, i4, s4) {
            const n3 = g();
            return e4.params.createElements && Object.keys(s4).forEach((o3) => {
              if (!i4[o3] && true === i4.auto) {
                let a3 = e4.$el.children(`.${s4[o3]}`)[0];
                a3 || (a3 = n3.createElement("div"), a3.className = s4[o3], e4.$el.append(a3)), i4[o3] = a3, t5[o3] = a3;
              }
            }), i4;
          }(e3, e3.originalParams.navigation, e3.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
          }), !t4.nextEl && !t4.prevEl)
            return;
          const i3 = n2(t4.nextEl), s3 = n2(t4.prevEl);
          i3 && i3.length > 0 && i3.on("click", l2), s3 && s3.length > 0 && s3.on("click", r2), Object.assign(e3.navigation, {
            $nextEl: i3,
            nextEl: i3 && i3[0],
            $prevEl: s3,
            prevEl: s3 && s3[0]
          }), e3.enabled || (i3 && i3.addClass(t4.lockClass), s3 && s3.addClass(t4.lockClass));
        }
        function d2() {
          const { $nextEl: t4, $prevEl: i3 } = e3.navigation;
          t4 && t4.length && (t4.off("click", l2), t4.removeClass(e3.params.navigation.disabledClass)), i3 && i3.length && (i3.off("click", r2), i3.removeClass(e3.params.navigation.disabledClass));
        }
        t3({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: false,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
          }
        }), e3.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null
        }, i2("init", () => {
          false === e3.params.navigation.enabled ? h2() : (c2(), a2());
        }), i2("toEdge fromEdge lock unlock", () => {
          a2();
        }), i2("destroy", () => {
          d2();
        }), i2("enable disable", () => {
          const { $nextEl: t4, $prevEl: i3 } = e3.navigation;
          t4 && t4[e3.enabled ? "removeClass" : "addClass"](
            e3.params.navigation.lockClass
          ), i3 && i3[e3.enabled ? "removeClass" : "addClass"](
            e3.params.navigation.lockClass
          );
        }), i2("click", (t4, i3) => {
          const { $nextEl: n3, $prevEl: o3 } = e3.navigation, a3 = i3.target;
          if (e3.params.navigation.hideOnClick && !T(a3).is(o3) && !T(a3).is(n3)) {
            if (e3.pagination && e3.params.pagination && e3.params.pagination.clickable && (e3.pagination.el === a3 || e3.pagination.el.contains(a3)))
              return;
            let t5;
            n3 ? t5 = n3.hasClass(e3.params.navigation.hiddenClass) : o3 && (t5 = o3.hasClass(e3.params.navigation.hiddenClass)), s2(true === t5 ? "navigationShow" : "navigationHide"), n3 && n3.toggleClass(e3.params.navigation.hiddenClass), o3 && o3.toggleClass(e3.params.navigation.hiddenClass);
          }
        });
        const h2 = () => {
          e3.$el.addClass(e3.params.navigation.navigationDisabledClass), d2();
        };
        Object.assign(e3.navigation, {
          enable: () => {
            e3.$el.removeClass(e3.params.navigation.navigationDisabledClass), c2(), a2();
          },
          disable: h2,
          update: a2,
          init: c2,
          destroy: d2
        });
      }
      function ue(e3 = "") {
        return `.${e3.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
      }
      function pe({ swiper: e3, extendParams: t3, on: i2 }) {
        t3({
          a11y: {
            enabled: true,
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
            id: null
          }
        }), e3.a11y = { clicked: false };
        let s2 = null;
        function n2(e4) {
          const t4 = s2;
          0 !== t4.length && (t4.html(""), t4.html(e4));
        }
        function o2(e4) {
          e4.attr("tabIndex", "0");
        }
        function a2(e4) {
          e4.attr("tabIndex", "-1");
        }
        function r2(e4, t4) {
          e4.attr("role", t4);
        }
        function l2(e4, t4) {
          e4.attr("aria-roledescription", t4);
        }
        function c2(e4, t4) {
          e4.attr("aria-label", t4);
        }
        function d2(e4) {
          e4.attr("aria-disabled", true);
        }
        function h2(e4) {
          e4.attr("aria-disabled", false);
        }
        function u2(t4) {
          if (13 !== t4.keyCode && 32 !== t4.keyCode) return;
          const i3 = e3.params.a11y, s3 = T(t4.target);
          e3.navigation && e3.navigation.$nextEl && s3.is(e3.navigation.$nextEl) && (e3.isEnd && !e3.params.loop || e3.slideNext(), e3.isEnd ? n2(i3.lastSlideMessage) : n2(i3.nextSlideMessage)), e3.navigation && e3.navigation.$prevEl && s3.is(e3.navigation.$prevEl) && (e3.isBeginning && !e3.params.loop || e3.slidePrev(), e3.isBeginning ? n2(i3.firstSlideMessage) : n2(i3.prevSlideMessage)), e3.pagination && s3.is(ue(e3.params.pagination.bulletClass)) && s3[0].click();
        }
        function p2() {
          return e3.pagination && e3.pagination.bullets && e3.pagination.bullets.length;
        }
        function f2() {
          return p2() && e3.params.pagination.clickable;
        }
        const g2 = (e4, t4, i3) => {
          o2(e4), "BUTTON" !== e4[0].tagName && (r2(e4, "button"), e4.on("keydown", u2)), c2(e4, i3), function(e5, t5) {
            e5.attr("aria-controls", t5);
          }(e4, t4);
        }, m2 = () => {
          e3.a11y.clicked = true;
        }, v2 = () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              e3.destroyed || (e3.a11y.clicked = false);
            });
          });
        }, b2 = (t4) => {
          if (e3.a11y.clicked) return;
          const i3 = t4.target.closest(`.${e3.params.slideClass}`);
          if (!i3 || !e3.slides.includes(i3)) return;
          const s3 = e3.slides.indexOf(i3) === e3.activeIndex, n3 = e3.params.watchSlidesProgress && e3.visibleSlides && e3.visibleSlides.includes(i3);
          s3 || n3 || t4.sourceCapabilities && t4.sourceCapabilities.firesTouchEvents || (e3.isHorizontal() ? e3.el.scrollLeft = 0 : e3.el.scrollTop = 0, e3.slideTo(e3.slides.indexOf(i3), 0));
        }, y2 = () => {
          const t4 = e3.params.a11y;
          t4.itemRoleDescriptionMessage && l2(T(e3.slides), t4.itemRoleDescriptionMessage), t4.slideRole && r2(T(e3.slides), t4.slideRole);
          const i3 = e3.params.loop ? e3.slides.filter(
            (t5) => !t5.classList.contains(e3.params.slideDuplicateClass)
          ).length : e3.slides.length;
          t4.slideLabelMessage && e3.slides.each((s3, n3) => {
            const o3 = T(s3), a3 = e3.params.loop ? parseInt(o3.attr("data-swiper-slide-index"), 10) : n3;
            c2(
              o3,
              t4.slideLabelMessage.replace(/\{\{index\}\}/, a3 + 1).replace(/\{\{slidesLength\}\}/, i3)
            );
          });
        }, w2 = () => {
          const t4 = e3.params.a11y;
          e3.$el.append(s2);
          const i3 = e3.$el;
          t4.containerRoleDescriptionMessage && l2(i3, t4.containerRoleDescriptionMessage), t4.containerMessage && c2(i3, t4.containerMessage);
          const n3 = e3.$wrapperEl, o3 = t4.id || n3.attr("id") || `swiper-wrapper-${function(e4 = 16) {
            return "x".repeat(e4).replace(
              /x/g,
              () => Math.round(16 * Math.random()).toString(16)
            );
          }(16)}`, a3 = e3.params.autoplay && e3.params.autoplay.enabled ? "off" : "polite";
          var r3;
          let d3, h3;
          r3 = o3, n3.attr("id", r3), function(e4, t5) {
            e4.attr("aria-live", t5);
          }(n3, a3), y2(), e3.navigation && e3.navigation.$nextEl && (d3 = e3.navigation.$nextEl), e3.navigation && e3.navigation.$prevEl && (h3 = e3.navigation.$prevEl), d3 && d3.length && g2(d3, o3, t4.nextSlideMessage), h3 && h3.length && g2(h3, o3, t4.prevSlideMessage), f2() && e3.pagination.$el.on(
            "keydown",
            ue(e3.params.pagination.bulletClass),
            u2
          ), e3.$el.on("focus", b2, true), e3.$el.on("pointerdown", m2, true), e3.$el.on("pointerup", v2, true);
        };
        i2("beforeInit", () => {
          s2 = T(
            `<span class="${e3.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
          );
        }), i2("afterInit", () => {
          e3.params.a11y.enabled && w2();
        }), i2(
          "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
          () => {
            e3.params.a11y.enabled && y2();
          }
        ), i2("fromEdge toEdge afterInit lock unlock", () => {
          e3.params.a11y.enabled && function() {
            if (e3.params.loop || e3.params.rewind || !e3.navigation) return;
            const { $nextEl: t4, $prevEl: i3 } = e3.navigation;
            i3 && i3.length > 0 && (e3.isBeginning ? (d2(i3), a2(i3)) : (h2(i3), o2(i3))), t4 && t4.length > 0 && (e3.isEnd ? (d2(t4), a2(t4)) : (h2(t4), o2(t4)));
          }();
        }), i2("paginationUpdate", () => {
          e3.params.a11y.enabled && function() {
            const t4 = e3.params.a11y;
            p2() && e3.pagination.bullets.each((i3) => {
              const s3 = T(i3);
              e3.params.pagination.clickable && (o2(s3), e3.params.pagination.renderBullet || (r2(s3, "button"), c2(
                s3,
                t4.paginationBulletMessage.replace(
                  /\{\{index\}\}/,
                  s3.index() + 1
                )
              ))), s3.is(`.${e3.params.pagination.bulletActiveClass}`) ? s3.attr("aria-current", "true") : s3.removeAttr("aria-current");
            });
          }();
        }), i2("destroy", () => {
          e3.params.a11y.enabled && function() {
            let t4, i3;
            s2 && s2.length > 0 && s2.remove(), e3.navigation && e3.navigation.$nextEl && (t4 = e3.navigation.$nextEl), e3.navigation && e3.navigation.$prevEl && (i3 = e3.navigation.$prevEl), t4 && t4.off("keydown", u2), i3 && i3.off("keydown", u2), f2() && e3.pagination.$el.off(
              "keydown",
              ue(e3.params.pagination.bulletClass),
              u2
            ), e3.$el.off("focus", b2, true), e3.$el.off("pointerdown", m2, true), e3.$el.off("pointerup", v2, true);
          }();
        });
      }
      function fe(e3, t3) {
        return e3.transformEl ? t3.find(e3.transformEl).css({
          "backface-visibility": "hidden",
          "-webkit-backface-visibility": "hidden"
        }) : t3;
      }
      if (document.querySelector(".categories")) {
        new de(".categories", {
          modules: [he, pe],
          slidesPerView: "auto",
          navigation: { nextEl: ".swiper-button-next-category" }
        });
      }
      function ge() {
        let e3;
        window.innerWidth < 991.98 && document.querySelector(".sidebar-articles") && (e3 = new de(".sidebar-articles", {
          modules: [he, pe],
          navigation: { nextEl: ".swiper-button-next-article" },
          breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 16 },
            700: { slidesPerView: 3, spaceBetween: 16 }
          }
        })), window.innerWidth > 991.98 && void 0 !== e3 && e3.destroy();
      }
      if (window.addEventListener("resize", function() {
        ge();
      }), ge(), document.querySelector(".slider-container")) {
        let e3 = new de(".slider-bottom", {
          spaceBetween: 10,
          slidesPerView: 6,
          slideToClickedSlide: true,
          breakpoints: {
            320: { spaceBetween: 8, slidesPerView: 4 },
            450: { spaceBetween: 8, slidesPerView: 4 },
            600: { spaceBetween: 8, slidesPerView: 6 },
            768: { spaceBetween: 9, slidesPerView: 8 }
          }
        });
        new de(".slider-top", {
          modules: [
            function({ swiper: e4, extendParams: t3, on: i2 }) {
              t3({
                thumbs: {
                  swiper: null,
                  multipleActiveThumbs: true,
                  autoScrollOffset: 0,
                  slideThumbActiveClass: "swiper-slide-thumb-active",
                  thumbsContainerClass: "swiper-thumbs"
                }
              });
              let s2 = false, n2 = false;
              function o2() {
                const t4 = e4.thumbs.swiper;
                if (!t4 || t4.destroyed) return;
                const i3 = t4.clickedIndex, s3 = t4.clickedSlide;
                if (s3 && T(s3).hasClass(e4.params.thumbs.slideThumbActiveClass))
                  return;
                if (null == i3) return;
                let n3;
                if (n3 = t4.params.loop ? parseInt(
                  T(t4.clickedSlide).attr("data-swiper-slide-index"),
                  10
                ) : i3, e4.params.loop) {
                  let t5 = e4.activeIndex;
                  e4.slides.eq(t5).hasClass(e4.params.slideDuplicateClass) && (e4.loopFix(), e4._clientLeft = e4.$wrapperEl[0].clientLeft, t5 = e4.activeIndex);
                  const i4 = e4.slides.eq(t5).prevAll(`[data-swiper-slide-index="${n3}"]`).eq(0).index(), s4 = e4.slides.eq(t5).nextAll(`[data-swiper-slide-index="${n3}"]`).eq(0).index();
                  n3 = void 0 === i4 ? s4 : void 0 === s4 ? i4 : s4 - t5 < t5 - i4 ? s4 : i4;
                }
                e4.slideTo(n3);
              }
              function a2() {
                const { thumbs: t4 } = e4.params;
                if (s2) return false;
                s2 = true;
                const i3 = e4.constructor;
                if (t4.swiper instanceof i3)
                  e4.thumbs.swiper = t4.swiper, Object.assign(e4.thumbs.swiper.originalParams, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                  }), Object.assign(e4.thumbs.swiper.params, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                  });
                else if (L(t4.swiper)) {
                  const s3 = Object.assign({}, t4.swiper);
                  Object.assign(s3, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                  }), e4.thumbs.swiper = new i3(s3), n2 = true;
                }
                return e4.thumbs.swiper.$el.addClass(
                  e4.params.thumbs.thumbsContainerClass
                ), e4.thumbs.swiper.on("tap", o2), true;
              }
              function r2(t4) {
                const i3 = e4.thumbs.swiper;
                if (!i3 || i3.destroyed) return;
                const s3 = "auto" === i3.params.slidesPerView ? i3.slidesPerViewDynamic() : i3.params.slidesPerView;
                let n3 = 1;
                const o3 = e4.params.thumbs.slideThumbActiveClass;
                if (e4.params.slidesPerView > 1 && !e4.params.centeredSlides && (n3 = e4.params.slidesPerView), e4.params.thumbs.multipleActiveThumbs || (n3 = 1), n3 = Math.floor(n3), i3.slides.removeClass(o3), i3.params.loop || i3.params.virtual && i3.params.virtual.enabled)
                  for (let t5 = 0; t5 < n3; t5 += 1)
                    i3.$wrapperEl.children(`[data-swiper-slide-index="${e4.realIndex + t5}"]`).addClass(o3);
                else
                  for (let t5 = 0; t5 < n3; t5 += 1)
                    i3.slides.eq(e4.realIndex + t5).addClass(o3);
                const a3 = e4.params.thumbs.autoScrollOffset, r3 = a3 && !i3.params.loop;
                if (e4.realIndex !== i3.realIndex || r3) {
                  let n4, o4, l2 = i3.activeIndex;
                  if (i3.params.loop) {
                    i3.slides.eq(l2).hasClass(i3.params.slideDuplicateClass) && (i3.loopFix(), i3._clientLeft = i3.$wrapperEl[0].clientLeft, l2 = i3.activeIndex);
                    const t5 = i3.slides.eq(l2).prevAll(`[data-swiper-slide-index="${e4.realIndex}"]`).eq(0).index(), s4 = i3.slides.eq(l2).nextAll(`[data-swiper-slide-index="${e4.realIndex}"]`).eq(0).index();
                    n4 = void 0 === t5 ? s4 : void 0 === s4 ? t5 : s4 - l2 == l2 - t5 ? i3.params.slidesPerGroup > 1 ? s4 : l2 : s4 - l2 < l2 - t5 ? s4 : t5, o4 = e4.activeIndex > e4.previousIndex ? "next" : "prev";
                  } else
                    n4 = e4.realIndex, o4 = n4 > e4.previousIndex ? "next" : "prev";
                  r3 && (n4 += "next" === o4 ? a3 : -1 * a3), i3.visibleSlidesIndexes && i3.visibleSlidesIndexes.indexOf(n4) < 0 && (i3.params.centeredSlides ? n4 = n4 > l2 ? n4 - Math.floor(s3 / 2) + 1 : n4 + Math.floor(s3 / 2) - 1 : n4 > l2 && i3.params.slidesPerGroup, i3.slideTo(n4, t4 ? 0 : void 0));
                }
              }
              e4.thumbs = { swiper: null }, i2("beforeInit", () => {
                const { thumbs: t4 } = e4.params;
                t4 && t4.swiper && (a2(), r2(true));
              }), i2("slideChange update resize observerUpdate", () => {
                r2();
              }), i2("setTransition", (t4, i3) => {
                const s3 = e4.thumbs.swiper;
                s3 && !s3.destroyed && s3.setTransition(i3);
              }), i2("beforeDestroy", () => {
                const t4 = e4.thumbs.swiper;
                t4 && !t4.destroyed && n2 && t4.destroy();
              }), Object.assign(e4.thumbs, { init: a2, update: r2 });
            },
            function({ swiper: e4, extendParams: t3, on: i2 }) {
              t3({ fadeEffect: { crossFade: false, transformEl: null } }), function(e5) {
                const {
                  effect: t4,
                  swiper: i3,
                  on: s2,
                  setTranslate: n2,
                  setTransition: o2,
                  overwriteParams: a2,
                  perspective: r2,
                  recreateShadows: l2,
                  getEffectParams: c2
                } = e5;
                let d2;
                s2("beforeInit", () => {
                  if (i3.params.effect !== t4) return;
                  i3.classNames.push(`${i3.params.containerModifierClass}${t4}`), r2 && r2() && i3.classNames.push(`${i3.params.containerModifierClass}3d`);
                  const e6 = a2 ? a2() : {};
                  Object.assign(i3.params, e6), Object.assign(i3.originalParams, e6);
                }), s2("setTranslate", () => {
                  i3.params.effect === t4 && n2();
                }), s2("setTransition", (e6, s3) => {
                  i3.params.effect === t4 && o2(s3);
                }), s2("transitionEnd", () => {
                  if (i3.params.effect === t4 && l2) {
                    if (!c2 || !c2().slideShadows) return;
                    i3.slides.each((e6) => {
                      i3.$(e6).find(
                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                      ).remove();
                    }), l2();
                  }
                }), s2("virtualUpdate", () => {
                  i3.params.effect === t4 && (i3.slides.length || (d2 = true), requestAnimationFrame(() => {
                    d2 && i3.slides && i3.slides.length && (n2(), d2 = false);
                  }));
                });
              }({
                effect: "fade",
                swiper: e4,
                on: i2,
                setTranslate: () => {
                  const { slides: t4 } = e4, i3 = e4.params.fadeEffect;
                  for (let s2 = 0; s2 < t4.length; s2 += 1) {
                    const t5 = e4.slides.eq(s2);
                    let n2 = -t5[0].swiperSlideOffset;
                    e4.params.virtualTranslate || (n2 -= e4.translate);
                    let o2 = 0;
                    e4.isHorizontal() || (o2 = n2, n2 = 0);
                    const a2 = e4.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t5[0].progress), 0) : 1 + Math.min(Math.max(t5[0].progress, -1), 0);
                    fe(i3, t5).css({ opacity: a2 }).transform(`translate3d(${n2}px, ${o2}px, 0px)`);
                  }
                },
                setTransition: (t4) => {
                  const { transformEl: i3 } = e4.params.fadeEffect;
                  (i3 ? e4.slides.find(i3) : e4.slides).transition(t4), function({
                    swiper: e5,
                    duration: t5,
                    transformEl: i4,
                    allSlides: s2
                  }) {
                    const { slides: n2, activeIndex: o2, $wrapperEl: a2 } = e5;
                    if (e5.params.virtualTranslate && 0 !== t5) {
                      let t6, r2 = false;
                      t6 = s2 ? i4 ? n2.find(i4) : n2 : i4 ? n2.eq(o2).find(i4) : n2.eq(o2), t6.transitionEnd(() => {
                        if (r2) return;
                        if (!e5 || e5.destroyed) return;
                        r2 = true, e5.animating = false;
                        const t7 = ["webkitTransitionEnd", "transitionend"];
                        for (let e6 = 0; e6 < t7.length; e6 += 1)
                          a2.trigger(t7[e6]);
                      });
                    }
                  }({
                    swiper: e4,
                    duration: t4,
                    transformEl: i3,
                    allSlides: true
                  });
                },
                overwriteParams: () => ({
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: true,
                  spaceBetween: 0,
                  virtualTranslate: !e4.params.cssMode
                })
              });
            },
            he,
            pe
          ],
          thumbs: { swiper: e3 },
          navigation: {
            nextEl: ".swiper-arrow-right",
            prevEl: ".swiper-arrow-left"
          },
          effect: "fade",
          observer: true,
          observeParents: true,
          speed: 800,
          crossFade: true,
          breakpoints: { 320: { autoHeight: false }, 991: { autoHeight: false } },
          on: {
            init: function(e4) {
              setTimeout(() => {
                const t3 = e4.$wrapperEl[0];
                console.log(t3);
                const i2 = e4.slides[e4.activeIndex].offsetHeight;
                t3.style.minHeight = `${i2}px`;
              }, 0), window.addEventListener("resize", function() {
                setTimeout(() => {
                  const t3 = e4.$wrapperEl[0];
                  console.log(t3);
                  const i2 = e4.slides[e4.activeIndex].offsetHeight;
                  t3.style.minHeight = `${i2}px`;
                }, 0);
              });
            },
            slideChange: function(e4) {
              setTimeout(() => {
                const t3 = e4.$wrapperEl[0];
                console.log(t3);
                const i2 = e4.slides[e4.activeIndex].offsetHeight;
                t3.style.minHeight = `${i2}px`;
              }, 0);
            }
          }
        });
      }
      new (i(732))({
        elements_selector: "[data-src],[data-srcset]",
        class_loaded: "_lazy-loaded",
        use_native: true
      });
      e2.watcher = new class {
        constructor(e3) {
          this.config = Object.assign({ logging: true }, e3), this.observer, !document.documentElement.classList.contains("watcher") && this.scrollWatcherRun();
        }
        scrollWatcherUpdate() {
          this.scrollWatcherRun();
        }
        scrollWatcherRun() {
          document.documentElement.classList.add("watcher"), this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
        }
        scrollWatcherConstructor(e3) {
          if (e3.length) {
            this.scrollWatcherLogging(
              `\u041F\u0440\u043E\u0441\u043D\u0443\u043B\u0441\u044F, \u0441\u043B\u0435\u0436\u0443 \u0437\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0430\u043C\u0438 (${e3.length})...`
            ), d(
              Array.from(e3).map(function(e4) {
                return `${e4.dataset.watchRoot ? e4.dataset.watchRoot : null}|${e4.dataset.watchMargin ? e4.dataset.watchMargin : "0px"}|${e4.dataset.watchThreshold ? e4.dataset.watchThreshold : 0}`;
              })
            ).forEach((t3) => {
              let i2 = t3.split("|"), s2 = { root: i2[0], margin: i2[1], threshold: i2[2] }, n2 = Array.from(e3).filter(function(e4) {
                let t4 = e4.dataset.watchRoot ? e4.dataset.watchRoot : null, i3 = e4.dataset.watchMargin ? e4.dataset.watchMargin : "0px", n3 = e4.dataset.watchThreshold ? e4.dataset.watchThreshold : 0;
                if (String(t4) === s2.root && String(i3) === s2.margin && String(n3) === s2.threshold)
                  return e4;
              }), o2 = this.getScrollWatcherConfig(s2);
              this.scrollWatcherInit(n2, o2);
            });
          } else
            this.scrollWatcherLogging("\u0421\u043F\u043B\u044E, \u043D\u0435\u0442 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0434\u043B\u044F \u0441\u043B\u0435\u0436\u0435\u043D\u0438\u044F. ZzzZZzz");
        }
        getScrollWatcherConfig(e3) {
          let t3 = {};
          if (document.querySelector(e3.root) ? t3.root = document.querySelector(e3.root) : "null" !== e3.root && this.scrollWatcherLogging(
            `\u042D\u043C\u043C... \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0430 ${e3.root} \u043D\u0435\u0442 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435`
          ), t3.rootMargin = e3.margin, !(e3.margin.indexOf("px") < 0 && e3.margin.indexOf("%") < 0)) {
            if ("prx" === e3.threshold) {
              e3.threshold = [];
              for (let t4 = 0; t4 <= 1; t4 += 5e-3) e3.threshold.push(t4);
            } else e3.threshold = e3.threshold.split(",");
            return t3.threshold = e3.threshold, t3;
          }
          this.scrollWatcherLogging(
            "\u041E\u0439 \u043E\u0439, \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0443 data-watch-margin \u043D\u0443\u0436\u043D\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044C \u0432 PX \u0438\u043B\u0438 %"
          );
        }
        scrollWatcherCreate(e3) {
          this.observer = new IntersectionObserver((e4, t3) => {
            e4.forEach((e5) => {
              this.scrollWatcherCallback(e5, t3);
            });
          }, e3);
        }
        scrollWatcherInit(e3, t3) {
          this.scrollWatcherCreate(t3), e3.forEach((e4) => this.observer.observe(e4));
        }
        scrollWatcherIntersecting(e3, t3) {
          e3.isIntersecting ? (!t3.classList.contains("_watcher-view") && t3.classList.add("_watcher-view"), this.scrollWatcherLogging(
            `\u042F \u0432\u0438\u0436\u0443 ${t3.classList}, \u0434\u043E\u0431\u0430\u0432\u0438\u043B \u043A\u043B\u0430\u0441\u0441 _watcher-view`
          )) : (t3.classList.contains("_watcher-view") && t3.classList.remove("_watcher-view"), this.scrollWatcherLogging(
            `\u042F \u043D\u0435 \u0432\u0438\u0436\u0443 ${t3.classList}, \u0443\u0431\u0440\u0430\u043B \u043A\u043B\u0430\u0441\u0441 _watcher-view`
          ));
        }
        scrollWatcherOff(e3, t3) {
          t3.unobserve(e3), this.scrollWatcherLogging(`\u042F \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u043B \u0441\u043B\u0435\u0434\u0438\u0442\u044C \u0437\u0430 ${e3.classList}`);
        }
        scrollWatcherLogging(e3) {
          this.config.logging && c(`[\u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C]: ${e3}`);
        }
        scrollWatcherCallback(e3, t3) {
          const i2 = e3.target;
          this.scrollWatcherIntersecting(e3, i2), i2.hasAttribute("data-watch-once") && e3.isIntersecting && this.scrollWatcherOff(i2, t3), document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e3 } })
          );
        }
      }({});
      let me = false;
      setTimeout(() => {
        if (me) {
          let e3 = new Event("windowScroll");
          window.addEventListener("scroll", function(t3) {
            document.dispatchEvent(e3);
          });
        }
      }, 0);
      const ve = (e3, t3 = 1e4) => (e3 = parseFloat(e3 + "") || 0, Math.round((e3 + Number.EPSILON) * t3) / t3), be = function(e3) {
        if (!(e3 && e3 instanceof Element && e3.offsetParent)) return false;
        const t3 = e3.scrollHeight > e3.clientHeight, i2 = window.getComputedStyle(e3).overflowY, s2 = -1 !== i2.indexOf("hidden"), n2 = -1 !== i2.indexOf("visible");
        return t3 && !s2 && !n2;
      }, ye = function(e3, t3 = void 0) {
        return !(!e3 || e3 === document.body || t3 && e3 === t3) && (be(e3) ? e3 : ye(e3.parentElement, t3));
      }, we = function(e3) {
        var t3 = new DOMParser().parseFromString(e3, "text/html").body;
        if (t3.childElementCount > 1) {
          for (var i2 = document.createElement("div"); t3.firstChild; )
            i2.appendChild(t3.firstChild);
          return i2;
        }
        return t3.firstChild;
      }, Se = (e3) => `${e3 || ""}`.split(" ").filter((e4) => !!e4), xe = (e3, t3, i2) => {
        e3 && Se(t3).forEach((t4) => {
          e3.classList.toggle(t4, i2 || false);
        });
      };
      class Ee {
        constructor(e3) {
          Object.defineProperty(this, "pageX", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          }), Object.defineProperty(this, "pageY", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          }), Object.defineProperty(this, "clientX", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          }), Object.defineProperty(this, "clientY", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          }), Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          }), Object.defineProperty(this, "time", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          }), Object.defineProperty(this, "nativePointer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          }), this.nativePointer = e3, this.pageX = e3.pageX, this.pageY = e3.pageY, this.clientX = e3.clientX, this.clientY = e3.clientY, this.id = self.Touch && e3 instanceof Touch ? e3.identifier : -1, this.time = Date.now();
        }
      }
      const Ce = { passive: false };
      class Te {
        constructor(e3, { start: t3 = () => true, move: i2 = () => {
        }, end: s2 = () => {
        } }) {
          Object.defineProperty(this, "element", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          }), Object.defineProperty(this, "startCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          }), Object.defineProperty(this, "moveCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          }), Object.defineProperty(this, "endCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          }), Object.defineProperty(this, "currentPointers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
          }), Object.defineProperty(this, "startPointers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
          }), this.element = e3, this.startCallback = t3, this.moveCallback = i2, this.endCallback = s2;
          for (const e4 of [
            "onPointerStart",
            "onTouchStart",
            "onMove",
            "onTouchEnd",
            "onPointerEnd",
            "onWindowBlur"
          ])
            this[e4] = this[e4].bind(this);
          this.element.addEventListener("mousedown", this.onPointerStart, Ce), this.element.addEventListener("touchstart", this.onTouchStart, Ce), this.element.addEventListener("touchmove", this.onMove, Ce), this.element.addEventListener("touchend", this.onTouchEnd), this.element.addEventListener("touchcancel", this.onTouchEnd);
        }
        onPointerStart(e3) {
          if (!e3.buttons || 0 !== e3.button) return;
          const t3 = new Ee(e3);
          this.currentPointers.some((e4) => e4.id === t3.id) || this.triggerPointerStart(t3, e3) && (window.addEventListener("mousemove", this.onMove), window.addEventListener("mouseup", this.onPointerEnd), window.addEventListener("blur", this.onWindowBlur));
        }
        onTouchStart(e3) {
          for (const t3 of Array.from(e3.changedTouches || []))
            this.triggerPointerStart(new Ee(t3), e3);
          window.addEventListener("blur", this.onWindowBlur);
        }
        onMove(e3) {
          const t3 = this.currentPointers.slice(), i2 = "changedTouches" in e3 ? Array.from(e3.changedTouches || []).map((e4) => new Ee(e4)) : [new Ee(e3)], s2 = [];
          for (const e4 of i2) {
            const t4 = this.currentPointers.findIndex((t5) => t5.id === e4.id);
            t4 < 0 || (s2.push(e4), this.currentPointers[t4] = e4);
          }
          s2.length && this.moveCallback(e3, this.currentPointers.slice(), t3);
        }
        onPointerEnd(e3) {
          e3.buttons > 0 && 0 !== e3.button || (this.triggerPointerEnd(e3, new Ee(e3)), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur));
        }
        onTouchEnd(e3) {
          for (const t3 of Array.from(e3.changedTouches || []))
            this.triggerPointerEnd(e3, new Ee(t3));
        }
        triggerPointerStart(e3, t3) {
          return !!this.startCallback(t3, e3, this.currentPointers.slice()) && (this.currentPointers.push(e3), this.startPointers.push(e3), true);
        }
        triggerPointerEnd(e3, t3) {
          const i2 = this.currentPointers.findIndex((e4) => e4.id === t3.id);
          i2 < 0 || (this.currentPointers.splice(i2, 1), this.startPointers.splice(i2, 1), this.endCallback(e3, t3, this.currentPointers.slice()));
        }
        onWindowBlur() {
          this.clear();
        }
        clear() {
          for (; this.currentPointers.length; ) {
            const e3 = this.currentPointers[this.currentPointers.length - 1];
            this.currentPointers.splice(this.currentPointers.length - 1, 1), this.startPointers.splice(this.currentPointers.length - 1, 1), this.endCallback(
              new Event("touchend", {
                bubbles: true,
                cancelable: true,
                clientX: e3.clientX,
                clientY: e3.clientY
              }),
              e3,
              this.currentPointers.slice()
            );
          }
        }
        stop() {
          this.element.removeEventListener("mousedown", this.onPointerStart, Ce), this.element.removeEventListener("touchstart", this.onTouchStart, Ce), this.element.removeEventListener("touchmove", this.onMove, Ce), this.element.removeEventListener("touchend", this.onTouchEnd), this.element.removeEventListener("touchcancel", this.onTouchEnd), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur);
        }
      }
      function Pe(e3, t3) {
        return t3 ? Math.sqrt(
          Math.pow(t3.clientX - e3.clientX, 2) + Math.pow(t3.clientY - e3.clientY, 2)
        ) : 0;
      }
      function Me(e3, t3) {
        return t3 ? {
          clientX: (e3.clientX + t3.clientX) / 2,
          clientY: (e3.clientY + t3.clientY) / 2
        } : e3;
      }
      const Oe = (e3) => "object" == typeof e3 && null !== e3 && e3.constructor === Object && "[object Object]" === Object.prototype.toString.call(e3), Le = (e3, ...t3) => {
        const i2 = t3.length;
        for (let s2 = 0; s2 < i2; s2++) {
          const i3 = t3[s2] || {};
          Object.entries(i3).forEach(([t4, i4]) => {
            const s3 = Array.isArray(i4) ? [] : {};
            e3[t4] || Object.assign(e3, { [t4]: s3 }), Oe(i4) ? Object.assign(e3[t4], Le(s3, i4)) : Array.isArray(i4) ? Object.assign(e3, { [t4]: [...i4] }) : Object.assign(e3, { [t4]: i4 });
          });
        }
        return e3;
      }, Ae = function(e3, t3) {
        return e3.split(".").reduce((e4, t4) => "object" == typeof e4 ? e4[t4] : void 0, t3);
      };
      class ke {
        constructor(e3 = {}) {
          Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: e3
          }), Object.defineProperty(this, "events", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: /* @__PURE__ */ new Map()
          }), this.setOptions(e3);
          for (const e4 of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
            e4.startsWith("on") && "function" == typeof this[e4] && (this[e4] = this[e4].bind(this));
        }
        setOptions(e3) {
          this.options = e3 ? Le({}, this.constructor.defaults, e3) : {};
          for (const [e4, t3] of Object.entries(this.option("on") || {}))
            this.on(e4, t3);
        }
        option(e3, ...t3) {
          let i2 = Ae(e3, this.options);
          return i2 && "function" == typeof i2 && (i2 = i2.call(this, this, ...t3)), i2;
        }
        optionFor(e3, t3, i2, ...s2) {
          let n2 = Ae(t3, e3);
          var o2;
          "string" != typeof (o2 = n2) || isNaN(o2) || isNaN(parseFloat(o2)) || (n2 = parseFloat(n2)), "true" === n2 && (n2 = true), "false" === n2 && (n2 = false), n2 && "function" == typeof n2 && (n2 = n2.call(this, this, e3, ...s2));
          let a2 = Ae(t3, this.options);
          return a2 && "function" == typeof a2 ? n2 = a2.call(this, this, e3, ...s2, n2) : void 0 === n2 && (n2 = a2), void 0 === n2 ? i2 : n2;
        }
        cn(e3) {
          const t3 = this.options.classes;
          return t3 && t3[e3] || "";
        }
        localize(e3, t3 = []) {
          e3 = String(e3).replace(/\{\{(\w+).?(\w+)?\}\}/g, (e4, t4, i2) => {
            let s2 = "";
            return i2 ? s2 = this.option(
              `${t4[0] + t4.toLowerCase().substring(1)}.l10n.${i2}`
            ) : t4 && (s2 = this.option(`l10n.${t4}`)), s2 || (s2 = e4), s2;
          });
          for (let i2 = 0; i2 < t3.length; i2++) e3 = e3.split(t3[i2][0]).join(t3[i2][1]);
          return e3.replace(/\{\{(.*?)\}\}/g, (e4, t4) => t4);
        }
        on(e3, t3) {
          let i2 = [];
          "string" == typeof e3 ? i2 = e3.split(" ") : Array.isArray(e3) && (i2 = e3), this.events || (this.events = /* @__PURE__ */ new Map()), i2.forEach((e4) => {
            let i3 = this.events.get(e4);
            i3 || (this.events.set(e4, []), i3 = []), i3.includes(t3) || i3.push(t3), this.events.set(e4, i3);
          });
        }
        off(e3, t3) {
          let i2 = [];
          "string" == typeof e3 ? i2 = e3.split(" ") : Array.isArray(e3) && (i2 = e3), i2.forEach((e4) => {
            const i3 = this.events.get(e4);
            if (Array.isArray(i3)) {
              const e5 = i3.indexOf(t3);
              e5 > -1 && i3.splice(e5, 1);
            }
          });
        }
        emit(e3, ...t3) {
          [...this.events.get(e3) || []].forEach((e4) => e4(this, ...t3)), "*" !== e3 && this.emit("*", e3, ...t3);
        }
      }
      Object.defineProperty(ke, "version", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "5.0.33"
      }), Object.defineProperty(ke, "defaults", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: {}
      });
      class Ie extends ke {
        constructor(e3 = {}) {
          super(e3), Object.defineProperty(this, "plugins", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
          });
        }
        attachPlugins(e3 = {}) {
          const t3 = /* @__PURE__ */ new Map();
          for (const [i2, s2] of Object.entries(e3)) {
            const e4 = this.option(i2), n2 = this.plugins[i2];
            n2 || false === e4 ? n2 && false === e4 && (n2.detach(), delete this.plugins[i2]) : t3.set(i2, new s2(this, e4 || {}));
          }
          for (const [e4, i2] of t3) this.plugins[e4] = i2, i2.attach();
        }
        detachPlugins(e3) {
          e3 = e3 || Object.keys(this.plugins);
          for (const t3 of e3) {
            const e4 = this.plugins[t3];
            e4 && e4.detach(), delete this.plugins[t3];
          }
          return this.emit("detachPlugins"), this;
        }
      }
      var _e;
      !function(e3) {
        e3[e3.Init = 0] = "Init", e3[e3.Error = 1] = "Error", e3[e3.Ready = 2] = "Ready", e3[e3.Panning = 3] = "Panning", e3[e3.Mousemove = 4] = "Mousemove", e3[e3.Destroy = 5] = "Destroy";
      }(_e || (_e = {}));
      const ze = ["a", "b", "c", "d", "e", "f"], $e = {
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
        TOGGLEFS: "Toggle fullscreen"
      }, De = {
        content: null,
        width: "auto",
        height: "auto",
        panMode: "drag",
        touch: true,
        dragMinThreshold: 3,
        lockAxis: false,
        mouseMoveFactor: 1,
        mouseMoveFriction: 0.12,
        zoom: true,
        pinchToZoom: true,
        panOnlyZoomed: "auto",
        minScale: 1,
        maxScale: 2,
        friction: 0.25,
        dragFriction: 0.35,
        decelFriction: 0.05,
        click: "toggleZoom",
        dblClick: false,
        wheel: "zoom",
        wheelLimit: 7,
        spinner: true,
        bounds: "auto",
        infinite: false,
        rubberband: true,
        bounce: true,
        maxVelocity: 75,
        transformParent: false,
        classes: {
          content: "f-panzoom__content",
          isLoading: "is-loading",
          canZoomIn: "can-zoom_in",
          canZoomOut: "can-zoom_out",
          isDraggable: "is-draggable",
          isDragging: "is-dragging",
          inFullscreen: "in-fullscreen",
          htmlHasFullscreen: "with-panzoom-in-fullscreen"
        },
        l10n: $e
      }, Re = '<circle cx="25" cy="25" r="20"></circle>', Fe = '<div class="f-spinner"><svg viewBox="0 0 50 50">' + Re + Re + "</svg></div>", je = (e3) => e3 && null !== e3 && e3 instanceof Element && "nodeType" in e3, Be = (e3, t3) => {
        e3 && Se(t3).forEach((t4) => {
          e3.classList.remove(t4);
        });
      }, Ne = (e3, t3) => {
        e3 && Se(t3).forEach((t4) => {
          e3.classList.add(t4);
        });
      }, He = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 }, qe = 1e4, We = "mousemove", Ge = "drag", Ve = "content";
      let Xe = null, Ye = null;
      class Ze extends Ie {
        get fits() {
          return this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1;
        }
        get isTouchDevice() {
          return null === Ye && (Ye = window.matchMedia("(hover: none)").matches), Ye;
        }
        get isMobile() {
          return null === Xe && (Xe = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)), Xe;
        }
        get panMode() {
          return this.options.panMode !== We || this.isTouchDevice ? Ge : We;
        }
        get panOnlyZoomed() {
          const e3 = this.options.panOnlyZoomed;
          return "auto" === e3 ? this.isTouchDevice : e3;
        }
        get isInfinite() {
          return this.option("infinite");
        }
        get angle() {
          return 180 * Math.atan2(this.current.b, this.current.a) / Math.PI || 0;
        }
        get targetAngle() {
          return 180 * Math.atan2(this.target.b, this.target.a) / Math.PI || 0;
        }
        get scale() {
          const { a: e3, b: t3 } = this.current;
          return Math.sqrt(e3 * e3 + t3 * t3) || 1;
        }
        get targetScale() {
          const { a: e3, b: t3 } = this.target;
          return Math.sqrt(e3 * e3 + t3 * t3) || 1;
        }
        get minScale() {
          return this.option("minScale") || 1;
        }
        get fullScale() {
          const { contentRect: e3 } = this;
          return e3.fullWidth / e3.fitWidth || 1;
        }
        get maxScale() {
          return this.fullScale * (this.option("maxScale") || 1) || 1;
        }
        get coverScale() {
          const { containerRect: e3, contentRect: t3 } = this, i2 = Math.max(e3.height / t3.fitHeight, e3.width / t3.fitWidth) || 1;
          return Math.min(this.fullScale, i2);
        }
        get isScaling() {
          return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting;
        }
        get isContentLoading() {
          const e3 = this.content;
          return !!(e3 && e3 instanceof HTMLImageElement) && !e3.complete;
        }
        get isResting() {
          if (this.isBouncingX || this.isBouncingY) return false;
          for (const e3 of ze) {
            const t3 = "e" == e3 || "f" === e3 ? 1e-4 : 1e-5;
            if (Math.abs(this.target[e3] - this.current[e3]) > t3) return false;
          }
          return !(!this.ignoreBounds && !this.checkBounds().inBounds);
        }
        constructor(e3, t3 = {}, i2 = {}) {
          var s2;
          if (super(t3), Object.defineProperty(this, "pointerTracker", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "resizeObserver", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "updateTimer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "clickTimer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "rAF", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "isTicking", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
          }), Object.defineProperty(this, "ignoreBounds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
          }), Object.defineProperty(this, "isBouncingX", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
          }), Object.defineProperty(this, "isBouncingY", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
          }), Object.defineProperty(this, "clicks", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
          }), Object.defineProperty(this, "trackingPoints", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
          }), Object.defineProperty(this, "pwt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
          }), Object.defineProperty(this, "cwd", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
          }), Object.defineProperty(this, "pmme", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          }), Object.defineProperty(this, "friction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
          }), Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _e.Init
          }), Object.defineProperty(this, "isDragging", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
          }), Object.defineProperty(this, "container", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          }), Object.defineProperty(this, "content", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          }), Object.defineProperty(this, "spinner", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "containerRect", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: { width: 0, height: 0, innerWidth: 0, innerHeight: 0 }
          }), Object.defineProperty(this, "contentRect", {
            enumerable: true,
            configurable: true,
            writable: true,
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
              height: 0
            }
          }), Object.defineProperty(this, "dragStart", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: { x: 0, y: 0, top: 0, left: 0, time: 0 }
          }), Object.defineProperty(this, "dragOffset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: { x: 0, y: 0, time: 0 }
          }), Object.defineProperty(this, "current", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Object.assign({}, He)
          }), Object.defineProperty(this, "target", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Object.assign({}, He)
          }), Object.defineProperty(this, "velocity", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 }
          }), Object.defineProperty(this, "lockedAxis", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
          }), !e3)
            throw new Error("Container Element Not Found");
          this.container = e3, this.initContent(), this.attachPlugins(Object.assign(Object.assign({}, Ze.Plugins), i2)), this.emit("attachPlugins"), this.emit("init");
          const n2 = this.content;
          if (n2.addEventListener("load", this.onLoad), n2.addEventListener("error", this.onError), this.isContentLoading) {
            if (this.option("spinner")) {
              e3.classList.add(this.cn("isLoading"));
              const t4 = we(Fe);
              !e3.contains(n2) || n2.parentElement instanceof HTMLPictureElement ? this.spinner = e3.appendChild(t4) : this.spinner = (null === (s2 = n2.parentElement) || void 0 === s2 ? void 0 : s2.insertBefore(t4, n2)) || null;
            }
            this.emit("beforeLoad");
          } else
            queueMicrotask(() => {
              this.enable();
            });
        }
        initContent() {
          const { container: e3 } = this, t3 = this.cn(Ve);
          let i2 = this.option(Ve) || e3.querySelector(`.${t3}`);
          if (i2 || (i2 = e3.querySelector("img,picture") || e3.firstElementChild, i2 && Ne(i2, t3)), i2 instanceof HTMLPictureElement && (i2 = i2.querySelector("img")), !i2)
            throw new Error("No content found");
          this.content = i2;
        }
        onLoad() {
          const { spinner: e3, container: t3, state: i2 } = this;
          e3 && (e3.remove(), this.spinner = null), this.option("spinner") && t3.classList.remove(this.cn("isLoading")), this.emit("afterLoad"), i2 === _e.Init ? this.enable() : this.updateMetrics();
        }
        onError() {
          this.state !== _e.Destroy && (this.spinner && (this.spinner.remove(), this.spinner = null), this.stop(), this.detachEvents(), this.state = _e.Error, this.emit("error"));
        }
        getNextScale(e3) {
          const {
            fullScale: t3,
            targetScale: i2,
            coverScale: s2,
            maxScale: n2,
            minScale: o2
          } = this;
          let a2 = o2;
          switch (e3) {
            case "toggleMax":
              a2 = i2 - o2 < 0.5 * (n2 - o2) ? n2 : o2;
              break;
            case "toggleCover":
              a2 = i2 - o2 < 0.5 * (s2 - o2) ? s2 : o2;
              break;
            case "toggleZoom":
              a2 = i2 - o2 < 0.5 * (t3 - o2) ? t3 : o2;
              break;
            case "iterateZoom":
              let e4 = [1, t3, n2].sort((e5, t4) => e5 - t4), r2 = e4.findIndex((e5) => e5 > i2 + 1e-5);
              a2 = e4[r2] || 1;
          }
          return a2;
        }
        attachObserver() {
          var e3;
          const t3 = () => {
            const { container: e4, containerRect: t4 } = this;
            return Math.abs(t4.width - e4.getBoundingClientRect().width) > 0.1 || Math.abs(t4.height - e4.getBoundingClientRect().height) > 0.1;
          };
          this.resizeObserver || void 0 === window.ResizeObserver || (this.resizeObserver = new ResizeObserver(() => {
            this.updateTimer || (t3() ? (this.onResize(), this.isMobile && (this.updateTimer = setTimeout(() => {
              t3() && this.onResize(), this.updateTimer = null;
            }, 500))) : this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null));
          })), null === (e3 = this.resizeObserver) || void 0 === e3 || e3.observe(this.container);
        }
        detachObserver() {
          var e3;
          null === (e3 = this.resizeObserver) || void 0 === e3 || e3.disconnect();
        }
        attachEvents() {
          const { container: e3 } = this;
          e3.addEventListener("click", this.onClick, { passive: false, capture: false }), e3.addEventListener("wheel", this.onWheel, { passive: false }), this.pointerTracker = new Te(e3, {
            start: this.onPointerDown,
            move: this.onPointerMove,
            end: this.onPointerUp
          }), document.addEventListener(We, this.onMouseMove);
        }
        detachEvents() {
          var e3;
          const { container: t3 } = this;
          t3.removeEventListener("click", this.onClick, {
            passive: false,
            capture: false
          }), t3.removeEventListener("wheel", this.onWheel, { passive: false }), null === (e3 = this.pointerTracker) || void 0 === e3 || e3.stop(), this.pointerTracker = null, document.removeEventListener(We, this.onMouseMove), document.removeEventListener("keydown", this.onKeydown, true), this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null), this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null);
        }
        animate() {
          this.setTargetForce();
          const e3 = this.friction, t3 = this.option("maxVelocity");
          for (const i2 of ze)
            e3 ? (this.velocity[i2] *= 1 - e3, t3 && !this.isScaling && (this.velocity[i2] = Math.max(
              Math.min(this.velocity[i2], t3),
              -1 * t3
            )), this.current[i2] += this.velocity[i2]) : this.current[i2] = this.target[i2];
          this.setTransform(), this.setEdgeForce(), !this.isResting || this.isDragging ? this.rAF = requestAnimationFrame(() => this.animate()) : this.stop("current");
        }
        setTargetForce() {
          for (const e3 of ze)
            "e" === e3 && this.isBouncingX || "f" === e3 && this.isBouncingY || (this.velocity[e3] = (1 / (1 - this.friction) - 1) * (this.target[e3] - this.current[e3]));
        }
        checkBounds(e3 = 0, t3 = 0) {
          const { current: i2 } = this, s2 = i2.e + e3, n2 = i2.f + t3, o2 = this.getBounds(), { x: a2, y: r2 } = o2, l2 = a2.min, c2 = a2.max, d2 = r2.min, h2 = r2.max;
          let u2 = 0, p2 = 0;
          return l2 !== 1 / 0 && s2 < l2 ? u2 = l2 - s2 : c2 !== 1 / 0 && s2 > c2 && (u2 = c2 - s2), d2 !== 1 / 0 && n2 < d2 ? p2 = d2 - n2 : h2 !== 1 / 0 && n2 > h2 && (p2 = h2 - n2), Math.abs(u2) < 1e-4 && (u2 = 0), Math.abs(p2) < 1e-4 && (p2 = 0), Object.assign(Object.assign({}, o2), {
            xDiff: u2,
            yDiff: p2,
            inBounds: !u2 && !p2
          });
        }
        clampTargetBounds() {
          const { target: e3 } = this, { x: t3, y: i2 } = this.getBounds();
          t3.min !== 1 / 0 && (e3.e = Math.max(e3.e, t3.min)), t3.max !== 1 / 0 && (e3.e = Math.min(e3.e, t3.max)), i2.min !== 1 / 0 && (e3.f = Math.max(e3.f, i2.min)), i2.max !== 1 / 0 && (e3.f = Math.min(e3.f, i2.max));
        }
        calculateContentDim(e3 = this.current) {
          const { content: t3, contentRect: i2 } = this, { fitWidth: s2, fitHeight: n2, fullWidth: o2, fullHeight: a2 } = i2;
          let r2 = o2, l2 = a2;
          if (this.option("zoom") || 0 !== this.angle) {
            const i3 = !(t3 instanceof HTMLImageElement || "none" !== window.getComputedStyle(t3).maxWidth && "none" !== window.getComputedStyle(t3).maxHeight), c2 = i3 ? o2 : s2, d2 = i3 ? a2 : n2, h2 = this.getMatrix(e3), u2 = new DOMPoint(0, 0).matrixTransform(h2), p2 = new DOMPoint(0 + c2, 0).matrixTransform(h2), f2 = new DOMPoint(0 + c2, 0 + d2).matrixTransform(h2), g2 = new DOMPoint(0, 0 + d2).matrixTransform(h2), m2 = Math.abs(f2.x - u2.x), v2 = Math.abs(f2.y - u2.y), b2 = Math.abs(g2.x - p2.x), y2 = Math.abs(g2.y - p2.y);
            r2 = Math.max(m2, b2), l2 = Math.max(v2, y2);
          }
          return { contentWidth: r2, contentHeight: l2 };
        }
        setEdgeForce() {
          if (this.ignoreBounds || this.isDragging || this.panMode === We || this.targetScale < this.scale)
            return this.isBouncingX = false, void (this.isBouncingY = false);
          const { target: e3 } = this, { x: t3, y: i2, xDiff: s2, yDiff: n2 } = this.checkBounds(), o2 = this.option("maxVelocity");
          let a2 = this.velocity.e, r2 = this.velocity.f;
          0 !== s2 ? (this.isBouncingX = true, s2 * a2 <= 0 ? a2 += 0.14 * s2 : (a2 = 0.14 * s2, t3.min !== 1 / 0 && (this.target.e = Math.max(e3.e, t3.min)), t3.max !== 1 / 0 && (this.target.e = Math.min(e3.e, t3.max))), o2 && (a2 = Math.max(Math.min(a2, o2), -1 * o2))) : this.isBouncingX = false, 0 !== n2 ? (this.isBouncingY = true, n2 * r2 <= 0 ? r2 += 0.14 * n2 : (r2 = 0.14 * n2, i2.min !== 1 / 0 && (this.target.f = Math.max(e3.f, i2.min)), i2.max !== 1 / 0 && (this.target.f = Math.min(e3.f, i2.max))), o2 && (r2 = Math.max(Math.min(r2, o2), -1 * o2))) : this.isBouncingY = false, this.isBouncingX && (this.velocity.e = a2), this.isBouncingY && (this.velocity.f = r2);
        }
        enable() {
          const { content: e3 } = this, t3 = new DOMMatrixReadOnly(window.getComputedStyle(e3).transform);
          for (const e4 of ze) this.current[e4] = this.target[e4] = t3[e4];
          this.updateMetrics(), this.attachObserver(), this.attachEvents(), this.state = _e.Ready, this.emit("ready");
        }
        onClick(e3) {
          var t3;
          "click" === e3.type && 0 === e3.detail && (this.dragOffset.x = 0, this.dragOffset.y = 0), this.isDragging && (null === (t3 = this.pointerTracker) || void 0 === t3 || t3.clear(), this.trackingPoints = [], this.startDecelAnim());
          const i2 = e3.target;
          if (!i2 || e3.defaultPrevented) return;
          if (i2.hasAttribute("disabled"))
            return e3.preventDefault(), void e3.stopPropagation();
          if ((() => {
            const e4 = window.getSelection();
            return e4 && "Range" === e4.type;
          })() && !i2.closest("button"))
            return;
          const s2 = i2.closest("[data-panzoom-action]"), n2 = i2.closest("[data-panzoom-change]"), o2 = s2 || n2, a2 = o2 && je(o2) ? o2.dataset : null;
          if (a2) {
            const t4 = a2.panzoomChange, i3 = a2.panzoomAction;
            if ((t4 || i3) && e3.preventDefault(), t4) {
              let i4 = {};
              try {
                i4 = JSON.parse(t4);
              } catch (e4) {
                console && console.warn("The given data was not valid JSON");
              }
              return void this.applyChange(i4);
            }
            if (i3) return void (this[i3] && this[i3]());
          }
          if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3)
            return e3.preventDefault(), void e3.stopPropagation();
          if (i2.closest("[data-fancybox]")) return;
          const r2 = this.content.getBoundingClientRect(), l2 = this.dragStart;
          if (l2.time && !this.canZoomOut() && (Math.abs(r2.x - l2.x) > 2 || Math.abs(r2.y - l2.y) > 2))
            return;
          this.dragStart.time = 0;
          const c2 = (t4) => {
            this.option("zoom", e3) && t4 && "string" == typeof t4 && /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(
              t4
            ) && "function" == typeof this[t4] && (e3.preventDefault(), this[t4]({ event: e3 }));
          }, d2 = this.option("click", e3), h2 = this.option("dblClick", e3);
          h2 ? (this.clicks++, 1 == this.clicks && (this.clickTimer = setTimeout(() => {
            1 === this.clicks ? (this.emit("click", e3), !e3.defaultPrevented && d2 && c2(d2)) : (this.emit("dblClick", e3), e3.defaultPrevented || c2(h2)), this.clicks = 0, this.clickTimer = null;
          }, 350))) : (this.emit("click", e3), !e3.defaultPrevented && d2 && c2(d2));
        }
        addTrackingPoint(e3) {
          const t3 = this.trackingPoints.filter((e4) => e4.time > Date.now() - 100);
          t3.push(e3), this.trackingPoints = t3;
        }
        onPointerDown(e3, t3, i2) {
          var s2;
          if (false === this.option("touch", e3)) return false;
          this.pwt = 0, this.dragOffset = { x: 0, y: 0, time: 0 }, this.trackingPoints = [];
          const n2 = this.content.getBoundingClientRect();
          if (this.dragStart = {
            x: n2.x,
            y: n2.y,
            top: n2.top,
            left: n2.left,
            time: Date.now()
          }, this.clickTimer)
            return false;
          if (this.panMode === We && this.targetScale > 1)
            return e3.preventDefault(), e3.stopPropagation(), false;
          const o2 = e3.composedPath()[0];
          if (!i2.length) {
            if ([
              "TEXTAREA",
              "OPTION",
              "INPUT",
              "SELECT",
              "VIDEO",
              "IFRAME"
            ].includes(o2.nodeName) || o2.closest(
              "[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]"
            ))
              return false;
            null === (s2 = window.getSelection()) || void 0 === s2 || s2.removeAllRanges();
          }
          if ("mousedown" === e3.type)
            ["A", "BUTTON"].includes(o2.nodeName) || e3.preventDefault();
          else if (Math.abs(this.velocity.a) > 0.3) return false;
          return this.target.e = this.current.e, this.target.f = this.current.f, this.stop(), this.isDragging || (this.isDragging = true, this.addTrackingPoint(t3), this.emit("touchStart", e3)), true;
        }
        onPointerMove(e3, t3, i2) {
          if (false === this.option("touch", e3)) return;
          if (!this.isDragging) return;
          if (t3.length < 2 && this.panOnlyZoomed && ve(this.targetScale) <= ve(this.minScale))
            return;
          if (this.emit("touchMove", e3), e3.defaultPrevented) return;
          this.addTrackingPoint(t3[0]);
          const { content: s2 } = this, n2 = Me(i2[0], i2[1]), o2 = Me(t3[0], t3[1]);
          let a2 = 0, r2 = 0;
          if (t3.length > 1) {
            const e4 = s2.getBoundingClientRect();
            a2 = n2.clientX - e4.left - 0.5 * e4.width, r2 = n2.clientY - e4.top - 0.5 * e4.height;
          }
          const l2 = Pe(i2[0], i2[1]), c2 = Pe(t3[0], t3[1]);
          let d2 = l2 ? c2 / l2 : 1, h2 = o2.clientX - n2.clientX, u2 = o2.clientY - n2.clientY;
          this.dragOffset.x += h2, this.dragOffset.y += u2, this.dragOffset.time = Date.now() - this.dragStart.time;
          let p2 = ve(this.targetScale) === ve(this.minScale) && this.option("lockAxis");
          if (p2 && !this.lockedAxis)
            if ("xy" === p2 || "y" === p2 || "touchmove" === e3.type) {
              if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6)
                return void e3.preventDefault();
              const t4 = Math.abs(
                180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI
              );
              this.lockedAxis = t4 > 45 && t4 < 135 ? "y" : "x", this.dragOffset.x = 0, this.dragOffset.y = 0, h2 = 0, u2 = 0;
            } else this.lockedAxis = p2;
          if (ye(e3.target, this.content) && (p2 = "x", this.dragOffset.y = 0), p2 && "xy" !== p2 && this.lockedAxis !== p2 && ve(this.targetScale) === ve(this.minScale))
            return;
          e3.cancelable && e3.preventDefault(), this.container.classList.add(this.cn("isDragging"));
          const f2 = this.checkBounds(h2, u2);
          this.option("rubberband") ? ("x" !== this.isInfinite && (f2.xDiff > 0 && h2 < 0 || f2.xDiff < 0 && h2 > 0) && (h2 *= Math.max(
            0,
            0.5 - Math.abs(0.75 / this.contentRect.fitWidth * f2.xDiff)
          )), "y" !== this.isInfinite && (f2.yDiff > 0 && u2 < 0 || f2.yDiff < 0 && u2 > 0) && (u2 *= Math.max(
            0,
            0.5 - Math.abs(0.75 / this.contentRect.fitHeight * f2.yDiff)
          ))) : (f2.xDiff && (h2 = 0), f2.yDiff && (u2 = 0));
          const g2 = this.targetScale, m2 = this.minScale, v2 = this.maxScale;
          g2 < 0.5 * m2 && (d2 = Math.max(d2, m2)), g2 > 1.5 * v2 && (d2 = Math.min(d2, v2)), "y" === this.lockedAxis && ve(g2) === ve(m2) && (h2 = 0), "x" === this.lockedAxis && ve(g2) === ve(m2) && (u2 = 0), this.applyChange({
            originX: a2,
            originY: r2,
            panX: h2,
            panY: u2,
            scale: d2,
            friction: this.option("dragFriction"),
            ignoreBounds: true
          });
        }
        onPointerUp(e3, t3, i2) {
          if (i2.length)
            return this.dragOffset.x = 0, this.dragOffset.y = 0, void (this.trackingPoints = []);
          this.container.classList.remove(this.cn("isDragging")), this.isDragging && (this.addTrackingPoint(t3), this.panOnlyZoomed && this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1 && (this.trackingPoints = []), ye(e3.target, this.content) && "y" === this.lockedAxis && (this.trackingPoints = []), this.emit("touchEnd", e3), this.isDragging = false, this.lockedAxis = false, this.state !== _e.Destroy && (e3.defaultPrevented || this.startDecelAnim()));
        }
        startDecelAnim() {
          var e3;
          const t3 = this.isScaling;
          this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = false, this.isBouncingY = false;
          for (const e4 of ze) this.velocity[e4] = 0;
          this.target.e = this.current.e, this.target.f = this.current.f, Be(this.container, "is-scaling"), Be(this.container, "is-animating"), this.isTicking = false;
          const { trackingPoints: i2 } = this, s2 = i2[0], n2 = i2[i2.length - 1];
          let o2 = 0, a2 = 0, r2 = 0;
          n2 && s2 && (o2 = n2.clientX - s2.clientX, a2 = n2.clientY - s2.clientY, r2 = n2.time - s2.time);
          const l2 = (null === (e3 = window.visualViewport) || void 0 === e3 ? void 0 : e3.scale) || 1;
          1 !== l2 && (o2 *= l2, a2 *= l2);
          let c2 = 0, d2 = 0, h2 = 0, u2 = 0, p2 = this.option("decelFriction");
          const f2 = this.targetScale;
          if (r2 > 0) {
            h2 = Math.abs(o2) > 3 ? o2 / (r2 / 30) : 0, u2 = Math.abs(a2) > 3 ? a2 / (r2 / 30) : 0;
            const e4 = this.option("maxVelocity");
            e4 && (h2 = Math.max(Math.min(h2, e4), -1 * e4), u2 = Math.max(Math.min(u2, e4), -1 * e4));
          }
          h2 && (c2 = h2 / (1 / (1 - p2) - 1)), u2 && (d2 = u2 / (1 / (1 - p2) - 1)), ("y" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "y" === this.lockedAxis && ve(f2) === this.minScale) && (c2 = h2 = 0), ("x" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "x" === this.lockedAxis && ve(f2) === this.minScale) && (d2 = u2 = 0);
          const g2 = this.dragOffset.x, m2 = this.dragOffset.y, v2 = this.option("dragMinThreshold") || 0;
          Math.abs(g2) < v2 && Math.abs(m2) < v2 && (c2 = d2 = 0, h2 = u2 = 0), (this.option("zoom") && (f2 < this.minScale - 1e-5 || f2 > this.maxScale + 1e-5) || t3 && !c2 && !d2) && (p2 = 0.35), this.applyChange({ panX: c2, panY: d2, friction: p2 }), this.emit("decel", h2, u2, g2, m2);
        }
        onWheel(e3) {
          var t3 = [-e3.deltaX || 0, -e3.deltaY || 0, -e3.detail || 0].reduce(
            function(e4, t4) {
              return Math.abs(t4) > Math.abs(e4) ? t4 : e4;
            }
          );
          const i2 = Math.max(-1, Math.min(1, t3));
          if (this.emit("wheel", e3, i2), this.panMode === We) return;
          if (e3.defaultPrevented) return;
          const s2 = this.option("wheel");
          "pan" === s2 ? (e3.preventDefault(), this.panOnlyZoomed && !this.canZoomOut() || this.applyChange({
            panX: 2 * -e3.deltaX,
            panY: 2 * -e3.deltaY,
            bounce: false
          })) : "zoom" === s2 && false !== this.option("zoom") && this.zoomWithWheel(e3);
        }
        onMouseMove(e3) {
          this.panWithMouse(e3);
        }
        onKeydown(e3) {
          "Escape" === e3.key && this.toggleFS();
        }
        onResize() {
          this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
        }
        setTransform() {
          this.emit("beforeTransform");
          const { current: e3, target: t3, content: i2, contentRect: s2 } = this, n2 = Object.assign({}, He);
          for (const i3 of ze) {
            const s3 = "e" == i3 || "f" === i3 ? qe : 1e5;
            n2[i3] = ve(e3[i3], s3), Math.abs(t3[i3] - e3[i3]) < ("e" == i3 || "f" === i3 ? 0.51 : 1e-3) && (e3[i3] = t3[i3]);
          }
          let { a: o2, b: a2, c: r2, d: l2, e: c2, f: d2 } = n2, h2 = `matrix(${o2}, ${a2}, ${r2}, ${l2}, ${c2}, ${d2})`, u2 = i2.parentElement instanceof HTMLPictureElement ? i2.parentElement : i2;
          if (this.option("transformParent") && (u2 = u2.parentElement || u2), u2.style.transform === h2)
            return;
          u2.style.transform = h2;
          const { contentWidth: p2, contentHeight: f2 } = this.calculateContentDim();
          s2.width = p2, s2.height = f2, this.emit("afterTransform");
        }
        updateMetrics(e3 = false) {
          var t3;
          if (!this || this.state === _e.Destroy) return;
          if (this.isContentLoading) return;
          const i2 = Math.max(
            1,
            (null === (t3 = window.visualViewport) || void 0 === t3 ? void 0 : t3.scale) || 1
          ), { container: s2, content: n2 } = this, o2 = n2 instanceof HTMLImageElement, a2 = s2.getBoundingClientRect(), r2 = getComputedStyle(this.container);
          let l2 = a2.width * i2, c2 = a2.height * i2;
          const d2 = parseFloat(r2.paddingTop) + parseFloat(r2.paddingBottom), h2 = l2 - (parseFloat(r2.paddingLeft) + parseFloat(r2.paddingRight)), u2 = c2 - d2;
          this.containerRect = {
            width: l2,
            height: c2,
            innerWidth: h2,
            innerHeight: u2
          };
          let p2 = this.option("width") || "auto", f2 = this.option("height") || "auto";
          "auto" === p2 && (p2 = parseFloat(n2.dataset.width || "") || ((e4) => {
            let t4 = 0;
            return t4 = e4 instanceof HTMLImageElement ? e4.naturalWidth : e4 instanceof SVGElement ? e4.width.baseVal.value : Math.max(e4.offsetWidth, e4.scrollWidth), t4 || 0;
          })(n2)), "auto" === f2 && (f2 = parseFloat(n2.dataset.height || "") || ((e4) => {
            let t4 = 0;
            return t4 = e4 instanceof HTMLImageElement ? e4.naturalHeight : e4 instanceof SVGElement ? e4.height.baseVal.value : Math.max(e4.offsetHeight, e4.scrollHeight), t4 || 0;
          })(n2));
          let g2 = n2.parentElement instanceof HTMLPictureElement ? n2.parentElement : n2;
          this.option("transformParent") && (g2 = g2.parentElement || g2);
          const m2 = g2.getAttribute("style") || "";
          g2.style.setProperty("transform", "none", "important"), o2 && (g2.style.width = "", g2.style.height = ""), g2.offsetHeight;
          const v2 = n2.getBoundingClientRect();
          let b2 = v2.width * i2, y2 = v2.height * i2, w2 = 0, S2 = 0;
          o2 && (Math.abs(p2 - b2) > 1 || Math.abs(f2 - y2) > 1) && ({
            width: b2,
            height: y2,
            top: w2,
            left: S2
          } = ((e4, t4, i3, s3) => {
            const n3 = i3 / s3;
            return n3 > e4 / t4 ? (i3 = e4, s3 = e4 / n3) : (i3 = t4 * n3, s3 = t4), { width: i3, height: s3, top: 0.5 * (t4 - s3), left: 0.5 * (e4 - i3) };
          })(b2, y2, p2, f2)), this.contentRect = Object.assign(
            Object.assign({}, this.contentRect),
            {
              top: v2.top - a2.top + w2,
              bottom: a2.bottom - v2.bottom + w2,
              left: v2.left - a2.left + S2,
              right: a2.right - v2.right + S2,
              fitWidth: b2,
              fitHeight: y2,
              width: b2,
              height: y2,
              fullWidth: p2,
              fullHeight: f2
            }
          ), g2.style.cssText = m2, o2 && (g2.style.width = `${b2}px`, g2.style.height = `${y2}px`), this.setTransform(), true !== e3 && this.emit("refresh"), this.ignoreBounds || (ve(this.targetScale) < ve(this.minScale) ? this.zoomTo(this.minScale, { friction: 0 }) : this.targetScale > this.maxScale ? this.zoomTo(this.maxScale, { friction: 0 }) : this.state === _e.Init || this.checkBounds().inBounds || this.requestTick()), this.updateControls();
        }
        calculateBounds() {
          const { contentWidth: e3, contentHeight: t3 } = this.calculateContentDim(
            this.target
          ), { targetScale: i2, lockedAxis: s2 } = this, { fitWidth: n2, fitHeight: o2 } = this.contentRect;
          let a2 = 0, r2 = 0, l2 = 0, c2 = 0;
          const d2 = this.option("infinite");
          if (true === d2 || s2 && d2 === s2)
            a2 = -1 / 0, l2 = 1 / 0, r2 = -1 / 0, c2 = 1 / 0;
          else {
            let { containerRect: s3, contentRect: d3 } = this, h2 = ve(n2 * i2, qe), u2 = ve(o2 * i2, qe), { innerWidth: p2, innerHeight: f2 } = s3;
            if (s3.width === h2 && (p2 = s3.width), s3.width === u2 && (f2 = s3.height), e3 > p2) {
              l2 = 0.5 * (e3 - p2), a2 = -1 * l2;
              let t4 = 0.5 * (d3.right - d3.left);
              a2 += t4, l2 += t4;
            }
            if (n2 > p2 && e3 < p2 && (a2 -= 0.5 * (n2 - p2), l2 -= 0.5 * (n2 - p2)), t3 > f2) {
              c2 = 0.5 * (t3 - f2), r2 = -1 * c2;
              let e4 = 0.5 * (d3.bottom - d3.top);
              r2 += e4, c2 += e4;
            }
            o2 > f2 && t3 < f2 && (a2 -= 0.5 * (o2 - f2), l2 -= 0.5 * (o2 - f2));
          }
          return { x: { min: a2, max: l2 }, y: { min: r2, max: c2 } };
        }
        getBounds() {
          const e3 = this.option("bounds");
          return "auto" !== e3 ? e3 : this.calculateBounds();
        }
        updateControls() {
          const e3 = this, t3 = e3.container, { panMode: i2, contentRect: s2, targetScale: n2, minScale: o2 } = e3;
          let a2 = o2, r2 = e3.option("click") || false;
          r2 && (a2 = e3.getNextScale(r2));
          let l2 = e3.canZoomIn(), c2 = e3.canZoomOut(), d2 = i2 === Ge && !!this.option("touch"), h2 = c2 && d2;
          if (d2 && (ve(n2) < ve(o2) && !this.panOnlyZoomed && (h2 = true), (ve(s2.width, 1) > ve(s2.fitWidth, 1) || ve(s2.height, 1) > ve(s2.fitHeight, 1)) && (h2 = true)), ve(s2.width * n2, 1) < ve(s2.fitWidth, 1) && (h2 = false), i2 === We && (h2 = false), xe(t3, this.cn("isDraggable"), h2), !this.option("zoom"))
            return;
          let u2 = l2 && ve(a2) > ve(n2), p2 = !u2 && !h2 && c2 && ve(a2) < ve(n2);
          xe(t3, this.cn("canZoomIn"), u2), xe(t3, this.cn("canZoomOut"), p2);
          for (const e4 of t3.querySelectorAll("[data-panzoom-action]")) {
            let t4 = false, i3 = false;
            switch (e4.dataset.panzoomAction) {
              case "zoomIn":
                l2 ? t4 = true : i3 = true;
                break;
              case "zoomOut":
                c2 ? t4 = true : i3 = true;
                break;
              case "toggleZoom":
              case "iterateZoom":
                l2 || c2 ? t4 = true : i3 = true;
                const s3 = e4.querySelector("g");
                s3 && (s3.style.display = l2 ? "" : "none");
            }
            t4 ? (e4.removeAttribute("disabled"), e4.removeAttribute("tabindex")) : i3 && (e4.setAttribute("disabled", ""), e4.setAttribute("tabindex", "-1"));
          }
        }
        panTo({
          x: e3 = this.target.e,
          y: t3 = this.target.f,
          scale: i2 = this.targetScale,
          friction: s2 = this.option("friction"),
          angle: n2 = 0,
          originX: o2 = 0,
          originY: a2 = 0,
          flipX: r2 = false,
          flipY: l2 = false,
          ignoreBounds: c2 = false
        }) {
          this.state !== _e.Destroy && this.applyChange({
            panX: e3 - this.target.e,
            panY: t3 - this.target.f,
            scale: i2 / this.targetScale,
            angle: n2,
            originX: o2,
            originY: a2,
            friction: s2,
            flipX: r2,
            flipY: l2,
            ignoreBounds: c2
          });
        }
        applyChange({
          panX: e3 = 0,
          panY: t3 = 0,
          scale: i2 = 1,
          angle: s2 = 0,
          originX: n2 = -this.current.e,
          originY: o2 = -this.current.f,
          friction: a2 = this.option("friction"),
          flipX: r2 = false,
          flipY: l2 = false,
          ignoreBounds: c2 = false,
          bounce: d2 = this.option("bounce")
        }) {
          const h2 = this.state;
          if (h2 === _e.Destroy) return;
          this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.friction = a2 || 0, this.ignoreBounds = c2;
          const { current: u2 } = this, p2 = u2.e, f2 = u2.f, g2 = this.getMatrix(this.target);
          let m2 = new DOMMatrix().translate(p2, f2).translate(n2, o2).translate(e3, t3);
          if (this.option("zoom")) {
            if (!c2) {
              const e4 = this.targetScale, t4 = this.minScale, s3 = this.maxScale;
              e4 * i2 < t4 && (i2 = t4 / e4), e4 * i2 > s3 && (i2 = s3 / e4);
            }
            m2 = m2.scale(i2);
          }
          m2 = m2.translate(-n2, -o2).translate(-p2, -f2).multiply(g2), s2 && (m2 = m2.rotate(s2)), r2 && (m2 = m2.scale(-1, 1)), l2 && (m2 = m2.scale(1, -1));
          for (const e4 of ze)
            "e" !== e4 && "f" !== e4 && (m2[e4] > this.minScale + 1e-5 || m2[e4] < this.minScale - 1e-5) ? this.target[e4] = m2[e4] : this.target[e4] = ve(m2[e4], qe);
          (this.targetScale < this.scale || Math.abs(i2 - 1) > 0.1 || this.panMode === We || false === d2) && !c2 && this.clampTargetBounds(), h2 === _e.Init ? this.animate() : this.isResting || (this.state = _e.Panning, this.requestTick());
        }
        stop(e3 = false) {
          if (this.state === _e.Init || this.state === _e.Destroy) return;
          const t3 = this.isTicking;
          this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = false, this.isBouncingY = false;
          for (const t4 of ze)
            this.velocity[t4] = 0, "current" === e3 ? this.current[t4] = this.target[t4] : "target" === e3 && (this.target[t4] = this.current[t4]);
          this.setTransform(), Be(this.container, "is-scaling"), Be(this.container, "is-animating"), this.isTicking = false, this.state = _e.Ready, t3 && (this.emit("endAnimation"), this.updateControls());
        }
        requestTick() {
          this.isTicking || (this.emit("startAnimation"), this.updateControls(), Ne(this.container, "is-animating"), this.isScaling && Ne(this.container, "is-scaling")), this.isTicking = true, this.rAF || (this.rAF = requestAnimationFrame(() => this.animate()));
        }
        panWithMouse(e3, t3 = this.option("mouseMoveFriction")) {
          if (this.pmme = e3, this.panMode !== We || !e3) return;
          if (ve(this.targetScale) <= ve(this.minScale)) return;
          this.emit("mouseMove", e3);
          const { container: i2, containerRect: s2, contentRect: n2 } = this, o2 = s2.width, a2 = s2.height, r2 = i2.getBoundingClientRect(), l2 = (e3.clientX || 0) - r2.left, c2 = (e3.clientY || 0) - r2.top;
          let { contentWidth: d2, contentHeight: h2 } = this.calculateContentDim(
            this.target
          );
          const u2 = this.option("mouseMoveFactor");
          u2 > 1 && (d2 !== o2 && (d2 *= u2), h2 !== a2 && (h2 *= u2));
          let p2 = 0.5 * (d2 - o2) - l2 / o2 * 100 / 100 * (d2 - o2);
          p2 += 0.5 * (n2.right - n2.left);
          let f2 = 0.5 * (h2 - a2) - c2 / a2 * 100 / 100 * (h2 - a2);
          f2 += 0.5 * (n2.bottom - n2.top), this.applyChange({
            panX: p2 - this.target.e,
            panY: f2 - this.target.f,
            friction: t3
          });
        }
        zoomWithWheel(e3) {
          if (this.state === _e.Destroy || this.state === _e.Init) return;
          const t3 = Date.now();
          if (t3 - this.pwt < 45) return void e3.preventDefault();
          this.pwt = t3;
          var i2 = [-e3.deltaX || 0, -e3.deltaY || 0, -e3.detail || 0].reduce(
            function(e4, t4) {
              return Math.abs(t4) > Math.abs(e4) ? t4 : e4;
            }
          );
          const s2 = Math.max(-1, Math.min(1, i2)), { targetScale: n2, maxScale: o2, minScale: a2 } = this;
          let r2 = n2 * (100 + 45 * s2) / 100;
          ve(r2) < ve(a2) && ve(n2) <= ve(a2) ? (this.cwd += Math.abs(s2), r2 = a2) : ve(r2) > ve(o2) && ve(n2) >= ve(o2) ? (this.cwd += Math.abs(s2), r2 = o2) : (this.cwd = 0, r2 = Math.max(Math.min(r2, o2), a2)), this.cwd > this.option("wheelLimit") || (e3.preventDefault(), ve(r2) !== ve(n2) && this.zoomTo(r2, { event: e3 }));
        }
        canZoomIn() {
          return this.option("zoom") && (ve(this.contentRect.width, 1) < ve(this.contentRect.fitWidth, 1) || ve(this.targetScale) < ve(this.maxScale));
        }
        canZoomOut() {
          return this.option("zoom") && ve(this.targetScale) > ve(this.minScale);
        }
        zoomIn(e3 = 1.25, t3) {
          this.zoomTo(this.targetScale * e3, t3);
        }
        zoomOut(e3 = 0.8, t3) {
          this.zoomTo(this.targetScale * e3, t3);
        }
        zoomToFit(e3) {
          this.zoomTo("fit", e3);
        }
        zoomToCover(e3) {
          this.zoomTo("cover", e3);
        }
        zoomToFull(e3) {
          this.zoomTo("full", e3);
        }
        zoomToMax(e3) {
          this.zoomTo("max", e3);
        }
        toggleZoom(e3) {
          this.zoomTo(this.getNextScale("toggleZoom"), e3);
        }
        toggleMax(e3) {
          this.zoomTo(this.getNextScale("toggleMax"), e3);
        }
        toggleCover(e3) {
          this.zoomTo(this.getNextScale("toggleCover"), e3);
        }
        iterateZoom(e3) {
          this.zoomTo("next", e3);
        }
        zoomTo(e3 = 1, {
          friction: t3 = "auto",
          originX: i2 = "auto",
          originY: s2 = "auto",
          event: n2
        } = {}) {
          if (this.isContentLoading || this.state === _e.Destroy) return;
          const {
            targetScale: o2,
            fullScale: a2,
            maxScale: r2,
            coverScale: l2
          } = this;
          if (this.stop(), this.panMode === We && (n2 = this.pmme || n2), n2 || "auto" === i2 || "auto" === s2) {
            const e4 = this.content.getBoundingClientRect(), t4 = this.container.getBoundingClientRect(), o3 = n2 ? n2.clientX : t4.left + 0.5 * t4.width, a3 = n2 ? n2.clientY : t4.top + 0.5 * t4.height;
            i2 = o3 - e4.left - 0.5 * e4.width, s2 = a3 - e4.top - 0.5 * e4.height;
          }
          let c2 = 1;
          "number" == typeof e3 ? c2 = e3 : "full" === e3 ? c2 = a2 : "cover" === e3 ? c2 = l2 : "max" === e3 ? c2 = r2 : "fit" === e3 ? c2 = 1 : "next" === e3 && (c2 = this.getNextScale("iterateZoom")), c2 = c2 / o2 || 1, t3 = "auto" === t3 ? c2 > 1 ? 0.15 : 0.25 : t3, this.applyChange({ scale: c2, originX: i2, originY: s2, friction: t3 }), n2 && this.panMode === We && this.panWithMouse(n2, t3);
        }
        rotateCCW() {
          this.applyChange({ angle: -90 });
        }
        rotateCW() {
          this.applyChange({ angle: 90 });
        }
        flipX() {
          this.applyChange({ flipX: true });
        }
        flipY() {
          this.applyChange({ flipY: true });
        }
        fitX() {
          this.stop("target");
          const { containerRect: e3, contentRect: t3, target: i2 } = this;
          this.applyChange({
            panX: 0.5 * e3.width - (t3.left + 0.5 * t3.fitWidth) - i2.e,
            panY: 0.5 * e3.height - (t3.top + 0.5 * t3.fitHeight) - i2.f,
            scale: e3.width / t3.fitWidth / this.targetScale,
            originX: 0,
            originY: 0,
            ignoreBounds: true
          });
        }
        fitY() {
          this.stop("target");
          const { containerRect: e3, contentRect: t3, target: i2 } = this;
          this.applyChange({
            panX: 0.5 * e3.width - (t3.left + 0.5 * t3.fitWidth) - i2.e,
            panY: 0.5 * e3.innerHeight - (t3.top + 0.5 * t3.fitHeight) - i2.f,
            scale: e3.height / t3.fitHeight / this.targetScale,
            originX: 0,
            originY: 0,
            ignoreBounds: true
          });
        }
        toggleFS() {
          const { container: e3 } = this, t3 = this.cn("inFullscreen"), i2 = this.cn("htmlHasFullscreen");
          e3.classList.toggle(t3);
          const s2 = e3.classList.contains(t3);
          s2 ? (document.documentElement.classList.add(i2), document.addEventListener("keydown", this.onKeydown, true)) : (document.documentElement.classList.remove(i2), document.removeEventListener("keydown", this.onKeydown, true)), this.updateMetrics(), this.emit(s2 ? "enterFS" : "exitFS");
        }
        getMatrix(e3 = this.current) {
          const { a: t3, b: i2, c: s2, d: n2, e: o2, f: a2 } = e3;
          return new DOMMatrix([t3, i2, s2, n2, o2, a2]);
        }
        reset(e3) {
          if (this.state !== _e.Init && this.state !== _e.Destroy) {
            this.stop("current");
            for (const e4 of ze) this.target[e4] = He[e4];
            this.target.a = this.minScale, this.target.d = this.minScale, this.clampTargetBounds(), this.isResting || (this.friction = void 0 === e3 ? this.option("friction") : e3, this.state = _e.Panning, this.requestTick());
          }
        }
        destroy() {
          this.stop(), this.state = _e.Destroy, this.detachEvents(), this.detachObserver();
          const { container: e3, content: t3 } = this, i2 = this.option("classes") || {};
          for (const t4 of Object.values(i2)) e3.classList.remove(t4 + "");
          t3 && (t3.removeEventListener("load", this.onLoad), t3.removeEventListener("error", this.onError)), this.detachPlugins();
        }
      }
      Object.defineProperty(Ze, "defaults", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: De
      }), Object.defineProperty(Ze, "Plugins", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: {}
      });
      const Ue = function(e3, t3) {
        let i2 = true;
        return (...s2) => {
          i2 && (i2 = false, e3(...s2), setTimeout(() => {
            i2 = true;
          }, t3));
        };
      }, Ke = (e3, t3) => {
        let i2 = [];
        return e3.childNodes.forEach((e4) => {
          e4.nodeType !== Node.ELEMENT_NODE || t3 && !e4.matches(t3) || i2.push(e4);
        }), i2;
      };
      var Je;
      !function(e3) {
        e3[e3.Init = 0] = "Init", e3[e3.Ready = 1] = "Ready", e3[e3.Destroy = 2] = "Destroy";
      }(Je || (Je = {}));
      const Qe = (e3) => {
        if ("string" == typeof e3 || e3 instanceof HTMLElement) e3 = { html: e3 };
        else {
          const t3 = e3.thumb;
          void 0 !== t3 && ("string" == typeof t3 && (e3.thumbSrc = t3), t3 instanceof HTMLImageElement && (e3.thumbEl = t3, e3.thumbElSrc = t3.src, e3.thumbSrc = t3.src), delete e3.thumb);
        }
        return Object.assign(
          {
            html: "",
            el: null,
            isDom: false,
            class: "",
            customClass: "",
            index: -1,
            dim: 0,
            gap: 0,
            pos: 0,
            transition: false
          },
          e3
        );
      }, et = (e3 = {}) => Object.assign({ index: -1, slides: [], dim: 0, pos: -1 }, e3);
      class tt extends ke {
        constructor(e3, t3) {
          super(t3), Object.defineProperty(this, "instance", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: e3
          });
        }
        attach() {
        }
        detach() {
        }
      }
      class it extends tt {
        constructor() {
          super(...arguments), Object.defineProperty(this, "isDynamic", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
          }), Object.defineProperty(this, "list", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          });
        }
        onRefresh() {
          this.refresh();
        }
        build() {
          let e3 = this.list;
          if (!e3) {
            e3 = document.createElement("ul"), Ne(e3, this.cn("list")), e3.setAttribute("role", "tablist");
            const t3 = this.instance.container;
            t3.appendChild(e3), Ne(t3, this.cn("hasDots")), this.list = e3;
          }
          return e3;
        }
        refresh() {
          var e3;
          const t3 = this.instance.pages.length, i2 = Math.min(2, this.option("minCount")), s2 = Math.max(2e3, this.option("maxCount")), n2 = this.option("dynamicFrom");
          if (t3 < i2 || t3 > s2) return void this.cleanup();
          const o2 = "number" == typeof n2 && t3 > 5 && t3 >= n2, a2 = !this.list || this.isDynamic !== o2 || this.list.children.length !== t3;
          a2 && this.cleanup();
          const r2 = this.build();
          if (xe(r2, this.cn("isDynamic"), !!o2), a2)
            for (let e4 = 0; e4 < t3; e4++) r2.append(this.createItem(e4));
          let l2, c2 = 0;
          for (const t4 of [...r2.children]) {
            const i3 = c2 === this.instance.page;
            i3 && (l2 = t4), xe(t4, this.cn("isCurrent"), i3), null === (e3 = t4.children[0]) || void 0 === e3 || e3.setAttribute("aria-selected", i3 ? "true" : "false");
            for (const e4 of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"])
              Be(t4, this.cn(e4));
            c2++;
          }
          if (l2 = l2 || r2.firstChild, o2 && l2) {
            const e4 = l2.previousElementSibling, t4 = e4 && e4.previousElementSibling;
            Ne(e4, this.cn("isPrev")), Ne(t4, this.cn("isBeforePrev"));
            const i3 = l2.nextElementSibling, s3 = i3 && i3.nextElementSibling;
            Ne(i3, this.cn("isNext")), Ne(s3, this.cn("isAfterNext"));
          }
          this.isDynamic = o2;
        }
        createItem(e3 = 0) {
          var t3;
          const i2 = document.createElement("li");
          i2.setAttribute("role", "presentation");
          const s2 = we(
            this.instance.localize(this.option("dotTpl"), [["%d", e3 + 1]]).replace(/\%i/g, e3 + "")
          );
          return i2.appendChild(s2), null === (t3 = i2.children[0]) || void 0 === t3 || t3.setAttribute("role", "tab"), i2;
        }
        cleanup() {
          this.list && (this.list.remove(), this.list = null), this.isDynamic = false, Be(this.instance.container, this.cn("hasDots"));
        }
        attach() {
          this.instance.on(["refresh", "change"], this.onRefresh);
        }
        detach() {
          this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
        }
      }
      Object.defineProperty(it, "defaults", {
        enumerable: true,
        configurable: true,
        writable: true,
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
            isAfterNext: "is-after-next"
          },
          dotTpl: '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
          dynamicFrom: 11,
          maxCount: 1 / 0,
          minCount: 2
        }
      });
      const st = "disabled", nt = "next", ot = "prev";
      class at extends tt {
        constructor() {
          super(...arguments), Object.defineProperty(this, "container", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "prev", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "next", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "isDom", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
          });
        }
        onRefresh() {
          const e3 = this.instance, t3 = e3.pages.length, i2 = e3.page;
          if (t3 < 2) return void this.cleanup();
          this.build();
          let s2 = this.prev, n2 = this.next;
          s2 && n2 && (s2.removeAttribute(st), n2.removeAttribute(st), e3.isInfinite || (i2 <= 0 && s2.setAttribute(st, ""), i2 >= t3 - 1 && n2.setAttribute(st, "")));
        }
        addBtn(e3) {
          var t3;
          const i2 = this.instance, s2 = document.createElement("button");
          s2.setAttribute("tabindex", "0"), s2.setAttribute("title", i2.localize(`{{${e3.toUpperCase()}}}`)), Ne(
            s2,
            this.cn("button") + " " + this.cn(e3 === nt ? "isNext" : "isPrev")
          );
          const n2 = i2.isRTL ? e3 === nt ? ot : nt : e3;
          var o2;
          return s2.innerHTML = i2.localize(this.option(`${n2}Tpl`)), s2.dataset[`carousel${o2 = e3, o2 ? o2.match("^[a-z]") ? o2.charAt(0).toUpperCase() + o2.substring(1) : o2 : ""}`] = "true", null === (t3 = this.container) || void 0 === t3 || t3.appendChild(s2), s2;
        }
        build() {
          const e3 = this.instance.container, t3 = this.cn("container");
          let { container: i2, prev: s2, next: n2 } = this;
          i2 || (i2 = e3.querySelector("." + t3), this.isDom = !!i2), i2 || (i2 = document.createElement("div"), Ne(i2, t3), e3.appendChild(i2)), this.container = i2, n2 || (n2 = i2.querySelector("[data-carousel-next]")), n2 || (n2 = this.addBtn(nt)), this.next = n2, s2 || (s2 = i2.querySelector("[data-carousel-prev]")), s2 || (s2 = this.addBtn(ot)), this.prev = s2;
        }
        cleanup() {
          this.isDom || (this.prev && this.prev.remove(), this.next && this.next.remove(), this.container && this.container.remove()), this.prev = null, this.next = null, this.container = null, this.isDom = false;
        }
        attach() {
          this.instance.on(["refresh", "change"], this.onRefresh);
        }
        detach() {
          this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
        }
      }
      Object.defineProperty(at, "defaults", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: {
          classes: {
            container: "f-carousel__nav",
            button: "f-button",
            isNext: "is-next",
            isPrev: "is-prev"
          },
          nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
          prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>'
        }
      });
      class rt extends tt {
        constructor() {
          super(...arguments), Object.defineProperty(this, "selectedIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "target", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "nav", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          });
        }
        addAsTargetFor(e3) {
          this.target = this.instance, this.nav = e3, this.attachEvents();
        }
        addAsNavFor(e3) {
          this.nav = this.instance, this.target = e3, this.attachEvents();
        }
        attachEvents() {
          const { nav: e3, target: t3 } = this;
          e3 && t3 && (e3.options.initialSlide = t3.options.initialPage, e3.state === Je.Ready ? this.onNavReady(e3) : e3.on("ready", this.onNavReady), t3.state === Je.Ready ? this.onTargetReady(t3) : t3.on("ready", this.onTargetReady));
        }
        onNavReady(e3) {
          e3.on("createSlide", this.onNavCreateSlide), e3.on("Panzoom.click", this.onNavClick), e3.on("Panzoom.touchEnd", this.onNavTouch), this.onTargetChange();
        }
        onTargetReady(e3) {
          e3.on("change", this.onTargetChange), e3.on("Panzoom.refresh", this.onTargetChange), this.onTargetChange();
        }
        onNavClick(e3, t3, i2) {
          this.onNavTouch(e3, e3.panzoom, i2);
        }
        onNavTouch(e3, t3, i2) {
          var s2, n2;
          if (Math.abs(t3.dragOffset.x) > 3 || Math.abs(t3.dragOffset.y) > 3)
            return;
          const o2 = i2.target, { nav: a2, target: r2 } = this;
          if (!a2 || !r2 || !o2) return;
          const l2 = o2.closest("[data-index]");
          if (i2.stopPropagation(), i2.preventDefault(), !l2) return;
          const c2 = parseInt(l2.dataset.index || "", 10) || 0, d2 = r2.getPageForSlide(c2), h2 = a2.getPageForSlide(c2);
          a2.slideTo(h2), r2.slideTo(d2, {
            friction: (null === (n2 = null === (s2 = this.nav) || void 0 === s2 ? void 0 : s2.plugins) || void 0 === n2 ? void 0 : n2.Sync.option("friction")) || 0
          }), this.markSelectedSlide(c2);
        }
        onNavCreateSlide(e3, t3) {
          t3.index === this.selectedIndex && this.markSelectedSlide(t3.index);
        }
        onTargetChange() {
          var e3, t3;
          const { target: i2, nav: s2 } = this;
          if (!i2 || !s2) return;
          if (s2.state !== Je.Ready || i2.state !== Je.Ready) return;
          const n2 = null === (t3 = null === (e3 = i2.pages[i2.page]) || void 0 === e3 ? void 0 : e3.slides[0]) || void 0 === t3 ? void 0 : t3.index, o2 = s2.getPageForSlide(n2);
          this.markSelectedSlide(n2), s2.slideTo(
            o2,
            null === s2.prevPage && null === i2.prevPage ? { friction: 0 } : void 0
          );
        }
        markSelectedSlide(e3) {
          const t3 = this.nav;
          t3 && t3.state === Je.Ready && (this.selectedIndex = e3, [...t3.slides].map((t4) => {
            t4.el && t4.el.classList[t4.index === e3 ? "add" : "remove"](
              "is-nav-selected"
            );
          }));
        }
        attach() {
          const e3 = this;
          let t3 = e3.options.target, i2 = e3.options.nav;
          t3 ? e3.addAsNavFor(t3) : i2 && e3.addAsTargetFor(i2);
        }
        detach() {
          const e3 = this, t3 = e3.nav, i2 = e3.target;
          t3 && (t3.off("ready", e3.onNavReady), t3.off("createSlide", e3.onNavCreateSlide), t3.off("Panzoom.click", e3.onNavClick), t3.off("Panzoom.touchEnd", e3.onNavTouch)), e3.nav = null, i2 && (i2.off("ready", e3.onTargetReady), i2.off("refresh", e3.onTargetChange), i2.off("change", e3.onTargetChange)), e3.target = null;
        }
      }
      Object.defineProperty(rt, "defaults", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: { friction: 0.35 }
      });
      const lt = { Navigation: at, Dots: it, Sync: rt }, ct = "animationend", dt = "isSelected", ht = "slide";
      class ut extends Ie {
        get axis() {
          return this.isHorizontal ? "e" : "f";
        }
        get isEnabled() {
          return this.state === Je.Ready;
        }
        get isInfinite() {
          let e3 = false;
          const { contentDim: t3, viewportDim: i2, pages: s2, slides: n2 } = this, o2 = n2[0];
          return s2.length >= 2 && o2 && t3 + o2.dim >= i2 && (e3 = this.option("infinite")), e3;
        }
        get isRTL() {
          return "rtl" === this.option("direction");
        }
        get isHorizontal() {
          return "x" === this.option("axis");
        }
        constructor(e3, t3 = {}, i2 = {}) {
          if (super(), Object.defineProperty(this, "bp", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
          }), Object.defineProperty(this, "lp", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
          }), Object.defineProperty(this, "userOptions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
          }), Object.defineProperty(this, "userPlugins", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
          }), Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Je.Init
          }), Object.defineProperty(this, "page", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
          }), Object.defineProperty(this, "prevPage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "container", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          }), Object.defineProperty(this, "viewport", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "track", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "slides", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
          }), Object.defineProperty(this, "pages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
          }), Object.defineProperty(this, "panzoom", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "inTransition", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: /* @__PURE__ */ new Set()
          }), Object.defineProperty(this, "contentDim", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
          }), Object.defineProperty(this, "viewportDim", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
          }), "string" == typeof e3 && (e3 = document.querySelector(e3)), !e3 || !je(e3))
            throw new Error("No Element found");
          this.container = e3, this.slideNext = Ue(this.slideNext.bind(this), 150), this.slidePrev = Ue(this.slidePrev.bind(this), 150), this.userOptions = t3, this.userPlugins = i2, queueMicrotask(() => {
            this.processOptions();
          });
        }
        processOptions() {
          var e3, t3;
          const i2 = Le({}, ut.defaults, this.userOptions);
          let s2 = "";
          const n2 = i2.breakpoints;
          if (n2 && Oe(n2))
            for (const [e4, t4] of Object.entries(n2))
              window.matchMedia(e4).matches && Oe(t4) && (s2 += e4, Le(i2, t4));
          s2 === this.bp && this.state !== Je.Init || (this.bp = s2, this.state === Je.Ready && (i2.initialSlide = (null === (t3 = null === (e3 = this.pages[this.page]) || void 0 === e3 ? void 0 : e3.slides[0]) || void 0 === t3 ? void 0 : t3.index) || 0), this.state !== Je.Init && this.destroy(), super.setOptions(i2), false === this.option("enabled") ? this.attachEvents() : setTimeout(() => {
            this.init();
          }, 0));
        }
        init() {
          this.state = Je.Init, this.emit("init"), this.attachPlugins(
            Object.assign(Object.assign({}, ut.Plugins), this.userPlugins)
          ), this.emit("attachPlugins"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.setInitialPosition(), this.initPanzoom(), this.attachEvents(), this.state = Je.Ready, this.emit("ready");
        }
        initLayout() {
          const { container: e3 } = this, t3 = this.option("classes");
          Ne(e3, this.cn("container")), xe(e3, t3.isLTR, !this.isRTL), xe(e3, t3.isRTL, this.isRTL), xe(e3, t3.isVertical, !this.isHorizontal), xe(e3, t3.isHorizontal, this.isHorizontal);
          let i2 = this.option("viewport") || e3.querySelector(`.${t3.viewport}`);
          i2 || (i2 = document.createElement("div"), Ne(i2, t3.viewport), i2.append(...Ke(e3, `.${t3.slide}`)), e3.prepend(i2)), i2.addEventListener("scroll", this.onScroll);
          let s2 = this.option("track") || e3.querySelector(`.${t3.track}`);
          s2 || (s2 = document.createElement("div"), Ne(s2, t3.track), s2.append(...Array.from(i2.childNodes))), s2.setAttribute("aria-live", "polite"), i2.contains(s2) || i2.prepend(s2), this.viewport = i2, this.track = s2, this.emit("initLayout");
        }
        initSlides() {
          const { track: e3 } = this;
          if (!e3) return;
          const t3 = [...this.slides], i2 = [];
          [...Ke(e3, `.${this.cn(ht)}`)].forEach((e4) => {
            if (je(e4)) {
              const t4 = Qe({ el: e4, isDom: true, index: this.slides.length });
              i2.push(t4);
            }
          });
          for (let e4 of [...this.option("slides", []) || [], ...t3])
            i2.push(Qe(e4));
          this.slides = i2;
          for (let e4 = 0; e4 < this.slides.length; e4++) this.slides[e4].index = e4;
          for (const e4 of i2)
            this.emit("beforeInitSlide", e4, e4.index), this.emit("initSlide", e4, e4.index);
          this.emit("initSlides");
        }
        setInitialPage() {
          const e3 = this.option("initialSlide");
          this.page = "number" == typeof e3 ? this.getPageForSlide(e3) : parseInt(this.option("initialPage", 0) + "", 10) || 0;
        }
        setInitialPosition() {
          const { track: e3, pages: t3, isHorizontal: i2 } = this;
          if (!e3 || !t3.length) return;
          let s2 = this.page;
          t3[s2] || (this.page = s2 = 0);
          const n2 = (t3[s2].pos || 0) * (this.isRTL && i2 ? 1 : -1), o2 = i2 ? `${n2}px` : "0", a2 = i2 ? "0" : `${n2}px`;
          e3.style.transform = `translate3d(${o2}, ${a2}, 0) scale(1)`, this.option("adaptiveHeight") && this.setViewportHeight();
        }
        initPanzoom() {
          this.panzoom && (this.panzoom.destroy(), this.panzoom = null);
          const e3 = this.option("Panzoom") || {};
          this.panzoom = new Ze(
            this.viewport,
            Le(
              {},
              {
                content: this.track,
                zoom: false,
                panOnlyZoomed: false,
                lockAxis: this.isHorizontal ? "x" : "y",
                infinite: this.isInfinite,
                click: false,
                dblClick: false,
                touch: (e4) => !(this.pages.length < 2 && !e4.options.infinite),
                bounds: () => this.getBounds(),
                maxVelocity: (e4) => Math.abs(e4.target[this.axis] - e4.current[this.axis]) < 2 * this.viewportDim ? 100 : 0
              },
              e3
            )
          ), this.panzoom.on("*", (e4, t3, ...i2) => {
            this.emit(`Panzoom.${t3}`, e4, ...i2);
          }), this.panzoom.on("decel", this.onDecel), this.panzoom.on("refresh", this.onRefresh), this.panzoom.on("beforeTransform", this.onBeforeTransform), this.panzoom.on("endAnimation", this.onEndAnimation);
        }
        attachEvents() {
          const e3 = this.container;
          e3 && (e3.addEventListener("click", this.onClick, {
            passive: false,
            capture: false
          }), e3.addEventListener("slideTo", this.onSlideTo)), window.addEventListener("resize", this.onResize);
        }
        createPages() {
          let e3 = [];
          const { contentDim: t3, viewportDim: i2 } = this;
          let s2 = this.option("slidesPerPage");
          s2 = ("auto" === s2 || t3 <= i2) && false !== this.option("fill") ? 1 / 0 : parseFloat(s2 + "");
          let n2 = 0, o2 = 0, a2 = 0;
          for (const t4 of this.slides)
            (!e3.length || o2 + t4.dim - i2 > 0.05 || a2 >= s2) && (e3.push(et()), n2 = e3.length - 1, o2 = 0, a2 = 0), e3[n2].slides.push(t4), o2 += t4.dim + t4.gap, a2++;
          return e3;
        }
        processPages() {
          const e3 = this.pages, { contentDim: t3, viewportDim: i2, isInfinite: s2 } = this, n2 = this.option("center"), o2 = this.option("fill"), a2 = o2 && n2 && t3 > i2 && !s2;
          if (e3.forEach((e4, s3) => {
            var o3;
            e4.index = s3, e4.pos = (null === (o3 = e4.slides[0]) || void 0 === o3 ? void 0 : o3.pos) || 0, e4.dim = 0;
            for (const [t4, i3] of e4.slides.entries())
              e4.dim += i3.dim, t4 < e4.slides.length - 1 && (e4.dim += i3.gap);
            a2 && e4.pos + 0.5 * e4.dim < 0.5 * i2 ? e4.pos = 0 : a2 && e4.pos + 0.5 * e4.dim >= t3 - 0.5 * i2 ? e4.pos = t3 - i2 : n2 && (e4.pos += -0.5 * (i2 - e4.dim));
          }), e3.forEach((e4) => {
            o2 && !s2 && t3 > i2 && (e4.pos = Math.max(e4.pos, 0), e4.pos = Math.min(e4.pos, t3 - i2)), e4.pos = ve(e4.pos, 1e3), e4.dim = ve(e4.dim, 1e3), Math.abs(e4.pos) <= 0.1 && (e4.pos = 0);
          }), s2)
            return e3;
          const r2 = [];
          let l2;
          return e3.forEach((e4) => {
            const t4 = Object.assign({}, e4);
            l2 && t4.pos === l2.pos ? (l2.dim += t4.dim, l2.slides = [...l2.slides, ...t4.slides]) : (t4.index = r2.length, l2 = t4, r2.push(t4));
          }), r2;
        }
        getPageFromIndex(e3 = 0) {
          const t3 = this.pages.length;
          let i2;
          return e3 = parseInt((e3 || 0).toString()) || 0, i2 = this.isInfinite ? (e3 % t3 + t3) % t3 : Math.max(Math.min(e3, t3 - 1), 0), i2;
        }
        getSlideMetrics(e3) {
          var t3, i2;
          const s2 = this.isHorizontal ? "width" : "height";
          let n2 = 0, o2 = 0, a2 = e3.el;
          const r2 = !(!a2 || a2.parentNode);
          if (a2 ? n2 = parseFloat(a2.dataset[s2] || "") || 0 : (a2 = document.createElement("div"), a2.style.visibility = "hidden", (this.track || document.body).prepend(a2)), Ne(a2, this.cn(ht) + " " + e3.class + " " + e3.customClass), n2)
            a2.style[s2] = `${n2}px`, a2.style["width" === s2 ? "height" : "width"] = "";
          else {
            r2 && (this.track || document.body).prepend(a2), n2 = a2.getBoundingClientRect()[s2] * Math.max(
              1,
              (null === (t3 = window.visualViewport) || void 0 === t3 ? void 0 : t3.scale) || 1
            );
            let e4 = a2[this.isHorizontal ? "offsetWidth" : "offsetHeight"];
            e4 - 1 > n2 && (n2 = e4);
          }
          const l2 = getComputedStyle(a2);
          return "content-box" === l2.boxSizing && (this.isHorizontal ? (n2 += parseFloat(l2.paddingLeft) || 0, n2 += parseFloat(l2.paddingRight) || 0) : (n2 += parseFloat(l2.paddingTop) || 0, n2 += parseFloat(l2.paddingBottom) || 0)), o2 = parseFloat(l2[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0, r2 ? null === (i2 = a2.parentElement) || void 0 === i2 || i2.removeChild(a2) : e3.el || a2.remove(), { dim: ve(n2, 1e3), gap: ve(o2, 1e3) };
        }
        getBounds() {
          const { isInfinite: e3, isRTL: t3, isHorizontal: i2, pages: s2 } = this;
          let n2 = { min: 0, max: 0 };
          if (e3) n2 = { min: -1 / 0, max: 1 / 0 };
          else if (s2.length) {
            const e4 = s2[0].pos, o2 = s2[s2.length - 1].pos;
            n2 = t3 && i2 ? { min: e4, max: o2 } : { min: -1 * o2, max: -1 * e4 };
          }
          return { x: i2 ? n2 : { min: 0, max: 0 }, y: i2 ? { min: 0, max: 0 } : n2 };
        }
        repositionSlides() {
          let e3, {
            isHorizontal: t3,
            isRTL: i2,
            isInfinite: s2,
            viewport: n2,
            viewportDim: o2,
            contentDim: a2,
            page: r2,
            pages: l2,
            slides: c2,
            panzoom: d2
          } = this, h2 = 0, u2 = 0, p2 = 0, f2 = 0;
          d2 ? f2 = -1 * d2.current[this.axis] : l2[r2] && (f2 = l2[r2].pos || 0), e3 = t3 ? i2 ? "right" : "left" : "top", i2 && t3 && (f2 *= -1);
          for (const t4 of c2) {
            const i3 = t4.el;
            i3 ? ("top" === e3 ? (i3.style.right = "", i3.style.left = "") : i3.style.top = "", t4.index !== h2 ? i3.style[e3] = 0 === u2 ? "" : `${ve(u2, 1e3)}px` : i3.style[e3] = "", p2 += t4.dim + t4.gap, h2++) : u2 += t4.dim + t4.gap;
          }
          if (s2 && p2 && n2) {
            let i3 = getComputedStyle(n2), s3 = "padding", r3 = t3 ? "Right" : "Bottom", l3 = parseFloat(i3[s3 + (t3 ? "Left" : "Top")]);
            f2 -= l3, o2 += l3, o2 += parseFloat(i3[s3 + r3]);
            for (const t4 of c2)
              t4.el && (ve(t4.pos) < ve(o2) && ve(t4.pos + t4.dim + t4.gap) < ve(f2) && ve(f2) > ve(a2 - o2) && (t4.el.style[e3] = `${ve(u2 + p2, 1e3)}px`), ve(t4.pos + t4.gap) >= ve(a2 - o2) && ve(t4.pos) > ve(f2 + o2) && ve(f2) < ve(o2) && (t4.el.style[e3] = `-${ve(p2, 1e3)}px`));
          }
          let g2, m2, v2 = [...this.inTransition];
          if (v2.length > 1 && (g2 = l2[v2[0]], m2 = l2[v2[1]]), g2 && m2) {
            let t4 = 0;
            for (const i3 of c2)
              i3.el ? this.inTransition.has(i3.index) && g2.slides.indexOf(i3) < 0 && (i3.el.style[e3] = `${ve(t4 + (g2.pos - m2.pos), 1e3)}px`) : t4 += i3.dim + i3.gap;
          }
        }
        createSlideEl(e3) {
          const { track: t3, slides: i2 } = this;
          if (!t3 || !e3) return;
          if (e3.el && e3.el.parentNode) return;
          const s2 = e3.el || document.createElement("div");
          Ne(s2, this.cn(ht)), Ne(s2, e3.class), Ne(s2, e3.customClass);
          const n2 = e3.html;
          n2 && (n2 instanceof HTMLElement ? s2.appendChild(n2) : s2.innerHTML = e3.html + "");
          const o2 = [];
          i2.forEach((e4, t4) => {
            e4.el && o2.push(t4);
          });
          const a2 = e3.index;
          let r2 = null;
          o2.length && (r2 = i2[o2.reduce((e4, t4) => Math.abs(t4 - a2) < Math.abs(e4 - a2) ? t4 : e4)]);
          const l2 = r2 && r2.el && r2.el.parentNode ? r2.index < e3.index ? r2.el.nextSibling : r2.el : null;
          t3.insertBefore(s2, t3.contains(l2) ? l2 : null), e3.el = s2, this.emit("createSlide", e3);
        }
        removeSlideEl(e3, t3 = false) {
          const i2 = null == e3 ? void 0 : e3.el;
          if (!i2 || !i2.parentNode) return;
          const s2 = this.cn(dt);
          if (i2.classList.contains(s2) && (Be(i2, s2), this.emit("unselectSlide", e3)), e3.isDom && !t3)
            return i2.removeAttribute("aria-hidden"), i2.removeAttribute("data-index"), void (i2.style.left = "");
          this.emit("removeSlide", e3);
          const n2 = new CustomEvent(ct);
          i2.dispatchEvent(n2), e3.el && (e3.el.remove(), e3.el = null);
        }
        transitionTo(e3 = 0, t3 = this.option("transition")) {
          var i2, s2, n2, o2;
          if (!t3) return false;
          const a2 = this.page, { pages: r2, panzoom: l2 } = this;
          e3 = parseInt((e3 || 0).toString()) || 0;
          const c2 = this.getPageFromIndex(e3);
          if (!l2 || !r2[c2] || r2.length < 2 || Math.abs(
            ((null === (s2 = null === (i2 = r2[a2]) || void 0 === i2 ? void 0 : i2.slides[0]) || void 0 === s2 ? void 0 : s2.dim) || 0) - this.viewportDim
          ) > 1)
            return false;
          const d2 = e3 > a2 ? 1 : -1, h2 = r2[c2].pos * (this.isRTL ? 1 : -1);
          if (a2 === c2 && Math.abs(h2 - l2.target[this.axis]) < 1) return false;
          this.clearTransitions();
          const u2 = l2.isResting;
          Ne(this.container, this.cn("inTransition"));
          const p2 = (null === (n2 = r2[a2]) || void 0 === n2 ? void 0 : n2.slides[0]) || null, f2 = (null === (o2 = r2[c2]) || void 0 === o2 ? void 0 : o2.slides[0]) || null;
          this.inTransition.add(f2.index), this.createSlideEl(f2);
          let g2 = p2.el, m2 = f2.el;
          u2 || t3 === ht || (t3 = "fadeFast", g2 = null);
          const v2 = this.isRTL ? "next" : "prev", b2 = this.isRTL ? "prev" : "next";
          return g2 && (this.inTransition.add(p2.index), p2.transition = t3, g2.addEventListener(ct, this.onAnimationEnd), g2.classList.add(`f-${t3}Out`, `to-${d2 > 0 ? b2 : v2}`)), m2 && (f2.transition = t3, m2.addEventListener(ct, this.onAnimationEnd), m2.classList.add(`f-${t3}In`, `from-${d2 > 0 ? v2 : b2}`)), l2.current[this.axis] = h2, l2.target[this.axis] = h2, l2.requestTick(), this.onChange(c2), true;
        }
        manageSlideVisiblity() {
          const e3 = /* @__PURE__ */ new Set(), t3 = /* @__PURE__ */ new Set(), i2 = this.getVisibleSlides(
            parseFloat(this.option("preload", 0) + "") || 0
          );
          for (const s2 of this.slides) i2.has(s2) ? e3.add(s2) : t3.add(s2);
          for (const t4 of this.inTransition) e3.add(this.slides[t4]);
          for (const t4 of e3) this.createSlideEl(t4), this.lazyLoadSlide(t4);
          for (const i3 of t3) e3.has(i3) || this.removeSlideEl(i3);
          this.markSelectedSlides(), this.repositionSlides();
        }
        markSelectedSlides() {
          if (!this.pages[this.page] || !this.pages[this.page].slides) return;
          const e3 = "aria-hidden";
          let t3 = this.cn(dt);
          if (t3)
            for (const i2 of this.slides) {
              const s2 = i2.el;
              s2 && (s2.dataset.index = `${i2.index}`, s2.classList.contains("f-thumbs__slide") ? this.getVisibleSlides(0).has(i2) ? s2.removeAttribute(e3) : s2.setAttribute(e3, "true") : this.pages[this.page].slides.includes(i2) ? (s2.classList.contains(t3) || (Ne(s2, t3), this.emit("selectSlide", i2)), s2.removeAttribute(e3)) : (s2.classList.contains(t3) && (Be(s2, t3), this.emit("unselectSlide", i2)), s2.setAttribute(e3, "true")));
            }
        }
        flipInfiniteTrack() {
          const {
            axis: e3,
            isHorizontal: t3,
            isInfinite: i2,
            isRTL: s2,
            viewportDim: n2,
            contentDim: o2
          } = this, a2 = this.panzoom;
          if (!a2 || !i2) return;
          let r2 = a2.current[e3], l2 = a2.target[e3] - r2, c2 = 0, d2 = 0.5 * n2;
          s2 && t3 ? (r2 < -d2 && (c2 = -1, r2 += o2), r2 > o2 - d2 && (c2 = 1, r2 -= o2)) : (r2 > d2 && (c2 = 1, r2 -= o2), r2 < -o2 + d2 && (c2 = -1, r2 += o2)), c2 && (a2.current[e3] = r2, a2.target[e3] = r2 + l2);
        }
        lazyLoadImg(e3, t3) {
          const i2 = this, s2 = "f-fadeIn", n2 = "is-preloading";
          let o2 = false, a2 = null;
          const r2 = () => {
            o2 || (o2 = true, a2 && (a2.remove(), a2 = null), Be(t3, n2), t3.complete && (Ne(t3, s2), setTimeout(() => {
              Be(t3, s2);
            }, 350)), this.option("adaptiveHeight") && e3.el && this.pages[this.page].slides.indexOf(e3) > -1 && (i2.updateMetrics(), i2.setViewportHeight()), this.emit("load", e3));
          };
          Ne(t3, n2), t3.src = t3.dataset.lazySrcset || t3.dataset.lazySrc || "", delete t3.dataset.lazySrc, delete t3.dataset.lazySrcset, t3.addEventListener("error", () => {
            r2();
          }), t3.addEventListener("load", () => {
            r2();
          }), setTimeout(() => {
            const i3 = t3.parentNode;
            i3 && e3.el && (t3.complete ? r2() : o2 || (a2 = we(Fe), i3.insertBefore(a2, t3)));
          }, 300);
        }
        lazyLoadSlide(e3) {
          const t3 = e3 && e3.el;
          if (!t3) return;
          const i2 = /* @__PURE__ */ new Set();
          let s2 = Array.from(
            t3.querySelectorAll("[data-lazy-src],[data-lazy-srcset]")
          );
          t3.dataset.lazySrc && s2.push(t3), s2.map((e4) => {
            e4 instanceof HTMLImageElement ? i2.add(e4) : e4 instanceof HTMLElement && e4.dataset.lazySrc && (e4.style.backgroundImage = `url('${e4.dataset.lazySrc}')`, delete e4.dataset.lazySrc);
          });
          for (const t4 of i2) this.lazyLoadImg(e3, t4);
        }
        onAnimationEnd(e3) {
          var t3;
          const i2 = e3.target, s2 = i2 ? parseInt(i2.dataset.index || "", 10) || 0 : -1, n2 = this.slides[s2], o2 = e3.animationName;
          if (!i2 || !n2 || !o2) return;
          const a2 = !!this.inTransition.has(s2) && n2.transition;
          a2 && o2.substring(0, a2.length + 2) === `f-${a2}` && this.inTransition.delete(s2), this.inTransition.size || this.clearTransitions(), s2 === this.page && (null === (t3 = this.panzoom) || void 0 === t3 ? void 0 : t3.isResting) && this.emit("settle");
        }
        onDecel(e3, t3 = 0, i2 = 0, s2 = 0, n2 = 0) {
          if (this.option("dragFree")) return void this.setPageFromPosition();
          const { isRTL: o2, isHorizontal: a2, axis: r2, pages: l2 } = this, c2 = l2.length, d2 = Math.abs(Math.atan2(i2, t3) / (Math.PI / 180));
          let h2 = 0;
          if (h2 = d2 > 45 && d2 < 135 ? a2 ? 0 : i2 : a2 ? t3 : 0, !c2) return;
          let u2 = this.page, p2 = o2 && a2 ? 1 : -1;
          const f2 = e3.current[r2] * p2;
          let { pageIndex: g2 } = this.getPageFromPosition(f2);
          Math.abs(h2) > 5 ? (l2[u2].dim < document.documentElement["client" + (this.isHorizontal ? "Width" : "Height")] - 1 && (u2 = g2), u2 = o2 && a2 ? h2 < 0 ? u2 - 1 : u2 + 1 : h2 < 0 ? u2 + 1 : u2 - 1) : u2 = 0 === s2 && 0 === n2 ? u2 : g2, this.slideTo(u2, {
            transition: false,
            friction: e3.option("decelFriction")
          });
        }
        onClick(e3) {
          const t3 = e3.target, i2 = t3 && je(t3) ? t3.dataset : null;
          let s2, n2;
          i2 && (void 0 !== i2.carouselPage ? (n2 = "slideTo", s2 = i2.carouselPage) : void 0 !== i2.carouselNext ? n2 = "slideNext" : void 0 !== i2.carouselPrev && (n2 = "slidePrev")), n2 ? (e3.preventDefault(), e3.stopPropagation(), t3 && !t3.hasAttribute("disabled") && this[n2](s2)) : this.emit("click", e3);
        }
        onSlideTo(e3) {
          const t3 = e3.detail || 0;
          this.slideTo(this.getPageForSlide(t3), { friction: 0 });
        }
        onChange(e3, t3 = 0) {
          const i2 = this.page;
          this.prevPage = i2, this.page = e3, this.option("adaptiveHeight") && this.setViewportHeight(), e3 !== i2 && (this.markSelectedSlides(), this.emit("change", e3, i2, t3));
        }
        onRefresh() {
          let e3 = this.contentDim, t3 = this.viewportDim;
          this.updateMetrics(), this.contentDim === e3 && this.viewportDim === t3 || this.slideTo(this.page, { friction: 0, transition: false });
        }
        onScroll() {
          var e3;
          null === (e3 = this.viewport) || void 0 === e3 || e3.scroll(0, 0);
        }
        onResize() {
          this.option("breakpoints") && this.processOptions();
        }
        onBeforeTransform(e3) {
          this.lp !== e3.current[this.axis] && (this.flipInfiniteTrack(), this.manageSlideVisiblity()), this.lp = e3.current.e;
        }
        onEndAnimation() {
          this.inTransition.size || this.emit("settle");
        }
        reInit(e3 = null, t3 = null) {
          this.destroy(), this.state = Je.Init, this.prevPage = null, this.userOptions = e3 || this.userOptions, this.userPlugins = t3 || this.userPlugins, this.processOptions();
        }
        slideTo(e3 = 0, {
          friction: t3 = this.option("friction"),
          transition: i2 = this.option("transition")
        } = {}) {
          if (this.state === Je.Destroy) return;
          e3 = parseInt((e3 || 0).toString()) || 0;
          const s2 = this.getPageFromIndex(e3), { axis: n2, isHorizontal: o2, isRTL: a2, pages: r2, panzoom: l2 } = this, c2 = r2.length, d2 = a2 && o2 ? 1 : -1;
          if (!l2 || !c2) return;
          if (this.page !== s2) {
            const t4 = new Event("beforeChange", { bubbles: true, cancelable: true });
            if (this.emit("beforeChange", t4, e3), t4.defaultPrevented) return;
          }
          if (this.transitionTo(e3, i2)) return;
          let h2 = r2[s2].pos;
          if (this.isInfinite) {
            const t4 = this.contentDim, i3 = l2.target[n2] * d2;
            2 === c2 ? h2 += t4 * Math.floor(parseFloat(e3 + "") / 2) : h2 = [h2, h2 - t4, h2 + t4].reduce(function(e4, t5) {
              return Math.abs(t5 - i3) < Math.abs(e4 - i3) ? t5 : e4;
            });
          }
          h2 *= d2, Math.abs(l2.target[n2] - h2) < 1 || (l2.panTo({ x: o2 ? h2 : 0, y: o2 ? 0 : h2, friction: t3 }), this.onChange(s2));
        }
        slideToClosest(e3) {
          if (this.panzoom) {
            const { pageIndex: t3 } = this.getPageFromPosition();
            this.slideTo(t3, e3);
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
          const e3 = ["to-prev", "to-next", "from-prev", "from-next"];
          for (const t3 of this.slides) {
            const i2 = t3.el;
            if (i2) {
              i2.removeEventListener(ct, this.onAnimationEnd), i2.classList.remove(...e3);
              const s2 = t3.transition;
              s2 && i2.classList.remove(`f-${s2}Out`, `f-${s2}In`);
            }
          }
          this.manageSlideVisiblity();
        }
        addSlide(e3, t3) {
          var i2, s2, n2, o2;
          const a2 = this.panzoom, r2 = (null === (i2 = this.pages[this.page]) || void 0 === i2 ? void 0 : i2.pos) || 0, l2 = (null === (s2 = this.pages[this.page]) || void 0 === s2 ? void 0 : s2.dim) || 0, c2 = this.contentDim < this.viewportDim;
          let d2 = Array.isArray(t3) ? t3 : [t3];
          const h2 = [];
          for (const e4 of d2) h2.push(Qe(e4));
          this.slides.splice(e3, 0, ...h2);
          for (let e4 = 0; e4 < this.slides.length; e4++) this.slides[e4].index = e4;
          for (const e4 of h2) this.emit("beforeInitSlide", e4, e4.index);
          if (this.page >= e3 && (this.page += h2.length), this.updateMetrics(), a2) {
            const t4 = (null === (n2 = this.pages[this.page]) || void 0 === n2 ? void 0 : n2.pos) || 0, i3 = (null === (o2 = this.pages[this.page]) || void 0 === o2 ? void 0 : o2.dim) || 0, s3 = this.pages.length || 1, d3 = this.isRTL ? l2 - i3 : i3 - l2, h3 = this.isRTL ? r2 - t4 : t4 - r2;
            c2 && 1 === s3 ? (e3 <= this.page && (a2.current[this.axis] -= d3, a2.target[this.axis] -= d3), a2.panTo({ [this.isHorizontal ? "x" : "y"]: -1 * t4 })) : h3 && e3 <= this.page && (a2.target[this.axis] -= h3, a2.current[this.axis] -= h3, a2.requestTick());
          }
          for (const e4 of h2) this.emit("initSlide", e4, e4.index);
        }
        prependSlide(e3) {
          this.addSlide(0, e3);
        }
        appendSlide(e3) {
          this.addSlide(this.slides.length, e3);
        }
        removeSlide(e3) {
          const t3 = this.slides.length;
          e3 = (e3 % t3 + t3) % t3;
          const i2 = this.slides[e3];
          if (i2) {
            this.removeSlideEl(i2, true), this.slides.splice(e3, 1);
            for (let e4 = 0; e4 < this.slides.length; e4++) this.slides[e4].index = e4;
            this.updateMetrics(), this.slideTo(this.page, { friction: 0, transition: false }), this.emit("destroySlide", i2);
          }
        }
        updateMetrics() {
          const {
            panzoom: e3,
            viewport: t3,
            track: i2,
            slides: s2,
            isHorizontal: n2,
            isInfinite: o2
          } = this;
          if (!i2) return;
          const a2 = n2 ? "width" : "height", r2 = n2 ? "offsetWidth" : "offsetHeight";
          if (t3) {
            let e4 = Math.max(t3[r2], ve(t3.getBoundingClientRect()[a2], 1e3)), i3 = getComputedStyle(t3), s3 = "padding", o3 = n2 ? "Right" : "Bottom";
            e4 -= parseFloat(i3[s3 + (n2 ? "Left" : "Top")]) + parseFloat(i3[s3 + o3]), this.viewportDim = e4;
          }
          let l2, c2 = 0;
          for (const [e4, t4] of s2.entries()) {
            let i3 = 0, n3 = 0;
            !t4.el && l2 ? (i3 = l2.dim, n3 = l2.gap) : ({ dim: i3, gap: n3 } = this.getSlideMetrics(t4), l2 = t4), i3 = ve(i3, 1e3), n3 = ve(n3, 1e3), t4.dim = i3, t4.gap = n3, t4.pos = c2, c2 += i3, (o2 || e4 < s2.length - 1) && (c2 += n3);
          }
          c2 = ve(c2, 1e3), this.contentDim = c2, e3 && (e3.contentRect[a2] = c2, e3.contentRect[n2 ? "fullWidth" : "fullHeight"] = c2), this.pages = this.createPages(), this.pages = this.processPages(), this.state === Je.Init && this.setInitialPage(), this.page = Math.max(0, Math.min(this.page, this.pages.length - 1)), this.manageSlideVisiblity(), this.emit("refresh");
        }
        getProgress(e3, t3 = false, i2 = false) {
          void 0 === e3 && (e3 = this.page);
          const s2 = this, n2 = s2.panzoom, o2 = s2.contentDim, a2 = s2.pages[e3] || 0;
          if (!a2 || !n2) return e3 > this.page ? -1 : 1;
          let r2 = -1 * n2.current.e, l2 = ve((r2 - a2.pos) / (1 * a2.dim), 1e3), c2 = l2, d2 = l2;
          this.isInfinite && true !== i2 && (c2 = ve((r2 - a2.pos + o2) / (1 * a2.dim), 1e3), d2 = ve((r2 - a2.pos - o2) / (1 * a2.dim), 1e3));
          let h2 = [l2, c2, d2].reduce(function(e4, t4) {
            return Math.abs(t4) < Math.abs(e4) ? t4 : e4;
          });
          return t3 ? h2 : h2 > 1 ? 1 : h2 < -1 ? -1 : h2;
        }
        setViewportHeight() {
          const { page: e3, pages: t3, viewport: i2, isHorizontal: s2 } = this;
          if (!i2 || !t3[e3]) return;
          let n2 = 0;
          s2 && this.track && (this.track.style.height = "auto", t3[e3].slides.forEach((e4) => {
            e4.el && (n2 = Math.max(n2, e4.el.offsetHeight));
          })), i2.style.height = n2 ? `${n2}px` : "";
        }
        getPageForSlide(e3) {
          for (const t3 of this.pages)
            for (const i2 of t3.slides) if (i2.index === e3) return t3.index;
          return -1;
        }
        getVisibleSlides(e3 = 0) {
          var t3;
          const i2 = /* @__PURE__ */ new Set();
          let {
            panzoom: s2,
            contentDim: n2,
            viewportDim: o2,
            pages: a2,
            page: r2
          } = this;
          if (o2) {
            n2 = n2 + (null === (t3 = this.slides[this.slides.length - 1]) || void 0 === t3 ? void 0 : t3.gap) || 0;
            let l2 = 0;
            l2 = s2 && s2.state !== _e.Init && s2.state !== _e.Destroy ? -1 * s2.current[this.axis] : a2[r2] && a2[r2].pos || 0, this.isInfinite && (l2 -= Math.floor(l2 / n2) * n2), this.isRTL && this.isHorizontal && (l2 *= -1);
            const c2 = l2 - o2 * e3, d2 = l2 + o2 * (e3 + 1), h2 = this.isInfinite ? [-1, 0, 1] : [0];
            for (const e4 of this.slides)
              for (const t4 of h2) {
                const s3 = e4.pos + t4 * n2, o3 = s3 + e4.dim + e4.gap;
                s3 < d2 && o3 > c2 && i2.add(e4);
              }
          }
          return i2;
        }
        getPageFromPosition(e3) {
          const {
            viewportDim: t3,
            contentDim: i2,
            slides: s2,
            pages: n2,
            panzoom: o2
          } = this, a2 = n2.length, r2 = s2.length, l2 = s2[0], c2 = s2[r2 - 1], d2 = this.option("center");
          let h2 = 0, u2 = 0, p2 = 0, f2 = void 0 === e3 ? -1 * ((null == o2 ? void 0 : o2.target[this.axis]) || 0) : e3;
          d2 && (f2 += 0.5 * t3), this.isInfinite ? (f2 < l2.pos - 0.5 * c2.gap && (f2 -= i2, p2 = -1), f2 > c2.pos + c2.dim + 0.5 * c2.gap && (f2 -= i2, p2 = 1)) : f2 = Math.max(l2.pos || 0, Math.min(f2, c2.pos));
          let g2 = c2, m2 = s2.find((e4) => {
            const t4 = e4.pos - 0.5 * g2.gap, i3 = e4.pos + e4.dim + 0.5 * e4.gap;
            return g2 = e4, f2 >= t4 && f2 < i3;
          });
          return m2 || (m2 = c2), u2 = this.getPageForSlide(m2.index), h2 = u2 + p2 * a2, { page: h2, pageIndex: u2 };
        }
        setPageFromPosition() {
          const { pageIndex: e3 } = this.getPageFromPosition();
          this.onChange(e3);
        }
        destroy() {
          if ([Je.Destroy].includes(this.state)) return;
          this.state = Je.Destroy;
          const {
            container: e3,
            viewport: t3,
            track: i2,
            slides: s2,
            panzoom: n2
          } = this, o2 = this.option("classes");
          e3.removeEventListener("click", this.onClick, {
            passive: false,
            capture: false
          }), e3.removeEventListener("slideTo", this.onSlideTo), window.removeEventListener("resize", this.onResize), n2 && (n2.destroy(), this.panzoom = null), s2 && s2.forEach((e4) => {
            this.removeSlideEl(e4);
          }), this.detachPlugins(), t3 && (t3.removeEventListener("scroll", this.onScroll), t3.offsetParent && i2 && i2.offsetParent && t3.replaceWith(...i2.childNodes));
          for (const [t4, i3] of Object.entries(o2))
            "container" !== t4 && i3 && e3.classList.remove(i3);
          this.track = null, this.viewport = null, this.page = 0, this.slides = [];
          const a2 = this.events.get("ready");
          this.events = /* @__PURE__ */ new Map(), a2 && this.events.set("ready", a2);
        }
      }
      Object.defineProperty(ut, "Panzoom", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: Ze
      }), Object.defineProperty(ut, "defaults", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: {
          viewport: null,
          track: null,
          enabled: true,
          slides: [],
          axis: "x",
          transition: "fade",
          preload: 1,
          slidesPerPage: "auto",
          initialPage: 0,
          friction: 0.12,
          Panzoom: { decelFriction: 0.12 },
          center: true,
          infinite: true,
          fill: true,
          dragFree: false,
          adaptiveHeight: false,
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
            isSelected: "is-selected"
          },
          l10n: {
            NEXT: "Next slide",
            PREV: "Previous slide",
            GOTO: "Go to slide #%d"
          }
        }
      }), Object.defineProperty(ut, "Plugins", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: lt
      });
      const pt = function(e3) {
        if (!je(e3)) return 0;
        const t3 = window.scrollY, i2 = window.innerHeight, s2 = t3 + i2, n2 = e3.getBoundingClientRect(), o2 = n2.y + t3, a2 = n2.height, r2 = o2 + a2;
        if (t3 > r2 || s2 < o2) return 0;
        if (t3 < o2 && s2 > r2) return 100;
        if (o2 < t3 && r2 > s2) return 100;
        let l2 = a2;
        o2 < t3 && (l2 -= t3 - o2), r2 > s2 && (l2 -= r2 - s2);
        const c2 = l2 / i2 * 100;
        return Math.round(c2);
      }, ft = !("undefined" == typeof window || !window.document || !window.document.createElement);
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
        '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'
      ].join(","), vt = (e3) => {
        if (e3 && ft) {
          void 0 === gt && document.createElement("div").focus({
            get preventScroll() {
              return gt = true, false;
            }
          });
          try {
            if (gt) e3.focus({ preventScroll: true });
            else {
              const t3 = window.scrollY || document.body.scrollTop, i2 = window.scrollX || document.body.scrollLeft;
              e3.focus(), document.body.scrollTo({ top: t3, left: i2, behavior: "auto" });
            }
          } catch (e4) {
          }
        }
      }, bt = () => {
        const e3 = document;
        let t3, i2 = "", s2 = "", n2 = "";
        return e3.fullscreenEnabled ? (i2 = "requestFullscreen", s2 = "exitFullscreen", n2 = "fullscreenElement") : e3.webkitFullscreenEnabled && (i2 = "webkitRequestFullscreen", s2 = "webkitExitFullscreen", n2 = "webkitFullscreenElement"), i2 && (t3 = {
          request: function(t4 = e3.documentElement) {
            return "webkitRequestFullscreen" === i2 ? t4[i2](Element.ALLOW_KEYBOARD_INPUT) : t4[i2]();
          },
          exit: function() {
            return e3[n2] && e3[s2]();
          },
          isFullscreen: function() {
            return e3[n2];
          }
        }), t3;
      }, yt = {
        dragToClose: true,
        hideScrollbar: true,
        Carousel: {
          classes: {
            container: "fancybox__carousel",
            viewport: "fancybox__viewport",
            track: "fancybox__track",
            slide: "fancybox__slide"
          }
        },
        contentClick: "toggleZoom",
        contentDblClick: false,
        backdropClick: "close",
        animated: true,
        idle: 3500,
        showClass: "f-zoomInUp",
        hideClass: "f-fadeOut",
        commonCaption: false,
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
          DOWNLOAD: "Download"
        }),
        tpl: {
          closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
          main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>'
        },
        groupAll: false,
        groupAttr: "data-fancybox",
        defaultType: "image",
        defaultDisplay: "block",
        autoFocus: true,
        trapFocus: true,
        placeFocusBack: true,
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
          ArrowLeft: "prev"
        },
        Fullscreen: { autoStart: false },
        compact: () => window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
        wheel: "zoom"
      };
      var wt, St;
      !function(e3) {
        e3[e3.Init = 0] = "Init", e3[e3.Ready = 1] = "Ready", e3[e3.Closing = 2] = "Closing", e3[e3.CustomClosing = 3] = "CustomClosing", e3[e3.Destroy = 4] = "Destroy";
      }(wt || (wt = {})), function(e3) {
        e3[e3.Loading = 0] = "Loading", e3[e3.Opening = 1] = "Opening", e3[e3.Ready = 2] = "Ready", e3[e3.Closing = 3] = "Closing";
      }(St || (St = {}));
      let xt = "", Et = false, Ct = false, Tt = null;
      const Pt = () => {
        let e3 = "", t3 = "";
        const i2 = Ri.getInstance();
        if (i2) {
          const s2 = i2.carousel, n2 = i2.getSlide();
          if (s2 && n2) {
            let o2 = n2.slug || void 0, a2 = n2.triggerEl || void 0;
            t3 = o2 || i2.option("slug") || "", !t3 && a2 && a2.dataset && (t3 = a2.dataset.fancybox || ""), t3 && "true" !== t3 && (e3 = "#" + t3 + (!o2 && s2.slides.length > 1 ? "-" + (n2.index + 1) : ""));
          }
        }
        return { hash: e3, slug: t3, index: 1 };
      }, Mt = () => {
        const e3 = new URL(document.URL).hash, t3 = e3.slice(1).split("-"), i2 = t3[t3.length - 1], s2 = i2 && /^\+?\d+$/.test(i2) && parseInt(t3.pop() || "1", 10) || 1;
        return { hash: e3, slug: t3.join("-"), index: s2 };
      }, Ot = () => {
        const { slug: e3, index: t3 } = Mt();
        if (!e3) return;
        let i2 = document.querySelector(`[data-slug="${e3}"]`);
        if (i2 && i2.dispatchEvent(
          new CustomEvent("click", { bubbles: true, cancelable: true })
        ), Ri.getInstance())
          return;
        const s2 = document.querySelectorAll(`[data-fancybox="${e3}"]`);
        s2.length && (i2 = s2[t3 - 1], i2 && i2.dispatchEvent(
          new CustomEvent("click", { bubbles: true, cancelable: true })
        ));
      }, Lt = () => {
        if (false === Ri.defaults.Hash) return;
        const e3 = Ri.getInstance();
        if (false === (null == e3 ? void 0 : e3.options.Hash)) return;
        const { slug: t3, index: i2 } = Mt(), { slug: s2 } = Pt();
        e3 && (t3 === s2 ? e3.jumpTo(i2 - 1) : (Et = true, e3.close())), Ot();
      }, At = () => {
        Tt && clearTimeout(Tt), queueMicrotask(() => {
          Lt();
        });
      }, kt = () => {
        window.addEventListener("hashchange", At, false), setTimeout(() => {
          Lt();
        }, 500);
      };
      ft && (/complete|interactive|loaded/.test(document.readyState) ? kt() : document.addEventListener("DOMContentLoaded", kt));
      const It = "is-zooming-in";
      class _t extends tt {
        onCreateSlide(e3, t3, i2) {
          const s2 = this.instance.optionFor(i2, "src") || "";
          i2.el && "image" === i2.type && "string" == typeof s2 && this.setImage(i2, s2);
        }
        onRemoveSlide(e3, t3, i2) {
          i2.panzoom && i2.panzoom.destroy(), i2.panzoom = void 0, i2.imageEl = void 0;
        }
        onChange(e3, t3, i2, s2) {
          Be(this.instance.container, It);
          for (const e4 of t3.slides) {
            const t4 = e4.panzoom;
            t4 && e4.index !== i2 && t4.reset(0.35);
          }
        }
        onClose() {
          var e3;
          const t3 = this.instance, i2 = t3.container, s2 = t3.getSlide();
          if (!i2 || !i2.parentElement || !s2) return;
          const { el: n2, contentEl: o2, panzoom: a2, thumbElSrc: r2 } = s2;
          if (!n2 || !r2 || !o2 || !a2 || a2.isContentLoading || a2.state === _e.Init || a2.state === _e.Destroy)
            return;
          a2.updateMetrics();
          let l2 = this.getZoomInfo(s2);
          if (!l2) return;
          this.instance.state = wt.CustomClosing, i2.classList.remove(It), i2.classList.add("is-zooming-out"), o2.style.backgroundImage = `url('${r2}')`;
          const c2 = i2.getBoundingClientRect();
          1 === ((null === (e3 = window.visualViewport) || void 0 === e3 ? void 0 : e3.scale) || 1) && Object.assign(i2.style, {
            position: "absolute",
            top: `${i2.offsetTop + window.scrollY}px`,
            left: `${i2.offsetLeft + window.scrollX}px`,
            bottom: "auto",
            right: "auto",
            width: `${c2.width}px`,
            height: `${c2.height}px`,
            overflow: "hidden"
          });
          const { x: d2, y: h2, scale: u2, opacity: p2 } = l2;
          if (p2) {
            const e4 = ((e5, t4, i3, s3) => {
              const n3 = t4 - e5;
              return (t5) => 1 + ((t5 - e5) / n3 * -1 || 0);
            })(a2.scale, u2);
            a2.on("afterTransform", () => {
              o2.style.opacity = e4(a2.scale) + "";
            });
          }
          a2.on("endAnimation", () => {
            t3.destroy();
          }), a2.target.a = u2, a2.target.b = 0, a2.target.c = 0, a2.target.d = u2, a2.panTo({
            x: d2,
            y: h2,
            scale: u2,
            friction: p2 ? 0.2 : 0.33,
            ignoreBounds: true
          }), a2.isResting && t3.destroy();
        }
        setImage(e3, t3) {
          const i2 = this.instance;
          e3.src = t3, this.process(e3, t3).then(
            (t4) => {
              const { contentEl: s2, imageEl: n2, thumbElSrc: o2, el: a2 } = e3;
              if (i2.isClosing() || !s2 || !n2) return;
              s2.offsetHeight;
              const r2 = !!i2.isOpeningSlide(e3) && this.getZoomInfo(e3);
              if (this.option("protected") && a2) {
                a2.addEventListener("contextmenu", (e5) => {
                  e5.preventDefault();
                });
                const e4 = document.createElement("div");
                Ne(e4, "fancybox-protected"), s2.appendChild(e4);
              }
              if (o2 && r2) {
                const n3 = t4.contentRect, a3 = Math.max(n3.fullWidth, n3.fullHeight);
                let c2 = null;
                !r2.opacity && a3 > 1200 && (c2 = document.createElement("img"), Ne(c2, "fancybox-ghost"), c2.src = o2, s2.appendChild(c2));
                const d2 = () => {
                  c2 && (Ne(c2, "f-fadeFastOut"), setTimeout(() => {
                    c2 && (c2.remove(), c2 = null);
                  }, 200));
                };
                (l2 = o2, new Promise((e4, t5) => {
                  const i3 = new Image();
                  i3.onload = e4, i3.onerror = t5, i3.src = l2;
                })).then(
                  () => {
                    i2.hideLoading(e3), e3.state = St.Opening, this.instance.emit("reveal", e3), this.zoomIn(e3).then(
                      () => {
                        d2(), this.instance.done(e3);
                      },
                      () => {
                      }
                    ), c2 && setTimeout(
                      () => {
                        d2();
                      },
                      a3 > 2500 ? 800 : 200
                    );
                  },
                  () => {
                    i2.hideLoading(e3), i2.revealContent(e3);
                  }
                );
              } else {
                const s3 = this.optionFor(e3, "initialSize"), n3 = this.optionFor(e3, "zoom"), o3 = {
                  event: i2.prevMouseMoveEvent || i2.options.event,
                  friction: n3 ? 0.12 : 0
                };
                let a3 = i2.optionFor(e3, "showClass") || void 0, r3 = true;
                i2.isOpeningSlide(e3) && ("full" === s3 ? t4.zoomToFull(o3) : "cover" === s3 ? t4.zoomToCover(o3) : "max" === s3 ? t4.zoomToMax(o3) : r3 = false, t4.stop("current")), r3 && a3 && (a3 = t4.isDragging ? "f-fadeIn" : ""), i2.hideLoading(e3), i2.revealContent(e3, a3);
              }
              var l2;
            },
            () => {
              i2.setError(e3, "{{IMAGE_ERROR}}");
            }
          );
        }
        process(e3, t3) {
          return new Promise((i2, s2) => {
            var n2;
            const o2 = this.instance, a2 = e3.el;
            o2.clearContent(e3), o2.showLoading(e3);
            let r2 = this.optionFor(e3, "content");
            if ("string" == typeof r2 && (r2 = we(r2)), !r2 || !je(r2)) {
              if (r2 = document.createElement("img"), r2 instanceof HTMLImageElement) {
                let i3 = "", s3 = e3.caption;
                i3 = "string" == typeof s3 && s3 ? s3.replace(/<[^>]+>/gi, "").substring(0, 1e3) : `Image ${e3.index + 1} of ${(null === (n2 = o2.carousel) || void 0 === n2 ? void 0 : n2.pages.length) || 1}`, r2.src = t3 || "", r2.alt = i3, r2.draggable = false, e3.srcset && r2.setAttribute("srcset", e3.srcset), this.instance.isOpeningSlide(e3) && (r2.fetchPriority = "high");
              }
              e3.sizes && r2.setAttribute("sizes", e3.sizes);
            }
            Ne(r2, "fancybox-image"), e3.imageEl = r2, o2.setContent(e3, r2, false), e3.panzoom = new Ze(
              a2,
              Le({ transformParent: true }, this.option("Panzoom") || {}, {
                content: r2,
                width: o2.optionFor(e3, "width", "auto"),
                height: o2.optionFor(e3, "height", "auto"),
                wheel: () => {
                  const e4 = o2.option("wheel");
                  return ("zoom" === e4 || "pan" == e4) && e4;
                },
                click: (t4, i3) => {
                  var s3, n3;
                  if (o2.isCompact || o2.isClosing()) return false;
                  if (e3.index !== (null === (s3 = o2.getSlide()) || void 0 === s3 ? void 0 : s3.index))
                    return false;
                  if (i3) {
                    const e4 = i3.composedPath()[0];
                    if ([
                      "A",
                      "BUTTON",
                      "TEXTAREA",
                      "OPTION",
                      "INPUT",
                      "SELECT",
                      "VIDEO"
                    ].includes(e4.nodeName))
                      return false;
                  }
                  let a3 = !i3 || i3.target && (null === (n3 = e3.contentEl) || void 0 === n3 ? void 0 : n3.contains(i3.target));
                  return o2.option(a3 ? "contentClick" : "backdropClick") || false;
                },
                dblClick: () => o2.isCompact ? "toggleZoom" : o2.option("contentDblClick") || false,
                spinner: false,
                panOnlyZoomed: true,
                wheelLimit: 1 / 0,
                on: {
                  ready: (e4) => {
                    i2(e4);
                  },
                  error: () => {
                    s2();
                  },
                  destroy: () => {
                    s2();
                  }
                }
              })
            );
          });
        }
        zoomIn(e3) {
          return new Promise((t3, i2) => {
            const s2 = this.instance, n2 = s2.container, { panzoom: o2, contentEl: a2, el: r2 } = e3;
            o2 && o2.updateMetrics();
            const l2 = this.getZoomInfo(e3);
            if (!(l2 && r2 && a2 && o2 && n2)) return void i2();
            const { x: c2, y: d2, scale: h2, opacity: u2 } = l2, p2 = () => {
              e3.state !== St.Closing && (u2 && (a2.style.opacity = Math.max(Math.min(1, 1 - (1 - o2.scale) / (1 - h2)), 0) + ""), o2.scale >= 1 && o2.scale > o2.targetScale - 0.1 && t3(o2));
            }, f2 = (e4) => {
              (e4.scale < 0.99 || e4.scale > 1.01) && !e4.isDragging || (Be(n2, It), a2.style.opacity = "", e4.off("endAnimation", f2), e4.off("touchStart", f2), e4.off("afterTransform", p2), t3(e4));
            };
            o2.on("endAnimation", f2), o2.on("touchStart", f2), o2.on("afterTransform", p2), o2.on(["error", "destroy"], () => {
              i2();
            }), o2.panTo({ x: c2, y: d2, scale: h2, friction: 0, ignoreBounds: true }), o2.stop("current");
            const g2 = {
              event: "mousemove" === o2.panMode ? s2.prevMouseMoveEvent || s2.options.event : void 0
            }, m2 = this.optionFor(e3, "initialSize");
            Ne(n2, It), s2.hideLoading(e3), "full" === m2 ? o2.zoomToFull(g2) : "cover" === m2 ? o2.zoomToCover(g2) : "max" === m2 ? o2.zoomToMax(g2) : o2.reset(0.172);
          });
        }
        getZoomInfo(e3) {
          const { el: t3, imageEl: i2, thumbEl: s2, panzoom: n2 } = e3, o2 = this.instance, a2 = o2.container;
          if (!t3 || !i2 || !s2 || !n2 || pt(s2) < 3 || !this.optionFor(e3, "zoom") || !a2 || o2.state === wt.Destroy)
            return false;
          if ("0" === getComputedStyle(a2).getPropertyValue("--f-images-zoom"))
            return false;
          const r2 = window.visualViewport || null;
          if (1 !== (r2 ? r2.scale : 1)) return false;
          let {
            top: l2,
            left: c2,
            width: d2,
            height: h2
          } = s2.getBoundingClientRect(), { top: u2, left: p2, fitWidth: f2, fitHeight: g2 } = n2.contentRect;
          if (!(d2 && h2 && f2 && g2)) return false;
          const m2 = n2.container.getBoundingClientRect();
          p2 += m2.left, u2 += m2.top;
          const v2 = -1 * (p2 + 0.5 * f2 - (c2 + 0.5 * d2)), b2 = -1 * (u2 + 0.5 * g2 - (l2 + 0.5 * h2)), y2 = d2 / f2;
          let w2 = this.option("zoomOpacity") || false;
          return "auto" === w2 && (w2 = Math.abs(d2 / h2 - f2 / g2) > 0.1), { x: v2, y: b2, scale: y2, opacity: w2 };
        }
        attach() {
          const e3 = this, t3 = e3.instance;
          t3.on("Carousel.change", e3.onChange), t3.on("Carousel.createSlide", e3.onCreateSlide), t3.on("Carousel.removeSlide", e3.onRemoveSlide), t3.on("close", e3.onClose);
        }
        detach() {
          const e3 = this, t3 = e3.instance;
          t3.off("Carousel.change", e3.onChange), t3.off("Carousel.createSlide", e3.onCreateSlide), t3.off("Carousel.removeSlide", e3.onRemoveSlide), t3.off("close", e3.onClose);
        }
      }
      Object.defineProperty(_t, "defaults", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: {
          initialSize: "fit",
          Panzoom: { maxScale: 1 },
          protected: false,
          zoom: true,
          zoomOpacity: "auto"
        }
      }), "function" == typeof SuppressedError && SuppressedError;
      const zt = "html", $t = "image", Dt = "map", Rt = "youtube", Ft = "vimeo", jt = "html5video", Bt = (e3, t3 = {}) => {
        const i2 = new URL(e3), s2 = new URLSearchParams(i2.search), n2 = new URLSearchParams();
        for (const [e4, i3] of [...s2, ...Object.entries(t3)]) {
          let t4 = i3 + "";
          if ("t" === e4) {
            let e5 = t4.match(/((\d*)m)?(\d*)s?/);
            e5 && n2.set(
              "start",
              60 * parseInt(e5[2] || "0") + parseInt(e5[3] || "0") + ""
            );
          } else n2.set(e4, t4);
        }
        let o2 = n2 + "", a2 = e3.match(/#t=((.*)?\d+s)/);
        return a2 && (o2 += `#t=${a2[1]}`), o2;
      }, Nt = [
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
        "vimeo"
      ];
      class Ht extends tt {
        onBeforeInitSlide(e3, t3, i2) {
          this.processType(i2);
        }
        onCreateSlide(e3, t3, i2) {
          this.setContent(i2);
        }
        onClearContent(e3, t3) {
          t3.xhr && (t3.xhr.abort(), t3.xhr = null);
          const i2 = t3.iframeEl;
          i2 && (i2.onload = i2.onerror = null, i2.src = "//about:blank", t3.iframeEl = null);
          const s2 = t3.contentEl, n2 = t3.placeholderEl;
          if ("inline" === t3.type && s2 && n2)
            s2.classList.remove("fancybox__content"), "none" !== s2.style.display && (s2.style.display = "none"), n2.parentNode && n2.parentNode.insertBefore(s2, n2), n2.remove(), t3.contentEl = void 0, t3.placeholderEl = void 0;
          else
            for (; t3.el && t3.el.firstChild; ) t3.el.removeChild(t3.el.firstChild);
        }
        onSelectSlide(e3, t3, i2) {
          i2.state === St.Ready && this.playVideo();
        }
        onUnselectSlide(e3, t3, i2) {
          var s2, n2;
          if (i2.type === jt) {
            try {
              null === (n2 = null === (s2 = i2.el) || void 0 === s2 ? void 0 : s2.querySelector("video")) || void 0 === n2 || n2.pause();
            } catch (e4) {
            }
            return;
          }
          let o2;
          i2.type === Ft ? o2 = { method: "pause", value: "true" } : i2.type === Rt && (o2 = { event: "command", func: "pauseVideo" }), o2 && i2.iframeEl && i2.iframeEl.contentWindow && i2.iframeEl.contentWindow.postMessage(JSON.stringify(o2), "*"), i2.poller && clearTimeout(i2.poller);
        }
        onDone(e3, t3) {
          e3.isCurrentSlide(t3) && !e3.isClosing() && this.playVideo();
        }
        onRefresh(e3, t3) {
          t3.slides.forEach((e4) => {
            e4.el && (this.resizeIframe(e4), this.setAspectRatio(e4));
          });
        }
        onMessage(e3) {
          try {
            let t3 = JSON.parse(e3.data);
            if ("https://player.vimeo.com" === e3.origin) {
              if ("ready" === t3.event)
                for (let t4 of Array.from(
                  document.getElementsByClassName("fancybox__iframe")
                ))
                  t4 instanceof HTMLIFrameElement && t4.contentWindow === e3.source && (t4.dataset.ready = "true");
            } else if (e3.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === t3.event) {
              const e4 = document.getElementById(t3.id);
              e4 && (e4.dataset.ready = "true");
            }
          } catch (e4) {
          }
        }
        loadAjaxContent(e3) {
          const t3 = this.instance.optionFor(e3, "src") || "";
          this.instance.showLoading(e3);
          const i2 = this.instance, s2 = new XMLHttpRequest();
          i2.showLoading(e3), s2.onreadystatechange = function() {
            s2.readyState === XMLHttpRequest.DONE && i2.state === wt.Ready && (i2.hideLoading(e3), 200 === s2.status ? i2.setContent(e3, s2.responseText) : i2.setError(
              e3,
              404 === s2.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"
            ));
          };
          const n2 = e3.ajax || null;
          s2.open(n2 ? "POST" : "GET", t3 + ""), s2.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          ), s2.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s2.send(n2), e3.xhr = s2;
        }
        setInlineContent(e3) {
          let t3 = null;
          if (je(e3.src)) t3 = e3.src;
          else if ("string" == typeof e3.src) {
            const i2 = e3.src.split("#", 2).pop();
            t3 = i2 ? document.getElementById(i2) : null;
          }
          if (t3) {
            if ("clone" === e3.type || t3.closest(".fancybox__slide")) {
              t3 = t3.cloneNode(true);
              const i2 = t3.dataset.animationName;
              i2 && (t3.classList.remove(i2), delete t3.dataset.animationName);
              let s2 = t3.getAttribute("id");
              s2 = s2 ? `${s2}--clone` : `clone-${this.instance.id}-${e3.index}`, t3.setAttribute("id", s2);
            } else if (t3.parentNode) {
              const i2 = document.createElement("div");
              i2.classList.add("fancybox-placeholder"), t3.parentNode.insertBefore(i2, t3), e3.placeholderEl = i2;
            }
            this.instance.setContent(e3, t3);
          } else this.instance.setError(e3, "{{ELEMENT_NOT_FOUND}}");
        }
        setIframeContent(e3) {
          const { src: t3, el: i2 } = e3;
          if (!t3 || "string" != typeof t3 || !i2) return;
          i2.classList.add("is-loading");
          const s2 = this.instance, n2 = document.createElement("iframe");
          n2.className = "fancybox__iframe", n2.setAttribute("id", `fancybox__iframe_${s2.id}_${e3.index}`);
          for (const [t4, i3] of Object.entries(
            this.optionFor(e3, "iframeAttr") || {}
          ))
            n2.setAttribute(t4, i3);
          n2.onerror = () => {
            s2.setError(e3, "{{IFRAME_ERROR}}");
          }, e3.iframeEl = n2;
          const o2 = this.optionFor(e3, "preload");
          if ("iframe" !== e3.type || false === o2)
            return n2.setAttribute("src", e3.src + ""), s2.setContent(e3, n2, false), this.resizeIframe(e3), void s2.revealContent(e3);
          s2.showLoading(e3), n2.onload = () => {
            if (!n2.src.length) return;
            const t4 = "true" !== n2.dataset.ready;
            n2.dataset.ready = "true", this.resizeIframe(e3), t4 ? s2.revealContent(e3) : s2.hideLoading(e3);
          }, n2.setAttribute("src", t3), s2.setContent(e3, n2, false);
        }
        resizeIframe(e3) {
          const { type: t3, iframeEl: i2 } = e3;
          if (t3 === Rt || t3 === Ft) return;
          const s2 = null == i2 ? void 0 : i2.parentElement;
          if (!i2 || !s2) return;
          let n2 = e3.autoSize;
          void 0 === n2 && (n2 = this.optionFor(e3, "autoSize"));
          let o2 = e3.width || 0, a2 = e3.height || 0;
          o2 && a2 && (n2 = false);
          const r2 = s2 && s2.style;
          if (false !== e3.preload && false !== n2 && r2)
            try {
              const e4 = window.getComputedStyle(s2), t4 = parseFloat(e4.paddingLeft) + parseFloat(e4.paddingRight), n3 = parseFloat(e4.paddingTop) + parseFloat(e4.paddingBottom), l2 = i2.contentWindow;
              if (l2) {
                const e5 = l2.document, i3 = e5.getElementsByTagName(zt)[0], s3 = e5.body;
                r2.width = "", s3.style.overflow = "hidden", o2 = o2 || i3.scrollWidth + t4, r2.width = `${o2}px`, s3.style.overflow = "", r2.flex = "0 0 auto", r2.height = `${s3.scrollHeight}px`, a2 = i3.scrollHeight + n3;
              }
            } catch (e4) {
            }
          if (o2 || a2) {
            const e4 = { flex: "0 1 auto", width: "", height: "" };
            o2 && "auto" !== o2 && (e4.width = `${o2}px`), a2 && "auto" !== a2 && (e4.height = `${a2}px`), Object.assign(r2, e4);
          }
        }
        playVideo() {
          const e3 = this.instance.getSlide();
          if (!e3) return;
          const { el: t3 } = e3;
          if (!t3 || !t3.offsetParent) return;
          if (!this.optionFor(e3, "videoAutoplay")) return;
          if (e3.type === jt)
            try {
              const e4 = t3.querySelector("video");
              if (e4) {
                const t4 = e4.play();
                void 0 !== t4 && t4.then(() => {
                }).catch((t5) => {
                  e4.muted = true, e4.play();
                });
              }
            } catch (e4) {
            }
          if (e3.type !== Rt && e3.type !== Ft) return;
          const i2 = () => {
            if (e3.iframeEl && e3.iframeEl.contentWindow) {
              let t4;
              if ("true" === e3.iframeEl.dataset.ready)
                return t4 = e3.type === Rt ? { event: "command", func: "playVideo" } : { method: "play", value: "true" }, t4 && e3.iframeEl.contentWindow.postMessage(JSON.stringify(t4), "*"), void (e3.poller = void 0);
              e3.type === Rt && (t4 = { event: "listening", id: e3.iframeEl.getAttribute("id") }, e3.iframeEl.contentWindow.postMessage(JSON.stringify(t4), "*"));
            }
            e3.poller = setTimeout(i2, 250);
          };
          i2();
        }
        processType(e3) {
          if (e3.html) return e3.type = zt, e3.src = e3.html, void (e3.html = "");
          const t3 = this.instance.optionFor(e3, "src", "");
          if (!t3 || "string" != typeof t3) return;
          let i2 = e3.type, s2 = null;
          if (s2 = t3.match(
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i
          )) {
            const n2 = this.optionFor(e3, Rt), { nocookie: o2 } = n2, a2 = function(e4, t4) {
              var i3 = {};
              for (var s3 in e4)
                Object.prototype.hasOwnProperty.call(e4, s3) && t4.indexOf(s3) < 0 && (i3[s3] = e4[s3]);
              if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
                var n3 = 0;
                for (s3 = Object.getOwnPropertySymbols(e4); n3 < s3.length; n3++)
                  t4.indexOf(s3[n3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, s3[n3]) && (i3[s3[n3]] = e4[s3[n3]]);
              }
              return i3;
            }(n2, ["nocookie"]), r2 = `www.youtube${o2 ? "-nocookie" : ""}.com`, l2 = Bt(t3, a2), c2 = encodeURIComponent(s2[2]);
            e3.videoId = c2, e3.src = `https://${r2}/embed/${c2}?${l2}`, e3.thumbSrc = e3.thumbSrc || `https://i.ytimg.com/vi/${c2}/mqdefault.jpg`, i2 = Rt;
          } else if (s2 = t3.match(
            /^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/
          )) {
            const n2 = Bt(t3, this.optionFor(e3, Ft)), o2 = encodeURIComponent(s2[1]), a2 = s2[4] || "";
            e3.videoId = o2, e3.src = `https://player.vimeo.com/video/${o2}?${a2 ? `h=${a2}${n2 ? "&" : ""}` : ""}${n2}`, i2 = Ft;
          }
          if (!i2 && e3.triggerEl) {
            const t4 = e3.triggerEl.dataset.type;
            Nt.includes(t4) && (i2 = t4);
          }
          i2 || "string" == typeof t3 && ("#" === t3.charAt(0) ? i2 = "inline" : (s2 = t3.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i2 = jt, e3.videoFormat = e3.videoFormat || "video/" + ("ogv" === s2[1] ? "ogg" : s2[1])) : t3.match(
            /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
          ) ? i2 = $t : t3.match(/\.(pdf)((\?|#).*)?$/i) && (i2 = "pdf")), (s2 = t3.match(
            /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i
          )) ? (e3.src = `https://maps.google.${s2[1]}/?ll=${(s2[2] ? s2[2] + "&z=" + Math.floor(parseFloat(s2[3])) + (s2[4] ? s2[4].replace(/^\//, "&") : "") : s2[4] + "").replace(/\?/, "&")}&output=${s2[4] && s2[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, i2 = Dt) : (s2 = t3.match(
            /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i
          )) && (e3.src = `https://maps.google.${s2[1]}/maps?q=${s2[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, i2 = Dt), i2 = i2 || this.instance.option("defaultType"), e3.type = i2, i2 === $t && (e3.thumbSrc = e3.thumbSrc || e3.src);
        }
        setContent(e3) {
          const t3 = this.instance.optionFor(e3, "src") || "";
          if (e3 && e3.type && t3) {
            switch (e3.type) {
              case zt:
                this.instance.setContent(e3, t3);
                break;
              case jt:
                const i2 = this.option("videoTpl");
                i2 && this.instance.setContent(
                  e3,
                  i2.replace(/\{\{src\}\}/gi, t3 + "").replace(
                    /\{\{format\}\}/gi,
                    this.optionFor(e3, "videoFormat") || ""
                  ).replace(/\{\{poster\}\}/gi, e3.poster || e3.thumbSrc || "")
                );
                break;
              case "inline":
              case "clone":
                this.setInlineContent(e3);
                break;
              case "ajax":
                this.loadAjaxContent(e3);
                break;
              case "pdf":
              case Dt:
              case Rt:
              case Ft:
                e3.preload = false;
              case "iframe":
                this.setIframeContent(e3);
            }
            this.setAspectRatio(e3);
          }
        }
        setAspectRatio(e3) {
          const t3 = e3.contentEl;
          if (!(e3.el && t3 && e3.type && [Rt, Ft, jt].includes(e3.type))) return;
          let i2, s2 = e3.width || "auto", n2 = e3.height || "auto";
          if ("auto" === s2 || "auto" === n2) {
            i2 = this.optionFor(e3, "videoRatio");
            const t4 = (i2 + "").match(/(\d+)\s*\/\s?(\d+)/);
            i2 = t4 && t4.length > 2 ? parseFloat(t4[1]) / parseFloat(t4[2]) : parseFloat(i2 + "");
          } else s2 && n2 && (i2 = s2 / n2);
          if (!i2) return;
          t3.style.aspectRatio = "", t3.style.width = "", t3.style.height = "", t3.offsetHeight;
          const o2 = t3.getBoundingClientRect(), a2 = o2.width || 1, r2 = o2.height || 1;
          t3.style.aspectRatio = i2 + "", i2 < a2 / r2 ? (n2 = "auto" === n2 ? r2 : Math.min(r2, n2), t3.style.width = "auto", t3.style.height = `${n2}px`) : (s2 = "auto" === s2 ? a2 : Math.min(a2, s2), t3.style.width = `${s2}px`, t3.style.height = "auto");
        }
        attach() {
          const e3 = this, t3 = e3.instance;
          t3.on("Carousel.beforeInitSlide", e3.onBeforeInitSlide), t3.on("Carousel.createSlide", e3.onCreateSlide), t3.on("Carousel.selectSlide", e3.onSelectSlide), t3.on("Carousel.unselectSlide", e3.onUnselectSlide), t3.on("Carousel.Panzoom.refresh", e3.onRefresh), t3.on("done", e3.onDone), t3.on("clearContent", e3.onClearContent), window.addEventListener("message", e3.onMessage);
        }
        detach() {
          const e3 = this, t3 = e3.instance;
          t3.off("Carousel.beforeInitSlide", e3.onBeforeInitSlide), t3.off("Carousel.createSlide", e3.onCreateSlide), t3.off("Carousel.selectSlide", e3.onSelectSlide), t3.off("Carousel.unselectSlide", e3.onUnselectSlide), t3.off("Carousel.Panzoom.refresh", e3.onRefresh), t3.off("done", e3.onDone), t3.off("clearContent", e3.onClearContent), window.removeEventListener("message", e3.onMessage);
        }
      }
      Object.defineProperty(Ht, "defaults", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: {
          ajax: null,
          autoSize: true,
          iframeAttr: { allow: "autoplay; fullscreen", scrolling: "auto" },
          preload: true,
          videoAutoplay: true,
          videoRatio: 16 / 9,
          videoTpl: `<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">
  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`,
          videoFormat: "",
          vimeo: { byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0 },
          youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 }
        }
      });
      const qt = "play", Wt = "pause", Gt = "ready";
      class Vt extends tt {
        constructor() {
          super(...arguments), Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Gt
          }), Object.defineProperty(this, "inHover", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
          }), Object.defineProperty(this, "timer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "progressBar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          });
        }
        get isActive() {
          return this.state !== Gt;
        }
        onReady(e3) {
          this.option("autoStart") && (e3.isInfinite || e3.page < e3.pages.length - 1) && this.start();
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
          this.inHover = true, this.pause();
        }
        onMouseLeave() {
          var e3;
          this.inHover = false, (null === (e3 = this.instance.panzoom) || void 0 === e3 ? void 0 : e3.isResting) && this.resume();
        }
        onTimerEnd() {
          const e3 = this.instance;
          "play" === this.state && (e3.isInfinite || e3.page !== e3.pages.length - 1 ? e3.slideNext() : e3.slideTo(0));
        }
        removeProgressBar() {
          this.progressBar && (this.progressBar.remove(), this.progressBar = null);
        }
        createProgressBar() {
          var e3;
          if (!this.option("showProgress")) return null;
          this.removeProgressBar();
          const t3 = this.instance, i2 = (null === (e3 = t3.pages[t3.page]) || void 0 === e3 ? void 0 : e3.slides) || [];
          let s2 = this.option("progressParentEl");
          if (s2 || (s2 = (1 === i2.length ? i2[0].el : null) || t3.viewport), !s2)
            return null;
          const n2 = document.createElement("div");
          return Ne(n2, "f-progress"), s2.prepend(n2), this.progressBar = n2, n2.offsetHeight, n2;
        }
        set() {
          const e3 = this, t3 = e3.instance;
          if (t3.pages.length < 2) return;
          if (e3.timer) return;
          const i2 = e3.option("timeout");
          e3.state = qt, Ne(t3.container, "has-autoplay");
          let s2 = e3.createProgressBar();
          s2 && (s2.style.transitionDuration = `${i2}ms`, s2.style.transform = "scaleX(1)"), e3.timer = setTimeout(() => {
            e3.timer = null, e3.inHover || e3.onTimerEnd();
          }, i2), e3.emit("set");
        }
        clear() {
          const e3 = this;
          e3.timer && (clearTimeout(e3.timer), e3.timer = null), e3.removeProgressBar();
        }
        start() {
          const e3 = this;
          if (e3.set(), e3.state !== Gt) {
            if (e3.option("pauseOnHover")) {
              const t3 = e3.instance.container;
              t3.addEventListener("mouseenter", e3.onMouseEnter, false), t3.addEventListener("mouseleave", e3.onMouseLeave, false);
            }
            document.addEventListener(
              "visibilitychange",
              e3.onVisibilityChange,
              false
            ), e3.emit("start");
          }
        }
        stop() {
          const e3 = this, t3 = e3.state, i2 = e3.instance.container;
          e3.clear(), e3.state = Gt, i2.removeEventListener("mouseenter", e3.onMouseEnter, false), i2.removeEventListener("mouseleave", e3.onMouseLeave, false), document.removeEventListener(
            "visibilitychange",
            e3.onVisibilityChange,
            false
          ), Be(i2, "has-autoplay"), t3 !== Gt && e3.emit("stop");
        }
        pause() {
          const e3 = this;
          e3.state === qt && (e3.state = Wt, e3.clear(), e3.emit(Wt));
        }
        resume() {
          const e3 = this, t3 = e3.instance;
          if (t3.isInfinite || t3.page !== t3.pages.length - 1)
            if (e3.state !== qt) {
              if (e3.state === Wt && !e3.inHover) {
                const t4 = new Event("resume", { bubbles: true, cancelable: true });
                e3.emit("resume", t4), t4.defaultPrevented || e3.set();
              }
            } else e3.set();
          else e3.stop();
        }
        toggle() {
          this.state === qt || this.state === Wt ? this.stop() : this.start();
        }
        attach() {
          const e3 = this, t3 = e3.instance;
          t3.on("ready", e3.onReady), t3.on("Panzoom.startAnimation", e3.onChange), t3.on("Panzoom.endAnimation", e3.onSettle), t3.on("Panzoom.touchMove", e3.onChange);
        }
        detach() {
          const e3 = this, t3 = e3.instance;
          t3.off("ready", e3.onReady), t3.off("Panzoom.startAnimation", e3.onChange), t3.off("Panzoom.endAnimation", e3.onSettle), t3.off("Panzoom.touchMove", e3.onChange), e3.stop();
        }
      }
      Object.defineProperty(Vt, "defaults", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: {
          autoStart: true,
          pauseOnHover: true,
          progressParentEl: null,
          showProgress: true,
          timeout: 3e3
        }
      });
      class Xt extends tt {
        constructor() {
          super(...arguments), Object.defineProperty(this, "ref", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          });
        }
        onPrepare(e3) {
          const t3 = e3.carousel;
          if (!t3) return;
          const i2 = e3.container;
          i2 && (t3.options.Autoplay = Le(
            { autoStart: false },
            this.option("Autoplay") || {},
            {
              pauseOnHover: false,
              timeout: this.option("timeout"),
              progressParentEl: () => this.option("progressParentEl") || null,
              on: {
                start: () => {
                  e3.emit("startSlideshow");
                },
                set: (t4) => {
                  var s2;
                  i2.classList.add("has-slideshow"), (null === (s2 = e3.getSlide()) || void 0 === s2 ? void 0 : s2.state) !== St.Ready && t4.pause();
                },
                stop: () => {
                  i2.classList.remove("has-slideshow"), e3.isCompact || e3.endIdle(), e3.emit("endSlideshow");
                },
                resume: (t4, i3) => {
                  var s2, n2, o2;
                  !i3 || !i3.cancelable || (null === (s2 = e3.getSlide()) || void 0 === s2 ? void 0 : s2.state) === St.Ready && (null === (o2 = null === (n2 = e3.carousel) || void 0 === n2 ? void 0 : n2.panzoom) || void 0 === o2 ? void 0 : o2.isResting) || i3.preventDefault();
                }
              }
            }
          ), t3.attachPlugins({ Autoplay: Vt }), this.ref = t3.plugins.Autoplay);
        }
        onReady(e3) {
          const t3 = e3.carousel, i2 = this.ref;
          i2 && t3 && this.option("playOnStart") && (t3.isInfinite || t3.page < t3.pages.length - 1) && i2.start();
        }
        onDone(e3, t3) {
          const i2 = this.ref, s2 = e3.carousel;
          if (!i2 || !s2) return;
          const n2 = t3.panzoom;
          n2 && n2.on("startAnimation", () => {
            e3.isCurrentSlide(t3) && i2.stop();
          }), e3.isCurrentSlide(t3) && i2.resume();
        }
        onKeydown(e3, t3) {
          var i2;
          const s2 = this.ref;
          s2 && t3 === this.option("key") && "BUTTON" !== (null === (i2 = document.activeElement) || void 0 === i2 ? void 0 : i2.nodeName) && s2.toggle();
        }
        attach() {
          const e3 = this, t3 = e3.instance;
          t3.on("Carousel.init", e3.onPrepare), t3.on("Carousel.ready", e3.onReady), t3.on("done", e3.onDone), t3.on("keydown", e3.onKeydown);
        }
        detach() {
          const e3 = this, t3 = e3.instance;
          t3.off("Carousel.init", e3.onPrepare), t3.off("Carousel.ready", e3.onReady), t3.off("done", e3.onDone), t3.off("keydown", e3.onKeydown);
        }
      }
      Object.defineProperty(Xt, "defaults", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: {
          key: " ",
          playOnStart: false,
          progressParentEl: (e3) => {
            var t3;
            return (null === (t3 = e3.instance.container) || void 0 === t3 ? void 0 : t3.querySelector(
              ".fancybox__toolbar [data-fancybox-toggle-slideshow]"
            )) || e3.instance.container;
          },
          timeout: 3e3
        }
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
          hasThumbs: "has-thumbs"
        },
        minCount: 2,
        parentEl: null,
        thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
        type: "modern"
      };
      var Zt;
      !function(e3) {
        e3[e3.Init = 0] = "Init", e3[e3.Ready = 1] = "Ready", e3[e3.Hidden = 2] = "Hidden";
      }(Zt || (Zt = {}));
      const Ut = "isResting", Kt = "thumbWidth", Jt = "thumbHeight", Qt = "thumbClipWidth";
      let ei = class extends tt {
        constructor() {
          super(...arguments), Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "modern"
          }), Object.defineProperty(this, "container", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "track", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "carousel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "thumbWidth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
          }), Object.defineProperty(this, "thumbClipWidth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
          }), Object.defineProperty(this, "thumbHeight", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
          }), Object.defineProperty(this, "thumbGap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
          }), Object.defineProperty(this, "thumbExtraGap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
          }), Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Zt.Init
          });
        }
        get isModern() {
          return "modern" === this.type;
        }
        onInitSlide(e3, t3) {
          const i2 = t3.el ? t3.el.dataset : void 0;
          i2 && (t3.thumbSrc = i2.thumbSrc || t3.thumbSrc || "", t3[Qt] = parseFloat(i2[Qt] || "") || t3[Qt] || 0, t3[Jt] = parseFloat(i2.thumbHeight || "") || t3[Jt] || 0), this.addSlide(t3);
        }
        onInitSlides() {
          this.build();
        }
        onChange() {
          var e3;
          if (!this.isModern) return;
          const t3 = this.container, i2 = this.instance, s2 = i2.panzoom, n2 = this.carousel, o2 = n2 ? n2.panzoom : null, a2 = i2.page;
          if (s2 && n2 && o2) {
            if (s2.isDragging) {
              Be(t3, this.cn(Ut));
              let s3 = (null === (e3 = n2.pages[a2]) || void 0 === e3 ? void 0 : e3.pos) || 0;
              s3 += i2.getProgress(a2) * (this[Qt] + this.thumbGap);
              let r2 = o2.getBounds();
              -1 * s3 > r2.x.min && -1 * s3 < r2.x.max && o2.panTo({ x: -1 * s3, friction: 0.12 });
            } else xe(t3, this.cn(Ut), s2.isResting);
            this.shiftModern();
          }
        }
        onRefresh() {
          this.updateProps();
          for (const e3 of this.instance.slides || []) this.resizeModernSlide(e3);
          this.shiftModern();
        }
        isDisabled() {
          const e3 = this.option("minCount") || 0;
          if (e3) {
            const t4 = this.instance;
            let i2 = 0;
            for (const e4 of t4.slides || []) e4.thumbSrc && i2++;
            if (i2 < e3) return true;
          }
          const t3 = this.option("type");
          return ["modern", "classic"].indexOf(t3) < 0;
        }
        getThumb(e3) {
          const t3 = this.option("thumbTpl") || "";
          return {
            html: this.instance.localize(t3, [
              ["%i", e3.index],
              ["%d", e3.index + 1],
              [
                "%s",
                e3.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              ]
            ])
          };
        }
        addSlide(e3) {
          const t3 = this.carousel;
          t3 && t3.addSlide(e3.index, this.getThumb(e3));
        }
        getSlides() {
          const e3 = [];
          for (const t3 of this.instance.slides || []) e3.push(this.getThumb(t3));
          return e3;
        }
        resizeModernSlide(e3) {
          this.isModern && (e3[Kt] = e3[Qt] && e3[Jt] ? Math.round(this[Jt] * (e3[Qt] / e3[Jt])) : this[Kt]);
        }
        updateProps() {
          const e3 = this.container;
          if (!e3) return;
          const t3 = (t4) => parseFloat(getComputedStyle(e3).getPropertyValue("--f-thumb-" + t4)) || 0;
          this.thumbGap = t3("gap"), this.thumbExtraGap = t3("extra-gap"), this[Kt] = t3("width") || 40, this[Qt] = t3("clip-width") || 40, this[Jt] = t3("height") || 40;
        }
        build() {
          const e3 = this;
          if (e3.state !== Zt.Init) return;
          if (e3.isDisabled()) return void e3.emit("disabled");
          const t3 = e3.instance, i2 = t3.container, s2 = e3.getSlides(), n2 = e3.option("type");
          e3.type = n2;
          const o2 = e3.option("parentEl"), a2 = e3.cn("container"), r2 = e3.cn("track");
          let l2 = null == o2 ? void 0 : o2.querySelector("." + a2);
          l2 || (l2 = document.createElement("div"), Ne(l2, a2), o2 ? o2.appendChild(l2) : i2.after(l2)), Ne(l2, `is-${n2}`), Ne(i2, e3.cn("hasThumbs")), e3.container = l2, e3.updateProps();
          let c2 = l2.querySelector("." + r2);
          c2 || (c2 = document.createElement("div"), Ne(c2, e3.cn("track")), l2.appendChild(c2)), e3.track = c2;
          const d2 = Le(
            {},
            {
              track: c2,
              infinite: false,
              center: true,
              fill: "classic" === n2,
              dragFree: true,
              slidesPerPage: 1,
              transition: false,
              preload: 0.25,
              friction: 0.12,
              Panzoom: { maxVelocity: 0 },
              Dots: false,
              Navigation: false,
              classes: {
                container: "f-thumbs",
                viewport: "f-thumbs__viewport",
                track: "f-thumbs__track",
                slide: "f-thumbs__slide"
              }
            },
            e3.option("Carousel") || {},
            { Sync: { target: t3 }, slides: s2 }
          ), h2 = new t3.constructor(l2, d2);
          h2.on("createSlide", (t4, i3) => {
            e3.setProps(i3.index), e3.emit("createSlide", i3, i3.el);
          }), h2.on("ready", () => {
            e3.shiftModern(), e3.emit("ready");
          }), h2.on("refresh", () => {
            e3.shiftModern();
          }), h2.on("Panzoom.click", (t4, i3, s3) => {
            e3.onClick(s3);
          }), e3.carousel = h2, e3.state = Zt.Ready;
        }
        onClick(e3) {
          e3.preventDefault(), e3.stopPropagation();
          const t3 = this.instance, { pages: i2, page: s2 } = t3, n2 = (e4) => {
            if (e4) {
              const t4 = e4.closest("[data-carousel-index]");
              if (t4)
                return [parseInt(t4.dataset.carouselIndex || "", 10) || 0, t4];
            }
            return [-1, void 0];
          }, o2 = (e4, t4) => {
            const i3 = document.elementFromPoint(e4, t4);
            return i3 ? n2(i3) : [-1, void 0];
          };
          let [a2, r2] = n2(e3.target);
          if (a2 > -1) return;
          const l2 = this[Qt], c2 = e3.clientX, d2 = e3.clientY;
          let [h2, u2] = o2(c2 - l2, d2), [p2, f2] = o2(c2 + l2, d2);
          u2 && f2 ? (a2 = Math.abs(c2 - u2.getBoundingClientRect().right) < Math.abs(c2 - f2.getBoundingClientRect().left) ? h2 : p2, a2 === s2 && (a2 = a2 === h2 ? p2 : h2)) : u2 ? a2 = h2 : f2 && (a2 = p2), a2 > -1 && i2[a2] && t3.slideTo(a2);
        }
        getShift(e3) {
          var t3;
          const i2 = this, { instance: s2 } = i2, n2 = i2.carousel;
          if (!s2 || !n2) return 0;
          const o2 = i2[Kt], a2 = i2[Qt], r2 = i2.thumbGap, l2 = i2.thumbExtraGap;
          if (!(null === (t3 = n2.slides[e3]) || void 0 === t3 ? void 0 : t3.el))
            return 0;
          const c2 = 0.5 * (o2 - a2), d2 = s2.pages.length - 1;
          let h2 = s2.getProgress(0), u2 = s2.getProgress(d2), p2 = s2.getProgress(e3, false, true), f2 = 0, g2 = c2 + l2 + r2;
          const m2 = h2 < 0 && h2 > -1, v2 = u2 > 0 && u2 < 1;
          return 0 === e3 ? (f2 = g2 * Math.abs(h2), v2 && 1 === h2 && (f2 -= g2 * Math.abs(u2))) : e3 === d2 ? (f2 = g2 * Math.abs(u2) * -1, m2 && -1 === u2 && (f2 += g2 * Math.abs(h2))) : m2 || v2 ? (f2 = -1 * g2, f2 += g2 * Math.abs(h2), f2 += g2 * (1 - Math.abs(u2))) : f2 = g2 * p2, f2;
        }
        setProps(e3) {
          var t3;
          const i2 = this;
          if (!i2.isModern) return;
          const { instance: s2 } = i2, n2 = i2.carousel;
          if (s2 && n2) {
            const o2 = null === (t3 = n2.slides[e3]) || void 0 === t3 ? void 0 : t3.el;
            if (o2 && o2.childNodes.length) {
              let t4 = ve(1 - Math.abs(s2.getProgress(e3))), n3 = ve(i2.getShift(e3));
              o2.style.setProperty("--progress", t4 ? t4 + "" : ""), o2.style.setProperty("--shift", n3 + "");
            }
          }
        }
        shiftModern() {
          const e3 = this;
          if (!e3.isModern) return;
          const { instance: t3, track: i2 } = e3, s2 = t3.panzoom, n2 = e3.carousel;
          if (!(t3 && i2 && s2 && n2)) return;
          if (s2.state === _e.Init || s2.state === _e.Destroy) return;
          for (const i3 of t3.slides) e3.setProps(i3.index);
          let o2 = (e3[Qt] + e3.thumbGap) * (n2.slides.length || 0);
          i2.style.setProperty("--width", o2 + "");
        }
        cleanup() {
          const e3 = this;
          e3.carousel && e3.carousel.destroy(), e3.carousel = null, e3.container && e3.container.remove(), e3.container = null, e3.track && e3.track.remove(), e3.track = null, e3.state = Zt.Init, Be(e3.instance.container, e3.cn("hasThumbs"));
        }
        attach() {
          const e3 = this, t3 = e3.instance;
          t3.on("initSlide", e3.onInitSlide), t3.state === Je.Init ? t3.on("initSlides", e3.onInitSlides) : e3.onInitSlides(), t3.on(["change", "Panzoom.afterTransform"], e3.onChange), t3.on("Panzoom.refresh", e3.onRefresh);
        }
        detach() {
          const e3 = this, t3 = e3.instance;
          t3.off("initSlide", e3.onInitSlide), t3.off("initSlides", e3.onInitSlides), t3.off(["change", "Panzoom.afterTransform"], e3.onChange), t3.off("Panzoom.refresh", e3.onRefresh), e3.cleanup();
        }
      };
      Object.defineProperty(ei, "defaults", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: Yt
      });
      const ti = Object.assign(Object.assign({}, Yt), {
        key: "t",
        showOnStart: true,
        parentEl: null
      }), ii = "is-masked", si = "aria-hidden";
      class ni extends tt {
        constructor() {
          super(...arguments), Object.defineProperty(this, "ref", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "hidden", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
          });
        }
        get isEnabled() {
          const e3 = this.ref;
          return e3 && !e3.isDisabled();
        }
        get isHidden() {
          return this.hidden;
        }
        onClick(e3, t3) {
          t3.stopPropagation();
        }
        onCreateSlide(e3, t3) {
          var i2, s2, n2;
          const o2 = (null === (n2 = null === (s2 = null === (i2 = this.instance) || void 0 === i2 ? void 0 : i2.carousel) || void 0 === s2 ? void 0 : s2.slides[t3.index]) || void 0 === n2 ? void 0 : n2.type) || "", a2 = t3.el;
          if (a2 && o2) {
            let e4 = `for-${o2}`;
            ["video", "youtube", "vimeo", "html5video"].includes(o2) && (e4 += " for-video"), Ne(a2, e4);
          }
        }
        onInit() {
          var e3;
          const t3 = this, i2 = t3.instance, s2 = i2.carousel;
          if (t3.ref || !s2) return;
          const n2 = t3.option("parentEl") || i2.footer || i2.container;
          if (!n2) return;
          const o2 = Le({}, t3.options, {
            parentEl: n2,
            classes: { container: "f-thumbs fancybox__thumbs" },
            Carousel: { Sync: { friction: i2.option("Carousel.friction") || 0 } },
            on: {
              ready: (e4) => {
                const i3 = e4.container;
                i3 && this.hidden && (t3.refresh(), i3.style.transition = "none", t3.hide(), i3.offsetHeight, queueMicrotask(() => {
                  i3.style.transition = "", t3.show();
                }));
              }
            }
          });
          o2.Carousel = o2.Carousel || {}, o2.Carousel.on = Le(
            (null === (e3 = t3.options.Carousel) || void 0 === e3 ? void 0 : e3.on) || {},
            { click: this.onClick, createSlide: this.onCreateSlide }
          ), s2.options.Thumbs = o2, s2.attachPlugins({ Thumbs: ei }), t3.ref = s2.plugins.Thumbs, t3.option("showOnStart") || (t3.ref.state = Zt.Hidden, t3.hidden = true);
        }
        onResize() {
          var e3;
          const t3 = null === (e3 = this.ref) || void 0 === e3 ? void 0 : e3.container;
          t3 && (t3.style.maxHeight = "");
        }
        onKeydown(e3, t3) {
          const i2 = this.option("key");
          i2 && i2 === t3 && this.toggle();
        }
        toggle() {
          const e3 = this.ref;
          if (e3 && !e3.isDisabled())
            return e3.state === Zt.Hidden ? (e3.state = Zt.Init, void e3.build()) : void (this.hidden ? this.show() : this.hide());
        }
        show() {
          const e3 = this.ref;
          if (!e3 || e3.isDisabled()) return;
          const t3 = e3.container;
          t3 && (this.refresh(), t3.offsetHeight, t3.removeAttribute(si), t3.classList.remove(ii), this.hidden = false);
        }
        hide() {
          const e3 = this.ref, t3 = e3 && e3.container;
          t3 && (this.refresh(), t3.offsetHeight, t3.classList.add(ii), t3.setAttribute(si, "true")), this.hidden = true;
        }
        refresh() {
          const e3 = this.ref;
          if (!e3 || !e3.state) return;
          const t3 = e3.container, i2 = (null == t3 ? void 0 : t3.firstChild) || null;
          t3 && i2 && i2.childNodes.length && (t3.style.maxHeight = `${i2.getBoundingClientRect().height}px`);
        }
        attach() {
          const e3 = this, t3 = e3.instance;
          t3.state === wt.Init ? t3.on("Carousel.init", e3.onInit) : e3.onInit(), t3.on("resize", e3.onResize), t3.on("keydown", e3.onKeydown);
        }
        detach() {
          var e3;
          const t3 = this, i2 = t3.instance;
          i2.off("Carousel.init", t3.onInit), i2.off("resize", t3.onResize), i2.off("keydown", t3.onKeydown), null === (e3 = i2.carousel) || void 0 === e3 || e3.detachPlugins(["Thumbs"]), t3.ref = null;
        }
      }
      Object.defineProperty(ni, "defaults", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: ti
      });
      const oi = {
        panLeft: {
          icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
          change: { panX: -100 }
        },
        panRight: {
          icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
          change: { panX: 100 }
        },
        panUp: {
          icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
          change: { panY: -100 }
        },
        panDown: {
          icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
          change: { panY: 100 }
        },
        zoomIn: {
          icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
          action: "zoomIn"
        },
        zoomOut: {
          icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
          action: "zoomOut"
        },
        toggle1to1: {
          icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
          action: "toggleZoom"
        },
        toggleZoom: {
          icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
          action: "toggleZoom"
        },
        iterateZoom: {
          icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
          action: "iterateZoom"
        },
        rotateCCW: {
          icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
          action: "rotateCCW"
        },
        rotateCW: {
          icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
          action: "rotateCW"
        },
        flipX: {
          icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
          action: "flipX"
        },
        flipY: {
          icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
          action: "flipY"
        },
        fitX: {
          icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
          action: "fitX"
        },
        fitY: {
          icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
          action: "fitY"
        },
        reset: {
          icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
          action: "reset"
        },
        toggleFS: {
          icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
          action: "toggleFS"
        }
      };
      var ai;
      !function(e3) {
        e3[e3.Init = 0] = "Init", e3[e3.Ready = 1] = "Ready", e3[e3.Disabled = 2] = "Disabled";
      }(ai || (ai = {}));
      const ri = {
        tabindex: "-1",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      }, li = "has-toolbar", ci = "fancybox__toolbar";
      class di extends tt {
        constructor() {
          super(...arguments), Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ai.Init
          }), Object.defineProperty(this, "container", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          });
        }
        onReady(e3) {
          var t3;
          if (!e3.carousel) return;
          let i2 = this.option("display"), s2 = this.option("absolute"), n2 = this.option("enabled");
          if ("auto" === n2) {
            const e4 = this.instance.carousel;
            let t4 = 0;
            if (e4)
              for (const i3 of e4.slides) (i3.panzoom || "image" === i3.type) && t4++;
            t4 || (n2 = false);
          }
          n2 || (i2 = void 0);
          let o2 = 0;
          const a2 = { left: [], middle: [], right: [] };
          if (i2)
            for (const e4 of ["left", "middle", "right"])
              for (const s3 of i2[e4]) {
                const i3 = this.createEl(s3);
                i3 && (null === (t3 = a2[e4]) || void 0 === t3 || t3.push(i3), o2++);
              }
          let r2 = null;
          if (o2 && (r2 = this.createContainer()), r2) {
            for (const [e4, t4] of Object.entries(a2)) {
              const i3 = document.createElement("div");
              Ne(i3, ci + "__column is-" + e4);
              for (const e5 of t4) i3.appendChild(e5);
              "auto" !== s2 || "middle" !== e4 || t4.length || (s2 = true), r2.appendChild(i3);
            }
            true === s2 && Ne(r2, "is-absolute"), this.state = ai.Ready, this.onRefresh();
          } else this.state = ai.Disabled;
        }
        onClick(e3) {
          var t3, i2;
          const s2 = this.instance, n2 = s2.getSlide(), o2 = null == n2 ? void 0 : n2.panzoom, a2 = e3.target, r2 = a2 && je(a2) ? a2.dataset : null;
          if (!r2) return;
          if (void 0 !== r2.fancyboxToggleThumbs)
            return e3.preventDefault(), e3.stopPropagation(), void (null === (t3 = s2.plugins.Thumbs) || void 0 === t3 || t3.toggle());
          if (void 0 !== r2.fancyboxToggleFullscreen)
            return e3.preventDefault(), e3.stopPropagation(), void this.instance.toggleFullscreen();
          if (void 0 !== r2.fancyboxToggleSlideshow) {
            e3.preventDefault(), e3.stopPropagation();
            const t4 = null === (i2 = s2.carousel) || void 0 === i2 ? void 0 : i2.plugins.Autoplay;
            let n3 = t4.isActive;
            return o2 && "mousemove" === o2.panMode && !n3 && o2.reset(), void (n3 ? t4.stop() : t4.start());
          }
          const l2 = r2.panzoomAction, c2 = r2.panzoomChange;
          if ((c2 || l2) && (e3.preventDefault(), e3.stopPropagation()), c2) {
            let t4 = {};
            try {
              t4 = JSON.parse(c2);
            } catch (e4) {
            }
            o2 && o2.applyChange(t4);
          } else l2 && o2 && o2[l2] && o2[l2]();
        }
        onChange() {
          this.onRefresh();
        }
        onRefresh() {
          if (this.instance.isClosing()) return;
          const e3 = this.container;
          if (!e3) return;
          const t3 = this.instance.getSlide();
          if (!t3 || t3.state !== St.Ready) return;
          const i2 = t3 && !t3.error && t3.panzoom;
          for (const t4 of e3.querySelectorAll("[data-panzoom-action]"))
            i2 ? (t4.removeAttribute("disabled"), t4.removeAttribute("tabindex")) : (t4.setAttribute("disabled", ""), t4.setAttribute("tabindex", "-1"));
          let s2 = i2 && i2.canZoomIn(), n2 = i2 && i2.canZoomOut();
          for (const t4 of e3.querySelectorAll('[data-panzoom-action="zoomIn"]'))
            s2 ? (t4.removeAttribute("disabled"), t4.removeAttribute("tabindex")) : (t4.setAttribute("disabled", ""), t4.setAttribute("tabindex", "-1"));
          for (const t4 of e3.querySelectorAll('[data-panzoom-action="zoomOut"]'))
            n2 ? (t4.removeAttribute("disabled"), t4.removeAttribute("tabindex")) : (t4.setAttribute("disabled", ""), t4.setAttribute("tabindex", "-1"));
          for (const t4 of e3.querySelectorAll(
            '[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]'
          )) {
            n2 || s2 ? (t4.removeAttribute("disabled"), t4.removeAttribute("tabindex")) : (t4.setAttribute("disabled", ""), t4.setAttribute("tabindex", "-1"));
            const e4 = t4.querySelector("g");
            e4 && (e4.style.display = s2 ? "" : "none");
          }
        }
        onDone(e3, t3) {
          var i2;
          null === (i2 = t3.panzoom) || void 0 === i2 || i2.on("afterTransform", () => {
            this.instance.isCurrentSlide(t3) && this.onRefresh();
          }), this.instance.isCurrentSlide(t3) && this.onRefresh();
        }
        createContainer() {
          const e3 = this.instance.container;
          if (!e3) return null;
          const t3 = this.option("parentEl") || e3;
          let i2 = t3.querySelector("." + ci);
          return i2 || (i2 = document.createElement("div"), Ne(i2, ci), t3.prepend(i2)), i2.addEventListener("click", this.onClick, {
            passive: false,
            capture: true
          }), e3 && Ne(e3, li), this.container = i2, i2;
        }
        createEl(e3) {
          const t3 = this.instance, i2 = t3.carousel;
          if (!i2) return null;
          if ("toggleFS" === e3) return null;
          if ("fullscreen" === e3 && !bt()) return null;
          let s2 = null;
          const n2 = i2.slides.length || 0;
          let o2 = 0, a2 = 0;
          for (const e4 of i2.slides)
            (e4.panzoom || "image" === e4.type) && o2++, ("image" === e4.type || e4.downloadSrc) && a2++;
          if (n2 < 2 && ["infobar", "prev", "next"].includes(e3)) return s2;
          if (void 0 !== oi[e3] && !o2) return null;
          if ("download" === e3 && !a2) return null;
          if ("thumbs" === e3) {
            const e4 = t3.plugins.Thumbs;
            if (!e4 || !e4.isEnabled) return null;
          }
          if ("slideshow" === e3 && (!i2.plugins.Autoplay || n2 < 2)) return null;
          if (void 0 !== oi[e3]) {
            const t4 = oi[e3];
            s2 = document.createElement("button"), s2.setAttribute(
              "title",
              this.instance.localize(`{{${e3.toUpperCase()}}}`)
            ), Ne(s2, "f-button"), t4.action && (s2.dataset.panzoomAction = t4.action), t4.change && (s2.dataset.panzoomChange = JSON.stringify(t4.change)), s2.appendChild(we(this.instance.localize(t4.icon)));
          } else {
            const t4 = (this.option("items") || [])[e3];
            t4 && (s2 = we(this.instance.localize(t4.tpl)), "function" == typeof t4.click && s2.addEventListener("click", (e4) => {
              e4.preventDefault(), e4.stopPropagation(), "function" == typeof t4.click && t4.click.call(this, this, e4);
            }));
          }
          const r2 = null == s2 ? void 0 : s2.querySelector("svg");
          if (r2)
            for (const [e4, t4] of Object.entries(ri))
              r2.getAttribute(e4) || r2.setAttribute(e4, String(t4));
          return s2;
        }
        removeContainer() {
          const e3 = this.container;
          e3 && e3.remove(), this.container = null, this.state = ai.Disabled;
          const t3 = this.instance.container;
          t3 && Be(t3, li);
        }
        attach() {
          const e3 = this, t3 = e3.instance;
          t3.on("Carousel.initSlides", e3.onReady), t3.on("done", e3.onDone), t3.on(["reveal", "Carousel.change"], e3.onChange), e3.onReady(e3.instance);
        }
        detach() {
          const e3 = this, t3 = e3.instance;
          t3.off("Carousel.initSlides", e3.onReady), t3.off("done", e3.onDone), t3.off(["reveal", "Carousel.change"], e3.onChange), e3.removeContainer();
        }
      }
      Object.defineProperty(di, "defaults", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: {
          absolute: "auto",
          display: {
            left: ["infobar"],
            middle: [],
            right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"]
          },
          enabled: "auto",
          items: {
            infobar: {
              tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>'
            },
            download: {
              tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>'
            },
            prev: {
              tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>'
            },
            next: {
              tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>'
            },
            slideshow: {
              tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'
            },
            fullscreen: {
              tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'
            },
            thumbs: {
              tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>'
            },
            close: {
              tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>'
            }
          },
          parentEl: null
        }
      });
      const hi = {
        Hash: class extends tt {
          onReady() {
            Et = false;
          }
          onChange(e3) {
            Tt && clearTimeout(Tt);
            const { hash: t3 } = Pt(), { hash: i2 } = Mt(), s2 = e3.isOpeningSlide(e3.getSlide());
            s2 && (xt = i2 === t3 ? "" : i2), t3 && t3 !== i2 && (Tt = setTimeout(() => {
              try {
                if (e3.state === wt.Ready) {
                  let e4 = "replaceState";
                  s2 && !Ct && (e4 = "pushState", Ct = true), window.history[e4](
                    {},
                    document.title,
                    window.location.pathname + window.location.search + t3
                  );
                }
              } catch (e4) {
              }
            }, 300));
          }
          onClose(e3) {
            if (Tt && clearTimeout(Tt), !Et && Ct)
              return Ct = false, Et = false, void window.history.back();
            if (!Et)
              try {
                window.history.replaceState(
                  {},
                  document.title,
                  window.location.pathname + window.location.search + (xt || "")
                );
              } catch (e4) {
              }
          }
          attach() {
            const e3 = this.instance;
            e3.on("ready", this.onReady), e3.on(["Carousel.ready", "Carousel.change"], this.onChange), e3.on("close", this.onClose);
          }
          detach() {
            const e3 = this.instance;
            e3.off("ready", this.onReady), e3.off(["Carousel.ready", "Carousel.change"], this.onChange), e3.off("close", this.onClose);
          }
          static parseURL() {
            return Mt();
          }
          static startFromUrl() {
            Ot();
          }
          static destroy() {
            window.removeEventListener("hashchange", At, false);
          }
        },
        Html: Ht,
        Images: _t,
        Slideshow: Xt,
        Thumbs: ni,
        Toolbar: di
      }, ui = "with-fancybox", pi = "hide-scrollbar", fi = "--fancybox-scrollbar-compensate", gi = "--fancybox-body-margin", mi = "aria-hidden", vi = "is-using-tab", bi = "is-animated", yi = "is-compact", wi = "is-loading", Si = "is-opening", xi = "has-caption", Ei = "disabled", Ci = "tabindex", Ti = "download", Pi = "href", Mi = "src", Oi = (e3) => "string" == typeof e3, Li = function() {
        var e3 = window.getSelection();
        return !!e3 && "Range" === e3.type;
      };
      let Ai, ki = null, Ii = null, _i = 0, zi = 0;
      const $i = /* @__PURE__ */ new Map();
      let Di = 0;
      class Ri extends Ie {
        get isIdle() {
          return this.idle;
        }
        get isCompact() {
          return this.option("compact");
        }
        constructor(e3 = [], t3 = {}, i2 = {}) {
          super(t3), Object.defineProperty(this, "userSlides", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
          }), Object.defineProperty(this, "userPlugins", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
          }), Object.defineProperty(this, "idle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
          }), Object.defineProperty(this, "idleTimer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "clickTimer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "pwt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
          }), Object.defineProperty(this, "ignoreFocusChange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
          }), Object.defineProperty(this, "startedFs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
          }), Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: wt.Init
          }), Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
          }), Object.defineProperty(this, "container", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "caption", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "footer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "carousel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "lastFocus", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
          }), Object.defineProperty(this, "prevMouseMoveEvent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          }), Ai || (Ai = bt()), this.id = t3.id || ++Di, $i.set(this.id, this), this.userSlides = e3, this.userPlugins = i2, queueMicrotask(() => {
            this.init();
          });
        }
        init() {
          if (this.state === wt.Destroy) return;
          this.state = wt.Init, this.attachPlugins(
            Object.assign(Object.assign({}, Ri.Plugins), this.userPlugins)
          ), this.emit("init"), this.emit("attachPlugins"), true === this.option("hideScrollbar") && (() => {
            if (!ft) return;
            const e4 = document, t3 = e4.body, i2 = e4.documentElement;
            if (t3.classList.contains(pi)) return;
            let s2 = window.innerWidth - i2.getBoundingClientRect().width;
            const n2 = parseFloat(window.getComputedStyle(t3).marginRight);
            s2 < 0 && (s2 = 0), i2.style.setProperty(fi, `${s2}px`), n2 && t3.style.setProperty(gi, `${n2}px`), t3.classList.add(pi);
          })(), this.initLayout(), this.scale();
          const e3 = () => {
            this.initCarousel(this.userSlides), this.state = wt.Ready, this.attachEvents(), this.emit("ready"), setTimeout(() => {
              this.container && this.container.setAttribute(mi, "false");
            }, 16);
          };
          this.option("Fullscreen.autoStart") && Ai && !Ai.isFullscreen() ? Ai.request().then(() => {
            this.startedFs = true, e3();
          }).catch(() => e3()) : e3();
        }
        initLayout() {
          var e3, t3;
          const i2 = this.option("parentEl") || document.body, s2 = we(this.localize(this.option("tpl.main") || ""));
          s2 && (s2.setAttribute("id", `fancybox-${this.id}`), s2.setAttribute("aria-label", this.localize("{{MODAL}}")), s2.classList.toggle(yi, this.isCompact), Ne(s2, this.option("mainClass") || ""), Ne(s2, Si), this.container = s2, this.footer = s2.querySelector(".fancybox__footer"), i2.appendChild(s2), Ne(document.documentElement, ui), ki && Ii || (ki = document.createElement("span"), Ne(ki, "fancybox-focus-guard"), ki.setAttribute(Ci, "0"), ki.setAttribute(mi, "true"), ki.setAttribute("aria-label", "Focus guard"), Ii = ki.cloneNode(), null === (e3 = s2.parentElement) || void 0 === e3 || e3.insertBefore(ki, s2), null === (t3 = s2.parentElement) || void 0 === t3 || t3.append(Ii)), s2.addEventListener("mousedown", (e4) => {
            _i = e4.pageX, zi = e4.pageY, Be(s2, vi);
          }), this.option("animated") && (Ne(s2, bi), setTimeout(() => {
            this.isClosing() || Be(s2, bi);
          }, 350)), this.emit("initLayout"));
        }
        initCarousel(e3) {
          const t3 = this.container;
          if (!t3) return;
          const i2 = t3.querySelector(".fancybox__carousel");
          if (!i2) return;
          const s2 = this.carousel = new ut(
            i2,
            Le(
              {},
              {
                slides: e3,
                transition: "fade",
                Panzoom: {
                  lockAxis: this.option("dragToClose") ? "xy" : "x",
                  infinite: !!this.option("dragToClose") && "y"
                },
                Dots: false,
                Navigation: {
                  classes: {
                    container: "fancybox__nav",
                    button: "f-button",
                    isNext: "is-next",
                    isPrev: "is-prev"
                  }
                },
                initialPage: this.option("startIndex"),
                l10n: this.option("l10n")
              },
              this.option("Carousel") || {}
            )
          );
          s2.on("*", (e4, t4, ...i3) => {
            this.emit(`Carousel.${t4}`, e4, ...i3);
          }), s2.on(["ready", "change"], () => {
            this.manageCaption();
          }), this.on("Carousel.removeSlide", (e4, t4, i3) => {
            this.clearContent(i3), i3.state = void 0;
          }), s2.on("Panzoom.touchStart", () => {
            var e4, t4;
            this.isCompact || this.endIdle(), (null === (e4 = document.activeElement) || void 0 === e4 ? void 0 : e4.closest(".f-thumbs")) && (null === (t4 = this.container) || void 0 === t4 || t4.focus());
          }), s2.on("settle", () => {
            this.idleTimer || this.isCompact || !this.option("idle") || this.setIdle(), this.option("autoFocus") && !this.isClosing && this.checkFocus();
          }), this.option("dragToClose") && (s2.on("Panzoom.afterTransform", (e4, t4) => {
            const i3 = this.getSlide();
            if (i3 && be(i3.el)) return;
            const s3 = this.container;
            if (s3) {
              const e5 = Math.abs(t4.current.f), i4 = e5 < 1 ? "" : Math.max(
                0.5,
                Math.min(1, 1 - e5 / t4.contentRect.fitHeight * 1.5)
              );
              s3.style.setProperty("--fancybox-ts", i4 ? "0s" : ""), s3.style.setProperty("--fancybox-opacity", i4 + "");
            }
          }), s2.on("Panzoom.touchEnd", (e4, t4, i3) => {
            var s3;
            const n2 = this.getSlide();
            if (n2 && be(n2.el)) return;
            if (t4.isMobile && document.activeElement && -1 !== ["TEXTAREA", "INPUT"].indexOf(
              null === (s3 = document.activeElement) || void 0 === s3 ? void 0 : s3.nodeName
            ))
              return;
            const o2 = Math.abs(t4.dragOffset.y);
            "y" === t4.lockedAxis && (o2 >= 200 || o2 >= 50 && t4.dragOffset.time < 300) && (i3 && i3.cancelable && i3.preventDefault(), this.close(
              i3,
              "f-throwOut" + (t4.current.f < 0 ? "Up" : "Down")
            ));
          })), s2.on("change", (e4) => {
            var t4;
            let i3 = null === (t4 = this.getSlide()) || void 0 === t4 ? void 0 : t4.triggerEl;
            if (i3) {
              const t5 = new CustomEvent("slideTo", {
                bubbles: true,
                cancelable: true,
                detail: e4.page
              });
              i3.dispatchEvent(t5);
            }
          }), s2.on(["refresh", "change"], (e4) => {
            const t4 = this.container;
            if (!t4) return;
            for (const i4 of t4.querySelectorAll("[data-fancybox-current-index]"))
              i4.innerHTML = e4.page + 1;
            for (const i4 of t4.querySelectorAll("[data-fancybox-count]"))
              i4.innerHTML = e4.pages.length;
            if (!e4.isInfinite) {
              for (const i4 of t4.querySelectorAll("[data-fancybox-next]"))
                e4.page < e4.pages.length - 1 ? (i4.removeAttribute(Ei), i4.removeAttribute(Ci)) : (i4.setAttribute(Ei, ""), i4.setAttribute(Ci, "-1"));
              for (const i4 of t4.querySelectorAll("[data-fancybox-prev]"))
                e4.page > 0 ? (i4.removeAttribute(Ei), i4.removeAttribute(Ci)) : (i4.setAttribute(Ei, ""), i4.setAttribute(Ci, "-1"));
            }
            const i3 = this.getSlide();
            if (!i3) return;
            let s3 = i3.downloadSrc || "";
            s3 || "image" !== i3.type || i3.error || !Oi(i3[Mi]) || (s3 = i3[Mi]);
            for (const e5 of t4.querySelectorAll("[data-fancybox-download]")) {
              const t5 = i3.downloadFilename;
              s3 ? (e5.removeAttribute(Ei), e5.removeAttribute(Ci), e5.setAttribute(Pi, s3), e5.setAttribute(Ti, t5 || s3), e5.setAttribute("target", "_blank")) : (e5.setAttribute(Ei, ""), e5.setAttribute(Ci, "-1"), e5.removeAttribute(Pi), e5.removeAttribute(Ti));
            }
          }), this.emit("initCarousel");
        }
        attachEvents() {
          const e3 = this, t3 = e3.container;
          if (!t3) return;
          t3.addEventListener("click", e3.onClick, { passive: false, capture: false }), t3.addEventListener("wheel", e3.onWheel, { passive: false, capture: false }), document.addEventListener("keydown", e3.onKeydown, {
            passive: false,
            capture: true
          }), document.addEventListener(
            "visibilitychange",
            e3.onVisibilityChange,
            false
          ), document.addEventListener("mousemove", e3.onMousemove), e3.option("trapFocus") && document.addEventListener("focus", e3.onFocus, true), window.addEventListener("resize", e3.onResize);
          const i2 = window.visualViewport;
          i2 && (i2.addEventListener("scroll", e3.onResize), i2.addEventListener("resize", e3.onResize));
        }
        detachEvents() {
          const e3 = this, t3 = e3.container;
          if (!t3) return;
          document.removeEventListener("keydown", e3.onKeydown, {
            passive: false,
            capture: true
          }), t3.removeEventListener("wheel", e3.onWheel, {
            passive: false,
            capture: false
          }), t3.removeEventListener("click", e3.onClick, {
            passive: false,
            capture: false
          }), document.removeEventListener("mousemove", e3.onMousemove), window.removeEventListener("resize", e3.onResize);
          const i2 = window.visualViewport;
          i2 && (i2.removeEventListener("resize", e3.onResize), i2.removeEventListener("scroll", e3.onResize)), document.removeEventListener(
            "visibilitychange",
            e3.onVisibilityChange,
            false
          ), document.removeEventListener("focus", e3.onFocus, true);
        }
        scale() {
          const e3 = this.container;
          if (!e3) return;
          const t3 = window.visualViewport, i2 = Math.max(1, (null == t3 ? void 0 : t3.scale) || 1);
          let s2 = "", n2 = "", o2 = "";
          if (t3 && i2 > 1) {
            let e4 = `${t3.offsetLeft}px`, a2 = `${t3.offsetTop}px`;
            s2 = t3.width * i2 + "px", n2 = t3.height * i2 + "px", o2 = `translate3d(${e4}, ${a2}, 0) scale(${1 / i2})`;
          }
          e3.style.transform = o2, e3.style.width = s2, e3.style.height = n2;
        }
        onClick(e3) {
          var t3;
          const { container: i2, isCompact: s2 } = this;
          if (!i2 || this.isClosing()) return;
          !s2 && this.option("idle") && this.resetIdle();
          const n2 = e3.composedPath()[0];
          if (n2.closest(".fancybox-spinner") || n2.closest("[data-fancybox-close]"))
            return e3.preventDefault(), void this.close(e3);
          if (n2.closest("[data-fancybox-prev]"))
            return e3.preventDefault(), void this.prev();
          if (n2.closest("[data-fancybox-next]"))
            return e3.preventDefault(), void this.next();
          if ("click" === e3.type && 0 === e3.detail) return;
          if (Math.abs(e3.pageX - _i) > 30 || Math.abs(e3.pageY - zi) > 30) return;
          const o2 = document.activeElement;
          if (Li() && o2 && i2.contains(o2)) return;
          if (s2 && "image" === (null === (t3 = this.getSlide()) || void 0 === t3 ? void 0 : t3.type))
            return void (this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null) : this.clickTimer = setTimeout(() => {
              this.toggleIdle(), this.clickTimer = null;
            }, 350));
          if (this.emit("click", e3), e3.defaultPrevented) return;
          let a2 = false;
          if (n2.closest(".fancybox__content")) {
            if (o2) {
              if (o2.closest("[contenteditable]")) return;
              n2.matches(mt) || o2.blur();
            }
            if (Li()) return;
            a2 = this.option("contentClick");
          } else
            n2.closest(".fancybox__carousel") && !n2.matches(mt) && (a2 = this.option("backdropClick"));
          "close" === a2 ? (e3.preventDefault(), this.close(e3)) : "next" === a2 ? (e3.preventDefault(), this.next()) : "prev" === a2 && (e3.preventDefault(), this.prev());
        }
        onWheel(e3) {
          const t3 = e3.target;
          let i2 = this.option("wheel", e3);
          t3.closest(".fancybox__thumbs") && (i2 = "slide");
          const s2 = "slide" === i2, n2 = [-e3.deltaX || 0, -e3.deltaY || 0, -e3.detail || 0].reduce(function(e4, t4) {
            return Math.abs(t4) > Math.abs(e4) ? t4 : e4;
          }), o2 = Math.max(-1, Math.min(1, n2)), a2 = Date.now();
          this.pwt && a2 - this.pwt < 300 ? s2 && e3.preventDefault() : (this.pwt = a2, this.emit("wheel", e3, o2), e3.defaultPrevented || ("close" === i2 ? (e3.preventDefault(), this.close(e3)) : "slide" === i2 && (ye(t3) || (e3.preventDefault(), this[o2 > 0 ? "prev" : "next"]()))));
        }
        onKeydown(e3) {
          if (!this.isTopmost()) return;
          this.isCompact || !this.option("idle") || this.isClosing() || this.resetIdle();
          const t3 = e3.key, i2 = this.option("keyboard");
          if (!i2) return;
          const s2 = e3.composedPath()[0], n2 = document.activeElement && document.activeElement.classList, o2 = n2 && n2.contains("f-button") || s2.dataset.carouselPage || s2.dataset.carouselIndex;
          if ("Escape" !== t3 && !o2 && je(s2) && (s2.isContentEditable || -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(
            s2.nodeName
          )))
            return;
          if ("Tab" === e3.key ? Ne(this.container, vi) : Be(this.container, vi), e3.ctrlKey || e3.altKey || e3.shiftKey)
            return;
          this.emit("keydown", t3, e3);
          const a2 = i2[t3];
          a2 && "function" == typeof this[a2] && (e3.preventDefault(), this[a2]());
        }
        onResize() {
          const e3 = this.container;
          if (!e3) return;
          const t3 = this.isCompact;
          e3.classList.toggle(yi, t3), this.manageCaption(this.getSlide()), this.isCompact ? this.clearIdle() : this.endIdle(), this.scale(), this.emit("resize");
        }
        onFocus(e3) {
          this.isTopmost() && this.checkFocus(e3);
        }
        onMousemove(e3) {
          this.prevMouseMoveEvent = e3, !this.isCompact && this.option("idle") && this.resetIdle();
        }
        onVisibilityChange() {
          "visible" === document.visibilityState ? this.checkFocus() : this.endIdle();
        }
        manageCloseBtn(e3) {
          const t3 = this.optionFor(e3, "closeButton") || false;
          if ("auto" === t3) {
            const e4 = this.plugins.Toolbar;
            if (e4 && e4.state === ai.Ready) return;
          }
          if (!t3) return;
          if (!e3.contentEl || e3.closeBtnEl) return;
          const i2 = this.option("tpl.closeButton");
          if (i2) {
            const t4 = we(this.localize(i2));
            e3.closeBtnEl = e3.contentEl.appendChild(t4), e3.el && Ne(e3.el, "has-close-btn");
          }
        }
        manageCaption(e3 = void 0) {
          var t3, i2;
          const s2 = "fancybox__caption", n2 = this.container;
          if (!n2) return;
          Be(n2, xi);
          const o2 = this.isCompact || this.option("commonCaption"), a2 = !o2;
          if (this.caption && this.stop(this.caption), a2 && this.caption && (this.caption.remove(), this.caption = null), o2 && !this.caption)
            for (const e4 of (null === (t3 = this.carousel) || void 0 === t3 ? void 0 : t3.slides) || [])
              e4.captionEl && (e4.captionEl.remove(), e4.captionEl = void 0, Be(e4.el, xi), null === (i2 = e4.el) || void 0 === i2 || i2.removeAttribute("aria-labelledby"));
          if (e3 || (e3 = this.getSlide()), !e3 || o2 && !this.isCurrentSlide(e3))
            return;
          const r2 = e3.el;
          let l2 = this.optionFor(e3, "caption", "");
          if (!l2)
            return void (o2 && this.caption && this.animate(this.caption, "f-fadeOut", () => {
              this.caption && (this.caption.innerHTML = "");
            }));
          let c2 = null;
          if (a2) {
            if (c2 = e3.captionEl || null, r2 && !c2) {
              const t4 = s2 + `_${this.id}_${e3.index}`;
              c2 = document.createElement("div"), Ne(c2, s2), c2.setAttribute("id", t4), e3.captionEl = r2.appendChild(c2), Ne(r2, xi), r2.setAttribute("aria-labelledby", t4);
            }
          } else
            c2 = this.caption, c2 || (c2 = n2.querySelector("." + s2)), c2 || (c2 = document.createElement("div"), c2.dataset.fancyboxCaption = "", Ne(c2, s2), (this.footer || n2).prepend(c2)), Ne(n2, xi), this.caption = c2;
          c2 && (c2.innerHTML = "", Oi(l2) || "number" == typeof l2 ? c2.innerHTML = l2 + "" : l2 instanceof HTMLElement && c2.appendChild(l2));
        }
        checkFocus(e3) {
          this.focus(e3);
        }
        focus(e3) {
          var t3;
          if (this.ignoreFocusChange) return;
          const i2 = document.activeElement || null, s2 = (null == e3 ? void 0 : e3.target) || null, n2 = this.container, o2 = null === (t3 = this.carousel) || void 0 === t3 ? void 0 : t3.viewport;
          if (!n2 || !o2) return;
          if (!e3 && i2 && n2.contains(i2)) return;
          const a2 = this.getSlide(), r2 = a2 && a2.state === St.Ready ? a2.el : null;
          if (!r2 || r2.contains(i2) || n2 === i2) return;
          e3 && e3.cancelable && e3.preventDefault(), this.ignoreFocusChange = true;
          const l2 = Array.from(n2.querySelectorAll(mt));
          let c2 = [], d2 = null;
          for (let e4 of l2) {
            const t4 = !e4.offsetParent || !!e4.closest('[aria-hidden="true"]'), i3 = r2 && r2.contains(e4), s3 = !o2.contains(e4);
            if (e4 === n2 || (i3 || s3) && !t4) {
              c2.push(e4);
              const t5 = e4.dataset.origTabindex;
              void 0 !== t5 && t5 && (e4.tabIndex = parseFloat(t5)), e4.removeAttribute("data-orig-tabindex"), !e4.hasAttribute("autoFocus") && d2 || (d2 = e4);
            } else {
              const t5 = void 0 === e4.dataset.origTabindex ? e4.getAttribute("tabindex") || "" : e4.dataset.origTabindex;
              t5 && (e4.dataset.origTabindex = t5), e4.tabIndex = -1;
            }
          }
          let h2 = null;
          e3 ? (!s2 || c2.indexOf(s2) < 0) && (h2 = d2 || n2, c2.length && (i2 === Ii ? h2 = c2[0] : this.lastFocus !== n2 && i2 !== ki || (h2 = c2[c2.length - 1]))) : h2 = a2 && "image" === a2.type ? n2 : d2 || n2, h2 && vt(h2), this.lastFocus = document.activeElement, this.ignoreFocusChange = false;
        }
        next() {
          const e3 = this.carousel;
          e3 && e3.pages.length > 1 && e3.slideNext();
        }
        prev() {
          const e3 = this.carousel;
          e3 && e3.pages.length > 1 && e3.slidePrev();
        }
        jumpTo(...e3) {
          this.carousel && this.carousel.slideTo(...e3);
        }
        isTopmost() {
          var e3;
          return (null === (e3 = Ri.getInstance()) || void 0 === e3 ? void 0 : e3.id) == this.id;
        }
        animate(e3 = null, t3 = "", i2) {
          if (!e3 || !t3) return void (i2 && i2());
          this.stop(e3);
          const s2 = (n2) => {
            n2.target === e3 && e3.dataset.animationName && (e3.removeEventListener("animationend", s2), delete e3.dataset.animationName, i2 && i2(), Be(e3, t3));
          };
          e3.dataset.animationName = t3, e3.addEventListener("animationend", s2), Ne(e3, t3);
        }
        stop(e3) {
          e3 && e3.dispatchEvent(
            new CustomEvent("animationend", {
              bubbles: false,
              cancelable: true,
              currentTarget: e3
            })
          );
        }
        setContent(e3, t3 = "", i2 = true) {
          if (this.isClosing()) return;
          const s2 = e3.el;
          if (!s2) return;
          let n2 = null;
          if (je(t3) ? n2 = t3 : (n2 = we(t3 + ""), je(n2) || (n2 = document.createElement("div"), n2.innerHTML = t3 + "")), ["img", "picture", "iframe", "video", "audio"].includes(
            n2.nodeName.toLowerCase()
          )) {
            const e4 = document.createElement("div");
            e4.appendChild(n2), n2 = e4;
          }
          je(n2) && e3.filter && !e3.error && (n2 = n2.querySelector(e3.filter)), n2 && je(n2) ? (Ne(n2, "fancybox__content"), e3.id && n2.setAttribute("id", e3.id), "none" !== n2.style.display && "none" !== getComputedStyle(n2).getPropertyValue("display") || (n2.style.display = e3.display || this.option("defaultDisplay") || "flex"), s2.classList.add(`has-${e3.error ? "error" : e3.type || "unknown"}`), s2.prepend(n2), e3.contentEl = n2, i2 && this.revealContent(e3), this.manageCloseBtn(e3), this.manageCaption(e3)) : this.setError(e3, "{{ELEMENT_NOT_FOUND}}");
        }
        revealContent(e3, t3) {
          const i2 = e3.el, s2 = e3.contentEl;
          i2 && s2 && (this.emit("reveal", e3), this.hideLoading(e3), e3.state = St.Opening, (t3 = this.isOpeningSlide(e3) ? void 0 === t3 ? this.optionFor(e3, "showClass") : t3 : "f-fadeIn") ? this.animate(s2, t3, () => {
            this.done(e3);
          }) : this.done(e3));
        }
        done(e3) {
          this.isClosing() || (e3.state = St.Ready, this.emit("done", e3), Ne(e3.el, "is-done"), this.isCurrentSlide(e3) && this.option("autoFocus") && queueMicrotask(() => {
            var t3;
            null === (t3 = e3.panzoom) || void 0 === t3 || t3.updateControls(), this.option("autoFocus") && this.focus();
          }), this.isOpeningSlide(e3) && (Be(this.container, Si), !this.isCompact && this.option("idle") && this.setIdle()));
        }
        isCurrentSlide(e3) {
          const t3 = this.getSlide();
          return !(!e3 || !t3) && t3.index === e3.index;
        }
        isOpeningSlide(e3) {
          var t3, i2;
          return null === (null === (t3 = this.carousel) || void 0 === t3 ? void 0 : t3.prevPage) && e3 && e3.index === (null === (i2 = this.getSlide()) || void 0 === i2 ? void 0 : i2.index);
        }
        showLoading(e3) {
          e3.state = St.Loading;
          const t3 = e3.el;
          t3 && (Ne(t3, wi), this.emit("loading", e3), e3.spinnerEl || setTimeout(() => {
            if (!this.isClosing() && !e3.spinnerEl && e3.state === St.Loading) {
              let i2 = we(Fe);
              Ne(i2, "fancybox-spinner"), e3.spinnerEl = i2, t3.prepend(i2), this.animate(i2, "f-fadeIn");
            }
          }, 250));
        }
        hideLoading(e3) {
          const t3 = e3.el;
          if (!t3) return;
          const i2 = e3.spinnerEl;
          this.isClosing() ? null == i2 || i2.remove() : (Be(t3, wi), i2 && this.animate(i2, "f-fadeOut", () => {
            i2.remove();
          }), e3.state === St.Loading && (this.emit("loaded", e3), e3.state = St.Ready));
        }
        setError(e3, t3) {
          if (this.isClosing()) return;
          const i2 = new Event("error", { bubbles: true, cancelable: true });
          if (this.emit("error", i2, e3), i2.defaultPrevented) return;
          e3.error = t3, this.hideLoading(e3), this.clearContent(e3);
          const s2 = document.createElement("div");
          s2.classList.add("fancybox-error"), s2.innerHTML = this.localize(t3 || "<p>{{ERROR}}</p>"), this.setContent(e3, s2);
        }
        clearContent(e3) {
          if (void 0 === e3.state) return;
          this.emit("clearContent", e3), e3.contentEl && (e3.contentEl.remove(), e3.contentEl = void 0);
          const t3 = e3.el;
          t3 && (Be(t3, "has-error"), Be(t3, "has-unknown"), Be(t3, `has-${e3.type || "unknown"}`)), e3.closeBtnEl && e3.closeBtnEl.remove(), e3.closeBtnEl = void 0, e3.captionEl && e3.captionEl.remove(), e3.captionEl = void 0, e3.spinnerEl && e3.spinnerEl.remove(), e3.spinnerEl = void 0;
        }
        getSlide() {
          var e3;
          const t3 = this.carousel;
          return (null === (e3 = null == t3 ? void 0 : t3.pages[null == t3 ? void 0 : t3.page]) || void 0 === e3 ? void 0 : e3.slides[0]) || void 0;
        }
        close(e3, t3) {
          if (this.isClosing()) return;
          const i2 = new Event("shouldClose", { bubbles: true, cancelable: true });
          if (this.emit("shouldClose", i2, e3), i2.defaultPrevented) return;
          e3 && e3.cancelable && (e3.preventDefault(), e3.stopPropagation());
          const s2 = () => {
            this.proceedClose(e3, t3);
          };
          this.startedFs && Ai && Ai.isFullscreen() ? Promise.resolve(Ai.exit()).then(() => s2()) : s2();
        }
        clearIdle() {
          this.idleTimer && clearTimeout(this.idleTimer), this.idleTimer = null;
        }
        setIdle(e3 = false) {
          const t3 = () => {
            this.clearIdle(), this.idle = true, Ne(this.container, "is-idle"), this.emit("setIdle");
          };
          if (this.clearIdle(), !this.isClosing())
            if (e3) t3();
            else {
              const e4 = this.option("idle");
              e4 && (this.idleTimer = setTimeout(t3, e4));
            }
        }
        endIdle() {
          this.clearIdle(), this.idle && !this.isClosing() && (this.idle = false, Be(this.container, "is-idle"), this.emit("endIdle"));
        }
        resetIdle() {
          this.endIdle(), this.setIdle();
        }
        toggleIdle() {
          this.idle ? this.endIdle() : this.setIdle(true);
        }
        toggleFullscreen() {
          Ai && (Ai.isFullscreen() ? Ai.exit() : Ai.request().then(() => {
            this.startedFs = true;
          }));
        }
        isClosing() {
          return [wt.Closing, wt.CustomClosing, wt.Destroy].includes(this.state);
        }
        proceedClose(e3, t3) {
          var i2, s2;
          this.state = wt.Closing, this.clearIdle(), this.detachEvents();
          const n2 = this.container, o2 = this.carousel, a2 = this.getSlide(), r2 = a2 && this.option("placeFocusBack") ? a2.triggerEl || this.option("triggerEl") : null;
          if (r2 && (pt(r2) ? vt(r2) : r2.focus()), n2 && (Be(n2, Si), Ne(n2, "is-closing"), n2.setAttribute(mi, "true"), this.option("animated") && Ne(n2, bi), n2.style.pointerEvents = "none"), o2) {
            o2.clearTransitions(), null === (i2 = o2.panzoom) || void 0 === i2 || i2.destroy(), null === (s2 = o2.plugins.Navigation) || void 0 === s2 || s2.detach();
            for (const e4 of o2.slides) {
              e4.state = St.Closing, this.hideLoading(e4);
              const t4 = e4.contentEl;
              t4 && this.stop(t4);
              const i3 = null == e4 ? void 0 : e4.panzoom;
              i3 && (i3.stop(), i3.detachEvents(), i3.detachObserver()), this.isCurrentSlide(e4) || o2.emit("removeSlide", e4);
            }
          }
          this.emit("close", e3), this.state !== wt.CustomClosing ? (void 0 === t3 && a2 && (t3 = this.optionFor(a2, "hideClass")), t3 && a2 ? (this.animate(a2.contentEl, t3, () => {
            o2 && o2.emit("removeSlide", a2);
          }), setTimeout(() => {
            this.destroy();
          }, 500)) : this.destroy()) : setTimeout(() => {
            this.destroy();
          }, 500);
        }
        destroy() {
          var e3;
          if (this.state === wt.Destroy) return;
          this.state = wt.Destroy, null === (e3 = this.carousel) || void 0 === e3 || e3.destroy();
          const t3 = this.container;
          t3 && t3.remove(), $i.delete(this.id);
          const i2 = Ri.getInstance();
          i2 ? i2.focus() : (ki && (ki.remove(), ki = null), Ii && (Ii.remove(), Ii = null), Be(document.documentElement, ui), (() => {
            if (!ft) return;
            const e4 = document, t4 = e4.body;
            t4.classList.remove(pi), t4.style.setProperty(gi, ""), e4.documentElement.style.setProperty(fi, "");
          })(), this.emit("destroy"));
        }
        static bind(e3, t3, i2) {
          if (!ft) return;
          let s2, n2 = "", o2 = {};
          if (void 0 === e3 ? s2 = document.body : Oi(e3) ? (s2 = document.body, n2 = e3, "object" == typeof t3 && (o2 = t3 || {})) : (s2 = e3, Oi(t3) && (n2 = t3), "object" == typeof i2 && (o2 = i2 || {})), !s2 || !je(s2))
            return;
          n2 = n2 || "[data-fancybox]";
          const a2 = Ri.openers.get(s2) || /* @__PURE__ */ new Map();
          a2.set(n2, o2), Ri.openers.set(s2, a2), 1 === a2.size && s2.addEventListener("click", Ri.fromEvent);
        }
        static unbind(e3, t3) {
          let i2, s2 = "";
          if (Oi(e3) ? (i2 = document.body, s2 = e3) : (i2 = e3, Oi(t3) && (s2 = t3)), !i2)
            return;
          const n2 = Ri.openers.get(i2);
          n2 && s2 && n2.delete(s2), s2 && n2 || (Ri.openers.delete(i2), i2.removeEventListener("click", Ri.fromEvent));
        }
        static destroy() {
          let e3;
          for (; e3 = Ri.getInstance(); ) e3.destroy();
          for (const e4 of Ri.openers.keys())
            e4.removeEventListener("click", Ri.fromEvent);
          Ri.openers = /* @__PURE__ */ new Map();
        }
        static fromEvent(e3) {
          if (e3.defaultPrevented) return;
          if (e3.button && 0 !== e3.button) return;
          if (e3.ctrlKey || e3.metaKey || e3.shiftKey) return;
          let t3 = e3.composedPath()[0];
          const i2 = t3.closest("[data-fancybox-trigger]");
          if (i2) {
            const e4 = i2.dataset.fancyboxTrigger || "", s3 = document.querySelectorAll(`[data-fancybox="${e4}"]`), n3 = parseInt(i2.dataset.fancyboxIndex || "", 10) || 0;
            t3 = s3[n3] || t3;
          }
          if (!(t3 && t3 instanceof Element)) return;
          let s2, n2, o2, a2;
          if ([...Ri.openers].reverse().find(
            ([e4, i3]) => !(!e4.contains(t3) || ![...i3].reverse().find(([i4, r3]) => {
              let l3 = t3.closest(i4);
              return !!l3 && (s2 = e4, n2 = i4, o2 = l3, a2 = r3, true);
            }))
          ), !s2 || !n2 || !o2)
            return;
          a2 = a2 || {}, e3.preventDefault(), t3 = o2;
          let r2 = [], l2 = Le({}, yt, a2);
          l2.event = e3, l2.triggerEl = t3, l2.delegate = i2;
          const c2 = l2.groupAll, d2 = l2.groupAttr, h2 = d2 && t3 ? t3.getAttribute(`${d2}`) : "";
          if ((!t3 || h2 || c2) && (r2 = [].slice.call(s2.querySelectorAll(n2))), t3 && !c2 && (r2 = h2 ? r2.filter((e4) => e4.getAttribute(`${d2}`) === h2) : [t3]), !r2.length)
            return;
          const u2 = Ri.getInstance();
          return u2 && u2.options.triggerEl && r2.indexOf(u2.options.triggerEl) > -1 ? void 0 : (t3 && (l2.startIndex = r2.indexOf(t3)), Ri.fromNodes(r2, l2));
        }
        static fromSelector(e3, t3, i2) {
          let s2 = null, n2 = "", o2 = {};
          if (Oi(e3) ? (s2 = document.body, n2 = e3, "object" == typeof t3 && (o2 = t3 || {})) : e3 instanceof HTMLElement && Oi(t3) && (s2 = e3, n2 = t3, "object" == typeof i2 && (o2 = i2 || {})), !s2 || !n2)
            return false;
          const a2 = Ri.openers.get(s2);
          return !!a2 && (o2 = Le({}, a2.get(n2) || {}, o2), !!o2 && Ri.fromNodes(Array.from(s2.querySelectorAll(n2)), o2));
        }
        static fromNodes(e3, t3) {
          t3 = Le({}, yt, t3 || {});
          const i2 = [];
          for (const s2 of e3) {
            const e4 = s2.dataset || {}, n2 = e4[Mi] || s2.getAttribute(Pi) || s2.getAttribute("currentSrc") || s2.getAttribute(Mi) || void 0;
            let o2;
            const a2 = t3.delegate;
            let r2;
            a2 && i2.length === t3.startIndex && (o2 = a2 instanceof HTMLImageElement ? a2 : a2.querySelector("img:not([aria-hidden])")), o2 || (o2 = s2 instanceof HTMLImageElement ? s2 : s2.querySelector("img:not([aria-hidden])")), o2 && (r2 = o2.currentSrc || o2[Mi] || void 0, !r2 && o2.dataset && (r2 = o2.dataset.lazySrc || o2.dataset[Mi] || void 0));
            const l2 = {
              src: n2,
              triggerEl: s2,
              thumbEl: o2,
              thumbElSrc: r2,
              thumbSrc: r2
            };
            for (const t4 in e4) {
              let i3 = e4[t4] + "";
              i3 = "false" !== i3 && ("true" === i3 || i3), l2[t4] = i3;
            }
            i2.push(l2);
          }
          return new Ri(i2, t3);
        }
        static getInstance(e3) {
          return e3 ? $i.get(e3) : Array.from($i.values()).reverse().find((e4) => !e4.isClosing() && e4) || null;
        }
        static getSlide() {
          var e3;
          return (null === (e3 = Ri.getInstance()) || void 0 === e3 ? void 0 : e3.getSlide()) || null;
        }
        static show(e3 = [], t3 = {}) {
          return new Ri(e3, t3);
        }
        static next() {
          const e3 = Ri.getInstance();
          e3 && e3.next();
        }
        static prev() {
          const e3 = Ri.getInstance();
          e3 && e3.prev();
        }
        static close(e3 = true, ...t3) {
          if (e3) for (const e4 of $i.values()) e4.close(...t3);
          else {
            const e4 = Ri.getInstance();
            e4 && e4.close(...t3);
          }
        }
      }
      Object.defineProperty(Ri, "version", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "5.0.33"
      }), Object.defineProperty(Ri, "defaults", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: yt
      }), Object.defineProperty(Ri, "Plugins", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: hi
      }), Object.defineProperty(Ri, "openers", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: /* @__PURE__ */ new Map()
      }), document.querySelector(".slider-top") && Ri.bind('[data-fancybox="slider"]', {
        groupAll: true,
        Images: { initialSize: "fit" }
      }), window.FLS = true, function(e3) {
        let t3 = new Image();
        t3.onload = t3.onerror = function() {
          e3(2 == t3.height);
        }, t3.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
      }(function(e3) {
        let t3 = true === e3 ? "webp" : "no-webp";
        document.documentElement.classList.add(t3);
      }), function() {
        let e3 = document.querySelector(".icon-menu");
        e3 && e3.addEventListener("click", function(e4) {
          o && (a(), document.documentElement.classList.toggle("menu-open"));
        });
      }();
    })();
  })();
})();
