import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesRoutingModule } from './publicaciones-routing.module';
import { PublicacionesComponent } from './publicaciones.component';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { EditarPublicacionComponent } from './editar-publicacion/editar-publicacion.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { FileUploadModule } from "primeng/fileupload";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';

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
    FormsModule, 
    MaterialModule,
    FileUploadModule,
    MessagesModule
  ]
})
export class PublicacionesModule { }
