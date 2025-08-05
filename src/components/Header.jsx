import { Button } from "@/components/ui/button";
import { Calendar, Users, Zap, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to handle burger menu click
  const handleBurgerClick = () => {
    setMobileMenuOpen((prev) => !prev);
    const body = document.body;
    if (!isMobileMenuOpen) {
      body.style.width = "100%"; // Maintain full width when menu is open
      body.style.overflow = "auto"; // Enable scrolling when menu is open
      body.style.top = `-${window.scrollY}px`; // Store the current scroll position
    }
    else {
      body.style.overflow = "auto"; 
      const scrollY = body.style.top;
      body.style.position = ""; // Reset position
      body.style.width = ""; // Reset width
      body.style.top = ""; // Reset top
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1); // Restore the previous scroll position
    }
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      if (isMobileMenuOpen) {
        setMobileMenuOpen(false);
        const body = document.body;
        body.style.overflow = "auto"; // Enable scrolling when menu is closed
        body.style.position = ""; // Reset position
        body.style.width = ""; // Reset width
        body.style.top = ""; // Reset top
      }
    };
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-background shadow-md transition-colors duration-300 ease-in-out">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary rounded-lg p-2">
            <Calendar className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">EventHost</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 ">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors">
            Events
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/signin">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Burger menu button for mobile */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary absolute top-4 right-4 z-50"
          onClick={handleBurgerClick}
          aria-label="Toggle Menu"
        >
          <Menu className="h-6 w-6 text-muted-foreground " />
        </button>
      </div>

      {/* Mobile menu only visible on mobile and when open */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-16 right-0 left-0 bg-background shadow-lg rounded-lg p-4 w-full z-50`}
      >
        <nav className="flex flex-col gap-2">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors">
            Events
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
          <Link to="/signin">
            <Button variant="ghost" size="sm" className="w-full text-left">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="hero" size="sm" className="w-full">
              Get Started
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;