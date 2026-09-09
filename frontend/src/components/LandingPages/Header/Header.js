import  { useState } from 'react';
import { Navbar, Sidebar } from './NewCombinedNav';

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
    <div className="header-container">
      <Navbar onHamburgerClick={() => setSidebarOpen(true)} clasName="navbar"/>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
    </>
  );
}

export default Header;