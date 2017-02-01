import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  taps = 0;
  pressed = 0;

  constructor(public navCtrl: NavController) {
    
  }

  onDidReset(resetType:string){
    switch (resetType){
      case 'tap':
        this.taps = 0;
        break;
      case 'press':
        this.pressed = 0;
        break;
      default:
        this.taps = 0;
        this.pressed = 0;
    }
  }

  onTap(){
    console.log('Tapped');
    this.taps++;
  }

  onPress(){
    console.log('pressed');
    this.pressed++;
  }

  didWin(){
    return this.taps == 2 && this.pressed == 4;
  }
}
