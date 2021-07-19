//using context Api to keep track of the users everywhere in the application and also to reduce the hassle of props drilling.
//NOTICE THE HEADER SECTION ONCE LOGED IN/SIGN UP YOU WILL GET THE REGISTERED EMAIL DISPLAYED THERE

import { createContext } from "react";

export const UserContext = createContext();
