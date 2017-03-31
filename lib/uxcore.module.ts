import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HelloWorld} from "./helloWorld.component";

@NgModule({
  imports: [CommonModule],
  declarations: [HelloWorld],
  exports: [HelloWorld]
})
export class UxCoreModule {}
