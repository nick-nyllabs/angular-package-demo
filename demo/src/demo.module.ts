import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';
import {HelloWorld} from "../../lib/helloWorld.component";


const NgResizableModule = require('ngresizable').NgResizableModule;


@NgModule({
  imports: [NgResizableModule, BrowserModule, HelloWorld],
  declarations: [DemoComponent],
  bootstrap: [DemoComponent]
})
export class DemoModule {}

