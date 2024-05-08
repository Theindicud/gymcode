import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/ui/navbar/navbar";
import Footer from "./components/ui/footer/footer";
import Register from "./pages/user/register";
import AboutUs from "./pages/info/aboutus";
import Login from "./pages/user/login";
import Routine from "./pages/routines";
import Exercises from "./pages/exercises/exercises.jsx";
import Exercise from "./pages/exercises/exercise.jsx";

import { AlertProvider } from "./contexts/alert.context";

function App() {
  return (
    <>
      <Navbar />

      <main className="flex-shrink-0 py-5" >
        <AlertProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/routines" element={<Routine />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/exercises/:id" element={<Exercise />} />
          </Routes>
        </AlertProvider>
      </main>

      <Footer />
    </>
  );
}

export default App;
