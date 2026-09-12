import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface FormQuestion {
  key: string;
  label: string;
  controlType: 'textbox' | 'dropdown';
  type?: string;
  options?: { key: string; value: string }[];
  required?: boolean;
  value?: string;
  validators?: Validators[];
}

@Component({
  selector: 'app-building-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './building-dynamic-form.html'
})

export class BuildingDynamicForm implements OnInit {
  private fb = inject(FormBuilder);
  questions: FormQuestion[] = [
    {
      key: 'username',
      label: 'Username',
      controlType: 'textbox',
      type: 'text',
      required: true,
      validators: [Validators.required, Validators.minLength(8), Validators.pattern(/^[a-zA-Z\s]+$/)]
    },
    {
      key: 'emailAddress',
      label: 'Email',
      controlType: 'textbox',
      type: 'email',
      required: true,
      validators: [Validators.required, Validators.email]
    },
    {
      key: 'interestLevel',
      label: 'Ketertarikan Untuk Kuliah',
      controlType: 'dropdown',
      options: [
        { key: 'solid', value: 'Sangat Tertarik' },
        { key: 'great', value: 'Cukup Tertarik' },
        { key: 'bad', value: 'Tidak Tertarik' }
      ],
      required: true,
      validators: [Validators.required]
    }
  ];
  dynamicForm!: FormGroup;

  ngOnInit(): void {
    const group: any = {};

    this.questions.forEach((q) => {
      group[q.key] = [q.value || '', q.validators || []];
    });
    this.dynamicForm = this.fb.group(group);
  }

  onSubmit(): void {
    if (this.dynamicForm.valid) {
      alert('Form Berhasil Disubmit!');
    } else {
      this.dynamicForm.markAllAsTouched();
    }
  }
}