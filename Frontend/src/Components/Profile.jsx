import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import HomeButton from "./Home Components/HomeButton";
import VacationPackageButton from "./Vacation Package Components/VacationPackageButton";
import { useState } from "react";
import Home from "./Home Components/Home";
import VacationPackages from "./Vacation Package Components/VacationPackages";
import videoBg from "../assets/VideoBg.mp4";

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();
  const [active, setActive] = useState("");
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    isAuthenticated && (
      <div className="profile-container">
        {isOpen ? (
          <>
            <video src={videoBg} autoPlay loop muted />
            <div className="dashboard">
              <HomeButton active={active} setActive={setActive} />
              <VacationPackageButton active={active} setActive={setActive} />
              <LogoutButton />

              <div className="homescreen">
                {active === "" && <Home setActive={setActive} />}
                {active === "VacationSearch" && <VacationPackages />}
              </div>
            </div>
          </>
        ) : (
          <>
            <video src={videoBg} autoPlay loop muted />

            <div className="closed">
              <p>
                Oh no! Our hamster has stopped running on the wheel that powers
                this site and must have fallen asleep. If you are reading this
                then that means you should probably hop off and go to bed.
                Irwin, our hamster, is getting his beauty sleep and should be
                awake during the hours of 8a and 5p CT. Don't believe us? Come
                back between those hours and the website should be working fine.
                When you do come back, be sure to thank Irwin for his kindness
                and continuous running to power things.
              </p>
            </div>
          </>
        )}
      </div>
    )
  );
}
