import { Scatter } from "react-chartjs-2";
import scatter_data from "./scatter_chart_data";

export default function ScatterChart({sChartData, sChartLabel}) {
  const data = {
    datasets: [
      {
        label: `Alcohol Vs. ${sChartLabel}`,
        data: sChartData,
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
    options: {
        scales: {
            x: {
                type: "linear",
                position: "bottom"
            }
        }
    }
  };

  const config = {
    type: "scatter",
    data: data,
    options: {
      scales: {
        x: {
          type: "linear",
          position: "bottom",
        },
      },
    },
  };
  return (
    <div>
      <Scatter data={data} />
    </div>
  );
}
