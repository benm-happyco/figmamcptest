import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PropertiesPage } from './pages/PropertiesPage.jsx';
import { ResidentsDrawerSamplePage } from './pages/ResidentsDrawerSamplePage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PropertiesPage />} />
        <Route path="/residents-drawer-sample" element={<ResidentsDrawerSamplePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
