import { Routes, Route } from "react-router-dom"
import { Loadpage } from "./pages/Loadpage/Loadpage"
import { Login } from "./pages/login/Login"

export function Routermain() {
    return (
        <Routes>
            <Route path="/" element={<Loadpage />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}