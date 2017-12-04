import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppRate } from '@ionic-native/app-rate';

import { IonicStorageModule } from '@ionic/storage';

import { PwnedApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { SearchAccountsPage } from '../pages/search-accounts/search-accounts';
import { PasswordsPage } from '../pages/passwords/passwords';
import { FaqPage } from '../pages/faq/faq';

import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { AboutPage } from '../pages/about/about';

import { HaveIBeenPwnedService } from '../providers/haveibeenpwned';
import { HelperService } from '../providers/helper';
import { RatingProvider } from '../providers/rating';

@NgModule({
  declarations: [
    PwnedApp,
    FaqPage,
    PasswordsPage,
    HomePage,
    SearchAccountsPage,
    TabsPage,
    TutorialPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(PwnedApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: HomePage, name: 'Home', segment: 'home' },
        { component: SearchAccountsPage, name: 'SearchAccountsPage', segment: 'searchAccounts' },
        { component: PasswordsPage, name: 'Passwords', segment: 'password' },
        { component: FaqPage, name: 'FAQ', segment: 'faq' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: AboutPage, name: 'AboutPage', segment: 'about' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PwnedApp,
    FaqPage,
    PasswordsPage,
    HomePage,
    SearchAccountsPage,
    TabsPage,
    TutorialPage,
    AboutPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HaveIBeenPwnedService,
    HelperService,
    InAppBrowser,
    SplashScreen,
    AppRate,
    RatingProvider
  ]
})
export class AppModule { }
