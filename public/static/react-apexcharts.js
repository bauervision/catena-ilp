"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),_apexcharts=require("apexcharts"),_apexcharts2=_interopRequireDefault(_apexcharts),_react=require("react"),_react2=_interopRequireDefault(_react),_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _objectWithoutProperties(e,t){var r,n={};for(r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(e)return!t||"object"!=typeof t&&"function"!=typeof t?e:t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}window.ApexCharts=_apexcharts2.default;var Charts=function(){function r(e){_classCallCheck(this,r);var t=_possibleConstructorReturn(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return _react2.default.createRef?t.chartRef=_react2.default.createRef():t.setRef=function(e){return t.chartRef=e},t.chart=null,t}return _inherits(r,_react.Component),_createClass(r,[{key:"render",value:function(){var e=_objectWithoutProperties(this.props,[]);return _react2.default.createElement("div",_extends({ref:_react2.default.createRef?this.chartRef:this.setRef},e))}},{key:"componentDidMount",value:function(){var e=_react2.default.createRef?this.chartRef.current:this.chartRef;this.chart=new _apexcharts2.default(e,this.getConfig()),this.chart.render()}},{key:"getConfig",value:function(){var e=this.props,t=e.type,r=e.height,n=e.width,o=e.series,e=e.options;return this.extend(e,{chart:{type:t,height:r,width:n},series:o})}},{key:"isObject",value:function(e){return e&&"object"===(void 0===e?"undefined":_typeof(e))&&!Array.isArray(e)&&null!=e}},{key:"extend",value:function(t,r){var n=this,o=("function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),r=1;r<arguments.length;r++){var n=arguments[r];if(null!=n)for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])}return t}),Object.assign({},t));return this.isObject(t)&&this.isObject(r)&&Object.keys(r).forEach(function(e){n.isObject(r[e])&&e in t?o[e]=n.extend(t[e],r[e]):Object.assign(o,_defineProperty({},e,r[e]))}),o}},{key:"componentDidUpdate",value:function(e){if(!this.chart)return null;var t=this.props,r=t.options,n=t.series,o=t.height,t=t.width,i=JSON.stringify(e.options),a=JSON.stringify(e.series),r=JSON.stringify(r),s=JSON.stringify(n);i===r&&a===s&&o===e.height&&t===e.width||(a!==s&&i===r&&o===e.height&&t===e.width?this.chart.updateSeries(n):this.chart.updateOptions(this.getConfig()))}},{key:"componentWillUnmount",value:function(){this.chart&&"function"==typeof this.chart.destroy&&this.chart.destroy()}}]),r}();(exports.default=Charts).propTypes={type:_propTypes2.default.string.isRequired,width:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.number]),height:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.number]),series:_propTypes2.default.array.isRequired,options:_propTypes2.default.object.isRequired},Charts.defaultProps={type:"line",width:"100%",height:"auto"};