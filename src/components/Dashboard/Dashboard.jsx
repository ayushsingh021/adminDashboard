import React from "react";
import Hero from "../DashboardCompo/Hero";
import Chart from "../DashboardCompo/Chart";
import Namecards from "../DashboardCompo/Namecards";
// import MyCalender from "../DashboardCompo/MyCalender";

function Dashboard() {
  return (
    <>
      <Hero />
      {/* <BarChart data_1= {[1,24,5,5]} data_2={[1,24,5,5]} title_1={"new "} title_2={"chart"} bgColor_1={"#fff"} bgColor_2={"#fff"} labels={["EE","CSE" , "IT"]} /> */}
      <div className="flex">
        <Chart />
        <div className="w-1/2 flex justify-between items-center space-x-2 padding-x">
          <Namecards degree={"BTECH"} no={100} outof={250} />
          <Namecards degree={"MTECH/MCA"} no={60} outof={180} />
        </div>
      </div>
      {/* <MyCalender defaultDate={new Date(2015, 3, 13)} /> */}
    </>
  );
}

export default Dashboard;
