import "./Header.css";
import weather from "../../assets/weather.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="header_left">
        <div className="left-wrapper">
          <img
            src={weather}
            alt="날씨 아이콘"
            className="weather-icon"
          />
          <span>now weather</span>
        </div>
      </div>
      <div className="header_center">
        <input
          placeholder="지역명을 입력해주세요..."
          className="header_input"
        />
      </div>
      <div className="header_right">
        내위치찾기(나중에구현)
      </div>
    </div>
  );
};
export default Header;
