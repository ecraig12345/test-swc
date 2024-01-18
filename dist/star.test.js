"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _star = require("./star");
describe('getStarObservable', ()=>{
    it('works', ()=>{
        expect((0, _star.getStarObservable)()).toBeTruthy();
    });
});
