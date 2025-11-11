export function getMiseAmount(mise) {
  if (mise <= 30) {
    return {
      level: "좋음",
      style: { backgroundColor: "green", color: "white" },
    };
  } else if (mise <= 80) {
    return {
      level: "보통",
      style: { backgroundColor: "yellow", color: "black" },
    };
  } else if (mise <= 150) {
    return {
      level: "나쁨",
      style: { backgroundColor: "orange", color: "white" },
    };
  } else {
    return {
      level: "매우 나쁨",
      style: { backgroundColor: "red", color: "white" },
    };
  }
}
