import { Component, signal } from '@angular/core';
import { EntregaBienes } from './components/entrega-bienes/entrega-bienes';

@Component({
  imports: [EntregaBienes],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('communication-service');
}
