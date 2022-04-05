import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detals',
  templateUrl: './detals.component.html',
  styleUrls: ['./detals.component.scss']
})
export class DetalsComponent implements OnInit {
  Prod_id:any;
  constructor(
    private Activerouter:ActivatedRoute,
    private router:Router
  ) { 

this.Prod_id = this.Activerouter.snapshot.params.id;

  }


  Product:any = [
    {
      id:1,
      title:"ბალი",
      price:1.45,
      fix_price:1.45,
      weight:[2,5,10,20,50],
      active_weigh:null,
      discount_price:1.20,
      discofix_price:1.20,
      gift:true,
      imagegal:[
        "assets/img/product/img1.png",
        "assets/img/product/img2.jpg",
        "assets/img/product/img3.jpg",
        "assets/img/product/img4.jpg",
      ],
      poster:0
    },

    {
      id:2,
      title:"ვაშლი",
      price:1.45,
      fix_price:1.45,
      weight:[2,5,10,20,50],
      active_weigh:null,
      discount_price:1.20,
      discofix_price:1.20,
      gift:true,
      imagegal:[
        "assets/img/product/img1.png",
        "assets/img/product/img2.jpg",
        "assets/img/product/img3.jpg",
        "assets/img/product/img4.jpg",
      ],
       poster:1
    },

    {
      id:3,
      title:"ბანანი",
      price:3.50,
      fix_price:3.50,
      weight:[2,1.500,6.300,20,50],
      active_weigh:null,
      discount_price:0,
      discofix_price:0,
      gift:false,
      imagegal:[
        "assets/img/product/img1.png",
        "assets/img/product/img2.jpg",
        "assets/img/product/img3.jpg",
        "assets/img/product/img4.jpg",
      ],
       poster:2
    },
    {
      id:4,
      title:"მსხალი",
      price:1.55,
      fix_price:1.55,
      weight:[2,5,10,20,50],
      active_weigh:null,
      discount_price:1.20,
      discofix_price:1.20,
      gift:true,
      imagegal:[
        "assets/img/product/img1.png",
        "assets/img/product/img2.jpg",
        "assets/img/product/img3.jpg",
        "assets/img/product/img4.jpg",
      ],
      poster:0
    }
  ]

 

  ngOnInit(): void {

  //  this.Activerouter.queryParamMap.subscribe(el=>{
  //     console.log(el)
  //   })

  this.Product  = this.Product.find((el:any)=>{
    return el.id == this.Prod_id
  })
 
  if ( this.Product == undefined) {
    this.router.navigate(['*'])
  }

  }


  goback(){
   this.router.navigate(['product', {
     params:JSON.stringify({title:25465,price:5887})
   }])
  }

}
