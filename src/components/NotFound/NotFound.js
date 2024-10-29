import Image from "next/image";
import logo from "../../../public/logos/logo.png";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full select-none bg-black ">
      <div className="shade h-screen bg-swirls bg-cover lg:w-2/5"></div>
      <section className=" absolute top-0 flex h-screen w-full flex-col justify-between px-6 pt-8 md:pt-12 lg:pl-[45%] ">
        <Image
          className="mx-auto w-[200px] md:mx-0 lg:mx-0 "
          src={logo}
          alt="tedx rit logo"
        />
        <div className="flex  max-w-xs flex-col gap-6 pb-28  text-white md:max-w-md  md:pb-[30%] lg:pb-[40%]">
          <p className="text-[70px]/[90%] font-extralight md:text-[85px]/[95%] lg:font-thin">
            PAGE NOT <span className="text-red">FOUND</span>
          </p>
          <button className="flex max-w-[30%] items-center justify-center rounded-md bg-red  p-[0.2rem] lg:max-w-[23%]">
            <Link href="/">go back</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
