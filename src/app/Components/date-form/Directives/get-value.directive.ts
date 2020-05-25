import { Directive, EventEmitter, HostBinding, HostListener, Input, Output, SimpleChange } from '@angular/core';

@Directive({
  selector: '[get-value]'
})
export class GetValueDirective {
  @Input('get-value')
  inputEl: string;

  ngOnChanges(change: { [prop: string]: SimpleChange }) {
    console.log(change['inputEl']);
  }

  @Output('get-valueChange')
  changeValue = new EventEmitter();
  @HostListener('input', ['$event.target'])
  update(el: string): void {
    console.log(el['name']);
    this.changeValue.emit(el['value'])
  }

}
