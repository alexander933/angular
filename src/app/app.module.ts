import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormularioComponent } from './Formulario/formulario.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    // ... tus componentes
    FormularioComponent,
    AppComponent,
    ContactUsComponent,
    AboutUsComponent,
    
  ],
  imports: [
    FormsModule, // Agrega FormsModule aquí
    BrowserModule,
    //RouterModule.forRoot(routes),      
  ],
   
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


const routes: Routes = [
  // Otras rutas existentes
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  // Otras rutas existentes
];
