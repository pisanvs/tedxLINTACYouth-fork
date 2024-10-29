import Image from "next/image";

const Logos = () => {
  return (
    <div className="mt-[6px] flex flex-col items-center text-center md:flex-1 md:items-start md:text-left">
      <Image
        className="-ml-3.5"
        src="/logos/logo.png"
        height={40}
        width={275}
        loading="lazy"
        alt="TEDxLINTAC Youth logo"
      />
      <p className="footer_text mt-2">
        This independent TEDx event
        <br /> is operated under license
        <br /> from TED.
      </p>
    </div>
  );
};

export default Logos;
