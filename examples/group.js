webpackJsonp([1],{

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(150), __esModule: true };

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(141);
__webpack_require__(151);
module.exports = __webpack_require__(27).Array.from;


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(104);
var $export = __webpack_require__(47);
var toObject = __webpack_require__(77);
var call = __webpack_require__(152);
var isArrayIter = __webpack_require__(153);
var toLength = __webpack_require__(134);
var createProperty = __webpack_require__(154);
var getIterFn = __webpack_require__(155);

$export($export.S + $export.F * !__webpack_require__(157)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(61);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(64);
var ITERATOR = __webpack_require__(29)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(48);
var createDesc = __webpack_require__(76);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(156);
var ITERATOR = __webpack_require__(29)('iterator');
var Iterators = __webpack_require__(64);
module.exports = __webpack_require__(27).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(106);
var TAG = __webpack_require__(29)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(29)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(500);


/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_tween_one__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_queue_anim__ = __webpack_require__(501);









var Demo = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

  function Demo(props) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

    _this.onClick = function () {
      var children = !_this.state.children ? [__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_rc_queue_anim__["a" /* default */],
        {
          style: {
            opacity: 1,
            backgroundColor: '#000fff',
            float: 'left',
            height: 200,
            width: 100
          },
          key: 'aa',
          delay: 1000
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { key: '1' },
          '\u6267\u884C\u52A8\u6548'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { key: '2' },
          '\u6267\u884C\u52A8\u6548'
        )
      ), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { key: 'a',
          style: {
            opacity: 1,
            backgroundColor: '#000',
            float: 'left',
            height: 200
          }
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          null,
          '\u6267\u884C\u52A8\u6548'
        )
      )] : null;
      _this.setState({
        children: children
      });
    };

    _this.onEnd = function (e) {
      console.log(e); // eslint-disable-line no-console
    };

    _this.enterType = function (e) {
      if (e.key === 'a') {
        return { x: 100, opacity: 0, type: 'from' };
      }
      return { y: 80, opacity: 0, type: 'from' };
    };

    _this.state = {
      children: [__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_rc_queue_anim__["a" /* default */],
        {
          style: {
            opacity: 1,
            backgroundColor: '#000fff',
            float: 'left',
            height: 200,
            width: 100
          },
          key: 'aa',
          delay: 1000
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { key: '1' },
          '\u6267\u884C\u52A8\u6548'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { key: '2' },
          '\u6267\u884C\u52A8\u6548'
        )
      ), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { key: 'a',
          style: {
            opacity: 1,
            backgroundColor: '#000',
            float: 'left',
            height: 200
          }
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          null,
          '\u6267\u884C\u52A8\u6548'
        )
      )]
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Demo, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'button',
          { onClick: this.onClick },
          this.state.children ? 'show' : 'hide'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_rc_tween_one__["a" /* TweenOneGroup */],
          {
            style: { height: 300 },
            enter: this.enterType,
            leave: [{ y: 90 }, { x: 100, opacity: 0 }],
            onEnd: this.onEnd,
            exclusive: true
          },
          this.state.children
        )
      );
    }
  }]);

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__QueueAnim__ = __webpack_require__(502);
// export this package's api


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__QueueAnim__["a" /* default */]);

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rc_tween_one__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_lifecycles_compat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__animTypes__ = __webpack_require__(504);















var noop = function noop() {};

var typeDefault = ['displayName', 'propTypes', 'getDefaultProps', 'defaultProps', 'childContextTypes', 'contextTypes', 'contextType'];

