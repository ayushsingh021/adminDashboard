import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Chart() {
  const [seriesNb, setSeriesNb] = React.useState(1);
  const [itemNb, setItemNb] = React.useState(7);
  const [skipAnimation, setSkipAnimation] = React.useState(false);

  //   const handleItemNbChange = (event, newValue) => {
  //     if (typeof newValue !== 'number') {
  //       return;
  //     }
  //     setItemNb(newValue);
  //   };
  //   const handleSeriesNbChange = (event, newValue) => {
  //     if (typeof newValue !== 'number') {
  //       return;
  //     }
  //     setSeriesNb(newValue);
  //   };

  return (
    <main className="flex justify-between padding-x py-10 z-10 w-1/2 rounded-lg">
      <Box sx={{ width: "100%" }}>
        <BarChart
          height={300}
          series={series
            .slice(0, seriesNb)
            .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
          skipAnimation={skipAnimation}
        />
        {/* <FormControlLabel
        checked={skipAnimation}
        control={
          <Checkbox
            onChange={(event) => setSkipAnimation(event.target.checked)}
          />
        }
        label="skipAnimation"
        labelPlacement="end"
      /> */}
        {/* <Typography id="input-item-number" gutterBottom>
        Number of items
      </Typography> */}
        {/* <Slider
        value={itemNb}
        onChange={handleItemNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={20}
        aria-labelledby="input-item-number"
      /> */}
        {/* <Typography id="input-series-number" gutterBottom>
        Number of series
      </Typography> */}
        {/* <Slider
        value={seriesNb}
        onChange={handleSeriesNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={10}
        aria-labelledby="input-series-number"
      /> */}
      </Box>
    </main>
  );
}

const highlightScope = {
  highlighted: "Branch",
  faded: "global",
};

const series = [
  {
    label: "Branch",
    data: [2600, 2210, 764, 1879, 1478, 1373, 1891],
  },
].map((s) => ({ ...s, highlightScope }));

// ##################################
// import ChartJS from "chart.js/auto";
// import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
// import "chartjs-adapter-date-fns";

// ChartJS.register(
//   ChartJS.CategoryScale,
//   ChartJS.LinearScale,
//   ChartJS.BarElement,
//   ChartJS.Title,
//   ChartJS.Tooltip,
//   ChartJS.Legend,
//   ChartJS.ArcElement,
//   ChartJS.PointElement,
//   ChartJS.LineElement,
//   ChartJS.Filler
// );

// const months = ["January", "February", "March", "April", "May", "June", "July"];

// const BarChart = ({
//   data_1 = [],
//   data_2 = [],
//   title_1,
//   title_2,
//   bgColor_1,
//   bgColor_2,
//   horizontal = false,
//   labels = months,
// }) => {
//   const options = {
//     responsive: true,
//     indexAxis: horizontal ? "y" : "x",
//     plugins: {
//       legend: {
//         display: false,
//       },
//       title: {
//         display: false,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         grid: {
//           display: false,
//         },
//       },
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//     },
//   };

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: title_1,
//         data: data_1,
//         backgroundColor: bgColor_1,
//         barThickness: "flex",
//         barPercentage: 1,
//         categoryPercentage: 0.4,
//       },
//       {
//         label: title_2,
//         data: data_2,
//         backgroundColor: bgColor_2,
//         barThickness: "flex",
//         barPercentage: 1,
//         categoryPercentage: 0.4,
//       },
//     ],
//   };

//   return <Bar width={horizontal ? "200%" : ""} options={options} data={data} />;
// };

// const DoughnutChart = ({
//   labels,
//   data,
//   backgroundColor,
//   cutout,
//   legends = true,
//   offset,
// }) => {
//   const doughnutData = {
//     labels,
//     datasets: [
//       {
//         data,
//         backgroundColor,
//         borderWidth: 0,
//         offset,
//       },
//     ],
//   };

//   const doughnutOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: legends,
//         position: "bottom",
//         labels: {
//           padding: 40,
//         },
//       },
//     },
//     cutout,
//   };

//   return <Doughnut data={doughnutData} options={doughnutOptions} />;
// };

// const PieChart = ({ labels, data, backgroundColor, offset }) => {
//   const pieChartData = {
//     labels,
//     datasets: [
//       {
//         data,
//         backgroundColor,
//         borderWidth: 1,
//         offset,
//       },
//     ],
//   };

//   const pieChartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//   };

//   return <Pie data={pieChartData} options={pieChartOptions} />;
// };

// const LineChart = ({
//   data,
//   label,
//   backgroundColor,
//   borderColor,
//   labels = months,
// }) => {
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       title: {
//         display: false,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         grid: {
//           display: false,
//         },
//       },
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//     },
//   };

//   const lineChartData = {
//     labels,
//     datasets: [
//       {
//         fill: true,
//         label,
//         data,
//         backgroundColor,
//         borderColor,
//       },
//     ],
//   };

//   return <Line options={options} data={lineChartData} />;
// };

// export { BarChart, DoughnutChart, PieChart, LineChart };
