import { Link, NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
          ? "font-semibold text-gray-200"
          : "font-normal  text-gray-400 hover:text-gray-300",
        "hidden md:inline-block p-1 sm:px-3 sm:py-2 transition-all"
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
    <div className="bg-gray-900">
      <HelmetProvider>
        <Helmet>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:image" content={meta.image} />
          <meta property="og:url" content={meta.url} />
        </Helmet>
      </HelmetProvider>

      <div className="flex flex-col justify-center px-8 bg-blue-opaque">
        <nav className="flex items-center justify-between w-full relative max-w-3xl border-gray-20 mx-auto pt-8 pb-8 sm:pb-16 text-white bg-opacity-60">
          <div className=" w-screen flex justify-between">
            <div className="ml-[-0.40rem]">
              <MobileMenu />
              <NavItem href="/live" text="Live" />
              <NavItem href="/fixtures" text="Fixtures" />
              <NavItem href="/results" text="Results" />
              <NavItem href="/groups" text="Groups" />
            </div>
            <div className="flex flex-row gap-5 items-center ">
              <div>
                <a href="https://github.com/xaviertrz" target={"_blank"}>
                  <img
                    className="w-7 h-7 rounded-full"
                    src="./GitHub-Mark-Light-32px.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="hidden md:inline-block p-1 sm:px-3 sm:py-2 border border-gray-800 rounded-lg bg-slate-900 hover:bg-slate-800 transition-all text-gray-400 hover:text-gray-300">
                <span className="hover:cursor-default">Current Season</span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <main className="justify-center px-8 bg-blue-opaque">{children}</main>

      <footer className="flex flex-col justify-center px-8 bg-blue-opaque">
        <div className="flex items-center justify-center w-full relative max-w-3xl border-gray-20 mx-auto pt-8 pb-8 sm:pb-16 text-white bg-opacity-60">
          <a href="https://es.uefa.com/uefachampionsleague/" target={"_blank"}>
            <img src="./iconizer-UEFA_Champions_League_logo (1).svg" alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Container;
