export interface pagosInterface{
    id?:  number;
    descripcion?: string;
    descripcionDos?: string;
    imagen?:string;
    precio?:number;
    detalle?: string;
    ingresos?: number;
    egresos?: number;
    cantidadTotal?: number;
    monto?: number;
    fecha?: Date;
}