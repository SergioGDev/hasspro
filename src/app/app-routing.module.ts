import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SobreHassproComponent } from './pages/sobre-hasspro/sobre-hasspro.component';
import { GestionDocumentacionComponent } from './pages/gestion-documentacion/gestion-documentacion.component';
import { GestionParticipativaSalaComponent } from './pages/gestion-participativa-sala/gestion-participativa-sala.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { DesarrolloEstablecimientosComponent } from './pages/desarrollo-establecimientos/desarrollo-establecimientos.component';
import { ConsultoriaFinancieraComponent } from './pages/consultoria-financiera/consultoria-financiera.component';

const routes: Routes = [
  { path: '', component: HomeLayoutComponent, children: [
    { path: 'home', component: HomeComponent},
    { path: 'servicios', component: ServiciosComponent },
    { path: 'contacto', component: ContactComponent },
    { path: 'sobre-hasspro', component: SobreHassproComponent },
    { path: 'servicios/gestion-documentacion', component: GestionDocumentacionComponent },
    { path: 'servicios/gestion-participativa-sala', component: GestionParticipativaSalaComponent },
    { path: 'servicios/consultoria-financiera', component: ConsultoriaFinancieraComponent },
    { path: 'servicios/desarrollo-establecimientos', component: DesarrolloEstablecimientosComponent },
    
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
