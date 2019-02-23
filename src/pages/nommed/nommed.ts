import { Component, OnInit } from '@angular/core';
import { NavController} from 'ionic-angular';
import {MediczmentserviceProvider } from '../../providers/mediczmentservice/mediczmentservice';
import { Docs } from '../../pages/Interfaces/medicament';
import { ResultPage } from '../result/result';


@Component({
  selector: 'page-nommed',
  templateUrl: 'nommed.html',
})
export class NommedPage implements OnInit{
  docs:Docs[] = [];

  constructor(public navCtrl: NavController,public mediczmentserviceProvider:MediczmentserviceProvider) {
    
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
     this.navCtrl.push(ResultPage,{
       'value': docs 
     }) 
    }
    
  }

  