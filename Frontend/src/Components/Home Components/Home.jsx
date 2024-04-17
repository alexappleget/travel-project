export default function Home({ setActive }) {
  return (
    <>
      <h1 className="home-h1">Welcome to Home!</h1>
      <div className="home-content">
        <p className="home-p">
          To get started, click the button below and search your dream
          destination!
        </p>
        <button
          className="home-searchvacations-btn"
          onClick={() => setActive("VacationSearch")}
        >
          Search Vacations
        </button>
      </div>
    </>
  );
}
