import React from "react";
import Plot from "react-plotly.js";

const SurfacePlot = () => {
  const data = [
    {
      type: "surface",
      z: [
        [10, 10.625, 12.5, 15.625, 20],
        [5.625, 6.25, 8.125, 11.25, 15.625],
        [2.5, 3.125, 5, 8.125, 12.5],
        [0.625, 1.25, 3.125, 6.25, 10.625],
        [0, 0.625, 2.5, 5.625, 10],
      ],
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 3, 4, 5],
      colorbar: {
        len:.5,
        x:.5,
        y: 1.1,
        orientation: 'h',
        title: {
          side: "top",
        },
      },
    },
  ];

  const layout = {
    // title: 'Surface Plot Example',
    scene: {
      xaxis: { title: "X-axis" },
      yaxis: { title: "Y-axis" },
      zaxis: { title: "Z-axis" },
    },
  };

  return (
    <Plot
      data={data}
      layout={layout}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default SurfacePlot;
