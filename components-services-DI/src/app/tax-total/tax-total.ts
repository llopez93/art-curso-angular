import { Component, computed, input } from '@angular/core';
import { Item } from '../models/tax-item';
import { CurrencyPipe } from '@angular/common';


@Component({
  imports: [CurrencyPipe],
  selector: 'app-tax-total',
  styleUrl: './tax-total.scss',
  templateUrl: './tax-total.html',
})
export class TaxTotal {

  items = input.required<Item[]>();

  totalNeto = computed(() => 
    this.items().reduce((total, item) => total + item.monto, 0)
  );

}
