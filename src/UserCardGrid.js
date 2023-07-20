// UserCardGrid.js

import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border:none;
  cursor: pointer;
`;

const Loader = styled.div`
  border: 4px solid black;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const CardGrid = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  padding: 10px;
`;

const UserCard = styled.div`
  background-color:orange;
  padding: 15px;
  border-radius: 50px;
  box-shadow: 2px 5px 10px rgba(0.1, 0.1, 0.1, 0.1);
`;

const UserCardGrid = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <Navbar>
        <div><b>Brand Name</b></div>
        <Button onClick={getUsers} disabled={loading}>
          <b>Get Users</b>
        </Button>
      </Navbar>
      {loading && <Loader />}
      <CardGrid>
        {users.map((user) => (
          <UserCard key={user.id}>
            <img src={user.avatar} alt={user.first_name} />
            <h3>{`${user.first_name} ${user.last_name}`}</h3>
            <p>Email: {user.email}</p>
          </UserCard>
        ))}
      </CardGrid>
    </div>
  );
};

export default UserCardGrid;
