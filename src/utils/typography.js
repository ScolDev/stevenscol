import Typography from "typography";
import alton from "typography-theme-alton";

alton.baseFontSize = "20px";
alton.scaleRatio = 2.5
alton.headerFontFamily = ["Exo", "sans-serif"];
alton.bodyFontFamily = ["Fira Mono", "Share Tech Mono"];

const typography = new Typography({
  ...alton,
  googleFonts: [
    { name: "Share Tech Mono", styles: ["400", "500", "600", "700"] },
    { name: "Exo", styles: ["700"] },
    { name: "Fira Mono", styles: ["400", "500", "700"] },
  ],
});

export default typography;
