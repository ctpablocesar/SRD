import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from 'react-redux';
import AdminNavbar from "./AdminNavbar";
import { AdminSidebar } from './AdminSidebar';
import UserNavbar from "./UserNavbar";
import UserSidebar from "./UserSidebar";


const AdminDashboard = ({ children }) => {

    const [showSidebar, setShowSidebar] = useState(true);

    const handleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="wrapper">
            <AdminSidebar show={showSidebar} />
            <div className="main">
                <UserNavbar handleSidebar={handleSidebar} />
                <main className="content">
                    <Toaster position="top-center" reverseOrder={false} />
                    <div className="container-fluid p-0"> {children} </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard