import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

const addTodo = (fieldsToCreate: Omit<Todo, 'id'>) => {
  return client.post<Todo[]>('/todos', fieldsToCreate);
};

export const todoApi = {
  getTodos,
  addTodo,
};

// Add more methods here
