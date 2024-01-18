"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _default = require("./default");
describe('getDefaultObservable', ()=>{
    it('works', ()=>{
        expect((0, _default.getDefaultObservable)()).toBeTruthy();
    });
});
