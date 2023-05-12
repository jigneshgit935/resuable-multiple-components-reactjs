import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { GoThreeBars } from 'react-icons/go';

const SidebarHere = () => {
  const [isOpen, setIsOpen] = useState(false);
  const iconOpen = (
    <GoThreeBars size={25} style={{ color: '#000', backgroundColor: '#fff' }} />
  );
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div>
        <button className="px-2 py-1 border-0 bg-white" onClick={toggleSidebar}>
          {iconOpen}
        </button>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
};

export default SidebarHere;
