import "./WeatherWeekItem.css";

const WeatherWeekItem = ({ main, dt, dt_txt, weather }) => {
  //   console.log("잘넘어왔나보자", main, dt, dt_txt, weather);

  const temp_max = Math.trunc(main.temp_max);
  const temp_min = Math.trunc(main.temp_min);
  const icon = weather[0].icon.slice(0, -1) + "d"; //마지막글자를 d로 바꿈
  //   const date = new Date(dt * 1000);

  const date = new Date(dt * 1000);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = date.getDay();
  const weekdayNames = [
    "일",
    "월",
    "화",
    "수",
    "목",
    "금",
    "토",
  ];
  const weekdayNames2 = weekdayNames[weekday];

  return (
    <div className="WeatherWeekItem">
      <div className="temps">
        <div className="imgIcon">
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="이미지"
          />
        </div>
        <div className="temp1">{temp_max}°</div>
        <div className="temp2">{temp_min}°</div>
      </div>

      <div className="date">
        {month}월 {day}일
      </div>
      <div className="dateYoil">{weekdayNames2}</div>
    </div>
  );
};
export default WeatherWeekItem;
