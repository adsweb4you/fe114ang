import { HttpClient , HttpParams ,  HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(
    private http:HttpClient
  ) { }



  GetPosts(){  

    const httpOptions = new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'mytoken'
      })
 

    const params = new HttpParams({fromObject: {
      name:"მოძიებული პარამეტრი",
      price_from:'250',
      price_to:'500'
    }});
    return this.http.get('assets/DB/Post.json', {
      params,
      headers:httpOptions
    },
   
 
    
    )
  }

 

}
