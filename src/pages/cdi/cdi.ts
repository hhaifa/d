import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MediczmentserviceProvider } from '../../providers/mediczmentservice/mediczmentservice';
import { Docs } from '../../pages/Interfaces/medicament';
import { ResultdciPage } from '../resultdci/resultdci';


@Component({
selector: 'page-cdi',
templateUrl: 'cdi.html',
})
export class CdiPage implements OnInit{
  docs:Docs[] = [];
  constructor(public mediczmentserviceProvider:MediczmentserviceProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
  this.mediczmentserviceProvider.getAll()
      .subscribe(result => {
        console.log(result);
        this.docs = result;
      }, failure => {
        console.error(failure);
      });
    }
    detailsPage(docs){
      //  console.log(docs)
       this.navCtrl.push(ResultdciPage,{
         'value': docs 
       }) 
      }
  }