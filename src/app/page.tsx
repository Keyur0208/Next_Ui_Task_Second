import { Card_section } from "./componets/card-section";
import { Hero_Section } from "./componets/hero-section";
import { Log_six } from "./componets/longest-six";
import { Most_Run } from "./componets/most-run";
import { Most_Wicket } from "./componets/most-wicket";
import Navbar_com from "./componets/navabra";
// import { Point_Table } from "./componets/point_table";

export default function Home() {
  return (
    <main>
      <Navbar_com />
      <Hero_Section />
      <Card_section />
      <Most_Run />
      <Most_Wicket/>
      <Log_six/>
      {/* <Point_Table/> */}
    </main>
  );
}
