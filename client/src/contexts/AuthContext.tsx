import { createContext, useState, useReducer, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { AuthUserType } from '../types/UserTypes'

type AuthState = {
  userData: AuthUserType | null;
};
type LoginAction = {
  type: "LOGIN";
  payload: AuthUserType | null;
};
type LogoutAction = {
  type: "LOGOUT";
};
type AuthContextValue = {
  state: AuthState;
  dispatch: React.Dispatch<LoginAction | LogoutAction>;
};
type AuthContextProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextValue | null>(null);
/* 
export const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);
/* 
export const AuthContext = createContext<AuthContextValue | null>({
  state: {
    userData: null
  },
  dispatch: () => {}
});
*/

const authReducer = (state: AuthState, action: LoginAction | LogoutAction) => {
  switch (action.type) {
    case "LOGIN":
      console.log("AuthContext: ", action.payload);
      localStorage.setItem("userData", JSON.stringify(action.payload));
      return { userData: action.payload };
    case "LOGOUT":
      localStorage.removeItem("userData");
      return { userData: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    userData: null
  });

  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const userData: AuthUserType = JSON.parse(localStorage.getItem("userData")!);
    if (userData) {
      dispatch({ type: "LOGIN", payload: userData });
    }
    setLoading(false); // Mark loading as false when done
  }, []);

  if (loading) {
    // render something else until useEffect is finished!
    return <LoadingSpinner className="w-20 h-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-200" />;
  } else {
    return (
      <AuthContext.Provider value={{ state, dispatch }}>
        {children}
      </AuthContext.Provider>
    );
  }

};
