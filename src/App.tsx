import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HelloPage from './pages/HelloPage';
import './App.css'

export default function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HelloPage />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}
