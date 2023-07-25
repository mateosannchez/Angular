import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistasComponent } from './Componentes/section/artistas/artistas.component';
import { ColeccionComponent } from './Componentes/section/coleccion/coleccion.component';
import { ExhibicionComponent } from './Componentes/section/exhibicion/exhibicion.component';
import { ShopComponent } from './Componentes/section/shop/shop.component';
import { SectionComponent } from './Componentes/section/section.component';


const routes: Routes = [
  { path: '', component: SectionComponent },
  { path: 'home', component: SectionComponent  },
  { path: 'artistas', component:ArtistasComponent  },
  { path: 'coleccion', component: ColeccionComponent },
  { path: 'exhibicion', component:ExhibicionComponent  },
  { path: 'shop', component: ShopComponent },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppModule { }

export const appRoutingProvider: any[] = [];
// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
