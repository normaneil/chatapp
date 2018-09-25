import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyA3tUUAL4mGUUycojyJNNgT_UAhPuBwU1k",
  authDomain: "chatapp-5ff3c.firebaseapp.com",
  databaseURL: "https://chatapp-5ff3c.firebaseio.com",
  projectId: "chatapp-5ff3c",
  storageBucket: "chatapp-5ff3c.appspot.com",
  messagingSenderId: "272849827769"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
