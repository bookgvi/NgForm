import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DateFormModule } from './Modules/dateForm.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DateFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
