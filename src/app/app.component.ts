import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // template:`<h1> {{title}} </h1>`,
  // styles:['h1{color:green; text-transform:uppercase}']
  // encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 54;


  myval(ev:any){
    this.title = ev
  }


}

