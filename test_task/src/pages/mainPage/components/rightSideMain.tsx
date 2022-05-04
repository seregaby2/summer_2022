import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { RepoDescription } from './repoDescription';
import { NotDataView } from './notDataView';
import ReactPaginate from 'react-paginate';
import { userSlice } from '../../../store/reducers/userSlice';
import '../style/rightSideMain.css';
import '../style/paginate.css';

export function RightSideMain() {
  const { dataUser, dataRepos, currentPage } = useAppSelector((state) => state.reducerRequestApi);
  const dispatch = useAppDispatch();
  const { getCurrentPage } = userSlice.actions;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePageClick = (event: any) => {
    dispatch(getCurrentPage(event.selected + 1));
  };

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
      {dataUser.public_repos !== 0 && (
        <div id="container-paginate">
          <span className="description-paginate">
            {`
          ${1 + 4 * (currentPage - 1)}-${
              4 + 4 * (currentPage - 1) > dataUser.public_repos
                ? dataUser.public_repos
                : 4 + 4 * (currentPage - 1)
            } of 
          ${dataUser.public_repos} items`}
          </span>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={Math.ceil(dataUser.public_repos / 4)}
            marginPagesDisplayed={1}
            previousLabel="<"
            breakClassName={'page-item'}
            containerClassName={'pagination'}
            pageClassName={'page-item'}
            previousClassName={'page-item'}
            nextClassName={'page-item'}
            activeClassName={'active'}
          />
        </div>
      )}
    </div>
  );
}
