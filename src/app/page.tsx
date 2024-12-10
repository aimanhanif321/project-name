
import Grido from "@/components/Grido/page";
import Hero from "@/components/Hero/page"
import SecPart from "@/components/SecPart/page";

import Sofa from "@/app/Sofa/page";

import ContactPage from "./ContactPage/page";
import CheckoutPage from "@/app/CheckoutPage/page";
import Cart from "@/app/Cart/page";
import ItemPage from "@/app/ItemPage/page";
import ProPage from "@/app/ProPage/page";

import Blog from "@/app/Blog/page";



export default function Home() {
  return (
   <div>
    
     <Hero/>
    <SecPart/>
    <Sofa/>
    <Grido/>
   
    
     </div>
  );
}
