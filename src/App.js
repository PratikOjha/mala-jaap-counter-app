import { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import MantraSelector from "./components/MantraSelector";
import CounterCircle from "./components/CounterCircle";
import Motivation from "./components/Motivation";
import TodaySummary from "./components/TodaySummary";
import MantraStats from "./components/MantraStats";
import useStreak from "./hooks/useStreak";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState("");
  const [mantra, setMantra] = useState("");
  const [count, setCount] = useState(0);
  const [malas, setMalas] = useState(0);
  const [target, setTarget] = useState(5);
  const [showMantraSelector, setShowMantraSelector] = useState(false);

  /* ---------------- HELPERS ---------------- */
  const getToday = () => {
    return new Date().toISOString().split("T")[0];
  };

  /* ---------------- SIDE EFFECT ---------------- */
  useEffect(() => {
    localStorage.setItem(
      "japData",
      JSON.stringify({ user, mantra, count, malas })
    );
  }, [user, mantra, count, malas]);

  const streak = useStreak(user);

  /* ---------------- CLICK HANDLER ---------------- */
  const handleClick = () => {
    if (count + 1 === 108) {
      const today = getToday();

      setMalas((prev) => prev + 1);
      setCount(0);

      // Save daily record
      const data = JSON.parse(localStorage.getItem("japRecords")) || {};

      if (!data[user]) data[user] = {};
      if (!data[user][today]) data[user][today] = {};
      if (!data[user][today][mantra]) data[user][today][mantra] = 0;

      data[user][today][mantra] += 1;

      localStorage.setItem("japRecords", JSON.stringify(data));
    } else {
      setCount((prev) => prev + 1);
    }
  };

  /* ---------------- CONDITIONAL SCREENS ---------------- */
  if (!user) return <UserForm setUser={setUser} />;

  if (!mantra || showMantraSelector) {
    return (
      <MantraSelector
        setMantra={(selectedMantra) => {
          setMantra(selectedMantra);
          setCount(0); // reset partial count
          setShowMantraSelector(false);
        }}
      />
    );
  }

  /* ---------------- MAIN UI ---------------- */
  return (
    <div className="app">
      <h2>Hare Krishna, {user} 🙏</h2>

      <p><strong>Mantra:</strong> {mantra}</p>
      <p><strong>Target:</strong> {target} Malas</p>

      <CounterCircle count={count} onClick={handleClick} />
      <h3>Mala: {malas}</h3>
      <p>🔥 Current Streak: {streak} day(s)</p>

      <Motivation malas={malas} count={count} target={target} />
      <TodaySummary user={user} />
      <MantraStats user={user} />

      <button
        className="change-btn"
        onClick={() => {
          if (count > 0) {
            alert("Complete the current mala or reset counter before changing mantra 🙏");
            return;
          }
          setShowMantraSelector(true);
        }}
      >
        Change Mantra
      </button>
    </div>
  );
}
