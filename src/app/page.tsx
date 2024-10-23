import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import { Staking } from "../../components/Staking";


export default function Home() {

  return (

    <div>
<div style={{
      display: "fixed",
      alignItems: "center",
      marginTop: "0px",
      marginBottom: "0px",
      marginLeft:"0px",
      fill:"{true}",
      
      background: "black",
       }}><div>
<ConnectEmbed
client={client}
chain={chain}
/>
<Staking /></div></div>

    </div>
    )
}
