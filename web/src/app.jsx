import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/ui/navbar/navbar";
import Footer from "./components/ui/footer/footer";
import Register from "./pages/user/register";
import AboutUs from "./pages/info/aboutus";
import Login from "./pages/user/login";
import Routine from "./pages/routine";

import { AlertProvider } from "./contexts/alert.context";

function App() {
  return (
    <>
      <Navbar />

      <main className="flex-shrink-0">
        <AlertProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/routines" element={<Routine />} />
          </Routes>
        </AlertProvider>
      </main>

      <Footer />
    </>
  );
}

export default App;
