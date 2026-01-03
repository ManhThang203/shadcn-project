import { NavLink } from "react-router";

function Navigation() {
  const navItems = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/news",
      title: "News",
    },
    {
      to: "/contact",
      title: "Contact",
    },
    {
      to: "/use-state",
      title: "UseState",
    },
  ];
  return (
    <nav>
      {navItems.map((item, index) => (
        <li key={index}>
          <NavLink>{item.title}</NavLink>
        </li>
      ))}
    </nav>
  );
}
export default Navigation;
