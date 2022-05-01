import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './header/header';
import { BeginPage } from './pages/beginPage/beginPage';
import { NotFoundPage } from './pages/notFoundPage/notFoundPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<BeginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
