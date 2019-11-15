import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { App } from '../models/app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  formData : App;
  list : App[];
  readonly rootURL ="http://localhost:49975";

  constructor(private http : HttpClient) { }

  atualizaLista(){
    this.http.get(this.rootURL + '/App/ObterClienteApps')
    .toPromise().then(res => this.list = res as App[]);
  }

  adicionar(formData : App){
    return this.http.post(this.rootURL + '/App/', formData);
  }

  atualizar(formData : App){
    return this.http.put(this.rootURL + '/App/', formData);  
  }

  remover(id : number){
    return this.http.delete(this.rootURL + '/App/' + id);
  }
}