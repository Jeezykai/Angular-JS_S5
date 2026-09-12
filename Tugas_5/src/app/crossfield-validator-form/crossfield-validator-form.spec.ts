import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossfieldValidatorForm } from './crossfield-validator-form';

describe('CrossfieldValidatorForm', () => {
  let component: CrossfieldValidatorForm;
  let fixture: ComponentFixture<CrossfieldValidatorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrossfieldValidatorForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CrossfieldValidatorForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
