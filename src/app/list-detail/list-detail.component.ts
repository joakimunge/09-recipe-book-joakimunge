import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { List } from '../models/list.model';
import { ListService } from '../shared/services/list.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  lists: List[];

  constructor(private listService: ListService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.getList();
  }

  getList(): void {
  	const id = this.route.snapshot.paramMap.get('id');
  	this.listService.getList(id)
  		.subscribe(res => {
  			console.log(res);
  			debugger;
        this.lists = res['list']
          .map(list => new List(
            list.id, 
            list.name, 
            list.user,
            list.recipes
            )
          );
      });;
  }

}
