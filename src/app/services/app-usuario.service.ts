import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Usuario } from '../models/usuario.model';
import { AppUsuario } from '../models/app-usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AppUsuarioService {

  listaUsuariosDisponiveis: Usuario[];
  listaUsuariosSelecionados: Usuario[];
  
  readonly rootURL ="http://localhost:49975";

  constructor(private http : HttpClient) { }

  atualizaListas(appId) {
    this.atualizaUsuariosDisponiveis(appId);
    this.atualizaUsuariosSelecionados(appId);
  }

  atualizaUsuariosDisponiveis(appId){
    this.http.get(this.rootURL + '/AppUsuario/BuscarUsuariosDisponiveis/' + appId)
    .toPromise().then(res => this.listaUsuariosDisponiveis = res as Usuario[]);
  }

  atualizaUsuariosSelecionados(appId){
    this.http.get(this.rootURL + '/AppUsuario/BuscarUsuariosSelecionados/' + appId)
    .toPromise().then(res => this.listaUsuariosSelecionados = res as Usuario[]);
  }

  

  // adicionar(formData : Usuario){
  //   return this.http.post(this.rootURL + '/Usuario/', formData);
  // }

  // atualizar(formData : Usuario){
  //   return this.http.put(this.rootURL + '/Usuario/', formData);  
  // }

  // remover(id : number){
  //   return this.http.delete(this.rootURL + '/Usuario/' + id);
  // }
}