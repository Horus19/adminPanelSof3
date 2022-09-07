import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'publicaciones',
    pathMatch: 'full'
  },
  {
    path: 'publicaciones',
    loadChildren: () => import('./publicaciones/publicaciones.module').then(m => m.PublicacionesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
