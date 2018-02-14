import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
	submitted = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

	onSubmit() {
		this.submitted = true;
		console.log(this.model)
		this.auth.login(this.model.email, this.model.password);
	}

  get diagnostic() { return JSON.stringify(this.model); }

}
