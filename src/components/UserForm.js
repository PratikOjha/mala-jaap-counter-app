import { useState } from "react";

export default function UserForm({ setUser }) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim()) {
      setUser(name.trim());
    }
  };

  return (
    <div className="center">
      <h2>🙏 Hare Krishna</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />

      <br /><br />

      <button onClick={handleSubmit}>
        Start Jap
      </button>
    </div>
  );
}
