import { TestBed } from '@angular/core/testing';

import { PdsCqsTodoService } from './pds-cqs-todo.service';

describe('PdsCqsTodoService', () => {
  let service: PdsCqsTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdsCqsTodoService);
  });

  it('インスタンスが生成できること', () => {
    expect(service).toBeTruthy();
  });

  it('addTodo が呼び出せること', () => {
    service.addTodo('test');
    expect(service.state.todos().length).toBe(1);
  });

  it('setTodoCompleted が呼び出せること', () => {
    service.addTodo('test');
    service.setTodoCompleted(1);
    expect(service.state.todos()[0].completed).toBe(true);
  });
});
