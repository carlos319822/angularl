import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// AQUI SE IMPORTAN LAS RUTAS
import { APP_ROUTING } from './app.routes';


// AQUI SE IMPORTAN LOS COMPONENTS

import { AppComponent } from './app.component';
import { HomeComponent } from './components/utilidades/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { SharedComponent } from './components/shared/shared.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    SharedComponent,
    FooterComponent
  ],

  //AQUI IMPORTO LOS MODULOS
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
