import { Component, output } from '@angular/core';

export interface TaxItem {
  description: string;
  amount: number;
  category: string | null;
}

@Component({
  selector: 'app-tax-form',
  imports: [],
  templateUrl: './tax-form.html',
  styleUrl: './tax-form.scss',
})
export class TaxForm {
}
