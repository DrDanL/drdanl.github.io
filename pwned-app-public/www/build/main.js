webpackJsonp([0],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_haveibeenpwned__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(loadingCtrl, haveIBeenPwnedService, helperService) {
        this.loadingCtrl = loadingCtrl;
        this.haveIBeenPwnedService = haveIBeenPwnedService;
        this.helperService = helperService;
        this.breachDataList = [];
        this.RandomBreachList = [];
        this.randomBreach = [];
        //Homepage Details
        this.breachAccountCount = 0;
        this.breachCount = 0;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.getAllBreaches();
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.randomBreachFinder();
    };
    HomePage.prototype.getAllBreaches = function () {
        var _this = this;
        this.haveIBeenPwnedService.getAllBreaches().subscribe(function (breaches) {
            //200 Ok — obtain all breaches
            _this.breachDataList = breaches;
            _this.breachCount = breaches.length;
            _this.breachAccountCount = _this.helperService.arraySum(breaches);
            //Get a random breach
            _this.randomBreachFinder();
        }, function (err) {
            //TODO toast error
            console.log(err);
        });
    };
    HomePage.prototype.randomBreachFinder = function () {
        this.randomBreach = this.breachDataList[this.helperService.getRandomItem(this.breachCount)];
    };
    ;
    HomePage.prototype.doRefresh = function (refresher) {
        this.getAllBreaches(); //Refresh the breaches
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\dev\pwned-app-private\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div class="row pdam-row">\n    <div class="col col-style text-center">\n      <h2>{{breachAccountCount | number}}</h2>\n      <h5>pwned? accounts</h5></div>\n    <div class="col col-style text-center">\n      <h2>{{breachCount | number}}</h2>\n      <h5>Breaches</h5></div>\n  </div>\n\n  <ion-card>\n    <h2>Breach in Focus</h2>\n    <img src="https://haveibeenpwned.com/Content/Images/PwnedLogos/{{randomBreach.Name}}.{{randomBreach.LogoType}}" alt="{{randomBreach.Title}}" class="breachImage">\n    <ion-card-content>\n      <ion-card-title>\n        {{randomBreach.Title}}\n      </ion-card-title>\n      <div [innerHTML]="randomBreach.Description" class="breachDesc"></div>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="topTip">\n    <ion-card-header>\n      <span>Top Tip:</span> Watch your back\n    </ion-card-header>\n\n    <ion-card-content>\n      Whenever you\'re about to post something online, pause and just imagine someone in authority, someone you respect, reading that post or looking at that photo. If that feels uncomfortable, don\'t do it.\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\dev\pwned-app-private\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_haveibeenpwned__["a" /* HaveIBeenPwnedService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_helper__["a" /* HelperService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchAccountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_haveibeenpwned__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchAccountsPage = (function () {
    function SearchAccountsPage(navCtrl, haveIBeenPwnedService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.haveIBeenPwnedService = haveIBeenPwnedService;
        this.alertCtrl = alertCtrl;
        this.searchTerm = ''; //The search term (username or email)
        this.searchedTerm = ''; //The searched term (username or email)
        this.hideAllBreaches = false;
        this.noBreaches = false;
        this.noPastes = false;
        this.showBreachList = false;
        this.showPasteList = false;
        this.breachDataList = [];
        this.breachAccountData = [];
        this.pasteAccountData = [];
    }
    SearchAccountsPage.prototype.ionViewDidLoad = function () {
        this.getAllBreaches();
    };
    SearchAccountsPage.prototype.ionViewDidLeave = function () {
        this.reset();
    };
    SearchAccountsPage.prototype.doRefresh = function (refresher) {
        this.reset();
        this.getAllBreaches(); //Refresh the breaches
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    SearchAccountsPage.prototype.getAllBreaches = function () {
        var _this = this;
        this.haveIBeenPwnedService.getAllBreaches().subscribe(function (breaches) {
            //200 Ok — obtain all breaches
            _this.breachDataList = breaches;
        }, function (err) {
            //TODO toast error
            console.log(err);
            _this.reset();
        });
    };
    SearchAccountsPage.prototype.searchAccount = function () {
        //Ensure we start clen
        this.hideAllBreaches = false;
        this.noBreaches = false;
        this.noPastes = false;
        this.showBreachList = false;
        this.showPasteList = false;
        this.searchedTerm = this.searchTerm;
        this.searchEmailUser(); //Search for email or username
        this.searchPastes(); //Search pastes
    };
    SearchAccountsPage.prototype.searchEmailUser = function () {
        var _this = this;
        this.haveIBeenPwnedService.searchEmailUsername(this.searchTerm).subscribe(function (breachData) {
            _this.breachAccountData = breachData;
            _this.hideAllBreaches = true;
            _this.showBreachList = true;
        }, function (err) {
            if (err.status == 404) {
                //404 Not found — the account could not be found and has therefore not been pwned
                _this.noBreaches = true;
                _this.hideAllBreaches = true;
            }
            else {
                //All other errors handled via toast. Reset display
                _this.reset();
            }
        });
    };
    SearchAccountsPage.prototype.searchPastes = function () {
        var _this = this;
        if (this.emailValidator(this.searchTerm)) {
            this.haveIBeenPwnedService.searchEmailPastes(this.searchTerm).subscribe(function (pasteData) {
                _this.pasteAccountData = pasteData;
                _this.hideAllBreaches = true;
                _this.showPasteList = true;
            }, function (err) {
                if (err.status == 404) {
                    //404 Not found — the account could not be found and has therefore no pwned pastes
                    _this.noPastes = true;
                    _this.hideAllBreaches = true;
                }
                else {
                    //All other errors handled via toast. Reset display
                    _this.reset();
                }
            });
        }
    };
    SearchAccountsPage.prototype.getBreachInfo = function (data) {
        var alert = this.alertCtrl.create({
            title: data.Title,
            subTitle: data.Domain,
            message: data.Description
        });
        alert.addButton({ text: 'OK', role: 'cancel' });
        alert.present();
    };
    SearchAccountsPage.prototype.reset = function () {
        this.hideAllBreaches = false;
        this.noBreaches = false;
        this.noPastes = false;
        this.showBreachList = false;
        this.showPasteList = false;
        this.searchTerm = '';
        this.searchedTerm = '';
        this.breachAccountData = [];
        this.pasteAccountData = [];
    };
    SearchAccountsPage.prototype.emailValidator = function (email) {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!EMAIL_REGEXP.test(email)) {
            return false;
        }
        return true;
    };
    SearchAccountsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"D:\dev\pwned-app-private\src\pages\search-accounts\search-accounts.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Search Breaches</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div padding>\n    <ion-list>\n      <ion-item>\n        <ion-label>\n          <ion-icon name="search"></ion-icon>\n        </ion-label>\n        <ion-input type="text" placeholder="Enter a email or username" [(ngModel)]="searchTerm" name="searchTerm" type="text" clearInput></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button full color="primary" (click)="searchAccount()">Search have I been pwned?</button>\n  </div>\n\n  <!-- User has no breaches -->\n  <div [hidden]="!noBreaches" class="searchSafe" padding>\n    <h2>Good news! {{searchedTerm}} has not been found in any public data breaches!</h2>\n  </div>\n\n  <!-- The users breaches -->\n  <div [hidden]="!showBreachList">\n    <h2>Oh no... {{breachAccountData.length}} breaches found for {{searchedTerm}}</h2>\n    <ion-grid>\n      <ion-row *ngFor="let b of breachAccountData; let i = index" (click)="getBreachInfo(breachAccountData[i])">\n        <ion-col col-2>\n          <img src="https://haveibeenpwned.com/Content/Images/PwnedLogos/{{b.Name}}.{{b.LogoType}}" alt="{{b.Title}}" class="breachImage">\n        </ion-col>\n        <ion-col col-9>\n          <div class="breachTitle">{{b.Title}}</div>\n          <div>{{b.Domain}}</div>\n        </ion-col>\n        <ion-col col-1>\n          <ion-icon name="information-circle"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- User has no pastes -->\n  <div [hidden]="!noPastes" class="searchSafe" padding>\n    <h2>Good news! {{searchedTerm}} has not been found in any public pastes!</h2>\n  </div>\n\n  <!-- The users pastes -->\n  <div [hidden]="!showPasteList" class="pasteDisplay">\n    <h2>Yikes... {{pasteAccountData.length}} pastes found for {{searchedTerm}}</h2>\n    <ion-grid>\n      <ion-row *ngFor="let b of pasteAccountData; let i = index">\n        <ion-col col-11>\n          <div><span>Source:</span> {{b.Source}}</div>\n          <div><span>Title:</span> {{b.Title}}</div>\n          <div><span>e-mails:</span> {{b.EmailCount}}</div>\n        </ion-col>\n        <ion-col col-1>\n          <ion-icon name="information-circle"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- All breaches list -->\n  <div [hidden]="hideAllBreaches">\n\n    <!-- Display a message if the array is empty -->\n    <div class="loadText" *ngIf="breachDataList.length == 0">\n      You need an active internet connection to download the list of data breaches! Swipe down again...\n    </div>\n\n    <h2>All Breaches ({{breachDataList.length}})</h2>\n\n    <div [hidden]="!noBreaches" class="searchSafe">\n      <h2>Good news! {{searchedTerm}} has not been found in any public data breaches or pastes!</h2>\n    </div>\n\n    <div class="keyText">\n      <ion-icon name="md-nuclear"> sensitive</ion-icon> |\n      <ion-icon name="md-alert"> fabricated</ion-icon> |\n      <ion-icon name="md-return-right"> retired</ion-icon>\n    </div>\n\n    <ion-grid>\n      <ion-row *ngFor="let b of breachDataList; let i = index" (click)="getBreachInfo(breachDataList[i])">\n        <ion-col col-2>\n          <img src="https://haveibeenpwned.com/Content/Images/PwnedLogos/{{b.Name}}.{{b.LogoType}}" alt="{{b.Title}}" class="breachImage">\n        </ion-col>\n        <ion-col col-9>\n          <div class="breachTitle">{{b.Title}}</div>\n          <div>{{b.Domain}}</div>\n        </ion-col>\n        <ion-col col-1>\n          <ion-icon *ngIf="b.IsSensitive" name="md-nuclear"></ion-icon>\n          <ion-icon *ngIf="b.IsFabricated" name="md-alert"></ion-icon>\n          <ion-icon *ngIf="b.IsRetired" name="md-return-right"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\dev\pwned-app-private\src\pages\search-accounts\search-accounts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_haveibeenpwned__["a" /* HaveIBeenPwnedService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], SearchAccountsPage);
    return SearchAccountsPage;
}());

