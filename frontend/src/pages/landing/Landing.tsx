import { Divider } from "@mui/material";
import Hero from "./Hero";
import Highlights from "./Highlights";
import FAQ from "./FAQ";
import Footer from "./Footer";

export default function Landing() {
  return (
    <>
      <Hero />
      <Divider />
      <Highlights />
      <Divider />
      <FAQ />
      <Divider />
      <Footer />
    </>
  );
}
