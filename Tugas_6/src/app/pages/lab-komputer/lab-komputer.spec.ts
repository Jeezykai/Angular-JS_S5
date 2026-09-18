import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabKomputer } from './lab-komputer';

describe('LabKomputer', () => {
  let component: LabKomputer;
  let fixture: ComponentFixture<LabKomputer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabKomputer],
    }).compileComponents();

    fixture = TestBed.createComponent(LabKomputer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
