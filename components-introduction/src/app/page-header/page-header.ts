import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-page-header',
  imports: [CurrencyPipe],
  templateUrl: './page-header.html',
  styleUrl: './page-header.scss',
})
export class PageHeader {
}
