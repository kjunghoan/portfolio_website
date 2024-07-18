import { useState } from "react";
import { Link } from "react-router-dom";

// TODO:
// finish css
// - maybe make item text larger
// - change hover effect
// - maybe change font ???
// upload a picture for side nav
// add socials (probably import logos/sgvs)
// set state for mobile

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navBarItems = [ 
    {
      title: "HOME",
      route: "/",
    },
    {
      title: "ABOUT ME",
      route: "/aboutMe",
    },
    // {
    //   title: "Projects",
    //   route: "/projects",
    // },
    // {
    //   title: "Contact Me",
    //   route: "/contact",
    // },
  ];

  return (
    <div className="fixed w-64 bg-gray-800 text-white h-screen left-0 top-0 overflow-y-auto">
      <div className="p-4">
        <div id="profilePicture">
          <img id="make this round, relative size and remove if the screen too small"/>
          <h2 className="text-2xl font-bold- mb-4">Jung Hoan Kim</h2> 
        </div>
        <nav>
          <ul>
            {navBarItems.map((nbi)=> {
              return (
                <Link to={nbi.route}  className="mb-2 hover:text-gray-300" key={navBarItems.indexOf(nbi)} >
                  <li>{nbi.title}</li>
                </Link>
              )
            })}
          </ul>
        </nav>
      </div>

      <div className="absolute bottom-4 left-4">
        <h1>LIST OF SOCIALS</h1>
      </div>
    </div>
  )
}
