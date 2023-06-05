import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteComponent } from './carte/carte.component';
import { NavBarComponent } from './Nav/nav-bar/nav-bar.component';
import { HomeComponent } from './Home/home/home.component';
import { JoinComponent } from './unisciti/join/join.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    CarteComponent,
    HomeComponent,
    JoinComponent,
    NavBarComponent,
    HomeComponent,
    HomeComponent,
    CarteComponent,
    JoinComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
