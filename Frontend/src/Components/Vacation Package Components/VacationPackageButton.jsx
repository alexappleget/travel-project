export default function VacationPackageButton({ active, setActive }) {
  return (
    <button
      className={
        active === "VacationSearch"
          ? "VacationSearchBtn-active"
          : "vacationSearch-btn"
      }
      onClick={() => setActive("VacationSearch")}
    >
      See Our
      <br />
      Vacations
    </button>
  );
}
