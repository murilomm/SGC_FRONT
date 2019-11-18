import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Usuario } from '../models/usuario.model';
import { AppUsuario } from '../models/app-usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AppUsuarioService {

  listaUsuariosDisponiveis: Usuario[];
  listaUsuariosSelecionados: Usuario[];
  header: HttpHeaders;
  
  readonly rootURL ="http://localhost:49975";
  
  constructor(private http : HttpClient) { 
    this.header = new HttpHeaders();
    this.header.append('Content-Type', 'application/json');
  }

  atualizaListas(appId) {
    this.atualizarUsuariosDisponiveis(appId);
    this.atualizarUsuariosSelecionados(appId);
  }

  atualizarUsuariosDisponiveis(appId){
    this.http.get(this.rootURL + '/AppUsuario/BuscarUsuariosDisponiveis/' + appId)
    .toPromise().then(res => this.listaUsuariosDisponiveis = res as Usuario[]);
  }

  atualizarUsuariosSelecionados(appId){
    this.http.get(this.rootURL + '/AppUsuario/BuscarUsuariosSelecionados/' + appId)
    .toPromise().then(res => this.listaUsuariosSelecionados = res as Usuario[]);
  }

  salvarSelecionados(appId: number) {

    var selecionados = JSON.stringify(this.listaUsuariosSelecionados);

    return this.http.put(this.rootURL + '/AppUsuario/AtualizarAssociacao/', 
    {
      usuarios: selecionados,
      appId: appId, 
      usuarioSelecionado: true 
    },
    {
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })});
  }

  salvarDisponiveis(appId: number) {

    var disponiveis = JSON.stringify(this.listaUsuariosDisponiveis);

    return this.http.put(this.rootURL + '/AppUsuario/AtualizarAssociacao/', 
    { 
      usuarios: disponiveis, 
      appId: appId, 
      usuarioSelecionado: false 
    },
    {
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })});
  }  
}