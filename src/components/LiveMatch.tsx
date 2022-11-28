import type { Match } from "../types";
import cn from "classnames";

function LiveMatch({ match }: { match: Match }) {
  return (
    <div
      className="flex flex-col"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <div className="flex justify-start items-center text-gray-500">
        <span className="normal-case">{match.league.round}</span>
      </div>
      <div className="grid grid-cols-8 py-4">
        <div className="flex flex-col gap-3 col-span-4 font-semibold">
          <div className="flex flex-row gap-2 pr-2 items-center">
            <img
              className="w-9 h-9"
              src={match.teams.home.logo}
              alt={match.teams.home.name}
            />
            <span
              className={cn(
                (match.goals.home !== null &&
                  match.goals.away !== null &&
                  match.goals.home > match.goals.away) ||
                  match.goals.home === match.goals.away
                  ? "text-gray-300"
                  : "text-gray-500",
                "truncate capitalize"
              )}
            >
              {match.teams.home.name}
            </span>
          </div>
          <div className="flex flex-row gap-2 pr-2 items-center">
            <img
              className="w-9 h-9"
              src={match.teams.away.logo}
              alt={match.teams.away.name}
            />
            <span
              className={cn(
                (match.goals.home !== null &&
                  match.goals.away !== null &&
                  match.goals.home < match.goals.away) ||
                  match.goals.home === match.goals.away
                  ? "text-gray-300"
                  : "text-gray-500",
                "truncate capitalize"
              )}
            >
              {match.teams.away.name}
            </span>
          </div>
        </div>
        <div className="flex flex-col col-span-1 items-start border-l-2 font-semibold border-slate-700 px-5 justify-center gap-6 text-gray-500">
          <div>
            <span
              className={cn(
                match.goals.home !== null &&
                  match.goals.away !== null &&
                  match.goals.home > match.goals.away &&
                  "text-gray-300"
              )}
            >
              {match.goals.home}
            </span>
          </div>
          <span
            className={cn(
              match.goals.home !== null &&
                match.goals.away !== null &&
                match.goals.away > match.goals.home &&
                "text-gray-300"
            )}
          >
            {match.goals.away}
          </span>
        </div>
        <div className="flex flex-col col-span-3 gap-1.5 justify-center items-center">
          <div className="flex flex-row items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <g fill="#fc5185" className="color000 svgShape">
                  <path
                    fill="#364f6b"
                    d="M19.07,4.93C17.18,3.04,14.67,2,12,2S6.82,3.04,4.93,4.93c-3.9,3.9-3.9,10.24,0,14.14		C6.88,21.02,9.44,22,12,22s5.12-0.98,7.07-2.93C22.97,15.17,22.97,8.83,19.07,4.93z M18.01,18.01c-3.31,3.31-8.71,3.32-12.02,0
		c-3.32-3.31-3.32-8.71,0-12.02C7.59,4.38,9.73,3.5,12,3.5s4.4,0.88,6.01,2.49C21.32,9.3,21.32,14.7,18.01,18.01z"
                    className="color121331 svgShape"
                  />
                  <path
                    fill="#364f6b"
                    d="M16.78,16.78C16.63,16.93,16.44,17,16.25,17s-0.38-0.07-0.53-0.22l-4.25-4.25
				c-0.07-0.07-0.12-0.15-0.16-0.24c-0.04-0.09-0.06-0.19-0.06-0.29V7.79c0-0.41,0.34-0.75,0.75-0.75c0.42,0,0.75,0.34,0.75,0.75
				v3.9l4.03,4.03C17.07,16.02,17.07,16.49,16.78,16.78z"
                    className="color121331 svgShape"
                  />
                </g>
              </svg>
            </svg>
            <span className="text-sm text-gray-500 ">
              {match.fixture.status.short}
            </span>
          </div>
          <span className="text-gray-300 font-semibold">
            {match.fixture.status.elapsed}'
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-end sm:gap-2 gap-1 items-center text-gray-500 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            version="1.0"
            viewBox="0 0 512 512"
          >
            <g
              fill="#364f6b"
              className="color000 svgShape"
              transform="matrix(.1 0 0 -.1 0 512)"
            >
              <path
                d="M955 4255c-201-37-368-162-456-340-58-119-69-175-69-352l0-152 373-3 372-3 67-32c94-44 160-109 206-202l37-75 0-535 0-536-31-65c-45-95-111-162-202-207l-76-38-373-3-373-3 0-152c0-177 11-234 70-352 93-188 270-314 485-345 55-7 284-10 720-8l640 3 0 439 0 438-69 25c-283 102-489 338-552 633-18 84-18 256 0 340 35 167 112 308 235 431 111 110 193 159 374 222 16 6 17 34 15 444l-3 438-660 2c-505 1-676-2-730-12zM2777 4263c-4-3-7-201-7-440 0-404 1-434 18-440 179-63 262-112 373-222 167-168 249-364 249-601 0-237-82-433-249-601-111-110-193-159-374-222-16-6-17-34-15-444l3-438 640-3c436-2 665 1 720 8 215 31 392 157 485 345 59 118 70 175 70 352l0 152-372 3-373 3-65 31c-95 45-162 111-207 202l-38 76 0 536 0 536 38 76c45 91 112 157 207 202l65 31 373 3 372 3 0 152c0 177-11 234-70 352-89 181-255 304-460 341-58 10-222 13-726 14-358 0-654-3-657-7z"
                className="color000 svgShape"
              />
              <path
                d="M430 2560l0-430 318 2 317 3 0 425 0 425-317 3-318 2 0-430zM4055 2977c-3-6-4-199-3-427l3-415 318-3 317-2 0 430 0 430-315 0c-243 0-317-3-320-13zM2265 2866c-98-96-148-243-126-368 16-92 62-181 126-244 31-30 62-54 70-54 13 0 15 52 15 360 0 308-2 360-15 360-8 0-39-24-70-54zM2770 2560c0-308 2-360 15-360 8 0 39 24 70 54 98 96 148 243 126 368-16 92-62 181-126 244-31 30-62 54-70 54-13 0-15-52-15-360z"
                className="color000 svgShape"
              />
            </g>
          </svg>
        </svg>
        <span className="truncate">
          {match.fixture.venue.name}, {match.fixture.venue.city}
        </span>
      </div>
    </div>
  );
}

export default LiveMatch;
