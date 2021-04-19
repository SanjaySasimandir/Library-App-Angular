import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: AuthenticationService) { }

  submit() {
    this.auth.login(this.user).subscribe(status => {
      if (status.message == 'success') {
        localStorage.setItem('loggedin', "true");
        this.router.navigate(['/books']);
      }
    })
  }

  user = {
    email: "",
    password: ""
  }
  ngOnInit(): void {
  }

}
