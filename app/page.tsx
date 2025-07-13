import { Header } from "@/app/components/header";
import { Home } from "@/app/components/home";
import { About } from "@/app/components/about";
import { Services } from "@/app/components/services";
import { Skills } from "@/app/components/skills";

export default function Page() {
  return (
    <div className="grid grid-rows-[auto_1fr_1fr] min-h-screen gap-4 font-[family-name:var(--font-geist-sans)] pl-20 pr-20">
      <Header />
      <main className="flex flex-col gap-16 row-start-2 items-center sm:items-start">
        <Home />
        <About />
        <Skills />
        <Services />
        {/* <Experience /> */}
        {/* <Education /> */}
        {/* <Contact /> */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
