import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { InitialView } from './components/initialView';
import { MainView } from './components/mainView';
import './style/mainPage.css';

export function MainPage() {
  const { dataUser } = useAppSelector((state) => state.reducerRequestApi);
  return dataUser.id ? (
    <MainView />
  ) : (
    <InitialView
      classNameWrapper={'wrapper-start-search'}
      classNameIcon={'icon-start-search'}
      classNameText={'text-start-search'}
      text={'Start with searching a GitHub user'}
    />
  );
}
