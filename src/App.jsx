import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BlankScreen } from './pages/BlankScreen.jsx';
import { DesignSystem } from './pages/DesignSystem.jsx';
import { ResidentListPage } from './pages/ResidentListPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResidentListPage />} />
        <Route path="/blank" element={<BlankScreen />} />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="/resident-list" element={<ResidentListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
