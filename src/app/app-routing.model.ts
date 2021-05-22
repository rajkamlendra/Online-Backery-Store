import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent} from './homepage/homepage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CartComponent } from './cart/cart.component';

const appRoutes:Routes =
[
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:'home',component:HomepageComponent},
    {path:'product-detail/:id',component:ProductDetailsComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegistrationComponent},
    {path:'mycart',component:CartComponent}



];


@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports :[RouterModule]
})

export class AppRoutingModule{

}
