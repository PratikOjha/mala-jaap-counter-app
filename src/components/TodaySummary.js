export default function TodaySummary({ user }) {
  const today = new Date().toISOString().split("T")[0];
  const data = JSON.parse(localStorage.getItem("japRecords")) || {};

  const todayData = data[user]?.[today];

  if (!todayData) {
    return <p>Today you have not completed any mala yet 🙏</p>;
  }

  return (
    <div className="summary">
      <h3>📅 Today’s Jap Summary</h3>
      {Object.entries(todayData).map(([mantra, malas]) => (
        <p key={mantra}>
          {mantra}: <strong>{malas} Mala(s)</strong>
        </p>
      ))}
    </div>
  );
}
