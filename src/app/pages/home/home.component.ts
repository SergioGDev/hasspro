import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  tituloMensajes: string = 'Hostelería, nuestra razón de ser';
  vMensajes: any[] = [
    {
      text: 'Nos dedicamos a mejorar el servicio de locales dedicados al sector hostelero.',
      icon: 'icon-upgrade.png',
    },
    {
      text: 'Ayudamos aplantear objetivos ambiciosos, viables y establecer estrategias adecuadas exigiendo rigor en su cumplimiento.',
      icon: 'icon-target.png',
    },
    {
      text: 'Ofrecemos información sobre las diferentes funciones y tramitaciones que pueden llevar a cabo.',
      icon: 'icon-information.png',
    },
    {
      text: 'Te acompañamos en el montaje de tu restaurante. Un negocio de hostelería debe ser comercialmente posible y económicamente viable.',
      icon: 'icon-steps.png'
    },
    {
      text: 'Analizamos la competencia, los fallos y puntos débiles observables, y finalmente elaboraremos las soluciones más efectivas ajustadas a las necesidades de cada empresa.',
      icon: 'icon-statistics.png'
    },
    {
      text: 'Te contamos todo aquello que me hubiera gustado que me contaran antes de montar mi primer negocio de hostelería.',
      icon: 'icon-talk.png'
    },
  ];
  vCards: any[] = [
    {
      title: 'Mejora y Montaje de Negocios de Hostelería',
      icon: 'icon-upgrade.png',
      vMensajes: [
        'Acompañamos en el montaje de tu restaurante, asegurando su viabilidad comercial y económica.',
        'Planteamos objetivos ambiciosos y estrategias efectivas, garantizando su riguroso cumplimiento.',
        'Analizamos la competencia y elaboramos soluciones personalizadas para optimizar tu negocio.'
      ]
    },
    {
      title: 'Gestión y Control Financiero',
      icon: 'icon-statistics.png',
      vMensajes: [
        'Enseñamos claves de gestión para tener control de gastos e ingresos en tu restaurante.', 
        'Aplicamos nuevos mecanismos de trabajo para mejorar la eficiencia de tu establecimiento.', 
        'Proporcionamos profesionales especializados en el sector para diferentes servicios.', 
        'Garantizamos un servicio riguroso y adaptado a tus necesidades particulares.', 
      ]
    },
    {
      title: 'Asesoramiento y Experiencia en Hostelería',
      icon: 'icon-information.png',
      vMensajes: [
        'Brindamos información valiosa basada en nuestra propia experiencia en negocios de hostelería.',
        'Te ofrecemos un trato personalizado y presencial para entender tus necesidades.',
        'Facilitamos profesionales del sector altamente capacitados y flexibles a tus requisitos.',
        'Garantizamos un servicio proactivo y comprometido con el éxito de tu empresa.',
      ]
    },
  ]
  iconPath: string = '../../../assets/icons/';

  vDondeEncontrarnos: any[] = [
    { text: 'Ronda del Carmen, 13. Cáceres (CP: 10002)', icon: 'icon-map.png' },
    { text: '640 90 36 70', icon: 'icon-phone.png' },
    { text: 'contacto@hasspro.es', icon: 'icon-email.png' },
    { text: 'Hasspro_es', icon: 'icon-instagram.png' },
    { text: 'Hasspro Ávila', icon: 'icon-facebook.png' },
    { text: 'hasspro.es', icon: 'icon-website.png' },
  ];

  // Mapbox
  center: [number, number] = [-6.3757, 39.4684];
  // centerMarker: [number, number] = [-6.3723, 39.4730];
  zoom: number = 16;
  container: string = 'mapa-container';

  constructor() {}

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
    });
  }

  ngAfterViewInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxToken;

    // Iglesia
    var mapaIglesia = new mapboxgl.Map({
      container: 'mapa-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoom,
      scrollZoom: false,
    });

    mapaIglesia['scrollZoom'].disable();
    mapaIglesia['boxZoom'].disable();
    mapaIglesia['dragRotate'].disable();
    mapaIglesia['dragPan'].disable();
    mapaIglesia['keyboard'].disable();
    mapaIglesia['doubleClickZoom'].disable();
    mapaIglesia['touchZoomRotate'].disable();

    const markerIglesia = new mapboxgl.Marker()
      .setLngLat(this.center)
      .addTo(mapaIglesia);
  }
}
