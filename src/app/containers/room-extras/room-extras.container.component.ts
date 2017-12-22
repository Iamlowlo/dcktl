import { Component, OnInit } from '@angular/core';
import { roomExtrasMock } from '../../mocks/the-cocktail.mocks';
import { RoomExtraContainer } from '../../models/the-cocktail.model';

@Component({
  selector: 'app-room-extras.container',
  templateUrl: './room-extras.container.component.html',
  styleUrls: ['./room-extras.container.component.scss']
})
export class RoomExtrasComponent implements OnInit {
  roomExtras: Array<RoomExtraContainer>;
  defaultOpened: boolean;

  constructor() {
    this.roomExtras = roomExtrasMock;
    this.defaultOpened = false;
  }

  ngOnInit() {
  }

  getImgPath(imgFilename) {
    return `/assets/${imgFilename}`;
  }

  toggleOpened(isOpened) {
    return !isOpened;
  }

}
