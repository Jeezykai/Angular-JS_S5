import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validate-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './validate-form.html'
})

export class ValidateForm {
  private fb = inject(FormBuilder);
  validateForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^[a-zA-Z\s]+$/)]],
    email: ['', [Validators.required, Validators.email]],
    age: ['', [Validators.required, Validators.min(17), Validators.max(65)]]
  });
  
  onSubmit(): void {
    if (this.validateForm.valid) {
      alert('Form Berhasil Disubmit!');
    } else {
      this.validateForm.markAllAsTouched();
    }
  }
}