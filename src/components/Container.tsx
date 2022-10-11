import { NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import { NavItemProps } from "../types";

function NavItem({ href, text }: NavItemProps) {
  const location = useLocation();
  const path = location.pathname;
  const isActive = path === href;

  return (
    <NavLink
      to={href}
      className={cn(
        isActive
          ? "font-bold text-gray-800 dark:text-gray-200"
          : "font-semibold text-gray-600 dark:text-gray-400 hover:text-white",
        "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg transition-all"
      )}
    >
      <span className="capsize">{text}</span>
    </NavLink>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex flex-col justify-center px-8 bg-blue-900">
        <nav className="flex items-center justify-between w-full relative max-w-5xl border-gray-20 mx-auto pt-8 pb-8 sm:pb-16 text-white bg-opacity-60 bg-orange-600">
          <div className="ml-[-0.84rem] bg-red-500">
            <NavItem href="/live" text="Live" />
            <NavItem href="/fixtures" text="Fixtures" />
            <NavItem href="/groups" text="Groups" />
          </div>
        </nav>
      </div>

      <main>{children}</main>
    </div>
  );
}

export default Container;
