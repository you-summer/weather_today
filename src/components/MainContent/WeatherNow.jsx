import {
  AddressContext,
  WeatherContext,
  IsDarkContext,
} from "../../App";
import "./WeatherNow.css";
import { useContext } from "react";

const WeatherNow = () => {
  const weatherData = useContext(WeatherContext);
  const isDark = useContext(IsDarkContext);
  const { krAddressData, changeAddress } =
    useContext(AddressContext);
  console.log("잘넘어왔나?", weatherData);
  console.log("이것도 잘 넘어왔나?", krAddressData);

  if (!krAddressData || !weatherData) {
    return (
      <div className="loadingInfo">
        정보를 불러오는 중입니다..
      </div>
    );
  }

  const region1 =
    krAddressData.documents[0].address.region_1depth_name; // '서울'
  const region2 =
    krAddressData.documents[0].address.region_2depth_name; // '노원구'
  const region3 =
    krAddressData.documents[0].address.region_3depth_name; // '하계동'

  const weatherKorMap = {
    Clear: "맑음",
    Clouds: "흐림",
    Rain: "비",
    Thunderstorm: "천둥",
    Drizzle: "이슬비",
    Snow: "눈",
    Mist: "안개",
    Haze: "실안개",
    Fog: "짙은 안개",
    Smoke: "연기",
  };

  const mainWeather =
    weatherKorMap[weatherData.weather[0].main] ||
    "알 수 없음";

  const temp = Math.trunc(weatherData.main.temp);
  // const weatherDesc = weatherData.weather[0].main;
  const weatherIcon = weatherData.weather[0].icon;

  return (
    <div className={`WeatherNow${isDark ? " dark" : ""}`}>
      <div className="now">현재</div>
      {changeAddress ? (
        <div className="location">{changeAddress}</div>
      ) : (
        <div className="location">{`${region1} ${region2} ${region3}`}</div>
      )}
      <div className="iconTemp">
        <img
          className="icon"
          src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt="weather icon"
        />
        <div className="temp">{temp}°C</div>
      </div>

      <div className="weatherDesc">{mainWeather}</div>
    </div>
  );
};

export default WeatherNow;
