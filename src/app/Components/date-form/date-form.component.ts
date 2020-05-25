import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.scss']
})
export class DateFormComponent implements OnInit {
  public fromInput: string;
  public toInput: string;

  public formModel: FormGroup = new FormGroup({
    formGroupName: new FormGroup({
      from: new FormControl(''),
      to: new FormControl('')
    })
  })

  constructor() {
  }

  ngOnInit() {
  }

}
