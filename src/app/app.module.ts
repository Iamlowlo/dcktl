import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SelectableCardComponent } from './components/selectable-card/selectable-card.component';
import { TabNavComponent } from './components/tab-nav/tab-nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { RoomRegimeComponent } from './containers/room-regime/room-regime.container.component';
import { RoomExtrasComponent } from './containers/room-extras/room-extras.container.component';
import { HotelTitleComponent } from './components/hotel-title/hotel-title.component';
import { DropdownCardComponent } from './components/dropdown-card/dropdown-card.component';
import { RoomExtraComponent } from './components/room-extra/room-extra.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectableCardComponent,
    TabNavComponent,
    RoomRegimeComponent,
    RoomExtrasComponent,
    HotelTitleComponent,
    DropdownCardComponent,
    RoomExtraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
