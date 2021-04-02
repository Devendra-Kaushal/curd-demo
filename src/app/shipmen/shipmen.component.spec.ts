import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmenComponent } from './shipmen.component';

describe('ShipmenComponent', () => {
  let component: ShipmenComponent;
  let fixture: ComponentFixture<ShipmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
