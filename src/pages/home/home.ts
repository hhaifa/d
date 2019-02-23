import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NommedPage} from '../nommed/nommed';
import {CdiPage} from '../cdi/cdi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  showPage() {
    this.navCtrl.push(NommedPage);
}
showcdi() {
  this.navCtrl.push(CdiPage);
}
}
