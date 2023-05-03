import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SobreHassproComponent } from './pages/sobre-hasspro/sobre-hasspro.component';
import { GestionDocumentacionComponent } from './pages/gestion-documentacion/gestion-documentacion.component';
import { GestionParticipativaSalaComponent } from './pages/gestion-participativa-sala/gestion-participativa-sala.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  { path: '', component: HomeLayoutComponent, children: [
    { path: 'home', component: HomeComponent},
    { path: 'servicios', component: ServiciosComponent },
    { path: 'contacto', component: ContactComponent },
    { path: 'sobre-hasspro', component: SobreHassproComponent },
    { path: 'gestion-documentacion', component: GestionDocumentacionComponent },
    { path: 'gestion-participativa-sala', component: GestionParticipativaSalaComponent },
    
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
