import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Municipio } from 'src/app/models/municipio.model';
import { Publicacion } from 'src/app/models/publicacion.model';
import { MunicipioService } from '../services/municipio.service';
import { PublicacionService } from '../services/publicacion.service';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.scss']
})
export class CrearPublicacionComponent implements OnInit {

  @Input("type")
  type: "crear" | "edit" = "crear";
  
  constructor(
    protected publicacionService: PublicacionService,
    protected municipioService: MunicipioService,
    protected route:ActivatedRoute,
    protected router: Router,
    protected fb: FormBuilder,
  ) { }

  municipios! : Municipio[];

  formPublicacion = this.fb.group({
    titulo: [''],
    descripcion: [''],
    imagen: [''],
    precio: [''],
    municipio: [''],
  });

  publicacion!: Publicacion;

  imageSource!: any;

  imagenBinaria!: any;

  ngOnInit(): void {
    this.municipioService.getMunicipios().subscribe(
      data => {
        this.municipios = data;
        console.log(this.municipios);
      }
    )
  }

  guardar(){
    let titulo = this.formPublicacion.controls['titulo'].value;
    let descripcion = this.formPublicacion.controls['descripcion'].value;
    let precio = this.formPublicacion.controls['precio'].value;
    let municipio_id = this.formPublicacion.controls['municipio'].value;
    let usuario_id = 1;
    let imagen = this.imagenBinaria;

    let publicacionDTO = {
      titulo: titulo!,
      descripcion: descripcion!,
      precio: Number(precio),
      municipio_id: Number(municipio_id),
      usuario_id: Number(usuario_id),
      imagen: imagen
    }

    this.publicacionService.savePublicacion(publicacionDTO).subscribe(
      data => {
        this.router.navigate(['/publicaciones']);
      }
    );

  }

  toBlod64(event : any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imagenBinaria = reader.result;
    };
  }


}
