import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TabContent } from '../../models/the-cocktail.model';

@Component({
  selector: 'app-selectable-card, [selectable-card]',
  templateUrl: './selectable-card.component.html',
  styleUrls: ['./selectable-card.component.scss']
})
export class SelectableCardComponent implements OnInit {
  @Input() cardContent: TabContent;
  @Output() cardSelected: EventEmitter<TabContent> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelection($event) {
    this.cardSelected.emit($event);
  }
}
