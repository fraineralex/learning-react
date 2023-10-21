import React from 'react'
import { type TodoList, type TodoId, type Todo as TodoType } from '../types.d'
import { Todo } from './Todo'

interface Props {
  todos: TodoList
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompletedTodo }) => {
  return (
    <ul className='todo-list'>
      {todos.length > 0 &&
        todos.map(todo => (
          <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onRemoveTodo={onRemoveTodo}
              onToggleCompletedTodo={onToggleCompletedTodo}
            />
          </li>
        ))}
    </ul>
  )
}
