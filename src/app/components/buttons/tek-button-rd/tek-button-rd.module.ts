import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TekButtonRdComponent } from './tek-button-rd.component';
import { TekButtonRdService } from './tek-button-rd.service';

@NgModule({
  declarations: [TekButtonRdComponent],
  imports: [
    CommonModule
  ],
  exports:[TekButtonRdComponent],
  providers:[TekButtonRdService]
})
export class TekButtonRdModule { }
