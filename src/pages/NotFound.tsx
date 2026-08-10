import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    setAnimate(true);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-accent to-background">
      {/* Animated background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" 
             style={{ animation: "float 8s ease-in-out infinite" }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" 
             style={{ animation: "float 10s ease-in-out infinite 1s" }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse" 
             style={{ animation: "float 12s ease-in-out infinite 2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8">
        
        {/* Main 404 Display */}
        <div className={`text-center mb-8 transition-all duration-1000 ${animate ? "opacity-100" : "opacity-0"}`}>
          
          {/* 404 Number - Large animated text */}
          <div className="mb-6">
            <h1 
              className="text-9xl sm:text-[180px] md:text-[220px] font-display font-bold tracking-widest text-primary/20 select-none leading-none"
              style={{
                animation: animate ? "slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
                textShadow: "0 20px 50px -12px hsl(25 30% 15% / 0.15)"
              }}
            >
              404
            </h1>
          </div>

          {/* Main heading */}
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-3 cinematic-fade-up"
            style={{ animation: animate ? "cinematicFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both" : "none" }}
          >
            Page Not Found
          </h2>

          {/* Subtitle */}
          <p 
            className="text-base sm:text-lg text-muted-foreground mb-8 max-w-md mx-auto font-light leading-relaxed"
            style={{ animation: animate ? "cinematicFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both" : "none" }}
          >
            The page you're looking for has vanished into thin air. Let's get you back on track.
          </p>

          {/* Path indicator */}
          <div 
            className="mb-8 p-3 bg-card/40 border border-border rounded-lg inline-block backdrop-blur-sm"
            style={{ animation: animate ? "cinematicFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both" : "none" }}
          >
            <code className="text-sm text-muted-foreground font-mono break-all max-w-xs">
              {location.pathname}
            </code>
          </div>
        </div>

        {/* Action Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          style={{ animation: animate ? "cinematicFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both" : "none" }}
        >
          <Link to="/" className="w-full sm:w-auto">
            <Button 
              className="w-full sm:w-auto group bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 rounded-lg text-base font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Home className="w-4 h-4 mr-2 group-hover:-translate-y-0.5 transition-transform" />
              Return Home
            </Button>
          </Link>

          <Link to="/category/all" className="w-full sm:w-auto">
            <Button 
              variant="outline"
              className="w-full sm:w-auto group border-border hover:bg-accent h-12 px-8 rounded-lg text-base font-medium transition-all duration-300"
            >
              <Search className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Browse Products
            </Button>
          </Link>
        </div>

        {/* Helpful links */}
        <div 
          className="mt-16 text-center"
          style={{ animation: animate ? "cinematicFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both" : "none" }}
        >
          <p className="text-sm text-muted-foreground mb-4">Need help? Try these:</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link 
              to="/category/necklaces"
              className="text-primary hover:text-primary/80 transition-colors underline hover:no-underline"
            >
              Shop Necklaces
            </Link>
            <span className="text-border">•</span>
            <Link 
              to="/about/customer-care"
              className="text-primary hover:text-primary/80 transition-colors underline hover:no-underline"
            >
              Contact Support
            </Link>
            <span className="text-border">•</span>
            <Link 
              to="/about/our-story"
              className="text-primary hover:text-primary/80 transition-colors underline hover:no-underline"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-80px) scale(0.8);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }

        @keyframes cinematicFadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(25, 118, 210, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(25, 118, 210, 0.5);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
