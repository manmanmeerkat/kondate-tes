import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { Router } from './Router/Router';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Link to="/">Home</Link>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link> 
   </div>
    <Router/>
    </BrowserRouter>
  );
}

export default App;
