import "./MainComponent.css";
import TodayImportant from "./TodayImportant";
import WeatherHour from "./WeatherHour";
import WeatherNow from "./WeatherNow";
import WeatherWeek from "./WeatherWeek";

const MainComponent = () => {
  return (
    <div className="MainComponent">
      <div className="LeftSection">
        <WeatherNow />
        <WeatherWeek />
      </div>

      <div className="RightSection">
        <TodayImportant />
        <WeatherHour />
      </div>
    </div>
  );
};
export default MainComponent;
