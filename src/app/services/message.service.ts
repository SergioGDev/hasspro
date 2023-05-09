import { Injectable } from '@angular/core';
import { EMAIL_LEIDO, EmailData } from '../interfaces/local-data.interface';

import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection } from '@firebase/firestore';
import { Firestore, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private bandejaEntradaData: Observable<any>;
  private dbName = 'bandeja-entrada';

  constructor(
    private db: AngularFirestore,
    private firestore: Firestore
  ) { 
    this.bandejaEntradaData = this.db.collection(this.dbName).valueChanges({ idField: 'id' });
  }

  getBandejaEntradaData(): Observable<any> {
    return this.bandejaEntradaData;
  }

  getEmailById(id: string): Observable<any> {
    return this.db.collection(this.dbName).doc(id).valueChanges({ idField: 'id' });
  }

  addEmail(emailData: EmailData): Promise<any> {
    return addDoc(collection( this.firestore, this.dbName), emailData);
  }

  // Update emailData.estado = LEIDO
  updateEmailALeido(emailData: EmailData): Promise<any> {
    emailData.estado = EMAIL_LEIDO;
    return this.db.collection(this.dbName).doc(emailData.id).update(emailData);
  }
}
