import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { InitialView } from './components/initialView';
import './style/mainPage.css';

export function MainPage() {
  const { data } = useAppSelector((state) => state.reducerRequestApi);
  return data.id ? (
    <div>{data.login}</div>
  ) : (
    <InitialView
      classNameWrapper={'wrapper-start-search'}
      classNameIcon={'icon-start-search'}
      classNameText={'text-start-search'}
      text={'Start with searching a GitHub user'}
    />
  );
}
