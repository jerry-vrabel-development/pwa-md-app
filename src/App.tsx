import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Posts from '../src/pages/Posted';
import MdxPage from '../src/pages/MdxPage';
import './styles/page-styles.css'
import './App.css'

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect the root to the posts list */}
        <Route path="/" element={<Navigate replace to="/posts" />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:slug" element={<MdxPage />} />
        {/* Fallback 404 */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
}
