export default function MantraStats({ user }) {
  const data = JSON.parse(localStorage.getItem("japRecords")) || {};
  const userData = data[user];

  if (!userData) {
    return <p>No chanting data available yet 🙏</p>;
  }

  const mantraTotals = {};

  Object.values(userData).forEach((dayData) => {
    Object.entries(dayData).forEach(([mantra, malas]) => {
      mantraTotals[mantra] = (mantraTotals[mantra] || 0) + malas;
    });
  });

  return (
    <div className="stats">
      <h3>📿 Mantra-wise Total Malas</h3>

      {Object.entries(mantraTotals).map(([mantra, malas]) => (
        <p key={mantra}>
          <strong>{mantra}</strong> : {malas} Mala(s)
        </p>
      ))}
    </div>
  );
}
