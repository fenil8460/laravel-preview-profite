/*eslint-disable*/
/*jshint ignore:start*/
(function () {
    function ga(l, t) {
        l.prototype = pb(t.prototype);
        l.prototype.constructor = l;
        l.base = t.prototype
    }

    function pb(l) {
        function t() {}
        t.prototype = l;
        return new t
    }

    function cb(l, t, e) {
        "millisecond" === e ? l.setMilliseconds(l.getMilliseconds() + 1 * t) : "second" === e ? l.setSeconds(l.getSeconds() + 1 * t) : "minute" === e ? l.setMinutes(l.getMinutes() + 1 * t) : "hour" === e ? l.setHours(l.getHours() + 1 * t) : "day" === e ? l.setDate(l.getDate() + 1 * t) : "week" === e ? l.setDate(l.getDate() + 7 * t) : "month" === e ? l.setMonth(l.getMonth() + 1 * t) : "year" === e && l.setFullYear(l.getFullYear() +
            1 * t);
        return l
    }

    function na(l, t) {
        var e = !1;
        0 > l && (e = !0, l *= -1);
        l = "" + l;
        for (t = t ? t : 1; l.length < t;) l = "0" + l;
        return e ? "-" + l : l
    }

    function Pa(l) {
        if (!l) return l;
        l = l.replace(/^\s\s*/, "");
        for (var t = /\s/, e = l.length; t.test(l.charAt(--e)););
        return l.slice(0, e + 1)
    }

    function Ga(l) {
        l.roundRect = function (l, e, v, W, G, A, x, z) {
            x && (this.fillStyle = x);
            z && (this.strokeStyle = z);
            "undefined" === typeof G && (G = 5);
            this.lineWidth = A;
            this.beginPath();
            this.moveTo(l + G, e);
            this.lineTo(l + v - G, e);
            this.quadraticCurveTo(l + v, e, l + v, e + G);
            this.lineTo(l + v, e + W -
                G);
            this.quadraticCurveTo(l + v, e + W, l + v - G, e + W);
            this.lineTo(l + G, e + W);
            this.quadraticCurveTo(l, e + W, l, e + W - G);
            this.lineTo(l, e + G);
            this.quadraticCurveTo(l, e, l + G, e);
            this.closePath();
            x && this.fill();
            z && 0 < A && this.stroke()
        }
    }

    function Xa(l, t) {
        return l - t
    }

    function db(l, t, e) {
        if (l && t && e) {
            e = e + "." + t;
            var v = "image/" + t;
            l = l.toDataURL(v);
            var W = !1,
                G = document.createElement("a");
            G.download = e;
            G.href = l;
            if ("undefined" !== typeof Blob && new Blob) {
                for (var A = l.replace(/^data:[a-z\/]*;base64,/, ""), A = atob(A), x = new ArrayBuffer(A.length), x =
                        new Uint8Array(x), z = 0; z < A.length; z++) x[z] = A.charCodeAt(z);
                t = new Blob([x.buffer], {
                    type: "image/" + t
                });
                try {
                    window.navigator.msSaveBlob(t, e), W = !0
                } catch (N) {
                    G.dataset.downloadurl = [v, G.download, G.href].join(":"), G.href = window.URL.createObjectURL(t)
                }
            }
            if (!W) try {
                event = document.createEvent("MouseEvents"), event.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), G.dispatchEvent ? G.dispatchEvent(event) : G.fireEvent && G.fireEvent("onclick")
            } catch (H) {
                t = window.open(), t.document.write("<img src='" + l + "'></img><div>Please right click on the image and save it to your device</div>"),
                    t.document.close()
            }
        }
    }

    function U(l) {
        var t = ((l & 16711680) >> 16).toString(16),
            e = ((l & 65280) >> 8).toString(16);
        l = ((l & 255) >> 0).toString(16);
        t = 2 > t.length ? "0" + t : t;
        e = 2 > e.length ? "0" + e : e;
        l = 2 > l.length ? "0" + l : l;
        return "#" + t + e + l
    }

    function qb(l, t) {
        var e = this.length >>> 0,
            v = Number(t) || 0,
            v = 0 > v ? Math.ceil(v) : Math.floor(v);
        for (0 > v && (v += e); v < e; v++)
            if (v in this && this[v] === l) return v;
        return -1
    }

    function e(l) {
        return null === l || "undefined" === typeof l
    }

    function Da(l) {
        l.indexOf || (l.indexOf = qb);
        return l
    }

    function rb(l) {
        if (M.fSDec) l[va("`eeDwdouMhrudods")](va("e`u`@ohl`uhnoHuds`uhnoDoe"),
            function () {
                M._fTWm && M._fTWm(l)
            })
    }

    function eb(l, t, e) {
        e = e || "normal";
        var v = l + "_" + t + "_" + e,
            W = fb[v];
        if (isNaN(W)) {
            try {
                l = "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:" + l + "; font-size:" + t + "px; font-weight:" + e + ";";
                if (!Ea) {
                    var G = document.body;
                    Ea = document.createElement("span");
                    Ea.innerHTML = "";
                    var A = document.createTextNode("Mpgyi");
                    Ea.appendChild(A);
                    G.appendChild(Ea)
                }
                Ea.style.display = "";
                Ea.setAttribute("style", l);
                W = Math.round(Ea.offsetHeight);
                Ea.style.display = "none"
            } catch (x) {
                W = Math.ceil(1.1 * t)
            }
            W = Math.max(W, t);
            fb[v] = W
        }
        return W
    }

    function P(l, t) {
        var e = [];
        if (e = {
                solid: [],
                shortDash: [3, 1],
                shortDot: [1, 1],
                shortDashDot: [3, 1, 1, 1],
                shortDashDotDot: [3, 1, 1, 1, 1, 1],
                dot: [1, 2],
                dash: [4, 2],
                dashDot: [4, 2, 1, 2],
                longDash: [8, 2],
                longDashDot: [8, 2, 1, 2],
                longDashDotDot: [8, 2, 1, 2, 1, 2]
            } [l || "solid"])
            for (var v = 0; v < e.length; v++) e[v] *= t;
        else e = [];
        return e
    }

    function z(l, t, V, v, W) {
        v = v || [];
        W = e(W) ? sb ? {
            passive: !1,
            capture: !1
        } : !1 : W;
        v.push([l, t, V, W]);
        return l.addEventListener ? (l.addEventListener(t,
            V, W), V) : l.attachEvent ? (v = function (t) {
            t = t || window.event;
            t.preventDefault = t.preventDefault || function () {
                t.returnValue = !1
            };
            t.stopPropagation = t.stopPropagation || function () {
                t.cancelBubble = !0
            };
            V.call(l, t)
        }, l.attachEvent("on" + t, v), v) : !1
    }

    function gb(l, t, e, v) {
        v = v || !1;
        if (l.removeEventListener) l.removeEventListener(t, e, v);
        else if (l.detachEvent) l.detachEvent("on" + t, e);
        else return !1
    }

    function hb(l, t) {
        if ("createEvent" in document) {
            var e = document.createEvent("HTMLEvents");
            e.initEvent(t, !1, !0);
            l.dispatchEvent(e)
        } else l.fireEvent("on" +
            t)
    }

    function ib(l) {
        if (l._menuButton) l.exportEnabled ? Sa(l._menuButton) : ya(l._menuButton);
        else if (l.exportEnabled && v) {
            var t = !1;
            l._menuButton = document.createElement("button");
            Ba(l, l._menuButton, "menu");
            l._toolBar.appendChild(l._menuButton);
            z(l._menuButton, "touchstart", function (l) {
                t = !0
            }, l.allDOMEventHandlers);
            z(l._menuButton, "click", function () {
                "none" !== l._dropdownMenu.style.display || l._dropDownCloseTime && 500 >= (new Date).getTime() - l._dropDownCloseTime.getTime() || (l._dropdownMenu.style.display = "block", l._menuButton.blur(),
                    l._dropdownMenu.focus())
            }, l.allDOMEventHandlers, !0);
            z(l._menuButton, "mouseover", function () {
                t || (pa(l._menuButton, {
                    backgroundColor: l.toolbar.backgroundColorOnHover,
                    color: l.toolbar.fontColorOnHover
                }), 0 >= navigator.userAgent.search("MSIE") && pa(l._menuButton.childNodes[0], {
                    WebkitFilter: "invert(100%)",
                    filter: "invert(100%)"
                }))
            }, l.allDOMEventHandlers, !0);
            z(l._menuButton, "mouseout", function () {
                t || (pa(l._menuButton, {
                        backgroundColor: l.toolbar.backgroundColor,
                        color: l.toolbar.fontColor
                    }), 0 >= navigator.userAgent.search("MSIE") &&
                    pa(l._menuButton.childNodes[0], {
                        WebkitFilter: "invert(0%)",
                        filter: "invert(0%)"
                    }))
            }, l.allDOMEventHandlers, !0)
        }
        if (!l._dropdownMenu && l.exportEnabled && v) {
            t = !1;
            l._dropdownMenu = document.createElement("div");
            l._dropdownMenu.setAttribute("tabindex", -1);
            var e = -1 !== l.theme.indexOf("dark") ? "black" : "#888888";
            l._dropdownMenu.style.cssText = "position: absolute; z-index: 1; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 0px;top: 25px;min-width: 120px;outline: 0;font-size: 14px; font-family: Arial, Helvetica, sans-serif;padding: 5px 0px 5px 0px;text-align: left;line-height: 10px;background-color:" +
                l.toolbar.backgroundColor + ";box-shadow: 2px 2px 10px " + e;
            l._dropdownMenu.style.display = "none";
            l._toolBar.appendChild(l._dropdownMenu);
            z(l._dropdownMenu, "blur", function () {
                ya(l._dropdownMenu);
                l._dropDownCloseTime = new Date
            }, l.allDOMEventHandlers, !0);
            e = document.createElement("div");
            e.style.cssText = "padding: 12px 8px 12px 8px";
            e.innerHTML = l._cultureInfo.printText;
            e.style.backgroundColor = l.toolbar.backgroundColor;
            e.style.color = l.toolbar.fontColor;
            l._dropdownMenu.appendChild(e);
            z(e, "touchstart", function (l) {
                t = !0
            }, l.allDOMEventHandlers);
            z(e, "mouseover", function () {
                t || (this.style.backgroundColor = l.toolbar.backgroundColorOnHover, this.style.color = l.toolbar.fontColorOnHover)
            }, l.allDOMEventHandlers, !0);
            z(e, "mouseout", function () {
                t || (this.style.backgroundColor = l.toolbar.backgroundColor, this.style.color = l.toolbar.fontColor)
            }, l.allDOMEventHandlers, !0);
            z(e, "click", function () {
                l.print();
                ya(l._dropdownMenu)
            }, l.allDOMEventHandlers, !0);
            e = document.createElement("div");
            e.style.cssText = "padding: 12px 8px 12px 8px";
            e.innerHTML =
                l._cultureInfo.saveJPGText;
            e.style.backgroundColor = l.toolbar.backgroundColor;
            e.style.color = l.toolbar.fontColor;
            l._dropdownMenu.appendChild(e);
            z(e, "touchstart", function (l) {
                t = !0
            }, l.allDOMEventHandlers);
            z(e, "mouseover", function () {
                t || (this.style.backgroundColor = l.toolbar.backgroundColorOnHover, this.style.color = l.toolbar.fontColorOnHover)
            }, l.allDOMEventHandlers, !0);
            z(e, "mouseout", function () {
                    t || (this.style.backgroundColor = l.toolbar.backgroundColor, this.style.color = l.toolbar.fontColor)
                }, l.allDOMEventHandlers,
                !0);
            z(e, "click", function () {
                l.exportChart({
                    format: "jpeg",
                    fileName: l.exportFileName
                });
                ya(l._dropdownMenu)
            }, l.allDOMEventHandlers, !0);
            e = document.createElement("div");
            e.style.cssText = "padding: 12px 8px 12px 8px";
            e.innerHTML = l._cultureInfo.savePNGText;
            e.style.backgroundColor = l.toolbar.backgroundColor;
            e.style.color = l.toolbar.fontColor;
            l._dropdownMenu.appendChild(e);
            z(e, "touchstart", function (l) {
                t = !0
            }, l.allDOMEventHandlers);
            z(e, "mouseover", function () {
                t || (this.style.backgroundColor = l.toolbar.backgroundColorOnHover,
                    this.style.color = l.toolbar.fontColorOnHover)
            }, l.allDOMEventHandlers, !0);
            z(e, "mouseout", function () {
                t || (this.style.backgroundColor = l.toolbar.backgroundColor, this.style.color = l.toolbar.fontColor)
            }, l.allDOMEventHandlers, !0);
            z(e, "click", function () {
                l.exportChart({
                    format: "png",
                    fileName: l.exportFileName
                });
                ya(l._dropdownMenu)
            }, l.allDOMEventHandlers, !0)
        }
    }

    function jb(l, t, e) {
        l *= ja;
        t *= ja;
        l = e.getImageData(l, t, 2, 2).data;
        t = !0;
        for (e = 0; 4 > e; e++)
            if (l[e] !== l[e + 4] | l[e] !== l[e + 8] | l[e] !== l[e + 12]) {
                t = !1;
                break
            } return t ? l[0] <<
            16 | l[1] << 8 | l[2] : 0
    }

    function qa(l, t, e) {
        return l in t ? t[l] : e[l]
    }

    function Ta(l, t, e) {
        if (v && kb) {
            var K = l.getContext("2d");
            Ua = K.webkitBackingStorePixelRatio || K.mozBackingStorePixelRatio || K.msBackingStorePixelRatio || K.oBackingStorePixelRatio || K.backingStorePixelRatio || 1;
            ja = Ya / Ua;
            l.width = t * ja;
            l.height = e * ja;
            Ya !== Ua && (l.style.width = t + "px", l.style.height = e + "px", K.scale(ja, ja))
        } else l.width = t, l.height = e
    }

    function tb(l) {
        if (ub) {
          
        }
    }

    function ra(l, t) {
        Ma && (this.canvasCount |= 0, window.console.log(++this.canvasCount));
        var e = document.createElement("canvas");
        e.setAttribute("class", "stockjs-chart-canvas");
        Ta(e, l, t);
        v || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(e);
        return e
    }

    function pa(l, t) {
        for (var e in t) l.style[e] = t[e]
    }

    function Ba(l, t, e) {
        t.getAttribute("state") || (t.style.backgroundColor = l.toolbar.backgroundColor, t.style.color = l.toolbar.fontColor, t.style.border = "none", pa(t, {
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none"
        }));
        t.getAttribute("state") !==
            e && (t.setAttribute("state", e), t.setAttribute("type", "button"), pa(t, {
                padding: "5px 12px",
                cursor: "pointer",
                "float": "left",
                width: "40px",
                height: "25px",
                outline: "0px",
                verticalAlign: "baseline",
                lineHeight: "0"
            }), t.setAttribute("title", l._cultureInfo[e + "Text"]), t.innerHTML = "<img style='height:95%; pointer-events: none;' src='" + vb[e].image + "' alt='" + l._cultureInfo[e + "Text"] + "' />")
    }

    function Sa() {
        for (var l = null, e = 0; e < arguments.length; e++) l = arguments[e], l.style && (l.style.display = "inline")
    }

    function ya() {
        for (var l =
                null, e = 0; e < arguments.length; e++)(l = arguments[e]) && l.style && (l.style.display = "none")
    }

    function Za(l) {
        if (null === l || "object" !== typeof l) return l;
        if (l instanceof Date) return new Date(l.getTime());
        Array.isArray || (Array.isArray = function (l) {
            return "[object Array]" === Object.prototype.toString.call(l)
        });
        if (Array.isArray(l)) {
            for (var e = [], v = 0; v < l.length; v++) e.push(Za(l[v]));
            return e
        }
        e = new l.constructor;
        for (v in l) l.hasOwnProperty(v) && (e[v] = Za(l[v]));
        return e
    }

    function Va(l, e, v, K, W) {
        if (null === l || "undefined" === typeof l) return "undefined" ===
            typeof v ? e : v;
        l = parseFloat(l.toString()) * (0 <= l.toString().indexOf("%") ? e / 100 : 1);
        "undefined" !== typeof K && (l = Math.min(K, l), "undefined" !== typeof W && (l = Math.max(W, l)));
        return !isNaN(l) && l <= e && 0 <= l ? l : "undefined" === typeof v ? e : v
    }

    function Z(l, t, v, K, W) {
        this._defaultsKey = l;
        this._themeOptionsKey = t;
        this._index = K;
        this.parent = W;
        this._eventListeners = [];
        l = {};
        this.theme && e(this.parent) && e(t) && e(K) ? l = e(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions &&
            this.parent.themeOptions[t]) && (null === K ? l = this.parent.themeOptions[t] : 0 < this.parent.themeOptions[t].length && (K = Math.min(this.parent.themeOptions[t].length - 1, K), l = this.parent.themeOptions[t][K]));
        this.themeOptions = l;
        this.options = v ? v : {
            _isPlaceholder: !0
        };
        this.setOptions(this.options, l)
    }

    function Ka(l, e, v, K, W) {
        "undefined" === typeof W && (W = 0);
        this._padding = W;
        this._x1 = l;
        this._y1 = e;
        this._x2 = v;
        this._y2 = K;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    }

    function ma(l,
        e) {
        ma.base.constructor.call(this, "TextBlock", null, e, null, null);
        this.ctx = l;
        this._isDirty = !0;
        this._wrappedText = null;
        this._initialize()
    }

    function Wa(l, e) {
        Wa.base.constructor.call(this, "Toolbar", "toolbar", e, null, l);
        this.chart = l;
        this.canvas = l.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "toolbar"
    }

    function Ha(l, t) {
        Ha.base.constructor.call(this, "Title", "title", t, null, l);
        this.chart = l;
        this.canvas = l.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "title";
        if (e(this.options.margin) && l.options.subtitles)
            for (var v =
                    l.options.subtitles, K = 0; K < v.length; K++)
                if ((e(v[K].horizontalAlign) && "center" === this.horizontalAlign || v[K].horizontalAlign === this.horizontalAlign) && (e(v[K].verticalAlign) && "top" === this.verticalAlign || v[K].verticalAlign === this.verticalAlign) && !v[K].dockInsidePlotArea === !this.dockInsidePlotArea) {
                    this.margin = 0;
                    break
                }
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }

    function Na(l,
        e, v) {
        Na.base.constructor.call(this, "Subtitle", "subtitles", e, v, l);
        this.chart = l;
        this.canvas = l.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "subtitles";
        this.isOptionsInArray = !0;
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }

    function $a() {
        this.pool = []
    }

    function Oa(l) {
        var e;
        l && Qa[l] && (e = Qa[l]);
        Oa.base.constructor.call(this, "CultureInfo", null, e, null, null)
    }
    var Ma = !1,
        M = {},
        v = !!document.createElement("canvas").getContext,
        ha = {
            Chart: {
                width: 500,
                height: 400,
                zoomEnabled: !1,
                zoomType: "x",
                backgroundColor: "white",
                theme: "light1",
                animationEnabled: !1,
                animationDuration: 1200,
                dataPointWidth: null,
                dataPointMinWidth: null,
                dataPointMaxWidth: null,
                colorSet: "colorSet1",
                culture: "en",
                creditHref: "",
                creditText: "StockJS",
                interactivityEnabled: !0,
                exportEnabled: !1,
                exportFileName: "Chart",
                rangeChanging: null,
                rangeChanged: null,
                publicProperties: {
                    title: "readWrite",
                    subtitles: "readWrite",
                    toolbar: "readWrite",
                    toolTip: "readWrite",
                    legend: "readWrite",
                    axisX: "readWrite",
                    axisY: "readWrite",
                    axisX2: "readWrite",
                    axisY2: "readWrite",
                    data: "readWrite",
                    options: "readWrite",
                    bounds: "readOnly",
                    container: "readOnly",
                    selectedColorSet: "readOnly"
                }
            },
            Title: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 20,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: v ? "transparent" : null,
                margin: 5,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1,
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Subtitle: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 14,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                margin: 2,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1,
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Toolbar: {
                backgroundColor: "white",
                backgroundColorOnHover: "#2196f3",
                borderColor: "#2196f3",
                borderThickness: 1,
                fontColor: "black",
                fontColorOnHover: "white",
                publicProperties: {
                    options: "readWrite",
                    chart: "readOnly"
                }
            },
            Legend: {
                name: null,
                verticalAlign: "center",
                horizontalAlign: "right",
                fontSize: 14,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                cursor: null,
                itemmouseover: null,
                itemmouseout: null,
                itemmousemove: null,
                itemclick: null,
                dockInsidePlotArea: !1,
                reversed: !1,
                backgroundColor: v ? "transparent" : null,
                borderColor: v ? "transparent" : null,
                borderThickness: 0,
                cornerRadius: 0,
                maxWidth: null,
                maxHeight: null,
                markerMargin: null,
                itemMaxWidth: null,
                itemWidth: null,
                itemWrap: !0,
                itemTextFormatter: null,
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            ToolTip: {
                enabled: !0,
                shared: !1,
                animationEnabled: !0,
                content: null,
                contentFormatter: null,
                reversed: !1,
                backgroundColor: v ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
                borderColor: null,
                borderThickness: 2,
                cornerRadius: 5,
                fontSize: 14,
                fontColor: "black",
                fontFamily: "Calibri, Arial, Georgia, serif;",
                fontWeight: "normal",
                fontStyle: "italic",
                updated: null,
                hidden: null,
                publicProperties: {
                    options: "readWrite",
                    chart: "readOnly"
                }
            },
            Axis: {
                minimum: null,
                maximum: null,
                viewportMinimum: null,
                viewportMaximum: null,
                interval: null,
                intervalType: null,
                reversed: !1,
                logarithmic: !1,
                logarithmBase: 10,
                title: null,
                titleFontColor: "black",
                titleFontSize: 20,
                titleFontFamily: "arial",
                titleFontWeight: "normal",
                titleFontStyle: "normal",
                titleWrap: !0,
                titleMaxWidth: null,
                titleBackgroundColor: v ? "transparent" : null,
                titleBorderColor: v ? "transparent" : null,
                titleBorderThickness: 0,
                titleCornerRadius: 0,
                labelAngle: 0,
                labelFontFamily: "arial",
                labelFontColor: "black",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelAutoFit: !0,
                labelWrap: !0,
                labelMaxWidth: null,
                labelFormatter: null,
                labelBackgroundColor: v ? "transparent" : null,
                labelBorderColor: v ? "transparent" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelPlacement: "outside",
                labelTextAlign: "left",
                prefix: "",
                suffix: "",
                includeZero: !1,
                tickLength: 5,
                tickColor: "black",
                tickThickness: 1,
                tickPlacement: "outside",
                lineColor: "black",
                lineThickness: 1,
                lineDashType: "solid",
                gridColor: "#A0A0A0",
                gridThickness: 0,
                gridDashType: "solid",
                interlacedColor: v ? "transparent" : null,
                valueFormatString: null,
                margin: 2,
                publicProperties: {
                    options: "readWrite",
                    stripLines: "readWrite",
                    scaleBreaks: "readWrite",
                    crosshair: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            StripLine: {
                value: null,
                startValue: null,
                endValue: null,
                color: "orange",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelPlacement: "inside",
                labelAlign: "far",
                labelWrap: !0,
                labelMaxWidth: null,
                labelBackgroundColor: null,
                labelBorderColor: v ? "transparent" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelFontFamily: "arial",
                labelFontColor: "orange",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                showOnTop: !1,
                publicProperties: {
                    options: "readWrite",
                    axis: "readOnly",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            ScaleBreaks: {
                autoCalculate: !1,
                collapsibleThreshold: "25%",
                maxNumberOfAutoBreaks: 2,
                spacing: 8,
                type: "straight",
                color: "#FFFFFF",
                fillOpacity: 0.9,
                lineThickness: 2,
                lineColor: "#E16E6E",
                lineDashType: "solid",
                publicProperties: {
                    options: "readWrite",
                    customBreaks: "readWrite",
                    axis: "readOnly",
                    autoBreaks: "readOnly",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Break: {
                startValue: null,
                endValue: null,
                spacing: 8,
                type: "straight",
                color: "#FFFFFF",
                fillOpacity: 0.9,
                lineThickness: 2,
                lineColor: "#E16E6E",
                lineDashType: "solid",
                publicProperties: {
                    options: "readWrite",
                    scaleBreaks: "readOnly",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Crosshair: {
                enabled: !1,
                snapToDataPoint: !1,
                color: "grey",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelWrap: !0,
                labelMaxWidth: null,
                labelBackgroundColor: v ?
                    "grey" : null,
                labelBorderColor: v ? "grey" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelFontFamily: v ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                labelFontSize: 12,
                labelFontColor: "#fff",
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                valueFormatString: null,
                updated: null,
                hidden: null,
                publicProperties: {
                    options: "readWrite",
                    axis: "readOnly",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            DataSeries: {
                name: null,
                dataPoints: null,
                label: "",
                bevelEnabled: !1,
                highlightEnabled: !0,
                cursor: "default",
                indexLabel: "",
                indexLabelPlacement: "auto",
                indexLabelOrientation: "horizontal",
                indexLabelFontColor: "black",
                indexLabelFontSize: 12,
                indexLabelFontStyle: "normal",
                indexLabelFontFamily: "Arial",
                indexLabelFontWeight: "normal",
                indexLabelBackgroundColor: null,
                indexLabelLineColor: "gray",
                indexLabelLineThickness: 1,
                indexLabelLineDashType: "solid",
                indexLabelMaxWidth: null,
                indexLabelWrap: !0,
                indexLabelFormatter: null,
                lineThickness: 2,
                lineDashType: "solid",
                connectNullData: !1,
                nullDataLineDashType: "dash",
                color: null,
                lineColor: null,
                risingColor: "white",
                fallingColor: "red",
                fillOpacity: null,
                startAngle: 0,
                radius: null,
                innerRadius: null,
                neckHeight: null,
                neckWidth: null,
                reversed: !1,
                valueRepresents: null,
                linkedDataSeriesIndex: null,
                whiskerThickness: 2,
                whiskerDashType: "solid",
                whiskerColor: null,
                whiskerLength: null,
                stemThickness: 2,
                stemColor: null,
                stemDashType: "solid",
                upperBoxColor: "white",
                lowerBoxColor: "white",
                type: "column",
                xValueType: "number",
                axisXType: "primary",
                axisYType: "primary",
                axisXIndex: 0,
                axisYIndex: 0,
                xValueFormatString: null,
                yValueFormatString: null,
                zValueFormatString: null,
                percentFormatString: null,
                showInLegend: null,
                legendMarkerType: null,
                legendMarkerColor: null,
                legendText: null,
                legendMarkerBorderColor: v ? "transparent" : null,
                legendMarkerBorderThickness: 0,
                markerType: "circle",
                markerColor: null,
                markerSize: null,
                markerBorderColor: v ? "transparent" : null,
                markerBorderThickness: 0,
                mouseover: null,
                mouseout: null,
                mousemove: null,
                click: null,
                toolTipContent: null,
                visible: !0,
                publicProperties: {
                    options: "readWrite",
                    axisX: "readWrite",
                    axisY: "readWrite",
                    chart: "readOnly"
                }
            },
            TextBlock: {
                x: 0,
                y: 0,
                width: null,
                height: null,
                maxWidth: null,
                maxHeight: null,
                padding: 0,
                angle: 0,
                text: "",
                horizontalAlign: "center",
                textAlign: "left",
                fontSize: 12,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                textBaseline: "top"
            },
            CultureInfo: {
                decimalSeparator: ".",
                digitGroupSeparator: ",",
                zoomText: "Zoom",
                panText: "Pan",
                resetText: "Reset",
                menuText: "More Options",
                saveJPGText: "Save as JPEG",
                savePNGText: "Save as PNG",
                printText: "Print",
                days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                months: "January February March April May June July August September October November December".split(" "),
                shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
            }
        },
        Qa = {
            en: {}
        },
        x = v ? "Trebuchet MS, Helvetica, sans-serif" : "Arial",
        za = v ? "Impact, Charcoal, sans-serif" : "Arial",
        xa = {
            colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),
            colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),
            colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
        },
        L, X, F, T, sa;
    X = "#333333";
    F = "#000000";
    L = "#666666";
    sa = T = "#000000";
    var ka = 20,
        H = 14,
        Fa = {
            colorSet: "colorSet1",
            backgroundColor: "#FFFFFF",
            title: {
                fontFamily: za,
                fontSize: 32,
                fontColor: X,
                fontWeight: "normal",
                verticalAlign: "top",
                margin: 5
            },
            subtitles: [{
                fontFamily: za,
                fontSize: H,
                fontColor: X,
                fontWeight: "normal",
                verticalAlign: "top",
                margin: 5
            }],
            data: [{
                indexLabelFontFamily: x,
                indexLabelFontSize: H,
                indexLabelFontColor: X,
                indexLabelFontWeight: "normal",
                indexLabelLineThickness: 1
            }],
            axisX: [{
                titleFontFamily: x,
                titleFontSize: ka,
                titleFontColor: X,
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: F,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: L,
                tickThickness: 1,
                tickColor: L,
                gridThickness: 0,
                gridColor: L,
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: H,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: H,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: sa,
                    color: T,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisX2: [{
                titleFontFamily: x,
                titleFontSize: ka,
                titleFontColor: X,
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: F,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: L,
                tickThickness: 1,
                tickColor: L,
                gridThickness: 0,
                gridColor: L,
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: H,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: H,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: sa,
                    color: T,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisY: [{
                titleFontFamily: x,
                titleFontSize: ka,
                titleFontColor: X,
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: F,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: L,
                tickThickness: 1,
                tickColor: L,
                gridThickness: 1,
                gridColor: L,
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: H,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: H,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: sa,
                    color: T,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisY2: [{
                titleFontFamily: x,
                titleFontSize: ka,
                titleFontColor: X,
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: F,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: L,
                tickThickness: 1,
                tickColor: L,
                gridThickness: 1,
                gridColor: L,
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: H,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: H,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: sa,
                    color: T,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            legend: {
                fontFamily: x,
                fontSize: 14,
                fontColor: X,
                fontWeight: "bold",
                verticalAlign: "bottom",
                horizontalAlign: "center"
            },
            toolTip: {
                fontFamily: x,
                fontSize: 14,
                fontStyle: "normal",
                cornerRadius: 0,
                borderThickness: 1
            }
        };
    L = "#2A2A2A";
    F = X = "#F5F5F5";
    L = "#FFFFFF";
    T = "#40BAF1";
    sa = "#F5F5F5";
    var ka = 20,
        H = 14,
        Ia = {
            colorSet: "colorSet2",
            title: {
                fontFamily: x,
                fontSize: 33,
                fontColor: "#3A3A3A",
                fontWeight: "bold",
                verticalAlign: "top",
                margin: 5
            },
            subtitles: [{
                fontFamily: x,
                fontSize: H,
                fontColor: "#3A3A3A",
                fontWeight: "normal",
                verticalAlign: "top",
                margin: 5
            }],
            data: [{
                indexLabelFontFamily: x,
                indexLabelFontSize: H,
                indexLabelFontColor: "#666666",
                indexLabelFontWeight: "normal",
                indexLabelLineThickness: 1
            }],
            axisX: [{
                titleFontFamily: x,
                titleFontSize: ka,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: "#BBBBBB",
                tickThickness: 1,
                tickColor: "#BBBBBB",
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: H,
                    labelFontColor: "#FFA500",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FFA500",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: H,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: "black",
                    color: "black",
                    thickness: 1,
                    lineDashType: "dot"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisX2: [{
                titleFontFamily: x,
                titleFontSize: ka,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: "#BBBBBB",
                tickColor: "#BBBBBB",
                tickThickness: 1,
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: H,
                    labelFontColor: "#FFA500",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FFA500",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: H,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: "black",
                    color: "black",
                    thickness: 1,
                    lineDashType: "dot"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisY: [{
                titleFontFamily: x,
                titleFontSize: ka,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 0,
                lineColor: "#BBBBBB",
                tickColor: "#BBBBBB",
                tickThickness: 1,
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: H,
                    labelFontColor: "#FFA500",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FFA500",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: H,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: "black",
                    color: "black",
                    thickness: 1,
                    lineDashType: "dot"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisY2: [{
                titleFontFamily: x,
                titleFontSize: ka,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 0,
                lineColor: "#BBBBBB",
                tickColor: "#BBBBBB",
                tickThickness: 1,
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: H,
                    labelFontColor: "#FFA500",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FFA500",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: H,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: "black",
                    color: "black",
                    thickness: 1,
                    lineDashType: "dot"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            legend: {
                fontFamily: x,
                fontSize: 14,
                fontColor: "#3A3A3A",
                fontWeight: "bold",
                verticalAlign: "bottom",
                horizontalAlign: "center"
            },
            toolTip: {
                fontFamily: x,
                fontSize: 14,
                fontStyle: "normal",
                cornerRadius: 0,
                borderThickness: 1
            }
        };
    F = X = "#F5F5F5";
    L = "#FFFFFF";
    T = "#40BAF1";
    sa = "#F5F5F5";
    ka = 20;
    H = 14;
    za = {
        colorSet: "colorSet12",
        backgroundColor: "#2A2A2A",
        title: {
            fontFamily: za,
            fontSize: 32,
            fontColor: X,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
        },
        subtitles: [{
            fontFamily: za,
            fontSize: H,
            fontColor: X,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
        }],
        toolbar: {
            backgroundColor: "#666666",
            backgroundColorOnHover: "#FF7372",
            borderColor: "#FF7372",
            borderThickness: 1,
            fontColor: "#F5F5F5",
            fontColorOnHover: "#F5F5F5"
        },
        data: [{
            indexLabelFontFamily: x,
            indexLabelFontSize: H,
            indexLabelFontColor: F,
            indexLabelFontWeight: "normal",
            indexLabelLineThickness: 1
        }],
        axisX: [{
            titleFontFamily: x,
            titleFontSize: ka,
            titleFontColor: F,
            titleFontWeight: "normal",
            labelFontFamily: x,
            labelFontSize: H,
            labelFontColor: F,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: L,
            tickThickness: 1,
            tickColor: L,
            gridThickness: 0,
            gridColor: L,
            stripLines: [{
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: sa,
                color: T,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        axisX2: [{
            titleFontFamily: x,
            titleFontSize: ka,
            titleFontColor: F,
            titleFontWeight: "normal",
            labelFontFamily: x,
            labelFontSize: H,
            labelFontColor: F,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: L,
            tickThickness: 1,
            tickColor: L,
            gridThickness: 0,
            gridColor: L,
            stripLines: [{
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: sa,
                color: T,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        axisY: [{
            titleFontFamily: x,
            titleFontSize: ka,
            titleFontColor: F,
            titleFontWeight: "normal",
            labelFontFamily: x,
            labelFontSize: H,
            labelFontColor: F,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: L,
            tickThickness: 1,
            tickColor: L,
            gridThickness: 1,
            gridColor: L,
            stripLines: [{
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: sa,
                color: T,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        axisY2: [{
            titleFontFamily: x,
            titleFontSize: ka,
            titleFontColor: F,
            titleFontWeight: "normal",
            labelFontFamily: x,
            labelFontSize: H,
            labelFontColor: F,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: L,
            tickThickness: 1,
            tickColor: L,
            gridThickness: 1,
            gridColor: L,
            stripLines: [{
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: sa,
                color: T,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        legend: {
            fontFamily: x,
            fontSize: 14,
            fontColor: X,
            fontWeight: "bold",
            verticalAlign: "bottom",
            horizontalAlign: "center"
        },
        toolTip: {
            fontFamily: x,
            fontSize: 14,
            fontStyle: "normal",
            cornerRadius: 0,
            borderThickness: 1,
            fontColor: F,
            backgroundColor: "rgba(0, 0, 0, .7)"
        }
    };
    L = "#FFFFFF";
    F = X = "#FAFAFA";
    T = "#40BAF1";
    sa = "#F5F5F5";
    ka = 20;
    H = 14;
    T = {
        colorSet: "colorSet2",
        backgroundColor: "#32373A",
        title: {
            fontFamily: x,
            fontSize: 32,
            fontColor: X,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
        },
        subtitles: [{
            fontFamily: x,
            fontSize: H,
            fontColor: X,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
        }],
        toolbar: {
            backgroundColor: "#666666",
            backgroundColorOnHover: "#FF7372",
            borderColor: "#FF7372",
            borderThickness: 1,
            fontColor: "#F5F5F5",
            fontColorOnHover: "#F5F5F5"
        },
        data: [{
            indexLabelFontFamily: x,
            indexLabelFontSize: H,
            indexLabelFontColor: F,
            indexLabelFontWeight: "normal",
            indexLabelLineThickness: 1
        }],
        axisX: [{
            titleFontFamily: x,
            titleFontSize: ka,
            titleFontColor: F,
            titleFontWeight: "normal",
            labelFontFamily: x,
            labelFontSize: H,
            labelFontColor: F,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: L,
            tickThickness: 1,
            tickColor: L,
            gridThickness: 0,
            gridColor: L,
            stripLines: [{
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: sa,
                color: T,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        axisX2: [{
            titleFontFamily: x,
            titleFontSize: ka,
            titleFontColor: F,
            titleFontWeight: "normal",
            labelFontFamily: x,
            labelFontSize: H,
            labelFontColor: F,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: L,
            tickThickness: 1,
            tickColor: L,
            gridThickness: 0,
            gridColor: L,
            stripLines: [{
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: sa,
                color: T,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        axisY: [{
            titleFontFamily: x,
            titleFontSize: ka,
            titleFontColor: F,
            titleFontWeight: "normal",
            labelFontFamily: x,
            labelFontSize: H,
            labelFontColor: F,
            labelFontWeight: "normal",
            lineThickness: 0,
            lineColor: L,
            tickThickness: 1,
            tickColor: L,
            gridThickness: 1,
            gridColor: L,
            stripLines: [{
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: sa,
                color: T,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        axisY2: [{
            titleFontFamily: x,
            titleFontSize: ka,
            titleFontColor: F,
            titleFontWeight: "normal",
            labelFontFamily: x,
            labelFontSize: H,
            labelFontColor: F,
            labelFontWeight: "normal",
            lineThickness: 0,
            lineColor: L,
            tickThickness: 1,
            tickColor: L,
            gridThickness: 1,
            gridColor: L,
            stripLines: [{
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: x,
                labelFontSize: H,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: sa,
                color: T,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        legend: {
            fontFamily: x,
            fontSize: 14,
            fontColor: X,
            fontWeight: "bold",
            verticalAlign: "bottom",
            horizontalAlign: "center"
        },
        toolTip: {
            fontFamily: x,
            fontSize: 14,
            fontStyle: "normal",
            cornerRadius: 0,
            borderThickness: 1,
            fontColor: F,
            backgroundColor: "rgba(0, 0, 0, .7)"
        }
    };
    var ab = {
            light1: Fa,
            light2: Ia,
            dark1: za,
            dark2: T,
            theme1: Fa,
            theme2: Ia,
            theme3: Fa
        },
        S = {
            numberDuration: 1,
            yearDuration: 314496E5,
            monthDuration: 2592E6,
            weekDuration: 6048E5,
            dayDuration: 864E5,
            hourDuration: 36E5,
            minuteDuration: 6E4,
            secondDuration: 1E3,
            millisecondDuration: 1,
            dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
        };
    (function () {
        M.fSDec = function (l) {
            for (var e = "", v = 0; v < l.length; v++) e += String.fromCharCode(Math.ceil(l.length / 57 / 5) ^ l.charCodeAt(v));
            return e
        };
        M.obj = {
            trVs: "B`ow`rKR!Ush`m",
            fntStr: "qy!B`mhcsh-!Mtbhe`!Fs`oed-!Mtbhe`!R`or!Tohbned-!@sh`m-!r`or,rdshg",
            txtBl: "udyuC`rdmhod",
            fnt: "gnou",
            fSy: "ghmmRuxmd",
            fTx: "ghmmUdyu",
            grClr: "fsdx",
            cntx: "buy",
            tp: "unq",
            msTxt: "ld`rtsdUdyu"
        };
        delete ha[M.fSDec("Bi`su")][M.fSDec("bsdehuIsdg")];
        M.pro = {
            sCH: ha[M.fSDec("Bi`su")][M.fSDec("bsdehuIsdg")]
        };
        M.pos = ["cm", "cs", "um"];
        M._fTWm = function (l) {
            if ("undefined" === typeof M.pro.sCH && !lb) try {
                var e = (new Date).getMonth() % 3,
                    v, K, W = l[M.fSDec(M.obj.cntx)];
                W[M.fSDec(M.obj.txtBl)] = M.fSDec(M.obj.tp);
                W[M.fSDec(M.obj.fnt)] = 11 + M.fSDec(M.obj.fntStr);
                W[M.fSDec(M.obj.fSy)] = M.fSDec(M.obj.grClr);
                v = "cm" === M.pos[e] || "um" === M.pos[e] ? 0 : l.width - W[M.fSDec(M.obj.msTxt)](M.fSDec(M.obj.trVs)).width;
                K = "um" === M.pos[e] ? 0 : l.height - 11;
                W[M.fSDec(M.obj.fTx)](M.fSDec(M.obj.trVs),
                    v, K);
                "cs" === M.pos[e] && (l[M.fSDec("^bsdehuMhoj")].style.right = M.fSDec("`tun"))
            } catch (G) {}
        }
    })();
    var sb = function () {
            var l = !1;
            try {
                var e = Object.defineProperty && Object.defineProperty({}, "passive", {
                    get: function () {
                        l = !0;
                        return !1
                    }
                });
                window.addEventListener && (window.addEventListener("test", null, e), window.removeEventListener("test", null, e))
            } catch (v) {
                l = !1
            }
            return l
        }(),
        fb = {},
        Ea = null,
        mb = function (l) {
            var e = 0,
                v = 0;
            this.options.width ? e = this.width : this.width = e = 0 < this.container.clientWidth ? this.container.clientWidth : this.width;
            this.options.height ? v = this.height : this.height = v = 0 < this.container.clientHeight ? this.container.clientHeight : this.height;
            if (this.canvas.width !== e * ja || this.canvas.height !== v * ja) {
                for (var K = 0; K < l.length; K++) Ta(l[K], e, v);
                this.bounds = {
                    x1: 0,
                    y1: 0,
                    x2: this.width,
                    y2: this.height,
                    width: this.width,
                    height: this.height
                };
                return !0
            }
            return !1
        },
        nb = function () {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height))
        },
        ob = function (l,
            e, v) {
            e = Math.min(this.width, this.height);
            return Math.max("theme4" === this.theme ? 0 : 300 <= e ? 12 : 11, Math.round(e * (l / 400)))
        },
        Y = function () {
            var l = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
                e = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                v = "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                K = "January February March April May June July August September October November December".split(" "),
                W = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                G = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                A = /[^-+\dA-Z]/g;
            return function (x, z, N) {
                var H = N ? N.days : e,
                    L = N ? N.months : K,
                    P = N ? N.shortDays : v,
                    M = N ? N.shortMonths : W;
                N = "";
                var d = !1;
                x = x && x.getTime ? x : x ? new Date(x) : new Date;
                if (isNaN(x)) throw SyntaxError("invalid date");
                "UTC:" === z.slice(0, 4) && (z = z.slice(4), d = !0);
                N = d ? "getUTC" : "get";
                var r = x[N + "Date"](),
                    y = x[N + "Day"](),
                    u = x[N + "Month"](),
                    a = x[N + "FullYear"](),
                    f = x[N + "Hours"](),
                    b = x[N +
                        "Minutes"](),
                    c = x[N + "Seconds"](),
                    h = x[N + "Milliseconds"](),
                    g = d ? 0 : x.getTimezoneOffset();
                return N = z.replace(l, function (E) {
                    switch (E) {
                        case "D":
                            return r;
                        case "DD":
                            return na(r, 2);
                        case "DDD":
                            return P[y];
                        case "DDDD":
                            return H[y];
                        case "M":
                            return u + 1;
                        case "MM":
                            return na(u + 1, 2);
                        case "MMM":
                            return M[u];
                        case "MMMM":
                            return L[u];
                        case "Y":
                            return parseInt(String(a).slice(-2));
                        case "YY":
                            return na(String(a).slice(-2), 2);
                        case "YYY":
                            return na(String(a).slice(-3), 3);
                        case "YYYY":
                            return na(a, 4);
                        case "h":
                            return f % 12 || 12;
                        case "hh":
                            return na(f %
                                12 || 12, 2);
                        case "H":
                            return f;
                        case "HH":
                            return na(f, 2);
                        case "m":
                            return b;
                        case "mm":
                            return na(b, 2);
                        case "s":
                            return c;
                        case "ss":
                            return na(c, 2);
                        case "f":
                            return String(h).slice(0, 1);
                        case "ff":
                            return na(String(h).slice(0, 2), 2);
                        case "fff":
                            return na(String(h).slice(0, 3), 3);
                        case "t":
                            return 12 > f ? "a" : "p";
                        case "tt":
                            return 12 > f ? "am" : "pm";
                        case "T":
                            return 12 > f ? "A" : "P";
                        case "TT":
                            return 12 > f ? "AM" : "PM";
                        case "K":
                            return d ? "UTC" : (String(x).match(G) || [""]).pop().replace(A, "");
                        case "z":
                            return (0 < g ? "-" : "+") + Math.floor(Math.abs(g) /
                                60);
                        case "zz":
                            return (0 < g ? "-" : "+") + na(Math.floor(Math.abs(g) / 60), 2);
                        case "zzz":
                            return (0 < g ? "-" : "+") + na(Math.floor(Math.abs(g) / 60), 2) + na(Math.abs(g) % 60, 2);
                        default:
                            return E.slice(1, E.length - 1)
                    }
                })
            }
        }(),
        $ = function (l, e, v) {
            if (null === l) return "";
            if (!isFinite(l)) return l;
            l = Number(l);
            var K = 0 > l ? !0 : !1;
            K && (l *= -1);
            var x = v ? v.decimalSeparator : ".",
                G = v ? v.digitGroupSeparator : ",",
                A = "";
            e = String(e);
            var A = 1,
                z = v = "",
                H = -1,
                N = [],
                L = [],
                P = 0,
                M = 0,
                F = 0,
                d = !1,
                r = 0,
                z = e.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
            e = null;
            for (var y =
                    0; z && y < z.length; y++)
                if (e = z[y], "." === e && 0 > H) H = y;
                else {
                    if ("%" === e) A *= 100;
                    else if ("\u2030" === e) {
                        A *= 1E3;
                        continue
                    } else if ("," === e[0] && "." === e[e.length - 1]) {
                        A /= Math.pow(1E3, e.length - 1);
                        H = y + e.length - 1;
                        continue
                    } else "E" !== e[0] && "e" !== e[0] || "0" !== e[e.length - 1] || (d = !0);
                    0 > H ? (N.push(e), "#" === e || "0" === e ? P++ : "," === e && F++) : (L.push(e), "#" !== e && "0" !== e || M++)
                } d && (e = Math.floor(l), z = -Math.floor(Math.log(l) / Math.LN10 + 1), r = 0 === l ? 0 : 0 === e ? -(P + z) : String(e).length - P, A /= Math.pow(10, r));
            0 > H && (H = y);
            A = (l * A).toFixed(M);
            e = A.split(".");
            A = (e[0] + "").split("");
            l = (e[1] + "").split("");
            A && "0" === A[0] && A.shift();
            for (d = z = y = M = H = 0; 0 < N.length;)
                if (e = N.pop(), "#" === e || "0" === e)
                    if (H++, H === P) {
                        var u = A,
                            A = [];
                        if ("0" === e)
                            for (e = P - M - (u ? u.length : 0); 0 < e;) u.unshift("0"), e--;
                        for (; 0 < u.length;) v = u.pop() + v, d++, 0 === d % z && (y === F && 0 < u.length) && (v = G + v)
                    } else 0 < A.length ? (v = A.pop() + v, M++, d++) : "0" === e && (v = "0" + v, M++, d++), 0 === d % z && (y === F && 0 < A.length) && (v = G + v);
            else "E" !== e[0] && "e" !== e[0] || "0" !== e[e.length - 1] || !/[eE][+-]*[0]+/.test(e) ? "," === e ? (y++, z = d, d = 0, 0 < A.length && (v = G + v)) :
                v = 1 < e.length && ('"' === e[0] && '"' === e[e.length - 1] || "'" === e[0] && "'" === e[e.length - 1]) ? e.slice(1, e.length - 1) + v : e + v : (e = 0 > r ? e.replace("+", "").replace("-", "") : e.replace("-", ""), v += e.replace(/[0]+/, function (a) {
                    return na(r, a.length)
                }));
            G = "";
            for (N = !1; 0 < L.length;) e = L.shift(), "#" === e || "0" === e ? 0 < l.length && 0 !== Number(l.join("")) ? (G += l.shift(), N = !0) : "0" === e && (G += "0", N = !0) : 1 < e.length && ('"' === e[0] && '"' === e[e.length - 1] || "'" === e[0] && "'" === e[e.length - 1]) ? G += e.slice(1, e.length - 1) : "E" !== e[0] && "e" !== e[0] || "0" !== e[e.length -
                1] || !/[eE][+-]*[0]+/.test(e) ? G += e : (e = 0 > r ? e.replace("+", "").replace("-", "") : e.replace("-", ""), G += e.replace(/[0]+/, function (a) {
                return na(r, a.length)
            }));
            v += (N ? x : "") + G;
            return K ? "-" + v : v
        },
        Aa = function (e) {
            var v = 0,
                V = 0;
            e = e || window.event;
            e.offsetX || 0 === e.offsetX ? (v = e.offsetX, V = e.offsetY) : e.layerX || 0 == e.layerX ? (v = e.layerX, V = e.layerY) : (v = e.pageX - e.target.offsetLeft, V = e.pageY - e.target.offsetTop);
            return {
                x: v,
                y: V
            }
        },
        kb = !0,
        Ya = window.devicePixelRatio || 1,
        Ua = 1,
        ja = kb ? Ya / Ua : 1,
        da = function (e, v, V, K, x, G, A, z, H, N, L, P, M) {
            "undefined" ===
            typeof M && (M = 1);
            A = A || 0;
            z = z || "black";
            var F = 15 < K - v && 15 < x - V ? 8 : 0.35 * Math.min(K - v, x - V);
            e.beginPath();
            e.moveTo(v, V);
            e.save();
            e.fillStyle = G;
            e.globalAlpha = M;
            e.fillRect(v, V, K - v, x - V);
            e.globalAlpha = 1;
            0 < A && (M = 0 === A % 2 ? 0 : 0.5, e.beginPath(), e.lineWidth = A, e.strokeStyle = z, e.moveTo(v, V), e.rect(v - M, V - M, K - v + 2 * M, x - V + 2 * M), e.stroke());
            e.restore();
            !0 === H && (e.save(), e.beginPath(), e.moveTo(v, V), e.lineTo(v + F, V + F), e.lineTo(K - F, V + F), e.lineTo(K, V), e.closePath(), A = e.createLinearGradient((K + v) / 2, V + F, (K + v) / 2, V), A.addColorStop(0, G),
                A.addColorStop(1, "rgba(255, 255, 255, .4)"), e.fillStyle = A, e.fill(), e.restore());
            !0 === N && (e.save(), e.beginPath(), e.moveTo(v, x), e.lineTo(v + F, x - F), e.lineTo(K - F, x - F), e.lineTo(K, x), e.closePath(), A = e.createLinearGradient((K + v) / 2, x - F, (K + v) / 2, x), A.addColorStop(0, G), A.addColorStop(1, "rgba(255, 255, 255, .4)"), e.fillStyle = A, e.fill(), e.restore());
            !0 === L && (e.save(), e.beginPath(), e.moveTo(v, V), e.lineTo(v + F, V + F), e.lineTo(v + F, x - F), e.lineTo(v, x), e.closePath(), A = e.createLinearGradient(v + F, (x + V) / 2, v, (x + V) / 2), A.addColorStop(0,
                G), A.addColorStop(1, "rgba(255, 255, 255, 0.1)"), e.fillStyle = A, e.fill(), e.restore());
            !0 === P && (e.save(), e.beginPath(), e.moveTo(K, V), e.lineTo(K - F, V + F), e.lineTo(K - F, x - F), e.lineTo(K, x), A = e.createLinearGradient(K - F, (x + V) / 2, K, (x + V) / 2), A.addColorStop(0, G), A.addColorStop(1, "rgba(255, 255, 255, 0.1)"), e.fillStyle = A, A.addColorStop(0, G), A.addColorStop(1, "rgba(255, 255, 255, 0.1)"), e.fillStyle = A, e.fill(), e.closePath(), e.restore())
        },
        va = function (e) {
            for (var v = "", V = 0; V < e.length; V++) v += String.fromCharCode(Math.ceil(e.length /
                57 / 5) ^ e.charCodeAt(V));
            return v
        },
        lb = window && window[va("mnb`uhno")] && window[va("mnb`uhno")].href && window[va("mnb`uhno")].href.indexOf && (-1 !== window[va("mnb`uhno")].href.indexOf(va("b`ow`rkr/bnl")) || -1 !== window[va("mnb`uhno")].href.indexOf(va("gdonqhy/bnl")) || -1 !== window[va("mnb`uhno")].href.indexOf(va("gheemd"))),
        ub = lb && -1 === window[va("mnb`uhno")].href.indexOf(va("gheemd")),
        vb = {
            reset: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg=="
            },
            pan: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC"
            },
            zoom: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII="
            },
            menu: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC"
            }
        };
    Z.prototype.setOptions = function (e, v) {
        if (ha[this._defaultsKey]) {
            var V = ha[this._defaultsKey],
                x;
            for (x in V) "publicProperties" !== x && V.hasOwnProperty(x) && (this[x] = e && x in e ? e[x] : v && x in v ? v[x] : V[x])
        } else Ma && window.console && console.log("defaults not set")
    };
    Z.prototype.get = function (e) {
        var v = ha[this._defaultsKey];
        if ("options" === e) return this.options && this.options._isPlaceholder ? null : this.options;
        if (v.hasOwnProperty(e) || v.publicProperties && v.publicProperties.hasOwnProperty(e)) return this[e];
        window.console &&
            window.console.log('Property "' + e + "\" doesn't exist. Please check for typo.")
    };
    Z.prototype.set = function (e, v, V) {
        V = "undefined" === typeof V ? !0 : V;
        var x = ha[this._defaultsKey];
        if ("options" === e) this.createUserOptions(v);
        else if (x.hasOwnProperty(e) || x.publicProperties && x.publicProperties.hasOwnProperty(e) && "readWrite" === x.publicProperties[e]) this.options._isPlaceholder && this.createUserOptions(), this.options[e] = v;
        else {
            window.console && (x.publicProperties && x.publicProperties.hasOwnProperty(e) && "readOnly" === x.publicProperties[e] ?
                window.console.log('Property "' + e + '" is read-only.') : window.console.log('Property "' + e + "\" doesn't exist. Please check for typo."));
            return
        }
        V && (this.stockChart || this.chart || this).render()
    };
    Z.prototype.addTo = function (e, v, x, K) {
        K = "undefined" === typeof K ? !0 : K;
        var z = ha[this._defaultsKey];
        z.hasOwnProperty(e) || z.publicProperties && z.publicProperties.hasOwnProperty(e) && "readWrite" === z.publicProperties[e] ? (this.options._isPlaceholder && this.createUserOptions(), "undefined" === typeof this.options[e] && (this.options[e] = []), e = this.options[e], x = "undefined" === typeof x || null === x ? e.length : x, e.splice(x, 0, v), K && (this.stockChart || this.chart || this).render()) : window.console && (z.publicProperties && z.publicProperties.hasOwnProperty(e) && "readOnly" === z.publicProperties[e] ? window.console.log('Property "' + e + '" is read-only.') : window.console.log('Property "' + e + "\" doesn't exist. Please check for typo."))
    };
    Z.prototype.createUserOptions = function (e) {
        if ("undefined" !== typeof e || this.options._isPlaceholder)
            if (this.parent.options._isPlaceholder &&
                this.parent.createUserOptions(), this.isOptionsInArray) {
                this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
                var v = this.parent.options[this.optionsName],
                    x = v.length;
                this.options._isPlaceholder || (Da(v), x = v.indexOf(this.options));
                this.options = "undefined" === typeof e ? {} : e;
                v[x] = this.options
            } else this.options = "undefined" === typeof e ? {} : e, e = this.parent.options, this.optionsName ? v = this.optionsName : (v = this._defaultsKey) && 0 !== v.length ? (x = v.charAt(0).toLowerCase(), 1 < v.length && (x = x.concat(v.slice(1))),
                v = x) : v = void 0, e[v] = this.options
    };
    Z.prototype.remove = function (e) {
        e = "undefined" === typeof e ? !0 : e;
        if (this.isOptionsInArray) {
            var v = this.parent.options[this.optionsName];
            Da(v);
            var x = v.indexOf(this.options);
            0 <= x && v.splice(x, 1)
        } else delete this.parent.options[this.optionsName];
        e && (this.stockChart || this.chart || this).render()
    };
    Z.prototype.updateOption = function (l) {
        !ha[this._defaultsKey] && (Ma && window.console) && console.log("defaults not set");
        var v = ha[this._defaultsKey],
            x = {},
            K = this[l],
            z = this._themeOptionsKey,
            G = this._index;
        this.theme && e(this.parent) && e(z) && e(G) ? x = e(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[z]) && (null === G ? x = this.parent.themeOptions[z] : 0 < this.parent.themeOptions[z].length && (x = Math.min(this.parent.themeOptions[z].length - 1, G), x = this.parent.themeOptions[z][x]));
        this.themeOptions = x;
        l in v && (K = l in this.options ? this.options[l] : x && l in x ? x[l] : v[l]);
        if (K === this[l]) return !1;
        this[l] =
            K;
        return !0
    };
    Z.prototype.trackChanges = function (e) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        this.sessionVariables[e] = this.options[e]
    };
    Z.prototype.isBeingTracked = function (e) {
        this.options._oldOptions || (this.options._oldOptions = {});
        return this.options._oldOptions[e] ? !0 : !1
    };
    Z.prototype.hasOptionChanged = function (e) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        return this.sessionVariables[e] !== this.options[e]
    };
    Z.prototype.addEventListener = function (e, v, x) {
        e && v && (this._eventListeners[e] =
            this._eventListeners[e] || [], this._eventListeners[e].push({
                context: x || this,
                eventHandler: v
            }))
    };
    Z.prototype.removeEventListener = function (e, v) {
        if (e && v && this._eventListeners[e])
            for (var x = this._eventListeners[e], K = 0; K < x.length; K++)
                if (x[K].eventHandler === v) {
                    x[K].splice(K, 1);
                    break
                }
    };
    Z.prototype.removeAllEventListeners = function () {
        this._eventListeners = []
    };
    Z.prototype.dispatchEvent = function (e, v, x) {
        if (e && this._eventListeners[e]) {
            v = v || {};
            for (var K = this._eventListeners[e], z = 0; z < K.length; z++) K[z].eventHandler.call(K[z].context,
                v)
        }
        "function" === typeof this[e] && this[e].call(x || this.chart, v)
    };
    Ka.prototype.registerSpace = function (e, v) {
        "top" === e ? this._topOccupied += v.height : "bottom" === e ? this._bottomOccupied += v.height : "left" === e ? this._leftOccupied += v.width : "right" === e && (this._rightOccupied += v.width)
    };
    Ka.prototype.unRegisterSpace = function (e, v) {
        "top" === e ? this._topOccupied -= v.height : "bottom" === e ? this._bottomOccupied -= v.height : "left" === e ? this._leftOccupied -= v.width : "right" === e && (this._rightOccupied -= v.width)
    };
    Ka.prototype.getFreeSpace =
        function () {
            return {
                x1: this._x1 + this._leftOccupied,
                y1: this._y1 + this._topOccupied,
                x2: this._x2 - this._rightOccupied,
                y2: this._y2 - this._bottomOccupied,
                width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied,
                height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied
            }
        };
    Ka.prototype.reset = function () {
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    };
    ga(ma, Z);
    ma.prototype._initialize = function () {
        e(this.padding) || "object" !== typeof this.padding ? this.topPadding =
            this.rightPadding = this.bottomPadding = this.leftPadding = Number(this.padding) | 0 : (this.topPadding = e(this.padding.top) ? 0 : Number(this.padding.top) | 0, this.rightPadding = e(this.padding.right) ? 0 : Number(this.padding.right) | 0, this.bottomPadding = e(this.padding.bottom) ? 0 : Number(this.padding.bottom) | 0, this.leftPadding = e(this.padding.left) ? 0 : Number(this.padding.left) | 0)
    };
    ma.prototype.render = function (e) {
        if (0 !== this.fontSize) {
            e && this.ctx.save();
            var v = this.ctx.font;
            this.ctx.textBaseline = this.textBaseline;
            var x = 0;
            this._isDirty &&
                this.measureText(this.ctx);
            this.ctx.translate(this.x, this.y + x);
            "middle" === this.textBaseline && (x = -this._lineHeight / 2);
            this.ctx.font = this._getFontString();
            this.ctx.rotate(Math.PI / 180 * this.angle);
            var z = 0,
                H = this.topPadding,
                G = null;
            this.ctx.roundRect || Ga(this.ctx);
            (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, x, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
            this.ctx.fillStyle = this.fontColor;
            for (x = 0; x < this._wrappedText.lines.length; x++) {
                G =
                    this._wrappedText.lines[x];
                if ("right" === this.horizontalAlign || "right" === this.textAlign) z = this.width - G.width - this.rightPadding;
                else if ("left" === this.horizontalAlign || "left" === this.textAlign) z = this.leftPadding;
                else if ("center" === this.horizontalAlign || "center" === this.textAlign) z = (this.width - (this.leftPadding + this.rightPadding)) / 2 - G.width / 2 + this.leftPadding;
                this.ctx.fillText(G.text, z, H);
                H += G.height
            }
            this.ctx.font = v;
            e && this.ctx.restore()
        }
    };
    ma.prototype.setText = function (e) {
        this.text = e;
        this._isDirty = !0;
        this._wrappedText =
            null
    };
    ma.prototype.measureText = function () {
        this._lineHeight = eb(this.fontFamily, this.fontSize, this.fontWeight);
        if (null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = !1;
        return {
            width: this.width,
            height: this.height
        }
    };
    ma.prototype._getLineWithWidth = function (e, v, x) {
        e = String(e);
        if (!e) return {
            text: "",
            width: 0
        };
        var z = x = 0,
            H = e.length - 1,
            G = Infinity;
        for (this.ctx.font = this._getFontString(); z <= H;) {
            var G = Math.floor((z + H) / 2),
                A = e.substr(0, G + 1);
            x = this.ctx.measureText(A).width;
            if (x < v) z = G + 1;
            else if (x > v) H = G - 1;
            else break
        }
        x > v && 1 < A.length && (A = A.substr(0, A.length - 1), x = this.ctx.measureText(A).width);
        v = !0;
        if (A.length === e.length || " " === e[A.length]) v = !1;
        v && (e = A.split(" "), 1 < e.length && e.pop(), A = e.join(" "), x = this.ctx.measureText(A).width);
        return {
            text: A,
            width: x
        }
    };
    ma.prototype._wrapText = function () {
        var e = new String(Pa(String(this.text))),
            v = [],
            x = this.ctx.font,
            z = 0,
            H = 0;
        this.ctx.font = this._getFontString();
        if (0 === this.frontSize) H = z = 0;
        else
            for (; 0 < e.length;) {
                var G = this.maxHeight - (this.topPadding +
                        this.bottomPadding),
                    A = this._getLineWithWidth(e, this.maxWidth - (this.leftPadding + this.rightPadding), !1);
                A.height = this._lineHeight;
                v.push(A);
                var F = H,
                    H = Math.max(H, A.width),
                    z = z + A.height,
                    e = Pa(e.slice(A.text.length, e.length));
                G && z > G && (A = v.pop(), z -= A.height, H = F)
            }
        this._wrappedText = {
            lines: v,
            width: H,
            height: z
        };
        this.width = H + (this.leftPadding + this.rightPadding);
        this.height = z + (this.topPadding + this.bottomPadding);
        this.ctx.font = x
    };
    ma.prototype._getFontString = function () {
        var e;
        e = "" + (this.fontStyle ? this.fontStyle + " " :
            "");
        e += this.fontWeight ? this.fontWeight + " " : "";
        e += this.fontSize ? this.fontSize + "px " : "";
        var t = this.fontFamily ? this.fontFamily + "" : "";
        !v && t && (t = t.split(",")[0], "'" !== t[0] && '"' !== t[0] && (t = "'" + t + "'"));
        return e += t
    };
    ga(Wa, Z);
    ga(Ha, Z);
    Ha.prototype.setLayout = function () {
        if (this.text) {
            var v = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                t = v.layoutManager.getFreeSpace(),
                x = t.x1,
                z = t.y1,
                H = 0,
                G = 0,
                A = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 22 : 0,
                F, M;
            "top" === this.verticalAlign ||
                "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = t.width - 4 - A * ("center" === this.horizontalAlign ? 2 : 1)), G = 0.5 * t.height - this.margin - 2, H = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = t.height - 4), G = 0.5 * t.width - this.margin - 2) : "center" === this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = t.width - 4), G = 0.5 * t.height - 4));
            var N;
            e(this.padding) || "number" !== typeof this.padding ? e(this.padding) || "object" !==
                typeof this.padding || (N = this.padding.top ? this.padding.top : this.padding.bottom ? this.padding.bottom : 0, N += this.padding.bottom ? this.padding.bottom : this.padding.top ? this.padding.top : 0) : N = 2 * this.padding;
            this.wrap || (G = Math.min(G, 1.5 * this.fontSize + N));
            G = new ma(this.ctx, {
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontColor: this.fontColor,
                fontStyle: this.fontStyle,
                fontWeight: this.fontWeight,
                horizontalAlign: this.horizontalAlign,
                verticalAlign: this.verticalAlign,
                borderColor: this.borderColor,
                borderThickness: this.borderThickness,
                backgroundColor: this.backgroundColor,
                maxWidth: this.maxWidth,
                maxHeight: G,
                cornerRadius: this.cornerRadius,
                text: this.text,
                padding: this.padding,
                textBaseline: "top"
            });
            N = G.measureText();
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (z = t.y1 + 2, M = "top") : "bottom" === this.verticalAlign && (z = t.y2 - 2 - N.height, M = "bottom"), "left" === this.horizontalAlign ? x = t.x1 + 2 : "center" === this.horizontalAlign ? x = t.x1 + t.width / 2 - N.width / 2 : "right" === this.horizontalAlign && (x = t.x2 - 2 - N.width - A), F = this.horizontalAlign,
                this.width = N.width, this.height = N.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (x = t.x1 + 2, z = t.y2 - 2 - (this.maxWidth / 2 - N.width / 2), H = -90, M = "left", this.width = N.height, this.height = N.width) : "right" === this.horizontalAlign ? (x = t.x2 - 2, z = t.y1 + 2 + (this.maxWidth / 2 - N.width / 2), H = 90, M = "right", this.width = N.height, this.height = N.width) : "center" === this.horizontalAlign && (z = v.y1 + (v.height / 2 - N.height / 2), x = v.x1 + (v.width / 2 - N.width / 2), M = "center", this.width = N.width, this.height = N.height), F = "center");
            G.x =
                x;
            G.y = z;
            G.angle = H;
            G.horizontalAlign = F;
            this._textBlock = G;
            v.layoutManager.registerSpace(M, {
                width: this.width + ("left" === M || "right" === M ? this.margin + 2 : 0),
                height: this.height + ("top" === M || "bottom" === M ? this.margin + 2 : 0)
            });
            this.bounds = {
                x1: x,
                y1: z,
                x2: x + this.width,
                y2: z + this.height
            };
            this.ctx.textBaseline = "top"
        }
    };
    Ha.prototype.render = function () {
        this._textBlock && this._textBlock.render(!0)
    };
    ga(Na, Z);
    Na.prototype.setLayout = Ha.prototype.setLayout;
    Na.prototype.render = Ha.prototype.render;
    $a.prototype.get = function (e, v) {
        var x =
            null;
        0 < this.pool.length ? (x = this.pool.pop(), Ta(x, e, v)) : x = ra(e, v);
        return x
    };
    $a.prototype.release = function (e) {
        this.pool.push(e)
    };
    ga(Oa, Z);
    var Ra = {
        addTheme: function (e, v) {
            ab[e] = v
        },
        addColorSet: function (e, v) {
            xa[e] = v
        },
        addCultureInfo: function (e, v) {
            Qa[e] = v
        },
        formatNumber: function (e, v, x) {
            x = x || "en";
            if (Qa[x]) return $(e, v || "#,##0.##", new Oa(x));
            throw "Unknown Culture Name";
        },
        formatDate: function (e, v, x) {
            x = x || "en";
            if (Qa[x]) return Y(e, v || "DD MMM YYYY", new Oa(x));
            throw "Unknown Culture Name";
        }
    };
    "undefined" !== typeof module &&
        "undefined" !== typeof module.exports ? module.exports = Ra : "function" === typeof define && define.amd ? define([], function () {
            return Ra
        }) : (window.StockJS && window.console && window.console.log("StockJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."), window.StockJS = window.StockJS ? window.StockJS : Ra);
    var Ja = Ra.Chart = function () {
        function l(a, f) {
            return a.x - f.x
        }

        function t(a, f, b) {
            f = f || {};
            e(b) ? (this.predefinedThemes = ab, this.optionsName =
                this.parent = this.index = null) : (this.parent = b.parent, this.index = b.index, this.predefinedThemes = b.predefinedThemes, this.optionsName = b.optionsName, this.stockChart = b.stockChart, this.panel = a, this.isOptionsInArray = b.isOptionsInArray);
            this.theme = e(f.theme) || e(this.predefinedThemes[f.theme]) ? "light1" : f.theme;
            t.base.constructor.call(this, "Chart", this.optionsName, f, this.index, this.parent);
            var c = this;
            this._containerId = a;
            this._objectsInitialized = !1;
            this.overlaidCanvasCtx = this.ctx = null;
            this._indexLabels = [];
            this._panTimerId =
                0;
            this._lastTouchEventType = "";
            this._lastTouchData = null;
            this.isAnimating = !1;
            this.renderCount = 0;
            this.disableToolTip = this.animatedRender = !1;
            this.canvasPool = new $a;
            this.allDOMEventHandlers = [];
            this.panEnabled = !1;
            this._defaultCursor = "default";
            this.plotArea = {
                canvas: null,
                ctx: null,
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                width: 0,
                height: 0
            };
            this._dataInRenderedOrder = [];
            (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this.container.innerHTML = "", f = a = 0, a = this.options.width ?
                this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width, f = this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height, this.width = a, this.height = f, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, this.selectedColorSet = "undefined" !== typeof xa[this.colorSet] ? xa[this.colorSet] : xa.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "stockjs-chart-container"), this._canvasJSContainer.style.position =
                "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", this._canvasJSContainer.style.direction = "ltr", v || (this._canvasJSContainer.style.height = "0px"), this.container.appendChild(this._canvasJSContainer), this.canvas = ra(a, f), this._preRenderCanvas = ra(a, f), this.canvas.style.position = "absolute", this.canvas.style.WebkitUserSelect = "none", this.canvas.style.MozUserSelect = "none", this.canvas.style.msUserSelect = "none", this.canvas.style.userSelect = "none", this.canvas.getContext &&
                (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Ga(this.ctx), this._preRenderCtx = this._preRenderCanvas.getContext("2d"), this._preRenderCtx.textBaseline = "top", Ga(this._preRenderCtx), v ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = ra(a, f), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")),
                    this.overlaidCanvas = ra(a, f), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.style.WebkitUserSelect = "none", this.overlaidCanvas.style.MozUserSelect = "none", this.overlaidCanvas.style.msUserSelect = "none", this.overlaidCanvas.style.userSelect = "none", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline =
                        "top", Ga(this.overlaidCanvasCtx)), this._eventManager = new ha(this), this.windowResizeHandler = z(window, "resize", function () {
                        c._updateSize() && c.render()
                    }, this.allDOMEventHandlers), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "stockjs-chart-toolbar"), this._toolBar.style.cssText = "position: absolute; right: 1px; top: 1px;", this._canvasJSContainer.appendChild(this._toolBar), this.bounds = {
                        x1: 0,
                        y1: 0,
                        x2: this.width,
                        y2: this.height
                    }, z(this.overlaidCanvas, "click", function (a) {
                            c._mouseEventHandler(a)
                        },
                        this.allDOMEventHandlers), z(this.overlaidCanvas, "mousemove", function (a) {
                        c._mouseEventHandler(a)
                    }, this.allDOMEventHandlers), z(this.overlaidCanvas, "mouseup", function (a) {
                        c._mouseEventHandler(a)
                    }, this.allDOMEventHandlers), z(this.overlaidCanvas, "mousedown", function (a) {
                        c._mouseEventHandler(a);
                        ya(c._dropdownMenu)
                    }, this.allDOMEventHandlers), z(this.overlaidCanvas, "mouseout", function (a) {
                        c._mouseEventHandler(a)
                    }, this.allDOMEventHandlers), z(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" :
                        "touchstart",
                        function (a) {
                            c._touchEventHandler(a)
                        }, this.allDOMEventHandlers), z(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function (a) {
                        c._touchEventHandler(a)
                    }, this.allDOMEventHandlers), z(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function (a) {
                        c._touchEventHandler(a)
                    }, this.allDOMEventHandlers), z(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function (a) {
                        c._touchEventHandler(a)
                    }, this.allDOMEventHandlers),
                    this.toolTip = new oa(this, this.options.toolTip), this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], this.sessionVariables = {
                        axisX: [],
                        axisX2: [],
                        axisY: [],
                        axisY2: []
                    })) : window.console && window.console.log('StockJS Error: Chart Container with id "' + this._containerId + '" was not found')
        }

        function x(a, f) {
            for (var b = [], c, h = 0; h < a.length; h++)
                if (0 == h) b.push(a[0]);
                else {
                    var g, E, e;
                    e = h - 1;
                    g = 0 === e ? 0 : e - 1;
                    E = e === a.length - 1 ? e : e + 1;
                    c = Math.abs((a[E].x - a[g].x) / (0 === a[E].x - a[e].x ? 0.01 : a[E].x - a[e].x)) * (f - 1) /
                        2 + 1;
                    var d = (a[E].x - a[g].x) / c;
                    c = (a[E].y - a[g].y) / c;
                    b[b.length] = a[e].x > a[g].x && 0 < d || a[e].x < a[g].x && 0 > d ? {
                        x: a[e].x + d / 3,
                        y: a[e].y + c / 3
                    } : {
                        x: a[e].x,
                        y: a[e].y + c / 9
                    };
                    e = h;
                    g = 0 === e ? 0 : e - 1;
                    E = e === a.length - 1 ? e : e + 1;
                    c = Math.abs((a[E].x - a[g].x) / (0 === a[e].x - a[g].x ? 0.01 : a[e].x - a[g].x)) * (f - 1) / 2 + 1;
                    d = (a[E].x - a[g].x) / c;
                    c = (a[E].y - a[g].y) / c;
                    b[b.length] = a[e].x > a[g].x && 0 < d || a[e].x < a[g].x && 0 > d ? {
                        x: a[e].x - d / 3,
                        y: a[e].y - c / 3
                    } : {
                        x: a[e].x,
                        y: a[e].y - c / 9
                    };
                    b[b.length] = a[h]
                } return b
        }

        function H(a, f, b, c, h, g, E, e, d, m) {
            var n = 0;
            m ? (E.color = g, e.color = g) :
                m = 1;
            n = d ? Math.abs(h - b) : Math.abs(c - f);
            n = 0 < E.trimLength ? Math.abs(n * E.trimLength / 100) : Math.abs(n - E.length);
            d ? (b += n / 2, h -= n / 2) : (f += n / 2, c -= n / 2);
            var n = 1 === Math.round(E.thickness) % 2 ? 0.5 : 0,
                p = 1 === Math.round(e.thickness) % 2 ? 0.5 : 0;
            a.save();
            a.globalAlpha = m;
            a.strokeStyle = e.color || g;
            a.lineWidth = e.thickness || 2;
            a.setLineDash && a.setLineDash(P(e.dashType, e.thickness));
            a.beginPath();
            d && 0 < e.thickness ? (a.moveTo(c - E.thickness / 2, Math.round((b + h) / 2) - p), a.lineTo(f + E.thickness / 2, Math.round((b + h) / 2) - p)) : 0 < e.thickness && (a.moveTo(Math.round((f +
                c) / 2) - p, b + E.thickness / 2), a.lineTo(Math.round((f + c) / 2) - p, h - E.thickness / 2));
            a.stroke();
            a.strokeStyle = E.color || g;
            a.lineWidth = E.thickness || 2;
            a.setLineDash && a.setLineDash(P(E.dashType, E.thickness));
            a.beginPath();
            d && 0 < E.thickness ? (a.moveTo(c - n, b), a.lineTo(c - n, h), a.moveTo(f + n, b), a.lineTo(f + n, h)) : 0 < E.thickness && (a.moveTo(f, b + n), a.lineTo(c, b + n), a.moveTo(f, h - n), a.lineTo(c, h - n));
            a.stroke();
            a.restore()
        }

        function F(a, f) {
            F.base.constructor.call(this, "Legend", "legend", f, null, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = this.chart.ctx;
            this.ghostCtx = this.chart._eventManager.ghostCtx;
            this.items = [];
            this.optionsName = "legend";
            this.height = this.width = 0;
            this.orientation = null;
            this.dataSeries = [];
            this.bounds = {
                x1: null,
                y1: null,
                x2: null,
                y2: null
            };
            "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
            this.lineHeight = eb(this.fontFamily, this.fontSize, this.fontWeight);
            this.horizontalSpacing = this.fontSize
        }

        function G(a, f, b, c) {
            G.base.constructor.call(this, "DataSeries", "data", f, b,
                a);
            this.chart = a;
            this.canvas = a.canvas;
            this._ctx = a.canvas.ctx;
            this.index = b;
            this.noDataPointsInPlotArea = 0;
            this.id = c;
            this.chart._eventManager.objectMap[c] = {
                id: c,
                objectType: "dataSeries",
                dataSeriesIndex: b
            };
            a = f.dataPoints ? f.dataPoints.length : 0;
            this.dataPointEOs = [];
            for (f = 0; f < a; f++) this.dataPointEOs[f] = {};
            this.dataPointIds = [];
            this.plotUnit = [];
            this.axisY = this.axisX = null;
            this.optionsName = "data";
            this.isOptionsInArray = !0;
            null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity =
                1);
            this.axisPlacement = this.getDefaultAxisPlacement();
            "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize))
        }

        function A(a, f, b, c, h, g) {
            A.base.constructor.call(this, "Axis", f, b, c, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = a.ctx;
            this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
            this.labels = [];
            this.dataSeries = [];
            this._stripLineLabels = this._ticks = this._labels = null;
            this.dataInfo = {
                min: Infinity,
                max: -Infinity,
                viewPortMin: Infinity,
                viewPortMax: -Infinity,
                minDiff: Infinity
            };
            this.isOptionsInArray = !0;
            "axisX" === h ? ("left" === g || "bottom" === g ? (this.optionsName = "axisX", e(this.chart.sessionVariables.axisX[c]) && (this.chart.sessionVariables.axisX[c] = {}), this.sessionVariables = this.chart.sessionVariables.axisX[c]) : (this.optionsName = "axisX2", e(this.chart.sessionVariables.axisX2[c]) && (this.chart.sessionVariables.axisX2[c] = {}), this.sessionVariables = this.chart.sessionVariables.axisX2[c]), this.options.interval || (this.intervalType = null)) : "left" ===
                g || "bottom" === g ? (this.optionsName = "axisY", e(this.chart.sessionVariables.axisY[c]) && (this.chart.sessionVariables.axisY[c] = {}), this.sessionVariables = this.chart.sessionVariables.axisY[c]) : (this.optionsName = "axisY2", e(this.chart.sessionVariables.axisY2[c]) && (this.chart.sessionVariables.axisY2[c] = {}), this.sessionVariables = this.chart.sessionVariables.axisY2[c]);
            "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
            "undefined" === typeof this.options.labelFontSize &&
                (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
            this.type = h;
            "axisX" !== h || b && "undefined" !== typeof b.gridThickness || (this.gridThickness = 0);
            this._position = g;
            this.lineCoordinates = {
                x1: null,
                y1: null,
                x2: null,
                y2: null,
                width: null
            };
            this.labelAngle = (this.labelAngle % 360 + 360) % 360;
            90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
            this.options.scaleBreaks && (this.scaleBreaks = new L(this.chart, this.options.scaleBreaks, ++this.chart._eventManager.lastObjectId,
                this));
            this.stripLines = [];
            if (this.options.stripLines && 0 < this.options.stripLines.length)
                for (a = 0; a < this.options.stripLines.length; a++) this.stripLines.push(new N(this.chart, this.options.stripLines[a], a, ++this.chart._eventManager.lastObjectId, this));
            this.options.crosshair && (this.crosshair = new T(this.chart, this.options.crosshair, this));
            this._titleTextBlock = null;
            this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum =
                null);
            this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
            this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
            this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null ===
                this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
            null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
            null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
            this.trackChanges("viewportMinimum");
            this.trackChanges("viewportMaximum")
        }

        function L(a, f, b, c) {
            L.base.constructor.call(this,
                "ScaleBreaks", "scaleBreaks", f, null, c);
            this.id = b;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.axis = c;
            this.optionsName = "scaleBreaks";
            this.isOptionsInArray = !1;
            this._appliedBreaks = [];
            this.customBreaks = [];
            this.autoBreaks = [];
            "string" === typeof this.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 8 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.spacing && (this.spacing = 8);
            this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
            if (this.options.customBreaks &&
                0 < this.options.customBreaks.length) {
                for (a = 0; a < this.options.customBreaks.length; a++) this.customBreaks.push(new X(this.chart, "customBreaks", this.options.customBreaks[a], a, ++this.chart._eventManager.lastObjectId, this)), "number" === typeof this.customBreaks[a].startValue && ("number" === typeof this.customBreaks[a].endValue && this.customBreaks[a].endValue !== this.customBreaks[a].startValue) && this._appliedBreaks.push(this.customBreaks[a]);
                this._appliedBreaks.sort(function (a, c) {
                    return a.startValue - c.startValue
                });
                for (a = 0; a < this._appliedBreaks.length - 1; a++) this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue && (this._appliedBreaks[a].endValue = Math.max(this._appliedBreaks[a].endValue, this._appliedBreaks[a + 1].endValue), window.console && window.console.log("StockJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."), this._appliedBreaks.splice(a, 2), a--)
            }
        }

        function X(a, f, b, c, h, g) {
            X.base.constructor.call(this, "Break", f, b, c, g);
            this.id = h;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.scaleBreaks = g;
            this.optionsName =
                f;
            this.isOptionsInArray = !0;
            this.type = b.type ? this.type : g.type;
            this.fillOpacity = e(b.fillOpacity) ? g.fillOpacity : this.fillOpacity;
            this.lineThickness = e(b.lineThickness) ? g.lineThickness : this.lineThickness;
            this.color = b.color ? this.color : g.color;
            this.lineColor = b.lineColor ? this.lineColor : g.lineColor;
            this.lineDashType = b.lineDashType ? this.lineDashType : g.lineDashType;
            !e(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime());
            !e(this.endValue) && this.endValue.getTime && (this.endValue =
                this.endValue.getTime());
            "number" === typeof this.startValue && ("number" === typeof this.endValue && this.endValue < this.startValue) && (a = this.startValue, this.startValue = this.endValue, this.endValue = a);
            this.spacing = "undefined" === typeof b.spacing ? g.spacing : b.spacing;
            "string" === typeof this.options.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.options.spacing && (this.spacing = g.spacing);
            this.size = g.parent.logarithmic ?
                1 : 0
        }

        function N(a, f, b, c, h) {
            N.base.constructor.call(this, "StripLine", "stripLines", f, b, h);
            this.id = c;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.label = this.label;
            this.axis = h;
            this.optionsName = "stripLines";
            this.isOptionsInArray = !0;
            this._thicknessType = "pixel";
            null !== this.startValue && null !== this.endValue && (this.value = h.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() :
                this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this._thicknessType = null)
        }

        function T(a, f, b) {
            T.base.constructor.call(this, "Crosshair", "crosshair", f, null, b);
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.axis = b;
            this.optionsName = "crosshair";
            this._thicknessType = "pixel"
        }

        function oa(a, f) {
            oa.base.constructor.call(this, "ToolTip", "toolTip", f, null, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = this.chart.ctx;
            this.currentDataPointIndex = this.currentSeriesIndex = -1;
            this._prevY = this._prevX =
                NaN;
            this.containerTransitionDuration = 0.1;
            this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
            this.optionsName = "toolTip";
            this._initialize()
        }

        function ha(a) {
            this.chart = a;
            this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.previousDataPointEventObject = null;
            this.ghostCanvas = ra(this.chart.width, this.chart.height);
            this.ghostCtx = this.ghostCanvas.getContext("2d");
            this.mouseoveredObjectMaps = []
        }

        function ka(a) {
            this.chart = a;
            this.ctx = this.chart.plotArea.ctx;
            this.animations = [];
            this.animationRequestId = null
        }
        ga(t, Z);
        t.prototype.destroy = function () {
            var a = this.allDOMEventHandlers;
            this._animator && this._animator.cancelAllAnimations();
            this._panTimerId && clearTimeout(this._panTimerId);
            for (var f = 0; f < a.length; f++) gb(a[f][0], a[f][1], a[f][2], a[f][3]);
            this.allDOMEventHandlers = [];
            for (this.removeAllEventListeners(); this._canvasJSContainer && this._canvasJSContainer.hasChildNodes();) this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
            for (; this.container &&
                this.container.hasChildNodes();) this.container.removeChild(this.container.lastChild);
            for (; this._dropdownMenu && this._dropdownMenu.hasChildNodes();) this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
            this.overlaidCanvas = this.canvas = this.container = this._canvasJSContainer = null;
            this._toolBar = this._dropdownMenu = this._menuButton = this._resetButton = this._zoomButton = this._breaksCanvas = this._preRenderCanvas = this.toolTip.container = null
        };
        t.prototype._updateOptions = function () {
            var a = this;
            this.updateOption("width");
            this.updateOption("height");
            this.updateOption("dataPointWidth");
            this.updateOption("dataPointMinWidth");
            this.updateOption("dataPointMaxWidth");
            this.updateOption("interactivityEnabled");
            this.updateOption("theme");
            this.updateOption("colorSet") && (this.selectedColorSet = "undefined" !== typeof xa[this.colorSet] ? xa[this.colorSet] : xa.colorSet1);
            this.updateOption("backgroundColor");
            this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
            this.updateOption("culture");
            this._cultureInfo = new Oa(this.options.culture);
            this.updateOption("animationEnabled");
            this.animationEnabled = this.animationEnabled && v;
            this.updateOption("animationDuration");
            this.updateOption("rangeChanging");
            this.updateOption("rangeChanged");
            this.updateOption("exportEnabled");
            this.updateOption("exportFileName");
            this.updateOption("zoomType");
            if (this.options.zoomEnabled || this.panEnabled) {
                if (!this._zoomButton) {
                    var f = !1;
                    ya(this._zoomButton = document.createElement("button"));
                    Ba(this, this._zoomButton, "pan");
                    this._toolBar.appendChild(this._zoomButton);
                    this._zoomButton.style.borderRight = this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor;
                    z(this._zoomButton, "touchstart", function (a) {
                        f = !0
                    }, this.allDOMEventHandlers);
                    z(this._zoomButton, "click", function () {
                        a.zoomEnabled ? (a.zoomEnabled = !1, a.panEnabled = !0, Ba(a, a._zoomButton, "zoom")) : (a.zoomEnabled = !0, a.panEnabled = !1, Ba(a, a._zoomButton, "pan"));
                        a.render()
                    }, this.allDOMEventHandlers);
                    z(this._zoomButton, "mouseover", function () {
                        f ? f = !1 : (pa(a._zoomButton, {
                            backgroundColor: a.toolbar.backgroundColorOnHover,
                            color: a.toolbar.fontColorOnHover,
                            transition: "0.4s",
                            WebkitTransition: "0.4s"
                        }), 0 >= navigator.userAgent.search("MSIE") && pa(a._zoomButton.childNodes[0], {
                            WebkitFilter: "invert(100%)",
                            filter: "invert(100%)"
                        }))
                    }, this.allDOMEventHandlers);
                    z(this._zoomButton, "mouseout", function () {
                            f || (pa(a._zoomButton, {
                                backgroundColor: a.toolbar.backgroundColor,
                                color: a.toolbar.fontColor,
                                transition: "0.4s",
                                WebkitTransition: "0.4s"
                            }), 0 >= navigator.userAgent.search("MSIE") && pa(a._zoomButton.childNodes[0], {
                                WebkitFilter: "invert(0%)",
                                filter: "invert(0%)"
                            }))
                        },
                        this.allDOMEventHandlers)
                }
                this._resetButton || (f = !1, ya(this._resetButton = document.createElement("button")), Ba(this, this._resetButton, "reset"), this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.borderThickness : 0) + "px solid " + this.toolbar.borderColor, this._toolBar.appendChild(this._resetButton), z(this._resetButton, "touchstart", function (a) {
                    f = !0
                }, this.allDOMEventHandlers), z(this._resetButton, "click", function () {
                    a.toolTip.hide();
                    a.toolTip.dispatchEvent("hidden", {
                            chart: a,
                            toolTip: a.toolTip
                        },
                        a.toolTip);
                    a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = !0, a.panEnabled = !1, Ba(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = !1, a.panEnabled = !1);
                    if (a.sessionVariables.axisX)
                        for (var c = 0; c < a.sessionVariables.axisX.length; c++) a.sessionVariables.axisX[c].newViewportMinimum = null, a.sessionVariables.axisX[c].newViewportMaximum = null;
                    if (a.sessionVariables.axisX2)
                        for (c = 0; c < a.sessionVariables.axisX2.length; c++) a.sessionVariables.axisX2[c].newViewportMinimum =
                            null, a.sessionVariables.axisX2[c].newViewportMaximum = null;
                    if (a.sessionVariables.axisY)
                        for (c = 0; c < a.sessionVariables.axisY.length; c++) a.sessionVariables.axisY[c].newViewportMinimum = null, a.sessionVariables.axisY[c].newViewportMaximum = null;
                    if (a.sessionVariables.axisY2)
                        for (c = 0; c < a.sessionVariables.axisY2.length; c++) a.sessionVariables.axisY2[c].newViewportMinimum = null, a.sessionVariables.axisY2[c].newViewportMaximum = null;
                    a.resetOverlayedCanvas();
                    ya(a._zoomButton, a._resetButton);
                    a.stockChart && (a.stockChart._rangeEventParameter = {
                        stockChart: a.stockChart,
                        source: "chart",
                        index: a.stockChart.charts.indexOf(a),
                        minimum: null,
                        maximum: null
                    });
                    a._dispatchRangeEvent("rangeChanging", "reset");
                    a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanging", a.stockChart.dispatchEvent("rangeChanging", a.stockChart._rangeEventParameter, a.stockChart));
                    a.render();
                    a.syncCharts && a.syncCharts(null, null);
                    a._dispatchRangeEvent("rangeChanged", "reset");
                    a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanged", a.stockChart.dispatchEvent("rangeChanged",
                        a.stockChart._rangeEventParameter, a.stockChart))
                }, this.allDOMEventHandlers), z(this._resetButton, "mouseover", function () {
                    f || (pa(a._resetButton, {
                        backgroundColor: a.toolbar.backgroundColorOnHover,
                        color: a.toolbar.hoverFfontColorOnHoverontColor,
                        transition: "0.4s",
                        WebkitTransition: "0.4s"
                    }), 0 >= navigator.userAgent.search("MSIE") && pa(a._resetButton.childNodes[0], {
                        WebkitFilter: "invert(100%)",
                        filter: "invert(100%)"
                    }))
                }, this.allDOMEventHandlers), z(this._resetButton, "mouseout", function () {
                    f || (pa(a._resetButton, {
                        backgroundColor: a.toolbar.backgroundColor,
                        color: a.toolbar.fontColor,
                        transition: "0.4s",
                        WebkitTransition: "0.4s"
                    }), 0 >= navigator.userAgent.search("MSIE") && pa(a._resetButton.childNodes[0], {
                        WebkitFilter: "invert(0%)",
                        filter: "invert(0%)"
                    }))
                }, this.allDOMEventHandlers), this.overlaidCanvas.style.cursor = a._defaultCursor);
                this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = !0, this.zoomEnabled = !1) : (this.zoomEnabled = !0, this.panEnabled = !1), Sa(a._zoomButton, a._resetButton)) :
                    (this.zoomEnabled = !0, this.panEnabled = !1))
            } else this.panEnabled = this.zoomEnabled = !1;
            ib(this);
            "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? Ba(a, a._zoomButton, "zoom") : Ba(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && Ba(a, a._resetButton, "reset"));
            this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
            for (var b in this.toolTip.options) this.toolTip.options.hasOwnProperty(b) && this.toolTip.updateOption(b)
        };
        t.prototype._updateSize = function () {
            return mb.call(this, [this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas])
        };
        t.prototype._initialize = function () {
            this.isNavigator = e(this.parent) || e(this.parent._defaultsKey) || "Navigator" !== this.parent._defaultsKey ? !1 : !0;
            this.toolbar = new Wa(this, this.options.toolbar);
            this._animator ? this._animator.cancelAllAnimations() : this._animator = new ka(this);
            this.removeAllEventListeners();
            this.disableToolTip = !1;
            this._axes = [];
            this.funnelPyramidClickHandler = this.pieDoughnutClickHandler =
                null;
            this._updateOptions();
            this.animatedRender = v && this.animationEnabled && 0 === this.renderCount;
            this._updateSize();
            this.clearCanvas();
            this.ctx.beginPath();
            this.axisX = [];
            this.axisX2 = [];
            this.axisY = [];
            this.axisY2 = [];
            this._indexLabels = [];
            this._dataInRenderedOrder = [];
            this._events = [];
            this._eventManager && this._eventManager.reset();
            this.plotInfo = {
                axisPlacement: null,
                plotTypes: []
            };
            this.layoutManager = new Ka(0, 0, this.width, this.height, this.isNavigator ? 0 : 2);
            this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
            this.data = [];
            this.title = null;
            this.subtitles = [];
            var a = 0,
                f = null;
            if (this.options.data) {
                for (var b = 0; b < this.options.data.length; b++)
                    if (a++, !this.options.data[b].type || 0 <= t._supportedChartTypes.indexOf(this.options.data[b].type)) {
                        var c = new G(this, this.options.data[b], a - 1, ++this._eventManager.lastObjectId);
                        "error" === c.type && (c.linkedDataSeriesIndex = e(this.options.data[b].linkedDataSeriesIndex) ? b - 1 : this.options.data[b].linkedDataSeriesIndex, 0 > c.linkedDataSeriesIndex || c.linkedDataSeriesIndex >= this.options.data.length ||
                            "number" !== typeof c.linkedDataSeriesIndex || "error" === this.options.data[c.linkedDataSeriesIndex].type) && (c.linkedDataSeriesIndex = null);
                        null === c.name && (c.name = "DataSeries " + a);
                        null === c.color ? 1 < this.options.data.length ? (c._colorSet = [this.selectedColorSet[c.index % this.selectedColorSet.length]], c.color = this.selectedColorSet[c.index % this.selectedColorSet.length]) : c._colorSet = "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "stackedArea" ===
                            c.type || "stackedArea100" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "candlestick" === c.type || "ohlc" === c.type || "waterfall" === c.type || "boxAndWhisker" === c.type ? [this.selectedColorSet[0]] : this.selectedColorSet : c._colorSet = [c.color];
                        null === c.markerSize && (("line" === c.type || "stepLine" === c.type || "spline" === c.type || 0 <= c.type.toLowerCase().indexOf("area")) && c.dataPoints && c.dataPoints.length < this.width / 16 || "scatter" === c.type) && (c.markerSize = 8);
                        "bubble" !== c.type && "scatter" !== c.type || !c.dataPoints ||
                            (c.dataPoints.some ? c.dataPoints.some(function (a) {
                                return a.x
                            }) && c.dataPoints.sort(l) : c.dataPoints.sort(l));
                        this.data.push(c);
                        var h = c.axisPlacement,
                            f = f || h,
                            g;
                        "normal" === h ? "xySwapped" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + c.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + c.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === h ? "normal" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' +
                            c.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + c.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" === h ? "normal" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + c.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + c.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none") :
                            null === h && "none" === this.plotInfo.axisPlacement && (g = 'You cannot combine "' + c.type + '" with pie chart');
                        if (g && window.console) {
                            window.console.log(g);
                            return
                        }
                    } for (b = 0; b < this.data.length; b++) {
                    if ("none" == f && "error" === this.data[b].type && window.console) {
                        window.console.log('You cannot combine "' + c.type + '" with error chart');
                        return
                    }
                    "error" === this.data[b].type && (this.data[b].axisPlacement = this.plotInfo.axisPlacement = f || "normal", this.data[b]._linkedSeries = null === this.data[b].linkedDataSeriesIndex ? null : this.data[this.data[b].linkedDataSeriesIndex])
                }
            }
            this._objectsInitialized = !0;
            this._plotAreaElements = []
        };
        t._supportedChartTypes = Da("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
        t.prototype.setLayout = function () {
            for (var a = this._plotAreaElements, f = 0; f < this.data.length; f++)
                if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
                    if (!this.data[f].axisYType ||
                        "primary" === this.data[f].axisYType)
                        if (this.options.axisY && 0 < this.options.axisY.length) {
                            if (!this.axisY.length)
                                for (var b = 0; b < this.options.axisY.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[b] = new A(this, "axisY", this.options.axisY[b], b, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[b] = new A(this, "axisY", this.options.axisY[b], b, "axisY", "bottom"));
                            this.data[f].axisY = this.axisY[0 <= this.data[f].axisYIndex && this.data[f].axisYIndex < this.axisY.length ?
                                this.data[f].axisYIndex : 0];
                            this.axisY[0 <= this.data[f].axisYIndex && this.data[f].axisYIndex < this.axisY.length ? this.data[f].axisYIndex : 0].dataSeries.push(this.data[f])
                        } else this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new A(this, "axisY", this.options.axisY, 0, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new A(this, "axisY", this.options.axisY, 0, "axisY", "bottom"))), this.data[f].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[f]);
                    if ("secondary" === this.data[f].axisYType)
                        if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                            if (!this.axisY2.length)
                                for (b = 0; b < this.options.axisY2.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[b] = new A(this, "axisY2", this.options.axisY2[b], b, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[b] = new A(this, "axisY2", this.options.axisY2[b], b, "axisY", "top"));
                            this.data[f].axisY = this.axisY2[0 <= this.data[f].axisYIndex && this.data[f].axisYIndex <
                                this.axisY2.length ? this.data[f].axisYIndex : 0];
                            this.axisY2[0 <= this.data[f].axisYIndex && this.data[f].axisYIndex < this.axisY2.length ? this.data[f].axisYIndex : 0].dataSeries.push(this.data[f])
                        } else this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] = new A(this, "axisY2", this.options.axisY2, 0, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new A(this, "axisY2", this.options.axisY2, 0, "axisY", "top"))), this.data[f].axisY = this.axisY2[0],
                            this.axisY2[0].dataSeries.push(this.data[f]);
                    if (!this.data[f].axisXType || "primary" === this.data[f].axisXType)
                        if (this.options.axisX && 0 < this.options.axisX.length) {
                            if (!this.axisX.length)
                                for (b = 0; b < this.options.axisX.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[b] = new A(this, "axisX", this.options.axisX[b], b, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[b] = new A(this, "axisX", this.options.axisX[b], b, "axisX", "left"));
                            this.data[f].axisX =
                                this.axisX[0 <= this.data[f].axisXIndex && this.data[f].axisXIndex < this.axisX.length ? this.data[f].axisXIndex : 0];
                            this.axisX[0 <= this.data[f].axisXIndex && this.data[f].axisXIndex < this.axisX.length ? this.data[f].axisXIndex : 0].dataSeries.push(this.data[f])
                        } else this.axisX.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[0] = new A(this, "axisX", this.options.axisX, 0, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new A(this, "axisX", this.options.axisX,
                            0, "axisX", "left"))), this.data[f].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[f]);
                    if ("secondary" === this.data[f].axisXType)
                        if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                            if (!this.axisX2.length)
                                for (b = 0; b < this.options.axisX2.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[b] = new A(this, "axisX2", this.options.axisX2[b], b, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[b] = new A(this, "axisX2", this.options.axisX2[b],
                                    b, "axisX", "right"));
                            this.data[f].axisX = this.axisX2[0 <= this.data[f].axisXIndex && this.data[f].axisXIndex < this.axisX2.length ? this.data[f].axisXIndex : 0];
                            this.axisX2[0 <= this.data[f].axisXIndex && this.data[f].axisXIndex < this.axisX2.length ? this.data[f].axisXIndex : 0].dataSeries.push(this.data[f])
                        } else this.axisX2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new A(this, "axisX2", this.options.axisX2, 0, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] =
                            new A(this, "axisX2", this.options.axisX2, 0, "axisX", "right"))), this.data[f].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[f])
                } if (this.axisY) {
                for (b = 1; b < this.axisY.length; b++) "undefined" === typeof this.axisY[b].options.gridThickness && (this.axisY[b].gridThickness = 0);
                for (b = 0; b < this.axisY.length - 1; b++) "undefined" === typeof this.axisY[b].options.margin && (this.axisY[b].margin = 10)
            }
            if (this.axisY2) {
                for (b = 1; b < this.axisY2.length; b++) "undefined" === typeof this.axisY2[b].options.gridThickness && (this.axisY2[b].gridThickness =
                    0);
                for (b = 0; b < this.axisY2.length - 1; b++) "undefined" === typeof this.axisY2[b].options.margin && (this.axisY2[b].margin = 10)
            }
            this.axisY && 0 < this.axisY.length && (this.axisY2 && 0 < this.axisY2.length) && (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness = 0 : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
            if (this.axisX)
                for (b = 0; b < this.axisX.length; b++) "undefined" === typeof this.axisX[b].options.gridThickness &&
                    (this.axisX[b].gridThickness = 0);
            if (this.axisX2)
                for (b = 0; b < this.axisX2.length; b++) "undefined" === typeof this.axisX2[b].options.gridThickness && (this.axisX2[b].gridThickness = 0);
            this.axisX && 0 < this.axisX.length && (this.axisX2 && 0 < this.axisX2.length) && (0 < this.axisX[0].gridThickness && "undefined" === typeof this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
            b = !1;
            if (0 < this._axes.length &&
                this.options.zoomEnabled && (this.zoomEnabled || this.panEnabled))
                for (f = 0; f < this._axes.length; f++)
                    if (null !== this._axes[f].viewportMinimum || null !== this._axes[f].viewportMaximum) {
                        b = !0;
                        break
                    } b ? (Sa(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor, this._zoomButton.style.borderRight = this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor, this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.borderThickness :
                0) + "px solid " + this.toolbar.borderColor) : (ya(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.borderThickness + "px solid transparent", this.options.zoomEnabled && (this.zoomEnabled = !0, this.panEnabled = !1));
            rb(this);
            this._processData();
            this.options.title && (this.title = new Ha(this, this.options.title), this.title.dockInsidePlotArea ? a.push(this.title) : this.title.setLayout());
            if (this.options.subtitles)
                for (f = 0; f < this.options.subtitles.length; f++) b = new Na(this, this.options.subtitles[f],
                    f), this.subtitles.push(b), b.dockInsidePlotArea ? a.push(b) : b.setLayout();
            this.legend = new F(this, this.options.legend);
            for (f = 0; f < this.data.length; f++)(this.data[f].showInLegend || "pie" === this.data[f].type || "doughnut" === this.data[f].type || "funnel" === this.data[f].type || "pyramid" === this.data[f].type) && this.legend.dataSeries.push(this.data[f]);
            this.legend.dockInsidePlotArea ? a.push(this.legend) : this.legend.setLayout();
            for (f = 0; f < this._axes.length; f++)
                if (this._axes[f].scaleBreaks && this._axes[f].scaleBreaks._appliedBreaks.length) {
                    v ?
                        (this._breaksCanvas = ra(this.width, this.height, !0), this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")) : (this._breaksCanvas = this.canvas, this._breaksCanvasCtx = this.ctx);
                    break
                } this._preRenderCanvas = ra(this.width, this.height);
            this._preRenderCtx = this._preRenderCanvas.getContext("2d");
            "normal" !== this.plotInfo.axisPlacement && "xySwapped" !== this.plotInfo.axisPlacement || A.setLayout(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace())
        };
        t.prototype.renderElements =
            function () {
                var a = this._plotAreaElements;
                this.title && !this.title.dockInsidePlotArea && this.title.render();
                for (var f = 0; f < this.subtitles.length; f++) this.subtitles[f].dockInsidePlotArea || this.subtitles[f].render();
                this.legend.dockInsidePlotArea || this.legend.render();
                if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) A.render(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement);
                else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
                else return;
                for (f = 0; f < a.length; f++) a[f].setLayout(), a[f].render();
                var b = [];
                if (this.animatedRender) {
                    var c = ra(this.width, this.height);
                    c.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height)
                }
                tb(this);
                var a = this.ctx.miterLimit,
                    h;
                this.ctx.miterLimit = 3;
                v && this._breaksCanvas && (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height), this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx.globalCompositeOperation = "source-atop", this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), this._preRenderCtx.clearRect(0, 0, this.width, this.height));
                for (f = 0; f < this.plotInfo.plotTypes.length; f++)
                    for (var g = this.plotInfo.plotTypes[f], E = 0; E < g.plotUnits.length; E++) {
                        var e = g.plotUnits[E],
                            d = null;
                        e.targetCanvas = null;
                        this.animatedRender && (e.targetCanvas = ra(this.width, this.height), e.targetCanvasCtx = e.targetCanvas.getContext("2d"), h = e.targetCanvasCtx.miterLimit, e.targetCanvasCtx.miterLimit = 3);
                        "line" === e.type ? d = this.renderLine(e) : "stepLine" === e.type ? d = this.renderStepLine(e) :
                            "spline" === e.type ? d = this.renderSpline(e) : "column" === e.type ? d = this.renderColumn(e) : "bar" === e.type ? d = this.renderBar(e) : "area" === e.type ? d = this.renderArea(e) : "stepArea" === e.type ? d = this.renderStepArea(e) : "splineArea" === e.type ? d = this.renderSplineArea(e) : "stackedColumn" === e.type ? d = this.renderStackedColumn(e) : "stackedColumn100" === e.type ? d = this.renderStackedColumn100(e) : "stackedBar" === e.type ? d = this.renderStackedBar(e) : "stackedBar100" === e.type ? d = this.renderStackedBar100(e) : "stackedArea" === e.type ? d = this.renderStackedArea(e) :
                            "stackedArea100" === e.type ? d = this.renderStackedArea100(e) : "bubble" === e.type ? d = d = this.renderBubble(e) : "scatter" === e.type ? d = this.renderScatter(e) : "pie" === e.type ? this.renderPie(e) : "doughnut" === e.type ? this.renderPie(e) : "funnel" === e.type ? d = this.renderFunnel(e) : "pyramid" === e.type ? d = this.renderFunnel(e) : "candlestick" === e.type ? d = this.renderCandlestick(e) : "ohlc" === e.type ? d = this.renderCandlestick(e) : "rangeColumn" === e.type ? d = this.renderRangeColumn(e) : "error" === e.type ? d = this.renderError(e) : "rangeBar" === e.type ?
                            d = this.renderRangeBar(e) : "rangeArea" === e.type ? d = this.renderRangeArea(e) : "rangeSplineArea" === e.type ? d = this.renderRangeSplineArea(e) : "waterfall" === e.type ? d = this.renderWaterfall(e) : "boxAndWhisker" === e.type && (d = this.renderBoxAndWhisker(e));
                        for (var m = 0; m < e.dataSeriesIndexes.length; m++) this._dataInRenderedOrder.push(this.data[e.dataSeriesIndexes[m]]);
                        this.animatedRender && (e.targetCanvasCtx.miterLimit = h, d && b.push(d))
                    }
                this.ctx.miterLimit = a;
                this.animatedRender && this._breaksCanvasCtx && b.push({
                    source: this._breaksCanvasCtx,
                    dest: this.plotArea.ctx,
                    animationCallback: y.fadeInAnimation,
                    easingFunction: y.easing.easeInQuad,
                    animationBase: 0,
                    startTimePercent: 0.7
                });
                this.animatedRender && 0 < this._indexLabels.length && (h = ra(this.width, this.height).getContext("2d"), b.push(this.renderIndexLabels(h)));
                var n = this;
                if (0 < b.length) n.disableToolTip = !0, n._animator.animate(200, n.animationDuration, function (a) {
                    n.ctx.clearRect(0, 0, n.width, n.height);
                    n.ctx.drawImage(c, 0, 0, Math.floor(n.width * ja), Math.floor(n.height * ja), 0, 0, n.width, n.height);
                    for (var f =
                            0; f < b.length; f++) d = b[f], 1 > a && "undefined" !== typeof d.startTimePercent ? a >= d.startTimePercent && d.animationCallback(d.easingFunction(a - d.startTimePercent, 0, 1, 1 - d.startTimePercent), d) : d.animationCallback(d.easingFunction(a, 0, 1, 1), d);
                    n.dispatchEvent("dataAnimationIterationEnd", {
                        chart: n
                    })
                }, function () {
                    b = [];
                    for (var a = 0; a < n.plotInfo.plotTypes.length; a++)
                        for (var f = n.plotInfo.plotTypes[a], h = 0; h < f.plotUnits.length; h++) f.plotUnits[h].targetCanvas = null;
                    c = null;
                    n.disableToolTip = !1;
                    n.dispatchEvent("dataAnimationEnd", {
                        chart: n
                    })
                });
                else {
                    if (n._breaksCanvas)
                        if (v) n.plotArea.ctx.drawImage(n._breaksCanvas, 0, 0, this.width, this.height);
                        else
                            for (m = 0; m < n._axes.length; m++) n._axes[m].createMask();
                    0 < n._indexLabels.length && n.renderIndexLabels();
                    n.dispatchEvent("dataAnimationIterationEnd", {
                        chart: n
                    });
                    n.dispatchEvent("dataAnimationEnd", {
                        chart: n
                    })
                }
                this.attachPlotAreaEventHandlers();
                this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || ya(this._zoomButton, this._resetButton);
                this.toolTip._updateToolTip();
                this.renderCount++;
                Ma && (n = this, setTimeout(function () {
                    var a = document.getElementById("ghostCanvasCopy");
                    a && (Ta(a, n.width, n.height), a.getContext("2d").drawImage(n._eventManager.ghostCanvas, 0, 0))
                }, 2E3));
                this._breaksCanvas && (delete this._breaksCanvas, delete this._breaksCanvasCtx);
                for (m = 0; m < this._axes.length; m++) this._axes[m].maskCanvas && (delete this._axes[m].maskCanvas, delete this._axes[m].maskCtx)
            };
        t.prototype.render = function (a) {
            a && (this.options = a);
            this._initialize();
            this.setLayout();
            this.renderElements();
            this._preRenderCanvas = null
        };
        t.prototype.attachPlotAreaEventHandlers = function () {
            this.attachEvent({
                context: this,
                chart: this,
                mousedown: this._plotAreaMouseDown,
                mouseup: this._plotAreaMouseUp,
                mousemove: this._plotAreaMouseMove,
                cursor: this.panEnabled ? "move" : "default",
                capture: !0,
                bounds: this.plotArea
            })
        };
        t.prototype.categoriseDataSeries = function () {
            for (var a = "", f = 0; f < this.data.length; f++)
                if (a = this.data[f], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= t._supportedChartTypes.indexOf(a.type)) {
                    for (var b =
                            null, c = !1, h = null, g = !1, E = 0; E < this.plotInfo.plotTypes.length; E++)
                        if (this.plotInfo.plotTypes[E].type === a.type) {
                            c = !0;
                            b = this.plotInfo.plotTypes[E];
                            break
                        } c || (b = {
                        type: a.type,
                        totalDataSeries: 0,
                        plotUnits: []
                    }, this.plotInfo.plotTypes.push(b));
                    for (E = 0; E < b.plotUnits.length; E++)
                        if (b.plotUnits[E].axisYType === a.axisYType && b.plotUnits[E].axisXType === a.axisXType && b.plotUnits[E].axisYIndex === a.axisYIndex && b.plotUnits[E].axisXIndex === a.axisXIndex) {
                            g = !0;
                            h = b.plotUnits[E];
                            break
                        } g || (h = {
                        type: a.type,
                        previousDataSeriesCount: 0,
                        index: b.plotUnits.length,
                        plotType: b,
                        axisXType: a.axisXType,
                        axisYType: a.axisYType,
                        axisYIndex: a.axisYIndex,
                        axisXIndex: a.axisXIndex,
                        axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0],
                        axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0],
                        dataSeriesIndexes: [],
                        yTotals: [],
                        yAbsTotals: []
                    }, b.plotUnits.push(h));
                    b.totalDataSeries++;
                    h.dataSeriesIndexes.push(f);
                    a.plotUnit = h
                } for (f = 0; f < this.plotInfo.plotTypes.length; f++)
                for (b = this.plotInfo.plotTypes[f], E = a = 0; E < b.plotUnits.length; E++) b.plotUnits[E].previousDataSeriesCount = a, a += b.plotUnits[E].dataSeriesIndexes.length
        };
        t.prototype.assignIdToDataPoints = function () {
            for (var a = 0; a < this.data.length; a++) {
                var f = this.data[a];
                if (f.dataPoints)
                    for (var b = f.dataPoints.length, c = 0; c < b; c++) f.dataPointIds[c] = ++this._eventManager.lastObjectId
            }
        };
        t.prototype._processData = function () {
            this.assignIdToDataPoints();
            this.categoriseDataSeries();
            for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
                for (var f = this.plotInfo.plotTypes[a], b = 0; b < f.plotUnits.length; b++) {
                    var c = f.plotUnits[b];
                    "line" === c.type || "stepLine" === c.type || "spline" === c.type || "column" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "bar" === c.type || "bubble" === c.type || "scatter" === c.type ? this._processMultiseriesPlotUnit(c) : "stackedColumn" === c.type || "stackedBar" === c.type ||
                        "stackedArea" === c.type ? this._processStackedPlotUnit(c) : "stackedColumn100" === c.type || "stackedBar100" === c.type || "stackedArea100" === c.type ? this._processStacked100PlotUnit(c) : "candlestick" === c.type || "ohlc" === c.type || "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type || "boxAndWhisker" === c.type ? this._processMultiYPlotUnit(c) : "waterfall" === c.type && this._processSpecificPlotUnit(c)
                }
            this.calculateAutoBreaks()
        };
        t.prototype._processMultiseriesPlotUnit =
            function (a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                    for (var f = a.axisY.dataInfo, b = a.axisX.dataInfo, c, h, g = !1, E = 0; E < a.dataSeriesIndexes.length; E++) {
                        var e = this.data[a.dataSeriesIndexes[E]],
                            d = 0,
                            m = !1,
                            n = !1,
                            p;
                        if ("normal" === e.axisPlacement || "xySwapped" === e.axisPlacement) var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ?
                            this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
                            k = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                        if (e.dataPoints[d].x && e.dataPoints[d].x.getTime || "dateTime" === e.xValueType) g = !0;
                        for (d = 0; d < e.dataPoints.length; d++) {
                            "undefined" === typeof e.dataPoints[d].x && (e.dataPoints[d].x = d + (a.axisX.logarithmic ?
                                1 : 0));
                            e.dataPoints[d].x.getTime ? (g = !0, c = e.dataPoints[d].x.getTime()) : c = e.dataPoints[d].x;
                            h = e.dataPoints[d].y;
                            c < b.min && (b.min = c);
                            c > b.max && (b.max = c);
                            h < f.min && "number" === typeof h && (f.min = h);
                            h > f.max && "number" === typeof h && (f.max = h);
                            if (0 < d) {
                                if (a.axisX.logarithmic) {
                                    var s = c / e.dataPoints[d - 1].x;
                                    1 > s && (s = 1 / s);
                                    b.minDiff > s && 1 !== s && (b.minDiff = s)
                                } else s = c - e.dataPoints[d - 1].x, 0 > s && (s *= -1), b.minDiff > s && 0 !== s && (b.minDiff = s);
                                null !== h && null !== e.dataPoints[d - 1].y && (a.axisY.logarithmic ? (s = h / e.dataPoints[d - 1].y, 1 > s && (s =
                                    1 / s), f.minDiff > s && 1 !== s && (f.minDiff = s)) : (s = h - e.dataPoints[d - 1].y, 0 > s && (s *= -1), f.minDiff > s && 0 !== s && (f.minDiff = s)))
                            }
                            if (c < q && !m) null !== h && (p = c);
                            else {
                                if (!m && (m = !0, 0 < d)) {
                                    d -= 2;
                                    continue
                                }
                                if (c > k && !n) n = !0;
                                else if (c > k && n) continue;
                                e.dataPoints[d].label && (a.axisX.labels[c] = e.dataPoints[d].label);
                                c < b.viewPortMin && (b.viewPortMin = c);
                                c > b.viewPortMax && (b.viewPortMax = c);
                                null === h ? b.viewPortMin === c && p < c && (b.viewPortMin = p) : (h < f.viewPortMin && "number" === typeof h && (f.viewPortMin = h), h > f.viewPortMax && "number" === typeof h && (f.viewPortMax =
                                    h))
                            }
                        }
                        e.axisX.valueType = e.xValueType = g ? "dateTime" : "number"
                    }
            };
        t.prototype._processStackedPlotUnit = function (a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                for (var f = a.axisY.dataInfo, b = a.axisX.dataInfo, c, h, g = !1, E = [], d = [], D = Infinity, m = -Infinity, n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var p = this.data[a.dataSeriesIndexes[n]],
                        q = 0,
                        k = !1,
                        s = !1,
                        y;
                    if ("normal" === p.axisPlacement || "xySwapped" === p.axisPlacement) var v = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum :
                        this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
                        w = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (p.dataPoints[q].x && p.dataPoints[q].x.getTime || "dateTime" === p.xValueType) g = !0;
                    for (q = 0; q < p.dataPoints.length; q++) {
                        "undefined" === typeof p.dataPoints[q].x && (p.dataPoints[q].x = q + (a.axisX.logarithmic ? 1 : 0));
                        p.dataPoints[q].x.getTime ? (g = !0, c = p.dataPoints[q].x.getTime()) : c = p.dataPoints[q].x;
                        h = e(p.dataPoints[q].y) ? 0 : p.dataPoints[q].y;
                        c < b.min && (b.min = c);
                        c > b.max && (b.max = c);
                        if (0 < q) {
                            if (a.axisX.logarithmic) {
                                var B = c / p.dataPoints[q - 1].x;
                                1 > B && (B = 1 / B);
                                b.minDiff > B && 1 !== B && (b.minDiff = B)
                            } else B = c - p.dataPoints[q - 1].x, 0 > B && (B *= -1), b.minDiff > B && 0 !== B && (b.minDiff = B);
                            null !== h && null !== p.dataPoints[q -
                                1].y && (a.axisY.logarithmic ? 0 < h && (B = h / p.dataPoints[q - 1].y, 1 > B && (B = 1 / B), f.minDiff > B && 1 !== B && (f.minDiff = B)) : (B = h - p.dataPoints[q - 1].y, 0 > B && (B *= -1), f.minDiff > B && 0 !== B && (f.minDiff = B)))
                        }
                        if (c < v && !k) null !== p.dataPoints[q].y && (y = c);
                        else {
                            if (!k && (k = !0, 0 < q)) {
                                q -= 2;
                                continue
                            }
                            if (c > w && !s) s = !0;
                            else if (c > w && s) continue;
                            p.dataPoints[q].label && (a.axisX.labels[c] = p.dataPoints[q].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            null === p.dataPoints[q].y ? b.viewPortMin === c && y < c && (b.viewPortMin = y) :
                                (a.yTotals[c] = (a.yTotals[c] ? a.yTotals[c] : 0) + h, a.yAbsTotals[c] = (a.yAbsTotals[c] ? a.yAbsTotals[c] : 0) + Math.abs(h), 0 <= h ? E[c] ? E[c] += h : (E[c] = h, D = Math.min(h, D)) : d[c] ? d[c] += h : (d[c] = h, m = Math.max(h, m)))
                        }
                    }
                    a.axisY.scaleBreaks && (a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks) && (f.dataPointYPositiveSums ? (f.dataPointYPositiveSums.push.apply(f.dataPointYPositiveSums, E), f.dataPointYNegativeSums.push.apply(f.dataPointYPositiveSums, d)) : (f.dataPointYPositiveSums = E, f.dataPointYNegativeSums =
                        d));
                    p.axisX.valueType = p.xValueType = g ? "dateTime" : "number"
                }
                for (q in E) E.hasOwnProperty(q) && !isNaN(q) && (a = E[q], a < f.min && (f.min = Math.min(a, D)), a > f.max && (f.max = a), q < b.viewPortMin || q > b.viewPortMax || (a < f.viewPortMin && (f.viewPortMin = Math.min(a, D)), a > f.viewPortMax && (f.viewPortMax = a)));
                for (q in d) d.hasOwnProperty(q) && !isNaN(q) && (a = d[q], a < f.min && (f.min = a), a > f.max && (f.max = Math.max(a, m)), q < b.viewPortMin || q > b.viewPortMax || (a < f.viewPortMin && (f.viewPortMin = a), a > f.viewPortMax && (f.viewPortMax = Math.max(a, m))))
            }
        };
        t.prototype._processStacked100PlotUnit =
            function (a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                    for (var f = a.axisY.dataInfo, b = a.axisX.dataInfo, c, h, g = !1, E = !1, d = !1, D = [], m = 0; m < a.dataSeriesIndexes.length; m++) {
                        var n = this.data[a.dataSeriesIndexes[m]],
                            p = 0,
                            q = !1,
                            k = !1,
                            s;
                        if ("normal" === n.axisPlacement || "xySwapped" === n.axisPlacement) var y = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ?
                            this.options.axisX.minimum : -Infinity,
                            v = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                        if (n.dataPoints[p].x && n.dataPoints[p].x.getTime || "dateTime" === n.xValueType) g = !0;
                        for (p = 0; p < n.dataPoints.length; p++) {
                            "undefined" === typeof n.dataPoints[p].x && (n.dataPoints[p].x = p + (a.axisX.logarithmic ? 1 : 0));
                            n.dataPoints[p].x.getTime ? (g = !0, c = n.dataPoints[p].x.getTime()) : c = n.dataPoints[p].x;
                            h = e(n.dataPoints[p].y) ? null : n.dataPoints[p].y;
                            c < b.min && (b.min = c);
                            c > b.max && (b.max = c);
                            if (0 < p) {
                                if (a.axisX.logarithmic) {
                                    var w = c / n.dataPoints[p - 1].x;
                                    1 > w && (w = 1 / w);
                                    b.minDiff > w && 1 !== w && (b.minDiff = w)
                                } else w = c - n.dataPoints[p - 1].x, 0 > w && (w *= -1), b.minDiff > w && 0 !== w && (b.minDiff = w);
                                e(h) || null === n.dataPoints[p - 1].y || (a.axisY.logarithmic ? 0 < h && (w = h / n.dataPoints[p - 1].y, 1 > w && (w = 1 / w), f.minDiff > w && 1 !== w && (f.minDiff = w)) : (w = h - n.dataPoints[p -
                                    1].y, 0 > w && (w *= -1), f.minDiff > w && 0 !== w && (f.minDiff = w)))
                            }
                            if (c < y && !q) null !== h && (s = c);
                            else {
                                if (!q && (q = !0, 0 < p)) {
                                    p -= 2;
                                    continue
                                }
                                if (c > v && !k) k = !0;
                                else if (c > v && k) continue;
                                n.dataPoints[p].label && (a.axisX.labels[c] = n.dataPoints[p].label);
                                c < b.viewPortMin && (b.viewPortMin = c);
                                c > b.viewPortMax && (b.viewPortMax = c);
                                null === h ? b.viewPortMin === c && s < c && (b.viewPortMin = s) : (a.yTotals[c] = (a.yTotals[c] ? a.yTotals[c] : 0) + h, a.yAbsTotals[c] = (a.yAbsTotals[c] ? a.yAbsTotals[c] : 0) + Math.abs(h), 0 <= h ? E = !0 : 0 > h && (d = !0), D[c] = D[c] ? D[c] + Math.abs(h) :
                                    Math.abs(h))
                            }
                        }
                        n.axisX.valueType = n.xValueType = g ? "dateTime" : "number"
                    }
                    a.axisY.logarithmic ? (f.max = e(f.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(f.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)), f.min = e(f.viewPortMin) ? 1 : Math.min(f.viewPortMin, 1)) : E && !d ? (f.max = e(f.viewPortMax) ? 99 : Math.max(f.viewPortMax, 99), f.min = e(f.viewPortMin) ? 1 : Math.min(f.viewPortMin, 1)) : E && d ? (f.max = e(f.viewPortMax) ? 99 : Math.max(f.viewPortMax, 99), f.min = e(f.viewPortMin) ? -99 : Math.min(f.viewPortMin, -99)) : !E && d &&
                        (f.max = e(f.viewPortMax) ? -1 : Math.max(f.viewPortMax, -1), f.min = e(f.viewPortMin) ? -99 : Math.min(f.viewPortMin, -99));
                    f.viewPortMin = f.min;
                    f.viewPortMax = f.max;
                    a.dataPointYSums = D
                }
            };
        t.prototype._processMultiYPlotUnit = function (a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var f = a.axisY.dataInfo, b = a.axisX.dataInfo, c, h, g, E, e = !1, d = 0; d < a.dataSeriesIndexes.length; d++) {
                    var m = this.data[a.dataSeriesIndexes[d]],
                        n = 0,
                        p = !1,
                        q = !1,
                        k, s, y;
                    if ("normal" === m.axisPlacement || "xySwapped" === m.axisPlacement) var v = a.axisX.sessionVariables.newViewportMinimum ?
                        a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
                        w = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (m.dataPoints[n].x && m.dataPoints[n].x.getTime || "dateTime" === m.xValueType) e = !0;
                    for (n = 0; n < m.dataPoints.length; n++) {
                        "undefined" === typeof m.dataPoints[n].x && (m.dataPoints[n].x = n + (a.axisX.logarithmic ? 1 : 0));
                        m.dataPoints[n].x.getTime ? (e = !0, c = m.dataPoints[n].x.getTime()) : c = m.dataPoints[n].x;
                        if ((h = m.dataPoints[n].y) && h.length) {
                            g = Math.min.apply(null, h);
                            E = Math.max.apply(null, h);
                            s = !0;
                            for (var B = 0; B < h.length; B++) null === h.k && (s = !1);
                            s && (p || (y = k), k = c)
                        }
                        c < b.min && (b.min = c);
                        c > b.max && (b.max = c);
                        g < f.min && (f.min = g);
                        E > f.max &&
                            (f.max = E);
                        0 < n && (a.axisX.logarithmic ? (s = c / m.dataPoints[n - 1].x, 1 > s && (s = 1 / s), b.minDiff > s && 1 !== s && (b.minDiff = s)) : (s = c - m.dataPoints[n - 1].x, 0 > s && (s *= -1), b.minDiff > s && 0 !== s && (b.minDiff = s)), h && (null !== h[0] && m.dataPoints[n - 1].y && null !== m.dataPoints[n - 1].y[0]) && (a.axisY.logarithmic ? (s = h[0] / m.dataPoints[n - 1].y[0], 1 > s && (s = 1 / s), f.minDiff > s && 1 !== s && (f.minDiff = s)) : (s = h[0] - m.dataPoints[n - 1].y[0], 0 > s && (s *= -1), f.minDiff > s && 0 !== s && (f.minDiff = s))));
                        if (!(c < v) || p) {
                            if (!p && (p = !0, 0 < n)) {
                                n -= 2;
                                k = y;
                                continue
                            }
                            if (c > w && !q) q = !0;
                            else if (c >
                                w && q) continue;
                            m.dataPoints[n].label && (a.axisX.labels[c] = m.dataPoints[n].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            if (b.viewPortMin === c && h)
                                for (B = 0; B < h.length; B++)
                                    if (null === h[B] && k < c) {
                                        b.viewPortMin = k;
                                        break
                                    } null === h ? b.viewPortMin === c && k < c && (b.viewPortMin = k) : (g < f.viewPortMin && (f.viewPortMin = g), E > f.viewPortMax && (f.viewPortMax = E))
                        }
                    }
                    m.axisX.valueType = m.xValueType = e ? "dateTime" : "number"
                }
        };
        t.prototype._processSpecificPlotUnit = function (a) {
            if ("waterfall" === a.type && a.dataSeriesIndexes &&
                !(1 > a.dataSeriesIndexes.length))
                for (var f = a.axisY.dataInfo, b = a.axisX.dataInfo, c, h, g = !1, E = 0; E < a.dataSeriesIndexes.length; E++) {
                    var e = this.data[a.dataSeriesIndexes[E]],
                        d = 0,
                        m = !1,
                        n = !1,
                        p = c = 0;
                    if ("normal" === e.axisPlacement || "xySwapped" === e.axisPlacement) var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum :
                        a.axisX.logarithmic ? 0 : -Infinity,
                        k = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (e.dataPoints[d].x && e.dataPoints[d].x.getTime || "dateTime" === e.xValueType) g = !0;
                    for (d = 0; d < e.dataPoints.length; d++) "undefined" !== typeof e.dataPoints[d].isCumulativeSum && !0 === e.dataPoints[d].isCumulativeSum ? (e.dataPointEOs[d].cumulativeSumYStartValue =
                        0, e.dataPointEOs[d].cumulativeSum = 0 === d ? 0 : e.dataPointEOs[d - 1].cumulativeSum, e.dataPoints[d].y = 0 === d ? 0 : e.dataPointEOs[d - 1].cumulativeSum) : "undefined" !== typeof e.dataPoints[d].isIntermediateSum && !0 === e.dataPoints[d].isIntermediateSum ? (e.dataPointEOs[d].cumulativeSumYStartValue = p, e.dataPointEOs[d].cumulativeSum = 0 === d ? 0 : e.dataPointEOs[d - 1].cumulativeSum, e.dataPoints[d].y = 0 === d ? 0 : c, p = 0 === d ? 0 : e.dataPointEOs[d - 1].cumulativeSum, c = 0) : (h = "number" !== typeof e.dataPoints[d].y ? 0 : e.dataPoints[d].y, e.dataPointEOs[d].cumulativeSumYStartValue =
                        0 === d ? 0 : e.dataPointEOs[d - 1].cumulativeSum, e.dataPointEOs[d].cumulativeSum = 0 === d ? h : e.dataPointEOs[d - 1].cumulativeSum + h, c += h);
                    for (d = 0; d < e.dataPoints.length; d++)
                        if ("undefined" === typeof e.dataPoints[d].x && (e.dataPoints[d].x = d + (a.axisX.logarithmic ? 1 : 0)), e.dataPoints[d].x.getTime ? (g = !0, c = e.dataPoints[d].x.getTime()) : c = e.dataPoints[d].x, h = e.dataPoints[d].y, c < b.min && (b.min = c), c > b.max && (b.max = c), e.dataPointEOs[d].cumulativeSum < f.min && (f.min = e.dataPointEOs[d].cumulativeSum), e.dataPointEOs[d].cumulativeSum >
                            f.max && (f.max = e.dataPointEOs[d].cumulativeSum), 0 < d && (a.axisX.logarithmic ? (p = c / e.dataPoints[d - 1].x, 1 > p && (p = 1 / p), b.minDiff > p && 1 !== p && (b.minDiff = p)) : (p = c - e.dataPoints[d - 1].x, 0 > p && (p *= -1), b.minDiff > p && 0 !== p && (b.minDiff = p)), null !== h && null !== e.dataPoints[d - 1].y && (a.axisY.logarithmic ? (h = e.dataPointEOs[d].cumulativeSum / e.dataPointEOs[d - 1].cumulativeSum, 1 > h && (h = 1 / h), f.minDiff > h && 1 !== h && (f.minDiff = h)) : (h = e.dataPointEOs[d].cumulativeSum - e.dataPointEOs[d - 1].cumulativeSum, 0 > h && (h *= -1), f.minDiff > h && 0 !== h && (f.minDiff =
                                h)))), !(c < q) || m) {
                            if (!m && (m = !0, 0 < d)) {
                                d -= 2;
                                continue
                            }
                            if (c > k && !n) n = !0;
                            else if (c > k && n) continue;
                            e.dataPoints[d].label && (a.axisX.labels[c] = e.dataPoints[d].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            0 < d && (e.dataPointEOs[d - 1].cumulativeSum < f.viewPortMin && (f.viewPortMin = e.dataPointEOs[d - 1].cumulativeSum), e.dataPointEOs[d - 1].cumulativeSum > f.viewPortMax && (f.viewPortMax = e.dataPointEOs[d - 1].cumulativeSum));
                            e.dataPointEOs[d].cumulativeSum < f.viewPortMin && (f.viewPortMin = e.dataPointEOs[d].cumulativeSum);
                            e.dataPointEOs[d].cumulativeSum > f.viewPortMax && (f.viewPortMax = e.dataPointEOs[d].cumulativeSum)
                        } e.axisX.valueType = e.xValueType = g ? "dateTime" : "number"
                }
        };
        t.prototype.calculateAutoBreaks = function () {
            function a(a, c, b, f) {
                if (f) return b = Math.pow(Math.min(b * a / c, c / a), 0.2), 1 >= b && (b = Math.pow(1 > a ? 1 / a : Math.min(c / a, a), 0.25)), {
                    startValue: a * b,
                    endValue: c / b
                };
                b = 0.2 * Math.min(b - c + a, c - a);
                0 >= b && (b = 0.25 * Math.min(c - a, Math.abs(a)));
                return {
                    startValue: a + b,
                    endValue: c - b
                }
            }

            function f(a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                    var c =
                        a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks,
                        b = a.axisY.scaleBreaks && a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks;
                    if (c || b)
                        for (var f = a.axisY.dataInfo, g = a.axisX.dataInfo, k, m = g.min, E = g.max, n = f.min, d = f.max, g = g._dataRanges, f = f._dataRanges, p, q = 0, ta = 0; ta < a.dataSeriesIndexes.length; ta++) {
                            var D = h.data[a.dataSeriesIndexes[ta]];
                            if (!(4 > D.dataPoints.length))
                                for (q = 0; q < D.dataPoints.length; q++)
                                    if (c && (p = (E + 1 - m) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) ||
                                            10, 10) / 100, k = D.dataPoints[q].x.getTime ? D.dataPoints[q].x.getTime() : D.dataPoints[q].x, p = Math.floor((k - m) / p), k < g[p].min && (g[p].min = k), k > g[p].max && (g[p].max = k)), b) {
                                        var y = (d + 1 - n) * Math.max(parseFloat(a.axisY.scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                                        if ((k = "waterfall" === a.type ? D.dataPointEOs[q].cumulativeSum : D.dataPoints[q].y) && k.length)
                                            for (var v = 0; v < k.length; v++) p = Math.floor((k[v] - n) / y), k[v] < f[p].min && (f[p].min = k[v]), k[v] > f[p].max && (f[p].max = k[v]);
                                        else e(k) || (p = Math.floor((k - n) / y), k < f[p].min && (f[p].min =
                                            k), k > f[p].max && (f[p].max = k))
                                    }
                        }
                }
            }

            function b(a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length) && a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks)
                    for (var c = a.axisX.dataInfo, b = c.min, f = c.max, g = c._dataRanges, k, m = 0, e = 0; e < a.dataSeriesIndexes.length; e++) {
                        var E = h.data[a.dataSeriesIndexes[e]];
                        if (!(4 > E.dataPoints.length))
                            for (m = 0; m < E.dataPoints.length; m++) k = (f + 1 - b) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, c = E.dataPoints[m].x.getTime ?
                                E.dataPoints[m].x.getTime() : E.dataPoints[m].x, k = Math.floor((c - b) / k), c < g[k].min && (g[k].min = c), c > g[k].max && (g[k].max = c)
                    }
            }
            for (var c, h = this, g = !1, E = 0; E < this._axes.length; E++)
                if (this._axes[E].scaleBreaks && this._axes[E].scaleBreaks.autoCalculate && 1 <= this._axes[E].scaleBreaks.maxNumberOfAutoBreaks) {
                    g = !0;
                    this._axes[E].dataInfo._dataRanges = [];
                    for (var d = 0; d < 100 / Math.max(parseFloat(this._axes[E].scaleBreaks.collapsibleThreshold) || 10, 10); d++) this._axes[E].dataInfo._dataRanges.push({
                        min: Infinity,
                        max: -Infinity
                    })
                } if (g) {
                for (E =
                    0; E < this.plotInfo.plotTypes.length; E++)
                    for (g = this.plotInfo.plotTypes[E], d = 0; d < g.plotUnits.length; d++) c = g.plotUnits[d], "line" === c.type || "stepLine" === c.type || "spline" === c.type || "column" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "bar" === c.type || "bubble" === c.type || "scatter" === c.type || "candlestick" === c.type || "ohlc" === c.type || "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "waterfall" === c.type || "error" === c.type || "boxAndWhisker" ===
                        c.type ? f(c) : 0 <= c.type.indexOf("stacked") && b(c);
                for (E = 0; E < this._axes.length; E++)
                    if (this._axes[E].dataInfo._dataRanges) {
                        var D = this._axes[E].dataInfo.min;
                        c = (this._axes[E].dataInfo.max + 1 - D) * Math.max(parseFloat(this._axes[E].scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                        var m = this._axes[E].dataInfo._dataRanges,
                            n, p, g = [];
                        if (this._axes[E].dataInfo.dataPointYPositiveSums) {
                            var q = this._axes[E].dataInfo.dataPointYPositiveSums;
                            n = m;
                            for (d in q)
                                if (q.hasOwnProperty(d) && !isNaN(d) && (p = q[d], !e(p))) {
                                    var k = Math.floor((p -
                                        D) / c);
                                    p < n[k].min && (n[k].min = p);
                                    p > n[k].max && (n[k].max = p)
                                } delete this._axes[E].dataInfo.dataPointYPositiveSums
                        }
                        if (this._axes[E].dataInfo.dataPointYNegativeSums) {
                            q = this._axes[E].dataInfo.dataPointYNegativeSums;
                            n = m;
                            for (d in q) q.hasOwnProperty(d) && !isNaN(d) && (p = -1 * q[d], e(p) || (k = Math.floor((p - D) / c), p < n[k].min && (n[k].min = p), p > n[k].max && (n[k].max = p)));
                            delete this._axes[E].dataInfo.dataPointYNegativeSums
                        }
                        for (d = 0; d < m.length - 1; d++)
                            if (n = m[d].max, isFinite(n))
                                for (; d < m.length - 1;)
                                    if (D = m[d + 1].min, isFinite(D)) {
                                        p = D -
                                            n;
                                        p > c && g.push({
                                            diff: p,
                                            start: n,
                                            end: D
                                        });
                                        break
                                    } else d++;
                        if (this._axes[E].scaleBreaks.customBreaks)
                            for (d = 0; d < this._axes[E].scaleBreaks.customBreaks.length; d++)
                                for (c = 0; c < g.length; c++)
                                    if (this._axes[E].scaleBreaks.customBreaks[d].startValue <= g[c].start && g[c].start <= this._axes[E].scaleBreaks.customBreaks[d].endValue || this._axes[E].scaleBreaks.customBreaks[d].startValue <= g[c].start && g[c].start <= this._axes[E].scaleBreaks.customBreaks[d].endValue || g[c].start <= this._axes[E].scaleBreaks.customBreaks[d].startValue &&
                                        this._axes[E].scaleBreaks.customBreaks[d].startValue <= g[c].end || g[c].start <= this._axes[E].scaleBreaks.customBreaks[d].endValue && this._axes[E].scaleBreaks.customBreaks[d].endValue <= g[c].end) g.splice(c, 1), c--;
                        g.sort(function (a, c) {
                            return c.diff - a.diff
                        });
                        for (d = 0; d < Math.min(g.length, this._axes[E].scaleBreaks.maxNumberOfAutoBreaks); d++) c = a(g[d].start, g[d].end, this._axes[E].logarithmic ? this._axes[E].dataInfo.max / this._axes[E].dataInfo.min : this._axes[E].dataInfo.max - this._axes[E].dataInfo.min, this._axes[E].logarithmic),
                            this._axes[E].scaleBreaks.autoBreaks.push(new X(this, "autoBreaks", c, d, ++this._eventManager.lastObjectId, this._axes[E].scaleBreaks)), this._axes[E].scaleBreaks._appliedBreaks.push(this._axes[E].scaleBreaks.autoBreaks[this._axes[E].scaleBreaks.autoBreaks.length - 1]);
                        this._axes[E].scaleBreaks._appliedBreaks.sort(function (a, c) {
                            return a.startValue - c.startValue
                        })
                    }
            }
        };
        t.prototype.renderCrosshairs = function (a) {
            for (var f = 0; f < this.axisX.length; f++) this.axisX[f] != a && (this.axisX[f].crosshair && this.axisX[f].crosshair.enabled &&
                !this.axisX[f].crosshair._hidden) && this.axisX[f].showCrosshair(this.axisX[f].crosshair._updatedValue);
            for (f = 0; f < this.axisX2.length; f++) this.axisX2[f] != a && (this.axisX2[f].crosshair && this.axisX2[f].crosshair.enabled && !this.axisX2[f].crosshair._hidden) && this.axisX2[f].showCrosshair(this.axisX2[f].crosshair._updatedValue);
            for (f = 0; f < this.axisY.length; f++) this.axisY[f] != a && (this.axisY[f].crosshair && this.axisY[f].crosshair.enabled && !this.axisY[f].crosshair._hidden) && this.axisY[f].showCrosshair(this.axisY[f].crosshair._updatedValue);
            for (f = 0; f < this.axisY2.length; f++) this.axisY2[f] != a && (this.axisY2[f].crosshair && this.axisY2[f].crosshair.enabled && !this.axisY2[f].crosshair._hidden) && this.axisY2[f].showCrosshair(this.axisY2[f].crosshair._updatedValue)
        };
        t.prototype.getDataPointAtXY = function (a, f, b) {
            b = b || !1;
            for (var c = [], h = this._dataInRenderedOrder.length - 1; 0 <= h; h--) {
                var g = null;
                (g = this._dataInRenderedOrder[h].getDataPointAtXY(a, f, b)) && c.push(g)
            }
            a = null;
            f = !1;
            for (b = 0; b < c.length; b++)
                if ("line" === c[b].dataSeries.type || "stepLine" === c[b].dataSeries.type ||
                    "area" === c[b].dataSeries.type || "stepArea" === c[b].dataSeries.type)
                    if (h = qa("markerSize", c[b].dataPoint, c[b].dataSeries) || 8, c[b].distance <= h / 2) {
                        f = !0;
                        break
                    } for (b = 0; b < c.length; b++) f && "line" !== c[b].dataSeries.type && "stepLine" !== c[b].dataSeries.type && "area" !== c[b].dataSeries.type && "stepArea" !== c[b].dataSeries.type || (a ? c[b].distance <= a.distance && (a = c[b]) : a = c[b]);
            return a
        };
        t.prototype.getObjectAtXY = function (a, f, b) {
            var c = null;
            if (b = this.getDataPointAtXY(a, f, b || !1)) c = b.dataSeries.dataPointIds[b.dataPointIndex];
            else if (v) c = jb(a, f, this._eventManager.ghostCtx);
            else
                for (b = 0; b < this.legend.items.length; b++) {
                    var h = this.legend.items[b];
                    a >= h.x1 && (a <= h.x2 && f >= h.y1 && f <= h.y2) && (c = h.id)
                }
            return c
        };
        t.prototype.getAutoFontSize = ob;
        t.prototype.resetOverlayedCanvas = function () {
            this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height)
        };
        t.prototype.clearCanvas = nb;
        t.prototype.attachEvent = function (a) {
            this._events.push(a)
        };
        t.prototype._touchEventHandler = function (a) {
            if (a.changedTouches && this.interactivityEnabled) {
                var f = [],
                    b =
                    a.changedTouches,
                    c = b ? b[0] : a,
                    h = null;
                switch (a.type) {
                    case "touchstart":
                    case "MSPointerDown":
                        f = ["mousemove", "mousedown"];
                        this._lastTouchData = Aa(c);
                        this._lastTouchData.time = new Date;
                        break;
                    case "touchmove":
                    case "MSPointerMove":
                        f = ["mousemove"];
                        break;
                    case "touchend":
                    case "MSPointerUp":
                        var g = this._lastTouchData && this._lastTouchData.time ? new Date - this._lastTouchData.time : 0,
                            f = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > g ? ["mouseup", "click"] : ["mouseup"];
                        break;
                    default:
                        return
                }
                if (!(b &&
                        1 < b.length)) {
                    h = Aa(c);
                    h.time = new Date;
                    try {
                        var E = h.y - this._lastTouchData.y,
                            g = h.time - this._lastTouchData.time;
                        if (1 < Math.abs(E) && this._lastTouchData.scroll || 5 < Math.abs(E) && 250 > g) this._lastTouchData.scroll = !0
                    } catch (d) {}
                    this._lastTouchEventType = a.type;
                    if (this._lastTouchData.scroll && this.zoomEnabled) this.isDrag && this.resetOverlayedCanvas(), this.isDrag = !1;
                    else
                        for (b = 0; b < f.length; b++)
                            if (h = f[b], E = document.createEvent("MouseEvent"), E.initMouseEvent(h, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1,
                                    !1, !1, !1, 0, null), c.target.dispatchEvent(E), !e(this._lastTouchData.scroll) && !this._lastTouchData.scroll || !this._lastTouchData.scroll && 250 < g || "click" === h) a.preventManipulation && a.preventManipulation(), a.preventDefault && a.cancelable && a.preventDefault()
                }
            }
        };
        t.prototype._dispatchRangeEvent = function (a, f) {
            var b = {
                chart: this
            };
            b.type = a;
            b.trigger = f;
            var c = [];
            this.axisX && 0 < this.axisX.length && c.push("axisX");
            this.axisX2 && 0 < this.axisX2.length && c.push("axisX2");
            this.axisY && 0 < this.axisY.length && c.push("axisY");
            this.axisY2 &&
                0 < this.axisY2.length && c.push("axisY2");
            for (var h = 0; h < c.length; h++)
                if (e(b[c[h]]) && (b[c[h]] = []), "axisY" === c[h])
                    for (var g = 0; g < this.axisY.length; g++) b[c[h]].push({
                        viewportMinimum: this[c[h]][g].sessionVariables.newViewportMinimum,
                        viewportMaximum: this[c[h]][g].sessionVariables.newViewportMaximum
                    });
                else if ("axisY2" === c[h])
                for (g = 0; g < this.axisY2.length; g++) b[c[h]].push({
                    viewportMinimum: this[c[h]][g].sessionVariables.newViewportMinimum,
                    viewportMaximum: this[c[h]][g].sessionVariables.newViewportMaximum
                });
            else if ("axisX" ===
                c[h])
                for (g = 0; g < this.axisX.length; g++) b[c[h]].push({
                    viewportMinimum: this[c[h]][g].sessionVariables.newViewportMinimum,
                    viewportMaximum: this[c[h]][g].sessionVariables.newViewportMaximum
                });
            else if ("axisX2" === c[h])
                for (g = 0; g < this.axisX2.length; g++) b[c[h]].push({
                    viewportMinimum: this[c[h]][g].sessionVariables.newViewportMinimum,
                    viewportMaximum: this[c[h]][g].sessionVariables.newViewportMaximum
                });
            this.dispatchEvent(a, b, this)
        };
        t.prototype._mouseEventHandler = function (a) {
            "undefined" === typeof a.target && a.srcElement &&
                (a.target = a.srcElement);
            var f = Aa(a),
                b = a.type,
                c, h;
            a.which ? h = 3 == a.which : a.button && (h = 2 == a.button);
            t.capturedEventParam && (c = t.capturedEventParam, "mouseup" === b && (t.capturedEventParam = null, c.chart.overlaidCanvas.releaseCapture ? c.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", c.chart._mouseEventHandler, !1)), c.hasOwnProperty(b) && ("mouseup" !== b || c.chart.overlaidCanvas.releaseCapture ? a.target !== c.chart.overlaidCanvas && v || c[b].call(c.context, f.x, f.y) : a.target !==
                c.chart.overlaidCanvas && (c.chart.isDrag = !1)));
            if (this.interactivityEnabled)
                if (this._ignoreNextEvent) this._ignoreNextEvent = !1;
                else if (a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault(), Ma && window.console && (window.console.log(b + " --\x3e x: " + f.x + "; y:" + f.y), h && window.console.log(a.which), "mouseup" === b && window.console.log("mouseup")), !h) {
                if (!t.capturedEventParam && this._events) {
                    for (var g = 0; g < this._events.length; g++)
                        if (this._events[g].hasOwnProperty(b))
                            if (c = this._events[g],
                                h = c.bounds, f.x >= h.x1 && f.x <= h.x2 && f.y >= h.y1 && f.y <= h.y2) {
                                c[b].call(c.context, f.x, f.y);
                                "mousedown" === b && !0 === c.capture ? (t.capturedEventParam = c, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, !1)) : "mouseup" === b && (c.chart.overlaidCanvas.releaseCapture ? c.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, !1));
                                break
                            } else c = null;
                    a.target.style.cursor =
                        c && c.cursor ? c.cursor : this._defaultCursor
                }
                b = this.plotArea;
                if (f.x < b.x1 || f.x > b.x2 || f.y < b.y1 || f.y > b.y2)
                    if (this.toolTip && this.toolTip.enabled) {
                        this.toolTip.hide();
                        this.toolTip.dispatchEvent("hidden", {
                            chart: this,
                            toolTip: this.toolTip
                        }, this.toolTip);
                        for (g = 0; g < this.axisX.length; g++) this.axisX[g].crosshair && this.axisX[g].crosshair.enabled && this.axisX[g].crosshair.dispatchEvent("hidden", {
                            chart: this,
                            axis: this.axisX[g].options
                        }, this.axisX[g].crosshair);
                        for (g = 0; g < this.axisX2.length; g++) this.axisX2[g].crosshair &&
                            this.axisX2[g].crosshair.enabled && this.axisX2[g].crosshair.dispatchEvent("hidden", {
                                chart: this,
                                axis: this.axisX2[g].options
                            }, this.axisX2[g].crosshair);
                        for (g = 0; g < this.axisY.length; g++) this.axisY[g].crosshair && this.axisY[g].crosshair.enabled && this.axisY[g].crosshair.dispatchEvent("hidden", {
                            chart: this,
                            axis: this.axisY[g].options
                        }, this.axisY[g].crosshair);
                        for (g = 0; g < this.axisY2.length; g++) this.axisY2[g].crosshair && this.axisY2[g].crosshair.enabled && this.axisY2[g].crosshair.dispatchEvent("hidden", {
                            chart: this,
                            axis: this.axisY2[g].options
                        }, this.axisY2[g].crosshair)
                    } else this.resetOverlayedCanvas();
                this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a)
            }
        };
        t.prototype._plotAreaMouseDown = function (a, f) {
            this.isDrag = !0;
            this.dragStartPoint = {
                x: a,
                y: f
            }
        };
        t.prototype._plotAreaMouseUp = function (a, f) {
            if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
                var b = f - this.dragStartPoint.y,
                    c = a - this.dragStartPoint.x,
                    h = 0 <= this.zoomType.indexOf("x"),
                    g = 0 <= this.zoomType.indexOf("y"),
                    e = !1;
                this.resetOverlayedCanvas();
                if ("xySwapped" === this.plotInfo.axisPlacement) var d = g,
                    g = h,
                    h = d;
                if (this.panEnabled || this.zoomEnabled) {
                    if (this.panEnabled)
                        for (h = g = 0; h < this._axes.length; h++) b = this._axes[h], b.logarithmic ? b.viewportMinimum < b.minimum ? (g = b.minimum / b.viewportMinimum, b.sessionVariables.newViewportMinimum = b.viewportMinimum * g, b.sessionVariables.newViewportMaximum = b.viewportMaximum * g, e = !0) : b.viewportMaximum > b.maximum && (g = b.viewportMaximum / b.maximum, b.sessionVariables.newViewportMinimum =
                            b.viewportMinimum / g, b.sessionVariables.newViewportMaximum = b.viewportMaximum / g, e = !0) : b.viewportMinimum < b.minimum ? (g = b.minimum - b.viewportMinimum, b.sessionVariables.newViewportMinimum = b.viewportMinimum + g, b.sessionVariables.newViewportMaximum = b.viewportMaximum + g, e = !0) : b.viewportMaximum > b.maximum && (g = b.viewportMaximum - b.maximum, b.sessionVariables.newViewportMinimum = b.viewportMinimum - g, b.sessionVariables.newViewportMaximum = b.viewportMaximum - g, e = !0);
                    else if ((!h || 2 < Math.abs(c)) && (!g || 2 < Math.abs(b)) && this.zoomEnabled) {
                        if (!this.dragStartPoint) return;
                        b = h ? this.dragStartPoint.x : this.plotArea.x1;
                        c = g ? this.dragStartPoint.y : this.plotArea.y1;
                        h = h ? a : this.plotArea.x2;
                        g = g ? f : this.plotArea.y2;
                        2 < Math.abs(b - h) && 2 < Math.abs(c - g) && this._zoomPanToSelectedRegion(b, c, h, g) && (e = !0)
                    }
                    e && (this._ignoreNextEvent = !0, this._dispatchRangeEvent("rangeChanging", "zoom"), this.stockChart && (this.stockChart.navigator && this.stockChart.navigator.enabled) && (this.stockChart._rangeEventParameter || (this.stockChart._rangeEventParameter = {
                        stockChart: this.stockChart,
                        source: "chart",
                        index: this.stockChart.charts.indexOf(this),
                        minimum: this.stockChart.sessionVariables._axisXMin,
                        maximum: this.stockChart.sessionVariables._axisXMax
                    }), this.stockChart._rangeEventParameter.type = "rangeChanging", this.stockChart.dispatchEvent("rangeChanging", this.stockChart._rangeEventParameter, this.stockChart)), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), this.stockChart && (this.stockChart.navigator && this.stockChart.navigator.enabled) && (this.stockChart._rangeEventParameter.type = "rangeChanged", this.stockChart.dispatchEvent("rangeChanged",
                        this.stockChart._rangeEventParameter, this.stockChart)), e && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (Sa(this._zoomButton, this._resetButton), Ba(this, this._zoomButton, "pan"), Ba(this, this._resetButton, "reset")))
                }
            }
            this.isDrag = !1;
            if ("none" !== this.plotInfo.axisPlacement) {
                this.resetOverlayedCanvas();
                if (this.axisX && 0 < this.axisX.length)
                    for (e = 0; e < this.axisX.length; e++) this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].renderCrosshair(a, f);
                if (this.axisX2 && 0 < this.axisX2.length)
                    for (e =
                        0; e < this.axisX2.length; e++) this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].renderCrosshair(a, f);
                if (this.axisY && 0 < this.axisY.length)
                    for (e = 0; e < this.axisY.length; e++) this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].renderCrosshair(a, f);
                if (this.axisY2 && 0 < this.axisY2.length)
                    for (e = 0; e < this.axisY2.length; e++) this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].renderCrosshair(a, f)
            }
        };
        t.prototype._plotAreaMouseMove = function (a, f) {
            if (this.isDrag &&
                "none" !== this.plotInfo.axisPlacement) {
                var b = 0,
                    c = 0,
                    h = b = null,
                    h = 0 <= this.zoomType.indexOf("x"),
                    g = 0 <= this.zoomType.indexOf("y"),
                    e = this;
                "xySwapped" === this.plotInfo.axisPlacement && (b = g, g = h, h = b);
                b = this.dragStartPoint.x - a;
                c = this.dragStartPoint.y - f;
                2 < Math.abs(b) && 8 > Math.abs(b) && (this.panEnabled || this.zoomEnabled) ? (this.toolTip.hide(), this.toolTip.dispatchEvent("hidden", {
                    chart: this,
                    toolTip: this.toolTip
                }, this.toolTip)) : this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, f);
                if ((!h || 2 < Math.abs(b) ||
                        !g || 2 < Math.abs(c)) && (this.panEnabled || this.zoomEnabled))
                    if (this.panEnabled) h = {
                        x1: h ? this.plotArea.x1 + b : this.plotArea.x1,
                        y1: g ? this.plotArea.y1 + c : this.plotArea.y1,
                        x2: h ? this.plotArea.x2 + b : this.plotArea.x2,
                        y2: g ? this.plotArea.y2 + c : this.plotArea.y2
                    }, clearTimeout(e._panTimerId), e._panTimerId = setTimeout(function (c, b, h, g) {
                        return function () {
                            e._zoomPanToSelectedRegion(c, b, h, g, !0) && (e._dispatchRangeEvent("rangeChanging", "pan"), e.stockChart && (e.stockChart.navigator && e.stockChart.navigator.enabled) && (e.stockChart._rangeEventParameter.type =
                                "rangeChanging", e.stockChart.dispatchEvent("rangeChanging", e.stockChart._rangeEventParameter, e.stockChart)), e.render(), e._dispatchRangeEvent("rangeChanged", "pan"), e.stockChart && (e.stockChart.navigator && e.stockChart.navigator.enabled) && (e.stockChart._rangeEventParameter.type = "rangeChanged", e.stockChart.dispatchEvent("rangeChanged", e.stockChart._rangeEventParameter, e.stockChart)), e.dragStartPoint.x = a, e.dragStartPoint.y = f)
                        }
                    }(h.x1, h.y1, h.x2, h.y2), 0);
                    else if (this.zoomEnabled) {
                    this.resetOverlayedCanvas();
                    b = this.overlaidCanvasCtx.globalAlpha;
                    this.overlaidCanvasCtx.fillStyle = "#A89896";
                    var c = h ? this.dragStartPoint.x : this.plotArea.x1,
                        d = g ? this.dragStartPoint.y : this.plotArea.y1,
                        D = h ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1,
                        m = g ? f - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                    this.validateRegion(c, d, h ? a : this.plotArea.x2 - this.plotArea.x1, g ? f : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid && (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
                    this.overlaidCanvasCtx.globalAlpha =
                        0.7;
                    this.overlaidCanvasCtx.fillRect(c, d, D, m);
                    this.overlaidCanvasCtx.globalAlpha = b
                }
            } else if (this.toolTip.mouseMoveHandler(a, f), "none" !== this.plotInfo.axisPlacement) {
                if (this.axisX && 0 < this.axisX.length)
                    for (h = 0; h < this.axisX.length; h++) this.axisX[h].crosshair && this.axisX[h].crosshair.enabled && this.axisX[h].renderCrosshair(a, f);
                if (this.axisX2 && 0 < this.axisX2.length)
                    for (h = 0; h < this.axisX2.length; h++) this.axisX2[h].crosshair && this.axisX2[h].crosshair.enabled && this.axisX2[h].renderCrosshair(a, f);
                if (this.axisY &&
                    0 < this.axisY.length)
                    for (h = 0; h < this.axisY.length; h++) this.axisY[h].crosshair && this.axisY[h].crosshair.enabled && this.axisY[h].renderCrosshair(a, f);
                if (this.axisY2 && 0 < this.axisY2.length)
                    for (h = 0; h < this.axisY2.length; h++) this.axisY2[h].crosshair && this.axisY2[h].crosshair.enabled && this.axisY2[h].renderCrosshair(a, f)
            }
        };
        t.prototype._zoomPanToSelectedRegion = function (a, f, b, c, h) {
            a = this.validateRegion(a, f, b, c, h);
            f = a.axesWithValidRange;
            b = a.axesRanges;
            if (a.isValid)
                for (c = 0; c < f.length; c++) h = b[c], f[c].setViewPortRange(h.val1,
                    h.val2), this.syncCharts && "y" != this.zoomType && this.syncCharts(h.val1, h.val2), this.stockChart && (this.stockChart._rangeEventParameter = {
                    stockChart: this.stockChart,
                    source: "chart",
                    index: this.stockChart.charts.indexOf(this),
                    minimum: h.val1,
                    maximum: h.val2
                });
            return a.isValid
        };
        t.prototype.validateRegion = function (a, f, b, c, h) {
            h = h || !1;
            for (var g = 0 <= this.zoomType.indexOf("x"), e = 0 <= this.zoomType.indexOf("y"), d = !1, D = [], m = [], n = [], p = 0; p < this._axes.length; p++)("axisX" === this._axes[p].type && g || "axisY" === this._axes[p].type &&
                e) && m.push(this._axes[p]);
            for (e = 0; e < m.length; e++) {
                var p = m[e],
                    g = !1,
                    q = p.convertPixelToValue({
                        x: a,
                        y: f
                    }),
                    k = p.convertPixelToValue({
                        x: b,
                        y: c
                    });
                if (q > k) var s = k,
                    k = q,
                    q = s;
                if (p.scaleBreaks)
                    for (s = 0; !g && s < p.scaleBreaks._appliedBreaks.length; s++) g = p.scaleBreaks._appliedBreaks[s].startValue <= q && p.scaleBreaks._appliedBreaks[s].endValue >= k;
                if (isFinite(p.dataInfo.minDiff))
                    if (s = p.getApparentDifference(q, k, null, !0), !(g || !(this.panEnabled && p.scaleBreaks && p.scaleBreaks._appliedBreaks.length) && (p.logarithmic && s < Math.pow(p.dataInfo.minDiff,
                            3) || !p.logarithmic && s < 3 * Math.abs(p.dataInfo.minDiff)) || q < p.minimum || k > p.maximum)) D.push(p), n.push({
                        val1: q,
                        val2: k
                    }), d = !0;
                    else if (!h) {
                    d = !1;
                    break
                }
            }
            return {
                isValid: d,
                axesWithValidRange: D,
                axesRanges: n
            }
        };
        t.prototype.preparePlotArea = function () {
            var a = this.plotArea;
            !v && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
            if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
                var f = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
                if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
                    var b =
                        this.axisY[0];
                    a.x1 = f.x1 < f.x2 ? f.x1 : b.lineCoordinates.x1;
                    a.y1 = f.y1 < b.lineCoordinates.y1 ? f.y1 : b.lineCoordinates.y1;
                    a.x2 = f.x2 > b.lineCoordinates.x2 ? f.x2 : b.lineCoordinates.x2;
                    a.y2 = f.y2 > f.y1 ? f.y2 : b.lineCoordinates.y2;
                    a.width = a.x2 - a.x1;
                    a.height = a.y2 - a.y1
                }
                this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (b = this.axisY2[0], a.x1 = f.x1 < f.x2 ? f.x1 : b.lineCoordinates.x1, a.y1 = f.y1 < b.lineCoordinates.y1 ? f.y1 : b.lineCoordinates.y1, a.x2 = f.x2 > b.lineCoordinates.x2 ? f.x2 : b.lineCoordinates.x2, a.y2 = f.y2 > f.y1 ? f.y2 : b.lineCoordinates.y2,
                    a.width = a.x2 - a.x1, a.height = a.y2 - a.y1)
            } else f = this.layoutManager.getFreeSpace(), a.x1 = f.x1, a.x2 = f.x2, a.y1 = f.y1, a.y2 = f.y2, a.width = f.width, a.height = f.height;
            v || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
            a.layoutManager = new Ka(a.x1, a.y1, a.x2, a.y2, 2)
        };
        t.prototype.renderIndexLabels = function (a) {
            var f = a || this.plotArea.ctx,
                b = this.plotArea,
                c = 0,
                h = 0,
                g = 0,
                E = g = h = 0,
                d = 0,
                D = c = 0,
                m = 0;
            for (a = 0; a < this._indexLabels.length; a++) {
                var n =
                    this._indexLabels[a],
                    p = n.chartType.toLowerCase(),
                    q, k, E = qa("indexLabelFontColor", n.dataPoint, n.dataSeries),
                    s = qa("indexLabelFontSize", n.dataPoint, n.dataSeries),
                    d = qa("indexLabelFontFamily", n.dataPoint, n.dataSeries),
                    D = qa("indexLabelFontStyle", n.dataPoint, n.dataSeries),
                    m = qa("indexLabelFontWeight", n.dataPoint, n.dataSeries),
                    wa = qa("indexLabelBackgroundColor", n.dataPoint, n.dataSeries);
                q = qa("indexLabelMaxWidth", n.dataPoint, n.dataSeries);
                k = qa("indexLabelWrap", n.dataPoint, n.dataSeries);
                var fa = qa("indexLabelLineDashType",
                        n.dataPoint, n.dataSeries),
                    w = qa("indexLabelLineColor", n.dataPoint, n.dataSeries),
                    B = e(n.dataPoint.indexLabelLineThickness) ? e(n.dataSeries.options.indexLabelLineThickness) ? 0 : n.dataSeries.options.indexLabelLineThickness : n.dataPoint.indexLabelLineThickness,
                    c = 0 < B ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0,
                    u = {
                        percent: null,
                        total: null
                    },
                    l = null;
                if (0 <= n.dataSeries.type.indexOf("stacked") || "pie" === n.dataSeries.type || "doughnut" === n.dataSeries.type) u = this.getPercentAndTotal(n.dataSeries,
                    n.dataPoint);
                if (n.dataSeries.indexLabelFormatter || n.dataPoint.indexLabelFormatter) l = {
                    chart: this,
                    dataSeries: n.dataSeries,
                    dataPoint: n.dataPoint,
                    index: n.indexKeyword,
                    total: u.total,
                    percent: u.percent
                };
                var r = n.dataPoint.indexLabelFormatter ? n.dataPoint.indexLabelFormatter(l) : n.dataPoint.indexLabel ? this.replaceKeywordsWithValue(n.dataPoint.indexLabel, n.dataPoint, n.dataSeries, null, n.indexKeyword) : n.dataSeries.indexLabelFormatter ? n.dataSeries.indexLabelFormatter(l) : n.dataSeries.indexLabel ? this.replaceKeywordsWithValue(n.dataSeries.indexLabel,
                    n.dataPoint, n.dataSeries, null, n.indexKeyword) : null;
                if (null !== r && "" !== r) {
                    var u = qa("indexLabelPlacement", n.dataPoint, n.dataSeries),
                        l = qa("indexLabelOrientation", n.dataPoint, n.dataSeries),
                        C = n.direction,
                        h = n.dataSeries.axisX,
                        g = n.dataSeries.axisY,
                        t = !1,
                        wa = new ma(f, {
                            x: 0,
                            y: 0,
                            maxWidth: q ? q : 0.5 * this.width,
                            maxHeight: k ? 5 * s : 1.5 * s,
                            angle: "horizontal" === l ? 0 : -90,
                            text: r,
                            padding: 0,
                            backgroundColor: wa,
                            horizontalAlign: "left",
                            fontSize: s,
                            fontFamily: d,
                            fontWeight: m,
                            fontColor: E,
                            fontStyle: D,
                            textBaseline: "middle"
                        });
                    wa.measureText();
                    n.dataSeries.indexLabelMaxWidth = wa.maxWidth;
                    if ("stackedarea100" === p) {
                        if (n.point.x < b.x1 || n.point.x > b.x2 || n.point.y < b.y1 - 1 || n.point.y > b.y2 + 1) continue
                    } else if ("rangearea" === p || "rangesplinearea" === p) {
                        if (n.dataPoint.x < h.viewportMinimum || n.dataPoint.x > h.viewportMaximum || Math.max.apply(null, n.dataPoint.y) < g.viewportMinimum || Math.min.apply(null, n.dataPoint.y) > g.viewportMaximum) continue
                    } else if (0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("bubble") || 0 <= p.indexOf("scatter")) {
                        if (n.dataPoint.x < h.viewportMinimum ||
                            n.dataPoint.x > h.viewportMaximum || n.dataPoint.y < g.viewportMinimum || n.dataPoint.y > g.viewportMaximum) continue
                    } else if (0 <= p.indexOf("column") || "waterfall" === p || "error" === p && !n.axisSwapped) {
                        if (n.dataPoint.x < h.viewportMinimum || n.dataPoint.x > h.viewportMaximum || n.bounds.y1 > b.y2 || n.bounds.y2 < b.y1) continue
                    } else if (0 <= p.indexOf("bar") || "error" === p) {
                        if (n.dataPoint.x < h.viewportMinimum || n.dataPoint.x > h.viewportMaximum || n.bounds.x1 > b.x2 || n.bounds.x2 < b.x1) continue
                    } else if ("candlestick" === p || "ohlc" === p) {
                        if (n.dataPoint.x <
                            h.viewportMinimum || n.dataPoint.x > h.viewportMaximum || Math.max.apply(null, n.dataPoint.y) < g.viewportMinimum || Math.min.apply(null, n.dataPoint.y) > g.viewportMaximum) continue
                    } else if (n.dataPoint.x < h.viewportMinimum || n.dataPoint.x > h.viewportMaximum) continue;
                    E = d = 2;
                    "horizontal" === l ? (D = wa.width, m = wa.height) : (m = wa.width, D = wa.height);
                    if ("normal" === this.plotInfo.axisPlacement) {
                        if (0 <= p.indexOf("line") || 0 <= p.indexOf("area")) u = "auto", d = 4;
                        else if (0 <= p.indexOf("stacked")) "auto" === u && (u = "inside");
                        else if ("bubble" ===
                            p || "scatter" === p) u = "inside";
                        q = n.point.x - ("horizontal" === l ? D / 2 : D / 2 - s / 2);
                        "inside" !== u ? (h = b.y1, g = b.y2, 0 < C ? (k = n.point.y + ("horizontal" === l ? s / 2 : 0) - m - d - c, k < h && (k = "auto" === u ? Math.max(n.point.y, h) + s / 2 + d : h + s / 2 + d, t = k + m > n.point.y)) : (k = n.point.y + s / 2 + d + c, k > g - m && (k = "auto" === u ? Math.min(n.point.y, g) + s / 2 - m - d : g + s / 2 - m, t = k < n.point.y))) : (h = Math.max(n.bounds.y1, b.y1), g = Math.min(n.bounds.y2, b.y2 - m + s / 2), c = 0 <= p.indexOf("range") || "error" === p ? 0 < C ? Math.max(n.bounds.y1, b.y1) + s / 2 + d : Math.min(n.bounds.y2, b.y2) + s / 2 - m + d : (Math.max(n.bounds.y1,
                            b.y1) + Math.min(n.bounds.y2, b.y2)) / 2 - m / 2 + s / 2 + ("horizontal" === l ? d : 0), 0 < C ? (k = Math.max(n.point.y, c), k < h && ("bubble" === p || "scatter" === p) && (k = Math.max(n.point.y - m - d, b.y1 + d))) : (k = Math.min(n.point.y, c), k > g - m - d && ("bubble" === p || "scatter" === p) && (k = Math.min(n.point.y + d, b.y2 - m - d))), k = Math.min(k, g))
                    } else 0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("scatter") ? (u = "auto", E = 4) : 0 <= p.indexOf("stacked") ? "auto" === u && (u = "inside") : "bubble" === p && (u = "inside"), k = n.point.y + s / 2 - m / 2 + d, "inside" !== u ? (h = b.x1, g = b.x2, 0 >
                        C ? (q = n.point.x - ("horizontal" === l ? D : D - s / 2) - E - c, q < h && (q = "auto" === u ? Math.max(n.point.x, h) + E : h + E, t = q + D > n.point.x)) : (q = n.point.x + ("horizontal" === l ? 0 : s / 2) + E + c, q > g - D - E - c && (q = "auto" === u ? Math.min(n.point.x, g) - ("horizontal" === l ? D : D / 2) - E : g - D - E, t = q < n.point.x))) : (h = Math.max(n.bounds.x1, b.x1), Math.min(n.bounds.x2, b.x2), c = 0 <= p.indexOf("range") || "error" === p ? 0 > C ? Math.max(n.bounds.x1, b.x1) + s / 2 + E : Math.min(n.bounds.x2, b.x2) - D / 2 - E + ("horizontal" === l ? 0 : s / 2) : (Math.max(n.bounds.x1, b.x1) + Math.min(n.bounds.x2, b.x2)) / 2 + ("horizontal" ===
                        l ? 0 : s / 2), q = 0 > C ? Math.max(n.point.x, c) - ("horizontal" === l ? D / 2 : 0) : Math.min(n.point.x, c) - D / 2, q = Math.max(q, h));
                    "vertical" === l && (k += m - s / 2);
                    wa.x = q;
                    wa.y = k;
                    wa.render(!0);
                    B && ("inside" !== u && (0 > p.indexOf("bar") && ("error" !== p || !n.axisSwapped) && n.point.x > b.x1 && n.point.x < b.x2 || !t) && (0 > p.indexOf("column") && ("error" !== p || n.axisSwapped) && n.point.y > b.y1 && n.point.y < b.y2 || !t)) && (f.lineWidth = B, f.strokeStyle = w ? w : "gray", f.setLineDash && f.setLineDash(P(fa, B)), f.beginPath(), f.moveTo(n.point.x, n.point.y), 0 <= p.indexOf("bar") ||
                        "error" === p && n.axisSwapped ? f.lineTo(q + (0 < n.direction ? -E : D + E) + ("vertical" === l ? -s / 2 : 0), k + ("vertical" === l ? -m / 2 : m / 2 - s / 2) - d) : 0 <= p.indexOf("column") || "error" === p && !n.axisSwapped ? f.lineTo(q + D / 2 - ("horizontal" === l ? 0 : s / 2), k + ("vertical" === l ? (k - m < n.point.y ? 0 : -m) + d : (k - s / 2 < n.point.y ? m : 0) - s / 2)) : f.lineTo(q + D / 2 - ("horizontal" === l ? 0 : s / 2), k + ("vertical" === l ? k - m < n.point.y ? 0 : -m : (k - s / 2 < n.point.y ? m : 0) - s / 2)), f.stroke())
                }
            }
            f = {
                source: f,
                dest: this.plotArea.ctx,
                animationCallback: y.fadeInAnimation,
                easingFunction: y.easing.easeInQuad,
                animationBase: 0,
                startTimePercent: 0.7
            };
            for (a = 0; a < this._indexLabels.length; a++) n = this._indexLabels[a], wa = qa("indexLabelBackgroundColor", n.dataPoint, n.dataSeries), n.dataSeries.indexLabelBackgroundColor = e(wa) ? v ? "transparent" : null : wa;
            return f
        };
        t.prototype.renderLine = function (a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this._eventManager.ghostCtx;
                b.save();
                var h = this.plotArea;
                b.beginPath();
                b.rect(h.x1, h.y1, h.width, h.height);
                b.clip();
                for (var g = [], e, d = 0; d < a.dataSeriesIndexes.length; d++) {
                    var D = a.dataSeriesIndexes[d],
                        m = this.data[D];
                    b.lineWidth = m.lineThickness;
                    var n = m.dataPoints,
                        p = "solid";
                    if (b.setLineDash) {
                        var q = P(m.nullDataLineDashType, m.lineThickness),
                            p = m.lineDashType,
                            k = P(p, m.lineThickness);
                        b.setLineDash(k)
                    }
                    var s = m.id;
                    this._eventManager.objectMap[s] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: D
                    };
                    s = U(s);
                    c.strokeStyle = s;
                    c.lineWidth = 0 < m.lineThickness ? Math.max(m.lineThickness, 4) : 0;
                    var s = m._colorSet,
                        l = s = m.lineColor = m.options.lineColor ? m.options.lineColor :
                        s[0];
                    b.strokeStyle = s;
                    var fa = !0,
                        w = 0,
                        B, r;
                    b.beginPath();
                    if (0 < n.length) {
                        for (var t = !1, w = 0; w < n.length; w++)
                            if (B = n[w].x.getTime ? n[w].x.getTime() : n[w].x, !(B < a.axisX.dataInfo.viewPortMin || B > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !t)))
                                if ("number" !== typeof n[w].y) 0 < w && !(m.connectNullData || t || fa) && (b.stroke(), v && c.stroke()), t = !0;
                                else {
                                    B = a.axisX.convertValueToPixel(B);
                                    r = a.axisY.convertValueToPixel(n[w].y);
                                    var x = m.dataPointIds[w];
                                    this._eventManager.objectMap[x] = {
                                        id: x,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: D,
                                        dataPointIndex: w,
                                        x1: B,
                                        y1: r
                                    };
                                    fa || t ? (!fa && m.connectNullData ? (b.setLineDash && (m.options.nullDataLineDashType || p === m.lineDashType && m.lineDashType !== m.nullDataLineDashType) && (b.stroke(), b.beginPath(), b.moveTo(e.x, e.y), p = m.nullDataLineDashType, b.setLineDash(q)), b.lineTo(B, r), v && c.lineTo(B, r)) : (b.beginPath(), b.moveTo(B, r), v && (c.beginPath(), c.moveTo(B, r))), t = fa = !1) : (b.lineTo(B, r), v && c.lineTo(B, r), 0 == w % 500 && (b.stroke(), b.beginPath(), b.moveTo(B, r), v && (c.stroke(), c.beginPath(), c.moveTo(B, r))));
                                    e = {
                                        x: B,
                                        y: r
                                    };
                                    w <
                                        n.length - 1 && (l !== (n[w].lineColor || s) || p !== (n[w].lineDashType || m.lineDashType)) && (b.stroke(), b.beginPath(), b.moveTo(B, r), l = n[w].lineColor || s, b.strokeStyle = l, b.setLineDash && (n[w].lineDashType ? (p = n[w].lineDashType, b.setLineDash(P(p, m.lineThickness))) : (p = m.lineDashType, b.setLineDash(k))));
                                    if (0 < n[w].markerSize || 0 < m.markerSize) {
                                        var C = m.getMarkerProperties(w, B, r, b);
                                        g.push(C);
                                        x = U(x);
                                        v && g.push({
                                            x: B,
                                            y: r,
                                            ctx: c,
                                            type: C.type,
                                            size: C.size,
                                            color: x,
                                            borderColor: x,
                                            borderThickness: C.borderThickness
                                        })
                                    }(n[w].indexLabel ||
                                        m.indexLabel || n[w].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "line",
                                        dataPoint: n[w],
                                        dataSeries: m,
                                        point: {
                                            x: B,
                                            y: r
                                        },
                                        direction: 0 > n[w].y === a.axisY.reversed ? 1 : -1,
                                        color: s
                                    })
                                } b.stroke();
                        v && c.stroke()
                    }
                }
                u.drawMarkers(g);
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), c.beginPath());
                b.restore();
                b.beginPath();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: y.xClipAnimation,
                    easingFunction: y.easing.linear,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderStepLine = function (a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this._eventManager.ghostCtx;
                b.save();
                var h =
                    this.plotArea;
                b.beginPath();
                b.rect(h.x1, h.y1, h.width, h.height);
                b.clip();
                for (var g = [], e, d = 0; d < a.dataSeriesIndexes.length; d++) {
                    var D = a.dataSeriesIndexes[d],
                        m = this.data[D];
                    b.lineWidth = m.lineThickness;
                    var n = m.dataPoints,
                        p = "solid";
                    if (b.setLineDash) {
                        var q = P(m.nullDataLineDashType, m.lineThickness),
                            p = m.lineDashType,
                            k = P(p, m.lineThickness);
                        b.setLineDash(k)
                    }
                    var s = m.id;
                    this._eventManager.objectMap[s] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: D
                    };
                    s = U(s);
                    c.strokeStyle = s;
                    c.lineWidth = 0 < m.lineThickness ? Math.max(m.lineThickness,
                        4) : 0;
                    var s = m._colorSet,
                        l = s = m.lineColor = m.options.lineColor ? m.options.lineColor : s[0];
                    b.strokeStyle = s;
                    var fa = !0,
                        w = 0,
                        B, r;
                    b.beginPath();
                    if (0 < n.length) {
                        for (var t = !1, w = 0; w < n.length; w++)
                            if (B = n[w].getTime ? n[w].x.getTime() : n[w].x, !(B < a.axisX.dataInfo.viewPortMin || B > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !t)))
                                if ("number" !== typeof n[w].y) 0 < w && !(m.connectNullData || t || fa) && (b.stroke(), v && c.stroke()), t = !0;
                                else {
                                    var x = r;
                                    B = a.axisX.convertValueToPixel(B);
                                    r = a.axisY.convertValueToPixel(n[w].y);
                                    var C = m.dataPointIds[w];
                                    this._eventManager.objectMap[C] = {
                                        id: C,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: D,
                                        dataPointIndex: w,
                                        x1: B,
                                        y1: r
                                    };
                                    fa || t ? (!fa && m.connectNullData ? (b.setLineDash && (m.options.nullDataLineDashType || p === m.lineDashType && m.lineDashType !== m.nullDataLineDashType) && (b.stroke(), b.beginPath(), b.moveTo(e.x, e.y), p = m.nullDataLineDashType, b.setLineDash(q)), b.lineTo(B, x), b.lineTo(B, r), v && (c.lineTo(B, x), c.lineTo(B, r))) : (b.beginPath(), b.moveTo(B, r), v && (c.beginPath(), c.moveTo(B, r))), t = fa = !1) : (b.lineTo(B, x), v && c.lineTo(B, x),
                                        b.lineTo(B, r), v && c.lineTo(B, r), 0 == w % 500 && (b.stroke(), b.beginPath(), b.moveTo(B, r), v && (c.stroke(), c.beginPath(), c.moveTo(B, r))));
                                    e = {
                                        x: B,
                                        y: r
                                    };
                                    w < n.length - 1 && (l !== (n[w].lineColor || s) || p !== (n[w].lineDashType || m.lineDashType)) && (b.stroke(), b.beginPath(), b.moveTo(B, r), l = n[w].lineColor || s, b.strokeStyle = l, b.setLineDash && (n[w].lineDashType ? (p = n[w].lineDashType, b.setLineDash(P(p, m.lineThickness))) : (p = m.lineDashType, b.setLineDash(k))));
                                    if (0 < n[w].markerSize || 0 < m.markerSize) x = m.getMarkerProperties(w, B, r, b), g.push(x),
                                        C = U(C), v && g.push({
                                            x: B,
                                            y: r,
                                            ctx: c,
                                            type: x.type,
                                            size: x.size,
                                            color: C,
                                            borderColor: C,
                                            borderThickness: x.borderThickness
                                        });
                                    (n[w].indexLabel || m.indexLabel || n[w].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "stepLine",
                                        dataPoint: n[w],
                                        dataSeries: m,
                                        point: {
                                            x: B,
                                            y: r
                                        },
                                        direction: 0 > n[w].y === a.axisY.reversed ? 1 : -1,
                                        color: s
                                    })
                                } b.stroke();
                        v && c.stroke()
                    }
                }
                u.drawMarkers(g);
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas &&
                    b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), c.beginPath());
                b.restore();
                b.beginPath();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: y.xClipAnimation,
                    easingFunction: y.easing.linear,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderSpline = function (a) {
            function f(a) {
                a =
                    x(a, 2);
                if (0 < a.length) {
                    c.beginPath();
                    v && h.beginPath();
                    c.moveTo(a[0].x, a[0].y);
                    a[0].newStrokeStyle && (c.strokeStyle = a[0].newStrokeStyle);
                    a[0].newLineDashArray && c.setLineDash(a[0].newLineDashArray);
                    v && h.moveTo(a[0].x, a[0].y);
                    for (var b = 0; b < a.length - 3; b += 3)
                        if (c.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y), v && h.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y), 0 < b && 0 === b % 3E3 || a[b + 3].newStrokeStyle || a[b + 3].newLineDashArray) c.stroke(), c.beginPath(), c.moveTo(a[b + 3].x,
                            a[b + 3].y), a[b + 3].newStrokeStyle && (c.strokeStyle = a[b + 3].newStrokeStyle), a[b + 3].newLineDashArray && c.setLineDash(a[b + 3].newLineDashArray), v && (h.stroke(), h.beginPath(), h.moveTo(a[b + 3].x, a[b + 3].y));
                    c.stroke();
                    v && h.stroke()
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = v ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var h = this._eventManager.ghostCtx;
                c.save();
                var g = this.plotArea;
                c.beginPath();
                c.rect(g.x1, g.y1, g.width, g.height);
                c.clip();
                for (var e = [], d = 0; d < a.dataSeriesIndexes.length; d++) {
                    var D =
                        a.dataSeriesIndexes[d],
                        m = this.data[D];
                    c.lineWidth = m.lineThickness;
                    var n = m.dataPoints,
                        p = "solid";
                    if (c.setLineDash) {
                        var q = P(m.nullDataLineDashType, m.lineThickness),
                            p = m.lineDashType,
                            k = P(p, m.lineThickness);
                        c.setLineDash(k)
                    }
                    var s = m.id;
                    this._eventManager.objectMap[s] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: D
                    };
                    s = U(s);
                    h.strokeStyle = s;
                    h.lineWidth = 0 < m.lineThickness ? Math.max(m.lineThickness, 4) : 0;
                    var s = m._colorSet,
                        l = s = m.lineColor = m.options.lineColor ? m.options.lineColor : s[0];
                    c.strokeStyle = s;
                    var fa = 0,
                        w, B, r = [];
                    c.beginPath();
                    if (0 < n.length)
                        for (B = !1, fa = 0; fa < n.length; fa++)
                            if (w = n[fa].getTime ? n[fa].x.getTime() : n[fa].x, !(w < a.axisX.dataInfo.viewPortMin || w > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !B)))
                                if ("number" !== typeof n[fa].y) 0 < fa && !B && (m.connectNullData ? c.setLineDash && (0 < r.length && (m.options.nullDataLineDashType || !n[fa - 1].lineDashType)) && (r[r.length - 1].newLineDashArray = q, p = m.nullDataLineDashType) : (f(r), r = [])), B = !0;
                                else {
                                    w = a.axisX.convertValueToPixel(w);
                                    B = a.axisY.convertValueToPixel(n[fa].y);
                                    var t =
                                        m.dataPointIds[fa];
                                    this._eventManager.objectMap[t] = {
                                        id: t,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: D,
                                        dataPointIndex: fa,
                                        x1: w,
                                        y1: B
                                    };
                                    r[r.length] = {
                                        x: w,
                                        y: B
                                    };
                                    fa < n.length - 1 && (l !== (n[fa].lineColor || s) || p !== (n[fa].lineDashType || m.lineDashType)) && (l = n[fa].lineColor || s, r[r.length - 1].newStrokeStyle = l, c.setLineDash && (n[fa].lineDashType ? (p = n[fa].lineDashType, r[r.length - 1].newLineDashArray = P(p, m.lineThickness)) : (p = m.lineDashType, r[r.length - 1].newLineDashArray = k)));
                                    if (0 < n[fa].markerSize || 0 < m.markerSize) {
                                        var ia = m.getMarkerProperties(fa,
                                            w, B, c);
                                        e.push(ia);
                                        t = U(t);
                                        v && e.push({
                                            x: w,
                                            y: B,
                                            ctx: h,
                                            type: ia.type,
                                            size: ia.size,
                                            color: t,
                                            borderColor: t,
                                            borderThickness: ia.borderThickness
                                        })
                                    }(n[fa].indexLabel || m.indexLabel || n[fa].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "spline",
                                        dataPoint: n[fa],
                                        dataSeries: m,
                                        point: {
                                            x: w,
                                            y: B
                                        },
                                        direction: 0 > n[fa].y === a.axisY.reversed ? 1 : -1,
                                        color: s
                                    });
                                    B = !1
                                } f(r)
                }
                u.drawMarkers(e);
                v && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas &&
                    c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(g.x1, g.y1, g.width, g.height), h.beginPath());
                c.restore();
                c.beginPath();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: y.xClipAnimation,
                    easingFunction: y.easing.linear,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderColumn = function (a) {
            var f = a.targetCanvasCtx ||
                this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    h = this.plotArea,
                    g = 0,
                    e, d, D, m = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0,
                    p = a.axisX.dataInfo.minDiff;
                isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
                p = this.dataPointWidth = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (h.width * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && g > n && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && n < g) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, g));
                p < g && (p = g);
                p > n &&
                    (p = n);
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(h.x1, h.y1, h.width, h.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
                for (n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var q = a.dataSeriesIndexes[n],
                        k = this.data[q],
                        s = k.dataPoints;
                    if (0 < s.length)
                        for (var l = 5 < p && k.bevelEnabled ? !0 : !1, g = 0; g < s.length; g++)
                            if (s[g].getTime ? D = s[g].x.getTime() : D = s[g].x, !(D < a.axisX.dataInfo.viewPortMin || D >
                                    a.axisX.dataInfo.viewPortMax) && "number" === typeof s[g].y) {
                                e = a.axisX.convertValueToPixel(D);
                                d = a.axisY.convertValueToPixel(s[g].y);
                                e = a.axisX.reversed ? e + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + n) * p << 0 : e - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + n) * p << 0;
                                var u = a.axisX.reversed ? e - p << 0 : e + p << 0,
                                    w;
                                0 <= s[g].y ? w = m : (w = d, d = m);
                                d > w && (c = d, d = w, w = c);
                                c = s[g].color ? s[g].color : k._colorSet[g % k._colorSet.length];
                                da(b, e, d, u, w, c, 0, null, l && 0 <= s[g].y, 0 > s[g].y && l, !1, !1, k.fillOpacity);
                                c = k.dataPointIds[g];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: q,
                                    dataPointIndex: g,
                                    x1: e,
                                    y1: d,
                                    x2: u,
                                    y2: w
                                };
                                c = U(c);
                                v && da(this._eventManager.ghostCtx, e, d, u, w, c, 0, null, !1, !1, !1, !1);
                                (s[g].indexLabel || k.indexLabel || s[g].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "column",
                                    dataPoint: s[g],
                                    dataSeries: k,
                                    point: {
                                        x: e + (u - e) / 2,
                                        y: 0 > s[g].y === a.axisY.reversed ? d : w
                                    },
                                    direction: 0 > s[g].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: e,
                                        y1: Math.min(d, w),
                                        x2: u,
                                        y2: Math.max(d, w)
                                    },
                                    color: c
                                })
                            }
                }
                v &&
                    (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: y.yScaleAnimation,
                    easingFunction: y.easing.easeOutQuart,
                    animationBase: m < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : m > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : m
                }
            }
        };
        t.prototype.renderStackedColumn = function (a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    h = this.plotArea,
                    g = [],
                    e = [],
                    d = [],
                    D = [],
                    m = 0,
                    n, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    m = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth :
                    1;
                n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0;
                var k = a.axisX.dataInfo.minDiff;
                isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
                k = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (h.width * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && m > n && (m = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
                !this.dataPointMaxWidth &&
                    (this.dataPointMinWidth && n < m) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, m));
                k < m && (k = m);
                k > n && (k = n);
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(h.x1, h.y1, h.width, h.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
                for (var s = 0; s < a.dataSeriesIndexes.length; s++) {
                    var u = a.dataSeriesIndexes[s],
                        l = this.data[u],
                        w = l.dataPoints;
                    if (0 < w.length) {
                        var B = 5 <
                            k && l.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (m = 0; m < w.length; m++)
                            if (c = w[m].x.getTime ? w[m].x.getTime() : w[m].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof w[m].y) {
                                n = a.axisX.convertValueToPixel(c);
                                var r = n - a.plotType.plotUnits.length * k / 2 + a.index * k << 0,
                                    t = r + k << 0,
                                    x;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < w[m].y) d[c] = w[m].y + (d[c] ? d[c] : 0), 0 < d[c] && (p = a.axisY.convertValueToPixel(d[c]), x = "undefined" !== typeof g[c] ?
                                    g[c] : q, g[c] = p);
                                else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= w[m].y) D[c] = w[m].y + (D[c] ? D[c] : 0), x = a.axisY.convertValueToPixel(D[c]), p = "undefined" !== typeof e[c] ? e[c] : q, e[c] = x;
                                else if (p = a.axisY.convertValueToPixel(w[m].y), 0 <= w[m].y) {
                                    var C = "undefined" !== typeof g[c] ? g[c] : 0;
                                    p -= C;
                                    x = q - C;
                                    g[c] = C + (x - p)
                                } else C = e[c] ? e[c] : 0, x = p + C, p = q + C, e[c] = C + (x - p);
                                c = w[m].color ? w[m].color : l._colorSet[m % l._colorSet.length];
                                da(b, r, p, t, x, c, 0, null, B && 0 <= w[m].y, 0 > w[m].y && B, !1, !1, l.fillOpacity);
                                c = l.dataPointIds[m];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: u,
                                    dataPointIndex: m,
                                    x1: r,
                                    y1: p,
                                    x2: t,
                                    y2: x
                                };
                                c = U(c);
                                v && da(this._eventManager.ghostCtx, r, p, t, x, c, 0, null, !1, !1, !1, !1);
                                (w[m].indexLabel || l.indexLabel || w[m].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedColumn",
                                    dataPoint: w[m],
                                    dataSeries: l,
                                    point: {
                                        x: n,
                                        y: 0 <= w[m].y ? p : x
                                    },
                                    direction: 0 > w[m].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: r,
                                        y1: Math.min(p, x),
                                        x2: t,
                                        y2: Math.max(p, x)
                                    },
                                    color: c
                                })
                            }
                    }
                }
                v && (f.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: y.yScaleAnimation,
                    easingFunction: y.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q
                }
            }
        };
        t.prototype.renderStackedColumn100 = function (a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    h = this.plotArea,
                    g = [],
                    e = [],
                    d = [],
                    D = [],
                    m = 0,
                    n, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    m = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                n = this.options.dataPointMaxWidth ?
                    this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0;
                var k = a.axisX.dataInfo.minDiff;
                isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
                k = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (h.width * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && m > n && (m = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
                !this.dataPointMaxWidth && (this.dataPointMinWidth &&
                    n < m) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, m));
                k < m && (k = m);
                k > n && (k = n);
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(h.x1, h.y1, h.width, h.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
                for (var s = 0; s < a.dataSeriesIndexes.length; s++) {
                    var l = a.dataSeriesIndexes[s],
                        u = this.data[l],
                        w = u.dataPoints;
                    if (0 < w.length)
                        for (var B = 5 < k && u.bevelEnabled ? !0 : !1,
                                m = 0; m < w.length; m++)
                            if (c = w[m].x.getTime ? w[m].x.getTime() : w[m].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof w[m].y) {
                                n = a.axisX.convertValueToPixel(c);
                                p = 0 !== a.dataPointYSums[c] ? 100 * (w[m].y / a.dataPointYSums[c]) : 0;
                                var r = n - a.plotType.plotUnits.length * k / 2 + a.index * k << 0,
                                    t = r + k << 0,
                                    x;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < w[m].y) {
                                    d[c] = p + ("undefined" !== typeof d[c] ? d[c] : 0);
                                    if (0 >= d[c]) continue;
                                    p = a.axisY.convertValueToPixel(d[c]);
                                    x = g[c] ? g[c] : q;
                                    g[c] = p
                                } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= w[m].y) D[c] = p + ("undefined" !== typeof D[c] ? D[c] : 0), x = a.axisY.convertValueToPixel(D[c]), p = e[c] ? e[c] : q, e[c] = x;
                                else if (p = a.axisY.convertValueToPixel(p), 0 <= w[m].y) {
                                    var C = "undefined" !== typeof g[c] ? g[c] : 0;
                                    p -= C;
                                    x = q - C;
                                    a.dataSeriesIndexes.length - 1 === s && 1 >= Math.abs(h.y1 - p) && (p = h.y1);
                                    g[c] = C + (x - p)
                                } else C = "undefined" !== typeof e[c] ? e[c] : 0, x = p + C, p = q + C, a.dataSeriesIndexes.length - 1 === s && 1 >= Math.abs(h.y2 - x) && (x = h.y2), e[c] =
                                    C + (x - p);
                                c = w[m].color ? w[m].color : u._colorSet[m % u._colorSet.length];
                                da(b, r, p, t, x, c, 0, null, B && 0 <= w[m].y, 0 > w[m].y && B, !1, !1, u.fillOpacity);
                                c = u.dataPointIds[m];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: l,
                                    dataPointIndex: m,
                                    x1: r,
                                    y1: p,
                                    x2: t,
                                    y2: x
                                };
                                c = U(c);
                                v && da(this._eventManager.ghostCtx, r, p, t, x, c, 0, null, !1, !1, !1, !1);
                                (w[m].indexLabel || u.indexLabel || w[m].indexLabelFormatter || u.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedColumn100",
                                    dataPoint: w[m],
                                    dataSeries: u,
                                    point: {
                                        x: n,
                                        y: 0 <= w[m].y ? p : x
                                    },
                                    direction: 0 > w[m].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: r,
                                        y1: Math.min(p, x),
                                        x2: t,
                                        y2: Math.max(p, x)
                                    },
                                    color: c
                                })
                            }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: y.yScaleAnimation,
                    easingFunction: y.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q
                }
            }
        };
        t.prototype.renderBar = function (a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    h = this.plotArea,
                    g = 0,
                    e, d, D, m = a.axisY.convertValueToPixel(a.axisY.logarithmic ?
                        a.axisY.viewportMinimum : 0),
                    g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0,
                    p = a.axisX.dataInfo.minDiff;
                isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
                p = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (h.height * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) :
                    Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && g > n && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && n < g) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, g));
                p < g && (p = g);
                p > n && (p = n);
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(h.x1, h.y1, h.width, h.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1,
                    h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
                for (n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var q = a.dataSeriesIndexes[n],
                        k = this.data[q],
                        s = k.dataPoints;
                    if (0 < s.length) {
                        var u = 5 < p && k.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (g = 0; g < s.length; g++)
                            if (s[g].getTime ? D = s[g].x.getTime() : D = s[g].x, !(D < a.axisX.dataInfo.viewPortMin || D > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[g].y) {
                                d = a.axisX.convertValueToPixel(D);
                                e = a.axisY.convertValueToPixel(s[g].y);
                                d = a.axisX.reversed ? d + a.plotType.totalDataSeries *
                                    p / 2 - (a.previousDataSeriesCount + n) * p << 0 : d - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + n) * p << 0;
                                var l = a.axisX.reversed ? d - p << 0 : d + p << 0,
                                    w;
                                0 <= s[g].y ? w = m : (w = e, e = m);
                                c = s[g].color ? s[g].color : k._colorSet[g % k._colorSet.length];
                                da(b, w, d, e, l, c, 0, null, u, !1, !1, !1, k.fillOpacity);
                                c = k.dataPointIds[g];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: q,
                                    dataPointIndex: g,
                                    x1: w,
                                    y1: d,
                                    x2: e,
                                    y2: l
                                };
                                c = U(c);
                                v && da(this._eventManager.ghostCtx, w, d, e, l, c, 0, null, !1, !1, !1, !1);
                                (s[g].indexLabel ||
                                    k.indexLabel || s[g].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "bar",
                                    dataPoint: s[g],
                                    dataSeries: k,
                                    point: {
                                        x: 0 <= s[g].y ? e : w,
                                        y: d + (l - d) / 2
                                    },
                                    direction: 0 > s[g].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: Math.min(w, e),
                                        y1: d,
                                        x2: Math.max(w, e),
                                        y2: l
                                    },
                                    color: c
                                })
                            }
                    }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas,
                    0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: y.xScaleAnimation,
                    easingFunction: y.easing.easeOutQuart,
                    animationBase: m < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : m > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : m
                }
            }
        };
        t.prototype.renderStackedBar = function (a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    h = this.plotArea,
                    g = [],
                    e = [],
                    d = [],
                    D = [],
                    m = 0,
                    n, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    m = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0;
                var k = a.axisX.dataInfo.minDiff;
                isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
                k =
                    this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (h.height * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && m > p && (m = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && p < m) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, m));
                k < m && (k = m);
                k > p && (k = p);
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(h.x1, h.y1, h.width, h.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
                for (var s = 0; s < a.dataSeriesIndexes.length; s++) {
                    var l = a.dataSeriesIndexes[s],
                        u = this.data[l],
                        w = u.dataPoints;
                    if (0 < w.length) {
                        var B = 5 < k && u.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (m = 0; m < w.length; m++)
                            if (c = w[m].x.getTime ? w[m].x.getTime() : w[m].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" ===
                                typeof w[m].y) {
                                p = a.axisX.convertValueToPixel(c);
                                var r = p - a.plotType.plotUnits.length * k / 2 + a.index * k << 0,
                                    x = r + k << 0,
                                    t;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < w[m].y) d[c] = w[m].y + (d[c] ? d[c] : 0), 0 < d[c] && (t = g[c] ? g[c] : q, g[c] = n = a.axisY.convertValueToPixel(d[c]));
                                else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= w[m].y) D[c] = w[m].y + (D[c] ? D[c] : 0), n = e[c] ? e[c] : q, e[c] = t = a.axisY.convertValueToPixel(D[c]);
                                else if (n = a.axisY.convertValueToPixel(w[m].y),
                                    0 <= w[m].y) {
                                    var C = g[c] ? g[c] : 0;
                                    t = q + C;
                                    n += C;
                                    g[c] = C + (n - t)
                                } else C = e[c] ? e[c] : 0, t = n - C, n = q - C, e[c] = C + (n - t);
                                c = w[m].color ? w[m].color : u._colorSet[m % u._colorSet.length];
                                da(b, t, r, n, x, c, 0, null, B, !1, !1, !1, u.fillOpacity);
                                c = u.dataPointIds[m];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: l,
                                    dataPointIndex: m,
                                    x1: t,
                                    y1: r,
                                    x2: n,
                                    y2: x
                                };
                                c = U(c);
                                v && da(this._eventManager.ghostCtx, t, r, n, x, c, 0, null, !1, !1, !1, !1);
                                (w[m].indexLabel || u.indexLabel || w[m].indexLabelFormatter || u.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedBar",
                                    dataPoint: w[m],
                                    dataSeries: u,
                                    point: {
                                        x: 0 <= w[m].y ? n : t,
                                        y: p
                                    },
                                    direction: 0 > w[m].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: Math.min(t, n),
                                        y1: r,
                                        x2: Math.max(t, n),
                                        y2: x
                                    },
                                    color: c
                                })
                            }
                    }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: y.xScaleAnimation,
                    easingFunction: y.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q
                }
            }
        };
        t.prototype.renderStackedBar100 = function (a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    h = this.plotArea,
                    g = [],
                    e = [],
                    d = [],
                    D = [],
                    m = 0,
                    n, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    m = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0;
                var k = a.axisX.dataInfo.minDiff;
                isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
                k = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (h.height * (a.axisX.logarithmic ? Math.log(k) /
                    Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && m > p && (m = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && p < m) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, m));
                k < m && (k = m);
                k > p && (k = p);
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(h.x1, h.y1, h.width, h.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1,
                    h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
                for (var s = 0; s < a.dataSeriesIndexes.length; s++) {
                    var u = a.dataSeriesIndexes[s],
                        l = this.data[u],
                        w = l.dataPoints;
                    if (0 < w.length) {
                        var B = 5 < k && l.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (m = 0; m < w.length; m++)
                            if (c = w[m].x.getTime ? w[m].x.getTime() : w[m].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof w[m].y) {
                                p = a.axisX.convertValueToPixel(c);
                                var r;
                                r = 0 !== a.dataPointYSums[c] ? 100 * (w[m].y / a.dataPointYSums[c]) : 0;
                                var x =
                                    p - a.plotType.plotUnits.length * k / 2 + a.index * k << 0,
                                    t = x + k << 0;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < w[m].y) {
                                    d[c] = r + (d[c] ? d[c] : 0);
                                    if (0 >= d[c]) continue;
                                    r = g[c] ? g[c] : q;
                                    g[c] = n = a.axisY.convertValueToPixel(d[c])
                                } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= w[m].y) D[c] = r + (D[c] ? D[c] : 0), n = e[c] ? e[c] : q, e[c] = r = a.axisY.convertValueToPixel(D[c]);
                                else if (n = a.axisY.convertValueToPixel(r), 0 <= w[m].y) {
                                    var C = g[c] ? g[c] : 0;
                                    r = q + C;
                                    n += C;
                                    a.dataSeriesIndexes.length -
                                        1 === s && 1 >= Math.abs(h.x2 - n) && (n = h.x2);
                                    g[c] = C + (n - r)
                                } else C = e[c] ? e[c] : 0, r = n - C, n = q - C, a.dataSeriesIndexes.length - 1 === s && 1 >= Math.abs(h.x1 - r) && (r = h.x1), e[c] = C + (n - r);
                                c = w[m].color ? w[m].color : l._colorSet[m % l._colorSet.length];
                                da(b, r, x, n, t, c, 0, null, B, !1, !1, !1, l.fillOpacity);
                                c = l.dataPointIds[m];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: u,
                                    dataPointIndex: m,
                                    x1: r,
                                    y1: x,
                                    x2: n,
                                    y2: t
                                };
                                c = U(c);
                                v && da(this._eventManager.ghostCtx, r, x, n, t, c, 0, null, !1, !1, !1, !1);
                                (w[m].indexLabel || l.indexLabel ||
                                    w[m].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedBar100",
                                    dataPoint: w[m],
                                    dataSeries: l,
                                    point: {
                                        x: 0 <= w[m].y ? n : r,
                                        y: p
                                    },
                                    direction: 0 > w[m].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: Math.min(r, n),
                                        y1: x,
                                        x2: Math.max(r, n),
                                        y2: t
                                    },
                                    color: c
                                })
                            }
                    }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas,
                    0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: y.xScaleAnimation,
                    easingFunction: y.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q
                }
            }
        };
        t.prototype.renderArea = function (a) {
            var f, b;

            function c() {
                ia && (0 < k.lineThickness &&
                    g.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? t = x : 0 > a.axisY.viewportMaximum ? t = d.y1 : 0 < a.axisY.viewportMinimum && (t = x), g.lineTo(r, t), g.lineTo(ia.x, t), g.closePath(), g.globalAlpha = k.fillOpacity, g.fill(), g.globalAlpha = 1, v && (e.lineTo(r, t), e.lineTo(ia.x, t), e.closePath(), e.fill()), g.beginPath(), g.moveTo(r, w), e.beginPath(), e.moveTo(r, w), ia = {
                        x: r,
                        y: w
                    })
            }
            var h = a.targetCanvasCtx || this.plotArea.ctx,
                g = v ? this._preRenderCtx : h;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx,
                    d = a.axisY.lineCoordinates,
                    D = [],
                    m = this.plotArea,
                    n;
                g.save();
                v && e.save();
                g.beginPath();
                g.rect(m.x1, m.y1, m.width, m.height);
                g.clip();
                v && (e.beginPath(), e.rect(m.x1, m.y1, m.width, m.height), e.clip());
                for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var q = a.dataSeriesIndexes[p],
                        k = this.data[q],
                        s = k.dataPoints,
                        D = k.id;
                    this._eventManager.objectMap[D] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: q
                    };
                    D = U(D);
                    e.fillStyle = D;
                    D = [];
                    f = !0;
                    var l = 0,
                        r, w, B, x = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        t, ia = null;
                    if (0 < s.length) {
                        var C = k._colorSet[l % k._colorSet.length],
                            A = k.lineColor = k.options.lineColor || C,
                            z = A;
                        g.fillStyle = C;
                        g.strokeStyle = A;
                        g.lineWidth = k.lineThickness;
                        b = "solid";
                        if (g.setLineDash) {
                            var O = P(k.nullDataLineDashType, k.lineThickness);
                            b = k.lineDashType;
                            var ba = P(b, k.lineThickness);
                            g.setLineDash(ba)
                        }
                        for (var ea = !0; l < s.length; l++)
                            if (B = s[l].x.getTime ? s[l].x.getTime() : s[l].x, !(B < a.axisX.dataInfo.viewPortMin || B > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !ea)))
                                if ("number" !== typeof s[l].y) k.connectNullData ||
                                    (ea || f) || c(), ea = !0;
                                else {
                                    r = a.axisX.convertValueToPixel(B);
                                    w = a.axisY.convertValueToPixel(s[l].y);
                                    f || ea ? (!f && k.connectNullData ? (g.setLineDash && (k.options.nullDataLineDashType || b === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (f = r, b = w, r = n.x, w = n.y, c(), g.moveTo(n.x, n.y), r = f, w = b, ia = n, b = k.nullDataLineDashType, g.setLineDash(O)), g.lineTo(r, w), v && e.lineTo(r, w)) : (g.beginPath(), g.moveTo(r, w), v && (e.beginPath(), e.moveTo(r, w)), ia = {
                                        x: r,
                                        y: w
                                    }), ea = f = !1) : (g.lineTo(r, w), v && e.lineTo(r, w), 0 == l % 250 && c());
                                    n = {
                                        x: r,
                                        y: w
                                    };
                                    l < s.length - 1 && (z !== (s[l].lineColor || A) || b !== (s[l].lineDashType || k.lineDashType)) && (c(), z = s[l].lineColor || A, g.strokeStyle = z, g.setLineDash && (s[l].lineDashType ? (b = s[l].lineDashType, g.setLineDash(P(b, k.lineThickness))) : (b = k.lineDashType, g.setLineDash(ba))));
                                    var aa = k.dataPointIds[l];
                                    this._eventManager.objectMap[aa] = {
                                        id: aa,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: q,
                                        dataPointIndex: l,
                                        x1: r,
                                        y1: w
                                    };
                                    0 !== s[l].markerSize && (0 < s[l].markerSize || 0 < k.markerSize) && (B = k.getMarkerProperties(l, r, w, g), D.push(B), aa = U(aa),
                                        v && D.push({
                                            x: r,
                                            y: w,
                                            ctx: e,
                                            type: B.type,
                                            size: B.size,
                                            color: aa,
                                            borderColor: aa,
                                            borderThickness: B.borderThickness
                                        }));
                                    (s[l].indexLabel || k.indexLabel || s[l].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "area",
                                        dataPoint: s[l],
                                        dataSeries: k,
                                        point: {
                                            x: r,
                                            y: w
                                        },
                                        direction: 0 > s[l].y === a.axisY.reversed ? 1 : -1,
                                        color: C
                                    })
                                } c();
                        u.drawMarkers(D)
                    }
                }
                v && (h.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), g.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && g.drawImage(a.axisX.maskCanvas,
                    0, 0, this.width, this.height), a.axisY.maskCanvas && g.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), g.clearRect(m.x1, m.y1, m.width, m.height), this._eventManager.ghostCtx.restore());
                g.restore();
                return {
                    source: h,
                    dest: this.plotArea.ctx,
                    animationCallback: y.xClipAnimation,
                    easingFunction: y.easing.linear,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderSplineArea = function (a) {
            function f() {
                var b = x(B, 2);
                if (0 < b.length) {
                    if (0 <
                        n.lineThickness) {
                        c.beginPath();
                        c.moveTo(b[0].x, b[0].y);
                        b[0].newStrokeStyle && (c.strokeStyle = b[0].newStrokeStyle);
                        b[0].newLineDashArray && c.setLineDash(b[0].newLineDashArray);
                        for (var f = 0; f < b.length - 3; f += 3)
                            if (c.bezierCurveTo(b[f + 1].x, b[f + 1].y, b[f + 2].x, b[f + 2].y, b[f + 3].x, b[f + 3].y), v && h.bezierCurveTo(b[f + 1].x, b[f + 1].y, b[f + 2].x, b[f + 2].y, b[f + 3].x, b[f + 3].y), b[f + 3].newStrokeStyle || b[f + 3].newLineDashArray) c.stroke(), c.beginPath(), c.moveTo(b[f + 3].x, b[f + 3].y), b[f + 3].newStrokeStyle && (c.strokeStyle = b[f + 3].newStrokeStyle),
                                b[f + 3].newLineDashArray && c.setLineDash(b[f + 3].newLineDashArray);
                        c.stroke()
                    }
                    c.beginPath();
                    c.moveTo(b[0].x, b[0].y);
                    v && (h.beginPath(), h.moveTo(b[0].x, b[0].y));
                    for (f = 0; f < b.length - 3; f += 3) c.bezierCurveTo(b[f + 1].x, b[f + 1].y, b[f + 2].x, b[f + 2].y, b[f + 3].x, b[f + 3].y), v && h.bezierCurveTo(b[f + 1].x, b[f + 1].y, b[f + 2].x, b[f + 2].y, b[f + 3].x, b[f + 3].y);
                    a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? r = l : 0 > a.axisY.viewportMaximum ? r = g.y1 : 0 < a.axisY.viewportMinimum && (r = l);
                    w = {
                        x: b[0].x,
                        y: b[0].y
                    };
                    c.lineTo(b[b.length -
                        1].x, r);
                    c.lineTo(w.x, r);
                    c.closePath();
                    c.globalAlpha = n.fillOpacity;
                    c.fill();
                    c.globalAlpha = 1;
                    v && (h.lineTo(b[b.length - 1].x, r), h.lineTo(w.x, r), h.closePath(), h.fill())
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = v ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var h = this._eventManager.ghostCtx,
                    g = a.axisY.lineCoordinates,
                    e = [],
                    d = this.plotArea;
                c.save();
                v && h.save();
                c.beginPath();
                c.rect(d.x1, d.y1, d.width, d.height);
                c.clip();
                v && (h.beginPath(), h.rect(d.x1, d.y1, d.width, d.height), h.clip());
                for (var D =
                        0; D < a.dataSeriesIndexes.length; D++) {
                    var m = a.dataSeriesIndexes[D],
                        n = this.data[m],
                        p = n.dataPoints,
                        e = n.id;
                    this._eventManager.objectMap[e] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: m
                    };
                    e = U(e);
                    h.fillStyle = e;
                    var e = [],
                        q = 0,
                        k, s, l = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        r, w = null,
                        B = [];
                    if (0 < p.length) {
                        var t = n._colorSet[q % n._colorSet.length],
                            La = n.lineColor = n.options.lineColor || t,
                            ia = La;
                        c.fillStyle = t;
                        c.strokeStyle = La;
                        c.lineWidth = n.lineThickness;
                        var C = "solid";
                        if (c.setLineDash) {
                            var A =
                                P(n.nullDataLineDashType, n.lineThickness),
                                C = n.lineDashType,
                                z = P(C, n.lineThickness);
                            c.setLineDash(z)
                        }
                        for (s = !1; q < p.length; q++)
                            if (k = p[q].x.getTime ? p[q].x.getTime() : p[q].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax && (!n.connectNullData || !s)))
                                if ("number" !== typeof p[q].y) 0 < q && !s && (n.connectNullData ? c.setLineDash && (0 < B.length && (n.options.nullDataLineDashType || !p[q - 1].lineDashType)) && (B[B.length - 1].newLineDashArray = A, C = n.nullDataLineDashType) : (f(), B = [])), s = !0;
                                else {
                                    k = a.axisX.convertValueToPixel(k);
                                    s = a.axisY.convertValueToPixel(p[q].y);
                                    var O = n.dataPointIds[q];
                                    this._eventManager.objectMap[O] = {
                                        id: O,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: m,
                                        dataPointIndex: q,
                                        x1: k,
                                        y1: s
                                    };
                                    B[B.length] = {
                                        x: k,
                                        y: s
                                    };
                                    q < p.length - 1 && (ia !== (p[q].lineColor || La) || C !== (p[q].lineDashType || n.lineDashType)) && (ia = p[q].lineColor || La, B[B.length - 1].newStrokeStyle = ia, c.setLineDash && (p[q].lineDashType ? (C = p[q].lineDashType, B[B.length - 1].newLineDashArray = P(C, n.lineThickness)) : (C = n.lineDashType, B[B.length - 1].newLineDashArray = z)));
                                    if (0 !== p[q].markerSize &&
                                        (0 < p[q].markerSize || 0 < n.markerSize)) {
                                        var ba = n.getMarkerProperties(q, k, s, c);
                                        e.push(ba);
                                        O = U(O);
                                        v && e.push({
                                            x: k,
                                            y: s,
                                            ctx: h,
                                            type: ba.type,
                                            size: ba.size,
                                            color: O,
                                            borderColor: O,
                                            borderThickness: ba.borderThickness
                                        })
                                    }(p[q].indexLabel || n.indexLabel || p[q].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "splineArea",
                                        dataPoint: p[q],
                                        dataSeries: n,
                                        point: {
                                            x: k,
                                            y: s
                                        },
                                        direction: 0 > p[q].y === a.axisY.reversed ? 1 : -1,
                                        color: t
                                    });
                                    s = !1
                                } f();
                        u.drawMarkers(e)
                    }
                }
                v && (b.drawImage(this._preRenderCanvas, 0, 0, this.width,
                    this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: y.xClipAnimation,
                    easingFunction: y.easing.linear,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderStepArea = function (a) {
            var f, b;

            function c() {
                ia && (0 < k.lineThickness && g.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? x = t : 0 > a.axisY.viewportMaximum ? x = d.y1 : 0 < a.axisY.viewportMinimum && (x = t), g.lineTo(r, x), g.lineTo(ia.x, x), g.closePath(), g.globalAlpha = k.fillOpacity, g.fill(), g.globalAlpha = 1, v && (e.lineTo(r, x), e.lineTo(ia.x, x), e.closePath(), e.fill()), g.beginPath(), g.moveTo(r, w), e.beginPath(), e.moveTo(r, w), ia = {
                    x: r,
                    y: w
                })
            }
            var h = a.targetCanvasCtx ||
                this.plotArea.ctx,
                g = v ? this._preRenderCtx : h;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx,
                    d = a.axisY.lineCoordinates,
                    D = [],
                    m = this.plotArea,
                    n;
                g.save();
                v && e.save();
                g.beginPath();
                g.rect(m.x1, m.y1, m.width, m.height);
                g.clip();
                v && (e.beginPath(), e.rect(m.x1, m.y1, m.width, m.height), e.clip());
                for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var q = a.dataSeriesIndexes[p],
                        k = this.data[q],
                        s = k.dataPoints,
                        D = k.id;
                    this._eventManager.objectMap[D] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: q
                    };
                    D = U(D);
                    e.fillStyle =
                        D;
                    D = [];
                    f = !0;
                    var l = 0,
                        r, w, B, t = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        x, ia = null;
                    b = !1;
                    if (0 < s.length) {
                        var C = k._colorSet[l % k._colorSet.length],
                            A = k.lineColor = k.options.lineColor || C,
                            z = A;
                        g.fillStyle = C;
                        g.strokeStyle = A;
                        g.lineWidth = k.lineThickness;
                        var O = "solid";
                        if (g.setLineDash) {
                            var ba = P(k.nullDataLineDashType, k.lineThickness),
                                O = k.lineDashType,
                                ea = P(O, k.lineThickness);
                            g.setLineDash(ea)
                        }
                        for (; l < s.length; l++)
                            if (B = s[l].x.getTime ? s[l].x.getTime() : s[l].x, !(B < a.axisX.dataInfo.viewPortMin ||
                                    B > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !b))) {
                                var aa = w;
                                "number" !== typeof s[l].y ? (k.connectNullData || (b || f) || c(), b = !0) : (r = a.axisX.convertValueToPixel(B), w = a.axisY.convertValueToPixel(s[l].y), f || b ? (!f && k.connectNullData ? (g.setLineDash && (k.options.nullDataLineDashType || O === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (f = r, b = w, r = n.x, w = n.y, c(), g.moveTo(n.x, n.y), r = f, w = b, ia = n, O = k.nullDataLineDashType, g.setLineDash(ba)), g.lineTo(r, aa), g.lineTo(r, w), v && (e.lineTo(r, aa), e.lineTo(r,
                                    w))) : (g.beginPath(), g.moveTo(r, w), v && (e.beginPath(), e.moveTo(r, w)), ia = {
                                    x: r,
                                    y: w
                                }), b = f = !1) : (g.lineTo(r, aa), v && e.lineTo(r, aa), g.lineTo(r, w), v && e.lineTo(r, w), 0 == l % 250 && c()), n = {
                                    x: r,
                                    y: w
                                }, l < s.length - 1 && (z !== (s[l].lineColor || A) || O !== (s[l].lineDashType || k.lineDashType)) && (c(), z = s[l].lineColor || A, g.strokeStyle = z, g.setLineDash && (s[l].lineDashType ? (O = s[l].lineDashType, g.setLineDash(P(O, k.lineThickness))) : (O = k.lineDashType, g.setLineDash(ea)))), B = k.dataPointIds[l], this._eventManager.objectMap[B] = {
                                    id: B,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: q,
                                    dataPointIndex: l,
                                    x1: r,
                                    y1: w
                                }, 0 !== s[l].markerSize && (0 < s[l].markerSize || 0 < k.markerSize) && (aa = k.getMarkerProperties(l, r, w, g), D.push(aa), B = U(B), v && D.push({
                                    x: r,
                                    y: w,
                                    ctx: e,
                                    type: aa.type,
                                    size: aa.size,
                                    color: B,
                                    borderColor: B,
                                    borderThickness: aa.borderThickness
                                })), (s[l].indexLabel || k.indexLabel || s[l].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stepArea",
                                    dataPoint: s[l],
                                    dataSeries: k,
                                    point: {
                                        x: r,
                                        y: w
                                    },
                                    direction: 0 > s[l].y === a.axisY.reversed ? 1 : -1,
                                    color: C
                                }))
                            } c();
                        u.drawMarkers(D)
                    }
                }
                v &&
                    (h.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), g.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && g.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && g.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), g.clearRect(m.x1, m.y1, m.width, m.height), this._eventManager.ghostCtx.restore());
                g.restore();
                return {
                    source: h,
                    dest: this.plotArea.ctx,
                    animationCallback: y.xClipAnimation,
                    easingFunction: y.easing.linear,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderStackedArea = function (a) {
            function f() {
                if (!(1 > m.length)) {
                    for (0 < C.lineThickness && c.stroke(); 0 < m.length;) {
                        var a = m.pop();
                        c.lineTo(a.x, a.y);
                        v && r.lineTo(a.x, a.y)
                    }
                    c.closePath();
                    c.globalAlpha = C.fillOpacity;
                    c.fill();
                    c.globalAlpha = 1;
                    c.beginPath();
                    v && (r.closePath(), r.fill(), r.beginPath());
                    m = []
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = v ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var h = null,
                    g = null,
                    e = [],
                    d = this.plotArea,
                    D = [],
                    m = [],
                    n = [],
                    p = [],
                    q = 0,
                    k, s, l = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    r = this._eventManager.ghostCtx,
                    w, B, t;
                v && r.beginPath();
                c.save();
                v && r.save();
                c.beginPath();
                c.rect(d.x1, d.y1, d.width, d.height);
                c.clip();
                v && (r.beginPath(), r.rect(d.x1, d.y1, d.width, d.height), r.clip());
                for (var h = [], x = 0; x < a.dataSeriesIndexes.length; x++) {
                    var ia = a.dataSeriesIndexes[x],
                        C = this.data[ia],
                        A = C.dataPoints;
                    C.dataPointIndexes = [];
                    for (q = 0; q < A.length; q++) ia = A[q].x.getTime ? A[q].x.getTime() : A[q].x, C.dataPointIndexes[ia] =
                        q, h[ia] || (n.push(ia), h[ia] = !0);
                    n.sort(Xa)
                }
                for (x = 0; x < a.dataSeriesIndexes.length; x++) {
                    ia = a.dataSeriesIndexes[x];
                    C = this.data[ia];
                    A = C.dataPoints;
                    B = !0;
                    m = [];
                    q = C.id;
                    this._eventManager.objectMap[q] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: ia
                    };
                    q = U(q);
                    r.fillStyle = q;
                    if (0 < n.length) {
                        var h = C._colorSet[0],
                            z = C.lineColor = C.options.lineColor || h,
                            O = z;
                        c.fillStyle = h;
                        c.strokeStyle = z;
                        c.lineWidth = C.lineThickness;
                        t = "solid";
                        if (c.setLineDash) {
                            var ba = P(C.nullDataLineDashType, C.lineThickness);
                            t = C.lineDashType;
                            var ea = P(t, C.lineThickness);
                            c.setLineDash(ea)
                        }
                        for (var aa = !0, q = 0; q < n.length; q++) {
                            var g = n[q],
                                la = null,
                                la = 0 <= C.dataPointIndexes[g] ? A[C.dataPointIndexes[g]] : {
                                    x: g,
                                    y: null
                                };
                            if (!(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax && (!C.connectNullData || !aa)))
                                if ("number" !== typeof la.y) C.connectNullData || (aa || B) || f(), aa = !0;
                                else {
                                    k = a.axisX.convertValueToPixel(g);
                                    var ua = D[g] ? D[g] : 0;
                                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                                        p[g] = la.y + (p[g] ? p[g] : 0);
                                        if (0 >= p[g] && a.axisY.logarithmic) continue;
                                        s = a.axisY.convertValueToPixel(p[g])
                                    } else s = a.axisY.convertValueToPixel(la.y), s -= ua;
                                    m.push({
                                        x: k,
                                        y: l - ua
                                    });
                                    D[g] = l - s;
                                    B || aa ? (!B && C.connectNullData ? (c.setLineDash && (C.options.nullDataLineDashType || t === C.lineDashType && C.lineDashType !== C.nullDataLineDashType) && (B = m.pop(), t = m[m.length - 1], f(), c.moveTo(w.x, w.y), m.push(t), m.push(B), t = C.nullDataLineDashType, c.setLineDash(ba)), c.lineTo(k, s), v && r.lineTo(k, s)) : (c.beginPath(), c.moveTo(k, s), v && (r.beginPath(), r.moveTo(k, s))), aa = B = !1) : (c.lineTo(k, s), v && r.lineTo(k, s),
                                        0 == q % 250 && (f(), c.moveTo(k, s), v && r.moveTo(k, s), m.push({
                                            x: k,
                                            y: l - ua
                                        })));
                                    w = {
                                        x: k,
                                        y: s
                                    };
                                    q < A.length - 1 && (O !== (A[q].lineColor || z) || t !== (A[q].lineDashType || C.lineDashType)) && (f(), c.beginPath(), c.moveTo(k, s), m.push({
                                        x: k,
                                        y: l - ua
                                    }), O = A[q].lineColor || z, c.strokeStyle = O, c.setLineDash && (A[q].lineDashType ? (t = A[q].lineDashType, c.setLineDash(P(t, C.lineThickness))) : (t = C.lineDashType, c.setLineDash(ea))));
                                    if (0 <= C.dataPointIndexes[g]) {
                                        var ca = C.dataPointIds[C.dataPointIndexes[g]];
                                        this._eventManager.objectMap[ca] = {
                                            id: ca,
                                            objectType: "dataPoint",
                                            dataSeriesIndex: ia,
                                            dataPointIndex: C.dataPointIndexes[g],
                                            x1: k,
                                            y1: s
                                        }
                                    }
                                    0 <= C.dataPointIndexes[g] && 0 !== la.markerSize && (0 < la.markerSize || 0 < C.markerSize) && (ua = C.getMarkerProperties(C.dataPointIndexes[g], k, s, c), e.push(ua), g = U(ca), v && e.push({
                                        x: k,
                                        y: s,
                                        ctx: r,
                                        type: ua.type,
                                        size: ua.size,
                                        color: g,
                                        borderColor: g,
                                        borderThickness: ua.borderThickness
                                    }));
                                    (la.indexLabel || C.indexLabel || la.indexLabelFormatter || C.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "stackedArea",
                                        dataPoint: la,
                                        dataSeries: C,
                                        point: {
                                            x: k,
                                            y: s
                                        },
                                        direction: 0 >
                                            A[q].y === a.axisY.reversed ? 1 : -1,
                                        color: h
                                    })
                                }
                        }
                        f();
                        c.moveTo(k, s);
                        v && r.moveTo(k, s)
                    }
                    delete C.dataPointIndexes
                }
                u.drawMarkers(e);
                v && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1,
                    d.y1, d.width, d.height), r.restore());
                c.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: y.xClipAnimation,
                    easingFunction: y.easing.linear,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderStackedArea100 = function (a) {
            function f() {
                for (0 < C.lineThickness && c.stroke(); 0 < m.length;) {
                    var a = m.pop();
                    c.lineTo(a.x, a.y);
                    v && t.lineTo(a.x, a.y)
                }
                c.closePath();
                c.globalAlpha = C.fillOpacity;
                c.fill();
                c.globalAlpha = 1;
                c.beginPath();
                v && (t.closePath(), t.fill(), t.beginPath());
                m = []
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = v ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var h = null,
                    g = null,
                    e = this.plotArea,
                    d = [],
                    D = [],
                    m = [],
                    n = [],
                    p = [],
                    q = 0,
                    k, s, l, r, w, B = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    t = this._eventManager.ghostCtx;
                c.save();
                v && t.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                v && (t.beginPath(), t.rect(e.x1, e.y1, e.width, e.height), t.clip());
                for (var h = [], x = 0; x < a.dataSeriesIndexes.length; x++) {
                    var A = a.dataSeriesIndexes[x],
                        C = this.data[A],
                        z = C.dataPoints;
                    C.dataPointIndexes = [];
                    for (q = 0; q < z.length; q++) A = z[q].x.getTime ? z[q].x.getTime() : z[q].x, C.dataPointIndexes[A] = q, h[A] || (n.push(A), h[A] = !0);
                    n.sort(Xa)
                }
                for (x = 0; x < a.dataSeriesIndexes.length; x++) {
                    A = a.dataSeriesIndexes[x];
                    C = this.data[A];
                    z = C.dataPoints;
                    r = !0;
                    h = C.id;
                    this._eventManager.objectMap[h] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: A
                    };
                    h = U(h);
                    t.fillStyle = h;
                    m = [];
                    if (0 < n.length) {
                        var h = C._colorSet[q % C._colorSet.length],
                            G = C.lineColor = C.options.lineColor || h,
                            O = G;
                        c.fillStyle = h;
                        c.strokeStyle = G;
                        c.lineWidth = C.lineThickness;
                        w = "solid";
                        if (c.setLineDash) {
                            var ba = P(C.nullDataLineDashType, C.lineThickness);
                            w = C.lineDashType;
                            var ea = P(w, C.lineThickness);
                            c.setLineDash(ea)
                        }
                        for (var aa = !0, q = 0; q < n.length; q++) {
                            var g = n[q],
                                la = null,
                                la = 0 <= C.dataPointIndexes[g] ? z[C.dataPointIndexes[g]] : {
                                    x: g,
                                    y: null
                                };
                            if (!(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax && (!C.connectNullData || !aa)))
                                if ("number" !== typeof la.y) C.connectNullData || (aa || r) || f(), aa = !0;
                                else {
                                    var ua;
                                    ua = 0 !== a.dataPointYSums[g] ? 100 * (la.y / a.dataPointYSums[g]) : 0;
                                    k = a.axisX.convertValueToPixel(g);
                                    var ca = D[g] ? D[g] : 0;
                                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                                        p[g] = ua + (p[g] ? p[g] : 0);
                                        if (0 >= p[g] && a.axisY.logarithmic) continue;
                                        s = a.axisY.convertValueToPixel(p[g])
                                    } else s = a.axisY.convertValueToPixel(ua), s -= ca;
                                    m.push({
                                        x: k,
                                        y: B - ca
                                    });
                                    D[g] = B - s;
                                    r || aa ? (!r && C.connectNullData ? (c.setLineDash && (C.options.nullDataLineDashType || w === C.lineDashType && C.lineDashType !== C.nullDataLineDashType) && (r = m.pop(), w = m[m.length - 1], f(), c.moveTo(l.x, l.y), m.push(w), m.push(r), w = C.nullDataLineDashType,
                                        c.setLineDash(ba)), c.lineTo(k, s), v && t.lineTo(k, s)) : (c.beginPath(), c.moveTo(k, s), v && (t.beginPath(), t.moveTo(k, s))), aa = r = !1) : (c.lineTo(k, s), v && t.lineTo(k, s), 0 == q % 250 && (f(), c.moveTo(k, s), v && t.moveTo(k, s), m.push({
                                        x: k,
                                        y: B - ca
                                    })));
                                    l = {
                                        x: k,
                                        y: s
                                    };
                                    q < z.length - 1 && (O !== (z[q].lineColor || G) || w !== (z[q].lineDashType || C.lineDashType)) && (f(), c.beginPath(), c.moveTo(k, s), m.push({
                                        x: k,
                                        y: B - ca
                                    }), O = z[q].lineColor || G, c.strokeStyle = O, c.setLineDash && (z[q].lineDashType ? (w = z[q].lineDashType, c.setLineDash(P(w, C.lineThickness))) : (w =
                                        C.lineDashType, c.setLineDash(ea))));
                                    if (0 <= C.dataPointIndexes[g]) {
                                        var I = C.dataPointIds[C.dataPointIndexes[g]];
                                        this._eventManager.objectMap[I] = {
                                            id: I,
                                            objectType: "dataPoint",
                                            dataSeriesIndex: A,
                                            dataPointIndex: C.dataPointIndexes[g],
                                            x1: k,
                                            y1: s
                                        }
                                    }
                                    0 <= C.dataPointIndexes[g] && 0 !== la.markerSize && (0 < la.markerSize || 0 < C.markerSize) && (ca = C.getMarkerProperties(q, k, s, c), d.push(ca), g = U(I), v && d.push({
                                        x: k,
                                        y: s,
                                        ctx: t,
                                        type: ca.type,
                                        size: ca.size,
                                        color: g,
                                        borderColor: g,
                                        borderThickness: ca.borderThickness
                                    }));
                                    (la.indexLabel || C.indexLabel ||
                                        la.indexLabelFormatter || C.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "stackedArea100",
                                        dataPoint: la,
                                        dataSeries: C,
                                        point: {
                                            x: k,
                                            y: s
                                        },
                                        direction: 0 > z[q].y === a.axisY.reversed ? 1 : -1,
                                        color: h
                                    })
                                }
                        }
                        f();
                        c.moveTo(k, s);
                        v && t.moveTo(k, s)
                    }
                    delete C.dataPointIndexes
                }
                u.drawMarkers(d);
                v && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas,
                    0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), t.restore());
                c.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: y.xClipAnimation,
                    easingFunction: y.easing.linear,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderBubble = function (a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this.plotArea,
                    h = 0,
                    g, e;
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(c.x1, c.y1, c.width, c.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip());
                for (var d = -Infinity, D = Infinity, m = 0; m < a.dataSeriesIndexes.length; m++)
                    for (var n = a.dataSeriesIndexes[m], p = this.data[n], q = p.dataPoints, k = 0, h = 0; h < q.length; h++) g = q[h].getTime ? g = q[h].x.getTime() : g = q[h].x, g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax || "undefined" ===
                        typeof q[h].z || (k = q[h].z, k > d && (d = k), k < D && (D = k));
                for (var s = 25 * Math.PI, l = Math.max(Math.pow(0.25 * Math.min(c.height, c.width) / 2, 2) * Math.PI, s), m = 0; m < a.dataSeriesIndexes.length; m++)
                    if (n = a.dataSeriesIndexes[m], p = this.data[n], q = p.dataPoints, 0 < q.length)
                        for (b.strokeStyle = "#4572A7 ", h = 0; h < q.length; h++)
                            if (g = q[h].getTime ? g = q[h].x.getTime() : g = q[h].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[h].y) {
                                g = a.axisX.convertValueToPixel(g);
                                e = a.axisY.convertValueToPixel(q[h].y);
                                var k = q[h].z,
                                    r = 2 * Math.max(Math.sqrt((d === D ? l / 2 : s + (l - s) / (d - D) * (k - D)) / Math.PI) << 0, 1),
                                    k = p.getMarkerProperties(h, b);
                                k.size = r;
                                b.globalAlpha = p.fillOpacity;
                                u.drawMarker(g, e, b, k.type, k.size, k.color, k.borderColor, k.borderThickness);
                                b.globalAlpha = 1;
                                var w = p.dataPointIds[h];
                                this._eventManager.objectMap[w] = {
                                    id: w,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: n,
                                    dataPointIndex: h,
                                    x1: g,
                                    y1: e,
                                    size: r
                                };
                                r = U(w);
                                v && u.drawMarker(g, e, this._eventManager.ghostCtx, k.type, k.size, r, r, k.borderThickness);
                                (q[h].indexLabel || p.indexLabel ||
                                    q[h].indexLabelFormatter || p.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "bubble",
                                    dataPoint: q[h],
                                    dataSeries: p,
                                    point: {
                                        x: g,
                                        y: e
                                    },
                                    direction: 1,
                                    bounds: {
                                        x1: g - k.size / 2,
                                        y1: e - k.size / 2,
                                        x2: g + k.size / 2,
                                        y2: e + k.size / 2
                                    },
                                    color: null
                                })
                            } v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx &&
                    this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: y.fadeInAnimation,
                    easingFunction: y.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderScatter = function (a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this.plotArea,
                    h = 0,
                    g, e;
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(c.x1, c.y1, c.width, c.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip());
                for (var d = 0; d < a.dataSeriesIndexes.length; d++) {
                    var D = a.dataSeriesIndexes[d],
                        m = this.data[D],
                        n = m.dataPoints;
                    if (0 < n.length) {
                        b.strokeStyle = "#4572A7 ";
                        Math.pow(0.3 * Math.min(c.height, c.width) / 2, 2);
                        for (var p = 0, q = 0, h = 0; h < n.length; h++)
                            if (g = n[h].getTime ? g = n[h].x.getTime() : g = n[h].x, !(g < a.axisX.dataInfo.viewPortMin ||
                                    g > a.axisX.dataInfo.viewPortMax) && "number" === typeof n[h].y) {
                                g = a.axisX.convertValueToPixel(g);
                                e = a.axisY.convertValueToPixel(n[h].y);
                                var k = m.getMarkerProperties(h, g, e, b);
                                b.globalAlpha = m.fillOpacity;
                                u.drawMarker(k.x, k.y, k.ctx, k.type, k.size, k.color, k.borderColor, k.borderThickness);
                                b.globalAlpha = 1;
                                Math.sqrt((p - g) * (p - g) + (q - e) * (q - e)) < Math.min(k.size, 5) && n.length > Math.min(this.plotArea.width, this.plotArea.height) || (p = m.dataPointIds[h], this._eventManager.objectMap[p] = {
                                    id: p,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: D,
                                    dataPointIndex: h,
                                    x1: g,
                                    y1: e
                                }, p = U(p), v && u.drawMarker(k.x, k.y, this._eventManager.ghostCtx, k.type, k.size, p, p, k.borderThickness), (n[h].indexLabel || m.indexLabel || n[h].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "scatter",
                                    dataPoint: n[h],
                                    dataSeries: m,
                                    point: {
                                        x: g,
                                        y: e
                                    },
                                    direction: 1,
                                    bounds: {
                                        x1: g - k.size / 2,
                                        y1: e - k.size / 2,
                                        x2: g + k.size / 2,
                                        y2: e + k.size / 2
                                    },
                                    color: null
                                }), p = g, q = e)
                            }
                    }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop",
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: y.fadeInAnimation,
                    easingFunction: y.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderCandlestick =
            function (a) {
                var f = a.targetCanvasCtx || this.plotArea.ctx,
                    b = v ? this._preRenderCtx : f,
                    c = this._eventManager.ghostCtx;
                if (!(0 >= a.dataSeriesIndexes.length)) {
                    var h = null,
                        g = null,
                        d = this.plotArea,
                        r = 0,
                        D, m, n, p, q, k, h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                        g = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width,
                        s = a.axisX.dataInfo.minDiff;
                    isFinite(s) || (s = 0.3 * Math.abs(a.axisX.range));
                    s = this.options.dataPointWidth ?
                        this.dataPointWidth : 0.7 * d.width * (a.axisX.logarithmic ? Math.log(s) / Math.log(a.axisX.range) : Math.abs(s) / Math.abs(a.axisX.range)) << 0;
                    this.dataPointMaxWidth && h > g && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, g));
                    !this.dataPointMaxWidth && (this.dataPointMinWidth && g < h) && (g = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
                    s < h && (s = h);
                    s > g && (s = g);
                    b.save();
                    v && c.save();
                    b.beginPath();
                    b.rect(d.x1, d.y1, d.width, d.height);
                    b.clip();
                    v && (c.beginPath(), c.rect(d.x1, d.y1, d.width,
                        d.height), c.clip());
                    for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
                        var u = a.dataSeriesIndexes[l],
                            w = this.data[u],
                            B = w.dataPoints;
                        if (0 < B.length)
                            for (var t = 5 < s && w.bevelEnabled ? !0 : !1, r = 0; r < B.length; r++)
                                if (B[r].getTime ? k = B[r].x.getTime() : k = B[r].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && !e(B[r].y) && B[r].y.length && "number" === typeof B[r].y[0] && "number" === typeof B[r].y[1] && "number" === typeof B[r].y[2] && "number" === typeof B[r].y[3]) {
                                    D = a.axisX.convertValueToPixel(k);
                                    m = a.axisY.convertValueToPixel(B[r].y[0]);
                                    n = a.axisY.convertValueToPixel(B[r].y[1]);
                                    p = a.axisY.convertValueToPixel(B[r].y[2]);
                                    q = a.axisY.convertValueToPixel(B[r].y[3]);
                                    var x = D - s / 2 << 0,
                                        A = x + s << 0,
                                        g = w.options.fallingColor ? w.fallingColor : w._colorSet[0],
                                        h = B[r].color ? B[r].color : w._colorSet[0],
                                        C = Math.round(Math.max(1, 0.15 * s)),
                                        z = 0 === C % 2 ? 0 : 0.5,
                                        G = w.dataPointIds[r];
                                    this._eventManager.objectMap[G] = {
                                        id: G,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: u,
                                        dataPointIndex: r,
                                        x1: x,
                                        y1: m,
                                        x2: A,
                                        y2: n,
                                        x3: D,
                                        y3: p,
                                        x4: D,
                                        y4: q,
                                        borderThickness: C,
                                        color: h
                                    };
                                    b.strokeStyle = h;
                                    b.beginPath();
                                    b.lineWidth = C;
                                    c.lineWidth = Math.max(C, 4);
                                    "candlestick" === w.type ? (b.moveTo(D - z, n), b.lineTo(D - z, Math.min(m, q)), b.stroke(), b.moveTo(D - z, Math.max(m, q)), b.lineTo(D - z, p), b.stroke(), da(b, x, Math.min(m, q), A, Math.max(m, q), B[r].y[0] <= B[r].y[3] ? w.risingColor : g, C, h, t, t, !1, !1, w.fillOpacity), v && (h = U(G), c.strokeStyle = h, c.moveTo(D - z, n), c.lineTo(D - z, Math.min(m, q)), c.stroke(), c.moveTo(D - z, Math.max(m, q)), c.lineTo(D - z, p), c.stroke(), da(c, x, Math.min(m, q), A, Math.max(m, q), h, 0, null, !1, !1, !1, !1))) : "ohlc" === w.type && (b.moveTo(D -
                                        z, n), b.lineTo(D - z, p), b.stroke(), b.beginPath(), b.moveTo(D, m), b.lineTo(x, m), b.stroke(), b.beginPath(), b.moveTo(D, q), b.lineTo(A, q), b.stroke(), v && (h = U(G), c.strokeStyle = h, c.moveTo(D - z, n), c.lineTo(D - z, p), c.stroke(), c.beginPath(), c.moveTo(D, m), c.lineTo(x, m), c.stroke(), c.beginPath(), c.moveTo(D, q), c.lineTo(A, q), c.stroke()));
                                    (B[r].indexLabel || w.indexLabel || B[r].indexLabelFormatter || w.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: w.type,
                                        dataPoint: B[r],
                                        dataSeries: w,
                                        point: {
                                            x: x + (A - x) / 2,
                                            y: a.axisY.reversed ?
                                                p : n
                                        },
                                        direction: 1,
                                        bounds: {
                                            x1: x,
                                            y1: Math.min(n, p),
                                            x2: A,
                                            y2: Math.max(n, p)
                                        },
                                        color: h
                                    })
                                }
                    }
                    v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(d.x1, d.y1, d.width, d.height), c.restore());
                    b.restore();
                    return {
                        source: f,
                        dest: this.plotArea.ctx,
                        animationCallback: y.fadeInAnimation,
                        easingFunction: y.easing.easeInQuad,
                        animationBase: 0
                    }
                }
            };
        t.prototype.renderBoxAndWhisker = function (a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f,
                c = this._eventManager.ghostCtx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var h = null,
                    g = this.plotArea,
                    d = 0,
                    r, D, m, n, p, q, k, h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    d = this.options.dataPointMaxWidth ?
                    this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width,
                    s = a.axisX.dataInfo.minDiff;
                isFinite(s) || (s = 0.3 * Math.abs(a.axisX.range));
                s = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * g.width * (a.axisX.logarithmic ? Math.log(s) / Math.log(a.axisX.range) : Math.abs(s) / Math.abs(a.axisX.range)) << 0;
                this.dataPointMaxWidth && h > d && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, d));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && d < h) && (d = Math.max(this.options.dataPointWidth ?
                    this.dataPointWidth : -Infinity, h));
                s < h && (s = h);
                s > d && (s = d);
                b.save();
                v && c.save();
                b.beginPath();
                b.rect(g.x1, g.y1, g.width, g.height);
                b.clip();
                v && (c.beginPath(), c.rect(g.x1, g.y1, g.width, g.height), c.clip());
                for (var l = !1, l = !!a.axisY.reversed, u = 0; u < a.dataSeriesIndexes.length; u++) {
                    var w = a.dataSeriesIndexes[u],
                        B = this.data[w],
                        t = B.dataPoints;
                    if (0 < t.length)
                        for (var x = 5 < s && B.bevelEnabled ? !0 : !1, d = 0; d < t.length; d++)
                            if (t[d].getTime ? k = t[d].x.getTime() : k = t[d].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) &&
                                !e(t[d].y) && t[d].y.length && "number" === typeof t[d].y[0] && "number" === typeof t[d].y[1] && "number" === typeof t[d].y[2] && "number" === typeof t[d].y[3] && "number" === typeof t[d].y[4] && 5 === t[d].y.length) {
                                r = a.axisX.convertValueToPixel(k);
                                D = a.axisY.convertValueToPixel(t[d].y[0]);
                                m = a.axisY.convertValueToPixel(t[d].y[1]);
                                n = a.axisY.convertValueToPixel(t[d].y[2]);
                                p = a.axisY.convertValueToPixel(t[d].y[3]);
                                q = a.axisY.convertValueToPixel(t[d].y[4]);
                                var A = r - s / 2 << 0,
                                    C = r + s / 2 << 0,
                                    h = t[d].color ? t[d].color : B._colorSet[0],
                                    z = Math.round(Math.max(1,
                                        0.15 * s)),
                                    G = 0 === z % 2 ? 0 : 0.5,
                                    O = t[d].whiskerColor ? t[d].whiskerColor : t[d].color ? B.whiskerColor ? B.whiskerColor : t[d].color : B.whiskerColor ? B.whiskerColor : h,
                                    ba = "number" === typeof t[d].whiskerThickness ? t[d].whiskerThickness : "number" === typeof B.options.whiskerThickness ? B.whiskerThickness : z,
                                    ea = t[d].whiskerDashType ? t[d].whiskerDashType : B.whiskerDashType,
                                    aa = e(t[d].whiskerLength) ? e(B.options.whiskerLength) ? s : B.whiskerLength : t[d].whiskerLength,
                                    aa = "number" === typeof aa ? 0 >= aa ? 0 : aa >= s ? s : aa : "string" === typeof aa ? parseInt(aa) *
                                    s / 100 > s ? s : parseInt(aa) * s / 100 : s,
                                    la = 1 === Math.round(ba) % 2 ? 0.5 : 0,
                                    ua = t[d].stemColor ? t[d].stemColor : t[d].color ? B.stemColor ? B.stemColor : t[d].color : B.stemColor ? B.stemColor : h,
                                    ca = "number" === typeof t[d].stemThickness ? t[d].stemThickness : "number" === typeof B.options.stemThickness ? B.stemThickness : z,
                                    I = 1 === Math.round(ca) % 2 ? 0.5 : 0,
                                    H = t[d].stemDashType ? t[d].stemDashType : B.stemDashType,
                                    K = t[d].lineColor ? t[d].lineColor : t[d].color ? B.lineColor ? B.lineColor : t[d].color : B.lineColor ? B.lineColor : h,
                                    F = "number" === typeof t[d].lineThickness ?
                                    t[d].lineThickness : "number" === typeof B.options.lineThickness ? B.lineThickness : z,
                                    M = t[d].lineDashType ? t[d].lineDashType : B.lineDashType,
                                    Q = 1 === Math.round(F) % 2 ? 0.5 : 0,
                                    V = B.upperBoxColor,
                                    N = B.lowerBoxColor,
                                    L = e(B.options.fillOpacity) ? 1 : B.fillOpacity,
                                    R = B.dataPointIds[d];
                                this._eventManager.objectMap[R] = {
                                    id: R,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: w,
                                    dataPointIndex: d,
                                    x1: A,
                                    y1: D,
                                    x2: C,
                                    y2: m,
                                    x3: r,
                                    y3: n,
                                    x4: r,
                                    y4: p,
                                    y5: q,
                                    borderThickness: z,
                                    color: h,
                                    stemThickness: ca,
                                    stemColor: ua,
                                    whiskerThickness: ba,
                                    whiskerLength: aa,
                                    whiskerColor: O,
                                    lineThickness: F,
                                    lineColor: K
                                };
                                b.save();
                                0 < ca && (b.beginPath(), b.strokeStyle = ua, b.lineWidth = ca, b.setLineDash && b.setLineDash(P(H, ca)), b.moveTo(r - I, m), b.lineTo(r - I, D), b.stroke(), b.moveTo(r - I, p), b.lineTo(r - I, n), b.stroke());
                                b.restore();
                                c.lineWidth = Math.max(z, 4);
                                b.beginPath();
                                da(b, A, Math.min(q, m), C, Math.max(m, q), N, 0, h, l ? x : !1, l ? !1 : x, !1, !1, L);
                                b.beginPath();
                                da(b, A, Math.min(n, q), C, Math.max(q, n), V, 0, h, l ? !1 : x, l ? x : !1, !1, !1, L);
                                b.beginPath();
                                b.lineWidth = z;
                                b.strokeStyle = h;
                                b.rect(A - G, Math.min(m, n) - G, C - A + 2 * G, Math.max(m,
                                    n) - Math.min(m, n) + 2 * G);
                                b.stroke();
                                b.save();
                                0 < F && (b.beginPath(), b.globalAlpha = 1, b.setLineDash && b.setLineDash(P(M, F)), b.strokeStyle = K, b.lineWidth = F, b.moveTo(A, q - Q), b.lineTo(C, q - Q), b.stroke());
                                b.restore();
                                b.save();
                                0 < ba && (b.beginPath(), b.setLineDash && b.setLineDash(P(ea, ba)), b.strokeStyle = O, b.lineWidth = ba, b.moveTo(r - aa / 2 << 0, p - la), b.lineTo(r + aa / 2 << 0, p - la), b.stroke(), b.moveTo(r - aa / 2 << 0, D + la), b.lineTo(r + aa / 2 << 0, D + la), b.stroke());
                                b.restore();
                                v && (h = U(R), c.strokeStyle = h, c.lineWidth = ca, 0 < ca && (c.moveTo(r - G - I, m),
                                    c.lineTo(r - G - I, Math.max(D, p)), c.stroke(), c.moveTo(r - G - I, Math.min(D, p)), c.lineTo(r - G - I, n), c.stroke()), da(c, A, Math.max(m, n), C, Math.min(m, n), h, 0, null, !1, !1, !1, !1), 0 < ba && (c.beginPath(), c.lineWidth = ba, c.moveTo(r + aa / 2, p - la), c.lineTo(r - aa / 2, p - la), c.stroke(), c.moveTo(r + aa / 2, D + la), c.lineTo(r - aa / 2, D + la), c.stroke()));
                                (t[d].indexLabel || B.indexLabel || t[d].indexLabelFormatter || B.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: B.type,
                                    dataPoint: t[d],
                                    dataSeries: B,
                                    point: {
                                        x: A + (C - A) / 2,
                                        y: a.axisY.reversed ? D : p
                                    },
                                    direction: 1,
                                    bounds: {
                                        x1: A,
                                        y1: Math.min(D, p),
                                        x2: C,
                                        y2: Math.max(D, p)
                                    },
                                    color: h
                                })
                            }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(g.x1, g.y1, g.width, g.height), c.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: y.fadeInAnimation,
                    easingFunction: y.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderRangeColumn = function (a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    h = this.plotArea,
                    g = 0,
                    d, r, l, g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                d = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ?
                    this.dataPointWidth : 0.03 * this.width;
                var m = a.axisX.dataInfo.minDiff;
                isFinite(m) || (m = 0.3 * Math.abs(a.axisX.range));
                m = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (h.width * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.range) : Math.abs(m) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && g > d && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, d));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && d < g) && (d = Math.max(this.options.dataPointWidth ? this.dataPointWidth :
                    -Infinity, g));
                m < g && (m = g);
                m > d && (m = d);
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(h.x1, h.y1, h.width, h.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
                for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var p = a.dataSeriesIndexes[n],
                        q = this.data[p],
                        k = q.dataPoints;
                    if (0 < k.length)
                        for (var s = 5 < m && q.bevelEnabled ? !0 : !1, g = 0; g < k.length; g++)
                            if (k[g].getTime ? l = k[g].x.getTime() : l = k[g].x, !(l <
                                    a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax) && !e(k[g].y) && k[g].y.length && "number" === typeof k[g].y[0] && "number" === typeof k[g].y[1]) {
                                c = a.axisX.convertValueToPixel(l);
                                d = a.axisY.convertValueToPixel(k[g].y[0]);
                                r = a.axisY.convertValueToPixel(k[g].y[1]);
                                var u = a.axisX.reversed ? c + a.plotType.totalDataSeries * m / 2 - (a.previousDataSeriesCount + n) * m << 0 : c - a.plotType.totalDataSeries * m / 2 + (a.previousDataSeriesCount + n) * m << 0,
                                    t = a.axisX.reversed ? u - m << 0 : u + m << 0,
                                    c = k[g].color ? k[g].color : q._colorSet[g % q._colorSet.length];
                                if (d > r) {
                                    var w = d;
                                    d = r;
                                    r = w
                                }
                                w = q.dataPointIds[g];
                                this._eventManager.objectMap[w] = {
                                    id: w,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: p,
                                    dataPointIndex: g,
                                    x1: u,
                                    y1: d,
                                    x2: t,
                                    y2: r
                                };
                                da(b, u, d, t, r, c, 0, c, s, s, !1, !1, q.fillOpacity);
                                c = U(w);
                                v && da(this._eventManager.ghostCtx, u, d, t, r, c, 0, null, !1, !1, !1, !1);
                                if (k[g].indexLabel || q.indexLabel || k[g].indexLabelFormatter || q.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "rangeColumn",
                                    dataPoint: k[g],
                                    dataSeries: q,
                                    indexKeyword: 0,
                                    point: {
                                        x: u + (t - u) / 2,
                                        y: k[g].y[1] >= k[g].y[0] ? r : d
                                    },
                                    direction: k[g].y[1] >=
                                        k[g].y[0] ? -1 : 1,
                                    bounds: {
                                        x1: u,
                                        y1: Math.min(d, r),
                                        x2: t,
                                        y2: Math.max(d, r)
                                    },
                                    color: c
                                }), this._indexLabels.push({
                                    chartType: "rangeColumn",
                                    dataPoint: k[g],
                                    dataSeries: q,
                                    indexKeyword: 1,
                                    point: {
                                        x: u + (t - u) / 2,
                                        y: k[g].y[1] >= k[g].y[0] ? d : r
                                    },
                                    direction: k[g].y[1] >= k[g].y[0] ? 1 : -1,
                                    bounds: {
                                        x1: u,
                                        y1: Math.min(d, r),
                                        x2: t,
                                        y2: Math.max(d, r)
                                    },
                                    color: c
                                })
                            }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: y.fadeInAnimation,
                    easingFunction: y.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderError = function (a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx :
                f,
                c = a.axisY._position ? "left" === a.axisY._position || "right" === a.axisY._position ? !1 : !0 : !1;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var h = null,
                    g = !1,
                    d = this.plotArea,
                    r = 0,
                    l, m, n, p, q, k, s, u = a.axisX.dataInfo.minDiff;
                isFinite(u) || (u = 0.3 * Math.abs(a.axisX.range));
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(d.x1, d.y1, d.width, d.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
                for (var t =
                        0, w = 0; w < this.data.length; w++) !this.data[w].type.match(/(bar|column)/ig) || !this.data[w].visible || this.data[w].type.match(/(stacked)/ig) && t || t++;
                for (var B = 0; B < a.dataSeriesIndexes.length; B++) {
                    var x = a.dataSeriesIndexes[B],
                        A = this.data[x],
                        z = A.dataPoints,
                        C = e(A._linkedSeries) ? !1 : A._linkedSeries.type.match(/(bar|column)/ig) && A._linkedSeries.visible ? !0 : !1,
                        G = 0;
                    if (C)
                        for (h = A._linkedSeries.id, w = 0; w < h; w++) !this.data[w].type.match(/(bar|column)/ig) || !this.data[w].visible || this.data[w].type.match(/(stacked)/ig) &&
                            G || (this.data[w].type.match(/(range)/ig) && (g = !0), G++);
                    h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                    r = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : c ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (C ? t : 1))) << 0 : 0.3 * this.width;
                    g && (r = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : c ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height /
                        (C ? t : 1))) << 0 : 0.03 * this.width);
                    w = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * ((c ? d.height : d.width) * (a.axisX.logarithmic ? Math.log(u) / Math.log(a.axisX.range) : Math.abs(u) / Math.abs(a.axisX.range)) / (C ? t : 1)) << 0;
                    this.dataPointMaxWidth && h > r && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, r));
                    !this.dataPointMaxWidth && (this.dataPointMinWidth && r < h) && (r = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
                    w < h && (w = h);
                    w > r && (w = r);
                    if (0 < z.length)
                        for (var F = A._colorSet,
                                r = 0; r < z.length; r++) {
                            var h = A.lineColor = A.options.color ? A.options.color : F[0],
                                O = {
                                    color: z[r].whiskerColor ? z[r].whiskerColor : z[r].color ? A.whiskerColor ? A.whiskerColor : z[r].color : A.whiskerColor ? A.whiskerColor : h,
                                    thickness: e(z[r].whiskerThickness) ? A.whiskerThickness : z[r].whiskerThickness,
                                    dashType: z[r].whiskerDashType ? z[r].whiskerDashType : A.whiskerDashType,
                                    length: e(z[r].whiskerLength) ? e(A.options.whiskerLength) ? w : A.options.whiskerLength : z[r].whiskerLength,
                                    trimLength: e(z[r].whiskerLength) ? e(A.options.whiskerLength) ?
                                        50 : 0 : 0
                                };
                            O.length = "number" === typeof O.length ? 0 >= O.length ? 0 : O.length >= w ? w : O.length : "string" === typeof O.length ? parseInt(O.length) * w / 100 > w ? w : parseInt(O.length) * w / 100 > w : w;
                            O.thickness = "number" === typeof O.thickness ? 0 > O.thickness ? 0 : Math.round(O.thickness) : 2;
                            var ba = {
                                color: z[r].stemColor ? z[r].stemColor : z[r].color ? A.stemColor ? A.stemColor : z[r].color : A.stemColor ? A.stemColor : h,
                                thickness: z[r].stemThickness ? z[r].stemThickness : A.stemThickness,
                                dashType: z[r].stemDashType ? z[r].stemDashType : A.stemDashType
                            };
                            ba.thickness =
                                "number" === typeof ba.thickness ? 0 > ba.thickness ? 0 : Math.round(ba.thickness) : 2;
                            z[r].getTime ? s = z[r].x.getTime() : s = z[r].x;
                            if (!(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax) && !e(z[r].y) && z[r].y.length && "number" === typeof z[r].y[0] && "number" === typeof z[r].y[1]) {
                                var ea = a.axisX.convertValueToPixel(s);
                                c ? m = ea : l = ea;
                                ea = a.axisY.convertValueToPixel(z[r].y[0]);
                                c ? n = ea : q = ea;
                                ea = a.axisY.convertValueToPixel(z[r].y[1]);
                                c ? p = ea : k = ea;
                                c ? (q = a.axisX.reversed ? m + (C ? t : 1) * w / 2 - (C ? G - 1 : 0) * w << 0 : m - (C ? t : 1) * w / 2 + (C ? G - 1 :
                                    0) * w << 0, k = a.axisX.reversed ? q - w << 0 : q + w << 0) : (n = a.axisX.reversed ? l + (C ? t : 1) * w / 2 - (C ? G - 1 : 0) * w << 0 : l - (C ? t : 1) * w / 2 + (C ? G - 1 : 0) * w << 0, p = a.axisX.reversed ? n - w << 0 : n + w << 0);
                                !c && q > k && (ea = q, q = k, k = ea);
                                c && n > p && (ea = n, n = p, p = ea);
                                ea = A.dataPointIds[r];
                                this._eventManager.objectMap[ea] = {
                                    id: ea,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: x,
                                    dataPointIndex: r,
                                    x1: Math.min(n, p),
                                    y1: Math.min(q, k),
                                    x2: Math.max(p, n),
                                    y2: Math.max(k, q),
                                    isXYSwapped: c,
                                    stemProperties: ba,
                                    whiskerProperties: O
                                };
                                H(b, Math.min(n, p), Math.min(q, k), Math.max(p, n), Math.max(k, q),
                                    h, O, ba, c);
                                v && H(this._eventManager.ghostCtx, n, q, p, k, h, O, ba, c);
                                if (z[r].indexLabel || A.indexLabel || z[r].indexLabelFormatter || A.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "error",
                                    dataPoint: z[r],
                                    dataSeries: A,
                                    indexKeyword: 0,
                                    point: {
                                        x: c ? z[r].y[1] >= z[r].y[0] ? n : p : n + (p - n) / 2,
                                        y: c ? q + (k - q) / 2 : z[r].y[1] >= z[r].y[0] ? k : q
                                    },
                                    direction: z[r].y[1] >= z[r].y[0] ? -1 : 1,
                                    bounds: {
                                        x1: c ? Math.min(n, p) : n,
                                        y1: c ? q : Math.min(q, k),
                                        x2: c ? Math.max(n, p) : p,
                                        y2: c ? k : Math.max(q, k)
                                    },
                                    color: h,
                                    axisSwapped: c
                                }), this._indexLabels.push({
                                    chartType: "error",
                                    dataPoint: z[r],
                                    dataSeries: A,
                                    indexKeyword: 1,
                                    point: {
                                        x: c ? z[r].y[1] >= z[r].y[0] ? p : n : n + (p - n) / 2,
                                        y: c ? q + (k - q) / 2 : z[r].y[1] >= z[r].y[0] ? q : k
                                    },
                                    direction: z[r].y[1] >= z[r].y[0] ? 1 : -1,
                                    bounds: {
                                        x1: c ? Math.min(n, p) : n,
                                        y1: c ? q : Math.min(q, k),
                                        x2: c ? Math.max(n, p) : p,
                                        y2: c ? k : Math.max(q, k)
                                    },
                                    color: h,
                                    axisSwapped: c
                                })
                            }
                        }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas,
                    0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: y.fadeInAnimation,
                    easingFunction: y.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderRangeBar = function (a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c =
                    null,
                    h = this.plotArea,
                    g = 0,
                    d, r, l, m, g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                d = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
                var n = a.axisX.dataInfo.minDiff;
                isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
                n = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (h.height * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) :
                    Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && g > d && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, d));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && d < g) && (d = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, g));
                n < g && (n = g);
                n > d && (n = d);
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(h.x1, h.y1, h.width, h.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1,
                    h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
                for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var q = a.dataSeriesIndexes[p],
                        k = this.data[q],
                        s = k.dataPoints;
                    if (0 < s.length) {
                        var u = 5 < n && k.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (g = 0; g < s.length; g++)
                            if (s[g].getTime ? m = s[g].x.getTime() : m = s[g].x, !(m < a.axisX.dataInfo.viewPortMin || m > a.axisX.dataInfo.viewPortMax) && !e(s[g].y) && s[g].y.length && "number" === typeof s[g].y[0] && "number" === typeof s[g].y[1]) {
                                d = a.axisY.convertValueToPixel(s[g].y[0]);
                                r = a.axisY.convertValueToPixel(s[g].y[1]);
                                l = a.axisX.convertValueToPixel(m);
                                l = a.axisX.reversed ? l + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + p) * n << 0 : l - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + p) * n << 0;
                                var t = a.axisX.reversed ? l - n << 0 : l + n << 0;
                                d > r && (c = d, d = r, r = c);
                                c = s[g].color ? s[g].color : k._colorSet[g % k._colorSet.length];
                                da(b, d, l, r, t, c, 0, null, u, !1, !1, !1, k.fillOpacity);
                                c = k.dataPointIds[g];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: q,
                                    dataPointIndex: g,
                                    x1: d,
                                    y1: l,
                                    x2: r,
                                    y2: t
                                };
                                c = U(c);
                                v && da(this._eventManager.ghostCtx,
                                    d, l, r, t, c, 0, null, !1, !1, !1, !1);
                                if (s[g].indexLabel || k.indexLabel || s[g].indexLabelFormatter || k.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "rangeBar",
                                    dataPoint: s[g],
                                    dataSeries: k,
                                    indexKeyword: 0,
                                    point: {
                                        x: s[g].y[1] >= s[g].y[0] ? d : r,
                                        y: l + (t - l) / 2
                                    },
                                    direction: s[g].y[1] >= s[g].y[0] ? -1 : 1,
                                    bounds: {
                                        x1: Math.min(d, r),
                                        y1: l,
                                        x2: Math.max(d, r),
                                        y2: t
                                    },
                                    color: c
                                }), this._indexLabels.push({
                                    chartType: "rangeBar",
                                    dataPoint: s[g],
                                    dataSeries: k,
                                    indexKeyword: 1,
                                    point: {
                                        x: s[g].y[1] >= s[g].y[0] ? r : d,
                                        y: l + (t - l) / 2
                                    },
                                    direction: s[g].y[1] >=
                                        s[g].y[0] ? 1 : -1,
                                    bounds: {
                                        x1: Math.min(d, r),
                                        y1: l,
                                        x2: Math.max(d, r),
                                        y2: t
                                    },
                                    color: c
                                })
                            }
                    }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: y.fadeInAnimation,
                    easingFunction: y.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderRangeArea = function (a) {
            function f() {
                if (B) {
                    for (var a = null, b = r.length - 1; 0 <= b; b--) a = r[b], c.lineTo(a.x, a.y2), h.lineTo(a.x, a.y2);
                    c.closePath();
                    c.globalAlpha = n.fillOpacity;
                    c.fill();
                    c.globalAlpha = 1;
                    h.fill();
                    if (0 < n.lineThickness) {
                        c.beginPath();
                        c.moveTo(a.x, a.y2);
                        for (b = 0; b < r.length; b++) a = r[b], c.lineTo(a.x, a.y2);
                        c.moveTo(r[0].x, r[0].y1);
                        for (b = 0; b < r.length; b++) a =
                            r[b], c.lineTo(a.x, a.y1);
                        c.stroke()
                    }
                    c.beginPath();
                    c.moveTo(s, l);
                    h.beginPath();
                    h.moveTo(s, l);
                    B = {
                        x: s,
                        y: l
                    };
                    r = [];
                    r.push({
                        x: s,
                        y1: l,
                        y2: t
                    })
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = v ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var h = this._eventManager.ghostCtx,
                    g = [],
                    e = this.plotArea;
                c.save();
                v && h.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                v && (h.beginPath(), h.rect(e.x1, e.y1, e.width, e.height), h.clip());
                for (var d = 0; d < a.dataSeriesIndexes.length; d++) {
                    var r = [],
                        m = a.dataSeriesIndexes[d],
                        n = this.data[m],
                        p = n.dataPoints,
                        g = n.id;
                    this._eventManager.objectMap[g] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: m
                    };
                    g = U(g);
                    h.fillStyle = g;
                    var g = [],
                        q = !0,
                        k = 0,
                        s, l, t, w, B = null;
                    if (0 < p.length) {
                        var x = n._colorSet[k % n._colorSet.length],
                            A = n.lineColor = n.options.lineColor || x,
                            z = A;
                        c.fillStyle = x;
                        c.strokeStyle = A;
                        c.lineWidth = n.lineThickness;
                        var C = "solid";
                        if (c.setLineDash) {
                            var G = P(n.nullDataLineDashType, n.lineThickness),
                                C = n.lineDashType,
                                H = P(C, n.lineThickness);
                            c.setLineDash(H)
                        }
                        for (var O = !0; k < p.length; k++)
                            if (w = p[k].x.getTime ?
                                p[k].x.getTime() : p[k].x, !(w < a.axisX.dataInfo.viewPortMin || w > a.axisX.dataInfo.viewPortMax && (!n.connectNullData || !O)))
                                if (null !== p[k].y && p[k].y.length && "number" === typeof p[k].y[0] && "number" === typeof p[k].y[1]) {
                                    s = a.axisX.convertValueToPixel(w);
                                    l = a.axisY.convertValueToPixel(p[k].y[0]);
                                    t = a.axisY.convertValueToPixel(p[k].y[1]);
                                    q || O ? (n.connectNullData && !q ? (c.setLineDash && (n.options.nullDataLineDashType || C === n.lineDashType && n.lineDashType !== n.nullDataLineDashType) && (r[r.length - 1].newLineDashArray = H, C = n.nullDataLineDashType,
                                        c.setLineDash(G)), c.lineTo(s, l), v && h.lineTo(s, l), r.push({
                                        x: s,
                                        y1: l,
                                        y2: t
                                    })) : (c.beginPath(), c.moveTo(s, l), B = {
                                        x: s,
                                        y: l
                                    }, r = [], r.push({
                                        x: s,
                                        y1: l,
                                        y2: t
                                    }), v && (h.beginPath(), h.moveTo(s, l))), O = q = !1) : (c.lineTo(s, l), r.push({
                                        x: s,
                                        y1: l,
                                        y2: t
                                    }), v && h.lineTo(s, l), 0 == k % 250 && f());
                                    w = n.dataPointIds[k];
                                    this._eventManager.objectMap[w] = {
                                        id: w,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: m,
                                        dataPointIndex: k,
                                        x1: s,
                                        y1: l,
                                        y2: t
                                    };
                                    k < p.length - 1 && (z !== (p[k].lineColor || A) || C !== (p[k].lineDashType || n.lineDashType)) && (f(), z = p[k].lineColor || A, r[r.length -
                                        1].newStrokeStyle = z, c.strokeStyle = z, c.setLineDash && (p[k].lineDashType ? (C = p[k].lineDashType, r[r.length - 1].newLineDashArray = P(C, n.lineThickness), c.setLineDash(r[r.length - 1].newLineDashArray)) : (C = n.lineDashType, r[r.length - 1].newLineDashArray = H, c.setLineDash(H))));
                                    if (0 !== p[k].markerSize && (0 < p[k].markerSize || 0 < n.markerSize)) {
                                        var ba = n.getMarkerProperties(k, s, t, c);
                                        g.push(ba);
                                        var ea = U(w);
                                        v && g.push({
                                            x: s,
                                            y: t,
                                            ctx: h,
                                            type: ba.type,
                                            size: ba.size,
                                            color: ea,
                                            borderColor: ea,
                                            borderThickness: ba.borderThickness
                                        });
                                        ba = n.getMarkerProperties(k,
                                            s, l, c);
                                        g.push(ba);
                                        ea = U(w);
                                        v && g.push({
                                            x: s,
                                            y: l,
                                            ctx: h,
                                            type: ba.type,
                                            size: ba.size,
                                            color: ea,
                                            borderColor: ea,
                                            borderThickness: ba.borderThickness
                                        })
                                    }
                                    if (p[k].indexLabel || n.indexLabel || p[k].indexLabelFormatter || n.indexLabelFormatter) this._indexLabels.push({
                                        chartType: "rangeArea",
                                        dataPoint: p[k],
                                        dataSeries: n,
                                        indexKeyword: 0,
                                        point: {
                                            x: s,
                                            y: l
                                        },
                                        direction: p[k].y[0] > p[k].y[1] === a.axisY.reversed ? -1 : 1,
                                        color: x
                                    }), this._indexLabels.push({
                                        chartType: "rangeArea",
                                        dataPoint: p[k],
                                        dataSeries: n,
                                        indexKeyword: 1,
                                        point: {
                                            x: s,
                                            y: t
                                        },
                                        direction: p[k].y[0] >
                                            p[k].y[1] === a.axisY.reversed ? 1 : -1,
                                        color: x
                                    })
                                } else O || q || f(), O = !0;
                        f();
                        u.drawMarkers(g)
                    }
                }
                v && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: y.xClipAnimation,
                    easingFunction: y.easing.linear,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderRangeSplineArea = function (a) {
            function f(a, b) {
                var f = x(l, 2);
                if (0 < f.length) {
                    if (0 < m.lineThickness) {
                        c.strokeStyle = b;
                        c.setLineDash && c.setLineDash(a);
                        c.beginPath();
                        c.moveTo(f[0].x, f[0].y);
                        for (var g = 0; g < f.length - 3; g += 3) {
                            if (f[g].newStrokeStyle || f[g].newLineDashArray) c.stroke(), c.beginPath(), c.moveTo(f[g].x, f[g].y), f[g].newStrokeStyle && (c.strokeStyle = f[g].newStrokeStyle),
                                f[g].newLineDashArray && c.setLineDash(f[g].newLineDashArray);
                            c.bezierCurveTo(f[g + 1].x, f[g + 1].y, f[g + 2].x, f[g + 2].y, f[g + 3].x, f[g + 3].y)
                        }
                    }
                    c.beginPath();
                    c.moveTo(f[0].x, f[0].y);
                    v && (h.beginPath(), h.moveTo(f[0].x, f[0].y));
                    for (g = 0; g < f.length - 3; g += 3) c.bezierCurveTo(f[g + 1].x, f[g + 1].y, f[g + 2].x, f[g + 2].y, f[g + 3].x, f[g + 3].y), v && h.bezierCurveTo(f[g + 1].x, f[g + 1].y, f[g + 2].x, f[g + 2].y, f[g + 3].x, f[g + 3].y);
                    f = x(t, 2);
                    c.lineTo(t[t.length - 1].x, t[t.length - 1].y);
                    for (g = f.length - 1; 2 < g; g -= 3) c.bezierCurveTo(f[g - 1].x, f[g - 1].y, f[g - 2].x,
                        f[g - 2].y, f[g - 3].x, f[g - 3].y), v && h.bezierCurveTo(f[g - 1].x, f[g - 1].y, f[g - 2].x, f[g - 2].y, f[g - 3].x, f[g - 3].y);
                    c.closePath();
                    c.globalAlpha = m.fillOpacity;
                    c.fill();
                    v && (h.closePath(), h.fill());
                    c.globalAlpha = 1;
                    if (0 < m.lineThickness) {
                        c.strokeStyle = b;
                        c.setLineDash && c.setLineDash(a);
                        c.beginPath();
                        c.moveTo(f[0].x, f[0].y);
                        for (var k = g = 0; g < f.length - 3; g += 3, k++) {
                            if (l[k].newStrokeStyle || l[k].newLineDashArray) c.stroke(), c.beginPath(), c.moveTo(f[g].x, f[g].y), l[k].newStrokeStyle && (c.strokeStyle = l[k].newStrokeStyle), l[k].newLineDashArray &&
                                c.setLineDash(l[k].newLineDashArray);
                            c.bezierCurveTo(f[g + 1].x, f[g + 1].y, f[g + 2].x, f[g + 2].y, f[g + 3].x, f[g + 3].y)
                        }
                        f = x(l, 2);
                        c.moveTo(f[0].x, f[0].y);
                        for (k = g = 0; g < f.length - 3; g += 3, k++) {
                            if (l[k].newStrokeStyle || l[k].newLineDashArray) c.stroke(), c.beginPath(), c.moveTo(f[g].x, f[g].y), l[k].newStrokeStyle && (c.strokeStyle = l[k].newStrokeStyle), l[k].newLineDashArray && c.setLineDash(l[k].newLineDashArray);
                            c.bezierCurveTo(f[g + 1].x, f[g + 1].y, f[g + 2].x, f[g + 2].y, f[g + 3].x, f[g + 3].y)
                        }
                        c.stroke()
                    }
                    c.beginPath()
                }
            }
            var b = a.targetCanvasCtx ||
                this.plotArea.ctx,
                c = v ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var h = this._eventManager.ghostCtx,
                    g = [],
                    e = this.plotArea;
                c.save();
                v && h.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                v && (h.beginPath(), h.rect(e.x1, e.y1, e.width, e.height), h.clip());
                for (var d = 0; d < a.dataSeriesIndexes.length; d++) {
                    var r = a.dataSeriesIndexes[d],
                        m = this.data[r],
                        n = m.dataPoints,
                        g = m.id;
                    this._eventManager.objectMap[g] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: r
                    };
                    g = U(g);
                    h.fillStyle = g;
                    var g = [],
                        p = 0,
                        q,
                        k, s, l = [],
                        t = [];
                    if (0 < n.length) {
                        var w = m._colorSet[p % m._colorSet.length],
                            B = m.lineColor = m.options.lineColor || w,
                            A = B;
                        c.fillStyle = w;
                        c.lineWidth = m.lineThickness;
                        var z = "solid",
                            G;
                        if (c.setLineDash) {
                            var C = P(m.nullDataLineDashType, m.lineThickness),
                                z = m.lineDashType;
                            G = P(z, m.lineThickness)
                        }
                        for (k = !1; p < n.length; p++)
                            if (q = n[p].x.getTime ? n[p].x.getTime() : n[p].x, !(q < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !k)))
                                if (null !== n[p].y && n[p].y.length && "number" === typeof n[p].y[0] && "number" ===
                                    typeof n[p].y[1]) {
                                    q = a.axisX.convertValueToPixel(q);
                                    k = a.axisY.convertValueToPixel(n[p].y[0]);
                                    s = a.axisY.convertValueToPixel(n[p].y[1]);
                                    var H = m.dataPointIds[p];
                                    this._eventManager.objectMap[H] = {
                                        id: H,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: r,
                                        dataPointIndex: p,
                                        x1: q,
                                        y1: k,
                                        y2: s
                                    };
                                    l[l.length] = {
                                        x: q,
                                        y: k
                                    };
                                    t[t.length] = {
                                        x: q,
                                        y: s
                                    };
                                    p < n.length - 1 && (A !== (n[p].lineColor || B) || z !== (n[p].lineDashType || m.lineDashType)) && (A = n[p].lineColor || B, l[l.length - 1].newStrokeStyle = A, c.setLineDash && (n[p].lineDashType ? (z = n[p].lineDashType,
                                        l[l.length - 1].newLineDashArray = P(z, m.lineThickness)) : (z = m.lineDashType, l[l.length - 1].newLineDashArray = G)));
                                    if (0 !== n[p].markerSize && (0 < n[p].markerSize || 0 < m.markerSize)) {
                                        var F = m.getMarkerProperties(p, q, k, c);
                                        g.push(F);
                                        var O = U(H);
                                        v && g.push({
                                            x: q,
                                            y: k,
                                            ctx: h,
                                            type: F.type,
                                            size: F.size,
                                            color: O,
                                            borderColor: O,
                                            borderThickness: F.borderThickness
                                        });
                                        F = m.getMarkerProperties(p, q, s, c);
                                        g.push(F);
                                        O = U(H);
                                        v && g.push({
                                            x: q,
                                            y: s,
                                            ctx: h,
                                            type: F.type,
                                            size: F.size,
                                            color: O,
                                            borderColor: O,
                                            borderThickness: F.borderThickness
                                        })
                                    }
                                    if (n[p].indexLabel ||
                                        m.indexLabel || n[p].indexLabelFormatter || m.indexLabelFormatter) this._indexLabels.push({
                                        chartType: "rangeSplineArea",
                                        dataPoint: n[p],
                                        dataSeries: m,
                                        indexKeyword: 0,
                                        point: {
                                            x: q,
                                            y: k
                                        },
                                        direction: n[p].y[0] <= n[p].y[1] ? -1 : 1,
                                        color: w
                                    }), this._indexLabels.push({
                                        chartType: "rangeSplineArea",
                                        dataPoint: n[p],
                                        dataSeries: m,
                                        indexKeyword: 1,
                                        point: {
                                            x: q,
                                            y: s
                                        },
                                        direction: n[p].y[0] <= n[p].y[1] ? 1 : -1,
                                        color: w
                                    });
                                    k = !1
                                } else 0 < p && !k && (m.connectNullData ? c.setLineDash && (0 < l.length && (m.options.nullDataLineDashType || !n[p - 1].lineDashType)) && (l[l.length -
                                    1].newLineDashArray = C, z = m.nullDataLineDashType) : (f(G, B), l = [], t = [])), k = !0;
                        f(G, B);
                        u.drawMarkers(g)
                    }
                }
                v && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height),
                    this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: y.xClipAnimation,
                    easingFunction: y.easing.linear,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderWaterfall = function (a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = v ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this._eventManager.ghostCtx,
                    h = null,
                    g = this.plotArea,
                    e = 0,
                    d, r, m, n, p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    e = this.options.dataPointMinWidth ? this.dataPointMinWidth :
                    this.options.dataPointWidth ? this.dataPointWidth : 1;
                r = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0;
                var q = a.axisX.dataInfo.minDiff;
                isFinite(q) || (q = 0.3 * Math.abs(a.axisX.range));
                q = this.options.dataPointWidth ? this.dataPointWidth : 0.6 * (g.width * (a.axisX.logarithmic ? Math.log(q) / Math.log(a.axisX.range) : Math.abs(q) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth &&
                    e > r && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, r));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && r < e) && (r = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                q < e && (q = e);
                q > r && (q = r);
                b.save();
                v && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(g.x1, g.y1, g.width, g.height);
                b.clip();
                v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.clip());
                for (var k = 0; k < a.dataSeriesIndexes.length; k++) {
                    var s =
                        a.dataSeriesIndexes[k],
                        l = this.data[s],
                        u = l.dataPoints,
                        h = l._colorSet[0];
                    l.risingColor = l.options.risingColor ? l.options.risingColor : h;
                    l.fallingColor = l.options.fallingColor ? l.options.fallingColor : "#e40a0a";
                    var w = "number" === typeof l.options.lineThickness ? Math.round(l.lineThickness) : 1,
                        t = 1 === Math.round(w) % 2 ? -0.5 : 0;
                    if (0 < u.length)
                        for (var x = 5 < q && l.bevelEnabled ? !0 : !1, z = !1, A = null, C = null, e = 0; e < u.length; e++)
                            if (u[e].getTime ? n = u[e].x.getTime() : n = u[e].x, "number" !== typeof u[e].y) {
                                if (0 < e && !z && l.connectNullData) var G =
                                    l.options.nullDataLineDashType || !u[e - 1].lineDashType ? l.nullDataLineDashType : u[e - 1].lineDashType;
                                z = !0
                            } else {
                                d = a.axisX.convertValueToPixel(n);
                                r = 0 === l.dataPointEOs[e].cumulativeSum ? p : a.axisY.convertValueToPixel(l.dataPointEOs[e].cumulativeSum);
                                m = 0 === l.dataPointEOs[e].cumulativeSumYStartValue ? p : a.axisY.convertValueToPixel(l.dataPointEOs[e].cumulativeSumYStartValue);
                                d = a.axisX.reversed ? d + a.plotType.totalDataSeries * q / 2 - (a.previousDataSeriesCount + k) * q << 0 : d - a.plotType.totalDataSeries * q / 2 + (a.previousDataSeriesCount +
                                    k) * q << 0;
                                var H = a.axisX.reversed ? d - q << 0 : d + q << 0;
                                r > m && (h = r, r = m, m = h);
                                a.axisY.reversed && (h = r, r = m, m = h);
                                h = l.dataPointIds[e];
                                this._eventManager.objectMap[h] = {
                                    id: h,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: s,
                                    dataPointIndex: e,
                                    x1: d,
                                    y1: r,
                                    x2: H,
                                    y2: m
                                };
                                var O = u[e].color ? u[e].color : 0 < u[e].y ? l.risingColor : l.fallingColor;
                                da(b, d, r, H, m, O, 0, O, x, x, !1, !1, l.fillOpacity);
                                h = U(h);
                                v && da(this._eventManager.ghostCtx, d, r, H, m, h, 0, null, !1, !1, !1, !1);
                                var ba, O = d;
                                ba = "undefined" !== typeof u[e].isIntermediateSum && !0 === u[e].isIntermediateSum ||
                                    "undefined" !== typeof u[e].isCumulativeSum && !0 === u[e].isCumulativeSum ? 0 < u[e].y ? r : m : 0 < u[e].y ? m : r;
                                0 < e && A && (!z || l.connectNullData) && (z && b.setLineDash && b.setLineDash(P(G, w)), b.beginPath(), b.moveTo(A, C - t), b.lineTo(O, ba - t), 0 < w && b.stroke(), v && (c.beginPath(), c.moveTo(A, C - t), c.lineTo(O, ba - t), 0 < w && c.stroke()));
                                z = !1;
                                A = H;
                                C = 0 < u[e].y ? r : m;
                                O = u[e].lineDashType ? u[e].lineDashType : l.options.lineDashType ? l.options.lineDashType : "shortDash";
                                b.strokeStyle = u[e].lineColor ? u[e].lineColor : l.options.lineColor ? l.options.lineColor :
                                    "#9e9e9e";
                                b.lineWidth = w;
                                b.setLineDash && (O = P(O, w), b.setLineDash(O));
                                (u[e].indexLabel || l.indexLabel || u[e].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "waterfall",
                                    dataPoint: u[e],
                                    dataSeries: l,
                                    point: {
                                        x: d + (H - d) / 2,
                                        y: 0 <= u[e].y ? r : m
                                    },
                                    direction: 0 > u[e].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: d,
                                        y1: Math.min(r, m),
                                        x2: H,
                                        y2: Math.max(r, m)
                                    },
                                    color: h
                                })
                            }
                }
                v && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas,
                    0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: y.fadeInAnimation,
                    easingFunction: y.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        var d = function (a, f, b, c, h, g, e, d, r) {
            if (!(0 > b)) {
                "undefined" === typeof d &&
                    (d = 1);
                if (!v) {
                    var m = Number((e % (2 * Math.PI)).toFixed(8));
                    Number((g % (2 * Math.PI)).toFixed(8)) === m && (e -= 1E-4)
                }
                a.save();
                a.globalAlpha = d;
                "pie" === h ? (a.beginPath(), a.moveTo(f.x, f.y), a.arc(f.x, f.y, b, g, e, !1), a.fillStyle = c, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === h && (a.beginPath(), a.arc(f.x, f.y, b, g, e, !1), 0 <= r && a.arc(f.x, f.y, r * b, e, g, !0), a.closePath(), a.fillStyle = c, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
                a.globalAlpha = 1;
                a.restore()
            }
        };
        t.prototype.renderPie = function (a) {
            function f() {
                if (m &&
                    n) {
                    for (var a = 0, c = 0, b = 0, f = 0, h = 0; h < n.length; h++) {
                        var g = n[h],
                            d = m.dataPointIds[h];
                        k[h].id = d;
                        k[h].objectType = "dataPoint";
                        k[h].dataPointIndex = h;
                        k[h].dataSeriesIndex = 0;
                        var p = k[h],
                            r = {
                                percent: null,
                                total: null
                            },
                            s = null,
                            r = y.getPercentAndTotal(m, g);
                        if (m.indexLabelFormatter || g.indexLabelFormatter) s = {
                            chart: y.options,
                            dataSeries: m,
                            dataPoint: g,
                            total: r.total,
                            percent: r.percent
                        };
                        r = g.indexLabelFormatter ? g.indexLabelFormatter(s) : g.indexLabel ? y.replaceKeywordsWithValue(g.indexLabel, g, m, h) : m.indexLabelFormatter ? m.indexLabelFormatter(s) :
                            m.indexLabel ? y.replaceKeywordsWithValue(m.indexLabel, g, m, h) : g.label ? g.label : "";
                        y._eventManager.objectMap[d] = p;
                        p.center = {
                            x: x.x,
                            y: x.y
                        };
                        p.y = g.y;
                        p.radius = C;
                        p.percentInnerRadius = H;
                        p.indexLabelText = r;
                        p.indexLabelPlacement = m.indexLabelPlacement;
                        p.indexLabelLineColor = g.indexLabelLineColor ? g.indexLabelLineColor : m.options.indexLabelLineColor ? m.options.indexLabelLineColor : g.color ? g.color : m._colorSet[h % m._colorSet.length];
                        p.indexLabelLineThickness = e(g.indexLabelLineThickness) ? m.indexLabelLineThickness : g.indexLabelLineThickness;
                        p.indexLabelLineDashType = g.indexLabelLineDashType ? g.indexLabelLineDashType : m.indexLabelLineDashType;
                        p.indexLabelFontColor = g.indexLabelFontColor ? g.indexLabelFontColor : m.indexLabelFontColor;
                        p.indexLabelFontStyle = g.indexLabelFontStyle ? g.indexLabelFontStyle : m.indexLabelFontStyle;
                        p.indexLabelFontWeight = g.indexLabelFontWeight ? g.indexLabelFontWeight : m.indexLabelFontWeight;
                        p.indexLabelFontSize = e(g.indexLabelFontSize) ? m.indexLabelFontSize : g.indexLabelFontSize;
                        p.indexLabelFontFamily = g.indexLabelFontFamily ?
                            g.indexLabelFontFamily : m.indexLabelFontFamily;
                        p.indexLabelBackgroundColor = g.indexLabelBackgroundColor ? g.indexLabelBackgroundColor : m.options.indexLabelBackgroundColor ? m.options.indexLabelBackgroundColor : m.indexLabelBackgroundColor;
                        p.indexLabelMaxWidth = g.indexLabelMaxWidth ? g.indexLabelMaxWidth : m.indexLabelMaxWidth ? m.indexLabelMaxWidth : 0.33 * q.width;
                        p.indexLabelWrap = "undefined" !== typeof g.indexLabelWrap ? g.indexLabelWrap : m.indexLabelWrap;
                        p.startAngle = 0 === h ? m.startAngle ? m.startAngle / 180 * Math.PI : 0 : k[h - 1].endAngle;
                        p.startAngle = (p.startAngle + 2 * Math.PI) % (2 * Math.PI);
                        p.endAngle = p.startAngle + 2 * Math.PI / z * Math.abs(g.y);
                        g = (p.endAngle + p.startAngle) / 2;
                        g = (g + 2 * Math.PI) % (2 * Math.PI);
                        p.midAngle = g;
                        if (p.midAngle > Math.PI / 2 - w && p.midAngle < Math.PI / 2 + w) {
                            if (0 === a || k[b].midAngle > p.midAngle) b = h;
                            a++
                        } else if (p.midAngle > 3 * Math.PI / 2 - w && p.midAngle < 3 * Math.PI / 2 + w) {
                            if (0 === c || k[f].midAngle > p.midAngle) f = h;
                            c++
                        }
                        p.hemisphere = g > Math.PI / 2 && g <= 3 * Math.PI / 2 ? "left" : "right";
                        p.indexLabelTextBlock = new ma(y.plotArea.ctx, {
                            fontSize: p.indexLabelFontSize,
                            fontFamily: p.indexLabelFontFamily,
                            fontColor: p.indexLabelFontColor,
                            fontStyle: p.indexLabelFontStyle,
                            fontWeight: p.indexLabelFontWeight,
                            horizontalAlign: "left",
                            backgroundColor: p.indexLabelBackgroundColor,
                            maxWidth: p.indexLabelMaxWidth,
                            maxHeight: p.indexLabelWrap ? 5 * p.indexLabelFontSize : 1.5 * p.indexLabelFontSize,
                            text: p.indexLabelText,
                            padding: 0,
                            textBaseline: "top"
                        });
                        p.indexLabelTextBlock.measureText()
                    }
                    d = g = 0;
                    r = !1;
                    for (h = 0; h < n.length; h++) p = k[(b + h) % n.length], 1 < a && (p.midAngle > Math.PI / 2 - w && p.midAngle < Math.PI / 2 + w) && (g <= a / 2 && !r ? (p.hemisphere = "right",
                        g++) : (p.hemisphere = "left", r = !0));
                    r = !1;
                    for (h = 0; h < n.length; h++) p = k[(f + h) % n.length], 1 < c && (p.midAngle > 3 * Math.PI / 2 - w && p.midAngle < 3 * Math.PI / 2 + w) && (d <= c / 2 && !r ? (p.hemisphere = "left", d++) : (p.hemisphere = "right", r = !0))
                }
            }

            function b(a) {
                var c = y.plotArea.ctx;
                c.clearRect(q.x1, q.y1, q.width, q.height);
                c.fillStyle = y.backgroundColor;
                c.fillRect(q.x1, q.y1, q.width, q.height);
                for (c = 0; c < n.length; c++) {
                    var b = k[c].startAngle,
                        f = k[c].endAngle;
                    if (f > b) {
                        var h = 0.07 * C * Math.cos(k[c].midAngle),
                            g = 0.07 * C * Math.sin(k[c].midAngle),
                            e = !1;
                        if (n[c].exploded) {
                            if (1E-9 <
                                Math.abs(k[c].center.x - (x.x + h)) || 1E-9 < Math.abs(k[c].center.y - (x.y + g))) k[c].center.x = x.x + h * a, k[c].center.y = x.y + g * a, e = !0
                        } else if (0 < Math.abs(k[c].center.x - x.x) || 0 < Math.abs(k[c].center.y - x.y)) k[c].center.x = x.x + h * (1 - a), k[c].center.y = x.y + g * (1 - a), e = !0;
                        e && (h = {}, h.dataSeries = m, h.dataPoint = m.dataPoints[c], h.index = c, y.toolTip.highlightObjects([h]));
                        d(y.plotArea.ctx, k[c].center, k[c].radius, n[c].color ? n[c].color : m._colorSet[c % m._colorSet.length], m.type, b, f, m.fillOpacity, k[c].percentInnerRadius)
                    }
                }
                a = y.plotArea.ctx;
                a.save();
                a.fillStyle = "black";
                a.strokeStyle = "grey";
                a.textBaseline = "middle";
                a.lineJoin = "round";
                for (c = c = 0; c < n.length; c++) b = k[c], b.indexLabelText && (b.indexLabelTextBlock.y -= b.indexLabelTextBlock.height / 2, f = 0, f = "left" === b.hemisphere ? "inside" !== m.indexLabelPlacement ? -(b.indexLabelTextBlock.width + p) : -b.indexLabelTextBlock.width / 2 : "inside" !== m.indexLabelPlacement ? p : -b.indexLabelTextBlock.width / 2, b.indexLabelTextBlock.x += f, b.indexLabelTextBlock.render(!0), b.indexLabelTextBlock.x -= f, b.indexLabelTextBlock.y +=
                    b.indexLabelTextBlock.height / 2, "inside" !== b.indexLabelPlacement && 0 < b.indexLabelLineThickness && (f = b.center.x + C * Math.cos(b.midAngle), h = b.center.y + C * Math.sin(b.midAngle), a.strokeStyle = b.indexLabelLineColor, a.lineWidth = b.indexLabelLineThickness, a.setLineDash && a.setLineDash(P(b.indexLabelLineDashType, b.indexLabelLineThickness)), a.beginPath(), a.moveTo(f, h), a.lineTo(b.indexLabelTextBlock.x, b.indexLabelTextBlock.y), a.lineTo(b.indexLabelTextBlock.x + ("left" === b.hemisphere ? -p : p), b.indexLabelTextBlock.y), a.stroke()),
                    a.lineJoin = "miter");
                a.save()
            }

            function c(a, c) {
                var b = 0,
                    b = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height / 2,
                    f = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height / 2,
                    h = c.indexLabelTextBlock.y - c.indexLabelTextBlock.height / 2,
                    g = c.indexLabelTextBlock.y + c.indexLabelTextBlock.height / 2;
                return b = c.indexLabelTextBlock.y > a.indexLabelTextBlock.y ? h - f : b - g
            }

            function h(a) {
                for (var b = null, f = 1; f < n.length; f++)
                    if (b = (a + f + k.length) % k.length, k[b].hemisphere !== k[a].hemisphere) {
                        b = null;
                        break
                    } else if (k[b].indexLabelText && b !==
                    a && (0 > c(k[b], k[a]) || ("right" === k[a].hemisphere ? k[b].indexLabelTextBlock.y >= k[a].indexLabelTextBlock.y : k[b].indexLabelTextBlock.y <= k[a].indexLabelTextBlock.y))) break;
                else b = null;
                return b
            }

            function g(a, b, f) {
                f = (f || 0) + 1;
                if (1E3 < f) return 0;
                b = b || 0;
                var e = 0,
                    d = x.y - 1 * u,
                    m = x.y + 1 * u;
                if (0 <= a && a < n.length) {
                    var p = k[a];
                    if (0 > b && p.indexLabelTextBlock.y < d || 0 < b && p.indexLabelTextBlock.y > m) return 0;
                    var q = 0,
                        r = 0,
                        r = q = q = 0;
                    0 > b ? p.indexLabelTextBlock.y - p.indexLabelTextBlock.height / 2 > d && p.indexLabelTextBlock.y - p.indexLabelTextBlock.height /
                        2 + b < d && (b = -(d - (p.indexLabelTextBlock.y - p.indexLabelTextBlock.height / 2 + b))) : p.indexLabelTextBlock.y + p.indexLabelTextBlock.height / 2 < d && p.indexLabelTextBlock.y + p.indexLabelTextBlock.height / 2 + b > m && (b = p.indexLabelTextBlock.y + p.indexLabelTextBlock.height / 2 + b - m);
                    b = p.indexLabelTextBlock.y + b;
                    d = 0;
                    d = "right" === p.hemisphere ? x.x + Math.sqrt(Math.pow(u, 2) - Math.pow(b - x.y, 2)) : x.x - Math.sqrt(Math.pow(u, 2) - Math.pow(b - x.y, 2));
                    r = x.x + C * Math.cos(p.midAngle);
                    q = x.y + C * Math.sin(p.midAngle);
                    q = Math.sqrt(Math.pow(d - r, 2) + Math.pow(b -
                        q, 2));
                    r = Math.acos(C / u);
                    q = Math.acos((u * u + C * C - q * q) / (2 * C * u));
                    b = q < r ? b - p.indexLabelTextBlock.y : 0;
                    d = null;
                    for (m = 1; m < n.length; m++)
                        if (d = (a - m + k.length) % k.length, k[d].hemisphere !== k[a].hemisphere) {
                            d = null;
                            break
                        } else if (k[d].indexLabelText && k[d].hemisphere === k[a].hemisphere && d !== a && (0 > c(k[d], k[a]) || ("right" === k[a].hemisphere ? k[d].indexLabelTextBlock.y <= k[a].indexLabelTextBlock.y : k[d].indexLabelTextBlock.y >= k[a].indexLabelTextBlock.y))) break;
                    else d = null;
                    r = d;
                    q = h(a);
                    m = d = 0;
                    0 > b ? (m = "right" === p.hemisphere ? r : q, e = b, null !==
                        m && (r = -b, b = p.indexLabelTextBlock.y - p.indexLabelTextBlock.height / 2 - (k[m].indexLabelTextBlock.y + k[m].indexLabelTextBlock.height / 2), b - r < s && (d = -r, m = g(m, d, f + 1), +m.toFixed(t) > +d.toFixed(t) && (e = b > s ? -(b - s) : -(r - (m - d)))))) : 0 < b && (m = "right" === p.hemisphere ? q : r, e = b, null !== m && (r = b, b = k[m].indexLabelTextBlock.y - k[m].indexLabelTextBlock.height / 2 - (p.indexLabelTextBlock.y + p.indexLabelTextBlock.height / 2), b - r < s && (d = r, m = g(m, d, f + 1), +m.toFixed(t) < +d.toFixed(t) && (e = b > s ? b - s : r - (d - m)))));
                    e && (f = p.indexLabelTextBlock.y + e, b = 0, b =
                        "right" === p.hemisphere ? x.x + Math.sqrt(Math.pow(u, 2) - Math.pow(f - x.y, 2)) : x.x - Math.sqrt(Math.pow(u, 2) - Math.pow(f - x.y, 2)), p.midAngle > Math.PI / 2 - w && p.midAngle < Math.PI / 2 + w ? (d = (a - 1 + k.length) % k.length, d = k[d], a = k[(a + 1 + k.length) % k.length], "left" === p.hemisphere && "right" === d.hemisphere && b > d.indexLabelTextBlock.x ? b = d.indexLabelTextBlock.x - 15 : "right" === p.hemisphere && ("left" === a.hemisphere && b < a.indexLabelTextBlock.x) && (b = a.indexLabelTextBlock.x + 15)) : p.midAngle > 3 * Math.PI / 2 - w && p.midAngle < 3 * Math.PI / 2 + w && (d = (a - 1 + k.length) %
                            k.length, d = k[d], a = k[(a + 1 + k.length) % k.length], "right" === p.hemisphere && "left" === d.hemisphere && b < d.indexLabelTextBlock.x ? b = d.indexLabelTextBlock.x + 15 : "left" === p.hemisphere && ("right" === a.hemisphere && b > a.indexLabelTextBlock.x) && (b = a.indexLabelTextBlock.x - 15)), p.indexLabelTextBlock.y = f, p.indexLabelTextBlock.x = b, p.indexLabelAngle = Math.atan2(p.indexLabelTextBlock.y - x.y, p.indexLabelTextBlock.x - x.x))
                }
                return e
            }

            function r() {
                var a = y.plotArea.ctx;
                a.fillStyle = "grey";
                a.strokeStyle = "grey";
                a.font = "16px Arial";
                a.textBaseline =
                    "middle";
                for (var b = a = 0, f = 0, e = !0, b = 0; 10 > b && (1 > b || 0 < f); b++) {
                    if (m.radius || !m.radius && "undefined" !== typeof m.innerRadius && null !== m.innerRadius && C - f <= G) e = !1;
                    e && (C -= f);
                    f = 0;
                    if ("inside" !== m.indexLabelPlacement) {
                        u = C * v;
                        for (a = 0; a < n.length; a++) {
                            var d = k[a];
                            d.indexLabelTextBlock.x = x.x + u * Math.cos(d.midAngle);
                            d.indexLabelTextBlock.y = x.y + u * Math.sin(d.midAngle);
                            d.indexLabelAngle = d.midAngle;
                            d.radius = C;
                            d.percentInnerRadius = H
                        }
                        for (var l, E, a = 0; a < n.length; a++) {
                            var d = k[a],
                                w = h(a);
                            if (null !== w) {
                                l = k[a];
                                E = k[w];
                                var A = 0,
                                    A = c(l, E) -
                                    s;
                                if (0 > A) {
                                    for (var z = E = 0, ta = 0; ta < n.length; ta++) ta !== a && k[ta].hemisphere === d.hemisphere && (k[ta].indexLabelTextBlock.y < d.indexLabelTextBlock.y ? E++ : z++);
                                    E = A / (E + z || 1) * z;
                                    var z = -1 * (A - E),
                                        F = ta = 0;
                                    "right" === d.hemisphere ? (ta = g(a, E), z = -1 * (A - ta), F = g(w, z), +F.toFixed(t) < +z.toFixed(t) && +ta.toFixed(t) <= +E.toFixed(t) && g(a, -(z - F))) : (ta = g(w, E), z = -1 * (A - ta), F = g(a, z), +F.toFixed(t) < +z.toFixed(t) && +ta.toFixed(t) <= +E.toFixed(t) && g(w, -(z - F)))
                                }
                            }
                        }
                    } else
                        for (a = 0; a < n.length; a++) d = k[a], u = "pie" === m.type ? 0.7 * C : 0.8 * C, w = x.x + u * Math.cos(d.midAngle),
                            E = x.y + u * Math.sin(d.midAngle), d.indexLabelTextBlock.x = w, d.indexLabelTextBlock.y = E;
                    for (a = 0; a < n.length; a++)
                        if (d = k[a], w = d.indexLabelTextBlock.measureText(), 0 !== w.height && 0 !== w.width) w = w = 0, "right" === d.hemisphere ? (w = q.x2 - (d.indexLabelTextBlock.x + d.indexLabelTextBlock.width + p), w *= -1) : w = q.x1 - (d.indexLabelTextBlock.x - d.indexLabelTextBlock.width - p), 0 < w && (!e && d.indexLabelText && (E = "right" === d.hemisphere ? q.x2 - d.indexLabelTextBlock.x : d.indexLabelTextBlock.x - q.x1, 0.3 * d.indexLabelTextBlock.maxWidth > E ? d.indexLabelText =
                            "" : d.indexLabelTextBlock.maxWidth = 0.85 * E, 0.3 * d.indexLabelTextBlock.maxWidth < E && (d.indexLabelTextBlock.x -= "right" === d.hemisphere ? 2 : -2)), Math.abs(d.indexLabelTextBlock.y - d.indexLabelTextBlock.height / 2 - x.y) < C || Math.abs(d.indexLabelTextBlock.y + d.indexLabelTextBlock.height / 2 - x.y) < C) && (w /= Math.abs(Math.cos(d.indexLabelAngle)), 9 < w && (w *= 0.3), w > f && (f = w)), w = w = 0, 0 < d.indexLabelAngle && d.indexLabelAngle < Math.PI ? (w = q.y2 - (d.indexLabelTextBlock.y + d.indexLabelTextBlock.height / 2 + 5), w *= -1) : w = q.y1 - (d.indexLabelTextBlock.y -
                            d.indexLabelTextBlock.height / 2 - 5), 0 < w && (!e && d.indexLabelText && (E = 0 < d.indexLabelAngle && d.indexLabelAngle < Math.PI ? -1 : 1, 0 === g(a, w * E) && g(a, 2 * E)), Math.abs(d.indexLabelTextBlock.x - x.x) < C && (w /= Math.abs(Math.sin(d.indexLabelAngle)), 9 < w && (w *= 0.3), w > f && (f = w)));
                    var La = function (a, b, c) {
                        for (var f = [], h = 0; f.push(k[b]), b !== c; b = (b + 1 + n.length) % n.length);
                        f.sort(function (a, b) {
                            return a.y - b.y
                        });
                        for (b = 0; b < f.length; b++)
                            if (c = f[b], h < 0.7 * a) h += c.indexLabelTextBlock.height, c.indexLabelTextBlock.text = "", c.indexLabelText = "", c.indexLabelTextBlock.measureText();
                            else break
                    };
                    (function () {
                        for (var a = -1, b = -1, f = 0, g = !1, d = 0; d < n.length; d++)
                            if (g = !1, l = k[d], l.indexLabelText) {
                                var e = h(d);
                                if (null !== e) {
                                    var m = k[e];
                                    A = 0;
                                    A = c(l, m);
                                    var q;
                                    if (q = 0 > A) {
                                        q = l.indexLabelTextBlock.x;
                                        var r = l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2,
                                            s = l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2,
                                            E = m.indexLabelTextBlock.y - m.indexLabelTextBlock.height / 2,
                                            w = m.indexLabelTextBlock.x + m.indexLabelTextBlock.width,
                                            y = m.indexLabelTextBlock.y + m.indexLabelTextBlock.height / 2;
                                        q = l.indexLabelTextBlock.x +
                                            l.indexLabelTextBlock.width < m.indexLabelTextBlock.x - p || q > w + p || r > y + p || s < E - p ? !1 : !0
                                    }
                                    q ? (0 > a && (a = d), e !== a && (b = e, f += -A), 0 === d % Math.max(n.length / 10, 3) && (g = !0)) : g = !0;
                                    g && (0 < f && 0 <= a && 0 <= b) && (La(f, a, b), b = a = -1, f = 0)
                                }
                            } 0 < f && La(f, a, b)
                    })()
                }
            }

            function l() {
                y.plotArea.layoutManager.reset();
                y.title && (y.title.dockInsidePlotArea || "center" === y.title.horizontalAlign && "center" === y.title.verticalAlign) && y.title.render();
                if (y.subtitles)
                    for (var a = 0; a < y.subtitles.length; a++) {
                        var b = y.subtitles[a];
                        (b.dockInsidePlotArea || "center" ===
                            b.horizontalAlign && "center" === b.verticalAlign) && b.render()
                    }
                y.legend && (y.legend.dockInsidePlotArea || "center" === y.legend.horizontalAlign && "center" === y.legend.verticalAlign) && (y.legend.setLayout(), y.legend.render())
            }
            var y = this;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var m = this.data[a.dataSeriesIndexes[0]],
                    n = m.dataPoints,
                    p = 10,
                    q = this.plotArea,
                    k = m.dataPointEOs,
                    s = 2,
                    u, v = 1.3,
                    w = 20 / 180 * Math.PI,
                    t = 6,
                    x = {
                        x: (q.x2 + q.x1) / 2,
                        y: (q.y2 + q.y1) / 2
                    },
                    z = 0;
                a = !1;
                for (var A = 0; A < n.length; A++) z += Math.abs(n[A].y), !a && ("undefined" !== typeof n[A].indexLabel &&
                    null !== n[A].indexLabel && 0 < n[A].indexLabel.toString().length) && (a = !0), !a && ("undefined" !== typeof n[A].label && null !== n[A].label && 0 < n[A].label.toString().length) && (a = !0);
                if (0 !== z) {
                    a = a || "undefined" !== typeof m.indexLabel && null !== m.indexLabel && 0 < m.indexLabel.toString().length;
                    var C = "inside" !== m.indexLabelPlacement && a ? 0.75 * Math.min(q.width, q.height) / 2 : 0.92 * Math.min(q.width, q.height) / 2;
                    m.radius && (C = Va(m.radius, C));
                    var G = "undefined" !== typeof m.innerRadius && null !== m.innerRadius ? Va(m.innerRadius, C) : 0.7 * C;
                    m.radius =
                        C;
                    "doughnut" === m.type && (m.innerRadius = G);
                    var H = Math.min(G / C, (C - 1) / C);
                    this.pieDoughnutClickHandler = function (a) {
                        y.isAnimating || !e(a.dataSeries.explodeOnClick) && !a.dataSeries.explodeOnClick || (a = a.dataPoint, a.exploded = a.exploded ? !1 : !0, 1 < this.dataPoints.length && y._animator.animate(0, 500, function (a) {
                            b(a);
                            l();
                            y.dispatchEvent("dataAnimationIterationEnd", {
                                chart: y
                            });
                            y.dispatchEvent("dataAnimationEnd", {
                                chart: y
                            })
                        }))
                    };
                    f();
                    r();
                    r();
                    r();
                    r();
                    this.disableToolTip = !0;
                    this._animator.animate(0, this.animatedRender ? this.animationDuration :
                        0,
                        function (a) {
                            var b = y.plotArea.ctx;
                            b.clearRect(q.x1, q.y1, q.width, q.height);
                            b.fillStyle = y.backgroundColor;
                            b.fillRect(q.x1, q.y1, q.width, q.height);
                            for (var b = k[0].startAngle + 2 * Math.PI * a, c = 0; c < n.length; c++) {
                                var f = 0 === c ? k[c].startAngle : h,
                                    h = f + (k[c].endAngle - k[c].startAngle),
                                    g = !1;
                                h > b && (h = b, g = !0);
                                var e = n[c].color ? n[c].color : m._colorSet[c % m._colorSet.length];
                                h > f && d(y.plotArea.ctx, k[c].center, k[c].radius, e, m.type, f, h, m.fillOpacity, k[c].percentInnerRadius);
                                if (g) break
                            }
                            l();
                            y.dispatchEvent("dataAnimationIterationEnd", {
                                chart: y
                            });
                            1 <= a && y.dispatchEvent("dataAnimationEnd", {
                                chart: y
                            })
                        },
                        function () {
                            y.disableToolTip = !1;
                            y._animator.animate(0, y.animatedRender ? 500 : 0, function (a) {
                                b(a);
                                l();
                                y.dispatchEvent("dataAnimationIterationEnd", {
                                    chart: y
                                })
                            });
                            y.dispatchEvent("dataAnimationEnd", {
                                chart: y
                            })
                        })
                }
            }
        };
        var r = function (a, f, b, c) {
            "undefined" === typeof b && (b = 1);
            0 >= Math.round(f.y4 - f.y1) || (a.save(), a.globalAlpha = b, a.beginPath(), a.moveTo(Math.round(f.x1), Math.round(f.y1)), a.lineTo(Math.round(f.x2), Math.round(f.y2)), a.lineTo(Math.round(f.x3),
                Math.round(f.y3)), a.lineTo(Math.round(f.x4), Math.round(f.y4)), "undefined" !== f.x5 && (a.lineTo(Math.round(f.x5), Math.round(f.y5)), a.lineTo(Math.round(f.x6), Math.round(f.y6))), a.closePath(), a.fillStyle = c ? c : f.color, a.fill(), a.globalAplha = 1, a.restore())
        };
        t.prototype.renderFunnel = function (a) {
            function f() {
                for (var a = 0, b = [], c = 0; c < B.length; c++) {
                    if ("undefined" === typeof B[c].y) return -1;
                    B[c].y = "number" === typeof B[c].y ? B[c].y : 0;
                    a += Math.abs(B[c].y)
                }
                if (0 === a) return -1;
                for (c = b[0] = 0; c < B.length; c++) b.push(Math.abs(B[c].y) *
                    H / a);
                return b
            }

            function b() {
                var a = Z,
                    b = X,
                    c = Q,
                    f = da,
                    h, g;
                h = N;
                g = L - ca;
                f = Math.abs((g - h) * (b - a + (f - c)) / 2);
                c = da - Q;
                h = g - h;
                g = c * (g - L);
                g = Math.abs(g);
                g = f + g;
                for (var f = [], k = 0, d = 0; d < B.length; d++) {
                    if ("undefined" === typeof B[d].y) return -1;
                    B[d].y = "number" === typeof B[d].y ? B[d].y : 0;
                    k += Math.abs(B[d].y)
                }
                if (0 === k) return -1;
                for (var e = f[0] = 0, m = 0, n, p, b = b - a, e = !1, d = 0; d < B.length; d++) a = Math.abs(B[d].y) * g / k, e ? n = 0 == Number(c.toFixed(3)) ? 0 : a / c : (p = ga * ga * b * b - 4 * Math.abs(ga) * a, 0 > p ? (p = c, e = (b + p) * (h - m) / 2, a -= e, n = h - m, m += h - m, n += 0 == p ? 0 : a / p, m += a / p, e = !0) : (n = (Math.abs(ga) * b - Math.sqrt(p)) / 2, p = b - 2 * n / Math.abs(ga), m += n, m > h && (m -= n, p = c, e = (b + p) * (h - m) / 2, a -= e, n = h - m, m += h - m, n += a / p, m += a / p, e = !0), b = p)), f.push(n);
                return f
            }

            function c() {
                if (w && B) {
                    for (var a, b, c, f, h, g, d, m, p, n, q, r, s, l, E = [], y = [], u = {
                            percent: null,
                            total: null
                        }, t = null, D = 0; D < B.length; D++) l = R[D], l = "undefined" !== typeof l.x5 ? (l.y2 + l.y4) / 2 : (l.y2 + l.y3) / 2, l = k(l).x2 + 1, E[D] = V - l - U;
                    l = 0.5 * U;
                    for (var D = 0, A = B.length - 1; D < B.length || 0 <= A; D++, A--) {
                        b = w.reversed ? B[A] : B[D];
                        a = b.color ? b.color : w.reversed ? w._colorSet[(B.length - 1 -
                            D) % w._colorSet.length] : w._colorSet[D % w._colorSet.length];
                        c = b.indexLabelPlacement || w.indexLabelPlacement || "outside";
                        f = b.indexLabelBackgroundColor || w.indexLabelBackgroundColor || (v ? "transparent" : null);
                        h = b.indexLabelFontColor || w.indexLabelFontColor || "#979797";
                        g = e(b.indexLabelFontSize) ? w.indexLabelFontSize : b.indexLabelFontSize;
                        d = b.indexLabelFontStyle || w.indexLabelFontStyle || "normal";
                        m = b.indexLabelFontFamily || w.indexLabelFontFamily || "arial";
                        p = b.indexLabelFontWeight || w.indexLabelFontWeight || "normal";
                        a = b.indexLabelLineColor ||
                            w.options.indexLabelLineColor || a;
                        n = "number" === typeof b.indexLabelLineThickness ? b.indexLabelLineThickness : "number" === typeof w.indexLabelLineThickness ? w.indexLabelLineThickness : 2;
                        q = b.indexLabelLineDashType || w.indexLabelLineDashType || "solid";
                        r = "undefined" !== typeof b.indexLabelWrap ? b.indexLabelWrap : "undefined" !== typeof w.indexLabelWrap ? w.indexLabelWrap : !0;
                        s = w.dataPointIds[D];
                        x._eventManager.objectMap[s] = {
                            id: s,
                            objectType: "dataPoint",
                            dataPointIndex: D,
                            dataSeriesIndex: 0,
                            funnelSection: R[w.reversed ? B.length -
                                1 - D : D]
                        };
                        "inside" === w.indexLabelPlacement && (E[D] = D !== ha ? w.reversed ? R[D].x2 - R[D].x1 : R[D].x3 - R[D].x4 : R[D].x3 - R[D].x6, 20 > E[D] && (E[D] = D !== ha ? w.reversed ? R[D].x3 - R[D].x4 : R[D].x2 - R[D].x1 : R[D].x2 - R[D].x1, E[D] /= 2));
                        s = b.indexLabelMaxWidth ? b.indexLabelMaxWidth : w.options.indexLabelMaxWidth ? w.indexLabelMaxWidth : E[D];
                        if (s > E[D] || 0 > s) s = E[D];
                        y[D] = "inside" === w.indexLabelPlacement ? R[D].height : !1;
                        u = x.getPercentAndTotal(w, b);
                        if (w.indexLabelFormatter || b.indexLabelFormatter) t = {
                            chart: x.options,
                            dataSeries: w,
                            dataPoint: b,
                            total: u.total,
                            percent: u.percent
                        };
                        b = b.indexLabelFormatter ? b.indexLabelFormatter(t) : b.indexLabel ? x.replaceKeywordsWithValue(b.indexLabel, b, w, D) : w.indexLabelFormatter ? w.indexLabelFormatter(t) : w.indexLabel ? x.replaceKeywordsWithValue(w.indexLabel, b, w, D) : b.label ? b.label : "";
                        0 >= n && (n = 0);
                        1E3 > s && 1E3 - s < l && (s += 1E3 - s);
                        W.roundRect || Ga(W);
                        c = new ma(W, {
                            fontSize: g,
                            fontFamily: m,
                            fontColor: h,
                            fontStyle: d,
                            fontWeight: p,
                            horizontalAlign: c,
                            backgroundColor: f,
                            maxWidth: s,
                            maxHeight: !1 === y[D] ? r ? 4.28571429 * g : 1.5 * g : y[D],
                            text: b,
                            padding: ja
                        });
                        c.measureText();
                        J.push({
                            textBlock: c,
                            id: w.reversed ? A : D,
                            isDirty: !1,
                            lineColor: a,
                            lineThickness: n,
                            lineDashType: q,
                            height: c.height < c.maxHeight ? c.height : c.maxHeight,
                            width: c.width < c.maxWidth ? c.width : c.maxWidth
                        })
                    }
                }
            }

            function h() {
                var a, b, c, f, h, g = [];
                h = !1;
                c = 0;
                for (var d, k = V - X - U / 2, k = w.options.indexLabelMaxWidth ? w.indexLabelMaxWidth > k ? k : w.indexLabelMaxWidth : k, e = J.length - 1; 0 <= e; e--) {
                    d = B[J[e].id];
                    c = J[e];
                    f = c.textBlock;
                    b = (a = q(e) < R.length ? J[q(e)] : null) ? a.textBlock : null;
                    c = c.height;
                    a && f.y + c + ja > b.y && (h = !0);
                    c = d.indexLabelMaxWidth || k;
                    if (c >
                        k || 0 > c) c = k;
                    g.push(c)
                }
                if (h)
                    for (e = J.length - 1; 0 <= e; e--) a = R[e], J[e].textBlock.maxWidth = g[g.length - (e + 1)], J[e].textBlock.measureText(), J[e].textBlock.x = V - k, c = J[e].textBlock.height < J[e].textBlock.maxHeight ? J[e].textBlock.height : J[e].textBlock.maxHeight, h = J[e].textBlock.width < J[e].textBlock.maxWidth ? J[e].textBlock.width : J[e].textBlock.maxWidth, J[e].height = c, J[e].width = h, c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2, J[e].textBlock.y = c - J[e].height / 2, w.reversed ? (J[e].textBlock.y + J[e].height > S + z &&
                        (J[e].textBlock.y = S + z - J[e].height), J[e].textBlock.y < Ca - z && (J[e].textBlock.y = Ca - z)) : (J[e].textBlock.y < S - z && (J[e].textBlock.y = S - z), J[e].textBlock.y + J[e].height > Ca + z && (J[e].textBlock.y = Ca + z - J[e].height))
            }

            function g() {
                var a, b, c, f;
                if ("inside" !== w.indexLabelPlacement)
                    for (var h = 0; h < R.length; h++) 0 == J[h].textBlock.text.length ? J[h].isDirty = !0 : (a = R[h], c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2, b = w.reversed ? "undefined" !== typeof a.x5 ? c > $ ? k(c).x2 + 1 : (a.x2 + a.x3) / 2 + 1 : (a.x2 + a.x3) / 2 + 1 : "undefined" !== typeof a.x5 ?
                        c < $ ? k(c).x2 + 1 : (a.x4 + a.x3) / 2 + 1 : (a.x2 + a.x3) / 2 + 1, J[h].textBlock.x = b + U, J[h].textBlock.y = c - J[h].height / 2, w.reversed ? (J[h].textBlock.y + J[h].height > S + z && (J[h].textBlock.y = S + z - J[h].height), J[h].textBlock.y < Ca - z && (J[h].textBlock.y = Ca - z)) : (J[h].textBlock.y < S - z && (J[h].textBlock.y = S - z), J[h].textBlock.y + J[h].height > Ca + z && (J[h].textBlock.y = Ca + z - J[h].height)));
                else
                    for (h = 0; h < R.length; h++) 0 == J[h].textBlock.text.length ? J[h].isDirty = !0 : (a = R[h], b = a.height, c = J[h].height, f = J[h].width, b >= c ? (b = h != ha ? (a.x4 + a.x3) / 2 - f / 2 : (a.x5 +
                        a.x4) / 2 - f / 2, c = h != ha ? (a.y1 + a.y3) / 2 - c / 2 : (a.y1 + a.y4) / 2 - c / 2, J[h].textBlock.x = b, J[h].textBlock.y = c) : J[h].isDirty = !0)
            }

            function d() {
                function a(b, c) {
                    var f;
                    if (0 > b || b >= J.length) return 0;
                    var h, g = J[b].textBlock;
                    if (0 > c) {
                        c *= -1;
                        h = p(b);
                        f = l(h, b);
                        if (f >= c) return g.y -= c, c;
                        if (0 == b) return 0 < f && (g.y -= f), f;
                        f += a(h, -(c - f));
                        0 < f && (g.y -= f);
                        return f
                    }
                    h = q(b);
                    f = l(b, h);
                    if (f >= c) return g.y += c, c;
                    if (b == R.length - 1) return 0 < f && (g.y += f), f;
                    f += a(h, c - f);
                    0 < f && (g.y += f);
                    return f
                }

                function b() {
                    var a, f, h, g, e = 0,
                        k;
                    g = (L - N + 2 * z) / n;
                    k = n;
                    for (var d, m = 1; m <
                        k; m++) {
                        h = m * g;
                        for (var r = J.length - 1; 0 <= r; r--) !J[r].isDirty && (J[r].textBlock.y < h && J[r].textBlock.y + J[r].height > h) && (d = q(r), !(d >= J.length - 1) && J[r].textBlock.y + J[r].height + ja > J[d].textBlock.y && (J[r].textBlock.y = J[r].textBlock.y + J[r].height - h > h - J[r].textBlock.y ? h + 1 : h - J[r].height - 1))
                    }
                    for (d = R.length - 1; 0 < d; d--)
                        if (!J[d].isDirty) {
                            h = p(d);
                            if (0 > h && (h = 0, J[h].isDirty)) break;
                            if (J[d].textBlock.y < J[h].textBlock.y + J[h].height) {
                                f = f || d;
                                g = d;
                                for (k = 0; J[g].textBlock.y < J[h].textBlock.y + J[h].height + ja;) {
                                    a = a || J[g].textBlock.y +
                                        J[g].height;
                                    k += J[g].height;
                                    k += ja;
                                    g = h;
                                    if (0 >= g) {
                                        g = 0;
                                        k += J[g].height;
                                        break
                                    }
                                    h = p(g);
                                    if (0 > h) {
                                        g = 0;
                                        k += J[g].height;
                                        break
                                    }
                                }
                                if (g != d) {
                                    e = J[g].textBlock.y;
                                    a -= e;
                                    a = k - a;
                                    e = c(a, f, g);
                                    break
                                }
                            }
                        } return e
                }

                function c(a, b, f) {
                    var h = [],
                        g = 0,
                        e = 0;
                    for (a = Math.abs(a); f <= b; f++) h.push(R[f]);
                    h.sort(function (a, b) {
                        return a.height - b.height
                    });
                    for (f = 0; f < h.length; f++)
                        if (b = h[f], g < a) e++, g += J[b.id].height + ja, J[b.id].textBlock.text = "", J[b.id].indexLabelText = "", J[b.id].isDirty = !0, J[b.id].textBlock.measureText();
                        else break;
                    return e
                }
                for (var f, h, g,
                        e, k, m, n = 1, r = 0; r < 2 * n; r++) {
                    for (var s = J.length - 1; 0 <= s && !(0 <= p(s) && p(s), g = J[s], e = g.textBlock, m = (k = q(s) < R.length ? J[q(s)] : null) ? k.textBlock : null, f = +g.height.toFixed(6), h = +e.y.toFixed(6), !g.isDirty && (k && h + f + ja > +m.y.toFixed(6)) && (f = e.y + f + ja - m.y, h = a(s, -f), h < f && (0 < h && (f -= h), h = a(q(s), f), h != f))); s--);
                    b()
                }
            }

            function l(a, b) {
                return (b < R.length ? J[b].textBlock.y : w.reversed ? S + z : Ca + z) - (0 > a ? w.reversed ? Ca - z : S - z : J[a].textBlock.y + J[a].height + ja)
            }

            function u(a, b, c) {
                var f, h, e, k = [],
                    d = z,
                    p = []; - 1 !== b && (0 <= Y.indexOf(b) ? (h = Y.indexOf(b),
                    Y.splice(h, 1)) : (Y.push(b), Y = Y.sort(function (a, b) {
                    return a - b
                })));
                if (0 === Y.length) k = na;
                else {
                    h = z * (1 != Y.length || 0 != Y[0] && Y[0] != R.length - 1 ? 2 : 1) / m();
                    for (var q = 0; q < R.length; q++) {
                        if (1 == Y.length && 0 == Y[0]) {
                            if (0 === q) {
                                k.push(na[q]);
                                f = d;
                                continue
                            }
                        } else 0 === q && (f = -1 * d);
                        k.push(na[q] + f);
                        if (0 <= Y.indexOf(q) || q < R.length && 0 <= Y.indexOf(q + 1)) f += h
                    }
                }
                e = function () {
                    for (var a = [], b = 0; b < R.length; b++) a.push(k[b] - R[b].y1);
                    return a
                }();
                var l = {
                    startTime: (new Date).getTime(),
                    duration: c || 500,
                    easingFunction: function (a, b, c, f) {
                        return y.easing.easeOutQuart(a,
                            b, c, f)
                    },
                    changeSection: function (a) {
                        for (var b, c, f = 0; f < R.length; f++) b = e[f], c = R[f], b *= a, "undefined" === typeof p[f] && (p[f] = 0), 0 > p && (p *= -1), c.y1 += b - p[f], c.y2 += b - p[f], c.y3 += b - p[f], c.y4 += b - p[f], c.y5 && (c.y5 += b - p[f], c.y6 += b - p[f]), p[f] = b
                    }
                };
                a._animator.animate(0, c, function (c) {
                    var f = a.plotArea.ctx || a.ctx;
                    oa = !0;
                    f.clearRect(A.x1, A.y1, A.x2 - A.x1, A.y2 - A.y1);
                    f.fillStyle = a.backgroundColor;
                    f.fillRect(A.x1, A.y1, A.width, A.height);
                    l.changeSection(c, b);
                    var h = {};
                    h.dataSeries = w;
                    h.dataPoint = w.reversed ? w.dataPoints[B.length - 1 -
                        b] : w.dataPoints[b];
                    h.index = w.reversed ? B.length - 1 - b : b;
                    a.toolTip.highlightObjects([h]);
                    for (h = 0; h < R.length; h++) r(f, R[h], w.fillOpacity);
                    t(f);
                    O && ("inside" !== w.indexLabelPlacement ? n(f) : g(), s(f));
                    1 <= c && (oa = !1)
                }, null, y.easing.easeOutQuart)
            }

            function m() {
                for (var a = 0, b = 0; b < R.length - 1; b++)(0 <= Y.indexOf(b) || 0 <= Y.indexOf(b + 1)) && a++;
                return a
            }

            function n(a) {
                for (var b, c, f, h, g = 0; g < R.length; g++) h = 1 === J[g].lineThickness % 2 ? 0.5 : 0, c = ((R[g].y2 + R[g].y4) / 2 << 0) + h, b = k(c).x2 - 1, f = J[g].textBlock.x, h = (J[g].textBlock.y + J[g].height /
                    2 << 0) + h, J[g].isDirty || 0 == J[g].lineThickness || (a.strokeStyle = J[g].lineColor, a.lineWidth = J[g].lineThickness, a.setLineDash && a.setLineDash(P(J[g].lineDashType, J[g].lineThickness)), a.beginPath(), a.moveTo(b, c), a.lineTo(f, h), a.stroke())
            }

            function p(a) {
                for (a -= 1; - 1 <= a && -1 != a && J[a].isDirty; a--);
                return a
            }

            function q(a) {
                for (a += 1; a <= R.length && a != R.length && J[a].isDirty; a++);
                return a
            }

            function k(a) {
                for (var b, c = 0; c < B.length; c++)
                    if (R[c].y1 < a && R[c].y4 > a) {
                        b = R[c];
                        break
                    } return b ? (a = b.y6 ? a > b.y6 ? b.x3 + (b.x4 - b.x3) / (b.y4 - b.y3) *
                    (a - b.y3) : b.x2 + (b.x3 - b.x2) / (b.y3 - b.y2) * (a - b.y2) : b.x2 + (b.x3 - b.x2) / (b.y3 - b.y2) * (a - b.y2), {
                        x1: a,
                        x2: a
                    }) : -1
            }

            function s(a) {
                for (var b = 0; b < R.length; b++) J[b].isDirty || (a && (J[b].textBlock.ctx = a), J[b].textBlock.render(!0))
            }

            function t(a) {
                x.plotArea.layoutManager.reset();
                a.roundRect || Ga(a);
                x.title && (x.title.dockInsidePlotArea || "center" === x.title.horizontalAlign && "center" === x.title.verticalAlign) && (x.title.ctx = a, x.title.render());
                if (x.subtitles)
                    for (var b = 0; b < x.subtitles.length; b++) {
                        var c = x.subtitles[b];
                        if (c.dockInsidePlotArea ||
                            "center" === c.horizontalAlign && "center" === c.verticalAlign) x.subtitles.ctx = a, c.render()
                    }
                x.legend && (x.legend.dockInsidePlotArea || "center" === x.legend.horizontalAlign && "center" === x.legend.verticalAlign) && (x.legend.ctx = a, x.legend.setLayout(), x.legend.render());
                M.fNg && M.fNg(x)
            }
            var x = this;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                for (var w = this.data[a.dataSeriesIndexes[0]], B = w.dataPoints, A = this.plotArea, z = 0.025 * A.width, G = 0.01 * A.width, C = 0, H = A.height - 2 * z, F = Math.min(A.width - 2 * G, 2.8 * A.height), O = !1, K = 0; K < B.length; K++)
                    if (!O &&
                        ("undefined" !== typeof B[K].indexLabel && null !== B[K].indexLabel && 0 < B[K].indexLabel.toString().length) && (O = !0), !O && ("undefined" !== typeof B[K].label && null !== B[K].label && 0 < B[K].label.toString().length) && (O = !0), !O && "function" === typeof w.indexLabelFormatter || "function" === typeof B[K].indexLabelFormatter) O = !0;
                O = O || "undefined" !== typeof w.indexLabel && null !== w.indexLabel && 0 < w.indexLabel.toString().length;
                "inside" !== w.indexLabelPlacement && O || (G = (A.width - 0.75 * F) / 2);
                var K = A.x1 + G,
                    V = A.x2 - G,
                    N = A.y1 + z,
                    L = A.y2 - z,
                    W = a.targetCanvasCtx ||
                    this.plotArea.ctx || this.ctx;
                if (0 != w.length && (w.dataPoints && w.visible) && 0 !== B.length) {
                    var ca, I;
                    a = 75 * F / 100;
                    var U = 30 * (V - a) / 100;
                    "funnel" === w.type ? (ca = e(w.options.neckHeight) ? 0.35 * H : w.neckHeight, I = e(w.options.neckWidth) ? 0.25 * a : w.neckWidth, "string" === typeof ca && ca.match(/%$/) ? (ca = parseInt(ca), ca = ca * H / 100) : ca = parseInt(ca), "string" === typeof I && I.match(/%$/) ? (I = parseInt(I), I = I * a / 100) : I = parseInt(I), ca > H ? ca = H : 0 >= ca && (ca = 0), I > a ? I = a - 0.5 : 0 >= I && (I = 0)) : "pyramid" === w.type && (I = ca = 0, w.reversed = w.reversed ? !1 : !0);
                    var G =
                        K + a / 2,
                        Z = K,
                        X = K + a,
                        S = w.reversed ? L : N,
                        Q = G - I / 2,
                        da = G + I / 2,
                        $ = w.reversed ? N + ca : L - ca,
                        Ca = w.reversed ? N : L;
                    a = [];
                    var G = [],
                        R = [],
                        F = [],
                        T = N,
                        ha, ga = ($ - S) / (Q - Z),
                        ka = -ga,
                        K = "area" === (w.valueRepresents ? w.valueRepresents : "height") ? b() : f();
                    if (-1 !== K) {
                        if (w.reversed)
                            for (F.push(T), I = K.length - 1; 0 < I; I--) T += K[I], F.push(T);
                        else
                            for (I = 0; I < K.length; I++) T += K[I], F.push(T);
                        if (w.reversed)
                            for (I = 0; I < K.length; I++) F[I] < $ ? (a.push(Q), G.push(da), ha = I) : (a.push((F[I] - S + ga * Z) / ga), G.push((F[I] - S + ka * X) / ka));
                        else
                            for (I = 0; I < K.length; I++) F[I] < $ ? (a.push((F[I] -
                                S + ga * Z) / ga), G.push((F[I] - S + ka * X) / ka), ha = I) : (a.push(Q), G.push(da));
                        for (I = 0; I < K.length - 1; I++) T = w.reversed ? B[B.length - 1 - I].color ? B[B.length - 1 - I].color : w._colorSet[(B.length - 1 - I) % w._colorSet.length] : B[I].color ? B[I].color : w._colorSet[I % w._colorSet.length], I === ha ? R.push({
                            x1: a[I],
                            y1: F[I],
                            x2: G[I],
                            y2: F[I],
                            x3: da,
                            y3: $,
                            x4: G[I + 1],
                            y4: F[I + 1],
                            x5: a[I + 1],
                            y5: F[I + 1],
                            x6: Q,
                            y6: $,
                            id: I,
                            height: F[I + 1] - F[I],
                            color: T
                        }) : R.push({
                            x1: a[I],
                            y1: F[I],
                            x2: G[I],
                            y2: F[I],
                            x3: G[I + 1],
                            y3: F[I + 1],
                            x4: a[I + 1],
                            y4: F[I + 1],
                            id: I,
                            height: F[I + 1] - F[I],
                            color: T
                        });
                        var ja = 2,
                            J = [],
                            oa = !1,
                            Y = [],
                            na = [],
                            K = !1;
                        a = a = 0;
                        Da(Y);
                        for (I = 0; I < B.length; I++) B[I].exploded && (K = !0, w.reversed ? Y.push(B.length - 1 - I) : Y.push(I));
                        W.clearRect(A.x1, A.y1, A.width, A.height);
                        W.fillStyle = x.backgroundColor;
                        W.fillRect(A.x1, A.y1, A.width, A.height);
                        if (O && w.visible && (c(), g(), h(), "inside" !== w.indexLabelPlacement)) {
                            d();
                            for (I = 0; I < B.length; I++) J[I].isDirty || (a = J[I].textBlock.x + J[I].width, a = (V - a) / 2, 0 == I && (C = a), C > a && (C = a));
                            for (I = 0; I < R.length; I++) R[I].x1 += C, R[I].x2 += C, R[I].x3 += C, R[I].x4 += C, R[I].x5 && (R[I].x5 +=
                                C, R[I].x6 += C), J[I].textBlock.x += C
                        }
                        for (I = 0; I < R.length; I++) C = R[I], r(W, C, w.fillOpacity), na.push(C.y1);
                        t(W);
                        O && w.visible && ("inside" === w.indexLabelPlacement || x.animationEnabled || n(W), x.animationEnabled || s());
                        if (!O)
                            for (I = 0; I < B.length; I++) C = w.dataPointIds[I], a = {
                                id: C,
                                objectType: "dataPoint",
                                dataPointIndex: I,
                                dataSeriesIndex: 0,
                                funnelSection: R[w.reversed ? B.length - 1 - I : I]
                            }, x._eventManager.objectMap[C] = a;
                        !x.animationEnabled && K ? u(x, -1, 0) : x.animationEnabled && !x.animatedRender && u(x, -1, 0);
                        this.funnelPyramidClickHandler =
                            function (a) {
                                var b = -1;
                                if (!oa && !x.isAnimating && (e(a.dataSeries.explodeOnClick) || a.dataSeries.explodeOnClick) && (b = w.reversed ? B.length - 1 - a.dataPointIndex : a.dataPointIndex, 0 <= b)) {
                                    a = b;
                                    if ("funnel" === w.type || "pyramid" === w.type) w.reversed ? B[B.length - 1 - a].exploded = B[B.length - 1 - a].exploded ? !1 : !0 : B[a].exploded = B[a].exploded ? !1 : !0;
                                    u(x, b, 500)
                                }
                            };
                        return {
                            source: W,
                            dest: this.plotArea.ctx,
                            animationCallback: function (a, b) {
                                y.fadeInAnimation(a, b);
                                1 <= a && (u(x, -1, 500), t(x.plotArea.ctx || x.ctx))
                            },
                            easingFunction: y.easing.easeInQuad,
                            animationBase: 0
                        }
                    }
                }
            }
        };
        t.prototype.requestAnimFrame = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
                window.setTimeout(a, 1E3 / 60)
            }
        }();
        t.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
        t.prototype.set = function (a, f, b) {
            b = "undefined" === typeof b ? !0 : b;
            "options" === a ? (this.options = f, b && this.render()) : t.base.set.call(this, a, f, b)
        };
        t.prototype.exportChart = function (a) {
            a = "undefined" === typeof a ? {} : a;
            var f = a.format ? a.format : "png",
                b = a.fileName ? a.fileName : this.exportFileName;
            if (a.toDataURL) return this.canvas.toDataURL("image/" + f);
            db(this.canvas, f, b)
        };
        t.prototype.print = function () {
            var a = this.exportChart({
                    toDataURL: !0
                }),
                f = document.createElement("iframe");
            f.setAttribute("class", "stockjs-chart-print-frame");
            f.setAttribute("style", "position:absolute; width:100%; border: 0px; margin: 0px 0px 0px 0px; padding 0px 0px 0px 0px;");
            f.style.height = this.height + "px";
            this._canvasJSContainer.appendChild(f);
            var b = this,
                c = f.contentWindow || f.contentDocument.document || f.contentDocument;
            c.document.open();
            c.document.write('<!DOCTYPE HTML>\n<html><body style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;"><img src="' + a + '"/><body/></html>');
            c.document.close();
            setTimeout(function () {
                c.focus();
                c.print();
                setTimeout(function () {
                        b._canvasJSContainer.removeChild(f)
                    },
                    1E3)
            }, 500)
        };
        t.prototype.getPercentAndTotal = function (a, f) {
            var b = null,
                c = null,
                h = b = null;
            if (0 <= a.type.indexOf("stacked")) c = 0, b = f.x.getTime ? f.x.getTime() : f.x, b in a.plotUnit.yTotals && (c = a.plotUnit.yTotals[b], b = a.plotUnit.yAbsTotals[b], h = isNaN(f.y) ? 0 : 0 === b ? 0 : 100 * (f.y / b));
            else if ("pie" === a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
                for (b = c = 0; b < a.dataPoints.length; b++) isNaN(a.dataPoints[b].y) || (c += a.dataPoints[b].y);
                h = isNaN(f.y) ? 0 : 100 * (f.y / c)
            }
            return {
                percent: h,
                total: c
            }
        };
        t.prototype.replaceKeywordsWithValue =
            function (a, f, b, c, h) {
                var g = this;
                h = "undefined" === typeof h ? 0 : h;
                if ((0 <= b.type.indexOf("stacked") || "pie" === b.type || "doughnut" === b.type || "funnel" === b.type || "pyramid" === b.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
                    var e = "#percent",
                        d = "#total",
                        r = this.getPercentAndTotal(b, f),
                        d = isNaN(r.total) ? d : r.total,
                        e = isNaN(r.percent) ? e : r.percent;
                    do {
                        r = "";
                        if (b.percentFormatString) r = b.percentFormatString;
                        else {
                            var r = "#,##0.",
                                m = Math.max(Math.ceil(Math.log(1 / Math.abs(e)) / Math.LN10), 2);
                            if (isNaN(m) || !isFinite(m)) m =
                                2;
                            for (var n = 0; n < m; n++) r += "#";
                            b.percentFormatString = r
                        }
                        a = a.replace("#percent", $(e, r, g._cultureInfo));
                        a = a.replace("#total", $(d, b.yValueFormatString ? b.yValueFormatString : "#,##0.########", g._cultureInfo))
                    } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))
                }
                return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function (a) {
                    if ('"' === a[0] && '"' === a[a.length - 1] || "'" === a[0] && "'" === a[a.length - 1]) return a.slice(1, a.length - 1);
                    a = Pa(a.slice(1, a.length - 1));
                    a = a.replace("#index", h);
                    var e = null;
                    try {
                        var k = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                        k && 0 < k.length && (e = Pa(k[2]), a = Pa(k[1]))
                    } catch (d) {}
                    k = null;
                    if ("color" === a) return "waterfall" === b.type ? f.color ? f.color : 0 < f.y ? b.risingColor : b.fallingColor : "error" === b.type ? b.color ? b.color : b._colorSet[e % b._colorSet.length] : f.color ? f.color : b.color ? b.color : b._colorSet[c % b._colorSet.length];
                    if (f.hasOwnProperty(a)) k = f;
                    else if (b.hasOwnProperty(a)) k = b;
                    else return "";
                    k = k[a];
                    null !== e && (k = k[e]);
                    if ("x" === a)
                        if ("dateTime" === b.axisX.valueType || "dateTime" === b.xValueType || f.x && f.x.getTime) {
                            if (!b.axisX.logarithmic) return Y(k,
                                f.xValueFormatString ? f.xValueFormatString : b.xValueFormatString ? b.xValueFormatString : b.xValueFormatString = g.axisX && g.axisX.autoValueFormatString ? g.axisX.autoValueFormatString : "DD MMM YY", g._cultureInfo)
                        } else return $(k, f.xValueFormatString ? f.xValueFormatString : b.xValueFormatString ? b.xValueFormatString : b.xValueFormatString = "#,##0.########", g._cultureInfo);
                    else return "y" === a ? $(k, f.yValueFormatString ? f.yValueFormatString : b.yValueFormatString ? b.yValueFormatString : b.yValueFormatString = "#,##0.########",
                        g._cultureInfo) : "z" === a ? $(k, f.zValueFormatString ? f.zValueFormatString : b.zValueFormatString ? b.zValueFormatString : b.zValueFormatString = "#,##0.########", g._cultureInfo) : k
                })
            };
        ga(F, Z);
        F.prototype.setLayout = function () {
            var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                f = a.layoutManager.getFreeSpace(),
                b = null,
                c = 0,
                h = 0,
                g = 0,
                d = 0,
                r = this.markerMargin = this.chart.options.legend && !e(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize;
            this.height = 0;
            var l = [],
                m = [];
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (this.orientation = "horizontal", b = this.verticalAlign, g = this.maxWidth = null !== this.maxWidth ? this.maxWidth : f.width, d = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * f.height) : "center" === this.verticalAlign && (this.orientation = "vertical", b = this.horizontalAlign, g = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * f.width, d = this.maxHeight = null !== this.maxHeight ? this.maxHeight : f.height);
            this.errorMarkerColor = [];
            for (var n = 0; n < this.dataSeries.length; n++) {
                var p =
                    this.dataSeries[n];
                if (p.dataPoints && p.dataPoints.length)
                    if ("pie" !== p.type && "doughnut" !== p.type && "funnel" !== p.type && "pyramid" !== p.type) {
                        var q = p.legendMarkerType = p.legendMarkerType ? p.legendMarkerType : "line" !== p.type && "stepLine" !== p.type && "spline" !== p.type && "scatter" !== p.type && "bubble" !== p.type || !p.markerType ? "error" === p.type && p._linkedSeries ? p._linkedSeries.legendMarkerType ? p._linkedSeries.legendMarkerType : G.getDefaultLegendMarker(p._linkedSeries.type) : G.getDefaultLegendMarker(p.type) : p.markerType,
                            k = p.legendText ? p.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                                chart: this.chart,
                                legend: this.options,
                                dataSeries: p,
                                dataPoint: null
                            }) : p.name,
                            s = p.legendMarkerColor = p.legendMarkerColor ? p.legendMarkerColor : p.markerColor ? p.markerColor : "error" === p.type ? e(p.whiskerColor) ? p._colorSet[0] : p.whiskerColor : p._colorSet[0],
                            y = p.markerSize || "line" !== p.type && "stepLine" !== p.type && "spline" !== p.type ? 0.75 * this.lineHeight : 0,
                            u = p.legendMarkerBorderColor ? p.legendMarkerBorderColor : p.markerBorderColor,
                            w = p.legendMarkerBorderThickness ?
                            p.legendMarkerBorderThickness : p.markerBorderThickness ? Math.max(1, Math.round(0.2 * y)) : 0;
                        "error" === p.type && this.errorMarkerColor.push(s);
                        k = this.chart.replaceKeywordsWithValue(k, p.dataPoints[0], p, n);
                        q = {
                            markerType: q,
                            markerColor: s,
                            text: k,
                            textBlock: null,
                            chartType: p.type,
                            markerSize: y,
                            lineColor: p._colorSet[0],
                            dataSeriesIndex: p.index,
                            dataPointIndex: null,
                            markerBorderColor: u,
                            markerBorderThickness: w
                        };
                        l.push(q)
                    } else
                        for (var v = 0; v < p.dataPoints.length; v++) {
                            var t = p.dataPoints[v],
                                q = t.legendMarkerType ? t.legendMarkerType :
                                p.legendMarkerType ? p.legendMarkerType : G.getDefaultLegendMarker(p.type),
                                k = t.legendText ? t.legendText : p.legendText ? p.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                                    chart: this.chart,
                                    legend: this.options,
                                    dataSeries: p,
                                    dataPoint: t
                                }) : t.name ? t.name : "DataPoint: " + (v + 1),
                                s = t.legendMarkerColor ? t.legendMarkerColor : p.legendMarkerColor ? p.legendMarkerColor : t.color ? t.color : p.color ? p.color : p._colorSet[v % p._colorSet.length],
                                y = 0.75 * this.lineHeight,
                                u = t.legendMarkerBorderColor ? t.legendMarkerBorderColor : p.legendMarkerBorderColor ?
                                p.legendMarkerBorderColor : t.markerBorderColor ? t.markerBorderColor : p.markerBorderColor,
                                w = t.legendMarkerBorderThickness ? t.legendMarkerBorderThickness : p.legendMarkerBorderThickness ? p.legendMarkerBorderThickness : t.markerBorderThickness || p.markerBorderThickness ? Math.max(1, Math.round(0.2 * y)) : 0,
                                k = this.chart.replaceKeywordsWithValue(k, t, p, v),
                                q = {
                                    markerType: q,
                                    markerColor: s,
                                    text: k,
                                    textBlock: null,
                                    chartType: p.type,
                                    markerSize: y,
                                    dataSeriesIndex: n,
                                    dataPointIndex: v,
                                    markerBorderColor: u,
                                    markerBorderThickness: w
                                };
                            (t.showInLegend ||
                                p.showInLegend && !1 !== t.showInLegend) && l.push(q)
                        }
            }!0 === this.reversed && l.reverse();
            if (0 < l.length) {
                p = null;
                s = k = t = v = 0;
                t = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, g) : this.itemMaxWidth = Math.min(this.itemWidth, g) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, g) : this.itemMaxWidth = g;
                y = 0 === y ? 0.75 * this.lineHeight : y;
                t -= y + r;
                for (n = 0; n < l.length; n++) {
                    q = l[n];
                    u = t;
                    if ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType) u -= 2 * 0.1 * this.lineHeight;
                    if (!(0 >=
                            d || "undefined" === typeof d || 0 >= u || "undefined" === typeof u)) {
                        if ("horizontal" === this.orientation) {
                            q.textBlock = new ma(this.ctx, {
                                x: 0,
                                y: 0,
                                maxWidth: u,
                                maxHeight: this.itemWrap ? d : this.lineHeight,
                                angle: 0,
                                text: q.text,
                                horizontalAlign: "left",
                                fontSize: this.fontSize,
                                fontFamily: this.fontFamily,
                                fontWeight: this.fontWeight,
                                fontColor: this.fontColor,
                                fontStyle: this.fontStyle,
                                textBaseline: "middle"
                            });
                            q.textBlock.measureText();
                            null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (y + r + ("line" === q.chartType || "spline" === q.chartType ||
                                "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                            if (!p || p.width + Math.round(q.textBlock.width + y + r + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)) > g) p = {
                                items: [],
                                width: 0
                            }, m.push(p), this.height += k, k = 0;
                            k = Math.max(k, q.textBlock.height)
                        } else q.textBlock = new ma(this.ctx, {
                            x: 0,
                            y: 0,
                            maxWidth: t,
                            maxHeight: !0 === this.itemWrap ? d : 1.5 * this.fontSize,
                            angle: 0,
                            text: q.text,
                            horizontalAlign: "left",
                            fontSize: this.fontSize,
                            fontFamily: this.fontFamily,
                            fontWeight: this.fontWeight,
                            fontColor: this.fontColor,
                            fontStyle: this.fontStyle,
                            textBaseline: "middle"
                        }), q.textBlock.measureText(), null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (y + r + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < d - this.lineHeight ? (p = {
                            items: [],
                            width: 0
                        }, m.push(p)) : (p = m[v], v = (v + 1) % m.length), this.height += q.textBlock.height;
                        q.textBlock.x = p.width;
                        q.textBlock.y = 0;
                        p.width += Math.round(q.textBlock.width + y + r + (0 === p.width ?
                            0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0));
                        p.items.push(q);
                        this.width = Math.max(p.width, this.width);
                        s = q.textBlock.width + (y + r + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0))
                    }
                }
                this.itemWidth = s;
                this.height = !1 === this.itemWrap ? m.length * this.lineHeight : this.height + k;
                this.height = Math.min(d, this.height);
                this.width = Math.min(g, this.width)
            }
            "top" === this.verticalAlign ? (h = "left" === this.horizontalAlign ?
                f.x1 : "right" === this.horizontalAlign ? f.x2 - this.width : f.x1 + f.width / 2 - this.width / 2, c = f.y1) : "center" === this.verticalAlign ? (h = "left" === this.horizontalAlign ? f.x1 : "right" === this.horizontalAlign ? f.x2 - this.width : f.x1 + f.width / 2 - this.width / 2, c = f.y1 + f.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (h = "left" === this.horizontalAlign ? f.x1 : "right" === this.horizontalAlign ? f.x2 - this.width : f.x1 + f.width / 2 - this.width / 2, c = f.y2 - this.height);
            this.items = l;
            for (n = 0; n < this.items.length; n++) q = l[n], q.id = ++this.chart._eventManager.lastObjectId,
                this.chart._eventManager.objectMap[q.id] = {
                    id: q.id,
                    objectType: "legendItem",
                    legendItemIndex: n,
                    dataSeriesIndex: q.dataSeriesIndex,
                    dataPointIndex: q.dataPointIndex
                };
            this.markerSize = y;
            this.rows = m;
            0 < l.length && a.layoutManager.registerSpace(b, {
                width: this.width + 2 + 2,
                height: this.height + 5 + 5
            });
            this.bounds = {
                x1: h,
                y1: c,
                x2: h + this.width,
                y2: c + this.height
            }
        };
        F.prototype.render = function () {
            var a = this.bounds.x1,
                f = this.bounds.y1,
                b = this.markerMargin,
                c = this.maxWidth,
                h = this.maxHeight,
                g = this.markerSize,
                e = this.rows;
            (0 < this.borderThickness &&
                this.borderColor || this.backgroundColor) && this.ctx.roundRect(a, f, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
            for (var d = 0, r = 0; r < e.length; r++) {
                for (var m = e[r], n = 0, p = 0; p < m.items.length; p++) {
                    var q = m.items[p],
                        k = q.textBlock.x + a + (0 === p ? 0.2 * g : this.horizontalSpacing),
                        s = f + d,
                        l = k;
                    this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.rect(a, f, c, Math.max(h - h % this.lineHeight, 0));
                    this.ctx.clip();
                    if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType) this.ctx.strokeStyle = q.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(k - 0.1 * this.lineHeight, s + this.lineHeight / 2), this.ctx.lineTo(k + 0.85 * this.lineHeight, s + this.lineHeight / 2), this.ctx.stroke(), l -= 0.1 * this.lineHeight;
                    if ("error" === q.chartType) {
                        this.ctx.strokeStyle = this.errorMarkerColor[0];
                        this.ctx.lineWidth = g / 8;
                        this.ctx.beginPath();
                        var y = k - 0.08 * this.lineHeight + 0.1 * this.lineHeight,
                            w = s + 0.15 * this.lineHeight,
                            v = 0.7 * this.lineHeight,
                            t = v + 0.02 * this.lineHeight;
                        this.ctx.moveTo(y, w);
                        this.ctx.lineTo(y + v, w);
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(y + v / 2, w);
                        this.ctx.lineTo(y + v / 2, w + t);
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(y, w + t);
                        this.ctx.lineTo(y + v, w + t);
                        this.ctx.stroke();
                        this.errorMarkerColor.shift()
                    }
                    u.drawMarker(k + g / 2, s + this.lineHeight / 2, this.ctx, q.markerType, "error" === q.chartType || "line" === q.chartType || "spline" === q.chartType ? q.markerSize / 2 : q.markerSize, q.markerColor,
                        q.markerBorderColor, q.markerBorderThickness);
                    q.textBlock.x = k + b + g;
                    if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType) q.textBlock.x += 0.1 * this.lineHeight;
                    q.textBlock.y = Math.round(s + this.lineHeight / 2);
                    q.textBlock.render(!0);
                    this.ctx.restore();
                    n = 0 < p ? Math.max(n, q.textBlock.height) : q.textBlock.height;
                    this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
                    k = U(q.id);
                    this.ghostCtx.fillStyle = k;
                    this.ghostCtx.beginPath();
                    this.ghostCtx.fillRect(l, q.textBlock.y - this.lineHeight /
                        2, q.textBlock.x + q.textBlock.width - l, q.textBlock.height);
                    q.x1 = this.chart._eventManager.objectMap[q.id].x1 = l;
                    q.y1 = this.chart._eventManager.objectMap[q.id].y1 = q.textBlock.y - this.lineHeight / 2;
                    q.x2 = this.chart._eventManager.objectMap[q.id].x2 = q.textBlock.x + q.textBlock.width;
                    q.y2 = this.chart._eventManager.objectMap[q.id].y2 = q.textBlock.y + q.textBlock.height - this.lineHeight / 2
                }
                d += n
            }
        };
        ga(G, Z);
        G.prototype.getDefaultAxisPlacement = function () {
            var a = this.type;
            if ("column" === a || "line" === a || "stepLine" === a || "spline" ===
                a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "normal";
            if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a) return "xySwapped";
            if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a) return "none";
            "error" !== a && window.console.log("Unknown Chart Type: " + a);
            return null
        };
        G.getDefaultLegendMarker = function (a) {
            if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "square";
            if ("line" === a || "stepLine" === a || "spline" ===
                a || "pie" === a || "doughnut" === a) return "circle";
            if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a) return "triangle";
            if ("error" === a) return "none";
            window.console.log("Unknown Chart Type: " + a);
            return null
        };
        G.prototype.getDataPointAtX = function (a, f) {
            if (!this.dataPoints || 0 === this.dataPoints.length) return null;
            var b = {
                    dataPoint: null,
                    distance: Infinity,
                    index: NaN
                },
                c = null,
                h = 0,
                g = 0,
                e = 1,
                d = Infinity,
                r = 0,
                m = 0,
                n = 0;
            "none" !== this.chart.plotInfo.axisPlacement && (this.axisX.logarithmic ?
                (n = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), n = 1 < n ? Math.min(Math.max((this.dataPoints.length - 1) / n * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (n = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, n = 0 < n ? Math.min(Math.max((this.dataPoints.length - 1) / n * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
            for (;;) {
                g = 0 < e ? n + h : n - h;
                if (0 <= g && g < this.dataPoints.length) {
                    var c = this.dataPoints[g],
                        p = this.axisX.logarithmic ? c.x > a ? c.x / a : a / c.x :
                        Math.abs(c.x - a);
                    p < b.distance && (b.dataPoint = c, b.distance = p, b.index = g);
                    c = p;
                    c <= d ? d = c : 0 < e ? r++ : m++;
                    if (1E3 < r && 1E3 < m) break
                } else if (0 > n - h && n + h >= this.dataPoints.length) break; - 1 === e ? (h++, e = 1) : e = -1
            }
            return f || (b.dataPoint.x.getTime ? b.dataPoint.x.getTime() : b.dataPoint.x) !== (a.getTime ? a.getTime() : a) ? f && null !== b.dataPoint ? b : null : b
        };
        G.prototype.getDataPointAtXY = function (a, f, b) {
            if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || f < this.chart.plotArea.y1 || f > this.chart.plotArea.y2) return null;
            b = b || !1;
            var c = [],
                h = 0,
                g = 0,
                e = 1,
                d = !1,
                r = Infinity,
                m = 0,
                n = 0,
                p = 0;
            if ("none" !== this.chart.plotInfo.axisPlacement)
                if (p = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({
                        x: a,
                        y: f
                    }), this.axisX.logarithmic) var q = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x),
                    p = 1 < q ? Math.min(Math.max((this.dataPoints.length - 1) / q * Math.log(p / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
                else q = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, p = 0 < q ? Math.min(Math.max((this.dataPoints.length -
                    1) / q * (p - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
            for (;;) {
                g = 0 < e ? p + h : p - h;
                if (0 <= g && g < this.dataPoints.length) {
                    var q = this.chart._eventManager.objectMap[this.dataPointIds[g]],
                        k = this.dataPoints[g],
                        s = null;
                    if (q) {
                        switch (this.type) {
                            case "column":
                            case "stackedColumn":
                            case "stackedColumn100":
                            case "bar":
                            case "stackedBar":
                            case "stackedBar100":
                            case "rangeColumn":
                            case "rangeBar":
                            case "waterfall":
                            case "error":
                                a >= q.x1 && (a <= q.x2 && f >= q.y1 && f <= q.y2) && (c.push({
                                    dataPoint: k,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(q.x1 -
                                        a), Math.abs(q.x2 - a), Math.abs(q.y1 - f), Math.abs(q.y2 - f))
                                }), d = !0);
                                break;
                            case "line":
                            case "stepLine":
                            case "spline":
                            case "area":
                            case "stepArea":
                            case "stackedArea":
                            case "stackedArea100":
                            case "splineArea":
                            case "scatter":
                                var l = qa("markerSize", k, this) || 4,
                                    y = b ? 20 : l,
                                    s = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - f, 2));
                                s <= y && c.push({
                                    dataPoint: k,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: s
                                });
                                q = Math.abs(q.x1 - a);
                                q <= r ? r = q : 0 < e ? m++ : n++;
                                s <= l / 2 && (d = !0);
                                break;
                            case "rangeArea":
                            case "rangeSplineArea":
                                l = qa("markerSize", k, this) ||
                                    4;
                                y = b ? 20 : l;
                                s = Math.min(Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - f, 2)), Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y2 - f, 2)));
                                s <= y && c.push({
                                    dataPoint: k,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: s
                                });
                                q = Math.abs(q.x1 - a);
                                q <= r ? r = q : 0 < e ? m++ : n++;
                                s <= l / 2 && (d = !0);
                                break;
                            case "bubble":
                                l = q.size;
                                s = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - f, 2));
                                s <= l / 2 && (c.push({
                                    dataPoint: k,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: s
                                }), d = !0);
                                break;
                            case "pie":
                            case "doughnut":
                                l = q.center;
                                y = "doughnut" === this.type ? q.percentInnerRadius * q.radius :
                                    0;
                                s = Math.sqrt(Math.pow(l.x - a, 2) + Math.pow(l.y - f, 2));
                                s < q.radius && s > y && (s = Math.atan2(f - l.y, a - l.x), 0 > s && (s += 2 * Math.PI), s = Number(((180 * (s / Math.PI) % 360 + 360) % 360).toFixed(12)), l = Number(((180 * (q.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), y = Number(((180 * (q.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === y && 1 < q.endAngle && (y = 360), l >= y && 0 !== k.y && (y += 360, s < l && (s += 360)), s > l && s < y && (c.push({
                                    dataPoint: k,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: 0
                                }), d = !0));
                                break;
                            case "funnel":
                            case "pyramid":
                                s = q.funnelSection;
                                f > s.y1 && f < s.y4 && (s.y6 ? f > s.y6 ? (g = s.x6 + (s.x5 - s.x6) / (s.y5 - s.y6) * (f - s.y6), s = s.x3 + (s.x4 - s.x3) / (s.y4 - s.y3) * (f - s.y3)) : (g = s.x1 + (s.x6 - s.x1) / (s.y6 - s.y1) * (f - s.y1), s = s.x2 + (s.x3 - s.x2) / (s.y3 - s.y2) * (f - s.y2)) : (g = s.x1 + (s.x4 - s.x1) / (s.y4 - s.y1) * (f - s.y1), s = s.x2 + (s.x3 - s.x2) / (s.y3 - s.y2) * (f - s.y2)), a > g && a < s && (c.push({
                                    dataPoint: k,
                                    dataPointIndex: q.dataPointIndex,
                                    dataSeries: this,
                                    distance: 0
                                }), d = !0));
                                break;
                            case "boxAndWhisker":
                                if (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && f >= q.y4 - q.borderThickness / 2 && f <= q.y1 + q.borderThickness /
                                    2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && f >= q.y1 && f <= q.y4) c.push({
                                    dataPoint: k,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - f), Math.abs(q.y3 - f))
                                }), d = !0;
                                break;
                            case "candlestick":
                                if (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && f >= q.y2 - q.borderThickness / 2 && f <= q.y3 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && f >= q.y1 && f <= q.y4) c.push({
                                    dataPoint: k,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(q.x1 - a),
                                        Math.abs(q.x2 - a), Math.abs(q.y2 - f), Math.abs(q.y3 - f))
                                }), d = !0;
                                break;
                            case "ohlc":
                                if (Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && f >= q.y2 && f <= q.y3 || a >= q.x1 && a <= (q.x2 + q.x1) / 2 && f >= q.y1 - q.borderThickness / 2 && f <= q.y1 + q.borderThickness / 2 || a >= (q.x1 + q.x2) / 2 && a <= q.x2 && f >= q.y4 - q.borderThickness / 2 && f <= q.y4 + q.borderThickness / 2) c.push({
                                    dataPoint: k,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - f), Math.abs(q.y3 - f))
                                }), d = !0
                        }
                        if (d || 1E3 < m && 1E3 < n) break
                    }
                } else if (0 > p - h && p + h >=
                    this.dataPoints.length) break; - 1 === e ? (h++, e = 1) : e = -1
            }
            a = null;
            for (f = 0; f < c.length; f++) a ? c[f].distance <= a.distance && (a = c[f]) : a = c[f];
            return a
        };
        G.prototype.getMarkerProperties = function (a, f, b, c) {
            var h = this.dataPoints;
            return {
                x: f,
                y: b,
                ctx: c,
                type: h[a].markerType ? h[a].markerType : this.markerType,
                size: h[a].markerSize ? h[a].markerSize : this.markerSize,
                color: h[a].markerColor ? h[a].markerColor : this.markerColor ? this.markerColor : h[a].color ? h[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length],
                borderColor: h[a].markerBorderColor ?
                    h[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null,
                borderThickness: h[a].markerBorderThickness ? h[a].markerBorderThickness : this.markerBorderThickness ? this.markerBorderThickness : null
            }
        };
        ga(A, Z);
        A.prototype.createExtraLabelsForLog = function (a) {
            a = (a || 0) + 1;
            if (!(5 < a)) {
                var f = this.logLabelValues[0] || this.intervalStartPosition;
                if (Math.log(this.range) / Math.log(f / this.viewportMinimum) < this.noTicks - 1) {
                    for (var b = A.getNiceNumber((f - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length),
                            3), !0), c = Math.ceil(this.viewportMinimum / b) * b; c < f; c += b) c < this.viewportMinimum || this.logLabelValues.push(c);
                    this.logLabelValues.sort(Xa);
                    this.createExtraLabelsForLog(a)
                }
            }
        };
        A.prototype.createLabels = function () {
            var a, f, b = 0,
                c = 0,
                h, g = 0,
                d = 0,
                c = 0,
                c = this.interval,
                r = 0,
                l, m = 0.6 * this.chart.height,
                n;
            a = !1;
            var p = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
                q = p.length ? e(this.scaleBreaks.firstBreakIndex) ? 0 : this.scaleBreaks.firstBreakIndex : 0;
            if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
                h =
                    this.viewportMaximum;
                if (this.labels) {
                    a = Math.ceil(c);
                    for (var c = Math.ceil(this.intervalStartPosition), k = !1, b = c; b < this.viewportMaximum; b += a)
                        if (this.labels[b]) k = !0;
                        else {
                            k = !1;
                            break
                        } k && (this.interval = a, this.intervalStartPosition = c)
                }
                if (this.logarithmic && !this.equidistantInterval)
                    for (this.logLabelValues || (this.logLabelValues = [], this.createExtraLabelsForLog()), c = 0, k = q; c < this.logLabelValues.length; c++)
                        if (b = this.logLabelValues[c], b < this.viewportMinimum) c++;
                        else {
                            for (; k < p.length && b > p[k].endValue; k++);
                            a = k < p.length &&
                                b >= p[k].startValue && b <= p[k].endValue;
                            n = b;
                            a || (a = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.options,
                                value: n,
                                label: this.labels[n] ? this.labels[n] : null
                            }) : "axisX" === this.type && this.labels[n] ? this.labels[n] : $(n, this.valueFormatString, this.chart._cultureInfo), a = new ma(this.ctx, {
                                x: 0,
                                y: 0,
                                maxWidth: g,
                                maxHeight: d,
                                angle: this.labelAngle,
                                text: this.prefix + a + this.suffix,
                                backgroundColor: this.labelBackgroundColor,
                                borderColor: this.labelBorderColor,
                                cornerRadius: this.labelCornerRadius,
                                textAlign: this.labelTextAlign,
                                fontSize: this.labelFontSize,
                                fontFamily: this.labelFontFamily,
                                fontWeight: this.labelFontWeight,
                                fontColor: this.labelFontColor,
                                fontStyle: this.labelFontStyle,
                                textBaseline: "middle",
                                borderThickness: 0
                            }), this._labels.push({
                                position: n,
                                textBlock: a,
                                effectiveHeight: null
                            }))
                        } k = q;
                for (b = this.intervalStartPosition; b <= h; b = parseFloat(1E-12 > this.interval ? this.logarithmic && this.equidistantInterval ? b * Math.pow(this.logarithmBase, this.interval) : b + this.interval : (this.logarithmic && this.equidistantInterval ? b * Math.pow(this.logarithmBase,
                        this.interval) : b + this.interval).toFixed(12))) {
                    for (; k < p.length && b > p[k].endValue; k++);
                    a = k < p.length && b >= p[k].startValue && b <= p[k].endValue;
                    n = b;
                    a || (a = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.options,
                        value: n,
                        label: this.labels[n] ? this.labels[n] : null
                    }) : "axisX" === this.type && this.labels[n] ? this.labels[n] : $(n, this.valueFormatString, this.chart._cultureInfo), a = new ma(this.ctx, {
                        x: 0,
                        y: 0,
                        maxWidth: g,
                        maxHeight: d,
                        angle: this.labelAngle,
                        text: this.prefix + a + this.suffix,
                        textAlign: this.labelTextAlign,
                        backgroundColor: this.labelBackgroundColor,
                        borderColor: this.labelBorderColor,
                        borderThickness: this.labelBorderThickness,
                        cornerRadius: this.labelCornerRadius,
                        fontSize: this.labelFontSize,
                        fontFamily: this.labelFontFamily,
                        fontWeight: this.labelFontWeight,
                        fontColor: this.labelFontColor,
                        fontStyle: this.labelFontStyle,
                        textBaseline: "middle"
                    }), this._labels.push({
                        position: n,
                        textBlock: a,
                        effectiveHeight: null
                    }))
                }
            } else
                for (this.intervalStartPosition = this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType,
                        this.interval), h = cb(new Date(this.viewportMaximum), this.interval, this.intervalType), k = q, b = this.intervalStartPosition; b < h; cb(b, c, this.intervalType)) {
                    for (a = b.getTime(); k < p.length && a > p[k].endValue; k++);
                    n = a;
                    a = k < p.length && a >= p[k].startValue && a <= p[k].endValue;
                    a || (a = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.options,
                            value: new Date(n),
                            label: this.labels[n] ? this.labels[n] : null
                        }) : "axisX" === this.type && this.labels[n] ? this.labels[n] : Y(n, this.valueFormatString, this.chart._cultureInfo), a =
                        new ma(this.ctx, {
                            x: 0,
                            y: 0,
                            maxWidth: g,
                            backgroundColor: this.labelBackgroundColor,
                            borderColor: this.labelBorderColor,
                            borderThickness: this.labelBorderThickness,
                            cornerRadius: this.labelCornerRadius,
                            maxHeight: d,
                            angle: this.labelAngle,
                            text: this.prefix + a + this.suffix,
                            textAlign: this.labelTextAlign,
                            fontSize: this.labelFontSize,
                            fontFamily: this.labelFontFamily,
                            fontWeight: this.labelFontWeight,
                            fontColor: this.labelFontColor,
                            fontStyle: this.labelFontStyle,
                            textBaseline: "middle"
                        }), this._labels.push({
                            position: n,
                            textBlock: a,
                            effectiveHeight: null,
                            breaksLabelType: void 0
                        }))
                }
            if ("bottom" === this._position || "top" === this._position) r = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) *
                S[this.intervalType + "Duration"] * this.interval, g = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth, this.chart.panEnabled || (d = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
            else if ("left" === this._position || "right" === this._position) r = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position /
                    this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * S[this.intervalType + "Duration"] * this.interval, this.chart.panEnabled || (g = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth), d = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >>
                0 : 1.5 * this.labelFontSize;
            for (c = 0; c < this._labels.length; c++) {
                a = this._labels[c].textBlock;
                a.maxWidth = g;
                a.maxHeight = d;
                var s = a.measureText();
                l = s.height
            }
            h = [];
            q = p = 0;
            if (this.labelAutoFit || this.options.labelAutoFit)
                if (e(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position || "top" === this._position)
                    if (g = 0.9 * r >> 0, q = 0, !this.chart.panEnabled && 1 <=
                        this._labels.length) {
                        this.sessionVariables.labelFontSize = this.labelFontSize;
                        this.sessionVariables.labelMaxWidth = g;
                        this.sessionVariables.labelMaxHeight = d;
                        this.sessionVariables.labelAngle = this.labelAngle;
                        this.sessionVariables.labelWrap = this.labelWrap;
                        for (b = 0; b < this._labels.length; b++)
                            if (!this._labels[b].breaksLabelType) {
                                a = this._labels[b].textBlock;
                                for (var y, k = a.text.split(" "), c = 0; c < k.length; c++) n = k[c], this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, n = this.ctx.measureText(n),
                                    n.width > q && (y = b, q = n.width)
                            } b = 0;
                        for (b = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; b < this._labels.length; b++)
                            if (!this._labels[b].breaksLabelType) {
                                a = this._labels[b].textBlock;
                                s = a.measureText();
                                for (k = b + 1; k < this._labels.length; k++)
                                    if (!this._labels[k].breaksLabelType) {
                                        f = this._labels[k].textBlock;
                                        f = f.measureText();
                                        break
                                    } h.push(a.height);
                                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, h);
                                Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                                Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                                c = g * Math.sin(Math.PI /
                                    180 * Math.abs(this.labelAngle)) + (d - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                                if (e(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle)
                                    if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d : Math.min((c - g * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), c), n = (m - (l + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI / 180 * Math.abs(-25)), !e(this.options.labelWrap)) this.labelWrap ? e(this.options.labelMaxWidth) ?
                                        (this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, q), n), this.sessionVariables.labelWrap = this.labelWrap, f && s.width + f.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > g ? -25 : this.sessionVariables.labelAngle) : e(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight =
                                            d, this.sessionVariables.labelMaxWidth = g, f && s.width + f.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > g ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelWrap = this.labelWrap);
                                    else {
                                        if (e(this.options.labelWrap))
                                            if (!e(this.options.labelMaxWidth)) this.options.labelMaxWidth < g ?
                                                (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = c) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = d);
                                            else if (!e(f))
                                            if (c = s.width + f.width >> 0, k = this.labelFontSize, q < g) c - 2 * g > p && (p = c - 2 * g, c >= 2 * g && c < 2.2 * g ? (this.sessionVariables.labelMaxWidth = g, e(this.options.labelFontSize) && 12 < k && (k = Math.floor(12 / 13 * k), a.measureText()), this.sessionVariables.labelFontSize = e(this.options.labelFontSize) ?
                                                k : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : c >= 2.2 * g && c < 2.8 * g ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelFontSize = k) : c >= 2.8 * g && c < 3.2 * g ? (this.sessionVariables.labelMaxWidth = Math.max(g, q), this.sessionVariables.labelWrap = !0, e(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = e(this.options.labelFontSize) ?
                                                k : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : c >= 3.2 * g && c < 3.6 * g ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelFontSize = this.labelFontSize) : c > 3.6 * g && c < 5 * g ? (e(this.options.labelFontSize) && 12 < k && (k = Math.floor(12 / 13 * k), a.measureText()), this.sessionVariables.labelFontSize = e(this.options.labelFontSize) ? k : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n) : c > 5 * g && (this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelFontSize = k, this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelAngle = this.labelAngle));
                                            else if (y === b && (0 === y && q + this._labels[y + 1].textBlock.measureText().width - 2 * g > p || y === this._labels.length - 1 && q + this._labels[y - 1].textBlock.measureText().width - 2 * g > p || 0 < y && y < this._labels.length - 1 && q + this._labels[y + 1].textBlock.measureText().width - 2 * g > p &&
                                                q + this._labels[y - 1].textBlock.measureText().width - 2 * g > p)) p = 0 === y ? q + this._labels[y + 1].textBlock.measureText().width - 2 * g : q + this._labels[y - 1].textBlock.measureText().width - 2 * g, this.sessionVariables.labelFontSize = e(this.options.labelFontSize) ? k : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n;
                                        else if (0 === p)
                                            for (this.sessionVariables.labelFontSize = e(this.options.labelFontSize) ? k : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, q), n), s = a.measureText(), c < this._labels.length - 1 && (k = c + 1, f = this._labels[k].textBlock, f.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, q), n), f = f.measureText(), s.width + f.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25))
                                    }
                                else(this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d : Math.min((c - g * Math.cos(Math.PI /
                                    180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), c), n = 0 != this.labelAngle ? (m - (l + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : g, this.sessionVariables.labelMaxHeight = d = this.labelWrap ? (m - n * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, e(this.options.labelWrap)) ? e(this.options.labelWrap) && (this.labelWrap && !e(this.options.labelMaxWidth) ?
                                    (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : n, this.sessionVariables.labelMaxHeight = d) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelMaxHeight = c < 0.9 * r ? 0.9 * r : c, this.sessionVariables.labelWrap = this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ?
                                    this.options.labelMaxWidth : n) : (e(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : n, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = d)
                            } for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap,
                            a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
                    } else
                        for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = e(this.options.labelMaxWidth) ? e(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = g : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = e(this.options.labelFontSize) ? e(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize :
                            this.options.labelFontSize, a.angle = this.labelAngle = e(this.options.labelAngle) ? e(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = e(this.options.labelWrap) ? e(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = e(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = d : this.sessionVariables.labelMaxHeight,
                            a.measureText();
            else if ("left" === this._position || "right" === this._position)
                if (g = e(this.options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth, d = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
                    this.sessionVariables.labelFontSize = this.labelFontSize;
                    this.sessionVariables.labelMaxWidth = g;
                    this.sessionVariables.labelMaxHeight = d;
                    this.sessionVariables.labelAngle = e(this.sessionVariables.labelAngle) ?
                        0 : this.sessionVariables.labelAngle;
                    this.sessionVariables.labelWrap = this.labelWrap;
                    for (b = 0; b < this._labels.length; b++)
                        if (!this._labels[b].breaksLabelType) {
                            a = this._labels[b].textBlock;
                            s = a.measureText();
                            for (k = b + 1; k < this._labels.length; k++)
                                if (!this._labels[k].breaksLabelType) {
                                    f = this._labels[k].textBlock;
                                    f = f.measureText();
                                    break
                                } h.push(a.height);
                            this.sessionVariables.labelMaxHeight = Math.max.apply(Math, h);
                            c = g * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (d - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                            Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                            Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                            e(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle ? e(this.options.labelWrap) ? e(this.options.labelWrap) && (e(this.options.labelMaxWidth) ? e(f) || (r = s.height + f.height >> 0, r - 2 * d > q && (q = r - 2 * d, r >= 2 * d && r < 2.4 * d ? (e(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelFontSize =
                                e(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : r >= 2.4 * d && r < 2.8 * d ? (this.sessionVariables.labelMaxHeight = c, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = !0) : r >= 2.8 * d && r < 3.2 * d ? (this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelWrap = !0, e(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = e(this.options.labelFontSize) ?
                                this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelAngle = e(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : r >= 3.2 * d && r < 3.6 * d ? (this.sessionVariables.labelMaxHeight = c, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelFontSize = this.labelFontSize) : r > 3.6 * d && r < 10 * d ? (e(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = e(this.options.labelFontSize) ?
                                this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelAngle = e(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : r > 10 * d && r < 50 * d && (e(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = e(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxHeight =
                                d, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelAngle = e(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ?
                                this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : g, this.sessionVariables.labelMaxHeight = d) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? g : Math.min((c - d * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), d), e(this.options.labelWrap)) ? e(this.options.labelWrap) && (this.labelWrap && !e(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth :
                                this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = c) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : g, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d : c, e(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d : c, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth =
                                g) : (this.sessionVariables.labelMaxHeight = d, e(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap)
                        } for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap =
                        this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
                } else
                    for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = e(this.options.labelMaxWidth) ? e(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = g : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = e(this.options.labelFontSize) ? e(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize =
                        this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = e(this.options.labelAngle) ? e(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = e(this.options.labelWrap) ? e(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = e(this.sessionVariables.labelMaxHeight) ?
                        this.sessionVariables.labelMaxHeight = d : this.sessionVariables.labelMaxHeight, a.measureText();
            for (b = 0; b < this.stripLines.length; b++) {
                var g = this.stripLines[b],
                    u;
                if ("outside" === g.labelPlacement) {
                    d = this.sessionVariables.labelMaxWidth;
                    if ("bottom" === this._position || "top" === this._position) e(g.options.labelWrap) && !e(this.sessionVariables.stripLineLabelMaxHeight) ? u = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = u = g.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
                    if ("left" === this._position || "right" === this._position) e(g.options.labelWrap) && !e(this.sessionVariables.stripLineLabelMaxHeight) ? u = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = u = g.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * this.labelFontSize;
                    e(g.labelBackgroundColor) && (g.labelBackgroundColor = "#EEEEEE")
                } else d = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, u = e(g.options.labelWrap) || g.labelWrap ? "bottom" === this._position ||
                    "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, e(g.labelBackgroundColor) && (e(g.startValue) && 0 !== g.startValue ? g.labelBackgroundColor = v ? "transparent" : null : g.labelBackgroundColor = "#EEEEEE");
                a = new ma(this.ctx, {
                    x: 0,
                    y: 0,
                    backgroundColor: g.labelBackgroundColor,
                    borderColor: g.labelBorderColor,
                    borderThickness: g.labelBorderThickness,
                    cornerRadius: g.labelCornerRadius,
                    maxWidth: g.options.labelMaxWidth ? g.options.labelMaxWidth : d,
                    maxHeight: u,
                    angle: this.labelAngle,
                    text: g.labelFormatter ?
                        g.labelFormatter({
                            chart: this.chart,
                            axis: this,
                            stripLine: g
                        }) : g.label,
                    textAlign: this.labelTextAlign,
                    fontSize: "outside" === g.labelPlacement ? g.options.labelFontSize ? g.labelFontSize : this.labelFontSize : g.labelFontSize,
                    fontFamily: "outside" === g.labelPlacement ? g.options.labelFontFamily ? g.labelFontFamily : this.labelFontFamily : g.labelFontFamily,
                    fontWeight: "outside" === g.labelPlacement ? g.options.labelFontWeight ? g.labelFontWeight : this.labelFontWeight : g.labelFontWeight,
                    fontColor: g.labelFontColor || g.color,
                    fontStyle: "outside" ===
                        g.labelPlacement ? g.options.labelFontStyle ? g.labelFontStyle : this.fontWeight : g.labelFontStyle,
                    textBaseline: "middle"
                });
                this._stripLineLabels.push({
                    position: g.value,
                    textBlock: a,
                    effectiveHeight: null,
                    stripLine: g
                })
            }
        };
        A.prototype.createLabelsAndCalculateWidth = function () {
            var a = 0,
                f = 0;
            this._labels = [];
            this._stripLineLabels = [];
            var b = this.chart.isNavigator ? 0 : 5;
            if ("left" === this._position || "right" === this._position) {
                this.createLabels();
                if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
                    for (f =
                        0; f < this._labels.length; f++) {
                        var c = this._labels[f].textBlock,
                            h = c.measureText(),
                            g = 0,
                            g = 0 === this.labelAngle ? h.width : h.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (h.height - c.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                        a < g && (a = g);
                        this._labels[f].effectiveWidth = g
                    }
                for (f = 0; f < this._stripLineLabels.length; f++) "outside" === this._stripLineLabels[f].stripLine.labelPlacement && (this._stripLineLabels[f].stripLine.value >= this.viewportMinimum && this._stripLineLabels[f].stripLine.value <= this.viewportMaximum) &&
                    (c = this._stripLineLabels[f].textBlock, h = c.measureText(), g = 0 === this.labelAngle ? h.width : h.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (h.height - c.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), a < g && (a = g), this._stripLineLabels[f].effectiveWidth = g)
            }
            return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 : this.tickLength) + b
        };
        A.prototype.createLabelsAndCalculateHeight = function () {
            var a = 0;
            this._labels = [];
            this._stripLineLabels = [];
            var f, b = 0,
                c = this.chart.isNavigator ? 0 : 5;
            if ("bottom" === this._position || "top" === this._position) {
                this.createLabels();
                if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
                    for (b = 0; b < this._labels.length; b++) {
                        f = this._labels[b].textBlock;
                        var h = f.measureText(),
                            g = 0,
                            g = 0 === this.labelAngle ? h.height : h.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (h.height - f.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                        a < g && (a = g);
                        this._labels[b].effectiveHeight = g
                    }
                for (b = 0; b < this._stripLineLabels.length; b++) "outside" ===
                    this._stripLineLabels[b].stripLine.labelPlacement && (this._stripLineLabels[b].stripLine.value >= this.viewportMinimum && this._stripLineLabels[b].stripLine.value <= this.viewportMaximum) && (f = this._stripLineLabels[b].textBlock, h = f.measureText(), g = 0 === this.labelAngle ? h.height : h.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (h.height - f.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), a < g && (a = g), this._stripLineLabels[b].effectiveHeight = g)
            }
            return (this.title ? this._titleTextBlock.measureText().height +
                2 : 0) + a + ("inside" === this.tickPlacement ? 0 : this.tickLength) + c
        };
        A.setLayout = function (a, f, b, c, h, g) {
            var d, r, l, m, n = a[0] ? a[0].chart : f[0].chart,
                p = n.isNavigator ? 0 : 10,
                q = n._axes;
            if (a && 0 < a.length)
                for (var k = 0; k < a.length; k++) a[k] && a[k].calculateAxisParameters();
            if (f && 0 < f.length)
                for (k = 0; k < f.length; k++) f[k].calculateAxisParameters();
            if (b && 0 < b.length)
                for (k = 0; k < b.length; k++) b[k].calculateAxisParameters();
            if (c && 0 < c.length)
                for (k = 0; k < c.length; k++) c[k].calculateAxisParameters();
            for (k = 0; k < q.length; k++)
                if (q[k] && q[k].scaleBreaks &&
                    q[k].scaleBreaks._appliedBreaks.length)
                    for (var s = q[k].scaleBreaks._appliedBreaks, y = 0; y < s.length && !(s[y].startValue > q[k].viewportMaximum); y++) s[y].endValue < q[k].viewportMinimum || (e(q[k].scaleBreaks.firstBreakIndex) && (q[k].scaleBreaks.firstBreakIndex = y), s[y].startValue >= q[k].viewPortMinimum && (q[k].scaleBreaks.lastBreakIndex = y));
            for (var u = y = 0, w = 0, v = 0, t = 0, x = 0, A = 0, z, G, F = r = 0, H, K, V, s = H = K = V = !1, k = 0; k < q.length; k++) q[k] && q[k].title && (q[k]._titleTextBlock = new ma(q[k].ctx, {
                text: q[k].title,
                horizontalAlign: "center",
                fontSize: q[k].titleFontSize,
                fontFamily: q[k].titleFontFamily,
                fontWeight: q[k].titleFontWeight,
                fontColor: q[k].titleFontColor,
                fontStyle: q[k].titleFontStyle,
                borderColor: q[k].titleBorderColor,
                borderThickness: q[k].titleBorderThickness,
                backgroundColor: q[k].titleBackgroundColor,
                cornerRadius: q[k].titleCornerRadius,
                textBaseline: "top"
            }));
            for (k = 0; k < q.length; k++)
                if (q[k].title) switch (q[k]._position) {
                    case "left":
                        q[k]._titleTextBlock.maxWidth = q[k].titleMaxWidth || g.height;
                        q[k]._titleTextBlock.maxHeight = q[k].titleWrap ?
                            0.8 * g.width : 1.5 * q[k].titleFontSize;
                        q[k]._titleTextBlock.angle = -90;
                        break;
                    case "right":
                        q[k]._titleTextBlock.maxWidth = q[k].titleMaxWidth || g.height;
                        q[k]._titleTextBlock.maxHeight = q[k].titleWrap ? 0.8 * g.width : 1.5 * q[k].titleFontSize;
                        q[k]._titleTextBlock.angle = 90;
                        break;
                    default:
                        q[k]._titleTextBlock.maxWidth = q[k].titleMaxWidth || g.width, q[k]._titleTextBlock.maxHeight = q[k].titleWrap ? 0.8 * g.height : 1.5 * q[k].titleFontSize, q[k]._titleTextBlock.angle = 0
                }
            if ("normal" === h) {
                for (var v = [], t = [], x = [], A = [], N = [], L = [], M = [], P = []; 4 >
                    y;) {
                    var I = 0,
                        W = 0,
                        S = 0,
                        U = 0,
                        Z = h = 0,
                        Q = 0,
                        X = 0,
                        T = 0,
                        Y = 0,
                        R = 0,
                        $ = 0;
                    if (b && 0 < b.length)
                        for (x = [], k = R = 0; k < b.length; k++) x.push(Math.ceil(b[k] ? b[k].createLabelsAndCalculateWidth() : 0)), R += x[k], Q += b[k] && !n.isNavigator ? b[k].margin : 0;
                    else x.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
                    M.push(x);
                    if (c && 0 < c.length)
                        for (A = [], k = $ = 0; k < c.length; k++) A.push(Math.ceil(c[k] ? c[k].createLabelsAndCalculateWidth() : 0)), $ += A[k], X += c[k] ? c[k].margin : 0;
                    else A.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
                    P.push(A);
                    d = Math.round(g.x1 + R + Q);
                    l = Math.round(g.x2 - $ - X > n.width - p ? n.width - p : g.x2 - $ - X);
                    if (a && 0 < a.length)
                        for (v = [], k = T = 0; k < a.length; k++) a[k] && (a[k].lineCoordinates = {}), a[k].lineCoordinates.width = Math.abs(l - d), a[k].title && (a[k]._titleTextBlock.maxWidth = 0 < a[k].titleMaxWidth && a[k].titleMaxWidth < a[k].lineCoordinates.width ? a[k].titleMaxWidth : a[k].lineCoordinates.width), v.push(Math.ceil(a[k] ? a[k].createLabelsAndCalculateHeight() : 0)), T += v[k], h += a[k] && !n.isNavigator ? a[k].margin : 0;
                    else v.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() :
                        0));
                    N.push(v);
                    if (f && 0 < f.length)
                        for (t = [], k = Y = 0; k < f.length; k++) f[k] && (f[k].lineCoordinates = {}), f[k].lineCoordinates.width = Math.abs(l - d), f[k].title && (f[k]._titleTextBlock.maxWidth = 0 < f[k].titleMaxWidth && f[k].titleMaxWidth < f[k].lineCoordinates.width ? f[k].titleMaxWidth : f[k].lineCoordinates.width), t.push(Math.ceil(f[k] ? f[k].createLabelsAndCalculateHeight() : 0)), Y += t[k], Z += f[k] && !n.isNavigator ? f[k].margin : 0;
                    else t.push(Math.ceil(f[0] ? f[0].createLabelsAndCalculateHeight() : 0));
                    L.push(t);
                    if (a && 0 < a.length)
                        for (k =
                            0; k < a.length; k++) a[k] && (a[k].lineCoordinates.x1 = d, l = Math.round(g.x2 - $ - X > n.width - p ? n.width - p : g.x2 - $ - X), a[k]._labels && 1 < a[k]._labels.length && (r = m = 0, m = a[k]._labels[1], r = "dateTime" === a[k].valueType ? a[k]._labels[a[k]._labels.length - 2] : a[k]._labels[a[k]._labels.length - 1], u = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - r.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)), w = r.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(r.textBlock.angle)) + (r.textBlock.height -
                                r.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(r.textBlock.angle))), !a[k] || (!a[k].labelAutoFit || e(z) || e(G) || n.isNavigator || n.stockChart) || (r = 0, 0 < a[k].labelAngle ? G + w > l && (r += 0 < a[k].labelAngle ? G + w - l - $ : 0) : 0 > a[k].labelAngle ? z - u < d && z - u < a[k].viewportMinimum && (F = d - (Q + a[k].tickLength + x + z - u + a[k].labelFontSize / 2)) : 0 === a[k].labelAngle && (G + w > l && (r = G + w / 2 - l - $), z - u < d && z - u < a[k].viewportMinimum && (F = d - Q - a[k].tickLength - x - z + u / 2)), a[k].viewportMaximum === a[k].maximum && a[k].viewportMinimum === a[k].minimum && 0 < a[k].labelAngle &&
                                0 < r ? l -= r : a[k].viewportMaximum === a[k].maximum && a[k].viewportMinimum === a[k].minimum && 0 > a[k].labelAngle && 0 < F ? d += F : a[k].viewportMaximum === a[k].maximum && a[k].viewportMinimum === a[k].minimum && 0 === a[k].labelAngle && (0 < F && (d += F), 0 < r && (l -= r))), n.panEnabled ? T = e(n.sessionVariables.axisX.height) ? n.sessionVariables.axisX.height = T : n.sessionVariables.axisX.height : n.sessionVariables.axisX.height = T, r = Math.round(g.y2 - T - h + I), m = Math.round(g.y2), a[k].lineCoordinates.x2 = l, a[k].lineCoordinates.width = l - d, a[k].lineCoordinates.y1 =
                            r, a[k].lineCoordinates.y2 = r + a[k].lineThickness / 2, "inside" === a[k].labelPlacement && 0 < k && (a[k].lineCoordinates.y1 = a[k].lineCoordinates.y1 + v[k] - (a[k]._titleTextBlock ? a[k]._titleTextBlock.height : 0) - ("inside" === a[k].tickPlacement ? a[k].tickLength : 0), a[k].lineCoordinates.y2 = a[k].lineCoordinates.y1 + a[k].lineThickness / 2), a[k].bounds = {
                                x1: d,
                                y1: r,
                                x2: l,
                                y2: m - (T + h - v[k] - I),
                                width: l - d,
                                height: m - r
                            }), I += v[k] + a[k].margin;
                    if (f && 0 < f.length)
                        for (k = 0; k < f.length; k++) f[k].lineCoordinates.x1 = Math.round(g.x1 + R + Q), f[k].lineCoordinates.x2 =
                            Math.round(g.x2 - $ - X > n.width - p ? n.width - p : g.x2 - $ - X), f[k].lineCoordinates.width = Math.abs(l - d), f[k]._labels && 1 < f[k]._labels.length && (m = f[k]._labels[1], r = "dateTime" === f[k].valueType ? f[k]._labels[f[k]._labels.length - 2] : f[k]._labels[f[k]._labels.length - 1], u = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - r.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)), w = r.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(r.textBlock.angle)) + (r.textBlock.height -
                                r.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(r.textBlock.angle))), n.panEnabled ? Y = e(n.sessionVariables.axisX2.height) ? n.sessionVariables.axisX2.height = Y : n.sessionVariables.axisX2.height : n.sessionVariables.axisX2.height = Y, r = Math.round(g.y1), m = Math.round(g.y2 + f[k].margin), f[k].lineCoordinates.y1 = r + Y + Z - W, f[k].lineCoordinates.y2 = r, "inside" === f[k].labelPlacement && 0 < k && (f[k].lineCoordinates.y1 = f[k - 1].bounds.y1 - t[k] + (f[k]._titleTextBlock ? f[k]._titleTextBlock.height : 0)), f[k].bounds = {
                                x1: d,
                                y1: r + (Y +
                                    Z - t[k] - W),
                                x2: l,
                                y2: m,
                                width: l - d,
                                height: m - r
                            }, W += t[k] + f[k].margin;
                    if (b && 0 < b.length)
                        for (k = 0; k < b.length; k++) Q = n.isNavigator ? 0 : 10, b[k] && (d = Math.round(a[0] ? a[0].lineCoordinates.x1 : f[0].lineCoordinates.x1), Q = b[k]._labels && 0 < b[k]._labels.length ? b[k]._labels[b[k]._labels.length - 1].textBlock.height / 2 : p, r = Math.round(g.y1 + Y + Z < Math.max(Q, p) ? Math.max(Q, p) : g.y1 + Y + Z), l = Math.round(a[0] ? a[0].lineCoordinates.x1 : f[0].lineCoordinates.x1), Q = 0 < a.length ? 0 : b[k]._labels && 0 < b[k]._labels.length ? b[k]._labels[0].textBlock.height /
                            2 : p, m = Math.round(g.y2 - T - h - Q), b[k].lineCoordinates = {
                                x1: d - S,
                                y1: r,
                                x2: l - S,
                                y2: m,
                                height: Math.abs(m - r)
                            }, "inside" === b[k].labelPlacement && 0 < k && (b[k].lineCoordinates.x1 = b[k].lineCoordinates.x1 - (x[k] - b[k]._titleTextBlock ? b[k]._titleTextBlock.height : 0) + ("outside" === b[k].tickPlacement ? b[k].tickLength : 0), b[k].lineCoordinates.x2 = b[k].lineCoordinates.x1 + b[k].lineThickness / 2), b[k].bounds = {
                                x1: d - (x[k] + S),
                                y1: r,
                                x2: l,
                                y2: m,
                                width: l - d,
                                height: m - r
                            }, b[k].title && (b[k]._titleTextBlock.maxWidth = 0 < b[k].titleMaxWidth && b[k].titleMaxWidth <
                                b[k].lineCoordinates.height ? b[k].titleMaxWidth : b[k].lineCoordinates.height), S += x[k] + b[k].margin);
                    if (c && 0 < c.length)
                        for (k = 0; k < c.length; k++) c[k] && (d = Math.round(a[0] ? a[0].lineCoordinates.x2 : f[0].lineCoordinates.x2), l = Math.round(d), Q = c[k]._labels && 0 < c[k]._labels.length ? c[k]._labels[c[k]._labels.length - 1].textBlock.height / 2 : 0, r = Math.round(g.y1 + Y + Z < Math.max(Q, p) ? Math.max(Q, p) : g.y1 + Y + Z), Q = 0 < a.length ? 0 : c[k]._labels && 0 < c[k]._labels.length ? c[k]._labels[0].textBlock.height / 2 : 0, m = Math.round(g.y2 - (T + h + Q)), c[k].lineCoordinates = {
                            x1: d + U,
                            y1: r,
                            x2: d + U,
                            y2: m,
                            height: Math.abs(m - r)
                        }, "inside" === c[k].labelPlacement && 0 < k && (c[k].lineCoordinates.x1 = c[k].lineCoordinates.x1 + (A[k] - c[k]._titleTextBlock ? c[k]._titleTextBlock.height : 0) - ("outside" === c[k].tickPlacement ? c[k].tickLength : 0) - 2, c[k].lineCoordinates.x2 = c[k].lineCoordinates.x1 + c[k].lineThickness / 2), c[k].bounds = {
                            x1: d,
                            y1: r,
                            x2: l + (A[k] + U),
                            y2: m,
                            width: l - d,
                            height: m - r
                        }, c[k].title && (c[k]._titleTextBlock.maxWidth = 0 < c[k].titleMaxWidth && c[k].titleMaxWidth < c[k].lineCoordinates.height ? c[k].titleMaxWidth :
                            c[k].lineCoordinates.height), U += A[k] + c[k].margin);
                    if (a && 0 < a.length)
                        for (k = 0; k < a.length; k++) a[k] && (a[k].calculateValueToPixelConversionParameters(), a[k].calculateBreaksSizeInValues(), a[k]._labels && 1 < a[k]._labels.length && (z = (a[k].logarithmic ? Math.log(a[k]._labels[1].position / a[k].viewportMinimum) / a[k].conversionParameters.lnLogarithmBase : a[k]._labels[1].position - a[k].viewportMinimum) * Math.abs(a[k].conversionParameters.pixelPerUnit) + a[k].lineCoordinates.x1, d = a[k]._labels[a[k]._labels.length - ("dateTime" ===
                            a[k].valueType ? 2 : 1)].position, d = a[k].getApparentDifference(a[k].viewportMinimum, d), G = a[k].logarithmic ? (1 < d ? Math.log(d) / a[k].conversionParameters.lnLogarithmBase * Math.abs(a[k].conversionParameters.pixelPerUnit) : 0) + a[k].lineCoordinates.x1 : (0 < d ? d * Math.abs(a[k].conversionParameters.pixelPerUnit) : 0) + a[k].lineCoordinates.x1));
                    if (f && 0 < f.length)
                        for (k = 0; k < f.length; k++) f[k].calculateValueToPixelConversionParameters(), f[k].calculateBreaksSizeInValues(), f[k]._labels && 1 < f[k]._labels.length && (z = (f[k].logarithmic ?
                                Math.log(f[k]._labels[1].position / f[k].viewportMinimum) / f[k].conversionParameters.lnLogarithmBase : f[k]._labels[1].position - f[k].viewportMinimum) * Math.abs(f[k].conversionParameters.pixelPerUnit) + f[k].lineCoordinates.x1, d = f[k]._labels[f[k]._labels.length - ("dateTime" === f[k].valueType ? 2 : 1)].position, d = f[k].getApparentDifference(f[k].viewportMinimum, d), G = f[k].logarithmic ? (1 < d ? Math.log(d) / f[k].conversionParameters.lnLogarithmBase * Math.abs(f[k].conversionParameters.pixelPerUnit) : 0) + f[k].lineCoordinates.x1 :
                            (0 < d ? d * Math.abs(f[k].conversionParameters.pixelPerUnit) : 0) + f[k].lineCoordinates.x1);
                    for (k = 0; k < q.length; k++) "axisY" === q[k].type && (q[k].calculateValueToPixelConversionParameters(), q[k].calculateBreaksSizeInValues());
                    if (0 < y) {
                        if (a && 0 < a.length)
                            for (k = 0; k < a.length; k++) s = N[y - 1][k] === N[y][k] ? !0 : !1;
                        else s = !0;
                        if (f && 0 < f.length)
                            for (k = 0; k < f.length; k++) H = L[y - 1][k] === L[y][k] ? !0 : !1;
                        else H = !0;
                        if (b && 0 < b.length)
                            for (k = 0; k < b.length; k++) K = M[y - 1][k] === M[y][k] ? !0 : !1;
                        else K = !0;
                        if (c && 0 < c.length)
                            for (k = 0; k < c.length; k++) V = P[y -
                                1][k] === P[y][k] ? !0 : !1;
                        else V = !0
                    }
                    if (s && H && K && V) break;
                    y++
                }
                if (a && 0 < a.length)
                    for (k = 0; k < a.length; k++) a[k].calculateStripLinesThicknessInValues(), a[k].calculateBreaksInPixels();
                if (f && 0 < f.length)
                    for (k = 0; k < f.length; k++) f[k].calculateStripLinesThicknessInValues(), f[k].calculateBreaksInPixels();
                if (b && 0 < b.length)
                    for (k = 0; k < b.length; k++) b[k].calculateStripLinesThicknessInValues(), b[k].calculateBreaksInPixels();
                if (c && 0 < c.length)
                    for (k = 0; k < c.length; k++) c[k].calculateStripLinesThicknessInValues(), c[k].calculateBreaksInPixels()
            } else {
                p = [];
                z = [];
                F = [];
                u = [];
                G = [];
                w = [];
                N = [];
                for (L = []; 4 > y;) {
                    T = U = W = S = X = Q = Z = h = P = M = I = Y = 0;
                    if (a && 0 < a.length)
                        for (F = [], k = U = 0; k < a.length; k++) F.push(Math.ceil(a[k] ? a[k].createLabelsAndCalculateWidth() : 0)), U += F[k], h += a[k] && !n.isNavigator ? a[k].margin : 0;
                    else F.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
                    N.push(F);
                    if (f && 0 < f.length)
                        for (u = [], k = T = 0; k < f.length; k++) u.push(Math.ceil(f[k] ? f[k].createLabelsAndCalculateWidth() : 0)), T += u[k], Z += f[k] ? f[k].margin : 0;
                    else u.push(Math.ceil(f[0] ? f[0].createLabelsAndCalculateWidth() :
                        0));
                    L.push(u);
                    if (b && 0 < b.length)
                        for (k = 0; k < b.length; k++) b[k].lineCoordinates = {}, d = Math.round(g.x1 + U + h), l = Math.round(g.x2 - T - Z > n.width - 10 ? n.width - 10 : g.x2 - T - Z), b[k].labelAutoFit && !e(v) && (0 < !a.length && (d = 0 > b[k].labelAngle ? Math.max(d, v) : 0 === b[k].labelAngle ? Math.max(d, v / 2) : d), 0 < !f.length && (l = 0 < b[k].labelAngle ? l - t / 2 : 0 === b[k].labelAngle ? l - t / 2 : l)), b[k].lineCoordinates.x1 = d, b[k].lineCoordinates.x2 = l, b[k].lineCoordinates.width = Math.abs(l - d), b[k].title && (b[k]._titleTextBlock.maxWidth = 0 < b[k].titleMaxWidth && b[k].titleMaxWidth <
                            b[k].lineCoordinates.width ? b[k].titleMaxWidth : b[k].lineCoordinates.width);
                    if (c && 0 < c.length)
                        for (k = 0; k < c.length; k++) c[k].lineCoordinates = {}, d = Math.round(g.x1 + U + h), l = Math.round(g.x2 - T - Z > c[k].chart.width - 10 ? c[k].chart.width - 10 : g.x2 - T - Z), c[k] && c[k].labelAutoFit && !e(x) && (0 < !a.length && (d = 0 < c[k].labelAngle ? Math.max(d, x) : 0 === c[k].labelAngle ? Math.max(d, x / 2) : d), 0 < !f.length && (l -= A / 2)), c[k].lineCoordinates.x1 = d, c[k].lineCoordinates.x2 = l, c[k].lineCoordinates.width = Math.abs(l - d), c[k].title && (c[k]._titleTextBlock.maxWidth =
                            0 < c[k].titleMaxWidth && c[k].titleMaxWidth < c[k].lineCoordinates.width ? c[k].titleMaxWidth : c[k].lineCoordinates.width);
                    if (b && 0 < b.length)
                        for (p = [], k = S = 0; k < b.length; k++) p.push(Math.ceil(b[k] ? b[k].createLabelsAndCalculateHeight() : 0)), S += p[k] + b[k].margin, Q += b[k].margin;
                    else p.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
                    G.push(p);
                    if (c && 0 < c.length)
                        for (z = [], k = W = 0; k < c.length; k++) z.push(Math.ceil(c[k] ? c[k].createLabelsAndCalculateHeight() : 0)), W += z[k], X += c[k].margin;
                    else z.push(Math.ceil(c[0] ?
                        c[0].createLabelsAndCalculateHeight() : 0));
                    w.push(z);
                    if (b && 0 < b.length)
                        for (k = 0; k < b.length; k++) 0 < b[k]._labels.length && (m = b[k]._labels[0], r = b[k]._labels[b[k]._labels.length - 1], v = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - r.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)), t = r.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(r.textBlock.angle)) + (r.textBlock.height - r.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(r.textBlock.angle)));
                    if (c && 0 < c.length)
                        for (k = 0; k < c.length; k++) c[k] && 0 < c[k]._labels.length && (m = c[k]._labels[0], r = c[k]._labels[c[k]._labels.length - 1], x = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - r.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)), A = r.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(r.textBlock.angle)) + (r.textBlock.height - r.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(r.textBlock.angle)));
                    if (n.panEnabled)
                        for (k = 0; k < b.length; k++) p[k] = e(n.sessionVariables.axisY.height) ?
                            n.sessionVariables.axisY.height = p[k] : n.sessionVariables.axisY.height;
                    else
                        for (k = 0; k < b.length; k++) n.sessionVariables.axisY.height = p[k];
                    if (b && 0 < b.length)
                        for (k = b.length - 1; 0 <= k; k--) r = Math.round(g.y2), m = Math.round(g.y2 > b[k].chart.height ? b[k].chart.height : g.y2), b[k].lineCoordinates.y1 = r - (p[k] + b[k].margin + Y), b[k].lineCoordinates.y2 = r - (p[k] + b[k].margin + Y), "inside" === b[k].labelPlacement && 0 < k && (b[k].lineCoordinates.y1 = b[k].lineCoordinates.y1 + p[k] - (b[k]._titleTextBlock ? b[k]._titleTextBlock.height : 0) - ("inside" ===
                            b[k].tickPlacement ? b[k].tickLength : 0), b[k].lineCoordinates.y2 = b[k].lineCoordinates.y1 + b[k].lineThickness / 2), b[k].bounds = {
                            x1: d,
                            y1: r - (p[k] + Y + b[k].margin),
                            x2: l,
                            y2: m - (Y + b[k].margin),
                            width: l - d,
                            height: p[k]
                        }, b[k].title && (b[k]._titleTextBlock.maxWidth = 0 < b[k].titleMaxWidth && b[k].titleMaxWidth < b[k].lineCoordinates.width ? b[k].titleMaxWidth : b[k].lineCoordinates.width), Y += p[k] + b[k].margin;
                    if (c && 0 < c.length)
                        for (k = c.length - 1; 0 <= k; k--) c[k] && (r = Math.round(g.y1), m = Math.round(g.y1 + (z[k] + c[k].margin + I)), c[k].lineCoordinates.y1 =
                            m, c[k].lineCoordinates.y2 = m, "inside" === c[k].labelPlacement && 0 < k && (c[k].lineCoordinates.y1 = m - z[k] + (c[k]._titleTextBlock ? c[k]._titleTextBlock.height : 0)), c[k].bounds = {
                                x1: d,
                                y1: r + (c[k].margin + I),
                                x2: l,
                                y2: m,
                                width: l - d,
                                height: W
                            }, c[k].title && (c[k]._titleTextBlock.maxWidth = 0 < c[k].titleMaxWidth && c[k].titleMaxWidth < c[k].lineCoordinates.width ? c[k].titleMaxWidth : c[k].lineCoordinates.width), I += z[k] + c[k].margin);
                    if (a && 0 < a.length)
                        for (k = 0; k < a.length; k++) {
                            Q = a[k]._labels && 0 < a[k]._labels.length ? a[k]._labels[0].textBlock.fontSize /
                                2 : 0;
                            d = Math.round(g.x1 + h);
                            r = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y2 : g.y1 < Math.max(Q, 10) ? Math.max(Q, 10) : g.y1) : g.y1 < Math.max(Q, 10) ? Math.max(Q, 10) : g.y1;
                            l = Math.round(g.x1 + U + h);
                            m = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y1 : g.y2 - S > n.height - Math.max(Q, 10) ? n.height - Math.max(Q, 10) : g.y2 - S) : g.y2 > n.height - Math.max(Q, 10) ? n.height - Math.max(Q, 10) : g.y2;
                            if (b && 0 < b.length)
                                for (Q = 0; Q < b.length; Q++) b[Q] && b[Q].labelAutoFit && (l = 0 > b[Q].labelAngle ? Math.max(l, v) : 0 === b[Q].labelAngle ? Math.max(l, v / 2) : l, d =
                                    0 > b[Q].labelAngle || 0 === b[Q].labelAngle ? l - U : d);
                            if (c && 0 < c.length)
                                for (Q = 0; Q < c.length; Q++) c[Q] && c[Q].labelAutoFit && (l = c[Q].lineCoordinates.x1, d = l - U);
                            a[k].lineCoordinates = {
                                x1: l - M,
                                y1: r,
                                x2: l - M,
                                y2: m,
                                height: Math.abs(m - r)
                            };
                            "inside" === a[k].labelPlacement && 0 < k && (a[k].lineCoordinates.x1 = a[k].lineCoordinates.x1 - (F[k] - (a[k]._titleTextBlock ? a[k]._titleTextBlock.height : 0)) + ("outside" === a[k].tickPlacement ? a[k].tickLength : 0), a[k].lineCoordinates.x2 = a[k].lineCoordinates.x1 + a[k].lineThickness / 2);
                            a[k].bounds = {
                                x1: l - (F[k] +
                                    M),
                                y1: r,
                                x2: l,
                                y2: m,
                                width: l - d,
                                height: m - r
                            };
                            a[k].title && (a[k]._titleTextBlock.maxWidth = 0 < a[k].titleMaxWidth && a[k].titleMaxWidth < a[k].lineCoordinates.height ? a[k].titleMaxWidth : a[k].lineCoordinates.height);
                            a[k].calculateValueToPixelConversionParameters();
                            a[k].calculateBreaksSizeInValues();
                            M += F[k] + a[k].margin
                        }
                    if (f && 0 < f.length)
                        for (k = 0; k < f.length; k++) {
                            Q = f[k]._labels && 0 < f[k]._labels.length ? f[k]._labels[0].textBlock.fontSize / 2 : 0;
                            d = Math.round(g.x1 - h);
                            r = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y2 : g.y1 <
                                Math.max(Q, 10) ? Math.max(Q, 10) : g.y1) : g.y1 < Math.max(Q, 10) ? Math.max(Q, 10) : g.y1;
                            l = Math.round(g.x2 - T - Z);
                            m = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y1 : g.y2 - S > n.height - Math.max(Q, 10) ? n.height - Math.max(Q, 10) : g.y2 - S) : g.y2 > n.height - Math.max(Q, 10) ? n.height - Math.max(Q, 10) : g.y2;
                            if (b && 0 < b.length)
                                for (Q = 0; Q < b.length; Q++) b[Q] && b[Q].labelAutoFit && (l = 0 > b[Q].labelAngle ? Math.max(l, v) : 0 === b[Q].labelAngle ? Math.max(l, v / 2) : l, d = 0 > b[Q].labelAngle || 0 === b[Q].labelAngle ? l - T : d);
                            if (c && 0 < c.length)
                                for (Q = 0; Q < c.length; Q++) c[Q] &&
                                    c[Q].labelAutoFit && (l = c[Q].lineCoordinates.x2, d = l - T);
                            f[k].lineCoordinates = {
                                x1: l + P,
                                y1: r,
                                x2: l + P,
                                y2: m,
                                height: Math.abs(m - r)
                            };
                            "inside" === f[k].labelPlacement && 0 < k && (f[k].lineCoordinates.x1 = f[k].lineCoordinates.x1 + (u[k] - (f[k]._titleTextBlock ? f[k]._titleTextBlock.height : 0) - 2) - ("outside" === f[k].tickPlacement ? f[k].tickLength : 0), f[k].lineCoordinates.x2 = f[k].lineCoordinates.x1 + f[k].lineThickness / 2);
                            f[k].bounds = {
                                x1: f[k].lineCoordinates.x1,
                                y1: r,
                                x2: l + u[k] + P,
                                y2: m,
                                width: l - d,
                                height: m - r
                            };
                            f[k].title && (f[k]._titleTextBlock.maxWidth =
                                0 < f[k].titleMaxWidth && f[k].titleMaxWidth < f[k].lineCoordinates.height ? f[k].titleMaxWidth : f[k].lineCoordinates.height);
                            f[k].calculateValueToPixelConversionParameters();
                            f[k].calculateBreaksSizeInValues();
                            P += u[k] + f[k].margin
                        }
                    for (k = 0; k < q.length; k++) "axisY" === q[k].type && (q[k].calculateValueToPixelConversionParameters(), q[k].calculateBreaksSizeInValues());
                    if (0 < y) {
                        if (a && 0 < a.length)
                            for (k = 0; k < a.length; k++) s = N[y - 1][k] === N[y][k] ? !0 : !1;
                        else s = !0;
                        if (f && 0 < f.length)
                            for (k = 0; k < f.length; k++) H = L[y - 1][k] === L[y][k] ? !0 :
                                !1;
                        else H = !0;
                        if (b && 0 < b.length)
                            for (k = 0; k < b.length; k++) K = G[y - 1][k] === G[y][k] ? !0 : !1;
                        else K = !0;
                        if (c && 0 < c.length)
                            for (k = 0; k < c.length; k++) V = w[y - 1][k] === w[y][k] ? !0 : !1;
                        else V = !0
                    }
                    if (s && H && K && V) break;
                    y++
                }
                if (b && 0 < b.length)
                    for (k = 0; k < b.length; k++) b[k].calculateStripLinesThicknessInValues(), b[k].calculateBreaksInPixels();
                if (c && 0 < c.length)
                    for (k = 0; k < c.length; k++) c[k].calculateStripLinesThicknessInValues(), c[k].calculateBreaksInPixels();
                if (a && 0 < a.length)
                    for (k = 0; k < a.length; k++) a[k].calculateStripLinesThicknessInValues(),
                        a[k].calculateBreaksInPixels();
                if (f && 0 < f.length)
                    for (k = 0; k < f.length; k++) f[k].calculateStripLinesThicknessInValues(), f[k].calculateBreaksInPixels()
            }
        };
        A.render = function (a, f, b, c, h) {
            var g = a[0] ? a[0].chart : f[0].chart;
            h = g.ctx;
            g.alignVerticalAxes && g.alignVerticalAxes();
            h.save();
            h.beginPath();
            a[0] && h.rect(5, a[0].bounds.y1, a[0].chart.width - 10, a[0].bounds.height);
            f[0] && h.rect(5, f[f.length - 1].bounds.y1, f[0].chart.width - 10, f[0].bounds.height);
            h.clip();
            if (a && 0 < a.length)
                for (var d = 0; d < a.length; d++) a[d].renderLabelsTicksAndTitle();
            if (f && 0 < f.length)
                for (d = 0; d < f.length; d++) f[d].renderLabelsTicksAndTitle();
            h.restore();
            if (b && 0 < b.length)
                for (d = 0; d < b.length; d++) b[d].renderLabelsTicksAndTitle();
            if (c && 0 < c.length)
                for (d = 0; d < c.length; d++) c[d].renderLabelsTicksAndTitle();
            g.preparePlotArea();
            g = g.plotArea;
            h.save();
            h.beginPath();
            h.rect(g.x1, g.y1, Math.abs(g.x2 - g.x1), Math.abs(g.y2 - g.y1));
            h.clip();
            if (a && 0 < a.length)
                for (d = 0; d < a.length; d++) a[d].renderStripLinesOfThicknessType("value");
            if (f && 0 < f.length)
                for (d = 0; d < f.length; d++) f[d].renderStripLinesOfThicknessType("value");
            if (b && 0 < b.length)
                for (d = 0; d < b.length; d++) b[d].renderStripLinesOfThicknessType("value");
            if (c && 0 < c.length)
                for (d = 0; d < c.length; d++) c[d].renderStripLinesOfThicknessType("value");
            if (a && 0 < a.length)
                for (d = 0; d < a.length; d++) a[d].renderInterlacedColors();
            if (f && 0 < f.length)
                for (d = 0; d < f.length; d++) f[d].renderInterlacedColors();
            if (b && 0 < b.length)
                for (d = 0; d < b.length; d++) b[d].renderInterlacedColors();
            if (c && 0 < c.length)
                for (d = 0; d < c.length; d++) c[d].renderInterlacedColors();
            h.restore();
            if (a && 0 < a.length)
                for (d = 0; d < a.length; d++) a[d].renderGrid(),
                    v && (a[d].createMask(), a[d].renderBreaksBackground());
            if (f && 0 < f.length)
                for (d = 0; d < f.length; d++) f[d].renderGrid(), v && (f[d].createMask(), f[d].renderBreaksBackground());
            if (b && 0 < b.length)
                for (d = 0; d < b.length; d++) b[d].renderGrid(), v && (b[d].createMask(), b[d].renderBreaksBackground());
            if (c && 0 < c.length)
                for (d = 0; d < c.length; d++) c[d].renderGrid(), v && (c[d].createMask(), c[d].renderBreaksBackground());
            if (a && 0 < a.length)
                for (d = 0; d < a.length; d++) a[d].renderAxisLine();
            if (f && 0 < f.length)
                for (d = 0; d < f.length; d++) f[d].renderAxisLine();
            if (b && 0 < b.length)
                for (d = 0; d < b.length; d++) b[d].renderAxisLine();
            if (c && 0 < c.length)
                for (d = 0; d < c.length; d++) c[d].renderAxisLine();
            if (a && 0 < a.length)
                for (d = 0; d < a.length; d++) a[d].renderStripLinesOfThicknessType("pixel");
            if (f && 0 < f.length)
                for (d = 0; d < f.length; d++) f[d].renderStripLinesOfThicknessType("pixel");
            if (b && 0 < b.length)
                for (d = 0; d < b.length; d++) b[d].renderStripLinesOfThicknessType("pixel");
            if (c && 0 < c.length)
                for (d = 0; d < c.length; d++) c[d].renderStripLinesOfThicknessType("pixel")
        };
        A.prototype.calculateStripLinesThicknessInValues =
            function () {
                for (var a = 0; a < this.stripLines.length; a++)
                    if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
                        var f = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue),
                            b = Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue),
                            f = this.getApparentDifference(f, b);
                        this.stripLines[a].value = this.logarithmic ? this.stripLines[a].value * Math.sqrt(Math.log(Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue) / Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue)) /
                            Math.log(f)) : this.stripLines[a].value + (Math.abs(this.stripLines[a].endValue - this.stripLines[a].startValue) - f) / 2;
                        this.stripLines[a].thickness = f;
                        this.stripLines[a]._thicknessType = "value"
                    }
            };
        A.prototype.calculateBreaksSizeInValues = function () {
            for (var a = "left" === this._position || "right" === this._position ? this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width, f = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], b = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ?
                    this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum), c = this.scaleBreaks && !e(this.scaleBreaks.options.spacing), h, d = 0; d < f.length; d++) h = c || !e(f[d].options.spacing), f[d].spacing = Va(f[d].spacing, a, 8, h ? 0.1 * a : 8, h ? 0 : 3) << 0, f[d].size = 0 > f[d].spacing ? 0 : Math.abs(f[d].spacing / b), this.logarithmic && (f[d].size = Math.pow(this.logarithmBase, f[d].size))
        };
        A.prototype.calculateBreaksInPixels = function () {
            if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
                var a =
                    this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
                a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
                for (var f = 0; f < a.length && !(a[f].startValue > this.conversionParameters.maximum); f++) a[f].endValue < this.conversionParameters.minimum || (e(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = f), a[f].startValue >= this.conversionParameters.minimum && (a[f].startPixel = this.convertValueToPixel(a[f].startValue), this.scaleBreaks.lastBreakIndex = f), a[f].endValue <= this.conversionParameters.maximum &&
                    (a[f].endPixel = this.convertValueToPixel(a[f].endValue)))
            }
        };
        A.prototype.renderLabelsTicksAndTitle = function () {
            var a = this,
                f = !1,
                b = 0,
                c = 0,
                h = 1,
                d = 0;
            0 !== this.labelAngle && 360 !== this.labelAngle && (h = 1.2);
            if ("undefined" === typeof this.options.interval) {
                if ("bottom" === this._position || "top" === this._position)
                    if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                        for (var b = [], h = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, e, r = this.viewportMaximum, l = this.lineCoordinates.width / Math.log(this.range), m = this._labels.length -
                                1; 0 <= m; m--) {
                            p = this._labels[m];
                            if (p.position < this.viewportMinimum) break;
                            p.position > this.viewportMaximum || !(m === this._labels.length - 1 || e < Math.log(r / p.position) * l / h) || (b.push(p), r = p.position, e = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                        }
                        this._labels = b
                    } else {
                        for (m = 0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || (e = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height *
                            Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), b += e);
                        b > this.lineCoordinates.width * h && this.labelAutoFit && (f = !0)
                    } if ("left" === this._position || "right" === this._position)
                    if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                        for (var b = [], n, r = this.viewportMaximum, l = this.lineCoordinates.height / Math.log(this.range), m = this._labels.length - 1; 0 <= m; m--) {
                            p = this._labels[m];
                            if (p.position < this.viewportMinimum) break;
                            p.position > this.viewportMaximum || !(m === this._labels.length - 1 || n < Math.log(r / p.position) *
                                l) || (b.push(p), r = p.position, n = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                        }
                        this._labels = b
                    } else {
                        for (m = 0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || (n = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), c += n);
                        c > this.lineCoordinates.height * h && this.labelAutoFit && (f = !0)
                    }
            }
            this.logarithmic && (!this.equidistantInterval &&
                this.labelAutoFit) && this._labels.sort(function (a, b) {
                return a.position - b.position
            });
            var m = 0,
                p, q;
            if ("bottom" === this._position) {
                for (m = 0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, c = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(c, q.y <<
                    0), this.ctx.lineTo(c, q.y + this.tickLength << 0), this.ctx.stroke()), f && 0 !== d++ % 2 && this.labelAutoFit || (0 === p.textBlock.angle ? (q.x -= p.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y - (("inside" === this.tickPlacement ? this.tickLength : 0) + p.textBlock.height - p.textBlock.fontSize / 2) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + p.textBlock.fontSize / 2 + 5) : (q.x = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.x : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x - (0 > this.labelAngle ? p.textBlock.width *
                    Math.cos(Math.PI / 180 * this.labelAngle) : 0), q.y = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.y - ("inside" === this.tickPlacement ? 0 : this.tickLength) - Math.abs(p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + Math.abs(0 > this.labelAngle ? p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), p.textBlock.x = q.x, p.textBlock.y = q.y));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd",
                    function () {
                        for (m = 0; m < a._labels.length; m++)
                            if (p = a._labels[m], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                                a.ctx.lineWidth = a.tickThickness;
                                a.ctx.strokeStyle = a.tickColor;
                                var b = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                                a.ctx.save();
                                a.ctx.beginPath();
                                a.ctx.moveTo(b, q.y << 0);
                                a.ctx.lineTo(b, q.y - a.tickLength << 0);
                                a.ctx.stroke();
                                a.ctx.restore()
                            }
                    }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 +
                    this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height - 3, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            } else if ("top" === this._position) {
                for (m = 0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle =
                    this.tickColor, c = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(c, q.y << 0), this.ctx.lineTo(c, q.y - this.tickLength << 0), this.ctx.stroke()), f && 0 !== d++ % 2 && this.labelAutoFit || (0 === p.textBlock.angle ? (q.x -= p.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y + this.labelFontSize / 2 + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + p.textBlock.height - p.textBlock.fontSize / 2)) : (q.x = "inside" === this.labelPlacement ? 0 <
                    this.labelAngle ? q.x : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x + (p.textBlock.height - this.labelFontSize) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), q.y = "inside" === this.labelPlacement ? 0 < this.labelAngle ? q.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) +
                        ((p.textBlock.height - p.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))), p.textBlock.x = q.x, p.textBlock.y = q.y));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function () {
                    for (m = 0; m < a._labels.length; m++)
                        if (p = a._labels[m], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                            a.ctx.lineWidth = a.tickThickness;
                            a.ctx.strokeStyle =
                                a.tickColor;
                            var b = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(b, q.y << 0);
                            a.ctx.lineTo(b, q.y + a.tickLength << 0);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y1 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            } else if ("left" === this._position) {
                for (m =
                    0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, c = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, c), this.ctx.lineTo(q.x - this.tickLength << 0, c), this.ctx.stroke()), f && 0 !== d++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (p.textBlock.y =
                    q.y, p.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : (p.textBlock.y = "inside" === this.labelPlacement ? q.y : q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), p.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : 0 < this.labelAngle ? q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) -
                    ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5 : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength))));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function () {
                    for (m = 0; m < a._labels.length; m++)
                        if (p = a._labels[m], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                            a.ctx.lineWidth =
                                a.tickThickness;
                            a.ctx.strokeStyle = a.tickColor;
                            var b = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(q.x << 0, b);
                            a.ctx.lineTo(q.x + a.tickLength << 0, b);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x1 + 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            } else if ("right" ===
                this._position) {
                for (m = 0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, c = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, c), this.ctx.lineTo(q.x + this.tickLength << 0, c), this.ctx.stroke()), f && 0 !== d++ % 2 && this.labelAutoFit || (0 === this.labelAngle ?
                    (p.textBlock.y = q.y, p.textBlock.x = "inside" === this.labelPlacement ? q.x - p.textBlock.width - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : (p.textBlock.y = "inside" === this.labelPlacement ? q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0 > this.labelAngle ? q.y : q.y - (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), p.textBlock.x = "inside" === this.labelPlacement ? q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) -
                        ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : 0 < this.labelAngle ? q.x + (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5)));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function () {
                    for (m = 0; m < a._labels.length; m++)
                        if (p = a._labels[m], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position),
                                a.tickThickness)) {
                            a.ctx.lineWidth = a.tickThickness;
                            a.ctx.strokeStyle = a.tickColor;
                            var b = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(q.x << 0, b);
                            a.ctx.lineTo(q.x - a.tickLength << 0, b);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x2 - 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            }
            d =
                0;
            if ("inside" === this.labelPlacement) this.chart.addEventListener("dataAnimationEnd", function () {
                for (m = 0; m < a._labels.length; m++) p = a._labels[m], p.position < a.viewportMinimum || (p.position > a.viewportMaximum || f && 0 !== d++ % 2 && a.labelAutoFit) || (a.ctx.save(), a.ctx.beginPath(), p.textBlock.render(!0), a.ctx.restore())
            }, this);
            else
                for (m = 0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || (p.position > this.viewportMaximum || f && 0 !== d++ % 2 && this.labelAutoFit) || p.textBlock.render(!0)
        };
        A.prototype.renderInterlacedColors =
            function () {
                var a = this.chart.plotArea.ctx,
                    f, b, c = this.chart.plotArea,
                    h = 0;
                f = !0;
                if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
                    for (a.fillStyle = this.interlacedColor, h = 0; h < this._labels.length; h++) f ? (f = this.getPixelCoordinatesOnAxis(this._labels[h].position), b = h + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[h + 1].position), a.fillRect(Math.min(b.x, f.x), c.y1, Math.abs(b.x - f.x), Math.abs(c.y1 - c.y2)), f = !1) :
                        f = !0;
                else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
                    for (a.fillStyle = this.interlacedColor, h = 0; h < this._labels.length; h++) f ? (b = this.getPixelCoordinatesOnAxis(this._labels[h].position), f = h + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[h + 1].position), a.fillRect(c.x1, Math.min(b.y, f.y), Math.abs(c.x1 - c.x2), Math.abs(f.y - b.y)), f = !1) : f = !0;
                a.beginPath()
            };
        A.prototype.renderStripLinesOfThicknessType = function (a) {
            if (this.stripLines &&
                0 < this.stripLines.length && a) {
                for (var f = this, b, c = 0, h = 0, d = !1, r = !1, l = [], y = [], r = !1, c = 0; c < this.stripLines.length; c++) {
                    var m = this.stripLines[c];
                    m._thicknessType === a && ("pixel" === a && (m.value < this.viewportMinimum || m.value > this.viewportMaximum || e(m.value) || isNaN(this.range)) || "value" === a && (m.startValue <= this.viewportMinimum && m.endValue <= this.viewportMinimum || m.startValue >= this.viewportMaximum && m.endValue >= this.viewportMaximum || e(m.startValue) || e(m.endValue) || isNaN(this.range)) || l.push(m))
                }
                for (c = 0; c < this._stripLineLabels.length; c++)
                    if (m =
                        this.stripLines[c], b = this._stripLineLabels[c], !(b.position < this.viewportMinimum || b.position > this.viewportMaximum || isNaN(this.range))) {
                        a = this.getPixelCoordinatesOnAxis(b.position);
                        if ("outside" === b.stripLine.labelPlacement)
                            if (m && (this.ctx.strokeStyle = m.color, "pixel" === m._thicknessType && (this.ctx.lineWidth = m.thickness)), "bottom" === this._position) {
                                var n = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0;
                                this.ctx.beginPath();
                                this.ctx.moveTo(n, a.y << 0);
                                this.ctx.lineTo(n, a.y + this.tickLength << 0);
                                this.ctx.stroke();
                                0 === this.labelAngle ? (a.x -= b.textBlock.width / 2, a.y += this.tickLength + b.textBlock.fontSize / 2) : (a.x -= 0 > this.labelAngle ? b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, a.y += this.tickLength + Math.abs(0 > this.labelAngle ? b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5))
                            } else "top" === this._position ? (n = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, this.ctx.beginPath(), this.ctx.moveTo(n, a.y << 0), this.ctx.lineTo(n, a.y - this.tickLength << 0), this.ctx.stroke(), 0 === this.labelAngle ? (a.x -= b.textBlock.width /
                                    2, a.y -= this.tickLength + b.textBlock.height) : (a.x += (b.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), a.y -= this.tickLength + (b.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))) : "left" === this._position ? (n = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, n),
                                    this.ctx.lineTo(a.x - this.tickLength << 0, n), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : (a.y -= b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength)) : "right" === this._position &&
                                (n = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, n), this.ctx.lineTo(a.x + this.tickLength << 0, n), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x + this.tickLength + 5 : (a.y = 0 > this.labelAngle ? a.y : a.y - (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x + (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + this.tickLength : a.x + this.tickLength + 5));
                        else b.textBlock.angle = -90, "bottom" ===
                            this._position ? (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.height - 3, b.textBlock.measureText(), a.x - b.textBlock.height > this.chart.plotArea.x1 ? e(m.startValue) ? a.x -= b.textBlock.height - b.textBlock.fontSize / 2 : a.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3 : (b.textBlock.angle = 90, e(m.startValue) ? a.x += b.textBlock.height - b.textBlock.fontSize / 2 : a.x += b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3), a.y = -90 === b.textBlock.angle ? "near" ===
                                b.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + b.textBlock.width) / 2 : this.chart.plotArea.y1 + b.textBlock.width + 3 : "near" === b.stripLine.labelAlign ? this.chart.plotArea.y2 - b.textBlock.width - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ? (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth :
                                this.chart.plotArea.height - 3, b.textBlock.measureText(), a.x - b.textBlock.height > this.chart.plotArea.x1 ? e(m.startValue) ? a.x -= b.textBlock.height - b.textBlock.fontSize / 2 : a.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3 : (b.textBlock.angle = 90, e(m.startValue) ? a.x += b.textBlock.height - b.textBlock.fontSize / 2 : a.x += b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3), a.y = -90 === b.textBlock.angle ? "near" === b.stripLine.labelAlign ? this.chart.plotArea.y1 + b.textBlock.width + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 +
                                    this.chart.plotArea.y1 + b.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === b.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2 : this.chart.plotArea.y2 - b.textBlock.width - 3) : "left" === this._position ? (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.width - 3, b.textBlock.angle = 0, b.textBlock.measureText(), a.y - b.textBlock.height > this.chart.plotArea.y1 ?
                                e(m.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize + 3 : a.y - b.textBlock.height < this.chart.plotArea.y2 ? a.y += b.textBlock.fontSize / 2 + 3 : e(m.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize + 3, a.x = "near" === b.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2 : this.chart.plotArea.x2 - b.textBlock.width -
                                3) : "right" === this._position && (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.width - 3, b.textBlock.angle = 0, b.textBlock.measureText(), a.y - +b.textBlock.height > this.chart.plotArea.y1 ? e(m.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 - 3 : a.y - b.textBlock.height < this.chart.plotArea.y2 ? a.y += b.textBlock.fontSize / 2 + 3 : e(m.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize /
                                2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3, a.x = "near" === b.stripLine.labelAlign ? this.chart.plotArea.x2 - b.textBlock.width - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2 : this.chart.plotArea.x1 + 3);
                        b.textBlock.x = a.x;
                        b.textBlock.y = a.y;
                        y.push(b)
                    } if (!r) {
                    r = !1;
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                    this.ctx.clip();
                    for (c = 0; c < l.length; c++) m =
                        l[c], m.showOnTop ? d || (d = !0, this.chart.addEventListener("dataAnimationIterationEnd", function () {
                            this.ctx.save();
                            this.ctx.beginPath();
                            this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                            this.ctx.clip();
                            for (h = 0; h < l.length; h++) m = l[h], m.showOnTop && m.render();
                            this.ctx.restore()
                        }, m)) : m.render();
                    for (c = 0; c < y.length; c++) b = y[c], b.stripLine.showOnTop ? r || (r = !0, this.chart.addEventListener("dataAnimationIterationEnd", function () {
                        for (h = 0; h < y.length; h++) b =
                            y[h], "inside" === b.stripLine.labelPlacement && b.stripLine.showOnTop && (f.ctx.save(), f.ctx.beginPath(), f.ctx.rect(f.chart.plotArea.x1, f.chart.plotArea.y1, f.chart.plotArea.width, f.chart.plotArea.height), f.ctx.clip(), b.textBlock.render(!0), f.ctx.restore())
                    }, b.textBlock)) : "inside" === b.stripLine.labelPlacement && b.textBlock.render(!0);
                    this.ctx.restore();
                    r = !0
                }
                if (r)
                    for (r = !1, c = 0; c < y.length; c++) b = y[c], "outside" === b.stripLine.labelPlacement && b.textBlock.render(!0)
            }
        };
        A.prototype.renderBreaksBackground = function () {
            this.chart._breaksCanvas &&
                (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length && this.maskCanvas) && (this.chart._breaksCanvasCtx.save(), this.chart._breaksCanvasCtx.beginPath(), this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), this.chart._breaksCanvasCtx.clip(), this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx.restore())
        };
        A.prototype.createMask = function () {
            if (this.scaleBreaks &&
                0 < this.scaleBreaks._appliedBreaks.length) {
                var a = this.scaleBreaks._appliedBreaks;
                v ? (this.maskCanvas = ra(this.chart.width, this.chart.height), this.maskCtx = this.maskCanvas.getContext("2d")) : (this.maskCanvas = this.chart.plotArea.canvas, this.maskCtx = this.chart.plotArea.ctx);
                this.maskCtx.save();
                this.maskCtx.beginPath();
                this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.maskCtx.clip();
                for (var f = 0; f < a.length; f++) a[f].endValue < this.viewportMinimum ||
                    (a[f].startValue > this.viewportMaximum || isNaN(this.range)) || a[f].render(this.maskCtx);
                this.maskCtx.restore()
            }
        };
        A.prototype.renderCrosshair = function (a, f) {
            isFinite(this.minimum) && isFinite(this.maximum) && (this.crosshair.render(a, f), this.crosshair.dispatchEvent("updated", {
                chart: this.chart,
                crosshair: this.options,
                axis: this,
                value: this.crosshair.value
            }, this))
        };
        A.prototype.showCrosshair = function (a) {
            e(a) || (a < this.viewportMinimum || a > this.viewportMaximum) || ("top" === this._position || "bottom" === this._position ? this.crosshair.render(this.convertValueToPixel(a),
                null, a) : this.crosshair.render(null, this.convertValueToPixel(a), a))
        };
        A.prototype.renderGrid = function () {
            if (this.gridThickness && 0 < this.gridThickness) {
                var a = this.chart.ctx;
                a.save();
                var f, b = this.chart.plotArea;
                a.lineWidth = this.gridThickness;
                a.strokeStyle = this.gridColor;
                a.setLineDash && a.setLineDash(P(this.gridDashType, this.gridThickness));
                if ("bottom" === this._position || "top" === this._position)
                    for (c = 0; c < this._labels.length; c++) this._labels[c].position < this.viewportMinimum || (this._labels[c].position > this.viewportMaximum ||
                        this._labels[c].breaksLabelType) || (a.beginPath(), f = this.getPixelCoordinatesOnAxis(this._labels[c].position), f = 1 === a.lineWidth % 2 ? (f.x << 0) + 0.5 : f.x << 0, a.moveTo(f, b.y1 << 0), a.lineTo(f, b.y2 << 0), a.stroke());
                else if ("left" === this._position || "right" === this._position)
                    for (var c = 0; c < this._labels.length; c++) this._labels[c].position < this.viewportMinimum || (this._labels[c].position > this.viewportMaximum || this._labels[c].breaksLabelType) || (a.beginPath(), f = this.getPixelCoordinatesOnAxis(this._labels[c].position), f =
                        1 === a.lineWidth % 2 ? (f.y << 0) + 0.5 : f.y << 0, a.moveTo(b.x1 << 0, f), a.lineTo(b.x2 << 0, f), a.stroke());
                a.restore()
            }
        };
        A.prototype.renderAxisLine = function () {
            var a = this.chart.ctx,
                f = v ? this.chart._preRenderCtx : a,
                b = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)),
                c = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)),
                h, d;
            f.save();
            if ("bottom" === this._position || "top" === this._position) {
                if (this.lineThickness) {
                    this.reversed ? (h = this.lineCoordinates.x2, d = this.lineCoordinates.x1) : (h = this.lineCoordinates.x1, d = this.lineCoordinates.x2);
                    f.lineWidth = this.lineThickness;
                    f.strokeStyle = this.lineColor ? this.lineColor : "black";
                    f.setLineDash && f.setLineDash(P(this.lineDashType, this.lineThickness));
                    var r = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
                    f.beginPath();
                    if (this.scaleBreaks && !e(this.scaleBreaks.firstBreakIndex))
                        if (e(this.scaleBreaks.lastBreakIndex)) h = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
                        else
                            for (var l = this.scaleBreaks.firstBreakIndex; l <= this.scaleBreaks.lastBreakIndex; l++) f.moveTo(h,
                                r), f.lineTo(this.scaleBreaks._appliedBreaks[l].startPixel + b, r), h = this.scaleBreaks._appliedBreaks[l].endPixel + c;
                    h && (f.moveTo(h, r), f.lineTo(d, r));
                    f.stroke()
                }
            } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
                this.reversed ? (h = this.lineCoordinates.y1, d = this.lineCoordinates.y2) : (h = this.lineCoordinates.y2, d = this.lineCoordinates.y1);
                f.lineWidth = this.lineThickness;
                f.strokeStyle = this.lineColor;
                f.setLineDash && f.setLineDash(P(this.lineDashType, this.lineThickness));
                r = 1 === this.lineThickness %
                    2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
                f.beginPath();
                if (this.scaleBreaks && !e(this.scaleBreaks.firstBreakIndex))
                    if (e(this.scaleBreaks.lastBreakIndex)) h = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
                    else
                        for (l = this.scaleBreaks.firstBreakIndex; l <= this.scaleBreaks.lastBreakIndex; l++) f.moveTo(r, h), f.lineTo(r, this.scaleBreaks._appliedBreaks[l].startPixel + c), h = this.scaleBreaks._appliedBreaks[l].endPixel + b;
                h && (f.moveTo(r, h), f.lineTo(r, d));
                f.stroke()
            }
            v &&
                (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx && this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), f.clearRect(0, 0, this.chart.width, this.chart.height));
            f.restore()
        };
        A.prototype.getPixelCoordinatesOnAxis = function (a) {
            var f = {};
            if ("bottom" === this._position || "top" === this._position) f.x = this.convertValueToPixel(a), f.y = this.lineCoordinates.y1;
            if ("left" === this._position || "right" === this._position) f.y =
                this.convertValueToPixel(a), f.x = this.lineCoordinates.x2;
            return f
        };
        A.prototype.convertPixelToValue = function (a) {
            if ("undefined" === typeof a) return null;
            var f = 0,
                b = 0,
                c, f = !0,
                h = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
                b = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
            if (this.logarithmic) {
                a = c = Math.pow(this.logarithmBase, (b - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
                if (b <= this.conversionParameters.reference === ("left" === this._position ||
                        "right" === this._position) !== this.reversed)
                    for (b = 0; b < h.length; b++) {
                        if (!(h[b].endValue < this.conversionParameters.minimum))
                            if (f)
                                if (h[b].startValue < this.conversionParameters.minimum) {
                                    if (1 < h[b].size && this.conversionParameters.minimum * Math.pow(h[b].endValue / h[b].startValue, Math.log(c) / Math.log(h[b].size)) < h[b].endValue) {
                                        a = Math.pow(h[b].endValue / h[b].startValue, Math.log(c) / Math.log(h[b].size));
                                        break
                                    } else a *= h[b].endValue / this.conversionParameters.minimum / Math.pow(h[b].size, Math.log(h[b].endValue / this.conversionParameters.minimum) /
                                        Math.log(h[b].endValue / h[b].startValue)), c /= Math.pow(h[b].size, Math.log(h[b].endValue / this.conversionParameters.minimum) / Math.log(h[b].endValue / h[b].startValue));
                                    f = !1
                                } else if (c > h[b].startValue / this.conversionParameters.minimum) {
                            c /= h[b].startValue / this.conversionParameters.minimum;
                            if (c < h[b].size) {
                                a *= Math.pow(h[b].endValue / h[b].startValue, 1 === h[b].size ? 1 : Math.log(c) / Math.log(h[b].size)) / c;
                                break
                            } else a *= h[b].endValue / h[b].startValue / h[b].size;
                            c /= h[b].size;
                            f = !1
                        } else break;
                        else if (c > h[b].startValue / h[b -
                                1].endValue) {
                            c /= h[b].startValue / h[b - 1].endValue;
                            if (c < h[b].size) {
                                a *= Math.pow(h[b].endValue / h[b].startValue, 1 === h[b].size ? 1 : Math.log(c) / Math.log(h[b].size)) / c;
                                break
                            } else a *= h[b].endValue / h[b].startValue / h[b].size;
                            c /= h[b].size
                        } else break
                    } else
                        for (b = h.length - 1; 0 <= b; b--)
                            if (!(h[b].startValue > this.conversionParameters.minimum))
                                if (f)
                                    if (h[b].endValue > this.conversionParameters.minimum) {
                                        if (1 < h[b].size && this.conversionParameters.minimum * Math.pow(h[b].endValue / h[b].startValue, Math.log(c) / Math.log(h[b].size)) >
                                            h[b].startValue) {
                                            a = Math.pow(h[b].endValue / h[b].startValue, Math.log(c) / Math.log(h[b].size));
                                            break
                                        } else a *= h[b].startValue / this.conversionParameters.minimum * Math.pow(h[b].size, Math.log(h[b].startValue / this.conversionParameters.minimum) / Math.log(h[b].endValue / h[b].startValue)) * c, c *= Math.pow(h[b].size, Math.log(this.conversionParameters.minimum / h[b].startValue) / Math.log(h[b].endValue / h[b].startValue));
                                        f = !1
                                    } else if (c < h[b].endValue / this.conversionParameters.minimum) {
                    c /= h[b].endValue / this.conversionParameters.minimum;
                    if (c > 1 / h[b].size) {
                        a *= Math.pow(h[b].endValue / h[b].startValue, 1 >= h[b].size ? 1 : Math.log(c) / Math.log(h[b].size)) * c;
                        break
                    } else a /= h[b].endValue / h[b].startValue / h[b].size;
                    c *= h[b].size;
                    f = !1
                } else break;
                else if (c < h[b].endValue / h[b + 1].startValue) {
                    c /= h[b].endValue / h[b + 1].startValue;
                    if (c > 1 / h[b].size) {
                        a *= Math.pow(h[b].endValue / h[b].startValue, 1 >= h[b].size ? 1 : Math.log(c) / Math.log(h[b].size)) * c;
                        break
                    } else a /= h[b].endValue / h[b].startValue / h[b].size;
                    c *= h[b].size
                } else break;
                f = a * this.viewportMinimum
            } else {
                a = c = (b - this.conversionParameters.reference) /
                    this.conversionParameters.pixelPerUnit;
                if (b <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
                    for (b = 0; b < h.length; b++) {
                        if (!(h[b].endValue < this.conversionParameters.minimum))
                            if (f)
                                if (h[b].startValue < this.conversionParameters.minimum) {
                                    if (h[b].size && this.conversionParameters.minimum + c * (h[b].endValue - h[b].startValue) / h[b].size < h[b].endValue) {
                                        a = 0 >= h[b].size ? 0 : c * (h[b].endValue - h[b].startValue) / h[b].size;
                                        break
                                    } else a += h[b].endValue - this.conversionParameters.minimum -
                                        h[b].size * (h[b].endValue - this.conversionParameters.minimum) / (h[b].endValue - h[b].startValue), c -= h[b].size * (h[b].endValue - this.conversionParameters.minimum) / (h[b].endValue - h[b].startValue);
                                    f = !1
                                } else if (c > h[b].startValue - this.conversionParameters.minimum) {
                            c -= h[b].startValue - this.conversionParameters.minimum;
                            if (c < h[b].size) {
                                a += (h[b].endValue - h[b].startValue) * (0 === h[b].size ? 1 : c / h[b].size) - c;
                                break
                            } else a += h[b].endValue - h[b].startValue - h[b].size;
                            c -= h[b].size;
                            f = !1
                        } else break;
                        else if (c > h[b].startValue - h[b -
                                1].endValue) {
                            c -= h[b].startValue - h[b - 1].endValue;
                            if (c < h[b].size) {
                                a += (h[b].endValue - h[b].startValue) * (0 === h[b].size ? 1 : c / h[b].size) - c;
                                break
                            } else a += h[b].endValue - h[b].startValue - h[b].size;
                            c -= h[b].size
                        } else break
                    } else
                        for (b = h.length - 1; 0 <= b; b--)
                            if (!(h[b].startValue > this.conversionParameters.minimum))
                                if (f)
                                    if (h[b].endValue > this.conversionParameters.minimum)
                                        if (h[b].size && this.conversionParameters.minimum + c * (h[b].endValue - h[b].startValue) / h[b].size > h[b].startValue) {
                                            a = 0 >= h[b].size ? 0 : c * (h[b].endValue - h[b].startValue) /
                                                h[b].size;
                                            break
                                        } else a += h[b].startValue - this.conversionParameters.minimum + h[b].size * (this.conversionParameters.minimum - h[b].startValue) / (h[b].endValue - h[b].startValue), c += h[b].size * (this.conversionParameters.minimum - h[b].startValue) / (h[b].endValue - h[b].startValue), f = !1;
                else if (c < h[b].endValue - this.conversionParameters.minimum) {
                    c -= h[b].endValue - this.conversionParameters.minimum;
                    if (c > -1 * h[b].size) {
                        a += (h[b].endValue - h[b].startValue) * (0 === h[b].size ? 1 : c / h[b].size) + c;
                        break
                    } else a -= h[b].endValue - h[b].startValue -
                        h[b].size;
                    c += h[b].size;
                    f = !1
                } else break;
                else if (c < h[b].endValue - h[b + 1].startValue) {
                    c -= h[b].endValue - h[b + 1].startValue;
                    if (c > -1 * h[b].size) {
                        a += (h[b].endValue - h[b].startValue) * (0 === h[b].size ? 1 : c / h[b].size) + c;
                        break
                    } else a -= h[b].endValue - h[b].startValue - h[b].size;
                    c += h[b].size
                } else break;
                f = this.conversionParameters.minimum + a
            }
            return f
        };
        A.prototype.convertValueToPixel = function (a) {
            a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
            return this.logarithmic ? this.conversionParameters.reference +
                this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase + 0.5 << 0 : "axisX" === this.type ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5
        };
        A.prototype.getApparentDifference = function (a, f, b, c) {
            var h = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            if (this.logarithmic) {
                b = e(b) ? f / a : b;
                for (var d = 0; d < h.length && !(f < h[d].startValue); d++) a > h[d].endValue || (a <= h[d].startValue && f >= h[d].endValue ? b = b / h[d].endValue * h[d].startValue * h[d].size : a >= h[d].startValue && f >= h[d].endValue ? b = b / h[d].endValue * a * Math.pow(h[d].size, Math.log(h[d].endValue / a) / Math.log(h[d].endValue / h[d].startValue)) : a <= h[d].startValue && f <= h[d].endValue ? b = b / f * h[d].startValue * Math.pow(h[d].size, Math.log(f / h[d].startValue) / Math.log(h[d].endValue / h[d].startValue)) : !c && (a > h[d].startValue && f < h[d].endValue) &&
                    (b = a * Math.pow(h[d].size, Math.log(f / a) / Math.log(h[d].endValue / h[d].startValue))))
            } else
                for (b = e(b) ? Math.abs(f - a) : b, d = 0; d < h.length && !(f < h[d].startValue); d++) a > h[d].endValue || (a <= h[d].startValue && f >= h[d].endValue ? b = b - h[d].endValue + h[d].startValue + h[d].size : a > h[d].startValue && f >= h[d].endValue ? b = b - h[d].endValue + a + h[d].size * (h[d].endValue - a) / (h[d].endValue - h[d].startValue) : a <= h[d].startValue && f < h[d].endValue ? b = b - f + h[d].startValue + h[d].size * (f - h[d].startValue) / (h[d].endValue - h[d].startValue) : !c && (a > h[d].startValue &&
                    f < h[d].endValue) && (b = a + h[d].size * (f - a) / (h[d].endValue - h[d].startValue)));
            return b
        };
        A.prototype.setViewPortRange = function (a, f) {
            this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, f);
            this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, f)
        };
        A.prototype.getXValueAt = function (a) {
            if (!a) return null;
            var f = null;
            "left" === this._position ? f = this.convertPixelToValue(a.y) : "bottom" === this._position && (f = this.convertPixelToValue(a.x));
            return f
        };
        A.prototype.calculateValueToPixelConversionParameters =
            function (a) {
                a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
                var f = {
                        pixelPerUnit: null,
                        minimum: null,
                        reference: null
                    },
                    b = this.lineCoordinates.width,
                    c = this.lineCoordinates.height,
                    b = "bottom" === this._position || "top" === this._position ? b : c,
                    c = Math.abs(this.range);
                if (this.logarithmic)
                    for (var d = 0; d < a.length && !(this.viewportMaximum < a[d].startValue); d++) this.viewportMinimum > a[d].endValue || (this.viewportMinimum >= a[d].startValue && this.viewportMaximum <= a[d].endValue ? b = 0 : this.viewportMinimum <= a[d].startValue &&
                        this.viewportMaximum >= a[d].endValue ? (c = c / a[d].endValue * a[d].startValue, b = 0 < a[d].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d].spacing) / 100) : b - Math.min(a[d].spacing, 0.1 * b)) : this.viewportMinimum > a[d].startValue && this.viewportMaximum >= a[d].endValue ? (c = c / a[d].endValue * this.viewportMinimum, b = 0 < a[d].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d].spacing) / 100 * Math.log(a[d].endValue / this.viewportMinimum) / Math.log(a[d].endValue / a[d].startValue)) : b - Math.min(a[d].spacing, 0.1 * b) * Math.log(a[d].endValue /
                            this.viewportMinimum) / Math.log(a[d].endValue / a[d].startValue)) : this.viewportMinimum <= a[d].startValue && this.viewportMaximum < a[d].endValue && (c = c / this.viewportMaximum * a[d].startValue, b = 0 < a[d].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d].spacing) / 100 * Math.log(this.viewportMaximum / a[d].startValue) / Math.log(a[d].endValue / a[d].startValue)) : b - Math.min(a[d].spacing, 0.1 * b) * Math.log(this.viewportMaximum / a[d].startValue) / Math.log(a[d].endValue / a[d].startValue)));
                else
                    for (d = 0; d < a.length && !(this.viewportMaximum <
                            a[d].startValue); d++) this.viewportMinimum > a[d].endValue || (this.viewportMinimum >= a[d].startValue && this.viewportMaximum <= a[d].endValue ? b = 0 : this.viewportMinimum <= a[d].startValue && this.viewportMaximum >= a[d].endValue ? (c = c - a[d].endValue + a[d].startValue, b = 0 < a[d].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d].spacing) / 100) : b - Math.min(a[d].spacing, 0.1 * b)) : this.viewportMinimum > a[d].startValue && this.viewportMaximum >= a[d].endValue ? (c = c - a[d].endValue + this.viewportMinimum, b = 0 < a[d].spacing.toString().indexOf("%") ?
                        b * (1 - parseFloat(a[d].spacing) / 100 * (a[d].endValue - this.viewportMinimum) / (a[d].endValue - a[d].startValue)) : b - Math.min(a[d].spacing, 0.1 * b) * (a[d].endValue - this.viewportMinimum) / (a[d].endValue - a[d].startValue)) : this.viewportMinimum <= a[d].startValue && this.viewportMaximum < a[d].endValue && (c = c - this.viewportMaximum + a[d].startValue, b = 0 < a[d].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d].spacing) / 100 * (this.viewportMaximum - a[d].startValue) / (a[d].endValue - a[d].startValue)) : b - Math.min(a[d].spacing, 0.1 * b) * (this.viewportMaximum -
                        a[d].startValue) / (a[d].endValue - a[d].startValue)));
                f.minimum = this.viewportMinimum;
                f.maximum = this.viewportMaximum;
                f.range = c;
                if ("bottom" === this._position || "top" === this._position) this.logarithmic ? (f.lnLogarithmBase = Math.log(this.logarithmBase), f.pixelPerUnit = (this.reversed ? -1 : 1) * b * f.lnLogarithmBase / Math.log(Math.abs(c))) : f.pixelPerUnit = (this.reversed ? -1 : 1) * b / Math.abs(c), f.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
                if ("left" === this._position || "right" === this._position) this.logarithmic ?
                    (f.lnLogarithmBase = Math.log(this.logarithmBase), f.pixelPerUnit = (this.reversed ? 1 : -1) * b * f.lnLogarithmBase / Math.log(Math.abs(c))) : f.pixelPerUnit = (this.reversed ? 1 : -1) * b / Math.abs(c), f.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
                this.conversionParameters = f
            };
        A.prototype.calculateAxisParameters = function () {
            if (this.logarithmic) this.calculateLogarithmicAxisParameters();
            else {
                var a = this.chart.layoutManager.getFreeSpace(),
                    f = !1,
                    b = !1;
                "bottom" === this._position || "top" === this._position ? (this.maxWidth =
                    a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
                var a = "axisX" === this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40,
                    c = 4;
                "axisX" === this.type && (c = 600 > this.maxWidth ? 8 : 6);
                var a = Math.max(c, Math.floor(this.maxWidth / a)),
                    d, g, r, c = 0;
                !e(this.options.viewportMinimum) && (!e(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum) && (this.viewportMinimum = this.viewportMaximum = null);
                if (e(this.options.viewportMinimum) && !e(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum)) this.viewportMinimum = this.sessionVariables.newViewportMinimum;
                else if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
                if (e(this.options.viewportMaximum) && !e(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum)) this.viewportMaximum = this.sessionVariables.newViewportMaximum;
                else if (null === this.viewportMaximum ||
                    isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
                if (this.scaleBreaks)
                    for (c = 0; c < this.scaleBreaks._appliedBreaks.length; c++)
                        if ((!e(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[c].startValue || !e(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[c].startValue || !e(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[c].startValue) && (!e(this.sessionVariables.newViewportMaximum) &&
                                this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[c].endValue || !e(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[c].endValue || !e(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[c].endValue)) {
                            this.scaleBreaks._appliedBreaks.splice(c, 1);
                            break
                        } if ("axisX" === this.type) {
                    if (this.dataSeries && 0 < this.dataSeries.length)
                        for (d = 0; d < this.dataSeries.length; d++) "dateTime" === this.dataSeries[d].xValueType && (b = !0);
                    d = null !== this.viewportMinimum ?
                        this.viewportMinimum : this.dataInfo.viewPortMin;
                    g = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
                    0 === g - d && (c = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, g += c, d -= c);
                    Infinity !== this.dataInfo.minDiff ? r = this.dataInfo.minDiff : 1 < g - d ? r = 0.5 * Math.abs(g - d) : (r = 1, b && (f = !0))
                } else "axisY" === this.type && (d = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, g = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(d) ||
                    isFinite(g) ? isFinite(d) ? isFinite(g) || (g = d) : d = g : (g = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, d = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), 0 === d && 0 === g ? (g += 9, d = 0) : 0 === g - d ? (c = Math.min(Math.abs(0.01 * Math.abs(g)), 5), g += c, d -= c) : d > g ? (c = Math.min(0.01 * Math.abs(this.getApparentDifference(g, d, null, !0)), 5), 0 <= g ? d = g - c : g = isFinite(d) ? d + c : 0) : (c = Math.min(0.01 * Math.abs(this.getApparentDifference(d, g, null, !0)), 0.05), 0 !== g && (g += c), 0 !== d && (d -=
                        c)), r = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - d ? 0.5 * Math.abs(g - d) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < d && (d = 0), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > g && (g = 0));
                c = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? d : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? g : this.viewportMaximum, null, !0);
                if ("axisX" === this.type && b) {
                    this.intervalType ||
                        (c / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : c / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : c / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : c / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : c / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : c / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : c / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : c / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : c / 250 <= a ? (this.interval = 250, this.intervalType =
                                "millisecond") : c / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : c / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : c / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : c / (1 * S.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : c / (2 * S.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : c / (5 * S.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : c / (10 * S.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : c / (15 * S.secondDuration) <=
                            a ? (this.interval = 15, this.intervalType = "second") : c / (20 * S.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : c / (30 * S.secondDuration) <= a ? (this.interval = 30, this.intervalType = "second") : c / (1 * S.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : c / (2 * S.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : c / (5 * S.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : c / (10 * S.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : c / (15 * S.minuteDuration) <=
                            a ? (this.interval = 15, this.intervalType = "minute") : c / (20 * S.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : c / (30 * S.minuteDuration) <= a ? (this.interval = 30, this.intervalType = "minute") : c / (1 * S.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : c / (2 * S.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : c / (3 * S.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : c / (6 * S.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : c / (1 * S.dayDuration) <= a ? (this.interval = 1,
                                this.intervalType = "day") : c / (2 * S.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : c / (4 * S.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : c / (1 * S.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") : c / (2 * S.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : c / (3 * S.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : c / (1 * S.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : c / (2 * S.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : c / (3 * S.monthDuration) <=
                            a ? (this.interval = 3, this.intervalType = "month") : c / (6 * S.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = c / (1 * S.yearDuration) <= a ? 1 : c / (2 * S.yearDuration) <= a ? 2 : c / (4 * S.yearDuration) <= a ? 4 : Math.floor(A.getNiceNumber(c / (a - 1), !0) / S.yearDuration), this.intervalType = "year"));
                    if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = d - r / 2;
                    if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = g + r / 2;
                    f ? this.autoValueFormatString = "MMM DD YYYY HH:mm" :
                        "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString =
                            "fff'ms'");
                    this.valueFormatString || (this.valueFormatString = this.autoValueFormatString)
                } else {
                    this.intervalType = "number";
                    c = A.getNiceNumber(c, !1);
                    this.interval = this.options && 0 < this.options.interval ? this.options.interval : A.getNiceNumber(c / (a - 1), !0);
                    if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? d - r / 2 : Math.floor(d / this.interval) * this.interval;
                    if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? g + r / 2 :
                        Math.ceil(g / this.interval) * this.interval;
                    0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10), this.options && "undefined" === typeof this.options.interval && (this.interval = A.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)))
                }
                if (null === this.minimum || null === this.maximum)
                    if ("axisX" === this.type ? (d = null !== this.minimum ? this.minimum : this.dataInfo.min, g = null !== this.maximum ?
                            this.maximum : this.dataInfo.max, 0 === g - d && (c = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, g += c, d -= c), r = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - d ? 0.5 * Math.abs(g - d) : 1) : "axisY" === this.type && (d = null !== this.minimum ? this.minimum : this.dataInfo.min, g = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(d) || isFinite(g) ? 0 === d && 0 === g ? (g += 9, d = 0) : 0 === g - d ? (c = Math.min(Math.abs(0.01 * Math.abs(g)), 5), g += c, d -= c) : d > g ? (c = Math.min(0.01 * Math.abs(this.getApparentDifference(g,
                            d, null, !0)), 5), 0 <= g ? d = g - c : g = isFinite(d) ? d + c : 0) : (c = Math.min(0.01 * Math.abs(this.getApparentDifference(d, g, null, !0)), 0.05), 0 !== g && (g += c), 0 !== d && (d -= c)) : (g = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, d = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), r = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - d ? 0.5 * Math.abs(g - d) : 1, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < d && (d = 0), this.includeZero && (null === this.maximum ||
                            isNaN(this.maximum)) && 0 > g && (g = 0)), Math.abs(this.getApparentDifference(d, g, null, !0)), "axisX" === this.type && b) {
                        this.valueType = "dateTime";
                        if (null === this.minimum || isNaN(this.minimum)) this.minimum = d - r / 2;
                        if (null === this.maximum || isNaN(this.maximum)) this.maximum = g + r / 2
                    } else this.intervalType = this.valueType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? d - r / 2 : Math.floor(d / this.interval) * this.interval, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ?
                        Infinity : this.sessionVariables.viewportMinimum)), null === this.maximum && (this.maximum = "axisX" === this.type ? g + r / 2 : Math.ceil(g / this.interval) * this.interval, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
                e(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum =
                    Math.max(this.viewportMinimum, this.minimum));
                e(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
                this.range = this.viewportMaximum - this.viewportMinimum;
                this.intervalStartPosition = "axisX" === this.type && b ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
                this.valueFormatString || (this.valueFormatString = A.generateValueFormatString(this.range,
                    2))
            }
        };
        A.prototype.calculateLogarithmicAxisParameters = function () {
            var a = this.chart.layoutManager.getFreeSpace(),
                f = Math.log(this.logarithmBase),
                b;
            "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
            var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3),
                c, d, g, r;
            r = 1;
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum =
                this.minimum;
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
            if (this.scaleBreaks)
                for (r = 0; r < this.scaleBreaks._appliedBreaks.length; r++)
                    if ((!e(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[r].startValue || !e(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[r].startValue || !e(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[r].startValue) &&
                        (!e(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[r].endValue || !e(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[r].endValue || !e(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[r].endValue)) {
                        this.scaleBreaks._appliedBreaks.splice(r, 1);
                        break
                    }
            "axisX" === this.type ? (c = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, d = null !== this.viewportMaximum ?
                this.viewportMaximum : this.dataInfo.viewPortMax, 1 === d / c && (r = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), d *= r, c /= r), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : d / c > this.logarithmBase ? d / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (c = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, d = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 >= c && !isFinite(d) ? (d =
                    "undefined" === typeof this.options.interval ? 0 : this.options.interval, c = 1) : 0 >= c ? c = d : isFinite(d) || (d = c), 1 === c && 1 === d ? (d *= this.logarithmBase - 1 / this.logarithmBase, c = 1) : 1 === d / c ? (r = Math.min(d * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), d *= r, c /= r) : c > d ? (r = Math.min(c / d * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), 1 <= d ? c = d / r : d = c * r) : (r = Math.min(d / c * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== d && (d *= r), 1 !== c && (c /= r)), g = Infinity !== this.dataInfo.minDiff ?
                this.dataInfo.minDiff : d / c > this.logarithmBase ? d / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < c && (c = 1), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > d && (d = 1));
            r = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? d : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? c : this.viewportMinimum);
            var l = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ?
                d : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? c : this.viewportMinimum);
            this.intervalType = "number";
            r = Math.pow(this.logarithmBase, A.getNiceNumber(Math.abs(Math.log(r) / f), !1));
            this.options && 0 < this.options.interval ? this.interval = this.options.interval : (this.interval = A.getNiceExponent(Math.log(r) / f / (a - 1), !0), b = A.getNiceNumber(l / (a - 1), !0));
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? c / Math.sqrt(g) : Math.pow(this.logarithmBase,
                this.interval * Math.floor(Math.log(c) / f / this.interval));
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? d * Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(d) / f / this.interval));
            1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), this.options &&
                "undefined" === typeof this.options.interval && (this.interval = A.getNiceExponent(Math.ceil(Math.log(r) / f) / (a - 1)), b = A.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)));
            if (null === this.minimum || null === this.maximum) "axisX" === this.type ? (c = null !== this.minimum ? this.minimum : this.dataInfo.min, d = null !== this.maximum ? this.maximum : this.dataInfo.max, 1 === d / c && (r = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), d *= r, c /= r), g = Infinity !== this.dataInfo.minDiff ?
                this.dataInfo.minDiff : d / c > this.logarithmBase ? d / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (c = null !== this.minimum ? this.minimum : this.dataInfo.min, d = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(c) || isFinite(d) ? 1 === c && 1 === d ? (d *= this.logarithmBase, c /= this.logarithmBase) : 1 === d / c ? (r = Math.pow(this.logarithmBase, this.interval), d *= r, c /= r) : c > d ? (r = Math.min(0.01 * (c / d), 5), 1 <= d ? c = d / r : d = c * r) : (r = Math.min(d / c * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase,
                0.04)), 1 !== d && (d *= r), 1 !== c && (c /= r)) : (d = "undefined" === typeof this.options.interval ? 0 : this.options.interval, c = 1), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : d / c > this.logarithmBase ? d / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < c && (c = 1), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > d && (d = 1)), this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? c / Math.sqrt(g) : Math.pow(this.logarithmBase,
                this.interval * Math.floor(Math.log(c) / f / this.interval)), e(null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum) || (this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum :
                this.sessionVariables.viewportMinimum))), null === this.maximum && (this.maximum = "axisX" === this.type ? d * Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(d) / f / this.interval)), e(null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum) || (this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum ||
                isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum))), 1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
            this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
            this.viewportMaximum = Math.min(this.viewportMaximum,
                this.maximum);
            this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum || this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum || this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum);
            c =
                Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (f * this.interval) + 0.2) * this.interval);
            this.range = this.viewportMaximum / this.viewportMinimum;
            this.noTicks = a;
            if (!this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
                for (f = Math.floor(this.viewportMinimum / b + 0.5) * b; f < this.viewportMinimum;) f += b;
                this.equidistantInterval = !1;
                this.intervalStartPosition = f;
                this.interval = b
            } else this.options.interval || (b = Math.ceil(this.interval), this.range > this.interval &&
                (this.interval = b, c = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (f * this.interval) + 0.2) * this.interval))), this.equidistantInterval = !0, this.intervalStartPosition = c;
            if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", 1 > this.viewportMinimum)) {
                f = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
                if (isNaN(f) || !isFinite(f)) f = 2;
                if (2 < f)
                    for (r = 0; r < f - 2; r++) this.valueFormatString += "#"
            }
        };
        A.generateValueFormatString = function (a, d) {
            var b = "#,##0.",
                c = d;
            1 > a && (c += Math.floor(Math.abs(Math.log(a) /
                Math.LN10)), isNaN(c) || !isFinite(c)) && (c = d);
            for (var h = 0; h < c; h++) b += "#";
            return b
        };
        A.getNiceExponent = function (a, d) {
            var b = Math.floor(Math.log(a) / Math.LN10),
                c = a / Math.pow(10, b),
                c = 0 > b ? 1 >= c ? 1 : 5 >= c ? 5 : 10 : Math.max(Math.floor(c), 1);
            return -20 > b ? Number(c * Math.pow(10, b)) : Number((c * Math.pow(10, b)).toFixed(20))
        };
        A.getNiceNumber = function (a, d) {
            var b = Math.floor(Math.log(a) / Math.LN10),
                c = a / Math.pow(10, b),
                c = d ? 1.5 > c ? 1 : 3 > c ? 2 : 7 > c ? 5 : 10 : 1 >= c ? 1 : 2 >= c ? 2 : 5 >= c ? 5 : 10;
            return -20 > b ? Number(c * Math.pow(10, b)) : Number((c * Math.pow(10, b)).toFixed(20))
        };
        A.prototype.getLabelStartPoint = function () {
            var a = S[this.intervalType + "Duration"] * this.interval,
                a = new Date(Math.floor(this.viewportMinimum / a) * a);
            if ("millisecond" !== this.intervalType)
                if ("second" === this.intervalType) 0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
                else if ("minute" === this.intervalType) {
                if (0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0)
            } else if ("hour" === this.intervalType) {
                if (0 < a.getMinutes() || 0 < a.getSeconds() ||
                    0 < a.getMilliseconds()) a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
            } else if ("day" === this.intervalType) {
                if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
            } else if ("week" === this.intervalType) {
                if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0),
                    a.setSeconds(0), a.setMilliseconds(0)
            } else if ("month" === this.intervalType) {
                if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
            } else "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0),
                a.setSeconds(0), a.setMilliseconds(0));
            return a
        };
        ga(L, Z);
        ga(X, Z);
        X.prototype.createUserOptions = function (a) {
            if ("undefined" !== typeof a || this.options._isPlaceholder) {
                var d = 0;
                this.parent.options._isPlaceholder && this.parent.createUserOptions();
                this.options._isPlaceholder || (Da(this.parent[this.optionsName]), d = this.parent.options[this.optionsName].indexOf(this.options));
                this.options = "undefined" === typeof a ? {} : a;
                this.parent.options[this.optionsName][d] = this.options
            }
        };
        X.prototype.render = function (a) {
            if (0 !== this.spacing ||
                0 !== this.options.lineThickness && ("undefined" !== typeof this.options.lineThickness || 0 !== this.parent.lineThickness)) {
                var d = this.ctx,
                    b = this.ctx.globalAlpha;
                this.ctx = a || this.ctx;
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.ctx.clip();
                var c = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue),
                    h = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
                this.ctx.strokeStyle =
                    this.lineColor;
                this.ctx.fillStyle = this.color;
                this.ctx.beginPath();
                this.ctx.globalAlpha = 1;
                U(this.id);
                var g, e, r, l, m, n;
                a = Math.max(this.spacing, 3);
                var p = Math.max(0, this.lineThickness);
                this.ctx.lineWidth = p;
                this.ctx.setLineDash && this.ctx.setLineDash(P(this.lineDashType, p));
                if ("bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position)
                    if (c = 1 === p % 2 ? (c.x << 0) + 0.5 : c.x << 0, e = 1 === p % 2 ? (h.x << 0) + 0.5 : h.x << 0, "top" === this.scaleBreaks.parent._position ? (h = this.chart.plotArea.y1, r = this.chart.plotArea.y2 +
                            p / 2 + 0.5 << 0) : (h = this.chart.plotArea.y2, r = this.chart.plotArea.y1 - p / 2 + 0.5 << 0, a *= -1), this.bounds = {
                            x1: c - p / 2,
                            y1: h,
                            x2: e + p / 2,
                            y2: r
                        }, this.ctx.moveTo(c, h), "straight" === this.type || "top" === this.scaleBreaks.parent._position && 0 >= a || "bottom" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(c, r), this.ctx.lineTo(e, r), this.ctx.lineTo(e, h);
                    else if ("wavy" === this.type) {
                    l = c;
                    m = h;
                    g = 0.5;
                    n = (r - m) / a / 3;
                    for (var q = 0; q < n; q++) this.ctx.bezierCurveTo(l + g * a, m + a, l + g * a, m + 2 * a, l, m + 3 * a), m += 3 * a, g *= -1;
                    this.ctx.bezierCurveTo(l + g * a,
                        m + a, l + g * a, m + 2 * a, l, m + 3 * a);
                    l = e;
                    g *= -1;
                    this.ctx.lineTo(l, m);
                    for (q = 0; q < n; q++) this.ctx.bezierCurveTo(l + g * a, m - a, l + g * a, m - 2 * a, l, m - 3 * a), m -= 3 * a, g *= -1
                } else {
                    if ("zigzag" === this.type) {
                        g = -1;
                        m = h + a;
                        l = c + a;
                        n = (r - m) / a / 2;
                        for (q = 0; q < n; q++) this.ctx.lineTo(l, m), l += 2 * g * a, m += 2 * a, g *= -1;
                        this.ctx.lineTo(l, m);
                        l += e - c;
                        for (q = 0; q < n + 1; q++) this.ctx.lineTo(l, m), l += 2 * g * a, m -= 2 * a, g *= -1;
                        this.ctx.lineTo(l + g * a, m + a)
                    }
                } else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position)
                    if (h = 1 === p % 2 ? (h.y << 0) + 0.5 : h.y <<
                        0, r = 1 === p % 2 ? (c.y << 0) + 0.5 : c.y << 0, "left" === this.scaleBreaks.parent._position ? (c = this.chart.plotArea.x1, e = this.chart.plotArea.x2 + p / 2 + 0.5 << 0) : (c = this.chart.plotArea.x2, e = this.chart.plotArea.x1 - p / 2 + 0.5 << 0, a *= -1), this.bounds = {
                            x1: c,
                            y1: h - p / 2,
                            x2: e,
                            y2: r + p / 2
                        }, this.ctx.moveTo(c, h), "straight" === this.type || "left" === this.scaleBreaks.parent._position && 0 >= a || "right" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(e, h), this.ctx.lineTo(e, r), this.ctx.lineTo(c, r);
                    else if ("wavy" === this.type) {
                    l = c;
                    m = h;
                    g = 0.5;
                    n =
                        (e - l) / a / 3;
                    for (q = 0; q < n; q++) this.ctx.bezierCurveTo(l + a, m + g * a, l + 2 * a, m + g * a, l + 3 * a, m), l += 3 * a, g *= -1;
                    this.ctx.bezierCurveTo(l + a, m + g * a, l + 2 * a, m + g * a, l + 3 * a, m);
                    m = r;
                    g *= -1;
                    this.ctx.lineTo(l, m);
                    for (q = 0; q < n; q++) this.ctx.bezierCurveTo(l - a, m + g * a, l - 2 * a, m + g * a, l - 3 * a, m), l -= 3 * a, g *= -1
                } else if ("zigzag" === this.type) {
                    g = 1;
                    m = h - a;
                    l = c + a;
                    n = (e - l) / a / 2;
                    for (q = 0; q < n; q++) this.ctx.lineTo(l, m), m += 2 * g * a, l += 2 * a, g *= -1;
                    this.ctx.lineTo(l, m);
                    m += r - h;
                    for (q = 0; q < n + 1; q++) this.ctx.lineTo(l, m), m += 2 * g * a, l -= 2 * a, g *= -1;
                    this.ctx.lineTo(l + a, m + g * a)
                }
                0 < p && this.ctx.stroke();
                this.ctx.closePath();
                this.ctx.globalAlpha = this.fillOpacity;
                this.ctx.globalCompositeOperation = "destination-over";
                this.ctx.fill();
                this.ctx.restore();
                this.ctx.globalAlpha = b;
                this.ctx = d
            }
        };
        ga(N, Z);
        N.prototype.createUserOptions = function (a) {
            if ("undefined" !== typeof a || this.options._isPlaceholder) {
                var d = 0;
                this.parent.options._isPlaceholder && this.parent.createUserOptions();
                this.options._isPlaceholder || (Da(this.parent.stripLines), d = this.parent.options.stripLines.indexOf(this.options));
                this.options = "undefined" ===
                    typeof a ? {} : a;
                this.parent.options.stripLines[d] = this.options
            }
        };
        N.prototype.render = function () {
            this.ctx.save();
            var a = this.parent.getPixelCoordinatesOnAxis(this.value),
                d = Math.abs("pixel" === this._thicknessType ? this.thickness : Math.abs(this.parent.convertValueToPixel(this.endValue) - this.parent.convertValueToPixel(this.startValue)));
            if (0 < d) {
                var b = null === this.opacity ? 1 : this.opacity;
                this.ctx.strokeStyle = this.color;
                this.ctx.beginPath();
                var c = this.ctx.globalAlpha;
                this.ctx.globalAlpha = b;
                U(this.id);
                var h, g, e,
                    r;
                this.ctx.lineWidth = d;
                this.ctx.setLineDash && this.ctx.setLineDash(P(this.lineDashType, d));
                if ("bottom" === this.parent._position || "top" === this.parent._position) h = g = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, e = this.chart.plotArea.y1, r = this.chart.plotArea.y2, this.bounds = {
                    x1: h - d / 2,
                    y1: e,
                    x2: g + d / 2,
                    y2: r
                };
                else if ("left" === this.parent._position || "right" === this.parent._position) e = r = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, h = this.chart.plotArea.x1, g = this.chart.plotArea.x2, this.bounds = {
                    x1: h,
                    y1: e - d / 2,
                    x2: g,
                    y2: r + d / 2
                };
                this.ctx.moveTo(h, e);
                this.ctx.lineTo(g, r);
                this.ctx.stroke();
                this.ctx.globalAlpha = c
            }
            this.ctx.restore()
        };
        ga(T, Z);
        T.prototype.showAt = function (a) {
            if (!this.enabled) return !1;
            var d = this.chart,
                b = !1;
            d.resetOverlayedCanvas();
            d.clearedOverlayedCanvas = this.parent.type;
            if ("xySwapped" === d.plotInfo.axisPlacement)
                if ("bottom" === this.parent._position)
                    for (var c = 0; c < d.axisY.length; c++) this.parent === d.axisY[c] && (d.axisY[c]._crosshairValue = a >= d.axisY[c].viewportMinimum && a <= d.axisY[c].viewportMaximum ? a : null);
                else if ("top" === this.parent._position)
                for (c = 0; c < d.axisY2.length; c++) this.parent === d.axisY2[c] && (d.axisY2[c]._crosshairValue = a >= d.axisY2[c].viewportMinimum && a <= d.axisY2[c].viewportMaximum ? a : null);
            else if ("left" === this.parent._position)
                for (c = 0; c < d.axisX.length; c++) this.parent === d.axisX[c] && (d.axisX[c]._crosshairValue = a >= d.axisX[c].viewportMinimum && a <= d.axisX[c].viewportMaximum ? a : null);
            else {
                if ("right" === this.parent._position)
                    for (c = 0; c < d.axisX2.length; c++) this.parent === d.axisX2[c] && (d.axisX2[c]._crosshairValue =
                        a >= d.axisX2[c].viewportMinimum && a <= d.axisX2[c].viewportMaximum ? a : null)
            } else if ("bottom" === this.parent._position)
                for (c = 0; c < d.axisX.length; c++) this.parent === d.axisX[c] && (d.axisX[c]._crosshairValue = a >= d.axisX[c].viewportMinimum && a <= d.axisX[c].viewportMaximum ? a : null);
            else if ("top" === this.parent._position)
                for (c = 0; c < d.axisX2.length; c++) this.parent === d.axisX2[c] && (d.axisX2[c]._crosshairValue = a >= d.axisX2[c].viewportMinimum && a <= d.axisX2[c].viewportMaximum ? a : null);
            else if ("left" === this.parent._position)
                for (c =
                    0; c < d.axisY.length; c++) this.parent === d.axisY[c] && (d.axisY[c]._crosshairValue = a >= d.axisY[c].viewportMinimum && a <= d.axisY[c].viewportMaximum ? a : null);
            else if ("right" === this.parent._position)
                for (c = 0; c < d.axisY2.length; c++) this.parent === d.axisY2[c] && (d.axisY2[c]._crosshairValue = a >= d.axisY2[c].viewportMinimum && a <= d.axisY2[c].viewportMaximum ? a : null);
            for (c = 0; c < d.axisX.length; c++) a = d.axisX[c]._crosshairValue, d.axisX[c].crosshair && (d.axisX[c].crosshair.enabled && !e(a) && a >= d.axisX[c].viewportMinimum && a <= d.axisX[c].viewportMaximum) &&
                (d.axisX[c].showCrosshair(a), d.axisX[c].crosshair._updatedValue = a, this === d.axisX[c].crosshair && (b = !0));
            for (c = 0; c < d.axisX2.length; c++) a = d.axisX2[c]._crosshairValue, d.axisX2[c].crosshair && (d.axisX2[c].crosshair.enabled && !e(a) && a >= d.axisX2[c].viewportMinimum && a <= d.axisX2[c].viewportMaximum) && (d.axisX2[c].showCrosshair(a), d.axisX2[c].crosshair._updatedValue = a, this === d.axisX2[c].crosshair && (b = !0));
            for (c = 0; c < d.axisY.length; c++) a = d.axisY[c]._crosshairValue, d.axisY[c].crosshair && (d.axisY[c].crosshair.enabled &&
                !e(a) && a >= d.axisY[c].viewportMinimum && a <= d.axisY[c].viewportMaximum) && (d.axisY[c].showCrosshair(a), d.axisY[c].crosshair._updatedValue = a, this === d.axisY[c].crosshair && (b = !0));
            for (c = 0; c < d.axisY2.length; c++) a = d.axisY2[c]._crosshairValue, d.axisY2[c].crosshair && (d.axisY2[c].crosshair.enabled && !e(a) && d._crosshairY2Value >= d.axisY2[c].viewportMinimum && d._crosshairY2Value <= d.axisY2[c].viewportMaximum) && (d.axisY2[c].showCrosshair(a), d.axisY2[c].crosshair._updatedValue = a, this === d.axisY2[c].crosshair && (b = !0));
            this.chart.toolTip && this.chart.toolTip._entries && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
            return b
        };
        T.prototype.hide = function () {
            this.chart.resetOverlayedCanvas();
            this.chart.renderCrosshairs(this.parent);
            this._hidden = !0
        };
        T.prototype.render = function (a, d, b) {
            var c, h, g, r, l = null,
                y = null,
                m = null,
                n = "";
            if (!this.valueFormatString)
                if ("dateTime" === this.parent.valueType) this.valueFormatString = this.parent.valueFormatString;
                else {
                    var p = 0,
                        p = "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 <
                        this.parent.range ? 0 : 500 < this.chart.width && 25 > this.parent.range ? 2 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0) : 50 < this.parent.range ? 0 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0);
                    this.valueFormatString = A.generateValueFormatString(this.parent.range, p)
                } var m = null === this.opacity ? 1 : this.opacity,
                p = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit *
                    this.thickness),
                q = this.chart.overlaidCanvasCtx,
                k = q.globalAlpha;
            q.globalAlpha = m;
            q.beginPath();
            q.strokeStyle = this.color;
            q.lineWidth = p;
            q.save();
            this.labelFontSize = e(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize;
            this.labelMaxWidth = e(this.options.labelMaxWidth) ? 0.3 * this.chart.width : this.labelMaxWidth;
            this.labelMaxHeight = e(this.options.labelWrap) || this.labelWrap ? 0.3 * this.chart.height : 2 * this.labelFontSize;
            0 < p && q.setLineDash && q.setLineDash(P(this.lineDashType, p));
            m = new ma(q, {
                x: 0,
                y: 0,
                padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 4
                },
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                maxWidth: this.labelMaxWidth,
                maxHeight: this.labelMaxHeight,
                angle: this.labelAngle,
                text: n,
                horizontalAlign: "left",
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
            });
            if (this.snapToDataPoint) {
                var s =
                    0,
                    n = [];
                if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                    var u = null;
                    if ("bottom" === this.parent._position || "top" === this.parent._position) s = this.parent.dataSeries[0].axisX.convertPixelToValue({
                        y: d
                    });
                    else if ("left" === this.parent._position || "right" === this.parent._position) s = this.parent.convertPixelToValue({
                        y: d
                    });
                    for (var v = 0; v < this.parent.dataSeries.length; v++)(u = this.parent.dataSeries[v].getDataPointAtX(s, !0)) && 0 <= u.index && (u.dataSeries = this.parent.dataSeries[v], null !== u.dataPoint.y && u.dataSeries.visible &&
                        n.push(u));
                    u = null;
                    if (0 === n.length) return;
                    n.sort(function (a, b) {
                        return a.distance - b.distance
                    });
                    u = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y));
                    v = 0;
                    if ("rangeBar" === n[0].dataSeries.type || "error" === n[0].dataSeries.type)
                        for (var u = Math.abs(a - this.parent.convertValueToPixel(n[v].dataPoint.y[0])), w = 0, s = 0; s < n.length; s++)
                            if (n[s].dataPoint.y && n[s].dataPoint.y.length)
                                for (var t = 0; t < n[s].dataPoint.y.length; t++) w = Math.abs(a - this.parent.convertValueToPixel(n[s].dataPoint.y[t])), w < u && (u = w, v = s);
                            else w =
                                Math.abs(a - this.parent.convertValueToPixel(n[s].dataPoint.y)), w < u && (u = w, v = s);
                    else if ("stackedBar" === n[0].dataSeries.type)
                        for (var u = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y)), x = w = 0, s = v = 0; s < n.length; s++)
                            if (n[s].dataPoint.y && n[s].dataPoint.y.length)
                                for (t = 0; t < n[s].dataPoint.y.length; t++) w = Math.abs(a - this.parent.convertValueToPixel(n[s].dataPoint.y[t])), w < u && (u = w, v = s);
                            else x += n[s].dataPoint.y, w = Math.abs(a - this.parent.convertValueToPixel(x)), w < u && (u = w, v = s);
                    else if ("stackedBar100" === n[0].dataSeries.type)
                        for (var u =
                                Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y)), z = x = w = 0, s = 0; s < n.length; s++)
                            if (n[s].dataPoint.y && n[s].dataPoint.y.length)
                                for (t = 0; t < n[s].dataPoint.y.length; t++) w = Math.abs(a - this.parent.convertValueToPixel(n[s].dataPoint.y[t])), w < u && (u = w, v = s);
                            else x += n[s].dataPoint.y, z = n[s].dataPoint.x.getTime ? n[s].dataPoint.x.getTime() : n[s].dataPoint.x, z = 100 * (x / n[s].dataSeries.plotUnit.dataPointYSums[z]), w = Math.abs(a - this.parent.convertValueToPixel(z)), w < u && (u = w, v = s);
                    else
                        for (u = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y)),
                            s = v = w = 0; s < n.length; s++)
                            if (n[s].dataPoint.y && n[s].dataPoint.y.length)
                                for (t = 0; t < n[s].dataPoint.y.length; t++) w = Math.abs(a - this.parent.convertValueToPixel(n[s].dataPoint.y[t])), w < u && (u = w, v = s);
                            else w = Math.abs(a - this.parent.convertValueToPixel(n[s].dataPoint.y)), w < u && (u = w, v = s);
                    t = n[v];
                    if ("bottom" === this.parent._position || "top" === this.parent._position) {
                        c = 0;
                        if ("rangeBar" === this.parent.dataSeries[v].type || "error" === this.parent.dataSeries[v].type) {
                            u = Math.abs(a - this.parent.convertValueToPixel(t.dataPoint.y[0]));
                            for (s = w = 0; s < t.dataPoint.y.length; s++) w = Math.abs(a - this.parent.convertValueToPixel(t.dataPoint.y[s])), w < u && (u = w, c = s);
                            l = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(t.dataPoint.y[c]) << 0) + 0.5 : this.parent.convertValueToPixel(t.dataPoint.y[c]) << 0;
                            this.value = t.dataPoint.y[c];
                            m.text = this.labelFormatter ? this.labelFormatter({
                                    chart: this.chart,
                                    axis: this.parent.options,
                                    crosshair: this.options,
                                    value: b ? b : t.dataPoint.y[c]
                                }) : e(this.options.label) ? $(b ? b : t.dataPoint.y[c], this.valueFormatString, this.chart._cultureInfo) :
                                this.label
                        } else if ("stackedBar" === this.parent.dataSeries[v].type) {
                            u = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y));
                            x = w = 0;
                            for (s = v; 0 <= s; s--) x += n[s].dataPoint.y, w = Math.abs(a - this.parent.convertValueToPixel(x)), w < u && (u = w, c = s);
                            l = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(x) << 0) + 0.5 : this.parent.convertValueToPixel(x) << 0;
                            this.value = x;
                            m.text = this.labelFormatter ? this.labelFormatter({
                                    chart: this.chart,
                                    axis: this.parent.options,
                                    crosshair: this.options,
                                    value: b ? b : t.dataPoint.y
                                }) : e(this.options.label) ?
                                $(b ? b : t.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label
                        } else if ("stackedBar100" === this.parent.dataSeries[v].type) {
                            u = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y));
                            z = x = w = 0;
                            for (s = v; 0 <= s; s--) x += n[s].dataPoint.y, z = n[s].dataPoint.x.getTime ? n[s].dataPoint.x.getTime() : n[s].dataPoint.x, z = 100 * (x / n[s].dataSeries.plotUnit.dataPointYSums[z]), w = Math.abs(a - this.parent.convertValueToPixel(z)), w < u && (u = w, c = s);
                            l = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(z) << 0) + 0.5 : this.parent.convertValueToPixel(z) <<
                                0;
                            this.value = z;
                            m.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: b ? b : z
                            }) : e(this.options.label) ? $(b ? b : z, this.valueFormatString, this.chart._cultureInfo) : this.label
                        } else l = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(t.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(t.dataPoint.y) << 0, this.value = t.dataPoint.y, m.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: b ?
                                b : t.dataPoint.y
                        }) : e(this.options.label) ? $(b ? b : t.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label;
                        c = h = l;
                        g = this.chart.plotArea.y1;
                        r = this.chart.plotArea.y2;
                        this.bounds = {
                            x1: c - p / 2,
                            y1: g,
                            x2: h + p / 2,
                            y2: r
                        };
                        m.x = c - m.measureText().width / 2;
                        m.x + m.width > this.chart.bounds.x2 ? m.x = this.chart.bounds.x2 - m.width : m.x < this.chart.bounds.x1 && (m.x = this.chart.bounds.x1);
                        m.y = this.parent.lineCoordinates.y2 + ("top" === this.parent._position ? -m.height + this.parent.tickLength : m.fontSize / 2) + 2;
                        m.y + m.height > this.chart.bounds.y2 ?
                            m.y = this.chart.bounds.y2 - m.height : m.y < this.chart.bounds.y1 && (m.y = this.chart.bounds.y1)
                    } else if ("left" === this.parent._position || "right" === this.parent._position) {
                        g = r = y = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(t.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(t.dataPoint.x) << 0;
                        c = this.chart.plotArea.x1;
                        h = this.chart.plotArea.x2;
                        this.bounds = {
                            x1: c,
                            y1: g - p / 2,
                            x2: h,
                            y2: r + p / 2
                        };
                        z = !1;
                        if (this.parent.labels)
                            for (n = Math.ceil(this.parent.interval), s = 0; s < this.parent.viewportMaximum; s += n)
                                if (this.parent.labels[s]) z = !0;
                                else {
                                    z = !1;
                                    break
                                } if (z) {
                            if ("axisX" === this.parent.type)
                                for (s = this.parent.convertPixelToValue({
                                        y: d
                                    }), u = null, v = 0; v < this.parent.dataSeries.length; v++)(u = this.parent.dataSeries[v].getDataPointAtX(s, !0)) && 0 <= u.index && (m.text = this.labelFormatter ? this.labelFormatter({
                                    chart: this.chart,
                                    axis: this.parent.options,
                                    crosshair: this.options,
                                    value: t.dataPoint.x
                                }) : e(this.options.label) ? u.dataPoint.label : this.label)
                        } else "dateTime" === this.parent.valueType ? m.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: b ? b : t.dataPoint.x
                        }) : e(this.options.label) ? Y(b ? b : t.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (m.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: b ? b : t.dataPoint.x
                        }) : e(this.options.label) ? $(b ? b : t.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label);
                        this.value = t.dataPoint.x;
                        m.y = r + m.fontSize / 2 - m.measureText().height /
                            2 + 2;
                        m.y - m.fontSize / 2 < this.chart.bounds.y1 ? m.y = this.chart.bounds.y1 + m.fontSize / 2 + 2 : m.y + m.measureText().height - m.fontSize / 2 > this.chart.bounds.y2 && (m.y = this.chart.bounds.y2 - m.measureText().height + m.fontSize / 2);
                        "left" === this.parent._position ? m.x = this.parent.lineCoordinates.x2 - m.measureText().width : "right" === this.parent._position && (m.x = this.parent.lineCoordinates.x2)
                    }
                } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
                    s = this.parent.convertPixelToValue({
                        x: a
                    });
                    for (v = 0; v < this.parent.dataSeries.length; v++)(u =
                        this.parent.dataSeries[v].getDataPointAtX(s, !0)) && 0 <= u.index && (u.dataSeries = this.parent.dataSeries[v], null !== u.dataPoint.y && u.dataSeries.visible && n.push(u));
                    if (0 === n.length) return;
                    n.sort(function (a, b) {
                        return a.distance - b.distance
                    });
                    t = n[0];
                    c = h = l = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(t.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(t.dataPoint.x) << 0;
                    g = this.chart.plotArea.y1;
                    r = this.chart.plotArea.y2;
                    this.bounds = {
                        x1: c - p / 2,
                        y1: g,
                        x2: h + p / 2,
                        y2: r
                    };
                    z = !1;
                    if (this.parent.labels)
                        for (n = Math.ceil(this.parent.interval),
                            s = 0; s < this.parent.viewportMaximum; s += n)
                            if (this.parent.labels[s]) z = !0;
                            else {
                                z = !1;
                                break
                            } if (z) {
                        if ("axisX" === this.parent.type)
                            for (s = this.parent.convertPixelToValue({
                                    x: a
                                }), u = null, v = 0; v < this.parent.dataSeries.length; v++)(u = this.parent.dataSeries[v].getDataPointAtX(s, !0)) && 0 <= u.index && (m.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: t.dataPoint.x
                            }) : e(this.options.label) ? u.dataPoint.label : this.label)
                    } else "dateTime" === this.parent.valueType ?
                        m.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: t.dataPoint.x
                        }) : e(this.options.label) ? Y(b ? b : t.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (m.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: t.dataPoint.x
                        }) : e(this.options.label) ? $(b ? b : t.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label);
                    this.value = t.dataPoint.x;
                    m.x = c - m.measureText().width / 2;
                    m.x + m.width > this.chart.bounds.x2 && (m.x = this.chart.bounds.x2 - m.width);
                    m.x < this.chart.bounds.x1 && (m.x = this.chart.bounds.x1);
                    "bottom" === this.parent._position ? m.y = this.parent.lineCoordinates.y2 + m.fontSize / 2 + 2 : "top" === this.parent._position && (m.y = this.parent.lineCoordinates.y1 - m.height + m.fontSize / 2 + 2)
                } else if ("left" === this.parent._position || "right" === this.parent._position) {
                    !e(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && (s = this.parent.dataSeries[0].axisX.convertPixelToValue({
                        x: a
                    }));
                    for (v = 0; v < this.parent.dataSeries.length; v++)(u = this.parent.dataSeries[v].getDataPointAtX(s, !0)) && 0 <= u.index && (u.dataSeries = this.parent.dataSeries[v], null !== u.dataPoint.y && u.dataSeries.visible && n.push(u));
                    if (0 === n.length) return;
                    n.sort(function (a, b) {
                        return a.distance - b.distance
                    });
                    v = 0;
                    if ("rangeColumn" === n[0].dataSeries.type || "rangeArea" === n[0].dataSeries.type || "error" === n[0].dataSeries.type || "rangeSplineArea" === n[0].dataSeries.type || "candlestick" === n[0].dataSeries.type || "ohlc" === n[0].dataSeries.type ||
                        "boxAndWhisker" === n[0].dataSeries.type)
                        for (u = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y[0])), s = w = 0; s < n.length; s++)
                            if (n[s].dataPoint.y && n[s].dataPoint.y.length)
                                for (t = 0; t < n[s].dataPoint.y.length; t++) w = Math.abs(d - this.parent.convertValueToPixel(n[s].dataPoint.y[t])), w < u && (u = w, v = s);
                            else w = Math.abs(d - this.parent.convertValueToPixel(n[s].dataPoint.y)), w < u && (u = w, v = s);
                    else if ("stackedColumn" === n[0].dataSeries.type || "stackedArea" === n[0].dataSeries.type)
                        for (u = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y)),
                            s = x = w = 0; s < n.length; s++)
                            if (n[s].dataPoint.y && n[s].dataPoint.y.length)
                                for (t = 0; t < n[s].dataPoint.y.length; t++) w = Math.abs(d - this.parent.convertValueToPixel(n[s].dataPoint.y[t])), w < u && (u = w, v = s);
                            else x += n[s].dataPoint.y, w = Math.abs(d - this.parent.convertValueToPixel(x)), w < u && (u = w, v = s);
                    else if ("stackedColumn100" === n[0].dataSeries.type || "stackedArea100" === n[0].dataSeries.type)
                        for (u = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y)), s = z = x = w = 0; s < n.length; s++)
                            if (n[s].dataPoint.y && n[s].dataPoint.y.length)
                                for (t =
                                    0; t < n[s].dataPoint.y.length; t++) w = Math.abs(d - this.parent.convertValueToPixel(n[s].dataPoint.y[t])), w < u && (u = w, v = s);
                            else x += n[s].dataPoint.y, z = n[s].dataPoint.x.getTime ? n[s].dataPoint.x.getTime() : n[s].dataPoint.x, z = 100 * (x / n[s].dataSeries.plotUnit.dataPointYSums[z]), w = Math.abs(d - this.parent.convertValueToPixel(z)), w < u && (u = w, v = s);
                    else
                        for (u = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y)), s = w = 0; s < n.length; s++)
                            if (n[s].dataPoint.y && n[s].dataPoint.y.length)
                                for (t = 0; t < n[s].dataPoint.y.length; t++) w =
                                    Math.abs(d - this.parent.convertValueToPixel(n[s].dataPoint.y[t])), w < u && (u = w, v = s);
                            else w = Math.abs(d - this.parent.convertValueToPixel(n[s].dataPoint.y)), w < u && (u = w, v = s);
                    t = n[v];
                    c = 0;
                    if ("rangeColumn" === this.parent.dataSeries[v].type || "rangeArea" === this.parent.dataSeries[v].type || "error" === this.parent.dataSeries[v].type || "rangeSplineArea" === this.parent.dataSeries[v].type || "candlestick" === this.parent.dataSeries[v].type || "ohlc" === this.parent.dataSeries[v].type || "boxAndWhisker" === this.parent.dataSeries[v].type) {
                        u =
                            Math.abs(d - this.parent.convertValueToPixel(t.dataPoint.y[0]));
                        for (s = w = 0; s < t.dataPoint.y.length; s++) w = Math.abs(d - this.parent.convertValueToPixel(t.dataPoint.y[s])), w < u && (u = w, c = s);
                        y = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(t.dataPoint.y[c]) << 0) + 0.5 : this.parent.convertValueToPixel(t.dataPoint.y[c]) << 0;
                        m.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: b ? b : t.dataPoint.y[c]
                        }) : e(this.options.label) ? $(b ? b : t.dataPoint.y[c], this.valueFormatString,
                            this.chart._cultureInfo) : this.label;
                        this.value = t.dataPoint.y[c]
                    } else if ("stackedColumn" === this.parent.dataSeries[v].type || "stackedArea" === this.parent.dataSeries[v].type) {
                        u = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y));
                        x = w = 0;
                        for (s = v; 0 <= s; s--) x += n[s].dataPoint.y, w = Math.abs(d - this.parent.convertValueToPixel(x)), w < u && (u = w, c = s);
                        y = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(x) << 0) + 0.5 : this.parent.convertValueToPixel(x) << 0;
                        m.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: b ? b : t.dataPoint.y
                        }) : e(this.options.label) ? $(b ? b : t.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label;
                        this.value = x
                    } else if ("stackedColumn100" === this.parent.dataSeries[v].type || "stackedArea100" === this.parent.dataSeries[v].type) {
                        u = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y));
                        x = w = 0;
                        for (s = v; 0 <= s; s--) x += n[s].dataPoint.y, z = n[s].dataPoint.x.getTime ? n[s].dataPoint.x.getTime() : n[s].dataPoint.x, z = 100 * (x / n[s].dataSeries.plotUnit.dataPointYSums[z]),
                            w = Math.abs(d - this.parent.convertValueToPixel(z)), w < u && (u = w, c = s);
                        y = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(z) << 0) + 0.5 : this.parent.convertValueToPixel(z) << 0;
                        m.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: b ? b : z
                        }) : e(this.options.label) ? $(b ? b : z, this.valueFormatString, this.chart._cultureInfo) : this.label;
                        this.value = z
                    } else "waterfall" === this.parent.dataSeries[v].type ? (y = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(t.dataSeries.dataPointEOs[t.index].cumulativeSum) <<
                        0) + 0.5 : this.parent.convertValueToPixel(t.dataSeries.dataPointEOs[t.index].cumulativeSum) << 0, m.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: b ? b : t.dataSeries.dataPointEOs[t.index].cumulativeSum
                    }) : e(this.options.label) ? $(b ? b : t.dataSeries.dataPointEOs[t.index].cumulativeSum, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = t.dataSeries.dataPointEOs[t.index].cumulativeSum) : (y = 1 === q.lineWidth % 2 ? (e(a) ? d : this.parent.convertValueToPixel(t.dataPoint.y) <<
                        0) + 0.5 : e(a) ? d : this.parent.convertValueToPixel(t.dataPoint.y) << 0, m.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: t.dataPoint.y
                    }) : e(this.options.label) ? $(b ? b : t.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = t.dataPoint.y);
                    g = r = y;
                    c = this.chart.plotArea.x1;
                    h = this.chart.plotArea.x2;
                    this.bounds = {
                        x1: c,
                        y1: g - p / 2,
                        x2: h,
                        y2: r + p / 2
                    };
                    m.y = r + m.fontSize / 2 - m.measureText().height / 2 + 2;
                    m.y - m.fontSize / 2 < this.chart.bounds.y1 ?
                        m.y = this.chart.bounds.y1 + m.fontSize / 2 + 2 : m.y + m.measureText().height - m.fontSize / 2 > this.chart.bounds.y2 && (m.y = this.chart.bounds.y2 - m.measureText().height + m.fontSize / 2);
                    "left" === this.parent._position ? m.x = this.parent.lineCoordinates.x2 - m.measureText().width : "right" === this.parent._position && (m.x = this.parent.lineCoordinates.x2)
                }
                n = null;
                if ("bottom" === this.parent._position || "top" === this.parent._position) "top" === this.parent._position && m.y - m.fontSize / 2 < this.chart.bounds.y1 && (m.y = this.chart.bounds.y1 + m.fontSize /
                    2), "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - m.fontSize / 2 + m.measureText().height > this.chart.bounds.y2 && (m.y = this.chart.bounds.y2 - m.height + m.fontSize / 2 + 2), c >= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMaximum : this.parent.viewportMinimum) && h <= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMinimum : this.parent.viewportMaximum) && (0 < p && (q.moveTo(c, g), q.lineTo(h, r), q.stroke(), this._hidden = !1), q.restore(), !e(m.text) && ("number" ===
                    typeof m.text.valueOf() || 0 < m.text.length) && m.render(!0));
                if ("left" === this.parent._position || "right" === this.parent._position) "left" === this.parent._position && m.x < this.chart.bounds.x1 && (m.x = this.chart.bounds.x1), "right" === this.parent._position && m.x + m.measureText().width > this.chart.bounds.x2 && (m.x = this.chart.bounds.x2 - m.measureText().width), r >= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMinimum : this.parent.viewportMaximum) && g <= this.parent.convertValueToPixel(this.parent.reversed ?
                    this.parent.viewportMaximum : this.parent.viewportMinimum) && (0 < p && (q.moveTo(c, g), q.lineTo(h, r), q.stroke(), this._hidden = !1), q.restore(), !e(m.text) && ("number" === typeof m.text.valueOf() || 0 < m.text.length) && m.render(!0))
            } else {
                if ("bottom" === this.parent._position || "top" === this.parent._position) c = h = l = 1 === q.lineWidth % 2 ? (a << 0) + 0.5 : a << 0, g = this.chart.plotArea.y1, r = this.chart.plotArea.y2, this.bounds = {
                    x1: c - p / 2,
                    y1: g,
                    x2: h + p / 2,
                    y2: r
                };
                else if ("left" === this.parent._position || "right" === this.parent._position) g = r = y = 1 === q.lineWidth %
                    2 ? (d << 0) + 0.5 : d << 0, c = this.chart.plotArea.x1, h = this.chart.plotArea.x2, this.bounds = {
                        x1: c,
                        y1: g - p / 2,
                        x2: h,
                        y2: r + p / 2
                    };
                if ("xySwapped" === this.chart.plotInfo.axisPlacement)
                    if ("left" === this.parent._position || "right" === this.parent._position) {
                        z = !1;
                        if (this.parent.labels)
                            for (n = Math.ceil(this.parent.interval), s = 0; s < this.parent.viewportMaximum; s += n)
                                if (this.parent.labels[s]) z = !0;
                                else {
                                    z = !1;
                                    break
                                } if (z) {
                            if ("axisX" === this.parent.type)
                                for (s = this.parent.convertPixelToValue({
                                        y: d
                                    }), u = null, v = 0; v < this.parent.dataSeries.length; v++)(u =
                                    this.parent.dataSeries[v].getDataPointAtX(s, !0)) && 0 <= u.index && (m.text = this.labelFormatter ? this.labelFormatter({
                                    chart: this.chart,
                                    axis: this.parent.options,
                                    crosshair: this.options,
                                    value: b ? b : this.parent.convertPixelToValue(a)
                                }) : e(this.options.label) ? u.dataPoint.label : this.label)
                        } else "dateTime" === this.parent.valueType ? m.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: b ? b : this.parent.convertPixelToValue(d)
                        }) : e(this.options.label) ? Y(b ? b :
                            this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (m.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: b ? b : this.parent.convertPixelToValue(d)
                        }) : e(this.options.label) ? $(b ? b : this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo) : this.label);
                        m.y = d + m.fontSize / 2 - m.measureText().height / 2 + 2;
                        m.y - m.fontSize / 2 < this.chart.bounds.y1 ? m.y = this.chart.bounds.y1 +
                            m.fontSize / 2 + 2 : m.y + m.measureText().height - m.fontSize / 2 > this.chart.bounds.y2 && (m.y = this.chart.bounds.y2 - m.measureText().height + m.fontSize / 2);
                        "left" === this.parent._position ? m.x = this.parent.lineCoordinates.x1 - m.measureText().width : "right" === this.parent._position && (m.x = this.parent.lineCoordinates.x2)
                    } else {
                        if ("bottom" === this.parent._position || "top" === this.parent._position) m.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: b ? b : this.parent.convertPixelToValue(a)
                            }) :
                            e(this.options.label) ? $(b ? b : this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label, m.x = c - m.measureText().width / 2, m.x + m.width > this.chart.bounds.x2 && (m.x = this.chart.bounds.x2 - m.width), m.x < this.chart.bounds.x1 && (m.x = this.chart.bounds.x1), "bottom" === this.parent._position ? m.y = this.parent.lineCoordinates.y2 + m.fontSize / 2 + 2 : "top" === this.parent._position && (m.y = this.parent.lineCoordinates.y1 - m.height + m.fontSize / 2 + 2)
                    }
                else if ("bottom" === this.parent._position || "top" === this.parent._position) {
                    z = !1;
                    n = "";
                    if (this.parent.labels)
                        for (n = Math.ceil(this.parent.interval), s = 0; s < this.parent.viewportMaximum; s += n)
                            if (this.parent.labels[s]) z = !0;
                            else {
                                z = !1;
                                break
                            } if (z) {
                        if ("axisX" === this.parent.type)
                            for (s = this.parent.convertPixelToValue({
                                    x: a
                                }), u = null, v = 0; v < this.parent.dataSeries.length; v++)(u = this.parent.dataSeries[v].getDataPointAtX(s, !0)) && 0 <= u.index && (m.text = this.labelFormatter ? this.labelFormatter({
                                    chart: this.chart,
                                    axis: this.parent.options,
                                    crosshair: this.options,
                                    value: b ? b : this.parent.convertPixelToValue(a)
                                }) :
                                e(this.options.label) ? b ? b : u.dataPoint.label : this.label)
                    } else "dateTime" === this.parent.valueType ? m.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: b ? b : this.parent.convertPixelToValue(a)
                    }) : e(this.options.label) ? Y(b ? b : this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (m.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: b ? b : 0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : ""
                    }) : e(this.options.label) ? $(b ? b : this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label);
                    m.x = c - m.measureText().width / 2;
                    m.x + m.width > this.chart.bounds.x2 && (m.x = this.chart.bounds.x2 - m.width);
                    m.x < this.chart.bounds.x1 && (m.x = this.chart.bounds.x1);
                    "bottom" === this.parent._position ? m.y = this.parent.lineCoordinates.y2 + m.fontSize / 2 + 2 : "top" === this.parent._position && (m.y = this.parent.lineCoordinates.y1 -
                        m.height + m.fontSize / 2 + 2)
                } else if ("left" === this.parent._position || "right" === this.parent._position) m.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: b ? b : this.parent.convertPixelToValue(d)
                    }) : e(this.options.label) ? $(b ? b : this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo) : this.label, m.y = d + m.fontSize / 2 - m.measureText().height / 2 + 2, m.y - m.fontSize / 2 < this.chart.bounds.y1 ? m.y = this.chart.bounds.y1 + m.fontSize / 2 +
                    2 : m.y + m.measureText().height - m.fontSize / 2 > this.chart.bounds.y2 && (m.y = this.chart.bounds.y2 - m.measureText().height + m.fontSize / 2), "left" === this.parent._position ? m.x = this.parent.lineCoordinates.x2 - m.measureText().width : "right" === this.parent._position && (m.x = this.parent.lineCoordinates.x2);
                "left" === this.parent._position && m.x < this.chart.bounds.x1 ? m.x = this.chart.bounds.x1 : "right" === this.parent._position && m.x + m.measureText().width > this.chart.bounds.x2 ? m.x = this.chart.bounds.x2 - m.measureText().width : "top" ===
                    this.parent._position && m.y - m.fontSize / 2 < this.chart.bounds.y1 ? m.y = this.chart.bounds.y1 + m.fontSize / 2 : "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - m.fontSize / 2 + m.measureText().height > this.chart.bounds.y2 && (m.y = this.chart.bounds.y2 - m.height + m.fontSize / 2 + 2);
                0 < p && (q.moveTo(c, g), q.lineTo(h, r), q.stroke(), this._hidden = !1);
                q.restore();
                !e(m.text) && ("number" === typeof m.text.valueOf() || 0 < m.text.length) && m.render(!0);
                this.value = "bottom" === this.parent._position || "top" === this.parent._position ?
                    this.parent.convertPixelToValue(a) : this.parent.convertPixelToValue(d)
            }
            if ("bottom" === this.parent._position || "top" === this.parent._position) this._updatedValue = this.parent.convertPixelToValue(l);
            if ("left" === this.parent._position || "right" === this.parent._position) this._updatedValue = this.parent.convertPixelToValue(y);
            q.globalAlpha = k
        };
        ga(oa, Z);
        oa.prototype._initialize = function () {
            this.updateOption("updated");
            this.updateOption("hidden");
            if (this.enabled) {
                this.container = document.createElement("div");
                this.container.setAttribute("class",
                    "stockjs-chart-tooltip");
                this.container.style.position = "absolute";
                this.container.style.height = "auto";
                this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
                this.container.style.zIndex = "1000";
                this.container.style.pointerEvents = "none";
                this.container.style.display = "none";
                var a;
                a = '<div style=" width: auto;height: auto;min-width: 50px;';
                a += "line-height: auto;";
                a += "margin: 0px 0px 0px 0px;";
                a += "padding: 5px;";
                a += "font-family: Calibri, Arial, Georgia, serif;";
                a += "font-weight: normal;";
                a += "font-style: " +
                    (v ? "italic;" : "normal;");
                a += "font-size: 14px;";
                a += "color: #000000;";
                a += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
                a += "text-align: left;";
                a += "border: 2px solid gray;";
                a += v ? "background: rgba(255,255,255,.9);" : "background: rgb(255,255,255);";
                a += "text-indent: 0px;";
                a += "white-space: nowrap;";
                a += "border-radius: 5px;";
                a += "-moz-user-select:none;";
                a += "-khtml-user-select: none;";
                a += "-webkit-user-select: none;";
                a += "-ms-user-select: none;";
                a += "user-select: none;";
                v || (a += "filter: alpha(opacity = 90);", a += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");
                a += '} "> Sample Tooltip</div>';
                this.container.innerHTML = a;
                this.contentDiv = this.container.firstChild;
                this.container.style.borderRadius = this.contentDiv.style.borderRadius;
                this.chart._canvasJSContainer.appendChild(this.container)
            }
        };
        oa.prototype.mouseMoveHandler = function (a, d) {
            this._lastUpdated && 4 > (new Date).getTime() - this._lastUpdated || (this._lastUpdated = (new Date).getTime(), this.chart.resetOverlayedCanvas(), this._updateToolTip(a, d))
        };
        oa.prototype._updateToolTip = function (a, d, b) {
            b = "undefined" === typeof b ?
                !0 : b;
            this.container || this._initialize();
            this.enabled || (this.hide(), this.dispatchEvent("hidden", {
                chart: this.chart,
                toolTip: this
            }, this));
            if (!this.chart.disableToolTip) {
                if ("undefined" === typeof a || "undefined" === typeof d) {
                    if (isNaN(this._prevX) || isNaN(this._prevY)) return;
                    a = this._prevX;
                    d = this._prevY
                } else this._prevX = a, this._prevY = d;
                var c = null,
                    h = null,
                    g = [],
                    r = 0;
                if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
                    if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                        var l = [];
                        if (this.chart.axisX)
                            for (var y =
                                    0; y < this.chart.axisX.length; y++) {
                                for (var r = this.chart.axisX[y].convertPixelToValue({
                                        y: d
                                    }), m = null, c = 0; c < this.chart.axisX[y].dataSeries.length; c++)(m = this.chart.axisX[y].dataSeries[c].getDataPointAtX(r, b)) && 0 <= m.index && (m.dataSeries = this.chart.axisX[y].dataSeries[c], null !== m.dataPoint.y && l.push(m));
                                m = null
                            }
                        if (this.chart.axisX2)
                            for (y = 0; y < this.chart.axisX2.length; y++) {
                                r = this.chart.axisX2[y].convertPixelToValue({
                                    y: d
                                });
                                m = null;
                                for (c = 0; c < this.chart.axisX2[y].dataSeries.length; c++)(m = this.chart.axisX2[y].dataSeries[c].getDataPointAtX(r,
                                    b)) && 0 <= m.index && (m.dataSeries = this.chart.axisX2[y].dataSeries[c], null !== m.dataPoint.y && l.push(m));
                                m = null
                            }
                    } else {
                        l = [];
                        if (this.chart.axisX)
                            for (y = 0; y < this.chart.axisX.length; y++)
                                for (r = this.chart.axisX[y].convertPixelToValue({
                                        x: a
                                    }), m = null, c = 0; c < this.chart.axisX[y].dataSeries.length; c++)(m = this.chart.axisX[y].dataSeries[c].getDataPointAtX(r, b)) && 0 <= m.index && (m.dataSeries = this.chart.axisX[y].dataSeries[c], null !== m.dataPoint.y && l.push(m));
                        if (this.chart.axisX2)
                            for (y = 0; y < this.chart.axisX2.length; y++)
                                for (r =
                                    this.chart.axisX2[y].convertPixelToValue({
                                        x: a
                                    }), m = null, c = 0; c < this.chart.axisX2[y].dataSeries.length; c++)(m = this.chart.axisX2[y].dataSeries[c].getDataPointAtX(r, b)) && 0 <= m.index && (m.dataSeries = this.chart.axisX2[y].dataSeries[c], null !== m.dataPoint.y && l.push(m))
                    }
                    if (0 === l.length) return;
                    l.sort(function (a, b) {
                        return a.distance - b.distance
                    });
                    b = l[0];
                    for (c = 0; c < l.length; c++) l[c].dataPoint.x.valueOf() === b.dataPoint.x.valueOf() && g.push(l[c]);
                    l = null
                } else {
                    if (m = this.chart.getDataPointAtXY(a, d, b)) this.currentDataPointIndex =
                        m.dataPointIndex, this.currentSeriesIndex = m.dataSeries.index;
                    else if (v)
                        if (m = jb(a, d, this.chart._eventManager.ghostCtx), 0 < m && "undefined" !== typeof this.chart._eventManager.objectMap[m]) {
                            m = this.chart._eventManager.objectMap[m];
                            if ("legendItem" === m.objectType) return;
                            this.currentSeriesIndex = m.dataSeriesIndex;
                            this.currentDataPointIndex = 0 <= m.dataPointIndex ? m.dataPointIndex : -1
                        } else this.currentDataPointIndex = -1;
                    else this.currentDataPointIndex = -1;
                    if (0 <= this.currentSeriesIndex) {
                        h = this.chart.data[this.currentSeriesIndex];
                        m = {};
                        if (0 <= this.currentDataPointIndex) c = h.dataPoints[this.currentDataPointIndex], m.dataSeries = h, m.dataPoint = c, m.index = this.currentDataPointIndex, m.distance = Math.abs(c.x - r), "waterfall" === h.type && (m.cumulativeSumYStartValue = h.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue, m.cumulativeSum = h.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
                        else {
                            if (!this.enabled || "line" !== h.type && "stepLine" !== h.type && "spline" !== h.type && "area" !== h.type && "stepArea" !== h.type && "splineArea" !== h.type &&
                                "stackedArea" !== h.type && "stackedArea100" !== h.type && "rangeArea" !== h.type && "rangeSplineArea" !== h.type && "candlestick" !== h.type && "ohlc" !== h.type && "boxAndWhisker" !== h.type) return;
                            r = h.axisX.convertPixelToValue({
                                x: a
                            });
                            m = h.getDataPointAtX(r, b);
                            e(m) || (m.dataSeries = h, this.currentDataPointIndex = m.index, c = m.dataPoint)
                        }
                        if (!e(m) && !e(m.dataPoint) && !e(m.dataPoint.y))
                            if (m.dataSeries.axisY)
                                if (0 < m.dataPoint.y.length) {
                                    for (c = b = 0; c < m.dataPoint.y.length; c++) m.dataPoint.y[c] < m.dataSeries.axisY.viewportMinimum ? b-- : m.dataPoint.y[c] >
                                        m.dataSeries.axisY.viewportMaximum && b++;
                                    b < m.dataPoint.y.length && b > -m.dataPoint.y.length && g.push(m)
                                } else "column" === h.type || "bar" === h.type ? 0 > m.dataPoint.y ? 0 > m.dataSeries.axisY.viewportMinimum && m.dataSeries.axisY.viewportMaximum >= m.dataPoint.y && g.push(m) : m.dataSeries.axisY.viewportMinimum <= m.dataPoint.y && 0 <= m.dataSeries.axisY.viewportMaximum && g.push(m) : "bubble" === h.type ? (b = this.chart._eventManager.objectMap[h.dataPointIds[m.index]].size / 2, m.dataPoint.y >= m.dataSeries.axisY.viewportMinimum - b && m.dataPoint.y <=
                                        m.dataSeries.axisY.viewportMaximum + b && g.push(m)) : "waterfall" === h.type ? (b = 0, m.cumulativeSumYStartValue < m.dataSeries.axisY.viewportMinimum ? b-- : m.cumulativeSumYStartValue > m.dataSeries.axisY.viewportMaximum && b++, m.cumulativeSum < m.dataSeries.axisY.viewportMinimum ? b-- : m.cumulativeSum > m.dataSeries.axisY.viewportMaximum && b++, 2 > b && -2 < b && g.push(m)) : (0 <= m.dataSeries.type.indexOf("100") || "stackedColumn" === h.type || "stackedBar" === h.type || m.dataPoint.y >= m.dataSeries.axisY.viewportMinimum && m.dataPoint.y <= m.dataSeries.axisY.viewportMaximum) &&
                                    g.push(m);
                        else g.push(m)
                    }
                }
                if (0 < g.length) {
                    this.highlightObjects(g);
                    if (this.enabled) {
                        var n = "",
                            n = this.getToolTipInnerHTML({
                                entries: g
                            });
                        if (null !== n) {
                            this.contentDiv.innerHTML = n;
                            b = !1;
                            "none" === this.container.style.display && (b = !0, this.container.style.display = "block");
                            try {
                                this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : v ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === g[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor =
                                    this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataPoint.color ? g[0].dataPoint.color : 0 < g[0].dataPoint.y ? g[0].dataSeries.risingColor : g[0].dataSeries.fallingColor : "error" === g[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataSeries.color ? g[0].dataSeries.color : g[0].dataSeries._colorSet[h.index % g[0].dataSeries._colorSet.length] :
                                    this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataPoint.color ? g[0].dataPoint.color : g[0].dataSeries.color ? g[0].dataSeries.color : g[0].dataSeries._colorSet[g[0].index % g[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ?
                                    this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : v ? "italic" :
                                    "normal"
                            } catch (p) {}
                            "pie" === g[0].dataSeries.type || "doughnut" === g[0].dataSeries.type || "funnel" === g[0].dataSeries.type || "pyramid" === g[0].dataSeries.type || "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? a = a - 10 - this.container.clientWidth : (a = g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) - this.container.clientWidth << 0, a -= 10);
                            0 > a && (a += this.container.clientWidth + 20);
                            a + this.container.clientWidth > Math.max(this.chart.container.clientWidth,
                                this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                            d = 1 !== g.length || this.shared || "line" !== g[0].dataSeries.type && "stepLine" !== g[0].dataSeries.type && "spline" !== g[0].dataSeries.type && "area" !== g[0].dataSeries.type && "stepArea" !== g[0].dataSeries.type && "splineArea" !== g[0].dataSeries.type ? "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) :
                                d : g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y);
                            d = -d + 10;
                            0 < d + this.container.clientHeight + 5 && (d -= d + this.container.clientHeight + 5 - 0);
                            this.fixMozTransitionDelay(a, d);
                            !this.animationEnabled || b ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                            this.positionLeft = a;
                            this.positionBottom = d;
                            this.container.style.left = a + "px";
                            this.container.style.bottom = d + "px"
                        } else this.hide(!1), this.dispatchEvent("hidden", {
                                chart: this.chart,
                                toolTip: this
                            },
                            this)
                    }
                    d = [];
                    for (c = 0; c < g.length; c++) d.push({
                        xValue: g[c].dataPoint.x,
                        dataPoint: g[c].dataPoint,
                        dataSeries: g[c].dataSeries,
                        dataPointIndex: g[c].index,
                        dataSeriesIndex: g[c].dataSeries._index
                    });
                    n = {
                        chart: this.chart,
                        toolTip: this.options,
                        content: n,
                        entries: d
                    };
                    this._entries = g;
                    this.dispatchEvent("updated", n, this)
                } else this.hide()
            }
        };
        oa.prototype.highlightObjects = function (a) {
            var f = this.chart.overlaidCanvasCtx;
            if (e(this.chart.clearedOverlayedCanvas) || "toolTip" === this.chart.clearedOverlayedCanvas) this.chart.resetOverlayedCanvas(),
                f.clearRect(0, 0, this.chart.width, this.chart.height), this.chart.clearedOverlayedCanvas = "toolTip";
            f.save();
            var b = this.chart.plotArea,
                c = 0;
            f.beginPath();
            f.rect(b.x1, b.y1, b.x2 - b.x1, b.y2 - b.y1);
            f.clip();
            for (b = 0; b < a.length; b++) {
                var h = a[b];
                if ((h = this.chart._eventManager.objectMap[h.dataSeries.dataPointIds[h.index]]) && h.objectType && "dataPoint" === h.objectType) {
                    var c = this.chart.data[h.dataSeriesIndex],
                        g = c.dataPoints[h.dataPointIndex],
                        l = h.dataPointIndex;
                    !1 === g.highlightEnabled || !0 !== c.highlightEnabled && !0 !== g.highlightEnabled ||
                        ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "scatter" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type ? (g = c.getMarkerProperties(l, h.x1, h.y1, this.chart.overlaidCanvasCtx), g.size = Math.max(1.5 * g.size << 0, 10), g.borderColor = g.borderColor || "#FFFFFF", g.borderThickness = g.borderThickness || Math.ceil(0.1 * g.size), u.drawMarkers([g]), "undefined" !== typeof h.y2 && (g = c.getMarkerProperties(l,
                                h.x1, h.y2, this.chart.overlaidCanvasCtx), g.size = Math.max(1.5 * g.size << 0, 10), g.borderColor = g.borderColor || "#FFFFFF", g.borderThickness = g.borderThickness || Math.ceil(0.1 * g.size), u.drawMarkers([g]))) : "bubble" === c.type ? (g = c.getMarkerProperties(l, h.x1, h.y1, this.chart.overlaidCanvasCtx), g.size = h.size, g.color = "white", g.borderColor = "white", f.globalAlpha = 0.3, u.drawMarkers([g]), f.globalAlpha = 1) : "column" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "bar" === c.type || "rangeBar" === c.type || "stackedBar" ===
                            c.type || "stackedBar100" === c.type || "rangeColumn" === c.type || "waterfall" === c.type ? da(f, h.x1, h.y1, h.x2, h.y2, "white", 0, null, !1, !1, !1, !1, 0.3) : "pie" === c.type || "doughnut" === c.type ? d(f, h.center, h.radius, "white", c.type, h.startAngle, h.endAngle, 0.3, h.percentInnerRadius) : "funnel" === c.type || "pyramid" === c.type ? r(f, h.funnelSection, 0.3, "white") : "candlestick" === c.type ? (f.globalAlpha = 1, f.strokeStyle = h.color, f.lineWidth = 2 * h.borderThickness, c = 0 === f.lineWidth % 2 ? 0 : 0.5, f.beginPath(), f.moveTo(h.x3 - c, Math.min(h.y2, h.y3)),
                                f.lineTo(h.x3 - c, Math.min(h.y1, h.y4)), f.stroke(), f.beginPath(), f.moveTo(h.x3 - c, Math.max(h.y1, h.y4)), f.lineTo(h.x3 - c, Math.max(h.y2, h.y3)), f.stroke(), da(f, h.x1, Math.min(h.y1, h.y4), h.x2, Math.max(h.y1, h.y4), "transparent", 2 * h.borderThickness, h.color, !1, !1, !1, !1), f.globalAlpha = 1) : "ohlc" === c.type ? (f.globalAlpha = 1, f.strokeStyle = h.color, f.lineWidth = 2 * h.borderThickness, c = 0 === f.lineWidth % 2 ? 0 : 0.5, f.beginPath(), f.moveTo(h.x3 - c, h.y2), f.lineTo(h.x3 - c, h.y3), f.stroke(), f.beginPath(), f.moveTo(h.x3, h.y1), f.lineTo(h.x1,
                                h.y1), f.stroke(), f.beginPath(), f.moveTo(h.x3, h.y4), f.lineTo(h.x2, h.y4), f.stroke(), f.globalAlpha = 1) : "boxAndWhisker" === c.type ? (f.save(), f.globalAlpha = 1, f.strokeStyle = h.stemColor, f.lineWidth = 2 * h.stemThickness, 0 < h.stemThickness && (f.beginPath(), f.moveTo(h.x3, h.y2 + h.borderThickness / 2), f.lineTo(h.x3, h.y1 + h.whiskerThickness / 2), f.stroke(), f.beginPath(), f.moveTo(h.x3, h.y4 - h.whiskerThickness / 2), f.lineTo(h.x3, h.y3 - h.borderThickness / 2), f.stroke()), f.beginPath(), da(f, h.x1 - h.borderThickness / 2, Math.max(h.y2 + h.borderThickness /
                                2, h.y3 + h.borderThickness / 2), h.x2 + h.borderThickness / 2, Math.min(h.y2 - h.borderThickness / 2, h.y3 - h.borderThickness / 2), "transparent", h.borderThickness, h.color, !1, !1, !1, !1), f.globalAlpha = 1, f.strokeStyle = h.whiskerColor, f.lineWidth = 2 * h.whiskerThickness, 0 < h.whiskerThickness && (f.beginPath(), f.moveTo(Math.floor(h.x3 - h.whiskerLength / 2), h.y4), f.lineTo(Math.ceil(h.x3 + h.whiskerLength / 2), h.y4), f.stroke(), f.beginPath(), f.moveTo(Math.floor(h.x3 - h.whiskerLength / 2), h.y1), f.lineTo(Math.ceil(h.x3 + h.whiskerLength / 2), h.y1),
                                f.stroke()), f.globalAlpha = 1, f.strokeStyle = h.lineColor, f.lineWidth = 2 * h.lineThickness, 0 < h.lineThickness && (f.beginPath(), f.moveTo(h.x1, h.y5), f.lineTo(h.x2, h.y5), f.stroke()), f.restore(), f.globalAlpha = 1) : "error" === c.type && H(f, h.x1, h.y1, h.x2, h.y2, "white", h.whiskerProperties, h.stemProperties, h.isXYSwapped, 0.3))
                }
            }
            f.restore();
            f.globalAlpha = 1;
            f.beginPath()
        };
        oa.prototype.getToolTipInnerHTML = function (a) {
            a = a.entries;
            for (var d = null, b = null, c = null, h = 0, g = "", e = !0, r = 0; r < a.length; r++)
                if (a[r].dataSeries.toolTipContent ||
                    a[r].dataPoint.toolTipContent) {
                    e = !1;
                    break
                } if (e && (this.content && "function" === typeof this.content || this.contentFormatter)) a = {
                chart: this.chart,
                toolTip: this.options,
                entries: a
            }, d = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
            else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
                for (var l = null, m = "", r = 0; r < a.length; r++) b = a[r].dataSeries, c = a[r].dataPoint, h = a[r].index, g = "", 0 === r && (e && !this.content) && (this.chart.axisX && 0 < this.chart.axisX.length ? m += "undefined" !== typeof this.chart.axisX[0].labels[c.x] ?
                    this.chart.axisX[0].labels[c.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length && (m += "undefined" !== typeof this.chart.axisX2[0].labels[c.x] ? this.chart.axisX2[0].labels[c.x] : "{x}"), m += "</br>", m = this.chart.replaceKeywordsWithValue(m, c, b, h)), null === c.toolTipContent || "undefined" === typeof c.toolTipContent && null === b.options.toolTipContent || ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "column" === b.type || "bar" === b.type || "scatter" ===
                    b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "waterfall" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += l != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") +
                        "\"'>{name}:</span>&nbsp;&nbsp;{y}", l = b.axisXIndex) : "bubble" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += l != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}") : "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" ===
                    b.type || "rangeSplineArea" === b.type || "error" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += l != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}") : "candlestick" === b.type || "ohlc" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length &&
                        (g += l != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}") : "boxAndWhisker" === b.type && (this.chart.axisX && 1 < this.chart.axisX.length && (g +=
                        l != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}"),
                    null === d && (d = ""), !0 === this.reversed ? (d = this.chart.replaceKeywordsWithValue(g, c, b, h) + d, r < a.length - 1 && (d = "</br>" + d)) : (d += this.chart.replaceKeywordsWithValue(g, c, b, h), r < a.length - 1 && (d += "</br>")));
                null !== d && (d = m + d)
            } else {
                b = a[0].dataSeries;
                c = a[0].dataPoint;
                h = a[0].index;
                if (null === c.toolTipContent || "undefined" === typeof c.toolTipContent && null === b.options.toolTipContent) return null;
                "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "column" ===
                    b.type || "bar" === b.type || "scatter" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "waterfall" === b.type ? g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}" : "bubble" === b.type ? g = c.toolTipContent ?
                    c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : "pie" === b.type || "doughnut" === b.type || "funnel" === b.type || "pyramid" === b.type ? g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" :
                        "'color:{color};'") + "\"'>" + (c.name ? "{name}:</span>&nbsp;&nbsp;" : c.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}" : "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type ? g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" :
                    "candlestick" === b.type || "ohlc" === b.type ? g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}" : "boxAndWhisker" === b.type && (g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent :
                        this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + "</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
                null === d && (d = "");
                d += this.chart.replaceKeywordsWithValue(g, c, b, h)
            }
            return d
        };
        oa.prototype.enableAnimation = function () {
            if (!this.container.style.WebkitTransition) {
                var a = this.getContainerTransition(this.containerTransitionDuration);
                this.container.style.WebkitTransition = a;
                this.container.style.MsTransition = a;
                this.container.style.transition = a;
                this.container.style.MozTransition = this.mozContainerTransition
            }
        };
        oa.prototype.disableAnimation = function () {
            this.container.style.WebkitTransition && (this.container.style.WebkitTransition =
                "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "")
        };
        oa.prototype.hide = function (a) {
            this.container && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._prevY = this._prevX = NaN, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas())
        };
        oa.prototype.show = function (a, d, b) {
            this._updateToolTip(a, d, "undefined" === typeof b ? !1 : b)
        };
        oa.prototype.showAtIndex = function (a, d) {};
        oa.prototype.showAtX = function (a, d) {
            if (!this.enabled) return !1;
            this.chart.clearedOverlayedCanvas = null;
            var b, c, h, g = [];
            h = !1;
            d = !e(d) && 0 <= d && d < this.chart.data.length ? d : 0;
            if (this.shared)
                for (var r = 0; r < this.chart.data.length; r++) b = this.chart.data[r], (c = b.getDataPointAtX(a, !1)) && (c.dataPoint && !e(c.dataPoint.y) && b.visible) && (c.dataSeries = b, g.push(c));
            else b = this.chart.data[d], (c = b.getDataPointAtX(a, !1)) && (c.dataPoint && !e(c.dataPoint.y) && b.visible) && (c.dataSeries = b, g.push(c));
            if (0 < g.length) {
                for (r = 0; r < g.length; r++)
                    if (c = g[r], c.dataPoint.x < c.dataSeries.axisX.viewportMinimum ||
                        c.dataPoint.x > c.dataSeries.axisX.viewportMaximum || c.dataPoint.y < c.dataSeries.axisY.viewportMinimum || c.dataPoint.y > c.dataSeries.axisY.viewportMaximum) h = !0;
                    else {
                        h = !1;
                        break
                    } if (h) return this.hide(), !1;
                this.highlightObjects(g);
                this._entries = g;
                c = "";
                c = this.getToolTipInnerHTML({
                    entries: g
                });
                if (null !== c) {
                    this.contentDiv.innerHTML = c;
                    c = !1;
                    "none" === this.container.style.display && (c = !0, this.container.style.display = "block");
                    try {
                        this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : v ? "rgba(255,255,255,.9)" :
                            "rgb(255,255,255)", this.borderColor = "waterfall" === g[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataPoint.color ? g[0].dataPoint.color : 0 < g[0].dataPoint.y ? g[0].dataSeries.risingColor : g[0].dataSeries.fallingColor : "error" === g[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ?
                            this.options.borderColor : g[0].dataSeries.color ? g[0].dataSeries.color : g[0].dataSeries._colorSet[b.index % g[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataPoint.color ? g[0].dataPoint.color : g[0].dataSeries.color ? g[0].dataSeries.color : g[0].dataSeries._colorSet[g[0].index % g[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness ||
                            0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight =
                            this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : v ? "italic" : "normal"
                    } catch (l) {}
                    "pie" === g[0].dataSeries.type || "doughnut" === g[0].dataSeries.type || "funnel" === g[0].dataSeries.type || "pyramid" === g[0].dataSeries.type ? b = mouseX - 10 - this.container.clientWidth : (b = "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y) -
                        this.container.clientWidth << 0 : g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) - this.container.clientWidth << 0, b -= 10);
                    0 > b && (b += this.container.clientWidth + 20);
                    b + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (b = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                    g = 1 !== g.length || this.shared || "line" !== g[0].dataSeries.type && "stepLine" !== g[0].dataSeries.type && "spline" !== g[0].dataSeries.type && "area" !== g[0].dataSeries.type &&
                        "stepArea" !== g[0].dataSeries.type && "splineArea" !== g[0].dataSeries.type ? "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) : g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y) : g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y);
                    g = -g + 10;
                    0 < g + this.container.clientHeight + 5 && (g -= g + this.container.clientHeight + 5 - 0);
                    this.fixMozTransitionDelay(b,
                        g);
                    !this.animationEnabled || c ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                    this.container.style.left = b + "px";
                    this.container.style.bottom = g + "px"
                } else return this.hide(!1), !1
            } else return this.hide(), !1;
            return !0
        };
        oa.prototype.fixMozTransitionDelay = function (a, d) {
            if (20 < this.chart._eventManager.lastObjectId) this.mozContainerTransition = this.getContainerTransition(0);
            else {
                var b = parseFloat(this.container.style.left),
                    b = isNaN(b) ? 0 : b,
                    c = parseFloat(this.container.style.bottom),
                    c = isNaN(c) ? 0 : c;
                10 < Math.sqrt(Math.pow(b - a, 2) + Math.pow(c - d, 2)) ? this.mozContainerTransition = this.getContainerTransition(0.1) : this.mozContainerTransition = this.getContainerTransition(0)
            }
        };
        oa.prototype.getContainerTransition = function (a) {
            return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s"
        };
        ha.prototype.reset = function () {
            this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.previousDataPointEventObject = null;
            this.eventObjects = [];
            v && (this.ghostCtx.clearRect(0, 0, this.chart.width,
                this.chart.height), this.ghostCtx.beginPath())
        };
        ha.prototype.getNewObjectTrackingId = function () {
            return ++this.lastObjectId
        };
        ha.prototype.mouseEventHandler = function (a) {
            if ("mousemove" === a.type || "click" === a.type) {
                var d = [],
                    b = Aa(a),
                    c = null;
                if ((c = this.chart.getObjectAtXY(b.x, b.y, !1)) && "undefined" !== typeof this.objectMap[c])
                    if (c = this.objectMap[c], "dataPoint" === c.objectType) {
                        var h = this.chart.data[c.dataSeriesIndex],
                            g = h.dataPoints[c.dataPointIndex],
                            e = c.dataPointIndex;
                        c.eventParameter = {
                            x: b.x,
                            y: b.y,
                            dataPoint: g,
                            dataSeries: h.options,
                            dataPointIndex: e,
                            dataSeriesIndex: h.index,
                            chart: this.chart
                        };
                        c.eventContext = {
                            context: g,
                            userContext: g,
                            mouseover: "mouseover",
                            mousemove: "mousemove",
                            mouseout: "mouseout",
                            click: "click"
                        };
                        d.push(c);
                        c = this.objectMap[h.id];
                        c.eventParameter = {
                            x: b.x,
                            y: b.y,
                            dataPoint: g,
                            dataSeries: h.options,
                            dataPointIndex: e,
                            dataSeriesIndex: h.index,
                            chart: this.chart
                        };
                        c.eventContext = {
                            context: h,
                            userContext: h.options,
                            mouseover: "mouseover",
                            mousemove: "mousemove",
                            mouseout: "mouseout",
                            click: "click"
                        };
                        d.push(this.objectMap[h.id])
                    } else "legendItem" ===
                        c.objectType && (h = this.chart.data[c.dataSeriesIndex], g = null !== c.dataPointIndex ? h.dataPoints[c.dataPointIndex] : null, c.eventParameter = {
                            x: b.x,
                            y: b.y,
                            dataSeries: h.options,
                            dataPoint: g,
                            dataPointIndex: c.dataPointIndex,
                            dataSeriesIndex: c.dataSeriesIndex,
                            chart: this.chart
                        }, c.eventContext = {
                            context: this.chart.legend,
                            userContext: this.chart.legend.options,
                            mouseover: "itemmouseover",
                            mousemove: "itemmousemove",
                            mouseout: "itemmouseout",
                            click: "itemclick"
                        }, d.push(c));
                h = [];
                for (b = 0; b < this.mouseoveredObjectMaps.length; b++) {
                    g = !0;
                    for (c = 0; c < d.length; c++)
                        if (d[c].id === this.mouseoveredObjectMaps[b].id) {
                            g = !1;
                            break
                        } g ? this.fireEvent(this.mouseoveredObjectMaps[b], "mouseout", a) : h.push(this.mouseoveredObjectMaps[b])
                }
                this.mouseoveredObjectMaps = h;
                for (b = 0; b < d.length; b++) {
                    h = !1;
                    for (c = 0; c < this.mouseoveredObjectMaps.length; c++)
                        if (d[b].id === this.mouseoveredObjectMaps[c].id) {
                            h = !0;
                            break
                        } h || (this.fireEvent(d[b], "mouseover", a), this.mouseoveredObjectMaps.push(d[b]));
                    "click" === a.type ? this.fireEvent(d[b], "click", a) : "mousemove" === a.type && this.fireEvent(d[b],
                        "mousemove", a)
                }
            }
        };
        ha.prototype.fireEvent = function (a, d, b) {
            if (a && d) {
                var c = a.eventParameter,
                    h = a.eventContext,
                    g = a.eventContext.userContext;
                g && (h && g[h[d]]) && g[h[d]].call(g, c);
                "mouseout" !== d ? g.cursor && g.cursor !== b.target.style.cursor && (b.target.style.cursor = g.cursor) : (b.target.style.cursor = this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
                "click" === d && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex],
                    c);
                "click" === d && ("dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler) && this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex], c)
            }
        };
        ka.prototype.animate = function (a, d, b, c, h) {
            var g = this;
            this.chart.isAnimating = !0;
            h = h || y.easing.linear;
            b && this.animations.push({
                startTime: (new Date).getTime() + (a ? a : 0),
                duration: d,
                animationCallback: b,
                onComplete: c
            });
            for (a = []; 0 < this.animations.length;)
                if (d = this.animations.shift(), b = (new Date).getTime(), c = 0, d.startTime <= b && (c = h(Math.min(b - d.startTime,
                        d.duration), 0, 1, d.duration), c = Math.min(c, 1), isNaN(c) || !isFinite(c)) && (c = 1), 1 > c && a.push(d), d.animationCallback(c), 1 <= c && d.onComplete) d.onComplete();
            this.animations = a;
            0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function () {
                g.animate.call(g)
            }) : this.chart.isAnimating = !1
        };
        ka.prototype.cancelAllAnimations = function () {
            this.animations = [];
            this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
            this.animationRequestId = null;
            this.chart.isAnimating = !1
        };
        var y = {
                yScaleAnimation: function (a, d) {
                    if (0 !== a) {
                        var b = d.dest,
                            c = d.source.canvas,
                            h = d.animationBase;
                        b.drawImage(c, 0, 0, c.width, c.height, 0, h - h * a, b.canvas.width / ja, a * b.canvas.height / ja)
                    }
                },
                xScaleAnimation: function (a, d) {
                    if (0 !== a) {
                        var b = d.dest,
                            c = d.source.canvas,
                            h = d.animationBase;
                        b.drawImage(c, 0, 0, c.width, c.height, h - h * a, 0, a * b.canvas.width / ja, b.canvas.height / ja)
                    }
                },
                xClipAnimation: function (a, d) {
                    if (0 !== a) {
                        var b = d.dest,
                            c = d.source.canvas;
                        b.save();
                        0 < a && b.drawImage(c, 0, 0, c.width * a, c.height, 0, 0, c.width * a / ja, c.height /
                            ja);
                        b.restore()
                    }
                },
                fadeInAnimation: function (a, d) {
                    if (0 !== a) {
                        var b = d.dest,
                            c = d.source.canvas;
                        b.save();
                        b.globalAlpha = a;
                        b.drawImage(c, 0, 0, c.width, c.height, 0, 0, b.canvas.width / ja, b.canvas.height / ja);
                        b.restore()
                    }
                },
                easing: {
                    linear: function (a, d, b, c) {
                        return b * a / c + d
                    },
                    easeOutQuad: function (a, d, b, c) {
                        return -b * (a /= c) * (a - 2) + d
                    },
                    easeOutQuart: function (a, d, b, c) {
                        return -b * ((a = a / c - 1) * a * a * a - 1) + d
                    },
                    easeInQuad: function (a, d, b, c) {
                        return b * (a /= c) * a + d
                    },
                    easeInQuart: function (a, d, b, c) {
                        return b * (a /= c) * a * a * a + d
                    }
                }
            },
            u = {
                drawMarker: function (a,
                    d, b, c, h, g, e, r) {
                    if (b) {
                        var l = 1;
                        b.fillStyle = g ? g : "#000000";
                        b.strokeStyle = e ? e : "#000000";
                        b.lineWidth = r ? r : 0;
                        b.setLineDash && b.setLineDash(P("solid", r));
                        "circle" === c ? (b.moveTo(a, d), b.beginPath(), b.arc(a, d, h / 2, 0, 2 * Math.PI, !1), g && b.fill(), r && (e ? b.stroke() : (l = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = l))) : "square" === c ? (b.beginPath(), b.rect(a - h / 2, d - h / 2, h, h), g && b.fill(), r && (e ? b.stroke() : (l = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = l))) :
                            "triangle" === c ? (b.beginPath(), b.moveTo(a - h / 2, d + h / 2), b.lineTo(a + h / 2, d + h / 2), b.lineTo(a, d - h / 2), b.closePath(), g && b.fill(), r && (e ? b.stroke() : (l = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = l)), b.beginPath()) : "cross" === c && (b.strokeStyle = g, b.lineWidth = h / 4, b.beginPath(), b.moveTo(a - h / 2, d - h / 2), b.lineTo(a + h / 2, d + h / 2), b.stroke(), b.moveTo(a + h / 2, d - h / 2), b.lineTo(a - h / 2, d + h / 2), b.stroke())
                    }
                },
                drawMarkers: function (a) {
                    for (var d = 0; d < a.length; d++) {
                        var b = a[d];
                        u.drawMarker(b.x, b.y, b.ctx, b.type,
                            b.size, b.color, b.borderColor, b.borderThickness)
                    }
                }
            };
        return t
    }();
    Ja.version = "v3.2.13 GA";
    window.StockJS && (Ja && !window.StockJS.Chart) && (window.StockJS.Chart = Ja);
    ha.StockChart = {
        width: 500,
        height: 600,
        backgroundColor: "white",
        theme: "light1",
        animationEnabled: !1,
        animationDuration: 1200,
        culture: "en",
        creditHref: "",
        creditText: "StockJS",
        exportEnabled: !1,
        exportFileName: "StockChart",
        colorSet: "colorSet1",
        rangeChanging: null,
        rangeChanged: null,
        publicProperties: {
            title: "readWrite",
            subtitles: "readWrite",
            navigator: "readWrite",
            rangeSelector: "readWrite",
            charts: "readWrite",
            options: "readWrite",
            bounds: "readOnly",
            container: "readOnly",
            selectedColorSet: "readOnly"
        }
    };
    ha.Navigator = {
        enabled: !0,
        width: 500,
        height: 70,
        verticalAlign: "bottom",
        horizontalAlign: "center",
        dynamicUpdate: !0,
        backgroundColor: "#fff",
        animationEnabled: !1,
        animationDuration: 1200,
        theme: "light1",
        publicProperties: {
            slider: "readWrite",
            backgroundColor: "readWrite",
            animationEnabled: "readWrite",
            animationDuration: "readWrite",
            theme: "readWrite",
            axisX: "readWrite",
            axisY: "readWrite",
            axisX2: "readWrite",
            axisY2: "readWrite",
            data: "readWrite",
            options: "readWrite",
            bounds: "readOnly"
        }
    };
    ha.RangeSelector = {
        enabled: !0,
        width: 500,
        height: 35,
        label: "Range",
        verticalAlign: "top",
        horizontalAlign: "center",
        selectedRangeButtonIndex: null,
        publicProperties: {
            options: "readWrite",
            buttons: "readWrite",
            inputFields: "readWrite",
            buttonStyle: "readWrite",
            bounds: "readOnly"
        }
    };
    ha.RangeButton = {
        range: null,
        rangeType: null,
        label: null,
        style: "position: inline; margin: 5px 0;text-align:center;cursor: pointer;",
        backgroundColorDisabled: "#ddd",
        publicProperties: {
            options: "readWrite",
            bounds: "readOnly"
        }
    };
    ha.ButtonStyle = {
        backgroundColor: "#fff",
        backgroundColorOnHover: "#2196f3",
        backgroundColorOnSelect: "#2196f3",
        borderColor: "#2196f3",
        borderThickness: 2,
        labelFontColor: "#000",
        labelFontColorOnHover: "#fff",
        labelFontSize: 14,
        labelFontStyle: "normal",
        labelFontFamily: v ? "Trebuchet MS, Helvetica, sans-serif" : "Arial",
        labelFontWeight: "normal",
        width: null,
        maxWidth: null,
        padding: {
            left: 5,
            right: 5,
            top: 2,
            bottom: 2
        },
        spacing: 5,
        cursor: "pointer",
        publicProperties: {
            options: "readWrite"
        }
    };
    ha.InputFields = {
        enabled: !0,
        startValue: null,
        endValue: null,
        valueType: "dateTime",
        valueFormatString: "MMM DD YYYY",
        publicProperties: {
            style: "readWrite",
            options: "readWrite"
        }
    };
    ha.Style = {
        backgroundColor: "#fff",
        borderColor: "#2196f3",
        borderColorOnFocus: "#008eff",
        borderThickness: 2,
        fontColor: "#000",
        fontSize: 12,
        fontStyle: "normal",
        fontFamily: v ? "Trebuchet MS, Helvetica, sans-serif" : "Arial",
        fontWeight: "normal",
        width: null,
        maxWidth: null,
        padding: {
            left: 5,
            right: 5,
            top: 2,
            bottom: 2
        },
        spacing: 5,
        cursor: "text",
        publicProperties: {
            options: "readWrite"
        }
    };
    ha.Slider = {
        maskColor: "#d9e8f9",
        maskInverted: !1,
        maskOpacity: 0.7,
        handleColor: "#ddd",
        handleBorderColor: "#aaa",
        handleBorderThickness: 1,
        handleWidth: 8,
        handleHeight: 18,
        minimum: null,
        maximum: null,
        outlineThickness: 1,
        outlineColor: "#666",
        outlineInverted: !1,
        publicProperties: {
            options: "readWrite"
        }
    };
    ha.CultureInfo.rangeSelector = {
        fromText: "From",
        toText: "To",
        rangeText: "Range"
    };
    L = "#FFFFFF";
    X = "#333333";
    F = "#000000";
    Fa = {
        colorSet: "colorSet1",
        backgroundColor: L,
        title: Fa.title,
        subtitles: Fa.subtitles,
        charts: [Fa],
        rangeSelector: {
            buttonStyle: {
                backgroundColor: "#FEFEFE",
                backgroundColorOnHover: "#41a5f5",
                backgroundColorOnSelect: "#2196f3",
                borderColor: "#2196f3",
                borderThickness: 1,
                labelFontColor: F,
                labelFontColorOnHover: "#ffffff",
                labelFontSize: 14,
                labelFontStyle: "normal",
                labelFontFamily: x,
                labelFontWeight: "normal",
                spacing: 0
            },
            inputFields: {
                style: {
                    backgroundColor: "#ffffff",
                    borderColor: "#2196f3",
                    borderColorOnFocus: "#2196f3",
                    borderThickness: 1,
                    fontColor: F,
                    fontSize: 14,
                    fontStyle: "normal",
                    fontFamily: x,
                    fontWeight: "normal"
                }
            }
        },
        navigator: {
            backgroundColor: L,
            slider: {
                maskColor: "#d9e8f9",
                maskOpacity: 0.6,
                handleColor: "#efefef",
                handleBorderColor: "#666666",
                handleBorderThickness: 1,
                outlineColor: "#666666",
                outlineThickness: 1
            }
        },
        toolbar: Fa.toolbar
    };
    L = "#FFFFFF";
    X = "#3A3A3A";
    F = "#666666";
    Ia = {
        colorSet: "colorSet2",
        backgroundColor: L,
        title: Ia.title,
        subtitles: Ia.subtitles,
        charts: [Ia],
        rangeSelector: {
            buttonStyle: {
                backgroundColor: "#FEFEFE",
                backgroundColorOnHover: "#41a5f5",
                backgroundColorOnSelect: "#2196f3",
                borderColor: "#2196f3",
                borderThickness: 1,
                labelFontColor: F,
                labelFontColorOnHover: "#ffffff",
                labelFontSize: 14,
                labelFontStyle: "normal",
                labelFontFamily: x,
                labelFontWeight: "normal",
                spacing: 0
            },
            inputFields: {
                style: {
                    backgroundColor: "#ffffff",
                    borderColor: "#2196f3",
                    borderColorOnFocus: "#2196f3",
                    borderThickness: 1,
                    fontColor: F,
                    fontSize: 14,
                    fontStyle: "normal",
                    fontFamily: x,
                    fontWeight: "normal"
                }
            }
        },
        navigator: {
            backgroundColor: L,
            slider: {
                maskColor: "#D9E8F9",
                maskOpacity: 0.6,
                handleColor: "#EFEFEF",
                handleBorderColor: "#BBBBBB",
                handleBorderThickness: 1,
                outlineColor: "#BBBBBB",
                outlineThickness: 1
            }
        },
        toolbar: Ia.toolbar
    };
    L = "#2A2A2A";
    F = X = "#F5F5F5";
    za = {
        colorSet: "colorSet1",
        backgroundColor: L,
        title: za.title,
        subtitles: za.subtitles,
        charts: [za],
        rangeSelector: {
            buttonStyle: {
                backgroundColor: "#666666",
                backgroundColorOnHover: "#FF7372",
                backgroundColorOnSelect: "#FF7372",
                borderColor: "#FF7372",
                borderThickness: 1,
                labelFontColor: F,
                labelFontColorOnHover: "#F5F5F5",
                labelFontSize: 14,
                labelFontStyle: "normal",
                labelFontFamily: x,
                labelFontWeight: "normal",
                spacing: 0
            },
            inputFields: {
                style: {
                    backgroundColor: "#666666",
                    borderColor: "#FF7372",
                    borderColorOnFocus: "#FF7372",
                    borderThickness: 1,
                    fontColor: F,
                    fontSize: 14,
                    fontStyle: "normal",
                    fontFamily: x,
                    fontWeight: "normal"
                }
            }
        },
        navigator: {
            backgroundColor: L,
            slider: {
                maskColor: "#d9e8f9",
                maskOpacity: 0.6,
                handleColor: "#efefef",
                handleBorderColor: "#666666",
                handleBorderThickness: 1,
                outlineColor: "#FFFFFF",
                outlineThickness: 1
            }
        },
        toolbar: za.toolbar
    };
    L = "#32373A";
    F = X = "#FAFAFA";
    var bb = {
        light1: Fa,
        light2: Ia,
        dark1: za,
        dark2: {
            colorSet: "colorSet2",
            backgroundColor: L,
            title: T.title,
            subtitles: T.subtitles,
            charts: [T],
            rangeSelector: {
                buttonStyle: {
                    backgroundColor: "#666666",
                    backgroundColorOnHover: "#FF7372",
                    backgroundColorOnSelect: "#FF7372",
                    borderColor: "#FF7372",
                    borderThickness: 1,
                    labelFontColor: F,
                    labelFontColorOnHover: "#F5F5F5",
                    labelFontSize: 14,
                    labelFontStyle: "normal",
                    labelFontFamily: x,
                    labelFontWeight: "normal",
                    spacing: 0
                },
                inputFields: {
                    style: {
                        backgroundColor: "#666666",
                        borderColor: "#FF7372",
                        borderColorOnFocus: "#FF7372",
                        borderThickness: 1,
                        fontColor: F,
                        fontSize: 14,
                        fontStyle: "normal",
                        fontFamily: x,
                        fontWeight: "normal"
                    }
                }
            },
            navigator: {
                backgroundColor: L,
                slider: {
                    maskColor: "#d9e8f9",
                    maskOpacity: 0.6,
                    handleColor: "#efefef",
                    handleBorderColor: "#666666",
                    handleBorderThickness: 1,
                    outlineColor: "#FFFFFF",
                    outlineThickness: 1
                }
            },
            toolbar: T.toolbar
        }
    };
    X = Ra.StockChart = function () {
        function l(d) {
            var e;
            e = document.createElement("div");
            e.setAttribute("class", d);
            pa(e, {
                position: "absolute",
                textAlign: "left",
                cursor: "auto",
                webkitTapHighlightColor: "transparent"
            });
            return e
        }

        function t(d, r, l) {
            d = document.createElement(d);
            d.setAttribute("class", r);
            pa(d, {
                webkitTapHighlightColor: "transparent"
            });
            e(l) || d.setAttribute("type", l);
            return d
        }

        function F(d, r) {
            r =
                r || {};
            this.theme = e(r.theme) || e(ab[r.theme]) ? "light1" : r.theme;
            this.predefinedThemes = bb;
            F.base.constructor.call(this, "StockChart", null, r, null, null);
            this.optionsName = "stockChart";
            var l = this;
            this.sessionVariables = {};
            this._axisXMax = this._axisXMin = null;
            this._containerId = d;
            this._objectsInitialized = !1;
            this.ctx = null;
            this.plotArea = {
                canvas: null,
                ctx: null,
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                width: 0,
                height: 0
            };
            this._dataInRenderedOrder = [];
            this.allDOMEventHandlers = [];
            if (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) :
                this._containerId) {
                this.container.innerHTML = "";
                var u = 0,
                    a = 0;
                this._defaultCursor = "default";
                u = this.options.width ? this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width;
                a = this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height;
                this.width = u;
                this.height = a;
                this.x1 = this.y1 = 0;
                this.x2 = this.width;
                this.y2 = this.height;
                this.selectedColorSet = "undefined" !== typeof xa[this.colorSet] ? xa[this.colorSet] : xa.colorSet1;
                this._canvasJSContainer = document.createElement("div");
                this._canvasJSContainer.setAttribute("class", "stockjs-stock-container");
                this._canvasJSContainer.style.position = "relative";
                this._canvasJSContainer.style.userSelect = this._canvasJSContainer.style.WebkitUserSelect = this._canvasJSContainer.style.MozUserSelect = this._canvasJSContainer.style.msUserSelect = "none";
                this._canvasJSContainer.style.textAlign = "left";
                this._canvasJSContainer.style.cursor = "auto";
                this._canvasJSContainer.style.direction = "ltr";
                this._canvasJSContainer.style.fontFamily = x;
                v || (this._canvasJSContainer.style.height =
                    "0px");
                this.container.appendChild(this._canvasJSContainer);
                this.canvas = ra(u, a);
                this.canvas.style.position = "absolute";
                this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Ga(this.ctx), this.overlaidCanvas = ra(u, a), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx =
                        this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", Ga(this.overlaidCanvasCtx)), v ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = ra(u, a), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "stockjs-chart-toolbar"), this._toolBar.style.cssText =
                    "position: absolute; right: 1px; top: 1px; z-index: 999;", this._canvasJSContainer.appendChild(this._toolBar), this.bounds = {
                        x1: 0,
                        y1: 0,
                        x2: this.width,
                        y2: this.height
                    }, this.charts = [], Da(this.charts), this._eventManager = new G(this), z(this.overlaidCanvas, "click", function (a) {
                        l._mouseEventHandler(a)
                    }, this.allDOMEventHandlers), z(this.overlaidCanvas, "mousemove", function (a) {
                        l._mouseEventHandler(a)
                    }, this.allDOMEventHandlers), z(this.overlaidCanvas, "mouseup", function (a) {
                        l._mouseEventHandler(a)
                    }, this.allDOMEventHandlers),
                    z(this.overlaidCanvas, "mousedown", function (a) {
                        l._mouseEventHandler(a);
                        ya(l._dropdownMenu)
                    }, this.allDOMEventHandlers), z(this.overlaidCanvas, "mouseout", function (a) {
                        l._mouseEventHandler(a)
                    }, this.allDOMEventHandlers), z(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function (a) {
                        l._touchEventHandler(a)
                    }, this.allDOMEventHandlers), z(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function (a) {
                        l._touchEventHandler(a)
                    }, this.allDOMEventHandlers),
                    z(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function (a) {
                        l._touchEventHandler(a)
                    }, this.allDOMEventHandlers), z(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function (a) {
                        l._touchEventHandler(a)
                    }, this.allDOMEventHandlers), this.windowResizeHandler = z(window, "resize", function () {
                        l._updateSize() && l.render()
                    }, this.allDOMEventHandlers))
            } else window.console && window.console.log('StockJS Error: StockChart Container with id "' + this._containerId +
                '" was not found')
        }

        function H(d, e) {
            H.base.constructor.call(this, d, e);
            this.options = e;
            this.dockInsidePlotArea = !1
        }

        function M(d, e, l) {
            M.base.constructor.call(this, d, e, l);
            this.options = e;
            this.dockInsidePlotArea = !1
        }

        function G(d) {
            this.stockChart = d;
            this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.ghostCanvas = ra(this.stockChart.width, this.stockChart.height);
            this.ghostCtx = this.ghostCanvas.getContext("2d");
            this.mouseoveredObjectMaps = []
        }

        function A(d, e) {
            e = e || {};
            this.optionsName =
                "navigator";
            A.base.constructor.call(this, "Navigator", "navigator", e, null, d);
            this.parent = this.stockChart = d
        }

        function L(d, r) {
            this.panel = l("stockjs-slider-panel");
            this.parent = this.navigator = d;
            this.stockChart = d.stockChart;
            this.navigator.panel.appendChild(this.panel);
            L.base.constructor.call(this, "Slider", "slider", r, null, d);
            this.options = e(r.navigator) || e(r.navigator.slider) ? {} : r.navigator.slider;
            this.optionsName = "slider";
            this.panMode = !1;
            this.sessionVariables = {}
        }

        function P(d, r) {
            P.base.constructor.call(this,
                "RangeSelector", "rangeSelector", r, null, d);
            this.parent = this.stockChart = d;
            this.options = e(r) || e(r.rangeSelector) ? {} : r.rangeSelector;
            this.optionsName = "rangeSelector";
            this.ctx = d.ctx;
            this._label = {};
            this.buttons = []
        }

        function N(d, r, l) {
            N.base.constructor.call(this, "RangeButton", "rangeButton", l, r, d.rangeSelector);
            this.stockChart = d;
            this.parent = this.rangeSelector = d.rangeSelector;
            this.options = e(l) ? {} : l;
            this.optionsName = "rangeButton";
            this.enabled = !1;
            this.state = "off"
        }

        function S(d, r) {
            S.base.constructor.call(this,
                "InputFields", "inputFields", r, null, d.rangeSelector);
            this.stockChart = d;
            this.options = e(r) || e(r.inputFields) ? {} : r.inputFields;
            this.parent = this.rangeSelector = d.rangeSelector;
            this.elements = [];
            this._textBlocks = [];
            this.optionsName = "inputFields";
            this.elements.push(t("input", "stockjs-input-field", "text"));
            this.elements.push(t("input", "stockjs-input-field", "text"));
            for (var l = 0; l < this.elements.length; l++) this.stockChart._canvasJSContainer.appendChild(this.elements[l]);
            var u = this,
                a = null,
                f = null;
            z(this.elements[0],
                "focus",
                function () {
                    u.elements[0].focused = !0;
                    u._textBlocks[0].borderColor = u.style.borderColorOnFocus;
                    u._textBlocks[0].render(!0)
                }, this.rangeSelector.stockChart.allDOMEventHandlers);
            z(this.elements[0], "focusout", function () {
                u.elements[0].focused = !1;
                var a;
                u.stockChart.charts && u.stockChart.charts.length && (a = u.stockChart.charts[0].axisX && u.stockChart.charts[0].axisX.length ? u.stockChart.charts[0].axisX[0] : u.stockChart.charts[0].axisX2[0]);
                this.value = "dateTime" === u.valueType ? Y(a ? a.viewportMinimum : null, "YYYY-MM-DD",
                    u.stockChart._cultureInfo) : $(a ? a.viewportMinimum : null, u.valueFormatString, u.stockChart._cultureInfo);
                this.style.display = "none";
                u._textBlocks[0].borderColor = u.style.borderColor;
                u._textBlocks[0].render(!0)
            }, this.rangeSelector.stockChart.allDOMEventHandlers);
            z(this.elements[1], "focus", function () {
                u.elements[1].focused = !0;
                u._textBlocks[1].borderColor = u.style.borderColorOnFocus;
                u._textBlocks[1].render(!0)
            }, this.rangeSelector.stockChart.allDOMEventHandlers);
            z(this.elements[1], "focusout", function () {
                u.elements[1].focused = !1;
                var a;
                u.stockChart.charts && u.stockChart.charts.length && (a = u.stockChart.charts[0].axisX && u.stockChart.charts[0].axisX.length ? u.stockChart.charts[0].axisX[0] : u.stockChart.charts[0].axisX2[0]);
                this.value = "dateTime" === u.valueType ? Y(a ? a.viewportMaximum : null, "YYYY-MM-DD", u.stockChart._cultureInfo) : $(a ? a.viewportMaximum : null, u.valueFormatString, u.stockChart._cultureInfo);
                this.style.display = "none";
                u._textBlocks[1].borderColor = u.style.borderColor;
                u._textBlocks[1].render(!0)
            }, this.rangeSelector.stockChart.allDOMEventHandlers);
            z(this.elements[0], "change", function (b) {
                var c, d;
                u.stockChart.charts && u.stockChart.charts.length && (u.stockChart.navigator && u.stockChart.navigator.enabled && (d = u.stockChart.navigator && u.stockChart.navigator.chart && u.stockChart.navigator.chart.axisX ? u.stockChart.navigator.chart.axisX[0] : u.stockChart.navigator.chart.axisX2[0]), c = u.stockChart.charts[0].axisX && u.stockChart.charts[0].axisX.length ? u.stockChart.charts[0].axisX[0] : u.stockChart.charts[0].axisX2[0]);
                b = "dateTime" === u.valueType ? isNaN((new Date(this.value.replace(/-/g,
                    "/"))).getTime()) ? null : (new Date(this.value.replace(/-/g, "/"))).getTime() : this.value;
                a = e(d) ? !e(b) && b < (e(c) ? null : c.maximum) ? Math.max(e(c) ? null : c.minimum, b) : e(c) ? null : c.minimum : !e(b) && b < (e(d) ? null : d.maximum) ? Math.max(e(d) ? null : d.minimum, b) : e(d) ? null : d.minimum;
                f = e(c) ? null : c.viewportMaximum;
                u.stockChart._rangeEventParameter = {
                    stockChart: u.stockChart,
                    source: "inputFields",
                    index: null,
                    minimum: a,
                    maximum: f
                };
                u.stockChart._rangeEventParameter.type = "rangeChanging";
                u.stockChart.dispatchEvent("rangeChanging", u.stockChart._rangeEventParameter,
                    u.stockChart);
                u.stockChart.sessionVariables._axisXMin = a;
                u.stockChart.sessionVariables._axisXMax = f;
                u.stockChart._syncCharts(a, f);
                u.stockChart._rangeEventParameter.type = "rangeChanged";
                u.stockChart.dispatchEvent("rangeChanged", u.stockChart._rangeEventParameter, u.stockChart);
                u.stockChart.rangeSelector && u.stockChart.rangeSelector.resetRangeButtons()
            }, this.rangeSelector.stockChart.allDOMEventHandlers);
            z(this.elements[1], "change", function (b) {
                var c, d;
                u.stockChart.charts && u.stockChart.charts.length && (u.stockChart.navigator &&
                    u.stockChart.navigator.enabled && (d = u.stockChart.navigator && u.stockChart.navigator.chart && u.stockChart.navigator.chart.axisX ? u.stockChart.navigator.chart.axisX[0] : u.stockChart.navigator.chart.axisX2[0]), c = u.stockChart.charts[0].axisX && u.stockChart.charts[0].axisX.length ? u.stockChart.charts[0].axisX[0] : u.stockChart.charts[0].axisX2[0]);
                b = "dateTime" === u.valueType ? isNaN((new Date(this.value.replace(/-/g, "/"))).getTime()) ? null : (new Date(this.value.replace(/-/g, "/"))).getTime() : this.value;
                a = c ? c.viewportMinimum :
                    null;
                f = e(d) ? !e(b) && b > (c ? c.minimum : null) ? Math.min(c ? c.maximum : null, b) : c ? c.maximum : null : !e(b) && b > (d ? d.minimum : null) ? Math.min(d ? d.maximum : null, b) : d ? d.maximum : null;
                u.stockChart._rangeEventParameter = {
                    stockChart: u.stockChart,
                    source: "inputFields",
                    index: null,
                    minimum: a,
                    maximum: f
                };
                u.stockChart._rangeEventParameter.type = "rangeChanging";
                u.stockChart.dispatchEvent("rangeChanging", u.stockChart._rangeEventParameter, u.stockChart);
                u.stockChart.sessionVariables._axisXMin = a;
                u.stockChart.sessionVariables._axisXMax = f;
                u.stockChart._syncCharts(a, f);
                u.stockChart._rangeEventParameter.type = "rangeChanged";
                u.stockChart.dispatchEvent("rangeChanged", u.stockChart._rangeEventParameter, u.stockChart);
                u.stockChart.rangeSelector && u.stockChart.rangeSelector.resetRangeButtons()
            }, this.rangeSelector.stockChart.allDOMEventHandlers);
            z(this.elements[0], "keydown", function (a) {
                if (13 === a.keyCode) {
                    var c = "dateTime" === u.valueType ? Y(u.startValue, "YYYY-MM-DD") : $(u.startValue, u.valueFormatString);
                    this.value != c && hb(this, "change");
                    this.blur();
                    a.preventDefault && a.preventDefault()
                }
            }, this.rangeSelector.stockChart.allDOMEventHandlers);
            z(this.elements[1], "keydown", function (a) {
                if (13 === a.keyCode) {
                    var c = "dateTime" === u.valueType ? Y(u.endValue, "YYYY-MM-DD") : $(u.endValue, u.valueFormatString);
                    this.value != c && hb(this, "change");
                    this.blur();
                    a.preventDefault && a.preventDefault()
                }
            }, this.rangeSelector.stockChart.allDOMEventHandlers)
        }

        function T(d, r) {
            T.base.constructor.call(this, "ButtonStyle", "buttonStyle", r, null, d.rangeSelector);
            this.stockChart = d;
            this.parent =
                this.rangeSelector = d.rangeSelector;
            this.options = e(r) || e(r.buttonStyle) ? {} : r.buttonStyle;
            this.optionsName = "buttonStyle"
        }

        function U(d, r) {
            U.base.constructor.call(this, "Style", "style", r, null, d.rangeSelector.inputFields);
            this.stockChart = d;
            this.parent = this.inputFields = d.rangeSelector.inputFields;
            this.options = e(r) || e(r.style) ? {} : r.style;
            this.optionsName = "style"
        }
        var X = !0;
        ga(F, Z);
        F.prototype._updateOptions = function () {
            this.updateOption("width");
            this.updateOption("height");
            this.updateOption("theme");
            this.updateOption("colorSet") &&
                (this.selectedColorSet = "undefined" !== typeof xa[this.colorSet] ? xa[this.colorSet] : xa.colorSet1);
            this.updateOption("backgroundColor");
            this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
            this.updateOption("exportEnabled");
            this.updateOption("exportFileName");
            this.updateOption("creditHref");
            this.updateOption("creditHref");
            this.updateOption("culture");
            this._cultureInfo = new Oa(this.options.culture);
            this.updateOption("animationEnabled");
            this.updateOption("animationDuration");
            this.updateOption("rangeChanging");
            this.updateOption("rangeChanged");
            ib(this)
        };
        F._supportedChartTypes = Da("line stepLine spline column area stepArea splineArea bubble scatter stackedColumn stackedColumn100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeArea rangeSplineArea waterfall".split(" "));
        F.prototype._initialize = function () {
            this.toolbar = new Wa(this, this.options.toolbar);
            this._updateOptions();
            this.animationEnabled = this.animationEnabled && v;
            this._updateSize();
            this.clearCanvas();
            this.ctx.beginPath();
            var d, r = e(this.options.charts) ? [] : this.options.charts;
            Da(r);
            for (var y = 0; y < this.charts.length; y++) d = this.charts[y], 0 > r.indexOf(d.options) && (this.charts.splice(y, 1), d.destroy(), this._canvasJSContainer.removeChild(d.panel), y--);
            this.layoutManager = new Ka(0, 0, this.width, this.height, 2);
            this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
            this.title = null;
            this.subtitles = [];
            this.options.title && (this.title = new H(this, this.options.title), this.title.setLayout());
            if (this.options.subtitles)
                for (y = 0; y <
                    this.options.subtitles.length; y++) d = new M(this, this.options.subtitles[y], y), this.subtitles.push(d), d.setLayout();
            this.navigator = this.navigator || new A(this, this.options.navigator);
            this.navigator._initialize();
            if (this.navigator.enabled) {
                d = {
                    theme: this.options.navigator && this.options.navigator.theme ? this.options.navigator.theme : this.theme,
                    animationEnabled: this.options.navigator && !e(this.options.navigator.animationEnabled) ? this.options.navigator.animationEnabled : this.animationEnabled,
                    animationDuration: this.options.navigator &&
                        this.options.navigator.animationDuration ? this.options.navigator.animationDuration : this.animationDuration,
                    culture: this.options.navigator && this.options.navigator.culture ? this.options.navigator.culture : this.culture,
                    zoomEnabled: !1,
                    data: this.options.navigator && this.options.navigator.data ? this.options.navigator.data : this.options.charts && this.options.charts[0] && this.options.charts[0].data ? Za(this.options.charts[0].data) : [],
                    axisX: this.options.navigator && this.options.navigator.axisX ? this.options.navigator.axisX : {},
                    axisY: this.options.navigator && this.options.navigator.axisY ? this.options.navigator.axisY : {},
                    axisX2: this.options.navigator && this.options.navigator.axisX2 ? this.options.navigator.axisX2 : {},
                    axisY2: this.options.navigator && this.options.navigator.axisY2 ? this.options.navigator.axisY2 : {},
                    interactivityEnabled: !1,
                    exportEnabled: !1
                };
                for (y = 0; y < d.data.length; y++) !e(this.navigator.options.data) || !e(d.data[y].type) && (e(d.data[y].type) || 0 <= d.data[y].type.indexOf("range") || 0 <= d.data[y].type.indexOf("ohlc") || 0 <= d.data[y].type.indexOf("candlestick") ||
                    0 <= d.data[y].type.indexOf("error")) ? this.navigator.options.data && e(this.navigator.options.data[y].type) && (d.data[y].type = "splineArea") : d.data[y].type = "splineArea";
                if (d.axisX.length)
                    for (y = 0; y < d.axisX.length; y++) d.axisX[y].titleFontSize = e(d.axisX[y].titleFontSize) ? 1 : d.axisX[y].titleFontSize, d.axisX[y].labelFontSize = e(d.axisX[y].labelFontSize) ? 12 : d.axisX[y].labelFontSize, d.axisX[y].labelAngle = e(d.axisX[y].labelAngle) ? 0 : d.axisX[y].labelAngle, d.axisX[y].labelPlacement = e(d.axisX[y].labelPlacement) ? "inside" :
                        d.axisX[y].labelPlacement, d.axisX[y].tickLength = e(d.axisX[y].tickLength) ? 0 : d.axisX[y].tickLength, d.axisX[y].lineThickness = e(d.axisX[y].lineThickness) ? 0 : d.axisX[y].lineThickness, d.axisX[y].tickThickness = e(d.axisX[y].tickThickness) ? 0 : d.axisX[y].tickThickness, d.axisX[y].gridThickness = e(d.axisX[y].gridThickness) ? 1 : d.axisX[y].gridThickness;
                else d.axisX.titleFontSize = this.options.navigator && this.options.navigator.axisX && !e(this.options.navigator.axisX.titleFontSize) ? this.options.navigator.axisX.titleFontSize :
                    v ? 0 : 1, d.axisX.labelFontSize = this.options.navigator && this.options.navigator.axisX && !e(this.options.navigator.axisX.labelFontSize) ? this.options.navigator.axisX.labelFontSize : 12, d.axisX.labelAngle = this.options.navigator && this.options.navigator.axisX && !e(this.options.navigator.axisX.labelAngle) ? this.options.navigator.axisX.labelAngle : 0, d.axisX.labelPlacement = this.options.navigator && this.options.navigator.axisX && !e(this.options.navigator.axisX.labelPlacement) ? this.options.navigator.axisX.labelPlacement :
                    "inside", d.axisX.tickLength = this.options.navigator && this.options.navigator.axisX && !e(this.options.navigator.axisX.tickLength) ? this.options.navigator.axisX.tickLength : 0, d.axisX.lineThickness = this.options.navigator && this.options.navigator.axisX && !e(this.options.navigator.axisX.lineThickness) ? this.options.navigator.axisX.lineThickness : 0, d.axisX.tickThickness = this.options.navigator && this.options.navigator.axisX && !e(this.options.navigator.axisX.tickThickness) ? this.options.navigator.axisX.tickThickness :
                    0, d.axisX.gridThickness = this.options.navigator && this.options.navigator.axisX && !e(this.options.navigator.axisX.gridThickness) ? this.options.navigator.axisX.gridThickness : 1;
                if (d.axisY.length)
                    for (y = 0; y < d.axisY.length; y++) d.axisY[y].titleFontSize = d.axisY[y].titleFontSize ? d.axisY[y].titleFontSize : v ? 0 : 1, d.axisY[y].labelFontSize = d.axisY[y].labelFontSize ? d.axisY[y].labelFontSize : v ? 0 : 1, d.axisY[y].labelPlacement = d.axisY[y].labelPlacement ? d.axisY[y].labelPlacement : "inside", d.axisY[y].includeZero = !1, d.axisY[y].lineThickness =
                        0, d.axisY[y].tickThickness = 0, d.axisY[y].tickLength = 0, d.axisY[y].gridThickness = 0;
                else d.axisY.titleFontSize = this.options.navigator && this.options.navigator.axisY && this.options.navigator.axisY.titleFontSize ? this.options.navigator.axisY.titleFontSize : v ? 0 : 1, d.axisY.labelFontSize = this.options.navigator && this.options.navigator.axisY && this.options.navigator.axisY.labelFontSize ? this.options.navigator.axisY.labelFontSize : v ? 0 : 1, d.axisY.labelPlacement = this.options.navigator && this.options.navigator.axisY && this.options.navigator.axisY.labelPlacement ?
                    this.options.navigator.axisY.labelPlacement : "inside", d.axisY.includeZero = !1, d.axisY.lineThickness = 0, d.axisY.tickThickness = 0, d.axisY.tickLength = 0, d.axisY.gridThickness = 0;
                if (d.axisX2.length)
                    for (y = 0; y < d.axisX2.length; y++) d.axisX2[y].titleFontSize = d.axisX2[y].titleFontSize ? d.axisX2[y].titleFontSize : v ? 0 : 1, d.axisX2[y].labelFontSize = d.axisX2[y].labelFontSize ? d.axisX2[y].labelFontSize : 12, d.axisX2[y].labelAngle = e(d.axisX2[y].labelAngle) ? 0 : d.axisX2[y].labelAngle, d.axisX2[y].labelPlacement = d.axisX2[y].labelPlacement ?
                        d.axisX2[y].labelPlacement : "inside", d.axisX2[y].tickLength = e(d.axisX2[y].tickLength) ? 0 : d.axisX2[y].tickLength, d.axisX2[y].lineThickness = d.axisX2[y].lineThickness ? d.axisX2[y].lineThickness : 0, d.axisX2[y].tickThickness = d.axisX2[y].tickThickness ? d.axisX2[y].tickThickness : 1, d.axisX2[y].gridThickness = e(d.axisX2[y].gridThickness) ? 1 : d.axisX2[y].gridThickness;
                else d.axisX2.titleFontSize = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.titleFontSize ? this.options.navigator.axisX2.titleFontSize :
                    v ? 0 : 1, d.axisX2.labelFontSize = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.labelFontSize ? this.options.navigator.axisX2.labelFontSize : 12, d.axisX2.labelAngle = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.labelAngle ? this.options.navigator.axisX2.labelAngle : 0, d.axisX2.labelPlacement = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.labelPlacement ? this.options.navigator.axisX2.labelPlacement :
                    "inside", d.axisX2.tickLength = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.tickLength ? this.options.navigator.axisX2.tickLength : 0, d.axisX2.lineThickness = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.lineThickness ? this.options.navigator.axisX2.lineThickness : 0, d.axisX2.tickThickness = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.tickThickness ? this.options.navigator.axisX2.tickThickness :
                    1, d.axisX2.gridThickness = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.gridThickness ? this.options.navigator.axisX2.gridThickness : 1;
                if (d.axisY2.length)
                    for (y = 0; y < d.axisY2.length; y++) d.axisY2[y].titleFontSize = d.axisY2[y].titleFontSize ? d.axisY2[y].titleFontSize : v ? 0 : 1, d.axisY2[y].labelFontSize = d.axisY2[y].labelFontSize ? d.axisY2[y].labelFontSize : v ? 0 : 1, d.axisY2[y].labelPlacement = d.axisY2[y].labelPlacement ? d.axisY2[y].labelPlacement : "inside", d.axisY2[y].includeZero = !1, d.axisY2[y].lineThickness = 0, d.axisY2[y].margin = 0, d.axisY2[y].tickLength = 0, d.axisY2[y].tickThickness = 0, d.axisY2[y].gridThickness = 0;
                else d.axisY2.titleFontSize = this.options.navigator && this.options.navigator.axisY2 && this.options.navigator.axisY2.titleFontSize ? this.options.navigator.axisY2.titleFontSize : v ? 0 : 1, d.axisY2.labelFontSize = this.options.navigator && this.options.navigator.axisY2 && this.options.navigator.axisY2.labelFontSize ? this.options.navigator.axisY2.labelFontSize : v ? 0 : 1, d.axisY2.labelPlacement =
                    this.options.navigator && this.options.navigator.axisY2 && this.options.navigator.axisY2.labelPlacement ? this.options.navigator.axisY2.labelPlacement : "inside", d.axisY2.includeZero = !1, d.axisY2.lineThickness = 0, d.axisY2.margin = 0, d.axisY2.tickLength = 0, d.axisY2.tickThickness = 0, d.axisY2.gridThickness = 0;
                d.backgroundColor = this.navigator.backgroundColor;
                for (y = 0; y < d.data.length; y++) d.data[y].markerSize = d.data[y].markerSize ? d.data[y].markerSize : 0;
                if (!this.navigator.chart) {
                    var u = l("stockjs-chart-panel");
                    this.navigator.panel.appendChild(u);
                    u.style.height = this.navigator.height + "px";
                    u.style.width = this.navigator.width + "px"
                }
                this.navigator.chart && (this.navigator.chart.panel.style.width = this.navigator.width + "px");
                this.navigator.chart = this.navigator.chart || new Ja(u, d, {
                    parent: this.navigator,
                    isOptionsInArray: !1,
                    index: null,
                    predefinedThemes: bb,
                    optionsName: "navigator",
                    stockChart: this
                });
                this.navigator.chart._initialize();
                this.navigator.chart.setLayout();
                this.navigator.chart.selectedColorSet = this.selectedColorSet;
                this.navigator._chartOptions = d;
                this.navigator.slider =
                    this.navigator.slider || new L(this.navigator, this.options);
                this.navigator.slider._initialize()
            }
            this.rangeSelector = this.rangeSelector || new P(this, this.options);
            this.rangeSelector.buttonStyle = this.rangeSelector.buttonStyle || new T(this, this.rangeSelector.options);
            this.rangeSelector.inputFields = this.rangeSelector.inputFields || new S(this, this.rangeSelector.options);
            this.rangeSelector.inputFields.style = new U(this, this.rangeSelector.inputFields.options);
            this.rangeSelector.inputFields.style._updateOptions();
            this.rangeSelector.inputFields._initialize();
            if (this.rangeSelector.inputFields && this.rangeSelector.inputFields.enabled)
                for (this.rangeSelector.inputFields._textBlocks = [], this.rangeSelector.inputFields._labels = [], this.rangeSelector.inputFieldsWidth = 0, u = this.rangeSelector.inputFields.style.maxWidth = this.rangeSelector.inputFields.style.options.maxWidth ? this.rangeSelector.inputFields.style.options.maxWidth : this.rangeSelector.stockChart.width / 2, y = 0; y < this.rangeSelector.inputFields.elements.length; y++) {
                    d =
                        new ma(this.rangeSelector.ctx, {
                            x: 0,
                            y: 0,
                            backgroundColor: this.rangeSelector.inputFields.style.backgroundColor,
                            borderColor: this.rangeSelector.inputFields.style.borderColor,
                            borderThickness: this.rangeSelector.inputFields.style.borderThickness,
                            cornerRadius: 0,
                            maxWidth: e(this.rangeSelector.inputFields.style.options.width) ? u : this.rangeSelector.inputFields.style.width,
                            maxHeight: 2 * this.rangeSelector.inputFields.style.fontSize,
                            angle: 0,
                            padding: this.rangeSelector.inputFields.style.padding,
                            text: this.rangeSelector.inputFields.valueFormatString,
                            horizontalAlign: "center",
                            textAlign: "center",
                            fontSize: this.rangeSelector.inputFields.style.fontSize,
                            fontFamily: this.rangeSelector.inputFields.style.fontFamily,
                            fontWeight: this.rangeSelector.inputFields.style.fontWeight,
                            fontColor: this.rangeSelector.inputFields.style.fontColor,
                            fontStyle: this.rangeSelector.inputFields.style.fontStyle,
                            textBaseline: "middle"
                        });
                    var r = d.measureText(),
                        a = new ma(this.rangeSelector.ctx, {
                            x: 0,
                            y: 0,
                            backgroundColor: v ? "transparent" : null,
                            borderColor: this.rangeSelector.inputFields.style.borderColor,
                            borderThickness: 0,
                            cornerRadius: 0,
                            maxWidth: this.rangeSelector.inputFields.style.maxWidth,
                            maxHeight: 2 * this.rangeSelector.inputFields.style.fontSize,
                            angle: 0,
                            padding: this.rangeSelector.inputFields.style.padding,
                            text: "From",
                            horizontalAlign: "left",
                            fontSize: this.rangeSelector.inputFields.style.fontSize,
                            fontFamily: this.rangeSelector.inputFields.style.fontFamily,
                            fontWeight: this.rangeSelector.inputFields.style.fontWeight,
                            fontColor: this.rangeSelector.inputFields.style.fontColor,
                            fontStyle: this.rangeSelector.inputFields.style.fontStyle,
                            textBaseline: "middle"
                        });
                    this.rangeSelector.inputFields._textBlocks.push(d);
                    this.rangeSelector.inputFields._labels.push(a);
                    this.rangeSelector.inputFields._textBlocks[y].bounds = {
                        x1: null,
                        x2: null,
                        y1: null,
                        y2: null,
                        width: null,
                        height: null
                    };
                    this.rangeSelector.inputFields._labels[y].bounds = {
                        x1: null,
                        x2: null,
                        y1: null,
                        y2: null,
                        width: null,
                        height: null
                    };
                    this.rangeSelector.inputFieldsWidth += r.width + this.rangeSelector.inputFields.style.spacing + a.measureText().width;
                    this.rangeSelector.inputFieldsHeight = this.rangeSelector.inputFieldsHeight <
                        r.height ? r.height : this.rangeSelector.inputFieldsHeight;
                    d = this.rangeSelector.inputFields._textBlocks[y];
                    d.id = ++this.rangeSelector.stockChart._eventManager.lastObjectId;
                    this.rangeSelector.stockChart._eventManager.objectMap[d.id] = {
                        id: d.id,
                        objectType: "inputFields",
                        inputFieldIndex: y
                    }
                }
            this.rangeSelector.buttonStyle._updateOptions();
            this.rangeSelector._initialize();
            this._objectsInitialized = !0
        };
        F.prototype.render = function (d) {
            var r = this;
            d && (this.options = d);
            this._initialize();
            this.title && this.title.render();
            if (this.subtitles)
                for (d = 0; d < this.subtitles.length; d++) this.subtitles[d].render();
            var y;
            if (this.options.charts) {
                y = Array(this.options.charts.length);
                var u = this.layoutManager.getFreeSpace(),
                    a = u.height,
                    u = u.height,
                    f = this.options.charts.length;
                for (d = 0; d < this.options.charts.length; d++) e(this.options.charts[d].height) || (y[d] = 0 <= this.options.charts[d].height.toString().indexOf("%") ? Va(this.options.charts[d].height, a, Math.floor(u / f), this.height, 0) : this.options.charts[d].height, u -= y[d], f--);
                u = Math.floor(u / f);
                for (d = 0; d < this.options.charts.length; d++) e(y[d]) && (y[d] = u);
                var b, f = this.options.charts,
                    c = this.charts;
                this.charts = [];
                for (d = 0; d < f.length; d++) {
                    u = this.layoutManager.getFreeSpace();
                    a = f[d];
                    a.theme = f[d].theme ? f[d].theme : this.options.theme ? this.options.theme : this.theme;
                    a.animationEnabled = e(f[d].animationEnabled) ? this.animationEnabled : f[d].animationEnabled;
                    a.animationDuration = f[d].animationDuration ? f[d].animationDuration : this.animationDuration;
                    a.culture = f[d].culture ? f[d].culture : this.culture;
                    a.height = f[d].height ?
                        y[d] : null;
                    e(f.backgroundColor) ? e(this.options.backgroundColor) || (a.backgroundColor = this.backgroundColor) : a.backgroundColor = this.options.charts[d].backgroundColor;
                    for (b = c.length; 0 < b-- && c[b].options !== a;);
                    0 <= b ? (this.charts[d] = c[b], this.charts[d].options = a) : (b = l("stockjs-chart-panel"), b.style.height = y[d] + "px", this._canvasJSContainer.appendChild(b), this.charts[d] = new Ja(b, a, {
                        parent: this,
                        isOptionsInArray: !0,
                        index: d,
                        predefinedThemes: bb,
                        optionsName: "charts",
                        stockChart: this
                    }));
                    this.charts[d].panel.style.width =
                        u.width + "px";
                    this.charts[d].panel.style.top = u.y1 + "px";
                    this.charts[d].panel.style.left = u.x1 + "px";
                    this.charts[d].panel.style.height = y[d] + "px";
                    this.charts[d].height = a.height ? a.height : y[d];
                    this.layoutManager.registerSpace("top", {
                        width: u.width,
                        height: y[d]
                    })
                }
                c = null;
                for (d = 0; d < this.charts.length; d++)
                    if (!e(this.options.charts[d].data))
                        for (b = 0; b < this.options.charts[d].data.length; b++) y = this.options.charts[d].data[b], 0 <= F._supportedChartTypes.indexOf(y.type) || e(y.type) || (X = !1, window.console && window.console.log("StockJS Error: " +
                            y.type + " Chart is not Supported in StockChart"));
                if (!X) return;
                this.setChartsLayout();
                for (d = y = 0; d < this.charts.length; d++)
                    if (e(this.charts[d].options.colorSet)) {
                        this.charts[d].selectedColorSet = [];
                        for (b = y; b < y + this.charts[d].data.length; b++) this.charts[d].selectedColorSet.push(this.selectedColorSet[b % this.selectedColorSet.length]);
                        y += this.charts[d].data.length
                    } if (this.navigator && this.navigator.enabled)
                    if (this.navigator.options.data) {
                        this.navigator.chart.selectedColorSet = [];
                        for (b = y; b < y + this.navigator.chart.data.length; b++) this.navigator.chart.selectedColorSet.push(this.selectedColorSet[b %
                            this.selectedColorSet.length]);
                        y += this.navigator.chart.data.length
                    } else this.navigator.chart.selectedColorSet = this.charts[0].selectedColorSet
            }
            if (this.navigator && this.navigator.enabled) {
                for (d = 0; d < this.navigator.chart.data.length; d++) 0 <= F._supportedChartTypes.indexOf(this.navigator.chart.data[d].type) || (X = !1, window.console && window.console.log("StockJS Error: " + this.navigator.chart.data[d].type + " Chart is not Supported in Navigator"));
                if (X) {
                    var h = this.navigator.chart.axisX && this.navigator.chart.axisX.length ?
                        this.navigator.chart.axisX[0] : this.navigator.chart.axisX2[0];
                    h.bounds.x1 > this._chartsPlotAreaX1 && (this._chartsPlotAreaX1 = h.bounds.x1);
                    this.navigator.width = this.navigator.chart.width = this.navigator.slider.fullWidth = this.navigator.options.width ? this.navigator.options.width : this._chartsPlotAreaX2 - this._chartsPlotAreaX1 + h.bounds.x1;
                    this.navigator.panel.style.left = this._chartsPlotAreaX1 + this.layoutManager.getFreeSpace().x1 - h.bounds.x1 + "px";
                    this.navigator.panel.style.width = this.navigator.chart.panel.style.width =
                        this.navigator.options.width ? this.navigator.options.width : this._chartsPlotAreaX2 - this._chartsPlotAreaX1 + h.bounds.x1 + "px";
                    this.navigator.chart.render(this.navigator._chartOptions);
                    this.navigator.backgroundColor = this.navigator.chart.backgroundColor;
                    this.navigator.animationEnabled = this.navigator.chart.animationEnabled;
                    this.navigator.animationDuration = this.navigator.chart.animationDuration;
                    this.navigator.theme = this.navigator.chart.theme;
                    this.navigator.axisX = this.navigator.chart.axisX;
                    this.navigator.axisX2 =
                        this.navigator.chart.axisX2;
                    this.navigator.axisY = this.navigator.chart.axisY;
                    this.navigator.axisY2 = this.navigator.chart.axisY2;
                    this.navigator.data = this.navigator.chart.data
                }
            }
            u = y = null;
            b = 0;
            f = a = null;
            for (d = 0; d < this.charts.length; d++)
                for (c = this.charts[d].axisX && this.charts[d].axisX.length ? this.charts[d].axisX : this.charts[d].axisX2, y = y || (c && 0 < c.length ? c[0].minimum : null), u = u || (c && 0 < c.length ? c[0].maximum : null), b = 0; b < c.length; b++) h = c[b], h.minimum < y && (y = h.minimum), h.maximum > u && (u = h.maximum);
            var g;
            this.navigator &&
                (this.navigator.chart && X) && (g = this.navigator.chart.axisX && 0 < this.navigator.chart.axisX.length ? this.navigator.chart.axisX[0] : this.navigator.chart.axisX2[0], this._axisXMin = this.navigator.slider.minimum = e(this.navigator.options.slider) || e(this.navigator.options.slider.minimum) ? null : Math.max(g.minimum, this.navigator.slider.minimum), this._axisXMax = this.navigator.slider.maximum = e(this.navigator.options.slider) || e(this.navigator.options.slider.maximum) ? null : Math.min(g.maximum, this.navigator.slider.maximum));
            if (this.rangeSelector && this.rangeSelector.enabled) {
                b = g ? g.maximum - g.minimum : u - y;
                this.charts && this.charts.length && (h = this.charts[0].axisX && this.charts[0].axisX.length ? this.charts[0].axisX[0] : this.charts[0].axisX2[0]);
                for (d = 0; d < this.rangeSelector.buttons.length; d++) {
                    var t = null,
                        c = this.rangeSelector.buttons[d];
                    "year" === c.rangeType ? t = 31104E6 * c.range : "ytd" === c.rangeType ? t = "ytd" : "month" === c.rangeType ? t = 2592E6 * c.range : "week" === c.rangeType ? t = 6048E5 * c.range : "day" === c.rangeType ? t = 864E5 * c.range : "hour" === c.rangeType ?
                        t = 36E5 * c.range : "minute" === c.rangeType ? t = 6E4 * c.range : "second" === c.rangeType ? t = 1E3 * c.range : "millisecond" === c.rangeType ? t = c.range : "all" === c.rangeType ? t = null : "number" === c.rangeType && (t = c.range);
                    if ("ytd" === c.rangeType || t < b) c.enabled = !0;
                    c.enabled ? (c.cursor = this.rangeSelector.buttonStyle.cursor, "on" === c.state && ((e(this._axisXMin) && e(this._axisXMax) && (c.textBlock.fontWeight = "bold", c.textBlock.fontColor = this.rangeSelector.buttonStyle.labelFontColorOnHover, c.textBlock.backgroundColor = this.rangeSelector.buttonStyle.backgroundColorOnSelect),
                            "ytd" === c.rangeType && h) ? (a = new Date(h.viewportMaximum), a.setDate(1), a.setMonth(0), a = a.getTime()) : e(t) ? g ? (a = g.minimum, f = g.maximum) : h && (a = h.minimum, f = h.maximum) : h.viewportMaximum - t < (g ? g.minimum : h.minimum) ? (f = g.minimum - (h.viewportMaximum - t), a = g.minimum, f = Math.min(g.maximum, h.viewportMaximum + f)) : (a = h.viewportMaximum - t, f = h.viewportMaximum)), e(this._axisXMin) && e(this._axisXMax) || (c.state = "off"), this._axisXMin = e(this._axisXMin) ? a : this._axisXMin, this._axisXMax = e(this._axisXMax) ? f : this._axisXMax) : c.cursor =
                        "not-allowed";
                    c.mousemove = function (a) {
                        this.enabled && "off" === this.state && (this.textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColorOnHover, this.textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover, this.textBlock.render(!0))
                    };
                    c.mouseover = function (a) {
                        this.enabled && "off" === this.state && (this.textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColorOnHover, this.textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover,
                            this.textBlock.render(!0))
                    };
                    c.mouseout = function (a) {
                        this.enabled && "off" === this.state && (this.textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColor, this.textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColor, this.textBlock.render(!0))
                    };
                    c.click = function (a) {
                        if (this.enabled) {
                            for (var b = 0, c = null, d = null, f = 0; f < r.rangeSelector.buttons.length; f++) r.rangeSelector.buttons[f] != this && (r.rangeSelector.buttons[f].state = "off"), r.rangeSelector.buttons[f].textBlock.fontWeight =
                                r.rangeSelector.buttonStyle.labelFontWeight, r.rangeSelector.buttons[f].textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColor, r.rangeSelector.buttons[f].textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColor, r.rangeSelector.buttons[f].textBlock.render(!0);
                            var g;
                            r.charts && r.charts.length && (g = r.charts[0].axisX && r.charts[0].axisX.length ? r.charts[0].axisX[0] : r.charts[0].axisX2[0]);
                            var h;
                            r.navigator && r.navigator.chart && (h = r.navigator.chart.axisX ? r.navigator.chart.axisX[0] :
                                r.navigator.chart.axisX2[0]);
                            "year" === this.rangeType ? b = 31104E6 * this.range : "month" === this.rangeType ? b = 2592E6 * this.range : "week" === this.rangeType ? b = 6048E5 * this.range : "day" === this.rangeType ? b = 864E5 * this.range : "hour" === this.rangeType ? b = 36E5 * this.range : "minute" === this.rangeType ? b = 6E4 * this.range : "second" === this.rangeType ? b = 1E3 * this.range : "millisecond" === this.rangeType ? b = this.range : "all" === this.rangeType ? b = null : "number" === this.rangeType && (b = this.range);
                            "ytd" === this.rangeType && g ? (c = new Date(g.viewportMaximum),
                                c.setDate(1), c.setMonth(0), b = c.getTime(), c = Math.max(b, h ? h.minimum : g.minimum), d = g.viewportMaximum) : e(b) ? h ? (c = h.minimum, d = h.maximum) : g && (c = g.minimum, d = g.maximum) : h && g.viewportMaximum - b < (h ? h.minimum : g.minimum) ? (h = r.navigator.chart.axisX[0].minimum - (g.viewportMaximum - b), c = r.navigator.chart.axisX[0].minimum, d = Math.min(r.navigator.chart.axisX[0].maximum, g.viewportMaximum + h)) : (c = g.viewportMaximum - b, d = g.viewportMaximum);
                            r._rangeEventParameter = {
                                stockChart: r,
                                source: "buttons",
                                index: this._index,
                                minimum: c,
                                maximum: d
                            };
                            "on" != this.state && (r._rangeEventParameter.type = "rangeChanging", r.dispatchEvent("rangeChanging", r._rangeEventParameter, r), r._syncCharts(c, d), r.sessionVariables._axisXMin = c, r.sessionVariables._axisXMax = d, r._rangeEventParameter.type = "rangeChanged", r.dispatchEvent("rangeChanged", r._rangeEventParameter, r), this.state = "on");
                            this.textBlock.fontWeight = "bold";
                            this.textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover;
                            this.textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColorOnSelect;
                            this.textBlock.render(!0)
                        }
                    }
                }
                if (this.rangeSelector.inputFields && this.rangeSelector.inputFields.enabled) {
                    this.rangeSelector.inputFields.valueType = this.options.rangeSelector && this.options.rangeSelector.inputFields && this.options.rangeSelector.inputFields.valueType ? this.options.rangeSelector.inputFields.valueType : this.isDateTime ? "dateTime" : "number";
                    for (d = 0; d < this.rangeSelector.inputFields._textBlocks.length; d++) h = this.rangeSelector.inputFields._textBlocks[d], h.mousemove = function (a) {
                        a.inputField.cursor =
                            a.stockChart.rangeSelector.inputFields.style.cursor
                    }, h.mouseover = function (a) {
                        a.inputField.cursor = a.stockChart.rangeSelector.inputFields.style.cursor
                    }, h.mouseout = function (a) {
                        a.inputField.cursor = "auto"
                    }, h.click = function (a) {
                        a.stockChart.rangeSelector.inputFields.elements[a.inputFieldIndex].style.display = "inline";
                        a.stockChart.rangeSelector.inputFields.elements[a.inputFieldIndex].focus()
                    };
                    if (isFinite(y) && isFinite(u)) {
                        "dateTime" === this.rangeSelector.inputFields.valueType ? (this.rangeSelector.inputFields.valueFormatString =
                            this.options.rangeSelector && this.options.rangeSelector.inputFields && this.options.rangeSelector.inputFields.valueFormatString ? this.options.rangeSelector.inputFields.valueFormatString : "MMM DD YYYY", this.rangeSelector.inputFields.startValue = e(this.rangeSelector.inputFields.options.startValue) ? e(a) ? y : a : Y(this.rangeSelector.inputFields.options.startValue, this.rangeSelector.inputFields.valueFormatString), this.rangeSelector.inputFields.endValue = e(this.rangeSelector.inputFields.options.endValue) ? e(f) ? u : f :
                            Y(this.rangeSelector.inputFields.options.endValue, this.rangeSelector.inputFields.valueFormatString)) : (this.rangeSelector.inputFields.valueFormatString = this.options.rangeSelector && this.options.rangeSelector.inputFields && this.options.rangeSelector.inputFields.valueFormatString ? this.options.rangeSelector.inputFields.valueFormatString : "#,##0.##", this.rangeSelector.inputFields.startValue = e(this.rangeSelector.inputFields.options.startValue) ? e(a) ? y : a : this.rangeSelector.inputFields.options.startValue, this.rangeSelector.inputFields.endValue =
                            e(this.rangeSelector.inputFields.options.endValue) ? e(f) ? u : f : this.rangeSelector.inputFields.options.endValue);
                        if (!(e(this._axisXMin) && e(this._axisXMax) && e(this.rangeSelector.inputFields.options.startValue) && e(this.rangeSelector.inputFields.options.endValue)))
                            for (b = 0; b < this.rangeSelector.buttons.length; b++) c = this.rangeSelector.buttons[b];
                        d = Y(this.rangeSelector.inputFields.startValue, "YYYY-MM-DD'T'HH:mm:ssZ");
                        h = Y(this.rangeSelector.inputFields.endValue, "YYYY-MM-DD'T'HH:mm:ssZ");
                        v || (d = d.replace(/-/g,
                            "/"), h = h.replace(/-/g, "/"), d = d.replace("T", " "), h = h.replace("T", " "), d = d.replace(/(\+[0-9]{2})(\:)([0-9]{2}$)/, " UTC$1$3"), h = h.replace(/(\+[0-9]{2})(\:)([0-9]{2}$)/, " UTC$1$3"));
                        this._axisXMin = e(this._axisXMin) ? "dateTime" === this.rangeSelector.inputFields.valueType ? (new Date(d)).getTime() : this.rangeSelector.inputFields.startValue : this._axisXMin;
                        this._axisXMax = e(this._axisXMax) ? "dateTime" === this.rangeSelector.inputFields.valueType ? (new Date(h)).getTime() : this.rangeSelector.inputFields.endValue : this._axisXMax
                    }
                    for (d =
                        0; d < this.rangeSelector.inputFields.elements.length; d++) this.rangeSelector.inputFields.elements[d].title = "dateTime" === this.rangeSelector.inputFields.valueType ? "YYYY-MM-DD" : this.rangeSelector.inputFields.valueFormatString
                }
                this.rangeSelector.render()
            }
            e(this._axisXMin) && (this._axisXMin = y);
            e(this._axisXMax) && (this._axisXMax = u);
            this._axisXMin = !e(this.sessionVariables._axisXMin) && this.navigator && this.navigator.slider && !this.navigator.slider.hasOptionChanged("minimum") ? this.sessionVariables._axisXMin : this._axisXMin;
            this._axisXMax = !e(this.sessionVariables._axisXMax) && this.navigator && this.navigator.slider && !this.navigator.slider.hasOptionChanged("maximum") ? this.sessionVariables._axisXMax : this._axisXMax;
            if (!e(g)) {
                this.navigator.slider.hasOptionChanged("minimum") && (this._axisXMin = this.sessionVariables._axisXMin = this.navigator.slider.sessionVariables.minimum = this.navigator.slider.minimum = this.navigator.slider.options.minimum);
                this.navigator.slider.hasOptionChanged("maximum") && (this._axisXMax = this.sessionVariables._axisXMax =
                    this.navigator.slider.sessionVariables.maximum = this.navigator.slider.maximum = this.navigator.slider.options.maximum);
                if (this._axisXMin < g.minimum || this._axisXMin > g.maximum) this._axisXMin = g.minimum;
                if (this._axisXMax < g.minimum || this._axisXMax > g.maximum) this._axisXMax = g.maximum
            }!e(g) && g.reversed ? this._syncCharts(this._axisXMax, this._axisXMin) : this._syncCharts(this._axisXMin, this._axisXMax)
        };
        F.prototype.setChartsLayout = function () {
            var d, e, l = 0,
                u = this.width;
            this.isPlotAreaSet = this.isDateTime = !1;
            for (var a =
                    0; a < this.charts.length; a++) {
                d = this.charts[a];
                d._initialize();
                d.setLayout();
                e = {};
                if ((d.axisX[0] || d.axisX2[0]) && (d.axisY[0] || d.axisY2[0])) {
                    var f = d.axisX[0] ? d.axisX[0].lineCoordinates : d.axisX2[0].lineCoordinates;
                    if (d.axisY && 0 < d.axisY.length && d.axisY[0]) {
                        var b = d.axisY[0];
                        e.x1 = f.x1 < f.x2 ? f.x1 : b.lineCoordinates.x1;
                        e.x2 = f.x2 > b.lineCoordinates.x2 ? f.x2 : b.lineCoordinates.x2
                    }
                    d.axisY2 && 0 < d.axisY2.length && d.axisY2[0] && (b = d.axisY2[0], e.x1 = f.x1 < f.x2 ? f.x1 : b.lineCoordinates.x1, e.x2 = f.x2 > b.lineCoordinates.x2 ? f.x2 : b.lineCoordinates.x2)
                }
                for (f =
                    0; f < d.data.length; f++) "dateTime" === d.data[f].xValueType && (this.isDateTime = !0);
                l = Math.max(l, e.x1);
                u = Math.min(u, e.x2);
                d.sessionVariables.plotAreaBounds = e
            }
            this._chartsPlotAreaX1 = l;
            this._chartsPlotAreaX2 = u
        };
        F.prototype._updateSize = function () {
            return mb.call(this, [this.canvas, this.overlaidCanvas])
        };
        F.prototype._syncCharts = function (d, r) {
            for (var l = this, u = null, a = Math.min(d, r), f = Math.max(d, r), b = 0; b < this.charts.length; b++) {
                u = this.charts[b];
                u.toolTip && u.toolTip.enabled && u.toolTip.hide();
                for (var c = 0; c < u.axisX.length; c++) u.axisX[c].setViewPortRange(d,
                    r), u.axisX[c].options.labelAngle = e(u.axisX[c].options.labelAngle) ? 0 : u.axisX[c].options.labelAngle, this.charts[b].axisX[c].crosshair && this.charts[b].axisX[c].crosshair.enabled && !this.charts[b].axisX[c].crosshair.options.updated && (this.charts[b].axisX[c].crosshair.options.updated = function (a) {
                    for (var b = 0; b < l.charts.length; b++)
                        if (l.charts[b] != a.chart)
                            for (var c = 0; c < l.charts[b].axisX.length; c++) l.charts[b].axisX[c].crosshair && l.charts[b].axisX[c].crosshair.showAt(a.value)
                });
                for (c = 0; c < u.axisX2.length; c++) u.axisX2[c].setViewPortRange(d,
                    r), u.axisX2[c].options.labelAngle = e(u.axisX2[c].options.labelAngle) ? 0 : u.axisX2[c].options.labelAngle, this.charts[b].axisX2[c].crosshair && this.charts[b].axisX2[c].crosshair.enabled && !this.charts[b].axisX2[c].crosshair.options.updated && (this.charts[b].axisX2[c].crosshair.options.updated = function (a) {
                    for (var b = 0; b < l.charts.length; b++)
                        if (l.charts[b] != a.chart)
                            for (var c = 0; c < l.charts[b].axisX2.length; c++) l.charts[b].axisX2[c].crosshair && l.charts[b].axisX2[c].crosshair.showAt(a.value)
                });
                u._initialize();
                u.setLayout();
                u.panEnabled = u.options.zoomEnabled && u.zoomEnabled ? !1 : !0;
                u.renderElements();
                (e(this.charts[b].options.toolTip) || !e(this.charts[b].options.toolTip) && e(this.charts[b].options.toolTip.updated)) && this.charts[b].toolTip && (this.charts[b].toolTip.updated = function (a) {
                    for (var b = 0; b < l.charts.length; b++) l.charts[b] != a.chart && l.charts[b].toolTip.showAtX(a.entries[0].xValue, a.entries[0].dataSeriesIndex)
                });
                (e(this.charts[b].options.toolTip) || !e(this.charts[b].options.toolTip) && e(this.charts[b].options.toolTip.hidden)) &&
                this.charts[b].toolTip && (this.charts[b].toolTip.hidden = function (a) {
                    for (var b = 0; b < l.charts.length; b++) l.charts[b] != a.chart && l.charts[b].toolTip.hide()
                })
            }
            this.rangeSelector && (this.rangeSelector.enabled && this.rangeSelector.inputFields && this.rangeSelector.inputFields.enabled) && this.rangeSelector._updateInputFields(a, f);
            this.navigator && this.navigator.enabled && this.navigator._updateSlider(a, f)
        };
        F.prototype.destroy = function () {
            for (var d = this.allDOMEventHandlers, e = 0; e < this.charts.length; e++) this.charts[e].destroy();
            this.navigator && this.navigator.enabled && this.navigator.chart.destroy();
            for (e = 0; e < d.length; e++) gb(d[e][0], d[e][1], d[e][2], d[e][3]);
            for (this.allDOMEventHandlers = []; this.navigator && this.navigator.enabled && this.navigator.panel.hasChildNodes();) this.navigator.panel.removeChild(this.navigator.panel.lastChild);
            for (; this._canvasJSContainer && this._canvasJSContainer.hasChildNodes();) this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
            for (; this.container && this.container.hasChildNodes();) this.container.removeChild(this.container.lastChild);
            this.canvas = this.container = this._canvasJSContainer = null;
            this.navigator.panel = null;
            this.rangeSelector.panel = null
        };
        F.prototype.exportChart = function (d) {
            d = "undefined" === typeof d ? {} : d;
            var e = d.format ? d.format : "png",
                l = d.fileName ? d.fileName : this.exportFileName,
                u = this.canvas.cloneNode();
            u.setAttribute("class", u.getAttribute("class") + "-clone");
            var a = u.getContext("2d");
            a.drawImage(this.canvas, 0, 0);
            for (var f = [], b = 0; b < this.charts.length; b++) {
                var c = this.charts[b];
                f.push({
                    canvas: c.canvas,
                    position: {
                        x: c.container.offsetLeft,
                        y: c.container.offsetTop
                    }
                });
                f.push({
                    canvas: c.overlaidCanvas,
                    position: {
                        x: c.container.offsetLeft,
                        y: c.container.offsetTop
                    }
                })
            }
            this.navigator && this.navigator.enabled && (b = this.navigator, f.push({
                canvas: b.chart.canvas,
                position: {
                    x: b.panel.offsetLeft,
                    y: b.panel.offsetTop
                }
            }), f.push({
                canvas: b.chart.overlaidCanvas,
                position: {
                    x: b.panel.offsetLeft,
                    y: b.panel.offsetTop
                }
            }));
            for (b = 0; b < f.length; b++) a.drawImage(f[b].canvas, f[b].position.x * ja, f[b].position.y * ja);
            if (d.toDataURL) return u.toDataURL("image/" + e);
            db(u, e, l)
        };
        F.prototype.print =
            function () {
                var d = this.exportChart({
                        toDataURL: !0
                    }),
                    e = document.createElement("iframe");
                e.setAttribute("class", "stockjs-chart-print-frame");
                e.setAttribute("style", "position:absolute; width:100%; border: 0px; margin: 0px 0px 0px 0px; padding 0px 0px 0px 0px;");
                e.style.height = this.height + "px";
                this._canvasJSContainer.appendChild(e);
                var l = this,
                    u = e.contentWindow || e.contentDocument.document || e.contentDocument;
                u.document.open();
                u.document.write('<!DOCTYPE HTML>\n<html><body style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;"><img src="' +
                    d + '"/><body/></html>');
                u.document.close();
                setTimeout(function () {
                    u.focus();
                    u.print();
                    setTimeout(function () {
                        l._canvasJSContainer.removeChild(e)
                    }, 1E3)
                }, 500)
            };
        F.prototype.getObjectAtXY = function (d, r, l) {
            l = null;
            if (!e(this.rangeSelector)) {
                for (var u = 0; u < this.rangeSelector.buttons.length; u++) {
                    var a = this.rangeSelector.buttons[u];
                    d >= a.bounds.x1 && (d <= a.bounds.x2 && r >= a.bounds.y1 && r <= a.bounds.y2) && (l = a.id)
                }
                for (u = 0; u < this.rangeSelector.inputFields._textBlocks.length; u++) a = this.rangeSelector.inputFields._textBlocks[u],
                    d >= a.bounds.x1 && (d <= a.bounds.x2 && r >= a.bounds.y1 && r <= a.bounds.y2) && (l = a.id)
            }
            return l
        };
        F.prototype._touchEventHandler = function (d) {
            if (d.changedTouches) {
                var r = [],
                    l = d.changedTouches,
                    u = l ? l[0] : d,
                    a = null;
                switch (d.type) {
                    case "touchstart":
                    case "MSPointerDown":
                        r = ["mousemove", "mousedown"];
                        this._lastTouchData = Aa(u);
                        this._lastTouchData.time = new Date;
                        break;
                    case "touchmove":
                    case "MSPointerMove":
                        r = ["mousemove"];
                        break;
                    case "touchend":
                    case "MSPointerUp":
                        var f = this._lastTouchData && this._lastTouchData.time ? new Date - this._lastTouchData.time :
                            0,
                            r = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > f ? ["mouseup", "click"] : ["mouseup"];
                        break;
                    default:
                        return
                }
                if (!(l && 1 < l.length)) {
                    a = Aa(u);
                    a.time = new Date;
                    try {
                        var b = a.y - this._lastTouchData.y,
                            f = a.time - this._lastTouchData.time;
                        if (1 < Math.abs(b) && this._lastTouchData.scroll || 5 < Math.abs(b) && 250 > f) this._lastTouchData.scroll = !0
                    } catch (c) {}
                    this._lastTouchEventType = d.type;
                    if (this._lastTouchData && this._lastTouchData.scroll) this.isDrag && this.resetOverlayedCanvas(), this.isDrag = !1;
                    else
                        for (l = 0; l < r.length; l++)
                            if (a = r[l], b = document.createEvent("MouseEvent"), b.initMouseEvent(a, !0, !0, window, 1, u.screenX, u.screenY, u.clientX, u.clientY, !1, !1, !1, !1, 0, null), u.target.dispatchEvent(b), this._lastTouchData && !e(this._lastTouchData.scroll) && !this._lastTouchData.scroll || this._lastTouchData && !this._lastTouchData.scroll && 250 < f || "click" === a) d.preventManipulation && d.preventManipulation(), d.preventDefault && d.cancelable && d.preventDefault()
                }
            }
        };
        F.prototype._mouseEventHandler = function (d) {
            "undefined" ===
            typeof d.target && d.srcElement && (d.target = d.srcElement);
            var e = Aa(d),
                l = d.type,
                u, a;
            d.which ? a = 3 == d.which : d.button && (a = 2 == d.button);
            F.capturedEventParam && (u = F.capturedEventParam, "mouseup" === l && (F.capturedEventParam = null, u.stockChart.overlaidCanvas.releaseCapture ? u.stockChart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", u.stockChart._mouseEventHandler, !1)), u.hasOwnProperty(l) && ("mouseup" !== l || u.stockChart.overlaidCanvas.releaseCapture ? d.target !== u.stockChart.overlaidCanvas &&
                v || u[l].call(u.context, e.x, e.y) : d.target !== u.stockChart.overlaidCanvas && (u.stockChart.isDrag = !1)));
            if (this._ignoreNextEvent) this._ignoreNextEvent = !1;
            else if (d.preventManipulation && d.preventManipulation(), d.preventDefault && d.preventDefault(), Ma && window.console && (window.console.log(l + " --\x3e x: " + e.x + "; y:" + e.y), a && window.console.log(d.which), "mouseup" === l && window.console.log("mouseup")), !a) {
                if (!F.capturedEventParam && this._events) {
                    for (var f = 0; f < this._events.length; f++)
                        if (this._events[f].hasOwnProperty(l))
                            if (u =
                                this._events[f], a = u.bounds, e.x >= a.x1 && e.x <= a.x2 && e.y >= a.y1 && e.y <= a.y2) {
                                u[l].call(u.context, e.x, e.y);
                                "mousedown" === l && !0 === u.capture ? (Chart.capturedEventParam = u, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, !1)) : "mouseup" === l && (u.stockChart.overlaidCanvas.releaseCapture ? u.stockChart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, !1));
                                break
                            } else u =
                                null;
                    d.target.style.cursor = u && u.cursor ? u.cursor : this._defaultCursor
                }
                l = this.bounds;
                (e.x < l.x1 || e.x > l.x2 || e.y < l.y1 || e.y > l.y2) && this.resetOverlayedCanvas();
                !this.isDrag && this._eventManager && this._eventManager.mouseEventHandler(d)
            }
        };
        F.prototype.resetOverlayedCanvas = function () {
            this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height)
        };
        F.prototype.clearCanvas = nb;
        F.prototype.getAutoFontSize = ob;
        ga(H, Ha);
        ga(M, Na);
        Ja.prototype.alignVerticalAxes = function () {
            if (!this.isNavigator && this.stockChart) {
                for (var d =
                        this.sessionVariables.plotAreaBounds, e = this.stockChart._chartsPlotAreaX1 - d.x1, d = d.x2 - this.stockChart._chartsPlotAreaX2, l = 0; l < this.axisX.length; l++) this.axisX[l].lineCoordinates.x1 += e, this.axisX[l].lineCoordinates.x2 -= d, this.axisX[l].lineCoordinates.width = this.axisX[l].lineCoordinates.x2 - this.axisX[l].lineCoordinates.x1, this.axisX[l].bounds.x1 += e, this.axisX[l].bounds.x2 -= d, this.axisX[l].calculateValueToPixelConversionParameters();
                for (l = 0; l < this.axisX2.length; l++) this.axisX2[l].lineCoordinates.x1 +=
                    e, this.axisX2[l].lineCoordinates.x2 -= d, this.axisX2[l].lineCoordinates.width = this.axisX2[l].lineCoordinates.x2 - this.axisX2[l].lineCoordinates.x1, this.axisX2[l].bounds.x1 += e, this.axisX2[l].bounds.x2 -= d, this.axisX2[l].calculateValueToPixelConversionParameters();
                for (l = 0; l < this.axisY.length; l++) this.axisY[l].lineCoordinates.x1 += e, this.axisY[l].lineCoordinates.x2 += e, this.axisY[l].bounds.x1 += e, this.axisY[l].bounds.x2 += e;
                for (l = 0; l < this.axisY2.length; l++) this.axisY2[l].lineCoordinates.x1 -= d, this.axisY2[l].lineCoordinates.x2 -=
                    d, this.axisY2[l].bounds.x1 -= d, this.axisY2[l].bounds.x2 -= d
            }
        };
        Ja.prototype.syncCharts = function (d, l) {
            this.stockChart && (d = e(d) ? this.stockChart._axisXMin : d, l = e(l) ? this.stockChart._axisXMax : l, this.stockChart._syncCharts(d, l), this.stockChart.sessionVariables._axisXMin = d, this.stockChart.sessionVariables._axisXMax = l, this.stockChart.rangeSelector && "zoom" !== this._zoomButton.getAttribute("state") && this.stockChart.rangeSelector.resetRangeButtons())
        };
        G.prototype.reset = function () {
            this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.eventObjects = [];
            v && (this.ghostCtx.clearRect(0, 0, this.stockChart.width, this.stockChart.height), this.ghostCtx.beginPath())
        };
        G.prototype.getNewObjectTrackingId = function () {
            return ++this.lastObjectId
        };
        G.prototype.mouseEventHandler = function (d) {
            if ("mousemove" === d.type || "click" === d.type) {
                var e = [],
                    l = Aa(d),
                    u = null;
                if ((u = this.stockChart.getObjectAtXY(l.x, l.y, !1)) && "undefined" !== typeof this.objectMap[u])
                    if (u = this.objectMap[u], "rangeButton" === u.objectType) {
                        var a =
                            this.stockChart.rangeSelector.buttons[u.rangeButtonIndex];
                        u.eventParameter = {
                            x: l.x,
                            y: l.y,
                            rangeButton: a,
                            rangeButtonIndex: u.rangeButtonIndex,
                            stockChart: this.stockChart
                        };
                        u.eventContext = {
                            context: this.stockChart.rangeSelector,
                            userContext: a,
                            mouseover: "mouseover",
                            mousemove: "mousemove",
                            mouseout: "mouseout",
                            click: "click"
                        };
                        e.push(u)
                    } else "inputFields" === u.objectType && (a = this.stockChart.rangeSelector.inputFields._textBlocks[u.inputFieldIndex], u.eventParameter = {
                        x: l.x,
                        y: l.y,
                        inputField: a,
                        inputFieldIndex: u.inputFieldIndex,
                        stockChart: this.stockChart
                    }, u.eventContext = {
                        context: this.stockChart.rangeSelector,
                        userContext: a,
                        mouseover: "mouseover",
                        mousemove: "mousemove",
                        mouseout: "mouseout",
                        click: "click"
                    }, e.push(u));
                a = [];
                for (l = 0; l < this.mouseoveredObjectMaps.length; l++) {
                    for (var f = !0, u = 0; u < e.length; u++)
                        if (e[u].id === this.mouseoveredObjectMaps[l].id) {
                            f = !1;
                            break
                        } f ? this.fireEvent(this.mouseoveredObjectMaps[l], "mouseout", d) : a.push(this.mouseoveredObjectMaps[l])
                }
                this.mouseoveredObjectMaps = a;
                for (l = 0; l < e.length; l++) {
                    a = !1;
                    for (u = 0; u < this.mouseoveredObjectMaps.length; u++)
                        if (e[l].id ===
                            this.mouseoveredObjectMaps[u].id) {
                            a = !0;
                            break
                        } a || (this.fireEvent(e[l], "mouseover", d), this.mouseoveredObjectMaps.push(e[l]));
                    "click" === d.type ? this.fireEvent(e[l], "click", d) : "mousemove" === d.type && this.fireEvent(e[l], "mousemove", d)
                }
            }
        };
        G.prototype.fireEvent = function (d, e, l) {
            if (d && e) {
                var u = d.eventParameter,
                    a = d.eventContext,
                    f = d.eventContext.userContext;
                f && (a && f[a[e]]) && f[a[e]].call(f, u);
                "mouseout" !== e ? f.cursor && f.cursor !== l.target.style.cursor && (l.target.style.cursor = f.cursor) : (l.target.style.cursor = this.stockChart._defaultCursor,
                    delete d.eventParameter, delete d.eventContext)
            }
        };
        ga(A, Z);
        A.prototype._updateOptions = function () {
            this.updateOption("enabled");
            this.updateOption("backgroundColor");
            this.options.backgroundColor || (this.backgroundColor = this.stockChart.backgroundColor);
            this.updateOption("animationEnabled");
            this.animationEnabled = this.animationEnabled && v;
            this.updateOption("animationDuration");
            this.updateOption("theme");
            this.updateOption("verticalAlign");
            this.updateOption("horizontalAlign");
            this.updateOption("width");
            this.updateOption("height");
            this.updateOption("dynamicUpdate")
        };
        A.prototype._initialize = function () {
            this._updateOptions();
            var d;
            this.enabled && !this.panel && (this.panel = l("stockjs-navigator-panel"), (d = !e(this.panel) && this.stockChart._canvasJSContainer.contains(this.panel)) || this.stockChart._canvasJSContainer.appendChild(this.panel));
            d = !e(this.panel) && this.stockChart._canvasJSContainer.contains(this.panel);
            if (this.enabled) {
                this.height = this.options.height ? parseInt(this.options.height) : 0.14 * this.stockChart.height;
                d || this.stockChart._canvasJSContainer.appendChild(this.panel);
                var r = this.stockChart.layoutManager.getFreeSpace(),
                    t = r.x1,
                    u = r.y1;
                this.width = this.options.width ? this.width : r.width;
                "top" === this.verticalAlign ? (u = r.y1 + 2, d = "top") : (u = r.y2 - this.height - 2, d = "bottom");
                "left" === this.horizontalAlign ? t = r.x1 + 2 : "center" === this.horizontalAlign ? t = r.x1 + r.width / 2 - this.width / 2 : "right" === this.horizontalAlign && (t = r.x2 - 2 - this.width);
                this.panel.style.top = u + "px";
                this.panel.style.left = t + "px";
                this.panel.style.height = this.height + "px";
                this.panel.style.width = this.width + "px";
                this.stockChart.layoutManager.registerSpace(d, {
                    width: this.width,
                    height: this.height + 2
                });
                this.bounds = {
                    x1: t,
                    y1: u,
                    x2: t + this.width,
                    y2: u + this.height
                }
            } else d && this.stockChart._canvasJSContainer.removeChild(this.panel)
        };
        A.prototype._updateSlider = function (d, l) {
            var t = this.chart.axisX && this.chart.axisX.length ? this.chart.axisX[0] : this.chart.axisX2[0];
            if (!e(t)) {
                var u = Math.max(t.bounds.x1, t.convertValueToPixel(t.reversed ? Math.max(d, Math.min(t.maximum, l)) : Math.min(d, Math.min(t.maximum, l)))),
                    a = t.convertValueToPixel(t.reversed ? Math.min(d, Math.min(t.maximum, l)) :
                        Math.max(d, Math.min(t.maximum, l)));
                this.slider.panel.style.left = u + "px";
                this.slider.left = u;
                this.slider.panel.style.width = a - u + "px";
                this.slider.width = a - u;
                this.slider.minimum = d;
                this.slider.maximum = l;
                this.chart.resetOverlayedCanvas();
                this.slider.maskInverted ? da(this.chart.overlaidCanvasCtx, u, 0, a, this.height, this.slider.maskColor, 0, this.slider.outlineColor, 0, 0, 0, 0, this.slider.maskOpacity) : (da(this.chart.overlaidCanvasCtx, t.bounds.x1, 0, u, this.height, this.slider.maskColor, 0, this.slider.outlineColor, !1, !1,
                    !1, !1, this.slider.maskOpacity), da(this.chart.overlaidCanvasCtx, a, 0, this.width, this.height, this.slider.maskColor, 0, this.slider.outlineColor, !1, !1, !1, !1, this.slider.maskOpacity));
                this.chart.overlaidCanvasCtx.lineWidth = this.slider.outlineThickness;
                this.chart.overlaidCanvasCtx.strokeStyle = this.slider.outlineColor;
                this.chart.overlaidCanvasCtx.save();
                this.chart.overlaidCanvasCtx.beginPath();
                0 < this.slider.outlineThickness && (this.slider.outlineInverted ? (this.chart.overlaidCanvasCtx.moveTo(t.bounds.x1, this.height -
                    this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (u - this.slider.outlineThickness / 2 << 0) + 0.5 : u, this.height - this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (u - this.slider.outlineThickness / 2 << 0) + 0.5 : u, this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (a - this.slider.outlineThickness / 2 << 0) + 0.5 : a, this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 ===
                    this.slider.outlineThickness % 2 ? (a - this.slider.outlineThickness / 2 << 0) + 0.5 : a, this.height - this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(this.width, this.height - this.slider.outlineThickness)) : (this.chart.overlaidCanvasCtx.moveTo(t.bounds.x1, this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (u - this.slider.outlineThickness / 2 << 0) + 0.5 : u, this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness %
                    2 ? (u - this.slider.outlineThickness / 2 << 0) + 0.5 : u, this.height - this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (a - this.slider.outlineThickness / 2 << 0) + 0.5 : a, this.height - this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (a - this.slider.outlineThickness / 2 << 0) + 0.5 : a, this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(this.width, this.slider.outlineThickness / 2)));
                this.chart.overlaidCanvasCtx.stroke();
                this.chart.overlaidCanvasCtx.restore();
                da(this.chart.overlaidCanvasCtx, 1 === this.slider.handleBorderThickness % 2 ? u - this.slider.handleWidth / 2 << 0.5 : u - this.slider.handleWidth / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? this.height / 2 - this.slider.handleHeight / 2 << 0.5 : this.height / 2 - this.slider.handleHeight / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? u + this.slider.handleWidth / 2 << 0.5 : u + this.slider.handleWidth / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? this.height / 2 + this.slider.handleHeight / 2 << 0.5 : this.height /
                    2 + this.slider.handleHeight / 2 << 0, this.slider.handleColor, this.slider.handleBorderThickness, this.slider.handleBorderColor, !1, !1, !1, !1, 1);
                da(this.chart.overlaidCanvasCtx, 1 === this.slider.handleBorderThickness % 2 ? a - this.slider.handleWidth / 2 << 0.5 : a - this.slider.handleWidth / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? this.height / 2 - this.slider.handleHeight / 2 << 0.5 : this.height / 2 - this.slider.handleHeight / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? a + this.slider.handleWidth / 2 << 0.5 : a + this.slider.handleWidth / 2 <<
                    0, 1 === this.slider.handleBorderThickness % 2 ? this.height / 2 + this.slider.handleHeight / 2 << 0.5 : this.height / 2 + this.slider.handleHeight / 2 << 0, this.slider.handleColor, this.slider.handleBorderThickness, this.slider.handleBorderColor, !1, !1, !1, !1, 1);
                this.chart.overlaidCanvasCtx.lineWidth = this.slider.handleBorderThickness;
                this.chart.overlaidCanvasCtx.strokeStyle = this.slider.handleBorderColor;
                this.chart.overlaidCanvasCtx.save();
                this.chart.overlaidCanvasCtx.beginPath();
                this.chart.overlaidCanvasCtx.moveTo((1 === this.slider.handleBorderThickness %
                    2 ? (u - this.slider.handleBorderThickness / 2 << 0) + 0.5 : u) - Math.round(this.slider.handleBorderThickness), this.height / 2 - this.slider.handleHeight / 4);
                this.chart.overlaidCanvasCtx.lineTo((1 === this.slider.handleBorderThickness % 2 ? (u - this.slider.handleBorderThickness / 2 << 0) + 0.5 : u) - Math.round(this.slider.handleBorderThickness), this.height / 2 + this.slider.handleHeight / 4);
                this.chart.overlaidCanvasCtx.moveTo((1 === this.slider.handleBorderThickness % 2 ? (u + this.slider.handleBorderThickness / 2 << 0) + 0.5 : u) + Math.round(this.slider.handleBorderThickness),
                    this.height / 2 - this.slider.handleHeight / 4);
                this.chart.overlaidCanvasCtx.lineTo((1 === this.slider.handleBorderThickness % 2 ? (u + this.slider.handleBorderThickness / 2 << 0) + 0.5 : u) + Math.round(this.slider.handleBorderThickness), this.height / 2 + this.slider.handleHeight / 4);
                this.chart.overlaidCanvasCtx.moveTo((1 === this.slider.handleBorderThickness % 2 ? (a - this.slider.handleBorderThickness / 2 << 0) + 0.5 : a) - Math.round(this.slider.handleBorderThickness), this.height / 2 - this.slider.handleHeight / 4);
                this.chart.overlaidCanvasCtx.lineTo((1 ===
                    this.slider.handleBorderThickness % 2 ? (a - this.slider.handleBorderThickness / 2 << 0) + 0.5 : a) - Math.round(this.slider.handleBorderThickness), this.height / 2 + this.slider.handleHeight / 4);
                this.chart.overlaidCanvasCtx.moveTo((1 === this.slider.handleBorderThickness % 2 ? (a + this.slider.handleBorderThickness / 2 << 0) + 0.5 : a) + Math.round(this.slider.handleBorderThickness), this.height / 2 - this.slider.handleHeight / 4);
                this.chart.overlaidCanvasCtx.lineTo((1 === this.slider.handleBorderThickness % 2 ? (a + this.slider.handleBorderThickness /
                    2 << 0) + 0.5 : a) + Math.round(this.slider.handleBorderThickness), this.height / 2 + this.slider.handleHeight / 4);
                this.chart.overlaidCanvasCtx.stroke();
                this.chart.overlaidCanvasCtx.restore()
            }
        };
        ga(L, Z);
        L.prototype._updateOptions = function () {
            this.updateOption("maskColor");
            this.updateOption("maskInverted");
            this.updateOption("maskOpacity");
            this.updateOption("handleColor");
            this.updateOption("handleBorderColor");
            this.updateOption("handleBorderThickness");
            this.updateOption("handleWidth");
            this.updateOption("handleHeight");
            this.updateOption("outlineColor");
            this.updateOption("outlineThickness");
            this.updateOption("outlineInverted");
            this.updateOption("minimum");
            this.updateOption("maximum")
        };
        L.prototype._attachEvents = function () {
            var d = this;
            z(this.panel, "mousedown", function (e) {
                d.stockChart.isDrag = !0;
                e.target !== d.leftHandle && e.target !== d.rightHandle && (d.stockChart.navigatorClicked = !0, d.currentHandle = d.leftHandle, d.panMode = !0, d.startPosition = Aa(e), e.target === d.currentHandle ? d.startPosition.x += d.currentHandle.offsetLeft + d.currentHandle.clientWidth /
                    2 + d.panel.offsetLeft : e.target === d.panel && (d.startPosition.x += d.panel.offsetLeft), d.startWidth = d.panel.clientWidth, d.startLeft = d.panel.offsetLeft)
            }, this.stockChart.allDOMEventHandlers);
            z(this.panel, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function (e) {
                d.stockChart._touchEventHandler(e)
            }, this.stockChart.allDOMEventHandlers);
            z(this.navigator.panel, "mousedown", function (l) {
                if (l.target !== d.navigator.slider.panel && l.target !== d.leftHandle && l.target !== d.rightHandle) {
                    d.stockChart.navigatorClicked = !0;
                    var t = Aa(l),
                        u, a;
                    u = 0;
                    var f = d.navigator.chart.axisX && d.navigator.chart.axisX.length ? d.navigator.chart.axisX[0] : d.navigator.chart.axisX2[0];
                    l = d.navigator.slider.left;
                    e(d.startLeft) && (d.startLeft = l);
                    u = l + d.navigator.slider.width;
                    a = t.x - (l + u) / 2;
                    if (t.x < l || t.x > u) {
                        var t = Math.max(0, l + a),
                            b = Math.min(u + a, d.navigator.width);
                        u + a > d.navigator.width && (u = u + a - d.navigator.width, t -= u);
                        0 > l + a && (u = Math.abs(l + a), b += u);
                        d.stockChart._rangeEventParameter = {
                            stockChart: d.stockChart,
                            source: "navigator",
                            index: null,
                            minimum: f.convertPixelToValue(t),
                            maximum: f.convertPixelToValue(b)
                        };
                        d.stockChart.sessionVariables._axisXMin = f.convertPixelToValue(t);
                        d.stockChart.sessionVariables._axisXMax = f.convertPixelToValue(b);
                        d.navigator.dynamicUpdate ? (d.stockChart._rangeEventParameter.type = "rangeChanging", d.stockChart.dispatchEvent("rangeChanging", d.stockChart._rangeEventParameter, d.stockChart), d.stockChart._syncCharts(f.convertPixelToValue(t), f.convertPixelToValue(b)), d.stockChart._rangeEventParameter.type = "rangeChanged", d.stockChart.dispatchEvent("rangeChanged",
                            d.stockChart._rangeEventParameter, d.stockChart)) : d.navigator._updateSlider(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax)
                    }
                }
            }, this.navigator.stockChart.allDOMEventHandlers);
            z(this.navigator.panel, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function (e) {
                d.stockChart._touchEventHandler(e)
            }, this.navigator.stockChart.allDOMEventHandlers);
            z(this.navigator.stockChart.container, "mousemove", function (l) {
                var t = d.navigator.chart.axisX && d.navigator.chart.axisX.length ?
                    d.navigator.chart.axisX[0] : d.navigator.chart.axisX2[0];
                if (!e(d.currentHandle) && d.startPosition) {
                    d.navigator.chart.overlaidCanvas.style.cursor = d.navigator.chart.container.style.cursor = d.navigator.panel.style.cursor = "ew-resize";
                    var u;
                    u = d.currentHandle === d.leftHandle ? 1 : -1;
                    var a = Aa(l);
                    l = l.target || l.srcElement;
                    a.x = l === d.currentHandle ? a.x + (d.currentHandle.offsetLeft + d.currentHandle.clientWidth / 2 + d.panel.offsetLeft) : l === d.mask || l === d.panel ? a.x + d.panel.offsetLeft : l === d.rightHandle && d.currentHandle === d.leftHandle ?
                        a.x + (d.rightHandle.offsetLeft + d.rightHandle.clientWidth / 2 + d.panel.offsetLeft) : l === d.leftHandle && d.currentHandle === d.rightHandle ? a.x + d.panel.offsetLeft : a.x + ("stockjs-chart-toolbar" === l.parentElement.className ? l.offsetParent.offsetLeft + l.offsetLeft - d.stockChart._chartsPlotAreaX1 : l.parentElement.parentElement.parentElement === d.navigator.panel ? l.offsetLeft : l.offsetLeft - d.stockChart._chartsPlotAreaX1);
                    var f = a.x - d.startPosition.x;
                    if (0 !== f) {
                        l = d.panel.offsetLeft;
                        var b = d.panel.clientWidth;
                        0 < u && (l = Math.max(d.startLeft +
                            u * f, d._left));
                        d.panMode || (b = Math.min(d.startWidth - u * f, d.fullWidth), u * f > d.startWidth ? (l = 0 < u ? d.startLeft + d.startWidth : Math.max(a.x, d._left), b = (0 < u ? a.x : d.startLeft) - parseFloat(l)) : 0 > u && (l = d.startLeft));
                        l + b <= d._left + d.fullWidth && (2 < Math.abs(d.startLeft - l) || 2 < Math.abs(d.startWidth - parseFloat(b))) && (0 < u && (d.left = l, d.panel.style.left = d.left + "px"), d.panMode || (d.panel.style.width = d.width = b + "px"), e(t) || (u = t.convertPixelToValue(Math.max(t.bounds.x1, parseFloat(l))), t = t.convertPixelToValue(parseFloat(l) + parseFloat(b)),
                            d.stockChart.sessionVariables._axisXMin = u, d.stockChart.sessionVariables._axisXMax = t, d.stockChart.rangeSelector && !d.panMode && d.stockChart.rangeSelector.resetRangeButtons(), d.stockChart._rangeEventParameter = {
                                stockChart: d.stockChart,
                                source: "navigator",
                                index: null,
                                minimum: u,
                                maximum: t
                            }, d.navigator.dynamicUpdate ? (d.stockChart._rangeEventParameter.type = "rangeChanging", d.stockChart.dispatchEvent("rangeChanging", d.stockChart._rangeEventParameter, d.stockChart), d.stockChart._syncCharts(u, t), d.stockChart._rangeEventParameter.type =
                                "rangeChanged", d.stockChart.dispatchEvent("rangeChanged", d.stockChart._rangeEventParameter, d.stockChart)) : d.navigator._updateSlider(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax)))
                    }
                } else d.navigator.chart.overlaidCanvas.style.cursor = d.navigator.chart.container.style.cursor = d.navigator.panel.style.cursor = "auto"
            }, this.navigator.stockChart.allDOMEventHandlers);
            z(this.navigator.stockChart.container, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function (e) {
                    d.stockChart._touchEventHandler(e)
                },
                this.navigator.stockChart.allDOMEventHandlers)
        };
        L.prototype._initialize = function () {
            var d = this,
                l;
            this._updateOptions();
            X && (this.eventsAttached || (this._attachEvents(), this.eventsAttached = !0), this.handleWidth = this.options.handleWidth ? this.handleWidth : 8, this.handleHeight = this.options.handleHeight ? Math.min(this.navigator.height, this.options.handleHeight) : 0.25 * this.navigator.height, this.leftHandle || (this.leftHandle = t("button", "stockjs-slider-handle", "button"), this.leftHandle.innerHTML = "||", this.leftHandle.style.cssText =
                "height: " + this.navigator.height + "px; width: " + (this.handleWidth + 10) + "px; position:absolute; left: -" + (this.handleWidth / 2 + 8) + "px; top: 0; cursor:ew-resize;border-style: solid; border-width:" + this.handleBorderThickness + "px; border-color: transparent; outline:none; padding:0px; background-color: transparent; color: transparent;font-size:12px;font-family:Arial;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;user-select: none; opacity: 1; z-index: 999;", this.panel.appendChild(this.leftHandle),
                this.initHandle(this.leftHandle, 1)), this.rightHandle || (this.rightHandle = t("button", "stockjs-slider-handle", "button"), this.rightHandle.innerHTML = "||", this.rightHandle.style.cssText = "height: " + this.navigator.height + "px; width: " + (this.handleWidth + 10) + "px; position:absolute; right: -" + (this.handleWidth / 2 + 8) + "px; top: 0; cursor:ew-resize;border-style: solid; border-width:" + this.handleBorderThickness + "px; border-color: transparent; outline:none; padding:0px; background-color: transparent; color: transparent;font-size:12px;font-family:Arial;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;user-select: none; opacity: 1; z-index: 999;",
                this.panel.appendChild(this.rightHandle), this.initHandle(this.rightHandle, -1)), this.panel.style.cssText = "height: " + this.navigator.height + "px; width: 100%; position: absolute; cursor: move;", this.fullWidth = this.panel.clientWidth, this._left = this.panel.offsetLeft, z(document, "mousedown", function (e) {
                if (d.stockChart.rangeSelector && d.stockChart.rangeSelector.inputFields && d.stockChart.rangeSelector.inputFields.enabled)
                    for (var l = 0; l < d.stockChart.rangeSelector.inputFields.elements.length; l++) e.target != d.stockChart.rangeSelector.inputFields.elements[l] &&
                        d.stockChart.rangeSelector.inputFields.elements[l].focused && d.stockChart.rangeSelector.inputFields.elements[l].blur()
            }, this.navigator.stockChart.allDOMEventHandlers), z(document, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function (d) {
                a: {
                    var e = d.changedTouches,
                        e = e ? e[0] : d,
                        a = "";
                    switch (d.type) {
                        case "touchstart":
                        case "MSPointerDown":
                            a = "mousedown";
                            break;
                        case "touchmove":
                        case "MSPointerMove":
                            a = "mousemove";
                            break;
                        case "touchend":
                        case "MSPointerUp":
                            a = "mouseup";
                            break;
                        default:
                            break a
                    }
                    d = document.createEvent("MouseEvent");
                    d.initMouseEvent(a, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null);e.target.dispatchEvent(d)
                }
            }, this.navigator.stockChart.allDOMEventHandlers), z(document, "mouseup", function (t) {
                d.panMode = !1;
                d.navigator.stockChart.isDrag = !1;
                if (d.stockChart.navigatorClicked) {
                    t = Math.min(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax);
                    var u = Math.max(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax);
                    e(d.stockChart._rangeEventParameter) &&
                        (d.stockChart._rangeEventParameter = {
                            stockChart: d.stockChart,
                            source: "navigator",
                            index: null,
                            minimum: t,
                            maximum: u
                        });
                    if (2 < Math.abs(d.startLeft - d.left) || 2 < Math.abs(d.startWidth - parseFloat(d.width))) {
                        d.navigator.dynamicUpdate || (d.stockChart._rangeEventParameter.type = "rangeChanging", d.stockChart.dispatchEvent("rangeChanging", d.stockChart._rangeEventParameter, d.stockChart));
                        for (var a = 0; a < d.stockChart.charts.length; a++) {
                            l = d.stockChart.charts[a];
                            l.toolTip && l.toolTip.enabled && l.toolTip.hide();
                            for (var f = 0; f < l.axisX.length; f++) l.axisX[f].setViewPortRange(t,
                                u);
                            for (f = 0; f < l.axisX2.length; f++) l.axisX2[f].setViewPortRange(t, u);
                            l.render()
                        }
                        d.stockChart.rangeSelector && (d.stockChart.rangeSelector.enabled && d.stockChart.rangeSelector.inputFields && d.stockChart.rangeSelector.inputFields.enabled) && d.stockChart.rangeSelector._updateInputFields(t, u);
                        d.navigator.dynamicUpdate || (d.stockChart._rangeEventParameter.type = "rangeChanged", d.stockChart.dispatchEvent("rangeChanged", d.stockChart._rangeEventParameter, d.stockChart))
                    }
                }
                d.stockChart.navigatorClicked = d.currentHandle =
                    d.startPosition = d.startWidth = d.startLeft = null
            }, this.navigator.stockChart.allDOMEventHandlers), z(document, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function (t) {
                d.panMode = !1;
                d.navigator.stockChart.isDrag = !1;
                if (d.stockChart.navigatorClicked) {
                    t = Math.min(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax);
                    var u = Math.max(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax);
                    e(d.stockChart._rangeEventParameter) && (d.stockChart._rangeEventParameter = {
                        stockChart: d.stockChart,
                        source: "navigator",
                        index: null,
                        minimum: t,
                        maximum: u
                    });
                    d.navigator.dynamicUpdate || (d.stockChart._rangeEventParameter.type = "rangeChanging", d.stockChart.dispatchEvent("rangeChanging", d.stockChart._rangeEventParameter, d.stockChart));
                    for (var a = 0; a < d.stockChart.charts.length; a++) {
                        l = d.stockChart.charts[a];
                        l.toolTip && l.toolTip.enabled && l.toolTip.hide();
                        for (var f = 0; f < l.axisX.length; f++) l.axisX[f].setViewPortRange(t, u);
                        for (f = 0; f < l.axisX2.length; f++) l.axisX2[f].setViewPortRange(t, u);
                        l.render()
                    }
                    d.stockChart.rangeSelector &&
                        (d.stockChart.rangeSelector.enabled && d.stockChart.rangeSelector.inputFields && d.stockChart.rangeSelector.inputFields.enabled) && d.stockChart.rangeSelector._updateInputFields(t, u);
                    d.navigator.dynamicUpdate || (d.stockChart._rangeEventParameter.type = "rangeChanged", d.stockChart.dispatchEvent("rangeChanged", d.stockChart._rangeEventParameter, d.stockChart))
                }
                d.stockChart.navigatorClicked = d.currentHandle = d.startPosition = d.startWidth = d.startLeft = null
            }, this.navigator.stockChart.allDOMEventHandlers))
        };
        L.prototype.initHandle =
            function (d, e) {
                var l = this;
                d && (z(d, "mousedown", function (d) {
                        l.stockChart.navigatorClicked = !0;
                        l.currentHandle = this;
                        l.startPosition = Aa(d);
                        d.target === l.currentHandle ? l.startPosition.x += l.currentHandle.offsetLeft + l.currentHandle.clientWidth / 2 + l.panel.offsetLeft : d.target === l.panel && (l.startPosition.x += l.panel.offsetLeft);
                        l.startWidth = l.panel.clientWidth;
                        l.startLeft = l.panel.offsetLeft;
                        d.preventDefault && d.preventDefault();
                        d.stopPropagation && d.stopPropagation()
                    }, this.navigator.stockChart.allDOMEventHandlers),
                    z(d, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function (d) {
                        l.stockChart._touchEventHandler(d)
                    }, this.navigator.stockChart.allDOMEventHandlers))
            };
        ga(P, Z);
        P.prototype._updateOptions = function () {
            this.updateOption("enabled");
            this.updateOption("verticalAlign");
            this.updateOption("horizontalAlign");
            this.updateOption("width");
            this.updateOption("height");
            this.updateOption("label");
            this.updateOption("selectedRangeButtonIndex")
        };
        P.prototype._initialize = function () {
            var d = 0;
            this._updateOptions();
            this.buttons = [];
            if (X && this.enabled) {
                if (this.options.buttons)
                    for (var l = 0; l < this.options.buttons.length; l++) this.buttons.push(new N(this.stockChart, l, this.options.buttons[l]));
                else {
                    for (l = 0; 6 > l; l++) this.buttons.push(new N(this.stockChart, l));
                    this.buttonLabels = "1m 3m 6m YTD 1y All".split(" ")
                }
                this._wrapElements = !1;
                var t = this.stockChart.layoutManager.getFreeSpace(),
                    u = t.x1,
                    l = t.y1;
                this.width = this.options.width ? this.width : t.width;
                e(this.buttonStyle.options.labelFontSize) && (this.buttonStyle.labelFontSize =
                    this.stockChart.getAutoFontSize(this.buttonStyle.labelFontSize));
                this.rangeButtonsWidth = 0;
                this.buttonStyle.maxWidth = this.buttonStyle.options.maxWidth ? this.buttonStyle.options.maxWidth : this.stockChart.width / this.buttons.length;
                if (this.buttons && 0 < this.buttons.length) {
                    var a = new ma(this.ctx, {
                        x: 0,
                        y: 0,
                        backgroundColor: this.stockChart.backgroundColor,
                        borderThickness: 0,
                        cornerRadius: 0,
                        maxWidth: 0.2 * this.stockChart.width,
                        maxHeight: 2 * this.buttonStyle.labelFontSize,
                        angle: 0,
                        padding: {
                            left: 5,
                            right: 5,
                            top: 2,
                            bottom: 2
                        },
                        text: e(this.stockChart.options.culture) || e(this.stockChart._cultureInfo.rangeSelector.rangeText) ? this.label : this.stockChart._cultureInfo.rangeSelector.rangeText,
                        horizontalAlign: "left",
                        fontSize: this.buttonStyle.labelFontSize,
                        fontFamily: this.buttonStyle.labelFontFamily,
                        fontWeight: this.buttonStyle.labelFontWeight,
                        fontColor: this.buttonStyle.labelFontColor,
                        fontStyle: this.buttonStyle.labelFontStyle,
                        textBaseline: "middle"
                    });
                    this._label.textBlock = a
                }
                for (l = 0; l < this.buttons.length; l++) {
                    var f = this.buttons[l];
                    f._index = l;
                    a = new ma(this.ctx, {
                        x: 0,
                        y: 0,
                        backgroundColor: this.buttonStyle.backgroundColor,
                        borderColor: this.buttonStyle.borderColor,
                        borderThickness: this.buttonStyle.borderThickness,
                        cornerRadius: 0,
                        maxWidth: this.buttonStyle.options.width ? this.buttonStyle.width : this.buttonStyle.maxWidth,
                        maxHeight: 2 * this.buttonStyle.labelFontSize,
                        angle: 0,
                        padding: this.buttonStyle.padding,
                        text: this.options.buttons && this.options.buttons.length ? e(f.label) ? "" : f.label : this.buttonLabels[l],
                        horizontalAlign: "center",
                        textAlign: "center",
                        fontSize: this.buttonStyle.labelFontSize,
                        fontFamily: this.buttonStyle.labelFontFamily,
                        fontWeight: this.buttonStyle.labelFontWeight,
                        fontColor: this.buttonStyle.labelFontColor,
                        fontStyle: this.buttonStyle.labelFontStyle,
                        textBaseline: "middle"
                    });
                    f.state = e(this.selectedRangeButtonIndex) || this.selectedRangeButtonIndex !== l ? "off" : "on";
                    f.textBlock = a;
                    f.bounds = {
                        x1: null,
                        x2: null,
                        y1: null,
                        y2: null,
                        width: null,
                        height: null
                    };
                    a.measureText();
                    this.rangeButtonsWidth += a.width + this.buttonStyle.spacing;
                    this.rangeButtonsHeight = a.height;
                    d = d < a.height ? a.height : d;
                    f = this.buttons[l];
                    f.id = ++this.stockChart._eventManager.lastObjectId;
                    this.stockChart._eventManager.objectMap[f.id] = {
                        id: f.id,
                        objectType: "rangeButton",
                        rangeButtonIndex: l
                    }
                }
                this.height < this.inputFieldsHeight + 2 * this.inputFields.style.borderThickness && (this.height = this.inputFieldsHeight + 2 * this.inputFields.style.borderThickness);
                this.height < d + 2 * this.buttonStyle.borderThickness + 5 && (this.height = d + 2 * this.buttonStyle.borderThickness + 5);
                this.rangeButtonsWidth + this._label.textBlock.measureText().width +
                    this.inputFieldsWidth >= this.stockChart.width && (this.height = this.options.height ? this.height : 2 * this.height, this._wrapElements = !0);
                "bottom" === this.verticalAlign ? (l = t.y2 - this.height, d = "bottom") : (l = t.y1, d = "top");
                "left" === this.horizontalAlign ? u = t.x1 + 2 : "center" === this.horizontalAlign ? u = t.x1 + t.width / 2 - this.width / 2 : "right" === this.horizontalAlign && (u = t.x2 - 2 - this.width);
                this.stockChart.layoutManager.registerSpace(d, {
                    width: this.width,
                    height: this.height
                });
                this.bounds = {
                    x1: u,
                    y1: l,
                    x2: u + this.width,
                    y2: l + this.height,
                    width: this.width,
                    height: this.height
                };
                for (l = 0; l < this.buttons.length; l++) this.buttons[l]._initialize(l)
            }
        };
        P.prototype.render = function () {
            var d;
            this.setButtonsLayout();
            da(this.ctx, this.bounds.x1, this.bounds.y1, this.bounds.x2, this.bounds.y2, this.stockChart.backgroundColor, 0, null, 0, 0, 0, 0, 1);
            this._label && this._label.textBlock && this._label.textBlock.render(!0);
            for (d = 0; d < this.buttons.length; d++) this.buttons[d].enabled || (this.buttons[d].textBlock.backgroundColor = this.buttons[d].backgroundColorDisabled, this.buttons[d].textBlock.borderColor =
                this.buttons[d].backgroundColorDisabled), this.buttons[d].render(!0);
            this.inputFields && this.inputFields.enabled && this.renderInputFields(!0)
        };
        P.prototype.setButtonsLayout = function () {
            var d, e, l = this.bounds.x1 + 5,
                t, a;
            this._label && (this._label.textBlock && 0 < this.buttons.length) && (this._label.textBlock.x = l, this._label.textBlock.y = a = this.bounds.y1 + this._label.textBlock.measureText().height / 2 + 2 * this.buttons[0].textBlock.borderThickness, this._label.bounds = {
                x1: l,
                y1: a - this._label.textBlock.fontSize / 2,
                x2: l + this._label.textBlock.measureText().width,
                y2: a + this._label.textBlock.measureText().height,
                width: this._label.textBlock.measureText().width,
                height: this._label.textBlock.measureText().height
            }, l += this._label.bounds.width);
            for (d = 0; d < this.buttons.length; d++) e = this.buttons[d], e.textBlock.width = e.textBlock.maxWidth = this.buttonStyle.width = this.buttonStyle.options.width ? this.buttonStyle.width : e.textBlock.width, t = l + e.textBlock.width, e.textBlock.x = e.bounds.x1 = 1 === e.textBlock.borderThickness % 2 ? (l << 0) + 0.5 : l, e.bounds.x2 = t, a = 1 === e.textBlock.borderThickness %
                2 ? this.bounds.y1 + e.textBlock.height / 2 + 2 * e.textBlock.borderThickness << 0.5 : this.bounds.y1 + e.textBlock.height / 2 + 2 * e.textBlock.borderThickness, e.textBlock.y = a, e.bounds.y1 = a - e.textBlock.height / 2, e.bounds.y2 = e.bounds.y1 + e.textBlock.height, e.bounds.width = t - l, e.bounds.height = e.bounds.y2 - e.bounds.y1, l = t + this.buttonStyle.spacing, e.textBlock.maxWidth = this.buttonStyle.maxWidth
        };
        P.prototype.resetRangeButtons = function () {
            for (var d = 0; d < this.buttons.length; d++) this.buttons[d].enabled && (this.buttons[d].state = "off",
                this.buttons[d].textBlock.backgroundColor = this.buttonStyle.backgroundColor, this.buttons[d].textBlock.fontColor = this.buttonStyle.labelFontColor, this.buttons[d].textBlock.fontWeight = this.buttonStyle.labelFontWeight, this.buttons[d].textBlock.render(!0))
        };
        P.prototype.renderInputFields = function () {
            this.inputFields._textBlocks[0].text = "dateTime" === this.inputFields.valueType ? Y(this.inputFields.startValue, this.inputFields.valueFormatString, this.stockChart._cultureInfo) : $(this.inputFields.startValue, this.inputFields.valueFormatString,
                this.stockChart._cultureInfo);
            this.inputFields._textBlocks[1].text = "dateTime" === this.inputFields.valueType ? Y(this.inputFields.endValue, this.inputFields.valueFormatString, this.stockChart._cultureInfo) : $(this.inputFields.endValue, this.inputFields.valueFormatString, this.stockChart._cultureInfo);
            this.inputFields._labels[0].text = e(this.stockChart._cultureInfo.rangeSelector.fromText) ? "From" : this.stockChart._cultureInfo.rangeSelector.fromText;
            this.inputFields._labels[1].text = e(this.stockChart._cultureInfo.rangeSelector.toText) ?
                "To" : this.stockChart._cultureInfo.rangeSelector.toText;
            var d = 0,
                l = !0;
            if (this.stockChart.title && this.stockChart.title.text && "top" === this.stockChart.title.verticalAlign || "bottom" === this.verticalAlign) l = !1;
            if (this.stockChart.subtitles)
                for (var t = 0; t < this.stockChart.subtitles.length; t++) this.stockChart.subtitles[t] && (this.stockChart.subtitles[t].text && "top" === this.stockChart.subtitles[t].verticalAlign) && (l = !1);
            for (t = this.inputFields._textBlocks.length - 1; 0 <= t; t--) {
                var u = this.inputFields._textBlocks[t],
                    a =
                    u.measureText();
                u._width = this.inputFields.style.options.width ? this.inputFields.style.width : Math.abs(a.width - u._width) <= ("dateTime" === this.inputFields.valueType ? 10 : 5) ? u._width : a.width + 10;
                d += u._width + this.inputFields.style.spacing;
                this.inputFields.elements[t].style.width = u._width - this.inputFields.style.spacing - 2 * this.inputFields.style.borderThickness - 5 + "px";
                u.x = u.bounds.x1 = 1 === u.borderThickness % 2 ? (this.bounds.x2 - d - (this.stockChart.exportEnabled && l ? 40 : 0) << 0) + 0.5 : this.bounds.x2 - d - (this.stockChart.exportEnabled &&
                    l ? 40 : 0);
                u.bounds.x2 = u.bounds.x1 + u._width;
                this.inputFields.elements[t].style.left = this.bounds.x2 - d - (this.stockChart.exportEnabled && l ? 40 : 0) + this.inputFields.style.borderThickness + "px";
                d += this.inputFields._labels[t].measureText().width;
                this.inputFields._labels[t].x = this.inputFields._labels[t].bounds.x1 = this.bounds.x2 - d - (this.stockChart.exportEnabled && l ? 40 : 0);
                this.inputFields._labels[t].bounds.x2 = this.inputFields._labels[t].bounds.x1 + this.inputFields._labels[t].measureText().width;
                u.width = u._width;
                u.y =
                    1 === u.borderThickness % 2 ? (this._wrapElements ? this.bounds.y1 + this.rangeButtonsHeight + 10 : this.bounds.y1) + a.height / 2 + 2 * u.borderThickness << 0.5 : (this._wrapElements ? this.bounds.y1 + this.rangeButtonsHeight + 10 : this.bounds.y1) + a.height / 2 + 2 * u.borderThickness;
                this.inputFields._labels[t].y = (this._wrapElements ? this.bounds.y1 + this.rangeButtonsHeight + 10 : this.bounds.y1) + a.height / 2 + 2 * u.borderThickness;
                u.bounds.y1 = this.inputFields._labels[t].bounds.y1 = u.y - a.height / 2 + 2 * u.borderThickness;
                u.bounds.y2 = this.inputFields._labels[t].bounds.y2 =
                    u.bounds.y1 + a.height;
                this.inputFields.elements[t].style.top = this.inputFields._labels[t].bounds.y1 + "px";
                u.render(!0);
                this.inputFields._labels[t].render(!0)
            }
        };
        P.prototype._updateInputFields = function (d, e) {
            this.inputFields.elements[0].focused || (this.inputFields.elements[0].value = "dateTime" === this.inputFields.valueType ? Y(d, "YYYY-MM-DD") : $(d, this.inputFields.valueFormatString));
            this.inputFields.elements[1].focused || (this.inputFields.elements[1].value = "dateTime" === this.inputFields.valueType ? Y(e, "YYYY-MM-DD") :
                $(e, this.inputFields.valueFormatString));
            for (var l = 0; l < this.inputFields.elements.length; l++) this.inputFields.elements[l].focused && this.inputFields.elements[l].focus();
            this.inputFields.startValue = d;
            this.inputFields.endValue = e;
            this.render()
        };
        ga(N, Z);
        N.prototype._updateOptions = function () {
            this.updateOption("style");
            this.updateOption("label");
            this.updateOption("range");
            this.updateOption("rangeType")
        };
        N.prototype._initialize = function (d) {
            this._updateOptions();
            var l = "1m 3m 6m YTD 1y All".split(" "),
                t = [1,
                    3, 6, null, 1, null
                ],
                u = "month month month ytd year all".split(" ");
            this.range = "undefined" !== typeof this.options.range ? this.range : e(t[d]) ? null : t[d];
            this.rangeType = "undefined" !== typeof this.options.rangeType ? this.rangeType : u[d];
            this.label = this.textBlock.text = e(this.options.label) ? l[d] : this.label
        };
        N.prototype.render = function () {
            this.textBlock.render(!0)
        };
        ga(S, Z);
        S.prototype._updateOptions = function () {
            this.updateOption("enabled");
            this.updateOption("startValue");
            this.updateOption("endValue");
            this.updateOption("valueType");
            this.updateOption("valueFormatString")
        };
        S.prototype._initialize = function () {
            this._updateOptions();
            e(this.style.options.fontSize) && (this.style.fontSize = this.stockChart.getAutoFontSize(this.style.fontSize));
            if (this.enabled) {
                for (var d = 0; d < this.elements.length; d++) this.elements[d].style.position = "absolute", this.elements[d].style.display = this.elements[d].focused ? "inline" : "none", this.elements[d].style.backgroundColor = this.style.backgroundColor, this.elements[d].style.border = "none", this.elements[d].style.outline =
                    "none", this.elements[d].style.outlineOffset = 0, this.elements[d].style.textAlign = "center", this.elements[d].style.color = this.style.fontColor, this.elements[d].style.fontSize = this.elements[d].style.height = this.style.fontSize + "px", this.elements[d].style.fontStyle = this.style.fontStyle, this.elements[d].style.fontFamily = this.style.fontFamily, this.elements[d].style.fontWeight = this.style.fontWeight, this.elements[d].style.lineHeight = 1, isNaN(this.style.padding) ? (this.elements[d].style.paddingTop = this.style.padding.top +
                        "px", this.elements[d].style.paddingRight = this.style.padding.right + "px", this.elements[d].style.paddingBottom = this.style.padding.bottom + "px", this.elements[d].style.paddingLeft = this.style.padding.left + "px") : this.elements[d].style.padding = this.style.padding + "px", this.elements[d].style.mozAppearance = this.elements[d].style.webkitAppearance = this.elements[d].style.appearance = "none", this.elements[d].style.webkitBorderRadius = 0, this.elements[d].style.mozBorderRadius = 0, this.elements[d].style.borderRadius = 0, this.elements[d].style.boxSizing =
                    "content-box";
                this.parent = this.rangeSelector = this.stockChart.rangeSelector
            }
        };
        ga(T, Z);
        T.prototype._updateOptions = function () {
            this.updateOption("backgroundColor");
            this.updateOption("backgroundColorOnHover");
            this.updateOption("backgroundColorOnSelect");
            this.updateOption("borderColor");
            this.updateOption("borderThickness");
            this.updateOption("labelFontColor");
            this.updateOption("labelFontColorOnHover");
            this.updateOption("labelFontSize");
            this.updateOption("labelFontStyle");
            this.updateOption("labelFontFamily");
            this.updateOption("labelFontWeight");
            this.updateOption("width");
            this.updateOption("maxWidth");
            this.updateOption("padding");
            this.updateOption("spacing");
            this.updateOption("cursor")
        };
        ga(U, Z);
        U.prototype._updateOptions = function () {
            this.updateOption("backgroundColor");
            this.updateOption("borderColor");
            this.updateOption("borderThickness");
            this.updateOption("borderColorOnFocus");
            this.updateOption("fontColor");
            this.updateOption("fontSize");
            this.updateOption("fontStyle");
            this.updateOption("fontFamily");
            this.updateOption("fontWeight");
            this.updateOption("width");
            this.updateOption("maxWidth");
            this.updateOption("padding");
            this.updateOption("spacing");
            this.updateOption("cursor")
        };
        return F
    }();
    X.version = "v1.2.13 GA";
    window.StockJS && (X && (!window.StockJS.StockChart && window.StockJS.Chart) && (window.StockJS.StockChart = X), X && !window.StockJS.Chart && (window.StockJS.Chart = Ja, window.StockJS.StockChart = X))
})();


document.createElement("canvas").getContext || function () {
    function V() {
        return this.context_ || (this.context_ = new C(this))
    }

    function W(a, b, c) {
        var g = M.call(arguments, 2);
        return function () {
            return a.apply(b, g.concat(M.call(arguments)))
        }
    }

    function N(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
    }

    function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")
    }

    function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
            case "width":
                b.getContext().clearRect();
                b.style.width = b.attributes.width.nodeValue + "px";
                b.firstChild.style.width = b.clientWidth + "px";
                break;
            case "height":
                b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight +
                    "px"
        }
    }

    function Y(a) {
        a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px")
    }

    function D() {
        return [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]
    }

    function t(a, b) {
        for (var c = D(), g = 0; 3 > g; g++)
            for (var e = 0; 3 > e; e++) {
                for (var f = 0, d = 0; 3 > d; d++) f += a[g][d] * b[d][e];
                c[g][e] = f
            }
        return c
    }

    function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX =
            a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_
    }

    function Q(a) {
        var b = a.indexOf("(", 3),
            c = a.indexOf(")", b + 1),
            b = a.substring(b + 1, c).split(",");
        if (4 != b.length || "a" != a.charAt(3)) b[3] = 1;
        return b
    }

    function E(a, b, c) {
        return Math.min(c, Math.max(b, a))
    }

    function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c :
            1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
    }

    function G(a) {
        if (a in H) return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0)) b = a;
        else if (/^rgb/.test(a)) {
            c = Q(a);
            b = "#";
            for (var g, e = 0; 3 > e; e++) g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
            c = +c[3]
        } else if (/^hsl/.test(a)) {
            e = c = Q(a);
            b = parseFloat(e[0]) / 360 % 360;
            0 > b && b++;
            g = E(parseFloat(e[1]) / 100, 0, 1);
            e = E(parseFloat(e[2]) / 100, 0, 1);
            if (0 == g) g = e = b = e;
            else {
                var f = 0.5 > e ? e * (1 + g) : e + g - e * g,
                    d = 2 * e - f;
                g = F(d, f, b + 1 / 3);
                e = F(d, f, b);
                b = F(d, f, b - 1 / 3)
            }
            b = "#" +
                v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
            c = c[3]
        } else b = Z[a] || a;
        return H[a] = {
            color: b,
            alpha: c
        }
    }

    function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute",
            c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(!1);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
    }

    function R(a, b, c, g) {
        a.currentPath_.push({
            type: "bezierCurveTo",
            cp1x: b.x,
            cp1y: b.y,
            cp2x: c.x,
            cp2y: c.y,
            x: g.x,
            y: g.y
        });
        a.currentX_ = g.x;
        a.currentY_ = g.y
    }

    function S(a, b) {
        var c = G(a.strokeStyle),
            g = c.color,
            c = c.alpha * a.globalAlpha,
            e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push("<g_vml_:stroke",
            ' opacity="', c, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', $[a.lineCap] || "square", '"', ' weight="', e, 'px"', ' color="', g, '" />')
    }

    function T(a, b, c, g) {
        var e = a.fillStyle,
            f = a.arcScaleX_,
            d = a.arcScaleY_,
            k = g.x - c.x,
            n = g.y - c.y;
        if (e instanceof w) {
            var h = 0,
                l = g = 0,
                u = 0,
                m = 1;
            if ("gradient" == e.type_) {
                h = e.x1_ / f;
                c = e.y1_ / d;
                var p = s(a, e.x0_ / f, e.y0_ / d),
                    h = s(a, h, c),
                    h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
                0 > h && (h += 360);
                1E-6 > h && (h = 0)
            } else p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k, l = (p.y - c.y) / n, k /= f * q,
                n /= d * q, m = x.max(k, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
            f = e.colors_;
            f.sort(function (a, b) {
                return a.offset - b.offset
            });
            d = f.length;
            p = f[0].color;
            c = f[d - 1].color;
            k = f[0].alpha * a.globalAlpha;
            a = f[d - 1].alpha * a.globalAlpha;
            for (var n = [], r = 0; r < d; r++) {
                var t = f[r];
                n.push(t.offset * m + u + " " + t.color)
            }
            b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />')
        } else e instanceof
        I ? k && n && b.push("<g_vml_:fill", ' position="', -c.x / k * f * f, ",", -c.y / n * d * d, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'))
    }

    function s(a, b, c) {
        a = a.m_;
        return {
            x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r,
            y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r
        }
    }

    function z(a, b, c) {
        isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] *
            b[1][0]))))
    }

    function w(a) {
        this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = []
    }

    function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName) throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
        switch (b) {
            case "repeat":
            case null:
            case "":
                this.repetition_ = "repeat";
                break;
            case "repeat-x":
            case "repeat-y":
            case "no-repeat":
                this.repetition_ = b;
                break;
            default:
                throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height
    }

    function A(a) {
        this.code = this[a];
        this.message = a + ": DOM Exception " + this.code
    }
    var x = Math,
        k = x.round,
        J = x.sin,
        K = x.cos,
        ba = x.abs,
        aa = x.sqrt,
        q = 10,
        r = q / 2;
    navigator.userAgent.match(/MSIE ([\d.]+)?/);
    var M = Array.prototype.slice;
    O(document);
    var U = {
        init: function (a) {
            a = a || document;
            a.createElement("canvas");
            a.attachEvent("onreadystatechange", W(this.init_, this, a))
        },
        init_: function (a) {
            a = a.getElementsByTagName("canvas");
            for (var b = 0; b < a.length; b++) this.initElement(a[b])
        },
        initElement: function (a) {
            if (!a.getContext) {
                a.getContext =
                    V;
                O(a.ownerDocument);
                a.innerHTML = "";
                a.attachEvent("onpropertychange", X);
                a.attachEvent("onresize", Y);
                var b = a.attributes;
                b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
                b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight
            }
            return a
        }
    };
    U.init();
    for (var v = [], d = 0; 16 > d; d++)
        for (var B = 0; 16 > B; B++) v[16 * d + B] = d.toString(16) + B.toString(16);
    var Z = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            grey: "#808080",
            greenyellow: "#ADFF2F",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            oldlace: "#FDF5E6",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            whitesmoke: "#F5F5F5",
            yellowgreen: "#9ACD32"
        },
        H = {},
        L = {},
        $ = {
            butt: "flat",
            round: "round"
        },
        d = C.prototype;
    d.clearRect = function () {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null);
        this.element_.innerHTML = ""
    };
    d.beginPath = function () {
        this.currentPath_ = []
    };
    d.moveTo = function (a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "moveTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.lineTo = function (a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "lineTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.bezierCurveTo =
        function (a, b, c, g, e, f) {
            e = s(this, e, f);
            a = s(this, a, b);
            c = s(this, c, g);
            R(this, a, c, e)
        };
    d.quadraticCurveTo = function (a, b, c, g) {
        a = s(this, a, b);
        c = s(this, c, g);
        g = {
            x: this.currentX_ + 2 / 3 * (a.x - this.currentX_),
            y: this.currentY_ + 2 / 3 * (a.y - this.currentY_)
        };
        R(this, g, {
            x: g.x + (c.x - this.currentX_) / 3,
            y: g.y + (c.y - this.currentY_) / 3
        }, c)
    };
    d.arc = function (a, b, c, g, e, f) {
        c *= q;
        var d = f ? "at" : "wa",
            k = a + K(g) * c - r,
            n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k != g || f || (k += 0.125);
        a = s(this, a, b);
        k = s(this, k, n);
        g = s(this, g, e);
        this.currentPath_.push({
            type: d,
            x: a.x,
            y: a.y,
            radius: c,
            xStart: k.x,
            yStart: k.y,
            xEnd: g.x,
            yEnd: g.y
        })
    };
    d.rect = function (a, b, c, g) {
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath()
    };
    d.strokeRect = function (a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e
    };
    d.fillRect = function (a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a +
            c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e
    };
    d.createLinearGradient = function (a, b, c, g) {
        var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g;
        return e
    };
    d.createRadialGradient = function (a, b, c, g, e, f) {
        var d = new w("gradientradial");
        d.x0_ = a;
        d.y0_ = b;
        d.r0_ = c;
        d.x1_ = g;
        d.y1_ = e;
        d.r1_ = f;
        return d
    };
    d.drawImage = function (a, b) {
        var c, g, e, d, r, y, n, h;
        e = a.runtimeStyle.width;
        d = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width,
            u = a.height;
        a.runtimeStyle.width =
            e;
        a.runtimeStyle.height = d;
        if (3 == arguments.length) c = arguments[1], g = arguments[2], r = y = 0, n = e = l, h = d = u;
        else if (5 == arguments.length) c = arguments[1], g = arguments[2], e = arguments[3], d = arguments[4], r = y = 0, n = l, h = u;
        else if (9 == arguments.length) r = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d = arguments[8];
        else throw Error("Invalid number of arguments");
        var m = s(this, c, g),
            p = [];
        p.push(" <g_vml_:group", ' coordsize="', 10 * q, ",", 10 * q, '"', ' coordorigin="0,0"', ' style="width:',
            10, "px;height:", 10, "px;position:absolute;");
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
            var t = [];
            t.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
            var v = s(this, c + e, g),
                w = s(this, c, g + d);
            c = s(this, c + e, g + d);
            m.x = x.max(m.x, v.x, w.x, c.x);
            m.y = x.max(m.y, v.y, w.y, c.y);
            p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t.join(""), ", sizingmethod='clip');")
        } else p.push("top:",
            k(m.y / q), "px;left:", k(m.x / q), "px;");
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d, 'px"', ' cropleft="', r / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""))
    };
    d.stroke = function (a) {
        var b = [];
        b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * q, ",", 10 * q, '"',
            ' stroked="', !a, '"', ' path="');
        for (var c = {
                x: null,
                y: null
            }, d = {
                x: null,
                y: null
            }, e = 0; e < this.currentPath_.length; e++) {
            var f = this.currentPath_[e];
            switch (f.type) {
                case "moveTo":
                    b.push(" m ", k(f.x), ",", k(f.y));
                    break;
                case "lineTo":
                    b.push(" l ", k(f.x), ",", k(f.y));
                    break;
                case "close":
                    b.push(" x ");
                    f = null;
                    break;
                case "bezierCurveTo":
                    b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
                    break;
                case "at":
                case "wa":
                    b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ *
                        f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd))
            }
            if (f) {
                if (null == c.x || f.x < c.x) c.x = f.x;
                if (null == d.x || f.x > d.x) d.x = f.x;
                if (null == c.y || f.y < c.y) c.y = f.y;
                if (null == d.y || f.y > d.y) d.y = f.y
            }
        }
        b.push(' ">');
        a ? T(this, b, c, d) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""))
    };
    d.fill = function () {
        this.stroke(!0)
    };
    d.closePath = function () {
        this.currentPath_.push({
            type: "close"
        })
    };
    d.save = function () {
        var a = {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_)
    };
    d.restore = function () {
        this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop())
    };
    d.translate = function (a, b) {
        z(this, t([
            [1, 0, 0],
            [0, 1, 0],
            [a, b, 1]
        ], this.m_), !1)
    };
    d.rotate = function (a) {
        var b = K(a);
        a = J(a);
        z(this, t([
            [b, a, 0],
            [-a, b, 0],
            [0, 0, 1]
        ], this.m_), !1)
    };
    d.scale = function (a, b) {
        this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([
            [a, 0, 0],
            [0, b, 0],
            [0, 0, 1]
        ], this.m_), !0)
    };
    d.transform = function (a, b, c, d, e, f) {
        z(this, t([
            [a,
                b, 0
            ],
            [c, d, 0],
            [e, f, 1]
        ], this.m_), !0)
    };
    d.setTransform = function (a, b, c, d, e, f) {
        z(this, [
            [a, b, 0],
            [c, d, 0],
            [e, f, 1]
        ], !0)
    };
    d.drawText_ = function (a, b, c, d, e) {
        var f = this.m_;
        d = 0;
        var r = 1E3,
            t = 0,
            n = [],
            h;
        h = this.font;
        if (L[h]) h = L[h];
        else {
            var l = document.createElement("div").style;
            try {
                l.font = h
            } catch (u) {}
            h = L[h] = {
                style: l.fontStyle || "normal",
                variant: l.fontVariant || "normal",
                weight: l.fontWeight || "normal",
                size: l.fontSize || 10,
                family: l.fontFamily || "sans-serif"
            }
        }
        var l = h,
            m = this.element_;
        h = {};
        for (var p in l) h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
            case "left":
            case "center":
            case "right":
                break;
            case "end":
                l = "ltr" == m.direction ? "right" : "left";
                break;
            case "start":
                l = "rtl" == m.direction ? "right" :
                    "left";
                break;
            default:
                l = "left"
        }
        switch (this.textBaseline) {
            case "hanging":
            case "top":
                t = h.size / 1.75;
                break;
            case "middle":
                break;
            default:
            case null:
            case "alphabetic":
            case "ideographic":
            case "bottom":
                t = -h.size / 2.25
        }
        switch (l) {
            case "right":
                d = 1E3;
                r = 0.05;
                break;
            case "center":
                d = r = 500
        }
        b = s(this, b + 0, c + t);
        n.push('<g_vml_:line from="', -d, ' 0" to="', r, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(this, n, {
            x: -d,
            y: 0
        }, {
            x: r,
            y: h.size
        });
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""))
    };
    d.fillText = function (a, b, c, d) {
        this.drawText_(a, b, c, d, !1)
    };
    d.strokeText = function (a,
        b, c, d) {
        this.drawText_(a, b, c, d, !0)
    };
    d.measureText = function (a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a));
        return {
            width: this.textMeasureEl_.offsetWidth
        }
    };
    d.clip = function () {};
    d.arcTo = function () {};
    d.createPattern = function (a, b) {
        return new I(a, b)
    };
    w.prototype.addColorStop = function (a, b) {
        b = G(b);
        this.colors_.push({
            offset: a,
            color: b.color,
            alpha: b.alpha
        })
    };
    d = A.prototype = Error();
    d.INDEX_SIZE_ERR = 1;
    d.DOMSTRING_SIZE_ERR = 2;
    d.HIERARCHY_REQUEST_ERR = 3;
    d.WRONG_DOCUMENT_ERR = 4;
    d.INVALID_CHARACTER_ERR = 5;
    d.NO_DATA_ALLOWED_ERR = 6;
    d.NO_MODIFICATION_ALLOWED_ERR = 7;
    d.NOT_FOUND_ERR = 8;
    d.NOT_SUPPORTED_ERR = 9;
    d.INUSE_ATTRIBUTE_ERR = 10;
    d.INVALID_STATE_ERR = 11;
    d.SYNTAX_ERR = 12;
    d.INVALID_MODIFICATION_ERR =
        13;
    d.NAMESPACE_ERR = 14;
    d.INVALID_ACCESS_ERR = 15;
    d.VALIDATION_ERR = 16;
    d.TYPE_MISMATCH_ERR = 17;
    G_vmlCanvasManager = U;
    CanvasRenderingContext2D = C;
    CanvasGradient = w;
    CanvasPattern = I;
    DOMException = A
}();
/*eslint-enable*/
/*jshint ignore:end*/
