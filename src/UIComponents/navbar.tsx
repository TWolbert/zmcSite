import { ImageLogo } from "@/_components/Logo";
import { Youtube } from "lucide-react";

export default function Navbar(props: any) {
  const location: string = props.location.pathname;

  function isCurrentPage(page: string): string {
    if (page == location) {
      return "border-b-2 border-accent";
    } else {
      return "border-b-2 border-transparent";
    }
  }
  return (
    <div className=" w-full px-5 md:px-[12vw] py-5 bg-gradient-to-t flex justify-between items-center bg-background">
      <a href="/">
        <ImageLogo className="h-20" />
      </a>

      <div className="flex justify-end gap-4 md:gap-6 ">
        <a
          href="/"
          className={
            isCurrentPage("/") +
            " md:text-2xl font-bold transition-all border-b-2 text-text font-body hover:border-accent"
          }
        >
          Home
        </a>
        <a
          href="/about"
          className={
            isCurrentPage("/about") +
            " md:text-2xl font-bold transition-all border-b-2 text-text font-body hover:border-accent"
          }
        >
          About
        </a>
        <a
          href="/contact"
          className={
            isCurrentPage("/contact") +
            " md:text-2xl font-bold transition-all border-b-2 text-text font-body hover:border-accent"
          }
        >
          Contact
        </a>
        <a href="https://youtube.com/@zmc-cs2" target="_blank">
          <div className="flex items-center justify-center">
            <Youtube className="w-10 h-10 text-text" />
          </div>
        </a>
      </div>
    </div>
  );
}
