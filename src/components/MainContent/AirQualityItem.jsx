import "./AirQualityItem.css";
import airIcon from "../../assets/pngegg.png";
import darkAirIcon from "../../assets/darkPngegg.png";
import { useContext } from "react";
import { IsDarkContext } from "../../App";

const AirQualityItem = ({ text, isIconOnly, data }) => {
  const isDark = useContext(IsDarkContext);

  return (
    <div className="AirQualityItem">
      {isIconOnly ? (
        <div>
          <img
            className="airIcon"
            src={isDark ? darkAirIcon : airIcon}
            alt="대기오염지수 아이콘"
          />
        </div>
      ) : (
        <div>
          <div className="airQuality_title">{text}</div>
          <div
            className={`airQuality_data ${
              isDark ? " dark" : ""
            }`}
          >
            {data}
          </div>
        </div>
      )}
    </div>
  );
};

export default AirQualityItem;
