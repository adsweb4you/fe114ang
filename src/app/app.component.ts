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
  fawcolor = 'green'
 
 style = {
   backgroundColor: this.fawcolor, 
   padding:'25px',
   borderRadius: '25px'
  };

  myval(ev:any){
    this.title = ev
  }

  ifrounded = 'text-center';
  ifpadd = false;

  rounded(event:any){
    let val = event.target.value;
    this.style.borderRadius = val+"px";
    if (val > 55) {
       this.ifpadd = true
    }else{
      this.ifpadd = false
    }
  }

  changeval(vals:any){
   this.fawcolor  = vals;
   this.style.backgroundColor = vals
  }


  mybool = true;
  lang = 'ka'

  swith(vls?:any){
    this.lang = vls 
  }


  Product = [
    {
      img:'assets/img/logo.png',
      title:'ჩიფსი ლეისი',
      cat_name:'სასუსნავი',
      price:5.40,
      disc:5
    },

    {
      img:'assets/img/logo.png',
      title:'ჩიფსი ლეისი ლუქსი' ,
      cat_name:'სასუსნავი',
      price:5.40,
      disc:null,
    }
  ]

}

