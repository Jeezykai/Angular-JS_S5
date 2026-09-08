import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Expense } from './models/expense.model';
import { RupiahPipe } from './pipes/rupiah.pipe';
import { CategoryPipe } from './pipes/category.pipe';
import { AmountColorDirective } from './directives/amount-color.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RupiahPipe, CategoryPipe, AmountColorDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  expenses: Expense[] = [
    { title: 'Beli Beras', category: 'food', amount: 200000 },
    { title: 'Bayar Internet', category: 'utility', amount: 500000 },
    { title: 'Nonton Bioskop', category: 'entertainment', amount: 150000 }
  ];
}