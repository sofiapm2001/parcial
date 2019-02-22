import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the FavoritosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritosProvider {
  favoritos =[];

  constructor(public toastCtrl: ToastController) {
    console.log('Hello FavoritosProvider Provider');
  }
  remove(consola){
    let index = this.favoritos.findIndex(item => {
      return item.ad.subject ==consola.ad.subject &&
      item.ad.user.account.name == consola.ad.user.account.name;
    });
    if (index > -1){
      this.favoritos.splice(index, 1); //metodo para eliminarlo de favoritos
      const toast = this.toastCtrl.create({
        message: 'Añadido a Favoritos',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
    
  }
  
  existe(consola){
    return this.favoritos.some(item => {
      return item.ad.subject ==consola.ad.subject &&
      item.ad.user.account.name == consola.ad.user.account.name;
    })
  }

  addFavoritos(consola){
    this.favoritos.push(consola);

    const toast = this.toastCtrl.create({
      message: 'Añadido a Favoritos',
      duration: 3000,
      position: 'top'
    });
    toast.present();//codigo ionic components de toast
  }

  getFavoritos(){
    return this.favoritos;
  }

}
