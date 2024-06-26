import { Component, OnInit } from '@angular/core';

interface NuestrosServiciosItem {
  title: string;
  subtitle?: string;
  text: string;
  path: string;
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  vServicios: any[] = [
    {
      title: '1º.-Realizamos un Estudio inicial participativo sin compromiso:',
      text: 'Para poder conocer la situación en la que se encuentra cada local, así como la documentación tratada y  gestionada.'
    },
    {
      title: '2º.- Ofrecemos un presupuesto personalizado:',
      text: 'Plantearemos los diferentes problemas y aplicaremos los mecanismos necesarios para optimizar y garantizar los diferentes procesos, acorde a las necesidades de cada negocio.'
    },
    {
      title: '3º.-Realizamos el servicio acordado con profesionalidad, personalizado y con rigor.',
      text: 'Establecemos un sello exclusivo de calidad, exigiendo rigor en su cumplimiento.'
    },
  ]

  vNuestrosServicios: NuestrosServiciosItem[] = [
    {
      title: 'Asesoramiento y gestión de la documentación',
      text: 'Tramitamos toda la documentación necesaria para tu establecimiento. Te asesoramos y realizamos todo tipo de gestiones ajustándolas a los parámetros de tu negocio con el fin de obtener una mayor viabilidad del mismo.',
      path: '/servicios/gestion-documentacion'
    },
    {
      title: 'Asesoramiento y gestión participativa de sala',
      text: 'Ofrecemos una mejora de los servicios y la optimización de los procesos y recursos de los que disponga la empresa. Te asesoramos y adaptamos nuevos métodos de trabajo, gestión, formación del equipo o mejora de los servicios, entre otros.',
      path: '/servicios/gestion-participativa-sala'
    },
    {
      title: 'Adquisición de los establecimientos',
      text: 'Ofrecemos la gestión y adquisición total o parcial de establecimientos o locales dedicados al sector de la hostelería, te contamos como poder delegar aquellas funciones y gestiones que serán necesarias para optimizar al máximo el funcionamiento del establecimiento. Ofrecemos un trato personalizado que se adapte a las necesidades de los diferentes clientes con los que trabajamos.',
      path: '/servicios/adquisicion-establecimientos'
    },
    // {
    //   title: 'Consultoría financiera',
    //   subtitle: 'Particulares - Autónomos - PYMES',
    //   text: 'Lo más importante de un buen asesoramiento es que puedes entender cada paso. Para ello te vamos a explicar hasta el más mínimo detalle de por qué recomendamos una solución financiera específica y en qué medida se adapta esta solución a tus necesidades particulares ',
    //   path: '/servicios/consultoria-financiera'
    // },
    // {
    //   title: 'Desarrollo de los establecimientos',
    //   text: 'Ofrecemos la gestión participativa total de la sala, la participación activa en la dirección del mismo y la gestión de la documentación que generen.',
    //   path: '/servicios/desarrollo-establecimientos'
    // },
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
