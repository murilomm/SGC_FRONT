import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  formData : Usuario;
  list : Usuario[];
  readonly rootURL ="http://localhost:49975";

  constructor(private http : HttpClient) { }

  atualizaLista(){
    this.http.get(this.rootURL + '/Usuario')
    .toPromise().then(res => this.list = res as Usuario[]);
  }

  adicionar(formData : Usuario){
    return this.http.post(this.rootURL + '/Usuario/', formData);
  }

  atualizar(formData : Usuario){
    return this.http.put(this.rootURL + '/Usuario/', formData);  
  }

  remover(id : number){
    return this.http.delete(this.rootURL + '/Usuario/' + id);
  }
}