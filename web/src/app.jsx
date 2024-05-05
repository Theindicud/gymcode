import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/ui/navbar/navbar';
import Footer from './components/ui/footer/footer';
import Register from './pages/register';
import Login from './pages/login';


function App() {
  return (
    <>
    <Navbar />

    <main className="flex-shrink-0">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    
    </main> 
    <Footer/>

    </>
  );
}

export default App;
