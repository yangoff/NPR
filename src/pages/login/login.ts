import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SliderIPage } from '../slider-i/slider-i';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  pgPrev=SliderIPage
  log=TabsPage
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.navCtrl.push(this.log)
  }

}
