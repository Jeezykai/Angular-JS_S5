import { Component, signal } from '@angular/core';
import { ValidateForm } from './validate-form/validate-form';
import { BuildingDynamicForm } from './building-dynamic-form/building-dynamic-form';
import { CrossfieldValidatorForm } from './crossfield-validator-form/crossfield-validator-form';
import { ProjectMini } from './project-mini/project-mini';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ValidateForm, BuildingDynamicForm, CrossfieldValidatorForm, ProjectMini ],
  templateUrl: './app.html'
})
export class App {
  activeTab = signal<'validate' | 'dynamic' | 'crossfield' | 'miniproject'>('validate');
}