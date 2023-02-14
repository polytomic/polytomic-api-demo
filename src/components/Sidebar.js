import React from 'react'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (

    <div className="flex flex-col min-h-screen w-72 p-5">
      <div className="flex flex-col items-start p-3 mb-3">
        <img alt='circuit_logo' src="logo-light.svg" className="w-2/3" />
      </div>
      <div className="flex px-4 mb-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
        <div>Connect</div>
      </div><NavLink
        to="/dashboard"
        className={(navData) =>
          navData.isActive
            ? "flex cursor-pointer flex mb-2 text-base py-2 px-4 rounded-lg text-white bg-indigo-600"
            : "flex cursor-pointer flex mb-2 text-base py-2 px-4 hover:text-white rounded-lg hover:bg-indigo-600 text-gray-500"
        }
      >
        <div className="flex items-center mr-2">
          <i className="fa fa-home"></i>
        </div>
        <div>Dashboard</div>

      </NavLink><NavLink
        to="/connections"
        className={(navData) =>
          navData.isActive
            ? "flex cursor-pointer flex mb-2 text-base py-2 px-4 rounded-lg text-white bg-indigo-600"
            : "flex cursor-pointer flex mb-2 text-base py-2 px-4 hover:text-white rounded-lg hover:bg-indigo-600 text-gray-500"
        }
      >
        <div className="flex items-center mr-2">
          <i className="fa  fa-plug"></i>
        </div>
        <div>Connections</div>
        {/* <div className="flex-1 flex justify-end"> <div className="text-xs font-semibold text-red-600 bg-red-50 border border-red-300 rounded-full inline-flex items-center px-2  ">2</div></div> */}
      </NavLink><NavLink
        to="/audiencemodels"
        className={(navData) =>
          navData.isActive
            ? "flex cursor-pointer flex mb-2 text-base py-2 px-4 rounded-lg text-white bg-indigo-600"
            : "flex cursor-pointer flex mb-2 text-base py-2 px-4 hover:text-white rounded-lg hover:bg-indigo-600 text-gray-500"
        }
      >
        <div className="flex items-center mr-2">
          <i className="fa fa-cogs"></i>
        </div>
        <div>Audience Models</div>

      </NavLink><NavLink
        to="/audiencesyncs"
        className={(navData) =>
          navData.isActive
            ? "flex cursor-pointer flex mb-2 text-base py-2 px-4 rounded-lg text-white bg-indigo-600"
            : "flex cursor-pointer flex mb-2 text-base py-2 px-4 hover:text-white rounded-lg hover:bg-indigo-600 text-gray-500"
        }
      >
        <div className="flex items-center mr-2">
          <i className="fa fa-users"></i>
        </div>
        <div>Audience Syncs</div>

      </NavLink>
      <NavLink
        to="/customer"
        className={(navData) =>
          navData.isActive
            ? "flex cursor-pointer flex mb-2 text-base py-2 px-4 rounded-lg text-white bg-indigo-600"
            : "flex cursor-pointer flex mb-2 text-base py-2 px-4 hover:text-white rounded-lg hover:bg-indigo-600 text-gray-500"
        }
      >
        <div className="flex items-center mr-2">
          <i className="fa fa-id-card"></i>
        </div>
        <div>Customer 360</div>

      </NavLink><div className="flex px-4 mb-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
        <div>Comms</div>
      </div><NavLink
        to="/inbox"
        className={(navData) =>
          navData.isActive
            ? "flex cursor-pointer flex mb-2 text-base py-2 px-4 rounded-lg text-white bg-indigo-600"
            : "flex cursor-pointer flex mb-2 text-base py-2 px-4 hover:text-white rounded-lg hover:bg-indigo-600 text-gray-500"
        }
      >
        <div className="flex items-center mr-2">
          <i className="fa fa-comments-o"></i>
        </div>
        <div>Inbox</div>
        <div className="flex-1 flex justify-end"> <div className="text-xs font-semibold text-red-600 bg-red-50 border border-red-300 rounded-full inline-flex items-center px-2  ">New</div></div>
      </NavLink><NavLink
        to="/survey"
        className={(navData) =>
          navData.isActive
            ? "flex cursor-pointer flex mb-2 text-base py-2 px-4 rounded-lg text-white bg-indigo-600"
            : "flex cursor-pointer flex mb-2 text-base py-2 px-4 hover:text-white rounded-lg hover:bg-indigo-600 text-gray-500"
        }
      >
        <div className="flex items-center mr-2">
          <i className="fa fa-sticky-note"></i>
        </div>
        <div>Survey</div>

      </NavLink><div className="flex px-4 mb-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
        <div>Configuration</div>
      </div><NavLink
        to="/settings"
        className={(navData) =>
          navData.isActive
            ? "flex cursor-pointer flex mb-2 text-base py-2 px-4 rounded-lg text-white bg-indigo-600"
            : "flex cursor-pointer flex mb-2 text-base py-2 px-4 hover:text-white rounded-lg hover:bg-indigo-600 text-gray-500"
        }
      >
        <div className="flex items-center mr-2">
          <i className=" fa fa-sliders"></i>
        </div>
        <div>Settings</div>

      </NavLink>
    </div>
  )
}

export default Sidebar