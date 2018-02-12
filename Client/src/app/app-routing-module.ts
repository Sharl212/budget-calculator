import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent} from './component/home/home.component';
import {AboutComponent} from './component/about/about.component';

const appRoutes: Routes = [
  { path: '',
   component: HomeComponent   // homepage page
  },
  {
    path: 'about',
    component: AboutComponent // about page
  },
  { path: '**', component: HomeComponent } // redirect to homepage if the route doesn't exist.
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class appRoutingModule { }