//# sourceMappingURL=search-accounts.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_haveibeenpwned__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PasswordsPage = (function () {
    function PasswordsPage(navCtrl, haveIBeenPwnedService) {
        this.navCtrl = navCtrl;
        this.haveIBeenPwnedService = haveIBeenPwnedService;
        this.passwordTerm = '';
        this.passwordFreq = 0;
        this.passwordBreached = true;
        this.passwordSafe = true;
    }
    PasswordsPage.prototype.ionViewDidLeave = function () {
        this.reset();
    };
    PasswordsPage.prototype.searchPassword = function () {
        var _this = this;
        //Ensure we start clen
        this.passwordBreached = true;
        this.passwordSafe = true;
        //Hash the password using SHA-1
        var hashPass = __WEBPACK_IMPORTED_MODULE_2_crypto_js___default.a.SHA1(this.passwordTerm);
        var hashUpper = hashPass.toString(__WEBPACK_IMPORTED_MODULE_2_crypto_js___default.a.enc.Hex).toUpperCase();
        var prefixPass = hashUpper.slice(0, 5);
        var suffix = hashUpper.slice(5);
        this.haveIBeenPwnedService.searchPassword(prefixPass).subscribe(function (pwned) {
            //200 Ok — we have the hash for the passwords
            var pwnedHashesList = pwned._body.split('\n');
            var arrPasswprd = pwnedHashesList.map(function (pwnedHashesList) { return ({
                suffix: pwnedHashesList.split(':')[0],
                count: parseInt(pwnedHashesList.split(':')[1], 10),
            }); });
            var outcome = arrPasswprd.filter(function (arrPasswprd) { return arrPasswprd.suffix === suffix; });
            _this.passwordFreq = (outcome[0] ? outcome[0].count : 0);
            if (_this.passwordFreq > 0) {
                _this.passwordBreached = false;
            }
            else {
                _this.passwordSafe = false;
            }
        }, function (err) {
            if (err.status == 404) {
                //404 Not found — the account could not be found and has therefore not been pwned
                _this.passwordSafe = false;
            }
            else {
                //All other errors handled via toast. Reset display
                _this.reset();
            }
        });
    };
    PasswordsPage.prototype.reset = function () {
        this.passwordTerm = '';
        this.passwordBreached = true;
        this.passwordSafe = true;
    };
    PasswordsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-passwords',template:/*ion-inline-start:"D:\dev\pwned-app-private\src\pages\passwords\passwords.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>pwned? Passwords</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="searchPassword">\n    <ion-list>\n      <ion-item>\n        <ion-label>\n          <ion-icon name="md-key"></ion-icon>\n        </ion-label>\n        <ion-input type="password" placeholder="Enter a password" [(ngModel)]="passwordTerm" name="passwordTerm" clearInput></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button full color="primary" (click)="searchPassword()">Search have I been pwned?</button>\n\n    <h2><span>Note:</span> We protect the privacy of your passwords. We do not send any password without encrption! See FAQ for more.</h2>\n  </div>\n\n  <div [hidden]="passwordSafe" class="passwordSafe">\n    This password wasn\'t found in any of the pwned? Passwords loaded into Have I Been Pwned?. That doesn\'t necessarily mean it\'s a good password, merely that it\'s not indexed.\n  </div>\n\n  <div [hidden]="passwordBreached" class="passwordBreached">\n    This password has previously appeared <b>{{passwordFreq}}</b> times in a data breach and should never be used. If you\'ve ever used it anywhere before, change it immediately!\n  </div>\n\n  <ion-card class="topTip">\n    <ion-card-header>\n      <span>Top Tip:</span> Password Managers\n    </ion-card-header>\n\n    <ion-card-content>\n      Password managers remove both of these problems by generating and storing complex passwords for you. The password manager lives in a browser (or app) and acts a digital gatekeeper, filling in your login info when you need to get on a certain site. You just\n      have to remember one (very secure!) master password for the manager itself, and everything else is taken care of for you.\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\dev\pwned-app-private\src\pages\passwords\passwords.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_haveibeenpwned__["a" /* HaveIBeenPwnedService */]])
    ], PasswordsPage);
    return PasswordsPage;
}());

