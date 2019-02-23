import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NommedPage } from '../pages/nommed/nommed';
import { ResultPage } from '../pages/result/result';
import { ResultdciPage } from '../pages/resultdci/resultdci';
import {CdiPage} from '../pages/cdi/cdi';
import { FilterPipe } from '../pipes/filter/filter';
import { JargantPage } from '../pages/jargant/jargant';
import { PropotPage } from '../pages/propot/propot';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MediczmentserviceProvider } from '../providers/mediczmentservice/mediczmentservice';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NommedPage,
    CdiPage,
    ResultPage,
    ResultdciPage,
    JargantPage,
    PropotPage,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    CommonModule,
    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NommedPage,
    CdiPage,
    ResultPage,
    ResultdciPage,
    JargantPage,
    PropotPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MediczmentserviceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   
  ]
})
export class AppModule {}
