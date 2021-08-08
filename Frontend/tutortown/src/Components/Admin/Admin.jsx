import React from "react";

import { ContextProvider } from "../../Context/SocketContext";
import AdminDashboard from "./AdminDashboard";
import { Main } from "./VideoVerification/Main";

export const Admin = () => {
  const [verify, setVerify] = React.useState(false);
  return (
    <ContextProvider>

      <Main/>
    </ContextProvider>
    // <></>
  );
};
