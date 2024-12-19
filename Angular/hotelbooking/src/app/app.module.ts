import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';






import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { HomeComponent } from './style/home/home.component';
import { AboutComponent } from './style/about/about.component';






import { NgxPrintModule } from 'ngx-print';
import { GetComponent } from './registration/get/get.component';
import { SaveComponent } from './registration/save/save.component';
import { UpdateComponent } from './registration/update/update.component';


@NgModule({
  declarations: [
    AppComponent,
 
    
   
  

   
   
   
    HomeComponent,
    AboutComponent,
    GetComponent,
    SaveComponent,
    UpdateComponent,
  
  
 
      
      
       
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxPrintModule,
  ],
  providers: [
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    
    library.addIconPacks(fas);
  }
}
