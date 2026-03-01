import { Header } from "@/app/sections/header";
import { Home } from "@/app/sections/home";
import { About } from "@/app/sections/about";
import { Services } from "@/app/sections/services";
import { Skills } from "@/app/sections/skills";
import { Experience } from "@/app/sections/experience";
import { Academics } from "@/app/sections/academics";
import { Contact } from "@/app/sections/contact";

export default function Page() {
  return (
    <div className="min-h-screen" style={{ background: "#0f172a" }}>
      <Header />
      <main className="flex flex-col">
        <Home />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Academics />
        <Contact />
      </main>
    </div>
  );
}
