"use client";

import React from "react";
import { Pie } from "@ant-design/charts";

const PieChartExample: React.FC = () => {
  const data = [
    { type: "ออกกำลังกาย", value: 27 },
    { type: "พักผ่อน", value: 25 },
    { type: "ทานอาหาร", value: 18 },
    { type: "ทำงาน", value: 15 },
    { type: "อื่นๆ", value: 60 },
  ];

  const config = {
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }: any) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      { type: "element-active" },
      { type: "element-selected" },
      { type: "legend-highlight" },
    ],
    legend: {
      position: "bottom",
    },
  };

  return (
    <div className="w-[400px] mx-auto mt-10">
      <h2 className="text-center text-lg font-semibold mb-4">
        สัดส่วนกิจกรรมประจำวัน
      </h2>
      <Pie {...config} />
    </div>
  );
};

export default PieChartExample;
