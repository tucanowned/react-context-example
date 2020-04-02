import React, { useContext } from 'react';
import { Button } from './Button';
import { GlobalContext } from '../context/GlobalState';

export const ButtonGetUsers = () => {
  const { getUsers } = useContext(GlobalContext);
  return (
    <Button dark onClick={getUsers}>
      Get Users
    </Button>
  )
}
