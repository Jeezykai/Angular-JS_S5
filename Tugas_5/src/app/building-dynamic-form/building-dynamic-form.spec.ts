import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingDynamicForm } from './building-dynamic-form';

describe('BuildingDynamicForm', () => {
  let component: BuildingDynamicForm;
  let fixture: ComponentFixture<BuildingDynamicForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingDynamicForm],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildingDynamicForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
