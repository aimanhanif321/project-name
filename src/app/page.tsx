
import Grido from "@/components/Grido/page";
import Hero from "@/components/Hero/page"
import SecPart from "@/components/SecPart/page";

import Sofa from "@/app/Sofa/page";

import ContactPage from "../components/ContactPage/page";


export default function Home() {
  return (
   <div>
    
    <Hero/>
    <SecPart/>
    <Sofa/>
    <Grido/>
    <div className="mt-20"> <ContactPage /></div>
    
    

   </div>
  );
}
