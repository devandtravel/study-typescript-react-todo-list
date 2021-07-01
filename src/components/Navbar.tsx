import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => (
    <nav>
        <div className='nav-wrapper purple darken-2 px1'>
            <NavLink to='/' className='brand-logo'>
                Typescript and React
            </NavLink>
            <ul className='right hide-on-med-and-down'>
                <li>
                    <NavLink to='/'>Todo List</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)
