import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TekInputModule } from './components/tek-input/tek-input.module';
import { TekButtonRdModule } from './components/buttons/tek-button-rd/tek-button-rd.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TekInputModule,
    TekButtonRdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
