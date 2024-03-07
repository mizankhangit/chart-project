import React from "react";
import Plot from "react-plotly.js";

const PieCharts = () => {
  return (
    <div>
      <div className="mb-5">
        <div className="text-center">Basic Pie Chart</div>
        <Plot
          data={[
            {
              values: [19, 26, 55],
              labels: ["Residential", "Non-Residential", "Utility"],
              type: "pie",
            },
          ]}
        />
      </div>

      <div className="mb-5">
        <div className="text-center">
          Control Text Orientation Inside Pie Chart Sectors
        </div>
        <Plot
          data={[
            {
              type: "pie",
              values: [2, 3, 4, 4],
              labels: [
                "Wages",
                "Operating expenses",
                "Cost of sales",
                "Insurance",
              ],
              textinfo: "label+percent",
              insidetextorientation: "radial",
            },
          ]}
        />
      </div>

      <div className="mb-5">
        <div className="text-center">Pie Chart Subplots</div>
        <Plot
          data={[
            {
              type: "pie",
              values: [38, 27, 18, 10, 7],
              labels: ["1st", "2nd", "3rd", "4th", "5th"],
              name: "Starry Night",
              domain: {
                row: 0,
                column: 0,
              },
              hoverinfo: "label+percent+name",
              textinfo: "label+percent",
              marker: {
                colors: [
                  "rgb(56, 75, 126)",
                  "rgb(18, 36, 37)",
                  "rgb(34, 53, 101)",
                  "rgb(36, 55, 57)",
                  "rgb(6, 4, 4)",
                ],
              },
            },
            {
              type: "pie",
              values: [38, 27, 18, 10, 7],
              labels: ["1st", "2nd", "3rd", "4th", "5th"],
              name: "Starry Night",
              domain: {
                row: 1,
                column: 0,
              },
              hoverinfo: "label+percent+name",
              textinfo: "label+percent",
              marker: {
                colors: [
                  "rgb(56, 75, 126)",
                  "rgb(18, 36, 37)",
                  "rgb(34, 53, 101)",
                  "rgb(36, 55, 57)",
                  "rgb(6, 4, 4)",
                ],
              },
            },
            {
              type: "pie",
              values: [38, 27, 18, 10, 7],
              labels: ["1st", "2nd", "3rd", "4th", "5th"],
              name: "Starry Night",
              domain: {
                row: 0,
                column: 1,
              },
              hoverinfo: "label+percent+name",
              textinfo: "label+percent",
              marker: {
                colors: [
                  "rgb(56, 75, 126)",
                  "rgb(18, 36, 37)",
                  "rgb(34, 53, 101)",
                  "rgb(36, 55, 57)",
                  "rgb(6, 4, 4)",
                ],
              },
            },
            {
              type: "pie",
              values: [38, 27, 18, 10, 7],
              labels: ["1st", "2nd", "3rd", "4th", "5th"],
              name: "Starry Night",
              domain: {
                row: 1,
                column: 1,
              },
              hoverinfo: "label+percent+name",
              textinfo: "label+percent",
              marker: {
                colors: [
                  "rgb(56, 75, 126)",
                  "rgb(18, 36, 37)",
                  "rgb(34, 53, 101)",
                  "rgb(36, 55, 57)",
                  "rgb(6, 4, 4)",
                ],
              },
            },
          ]}
          layout={{ grid: { rows: 2, columns: 2 } }}
        />
      </div>

      <div className="mb-5">
        <Plot
          data={[
            {
              values: [16, 15, 12, 6, 5, 4, 42],
              labels: [
                "US",
                "China",
                "European Union",
                "Russian Federation",
                "Brazil",
                "India",
                "Rest of World",
              ],
              domain: { column: 0 },
              name: "GHG Emissions",
              hoverinfo: "label+percent+name",
              type: "pie",
              hole: 0.4,
            },
          ]}
          layout={{
            title: "Global Emissions 2023-2024",
            annotations: [{ text: "GHG", showarrow: false }],
          }}
        />
      </div>
    </div>
  );
};

export default PieCharts;
