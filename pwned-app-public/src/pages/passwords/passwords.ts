import { Component } from '@angular/core';
import { HaveIBeenPwnedService } from './../../providers/haveibeenpwned';
import CryptoJS from 'crypto-js';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-passwords',
  templateUrl: 'passwords.html'
})
export class PasswordsPage {
  passwordTerm = '';
  passwordFreq = 0;
  passwordBreached = true;
  passwordSafe = true;

  constructor(
    public navCtrl: NavController,
    public haveIBeenPwnedService: HaveIBeenPwnedService
  ) { }

  ionViewDidLeave() {
    this.reset();
  }

  searchPassword() {
    //Ensure we start clen
    this.passwordBreached = true;
    this.passwordSafe = true;

    //Hash the password using SHA-1
    let hashPass = CryptoJS.SHA1(this.passwordTerm);
    let hashUpper = hashPass.toString(CryptoJS.enc.Hex).toUpperCase();
    const prefixPass = hashUpper.slice(0, 5);
    const suffix = hashUpper.slice(5);

    this.haveIBeenPwnedService.searchPassword(prefixPass).subscribe(pwned => {
      //200 Ok — we have the hash for the passwords

      let pwnedHashesList = pwned._body.split('\n');

      let arrPasswprd = pwnedHashesList.map(pwnedHashesList => ({
        suffix: pwnedHashesList.split(':')[0],
        count: parseInt(pwnedHashesList.split(':')[1], 10),
      }));

      let outcome = arrPasswprd.filter(arrPasswprd => arrPasswprd.suffix === suffix)

      this.passwordFreq = (outcome[0] ? outcome[0].count : 0);
      if (this.passwordFreq > 0) {
        this.passwordBreached = false;
      } else {
        this.passwordSafe = false;
      }

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
