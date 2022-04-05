import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetalsComponent } from './detals/detals.component';
import { ProductComponent } from './product/product.component';
import { NonfoundComponent } from './nonfound/nonfound.component';
import { CommentsComponent } from './comments/comments.component';
import { AuthGuard } from './auth.guard'
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path:'pages/cotact',
    component:ContactComponent
  },

  {
    path:'profile',
    component:HomeComponent,
    canActivate:[AuthGuard]
  },


  {
    path:'product',
    component:ProductComponent
  },

  {
    path:'detals/:id',
    component:DetalsComponent,
    children:[
      {
        path:'comments',
        component:CommentsComponent
      }
    ]
  },

  {
    path:'',
    component:WelcomeComponent
  },

  {
    path:'**',
    component:NonfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
