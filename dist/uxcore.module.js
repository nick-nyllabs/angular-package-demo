"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var helloWorld_component_1 = require("./helloWorld.component");
var UxCoreModule = (function () {
    function UxCoreModule() {
    }
    return UxCoreModule;
}());
UxCoreModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [helloWorld_component_1.HelloWorld],
        exports: [helloWorld_component_1.HelloWorld]
    })
], UxCoreModule);
exports.UxCoreModule = UxCoreModule;
//# sourceMappingURL=uxcore.module.js.map