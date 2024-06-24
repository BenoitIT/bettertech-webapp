export const metadata = {
  title: "Better Technology Ltd",
  description: "Homepage",
};

import Hero from "@/components/hero";
import Features from "@/components/solutions";
import FeaturesBlocks from "@/components/services";
import AboutUs from "@/components/aboutus";
import ContactUs from "@/components/contacts";
import Header from "@/components/ui/header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <FeaturesBlocks />
      <AboutUs/>
      <ContactUs />
    </>
  );
}
