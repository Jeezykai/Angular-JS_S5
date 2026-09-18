import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarBarang } from './daftar-barang';

describe('DaftarBarang', () => {
  let component: DaftarBarang;
  let fixture: ComponentFixture<DaftarBarang>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaftarBarang],
    }).compileComponents();

    fixture = TestBed.createComponent(DaftarBarang);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
