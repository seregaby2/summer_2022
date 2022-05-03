import React from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { RepoDescription } from './repoDescription';

import '../style/rightSideMain.css';
import { NotDataView } from './notDataView';

export function RightSideMain() {
  const { dataUser, dataRepos } = useAppSelector((state) => state.reducerRequestApi);
  return (
    <div className="right-side-main">
      <div>
        {dataUser.public_repos !== 0 && (
          <div className="title-repo-main">{`Repositories (${dataUser.public_repos})`}</div>
        )}
        <div className="wrapper-repos-description-main">
          {dataUser.public_repos !== 0 &&
            dataRepos.map((e) => (
              <RepoDescription
                url={e.html_url}
                title={e.name || ''}
                description={e.description}
                key={e.id}
              />
            ))}
        </div>
      </div>

      {dataUser.public_repos === 0 && (
        <NotDataView
          classNameWrapper={'wrapper-start-search wrapper-repos-empty'}
          classNameIcon={'icon-start-search icon-repos-empty'}
          classNameText={'text-start-search'}
          text={'Repository list is empty'}
        />
      )}
    </div>
  );
}
