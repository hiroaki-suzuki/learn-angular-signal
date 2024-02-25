import { TodoListState } from './todo-state';

describe('TodoState', () => {
  let sut: TodoListState;

  beforeEach(() => {
    // Arrange
    sut = new TodoListState();
  });

  it('Todoを追加できること', () => {
    sut.addTodo('task1');
    expect(sut.todos().length).toBe(1);
    expect(sut.todos()[0]).toEqual({ id: 1, title: 'task1', completed: false });
  });

  ['', '  ', '　', '　　', ' 　', '　 '].forEach((title) => {
    it(`'${title}'はTodoを追加しないこと`, () => {
      sut.addTodo(title);
      expect(sut.todos().length).toBe(0);
    });
  });

  it('Todoを完了できること', () => {
    sut.addTodo('task1');
    sut.setTodoCompleted(1);
    expect(sut.todos()[0].completed).toBe(true);
  });

  it('Todoを未完了にできること', () => {
    sut.addTodo('task1');
    sut.setTodoCompleted(1);
    expect(sut.todos()[0].completed).toBe(true);
    sut.setTodoCompleted(1);
    expect(sut.todos()[0].completed).toBe(false);
  });

  it('未完了Todoのみ取得できること', () => {
    sut.addTodo('task1');
    sut.addTodo('task2');
    sut.setTodoCompleted(1);
    expect(sut.uncompletedTodos().length).toBe(1);
    expect(sut.uncompletedTodos()[0]).toEqual({ id: 2, title: 'task2', completed: false });
  });

  it('完了Todoのみ取得できること', () => {
    sut.addTodo('task1');
    sut.addTodo('task2');
    sut.setTodoCompleted(1);
    expect(sut.completedTodos().length).toBe(1);
    expect(sut.completedTodos()[0]).toEqual({ id: 1, title: 'task1', completed: true });
  });
});
