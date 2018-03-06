import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	model: any = {};
	submitted = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
  	this.submitted = true;
  	this.auth.register(this.model.email, this.model.password)
      .subscribe(res => {
        this.router.navigate(['/recipes']);
      });
  }


}
