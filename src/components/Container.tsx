import { NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { NavItemProps } from "../types";
import MobileMenu from "./MobileMenu";
import currentSeasonYear from "../api";

function NavItem({ href, text }: NavItemProps) {
  const location = useLocation();
  const path = location.pathname;
  const isActive = path === href;

  return (
    <NavLink
      to={href}
      className={cn(
        isActive
          ? "font-semibold text-white brightness-200"
          : "font-normal  text-gray-400 hover:text-gray-300",
        "hidden md:inline-block p-1 sm:px-3 sm:py-2 tracking-tight transition-all"
      )}
    >
      <span className="capsize">{text}</span>
    </NavLink>
  );
}

function Container(props: any) {
  const nextYearSeason = currentSeasonYear! + 1;
  const season = nextYearSeason!.toString().slice(2);
  const { children, ...customMeta } = props;
  const githubUrl = "https://github.com/xaviertrz";
  const meta = {
    title: "UCL - Results",
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
            <div className="ml-[-0.70rem]">
              <MobileMenu />
              <NavItem href="/" text="Live" />
              <NavItem href="/fixtures" text="Fixtures" />
              <NavItem href="/results" text="Results" />
              <NavItem href="/groups" text="Groups" />
            </div>
            <div className="flex flex-row gap-4 items-center ">
              <div>
                <a href={githubUrl} target={"_blank"}>
                  <svg
                    height="32"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="32"
                    data-view-component="true"
                    className="fill-slate-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    />
                  </svg>
                </a>
              </div>
              <div className="hidden md:inline-block p-1 sm:px-3 sm:py-2 border border-gray-700 rounded-lg bg-slate-900 hover:bg-slate-800 transition-all text-gray-400 hover:text-gray-300 select-none">
                <span>
                  {currentSeasonYear}/{season}
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <main className="justify-center px-8 select-none bg-blue-opaque">
        {children}
      </main>
    </div>
  );
}

export default Container;
