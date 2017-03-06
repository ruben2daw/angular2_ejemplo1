import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styles:[ `h1{color:red}`]
})
export class AppComponent {

 title: string;

 public imgLink="http://lorempixel.com/400/200/";

  constructor(){
    this.title="TITULAZO";
  }

}
