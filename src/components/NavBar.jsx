import { Link } from 'react-router-dom'

function NavBar(){
    return <>
    <nav>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/topics">Topics</Link>
    </nav>
    </>
}

export default NavBar
