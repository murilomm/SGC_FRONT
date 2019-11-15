import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from './../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  userDetails;

  constructor(private router:Router, private service: UsuarioService) { }

  ngOnInit() {
    
  }

  menuLink(url) {
    this.router.navigateByUrl(url);
  }  

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
