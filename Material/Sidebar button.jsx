import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
   <div className="min-h-screen flex">
      {/* Sidebar (hidden on small screens) */}
      <aside
        className={`bg-gray-800 text-white w-64 ${
          sidebarOpen ? 'block' : 'hidden'
        } sm:block`}
      >
        {/* Sidebar content goes here */}
        <p className="p-4">Sidebar Content</p>
      </aside>

      {/* Page content */}
      <main className="flex-1 p-4">
        {/* Toggle button (shown on small screens) */}
        <button
          className="block sm:hidden text-white bg-gray-800 p-2"
          onClick={toggleSidebar}
        >
          Toggle Sidebar
        </button>

      
      </main>
    </div>
    </>
  )
}

export default App
