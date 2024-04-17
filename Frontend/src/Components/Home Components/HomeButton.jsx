export default function HomeButton({ active, setActive }) {
  return (
    <button
      className={active === "" ? "homeBtn-active" : "home-btn"}
      onClick={() => setActive("")}
    >
      Home
    </button>
  );
}
