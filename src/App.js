import { Outlet } from 'react-router-dom'
import './App.css';
import Title from './components/Title/Title.js';

function App() {
  return (
    <div>
      <Title />
      <Outlet />
    </div>
  );
}

export default App;
