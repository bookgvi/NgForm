import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsService } from '../../Services/validators.service';

@Component({
  selector: 'app-form-validation',
  providers: [ValidatorsService],
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {
  public formModel: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    email: new FormControl('', this.validatorSVC.email),
    passwordGroup: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      rePassword: new FormControl('', Validators.required)
    },  this.validatorSVC.twoEqualFields)
  });

  public check: {} = {
    login: true,
    email: true,
    password: true
  };

  constructor(private validatorSVC: ValidatorsService) { }

  ngOnInit() {
  }

  public hasErrors(checkField: string, validator: string, field: any): boolean {
    return this.check[checkField] || !this.formModel.hasError(validator, field);
  }

  public onSubmit(): void {
    const keys = Object.keys(this.check);
    keys.forEach(key => {
      this.check[key] = false;
    });
    console.log(this.formModel);
  }
}
