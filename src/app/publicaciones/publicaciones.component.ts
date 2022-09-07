import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacion } from '../models/publicacion.model';
import { PublicacionService } from './services/publicacion.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss']
})
export class PublicacionesComponent implements OnInit {

  //TODO: set id from session
  id = 1;

  publicaciones : Publicacion[] = [];
  constructor(
    private publicacionService: PublicacionService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.publicacionService.getPulicacionesByUser(this.id).subscribe(
      data => {
        this.publicaciones = data;
        console.log(this.publicaciones);
      }
    )
  }

  editar(publicacion: Publicacion){
    this.router.navigate([`editarPublicacion/${publicacion.id}`], {relativeTo: this.route});
  }

  eliminar(publicacion: Publicacion){
    this.publicacionService.deletePublicacion(publicacion.id!).subscribe(
      data => {
        this.publicaciones = this.publicaciones.filter(p => p.id !== publicacion.id);
      }
    )
  }

  crearPublicacion(){
    this.router.navigate(['crearPublicacion'], {relativeTo: this.route});
  }

}
