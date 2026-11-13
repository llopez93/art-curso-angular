import { Component, input } from '@angular/core';
import { Categoria } from '../tax-form/tax-form';
import { Item } from '../models/tax-item';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-tax-list',
  styleUrl: './tax-list.scss',
  templateUrl: './tax-list.html',
})
export class TaxList {
  items = input.required<Item[]>();

  categorias: Categoria[] = [
    { id: 1, nombre: 'Electrónica', tasa: 0.305 },
    { id: 2, nombre: 'Libros', tasa: 0 },
    { id: 3, nombre: 'Alimentos Básicos', tasa: 0.105 },
    { id: 4, nombre: 'Indumentaria', tasa: 0.21 },
    { id: 5, nombre: 'Servicios Digitales', tasa: 0.45 }
  ];

  obtenerCategoria(id: number | null): Categoria | undefined {
    return this.categorias.find(cat => cat.id === id);
  }

  calcularImpuesto(monto: number, idCategoria: number | null): number {
    const categoria = this.obtenerCategoria(idCategoria);
    return categoria ? monto * categoria.tasa : 0;
  }

  calcularSubtotal(monto: number, idCategoria: number | null): number {
    return monto + this.calcularImpuesto(monto, idCategoria);
  }
}
