import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
	submitted = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.auth.isUserLoggedin()) {
      this.router.navigate(['/recipes']);
    }
  }

	onSubmit() {
		this.submitted = true;
		this.auth.login(this.model.email, this.model.password)
      .subscribe(
        res => {
          this.router.navigate(['/recipes']);
        },
        error => {
          console.error(error);
        }
    );

	}

  logout() {
    this.auth.logout();
  }


}
