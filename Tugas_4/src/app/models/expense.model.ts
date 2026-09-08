export interface Expense {
  title: string;
  category: 'food' | 'utility' | 'entertainment';
  amount: number;
}