import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './header/header';
import { MainPage } from './pages/mainPage/mainPage';
import { NotFoundPage } from './pages/notFoundPage/notFoundPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
