import { useSuspense } from 'rest-hooks';
import TodoResource from '../resources/todo';

export default function TodoDetail({ id }) {
  const todo = useSuspense(TodoResource.detail(), { id });
  return (
    <div>
      <p>{todo.id}: {todo.title}</p>
    </div>
  );
}
