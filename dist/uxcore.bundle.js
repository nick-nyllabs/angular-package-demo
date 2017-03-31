(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.uxcore = global.uxcore || {}),global._angular_core,global._angular_common));
}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HelloWorld = (function () {
    function HelloWorld() {
    }
    return HelloWorld;
}());
HelloWorld = __decorate$1([
    _angular_core.Component({
        selector: 'hello-world',
        template: "\n    <div>\n        <h1>JELLO WORLD</h1>\n        <p>We did a compoment</p>\n    </div>\n    "
    })
], HelloWorld);

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.UxCoreModule = (function () {
    function UxCoreModule() {
    }
    return UxCoreModule;
}());
exports.UxCoreModule = __decorate([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule],
        declarations: [HelloWorld],
        exports: [HelloWorld]
    })
], exports.UxCoreModule);

Object.defineProperty(exports, '__esModule', { value: true });

})));
