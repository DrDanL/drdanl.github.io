import { Component, ViewChild } from '@angular/core';

import { MenuController, NavController, Slides } from 'ionic-angular';
import { ConferenceData } from '../../providers/conference-data';

import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs-page/tabs-page';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})

export class IntroPage {
  showSkip = true;
  confData: any = [];

	@ViewChild('slides') slides: Slides;

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public storage: Storage,
    public confDataProvider: ConferenceData
  ) { }

  startApp() {
    this.navCtrl.push(TabsPage).then(() => {
      this.storage.set('hasSeenTutorial', 'true');
    })
  }

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }

  ionViewWillEnter() {
    this.slides.update();

    this.confDataProvider.getConferenceDetails().subscribe((mapData: any) => {
      this.confData = mapData[0];
    });
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
