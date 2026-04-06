import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-24 border-b bg-background">
      <div className="mx-auto flex h-full max-w-(--breakpoint-xl) items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="transition-opacity hover:opacity-80">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          {/* Ajout du lien vers la page devis */}
          <Link href="/devis">
            <Button className="hidden sm:inline-flex" variant="outline">
              Demande devis
            </Button>
          </Link>
          
          {/* Petit conseil : utilisez "asChild" si vous voulez que le Link 
              soit le seul élément cliquable sans doubler les balises <a> */}
          <Button  className="hidden md:block bg-teal-600 hover:bg-teal-700 text-white border-none">
            <a href="tel:0616224682">06 16 22 46 82</a>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
