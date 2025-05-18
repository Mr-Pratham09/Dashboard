import { useState } from 'react'
import { users } from '../arrayobject/Users'
import { columns } from '../arrayobject/Columns'
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi'
import DataTable from 'react-data-table-component'
import SkeletonLoader from '../loader/SkeletonLoader'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({ toggleSideBar, sidebarOpen }) => {
    const [searchText, setSearchText] = useState("")

    const inputChange = (e) => {
        setSearchText(e.target.value)
    }

    const filteredUsers = users.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.email.toLowerCase().includes(searchText.toLowerCase())
    )

    const navigate = useNavigate();

    return (
        <>
            <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleSideBar}
                        className="text-2xl p-2 rounded-md bg-gray-300 cursor-pointer hover:bg-gray-400 transition"
                        aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}>
                        <FiMenu />
                    </button>
                    <h1 className="text-3xl font-bold">My Dashboard</h1>
                </div>

                <div className="flex gap-3 justify-center items-center">
                    <button onClick={() => navigate('/login')} className="py-2 px-3 w-[90px] hover:bg-purple-950 rounded-md bg-purple-900 cursor-pointer text-white">Login</button>
                    <button onClick={() => navigate('/signin')} className="py-2 px-3 w-[90px] hover:bg-purple-950 rounded-md bg-purple-900 cursor-pointer text-white">Sign In</button>
                </div>
            </div>

            <div className="p-6 bg-white rounded shadow flex flex-col gap-5">
                <SkeletonLoader>
                    <>
                        <h2 className="text-2xl font-semibold">User List</h2>
                        <input
                            type="text"
                            placeholder="Search users by name or email..."
                            onChange={inputChange}
                            className="py-2 px-5 bg-[#f1efec] outline-none w-full rounded-3xl"
                        />
                        <div className="max-h-[400px] overflow-y-auto">
                            <DataTable
                                columns={columns}
                                data={filteredUsers}
                                fixedHeader
                                fixedHeaderScrollHeight="300px"
                                pagination
                                highlightOnHover
                                striped
                            />
                        </div>
                    </>
                </SkeletonLoader>
            </div>
        </>
    )
}

export default Dashboard
