import React, { useState, useRef, useEffect } from "react";
import "../css/map.css";
import Menu from "../components/Menu";
import ConvertBtn from "../components/ConvertBtn";
import Map from "../components/Map";

/*DB 서버 연동 전 사용했던 코드 */
// const json = require('./typhoon(2012-2020).json'); // 2011 ~ 2020년도 태풍
// console.log(json.map(row => row['구분 \\ 년도 ']));

function MapPage() {
  const [year, setYear] = useState("2020년"); // 년도 변수
  const [data, setData] = useState([""]); // DB에서 불러온 자연재해 피해량 (json)
  const ref = useRef();

  return (
    <div>
      <div>
        <ConvertBtn />
      </div>
      <div>
        <Menu
          callback={(data, year) => {
            setData(data);
            setYear(year);
          }}
        ></Menu>
      </div>
      <Map year={year} data={data} />
    </div>
  );
}

export default MapPage;
