import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoomRegimeComponent } from './containers/room-regime/room-regime.container.component';
import { RoomExtrasComponent } from './containers/room-extras/room-extras.container.component';

const routes = [
	{
		path: 'room-regime',
		component: RoomRegimeComponent
	}, {
		path: 'room-extras',
		component: RoomExtrasComponent
	}, {
		path: '',
		redirectTo: 'room-regime',
		pathMatch: 'full'
	}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
