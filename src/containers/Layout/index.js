import Certifications from "../../components/Certifications";
import Footer from "../Footer";
import Hero from "../Hero";

export default function Layout({ children }) {
  return (
    <>
      <Hero />
      {children}
      <Certifications />
      <Footer />
    </>
  )
}