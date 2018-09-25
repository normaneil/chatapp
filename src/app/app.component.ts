import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  msg: string= '';
  editMsg: boolean= false;
  editId: number;


  constructor(public db: AngularFireDatabase) {
    this.itemsRef = db.list('/messages');
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  send(chatMsg: string) {
    this.itemsRef.push({ message: chatMsg });
    this.msg= '';
  }

}
