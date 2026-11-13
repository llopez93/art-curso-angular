import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { Item } from '../models/tax-item';

export interface Categoria{
  id: number;
  nombre: string;
  tasa: number;
}

@Component({
  imports: [FormsModule, CurrencyPipe],
  selector: 'app-tax-form',
  styleUrl: './tax-form.scss',
  templateUrl: './tax-form.html',
})
export class TaxForm {

  categorias: Categoria[] = [
    { id: 1, nombre: 'Electrónica', tasa: 0.305 },
    { id: 2, nombre: 'Libros', tasa: 0 },
    { id: 3, nombre: 'Alimentos Básicos', tasa: 0.105 },
    { id: 4, nombre: 'Indumentaria', tasa: 0.21 },
    { id: 5, nombre: 'Servicios Digitales', tasa: 0.45 }
  ];

  item = output<Item>();

  nuevoItem: Item = {
    descripcion: '',
    monto: 0,
    id_categoria: null
  };

  agregarItem(): void {
    
    if (this.nuevoItem.id_categoria === null) {
      alert('Por favor selecciona una categoría válida.');
      return;
    }

    this.item.emit({ ...this.nuevoItem });

    this.nuevoItem = {
      descripcion: '',
      monto: 0,
      id_categoria: null
    };
  }

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
