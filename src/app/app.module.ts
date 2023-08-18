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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { InternalEmailListComponent } from './pages/internal-email-list/internal-email-list.component';
import { InternalEmailDetailComponent } from './pages/internal-email-detail/internal-email-detail.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material/angular-material/angular-material.module';
import { AdquisicionEstablecimientosComponent } from './pages/adquisicion-establecimientos/adquisicion-establecimientos.component';
import { PorQueContratarnosComponent } from './pages/por-que-contratarnos/por-que-contratarnos.component';
import { PoliticaCookiesComponent } from './pages/politica-cookies/politica-cookies.component';
import { CookieService } from 'ngx-cookie-service';

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
    ConsultoriaFinancieraComponent,
    LoginComponent,
    InternalEmailListComponent,
    InternalEmailDetailComponent,
    AdquisicionEstablecimientosComponent,
    PorQueContratarnosComponent,
    PoliticaCookiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    NoopAnimationsModule
  ],
  providers: [
    CookieService,
    ScreenTrackingService,
    UserTrackingService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
