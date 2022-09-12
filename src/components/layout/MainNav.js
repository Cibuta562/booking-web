import {Link} from "react-router-dom";

import classes from './MainNavigation.module.css'

function MainNav() {
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Maus Bookings</div>
            <nav>
                <ul>
                    <li>
                        <Link  to="/all-bookings" style={{ textDecoration: 'none' }}>All Bookings</Link>
                    </li>
                    <li>
                        <Link to="/new-booking" style={{ textDecoration: 'none' }}>New Booking</Link>
                    </li>
                    <li>
                        <Link to="/favorites " style={{ textDecoration: 'none' }}>Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default MainNav;