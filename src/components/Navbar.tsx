import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between px-1">
      <h1>Logo</h1>
      <div className="flex gap-2">
        <Link to={"/"}>Home</Link>
        <Link to={"/search"}>Search</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
    </div>
  )
}

export default Navbar