var QueueAnim = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(QueueAnim, _React$Component);

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(QueueAnim, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, _ref) {
      var prevProps = _ref.prevProps,
          children = _ref.children,
          prevChildShow = _ref.childrenShow,
          $self = _ref.$self;

      var nextState = {
        prevProps: props
      };
      if (prevProps && props !== prevProps) {
        var nextChildren = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["d" /* toArrayChildren */])(props.children).filter(function (c) {
          return c;
        });
        var currentChildren = $self.originalChildren.filter(function (item) {
          return item;
        });
        if (children.length) {
          /**
           * 多次刷新处理
           * 如果 state.children 里还有元素，元素还在动画，当前子级加回在出场的子级;
           */
          var leaveChild = children.filter(function (item) {
            return item && $self.keysToLeave.indexOf(item.key) >= 0;
          });

          $self.leaveUnfinishedChild = leaveChild.map(function (item) {
            return item.key;
          });
          /**
           * 获取 leaveChild 在 state.children 里的序列，再将 leaveChild 和 currentChildren 的重新排序。
           * 避逸 state.children 在 leaveComplete 里没全部完成不触发，
           * leaveComplete 里如果动画完成了是会删除 keyToLeave，但 state.children 是在全部出场后才触发清除，
           * 所以这里需要处理出场完成的元素做清除。
           */
          var stateChildren = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["c" /* mergeChildren */])(currentChildren, children);
          var currentChild = [];
          var childReOrder = function childReOrder(child) {
            child.forEach(function (item) {
              var order = stateChildren.indexOf(item);
              // -1 不应该出现的情况，直接插入数组后面.
              if (order === -1) {
                currentChild.push(item);
              } else {
                currentChild.splice(order, 0, item);
              }
            });
          };
          childReOrder(leaveChild);
          childReOrder(currentChildren);
          currentChildren = currentChild.filter(function (c) {
            return c;
          });
        }
        var newChildren = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["c" /* mergeChildren */])(currentChildren, nextChildren);
        var childrenShow = !newChildren.length ? {} : prevChildShow;
        $self.keysToEnterPaused = {};
        var emptyBool = !nextChildren.length && !currentChildren.length && children.length;
        /**
         * 在出场没结束时，childrenShow 里的值将不会清除。
         * 再触发进场时， childrenShow 里的值是保留着的, 设置了 forcedReplay 将重新播放进场。
         */
        if (!emptyBool) {
          // 空子级状态下刷新不做处理
          var nextKeys = nextChildren.map(function (c) {
            return c.key;
          });
          $self.keysToLeave.forEach(function (key) {
            // 将所有在出场里的停止掉。避免间隔性出现
            if (nextKeys.indexOf(key) >= 0) {
              $self.keysToEnterPaused[key] = true;
              currentChildren = currentChildren.filter(function (item) {
                return item.key !== key;
              });
              if (props.forcedReplay) {
                // 清掉所有出场的。
                delete childrenShow[key];
              }
            }
          });
        }

        $self.keysToEnter = [];
        $self.keysToLeave = [];

        // need render to avoid update
        nextState.childrenShow = childrenShow;
        nextState.children = newChildren;

        nextChildren.forEach(function (c) {
          if (!c) {
            return;
          }
          var key = c.key;
          var hasPrev = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["a" /* findChildInChildrenByKey */])(currentChildren, key);
          if (!hasPrev && key) {
            $self.keysToEnter.push(key);
          }
        });

        currentChildren.forEach(function (c) {
          if (!c) {
            return;
          }
          var key = c.key;
          var hasNext = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["a" /* findChildInChildrenByKey */])(nextChildren, key);
          if (!hasNext && key) {
            $self.keysToLeave.push(key);
            __WEBPACK_IMPORTED_MODULE_9_rc_tween_one__["c" /* ticker */].clear($self.placeholderTimeoutIds[key]);
            delete $self.placeholderTimeoutIds[key];
          }
        });
      }
      return nextState;
    }
  }]);

  function QueueAnim(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, QueueAnim);

    /**
     * @param tweenToEnter;
     * 记录强制切换时是否需要添加 animation;
     * 如 enter 后, leave -> enter，样式是没有发生变化，就不需要添加 animation 属性。
     */
    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (QueueAnim.__proto__ || Object.getPrototypeOf(QueueAnim)).call(this, props));

    _initialiseProps.call(_this);

    _this.tweenToEnter = {};
    /**
     * @param leaveUnfinishedChild;
     * 记录多次切换，出场没完成动画的 key。
     */
    _this.leaveUnfinishedChild = [];
    /**
     * @param saveTweenOneTag;
     * 记录 TweenOne 标签，在 leaveUnfinishedChild 里使用，残留的元素不需要考虑 props 的变更。
     */
    _this.saveTweenOneTag = {};
    /**
     * @param enterAnimation;
     * 记录进场的动画, 在没进场完成, 将进场的动画保存，免得重新生成。
     */
    _this.enterAnimation = {};
    /**
     * @param childrenShow;
     * 记录 animation 里是否需要 startAnim;
     * 当前元素是否处在显示状态
     * enterBegin 到 leaveComplete 之前都处于显示状态
     */
    _this.childrenShow = {};
    /**
     * @param keysToEnter;
     * 记录进场的 key;
     */
    _this.keysToEnter = [];
    /**
     * @param keysToLeave;
     * 记录出场的 key;
     */
    _this.keysToLeave = [];
    /**
     * @param keysToEnterPaused;
     * 记录在进入时是否处理暂停状态
     */
    _this.keysToEnterPaused = {};
    /**
     * @param placeholderTimeoutIds;
     * 进场时 deley 的 timeout 记录;
     */
    _this.placeholderTimeoutIds = {};
    /**
     * @param childRefs;
     * 储存 children 的 ref;
     */
    _this.childRefs = {};
    /**
     * @param currentRef;
     * 记录 component 是组件时的 ref;
     */
    _this.currentRef = null;
    // 第一次进入，默认进场
    var children = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["d" /* toArrayChildren */])(Object(__WEBPACK_IMPORTED_MODULE_11__utils__["b" /* getChildrenFromProps */])(props));
    var childrenShow = {};
    children.forEach(function (child) {
      if (!child || !child.key) {
        return;
      }
      if (_this.props.appear) {
        _this.keysToEnter.push(child.key);
      } else {
        childrenShow[child.key] = true;
        _this.tweenToEnter[child.key] = true;
      }
    });
    _this.originalChildren = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["d" /* toArrayChildren */])(Object(__WEBPACK_IMPORTED_MODULE_11__utils__["b" /* getChildrenFromProps */])(props));
    _this.state = {
      children: children,
      childrenShow: childrenShow,
      $self: _this
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(QueueAnim, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.appear) {
        this.componentDidUpdate();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.originalChildren = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["d" /* toArrayChildren */])(Object(__WEBPACK_IMPORTED_MODULE_11__utils__["b" /* getChildrenFromProps */])(this.props));
      var keysToEnter = [].concat(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray___default()(this.keysToEnter));
      var keysToLeave = [].concat(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray___default()(this.keysToLeave));
      keysToEnter.forEach(this.performEnter);
      keysToLeave.forEach(this.performLeave);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this2 = this;

      Object.keys(this.placeholderTimeoutIds).forEach(function (key) {
        __WEBPACK_IMPORTED_MODULE_9_rc_tween_one__["c" /* ticker */].clear(_this2.placeholderTimeoutIds[key]);
      });
      this.keysToEnter = [];
      this.keysToLeave = [];
      this.childrenShow = {};
    }
  }, {
    key: 'getTweenType',
    value: function getTweenType(type, num) {
      var data = __WEBPACK_IMPORTED_MODULE_12__animTypes__["a" /* default */][type];
      return this.getTweenAnimConfig(data, num);
    }
  }, {
    key: 'getTweenAnimConfig',
    value: function getTweenAnimConfig(data, num, enterOrLeave) {
      var _this3 = this;

      if (Array.isArray(data)) {
        return data.map(function (item) {
          return _this3.getTweenSingleConfig(item, num, enterOrLeave);
        });
      }
      return this.getTweenSingleConfig(data, num, enterOrLeave);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          component = _props.component,
          componentProps = _props.componentProps,
          interval = _props.interval,
          duration = _props.duration,
          delay = _props.delay,
          type = _props.type,
          animConfig = _props.animConfig,
          ease = _props.ease,
          leaveReverse = _props.leaveReverse,
          animatingClassName = _props.animatingClassName,
          forcedReplay = _props.forcedReplay,
          onEnd = _props.onEnd,
          appear = _props.appear,
          tagProps = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['component', 'componentProps', 'interval', 'duration', 'delay', 'type', 'animConfig', 'ease', 'leaveReverse', 'animatingClassName', 'forcedReplay', 'onEnd', 'appear']);

      if (__WEBPACK_IMPORTED_MODULE_11__utils__["f" /* windowIsUndefined */]) {
        return Object(__WEBPACK_IMPORTED_MODULE_7_react__["createElement"])(component, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, tagProps, componentProps), this.props.children);
      }
      var childrenToRender = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["d" /* toArrayChildren */])(this.state.children).map(this.getChildrenToRender);
      var props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, tagProps, this.props.componentProps, {
        ref: function ref(c) {
          _this4.currentRef = c;
        }
      });
      return Object(__WEBPACK_IMPORTED_MODULE_7_react__["createElement"])(this.props.component, props, childrenToRender);
    }
  }]);

  return QueueAnim;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

