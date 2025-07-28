import windIcon from "../../assets/windIcon.png";

// export function getWindSpeedImage(deg) {
//   if (deg <= 22.5 || 337.5 <= deg) {
//     return windIcon; //북향
//   } else if (22.6 <= deg && deg <= 67.5) {
//     return windIcon; //북동향
//   } else if (67.6 <= deg && deg <= 112.5) {
//     return windIcon; //"동향";
//   } else if (112.6 <= deg && deg <= 157.5) {
//     return windIcon; //"남동향";
//   } else if (157.6 <= deg && deg <= 202.5) {
//     return windIcon; //"남향";
//   } else if (202.6 <= deg && deg <= 247.5) {
//     return windIcon; //"남서향";
//   } else if (247.6 <= deg && deg <= 292.5) {
//     return windIcon; // "서향";
//   } else if (292.6 <= deg && deg <= 337.4) {
//     return windIcon; //"북서향";
//   }
// }

export function getWindSpeedImage(deg) {
  return windIcon;
}
