import { Component } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  confData: any = [];

  constructor(public confDataProvider: ConferenceData) {
  }

  ionViewDidLoad() {
    this.confDataProvider.getConferenceDetails().subscribe((mapData: any) => {
      this.confData = mapData[0];
    });
  }
}
