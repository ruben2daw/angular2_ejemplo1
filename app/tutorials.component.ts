import { Component } from '@angular/core';
@Component({
  selector: 'my-tutorials',
  template: '<h1> Actualizo esto Tutorial de A2</h1>' +
  '<h4 [class.myClass]="applyClass">Este texto es h4 con myclass</h4>'

/*
  styles:[`h1{color:blueviolet}.myClass{color:green}`],
*/

})

export class TutorialsComponent {

    public applyClass: boolean=true;
  public applyBlue: boolean=true;

  // constructor() {
  //   this.applyClass = false;
  // }
}
