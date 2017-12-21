import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomExtraComponent } from './room-extra.component';

describe('RoomExtraComponent', () => {
  let component: RoomExtraComponent;
  let fixture: ComponentFixture<RoomExtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomExtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
