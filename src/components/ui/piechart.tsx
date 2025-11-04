import { Pie } from "@ant-design/plots";
import type { PieConfig } from "@ant-design/plots/es/components/pie";
import { chartColors } from "../../components/chartColors";

type StatusType =
  | "รอตรวจสอบ"
  | "ผ่านการอนุมัติ"
  | "ไม่ผ่านการอนุมัติ"
  | "ยกเลิก"
  | "ปิดงาน";

type DataItem = { type: StatusType; value: number };

export default function PieWithTheme() {
  const data: DataItem[] = [
    { type: "รอตรวจสอบ", value: 1200 },
    { type: "ผ่านการอนุมัติ", value: 6500 },
    { type: "ไม่ผ่านการอนุมัติ", value: 1500 },
    { type: "ยกเลิก", value: 700 },
    { type: "ปิดงาน", value: 900 },
  ];

  const colorMap: Record<StatusType, string> = {
    รอตรวจสอบ: chartColors.waiting,
    ผ่านการอนุมัติ: chartColors.approved,
    ไม่ผ่านการอนุมัติ: chartColors.rejected,
    ยกเลิก: chartColors.cancelled,
    ปิดงาน: chartColors.closed,
  };

  const domain: StatusType[] = data.map((d) => d.type);
  const range: string[] = domain.map((d) => colorMap[d]);

  const config: PieConfig = {
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0,
    color: range,
    scale: {
      color: {
        domain,
        range,
      },
    },
    label: {
      type: "inner",
      offset: "-30%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
        fill: "#fff",
      },
    },
    legend: {
      position: "bottom",
    },
    interactions: [{ type: "element-active" }],
  };

  return (


<div className="w-full flex flex-col items-center">
  <Pie {...config} />
</div>


  );
}