import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DateFormComponent } from '../Components/date-form/date-form.component';
import { GetValueDirective } from '../Components/date-form/Directives/get-value.directive';

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  declarations: [
    DateFormComponent,
    GetValueDirective
  ],
  exports: [
    DateFormComponent,
    GetValueDirective
  ]
})
export class DateFormModule {}
