import React from 'react';

import { Toggle, ToggleItem, } from "@tremor/react";

const Customer = () => {
  return (

    <div className="p-4">
      <div className="grid grid-cols-12"><div className="col-span-12 p-4">
        <div className="p-4 h-full w-full ">
          <div className=" bg-white rounded-xl">

            <div className="flex flex-row justify-between ">
              <div className="p-4 font-bold text-2xl">Customer 360</div>
              <div className="p-4 pb-10">
                <input
                  placeholder="Search"
                  className="p-2 text-black  bg-gray-100 rounded-md  "
                />
              </div>
            </div>
            <div className=" flex flex-row border-t-2 border-gray-200 ">
              <div className=" w-64  grow pl-4 py-4 ">Name</div>
              <div className="w-40 grow pl-4 py-4 ">ID</div>
              <div className="w-40 grow pl-4 py-4">Class</div>
              <div className="w-40 grow pl-4 py-4 ">Age</div>
              <div className="w-40 grow pl-4 py-4">Gender</div>
              <div className="w-64  grow pl-4 py-4  ">Active</div>
            </div>
            <div className="flex flex-row   ">
              <div className="w-64 grow pl-4 py-4  ">
                <img
                  alt='cr7'
                  className="rounded-full w-10 h-10 object-cover inline mr-2"
                  src="https://www.planetsport.com/image-library/square/500/m/manchester-united-cristiano-ronaldo-16-october-2021.jpg"
                />
                Cristiano Ronaldo
              </div>
              <div className="w-40 grow pl-4 py-4 ">SC12323</div>
              <div className="w-40 grow pl-4 py-4 ">Science </div>
              <div className="w-40 grow pl-4 py-4 ">17</div>
              <div className="w-40 grow pl-4 py-4 ">Male</div>
              <div className="w-64 grow pl-4 py-2 ">
                <Toggle
                  color="zinc"
                  defaultValue={1}
                  handleSelect={(value) => console.log(value)}
                >
                  <ToggleItem value={1} text="On" />
                  <ToggleItem value={2} text="Off" />
                </Toggle>
              </div>
            </div>
            <div className="flex flex-row   ">
              <div className="w-64 grow pl-4 py-4  ">
                <img
                  alt='profilepic'
                  className="rounded-full w-10 h-10 object-cover inline mr-2"
                  src="https://media-exp1.licdn.com/dms/image/C5103AQGbL8iROlQ3Nw/profile-displayphoto-shrink_200_200/0/1580911372619?e=2147483647&v=beta&t=L9KHIIYn_FqKOzzDVfqQWGGj8wA_7cf-05PAKmLENfY"
                />
                Om Fuke
              </div>
              <div className="w-40 grow pl-4 py-4 ">SC12323</div>
              <div className="w-40 grow pl-4 py-4 ">San Francisco</div>
              <div className="w-40 grow pl-4 py-4 ">66</div>
              <div className="w-40 grow pl-4 py-4 ">2009/01/12</div>
              <div className="w-64 grow pl-4 py-2 ">
                <Toggle
                  color="zinc"
                  defaultValue={1}
                  handleSelect={(value) => console.log(value)}
                >
                  <ToggleItem value={1} text="On" />
                  <ToggleItem value={2} text="Off" />
                </Toggle>
              </div>
            </div>
            <div className="flex flex-row   ">
              <div className="w-64 grow pl-4 py-4  ">
                <img
                  alt='profilepic'
                  className="rounded-full w-10 h-10 object-cover inline mr-2"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d4/AUT_vs._WAL_2016-10-06_%28155%29.jpg"
                />
                cristiano Ronaldo
              </div>
              <div className="w-40 grow pl-4 py-4 ">SC12323</div>
              <div className="w-40 grow pl-4 py-4 ">San Francisco</div>
              <div className="w-40 grow pl-4 py-4 ">66</div>
              <div className="w-40 grow pl-4 py-4 ">2009/01/12</div>
              <div className="w-64 grow pl-4 py-2 ">
                <Toggle
                  color="zinc"
                  defaultValue={1}
                  handleSelect={(value) => console.log(value)}
                >
                  <ToggleItem value={1} text="On" />
                  <ToggleItem value={2} text="Off" />
                </Toggle>
              </div>
            </div>
            <div className="flex flex-row  ">
              <div className="w-64 grow pl-4 py-4  ">
                <img
                  alt='profilepic'
                  className="rounded-full w-10 h-10 object-cover inline mr-2"
                  src="https://mediacloud.theweek.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1651055330/theweek/2022/April%20/Karim-Benzema-Real-Madrid-Man-City-GettyImages-1240259095.jpg"
                />
                Karim Benzema
              </div>
              <div className="w-40 grow pl-4 py-4 ">SC12323</div>
              <div className="w-40 grow pl-4 py-4 ">San Francisco</div>
              <div className="w-40 grow pl-4 py-4 ">66</div>
              <div className="w-40 grow pl-4 py-4 ">2009/01/12</div>
              <div className="w-64 grow pl-4 py-2 ">
                <Toggle
                  color="zinc"
                  defaultValue={1}
                  handleSelect={(value) => console.log(value)}
                >
                  <ToggleItem value={1} text="On" />
                  <ToggleItem value={2} text="Off" />
                </Toggle>
              </div>
            </div>
            <div className=" pb-5  pt-5 flex flex-row justify-end">
              <div className="py-2 px-4 bg-gray-100 rounded-md mr-2 text-sm text-gray-700 hover:bg-gray-200">
                Previous
              </div>
              <div className="py-2 px-4 text-sm rounded-md mr-2 bg-indigo-500 text-white hover:cursor-pointer">
                1
              </div>
              <div className="py-2 px-4 text-sm rounded-md mr-2 bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer">
                2
              </div>
              <div className="py-2 px-4 text-sm rounded-md mr-2 bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer">
                3
              </div>
              <div className="py-2 px-4 bg-gray-100 rounded-md mr-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer">
                Next
              </div>
            </div>
          </div>
        </div>
      </div></div><div className="grid grid-cols-12"></div>
    </div>
  )
}
export default Customer;