import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Index from './pages/Index';
import About from './pages/About';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';
import Certificate from './pages/Certificate';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog1' element={<Blog1 />} />
          <Route path='/blog2' element={<Blog2 />} />
          <Route path='/blog3' element={<Blog3 />} />
          <Route path='/certificate' element={<Certificate />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;


