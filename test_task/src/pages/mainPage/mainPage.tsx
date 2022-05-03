import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { NotDataView } from './components/notDataView';
import { MainView } from './components/mainView';
import './style/mainPage.css';

export function MainPage() {
  const { dataUser, errorUser } = useAppSelector((state) => state.reducerRequestApi);

  return (
    <div>
      {dataUser.id && errorUser !== 'Request failed with status code 404' && <MainView />}
      {!dataUser.id && errorUser !== 'Request failed with status code 404' && (
        <NotDataView
          classNameWrapper={'wrapper-start-search'}
          classNameIcon={'icon-start-search'}
          classNameText={'text-start-search'}
          text={'Start with searching a GitHub user'}
        />
      )}
      {errorUser === 'Request failed with status code 404' && (
        <NotDataView
          classNameWrapper={'wrapper-start-search wrapper-not-found-user'}
          classNameIcon={'icon-start-search icon-not-found'}
          classNameText={'text-start-search'}
          text={'User not found'}
        />
      )}
    </div>
  );
}
