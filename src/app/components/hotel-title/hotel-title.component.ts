import { Component, OnInit, Input } from '@angular/core';
import { HotelInfo } from '../../models/the-cocktail.model';

@Component({
  selector: 'app-hotel-title, [hotel-title]',
  templateUrl: './hotel-title.component.html',
  styleUrls: ['./hotel-title.component.scss']
})
export class HotelTitleComponent implements OnInit {
  @Input() hotelInfo: HotelInfo;
  starsArray: Array<number>;

  ngOnInit() {
    this.starsArray = Array(this.hotelInfo.stars).fill(1);
  }

}
