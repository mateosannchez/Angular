import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './Componentes/section/section.component';
import { ProductosComponent } from './Componentes/section/productos/productos.component';
import { AcercaDeComponent } from './Componentes/section/acerca-de/acerca-de.component';
import { RecetasComponent } from './Componentes/section/recetas/recetas.component';
import { EncontrarComponent } from './Componentes/section/encontrar/encontrar.component';
import { ContactoComponent } from './Componentes/section/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: SectionComponent },
  { path: 'home', component: SectionComponent  },
  { path: 'productos', component: ProductosComponent  },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'recetas', component: RecetasComponent  },
  { path: 'encontrarnos', component: EncontrarComponent },
  { path: 'contacto', component: ContactoComponent },
];


export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
