import { Component, OnInit, HostBinding } from '@angular/core';
import { tabListMock, hotelInfoMock } from '../../mocks/the-cocktail.mocks';
import { TabContent, HotelInfo } from '../../models/the-cocktail.model';

@Component({
  selector: 'app-room-regime.container',
  templateUrl: './room-regime.container.component.html',
  styleUrls: ['./room-regime.container.component.scss']
})
export class RoomRegimeComponent implements OnInit {

  @HostBinding('class') classes: Array<string>;

  hotelInfo: HotelInfo;
  regimeList: Array<TabContent>;
  selectedCard: TabContent;

  constructor() {
    this.regimeList = tabListMock;
    this.hotelInfo = hotelInfoMock;
    this.classes = ['card'];
  }

  ngOnInit() {
  }

  onSelectedRegime($event) {
    this.selectedCard = $event;
  }
}
