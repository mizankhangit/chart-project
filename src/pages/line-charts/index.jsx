import React from "react";
import Plot from "react-plotly.js";

const LineCharts = () => {
  return (
    <div>
      <div className="mb-5">
        <div className="text-center">Basic Line Plot</div>
        <Plot
        config={false}
          data={[
            { x: [1, 2, 3, 4], y: [10, 15, 13, 17], type: "scatter" },
            { x: [1, 2, 3, 4], y: [16, 5, 11, 9], type: "scatter" },
          ]}
        />
      </div>

      <div className="mb-5">
        <div className="text-center">Adding Names to Line and Scatter Plot</div>
        <Plot
          data={[
            {
              x: [1, 2, 3, 4],
              y: [10, 15, 13, 17],
              mode: "markers",
              name: "Scatter",
            },
            {
              x: [2, 3, 4, 5],
              y: [16, 5, 11, 9],
              mode: "lines",
              name: "Lines",
            },
            {
              x: [1, 2, 3, 4],
              y: [12, 9, 15, 12],
              mode: "lines+markers",
              name: "Scatter + Lines",
            },
          ]}
        />
      </div>

      <div className="mb-5">
        <div className="text-center">Styling Line Plot</div>
        <Plot
          data={[
            {
              type: "scatter",
              x: [1, 2, 3, 4],
              y: [10, 15, 13, 17],
              mode: "lines",
              name: "Red",
              line: {
                color: "rgb(219, 64, 82)",
                width: 3,
              },
            },
            {
              type: "scatter",
              x: [1, 2, 3, 4],
              y: [12, 9, 15, 12],
              mode: "lines",
              name: "Blue",
              line: {
                color: "rgb(55, 128, 191)",
                width: 1,
              },
            },
          ]}
        />
      </div>

      <div className="mb-5">
        <div className="text-center">Colored and Styled Scatter Plot</div>
        <Plot
          data={[
            {
              x: [52698, 43117],
              y: [53, 31],
              mode: "markers",
              name: "North America",
              text: ["United States", "Canada"],
              marker: {
                color: "rgb(164, 194, 244)",
                size: 12,
                line: {
                  color: "white",
                  width: 0.5,
                },
              },
              type: "scatter",
            },
            {
              x: [
                39317, 37236, 35650, 30066, 29570, 27159, 23557, 21046, 18007,
              ],
              y: [33, 20, 13, 19, 27, 19, 49, 44, 38],
              mode: "markers",
              name: "Europe",
              text: [
                "Germany",
                "Britain",
                "France",
                "Spain",
                "Italy",
                "Czech Rep.",
                "Greece",
                "Poland",
              ],
              marker: {
                color: "rgb(255, 217, 102)",
                size: 12,
              },
              type: "scatter",
            },
            {
              x: [42952, 37037, 33106, 17478, 9813, 5253, 4692, 3899],
              y: [23, 42, 54, 89, 14, 99, 93, 70],
              mode: "markers",
              name: "Asia/Pacific",
              text: [
                "Australia",
                "Japan",
                "South Korea",
                "Malaysia",
                "China",
                "Indonesia",
                "Philippines",
                "India",
              ],
              marker: {
                color: "rgb(234, 153, 153)",
                size: 12,
              },
              type: "scatter",
            },
            {
              x: [19097, 18601, 15595, 13546, 12026, 7434, 5419],
              y: [43, 47, 56, 80, 86, 93, 80],
              mode: "markers",
              name: "Latin America",
              text: [
                "Chile",
                "Argentina",
                "Mexico",
                "Venezuela",
                "Venezuela",
                "El Salvador",
                "Bolivia",
              ],
              marker: {
                color: "rgb(142, 124, 195)",
                size: 12,
              },
              type: "scatter",
            },
          ]}
        />
      </div>

      <div className="mb-5">
        <div className="text-center">Line Dash</div>
        <Plot
          data={[
            {
              x: [1, 2, 3, 4, 5],
              y: [1, 3, 2, 3, 1],
              mode: "lines",
              name: "Solid",
              line: {
                dash: "solid",
                width: 4,
              },
            },
            {
              x: [1, 2, 3, 4, 5],
              y: [6, 8, 7, 8, 6],
              mode: "lines",
              name: "dashdot",
              line: {
                dash: "dashdot",
                width: 4,
              },
            },
            {
              x: [1, 2, 3, 4, 5],
              y: [11, 13, 12, 13, 11],
              mode: "lines",
              name: "Solid",
              line: {
                dash: "solid",
                width: 4,
              },
            },
            {
              x: [1, 2, 3, 4, 5],
              y: [16, 18, 17, 18, 16],
              mode: "lines",
              name: "dot",
              line: {
                dash: "dot",
                width: 4,
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default LineCharts;
