
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col gap-4 p-6">
          {[
            { to: "/projects", label: "Projects" },
            { to: "/skills", label: "Skills" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" }
          ].map(({ to, label }) => (
            <Link 
              key={to} 
              to={to} 
              className="text-accent px-4 py-2 rounded-md hover:bg-accent/10 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
