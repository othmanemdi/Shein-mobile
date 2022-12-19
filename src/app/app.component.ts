import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public menus = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Shop', url: 'shop', icon: 'shirt' },
    { title: 'Cart', url: 'cart', icon: 'cart' },
    { title: 'Logout', url: 'login', icon: 'log-out' },
  ]
  constructor() { }
}