import React from 'react';
import { NotDataView } from '../mainPage/components/notDataView';

export function NotFoundPage() {
  return (
    <div>
      <NotDataView
        classNameWrapper={'wrapper-start-search wrapper-not-found-user'}
        classNameIcon={'icon-start-search icon-repos-empty'}
        classNameText={'text-start-search'}
        text={'Enter correct adress'}
      />
    </div>
  );
}
