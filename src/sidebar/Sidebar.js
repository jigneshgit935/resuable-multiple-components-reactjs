import React, { useState } from 'react';
import '../sidebar/sidebar.css';
import { GrClose } from 'react-icons/gr';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const iconClose = (
    <GrClose size={25} style={{ color: '#000', backgroundColor: '#fff' }} />
  );
  return (
    <div className={isOpen ? 'sidebar active' : 'sidebar'}>
      <button onClick={toggleSidebar} className="px-2 py-1 border-0 bg-white">
        {iconClose}
      </button>
      <ul className="h-100  list-unstyled px-2 py-5 text-dark">
        <li>Home</li>
        <li onClick={toggleDropdown}>
          About
          {showDropdown && (
            <ul className="dropdown">
              <li>About Me</li>
              <li>About Who</li>
              <li>About Him</li>
            </ul>
          )}
        </li>
        <li>Contact </li>
      </ul>
    </div>
  );
};

export default Sidebar;
