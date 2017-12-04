import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { FaqPage } from '../faq/faq';
import { PasswordsPage } from '../passwords/passwords';
import { HomePage } from '../home/home';
import { SearchAccountsPage } from '../search-accounts/search-accounts';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = HomePage;
  tab2Root: any = SearchAccountsPage;
  tab3Root: any = PasswordsPage;
  tab4Root: any = FaqPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}
