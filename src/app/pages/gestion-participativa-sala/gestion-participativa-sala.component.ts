import { Component, OnInit } from '@angular/core';
import { DatosServicios } from 'src/app/interfaces/local-data.interface';

@Component({
  selector: 'app-gestion-participativa-sala',
  templateUrl: './gestion-participativa-sala.component.html',
  styleUrls: ['./gestion-participativa-sala.component.scss']
})
export class GestionParticipativaSalaComponent implements OnInit {


  vControlHorarios: string[] = [ 'Horarios', 'Horas', 'App' ]
  vControlProveedores: string[] =[ 'Pedidos', 'Control de stock', 'Proveedores', 'App' ]
  vGestionCartas: string[] = [ 'Cartas', 'Digitalizacion de cartas', 'Inventarios', 'Escandallos', 'App' ];
  vPersonal: string[] = [ 'Charlas', 'Formación participativa', 'Organización y gestión del equipo' ];
  vServicio: string[] = [ 'Alérgenos', 'Gestión antes y después del servicio', 'Gestión de reservas', 
    'Organización de mesas', 'Tiempos', 'Tipos de comanda', 'Tipos de servicios', 'App' ];
  vGestionEventos: string[] = [ 'Menús', 'App' ];
  
  vDatos: DatosServicios[] = [
    {
      titulo: 'Gestión y control de horarios y horas',
      iconPath: '../../../assets/icons/icon-clock.png',
      datos: this.vControlHorarios
    },
    {
      titulo: 'Gestión y control de proveedores y stock',
      iconPath: '../../../assets/icons/icon-stock.png',
      datos: this.vControlProveedores
    },
    {
      titulo: 'Gestión y organización de cartas',
      iconPath: '../../../assets/icons/icon-message.png',
      datos: this.vGestionCartas
    },
    {
      titulo: 'Selección y formación del personal',
      iconPath: '../../../assets/icons/icon-person.png',
      datos: this.vPersonal
    },
    {
      titulo: 'Gestión y organizacion del servicio',
      iconPath: '../../../assets/icons/icon-service.png',
      datos: this.vServicio
    },
    {
      titulo: 'Organización y gestión de eventos',
      iconPath: '../../../assets/icons/icon-events.png',
      datos: this.vGestionEventos
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