//# sourceMappingURL=passwords.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqPage = (function () {
    function FaqPage(navCtrl) {
        this.navCtrl = navCtrl;
        //Quick and easy way to hold the state of each FAQ item
        this.questionElements = [
            false,
            false,
            false,
            false,
            false,
            false,
            false
        ];
    }
    FaqPage.prototype.expandElement = function (id) {
        //Expand or hide the card element
        if (this.questionElements[id] == true) {
            this.questionElements[id] = false;
        }
        else {
            this.questionElements[id] = true;
        }
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faq',template:/*ion-inline-start:"D:\dev\pwned-app-private\src\pages\faq\faq.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>FAQ</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-card-header text-wrap (click)="expandElement(0)">\n      What is a "breach" and where has the data come from?\n    </ion-card-header>\n\n    <ion-card-content *ngIf="questionElements[0]">\n      A "breach" is an incident where a hacker illegally obtains data from a vulnerable system, usually by exploiting weaknesses in the software.\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header text-wrap (click)="expandElement(1)">\n      What is a "paste" and why include it on this site?\n    </ion-card-header>\n\n    <ion-card-content *ngIf="questionElements[1]">\n      A "paste" is information that has been "pasted" to a publicly facing website designed to share content. These services are favoured by hackers due to the ease of anonymously sharing information and they\'re frequently the first place a breach appears.\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header text-wrap (click)="expandElement(2)">\n      My email was not found — does that mean I\'m OK?\n    </ion-card-header>\n\n    <ion-card-content *ngIf="questionElements[2]">\n      Whilst the Have I Been Pwned? service is kept up to date with as much data as possible, it contains but a small subset of all the records that have been breached over the years. Many breaches never result in the public release of data and indeed many\n      breaches even go entirely undetected. "Absence of evidence is not evidence of absence" or in other words, just because your email address wasn\'t found here doesn\'t mean that is hasn\'t been compromised in another breach.\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header text-wrap (click)="expandElement(3)">\n      What is a "sensitive breach"?\n    </ion-card-header>\n\n    <ion-card-content *ngIf="questionElements[3]">\n      Have I Been Pwned? and pwned?  enables you to discover if your account was exposed in most of the data breaches by directly searching the system. However, certain breaches are particularly sensitive in that someone\'s presence in the breach may\n      adversely impact them if others are able to find that they were a member of the site. These breaches are classed as "sensitive" and may not be publicly searched. A sensitive data breach can only be searched by the verified owner of the email address\n      being searched for via the <a href="https://haveibeenpwned.com/">Have I Been Pwned?</a> website.\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header text-wrap (click)="expandElement(4)">\n      What is an "unverified" breach?\n    </ion-card-header>\n\n    <ion-card-content *ngIf="questionElements[4]">\n      Some breaches may be flagged as "unverified". In these cases, whilst there is legitimate data within the alleged breach, it may not have been possible to establish legitimacy beyond reasonable doubt. Unverified breaches are still included in the system\n      because regardless of their legitimacy, they still contain personal information about individuals who want to understand their exposure on the web.\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header text-wrap (click)="expandElement(5)">\n      What is a "fabricated" breach?\n    </ion-card-header>\n\n    <ion-card-content *ngIf="questionElements[5]">\n      Some breaches may be flagged as "fabricated". In these cases, it is highly unlikely that the breach contains legitimate data sourced from the alleged site but it may still be sold or traded under the auspices of legitimacy. Often these incidents are comprised\n      of data aggregated from other locations (or may be entirely fabricated), yet still contain actual email addresses of unbeknownst to the account holder. Fabricated breaches are still included in the system because regardless of their legitimacy,\n      they still contain personal information about individuals who want to understand their exposure on the web.\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header text-wrap (click)="expandElement(6)">\n      I want to know more about Have I Been Pwned?\n    </ion-card-header>\n\n    <ion-card-content *ngIf="questionElements[6]">\n      <a href="https://haveibeenpwned.com/">Have I Been Pwned?</a> has been extensively documented on <a href="https://www.troyhunt.com">troyhunt.com</a> under the Have I been pwned? tag.\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\dev\pwned-app-private\src\pages\faq\faq.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_faq__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__passwords_passwords__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_accounts_search_accounts__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__search_accounts_search_accounts__["a" /* SearchAccountsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__passwords_passwords__["a" /* PasswordsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__faq_faq__["a" /* FaqPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\dev\pwned-app-private\src\pages\tabs-page\tabs-page.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" name="conference">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" tabUrlPath="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Accounts" tabIcon="ios-analytics-outline"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Passwords" tabIcon="md-key"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="FAQ" tabIcon="md-paper"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\dev\pwned-app-private\src\pages\tabs-page\tabs-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs-page.js.map

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 221;

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_rate__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RatingProvider = (function () {
    function RatingProvider(http, _RATE) {
        this.http = http;
        this._RATE = _RATE;
        this._RATE.preferences = {
            //openStoreInApp: false,
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
        };
    }
    ;
    RatingProvider.prototype.requestRating = function () {
        this._RATE.promptForRating(true);
    };
    RatingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_rate__["a" /* AppRate */]])
    ], RatingProvider);
    return RatingProvider;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelperService = (function () {
    function HelperService() {
    }
    HelperService.prototype.arraySum = function (arrayData) {
        var numbers = arrayData.map(function (i) { return i.PwnCount; });
        return numbers.reduce(function (a, b) { return a + b; }, 0);
    };
    HelperService.prototype.getRandomItem = function (len) {
        return Math.floor(Math.random() * len);
    };
    HelperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HelperService);
    return HelperService;
}());

