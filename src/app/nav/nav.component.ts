import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

 @Input()  clas =  'bg-light'
 @Output() Text = new EventEmitter<any>();
  constructor() { }

  showbar = false;

  ngOnInit(): void {

 

  }


  typing(val:any){
    this.Text.emit(val)
  }

  showbal(){
   this.showbar = !this.showbar
  }

}
