import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "../Link/Link";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { path: "/", name: "Home", id: "home" },
    { path: "/about", name: "About", id: "about" },
    { path: "/services", name: "Services", id: "services" },
    { path: "/contact", name: "Contact", id: "contact" },
    { path: "/products", name: "Products", id: "products" },
    { path: "/blog", name: "Blog", id: "blog" },
    { path: "/portfolio", name: "Portfolio", id: "portfolio" },
    { path: "/faq", name: "FAQ", id: "faq" },
  ];

  return (
    <nav className="p-8 text-xl font-bold md:flex bg-gray-500">
      <div
        className="text-3xl font-semibold text-orange-300 md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open === true ? <AiOutlineClose></AiOutlineClose> : <BiMenuAltRight></BiMenuAltRight>}
      </div>
      <ul
        className={`ml-8 absolute md:static md:flex bg-gray-500 p-5 rounded-xl duration-1000 ${
          open ? "" : "-top-80"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
