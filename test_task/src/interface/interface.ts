export interface StateForApi {
  data: dataUser;
  searchValue: string;
  isLoading: boolean;
  error: string;
}

export interface dataUser {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
}
