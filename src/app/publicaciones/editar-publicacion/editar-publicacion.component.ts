import { Component, OnInit } from '@angular/core';
import { PublicacionService } from '../services/publicacion.service';
import { ActivatedRoute, Params, Router, UrlTree } from '@angular/router';
import { Publicacion } from 'src/app/models/publicacion.model';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Municipio } from 'src/app/models/municipio.model';
import { MunicipioService } from '../services/municipio.service';
import { PublicacionDTO } from 'src/app/models/publicacionDTO.model';

@Component({
  selector: 'app-editar-publicacion',
  templateUrl: './editar-publicacion.component.html',
  styleUrls: ['./editar-publicacion.component.scss']
})
export class EditarPublicacionComponent implements OnInit {

  constructor(
    private publicacionService: PublicacionService,
    private municipioService: MunicipioService,
    private route:ActivatedRoute,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private router: Router,
  ) { }

  idPublicacion!: number;

  publicacion!: Publicacion;

  imageSource!: any;

  imagenBinaria!: any;

  municipios! : Municipio[];

  formPublicacion = this.fb.group({
    titulo: [''],
    descripcion: [''],
    imagen: [''],
    precio: [''],
    municipio: [''],
  });

  ngOnInit(): void {
    this.idPublicacion = this.route.snapshot.params['id'];
    this.publicacionService.getPulicacion(this.idPublicacion).subscribe(
      data => {
        this.publicacion = data;
        this.formPublicacion.controls['titulo'].setValue(this.publicacion.titulo);
        this.formPublicacion.controls['descripcion'].setValue(this.publicacion.descripcion);
        this.formPublicacion.controls['precio'].setValue(this.publicacion.precio.toString());
        this.formPublicacion.controls['municipio'].setValue(this.publicacion.municipio_id.toString());
        this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.publicacion.imagen);
      }
    )
    this.municipioService.getMunicipios().subscribe(
      data => {
        this.municipios = data;
      }
    )

  }

  guardar(){
    let titulo = this.formPublicacion.controls['titulo'].value;
    let descripcion = this.formPublicacion.controls['descripcion'].value;
    let precio = this.formPublicacion.controls['precio'].value;
    let imagen = this.imagenBinaria ? this.imagenBinaria : this.publicacion.imagen;
    let municipio_id = this.formPublicacion.controls['municipio'].value;
    let usuario_id = 1;

    let publicacionDTO : Publicacion = {
      id: this.idPublicacion,
      titulo: titulo!,
      descripcion: descripcion!,
      precio: Number(precio),
      imagen: imagen,
      usuario_id: usuario_id,
      municipio_id: Number(municipio_id)
    }

    this.publicacionService.updatePublicacion(publicacionDTO).subscribe(
      data => {
        this.router.navigate(['/publicaciones']);
      }
    )
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
