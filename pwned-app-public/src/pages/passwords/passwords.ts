import { Component } from '@angular/core';
import { HaveIBeenPwnedService } from './../../providers/haveibeenpwned';

import {NavController } from 'ionic-angular';

@Component({
  selector: 'page-passwords',
  templateUrl: 'passwords.html'
})
export class PasswordsPage {
  passwordTerm = '';
  passwordFreq = 0;
  passwordBreached = true;
  passwordSafe = true;
  pwned: any = [];

  constructor(
    public navCtrl: NavController,
    public haveIBeenPwnedService: HaveIBeenPwnedService
  ) {}

  ionViewDidLeave() {
    this.reset();
  }

  searchPassword() {
    //Ensure we start clen
    this.passwordBreached = true;
    this.passwordSafe = true;

    this.haveIBeenPwnedService.searchPassword(this.passwordTerm).subscribe(pwned => {
      //200 Ok — the password was found in the Pwned Passwords repository
      this.pwned = pwned;
      this.passwordFreq = pwned._body;
      this.passwordBreached = false;
    }, (err) => {
      if (err.status == 404) {
        //404 Not found — the account could not be found and has therefore not been pwned
        this.passwordSafe = false;
      } else {
        //All other errors handled via toast. Reset display
        this.reset();
      }
    })
  }

  reset() {
    this.passwordTerm = '';
    this.passwordBreached = true;
    this.passwordSafe = true;
  }
}
