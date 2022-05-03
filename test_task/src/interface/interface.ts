export interface StateForApi {
  dataUser: dataUser;
  dataRepos: dataRepos[];
  searchValue: string;
  isLoading: boolean;
  errorUser: string;
  errorRepos: string;
}

export interface dataUser {
  login: string;
  name: string | null;
  id: number | null;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
}

export interface dataRepos {
  name: string | null;
  id: number;
  description: string;
  html_url: string;
}
