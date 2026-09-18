import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { DaftarBarang } from './pages/daftar-barang/daftar-barang';
import { Peminjaman } from './pages/peminjaman/peminjaman';
import { KategoriLab } from './pages/kategori-lab/kategori-lab';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'daftar-barang', component: DaftarBarang },
  { path: 'peminjaman', component: Peminjaman },
  { path: 'kategori-lab', component: KategoriLab },
  { path: '**', redirectTo: 'dashboard' }
];