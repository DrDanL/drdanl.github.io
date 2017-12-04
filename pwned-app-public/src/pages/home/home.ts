import { Component } from '@angular/core';
import { HaveIBeenPwnedService } from './../../providers/haveibeenpwned';
import { HelperService } from './../../providers/helper';

import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  breachDataList: any = [];
  RandomBreachList: any = [];
  randomBreach = [];

  //Homepage Details
  breachAccountCount = 0;
  breachCount = 0;

  constructor(
    public loadingCtrl: LoadingController,
    public haveIBeenPwnedService: HaveIBeenPwnedService,
    public helperService: HelperService
  ) {}

  ionViewDidLoad() {
    this.getAllBreaches();
  }

  ionViewDidLeave() {
    this.randomBreachFinder();
  }

  getAllBreaches() {
    this.haveIBeenPwnedService.getAllBreaches().subscribe(breaches => {
      //200 Ok — obtain all breaches
      this.breachDataList = breaches;
      this.breachCount = breaches.length;
      this.breachAccountCount = this.helperService.arraySum(breaches);

      //Get a random breach
      this.randomBreachFinder();
    }, (err) => {
      //TODO toast error
      console.log(err)
    })
  }

  randomBreachFinder() {
    this.randomBreach = this.breachDataList[this.helperService.getRandomItem(this.breachCount)];
  };

  doRefresh(refresher) {
    this.getAllBreaches(); //Refresh the breaches
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }
}
