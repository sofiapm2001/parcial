import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Mostrar2Page } from '../mostrar2/mostrar2';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the PerrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perros',
  templateUrl: 'perros.html',
})
export class PerrosPage {
  perros=[];
 imgs =[];
 mostrar2page= Mostrar2Page;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get("/v1/nga/api/v1/public/klfst?&category=4020&offset=1&lim=29&lang=es").subscribe(data=>{
      if(data.hasOwnProperty('list_ads')){
        this.perros=data['list_ads'];
      }
    },error =>{
      console.log(JSON.stringify(error));
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PerrosPage');
  }
  verperros(perro){
    this.navCtrl.push(this.mostrar2page, {perros: perro});//consola-nombre llave, mostrar manda
  }

}
