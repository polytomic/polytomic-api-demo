import React from 'react';

import { Card, Title, LineChart } from "@tremor/react";

const Dashboard = () => {
  return (

    <div className="p-4">
      <div className="grid grid-cols-12"><div className="col-span-12 p-4">
        <div className="text-white bg-blue-500 rounded-md border-2 border-gray-200 mt-24 p-8 shadow-md ">
          <div className=" bg-white shadow-xl border -mt-32 p-4 rounded-lg">
            <Title>member conversion rate</Title>
            <LineChart
              data={[
                {
                  date: 7,
                  "member conversion rate": 1.77,
                },
                {
                  date: 8,
                  "member conversion rate": 1.93,
                },
                {
                  date: 9,
                  "member conversion rate": 1.9,
                },
                {
                  date: 10,
                  "member conversion rate": 1.98,
                },
                {
                  date: 11,
                  "member conversion rate": 2,
                },
                {
                  date: 12,
                  "Population growth rate": 2,
                },
              ]}
              dataKey="date"
              categories={["member conversion rate"]}
              colors={["blue"]}
              height="h-44"
              yAxisWidth="w-10"
            />
          </div>
          <div className=" mt-4 text-xl">Daily Sales</div>
          <div className="mb-4">
            <span className="text-yellow-300 font-bold mr-2">55%</span>this
            month
          </div>

          <div className="pt-4 border-t border-gray-200 text-sm text-gray-100">
            Updated 5 mins ago
          </div>
        </div>
      </div></div><div className="grid grid-cols-12"><div className="col-span-6 p-4">
        <div className="bg-white p-4 rounded-md">
          <div className="flex justify-between ">
            <div className="text-base  font-medium text-gray-600">
              Customers
            </div>
            <i
              className="fa fa-user text-indigo-500 text-xl py-2 px-4 bg-indigo-200 rounded-md"
              aria-hidden="true"
            ></i>
          </div>
          <p className="text-2xl text-gray-500 mb-2 font-bold">39,246</p>
          <div className="flex flex-row ">
            <div className="text-green-400 mr-4 ">5.27%</div>
            <div className="text-sm text-gray-500">Since last Month</div>
          </div>

        </div>
      </div><div className="col-span-6 p-4">
          <Card
            maxWidth="max-w-none"
            hFull={false}
            shadow={true}
            decoration=""
            decorationColor="blue"
            marginTop="mt-0"
          >
            <div className="flex flex-row justify-between mb-2">
              <div>
                <div className="text-base text-gray-500"> TOTAL TRAFFIC </div>
                <div className="text-xl font-bold text-gray-600">350,297</div>
              </div>

              <div
                style={{ background: "linear-gradient(87deg,#f5365c,#f56036)" }}
                className=" rounded-full h-12 w-12 flex justify-center items-center"
              >
                <i
                  className="text-white  text-2xl fa fa-hand-paper-o"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
            <div className="text-gray-400">
              <span className="text-green-400 mr-2">3.48%</span>this month
            </div>
          </Card>
        </div></div><div className="grid grid-cols-12"><div className="col-span-12 p-4">
          <div className="flex ">
            <div className="cursor-pointer text-blue-600 border-b-2 border-blue-600 px-4 py-2">
              Leads
            </div>
            <div className="cursor-pointer px-4 py-2">Joiners</div>
            <div className="cursor-pointer px-4 py-2">Locations</div>
          </div>
        </div></div>
    </div>
  )
}
export default Dashboard;