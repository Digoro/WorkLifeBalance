import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { SignInComponent } from './signIn/signIn.component';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './config';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    RoutingModule,
    MatCardModule,
    MatButtonModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
