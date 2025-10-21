import { Header } from "@/app/sections/header";
import { Home } from "@/app/sections/home";
import { About } from "@/app/sections/about";
import { Services } from "@/app/sections/services";
import { Skills } from "@/app/sections/skills";
import { Experience } from "@/app/sections/experience";
import { Academics } from "@/app/sections/academics";
import { Contact } from "@/app/sections/contact";
// import { AnimatedImage } from "@/app/components/animatedImage";

export default function Page() {
  return (
    <div className="grid grid-rows-[auto_1fr_1fr] min-h-screen gap-4 font-[family-name:var(--font-geist-sans)] pl-20 pr-20">
      <Header />
      <main className="flex flex-col gap-16 row-start-2 items-center sm:items-start">
        {/*<AnimatedImage />*/}
        <Home />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Academics />
        <Contact />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
