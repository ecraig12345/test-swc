// valid for swc, node, TS+esModuleInterop
import DefaultObservable from 'zen-observable';
// valid for TS without esModuleInterop
import * as StarObservable from 'zen-observable';

// succeeds
console.log('import default', new DefaultObservable(() => {}),'');
console.log();

// fails at runtime (namespace object is not a constructor)
console.log('import star', new StarObservable(() => {}));
