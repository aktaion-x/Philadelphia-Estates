import { useContext, useState } from "react";
import { ApiContext } from "../contexts/ApiContext";
import useAuthContext from "./useAuthContext";
import axios from "axios";

type LoginUserType = {
  email: string;
  password: string;
};
type AuthUserType = {
  user: {
    id: number;
    fullName: string;
    email: string;
    phone: string;
    password: string;
  };
  token: string;
};

const useUser = () => {
  const [error, setError] = useState<null | string>(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const api = useContext(ApiContext)!;

  const signupUser = async (fullName: string, email: string, phone: string, password: string) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await api.post<AuthUserType>("/User/Signup", {
        fullName,
        email,
        phone,
        password
      });

      dispatch({ type: "LOGIN", payload: res.data });
      setIsPending(false);
      return res;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        setError(error.response?.data);
      }
      setIsPending(false);
    }
  };

  const loginUser = async ({ email, password }: LoginUserType) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await api.post<AuthUserType>("/user/login", {
        email,
        password
      });
      dispatch({ type: "LOGIN", payload: res.data });
      setIsPending(false);
      return res;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        setError(error.response?.data);
      }
      setIsPending(false);
    }
  };

  const logoutUser = () => {
    dispatch({ type: "LOGOUT" });
  };

  return { error, isPending, signupUser, loginUser, logoutUser };
};

export default useUser;
