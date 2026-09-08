import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
  standalone: true
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    const categories: Record<string, string> = {
      food: '🍜 Food',
      utility: '⚡ Utility',
      entertainment: '🎬 Entertainment'
    };
    return categories[value] || value;
  }
}