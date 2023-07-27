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
      { name: 'Servicios', path: 'servicios', sublinks: [
        { name: 'A/Gestión de la Documentación', path: '/servicios/gestion-documentacion' },
        { name: 'A/Gestión Participativa de Sala', path: '/servicios/gestion-participativa-sala' },
        { name: 'Aquisición de los establecimientos', path: '/servicios/adquisicion-establecimientos' }
      ] },
      { name: 'Sobre Hasspro', path: 'sobre-hasspro' },
      { name: '¿Por qué contratarnos?', path: 'por-que-contratarnos' },
      { name: 'Contacto', path: 'contacto' },
    ]
  }

  getServiciosLinks(): LocalLink[] {
    return [
      { name: 'Asesoramiento y gestión de la Documentación', path: '/servicios/gestion-documentacion' },
      { name: 'Asesoramiento y gestión Participativa de Sala', path: '/servicios/gestion-participativa-sala' },
      { name: 'Adquisición de los establecimientos', path: '/servicios/adquisicion-establecimientos' }
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
