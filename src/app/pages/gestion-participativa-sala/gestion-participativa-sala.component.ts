import { Component, OnInit } from '@angular/core';
import { DatosServicios } from 'src/app/interfaces/local-data.interface';

@Component({
  selector: 'app-gestion-participativa-sala',
  templateUrl: './gestion-participativa-sala.component.html',
  styleUrls: ['./gestion-participativa-sala.component.scss'],
})
export class GestionParticipativaSalaComponent implements OnInit {
  vControlHorarios: string[] = ['Horarios', 'Horas', 'App'];
  vControlProveedores: string[] = [
    'Pedidos',
    'Control de stock',
    'Proveedores',
    'App',
  ];
  vGestionCartas: string[] = [
    'Cartas',
    'Digitalizacion de cartas',
    'Inventarios',
    'Escandallos',
    'App',
  ];
  vPersonal: string[] = [
    'Charlas',
    'Formación participativa',
    'Organización y gestión del equipo',
  ];
  vServicio: string[] = [
    'Alérgenos',
    'Gestión antes y después del servicio',
    'Gestión de reservas',
    'Organización de mesas',
    'Tiempos',
    'Tipos de comanda',
    'Tipos de servicios',
    'App',
  ];
  vGestionEventos: string[] = [
    'Desarrollo del evento',
    'Coordinador de eventos',
    'Menús',
    'App',
  ];
  vImagenes: string[] = [
    'Asesoramiento (auditoría)',
    'Gestión de redes sociales',
    'Creación de la web',
    'Diseño de la imagen de la marca',
  ];

  vDatos: DatosServicios[] = [
    {
      titulo: 'Gestión y control de horarios y horas',
      iconPath: '../../../assets/icons/icon-clock.png',
      pathImg:
        '../../../assets/gestion-participativa-sala/horarios_y_horas.webp',
      datos: this.vControlHorarios,
    },
    {
      titulo: 'Gestión y control de proveedores y stock',
      iconPath: '../../../assets/icons/icon-stock.png',
      pathImg: '../../../assets/gestion-participativa-sala/proveedores.webp',
      datos: this.vControlProveedores,
    },
    {
      titulo: 'Gestión y organización de cartas',
      iconPath: '../../../assets/icons/icon-message.png',
      pathImg: '../../../assets/gestion-participativa-sala/gestion_cartas.webp',
      datos: this.vGestionCartas,
    },
    {
      titulo: 'Selección y formación del personal',
      iconPath: '../../../assets/icons/icon-person.png',
      pathImg:
        '../../../assets/gestion-participativa-sala/seleccion_formacion_personal.webp',
      datos: this.vPersonal,
    },
    {
      titulo: 'Gestión y organizacion del servicio',
      iconPath: '../../../assets/icons/icon-service.png',
      pathImg:
        '../../../assets/gestion-participativa-sala/organizacion_servicio.webp',
      datos: this.vServicio,
    },
    {
      titulo: 'Organización y gestión de eventos',
      iconPath: '../../../assets/icons/icon-events.png',
      pathImg:
        '../../../assets/gestion-participativa-sala/gestion_eventos.webp',
      datos: this.vGestionEventos,
    },
    {
      titulo: 'Imagen',
      iconPath: '../../../assets/icons/icon-events.png',
      pathImg: '../../../assets/gestion-participativa-sala/imagen.webp',
      datos: this.vImagenes,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
    });
  }
}
