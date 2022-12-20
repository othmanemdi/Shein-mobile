import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public categories = [
    { title: 'Iphone', url: 'folder/Iphone', icon: 'phone-portrait' },
    { title: 'Tablete', url: 'folder/Tablete', icon: 'tablet-portrait' },
    { title: 'Macbook', url: 'folder/Macbook', icon: 'laptop' },
    { title: 'Imac', url: 'folder/Imac', icon: 'tv' },
    { title: 'Apple watch', url: 'folder/Apple watch', icon: 'watch' },
    { title: 'Logout', url: 'login', icon: 'log-out' },
  ]

  // public menu = [
  //   { title: 'Home', url: 'home', icon: 'home' },
  //   { title: 'Shop', url: 'shop', icon: 'shirt' },
  //   { title: 'Cart', url: 'cart', icon: 'cart' },
  //   { title: 'Logout', url: 'login', icon: 'log-out' },
  // ]
  constructor() { }
}