# 📝 now weather
> React로 만든 날씨예보 웹 애플리케이션입니다.</br> 사용자의 현재 위치나 검색한 지역의 실시간 날씨, 시간대별 예보, 주간 예보, 대기질 등 다양한 정보를 직관적인 UI로 확인할 수 있습니다. 다크모드도 적용하였습니다.</br>
---

## 💻 미리보기
<img width="1532" height="841" alt="image" src="https://github.com/user-attachments/assets/908d1fd4-c1f8-4ef1-bf7f-e1da1637c911" />


- 다크모드</br>
<img width="1600" height="841" alt="image" src="https://github.com/user-attachments/assets/d360e4a2-8745-49e0-9ed1-167758cf1665" />

---


## 📅 개발 기간

**2025.07.25 ~ 2025.07.31**  

---

## 📌 프로젝트 개요

- **목적:** API 호출을 이용한 실시간 날씨 웹사이트 구현 , 위치 검색으로 타지역 실시간 날씨 정보 구현
- **주요 기능:** 현재 위치 기반 날씨 확인, 주소 검색, 시간대별/주간 예보, 대기질 정보, 다크모드 지원

---

## 🛠️ 기술 스택

- **Frontend:** React, JSX, CSS , JavaScript
- **API:** 
  - [OpenWeather API](https://openweathermap.org/api) - 날씨/대기질 데이터
  - [Kakao API](https://developers.kakao.com/docs/latest/ko/local/dev-guide) - 주소 → 좌표 변환
- **기타:** Bootstrap, Vite, .env 환경변수 설정

---

## 🔧 주요 기능

| 기능 | 설명 |
|------|------|
| 🧭 **현재 위치 날씨** | 브라우저 위치 권한을 통해 사용자의 현재 날씨 자동 표시 |
| 🔍 **주소 검색** | 카카오 API로 지역 이름(한글) 검색 가능, 검색한 주소의 실시간 날씨 정보 렌더링 |
| ⏱️ **시간대별 예보** | 3시간 단위 날씨 예보 제공 |
| 📅 **주간 예보** | 요일별 날씨 및 기온 표시 |
| 🏭 **대기질 정보** | 미세먼지, 초미세먼지, 오존 등 공기질 정보 표시 |
| 🌗 **다크모드 지원** | ☀️ / 🌙 이모지 버튼으로 라이트/다크 전환 |
| ⏳ **로딩 처리** | API 호출 시 로딩 스피너 표시 및 실패 시 재시도 가능 |

---

## 📁 폴더 구조

```bash
src/
├── assets/                # 아이콘, 이미지
├── components/
│   ├── Header/            # 상단 위치 및 다크모드 버튼
│   ├── MainContent/
│   │   ├── WeatherSummary/     # 현재 날씨 요약
│   │   ├── HourlyForecast/     # 시간대별 날씨 예보
│   │   ├── WeeklyForecast/     # 주간 예보
│   │   ├── AirQuality/         # 대기질 정보
│   │   ├── TodayImportant/     # 체감온도 등 요약 정보
│   ├── SearchLocation/   # 지역 검색창
├── App.jsx
├── index.css
└── main.jsx

```

---
