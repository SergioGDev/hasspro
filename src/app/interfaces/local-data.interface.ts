import { Timestamp } from "firebase/firestore";

export interface LocalLink {
    name: string;
    path: string;
}


export interface DatosServicios {
    titulo: string;
    iconPath: string;
    datos: string[];
  }
  

export interface EmailData {
    id?: string;
    nombre: string;
    email: string;
    asunto: string;
    mensaje: string;
    fecha: Timestamp;
    estado: string;
}

export const EMAIL_NO_LEIDO: string = 'NO_LEIDO';
export const EMAIL_LEIDO: string = 'LEIDO';
export const EMAIL_BORRADO: string = 'BORRADO';