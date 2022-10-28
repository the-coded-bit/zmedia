import './App.css';
import { Charts, Navbar, Sidebar } from './components';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <Sidebar />
        <div>
          <Navbar />
          <Charts />
        </div>
      </header>
    </div>
  );
}

export default App;
