import { Component, OnInit } from '@angular/core';
import { tabListMock } from '../../mocks/the-cocktail.mocks';
import { TabContent } from '../../models/the-cocktail.model';

@Component({
  selector: 'app-room-regime.container',
  templateUrl: './room-regime.container.component.html',
  styleUrls: ['./room-regime.container.component.scss']
})
export class RoomRegimeComponent implements OnInit {

	regimeList: Array<TabContent>

  constructor() {
  	this.regimeList = tabListMock
  }

  ngOnInit() {
  }

  selectedRegime($event) { 
  	console.log($event)
  }
}
