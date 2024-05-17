import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { SectionComponent } from './Componentes/section/section.component';
import { routing,appRoutingProvider } from './app.routing';
import { NavComponent } from './Componentes/header/nav/nav.component';
import { SliderComponent } from './Componentes/section/slider/slider.component';
import { ProductosComponent } from './Componentes/section/productos/productos.component';
import { AcercaDeComponent } from './Componentes/section/acerca-de/acerca-de.component';
import { RecetasComponent } from './Componentes/section/recetas/recetas.component';
import { EncontrarComponent } from './Componentes/section/encontrar/encontrar.component';
import { ContactoComponent } from './Componentes/section/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    NavComponent,
    SliderComponent,
    ProductosComponent,
    AcercaDeComponent,
    RecetasComponent,
    EncontrarComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
