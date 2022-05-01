import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { userSlice } from '../store/reducers/userSlice';
import { IconGithub } from './components/iconGithub';
import { Input } from './components/input';
import './header.css';

export function Header() {
  const { searchValue } = useAppSelector((state) => state.reducerRequestApi);
  const dispatch = useAppDispatch();
  const { getSearchValue } = userSlice.actions;

  const handleChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(getSearchValue(e.currentTarget.value));
  };

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
        />
      </div>
    </div>
  );
}
