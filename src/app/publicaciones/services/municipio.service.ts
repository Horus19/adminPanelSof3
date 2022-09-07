import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Municipio } from 'src/app/models/municipio.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  constructor(
    private http: HttpClient
  ) { }

  getMunicipios() {
    return this.http.get<Municipio[]>(`${environment.urlBack}municipios`);
  }
}
