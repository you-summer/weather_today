export function getMiseAmount(mise) {
  if (mise <= 30) {
    return {
      level: "좋음",
      style: { backgroundColor: "green" },
    };
  } else if (31 <= mise && mise <= 80) {
    return {
      level: "보통",
      style: { backgroundColor: "yellow" },
    };
  } else if (81 <= mise && mise <= 150) {
    return {
      level: "나쁨",
      style: { backgroundColor: "orange" },
    };
  } else if (151 <= mise) {
    return {
      level: "매우 나쁨",
      style: { backgroundColor: "red" },
    };
  }
}
