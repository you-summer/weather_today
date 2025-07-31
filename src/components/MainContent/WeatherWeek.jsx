import { useContext } from "react";
import "./WeatherWeek.css";
import WeatherWeekItem from "./WeatherWeekItem";
import {
  FiveWeatherContext,
  IsDarkContext,
} from "../../App";

const WeatherWeek = () => {
  const fiveWeatherList = useContext(FiveWeatherContext);
  const isDark = useContext(IsDarkContext);

  let getFiveWeatherList;

  if (!fiveWeatherList || !fiveWeatherList.list) {
    return <div>예보 정보를 불러오는 중입니다...</div>;
  } else {
    getFiveWeatherList = fiveWeatherList.list.filter(
      (item) => {
        return item.dt_txt.includes("12:00:00");
      }
    );
  }

  // const test = fiveWeatherList.list[0];

  // console.log(test);

  // console.log("5일치....", fiveWeatherList);
  console.log("5일치 중에 정오인것만", getFiveWeatherList);
  return (
    <div className={`WeatherWeek ${isDark ? " dark" : ""}`}>
      {getFiveWeatherList.map((list) => {
        return <WeatherWeekItem {...list} key={list.dt} />;
      })}
    </div>
  );
};
export default WeatherWeek;
