import moment from "moment";

export function parseTime(date: Date) {
  return moment(date).format("MMMM Do YYYY, h:mm a");
}
