const mantras = [
  "Radhe Radhe",
  "Krishna Krishna",
  "Hare Krishna",
  "Ram Ram"
];

export default function MantraSelector({ setMantra }) {
  return (
    <div className="center">
      <h3>Select Mantra</h3>
      {mantras.map((m) => (
        <button key={m} onClick={() => setMantra(m)}>
          {m}
        </button>
      ))}
    </div>
  );
}
