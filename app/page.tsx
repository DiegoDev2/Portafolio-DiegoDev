
import AnimatedBackground from "@/components/BackgroundAnimated";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Skills from "@/components/Skills";
import Work from "@/components/Work"
export default function Home() {
  return (

    <AnimatedBackground>
      <Header />
      <Landing />
      <Skills />
      <Work />
    </AnimatedBackground>
  ); 
}
