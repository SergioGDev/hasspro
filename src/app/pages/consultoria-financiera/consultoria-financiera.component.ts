import { Component, OnInit } from '@angular/core';
import { DatosServicios } from 'src/app/interfaces/local-data.interface';

@Component({
  selector: 'app-consultoria-financiera',
  templateUrl: './consultoria-financiera.component.html',
  styleUrls: ['./consultoria-financiera.component.scss']
})
export class ConsultoriaFinancieraComponent implements OnInit {

  
  vDatos: DatosServicios[] = [
    {
      titulo: 'Planificación Financiera',
      iconPath: '../../../assets/icons/icon-planificacion-financiera.png',
      datos: []
    },
    {
      titulo: 'Estrategias de Ahorro',
      iconPath: '../../../assets/icons/icon-estrategia-ahorro.png',
      datos: []
    },
    {
      titulo: 'Inversiones',
      iconPath: '../../../assets/icons/icon-inversiones.png',
      datos: []
    },
    {
      titulo: 'Acortamiento de Hipotecas',
      iconPath: '../../../assets/icons/icon-acortamiento-hipotecas.png',
      datos: []
    },
    {
      titulo: 'Pensiones / Jubilación',
      iconPath: '../../../assets/icons/icon-pensiones-jubilacion.png',
      datos: []
    },
    {
      titulo: 'Búsqueda de Financiación y Seguros',
      iconPath: '../../../assets/icons/icon-busqueda-financiacion.png',
      datos: []
    },
  ]

  constructor() {

  }

  ngOnInit(): void {

  }
}
