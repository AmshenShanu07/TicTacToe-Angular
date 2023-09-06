import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {
  @Input() text: string;
  @Output() handleClick:EventEmitter<any> = new EventEmitter();

  onHandleClick () {
    this.handleClick.emit();
  }

  getBtnColor():string {
    if(!this.text) return '';

    return this.text==='X'?'btn-x':'btn-o';
  }

}