import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './header/header';
import { useAppSelector } from './hooks/redux';
import { MainPage } from './pages/mainPage/mainPage';
import { NotFoundPage } from './pages/notFoundPage/notFoundPage';
import './pages/mainPage/style/mainPage.css';

function App() {
  const { isLoading } = useAppSelector((state) => state.reducerRequestApi);

  return (
    <div className="App">
      {isLoading && (
        <div className="overlay-popUp">
          <div className="loader"></div>
        </div>
      )}
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
