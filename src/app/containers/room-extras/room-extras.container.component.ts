import { Component, OnInit } from '@angular/core';
import { roomExtrasMock } from '../../mocks/the-cocktail.mocks';
import { RoomExtraContainer } from '../../models/the-cocktail.model';

@Component({
  selector: 'app-room-extras.container',
  templateUrl: './room-extras.container.component.html',
  styleUrls: ['./room-extras.container.component.scss']
})
export class RoomExtrasComponent implements OnInit {
  roomExtras: Array<RoomExtraContainer>

  constructor() {
    this.roomExtras = roomExtrasMock
  }

  ngOnInit() {
  }

}
