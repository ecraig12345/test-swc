// valid for swc, node, TS+esModuleInterop
import DefaultObservable from 'zen-observable';
// valid for TS without esModuleInterop
import * as StarObservable from 'zen-observable';
// TS proprietary syntax, not supported by swc
// import RequireObservable = require('zen-observable');

// succeeds
console.log('import default', new DefaultObservable(() => {}),'');
console.log();

try {
  // fails at runtime (namespace object is not a constructor)
  console.log('import star', new StarObservable(() => {}));
} catch (e) {
  console.error('import star observable failed', e);
}

// try {
//   // fails at runtime (namespace object is not a constructor)
//   console.log('require', new RequireObservable(() => {}));
// } catch (e) {
//   console.error('require observable failed', e);
// }