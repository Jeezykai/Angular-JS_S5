import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

interface DataWilayah {
  [kecamatan: string]: string[];
}

@Component({
  selector: 'app-project-mini',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './project-mini.html'
})
export class ProjectMini {
  private fb = inject(FormBuilder);
  dataBatam: DataWilayah = {
    'Batam Kota': ['Belian', 'Teluk Tering', 'Taman Baloi', 'Sukajadi', 'Sungai Panas', 'Mahkota Raya'],
    'Nongsa': ['Kabil', 'Nongsa', 'Sambau', 'Batu Besar'],
    'Bengkong': ['Bengkong Laut', 'Bengkong Indah', 'Bengkong Sadai', 'Tanjung Buntung'],
    'Batu Ampar': ['Jodoh', 'Kampung Seraya', 'Sungai Jua', 'Tanjung Sengkuang'],
    'Lubuk Baja': ['Baloi Indah', 'Batu Selicin', 'Lubuk Baja Kota', 'Pelita', 'Tanjung Uma'],
    'Sekupang': ['TIBAN ASRI', 'Tiban Indah', 'Tiban Lama', 'Tiban Baru', 'Tanjung Riau', 'Sungai Harapan'],
    'Batu Aji': ['Batu Aji', 'Batu Besar', 'Buliang', 'Kibing', 'Tanjung Uncang']
  };

  kecamatanList = Object.keys(this.dataBatam);
  kelurahanList: string[] = [];
  submittedData: any = null;

  private passwordsMatch(group: AbstractControl): ValidationErrors | null {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass && confirm && pass === confirm ? null : { passwordMismatch: true };
  }

  regForm = this.fb.nonNullable.group(
    {
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      rt: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      rw: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      kecamatan: ['', Validators.required],
      kelurahan: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      reasonJoin: ['']
    },
    { validators: (g) => this.passwordsMatch(g) }
  );

  onKecamatanChange(): void {
    const selectedKec = this.regForm.get('kecamatan')?.value;
    if (selectedKec && this.dataBatam[selectedKec]) {
      this.kelurahanList = this.dataBatam[selectedKec];
      this.regForm.patchValue({ kelurahan: '' });
    } else {
      this.kelurahanList = [];
    }
  }

  onSubmit(): void {
    if (this.regForm.valid) {
      this.submittedData = this.regForm.value;
    } else {
      this.regForm.markAllAsTouched();
    }
  }

  onReset(): void {
    this.regForm.reset({
      gender: ''
    });
    this.kelurahanList = [];
    this.submittedData = null;
  }
}