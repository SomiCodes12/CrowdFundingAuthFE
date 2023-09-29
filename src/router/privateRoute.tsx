import React, { PropsWithChildren } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { user, userState } from "../global/GlobalState";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useSingleAccount } from "../hook/singleUser";

const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const value: any = useRecoilValue(userState);
  const [state, setState] = useRecoilState<any>(user);

  let myToken: any = {};
  let token: string = value;

  if (token) {
    myToken = jwt_decode(token);
    setState(myToken.id);
  }

  return (
    <div>{state ? <div>{children}</div> : <Navigate to="/sign-in" />}</div>
  );
};

export default PrivateRoute;
