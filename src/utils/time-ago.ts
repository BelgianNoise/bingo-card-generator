export function timeAgo(date: number) {
  const seconds = Math.floor((new Date().getTime() - date) / 1000);
  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    if (interval === 1) {
      return interval + " year ago";
    }
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    if (interval === 1) {
      return interval + " month ago";
    }
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    if (interval === 1) {
      return interval + " day ago";
    }
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    if (interval === 1) {
      return interval + " hour ago";
    }
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    if (interval === 1) {
      return interval + " minute ago";
    }
    return interval + " minutes ago";
  }
  if (seconds > 5) {
    return Math.floor(seconds) + " seconds ago";
  }
  if (seconds > -10) {
    return "just now";
  }
  return "in the future 🤔";
}