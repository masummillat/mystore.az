/*
 * HC Off-canvas Header
 * ===================
 * Version: 3.4.1
 * Author: Some Web Media
 * Author URL: http://somewebmedia.com
 * Plugin URL: https://github.com/somewebmedia/hc-offcanvas-nav
 * Description: jQuery plugin for creating off-canvas multi-level navigations
 * License: MIT
 */
'use strict';
function _typeof(n) {
    return (_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(n) {
                  return typeof n;
              }
            : function(n) {
                  return n &&
                      'function' == typeof Symbol &&
                      n.constructor === Symbol &&
                      n !== Symbol.prototype
                      ? 'symbol'
                      : typeof n;
              })(n);
}
!(function(_, n) {
    var c,
        L = n.document,
        Q = _(L.getElementsByTagName('html')[0]),
        U =
            (_(L),
            (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
                (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))) &&
                !n.MSStream),
        z =
            'ontouchstart' in n ||
            navigator.maxTouchPoints ||
            (n.DocumentTouch && L instanceof DocumentTouch),
        V = function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        },
        G = function(n) {
            return n.stopPropagation();
        },
        I = function(e) {
            return function(n) {
                n.preventDefault(), n.stopPropagation(), 'function' == typeof e && e();
            };
        },
        J = function(n, e, t) {
            var a = t.children(),
                o = a.length,
                c = -1 < e ? Math.max(0, Math.min(e - 1, o)) : Math.max(0, Math.min(o + e + 1, o));
            0 === c ? t.prepend(n) : a.eq(c - 1).after(n);
        },
        K = function(n) {
            return -1 !== ['left', 'right'].indexOf(n) ? 'x' : 'y';
        },
        R =
            ((c = (function(n) {
                var e = ['Webkit', 'Moz', 'Ms', 'O'],
                    t = (L.body || L.documentElement).style,
                    a = n.charAt(0).toUpperCase() + n.slice(1);
                if (void 0 !== t[n]) return n;
                for (var o = 0; o < e.length; o++) if (void 0 !== t[e[o] + a]) return e[o] + a;
                return !1;
            })('transform')),
            function(n, e, t) {
                if (c)
                    if (0 === e) n.css(c, '');
                    else if ('x' === K(t)) {
                        var a = 'left' === t ? e : -e;
                        n.css(c, a ? 'translate3d('.concat(a, 'px,0,0)') : '');
                    } else {
                        var o = 'top' === t ? e : -e;
                        n.css(c, o ? 'translate3d(0,'.concat(o, 'px,0)') : '');
                    }
                else n.css(t, e);
            }),
        e = function(n, e, t) {
            console.warn(
                '%cHC Off-canvas Header:%c ' +
                    t +
                    "%c '" +
                    n +
                    "'%c is now deprecated and will be removed. Use%c '" +
                    e +
                    "'%c instead.",
                'color: #fa253b',
                'color: default',
                'color: #5595c6',
                'color: default',
                'color: #5595c6',
                'color: default'
            );
        },
        X = 0;
    _.fn.extend({
        hcOffcanvasNav: function() {
            var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            if (!this.length) return this;
            var A = this,
                D = _(L.body);
            n.side && (e('side', 'position', 'option'), (n.position = n.side));
            var H = _.extend(
                    {},
                    {
                        maxWidth: 1024,
                        pushContent: !1,
                        position: 'left',
                        levelOpen: 'overlap',
                        levelSpacing: 40,
                        levelTitles: !1,
                        navTitle: null,
                        navClass: '',
                        disableBody: !0,
                        closeOnClick: !0,
                        customToggle: null,
                        insertClose: !0,
                        insertBack: !0,
                        labelClose: 'Close',
                        labelBack: 'Back'
                    },
                    n
                ),
                E = [],
                $ = 'nav-open',
                F = function(n) {
                    if (!E.length) return !1;
                    var e = !1;
                    'string' == typeof n && (n = [n]);
                    for (var t = n.length, a = 0; a < t; a++) -1 !== E.indexOf(n[a]) && (e = !0);
                    return e;
                };
            return this.each(function() {
                var e = _(this);
                if (e.find('ul').addBack('ul').length) {
                    var n,
                        o,
                        c,
                        i,
                        a,
                        s,
                        b = 'hc-nav-'.concat(++X),
                        l =
                            ((n = 'hc-offcanvas-'.concat(X, '-style')),
                            (o = _('<style id="'.concat(n, '">')).appendTo(_('head'))),
                            (c = {}),
                            (i = {}),
                            (a = function(n) {
                                return (
                                    ';' !== n.substr(-1) && (n += ';' !== n.substr(-1) ? ';' : ''),
                                    n
                                );
                            }),
                            {
                                reset: function() {
                                    (c = {}), (i = {});
                                },
                                add: function(n, e, t) {
                                    (n = n.trim()),
                                        (e = e.trim()),
                                        t
                                            ? ((t = t.trim()),
                                              (i[t] = i[t] || {}),
                                              (i[t][n] = a(e)))
                                            : (c[n] = a(e));
                                },
                                remove: function(n, e) {
                                    (n = n.trim()),
                                        e
                                            ? ((e = e.trim()), void 0 !== i[e][n] && delete i[e][n])
                                            : void 0 !== c[n] && delete c[n];
                                },
                                insert: function() {
                                    var n = '';
                                    for (var e in i) {
                                        for (var t in ((n += '@media screen and ('.concat(
                                            e,
                                            ') {\n'
                                        )),
                                        i[e]))
                                            n += ''.concat(t, ' { ').concat(i[e][t], ' }\n');
                                        n += '}\n';
                                    }
                                    for (var a in c) n += ''.concat(a, ' { ').concat(c[a], ' }\n');
                                    o.html(n);
                                }
                            });
                    e.addClass('hc-nav '.concat(b));
                    var t,
                        r,
                        p,
                        d = _('<nav>').on('click', G),
                        v = _('<div class="nav-container">').appendTo(d),
                        f = null,
                        u = {},
                        h = !1,
                        m = 0,
                        g = 0,
                        y = 0,
                        C = null,
                        x = {},
                        k = [];
                    H.customToggle
                        ? (s = _(H.customToggle)
                              .addClass('hc-nav-trigger '.concat(b))
                              .on('click', q))
                        : ((s = _('<a class="hc-nav-trigger '.concat(b, '"><span></span></a>')).on(
                              'click',
                              q
                          )),
                          e.after(s));
                    var O = function() {
                            v.css('transition', 'none'),
                                (g = v.outerWidth()),
                                (y = v.outerHeight()),
                                l.add(
                                    '.hc-offcanvas-nav.'.concat(
                                        b,
                                        '.nav-position-left .nav-container'
                                    ),
                                    'transform: translate3d(-'.concat(g, 'px, 0, 0)')
                                ),
                                l.add(
                                    '.hc-offcanvas-nav.'.concat(
                                        b,
                                        '.nav-position-right .nav-container'
                                    ),
                                    'transform: translate3d('.concat(g, 'px, 0, 0)')
                                ),
                                l.add(
                                    '.hc-offcanvas-nav.'.concat(
                                        b,
                                        '.nav-position-top .nav-container'
                                    ),
                                    'transform: translate3d(0, -'.concat(y, 'px, 0)')
                                ),
                                l.add(
                                    '.hc-offcanvas-nav.'.concat(
                                        b,
                                        '.nav-position-bottom .nav-container'
                                    ),
                                    'transform: translate3d(0, '.concat(y, 'px, 0)')
                                ),
                                l.insert(),
                                v.css('transition', ''),
                                T();
                        },
                        T = function() {
                            var n;
                            (t = v.css('transition-property').split(',')[0]),
                                (n = v.css('transition-duration').split(',')[0]),
                                (r = parseFloat(n) * (/\ds$/.test(n) ? 1e3 : 1)),
                                (p = v.css('transition-timing-function').split(',')[0]),
                                H.pushContent &&
                                    f &&
                                    t &&
                                    l.add(
                                        (function n(e) {
                                            return 'string' == typeof e
                                                ? e
                                                : e.attr('id')
                                                ? '#' + e.attr('id')
                                                : e.attr('class')
                                                ? e.prop('tagName').toLowerCase() +
                                                  '.' +
                                                  e.attr('class').replace(/\s+/g, '.')
                                                : n(e.parent()) +
                                                  ' ' +
                                                  e.prop('tagName').toLowerCase();
                                        })(H.pushContent),
                                        'transition: '
                                            .concat(t, ' ')
                                            .concat(r, 'ms ')
                                            .concat(p)
                                    ),
                                l.insert();
                        },
                        S = function(n) {
                            var e = s.css('display'),
                                t = !!H.maxWidth && 'max-width: '.concat(H.maxWidth - 1, 'px');
                            F('maxWidth') && l.reset(),
                                l.add('.hc-offcanvas-nav.'.concat(b), 'display: block', t),
                                l.add(
                                    '.hc-nav-trigger.'.concat(b),
                                    'display: '.concat(e && 'none' !== e ? e : 'block'),
                                    t
                                ),
                                l.add('.hc-nav.'.concat(b), 'display: none', t),
                                l.add(
                                    '.hc-offcanvas-nav.'.concat(
                                        b,
                                        '.nav-levels-overlap.nav-position-left li.level-open > .nav-wrapper'
                                    ),
                                    'transform: translate3d(-'.concat(H.levelSpacing, 'px,0,0)'),
                                    t
                                ),
                                l.add(
                                    '.hc-offcanvas-nav.'.concat(
                                        b,
                                        '.nav-levels-overlap.nav-position-right li.level-open > .nav-wrapper'
                                    ),
                                    'transform: translate3d('.concat(H.levelSpacing, 'px,0,0)'),
                                    t
                                ),
                                l.add(
                                    '.hc-offcanvas-nav.'.concat(
                                        b,
                                        '.nav-levels-overlap.nav-position-top li.level-open > .nav-wrapper'
                                    ),
                                    'transform: translate3d(0,-'.concat(H.levelSpacing, 'px,0)'),
                                    t
                                ),
                                l.add(
                                    '.hc-offcanvas-nav.'.concat(
                                        b,
                                        '.nav-levels-overlap.nav-position-bottom li.level-open > .nav-wrapper'
                                    ),
                                    'transform: translate3d(0,'.concat(H.levelSpacing, 'px,0)'),
                                    t
                                ),
                                l.insert(),
                                (!n || (n && F('pushContent'))) &&
                                    ('string' == typeof H.pushContent
                                        ? (f = _(H.pushContent)).length || (f = null)
                                        : (f =
                                              H.pushContent instanceof jQuery
                                                  ? H.pushContent
                                                  : null)),
                                v.css('transition', 'none');
                            var a = d.hasClass($),
                                o = [
                                    'hc-offcanvas-nav',
                                    H.navClass || '',
                                    b,
                                    H.navClass || '',
                                    'nav-levels-' + H.levelOpen || 'none',
                                    'nav-position-' + H.position,
                                    H.disableBody ? 'disable-body' : '',
                                    U ? 'is-ios' : '',
                                    z ? 'touch-device' : '',
                                    a ? $ : ''
                                ].join(' ');
                            d
                                .off('click')
                                .attr('class', '')
                                .addClass(o),
                                H.disableBody && d.on('click', j),
                                n ? O() : setTimeout(O, 1);
                        },
                        w = function() {
                            var n;
                            u = (function c(n) {
                                var e = [];
                                return (
                                    n.each(function() {
                                        var n = _(this),
                                            o = { classes: n.attr('class'), items: [] };
                                        n.children('li').each(function() {
                                            var n = _(this),
                                                e = n
                                                    .children()
                                                    .filter(function() {
                                                        var n = _(this);
                                                        return (
                                                            n.is(':not(ul)') && !n.find('ul').length
                                                        );
                                                    })
                                                    .add(
                                                        n.contents().filter(function() {
                                                            return (
                                                                3 === this.nodeType &&
                                                                this.nodeValue.trim()
                                                            );
                                                        })
                                                    ),
                                                t = n.find('ul'),
                                                a = t.first().add(t.first().siblings('ul'));
                                            a.length &&
                                                !n.data('hc-uniqid') &&
                                                n.data(
                                                    'hc-uniqid',
                                                    Math.random()
                                                        .toString(36)
                                                        .substr(2) +
                                                        '-' +
                                                        Math.random()
                                                            .toString(36)
                                                            .substr(2)
                                                ),
                                                o.items.push({
                                                    uniqid: n.data('hc-uniqid'),
                                                    classes: n.attr('class'),
                                                    $content: e,
                                                    subnav: a.length ? c(a) : []
                                                });
                                        }),
                                            e.push(o);
                                    }),
                                    e
                                );
                            })(
                                (n = e.find('ul').addBack('ul'))
                                    .first()
                                    .add(n.first().siblings('ul'))
                            );
                        },
                        B = function(n) {
                            n && (v.empty(), (x = {})),
                                (function h(n, e, m, t, a) {
                                    var g = _(
                                            '<div class="nav-wrapper nav-wrapper-'.concat(m, '">')
                                        )
                                            .appendTo(e)
                                            .on('click', G),
                                        o = _('<div class="nav-content">').appendTo(g);
                                    if (
                                        (t && o.prepend('<h2>'.concat(t, '</h2>')),
                                        _.each(n, function(n, e) {
                                            var u = _('<ul>')
                                                .addClass(e.classes)
                                                .appendTo(o);
                                            _.each(e.items, function(n, e) {
                                                var t = e.$content,
                                                    a = t.find('a').addBack('a'),
                                                    o = a.length
                                                        ? a.clone(!0, !0).addClass('nav-item')
                                                        : _('<span class="nav-item">')
                                                              .append(t.clone(!0, !0))
                                                              .on('click', G);
                                                a.length &&
                                                    o.on('click', function(n) {
                                                        n.stopPropagation(), a[0].click();
                                                    }),
                                                    '#' === o.attr('href') &&
                                                        o.on('click', function(n) {
                                                            n.preventDefault();
                                                        }),
                                                    H.closeOnClick &&
                                                        (!1 === H.levelOpen ||
                                                        'none' === H.levelOpen
                                                            ? o
                                                                  .filter('a')
                                                                  .filter(
                                                                      '[data-nav-close!="false"]'
                                                                  )
                                                                  .on('click', j)
                                                            : o
                                                                  .filter('a')
                                                                  .filter(
                                                                      '[data-nav-close!="false"]'
                                                                  )
                                                                  .filter(function() {
                                                                      var n = _(this);
                                                                      return (
                                                                          !e.subnav.length ||
                                                                          (n.attr('href') &&
                                                                              '#' !==
                                                                                  n
                                                                                      .attr('href')
                                                                                      .charAt(0))
                                                                      );
                                                                  })
                                                                  .on('click', j));
                                                var c = _('<li>')
                                                    .addClass(e.classes)
                                                    .append(o);
                                                if (
                                                    (u.append(c),
                                                    H.levelSpacing &&
                                                        ('expand' === H.levelOpen ||
                                                            !1 === H.levelOpen ||
                                                            'none' === H.levelOpen))
                                                ) {
                                                    var i = H.levelSpacing * m;
                                                    i && u.css('text-indent', ''.concat(i, 'px'));
                                                }
                                                if (e.subnav.length) {
                                                    var s = m + 1,
                                                        l = e.uniqid,
                                                        r = '';
                                                    if (
                                                        (x[s] || (x[s] = 0),
                                                        c.addClass('nav-parent'),
                                                        !1 !== H.levelOpen &&
                                                            'none' !== H.levelOpen)
                                                    ) {
                                                        var p = x[s],
                                                            d = _(
                                                                '<span class="nav-next">'
                                                            ).appendTo(o),
                                                            v = _(
                                                                '<label for="'
                                                                    .concat(b, '-')
                                                                    .concat(s, '-')
                                                                    .concat(p, '">')
                                                            ).on('click', G),
                                                            f = _(
                                                                '<input type="checkbox" id="'
                                                                    .concat(b, '-')
                                                                    .concat(s, '-')
                                                                    .concat(p, '">')
                                                            )
                                                                .attr('data-level', s)
                                                                .attr('data-index', p)
                                                                .val(l)
                                                                .on('click', G)
                                                                .on('change', M);
                                                        -1 !== k.indexOf(l) &&
                                                            (g
                                                                .addClass('sub-level-open')
                                                                .on('click', function() {
                                                                    return W(s, p);
                                                                }),
                                                            c.addClass('level-open'),
                                                            f.prop('checked', !0)),
                                                            c.prepend(f),
                                                            (r =
                                                                !0 === H.levelTitles
                                                                    ? t.text().trim()
                                                                    : ''),
                                                            o.attr('href') &&
                                                            '#' !== o.attr('href').charAt(0)
                                                                ? d.append(v)
                                                                : o.prepend(
                                                                      v.on('click', function() {
                                                                          _(this)
                                                                              .parent()
                                                                              .trigger('click');
                                                                      })
                                                                  );
                                                    }
                                                    x[s]++, h(e.subnav, c, s, r, x[s] - 1);
                                                }
                                            });
                                        }),
                                        m &&
                                            void 0 !== a &&
                                            !1 !== H.insertBack &&
                                            'overlap' === H.levelOpen)
                                    ) {
                                        var c = o.children('ul'),
                                            i = _(
                                                '<li class="nav-back"><a href="#">'.concat(
                                                    H.labelBack || '',
                                                    '<span></span></a></li>'
                                                )
                                            );
                                        i.children('a').on(
                                            'click',
                                            I(function() {
                                                return W(m, a);
                                            })
                                        ),
                                            !0 === H.insertBack
                                                ? c.first().prepend(i)
                                                : V(H.insertBack) && J(i, H.insertBack, c);
                                    }
                                    if (0 === m && !1 !== H.insertClose) {
                                        var s = o.children('ul'),
                                            l = _(
                                                '<li class="nav-close"><a href="#">'.concat(
                                                    H.labelClose || '',
                                                    '<span></span></a></li>'
                                                )
                                            );
                                        l.children('a').on('click', I(j)),
                                            !0 === H.insertClose
                                                ? s.first().prepend(l)
                                                : V(H.insertClose) &&
                                                  J(
                                                      l,
                                                      H.insertClose,
                                                      s.first().add(s.first().siblings('ul'))
                                                  );
                                    }
                                })(u, v, 0, H.navTitle);
                        };
                    S(), w(), B(), D.append(d);
                    var P = function(n, e, t) {
                        var a = _(
                                '#'
                                    .concat(b, '-')
                                    .concat(n, '-')
                                    .concat(e)
                            ),
                            o = a.val(),
                            c = a.parent('li'),
                            i = c.closest('.nav-wrapper');
                        if (
                            (a.prop('checked', !1),
                            i.removeClass('sub-level-open'),
                            c.removeClass('level-open'),
                            -1 !== k.indexOf(o) && k.splice(k.indexOf(o), 1),
                            t &&
                                'overlap' === H.levelOpen &&
                                (i.off('click').on('click', G),
                                R(v, (n - 1) * H.levelSpacing, H.position),
                                f))
                        ) {
                            var s = 'x' === K(H.position) ? g : y;
                            R(f, s + (n - 1) * H.levelSpacing, H.position);
                        }
                    };
                    (A.settings = function(n) {
                        return n ? H[n] : Object.assign({}, H);
                    }),
                        (A.isOpen = function() {
                            return d.hasClass($);
                        }),
                        (A.open = N),
                        (A.close = j),
                        (A.update = function(n, e) {
                            if (((E = []), 'object' === _typeof(n))) {
                                for (var t in n) H[t] !== n[t] && E.push(t);
                                (H = _.extend({}, H, n)), S(!0), B(!0);
                            }
                            (!0 === n || e) && (S(!0), w(), B(!0));
                        });
                } else console.error('%c! HC Offcanvas Header:%c Menu must contain <ul> element.', 'color: #fa253b', 'color: default');
                function M() {
                    var n = _(this),
                        e = Number(n.attr('data-level')),
                        t = Number(n.attr('data-index'));
                    n.prop('checked')
                        ? (function(n, e) {
                              var t = _(
                                      '#'
                                          .concat(b, '-')
                                          .concat(n, '-')
                                          .concat(e)
                                  ),
                                  a = t.val(),
                                  o = t.parent('li'),
                                  c = o.closest('.nav-wrapper');
                              if (
                                  (c.addClass('sub-level-open'),
                                  o.addClass('level-open'),
                                  -1 === k.indexOf(a) && k.push(a),
                                  'overlap' === H.levelOpen &&
                                      (c.on('click', function() {
                                          return W(n, e);
                                      }),
                                      R(v, n * H.levelSpacing, H.position),
                                      f))
                              ) {
                                  var i = 'x' === K(H.position) ? g : y;
                                  R(f, i + n * H.levelSpacing, H.position);
                              }
                          })(e, t)
                        : W(e, t);
                }
                function N() {
                    if (
                        ((h = !0),
                        d.css('visibility', 'visible').addClass($),
                        s.addClass('toggle-open'),
                        'expand' === H.levelOpen && C && clearTimeout(C),
                        H.disableBody &&
                            ((m = Q.scrollTop() || D.scrollTop()),
                            L.documentElement.scrollHeight > L.documentElement.clientHeight &&
                                Q.addClass('hc-nav-yscroll'),
                            D.addClass('hc-nav-open'),
                            m && D.css('top', -m)),
                        f)
                    ) {
                        var n = 'x' === K(H.position) ? g : y;
                        R(f, n, H.position);
                    }
                    setTimeout(function() {
                        A.trigger('open', _.extend({}, H));
                    }, r + 1);
                }
                function j() {
                    (h = !1),
                        f && R(f, 0),
                        d.removeClass($),
                        v.removeAttr('style'),
                        s.removeClass('toggle-open'),
                        'expand' === H.levelOpen && -1 !== ['top', 'bottom'].indexOf(H.position)
                            ? W(0)
                            : !1 !== H.levelOpen &&
                              'none' !== H.levelOpen &&
                              (C = setTimeout(
                                  function() {
                                      W(0);
                                  },
                                  'expand' === H.levelOpen ? r : 0
                              )),
                        H.disableBody &&
                            (D.removeClass('hc-nav-open'),
                            Q.removeClass('hc-nav-yscroll'),
                            m && (D.css('top', '').scrollTop(m), Q.scrollTop(m), (m = 0))),
                        setTimeout(function() {
                            d.css('visibility', ''),
                                A.trigger('close.$', _.extend({}, H)),
                                A.trigger('close.once', _.extend({}, H)).off('close.once');
                        }, r + 1);
                }
                function q(n) {
                    n.preventDefault(), n.stopPropagation(), h ? j() : N();
                }
                function W(n, e) {
                    for (var t = n; t <= Object.keys(x).length; t++)
                        if (t == n && void 0 !== e) P(n, e, !0);
                        else for (var a = 0; a < x[t]; a++) P(t, a, t == n);
                }
            });
        }
    });
})(jQuery, 'undefined' != typeof window ? window : this);
