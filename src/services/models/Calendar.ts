import type { DatePickerProps } from "antd";

export interface CalendarOptionsProps {
  pickerType?: "date" | "month" | "year"; 
  showTime?: boolean;
  onChange?: DatePickerProps["onChange"];
}