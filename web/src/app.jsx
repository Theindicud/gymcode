import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/ui/navbar/navbar';


function App() {
  return (
    <>
    <main className="flex-shrink-0">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    
    </main> 
    </>
  );
}

export default App;
