import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageHeader } from './page-header/page-header';
import { TaxForm, TaxItem } from './tax-form/tax-form';
import { TaxList } from './tax-list/tax-list';

@Component({
  selector: 'app-root-v2',
  imports: [RouterOutlet, PageHeader, TaxForm, TaxList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  items: TaxItem[] = [];

  onItemAdded(item: TaxItem) {
    console.log('Item added:', item);
    this.items.push(item);
  }
}
