import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar bg-body-tertiary mb-3'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to="/">
                    GymCode
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;