import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  readonly BaseURI = 'http://localhost:49975';

  login(formData) {
    return this.http.post(this.BaseURI + '/login', formData);
  }

}