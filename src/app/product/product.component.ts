import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductServiceService} from '../Service/product-service.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  Product:any[] = [];

  constructor(
    private Activerouter:ActivatedRoute,
    private ProdServ:ProductServiceService
  ) {

      this.ProdServ.GetPosts().subscribe((response:any)=>{
      this.Product  =  response 
    });

   }

  ngOnInit(): void {

      this.Activerouter.params.subscribe(el=>{
        if(el.params != undefined){
           let params = JSON.parse(el.params);
        }
  
      })

  }

 
  

  getprice(weight:any, index:any, indexweigh:any){
    this.Product[index].active_weigh = indexweigh ;

    if (this.Product[index].discount_price !== 0) {
      return  this.Product[index].discount_price = this.Product[index].discofix_price * weight;
    }

   return  this.Product[index].price = this.Product[index].fix_price * weight;
  }

  getdate(){
    this.ProdServ.GetPosts().subscribe((response)=>{
      console.log(response)
    })
  }

}
