import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

 @Input()  clas =  'bg-light'
 @Output() Text = new EventEmitter<any>();
  constructor(
    private router:Router,
    private activerouter:ActivatedRoute,
  ) { }

  showbar = false;

  ngOnInit(): void {

 

   this.router.events.subscribe(events=>{
   
     if (events instanceof NavigationEnd) { 
     
       if (events.url == '/') {
         this.clas = 'bg-dark'
       }else{
        this.clas = 'bg-light'
       }
     }
   })

  }


  typing(val:any){
    this.Text.emit(val)
  }

  showbal(){
   this.showbar = !this.showbar
  }

}
