import { Component } from '@angular/core';
import { NavigationLink } from './models/the-cocktail.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	navList: Array<NavigationLink>

  constructor() {
  	this.navList = [
  		{
  			label: 'Tab 1',
  			path: 'room-regime'
  		}, {
  			label: 'Tab 2',
  			path: 'room-extras'
  		}
  	]
  }

}
