import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthenticationService, private router: Router) { }

  logout() {
    localStorage.removeItem('loggedin');
    this.router.navigate(['/books'])
  }

  ngOnInit(): void {
  }

}