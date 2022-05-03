import React from 'react';
import { useAppSelector } from '../../../hooks/redux';

import '../style/leftSideMain.css';

export function LeftSideMain() {
  const { dataUser } = useAppSelector((state) => state.reducerRequestApi);
  return (
    <div className="left-side-main">
      <div className="wrapper-avatar-main">
        <img src={dataUser.avatar_url} alt="avatar-user" className="avatar-main" />
      </div>
      <div className="name-main">{dataUser.name ? dataUser.name : 'Name hidden'}</div>
      <a href={dataUser.html_url} className="nick-main" target="_blank" rel="noreferrer">
        {dataUser.login}
      </a>
      <div className="wrapper-follow-main">
        <div className="followers-main">
          {dataUser.followers >= 1000
            ? `${(dataUser.followers / 1000).toFixed(1)}k followers`
            : `${dataUser.followers} followers`}
        </div>
        <div className="following-main">
          {dataUser.following >= 1000
            ? `${(dataUser.following / 1000).toFixed(1)}k followers`
            : `${dataUser.following} followers`}
        </div>
      </div>
    </div>
  );
}
