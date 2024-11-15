"use client";

import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import Speakers from "@/components/Speakers";
import Highlights from "@/components/Highlights";
import MeetUs from "@/components/MeetUs";
import Footer from "@/components/Footer";
import AboutTheme from "@/components/AboutTheme";
import AboutUs from "@/components/AboutUs";
import Tickets from "@/components/Tickets";
import Performer from "@/components/Performer";
import ParallaxStars from "@/components/ParallaxStars";
import { DictProvider } from "@/locales/dict";

export default function Home() {
  return (
    <main>
      <ParallaxStars>
        <DictProvider>
          <Navbar />
          <LandingPage />
          <br />
          <br />
          <br />
          <AboutTheme />
          <br />
          <Speakers />
          <br />
          {/*<Performer />*/}
          {/*<Tickets />*/}
          <AboutUs />
          {/*<Highlights />*/}
          <br />
          <MeetUs />
          <br />
          <br />
          <Footer />
        </DictProvider>
     </ParallaxStars>
   </main>
  );
}
