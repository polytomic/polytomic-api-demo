const Navbar = () =>{
    return (
      <header className="">
        <div className="py-3 bg-white">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex-1 max-w-xs ml-6 mr-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>

                  <input
                    type="search"
                    name=""
                    id=""
                    className="block w-full py-2 pl-10 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                    placeholder="Search here"
                  />
                </div>
              </div>

              <div className="flex items-center ml-4 lg:ml-0">
                <button
                  type="button"
                  className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                  id="options-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="flex items-center justify-between w-full">
                    <span className="flex items-center justify-between min-w-0 space-x-3">
                      <img
                        className="flex-shrink-0 object-cover bg-gray-300 rounded-full w-7 h-7"
                        src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/horizontal-menu/1/avatar-female.png"
                        alt=""
                      />
                      <span className="flex-1 hidden min-w-0 md:flex">
                        <span className="text-sm font-medium text-gray-900 truncate">
                          {" "}
                          Wade Warren{" "}
                        </span>
                      </span>
                    </span>
                    <svg
                      className="flex-shrink-0 w-4 h-4 ml-2 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
  export default Navbar;
  
  