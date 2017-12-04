import { Component } from '@angular/core';
import { HaveIBeenPwnedService } from './../../providers/haveibeenpwned';

import { NavController, Refresher, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search-accounts.html'
})
export class SearchAccountsPage {
  searchTerm = ''; //The search term (username or email)
  searchedTerm = ''; //The searched term (username or email)
  hideAllBreaches = false;
  noBreaches = false;
  noPastes = false;
  showBreachList = false;
  showPasteList = false;
  breachDataList: any = [];
  breachAccountData: any = [];
  pasteAccountData: any = [];

  constructor(
    public navCtrl: NavController,
    public haveIBeenPwnedService: HaveIBeenPwnedService,
    public alertCtrl: AlertController
  ) { }

  ionViewDidLoad() {
    this.getAllBreaches();
  }

  ionViewDidLeave() {
    this.reset();
  }

  doRefresh(refresher: Refresher) {
    this.reset();
    this.getAllBreaches(); //Refresh the breaches
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

  getAllBreaches() {
    this.haveIBeenPwnedService.getAllBreaches().subscribe(breaches => {
      //200 Ok — obtain all breaches
      this.breachDataList = breaches;
    }, (err) => {
      //TODO toast error
      console.log(err)
      this.reset();
    })
  }

  searchAccount() {
    //Ensure we start clen
    this.hideAllBreaches = false;
    this.noBreaches = false;
    this.noPastes = false;
    this.showBreachList = false;
    this.showPasteList = false;

    this.searchedTerm = this.searchTerm;

    this.searchEmailUser(); //Search for email or username
    this.searchPastes(); //Search pastes
  }

  searchEmailUser() {
    this.haveIBeenPwnedService.searchEmailUsername(this.searchTerm).subscribe(breachData => {
      this.breachAccountData = breachData;
      this.hideAllBreaches = true;
      this.showBreachList = true;
    }, (err) => {
      if (err.status == 404) {
        //404 Not found — the account could not be found and has therefore not been pwned
        this.noBreaches = true;
        this.hideAllBreaches = true;
      } else {
        //All other errors handled via toast. Reset display
        this.reset();
      }
    })
  }

  searchPastes() {
    if (this.emailValidator(this.searchTerm)) {
      this.haveIBeenPwnedService.searchEmailPastes(this.searchTerm).subscribe(pasteData => {
        this.pasteAccountData = pasteData;
        this.hideAllBreaches = true;
        this.showPasteList = true;
      }, (err) => {
        if (err.status == 404) {
          //404 Not found — the account could not be found and has therefore no pwned pastes
          this.noPastes = true;
          this.hideAllBreaches = true;
        } else {
          //All other errors handled via toast. Reset display
          this.reset();
        }
      })
    }
  }

  getBreachInfo(data) {
    let alert = this.alertCtrl.create({
      title: data.Title,
      subTitle: data.Domain,
      message: data.Description
    });
    alert.addButton({ text: 'OK', role: 'cancel' });
    alert.present();
  }

  reset() {
    this.hideAllBreaches = false;
    this.noBreaches = false;
    this.noPastes = false;
    this.showBreachList = false;
    this.showPasteList = false;
    this.searchTerm = '';
    this.searchedTerm = '';
    this.breachAccountData = [];
    this.pasteAccountData = [];
  }

  emailValidator(email: string): boolean { //Helper function
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!EMAIL_REGEXP.test(email)) {
      return false;
    }
    return true;
  }
}
