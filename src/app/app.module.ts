import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DateFormModule } from './Modules/dateForm.module';
import { PhoneArrayFormModule } from './Modules/poneArrayForm.module';
import { FormValidationModule } from './Modules/formValidation.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DateFormModule,
    PhoneArrayFormModule,
    FormValidationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
