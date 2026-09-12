import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-crossfield-validator-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crossfield-validator-form.html'
})

export class CrossfieldValidatorForm {
  private fb = inject(FormBuilder);
  private passwordsMatch(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirm = group.get('confirm')?.value;
    return password && confirm && password === confirm ? null : { passwordMismatch: true };
  }

  crossFieldForm = this.fb.nonNullable.group(
    {
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    },
    { validators: (group) => this.passwordsMatch(group) }
  );

  onSubmit(): void {
    if (this.crossFieldForm.valid) {
      alert('Password Cocok! Form Berhasil Disubmit.');
    } else {
      this.crossFieldForm.markAllAsTouched();
    }
  }
}