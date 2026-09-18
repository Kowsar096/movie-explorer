import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-black">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/shows" element={<Shows />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
