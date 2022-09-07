import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { EditarPublicacionComponent } from './editar-publicacion/editar-publicacion.component';
import { PublicacionesComponent } from './publicaciones.component';

const routes: Routes = [
  {
    path: '',
    component: PublicacionesComponent
  },
  {
    path: 'crearPublicacion',
    component: CrearPublicacionComponent
  },
  {
    path: 'editarPublicacion/:id',
    component: EditarPublicacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicacionesRoutingModule { }
