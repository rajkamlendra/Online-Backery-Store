import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { RecipeStartComponent } from './recipe-list/recipe-start/recipe-start.component';
import { AppRoutingModule } from './app-routing.model';
import { ProductServices } from './product.service';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CartServices } from './cart.service';
import { NewOrderServices } from './neworder.service';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { MycartComponent } from './mycart/mycart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    ProductDetailsComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    RecipeStartComponent,
    CartComponent,
    HomepageComponent,
    SignupComponent,
    MycartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ProductServices,CartServices,NewOrderServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
