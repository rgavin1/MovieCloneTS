import React from "react";
import { Link } from "react-router-dom";

/** TODO: Page this into types.ts */
type Page = { name: string; pathname: string; }

/** FIXME: Create a list to store all menu-items (links to page)*/
export const pages: Page[] = [
  { name: "Home", pathname: "" },
  { name: "Search", pathname: "search" },
  { name: "Tv", pathname: "tv" },
  { name: "Movies", pathname: "movies" },
]


export const Logo: React.FC = () => <div>Logo</div>
export const Profile: React.FC = () => <div id="profile">Profile</div>

export const MenuItem: React.FC<{ page: Page }> = ({ page }): JSX.Element =>
  <Link to={`/${page.pathname}`}>{page.name}</Link>

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
