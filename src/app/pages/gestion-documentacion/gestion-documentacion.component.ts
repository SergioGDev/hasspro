import { Component, OnInit } from '@angular/core';
import { DatosServicios } from 'src/app/interfaces/local-data.interface';

@Component({
  selector: 'app-gestion-documentacion',
  templateUrl: './gestion-documentacion.component.html',
  styleUrls: ['./gestion-documentacion.component.scss']
})
export class GestionDocumentacionComponent implements OnInit {

  vContabilidad: string[] = [
    "Análisis, revisión y evolución de la contabilidad",
    "Cierre del ejercicio",
    "Presentación de las cuentas anuales y libros",
    "Gestión y trato de información"
  ]

  vLaboral: string[] = [
    'Elaboración de las nóminas',
    'Presentación de los impuestos correspondientes',
    'Altas y bajas en la empresa',
    'Elaboración de entrevistas y elección de candidatos',
    'Expedientes y trámites con la Seguridad Social'
  ]

  vFiscalidad: string[] = [
    'Impuesto sobre la Renta de las Personas Físicas (IRPF)',
    'Impuesto sobre el Valor Añadido (IVA)',
    'Impuesto sobre Sociedades (IS)',
    'Impuesto sobre Actividades Económicas (IAE)',
    'Impuesto sobre Transmisiones Patrimoniales y Actos Jurídicos'
  ]

  vDatos: DatosServicios[] = [
    {
      titulo: 'Contabilidad',
      iconPath: '../../../assets/icons/icon-contabilidad.png',
      datos: this.vContabilidad
    },
    {
      titulo: 'Laboral',
      iconPath: 'i../../../assets/icons/icon-laboral.png',
      datos: this.vLaboral
    },
    {
      titulo: 'Fiscalidad',
      iconPath: 'i../../../assets/icons/icon-fiscalidad.png',
      datos: this.vFiscalidad
    }
  ]

  constructor() {

  }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0
    });
  }
}
