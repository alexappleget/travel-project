import { useEffect, useState } from "react";
import axios from "axios";
import Vacation from "./Vacation.jsx";

export default function VacationPackages() {
  const [vacations, setVacations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://travel-project-khi7.onrender.com/vacations"
        ); // change back to /data.json if this doesnt work
        setVacations(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="vacationpackage-h1">Choose a Vacation!</h1>
      <div className="vacationDiv">
        <ul className="list-vacations">
          {vacations?.map((vacation) => (
            <Vacation vacation={vacation} key={vacation.vacation_id} />
          ))}
        </ul>
      </div>
    </>
  );
}
