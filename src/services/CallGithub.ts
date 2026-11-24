import { inject, Service } from "@angular/core";
import { Response } from "../Models/Response";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Service()
export class CallGithubAPI {
    http = inject(HttpClient);
    result: Response[] = [];
    //results$: Observable<Response[]> = this.http.get<Response[]>('https://api.github.com/users/jmorg85/repos')
    //call(): Observable<any>
}