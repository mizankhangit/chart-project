import React from "react";
import Plot from "react-plotly.js";
import CsvToObj from "../../components/csv-to-obj";

const BarCharts = () => {
  return (
    <div>

      {/* <CsvToObj/> */}
      <div className="mb-5">
        <div className="text-center">Basic bar chart</div>
        <Plot
          config={{ typesetMath: false }}
          data={[
            {
              x: ["giraffes", "orangutans", "monkeys"],
              y: [20, 14, 23],
              type: "bar",
            },
          ]}
          layout={{ title: "Basic Bar Chart" }}
        />
      </div>

      <div className="mb-5">
        <div className="text-center">Group bar chart</div>
        <Plot
          data={[
            {
              x: ["giraffes", "orangutans", "monkeys"],
              y: [12, 18, 29],
              name: "SF Zoo",
              type: "bar",
            },
            {
              x: ["giraffes", "orangutans", "monkeys"],
              y: [20, 14, 23],
              name: "LA Zoo",
              type: "bar",
            },
          ]}
          layout={{ barmode: "group" }}
        />
      </div>

      <div className="mb-5">
        <div className="text-center">Group bar chart</div>
        <Plot
          data={[
            {
              x: ["giraffes", "orangutans", "monkeys"],
              y: [12, 18, 29],
              name: "SF Zoo",
              type: "bar",
            },
            {
              x: ["giraffes", "orangutans", "monkeys"],
              y: [20, 14, 23],
              name: "LA Zoo",
              type: "bar",
            },
          ]}
          layout={{ barmode: "stack" }}
        />
      </div>

      <div className="mb-5">
        <div className="text-center">Bar chart with hover text</div>
        <Plot
          data={[
            {
              x: ["Liam", "Sophie", "Jacob", "Mia", "William", "Olivia"],
              y: [8.0, 8.0, 12.0, 12.0, 13.0, 20.0],
              text: [
                "4.17 below the mean",
                "4.17 below the mean",
                "0.17 below the mean",
                "0.17 below the mean",
                "0.83 above the mean",
                "7.83 above the mean",
              ],
              marker: {
                color: "#eee",
              },
              type: "bar",
            },
          ]}
        />
      </div>

      <div className="mb-5">
        <div className="text-center">Bar chart with hover labels</div>
        <Plot
          data={[
            {
              x: ["Product A", "Product B", "Product C"],
              y: [20, 14, 23],
              type: "bar",
              text: ["20", "14", "23"],
              textposition: "auto",
              hoverinfo: "none",
              marker: {
                color: "rgb(158, 202, 255)",
                opacity: 0.6,
                line: {
                  color: "rgb(8,48,107)",
                  width: 1.5,
                },
              },
            },
          ]}
          layout={{ title: "January 2024 Sales Report", barmode: "stack" }}
        />
      </div>

      <div className="mb-5">
        <div className="text-center">Bar Chart with Rotated Labels</div>
        <Plot
          data={[
            {
              x: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
              type: "bar",
              name: "Primary Product",
              marker: {
                color: "rgb(49,130,189)",
                opacity: 0.7,
              },
            },
            {
              x: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16],
              type: "bar",
              name: "Secondary Product",
              marker: {
                color: "rgb(204,204,204)",
                opacity: 0.5,
              },
            },
          ]}
          layout={{
            title: "January 2024 Sales Report",
            barmode: "group",
            xaxis: {
              tickangle: -45,
            },
          }}
        />
      </div>

      <div className="mb-5">
        <div className="text-center">Bar Chart with Relative Barmode</div>
        <Plot
          data={[
            {
              x: [1, 2, 3, 4],
              y: [1, 4, 9, 16],
              name: "Trace1",
              type: "bar",
            },
            {
              x: [1, 2, 3, 4],
              y: [6, -8, -4.5, 8],
              name: "Trace2",
              type: "bar",
            },
            {
              x: [1, 2, 3, 4],
              y: [-15, -3, 4.5, -8],
              name: "Trace3",
              type: "bar",
            },
            {
              x: [1, 2, 3, 4],
              y: [-1, 3, -3, -4],
              name: "Trace4",
              type: "bar",
            },
          ]}
          layout={{
            barmode: "relative",
          }}
        />
      </div>
    </div>
  );
};

export default BarCharts;
