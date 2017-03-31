import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HelloWorld} from "./helloWorld.component";
import {MellowWorldComponent} from "./mellowWorld/mellowWorld.component";
import {YellowWorld} from "./yellowWorld.component";

@NgModule({
  imports: [CommonModule],
  declarations: [HelloWorld, MellowWorldComponent, YellowWorld],
  exports: [HelloWorld, MellowWorldComponent,YellowWorld]
})
export class UxCoreModule {}
