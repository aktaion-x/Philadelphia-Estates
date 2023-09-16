export type UserCredentialsType = {
  email: string;
  password: string;
};

export type UserType = {
  id: number;
  fullName: string;
  phone: string;
} & UserCredentialsType;

export type AuthUserType = {
  user: UserType;
  token: string;
};

