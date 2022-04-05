import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  constructor(
    private http:HttpClient
  ) { }

  GetSlide(){
    return this.http.get('assets/DB/Slider.json')
  }

}
