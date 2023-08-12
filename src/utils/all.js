/** */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

export const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer")
}
