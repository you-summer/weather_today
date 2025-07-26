import "./AirQualityItem.css";
import airIcon from "../../assets/pngegg.png";

const AirQualityItem = ({ text, isIconOnly, data }) => {
  return (
    <div className="AirQualityItem">
      {isIconOnly ? (
        <div>
          <img
            className="airIcon"
            src={airIcon}
            alt="대기오염지수 아이콘"
          />
        </div>
      ) : (
        <div>
          <div className="airQuality_title">{text}</div>
          <div className="airQuality_data">{data}</div>
        </div>
      )}
    </div>
  );
};

export default AirQualityItem;
