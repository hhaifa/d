import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Docs } from '../../pages/Interfaces/medicament';
import {MediczmentserviceProvider } from '../../providers/mediczmentservice/mediczmentservice';

/**
 * Generated class for the ResultdciPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-resultdci',
  templateUrl: 'resultdci.html',
})
export class ResultdciPage {
  docs:Docs[] = [];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public mediczmentserviceProvider:MediczmentserviceProvider) {
    this.docs= this.navParams.get('value')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultdciPage');
  }

}
