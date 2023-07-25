import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { SectionComponent } from './Componentes/section/section.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { ArtistasComponent } from './Componentes/section/artistas/artistas.component';
import { ExhibicionComponent } from './Componentes/section/exhibicion/exhibicion.component';
import { ColeccionComponent } from './Componentes/section/coleccion/coleccion.component';
import { ShopComponent } from './Componentes/section/shop/shop.component';
import { routing,appRoutingProvider } from './app.routing';
import { NavComponent } from './Componentes/header/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    ArtistasComponent,
    ExhibicionComponent,
    ColeccionComponent,
    ShopComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
