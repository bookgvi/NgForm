import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-phone-array-form',
  templateUrl: './phone-array-form.component.html',
  styleUrls: ['./phone-array-form.component.scss']
})
export class PhoneArrayFormComponent implements OnInit {
  public phoneModel: FormGroup = new FormGroup({
    phoneArray: new FormArray([
      new FormControl(),
      new FormControl()
    ])
  });
  constructor() {
  }

  ngOnInit() {
  }

  public addField(): void {
    // @ts-ignore
    this.phoneModel.get('phoneArray').controls.push(new FormControl());
  }
}
