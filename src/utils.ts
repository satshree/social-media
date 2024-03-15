import moment from "moment";
import { Post } from "./types/data";

export function parseTime(date: Date) {
  return moment(date).format("MMMM Do YYYY, h:mm a");
}

export function sortPostByDate(prevPost: Post, nextPost: Post) {
  if (prevPost.updated > nextPost.updated) {
    return -1;
  } else if (prevPost.updated < nextPost.updated) {
    return 1;
  }

  return 0;
}
