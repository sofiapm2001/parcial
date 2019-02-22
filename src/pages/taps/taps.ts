import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FavoritosPage } from '../favoritos/favoritos';
import { PerrosPage } from '../perros/perros';
import { EmpleosPage } from '../empleos/empleos';

/**
 * Generated class for the TapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-taps',
  templateUrl: 'taps.html',
})
export class TapsPage {
  tab1=HomePage;
  tab2=PerrosPage;
  tab3=EmpleosPage;
  tab4=FavoritosPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TapsPage');
  }

}
