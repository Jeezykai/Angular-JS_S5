import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabElektronika } from './lab-elektronika';

describe('LabElektronika', () => {
  let component: LabElektronika;
  let fixture: ComponentFixture<LabElektronika>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabElektronika],
    }).compileComponents();

    fixture = TestBed.createComponent(LabElektronika);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
