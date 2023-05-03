import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {


  tituloMensajes: string = 'Hostelería, nuestra razón de ser'
  vMensajes: any[] = [
    {
      text: 'Nos dedicamos a mejorar el servicio de locales dedicados al sector hostelero.',
      icon: 'icon-upgrade.png'
    },
    {
      text: 'Aportamos creatividad, profesionalidad, planificación y soporte a las necesidades del negocio. ',
      icon: 'icon-creativity.png'
    },
    {
      text: 'Ofrecemos información sobre las diferentes funciones y tramitaciones que pueden llevar a cabo.',
      icon: 'icon-information.png'
    },
    {
      text: 'Aplicamos nuevos mecanismos de trabajo al establecimiento.',
      icon: 'icon-renew.png'
    },
    {
      text: 'Ayudamos a plantear objetivos ambiciosos, viables y establecer   estrategias adecuadas exigiendo rigor en su cumplimiento.',
      icon: 'icon-steps.png'
    },
    {
      text: 'Acompañamiento de  adaptación  en el proceso.',
      icon: 'icon-company.png'
    },
  ]
  iconPath: string = '../../../assets/icons/';

  vDondeEncontrarnos: any[] = [
    { text: 'Ronda del Carmen, 13. Cáceres (CP: 10002)', icon: 'icon-map.png' },
    { text: '640 90 36 70', icon: 'icon-phone.png'},
    { text: 'contacto@hasspro.es', icon: 'icon-email.png' },
    { text: 'Hasspro_es', icon: 'icon-instagram.png' },
    { text: 'Hasspro Ávila', icon: 'icon-facebook.png' },
    { text: 'hasspro.es', icon: 'icon-website.png' }
  ]

  // Mapbox
  center: [number, number] = [-6.3757, 39.4684];
  // centerMarker: [number, number] = [-6.3723, 39.4730];
  zoom: number = 16;
  container: string = 'mapa-container';


  constructor() { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0
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
