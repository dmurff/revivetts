"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function AddJobForm({ children }) {
  const [selected, setSelected] = useState("");

  return (
    <>
      <h2 className="text-base/7 font-semibold text-gray-900 mb-8">
        Company Name
      </h2>
      <label
        htmlFor="location"
        className="block text-sm/6 font-medium text-gray-900"
      >
        Company
      </label>
      <div className="mt-2 grid grid-cols-1">
        <select
          id="location"
          name="location"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
        >
          <option>Prime</option>
          <option>Penski</option>
          <option>Werner</option>
          <option>Uhaul</option>
          <option>New Company</option>
        </select>
        {selected === "New Company" && (
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Add Company
            </label>
            <div className="mt-2">
              <input
                id="newCompany"
                name="newCompany"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        )}
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
        />
        {children}
      </div>
    </>
  );
}
