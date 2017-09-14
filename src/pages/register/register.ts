import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  lg=LoginPage

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    this.presentToast()
    this.navCtrl.push(this.lg)
  }
  
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Registrado com sucesso',
      duration: 3000
    });
    toast.present();
  }
}
