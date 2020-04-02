import React,  { useContext } from 'react';
import { Button } from './Button';
import { GlobalContext } from '../context/GlobalState';

export const ButtonClearTable = () => {
  const { deleteUsers } = useContext(GlobalContext);
  return (
    <Button onClick={deleteUsers}>
      Clear Table
    </Button>
  )
}
