import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface TaxItem {
  description: string;
  amount: number;
  category: string | null;
}

@Component({
  selector: 'app-tax-form',
  imports: [FormsModule],
  templateUrl: './tax-form.html',
  styleUrl: './tax-form.scss',
})
export class TaxForm {

  item = output<TaxItem>();

  taxItem: TaxItem = {
    description: '',
    amount: 0,
    category: null
  };

  addItem() {
    this.item.emit({ ...this.taxItem });
  }
}
