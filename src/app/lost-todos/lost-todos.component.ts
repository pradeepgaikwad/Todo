import { Component, OnInit } from '@angular/core';
export class Todos{
  constructor(
public id:number,
public description:string,
public done:boolean,
public targetDate:Date
  ){  }
}
@Component({
  selector: 'app-lost-todos',
  templateUrl: './lost-todos.component.html',
  styleUrls: ['./lost-todos.component.css']
})

export class LostTodosComponent implements OnInit {
todos=[
  new Todos(1,'Learn To Dance',false,new Date()),
  new Todos(2,'Learn Angular',true,new Date()),
  new Todos(3,'Visit To India',true,new Date()),
]
  constructor() { }

  ngOnInit() {
  }

}
