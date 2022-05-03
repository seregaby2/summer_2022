import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchRepos, fetchUser } from '../store/reducers/fetchUser';
import { userSlice } from '../store/reducers/userSlice';
import { IconGithub } from './components/iconGithub';
import { Input } from './components/input';
import './style/header.css';

export function Header() {
  const { searchValue, currentPage } = useAppSelector((state) => state.reducerRequestApi);
  const dispatch = useAppDispatch();
  const { getSearchValue, resetCurrentPage } = userSlice.actions;

  const handleChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(getSearchValue(e.currentTarget.value));
  };

  const handleClickEnter = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      dispatch(fetchUser(searchValue));
      dispatch(fetchRepos(searchValue, currentPage));
      dispatch(resetCurrentPage());
    }
  };

  useEffect(() => {
    dispatch(fetchRepos(searchValue, currentPage));
  }, [currentPage]);

  return (
    <div className="header-wrapper">
      <div className="header-content">
        <IconGithub />
        <Input
          classNameWrapper="wrapper-search"
          classNameIcon="icon-search"
          className="input-search"
          type="text"
          value={searchValue}
          placeholder="Enter GitHub username"
          onChange={handleChangeInput}
          onKeyDown={handleClickEnter}
        />
      </div>
    </div>
  );
}
