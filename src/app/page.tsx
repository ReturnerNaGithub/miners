
import { Staking } from "../../components/Staking";
import Footer from "../../components/Footer";
import Head from "../../components/Head";
import Footer2 from "../../components/Footer2";



export default function Home() {

  return (

    <div>
<div style={{
      display: "fixed",
      padding: "10px 10px",
      justifyContent: "center",
      fill:"{true}",
      background: "black",
      alignItems: 'center',
      color:"white",
      
       }}><div>



<Head />
<Staking />
<Footer />
<Footer2 />

</div>
</div>

    </div>
    )
}
