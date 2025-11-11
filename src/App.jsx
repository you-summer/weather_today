import "./App.css";
import { createContext, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import MainComponent from "./components/MainContent/MainComponent";

export const WeatherContext = createContext();
export const AddressContext = createContext();
export const FiveWeatherContext = createContext();
export const AirDataContext = createContext();
export const SearchLocationContext = createContext();
export const IsDarkContext = createContext();

function App() {
  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;

  const [coords, setCoords] = useState({
    lat: null,
    lon: null,
  });
  const [weatherData, setWeatherData] = useState(null);
  const [krAddressData, setKrAddressData] = useState(null);
  const [fiveWeather, setFiveWeather] = useState(null);
  const [airData, setAirData] = useState();
  const [searchData, setSearchData] = useState([]);
  const [changeAddress, setChangeAddress] = useState("");
  const [isDark, setIsDark] = useState(false);

  // 다크모드
  const onDark = () => {
    setIsDark(!isDark);
  };

  // 위도와 경도 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((location) => {
      let lat = location.coords.latitude;
      let lon = location.coords.longitude;

      setChangeAddress("");
      // console.log("잘 나오나요?", lat, lon, location);
      setCoords({ lat, lon });
      // getWeatherCurrentLocation(lat, lon);
      // getKakaoKoreaAddress(lat, lon);
      // getFiveWeather(lat, lon);
      // getAirData(lat, lon);
    }, error);
  };

  // 날씨 가져오기
  const getWeatherCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
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
    // console.log("한글주소 : ", data);
    setKrAddressData(data);
  };

  // 5일치 예보 호출하기
  const getFiveWeather = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=kr`;
    let res = await fetch(url);
    let data = await res.json();
    // console.log("5일치예보 : ", data);
    setFiveWeather(data);
  };

  // 대기정보 API
  const getAirData = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=kr`;
    let res = await fetch(url);
    let data = await res.json();
    // console.log("ㄷ기저보", data);
    setAirData(data);
  };

  // 검색어로 주소랑 좌표(x,y)찾기
  const getSearchAddress = async (search) => {
    let url = `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(
      search
    )}`;
    let res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `KakaoAK ${KAKAO_API_KEY}`,
      },
    });
    let data = await res.json();
    // console.log("잘가져오나?ㅇㅇㅇㅇ", data);
    setSearchData(data);
  };

  // 로딩기능 만들기
  const isLoading = !weatherData || !krAddressData || !fiveWeather || !airData;

  const error = () => {
    alert("위치 정보를 가져올 수 없어 기본 위치(서울 종로구)로 설정합니다.");
    setCoords({ lat: 37.5665, lon: 126.978 });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (coords.lat && coords.lon) {
      getWeatherCurrentLocation(coords.lat, coords.lon);
      getKakaoKoreaAddress(coords.lat, coords.lon);
      getFiveWeather(coords.lat, coords.lon);
      getAirData(coords.lat, coords.lon);
    }
  }, [coords]);
  // console.log("coords 확인:", coords);

  useEffect(() => {
    if (isDark) {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div>
      {isLoading ? (
        <div className="AppLoading">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div>날씨 정보를 불러오는 중입니다...</div>
        </div>
      ) : (
        <IsDarkContext.Provider value={isDark}>
          <WeatherContext.Provider value={weatherData}>
            <AddressContext.Provider value={{ krAddressData, changeAddress }}>
              <FiveWeatherContext.Provider value={fiveWeather}>
                <AirDataContext.Provider value={airData}>
                  <SearchLocationContext.Provider
                    value={{
                      getSearchAddress,
                      searchData,
                      setCoords,
                      setChangeAddress,
                    }}
                  >
                    <Header
                      getCurrentLocation={getCurrentLocation}
                      onDark={onDark}
                      isDark={isDark}
                    />
                  </SearchLocationContext.Provider>

                  <MainComponent />
                </AirDataContext.Provider>
              </FiveWeatherContext.Provider>
            </AddressContext.Provider>
          </WeatherContext.Provider>
        </IsDarkContext.Provider>
      )}
    </div>
  );
}

export default App;
