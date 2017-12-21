import { Component, OnInit } from '@angular/core';
import { tabListMock, hotelInfoMock } from '../../mocks/the-cocktail.mocks';
import { TabContent, HotelInfo } from '../../models/the-cocktail.model';

@Component({
  selector: 'app-room-regime.container',
  templateUrl: './room-regime.container.component.html',
  styleUrls: ['./room-regime.container.component.scss']
})
export class RoomRegimeComponent implements OnInit {

	regimeList: Array<TabContent>
	hotelInfo: HotelInfo

  constructor() {
  	this.regimeList = tabListMock
  	this.hotelInfo = hotelInfoMock
  }

  ngOnInit() {
  }

  selectedRegime($event) {
  	console.log($event)
  }
}
