import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard'
import Users from './components/routes/Users'
import Settings from './components/routes/Settings'
import Article from './components/routes/Article'
import Blog from './components/routes/Blog'
import Subscription from './components/routes/Subscription'
import Help from './components/routes/Help'
import About from './components/routes/About'
import Login from './components/buttons/Login'
import Signin from './components/buttons/Signin'

const AppRouter = ({ toggleSideBar, sidebarOpen }) => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard toggleSideBar={toggleSideBar} sidebarOpen={sidebarOpen} />} />
      <Route path="/users" element={<Users toggleSideBar={toggleSideBar} sidebarOpen={sidebarOpen} />} />
      <Route path="/settings" element={<Settings toggleSideBar={toggleSideBar} sidebarOpen={sidebarOpen} />} />
      <Route path="/article" element={<Article toggleSideBar={toggleSideBar} sidebarOpen={sidebarOpen} />} />
      <Route path="/auto-blog" element={<Blog toggleSideBar={toggleSideBar} sidebarOpen={sidebarOpen} />} />
      <Route path="/subscription" element={<Subscription toggleSideBar={toggleSideBar} sidebarOpen={sidebarOpen} />} />
      <Route path="/help" element={<Help toggleSideBar={toggleSideBar} sidebarOpen={sidebarOpen} />} />
      <Route path="/about" element={<About toggleSideBar={toggleSideBar} sidebarOpen={sidebarOpen} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  )
}

export default AppRouter
