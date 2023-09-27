import Box from "./components/Box";
import Sphere from './components/Sphere';
import Plitka from "./components/Tile";
import { Model } from "./components/Model";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Suspense } from 'react'
import Loader from "./components/Loader";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navigation />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Box />} />
            <Route path="/model" element={<Model />} />
            <Route path="/sphere" element={<Sphere />} />
            <Route path="/tile" element={<Plitka />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App;