import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }
  const dispatch = context.dispatch
  const userData = context.state.userData
  return {
    dispatch,
    userData
  };
};

export default useAuthContext;
