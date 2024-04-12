import React, { useEffect, useState } from "react";
import Hero from "../components/hero/Hero";
import {
  FeaturedProducts,
  Services,
  Contact,
  CategoryGrid,
  OccassionGrid,
  TrandingProducts,
  HeroCategories,
  Testimonials,
  BridalProducts,
  NavbarHome,
} from "../components";
import { Helmet } from "react-helmet";
import Modal from "react-modal";

const HomePage = () => {
  const [getdrop, setdrop] = useState(0);

  window.scrollTo(0, 0);
  return (
    <main>
      <Helmet>
        <title>The Alchemy Drip</title>
        <meta name="description" content="The Alchemy Drip" />
      </Helmet>
      <NavbarHome getdrop={getdrop} />
      <Hero />

      <CategoryGrid getdrop={getdrop} setdrop={setdrop} />
      {/* <TrandingProducts /> */}
      {/* <FeaturedProducts /> */}
      {/* <HeroCategories /> */}
      {/* <OccassionGrid /> */}
      {/* <BridalProducts /> */}
      {/* <Testimonials /> */}
      {/* <Services />
      <Contact /> */}
    </main>
  );
};

export default HomePage;
