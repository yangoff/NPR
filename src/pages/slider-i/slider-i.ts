import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';


/**
 * Generated class for the SliderIPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slider-i',
  templateUrl: 'slider-i.html',
})
export class SliderIPage {
  pg=TabsPage;
  pgReg=RegisterPage
  pgLog=LoginPage
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderIPage');
  }
  goToPageStart() {
    this.navCtrl.push(this.pg)
  }
  register(){
    this.navCtrl.push(this.pgReg)
  }
  login(){
    this.navCtrl.push(this.pgLog)
  }
}
