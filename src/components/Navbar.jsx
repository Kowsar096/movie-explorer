import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  const navLinkClass = ({ isActive }) =>
    `rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-[#D6B36A] text-black"
        : "text-white/50 hover:bg-white/10 hover:text-[#E5C98A]"
    }`;

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-lg font-semibold tracking-tight text-[#F5F5F5] transition-colors hover:text-[#E5C98A]"
          >
            MovieExplorer
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 sm:flex">
            <NavLink to="/movies" className={navLinkClass}>
              Movies
            </NavLink>

            <NavLink to="/shows" className={navLinkClass}>
              TV Shows
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-[#E5C98A] sm:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-white/10 py-4 sm:hidden">
            <div className="flex flex-col gap-2">
              <NavLink
                to="/movies"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-[#D6B36A] text-black"
                      : "text-white/60 hover:bg-white/10 hover:text-[#E5C98A]"
                  }`
                }
              >
                Movies
              </NavLink>

              <NavLink
                to="/shows"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-[#D6B36A] text-black"
                      : "text-white/60 hover:bg-white/10 hover:text-[#E5C98A]"
                  }`
                }
              >
                TV Shows
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
