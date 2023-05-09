import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmailData } from 'src/app/interfaces/local-data.interface';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-internal-email-detail',
  templateUrl: './internal-email-detail.component.html',
  styleUrls: ['./internal-email-detail.component.scss']
})
export class InternalEmailDetailComponent implements OnInit, OnDestroy{

  datosEmail?: EmailData;
  obteniendoDatos: boolean = false;

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.obteniendoDatos = true;
    const id = this.router.url.split('/')[3];

    this.messageService.getEmailById(id).subscribe((email: any) => {
      
      this.datosEmail = email;
      this.obteniendoDatos = false;
    });
  }

  ngOnDestroy(): void {
    this.messageService.updateEmailALeido(this.datosEmail!);
  }


  goToList() {
    this.router.navigateByUrl('/private/email-list')
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/private/auth-login');
  }

}