QueueAnim.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.any,
  component: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.any,
  componentProps: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object,
  interval: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.any,
  duration: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.any,
  delay: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.any,
  type: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.any,
  animConfig: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.any,
  ease: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.any,
  leaveReverse: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,
  forcedReplay: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,
  animatingClassName: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.array,
  onEnd: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  appear: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool
};
QueueAnim.defaultProps = {
  component: 'div',
  componentProps: {},
  interval: 100,
  duration: 450,
  delay: 0,
  type: 'right',
  animConfig: null,
  ease: 'easeOutQuart',
  leaveReverse: false,
  forcedReplay: false,
  animatingClassName: ['queue-anim-entering', 'queue-anim-leaving'],
  onEnd: noop,
  appear: true
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.getTweenSingleConfig = function (data, num, enterOrLeave) {
    var obj = {};
    Object.keys(data).forEach(function (key) {
      if (Array.isArray(data[key])) {
        obj[key] = data[key][num];
      } else if (!enterOrLeave && !num || enterOrLeave && num) {
        obj[key] = data[key];
      }
    });
    return obj;
  };

  this.getTweenData = function (key, i, type) {
    var props = _this5.props;
    var enterOrLeave = type === 'enter' ? 0 : 1;
    var start = type === 'enter' ? 1 : 0;
    var end = type === 'enter' ? 0 : 1;
    var animate = _this5.getAnimData(props, key, i, enterOrLeave, end);
    var startAnim = type === 'enter' && (props.forcedReplay || !_this5.childrenShow[key]) ? _this5.getAnimData(props, key, i, enterOrLeave, start) : null;
    var ease = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* transformArguments */])(props.ease, key, i)[enterOrLeave];
    var duration = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* transformArguments */])(props.duration, key, i)[enterOrLeave];
    if (Array.isArray(ease)) {
      ease = ease.map(function (num) {
        return num * 100;
      });
      ease = __WEBPACK_IMPORTED_MODULE_9_rc_tween_one__["b" /* default */].easing.path('M0,100C' + ease[0] + ',' + (100 - ease[1]) + ',' + ease[2] + ',' + (100 - ease[3]) + ',100,0', { lengthPixel: duration / 16.6667 });
    }
    return { startAnim: startAnim, animate: animate, ease: ease, duration: duration, isArray: Array.isArray(animate) };
  };

  this.getTweenSingleData = function (startAnim, animate, ease, duration, delay, onStart, onComplete) {
    var startLength = Object.keys(startAnim || {}).length;
    var animation = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
      onStart: onStart,
      onComplete: onComplete,
      duration: duration,
      delay: delay,
      ease: ease
    }, animate);
    var startAnimate = startLength ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ duration: 0 }, startAnim) : null;
    return { animation: animation, startAnimate: startAnimate };
  };

  this.getTweenEnterOrLeaveData = function (key, i, delay, type) {
    var animateData = _this5.getTweenData(key, i, type);
    var startAnim = animateData.startAnim;
    var animate = animateData.animate;
    var onStart = (type === 'enter' ? _this5.enterBegin : _this5.leaveBegin).bind(_this5, key);
    var onComplete = (type === 'enter' ? _this5.enterComplete : _this5.leaveComplete).bind(_this5, key);
    if (animateData.isArray) {
      var length = animate.length - 1;
      var animation = [];
      var startArray = [];
      animate.forEach(function (leave, ii) {
        var start = startAnim && startAnim[ii];
        var animObj = _this5.getTweenSingleData(start, leave, animateData.ease, animateData.duration / length, !ii ? delay : 0, !ii ? onStart : null, ii === length ? onComplete : null);
        animation.push(animObj.animation);
        if (animObj.startAnimate) {
          startArray.push(animObj.startAnimate);
        }
      });
      return startArray.concat(animation);
    }
    animateData = _this5.getTweenSingleData(startAnim, animate, animateData.ease, animateData.duration, delay, onStart, onComplete);
    return [animateData.startAnimate, animateData.animation].filter(function (item) {
      return item;
    });
  };

  this.getAnimData = function (props, key, i, enterOrLeave, startOrEnd) {
    /**
     * transformArguments 第一个为 enter, 第二个为 leave；
     * getTweenAnimConfig or getTweenType 第一个为到达的位置， 第二个为开始的位置。
     * 用 tween-one 的数组来实现老的动画逻辑。。。
     */
    return props.animConfig ? _this5.getTweenAnimConfig(Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* transformArguments */])(props.animConfig, key, i)[enterOrLeave], startOrEnd, enterOrLeave) : _this5.getTweenType(Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* transformArguments */])(props.type, key, i)[enterOrLeave], startOrEnd);
  };

  this.getChildrenToRender = function (child) {
    var _props2 = _this5.props,
        forcedReplay = _props2.forcedReplay,
        leaveReverse = _props2.leaveReverse,
        delay = _props2.delay,
        interval = _props2.interval,
        children = _props2.children;

    if (!child || !child.key) {
      return child;
    }
    var key = child.key;
    if (!_this5.state.childrenShow[key]) {
      return null;
    }
    var i = _this5.keysToLeave.indexOf(key);
    var animation = void 0;
    var isFunc = typeof child.type === 'function';
    var forcedJudg = isFunc ? {} : null;
    if (isFunc) {
      Object.keys(child.type).forEach(function (name) {
        if (typeDefault.indexOf(name) === -1) {
          forcedJudg[name] = child.type[name];
        }
      });
    }
    var ref = function ref() {
      delete _this5.childRefs[key];
    };
    // 处理出场
    if (i >= 0) {
      if (_this5.leaveUnfinishedChild.indexOf(key) >= 0) {
        return _this5.saveTweenOneTag[key];
      }
      var $interval = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* transformArguments */])(interval, key, i)[1];
      var $delay = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* transformArguments */])(delay, key, i)[1];
      // 减掉 leaveUnfinishedChild 里的个数，因为 leaveUnfinishedChild 是旧的出场，不应该计录在队列里。
      var order = (leaveReverse ? _this5.keysToLeave.length - i - 1 : i) - _this5.leaveUnfinishedChild.length;
      $delay = $interval * order + $delay;
      animation = _this5.getTweenEnterOrLeaveData(key, i, $delay, 'leave');
    } else {
      // 处理进场;
      i = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["d" /* toArrayChildren */])(children).findIndex(function (c) {
        return c && c.key === key;
      });
      ref = function ref(c) {
        _this5.childRefs[key] = c && c.currentRef ? c.currentRef : c;
      };
      // appear=false 时，设定 childrenShow 和 tweenToEnter 都为 true, 这里不渲染 animation;
      if (_this5.tweenToEnter[key] && !forcedReplay) {
        // 如果是已进入的，将直接返回标签。。
        return Object(__WEBPACK_IMPORTED_MODULE_7_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_9_rc_tween_one__["b" /* default */], {
          key: key,
          component: child.type,
          forcedJudg: forcedJudg,
          componentProps: child.props,
          ref: ref
        });
      } else if (!_this5.tweenToEnter[key]) {
        animation = _this5.enterAnimation[key] || _this5.getTweenEnterOrLeaveData(key, i, 0, 'enter');
        _this5.enterAnimation[key] = animation;
      }
    }
    var paused = _this5.keysToEnterPaused[key] && _this5.keysToLeave.indexOf(key) === -1;
    animation = paused ? null : animation;
    var tag = Object(__WEBPACK_IMPORTED_MODULE_7_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_9_rc_tween_one__["b" /* default */], {
      key: key,
      component: child.type,
      forcedJudg: forcedJudg,
      componentProps: child.props,
      animation: animation,
      ref: ref
    });
    _this5.saveTweenOneTag[key] = tag;
    return tag;
  };

  this.performEnter = function (key, i) {
    var interval = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* transformArguments */])(_this5.props.interval, key, i)[0];
    var delay = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* transformArguments */])(_this5.props.delay, key, i)[0];
    _this5.placeholderTimeoutIds[key] = __WEBPACK_IMPORTED_MODULE_9_rc_tween_one__["c" /* ticker */].timeout(_this5.performEnterBegin.bind(_this5, key), interval * i + delay);
    if (_this5.keysToEnter.indexOf(key) >= 0) {
      _this5.keysToEnter.splice(_this5.keysToEnter.indexOf(key), 1);
    }
  };

  this.performEnterBegin = function (key) {
    var childrenShow = _this5.state.childrenShow;
    childrenShow[key] = true;
    delete _this5.keysToEnterPaused[key];
    __WEBPACK_IMPORTED_MODULE_9_rc_tween_one__["c" /* ticker */].clear(_this5.placeholderTimeoutIds[key]);
    delete _this5.placeholderTimeoutIds[key];
    _this5.setState({ childrenShow: childrenShow });
  };

  this.performLeave = function (key) {
    __WEBPACK_IMPORTED_MODULE_9_rc_tween_one__["c" /* ticker */].clear(_this5.placeholderTimeoutIds[key]);
    delete _this5.placeholderTimeoutIds[key];
  };

  this.enterBegin = function (key, e) {
    var elem = e.target;
    var animatingClassName = _this5.props.animatingClassName;
    elem.className = elem.className.replace(animatingClassName[1], '');
    if (elem.className.indexOf(animatingClassName[0]) === -1) {
      elem.className = (elem.className + ' ' + animatingClassName[0]).trim();
    }
    _this5.childrenShow[key] = true;
  };

  this.enterComplete = function (key, e) {
    if (_this5.keysToEnterPaused[key] || _this5.keysToLeave.indexOf(key) >= 0) {
      return;
    }
    var elem = e.target;
    elem.className = elem.className.replace(_this5.props.animatingClassName[0], '').trim();
    _this5.tweenToEnter[key] = true;
    delete _this5.enterAnimation[key];
    _this5.props.onEnd({ key: key, type: 'enter', target: elem });
  };

  this.leaveBegin = function (key, e) {
    var elem = e.target;
    var animatingClassName = _this5.props.animatingClassName;
    elem.className = elem.className.replace(animatingClassName[0], '');
    if (elem.className.indexOf(animatingClassName[1]) === -1) {
      elem.className = (elem.className + ' ' + animatingClassName[1]).trim();
    }
    delete _this5.tweenToEnter[key];
  };

  this.leaveComplete = function (key, e) {
    // 切换时同时触发 onComplete。 手动跳出。。。
    if (Object(__WEBPACK_IMPORTED_MODULE_11__utils__["d" /* toArrayChildren */])(_this5.props.children).findIndex(function (c) {
      return c && c.key === key;
    }) >= 0) {
      return;
    }
    var childrenShow = _this5.state.childrenShow;
    delete childrenShow[key];
    delete _this5.saveTweenOneTag[key];
    delete _this5.childrenShow[key];
    if (_this5.keysToLeave.indexOf(key) >= 0) {
      _this5.keysToLeave.splice(_this5.keysToLeave.indexOf(key), 1);
    }
    var needLeave = _this5.keysToLeave.some(function (c) {
      return childrenShow[c];
    });
    if (!needLeave) {
      var currentChildren = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["d" /* toArrayChildren */])(Object(__WEBPACK_IMPORTED_MODULE_11__utils__["b" /* getChildrenFromProps */])(_this5.props));
      _this5.setState({
        children: currentChildren,
        childrenShow: childrenShow
      });
    }
    var elem = e.target;
    elem.className = elem.className.replace(_this5.props.animatingClassName[1], '').trim();
    _this5.props.onEnd({ key: key, type: 'leave', target: elem });
  };
};

