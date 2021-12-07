import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';

export const dayFormat = () => {
  dayjs.extend(customParseFormat);
  const datetime = dayjs('2021/09/09', 'YYYY-MM-DD', true).isValid();
  return datetime;
}