import { Component, signal } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, JsonPipe, TitleCasePipe, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import localeId from '@angular/common/locales/id';
import { HighlightDirective } from './directive/highlight.directive';
import { InitialsPipe } from './pipes/initials.pipe';

registerLocaleData(localeId);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    HighlightDirective, 
    InitialsPipe,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    JsonPipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isHighlight: boolean = false;
  textColor: string = '#2563eb';
  fontSize: number = 18;
  username: string = 'Jayy Bot';
  highlightColor = signal('#B2EBF2');
  fullName: string = 'Jayy Bot';
  amount: number = 15000000;
  selectedDate: string = '2026-09-04';
  toggleHighlight(): void {
    this.isHighlight = !this.isHighlight;
  }
}