import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-adquisicion-establecimientos',
  templateUrl: './adquisicion-establecimientos.component.html',
  styleUrls: ['./adquisicion-establecimientos.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdquisicionEstablecimientosComponent implements OnInit {
  pathImg: string = '../../../assets/';

  vCardsTop: any[] = [
    {
      title: '¿Cómo lo hacemos?',
      text: 'Crear el escenario futuro, saber a que nos enfrentamos de manera consciente y lo más realista posible, nos ayuda a anticiparnos y no cometer error y gastos imprevisibles en el futuro.',
    },
    {
      title: '¿Cómo trabajamos?',
      text: 'Hasspro te proporciona el desarrollo de planes de negocio para restaurantes, bares y discotecas.',
    },
    {
      title: '¿Quieres delegar funciones?',
      text: 'En Hasspro te ofrecemos una gestión integral de todo el restaurante o bar, adaptándonos a tus necesidades.',
    },
    {
      title: '¿Quieres traspasar tu restaurante?',
      text: 'Cansado de tu restaurante o local, quieres dejarlo, hasspro te hace propuesta de adquisición, total o parcial.',
    },
  ];

  vDescripcion: any[] = [
    {
      title: 'Propuestas de Compra de Establecimientos',
      text: 'Ya se trate de un local de nueva apertura, existente o cerrado  nuestra la empresa HASSPRO puede diseñar integralmente una oferta atractiva para que puedas sacarle el máximo partido a tu establecimiento, soluciones adecuada para que tus necesidades queden totalmente cubiertas.',
      img: 'presupuestos-hasspro.webp',
    },
    {
      title: 'Montaje de un Establecimiento Nuevo',
      text: '¿Sueñas con abrir tu propio local en el sector de la hostelería? Te acompañamos en todo el proceso, desde la concepción inicial hasta la gran inauguración. Nuestro experimentado equipo trabajará codo con codo contigo, proporcionándote orientación ya asesoramiento personalizado en cada paso del camino. Desde la selección del lugar ideal, la planificación de la distribución del espacio, la adquisición de equipos y mobiliario, hasta la creación de un plan de marketing ejecutivo, estaremos a tu lado para hacer realidad tu visión.',
      img: 'propuestas-hasspro.webp',
    },
    {
      title: 'Cesión Funcional del Establecimiento',
      text: '¿Te gustaría liberarte de las responsabilidades diarias de la gestión de tu negocio sin perder su potencial? Nuestra empresa te ofrece la opción de ceder las funciones de tu establecimiento en nuestras manos expertas. Confía en nuestro equipo altamente capacitado para llevar a cabo la gestión operativa, la supervisión del personal, el control de costos y la optimización de los procesos. De esta manera, podrás dedicar más tiempo a otros aspectos importantes de tu vida o incluso a la expansión de tus negocios.',
      img: 'soluciones-hasspro.webp',
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
