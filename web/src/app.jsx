import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

import Navbar from "./components/ui/navbar/navbar";
import Footer from "./components/ui/footer/footer";
import AboutUs from "./pages/info/aboutus";

import Register from "./pages/user/register";
import Login from "./pages/user/login";

import Routines from "./pages/routines/routinesList.jsx";
import RoutineDetail from "./pages/routines/routineSingle.jsx";
import Exercises from "./pages/exercises/exercisesList.jsx";
import ExerciseDetail from "./pages/exercises/exerciseSingle.jsx";

import { AlertProvider } from "./contexts/alert.context";


function App() {
  return (
    <>
      <Navbar />

      <main className="flex-shrink-0" >
        <AlertProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/routines" element={<Routines />} />
            <Route path="/routines/:id" element={<RoutineDetail />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/exercises/:id" element={<ExerciseDetail />} />
          </Routes>
        </AlertProvider>
      </main>

      {/*<Footer />*/}
    </>
  );
}

export default App;
