import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template:`<button>{{value}}</button>`,
  // templateUrl: './square.component.html',
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {
  @Input() value!: 'X' | 'O';
  //@Input() value: 'X' | 'O';
}
