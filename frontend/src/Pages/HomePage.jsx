import React from 'react';
import { Link } from 'react-router-dom';
import AddUser from '../Components/AddUser';

const HomePage = () => {
  const isAuthenticated = localStorage.getItem("token") || null;


  console.log(isAuthenticated, 'from HomePage');
  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <p>You need to login first to access this page.</p>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      ) : (
        <div>
          {/* Your protected content goes here */}
          <h1>Welcome to the Home Page!</h1>
          <AddUser/>
        </div>
      )}
    </div>
  );
};

export default HomePage;
