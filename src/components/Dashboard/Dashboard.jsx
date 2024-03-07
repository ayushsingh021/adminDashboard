import React from "react";
import Hero from "../DashboardCompo/Hero";
import Chart from "../DashboardCompo/Chart";
import Namecards from "../DashboardCompo/Namecards";
import Schedule from "../DashboardCompo/Schedule";
// import MyCalender from "../DashboardCompo/MyCalender";

function Dashboard() {
  return (
   
    <main className="padding-y">
    <Hero />
      {/* <BarChart data_1= {[1,24,5,5]} data_2={[1,24,5,5]} title_1={"new "} title_2={"chart"} bgColor_1={"#fff"} bgColor_2={"#fff"} labels={["EE","CSE" , "IT"]} /> */}
      <div>
      <div className="flex ">
        <Chart  />

        <div className="w-1/2 items-center justify-end">
          <div className="flex justify-between items-center space-x-2 padding-x">
          <Namecards degree={"BTECH"} no={100} outof={250} />
          <Namecards degree={"MTECH"} no={60} outof={180} />
          </div>
          <div className="flex justify-between items-center space-x-2 padding-x">
          <Namecards degree={"MCA"} no={100} outof={250} />
          <Namecards degree={"MBA"} no={60} outof={180} />
          </div>
         
        </div>
      </div>
      </div>
    </main>
      
    
      // {/* <MyCalender defaultDate={new Date(2015, 3, 13)} /> */}
   
  );
}

export default Dashboard;
