import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';

@Component({
  selector: 'app-root-v2',
  imports: [RouterOutlet, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
