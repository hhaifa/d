import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Docs } from '../../pages/Interfaces/medicament';
import {MediczmentserviceProvider } from '../../providers/mediczmentservice/mediczmentservice';





@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage implements OnInit{
  docs:Docs[] = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public mediczmentserviceProvider:MediczmentserviceProvider) {
      
     this.docs= this.navParams.get('value')
  }
  ngOnInit() {
    
}
 

}