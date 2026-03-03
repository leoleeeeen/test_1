import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header className="bg-blue-500 text-white px-8 py-4 h-20 flex items-center justify-between">
            <p className="font-semibold text-xl">Balance checker</p>
            <NavLink to={"/"} className="font-semibold">Devices</NavLink>
        </header>
    )
}

export default Header
