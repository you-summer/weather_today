import "./TodayImportantItem.css";
import { useContext } from "react";
import { IsDarkContext } from "../../App";

const TodayImportantItem = ({ text, data, icon, unit }) => {
  const isDark = useContext(IsDarkContext);
  return (
    <div
      className={`TodayImportantItem ${
        isDark ? " dark" : ""
      }`}
    >
      <div className="todayImportantItem_title">{text}</div>
      <div className="todayImportantItem_content">
        <img className="img" src={icon} />
        <div className="text">
          {data}
          {unit}
        </div>
      </div>
    </div>
  );
};

export default TodayImportantItem;
