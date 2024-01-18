import Observable from 'zen-observable';

export function getDefaultObservable() {
  return new Observable(() => {});
}
