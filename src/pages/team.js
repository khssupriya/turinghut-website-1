import React, { useState } from "react"
import data from "../assets/teamData.json"
import "../styles/global.css"

export default function Team() {
  const { teamData } = data
  const [year, setYear] = useState(Object.keys(teamData).reverse()[0])

  return (
    <div className="min-h-90v w-full mt-5">
      <div className="flex justify-center items-center">
        <h1 className="text-5xl p-3 m-5 my-18 text-center text-gray-600">
          Team
          <select id="year" className="p-1 m-1 bg-gray-300 rounded-md">
            {Object.keys(teamData)
              .reverse()
              .map((year, i) => (
                <option
                  key={i}
                  onClick={() => setYear(year)}
                  className="text-sm"
                >
                  {year === "2018"
                    ? "Founders"
                    : year === "2019"
                    ? "CoFounders"
                    : year}
                </option>
              ))}
          </select>
        </h1>
      </div>

      <div className="flex flex-wrap justify-evenly">
        {teamData[year].map((member, i) => (
          <div key={i} className="flex-shrink-0 mt-5 w-72">
            <div className="relative flex flex-col items-center py-10">
              <img
                className="mb-3 w-40 h-40 rounded-full shadow-lg object-cover"
                src="./supriya.png"
                alt="team member picture"
              />
              <h3 className="m-2 text-xl font-medium text-gray-600">
                {member.name}
              </h3>
              <a
                className="top-44 absolute p-2.5 bg-white rounded-full"
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  fill="#1E40AF"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
