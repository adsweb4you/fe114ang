import { Component, OnInit } from '@angular/core';
import   { SwiperOptions } from 'swiper';
import {SlideService} from '../../Service/slide.service'
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  Sliders:any = [];

  constructor(
    private Slide:SlideService
  ) {

    this.Slide.GetSlide().subscribe(slide=>{
      this.Sliders  = slide
    })

   }

  ngOnInit(): void {
  }


  config: SwiperOptions = {
  //  slidesPerView:1,
    spaceBetween: 15,
    navigation: true,
    // pagination: { clickable: true },
    // scrollbar: { draggable: true },
  };
  

}
