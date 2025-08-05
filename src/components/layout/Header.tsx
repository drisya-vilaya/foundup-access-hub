
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { LogOut, User } from "lucide-react";

interface HeaderProps {
  onSignIn?: () => void;
}

export const Header = ({ onSignIn }: HeaderProps) => {
  const { user, signOut } = useAuth();

  return (
    <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl">FoundUp</div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="/build" className="text-muted-foreground hover:text-foreground transition-colors">
            Build
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm">
                <User className="w-4 h-4" />
                <span className="text-muted-foreground">{user.email}</span>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={signOut}
                className="border-border/50"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          ) : (
            <Button 
              variant="outline" 
              onClick={onSignIn}
              className="border-border/50"
            >
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
