import React from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { RepoDescription } from './repoDescription';

import '../style/rightSideMain.css';

export function RightSideMain() {
  const { dataUser, dataRepos } = useAppSelector((state) => state.reducerRequestApi);
  return (
    <div className="right-side-main">
      <div className="title-repo-main">{`Repositories (${dataUser.public_repos})`}</div>
      <div className="wrapper-repos-description-main">
        {dataRepos.map((e) => (
          <RepoDescription
            url={e.html_url}
            title={e.name || ''}
            description={e.description}
            key={e.id}
          />
        ))}
      </div>
    </div>
  );
}
