import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-soft">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* D.R.O.N.A Logo with Hover Effect */}
        <div className="flex items-center space-x-3 group">
          <div className="p-2 bg-gradient-primary rounded-xl shadow-medium group-hover:shadow-glow transition-smooth">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div className="relative">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer">
              D.R.O.N.A
            </h1>
            {/* Tooltip on Hover */}
            <div className="absolute top-full left-0 mt-2 px-4 py-2 bg-primary text-primary-foreground text-sm rounded-lg shadow-medium opacity-0 group-hover:opacity-100 transition-smooth transform translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap z-10">
              <div className="absolute -top-1 left-4 w-2 h-2 bg-primary rotate-45"></div>
              Digital Resource for Optimized Navigation in Academics
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-muted-foreground hover:text-primary transition-smooth">Home</a>
          <a href="#assessment" className="text-muted-foreground hover:text-primary transition-smooth">Assessment</a>
          <a href="#colleges" className="text-muted-foreground hover:text-primary transition-smooth">Colleges</a>
          <a href="#careers" className="text-muted-foreground hover:text-primary transition-smooth">Careers</a>
          <a href="#resources" className="text-muted-foreground hover:text-primary transition-smooth">Resources</a>
        </nav>

        {/* Dashboard Menu */}
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <div className="flex flex-col space-y-1">
                  <div className="w-4 h-0.5 bg-current"></div>
                  <div className="w-4 h-0.5 bg-current"></div>
                  <div className="w-4 h-0.5 bg-current"></div>
                </div>
                <span className="sr-only">Dashboard Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-background border shadow-strong">
              <DropdownMenuItem className="cursor-pointer hover:bg-primary-soft transition-smooth">
                <GraduationCap className="mr-2 h-4 w-4" />
                Career Assessment Quiz
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary-soft transition-smooth">
                Course Path Mapping
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary-soft transition-smooth">
                College Directory
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary-soft transition-smooth">
                Timeline Tracker
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary-soft transition-smooth">
                Study Resources
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary-soft transition-smooth">
                Scholarship Portal
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container py-4 space-y-2">
            <a href="#home" className="block py-2 text-muted-foreground hover:text-primary transition-smooth">Home</a>
            <a href="#assessment" className="block py-2 text-muted-foreground hover:text-primary transition-smooth">Assessment</a>
            <a href="#colleges" className="block py-2 text-muted-foreground hover:text-primary transition-smooth">Colleges</a>
            <a href="#careers" className="block py-2 text-muted-foreground hover:text-primary transition-smooth">Careers</a>
            <a href="#resources" className="block py-2 text-muted-foreground hover:text-primary transition-smooth">Resources</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;