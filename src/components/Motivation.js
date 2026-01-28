export default function Motivation({ malas, count, target }) {
  let message = "Start chanting with focus 🧘";

  if (count > 0 && count < 54)
    message = "Good start, keep the rhythm 🌸";
  else if (count >= 54)
    message = "Halfway there! Stay mindful ✨";
  else if (malas > 0)
    message = `Wonderful! ${malas} Mala completed 🙏`;

  if (malas === target)
    message = "🎉 Target achieved! Divine focus attained";

  return <p className="motivation">{message}</p>;
}
