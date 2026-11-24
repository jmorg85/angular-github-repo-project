import { Component } from '@angular/core';
import { Response } from '../Models/Response';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CallGithubAPI } from '../services/CallGithub';

@Component({
  imports: [RouterOutlet, AsyncPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  results$: Observable<Response[]>;

  constructor(private apiService:  CallGithubAPI) {
    this.results$ = this.apiService.GetAll();
  }

}
