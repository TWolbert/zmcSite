import { Button } from "@/components/ui/button";

export default function ApplyForm(): JSX.Element {
  return (
    <>
      <p>
        We are always looking for new players to join our team. If you are
        interested in joining, please fill out the form below and we will get
        back to you as soon as possible.
      </p>
      <form className="flex flex-col gap-5">
        <input type="text" className="bg-background" placeholder="Name" />
        <input type="text" className="bg-background" placeholder="Email" />
        <input type="text" className="bg-background" placeholder="Country" />
        <input type="text" className="bg-background" placeholder="Age" />
        <input type="text" className="bg-background" placeholder="Rank" />
        <input
          type="text"
          className="bg-background"
          placeholder="Hours played"
        />
        <input
          type="text"
          className="bg-background"
          placeholder="Steam profile link"
        />
        <input
          type="text"
          className="bg-background"
          placeholder="Discord tag"
        />
        <input
          type="text"
          className="bg-background"
          placeholder="Why you want to join"
        />
        <input
          type="text"
          className="bg-background"
          placeholder="What you can bring to the team"
        />
        <input
          type="text"
          className="bg-background"
          placeholder="What you expect from us"
        />
        <input
          type="text"
          className="bg-background"
          placeholder="Anything else we should know"
        />
        <div className="w-full transition-all bg-transparent rounded-xl hover:bg-background">
          <Button
            className="w-full rounded-md bg-gradient-to-br from-accent to-transparent text-text"
            variant={"link"}
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}
