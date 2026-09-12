import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMini } from './project-mini';

describe('ProjectMini', () => {
  let component: ProjectMini;
  let fixture: ComponentFixture<ProjectMini>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectMini],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectMini);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
