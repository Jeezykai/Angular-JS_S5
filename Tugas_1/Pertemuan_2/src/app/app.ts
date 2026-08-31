import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Description } from './description/description';
import { ContactUs } from './contact-us/contact-us';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, About, Description, ContactUs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Pertemuan_2');
}