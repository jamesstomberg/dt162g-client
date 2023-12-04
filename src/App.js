// Dependencies.
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Start from './components/Start';
import Login from './components/Login';
import Register from './components/Register';
import PasswordReset from './components/PasswordReset';
import Dashboard from './components/Dashboard';
import Show from './components/Show';
import CustomNav from './components/CustomNav';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <Router>
      <CustomNav />
      <Routes>
        <Route exact path="/" element={<Start />} />
        <Route path="/show/:id" element={<Show />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<PasswordReset />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  )
}

export default App;
