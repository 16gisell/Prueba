import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { userInterface } from '../../models/userInterface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  public title_nav = 'Prueba';
  ngOnInit() {
  }

  onLogout():void{
    this.authService.logauUser();
  }

}
