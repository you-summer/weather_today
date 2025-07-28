import AirQualityItem from "./AirQualityItem";
import TodayImportantItem from "./TodayImportantItem";
import "./TodayImportant.css";
import { useContext } from "react";
import { AirDataContext } from "../../App";
import { WeatherContext } from "../../App";
import { getMiseAmount } from "../util/get-mise-amount";

import icon from "../../assets/pngegg.png";

import feelsLikeIcon from "../../assets/feelslike.png";
import pressureIcon from "../../assets/pressure.png";
import visibilityIcon from "../../assets/visibility.png";
import humidityIcon from "../../assets/humidity.png";

const TodayImportant = () => {
  const airDataList = useContext(AirDataContext);
  const weatherData = useContext(WeatherContext);

  if (!airDataList || !weatherData) {
    return <div>오늘의 날씨 리턴중...</div>;
  }

  const chomise = airDataList.list[0].components.pm2_5; //초미세먼지
  const mise = airDataList.list[0].components.pm10; //미세먼지
  const ozone = airDataList.list[0].components.o3; //오존
  const no2 = airDataList.list[0].components.no2; //이산화질소

  const airItems = [
    { text: "미세먼지", data: mise },
    { text: "초미세먼지", data: chomise },
    { text: "이산화질소", data: no2 },
    { text: "오존", data: ozone },
  ];

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    let hour = date.getHours();
    let min = date.getMinutes();

    if (hour < 10) {
      hour = `0${hour}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }
    return `${hour}:${min}`;
  };

  const sunrise = formatTime(weatherData.sys.sunrise); //일출
  const sunset = formatTime(weatherData.sys.sunset); //일몰

  const sunItems = [
    { text: "일출", data: `AM ${sunrise}` },
    { text: "일몰", data: `PM ${sunset}` },
  ];

  const feelsLike = Math.trunc(weatherData.main.feels_like); // 체감온도
  const humidity = weatherData.main.humidity; //습도
  const pressure = weatherData.main.pressure; //기압
  const visibility = weatherData.visibility / 1000; //가시거리

  const todatyItems = [
    {
      text: "습도",
      data: humidity,
      unit: `%`,
      icon: humidityIcon,
    },
    {
      text: "체감온도",
      data: feelsLike,
      unit: `°C`,
      icon: feelsLikeIcon,
    },
    {
      text: "기압",
      data: pressure,
      unit: `hpa`,
      icon: pressureIcon,
    },
    {
      text: "가시거리",
      data: visibility,
      unit: `km`,
      icon: visibilityIcon,
    },
  ];

  console.log("대기정보.....", airDataList);
  console.log("sunset,sunrise", sunset, sunrise);

  const { level, style } = getMiseAmount(mise);

  return (
    <div className="TodayImportant">
      오늘의 주요 정보
      <div className="todayImportantWrapper">
        <div className="todayImportant_top">
          <div className="todayImportant_top1">
            <div className="todayImportant_top1_title">
              <div className="todayImportant_top1_title_left">
                대기오염지수
              </div>
              <div className="todayImportant_top1_title_rigth">
                <div
                  style={style}
                  className="todayImportant_top1_title_right_sub"
                >
                  {level}
                </div>
              </div>
            </div>
            <div className="airQualityWrapper">
              <AirQualityItem isIconOnly />
              {airItems.map((item) => {
                return (
                  <AirQualityItem
                    text={item.text}
                    data={item.data}
                  />
                );
              })}
            </div>
          </div>
          <div className="todayImportant_top2">
            <div className="todayImportant_top2_title">
              일출&일몰
            </div>
            <div className="airQualityWrapper">
              {sunItems.map((item) => {
                return (
                  <AirQualityItem
                    text={item.text}
                    data={item.data}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="todayImportant_bottom">
          {todatyItems.map((item) => {
            return (
              <TodayImportantItem
                text={item.text}
                data={item.data}
                unit={item.unit}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TodayImportant;
