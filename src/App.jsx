import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ResidentsPage } from './pages/ResidentsPage.jsx';
import { ResidentsTablePage } from './pages/ResidentsTablePage.jsx';
import { SamplePage } from './pages/SamplePage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResidentsPage />} />
        <Route path="/residents-table" element={<ResidentsTablePage />} />
        <Route path="/sample" element={<SamplePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
