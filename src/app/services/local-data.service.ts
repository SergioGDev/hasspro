import { Injectable } from '@angular/core';
import { LocalLink } from '../interfaces/local-data.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor() { }

  getLocalLinks(): LocalLink[] {
    return [
      { name: 'Inicio', path: 'home' },
      { name: 'Servicios', path: 'servicios' },
      { name: 'Sobre Hasspro', path: '' },
      { name: 'Contacto', path: '' },
    ]
  }

  getLegalLinks(): LocalLink[] {
    return [
      { name: 'Política de privacidad', path: '' },
      { name: 'Términos y condiciones', path: '' },
      { name: 'Política de cookies', path: '' },
    ]
  }
}
