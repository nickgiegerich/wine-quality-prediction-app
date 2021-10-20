import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import values from "./bar_chart_data";

export default function BarChart({ bChartData, bChartLabel }) {
  const data = {
    labels: [3, 4, 5, 6, 7, 8],
    datasets: [
      {
        label: `Average ${bChartLabel}`,
        data: bChartData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
    options : {
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'probability'
            }
          }],
          xAxes: [{
              scaleLabel: {
                  display: true, 
                  labelString: 'test'
              }
          }]
        }
      }
  };
  return (
    <div>
      <Bar
        data={data}
        width={600}
        height={400 }
        options={{
            responsive: true,
            maintainAspectRatio: true
        }}
      />
    </div>
  );
}
