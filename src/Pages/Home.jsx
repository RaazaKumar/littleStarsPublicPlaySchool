import Navbar from "../Components/Navbar"
import HeroSlider from '../Components/HeroSlider'
import Welcome from '../Components/Welcome'
import About from "../Components/About"
import WhyChooseUs from '../Components/WhyChooseUs'
import Footer_last_box from '../Components/Footer_last_box'
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Welcome/>
      <About/>
      <WhyChooseUs/>
    <Footer_last_box/>
    </>
  );
}
