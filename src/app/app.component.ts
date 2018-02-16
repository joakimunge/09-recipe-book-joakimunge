import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weegan';

  constructor(private auth: AuthService) {

  }

  ngOnInit() {
  	// this.auth.isUserLoggedin();
  }

  logout() {
  	this.auth.logout();
  }
}
