// Dependencies.
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Start from './components/Start';
import Login from './components/Login';
import Register from './components/Register';
import PasswordReset from './components/PasswordReset';
import Dashboard from './components/Dashboard';
import Show from './components/Show';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Startsida</Link>
          </li>
          <li>
            <Link to="/login">Logga in</Link>
          </li>
          <li>
            <Link to="/register">Registrera dig</Link>
          </li>
          <li>
            <Link to="/reset">Återställ lösenord</Link>
          </li>
          <li>
            <Link to="/dashboard">Administration</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Start />} />
        <Route path="/show/:id" element={<Show />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<PasswordReset />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App;
