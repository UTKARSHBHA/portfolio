import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">MyPortfolio</h1>
      <div className="flex gap-6">
        {navLinks.map(link => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-lg font-medium hover:text-blue-600 transition ${
              location.pathname === link.path ? 'text-blue-600' : 'text-gray-700'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
