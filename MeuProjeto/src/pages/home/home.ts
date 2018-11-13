import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modals:ModalController) {


  }
click(){
  let criarmodal = this.modals.create(ModalPage);
  criarmodal.present();
}
}
