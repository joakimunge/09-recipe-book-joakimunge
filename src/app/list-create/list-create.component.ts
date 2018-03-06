import { Component} from '@angular/core';
import { Router } from '@angular/router';

import { List } from '../models/list.model';
import { ListService } from '../shared/services/list.service';

@Component({
  selector: 'app-list-create',
  templateUrl: './list-create.component.html',
  styleUrls: ['./list-create.component.css']
})
export class ListCreateComponent {

	model: any = {};

  constructor(private listService: ListService, private router: Router) { }

  onSubmit() {
  	this.listService.createList(this.model.name)
  		.subscribe(res => {
        this.router.navigate(['/lists']);
      });
  }

}
