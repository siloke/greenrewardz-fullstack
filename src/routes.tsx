import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"

const AppRoutes: React.FC = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registro" element={<Register />} />
        </Routes>
    )
}

export default AppRoutes;
