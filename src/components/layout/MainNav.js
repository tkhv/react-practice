import { Link } from "react-router-dom";

import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups</div>
      <nav>
        <ul className={classes.ul}>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
