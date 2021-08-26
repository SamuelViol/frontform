import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from './pags';

function App() {
  return (
    <Router>
      <Home/>
     </Router>
    
  )
}

export default App
