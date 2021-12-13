import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faFilm, faTv, faTheaterMasks, faUser } from '@fortawesome/free-solid-svg-icons'

/** TODO: Page this into types.ts */
type Page = { name: string; pathname: string; icon?: any; }

/** FIXME: Create a list to store all menu-items (links to page)*/
export const pages: Page[] = [
  { name: "Home", pathname: "", icon: faHome },
  { name: "Search", pathname: "search", icon: faSearch },
  { name: "Tv", pathname: "tv", icon: faFilm },
  { name: "Movies", pathname: "movies", icon: faTv },
]


export const Logo: React.FC = () => <div id="logo">
  <Link to="/">
    <FontAwesomeIcon icon={faTheaterMasks} />
  </Link>
</div>

export const Profile: React.FC = () => <div id="profile"><FontAwesomeIcon icon={faUser} /></div>

export const MenuItem: React.FC<{ page: Page }> = ({ page }): JSX.Element =>
  <Link to={`/${page.pathname}`}>
    <div className="menuItemIconContainer">
      <FontAwesomeIcon icon={page.icon} /> <span className="showMenuItemName">{page.name}</span>
    </div>
  </Link>

const Container: React.FC = () => {
  return (
    <nav className="navbarContainer">
      <Logo />
      <ul id="navbarMenu" >
        {pages.map(
          (page, index) =>
            <li key={index}><MenuItem page={page} /></li>
        )
        }
      </ul>
      <Profile />
    </nav>
  );
};

export default Container;
