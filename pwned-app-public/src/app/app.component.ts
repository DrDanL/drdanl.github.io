import { Component, ViewChild } from '@angular/core';

import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RatingProvider } from '../providers/rating';

import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { SearchAccountsPage } from '../pages/search-accounts/search-accounts';
import { PasswordsPage } from '../pages/passwords/passwords';
import { FaqPage } from '../pages/faq/faq';

import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { AboutPage } from '../pages/about/about';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.template.html'
})
export class PwnedApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  appPages: PageInterface[] = [
    { title: 'Home', name: 'TabsPage', component: TabsPage, tabComponent: HomePage, index: 0, icon: 'home' },
    { title: 'Search Breaches', name: 'TabsPage', component: TabsPage, tabComponent: SearchAccountsPage, index: 1, icon: 'ios-analytics-outline' },
    { title: 'Pwned Passwords', name: 'TabsPage', component: TabsPage, tabComponent: PasswordsPage, index: 2, icon: 'md-key' },
    { title: 'FAQ', name: 'TabsPage', component: TabsPage, tabComponent: FaqPage, index: 3, icon: 'md-paper' }
  ];
  OtherPages: PageInterface[] = [
    { title: 'About', name: 'AboutPage', component: AboutPage, icon: 'md-help' }
  ];
  rootPage: any;

  constructor(
    public events: Events,
    public menu: MenuController,
    public platform: Platform,
    public storage: Storage,
    public splashScreen: SplashScreen,
    private _RATE: RatingProvider
  ) {

    // Check if the user has already seen the tutorial
    this.storage.get('hasSeenTutorial')
      .then((hasSeenTutorial) => {
        if (hasSeenTutorial) {
          this.rootPage = TabsPage;
        } else {
          this.rootPage = TutorialPage;
        }
        this.platformReady()
      });
  }

  openPage(page: PageInterface) {
    let params = {};

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
    } else {
      // Set the root of the nav with params if it's a tab index
      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }
  }

  openTutorial() {
    this.nav.setRoot(TutorialPage);
  }

  rateUs() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      this._RATE.requestRating();
    });
  }

  platformReady() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

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
  }
}
