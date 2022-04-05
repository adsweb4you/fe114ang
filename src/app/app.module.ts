import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetalsComponent } from './detals/detals.component';
import { NonfoundComponent } from './nonfound/nonfound.component';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { Angular2UsefulSwiperModule } from 'angular2-useful-swiper';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ProductComponent,
    FormsComponent,
    WelcomeComponent,
    ContactComponent,
    DetalsComponent,
    NonfoundComponent,
    CommentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Angular2UsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
