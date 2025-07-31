import "./MainComponent.css";
import TodayImportant from "./TodayImportant";
import WeatherHour from "./WeatherHour";
import WeatherNow from "./WeatherNow";
import WeatherWeek from "./WeatherWeek";
import { useContext } from "react";
import { IsDarkContext } from "../../App";

const MainComponent = () => {
  const isDark = useContext(IsDarkContext);
  return (
    <div
      className={`MainComponent${isDark ? " dark" : ""}`}
    >
      <div className="LeftSection">
        <WeatherNow />
        <WeatherWeek />
      </div>

      <div
        className={`RightSection${isDark ? " dark" : ""}`}
      >
        <TodayImportant />
        <WeatherHour />
      </div>
    </div>
  );
};
export default MainComponent;
