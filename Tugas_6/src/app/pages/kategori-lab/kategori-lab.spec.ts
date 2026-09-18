import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriLab } from './kategori-lab';

describe('KategoriLab', () => {
  let component: KategoriLab;
  let fixture: ComponentFixture<KategoriLab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KategoriLab],
    }).compileComponents();

    fixture = TestBed.createComponent(KategoriLab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
