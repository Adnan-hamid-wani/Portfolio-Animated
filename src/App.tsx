import { Section } from "./components/Section";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Navbar } from "./components/Navbar/Navbar";
import { CustomCursor } from "./components/Cursor/CustomCursor";
import { Education } from "./components/Education/Education";
import LottieAnimation from './components/Spaceship';
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <CustomCursor />
      <Navbar />

      <div className="fixed inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover brightness-[70%]"
        >
          <source src="https://cdn.pixabay.com/video/2022/11/18/139586-773417795_large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative">
        <Section
          id="home"
          className="h-screen relative flex items-center justify-center"
        >
          <div className="flex items-center justify-between w-full max-w-7xl px-8 relative ">
            <Hero />
            <LottieAnimation />
          </div>
        </Section>

        <Section id="about">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20 ">
            <div className="text-white max-w-2xl mx-auto px-4">
              <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
              <p className="text-lg leading-relaxed">
                I'm a passionate developer with expertise in creating immersive
                web experiences. With a strong foundation in modern web
                technologies and a keen eye for design, I bring creative ideas
                to life through code.
              </p>
            </div>
          </div>
        </Section>

        <Section id="education">
          <Education />
        </Section>

        <Section id="projects">
          <div className="w-full">
            <h2 className="text-4xl font-bold mb-12 text-white text-center z-20">
              Projects
            </h2>
            <Projects />
          </div>
        </Section>

        <Section id="contact">
          <Contact />
        </Section>
      </div>
    </div>
  );
}

export default App;
