import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BienesService } from '../../services/bienesService';
import { Comprobante } from '../../models/comprobante';

@Component({
  selector: 'app-entrega-bienes',
  imports: [FormsModule],
  templateUrl: './entrega-bienes.html',
  styleUrl: './entrega-bienes.scss',
})
export class EntregaBienes {
  bienesService = inject(BienesService);

  idComprobante = signal(2568);
  comprobantes = signal<Comprobante[]>([]);
  cargando = signal(false);
  error = signal('');

  consultar(): void {
    this.cargando.set(true);
    this.error.set('');

    this.bienesService.obtenerComprobante(this.idComprobante()).subscribe({
      next: (data) => {
        this.comprobantes.set(data);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set('Error al consultar el comprobante');
        this.cargando.set(false);
      },
    });
  }
}
