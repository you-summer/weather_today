import "./WeatherHourItem.css";

const WeatherHourItem = ({
  time,
  icon,
  temp,
  wind,
  deg,
  windIcon,
}) => {
  return (
    <div className="WeatherHourItem">
      <div className="WeatherHourItem_top">
        <div>{time}</div>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        />
        <div>{temp}°</div>
      </div>
      <div className="WeatherHourItem_bottom">
        <div>{time}</div>
        <img
          src={windIcon}
          alt="풍향 아이콘"
          className="wind-icon"
          style={{ transform: `rotate(${deg}deg)` }}
        />
        <div>{wind}km/h</div>
      </div>
    </div>
  );
};
export default WeatherHourItem;
