import AuthdResource from './auth';

export default class TodoResource extends AuthdResource {
  pk() { return this.id }
  static urlRoot = 'https://jsonplaceholder.typicode.com/todos';
}
