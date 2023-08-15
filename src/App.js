import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Map from "./components/sections/Map";
import Chart from './components/sections/Chart';
import Settings from "./pages/Settings";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />}>
            <Route index element={<Navigate replace to="map-view" />} />
            <Route path="map-view" index element={<Map />} />
            <Route path="chart-view" element={<Chart />} />
          </Route>
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
