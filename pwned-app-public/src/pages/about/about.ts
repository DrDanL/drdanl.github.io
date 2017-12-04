import { Component } from '@angular/core';

import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {

  }
}
