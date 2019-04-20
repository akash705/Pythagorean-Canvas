webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! randomcolor */ "./node_modules/randomcolor/randomColor.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_13__);











var _jsxFileName = "D:\\program\\patua\\github task\\pythaTheoram\\pages\\index.js";




var index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(index, _Component);

  function index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "ctx", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "canvas", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "state", {
      error: false,
      checking: true,
      color: randomcolor__WEBPACK_IMPORTED_MODULE_13__(),
      //perpendicular color
      color2: randomcolor__WEBPACK_IMPORTED_MODULE_13__(),
      //base color,
      isFirst: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "getWidth", function (_ref) {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, 4),
          x1 = _ref2[0],
          y1 = _ref2[1],
          x2 = _ref2[2],
          y2 = _ref2[3];

      var x = Math.pow(x2 - x1, 2);
      var y = Math.pow(y2 - y1, 2);
      return Math.abs(Math.sqrt(x + y));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "randomColor", function () {
      return randomcolor__WEBPACK_IMPORTED_MODULE_13__();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "validation", function (_ref3) {
      var a = _ref3.a,
          b = _ref3.b,
          c = _ref3.c;

      if (!Number(a)) {
        return {
          status: false,
          error: "value 'A' is Invalid"
        };
      } else if (!Number(b)) {
        return {
          status: false,
          error: "value 'B' is Invalid"
        };
      } else if (!Number(c)) {
        return {
          status: false,
          error: "value 'C' is Invalid"
        };
      } // perpendicular     


      var sqa = Math.pow(a, 2); // base

      var sqb = Math.pow(b, 2); // h    

      var sqc = Math.pow(c, 2); //    a should be small

      if (sqc === sqa + sqb) {
        if (a > b) {
          var _ref4 = [b, a];
          a = _ref4[0];
          b = _ref4[1];
          console.log('swapping vlaues');
        }

        return {
          status: true,
          a: a,
          b: b,
          c: c
        };
      }

      return {
        status: false,
        error: "Values Don't pass Pythagoras Theorem"
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "basicChecking", function () {
      if (!_this.props.query || !_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(_this.props.query).length) {
        _this.setState(function (state) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
            checking: false,
            error: "Invalid Params"
          });
        });
      }

      var _this$props$query = _this.props.query,
          a = _this$props$query.a,
          b = _this$props$query.b,
          c = _this$props$query.c;
      var status, error;

      var _this$validation = _this.validation({
        a: a,
        b: b,
        c: c
      });

      status = _this$validation.status;
      var _this$validation$a = _this$validation.a;
      a = _this$validation$a === void 0 ? a : _this$validation$a;
      var _this$validation$b = _this$validation.b;
      b = _this$validation$b === void 0 ? b : _this$validation$b;
      var _this$validation$c = _this$validation.c;
      c = _this$validation$c === void 0 ? c : _this$validation$c;
      error = _this$validation.error;

      if (status) {
        _this.setState(function (state) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
            checking: false
          });
        });

        _this.setupCanvas({
          a: a,
          b: b,
          c: c
        });
      } else {
        _this.setState(function (state) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
            checking: false,
            error: error
          });
        });
      }

      if (!_this.props.query) {
        alert('Exception Handled');
      }

      if (!_this.state.checking && !_this.state.error) {
        _this.setupCanvas();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "drawingText", function (_ref5) {
      var _ref5$point = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref5.point, 2),
          x = _ref5$point[0],
          y = _ref5$point[1],
          text = _ref5.text,
          ctx = _ref5.ctx,
          type = _ref5.type,
          scaleFactor = _ref5.scaleFactor,
          rotate = _ref5.rotate;

      ctx.resetTransform();
      ctx.font = "30px Arial";

      if (!type) {
        return 0;
      }

      if (type == "p") {
        var length = text * scaleFactor;
        var point = [x, y + length / 2];
        ctx.fillStyle = "black";
        ctx.fillText.apply(ctx, [text].concat(point));
        ctx.fillStyle = _this.state.color;
      } else if (type == "b") {
        var _length = text * scaleFactor;

        var _point = [x - _length / 2, y];
        ctx.fillStyle = "black";
        ctx.fillText.apply(ctx, [text].concat(_point));
        ctx.fillStyle = _this.state.color2;
      } else if (type == "h") {
        var _length2 = text * scaleFactor;

        var _point2 = [];

        if (text < 10) {
          _point2 = [x + _length2 / 2, y - _length2 / 2 + 30];
        } else {
          _point2 = [x + _length2 / 4 - 90, y - _length2 / 4];
        }

        ctx.fillStyle = "black";
        ctx.fillText.apply(ctx, [text].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_point2)));
        ctx.fillStyle = _this.state.color2;
        ctx.translate(x, y);
        ctx.rotate(-(rotate + 90) * Math.PI / 180);
        ctx.translate(-x, -y);
      }

      ctx.stroke();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "setupCanvas", function (_ref6) {
      var a = _ref6.a,
          b = _ref6.b,
          c = _ref6.c;
      var canvas = _this.canvas = _this.refs.canvasCtx; // canvas.width=window.innerWidth-20;
      // canvas.height=window.innerHeight*2;

      var ctx = _this.ctx = _this.canvas.getContext("2d");

      var _this$drawTriangle = _this.drawTriangle({
        canvas: _this.canvas,
        ctx: _this.ctx,
        a: a,
        b: b,
        c: c
      }),
          points = _this$drawTriangle.points,
          scaleFactor = _this$drawTriangle.scaleFactor; // console.log(points);
      //    for perpendicular


      {
        var width1 = _this.getWidth([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(points[0]), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(points[1])));

        _this.drawRectangle({
          ctx: ctx,
          points: points[0],
          width: width1,
          height: width1,
          value: a,
          type: 'p',
          mainColor: _this.state.color
        });

        _this.drawingText({
          point: points[0],
          text: a,
          ctx: ctx,
          type: 'p',
          scaleFactor: scaleFactor
        });
      } // for base

      {
        var width2 = _this.getWidth([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(points[1]), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(points[2])));

        _this.drawRectangle({
          ctx: ctx,
          points: points[2],
          width: width2,
          height: width2,
          value: b,
          type: 'b',
          mainColor: _this.state.color2
        });

        _this.drawingText({
          point: points[1],
          text: b,
          ctx: ctx,
          type: 'b',
          scaleFactor: scaleFactor
        });
      } // for hypotenuse 

      {
        var angle = Math.acos(b / c) * 180 / Math.PI;

        var width3 = _this.getWidth([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(points[0]), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(points[2])));

        _this.drawRectangle({
          ctx: ctx,
          points: points[2],
          width: width3,
          height: width3,
          rotate: angle,
          value: c,
          type: 'h'
        });

        _this.drawingText({
          point: points[2],
          text: c,
          ctx: ctx,
          type: 'h',
          scaleFactor: scaleFactor,
          rotate: angle
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "drawRectangle", function (_ref7) {
      var ctx = _ref7.ctx,
          _ref7$points = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref7.points, 2),
          x = _ref7$points[0],
          y = _ref7$points[1],
          width = _ref7.width,
          height = _ref7.height,
          rotate = _ref7.rotate,
          scale = _ref7.scale,
          value = _ref7.value,
          _ref7$mainColor = _ref7.mainColor,
          mainColor = _ref7$mainColor === void 0 ? randomcolor__WEBPACK_IMPORTED_MODULE_13__() : _ref7$mainColor,
          type = _ref7.type;

      ctx.moveTo(x, y);
      ctx.lineWidth = 2;
      ctx.moveTo(0, 0);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(-(rotate + 90) * Math.PI / 180);

      if (type != "h") {
        ctx.fillStyle = mainColor;
      }

      ctx.fillRect(0, 0, width, height);
      ctx.translate(-x, -y);
      ctx.stroke();

      _this.drawingInnerLines({
        x: x,
        y: y,
        width: width,
        scale: scale,
        ctx: ctx,
        value: value,
        type: type
      });

      ctx.restore();
      ctx.stroke();
      window.ctx = ctx;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "paintingHRect", function (_ref8) {
      var verticalLines = _ref8.verticalLines,
          horizontalLines = _ref8.horizontalLines,
          distance = _ref8.distance,
          width = _ref8.width,
          scale = _ref8.scale,
          ctx = _ref8.ctx;
      // console.log(verticalLines,horizontalLines);
      ctx.fillStyle = _this.state.color;

      for (var i = horizontalLines.length - 1; i >= -1; i--) {
        var points = horizontalLines[i];

        if (points) {
          var x = points[0] - distance; // console.log('points',x,points[1]);

          ctx.fillRect(x, points[1], distance, distance);
          ctx.strokeStyle = "black";
          ctx.stroke();
        } else {
          points = horizontalLines[0];

          var _x = points[0] - distance;

          console.log('last point', _x, points[1]);
          ctx.fillRect(_x, points[1] - distance, distance, distance);
        }
      }

      for (var _i = verticalLines.length - 1; _i >= -1; _i--) {
        var _points = verticalLines[_i];

        if (_points) {
          var y = _points[1] + width - distance;
          ctx.fillRect(_points[0] - width, y, distance, distance);
          ctx.strokeStyle = "white";
          ctx.stroke(); // console.log('points',points[0]-width,y);
        } else {
          _points = verticalLines[verticalLines.length - 1];

          var _y = _points[1] + (width - distance);

          var _x2 = _points[0] - (width + distance * verticalLines.length);

          ctx.fillRect(_x2, _y, distance, distance);
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "drawTriangle", function (_ref9) {
      var canvas = _ref9.canvas,
          ctx = _ref9.ctx,
          a = _ref9.a,
          b = _ref9.b,
          c = _ref9.c;
      ctx.beginPath();
      var scaleFactor = c < 30 ? 30 : 15;
      var initialPoint = [window.innerWidth / 2, window.innerHeight / 2];
      var points = [[].concat(initialPoint)];
      ctx.moveTo.apply(ctx, initialPoint);
      var x = initialPoint[0];
      var y = initialPoint[1] + a * scaleFactor;
      points.push([x, y]);
      ctx.lineTo(x, y);
      x = x - b * scaleFactor;
      points.push([x, y]);
      ctx.lineTo(x, y);
      ctx.fillStyle = "yellow";
      ctx.fill();
      ctx.closePath();
      ctx.strokeStyle = "#333";
      ctx.stroke();
      return {
        points: points,
        scaleFactor: scaleFactor
      };
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(index, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {// console.log(Objet.key)
    }
  }, {
    key: "drawingInnerLines",
    value: function drawingInnerLines(_ref10) {
      var _ref10$x = _ref10.x,
          x = _ref10$x === void 0 ? 0 : _ref10$x,
          _ref10$y = _ref10.y,
          y = _ref10$y === void 0 ? 0 : _ref10$y,
          width = _ref10.width,
          scale = _ref10.scale,
          ctx = _ref10.ctx,
          value = _ref10.value,
          type = _ref10.type;
      // console.log(data);
      var horizontalLines = [];
      var verticalLines = [];
      var NumberofBoxes = value;
      var distance = width / value; // [x,y]=[0,0];

      for (var i = 1; i < NumberofBoxes; i++) {
        // horizzontal line
        var x1 = x;
        var y1 = y + distance * i;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x1 + width, y1); // ctx.strokeStyle="black";
        // ctx.lineWidth=1;

        ctx.stroke();
        horizontalLines.push([x1 + width, y1]);
        var x2 = x + distance * i;
        var y2 = y;
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2, y2 + width); // ctx.strokeStyle="black";
        // ctx.lineWidth=1;

        ctx.stroke();
        verticalLines.push([x2 + width, y2]);
      } // console.log('horizontal lines',horizontalLines);


      if (type == "h") {
        this.paintingHRect({
          verticalLines: verticalLines,
          horizontalLines: horizontalLines,
          scale: scale,
          width: width,
          distance: distance,
          ctx: ctx
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.isFirst) {
        this.basicChecking();
        this.state.setState(function (data) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
            isFirst: true
          });
        });
      }

      if (this.state.checking || this.state.error) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 338
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "jsx-4195160578" + " " + "msg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 339
          },
          __self: this
        }, this.state.error || "Wait loading..."), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "jsx-4195160578" + " " + "instruction",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 342
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          className: "jsx-4195160578",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 343
          },
          __self: this
        }, " Query Params : "), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          className: "jsx-4195160578",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 344
          },
          __self: this
        }, " 'a' , 'b' can be interchanged for Base And Perpendicular"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          className: "jsx-4195160578",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345
          },
          __self: this
        }, " 'c' Must be hypotenuse ")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a, {
          id: "4195160578",
          __self: this
        }, ".msg.jsx-4195160578{font-weight:bold;width:100%;font-size:2rem;text-align:center;}.instruction.jsx-4195160578 p.jsx-4195160578{font-weight:bold;font-color:#424242;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxwcm9ncmFtXFxwYXR1YVxcZ2l0aHViIHRhc2tcXHB5dGhhVGhlb3JhbVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBWMkMsQUFHeUQsQUFNQSxpQkFMTixBQU1RLFdBTEosUUFNbEIsT0FMcUIsa0JBQ3JCIiwiZmlsZSI6IkQ6XFxwcm9ncmFtXFxwYXR1YVxcZ2l0aHViIHRhc2tcXHB5dGhhVGhlb3JhbVxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwge0NvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgcmFuZG9tQ29sb3IgZnJvbSAncmFuZG9tY29sb3InO1xyXG5cclxuXHJcbmNsYXNzIGluZGV4IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICBjdHg9bnVsbDtcclxuICAgY2FudmFzPW51bGw7XHJcbiAgIHN0YXRlPXtcclxuICAgICAgICBlcnJvcjpmYWxzZSxcclxuICAgICAgICBjaGVja2luZzp0cnVlLFxyXG4gICAgICAgIGNvbG9yOnJhbmRvbUNvbG9yKCksLy9wZXJwZW5kaWN1bGFyIGNvbG9yXHJcbiAgICAgICAgY29sb3IyOnJhbmRvbUNvbG9yKCksLy9iYXNlIGNvbG9yLFxyXG4gICAgICAgIGlzRmlyc3Q6ZmFsc2VcclxuICAgIH1cclxuICAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9KHtxdWVyeSxwYXJhbXN9KT0+e1xyXG4gICAgcmV0dXJuIHtxdWVyeX07XHJcbiAgIH1cclxuXHJcbiAgIGdldFdpZHRoPShbeDEseTEseDIseTJdKT0+e1xyXG4gICAgICAgIHZhciB4PU1hdGgucG93KCh4Mi14MSksMik7XHJcbiAgICAgICAgdmFyIHkgPSBNYXRoLnBvdygoeTIteTEpLDIpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFicyhNYXRoLnNxcnQoeCt5KSk7XHJcbiAgIH1cclxuICAgcmFuZG9tQ29sb3I9KCk9PntcclxuICAgICAgIHJldHVybiByYW5kb21Db2xvcigpO1xyXG4gICB9XHJcbiAgIHZhbGlkYXRpb249KHthLGIsY30pPT57XHJcbiAgICAgICBpZighTnVtYmVyKGEpKXtcclxuICAgICAgICByZXR1cm4ge3N0YXR1czpmYWxzZSxlcnJvcjpcInZhbHVlICdBJyBpcyBJbnZhbGlkXCJ9O1xyXG4gICAgICAgfVxyXG4gICAgICAgZWxzZSBpZighTnVtYmVyKGIpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtzdGF0dXM6ZmFsc2UsZXJyb3I6XCJ2YWx1ZSAnQicgaXMgSW52YWxpZFwifVxyXG4gICAgICAgfVxyXG4gICAgICAgZWxzZSBpZighTnVtYmVyKGMpKXtcclxuICAgICAgICAgICByZXR1cm4ge3N0YXR1czpmYWxzZSxlcnJvcjpcInZhbHVlICdDJyBpcyBJbnZhbGlkXCJ9O1xyXG4gICAgICAgfVxyXG4gICAgICAgLy8gcGVycGVuZGljdWxhciAgICAgXHJcbiAgICAgICBsZXQgc3FhPU1hdGgucG93KGEsMik7XHJcbiAgICAgICAvLyBiYXNlXHJcbiAgICAgICBsZXQgc3FiPU1hdGgucG93KGIsMik7XHJcbiAgICAgICAvLyBoICAgIFxyXG4gICAgICAgbGV0IHNxYz1NYXRoLnBvdyhjLDIpO1xyXG4gICAgICAgXHJcbiAgICAvLyAgICBhIHNob3VsZCBiZSBzbWFsbFxyXG5cclxuICAgICAgIGlmKHNxYz09PShzcWErc3FiKSl7XHJcbiAgICAgICAgICAgaWYoYSAgPiBiKXtcclxuICAgICAgICAgICAgICAgW2EsYl09W2IsYV07XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzd2FwcGluZyB2bGF1ZXMnKTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOnRydWUsYSxiLGN9O1xyXG4gICAgICAgIH1cclxuICAgICAgIHJldHVybiB7c3RhdHVzOmZhbHNlLGVycm9yOlwiVmFsdWVzIERvbid0IHBhc3MgUHl0aGFnb3JhcyBUaGVvcmVtXCJ9O1xyXG4gICB9XHJcbiAgIGNvbXBvbmVudFdpbGxNb3VudCgpe1xyXG4gICAgXHJcbiAgIH1cclxuICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhPYmpldC5rZXkpXHJcbiAgICAgICBcclxuXHJcbiAgICB9XHJcbiAgICBiYXNpY0NoZWNraW5nPSgpPT57XHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMucXVlcnkgfHwgIU9iamVjdC5rZXlzKHRoaXMucHJvcHMucXVlcnkpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKT0+KHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjpcIkludmFsaWQgUGFyYW1zXCJcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgbGV0IHthLGIsY30gPSB0aGlzLnByb3BzLnF1ZXJ5O1xyXG4gICAgICAgIGxldCBzdGF0dXMsZXJyb3I7XHJcbiAgICAgICAgKHtzdGF0dXMsYT1hLGI9YixjPWMsZXJyb3J9ID0gdGhpcy52YWxpZGF0aW9uKHthLGIsY30pKTtcclxuICAgICAgICBpZihzdGF0dXMpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dXBDYW52YXMoe2EsYixjfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKT0+e1xyXG4gICAgICAgICAgICAgICByZXR1cm4gIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2luZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjplcnJvclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLnF1ZXJ5KXtcclxuICAgICAgICAgICAgYWxlcnQoJ0V4Y2VwdGlvbiBIYW5kbGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmNoZWNraW5nICYmICF0aGlzLnN0YXRlLmVycm9yKXtcclxuICAgICAgICAgICAgdGhpcy5zZXR1cENhbnZhcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRyYXdpbmdUZXh0PSh7cG9pbnQ6W3gseV0sdGV4dCxjdHgsdHlwZSxzY2FsZUZhY3Rvcixyb3RhdGV9KT0+e1xyXG4gICAgICAgICAgICBjdHgucmVzZXRUcmFuc2Zvcm0oKTtcclxuICAgICAgICBjdHguZm9udD1cIjMwcHggQXJpYWxcIjtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYoIXR5cGUpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHR5cGU9PVwicFwiKXtcclxuICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSB0ZXh0KnNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvaW50ID0gW3gsKHkrbGVuZ3RoLzIpXVxyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZT1cImJsYWNrXCJcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LC4uLnBvaW50KVxyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZT10aGlzLnN0YXRlLmNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodHlwZT09XCJiXCIpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGxlbmd0aCA9IHRleHQqc2NhbGVGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9pbnQgPSBbKHgtbGVuZ3RoLzIpLHldO1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZT1cImJsYWNrXCJcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LC4uLnBvaW50KVxyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZT10aGlzLnN0YXRlLmNvbG9yMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodHlwZT09XCJoXCIpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGxlbmd0aCA9IHRleHQqc2NhbGVGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9pbnQ9W107XHJcbiAgICAgICAgICAgICAgICBpZih0ZXh0IDwgMTApe1xyXG4gICAgICAgICAgICAgICAgICAgICBwb2ludCA9IFt4KyhsZW5ndGgvMikseS0obGVuZ3RoLzIpKzMwXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQ9W3grKGxlbmd0aC80KS05MCx5LShsZW5ndGgvNCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZT1cImJsYWNrXCJcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LC4uLnBvaW50KVxyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZT10aGlzLnN0YXRlLmNvbG9yMlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKHgseSk7XHJcbiAgICAgICAgICAgICAgICBjdHgucm90YXRlKC0ocm90YXRlKzkwKSogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKC14LC15KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBzZXR1cENhbnZhcz0oe2EsYixjfSk9PntcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLmNhbnZhcyA9IHRoaXMucmVmcy5jYW52YXNDdHhcclxuICAgICAgICAvLyBjYW52YXMud2lkdGg9d2luZG93LmlubmVyV2lkdGgtMjA7XHJcbiAgICAgICAgLy8gY2FudmFzLmhlaWdodD13aW5kb3cuaW5uZXJIZWlnaHQqMjtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgbGV0IHsgcG9pbnRzICwgc2NhbGVGYWN0b3IgfSA9IHRoaXMuZHJhd1RyaWFuZ2xlKHtjYW52YXM6dGhpcy5jYW52YXMsY3R4OnRoaXMuY3R4LGEsYixjfSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocG9pbnRzKTtcclxuXHJcbiAgICAvLyAgICBmb3IgcGVycGVuZGljdWxhclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHdpZHRoMSA9IHRoaXMuZ2V0V2lkdGgoWy4uLnBvaW50c1swXSwuLi5wb2ludHNbMV1dKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1JlY3RhbmdsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4OmN0eCxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6cG9pbnRzWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOndpZHRoMSxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6d2lkdGgxLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOmEsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZToncCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yOnRoaXMuc3RhdGUuY29sb3JcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3aW5nVGV4dCh7cG9pbnQ6cG9pbnRzWzBdLHRleHQ6YSxjdHgsdHlwZToncCcsc2NhbGVGYWN0b3J9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZm9yIGJhc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB3aWR0aDIgPSB0aGlzLmdldFdpZHRoKFsuLi5wb2ludHNbMV0sLi4ucG9pbnRzWzJdXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1JlY3RhbmdsZSh7XHJcbiAgICAgICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgICAgICBwb2ludHM6cG9pbnRzWzJdLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6d2lkdGgyLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OndpZHRoMixcclxuICAgICAgICAgICAgICAgIHZhbHVlOmIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOidiJyxcclxuICAgICAgICAgICAgICAgIG1haW5Db2xvcjp0aGlzLnN0YXRlLmNvbG9yMlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3aW5nVGV4dCh7cG9pbnQ6cG9pbnRzWzFdLHRleHQ6YixjdHgsdHlwZTonYicsc2NhbGVGYWN0b3J9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZvciBoeXBvdGVudXNlIFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGguYWNvcyhiL2MpKjE4MC9NYXRoLlBJO1xyXG4gICAgICAgICAgICBsZXQgd2lkdGgzPSB0aGlzLmdldFdpZHRoKFsuLi5wb2ludHNbMF0sLi4ucG9pbnRzWzJdXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1JlY3RhbmdsZSh7XHJcbiAgICAgICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgICAgICBwb2ludHM6cG9pbnRzWzJdLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6d2lkdGgzLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OndpZHRoMyAgLFxyXG4gICAgICAgICAgICAgICAgcm90YXRlOmFuZ2xlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6YyxcclxuICAgICAgICAgICAgICAgIHR5cGU6J2gnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdpbmdUZXh0KHtwb2ludDpwb2ludHNbMl0sdGV4dDpjLGN0eCx0eXBlOidoJyxzY2FsZUZhY3Rvcixyb3RhdGU6YW5nbGV9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgZHJhd1JlY3RhbmdsZT0oeyBjdHggLHBvaW50czpbeCx5XSx3aWR0aCxoZWlnaHQgLCByb3RhdGUgLHNjYWxlICx2YWx1ZSxtYWluQ29sb3I9cmFuZG9tQ29sb3IoKSx0eXBlfSk9PntcclxuICAgICAgICBjdHgubW92ZVRvKHgseSk7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgICAgY3R4Lm1vdmVUbygwLDApO1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKHgseSk7XHJcbiAgICAgICAgICAgICAgICBjdHgucm90YXRlKC0ocm90YXRlKzkwKSogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlIT1cImhcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZT1tYWluQ29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsMCx3aWR0aCxoZWlnaHQgKTtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLXgsLXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2luZ0lubmVyTGluZXMoe3gseSx3aWR0aCxzY2FsZSxjdHgsdmFsdWUsdHlwZX0pO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIHdpbmRvdy5jdHg9Y3R4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkcmF3aW5nSW5uZXJMaW5lcyh7eD0wLHk9MCx3aWR0aCxzY2FsZSxjdHgsdmFsdWUsdHlwZX0pe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgbGV0IGhvcml6b250YWxMaW5lcz1bXTtcclxuICAgICAgICAgICAgbGV0IHZlcnRpY2FsTGluZXM9W107XHJcbiAgICAgICAgICAgIGxldCBOdW1iZXJvZkJveGVzPXZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSB3aWR0aC92YWx1ZTtcclxuICAgICAgICAgICAgLy8gW3gseV09WzAsMF07XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0xO2k8TnVtYmVyb2ZCb3hlcztpKyspe1xyXG4gICAgICAgICAgICAgICAgLy8gaG9yaXp6b250YWwgbGluZVxyXG4gICAgICAgICAgICAgICAgbGV0IHgxID0geDtcclxuICAgICAgICAgICAgICAgIGxldCB5MSA9IHkrKGRpc3RhbmNlKmkpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyh4MSx5MSk7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHgxK3dpZHRoLHkxKTtcclxuICAgICAgICAgICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZT1cImJsYWNrXCI7XHJcbiAgICAgICAgICAgICAgICAvLyBjdHgubGluZVdpZHRoPTE7XHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsTGluZXMucHVzaChbeDErd2lkdGgseTFdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgeDIgPSB4KyhkaXN0YW5jZSppKTtcclxuICAgICAgICAgICAgICAgIGxldCB5MiA9IHk7XHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHgyLHkyKTtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeDIseTIrd2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlPVwiYmxhY2tcIjtcclxuICAgICAgICAgICAgICAgIC8vIGN0eC5saW5lV2lkdGg9MTtcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsTGluZXMucHVzaChbeDIrd2lkdGgseTJdKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2hvcml6b250YWwgbGluZXMnLGhvcml6b250YWxMaW5lcyk7XHJcbiAgICAgICAgICAgIGlmKHR5cGU9PVwiaFwiKXtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhaW50aW5nSFJlY3Qoe3ZlcnRpY2FsTGluZXMsaG9yaXpvbnRhbExpbmVzLHNjYWxlLHdpZHRoLGRpc3RhbmNlLGN0eH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBwYWludGluZ0hSZWN0PSh7dmVydGljYWxMaW5lcyxob3Jpem9udGFsTGluZXMsZGlzdGFuY2Usd2lkdGgsc2NhbGUsY3R4fSk9PntcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmVydGljYWxMaW5lcyxob3Jpem9udGFsTGluZXMpO1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlPXRoaXMuc3RhdGUuY29sb3I7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT1ob3Jpem9udGFsTGluZXMubGVuZ3RoLTE7aT49LTE7aS0tKXtcclxuICAgICAgICAgICAgICAgIGxldCBwb2ludHM9aG9yaXpvbnRhbExpbmVzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYocG9pbnRzKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IHBvaW50c1swXS1kaXN0YW5jZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncG9pbnRzJyx4LHBvaW50c1sxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHgscG9pbnRzWzFdLGRpc3RhbmNlLGRpc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGU9XCJibGFja1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50cz0gaG9yaXpvbnRhbExpbmVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gcG9pbnRzWzBdLShkaXN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xhc3QgcG9pbnQnLHgscG9pbnRzWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoeCxwb2ludHNbMV0tZGlzdGFuY2UsZGlzdGFuY2UsZGlzdGFuY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IobGV0IGk9dmVydGljYWxMaW5lcy5sZW5ndGgtMTtpPj0tMTtpLS0pe1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvaW50cz12ZXJ0aWNhbExpbmVzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYocG9pbnRzKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IHBvaW50c1sxXSt3aWR0aC1kaXN0YW5jZTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QocG9pbnRzWzBdLXdpZHRoLHksZGlzdGFuY2UsZGlzdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZT1cIndoaXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdwb2ludHMnLHBvaW50c1swXS13aWR0aCx5KTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50cz0gdmVydGljYWxMaW5lc1t2ZXJ0aWNhbExpbmVzLmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IHBvaW50c1sxXSsod2lkdGgtZGlzdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gcG9pbnRzWzBdLSh3aWR0aCtkaXN0YW5jZSp2ZXJ0aWNhbExpbmVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHgseSxkaXN0YW5jZSxkaXN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBkcmF3VHJpYW5nbGU9KHtjYW52YXMsY3R4LGEsYixjfSk9PntcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgbGV0IHNjYWxlRmFjdG9yPShjPDMwKSA/IDMwOjE1XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGluaXRpYWxQb2ludD1bd2luZG93LmlubmVyV2lkdGgvMix3aW5kb3cuaW5uZXJIZWlnaHQvMl07XHJcbiAgICAgICAgbGV0IHBvaW50cz1bWy4uLmluaXRpYWxQb2ludF1dO1xyXG5cclxuICAgICAgICBjdHgubW92ZVRvKC4uLmluaXRpYWxQb2ludCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHg9IGluaXRpYWxQb2ludFswXTtcclxuICAgICAgICBsZXQgeT1pbml0aWFsUG9pbnRbMV0rKGEqc2NhbGVGYWN0b3IpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHBvaW50cy5wdXNoKFt4LHldKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgY3R4LmxpbmVUbyh4LHkpOyAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICB4ID0geC0oYipzY2FsZUZhY3Rvcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9pbnRzLnB1c2goW3gseV0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGN0eC5saW5lVG8oeCx5KTtcclxuICAgICAgICBcclxuICAgICAgICBjdHguZmlsbFN0eWxlPVwieWVsbG93XCI7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlPVwiIzMzM1wiO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTsgICAgXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICByZXR1cm4ge3BvaW50cyxzY2FsZUZhY3Rvcn07XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5pc0ZpcnN0KXtcclxuICAgICAgICAgICAgdGhpcy5iYXNpY0NoZWNraW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBpc0ZpcnN0OnRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jaGVja2luZyB8fCB0aGlzLnN0YXRlLmVycm9yKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiAgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXNnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvciB8fCBcIldhaXQgbG9hZGluZy4uLlwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0cnVjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBRdWVyeSBQYXJhbXMgOiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+ICdhJyAsICdiJyBjYW4gYmUgaW50ZXJjaGFuZ2VkIGZvciBCYXNlIEFuZCBQZXJwZW5kaWN1bGFyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiAnYycgTXVzdCBiZSBoeXBvdGVudXNlIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1zZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5zdHJ1Y3Rpb24gcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1jb2xvcjojNDI0MjQyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5lcnJvcil7XHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUuZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGNhbnZhcyByZWY9XCJjYW52YXNDdHhcIiAgPjwvY2FudmFzPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBib2R5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7Il19 */\n/*@ sourceURL=D:\\program\\patua\\github task\\pythaTheoram\\pages\\index.js */"));
      }

      if (this.state.error) {
        alert(this.state.error);
        return 0;
      }

      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("canvas", {
        ref: "canvasCtx",
        className: "jsx-1561665759",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a, {
        id: "1561665759",
        __self: this
      }, "canvas{border:1px solid black;}body{margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxwcm9ncmFtXFxwYXR1YVxcZ2l0aHViIHRhc2tcXHB5dGhhVGhlb3JhbVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFYbUMsQUFHK0MsQUFJWixXQUNkLFlBSEEiLCJmaWxlIjoiRDpcXHByb2dyYW1cXHBhdHVhXFxnaXRodWIgdGFza1xccHl0aGFUaGVvcmFtXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLCB7Q29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyByYW5kb21Db2xvciBmcm9tICdyYW5kb21jb2xvcic7XHJcblxyXG5cclxuY2xhc3MgaW5kZXggZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgIGN0eD1udWxsO1xyXG4gICBjYW52YXM9bnVsbDtcclxuICAgc3RhdGU9e1xyXG4gICAgICAgIGVycm9yOmZhbHNlLFxyXG4gICAgICAgIGNoZWNraW5nOnRydWUsXHJcbiAgICAgICAgY29sb3I6cmFuZG9tQ29sb3IoKSwvL3BlcnBlbmRpY3VsYXIgY29sb3JcclxuICAgICAgICBjb2xvcjI6cmFuZG9tQ29sb3IoKSwvL2Jhc2UgY29sb3IsXHJcbiAgICAgICAgaXNGaXJzdDpmYWxzZVxyXG4gICAgfVxyXG4gICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0oe3F1ZXJ5LHBhcmFtc30pPT57XHJcbiAgICByZXR1cm4ge3F1ZXJ5fTtcclxuICAgfVxyXG5cclxuICAgZ2V0V2lkdGg9KFt4MSx5MSx4Mix5Ml0pPT57XHJcbiAgICAgICAgdmFyIHg9TWF0aC5wb3coKHgyLXgxKSwyKTtcclxuICAgICAgICB2YXIgeSA9IE1hdGgucG93KCh5Mi15MSksMik7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKE1hdGguc3FydCh4K3kpKTtcclxuICAgfVxyXG4gICByYW5kb21Db2xvcj0oKT0+e1xyXG4gICAgICAgcmV0dXJuIHJhbmRvbUNvbG9yKCk7XHJcbiAgIH1cclxuICAgdmFsaWRhdGlvbj0oe2EsYixjfSk9PntcclxuICAgICAgIGlmKCFOdW1iZXIoYSkpe1xyXG4gICAgICAgIHJldHVybiB7c3RhdHVzOmZhbHNlLGVycm9yOlwidmFsdWUgJ0EnIGlzIEludmFsaWRcIn07XHJcbiAgICAgICB9XHJcbiAgICAgICBlbHNlIGlmKCFOdW1iZXIoYikpe1xyXG4gICAgICAgICAgICByZXR1cm4ge3N0YXR1czpmYWxzZSxlcnJvcjpcInZhbHVlICdCJyBpcyBJbnZhbGlkXCJ9XHJcbiAgICAgICB9XHJcbiAgICAgICBlbHNlIGlmKCFOdW1iZXIoYykpe1xyXG4gICAgICAgICAgIHJldHVybiB7c3RhdHVzOmZhbHNlLGVycm9yOlwidmFsdWUgJ0MnIGlzIEludmFsaWRcIn07XHJcbiAgICAgICB9XHJcbiAgICAgICAvLyBwZXJwZW5kaWN1bGFyICAgICBcclxuICAgICAgIGxldCBzcWE9TWF0aC5wb3coYSwyKTtcclxuICAgICAgIC8vIGJhc2VcclxuICAgICAgIGxldCBzcWI9TWF0aC5wb3coYiwyKTtcclxuICAgICAgIC8vIGggICAgXHJcbiAgICAgICBsZXQgc3FjPU1hdGgucG93KGMsMik7XHJcbiAgICAgICBcclxuICAgIC8vICAgIGEgc2hvdWxkIGJlIHNtYWxsXHJcblxyXG4gICAgICAgaWYoc3FjPT09KHNxYStzcWIpKXtcclxuICAgICAgICAgICBpZihhICA+IGIpe1xyXG4gICAgICAgICAgICAgICBbYSxiXT1bYixhXTtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N3YXBwaW5nIHZsYXVlcycpO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtzdGF0dXM6dHJ1ZSxhLGIsY307XHJcbiAgICAgICAgfVxyXG4gICAgICAgcmV0dXJuIHtzdGF0dXM6ZmFsc2UsZXJyb3I6XCJWYWx1ZXMgRG9uJ3QgcGFzcyBQeXRoYWdvcmFzIFRoZW9yZW1cIn07XHJcbiAgIH1cclxuICAgY29tcG9uZW50V2lsbE1vdW50KCl7XHJcbiAgICBcclxuICAgfVxyXG4gICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKE9iamV0LmtleSlcclxuICAgICAgIFxyXG5cclxuICAgIH1cclxuICAgIGJhc2ljQ2hlY2tpbmc9KCk9PntcclxuICAgICAgICBpZighdGhpcy5wcm9wcy5xdWVyeSB8fCAhT2JqZWN0LmtleXModGhpcy5wcm9wcy5xdWVyeSkubGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpPT4oe1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjaGVja2luZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOlwiSW52YWxpZCBQYXJhbXNcIlxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBsZXQge2EsYixjfSA9IHRoaXMucHJvcHMucXVlcnk7XHJcbiAgICAgICAgbGV0IHN0YXR1cyxlcnJvcjtcclxuICAgICAgICAoe3N0YXR1cyxhPWEsYj1iLGM9YyxlcnJvcn0gPSB0aGlzLnZhbGlkYXRpb24oe2EsYixjfSkpO1xyXG4gICAgICAgIGlmKHN0YXR1cyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2luZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5zZXR1cENhbnZhcyh7YSxiLGN9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpPT57XHJcbiAgICAgICAgICAgICAgIHJldHVybiAge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNraW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOmVycm9yXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMucXVlcnkpe1xyXG4gICAgICAgICAgICBhbGVydCgnRXhjZXB0aW9uIEhhbmRsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuY2hlY2tpbmcgJiYgIXRoaXMuc3RhdGUuZXJyb3Ipe1xyXG4gICAgICAgICAgICB0aGlzLnNldHVwQ2FudmFzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJhd2luZ1RleHQ9KHtwb2ludDpbeCx5XSx0ZXh0LGN0eCx0eXBlLHNjYWxlRmFjdG9yLHJvdGF0ZX0pPT57XHJcbiAgICAgICAgICAgIGN0eC5yZXNldFRyYW5zZm9ybSgpO1xyXG4gICAgICAgIGN0eC5mb250PVwiMzBweCBBcmlhbFwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZighdHlwZSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodHlwZT09XCJwXCIpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGxlbmd0aCA9IHRleHQqc2NhbGVGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9pbnQgPSBbeCwoeStsZW5ndGgvMildXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsLi4ucG9pbnQpXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlPXRoaXMuc3RhdGUuY29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZih0eXBlPT1cImJcIil7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGVuZ3RoID0gdGV4dCpzY2FsZUZhY3RvcjtcclxuICAgICAgICAgICAgICAgIGxldCBwb2ludCA9IFsoeC1sZW5ndGgvMikseV07XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsLi4ucG9pbnQpXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlPXRoaXMuc3RhdGUuY29sb3IyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZih0eXBlPT1cImhcIil7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGVuZ3RoID0gdGV4dCpzY2FsZUZhY3RvcjtcclxuICAgICAgICAgICAgICAgIGxldCBwb2ludD1bXTtcclxuICAgICAgICAgICAgICAgIGlmKHRleHQgPCAxMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBvaW50ID0gW3grKGxlbmd0aC8yKSx5LShsZW5ndGgvMikrMzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludD1beCsobGVuZ3RoLzQpLTkwLHktKGxlbmd0aC80KV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsLi4ucG9pbnQpXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlPXRoaXMuc3RhdGUuY29sb3IyXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoeCx5KTtcclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoLShyb3RhdGUrOTApKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLXgsLXkpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG5cclxuICAgIH1cclxuICAgIHNldHVwQ2FudmFzPSh7YSxiLGN9KT0+e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMuY2FudmFzID0gdGhpcy5yZWZzLmNhbnZhc0N0eFxyXG4gICAgICAgIC8vIGNhbnZhcy53aWR0aD13aW5kb3cuaW5uZXJXaWR0aC0yMDtcclxuICAgICAgICAvLyBjYW52YXMuaGVpZ2h0PXdpbmRvdy5pbm5lckhlaWdodCoyO1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBsZXQgeyBwb2ludHMgLCBzY2FsZUZhY3RvciB9ID0gdGhpcy5kcmF3VHJpYW5nbGUoe2NhbnZhczp0aGlzLmNhbnZhcyxjdHg6dGhpcy5jdHgsYSxiLGN9KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwb2ludHMpO1xyXG5cclxuICAgIC8vICAgIGZvciBwZXJwZW5kaWN1bGFyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgd2lkdGgxID0gdGhpcy5nZXRXaWR0aChbLi4ucG9pbnRzWzBdLC4uLnBvaW50c1sxXV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3UmVjdGFuZ2xlKHtcclxuICAgICAgICAgICAgICAgICAgICBjdHg6Y3R4LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50czpwb2ludHNbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6d2lkdGgxLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDp3aWR0aDEsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6YSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOidwJyxcclxuICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3I6dGhpcy5zdGF0ZS5jb2xvclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdpbmdUZXh0KHtwb2ludDpwb2ludHNbMF0sdGV4dDphLGN0eCx0eXBlOidwJyxzY2FsZUZhY3Rvcn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmb3IgYmFzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHdpZHRoMiA9IHRoaXMuZ2V0V2lkdGgoWy4uLnBvaW50c1sxXSwuLi5wb2ludHNbMl1dKTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3UmVjdGFuZ2xlKHtcclxuICAgICAgICAgICAgICAgIGN0eCxcclxuICAgICAgICAgICAgICAgIHBvaW50czpwb2ludHNbMl0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDp3aWR0aDIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6d2lkdGgyLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6YixcclxuICAgICAgICAgICAgICAgIHR5cGU6J2InLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yOnRoaXMuc3RhdGUuY29sb3IyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdpbmdUZXh0KHtwb2ludDpwb2ludHNbMV0sdGV4dDpiLGN0eCx0eXBlOidiJyxzY2FsZUZhY3Rvcn0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZm9yIGh5cG90ZW51c2UgXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hY29zKGIvYykqMTgwL01hdGguUEk7XHJcbiAgICAgICAgICAgIGxldCB3aWR0aDM9IHRoaXMuZ2V0V2lkdGgoWy4uLnBvaW50c1swXSwuLi5wb2ludHNbMl1dKTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3UmVjdGFuZ2xlKHtcclxuICAgICAgICAgICAgICAgIGN0eCxcclxuICAgICAgICAgICAgICAgIHBvaW50czpwb2ludHNbMl0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDp3aWR0aDMsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6d2lkdGgzICAsXHJcbiAgICAgICAgICAgICAgICByb3RhdGU6YW5nbGUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpjLFxyXG4gICAgICAgICAgICAgICAgdHlwZTonaCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd2luZ1RleHQoe3BvaW50OnBvaW50c1syXSx0ZXh0OmMsY3R4LHR5cGU6J2gnLHNjYWxlRmFjdG9yLHJvdGF0ZTphbmdsZX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBkcmF3UmVjdGFuZ2xlPSh7IGN0eCAscG9pbnRzOlt4LHldLHdpZHRoLGhlaWdodCAsIHJvdGF0ZSAsc2NhbGUgLHZhbHVlLG1haW5Db2xvcj1yYW5kb21Db2xvcigpLHR5cGV9KT0+e1xyXG4gICAgICAgIGN0eC5tb3ZlVG8oeCx5KTtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcclxuICAgICAgICBjdHgubW92ZVRvKDAsMCk7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoeCx5KTtcclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoLShyb3RhdGUrOTApKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICAgICAgICAgIGlmKHR5cGUhPVwiaFwiKXtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlPW1haW5Db2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwwLHdpZHRoLGhlaWdodCApO1xyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSgteCwteSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3aW5nSW5uZXJMaW5lcyh7eCx5LHdpZHRoLHNjYWxlLGN0eCx2YWx1ZSx0eXBlfSk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgd2luZG93LmN0eD1jdHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRyYXdpbmdJbm5lckxpbmVzKHt4PTAseT0wLHdpZHRoLHNjYWxlLGN0eCx2YWx1ZSx0eXBlfSl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBsZXQgaG9yaXpvbnRhbExpbmVzPVtdO1xyXG4gICAgICAgICAgICBsZXQgdmVydGljYWxMaW5lcz1bXTtcclxuICAgICAgICAgICAgbGV0IE51bWJlcm9mQm94ZXM9dmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHdpZHRoL3ZhbHVlO1xyXG4gICAgICAgICAgICAvLyBbeCx5XT1bMCwwXTtcclxuICAgICAgICAgICAgZm9yKGxldCBpPTE7aTxOdW1iZXJvZkJveGVzO2krKyl7XHJcbiAgICAgICAgICAgICAgICAvLyBob3JpenpvbnRhbCBsaW5lXHJcbiAgICAgICAgICAgICAgICBsZXQgeDEgPSB4O1xyXG4gICAgICAgICAgICAgICAgbGV0IHkxID0geSsoZGlzdGFuY2UqaSk7XHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHgxLHkxKTtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeDErd2lkdGgseTEpO1xyXG4gICAgICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlPVwiYmxhY2tcIjtcclxuICAgICAgICAgICAgICAgIC8vIGN0eC5saW5lV2lkdGg9MTtcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWxMaW5lcy5wdXNoKFt4MSt3aWR0aCx5MV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB4MiA9IHgrKGRpc3RhbmNlKmkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHkyID0geTtcclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oeDIseTIpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4Mix5Mit3aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGU9XCJibGFja1wiO1xyXG4gICAgICAgICAgICAgICAgLy8gY3R4LmxpbmVXaWR0aD0xO1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWxMaW5lcy5wdXNoKFt4Mit3aWR0aCx5Ml0pO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaG9yaXpvbnRhbCBsaW5lcycsaG9yaXpvbnRhbExpbmVzKTtcclxuICAgICAgICAgICAgaWYodHlwZT09XCJoXCIpe1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFpbnRpbmdIUmVjdCh7dmVydGljYWxMaW5lcyxob3Jpem9udGFsTGluZXMsc2NhbGUsd2lkdGgsZGlzdGFuY2UsY3R4fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgIH1cclxuICAgIHBhaW50aW5nSFJlY3Q9KHt2ZXJ0aWNhbExpbmVzLGhvcml6b250YWxMaW5lcyxkaXN0YW5jZSx3aWR0aCxzY2FsZSxjdHh9KT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2ZXJ0aWNhbExpbmVzLGhvcml6b250YWxMaW5lcyk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGU9dGhpcy5zdGF0ZS5jb2xvcjtcclxuICAgICAgICAgICAgZm9yKGxldCBpPWhvcml6b250YWxMaW5lcy5sZW5ndGgtMTtpPj0tMTtpLS0pe1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvaW50cz1ob3Jpem9udGFsTGluZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZihwb2ludHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gcG9pbnRzWzBdLWRpc3RhbmNlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdwb2ludHMnLHgscG9pbnRzWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoeCxwb2ludHNbMV0sZGlzdGFuY2UsZGlzdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZT1cImJsYWNrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzPSBob3Jpem9udGFsTGluZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBwb2ludHNbMF0tKGRpc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbGFzdCBwb2ludCcseCxwb2ludHNbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCh4LHBvaW50c1sxXS1kaXN0YW5jZSxkaXN0YW5jZSxkaXN0YW5jZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT12ZXJ0aWNhbExpbmVzLmxlbmd0aC0xO2k+PS0xO2ktLSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9pbnRzPXZlcnRpY2FsTGluZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZihwb2ludHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB5ID0gcG9pbnRzWzFdK3dpZHRoLWRpc3RhbmNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChwb2ludHNbMF0td2lkdGgseSxkaXN0YW5jZSxkaXN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlPVwid2hpdGVcIjtcclxuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3BvaW50cycscG9pbnRzWzBdLXdpZHRoLHkpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzPSB2ZXJ0aWNhbExpbmVzW3ZlcnRpY2FsTGluZXMubGVuZ3RoLTFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB5ID0gcG9pbnRzWzFdKyh3aWR0aC1kaXN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBwb2ludHNbMF0tKHdpZHRoK2Rpc3RhbmNlKnZlcnRpY2FsTGluZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoeCx5LGRpc3RhbmNlLGRpc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIGRyYXdUcmlhbmdsZT0oe2NhbnZhcyxjdHgsYSxiLGN9KT0+e1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBsZXQgc2NhbGVGYWN0b3I9KGM8MzApID8gMzA6MTVcclxuICAgICAgICBcclxuICAgICAgICBsZXQgaW5pdGlhbFBvaW50PVt3aW5kb3cuaW5uZXJXaWR0aC8yLHdpbmRvdy5pbm5lckhlaWdodC8yXTtcclxuICAgICAgICBsZXQgcG9pbnRzPVtbLi4uaW5pdGlhbFBvaW50XV07XHJcblxyXG4gICAgICAgIGN0eC5tb3ZlVG8oLi4uaW5pdGlhbFBvaW50KTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgeD0gaW5pdGlhbFBvaW50WzBdO1xyXG4gICAgICAgIGxldCB5PWluaXRpYWxQb2ludFsxXSsoYSpzY2FsZUZhY3Rvcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9pbnRzLnB1c2goW3gseV0pO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjdHgubGluZVRvKHgseSk7ICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHggPSB4LShiKnNjYWxlRmFjdG9yKTtcclxuICAgICAgICBcclxuICAgICAgICBwb2ludHMucHVzaChbeCx5XSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3R4LmxpbmVUbyh4LHkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGN0eC5maWxsU3R5bGU9XCJ5ZWxsb3dcIjtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGU9XCIjMzMzXCI7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpOyAgICBcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiB7cG9pbnRzLHNjYWxlRmFjdG9yfTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmlzRmlyc3Qpe1xyXG4gICAgICAgICAgICB0aGlzLmJhc2ljQ2hlY2tpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShkYXRhPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRmlyc3Q6dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnN0YXRlLmNoZWNraW5nIHx8IHRoaXMuc3RhdGUuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtc2dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yIHx8IFwiV2FpdCBsb2FkaW5nLi4uXCJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RydWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IFF1ZXJ5IFBhcmFtcyA6IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gJ2EnICwgJ2InIGNhbiBiZSBpbnRlcmNoYW5nZWQgZm9yIEJhc2UgQW5kIFBlcnBlbmRpY3VsYXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+ICdjJyBNdXN0IGJlIGh5cG90ZW51c2UgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubXNne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbnN0cnVjdGlvbiBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWNvbG9yOiM0MjQyNDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnN0YXRlLmVycm9yKXtcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5lcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Y2FudmFzIHJlZj1cImNhbnZhc0N0eFwiICA+PC9jYW52YXM+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhc3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiXX0= */\n/*@ sourceURL=D:\\program\\patua\\github task\\pythaTheoram\\pages\\index.js */"));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(index, "getInitialProps", function (_ref11) {
  var query = _ref11.query,
      params = _ref11.params;
  return {
    query: query
  };
});

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.4d11264b349c28b866ac.hot-update.js.map