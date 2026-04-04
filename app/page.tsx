
import Hero from "@/components/accueil/Hero1";
import Hero2 from "@/components/accueil/Hero2";
import Hero3 from "@/components/accueil/Hero3";
import Hero4 from "@/components/accueil/Hero4";
import Hero5 from "@/components/accueil/Hero5";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      
      <main className="flex flex-col">
       <Hero />
       <Hero2 />
       <Hero3 />
       <Hero4 />
       <Hero5 />
       
       
       
      
       
       

       
      </main>
    </div>
  );
}