import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TekInputModule } from './components/tek-input/tek-input.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TekInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
