import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-primary-white font-bold text-2xl w-full flex items-center shadow-sm ">
      <div className="flex-none w-16 md:w-auto p-3">
        <img src="../saboartetransp.png" width={80} height={80}></img>
      </div>
      <div className="grow md:text-center md:absolute text-end pr-5 md:pr-0 w-full text-slate-600 ">
        <h1>SABOARTE</h1>
      </div>
    </header>
  );
}
