import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { Subscription } from 'rxjs/subscription';
import { NavigationLink } from '../../models/the-cocktail.model';

@Component({
  selector: 'app-tab-nav, [tab-nav]',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.scss']
})
export class TabNavComponent implements OnInit, OnDestroy {
  @Input() navList: Array<NavigationLink>;

  subscription$: Subscription;
  routeData: RoutesRecognized;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription$ = this.router.events.subscribe(route => {
      if (route instanceof RoutesRecognized) {
        console.log(route);
        this.routeData = route;
      }
    });
  }

  onNavigate($event, path) {
    $event.preventDefault();
    $event.stopPropagation();
    // room for side actions instead of built in navigation
    this.router.navigate([path]);
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

}
