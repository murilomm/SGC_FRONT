import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AppsComponent } from './apps/apps.component';
import { TerceirosComponent } from './terceiros/terceiros.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'usuario', component: UsuariosComponent, canActivate: [AuthGuard] },
  { path: 'app', component: AppsComponent, canActivate: [AuthGuard] },
  { path: 'terceiro', component: TerceirosComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
