import { Component, inject, signal } from '@angular/core';
import { Response } from '../Models/Response';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  imports: [RouterOutlet, AsyncPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private http = inject(HttpClient);

  results$: Observable<Response[]> = this.http.get<Response[]>('https://api.github.com/users/jmorg85/repos');

}
