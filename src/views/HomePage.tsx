import React from "react";
import Calendar_Options from "../components/ui/calendar";
import CustomPieChart from "../components/ui/piechart";

const HomePage: React.FC = () => {
  return (
    <div className="container-header">
      <div className="p-6 space-y-6">
        <h1 className="text-4xl text-[#009640] font-bold">DatePicker</h1>
        <p className="text-lg text-[#009640] ">Show case</p>

        <div className="w-1/2 h-12 ml-80">
          <Calendar_Options pickerType="date" />
        </div>

        <div className="w-1/2 h-12 ml-80">
          <Calendar_Options
            pickerType="month"
            onChange={(_, dateStr) => console.log("Full date:", dateStr)}
          />
        </div>
        <div className="w-1/2 h-12 ml-80">
          <Calendar_Options pickerType="year" />
        </div>

        <CustomPieChart />
      </div>
    </div>
  );
};

export default HomePage;
