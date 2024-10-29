import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sponsor from "@/components/Sponsors/Sponsors";
import Team from "@/components/Team/Team";

export default function Page() {
  return (
    <main>
      <Navbar home={false} />
      {/*<Sponsor />*/}
      <Team />
      <Footer />
    </main>
  );
}
