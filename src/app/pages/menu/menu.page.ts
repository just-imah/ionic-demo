import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; //import MenuController to access toggle() method.

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  constructor(
  public menuCtrl: MenuController
  ) {}
  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
