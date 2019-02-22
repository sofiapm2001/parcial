import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { MostrarPage } from '../mostrar/mostrar';
import { BuscarPage } from '../buscar/buscar';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  consolas = [];
  mostrar= MostrarPage;
  buscarPage = BuscarPage;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('/v1/nga/api/v1/public/klfst?&category=5060&offset=1&lim=29&lang=es')
    .subscribe(data=>{
    //console.log(JSON.stringify(data));
    if (data.hasOwnProperty('counter_map')){
      console.log(data.counter_map.all);
    }
    if (data.hasOwnProperty('list_ads')){
      this.consolas=data.list_ads;
    }
    }, error =>{
    console.log(JSON.stringify(error));
      });
    }
    vermostrar(consola){
      this.navCtrl.push(this.mostrar, {consola: consola});//consola-nombre llave, mostrar manda
    }
    buscar(){
      this.navCtrl.push(this.buscarPage, {consola: this.consolas})
    }

  }

