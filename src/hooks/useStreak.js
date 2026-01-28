export default function useStreak(user) {
  const data = JSON.parse(localStorage.getItem("japRecords")) || {};
  const userData = data[user];

  if (!userData) return 0;

  const dates = Object.keys(userData).sort().reverse();

  let streak = 0;
  let currentDate = new Date();

  for (let date of dates) {
    const d = new Date(date);

    if (
      d.toISOString().split("T")[0] ===
      currentDate.toISOString().split("T")[0]
    ) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}
