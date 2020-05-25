import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PhoneArrayFormComponent } from '../Components/phone-array-form/phone-array-form.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [PhoneArrayFormComponent],
  exports: [
    PhoneArrayFormComponent
  ]
})
export class PhoneArrayFormModule {}
