import { Component } from '@angular/core';
import data from '../../assets/dummy.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  chats = data;
  
  constructor() {}

}
