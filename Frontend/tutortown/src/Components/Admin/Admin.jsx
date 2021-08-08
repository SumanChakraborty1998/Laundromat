import React from "react";
import { Main } from "./VideoVerification/Main";
import { ContextProvider } from "../../Context/SocketContext";

export const Admin = () => {
  const [verify, setVerify] = React.useState(false);
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
    //<></>
  );
};
