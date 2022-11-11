import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav>
        <Link to="../services">Services</Link>
        <Link to="../orders">Orders</Link>
        <Link to="../customers">Customers</Link>
        <Link to="../pets">Pets</Link>
    </nav>
  );
}

export default Navigation;
