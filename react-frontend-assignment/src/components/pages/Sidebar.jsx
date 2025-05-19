import { useNavigate } from "react-router-dom"
import { routes } from "../arrayobject/Routes"

const Sidebar = ({ sidebarOpen }) => {
  const navigate = useNavigate();

  return (
      <div
        className={`${sidebarOpen ? 'w-64 p-6' : 'w-0 p-0'
          } bg-[#1e293b] rounded-xl text-white overflow-hidden transition-all duration-300 ease-in-out`}
      >
        {sidebarOpen && (
          <>
            <h1 className="text-3xl text-center font-bold mb-10">Creatiwise</h1>
            <nav>
              <ul className="flex flex-col gap-4">
                {routes.map((route) => (
                  <li key={route.path}>
                    <button
                      onClick={() => navigate(route.path)}
                      className="w-full flex items-center gap-4 p-3 rounded-xl bg-[#334155] hover:bg-[#475569] transition-colors cursor-pointer duration-200"
                    >
                      <span>{route.icon}</span>
                      <span className="text-lg font-medium">{route.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}
      </div>
  )
}

export default Sidebar
