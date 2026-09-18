import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kategori-lab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kategori-lab.html',
  styleUrl: './kategori-lab.css'
})

export class KategoriLab implements OnInit {
  activeSection: string = 'lab-a';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.activeSection = fragment;
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  setActive(section: string) {
    this.activeSection = section;
  }
}