export default function CounterCircle({ count, onClick }) {
  return (
    <div className="circle" onClick={onClick}>
      <h1>{count} / 108</h1>
    </div>
  );
}
