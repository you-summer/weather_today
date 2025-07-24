import "./App.css";
import { useEffect } from "react";

function App() {
  const WEATHER_API_KEY = import.meta.env
    .VITE_WEATHER_API_KEY;
  const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;

  // 위도와 경도 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((location) => {
      let lat = location.coords.latitude;
      let lon = location.coords.longitude;
      console.log("잘 나오나요?", lat, lon, location);
      getWeatherCurrentLocation(lat, lon);
      getKakaoKoreaAddress(lat, lon);
    }, error);
  };

  // 날씨 가져오기
  const getWeatherCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=kr`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
  };

  const getKakaoKoreaAddress = async (lat, lon) => {
    let url = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}&input_coord=WGS84`;
    let res = await fetch(url, {
      headers: {
        Authorization: `KakaoAK ${KAKAO_API_KEY}`,
      },
    });
    let data = await res.json();
    console.log("한글주소 : ", data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const error = () => {
    alert("에러임!!");
  };

  return <>실시간날씨와 검색 드가를 드가보죠</>;
}

export default App;
