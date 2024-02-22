import { useState } from "react";
import Chart from "../components/Chart";
import ConvertBtn from "../components/ConvertBtn";
import Menu from "../components/Menu";

function ChartPage() {
  const [year, setYear] = useState("2020년");
  const [data, setData] = useState([""]);
  return (
    <div>
      <div>
        <ConvertBtn />
      </div>
      <Menu
        callback={(data, year) => {
          setData(data);
          setYear(year);
        }}
      ></Menu>

      <Chart data={data} year={year} />
    </div>
  );
}

export default ChartPage;
