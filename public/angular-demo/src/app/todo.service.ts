import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TODOS } from './mock.todo';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: false
};

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    private api = 'http://DESKTOP-NKP1PA4:3000/api/todos/test';

    constructor(private http: HttpClient) { }


    getTodoList(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.api, httpOptions)
            .pipe(
                tap(_ => this.log('fetched todos')),
                catchError(this.handleError('getHeroes', []))
            );
    }

    getTodoDetails(id: string): Observable<Todo> {
        const url = `http://DESKTOP-NKP1PA4:3000/api/todo/${id}`;
        return this.http.get<Todo>(url).pipe(
            tap(_ => this.log(`fetched todo id=${id}`)),
            catchError(this.handleError<Todo>(`getTodo id=${id}`))
        );
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    log(message) {
        console.log(message);
    }
}
