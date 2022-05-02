import React from 'react';
import { LeftSideMain } from './leftSideMain';
import { RightSideMain } from './rightSideMain';

export function MainView() {
  return (
    <div className="wrapper-main">
      <LeftSideMain />
      <RightSideMain />
    </div>
  );
}
