import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CpfCnpjModule } from 'ng2-cpf-cnpj';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { NgxMaskModule, IConfig } from 'ngx-mask';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatDialogModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatInputModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LoginService } from './services/login.service';
import { UsuarioService } from './services/usuario.service';
import { AppService } from './services/app.service';
import { TerceiroService } from './services/terceiro.service';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';
import { UsuarioAdminComponent } from './usuarios/usuario-admin/usuario-admin.component';
import { AppAdminComponent } from './apps/app-admin/app-admin.component';
import { AppListComponent } from './apps/app-list/app-list.component';
import { AppsComponent } from './apps/apps.component';
import { TerceirosComponent } from './terceiros/terceiros.component';
import { TerceiroAdminComponent } from './terceiros/terceiro-admin/terceiro-admin.component';
import { TerceiroListComponent } from './terceiros/terceiro-list/terceiro-list.component';
import { AppUsuarioComponent } from './apps/app-usuario/app-usuario.component';
import { AppUsuarioService } from './services/app-usuario.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AppsComponent,
    AppAdminComponent,
    AppListComponent,
    UsuariosComponent,    
    UsuarioListComponent,
    UsuarioAdminComponent,
    AppAdminComponent,
    AppListComponent,
    TerceirosComponent,
    TerceiroAdminComponent,
    TerceiroListComponent,
    AppUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    NgbModule,
    MatListModule,
    MatInputModule,
    MatProgressSpinnerModule,
    NgxMaskModule.forRoot({
      showMaskTyped : true,
    }),
    BrowserAnimationsModule,
    CpfCnpjModule,
    ShowHidePasswordModule
  ],
  providers: [
    LoginService,
    UsuarioService,
    AppService,
    TerceiroService,
    AppUsuarioService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AppUsuarioComponent
  ]
})
export class AppModule { }
