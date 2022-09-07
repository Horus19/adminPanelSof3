import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publicacion } from 'src/app/models/publicacion.model';
import { environment } from 'src/environments/environment';
import { PublicacionDTO } from 'src/app/models/publicacionDTO.model';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(
    private http: HttpClient
  ) {}

  getPublicaciones() {
    return this.http.get<Publicacion[]>(`${environment.urlBack}publicaciones`);
  }

  getPulicacion(id: number) {
    return this.http.get<Publicacion>(`${environment.urlBack}publicacionByID?id=${id}`);
  }

  getPulicacionesByUser(id: number) {
    return this.http.get<Publicacion[]>(`${environment.urlBack}publicacionByIDUsuario?id=${id}`);
  }

  savePublicacion(publicacion: PublicacionDTO) {
    return this.http.post(`${environment.urlBack}publicacion`, publicacion);
  }

  updatePublicacion(publicacion: PublicacionDTO) {
    return this.http.put(`${environment.urlBack}publicacion`, publicacion);
  }

  deletePublicacion(id: number) {
    return this.http.delete<Publicacion>(`${environment.urlBack}publicaciones/${id}`);
  }

}
