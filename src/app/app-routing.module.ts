import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinComponent } from './unisciti/join/join.component';
import {CarteComponent} from './carte/carte.component';
import {HomeComponent} from './Home/home/home.component';

const routes: Routes = [

  {path:'unisciti',component:JoinComponent},
  {path:'carte',component:CarteComponent},
  {path:'',component:HomeComponent}


];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
