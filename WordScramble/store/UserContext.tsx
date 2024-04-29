import {createContext, useState} from 'react';

interface User {
  id: 'string';
  username: string;
  score: number;
}

interface UserContextType {
  addUser: (username: string) => void;
  users: User[];
}
export const userContext = createContext<UserContextType>({
  addUser: username => {},
  users: [],
});

export function UserContextProvider({children}: {children: any}) {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (username: string) => {
    setUsers((prev: any) => {
      return [
        ...prev,
        {
          id: Date.now().toString(),
          username: username,
          score: 0,
        },
      ];
    });
  };

  return (
    <userContext.Provider value={{addUser: addUser, users: users}}>
      {children}
    </userContext.Provider>
  );
}
