import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GestionDocumentacionComponent } from './pages/gestion-documentacion/gestion-documentacion.component';
import { GestionParticipativaSalaComponent } from './pages/gestion-participativa-sala/gestion-participativa-sala.component';
import { DesarrolloEstablecimientosComponent } from './pages/desarrollo-establecimientos/desarrollo-establecimientos.component';
import { SobreHassproComponent } from './pages/sobre-hasspro/sobre-hasspro.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConsultoriaFinancieraComponent } from './pages/consultoria-financiera/consultoria-financiera.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    GestionDocumentacionComponent,
    GestionParticipativaSalaComponent,
    DesarrolloEstablecimientosComponent,
    SobreHassproComponent,
    HomeLayoutComponent,
    ServiciosComponent,
    HeaderComponent,
    FooterComponent,
    ConsultoriaFinancieraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
