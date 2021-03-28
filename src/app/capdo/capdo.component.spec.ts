import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapdoComponent } from './capdo.component';

describe('CapdoComponent', () => {
  let component: CapdoComponent;
  let fixture: ComponentFixture<CapdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapdoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
