import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="h-screen w-full relative flex flex-col  justify-center p-[64px]">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-denton tracking-[-0.6rem] text-black text-[10rem] text-center">
            Hello, Menu.
          </h1>
          <div className="flex justify-between font-normal tracking-tight text-black">
            <p className="w-[35ch]">
              A part of my day 8 UI challenge but also a contribution to Oliver
              Larose’s creative menu challenge. #creativemenu #menu
            </p>
            <span className="flex gap-x-1">
              designed & developed by
              <a href="">HuyNG</a>
            </span>
          </div>
        </div>

        <div className="  w-[30rem] h-[30rem] bg-accent rounded-full shadow-[inset_7px_4px_12px_6px_rgba(0,0,0,0.25)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"></div>
      </main>
    </>
  );
}
