import { ReactNode } from "react";
import Loader from "../styles/Loader";


const DefaultLayout = ({ children }: { children: ReactNode }) => {
    return (
      <>
   
        <div>{children}</div>
  
        <Loader/>
      </>
    );
  };
  
  export default DefaultLayout;