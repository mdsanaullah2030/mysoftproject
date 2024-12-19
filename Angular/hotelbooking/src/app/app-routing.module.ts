import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';






import { AboutComponent } from './style/about/about.component';
import { HomeComponent } from './style/home/home.component';








import { GetComponent } from './registration/get/get.component';
import { SaveComponent } from './registration/save/save.component';
import { UpdateComponent } from './registration/update/update.component';








const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },


  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'location', component: GetComponent},
  { path: 'save', component: SaveComponent },
  { path: 'update/:id', component: UpdateComponent },

 


  



  
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

