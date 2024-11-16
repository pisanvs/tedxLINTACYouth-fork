import { NavLinks } from "@/data/Navbar";
import Link from "next/link";
import { useState } from "react";
import RedText from "../utility/RedText";
import { useDict } from "@/locales/dict";

export default function Links({ setClose }) {
  const { dictionary } = useDict();

  const [active, setActive] = useState("Home");
  const handleNav = (e) => {
    if (setClose) setClose(false);
    setActive(e.target.innerText);
  };
  return (
    <>
      {NavLinks.map((item, index) => (
        <li key={index} className="nav_items font-semibold" onClick={handleNav}>
          <Link
            href={`${item?.link}`}
            style={{
              color: `${
                item?.text === active ? "var(--clr-tedRed)" : "white"
              }`,
            }}
          >
            {(typeof dictionary?.navbar[item?.text] !== "undefined") ? dictionary.navbar[item?.text] : item?.text }
          </Link>
        </li>
      ))}
    </>
  );
}

export function HomeLink() {
  return (
    <li className="nav_items">
      <Link href="/">
      {/* I18N: goHome.go and goHome.home */}
        GO <RedText>HOME</RedText>
      </Link>
    </li>
  );
}
