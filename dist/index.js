// valid for swc, node, TS+esModuleInterop
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _zenobservable = /*#__PURE__*/ _interop_require_wildcard(require("zen-observable"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
// TS proprietary syntax, not supported by swc
// import RequireObservable = require('zen-observable');
// succeeds
console.log('import default', new _zenobservable.default(()=>{}), '');
console.log();
try {
    // fails at runtime (namespace object is not a constructor)
    console.log('import star', new _zenobservable(()=>{}));
} catch (e) {
    console.error('import star observable failed', e);
} // try {
 //   // fails at runtime (namespace object is not a constructor)
 //   console.log('require', new RequireObservable(() => {}));
 // } catch (e) {
 //   console.error('require observable failed', e);
 // }
