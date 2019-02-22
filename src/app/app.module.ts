import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, TapClick } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from '@angular/common/http';
import { MostrarPage } from '../pages/mostrar/mostrar';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { PerrosPage } from '../pages/perros/perros';
import { Mostrar2Page } from '../pages/mostrar2/mostrar2';
import { BuscarPage } from '../pages/buscar/buscar';
import { TapsPage } from '../pages/taps/taps';
import { Mostrar3Page } from '../pages/mostrar3/mostrar3';
import { EmpleosPage } from '../pages/empleos/empleos';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MostrarPage,
    FavoritosPage,
    PerrosPage,
    Mostrar2Page,
    BuscarPage,
    TapsPage,
    Mostrar3Page,
    EmpleosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MostrarPage,
    FavoritosPage,
    PerrosPage,
    Mostrar2Page,
    BuscarPage,
    TapsPage,
    Mostrar3Page,EmpleosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
