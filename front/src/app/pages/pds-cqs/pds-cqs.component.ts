import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PdsCqsTodoService } from '../../services/pds-cqs-todo.service';

@Component({
  selector: 'app-pds-cqs',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  templateUrl: './pds-cqs.component.html',
  styleUrl: './pds-cqs.component.scss',
})
export class PdsCqsComponent {
  inputTodo = new FormControl('');
  #service = inject(PdsCqsTodoService);
  state = this.#service.state;

  addTodo() {
    console.log('addTodo');
    this.#service.addTodo(this.inputTodo.value);
    this.inputTodo.reset();
  }

  setTodoCompleted(id: number) {
    this.#service.setTodoCompleted(id);
  }
}
