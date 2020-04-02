import React, { useContext } from 'react'
import { UsersTable } from './UsersTable';
import { ButtonGetUsers } from './ButtonGetUsers';
import { ButtonClearTable } from './ButtonClearTable';
import { SpinnerComponent } from 'react-element-spinner';

import { GlobalContext } from '../context/GlobalState';

export const Container = () => {
  const { loading } = useContext(GlobalContext);
  return (
    <>
      <SpinnerComponent loading={loading} position="centered" />
      <ButtonGetUsers />
      <ButtonClearTable />
      <UsersTable />
    </>
  )
}
