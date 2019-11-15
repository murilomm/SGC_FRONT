import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Terceiro } from '../models/terceiro.model';

@Injectable({
  providedIn: 'root'
})
export class TerceiroService {

  formData : Terceiro;
  list : Terceiro[];
  readonly rootURL ="http://localhost:49975";

  constructor(private http : HttpClient) { }

  atualizaLista(){
    this.http.get(this.rootURL + '/Terceiro')
    .toPromise().then(res => this.list = res as Terceiro[]);
  }

  adicionar(formData : Terceiro){
    return this.http.post(this.rootURL + '/Terceiro/', formData);
  }

  atualizar(formData : Terceiro){
    return this.http.put(this.rootURL + '/Terceiro/', formData);  
  }

  remover(id : number){
    return this.http.delete(this.rootURL + '/Terceiro/' + id);
  }
}