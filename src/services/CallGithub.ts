import { Injectable } from "@angular/core";
import { Response } from "../Models/Response";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})

export class CallGithubAPI {
    constructor(private http: HttpClient) {
        
    }

    GetAll(): Observable<Response[]> {
        return this.http.get<Response[]>('https://api.github.com/users/jmorg85/repos')
    }
}