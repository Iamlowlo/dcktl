import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomRegime.ContainerComponent } from './room-regime.container.component';

describe('RoomRegime.ContainerComponent', () => {
  let component: RoomRegime.ContainerComponent;
  let fixture: ComponentFixture<RoomRegime.ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomRegime.ContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomRegime.ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