//# sourceMappingURL=helper.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]).then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        this.menu.enable(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"D:\dev\pwned-app-private\src\pages\tutorial\tutorial.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="startApp()" color="primary">Skip</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n    <ion-slide>\n      <img src="assets/img/app-logo.png" class="slide-image"/>\n      <h2 class="slide-title">\n        Welcome to <b>pwned?</b>\n      </h2>\n      <p>\n        An app to allow you to see if your email address, username or password has been compromised in a data breach.\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/phone-example.png" class="slide-image"/>\n      <h2 class="slide-title" >What is pwned?</h2>\n      <p><b>pwned?</b> searches <a href="https://haveibeenpwned.com/">Have I Been Pwned?</a> (created by <a href="https://www.troyhunt.com/">Troy Hunt</a>), which is a free resource for anyone to quickly see if they may have been put at risk due to an online account of theirs having been compromised or "pwned" in a data breach.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/pwned-search.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to see if you\'ve been pwned?</h2>\n      <button ion-button icon-end large clear (click)="startApp()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"D:\dev\pwned-app-private\src\pages\tutorial\tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\dev\pwned-app-private\src\pages\about\about.html"*/'<ion-header>\n\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>About</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n	<img src="assets/img/app-logo.png" />\n\n	<div padding>\n		<p>Data breaches have gained widespread attention in the media recently as businesses of all sizes and types (including government and charities) become totally reliant on digital storage and cloud computing. Sensitive data is being stored on cloud-based servers, making it a goldmine for anyone able to gain access. Recently, there has been an explosion in the number of data breaches being publicly disclosed and that is where pwned? comes in!</p>\n\n		<p>pwned? searches <a href="https://haveibeenpwned.com/">Have I Been Pwned?</a> (created by <a href="https://www.troyhunt.com/">Troy Hunt</a>), which is a free resource for anyone to quickly see if they may have been put at risk due to an online account of theirs having been compromised or "pwned" in a data breach.</p>\n\n		<p>pwned? was created by <a href="https://www.leightley.com">Daniel Leightley</a>, a Post-Doctoral Research Associate working on a range of big data and cloud projects for use in military health. The app is documented at his site <a href="https://www.leightley.com">here</a>.\n			You can access the source code for pwned? on GitHub <a href="https://github.com/DrDanL/pwned-app">here</a>.</p>\n	</div>\n\n	<h5 padding>Version 1.0.03</h5>\n</ion-content>\n'/*ion-inline-end:"D:\dev\pwned-app-private\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(368);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_rate__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_search_accounts_search_accounts__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_passwords_passwords__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_faq_faq__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_page_tabs_page__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tutorial_tutorial__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_about_about__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_haveibeenpwned__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_helper__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_rating__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* PwnedApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_passwords_passwords__["a" /* PasswordsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_search_accounts_search_accounts__["a" /* SearchAccountsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_about_about__["a" /* AboutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* PwnedApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_tabs_page_tabs_page__["a" /* TabsPage */], name: 'TabsPage', segment: 'tabs-page' },
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */], name: 'Home', segment: 'home' },
                        { component: __WEBPACK_IMPORTED_MODULE_10__pages_search_accounts_search_accounts__["a" /* SearchAccountsPage */], name: 'SearchAccountsPage', segment: 'searchAccounts' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_passwords_passwords__["a" /* PasswordsPage */], name: 'Passwords', segment: 'password' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_faq_faq__["a" /* FaqPage */], name: 'FAQ', segment: 'faq' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'Tutorial', segment: 'tutorial' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_about_about__["a" /* AboutPage */], name: 'AboutPage', segment: 'about' }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* PwnedApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_passwords_passwords__["a" /* PasswordsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_search_accounts_search_accounts__["a" /* SearchAccountsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_about_about__["a" /* AboutPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_haveibeenpwned__["a" /* HaveIBeenPwnedService */],
                __WEBPACK_IMPORTED_MODULE_17__providers_helper__["a" /* HelperService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_rate__["a" /* AppRate */],
                __WEBPACK_IMPORTED_MODULE_18__providers_rating__["a" /* RatingProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PwnedApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rating__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_accounts_search_accounts__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_passwords_passwords__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_faq_faq__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tutorial_tutorial__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PwnedApp = (function () {
    function PwnedApp(events, menu, platform, storage, splashScreen, _RATE) {
        var _this = this;
        this.events = events;
        this.menu = menu;
        this.platform = platform;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this._RATE = _RATE;
        // List of pages that can be navigated to from the left menu
        this.appPages = [
            { title: 'Home', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], index: 0, icon: 'home' },
            { title: 'Search Breaches', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_6__pages_search_accounts_search_accounts__["a" /* SearchAccountsPage */], index: 1, icon: 'ios-analytics-outline' },
            { title: 'Pwned Passwords', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_7__pages_passwords_passwords__["a" /* PasswordsPage */], index: 2, icon: 'md-key' },
            { title: 'FAQ', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_8__pages_faq_faq__["a" /* FaqPage */], index: 3, icon: 'md-paper' }
        ];
        this.OtherPages = [
            { title: 'About', name: 'AboutPage', component: __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */], icon: 'md-help' }
        ];
        // Check if the user has already seen the tutorial
        this.storage.get('hasSeenTutorial')
            .then(function (hasSeenTutorial) {
            if (hasSeenTutorial) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_tutorial_tutorial__["a" /* TutorialPage */];
            }
            _this.platformReady();
        });
    }
    PwnedApp.prototype.openPage = function (page) {
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            // Set the root of the nav with params if it's a tab index
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
    };
    PwnedApp.prototype.openTutorial = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_tutorial_tutorial__["a" /* TutorialPage */]);
    };
    PwnedApp.prototype.rateUs = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this._RATE.requestRating();
        });
    };
    PwnedApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
            if (typeof FirebasePlugin != 'undefined') {
                FirebasePlugin.getToken(function (token) {
                    // save this server-side and use it to push notifications to this device
                    console.log("Obtained token: " + token);
                    FirebasePlugin.subscribe('all');
                }, function (error) {
                    console.error("Error: " + error);
                });
            }
            if (typeof FirebasePlugin != 'undefined') {
                FirebasePlugin.onTokenRefresh(function (token) {
                    // save this server-side and use it to push notifications to this device
                    console.log("Refreshed token: " + token);
                }, function (error) {
                    console.error("Error: " + error);
                });
            }
            if (typeof FirebasePlugin != 'undefined') {
                FirebasePlugin.onNotificationOpen(function (notification) {
                    // check notification contents and react accordingly
                    console.log(JSON.stringify(notification));
                }, function (error) {
                    console.error("Error: " + error);
                });
            }
        });
    };
    PwnedApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], PwnedApp.prototype, "nav", void 0);
    PwnedApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\dev\pwned-app-private\src\app\app.template.html"*/'<ion-split-pane>\n\n  <ion-menu [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Navigate\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Other\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of OtherPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n        <button ion-item menuClose (click)="rateUs()">\n          <ion-icon item-start name="md-star"></ion-icon>\n          Rate Us\n        </button>\n        <button ion-item menuClose (click)="openTutorial()">\n          <ion-icon item-start name="hammer"></ion-icon>\n          Show Tutorial\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <!-- main navigation -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"D:\dev\pwned-app-private\src\app\app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rating__["a" /* RatingProvider */]])
    ], PwnedApp);
    return PwnedApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HaveIBeenPwnedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HaveIBeenPwnedService = (function () {
    function HaveIBeenPwnedService(events, http, toastCtrl) {
        this.events = events;
        this.http = http;
        this.toastCtrl = toastCtrl;
    }
    HaveIBeenPwnedService.prototype.getAllBreaches = function () {
        var _this = this;
        var url = "https://haveibeenpwned.com/api/v2/breaches/";
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                observer.next(data);
            }, function (err) {
                observer.error(err);
                //Return error, but for specific errors provide a toast
                if (err.status == 400) {
                    var toast = _this.toastCtrl.create({
                        message: 'Bad Request - 400. ',
                        duration: 3000
                    });
                    toast.present();
                }
                else if (err.status == 403) {
                    var toast = _this.toastCtrl.create({
                        message: 'Forbidden - 403. ',
                        duration: 3000
                    });
                    toast.present();
                }
                else if (err.status == 500) {
                    var toast = _this.toastCtrl.create({
                        message: 'Server Error - 500. ',
                        duration: 3000
                    });
                    toast.present();
                }
                else if (err.status == 429) {
                    var toast = _this.toastCtrl.create({
                        message: 'Too many requests - 429. ',
                        duration: 3000
                    });
                    toast.present();
                }
            });
        });
    };
    ;
    HaveIBeenPwnedService.prototype.searchEmailUsername = function (searchTerm) {
        var _this = this;
        var url = "https://haveibeenpwned.com/api/v2/breachedaccount/" + searchTerm;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                observer.next(data);
            }, function (err) {
                observer.error(err);
                //Return error, but for specific errors provide a toast
                if (err.status == 400) {
                    var toast = _this.toastCtrl.create({
                        message: 'Bad Request - 400. ',
                        duration: 3000
                    });
                    toast.present();
                }
                else if (err.status == 403) {
                    var toast = _this.toastCtrl.create({
                        message: 'Forbidden - 403. ',
                        duration: 3000
                    });
                    toast.present();
                }
                else if (err.status == 500) {
                    var toast = _this.toastCtrl.create({
                        message: 'Server Error - 500. ',
                        duration: 3000
                    });
                    toast.present();
                }
                else if (err.status == 429) {
                    var toast = _this.toastCtrl.create({
                        message: 'Too many requests - 429. ',
                        duration: 3000
                    });
                    toast.present();
                }
            });
        });
    };
    ;
    HaveIBeenPwnedService.prototype.searchEmailPastes = function (searchTerm) {
        var _this = this;
        var url = "https://haveibeenpwned.com/api/v2/pasteaccount/" + searchTerm;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                observer.next(data);
            }, function (err) {
                observer.error(err);
                //Return error, but for specific errors provide a toast
                if (err.status == 400) {
                    var toast = _this.toastCtrl.create({
                        message: 'Bad Request - 400. ',
                        duration: 3000
                    });
                    toast.present();
                }
                else if (err.status == 403) {
                    var toast = _this.toastCtrl.create({
                        message: 'Forbidden - 403. ',
                        duration: 3000
                    });
                    toast.present();
                }
                else if (err.status == 500) {
                    var toast = _this.toastCtrl.create({
                        message: 'Server Error - 500. ',
                        duration: 3000
                    });
                    toast.present();
                }
                else if (err.status == 429) {
                    var toast = _this.toastCtrl.create({
                        message: 'Too many requests - 429. ',
                        duration: 3000
                    });
                    toast.present();
                }
            });
        });
    };
    ;
    HaveIBeenPwnedService.prototype.searchPassword = function (passwordTerm) {
        var _this = this;
        var url = "https://api.pwnedpasswords.com/range/" + passwordTerm;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            _this.http.get(url)
                .subscribe(function (data) {
                observer.next(data);
            }, function (err) {
                observer.error(err);
                //Return error, but for specific errors provide a toast
                if (err.status == 400) {
                    var toast = _this.toastCtrl.create({
                        message: 'Bad request - 400. ',
                        duration: 3000
                    });
                    toast.present();
                }
                else if (err.status == 403) {
                    var toast = _this.toastCtrl.create({
                        message: 'Forbidden - 403. ',
                        duration: 3000
                    });
                    toast.present();
                }
                else if (err.status == 500) {
                    var toast = _this.toastCtrl.create({
                        message: 'Server Error - 500. ',
                        duration: 3000
                    });
                    toast.present();
                }
                else if (err.status == 429) {
                    var toast = _this.toastCtrl.create({
                        message: 'Too many requests - 429. ',
                        duration: 3000
                    });
                    toast.present();
                }
            });
        });
    };
    ;
    HaveIBeenPwnedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]])
    ], HaveIBeenPwnedService);
    return HaveIBeenPwnedService;
}());

//# sourceMappingURL=haveibeenpwned.js.map

/***/ })

},[363]);
//# sourceMappingURL=main.js.map