import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/ui/navbar/navbar';
import Footer from './components/ui/footer/footer';


function App() {
  return (
    <>
    <main className="flex-shrink-0">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    
    </main> 
    <Footer/>

    </>
  );
}

export default App;
