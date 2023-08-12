import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" index element={<Home />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
