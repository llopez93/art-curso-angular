import { Component } from '@angular/core';
import { TaxForm } from './tax-form/tax-form';
import { TaxList } from './tax-list/tax-list';
import { TaxTotal } from './tax-total/tax-total';
import { Item } from './models/tax-item';

@Component({
  imports: [TaxForm, TaxList, TaxTotal],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  items: Item[] = [];
  
  onItemAdded(item: Item){
    console.log('Item added:', item);
    this.items =[...this.items, item];
  }
}
