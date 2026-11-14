import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Comprobante } from '../models/comprobante';

@Service()
export class BienesService {
  readonly http = inject(HttpClient);
  readonly baseUrl = environment.apiUrl;
  readonly sufixUrl = '/materiales-api/entregas-bienes/comprobante';

  obtenerComprobante(id: number): Observable<Comprobante[]> {
    return this.http.post<Comprobante[]>(`${this.baseUrl}${this.sufixUrl}`, { idComprobante: id });
  }
}
