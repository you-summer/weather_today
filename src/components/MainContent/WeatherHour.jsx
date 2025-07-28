import "./WeatherHour.css";
import WeatherHourItem from "./WeatherHourItem";
import { FiveWeatherContext } from "../../App";
import { useContext } from "react";
import windIcon from "../../assets/windIcon.png";

const WeatherHour = () => {
  const fiveWeatherData = useContext(FiveWeatherContext);
  console.log(
    "시간별예보 제대로 넘어왓나봅시다",
    fiveWeatherData
  );

  const date = new Date().getTime();
  console.log(date);

  if (!fiveWeatherData) {
    return <div>로딩중....</div>;
  }

  const changeDt = fiveWeatherData.list.map((item) => {
    return {
      ...item,
      dt: new Date(item.dt * 1000),
    };
  });
  const realWeatherHour = changeDt.filter((item) => {
    return item.dt > date;
  });
  const eightLengthWeatherHour = realWeatherHour.slice(
    0,
    8
  );

  return (
    <div className="WeatherHour">
      <div className="WeatherHour_title">시간대별 날씨</div>
      <div className="WeatherHour_div">
        {eightLengthWeatherHour.map((item) => {
          let realTime = item.dt.toLocaleTimeString(
            "en-US",
            {
              hour: "numeric",
              hour12: true,
            }
          );
          let deg = item.wind.deg;
          return (
            <WeatherHourItem
              time={realTime}
              icon={"아이콘"}
              windIcon={windIcon}
              temp={Math.trunc(item.main.temp)}
              wind={Math.trunc(item.wind.speed)}
              deg={deg}
            />
          );
        })}
        {/* <WeatherHourItem
          time={"시간"}
          icon={"사진"}
          temp={"온도"}
          wind={"풍향"}
        /> */}
      </div>
    </div>
  );
};
export default WeatherHour;
