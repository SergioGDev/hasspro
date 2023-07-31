import { Component, OnInit } from '@angular/core';
import { DatosServicios } from 'src/app/interfaces/local-data.interface';

@Component({
  selector: 'app-gestion-documentacion',
  templateUrl: './gestion-documentacion.component.html',
  styleUrls: ['./gestion-documentacion.component.scss']
})
export class GestionDocumentacionComponent implements OnInit {

  pathImg: string = '../../../assets/';
  vContabilidad: string[] = [
    "Análisis, revisión y evolución de la contabilidad",
    "Cierre del ejercicio",
    "Presentación de las cuentas anuales y libros",
    "Gestión y trato de información",
    "Inmovilizado (Cálculo y Control de amortización)"
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
    'Presentación de Modelos trimestrales y anuales'
  ]

  vDatosServicios: any[] = [
    {
      texto: 'En Hasspro ofrecemos un servicio de asesoría personalizado capaz de gestionar y procesar la información de la empresa.',
      img: 'imagen-contabilidad-hasspro.webp',
      vPuntos: this.vContabilidad
    },
    {
      texto: 'La mejor manera de estar al día con Hacienda, evitar penalizaciones fiscales o tener las cuentas saneadas ante una posible inspección.',
      img: 'imagen-fiscalidad-hasspro.webp',
      vPuntos: this.vFiscalidad
    },
    {
      texto: 'Servicio continuo de orientación, asistencia y gestión de los recursos humanos, permitiendo el óptimo desarrollo de las relaciones laborales.',
      img: 'imagen-laboral-hasspro.webp',
      vPuntos: this.vLaboral
    }
  ]

  vDatos: DatosServicios[] = [
    {
      titulo: 'Contabilidad',
      iconPath: '../../../assets/icons/icon-contabilidad.png',
      datos: [],
      texto: 'Externalizar las tareas de contabilidad y gestión en un equipo de expertos en asesoría contable y con herramientas actuales, le permite descarga de procesos rutinarios y gestiones administrativas. Nosotros resolvemos lo urgente y rutinario para que la dirección pueda centrarse en lo importante.'
    },
    {
      titulo: 'Laboral',
      iconPath: '../../../assets/icons/icon-laboral.png',
      datos: [],
      texto: 'Conscientes de que las personas son el activo más valioso de las empresas, el equipo de expertos de Asesoría Laboral de Hasspro ofrece un servicio continuo de orientación, asistencia y gestión de los recursos humanos, permitiendo el óptimo desarrollo de las relaciones laborales y evitando cualquier contingencia ante las distintas administraciones.'
    },
    {
      titulo: 'Fiscalidad',
      iconPath: 'i../../../assets/icons/icon-fiscalidad.png',
      datos: [],
      texto: 'Un asesoramiento fiscal que garantiza el cumplimiento de plazos ofreciendo alternativas de ahorro fiscal dentro de la normativa. El equipo Fiscal de Hasspro ofrece un servicio ágil y personalizado con gestores expertos en los sistemas tributarios legales españoles.'
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
