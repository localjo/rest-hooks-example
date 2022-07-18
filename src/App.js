import { Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';
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
          </NetworkErrorBoundary>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
