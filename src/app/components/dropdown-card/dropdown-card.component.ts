import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-card, [dropdown-card]',
  templateUrl: './dropdown-card.component.html',
  styleUrls: ['./dropdown-card.component.scss']
})
export class DropdownCardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() label: string;
  @Input() labelPosition: string;

  isOpened: boolean;

  constructor() {
    this.isOpened = false;
  }

  ngOnInit() {
  }

  toggleDropdown() {
    this.isOpened = !this.isOpened;
  }
}
