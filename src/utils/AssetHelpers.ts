export const toAbsoluteUrl = (pathname: string) => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    return process.env.PUBLIC_URL + pathname;
  } else {
    return window.location.hostname + "/" + pathname;
  }
};
