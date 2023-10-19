import { useEffect, useState } from "react";
import { ZmcOutline } from "./_components/Logo";
import testclip from "./assets/teamkillfull.mp4"
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import players from "./assets/players.png";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import ApplyForm from "./UIComponents/ApplyForm";

export default function Home(): JSX.Element {
  const playerList = [
    <Player
      name="_Voider_"
      image="https://cdn.discordapp.com/avatars/682240465126424576/0eb89c1ce91ebc0e62633276a78a8636.webp?size=512"
      rank="Global Elite"
    />,
    <Player
      name="groteharigekerel"
      image="https://cdn.discordapp.com/avatars/267018192579330052/51c65ad48ccd98383efa4967c3ea215b.webp?size=512"
      rank="Global Elite"
    />,
    <Player
      name="Killshot"
      image="https://avatars.cloudflare.steamstatic.com/879fbff9d692a43aebd8d8d5bccb1610b76142ad_full.jpg"
      rank="Silver I"
    />,
    <Player
      name="TurboDaan_"
      image="https://cdn.discordapp.com/avatars/302496302732673025/8f0d107be4934611fb21a75cb729eab9.webp?size=512"
      rank="Global Elite"
    />,
    <Player
      name="XyKazi"
      image="https://cdn.discordapp.com/avatars/893183085049446461/24fae449e36b7a7d45431b84349759ea.webp?size=512"
      rank="Global Elite"
    />,
  ];
  const [newPlayerList, setNewPlayerList] = useState(playerList);
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

  useEffect(() => {
    reshuffleplayers();
  }, []);

  function reshuffleplayers() {
    setNewPlayerList(playerList.sort(() => Math.random() - 0.5));
  }
  return (
    <div className="flex items-center justify-center w-full h-screen transition-all bg-background font-body">
      <div className=" bg-background w-[100%] h-full">
        <div className="relative flex flex-col">
          <div className="relative ">
            <div className="absolute w-full h-[calc(100%+10px)] md:h-full bg-gradient-to-b from-transparent to-background"></div>

            {/* Embed video */}
            <video
              className={
                "w-full aspect-[25/10] object-cover " +
                `bg-[url('${players}')]`
              }
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={testclip} type="video/mp4" />
              <img src={players} alt="players" />
            </video>
          </div>
          <div className=" z-50 w-[90%] md:w-[60%] bg-gradient-to-br from-background to-secondary mt-[-5vh] mx-auto p-5 rounded-xl shadow-md flex flex-col md:flex-row">
            <div className="flex flex-col justify-center w-full">
              <h1 className="text-3xl font-bold border-b-2 text-heading border-background w-fit">
                Striving for that teamkill.
              </h1>
              <p className="mt-4 text-xl text-gray-200 font-body">
                We are a competitive european CS2 team specialized in killing
                eachother
              </p>
              <a
                href="#"
                className="px-3 py-1 rounded-md shadow-md bg-accent w-fit"
              >
                Read more...
              </a>
            </div>
            <div className="flex justify-center w-full">
              <ZmcOutline fill="#4f4f4f" className="h-[30vh] w-full object-cover drop-shadow-xl text-gray-200" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-center font-heading">
              Meet our players
            </h1>
            <p className="text-xl text-center text-gray-200 font-body">
              We have a wide variety of players, from silver to global elite
            </p>
            <div className="flex flex-col md:flex-row w-[90%] md:w-[60vw] mx-auto gap-5 md:flex-wrap justify-center">
              {/* Reshuffle button */}
              {newPlayerList}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-center font-heading">
              Staff
            </h1>
            <p className="text-xl text-center text-gray-200 font-body">
              We also have 2 coaches to keep everything running smoothly
            </p>
            <div className="flex flex-row w-[90vw] md:w-[60vw] mx-auto gap-5 overflow-x-scroll scrollbar-thin scrollbar-track-secondary scrollbar-thumb-white scrollbar-thumb-rounded-md snap-x snap-mandatory relative rounded-xl">
              <Manager
                name="Bitmap7487"
                image="https://cdn.discordapp.com/avatars/746726733469974568/04cc1b0479f5e2e95e63598a00c092c6.webp?size=512"
                about="Last played CS in 2019"
              />
              <Manager
                name="R1nkol"
                image="https://cdn.discordapp.com/avatars/677514944370966572/daece2355cf830a6eb06ed34596ac9d3.webp?size=512"
                about="Has never played CS"
              />
            </div>
          </div>
          <div className="mt-10"></div>
          <div className="flex flex-col pt-5 items-center justify-center w-full md:h-[20vh] bg-gradient-to-br from-accent to-secondary shadow-md">
            <h1 className="text-3xl font-bold text-center font-heading">
              Interested in joining?
            </h1>
            <p className="text-xl text-center text-gray-200 font-body">
              We are always looking for new players to join our team
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
            </p>
            <Button
              className="mt-5 mb-20"
              variant="secondary"
              onClick={() => show(<h1>Apply to ZMC</h1>, <ApplyForm />)}
            >
              Join us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Player(props: {
  name: string;
  image: string;
  rank: string;
}): JSX.Element {
  // 6 strings for different tailwind gradient directions
  const gradients = ["to-br", "to-t", "to-b"];
  // Get random gradient
  const gradient = gradients[Math.floor(Math.random() * gradients.length)];

  const newclassname =
    "flex p-5 snap-center flex-col items-center justify-center md:min-w-[19vw] w-full h-full md:h-[20vw] bg-gradient-" +
    gradient +
    " from-accent to-transparent rounded-xl shadow-md";
  // Shift gradient on hover
  return (
    <div className="transition-all h-[30vh] md:h-auto duration-200 rounded-xl bg-secondary hover:bg-background">
      <div className={newclassname + ""}>
        <img
          src={props.image}
          alt={props.name}
          className="md:w-[80%] h-[80%] rounded-full aspect-square shadow-md"
        />
        <h1 className="text-2xl font-bold">{props.name}</h1>
        <Badge variant={"secondary"}>{props.rank}</Badge>
      </div>
    </div>
  );
}
function Manager(props: {
  name: string;
  image: string;
  about: string;
}): JSX.Element {
  return (
    <div className="min-w-full transition-all duration-200 rounded-t-xl bg-secondary hover:bg-background">
      <div className="flex p-5 snap-center flex-col items-center justify-center md:h-[20vw] bg-gradient-to-br from-accent to-transparent rounded-t-xl shadow-md">
        <img
          src={props.image}
          alt={props.name}
          className="md:h-[80%] aspect-square rounded-full"
        />
        <h1 className="text-2xl font-bold">{props.name}</h1>
        <p className="text-xl">{props.about}</p>
      </div>
    </div>
  );
}
