import { Match } from "../types";
import cn from "classnames";

function Game({ match, date }: { match: Match; date: string[] }) {
  const normalizedDate = date[0];
  const hours12Format = new Date(date[1]).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  return (
    <div className="flex flex-col border-b-2 border-slate-700 text-gray-400">
      <div className="flex flex-row justify-between pb-5">
        <span className="normal-case">{match.league.round}</span>
        <span className="lowercase">{normalizedDate}</span>
      </div>
      <div
        className={cn(
          match.fixture.status.long === "Match Finished" && "gap-3",
          "grid sm:gap-0 grid-cols-7 font-semibold pb-3"
        )}
      >
        <div className="flex flex-row col-span-3 md:gap-3 gap-2 items-center justify-end">
          <span className="text-gray-300 truncate capitalize">
            {match.teams.home.name}
          </span>
          <img
            src={match.teams.home.logo}
            alt={match.teams.home.name}
            className="sm:w-9 sm:h-9 w-8 h-8"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          {match.fixture.status.long === "Match Finished" ? (
            <div className="flex flex-row sm:gap-3 sm:text-lg text-base gap-2 text-gray-500">
              <span
                className={cn(
                  match.goals.home != null &&
                    match.goals.away != null &&
                    match.goals.home > match.goals.away &&
                    "text-gray-300"
                )}
              >
                {match.goals.home}
              </span>
              <span>-</span>
              <span
                className={cn(
                  match.goals.home !== null &&
                    match.goals.away !== null &&
                    match.goals.home < match.goals.away &&
                    "text-gray-300"
                )}
              >
                {match.goals.away}
              </span>
            </div>
          ) : (
            <span className="text-gray-400 text-lg font-semibold">v</span>
          )}
        </div>
        <div className="flex flex-row sm:gap-3 gap-2 col-span-3 items-center justify-start">
          <img
            src={match.teams.away.logo}
            alt={match.teams.away.name}
            className="sm:w-9 sm:h-9 w-8 h-8"
          />
          <span className="text-gray-300 truncate capitalize">
            {match.teams.away.name}
          </span>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-between text-sm tracking-tight py-1.5 text-gray-500 font-semibold">
        <div className="flex flex-row items-center gap-1.5 font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              enableBackground="new 0 0 299.998 299.998"
              viewBox="0 0 299.998 299.998"
            >
              <path
                fill="#364f6b"
                d="M149.997,0C67.157,0,0.001,67.158,0.001,149.995s67.156,150.003,149.995,150.003s150-67.163,150-150.003
			S232.836,0,149.997,0z M160.355,168.337c-0.008,0.394-0.067,0.788-0.122,1.183c-0.039,0.296-0.057,0.599-0.124,0.89
			c-0.067,0.303-0.182,0.602-0.28,0.905c-0.117,0.366-0.226,0.731-0.379,1.076c-0.029,0.06-0.039,0.124-0.065,0.184
			c-0.226,0.482-0.488,0.934-0.775,1.362c-0.018,0.026-0.042,0.052-0.06,0.078c-0.327,0.48-0.7,0.916-1.092,1.325
			c-0.109,0.112-0.22,0.213-0.335,0.319c-0.345,0.329-0.708,0.63-1.094,0.905c-0.119,0.086-0.233,0.176-0.358,0.259
			c-0.495,0.324-1.014,0.609-1.554,0.843c-0.117,0.052-0.239,0.083-0.358,0.13c-0.456,0.176-0.918,0.322-1.395,0.433
			c-0.171,0.041-0.34,0.078-0.514,0.109c-0.612,0.112-1.232,0.189-1.86,0.189c-0.127,0-0.257-0.039-0.384-0.044
			c-0.602-0.023-1.198-0.07-1.771-0.192c-0.179-0.039-0.355-0.117-0.534-0.166c-0.534-0.145-1.056-0.306-1.554-0.529
			c-0.057-0.029-0.117-0.034-0.174-0.06l-57.515-27.129c-5.182-2.443-7.402-8.626-4.959-13.808
			c2.443-5.179,8.626-7.402,13.808-4.959l42.716,20.144V62.249c0-5.729,4.645-10.374,10.374-10.374s10.374,4.645,10.374,10.374
			V168.15h0.002C160.373,168.212,160.355,168.274,160.355,168.337z"
                className="color000 svgShape"
              />
            </svg>
          </svg>
          <span>{hours12Format}</span>
        </div>
        <div className="flex flex-row sm:gap-2 gap-1 items-center">
          <div className="flex flex-row items-center sm:gap-2 gap-1">
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
            <span className="sm:w-full w-44 truncate pr-5">
              {match.fixture.venue.name}, {match.fixture.venue.city}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fixture({ matches, date }: { matches: Match[]; date: string }) {
  const normalizedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    weekday: "long",
    month: "long",
  });

  const filteredMatches = matches.filter(
    (match) => match.fixture.date.split("T")[0] === date
  );

  return (
    <div className="border-b-2 border-slate-500">
      <div className="flex flex-col gap-6 pt-4">
        {filteredMatches.map((match) => (
          <Game
            key={match.fixture.id}
            match={match}
            date={[normalizedDate, match.fixture.date]}
          />
        ))}
      </div>
    </div>
  );
}

export default Fixture;
