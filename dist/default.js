"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getDefaultObservable", {
    enumerable: true,
    get: function() {
        return getDefaultObservable;
    }
});
const _zenobservable = /*#__PURE__*/ _interop_require_default(require("zen-observable"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function getDefaultObservable() {
    return new _zenobservable.default(()=>{});
}
