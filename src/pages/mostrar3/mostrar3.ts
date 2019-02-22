import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the Mostrar3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrar3',
  templateUrl: 'mostrar3.html',
})
export class Mostrar3Page {
  empleos={};
  imgs=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavoritosProvider) {
    this.empleos = this.navParams.get('empleos');
    if(this.empleos.ad.hasOwnProperty('images')){
      this.imgs = this.empleos.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mostrar3Page');
  }
  favoritos(empleos){
    this.fav.addFavoritos(empleos);
  }

}
