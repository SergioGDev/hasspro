import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { EmailData } from 'src/app/interfaces/local-data.interface';
import { Timestamp } from 'firebase/firestore';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

export interface TableData {
  nombre: string;
  fecha: string;
  fechaTimestamp: Timestamp;
  asunto: string;
}

@Component({
  selector: 'app-internal-email-list',
  templateUrl: './internal-email-list.component.html',
  styleUrls: ['./internal-email-list.component.scss']
})
export class InternalEmailListComponent implements OnInit, AfterViewInit {

  bandejaEntrada: EmailData[] = [];
  displayedColumns: string[] = [ 'nombre', 'fecha', 'asunto' ];
  dataSource: MatTableDataSource<EmailData> = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  obteniendoCorreos: boolean = false;

  mensajesPendientes: number = 0;

  constructor(
    private messageService: MessageService,
    private authService: AuthService,
    private router: Router
  ) {
    this.asignarDataSource();
  }

  ngOnInit(): void {

    this.obteniendoCorreos = true;
    this.messageService.getBandejaEntradaData().subscribe(
      resp => {

        // Cambiamos los labels del paginador de la tabla
        this.paginator._intl.itemsPerPageLabel = 'Nº de correos por página:'
        this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
          const start = page * pageSize + 1;
          const end = (page + 1) * pageSize;
          return `Del ${start} al ${end > length ? length : end} (Total: ${length})`
        }

        this.bandejaEntrada = resp;
        this.mensajesPendientes = this.bandejaEntrada.filter(email => email.estado === 'NO_LEIDO').length;
        this.ordenarTabla({ active: 'fecha', direction: 'desc' });
        this.asignarDataSource();
        this.obteniendoCorreos = false;
      }
    )

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  asignarDataSource() {
    this.dataSource = new MatTableDataSource(this.bandejaEntrada);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ordenarTabla(sortState: Sort) {
    const { active, direction } = sortState;

    if (!active || direction === '') {
      return;
    }

    this.bandejaEntrada = this.bandejaEntrada.sort((a: EmailData, b: EmailData) => {
      const isAsc = direction === 'asc';
      switch (active) {
        case 'nombre':
          return this.compare(a.nombre!, b.nombre!, isAsc);

        case 'fecha':
          return this.compare(a.fecha.seconds, b.fecha.seconds, isAsc);

        case 'asunto':
          return this.compare(a.asunto!, b.asunto!, isAsc);

        default:
          return 0;
      }
    })
  }

  compare(a: number | string, b: number | string, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  
  aplicarFiltro(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  abrirMensaje(datosMensaje: EmailData) {
    this.router.navigateByUrl(`/private/email-list/${datosMensaje.id}`)
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/private/auth-login');
  }
}
