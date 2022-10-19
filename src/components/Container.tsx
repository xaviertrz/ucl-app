import { NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import { Helmet } from "react-helmet";
import { NavItemProps } from "../types";
import MobileMenu from "./MobileMenu";

function NavItem({ href, text }: NavItemProps) {
  const location = useLocation();
  const path = location.pathname;
  const isActive = path === href;

  return (
    <NavLink
      to={href}
      className={cn(
        isActive
          ? "font-bold text-gray-900"
          : "font-semibold  text-gray-500 hover:text-gray-800",
        "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg transition-all"
      )}
    >
      <span className="capsize">{text}</span>
    </NavLink>
  );
}

function Container(props: any) {
  const { children, ...customMeta } = props;
  const meta = {
    title: "Live",
    description: `All UEFA Champions League matches live scores`,
    image: "",
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={meta.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Helmet>

      <div className="flex flex-col justify-center px-8">
        <nav className="flex items-center justify-between w-full relative max-w-3xl border-gray-20 mx-auto pt-8 pb-8 sm:pb-16 text-white bg-opacity-60 ">
          <div className=" w-screen">
            <div className="ml-[-0.70rem] ">
              <MobileMenu />
              <NavItem href="/live" text="Live" />
              <NavItem href="/fixtures" text="Fixtures" />
              <NavItem href="/results" text="Results" />
              <NavItem href="/groups" text="Groups" />
            </div>
          </div>
        </nav>
      </div>

      <main className="justify-center px-8 bg-white">
        {children}
      </main>
    </div>
  );
}

export default Container;
