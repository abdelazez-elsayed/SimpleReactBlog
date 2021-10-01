
import {Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Elzoz Blog</h1>
            <div>
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
            </div>
        </nav>
      );
}
 
export default Navbar
