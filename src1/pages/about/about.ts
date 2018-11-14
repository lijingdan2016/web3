import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SousuoPage } from '../sousuo/sousuo';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides) slides:Slides;
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  arr=['客厅','卧室','餐厅','书房','门厅'];
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad(){
   
  }
  goSub1(){
    this.navCtrl.push(SousuoPage,{id:1});
  }

  change(){
    console.log(this.slides.getActiveIndex());
  }
}
