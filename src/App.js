import { Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';
import TodoDetail from './components/todoDetail';
import logo from './logo.svg';
import './App.css';

const loader = (<>Loading...</>);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Suspense fallback={loader}>
          <NetworkErrorBoundary>
            <h2>Todo List</h2>
            <TodoDetail id="1" />
          </NetworkErrorBoundary>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
