export class ToDo{
    user: string;
    items : ToDoItem[];
    constructor(user: string,items: ToDoItem[]){
        this.user = user;
        this.items = items;
    }

}
export class ToDoItem{
    desc: string;
    Action:boolean;
    constructor(desc: string,Action: boolean){
        this.desc = desc;
        this.Action = Action;
    }
}