import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class ValidatorsService {
  public email(control: FormControl): any {
    const value = control.value || '';
    const valid = value.match(/^\d/);
    return valid ? null : { email: true }
  }

  public twoEqualFields({ value }: FormGroup): { [key: string]: any } {
    const [first, ...rest] = Object.keys(value || {});
    const valid = rest.every(v => value[v] === value[first]);
    return valid ? null : { equal: true };
  }
}
