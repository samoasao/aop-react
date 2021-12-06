import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import React, { Fragment } from "react";
import _ from "lodash";

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Upcoming Shows",
    dropdowns: [
      [
        {
          title: "Hedwig and the Angry Inch",
          url: "*",
        },
      ],
    ],
  },
  {
    title: "Buy Tickets",
    url: "#"
  },
  {
    title: "Archives",
    url: "#",
  },
];

const brandStyle = {
  height: "100px",
};

const getNavLink: (link: {
  title: string;
  url?: string;
  dropdowns?: { title: string; url: string }[][];
}) => any = (link) => {
  if (link.url) {
    return (
      <NavLink to={link.url} className="nav-link" exact>
        {link.title}
      </NavLink>
    );
  } else if (link.dropdowns) {
    const idName = _.camelCase(link.title) + "-nav";
    return (
      <Fragment>
        <span
          className="nav-link dropdown-toggle"
          id={idName}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {link.title}
        </span>
        <div className="dropdown-menu" aria-labelledby={idName}>
          {link.dropdowns.map((dropdownSection, i) => {
            return (
              <React.Fragment key={i}>
                {i > 0 ? <div className="dropdown-divider"></div> : null}
                {dropdownSection.map((dropdown, j) => getDropDown(dropdown, j))}
              </React.Fragment>
            );
          })}
        </div>
      </Fragment>
    );
  }
};

const getDropDown: (link: { title: string; url: string }, i: number) => any = (
  link,
  i
) => {
  if (link.url.includes("#")) {
    return (
      <Link key={i} to={link.url} className="dropdown-item">
        {link.title}
      </Link>
    );
  } else {
    return (
      <NavLink key={i} to={link.url} className="dropdown-item" exact>
        {link.title}
      </NavLink>
    );
  }
};

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark pb-0 fixed-top"
      id="sapac-nav"
    >
      <Link className="navbar-brand" to="/">
        Arizona Onstage
      </Link>

      <ul className="navbar-nav ml-auto border-bottom-0" id="navList">
        {links.map((link, i) => {
          return (
            <li
              key={i}
              className={"nav-item" + link.dropdowns ? " dropdown" : ""}
            >
              {getNavLink(link)}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
