import "./App.css";
import { createContext, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import MainComponent from "./components/MainContent/MainComponent";

export const WeatherContext = createContext();
export const AddressContext = createContext();

function App() {
  const WEATHER_API_KEY = import.meta.env
    .VITE_WEATHER_API_KEY;
  const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;

  const [coords, setCoords] = useState({
    lat: null,
    lon: null,
  });
  const [weatherData, setWeatherData] = useState(null);
  const [krAddressData, setKrAddressData] = useState(null);

  // 위도와 경도 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((location) => {
      let lat = location.coords.latitude;
      let lon = location.coords.longitude;

      console.log("잘 나오나요?", lat, lon, location);
      setCoords({ lat, lon });
      getWeatherCurrentLocation(lat, lon);
      getKakaoKoreaAddress(lat, lon);
      getFiveWeather(lat, lon);
    }, error);
  };

  // 날씨 가져오기
  const getWeatherCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setWeatherData(data);
  };

  // 한국 주소 가져오기
  const getKakaoKoreaAddress = async (lat, lon) => {
    let url = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}&input_coord=WGS84`;
    let res = await fetch(url, {
      headers: {
        Authorization: `KakaoAK ${KAKAO_API_KEY}`,
      },
    });
    let data = await res.json();
    console.log("한글주소 : ", data);
    setKrAddressData(data);
  };

  // 5일치 예보 호출하기
  const getFiveWeather = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=kr`;
    let res = await fetch(url);
    let data = await res.json();
    console.log("5일치예보 : ", data);
  };

  const error = () => {
    alert("에러임!!");
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  // useEffect(() => {
  //   if (coords.lat && coords.lon) {
  //     getWeatherCurrentLocation(coords.lat, coords.lon);
  //     getKakaoKoreaAddress(coords.lat, coords.lon);
  //   }
  // }, [coords]);

  return (
    <div>
      <WeatherContext.Provider value={weatherData}>
        <AddressContext.Provider value={krAddressData}>
          <Header />
          <MainComponent />
        </AddressContext.Provider>
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
