import { Outlet, Navigate } from "react-router-dom";


const ProtectedRoutes = () => {
    const auth = localStorage.getItem("logined")
    return auth == "true" ? <Outlet /> : <Navigate to={"/signin"} />
}

export default ProtectedRoutes