QueueAnim.isQueueAnim = true;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_10_react_lifecycles_compat__["polyfill"])(QueueAnim));

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return windowIsUndefined; });
/* harmony export (immutable) */ __webpack_exports__["d"] = toArrayChildren;
/* harmony export (immutable) */ __webpack_exports__["a"] = findChildInChildrenByKey;
/* harmony export (immutable) */ __webpack_exports__["c"] = mergeChildren;
/* harmony export (immutable) */ __webpack_exports__["e"] = transformArguments;
/* harmony export (immutable) */ __webpack_exports__["b"] = getChildrenFromProps;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* eslint no-prototype-builtins: 0 */


var windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);

function toArrayChildren(children) {
  var ret = [];
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (c) {
      if (ret || !c) {
        return;
      }
      if (c.key === key) {
        ret = c;
      }
    });
  }
  return ret;
}

function mergeChildren(prev, next) {
  var ret = [];
  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  var followChildrenKey = void 0;
  prev.forEach(function (c) {
    if (!c) {
      return;
    }
    if (findChildInChildrenByKey(next, c.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[c.key] = pendingChildren;
        pendingChildren = [];
      }
      followChildrenKey = c.key;
    } else if (c.key) {
      pendingChildren.push(c);
    }
  });
  if (!followChildrenKey) {
    ret = ret.concat(pendingChildren);
  }
  next.forEach(function (c) {
    if (!c) {
      return;
    }
    if (nextChildrenPending.hasOwnProperty(c.key)) {
      ret = ret.concat(nextChildrenPending[c.key]);
    }
    ret.push(c);
    if (c.key === followChildrenKey) {
      ret = ret.concat(pendingChildren);
    }
  });

  return ret;
}

function transformArguments(arg, key, i) {
  var result = void 0;
  if (typeof arg === 'function') {
    result = arg({
      key: key,
      index: i
    });
  } else {
    result = arg;
  }
  if (Array.isArray(result)) {
    if (result.length === 2) {
      return result;
    }
    return [result[0], result[0]];
  }
  return [result, result];
}

function getChildrenFromProps(props) {
  return props && props.children;
}

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  left: {
    opacity: [1, 0],
    translateX: [0, -30]
  },
  top: {
    opacity: [1, 0],
    translateY: [0, -30]
  },
  right: {
    opacity: [1, 0],
    translateX: [0, 30]
  },
  bottom: {
    opacity: [1, 0],
    translateY: [0, 30]
  },
  alpha: {
    opacity: [1, 0]
  },
  scale: {
    opacity: [1, 0],
    scale: [1, 0]
  },
  scaleBig: {
    opacity: [1, 0],
    scale: [1, 2]
  },
  scaleX: {
    opacity: [1, 0],
    scaleX: [1, 0]
  },
  scaleY: {
    opacity: [1, 0],
    scaleY: [1, 0]
  }
});

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(111);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ })

},[499]);
//# sourceMappingURL=group.js.map