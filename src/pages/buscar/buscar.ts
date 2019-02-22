import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MostrarPage } from '../mostrar/mostrar';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {
  consola=[];
  items=[];
  mostrarPage= MostrarPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.consola=this.navParams.get('consola')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }
  
  getItems(ev){
    console.log(ev.target.value);

    this.items= this.consola.filter(consola =>{
      return consola.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());
    });
  }

  vermostrar(consola){
    this.navCtrl.push(this.mostrarPage, {consola: consola});
  }
 

}
