import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TekInputComponent } from './tek-input.component';
import { TekInputService } from './tek-input.service';

@NgModule({
  declarations: [
    TekInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TekInputComponent
  ],
  providers:[TekInputService]
})
export class TekInputModule { }
