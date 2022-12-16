import { useContext, createContext, PropsWithChildren, useState } from 'react';
import { UserType, UserContextType } from './types';


const userContext = createContext<UserContextType>({} as UserContextType);


export const UserProvider = ({ children }: PropsWithChildren) => {

  const [user, setUser] = useState<UserType>({} as UserType);

  const handleUser = (user: UserType) => setUser(user);
  
  const value = { user, handleUser };

  return(
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  )
}


export const useUser = () => {
  const context = useContext(userContext);

  const { user, handleUser } = context;

  return {
    user,
    handleUser
  }
}
