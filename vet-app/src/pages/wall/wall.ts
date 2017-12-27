import { Component } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-wall',
  templateUrl: 'wall.html'
})
export class WallPage {
  confData: any = [];

  constructor(public confDataProvider: ConferenceData) {
  }

  ionViewDidLoad() {
    console.log("trigger")
    this.confDataProvider.getConferenceDetails().subscribe((mapData: any) => {
      this.confData = mapData[0];
    });
  }
}
