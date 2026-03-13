import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function FormFields() {
  return (
    <>
      <h2 className="text-base/7 font-semibold text-gray-900 mt-8">
        Contact Name
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        {/* <p className="mt-1 text-sm/6 text-gray-600">
        Use a permanent address where you can receive mail.
      </p> */}

        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm/6 font-medium text-gray-900"
          >
            First name
          </label>
          <div className="mt-2">
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Last name
          </label>
          <div className="mt-2">
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="email"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="phone"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Contact Phone
          </label>
          <div className="mt-2">
            <input
              id="phone"
              name="phone"
              type="text"
              autoComplete="phone"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
      </div>
      <h2 className="text-base/7 font-semibold text-gray-900 mt-8">
        Truck Info
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label
            htmlFor="unitNumber"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Unit Number
          </label>
          <div className="mt-2">
            <input
              id="unitNumber"
              name="unitNumber"
              type="text"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        {/*  radio code here*/}
        <div className="sm:col-span-4">
          <fieldset>
            {/* <legend className="text-sm/6 font-semibold text-gray-900">Notifications</legend>
      <p className="mt-1 text-sm/6 text-gray-600">How do you prefer to receive notifications?</p> */}

            <div className="mt-6 space-y-6 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
              <div className="flex items-center">
                <input
                  defaultChecked={true}
                  id="truck"
                  name="notification-method"
                  type="checkbox"
                  className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                />
                <label
                  htmlFor="truck"
                  className="ml-3 block text-sm/6 font-medium text-gray-900"
                >
                  Truck
                </label>
              </div>
              <div className="flex items-center">
                <input
                  defaultChecked={false}
                  id="trailer"
                  name="notification-method"
                  type="checkbox"
                  className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                />
                <label
                  htmlFor="trailer"
                  className="ml-3 block text-sm/6 font-medium text-gray-900"
                >
                  Trailer
                </label>
              </div>
            </div>
          </fieldset>
        </div>
        {/*  radio code here*/}

        <div className="sm:col-span-4">
          <label
            htmlFor="makeModelYear"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Make/Model/Year
          </label>
          <div className="mt-2">
            <input
              id="makeModelYear"
              name="makeModelYear"
              type="text"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="vin"
            className="block text-sm/6 font-medium text-gray-900"
          >
            VIN
          </label>
          <div className="mt-2">
            <input
              id="vin"
              name="vin"
              type="text"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        {/* <div className="sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Country
          </label>
          <div className="mt-2 grid grid-cols-1">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </div>
        </div> */}

        <h2 className="text-base/7 font-semibold text-gray-900 mt-8 col-span-full">
          Location of Unit
        </h2>
        <div className="col-span-full">
          <label
            htmlFor="street-address"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Street address
          </label>
          <div className="mt-2">
            <input
              id="street-address"
              name="street-address"
              type="text"
              autoComplete="street-address"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label
            htmlFor="city"
            className="block text-sm/6 font-medium text-gray-900"
          >
            City
          </label>
          <div className="mt-2">
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="region"
            className="block text-sm/6 font-medium text-gray-900"
          >
            State
          </label>
          <div className="mt-2">
            <input
              id="region"
              name="region"
              type="text"
              autoComplete="address-level1"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="postal-code"
            className="block text-sm/6 font-medium text-gray-900"
          >
            ZIP
          </label>
          <div className="mt-2">
            <input
              id="postal-code"
              name="postal-code"
              type="text"
              autoComplete="postal-code"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="problem"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Problem
          </label>
          <div className="mt-2">
            <textarea
              id="problem"
              name="problem"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
      </div>
    </>
  );
}
