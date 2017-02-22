import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {


  name: string = '';

  items: any[] = [
    {name: 'Do the laundry', done: false},
    {name: 'Clean the room', done: true}
  ];
  
  addItem(){
    this.items.push(
      {name: this.name, done:false}
    );
    this.name = '';
  }
  
  constructor() { }

  ngOnInit() {
  }

}
