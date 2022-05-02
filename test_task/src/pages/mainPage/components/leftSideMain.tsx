import React from 'react';
import { useAppSelector } from '../../../hooks/redux';

import '../style/leftSideMain.css';

export function LeftSideMain() {
  const { data } = useAppSelector((state) => state.reducerRequestApi);
  return (
    <div className="left-side-main">
      <div className="wrapper-avatar-main">
        <img src={data.avatar_url} alt="avatar-user" className="avatar-main" />
      </div>
      <div className="name-main">{data.name ? data.name : 'Имя скрыто'}</div>
      <a href={data.html_url} className="nick-main" target="_blank" rel="noreferrer">
        {data.login}
      </a>
      <div className="wrapper-follow-main">
        <div className="followers-main">
          {data.followers > 1000
            ? `${(data.followers / 1000).toFixed(1)}к followers`
            : `${data.followers} followers`}
        </div>
        <div className="following-main">
          {data.following > 1000
            ? `${(data.following / 1000).toFixed(1)}к followers`
            : `${data.following} followers`}
        </div>
      </div>
    </div>
  );
}
