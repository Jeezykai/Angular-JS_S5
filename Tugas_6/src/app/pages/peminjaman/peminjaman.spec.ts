import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Peminjaman } from './peminjaman';

describe('Peminjaman', () => {
  let component: Peminjaman;
  let fixture: ComponentFixture<Peminjaman>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Peminjaman],
    }).compileComponents();

    fixture = TestBed.createComponent(Peminjaman);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
