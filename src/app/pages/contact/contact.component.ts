import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Timestamp } from 'firebase/firestore';
import * as mapboxgl from 'mapbox-gl';
import { EMAIL_NO_LEIDO } from 'src/app/interfaces/local-data.interface';
import { MessageService } from 'src/app/services/message.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  correoEnviado: boolean = false;
  errorEnviado: boolean = false;
  enviandoCorreo: boolean = false;

  iconPath: string = '../../../assets/icons/';
  vDondeEncontrarnos: any[] = [
    { text: 'Ronda del Carmen, 13. Cáceres (CP: 10002)', icon: 'icon-map.png' },
    { text: '640 90 36 70', icon: 'icon-phone.png' },
    { text: 'contacto@hasspro.es', icon: 'icon-email.png' },
    { text: 'Hasspro_es', icon: 'icon-instagram.png' },
    { text: 'Hasspro Ávila', icon: 'icon-facebook.png' },
    { text: 'hasspro.es', icon: 'icon-website.png' }
  ]

  // Mapbox
  center: [number, number] = [-6.3757, 39.4684];
  // centerMarker: [number, number] = [-6.3723,Do 39.4730];
  zoom: number = 16;
  container: string = 'mapa-container';

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {

  }

  formularioContacto: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    asunto: ['', [Validators.required]],
    mensaje: ['', [Validators.required]]
  })


  ngOnInit(): void {

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

  onSubmit(): void {

    if (this.formularioContacto.invalid) {
      this.formularioContacto.markAllAsTouched();
      return;
    }

    this.correoEnviado = true;

    const emailData = {
      fecha: Timestamp.fromDate(new Date()),
      estado: EMAIL_NO_LEIDO,
      ...this.formularioContacto.value
    }

    this.enviandoCorreo = true;
    this.messageService.addEmail(emailData).then(
      resp => {
        this.correoEnviado = true;
        this.enviandoCorreo = false;

        this.formularioContacto.reset();
      },
      err => {
        console.log('Error al enviar el mensaje:', err);
        this.errorEnviado = true;
        this.enviandoCorreo = false;
      }
    )
  }
}
