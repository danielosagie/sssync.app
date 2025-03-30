// pre-generated-maps.ts
import DottedMap from "dotted-map";

// Pre-generate dotted maps for both themes
export const lightThemeDottedMapSVG = new DottedMap({ height: 100, grid: "diagonal" }).getSVG({
  radius: 0.22,
  color: "#00000040",
  shape: "circle",
  backgroundColor: "white",
});

export const darkThemeDottedMapSVG = new DottedMap({ height: 100, grid: "diagonal" }).getSVG({
  radius: 0.22,
  color: "#FFFFFF40",
  shape: "circle",
  backgroundColor: "black",
});