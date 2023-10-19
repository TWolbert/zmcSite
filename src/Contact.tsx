import { Button } from "./components/ui/button";
import { Alert } from "./components/ui/alert";
import { useState } from "react";
import Rodal from "rodal";
import ApplyForm from "./UIComponents/ApplyForm";

export default function Contact() {
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
  function redirectTo(url: string) {
    document.location.href = url;
  }
  const mailtolink = "mailto:zmc.cs2.business@gmail.com";
  return (
    <div className="px-[20vw]">
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
      <h1 className="text-3xl text-text text-bold text-body">Contact Us:</h1>
      <p>
        Feel free to contact us about anything, send a message to our Steam
        group
      </p>
      <Button
        variant="link"
        onClick={() => redirectTo("https://steamcommunity.com/groups/ZMCCS2")}
      >
        Steam Group
      </Button>
      <Button variant="link">
        <a href={mailtolink}>Email</a>
      </Button>
      <p>Or come visit us</p>
        {/* Adress of the white house */}
        <Button
            variant="link"
            onClick={() => redirectTo("https://maps.app.goo.gl/XSwF14fWN2kXjNQM8")}
        >
            1600 Pennsylvania Ave NW, Washington, DC 20500
        </Button><br></br>
        <div className="transition-all bg-transparent rounded-md hover:bg-secondary w-fit">
            <button onClick={() => show(<>Apply to the team</>, <ApplyForm />)} className="px-5 py-2 rounded-md w-fit bg-gradient-to-br from-accent to-transparent text-text">Or you can reach out by applying to join us</button>
          </div>
      <Alert className="mt-2">Keep in mind we cannot guarantee we will respond to your inquiry!</Alert>
    </div>
  );
}
