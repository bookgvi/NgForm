import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormValidationComponent } from '../Components/form-validation/form-validation.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [FormValidationComponent],
  exports: [FormValidationComponent]
})
export class FormValidationModule {}
