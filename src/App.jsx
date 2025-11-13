import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PropertiesPage } from './pages/PropertiesPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PropertiesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
