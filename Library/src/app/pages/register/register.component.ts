import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private auth: AuthenticationService) { }

  submit() {
    if (this.confirmpass == this.user.password) {
      this.auth.register(this.user).subscribe(status => {
        if (status.message == 'success') {
          this.router.navigate(['/login']);
        }
      })
    }

  }

  user = new UserModel(null, null, null, null, null);
  confirmpass: String = "";

  ngOnInit(): void {
  }

}
