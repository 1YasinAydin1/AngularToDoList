import { Component } from '@angular/core';
import { ToDo, ToDoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDisplayAll= false;

  model = new ToDo("manager",[
    new ToDoItem("Attended The Agile Meeting",true),
    new ToDoItem("API Edited",false),
    new ToDoItem("API Opened to the World",false),
    new ToDoItem("Angular Learned :)",false)
  ]);

  getName(){
    return this.model.user;
  }
  getItems(){
    if(this.isDisplayAll)
    return this.model.items;
    else
    return this.model.items.filter((i: { Action: any; })=>!i.Action);
  }
  addItem(text:string){
    if(text!="")
    this.model.items.push(new ToDoItem(text,false));
  }
}
