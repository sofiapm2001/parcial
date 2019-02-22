import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the Mostrar2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrar2',
  templateUrl: 'mostrar2.html',
})
export class Mostrar2Page {
  perros={};
  imgs=[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavoritosProvider) {
    this.perros = this.navParams.get('perros');
    if(this.perros.ad.hasOwnProperty('images')){
      this.imgs = this.perros.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mostrar2Page');
  }
  favoritos(perros){
    this.fav.addFavoritos(perros);
  }

}
