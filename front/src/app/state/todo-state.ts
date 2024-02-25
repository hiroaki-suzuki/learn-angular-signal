import { ReadonlyState, SignalState } from './signal-state'
import { computed, signal } from '@angular/core'

export type Todo = {
  id: number
  title: string
  completed: boolean
}

export type TodoState = {
  todos: Todo[]
  uncompletedTodos: Todo[]
  completedTodos: Todo[]
}

export class TodoListState implements SignalState<TodoState> {
  todos = signal<Todo[]>([])

  uncompletedTodos = computed(() => {
    return this.todos().filter((todo) => !todo.completed)
  })

  completedTodos = computed(() => {
    return this.todos().filter((todo) => todo.completed)
  })

  addTodo(title: string | null) {
    const todoTitle = title?.trim()
    if (!todoTitle) {
      return
    }

    this.todos.update((todos) => [
      { id: todos.length + 1, title: todoTitle, completed: false },
      ...todos,
    ])
  }

  setTodoCompleted(id: number) {
    this.todos.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    })
  }

  asReadonly(): ReadonlyState<TodoState> {
    return {
      todos: this.todos,
      uncompletedTodos: this.uncompletedTodos,
      completedTodos: this.completedTodos,
    }
  }
}
