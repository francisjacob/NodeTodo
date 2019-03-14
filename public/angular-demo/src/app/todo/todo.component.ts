import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    constructor(private todoService: TodoService) { }

    todoList: Todo[];
    ngOnInit() {
        this.todoService.getTodoList()
            .subscribe(todoList => this.todoList = todoList);
    }

}
