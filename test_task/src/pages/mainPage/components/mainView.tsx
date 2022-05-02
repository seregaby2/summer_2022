import React from 'react';
import { LeftSideMain } from './leftSideMain';

export function MainView() {
  return (
    <div className="wrapper-main">
      <LeftSideMain />
      <div className="right-side-main"></div>
    </div>
  );
}
