import { useState, useEffect } from "react";
import useDelayedRender from "use-delayed-render";
import cn from "classnames";
import { NavLink } from "react-router-dom";

import styles from "../../public/css/mobile-menu.module.css";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, "visible md:hidden")}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            "flex flex-col absolute bg-[#101c3b]",
            isMenuRendered && styles.menuRendered
          )}
        >
          <li
            className="border-b border-gray-700 text-gray-300 text-sm font-semibold"
            style={{ transitionDelay: "150ms" }}
          >
            <NavLink to="/">
              <a className="flex w-auto pb-4">Live</a>
            </NavLink>
          </li>
          <li
            className="border-b border-gray-700 text-gray-300 text-sm font-semibold"
            style={{ transitionDelay: "175ms" }}
          >
            <NavLink to="/fixtures">
              <a className="flex w-auto pb-4">Fixtures</a>
            </NavLink>
          </li>
          <li
            className="border-b border-gray-700 text-gray-300 text-sm font-semibold"
            style={{ transitionDelay: "200ms" }}
          >
            <NavLink to="/results">
              <a className="flex w-auto pb-4">Results</a>
            </NavLink>
          </li>
          <li
            className="border-b border-gray-700 text-gray-300 text-sm font-semibold"
            style={{ transitionDelay: "250ms" }}
          >
            <NavLink to="/groups">
              <a className="flex w-auto pb-4">Groups</a>
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
}

function MenuIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-300"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-300"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
