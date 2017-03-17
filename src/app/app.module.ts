import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StretchyModule} from 'angular2-stretchy';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StretchyModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
