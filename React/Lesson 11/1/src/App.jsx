import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './store/actions/userAction';

const App = () => {
  const dispatch = useDispatch();

  const {users, loading, error} = useSelector(state => state);

  useEffect(()=>{
    dispatch(fetchUsers());
  },[]);

  return (
    <>
      <div>
        <h2>Users List</h2>

        <ul>
            {
              loading ? "Loading ..." : users && users.map(item => <li key={item.id}>{item.name}</li>)
            }
        </ul>
      </div>
    </>
  )
}

export default App