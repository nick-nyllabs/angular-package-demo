import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HelloWorld} from "./helloWorld.component";
import {MellowWorldComponent} from "./mellowWorld/mellowWorld.component";

@NgModule({
  imports: [CommonModule],
  declarations: [HelloWorld, MellowWorldComponent],
  exports: [HelloWorld]
})
export class UxCoreModule {}
