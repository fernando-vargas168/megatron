let isTablet =
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 750px)").matches;

typeof window !== "undefined" &&
  window.addEventListener("resize", () => {
    isTablet = window.matchMedia("(max-width: 750px)").matches;
  });
module.exports = {
  isTablet
};
