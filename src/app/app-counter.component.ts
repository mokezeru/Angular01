import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-counter',
  template: ` <button (click) = "decrease()" > - </button> 
            {{counterValue}}
            <button (click) = "increase()" > + </button>
  `,
  styles: []
})
export class AppCounterComponent implements OnInit {
  //counter: number;
  @Input () counterValue: number;
  @Output () counterChange: EventEmitter<number>;
  newValue:number;
  constructor() { 
    //this.counter=5;
    this.counterChange= new EventEmitter();
  }
  

  increase() {
    
    //this.counterChange.emit(this.counterValue++);
    this.newValue = this.counterValue + 1;
    this.counterChange.emit(this.newValue);
    
    return false;
  }
  decrease() {
    //this.counterChange.emit(this.counterValue--);
    this.newValue = this.counterValue - 1;
    this.counterChange.emit(this.newValue);
    return false;
  }

  ngOnInit() {
  }

}
