//Importar o Rautes e Route,
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./componets/Navbar";
import DetailAnimal from "./pages/DetailAnimal";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Animais/:id" element={<DetailAnimal />} />
      </Routes>
    </>
  );
}

export default App;
