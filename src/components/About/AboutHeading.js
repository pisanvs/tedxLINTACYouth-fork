const AboutHeading = (props) => {
  let width = 60;
  if (props?.id === "1") width += 10;
  if (props?.id === "2") width += 20;
  if (props?.id === "3") width += 212;
  return (
    <h1
      className="bg-red relative text-[28px] font-medium w-fit pr-2"
    >
      {props.children}
    </h1>
  );
};

export default AboutHeading;
