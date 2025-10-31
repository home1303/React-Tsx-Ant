"use client";

import React from "react";
import { ConfigProvider, DatePicker, Space } from "antd";
import th from "antd/es/date-picker/locale/th_TH";
import thTH from "antd/es/locale/th_TH";
import dayjs from "dayjs";
import "dayjs/locale/th";
import locale from "antd/es/date-picker/locale/th_TH";

import { CalendarOutlined } from "@ant-design/icons";

import type { CalendarOptionsProps } from "../../services/models/Calendar";

dayjs.locale("th");
// Component level locale
const buddhistLocale: typeof th = {
  ...th,
  lang: {
    ...th.lang,
    fieldDateFormat: "YYYY/MM/DD",
    fieldDateTimeFormat: "YYYY/MM/DD",
    yearFormat: "YYYY",
    cellYearFormat: "YYYY",
  },
};

// ConfigProvider level locale
const globalBuddhistLocale: typeof thTH = {
  ...thTH,
  DatePicker: {
    ...thTH.DatePicker!,
    lang: buddhistLocale.lang,
  },
};


const Calendar_Options: React.FC<CalendarOptionsProps> = ({
  pickerType = "date", // ตรงนี้คือค่า "date" / "month" / "year"
  showTime = false,
  onChange,
}) => {

  const defaultValue =
    pickerType === "date"
      ? dayjs().year(2568) // วันปัจจุบัน
      : pickerType === "month"
      ? dayjs().month(0).year(2568)
      : dayjs().year(2568); 


  return (
    <Space direction="vertical" className="w-full">
      <ConfigProvider
        locale={globalBuddhistLocale}
        theme={{
          token: {
            colorPrimary: "#009640",
            colorText: "#065f46",
            borderRadius: 8,
          },
        }}
      >
        <div className="relative w-full flex items-center">
          {/* DatePicker input */}
          <DatePicker
            defaultValue={defaultValue}
            picker={pickerType === "date" ? undefined : pickerType}
            showTime={pickerType === "date" ? showTime : false}
            onChange={onChange}
            className="w-full h-10 text-base !text-gray-700 placeholder:!text-gray-400 !rounded-lg !border-2 !border-gray-300"
            suffixIcon={null}
            locale={locale}
            format={
              pickerType === "date"
                ? "DD/MMM/YYYY"
                : pickerType === "month"
                ? "MMM /YYYY"
                : "YYYY"
            }
          />

          {/* Icon แยก */}
          <div className="absolute right-0 h-full w-10 flex items-center justify-center bg-[#009640] text-white rounded-r-lg">
            <CalendarOutlined />
          </div>
        </div>
      </ConfigProvider>
    </Space>
  );
};

export default Calendar_Options;
