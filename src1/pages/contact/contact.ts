import { Component } from '@angular/core';
import { NavController,ModalController, NavParams } from 'ionic-angular';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams) {

  }
  ionViewDidLoad(){

    let profileModal = this.modalCtrl.create(AddPage);
    profileModal.present();
  }
}
