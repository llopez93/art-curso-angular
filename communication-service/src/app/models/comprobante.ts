export interface Comprobante {
  idComprobanteCabecera: number;
  comprobante: string;
  dspComprobante: string;
  fecha: string;
  numeroComprobante: number;
  depositoOrigen: number;
  dspDepositoOrigen: string;
  responsableOrigen: number;
  dspResponsableOrigen: string;
  depositoDestino: number;
  dspDepositoDestino: string;
  responsableDestino: number;
  dspResponsableDestino: string;
  observaciones: string | null;
  anulado: string;
  causaAnulacion: string | null;
  usuarioAnulacion: string | null;
  idComprobanteDetalle: number;
  item: number;
  dspItem: string;
  cantidad: number;
  inventario: string | number | null;
  serie: string | null;
  estadoBien: string;
  dspEstadoBien: string;
  descripcion: string | null;
  precioUnitario: number | null;
  precioTotal: number | null;
}

