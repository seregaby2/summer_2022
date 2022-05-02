export interface StateForApi {
  data: dataUser;
  searchValue: string;
  isLoading: boolean;
  error: string;
}

export interface dataUser {
  login: string;
  name: string | null;
  id: number;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
}
