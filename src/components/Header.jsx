import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">BloodAlert</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Find Donors</a>
        <a href="#">Login</a>
      </nav>
    </header>
  );
}

export default Header;