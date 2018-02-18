import { Component, OnInit } from '@angular/core';
import { List } from '../models/list.model';
import { ListService } from '../shared/services/list.service';

@Component({
  selector: 'app-list-create',
  templateUrl: './list-create.component.html',
  styleUrls: ['./list-create.component.css']
})
export class ListCreateComponent implements OnInit {

	model: any = {};

  constructor(private listService: ListService) { }

  ngOnInit() {
  }

  onSubmit() {
  	this.listService.createList(this.model.name)
  		.subscribe(res => console.log(res));
  }

}
