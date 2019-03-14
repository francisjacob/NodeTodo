import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
@Component({
    selector: 'app-todo-details',
    templateUrl: './todo-details.component.html',
    styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

    @Input() todoDetails: Todo;
    constructor(
        private route: ActivatedRoute,
        private todoService: TodoService,
        private location: Location
        ) { }

    ngOnInit() {
        this.getTodo();
    }

    getTodo(): void {
        const id: string = this.route.snapshot.paramMap.get('id');
        console.log(id);
        this.todoService.getTodoDetails(id)
            .subscribe(todo => this.todoDetails = todo);
    }

    goBack(): void {
        this.location.back();
    }

}
