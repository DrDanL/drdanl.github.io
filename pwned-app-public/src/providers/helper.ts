import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

  constructor() { }

  arraySum(arrayData) {
    var numbers = arrayData.map(i => i.PwnCount);

    return numbers.reduce((a, b) => a + b, 0);
  }

  getRandomItem(len) {
      return Math.floor(Math.random() * len);
  }
}
