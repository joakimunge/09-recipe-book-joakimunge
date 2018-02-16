import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { List } from '../models/list.model';
import { ListService } from '../shared/services/list.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

	lists: List[];

  constructor(private listService: ListService) { }

  ngOnInit() {
  	this.getLists();
  }

  getLists(): void {
  	this.listService.getLists()
  		.subscribe(res => {
        this.lists = res['lists']
          .map(list => new List(
            list.id, 
            list.name, 
            list.user
            )
          );
      });;
  }

}
