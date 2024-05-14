import {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  id: 'string';
  username: string;
  score: number;
}

interface UserContextType {
  addUser: (username: string) => void;
  users: User[];
  updateScore: (username: string, score: number) => void;
  updateUserName: (username: string, newUsername: string) => void;
}
export const userContext = createContext<UserContextType>({
  addUser: username => {},
  users: [],
  updateScore: (username, score) => {},
  updateUserName: (username, score) => {},
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
  const updateScore = (username: string, score: number) => {
    setUsers(prev => {
      const user = prev.filter(user => user.username == username)[0];
      const otherUsers = prev.filter(user => user.username !== username);
      const updateduser = {...user, score: user.score + Number(score)};
      return [...otherUsers, updateduser];
    });
  };
  const updateUserName = (username: string, newUsername: string) => {
    setUsers(prev => {
      const user = prev.filter(user => user.username == username)[0];
      const otherUsers = prev.filter(user => user.username !== username);
      const updateduser = {...user, username: newUsername};
      return [...otherUsers, updateduser];
    });
  };

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('users', JSON.stringify(users));
    } catch (e: any) {
      // saving error
      console.log(e?.message);
    }
  };
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('users');
      let data = jsonValue != null ? JSON.parse(jsonValue) : [];
      setUsers(data);
    } catch (e: any) {
      // error reading value
      console.log(e?.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    storeData();
  }, [users]);

  return (
    <userContext.Provider
      value={{addUser: addUser, users: users, updateScore, updateUserName}}>
      {children}
    </userContext.Provider>
  );
}
