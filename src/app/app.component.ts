import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   })
export class AppComponent {
  componentCounterValue: number;
  title = 'My Counter';
  constructor(){
    this.componentCounterValue = 5;
  }
  updateValue(value:number){
    this.componentCounterValue=value;
  }
  
}
