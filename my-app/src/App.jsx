import './App.css'
import AppRouter from './AppRouter'
import Sidebar from './components/pages/Sidebar'
import { useState } from 'react'


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSideBar = () => {
    setSidebarOpen(prev => !prev);
  }

  return (
    <div className='flex gap-3 bg-#111827; h-screen p-2 min-h-[calc(100vh-2rem)] box-border'>
      <Sidebar sidebarOpen={sidebarOpen} />
      <main className="flex-1 p-8 border border-red-800 rounded-xl bg-[#eef2ff]">
        <AppRouter toggleSideBar={toggleSideBar} sidebarOpen={sidebarOpen} />
      </main>
    </div>
  )
}

export default App