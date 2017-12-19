import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomExtras.ContainerComponent } from './room-extras.container.component';

describe('RoomExtras.ContainerComponent', () => {
  let component: RoomExtras.ContainerComponent;
  let fixture: ComponentFixture<RoomExtras.ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomExtras.ContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomExtras.ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
