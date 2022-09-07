import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesRoutingModule } from './publicaciones-routing.module';
import { PublicacionesComponent } from './publicaciones.component';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { EditarPublicacionComponent } from './editar-publicacion/editar-publicacion.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PublicacionesComponent,
    CrearPublicacionComponent,
    EditarPublicacionComponent
  ],
  imports: [
    CommonModule,
    PublicacionesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PublicacionesModule { }
