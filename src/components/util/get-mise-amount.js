export function getMiseAmount(mise) {
  if (mise <= 30) {
    return { backgroundColor: "green" };
  } else if (31 <= mise && mise <= 80) {
    return { backgroundColor: "yellow" };
  } else if (81 <= mise && mise <= 150) {
    return { backgroundColor: "orange" };
  } else if (151 <= mise) {
    return { backgroundColor: "red" };
  }
}
