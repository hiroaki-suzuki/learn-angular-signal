import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stateful',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './stateful.component.html',
  styleUrl: './stateful.component.scss',
})
export class StatefulComponent {
  count = signal(0);

  increment() {
    this.count.update((value: number) => value + 1);
  }

  decrement() {
    this.count.update((value: number) => value - 1);
  }
}
