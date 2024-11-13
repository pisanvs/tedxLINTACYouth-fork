import SmallHeading from "./SmallHeading";

const Address = () => {
  return (
    <div className="flex flex-col items-center gap-2 text-center md:flex-1">
      <div className="flex flex-col gap-1">
        <SmallHeading>FIND US</SmallHeading>
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=Lincoln+International+Academy&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          className="w-[250px] md:w-[300px]"
          width="300"
          height="100"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0, borderRadius: "5px" }}
          allowFullScreen
        ></iframe>
        <p className="footer_text py-1">
          Lincoln International Academy,
          <br />
          Lo Barnechea,
          <br />
          Santiago, Chile
        </p>
      </div>
    </div>
  );
};

export default Address;
