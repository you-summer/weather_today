import "./Header.css";
import weather from "../../assets/weather.png";
import SearchLocation from "./SearchLocation";

const Header = ({ getCurrentLocation }) => {
  const onClickLocation = () => {
    if (confirm("위치를 새로고침 하시겠습니까?")) {
      getCurrentLocation();
    }
  };

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
        <SearchLocation />
      </div>
      <div className="header_right">
        <button
          className="my_location_find"
          onClick={onClickLocation}
        >
          내 위치 찾기
        </button>
      </div>
    </div>
  );
};
export default Header;
