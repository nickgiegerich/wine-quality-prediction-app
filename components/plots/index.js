import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import BarChart from "./bar_chart";
import radio_selections from "./radio_selections";
import ScatterChart from "./scatter_chart";
import scatter_data from "./scatter_chart_data";
import scatter_radio_selections from "./scatter_radio_selection";

export default function Plots() {
  const [barChartData, setBarChartData] = useState({ data: [], label: "" });
  const [scattterChartData, setScatterChartData] = useState({
    data: [],
    label: "",
  });

  const handleBarSelection = (e) => {
    var a = e.target.value;
    var b = a.split(",").map(function (item) {
      return parseFloat(item, 10);
    });
    setBarChartData({ data: b, label: e.target.id });
  };

  const handlScatterSelection = (e) => {
    data = scatter_data[e.target.alt];
    setScatterChartData({
      data: data,
      label: e.target.value,
    });
  };

  return (
    <div className="border border-red-900 rounded-2xl shadow-lg m-5">
      <div className="flex flex-col flex-wrap justify-evenly">
        <div className="font-thin text-3xl text-center pt-2">
          Data Insights
        </div>
        <div className="font-extralight text-xl text-center pt-2 pb-10">
          below wine properties are selected and graphed accordingly
        </div>
        <div className="pb-10">
          <div className="flex flex-row justify-evenly flex-wrap">
            <div>
              <div className="flex flex-col pb-10">
                <div className="text-center font-semibold text-lg">
                  in the bar chart below we compare the selected <br/> property and the quality of the wine produced
                </div>
                <div className="text-center font-semibold text-sm py-5">
                  y-axis: {barChartData.label} <br />
                  x-axis: Quality
                </div>
                <div className="grid grid-cols-3 pb-5">
                  {radio_selections.map((val, idx) => (
                    <div key={idx} className="px-4">
                      <div>
                        <input
                          className="pr-3"
                          id={val.label}
                          name="barchart"
                          type="radio"
                          value={val.data}
                          onClick={handleBarSelection}
                        />
                        <label className="pl-2" htmlFor={val.label}>
                          {val.label}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <BarChart
                    bChartData={barChartData.data}
                    bChartLabel={barChartData.label}
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col">
                <div className="text-center font-semibold text-lg">
                  the scatter chart shows the relation between the selected property<br/>and the amount of alcohol in a given wine that has a quality rating greater than 6
                </div>
                <div className="text-center font-semibold text-sm py-5">
                  y-axis: Alcohol <br />
                  x-axis: {scattterChartData.label}
                </div>
                <div className="grid grid-cols-3 pb-5">
                  {scatter_radio_selections.map((val, idx) => (
                    <div key={`Scatter-${idx}`} className="px-4">
                      <input
                        alt={val.id}
                        className="pr-3"
                        id={val.id}
                        name="scatterchart"
                        type="radio"
                        value={val.label}
                        onClick={handlScatterSelection}
                      />
                      <label htmlFor={val.id} className="pl-2">
                        {val.label}
                      </label>
                    </div>
                  ))}
                </div>

                <div>
                  <ScatterChart
                    sChartData={scattterChartData.data}
                    sChartLabel={scattterChartData.label}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
