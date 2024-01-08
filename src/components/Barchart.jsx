import { BarChart } from "@mui/x-charts/BarChart";

const uData = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const pData = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const aData = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const xLabels = ["20", "25", "30", "35", "40", "45", "50", "55", "60"];

const Barchart = () => {
  const seriesColors = ["#0800a3", "#4935ff", "#85afff"];

  return (
    <div style={{ width: "100%" }}>
      <BarChart
        height={300}
        series={[
          {
            data: pData,
            label: "Employer: 73K",
            id: "EmployerId",
            stack: "total",
            color: seriesColors[0],
          },
          {
            data: uData,
            label: "Employee: 52K",
            id: "EmployeeId",
            stack: "total",
            color: seriesColors[1],
          },
          {
            data: aData,
            label: "Total Interest: 244K",
            id: "TotalId",
            stack: "total",
            color: seriesColors[2],
          },
        ]}
        xAxis={[
          {
            data: xLabels,
            scaleType: "band",
          },
        ]}
      />
    </div>
  );
};

export default Barchart;
