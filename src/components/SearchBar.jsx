import React from "react";
export function SearchBar() {
  return (
    <div>
      <div className="container ">
        <div className="row align-items-end">
          <div className="col">
            <input
              type="text"
              className="block w-full px-4 py-2 rounded text-purple-700 bg-white  focus:border-grey-400 focus:ring-grey-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search"
              list="frameworks"
              aria-label="search input"
            />
            <datalist id="frameworks">
              <option value="option 1"></option>
              <option value="option 2"></option>
            </datalist>

            <button
              aria-label="search Button"
              className="btn btn-secondary  mx-2 text-white border-l py-2 mb-1  bg-slate-900"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Search &nbsp;
              <svg
                role="img"
                aria-label="search icon"
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
