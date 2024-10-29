import Container from "../utility/Container";
import Heading from "../utility/Heading";
import { team } from "@/data/TeamData";
import Group from "./Group";

export default function Team() {
  return (
    <Container>
      <section className="mx-[4%]">
        <Heading>our team</Heading>
        <div className="px-4">
          <div className="my-16 space-y-16">
            <Group teamMember={team} />
          </div>
        </div>
      </section>
    </Container>
  );
}
