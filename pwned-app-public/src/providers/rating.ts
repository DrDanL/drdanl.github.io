import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppRate } from '@ionic-native/app-rate';

@Injectable()
export class RatingProvider {

  constructor(public http: Http,
    private _RATE: AppRate) {

    this._RATE.preferences = {
      openStoreInApp: false,
      displayAppName: 'Pwned?',
      usesUntilPrompt: 2,
      promptAgainForEachNewVersion: false,
      storeAppURL: {
        ios: '0',
        android: 'market://details?id=io.ionic.pwneddataap'
      },
      customLocale: {
        title: 'Do you enjoy %@?',
        message: 'If you enjoy using %@, would you mind taking a moment to rate it? Thanks so much!',
        cancelButtonLabel: 'No, Thanks',
        laterButtonLabel: 'Remind Me Later',
        rateButtonLabel: 'Rate It Now'
      }
    }
  };

  requestRating() {
    this._RATE.promptForRating(true);
  }
}
