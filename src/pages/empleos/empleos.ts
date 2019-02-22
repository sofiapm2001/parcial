import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Mostrar3Page } from '../mostrar3/mostrar3';

/**
 * Generated class for the EmpleosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empleos',
  templateUrl: 'empleos.html',
})
export class EmpleosPage {
  empleos=[];
  imgs=[];
  mostrar3page= Mostrar3Page;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get("/v1/nga/api/v1/public/klfst?&category=6020&lim=29&lang=es").subscribe(data=>{
      if(data.hasOwnProperty('list_ads')){
        this.empleos=data['list_ads'];
      }
    },error =>{
      console.log(JSON.stringify(error));
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpleosPage');
  }
  verempleos(empleo){
    this.navCtrl.push(this.mostrar3page, {empleos: empleo});
  }

}