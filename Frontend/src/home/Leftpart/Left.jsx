import React from 'react'
import Search from './Search';
import Users from './Users';
import Logout from './Logout';

function Left() {
    return (
      <div className="text-gray-300" >
        <Search />
        <Users />
        <Logout />
      </div>
    );
  }
  
export default Left