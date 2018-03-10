import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Events, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class HaveIBeenPwnedService {

  constructor(
    public events: Events,
    private http: Http,
    public toastCtrl: ToastController
  ) { }

  getAllBreaches() {
    var url = "https://haveibeenpwned.com/api/v2/breaches/";

    return Observable.create(observer => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          observer.next(data);
        }, (err) => {
          observer.error(err);
          //Return error, but for specific errors provide a toast
          if (err.status == 400) {
            const toast = this.toastCtrl.create({
              message: 'Bad Request - 400. ',
              duration: 3000
            });
            toast.present();
          } else if (err.status == 403) {
            const toast = this.toastCtrl.create({
              message: 'Forbidden - 403. ',
              duration: 3000
            });
            toast.present();
          } else if (err.status == 500) {
            const toast = this.toastCtrl.create({
              message: 'Server Error - 500. ',
              duration: 3000
            });
            toast.present();
          } else if (err.status == 429) {
            const toast = this.toastCtrl.create({
              message: 'Too many requests - 429. ',
              duration: 3000
            });
            toast.present();
          }
        });
    });
  };

  searchEmailUsername(searchTerm: string) {
    var url = "https://haveibeenpwned.com/api/v2/breachedaccount/" + searchTerm;

    return Observable.create(observer => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          observer.next(data);
        }, (err) => {
          observer.error(err);
          //Return error, but for specific errors provide a toast
          if (err.status == 400) {
            const toast = this.toastCtrl.create({
              message: 'Bad Request - 400. ',
              duration: 3000
            });
            toast.present();
          } else if (err.status == 403) {
            const toast = this.toastCtrl.create({
              message: 'Forbidden - 403. ',
              duration: 3000
            });
            toast.present();
          } else if (err.status == 500) {
            const toast = this.toastCtrl.create({
              message: 'Server Error - 500. ',
              duration: 3000
            });
            toast.present();
          } else if (err.status == 429) {
            const toast = this.toastCtrl.create({
              message: 'Too many requests - 429. ',
              duration: 3000
            });
            toast.present();
          }
        });
    });
  };

  searchEmailPastes(searchTerm: string) {
    var url = "https://haveibeenpwned.com/api/v2/pasteaccount/" + searchTerm;

    return Observable.create(observer => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          observer.next(data);
        }, (err) => {
          observer.error(err);
          //Return error, but for specific errors provide a toast
          if (err.status == 400) {
            const toast = this.toastCtrl.create({
              message: 'Bad Request - 400. ',
              duration: 3000
            });
            toast.present();
          } else if (err.status == 403) {
            const toast = this.toastCtrl.create({
              message: 'Forbidden - 403. ',
              duration: 3000
            });
            toast.present();
          } else if (err.status == 500) {
            const toast = this.toastCtrl.create({
              message: 'Server Error - 500. ',
              duration: 3000
            });
            toast.present();
          } else if (err.status == 429) {
            const toast = this.toastCtrl.create({
              message: 'Too many requests - 429. ',
              duration: 3000
            });
            toast.present();
          }
        });
    });
  };

  searchPassword(passwordTerm: string) {
    var url = "https://api.pwnedpasswords.com/range/" + passwordTerm;

    return Observable.create(observer => {
      this.http.get(url)
        .subscribe(data => {
          observer.next(data);
        }, (err) => {
          observer.error(err);
          //Return error, but for specific errors provide a toast
          if (err.status == 400) {
            const toast = this.toastCtrl.create({
              message: 'Bad request - 400. ',
              duration: 3000
            });
            toast.present();
          } else if (err.status == 403) {
            const toast = this.toastCtrl.create({
              message: 'Forbidden - 403. ',
              duration: 3000
            });
            toast.present();
          } else if (err.status == 500) {
            const toast = this.toastCtrl.create({
              message: 'Server Error - 500. ',
              duration: 3000
            });
            toast.present();
          } else if (err.status == 429) {
            const toast = this.toastCtrl.create({
              message: 'Too many requests - 429. ',
              duration: 3000
            });
            toast.present();
          }
        });
    });
  };
}
