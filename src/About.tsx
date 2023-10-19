import disconnect from "./assets/tkdisconnect.png";
import players from "./assets/players.png";
import toxchat from './assets/toxicchat.png'

import { useState } from "react";
import Rodal from "rodal";
import ApplyForm from "./UIComponents/ApplyForm";
export default function About(): JSX.Element {

    const [shown, setShown] = useState(false);
    const [modalContent, setModalContent] = useState(<></>);
    const [modalHeader, setModalHeader] = useState(<></>);
  
    function show(header: JSX.Element, body: JSX.Element) {
      setShown(true);
      setModalContent(body);
      setModalHeader(header);
    }
  
    function hide() {
      setShown(false);
    }

  return (
    <div className="px-[20vw] font-heading flex flex-col gap-10">
                      <Rodal
                visible={shown}
                onClose={hide}
                customStyles={{
                  backgroundColor: "#1f1f1f",
                  // Set height to fit
                  height: "fit-content",
                  // Set width to fit
                  width: "60%",
                }}
              >
                <div className="text-text font-body w-fit h-fit">
                  <h1 className="text-2xl text-heading text-text">
                    {modalHeader}
                  </h1>
                  <div className="mt-5">{modalContent}</div>
                </div>
              </Rodal>
      <div className="flex gap-5">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl text-text text-bold text-body">About ZMC:</h1>
          <p className=" text-body">
            At ZMC, we're not your average CS2 team. We've got a unique approach
            to competitive gaming - specializing in friendly fire! That's right,
            we take team-killing to a whole new level, and we do it with style.
          </p>
        </div>

        <div className="flex justify-center w-[60vw] align-center border-text border-2 rounded-sm">
          <img src={disconnect} alt="disconnect" className="shadow-md" />
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex justify-center w-[60vw] align-center border-text border-2 rounded-sm">
          <img
            src={players}
            alt="disconnect"
            className="object-contain shadow-md"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl text-text text-bold text-body">
            Our Diverse Roster:
          </h1>
          <p>
            What sets us apart is our diverse roster of players. From Silver to
            Global Elite, we've got all skill levels covered. It's all about
            unity and fun, even when we're shooting at each other. Whether
            you're a newcomer trying to master the basics or a seasoned pro
            looking for a new challenge, you'll find a home with us.
          </p>
          <div className="transition-all bg-transparent rounded-md hover:bg-secondary w-fit">
            <button onClick={() => show(<>Apply to the team</>, <ApplyForm />)} className="px-5 py-2 rounded-md w-fit bg-gradient-to-br from-accent to-transparent text-text">Join the Team</button>
          </div>
          
        </div>
      </div>
    <div className="flex gap-5">
        <div className="flex flex-col gap-3">
        <h1 className="text-3xl text-text text-bold text-body">Our Mission:</h1>
        <p>
            We're not just about competition; we're about camaraderie. We believe in
            creating an environment where players can learn, grow, and have a blast
            while "striving for that teamkill." Our team fosters a welcoming
            atmosphere where everyone can express themselves and enjoy the thrill of
            gaming.
        </p>
        </div>
        <div className="flex justify-center w-[60vw] align-center border-text border-2 rounded-sm">
          <img
            src={toxchat}
            alt="disconnect"
            className="object-fill shadow-md"
          />
        </div>

    </div>
    <br></br>
      <p className="text-gray-400">
        So, if you're looking for a CS2 team that's not afraid to mix things up,
        you've come to the right place. Join us, and let's aim for the most epic
        teamkills together!
      </p>
    </div>
  );
}
