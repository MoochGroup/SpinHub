import './App.css'
import Layout from "../Layout/Layout";
import Wheel from '../Wheel/Wheel';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/wheel" replace />} />
            <Route path="wheel" element={<Wheel/>} />
            <Route path="*" element={<Navigate to="/wheel" />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
