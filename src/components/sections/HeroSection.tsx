
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-6 bg-muted text-muted-foreground">
          Professional Founder Tools
        </Badge>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          FoundUp
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          The complete suite of professional-grade applications for founders. 
          Nine specialized tools covering every aspect of building and scaling your startup.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            onClick={onGetStarted}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
          >
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-border/50 hover:bg-muted/50"
          >
            View Features
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto text-sm text-muted-foreground">
          <div className="p-3 bg-muted/20 rounded border border-border/30">
            Self-Development
          </div>
          <div className="p-3 bg-muted/20 rounded border border-border/30">
            Product Development
          </div>
          <div className="p-3 bg-muted/20 rounded border border-border/30">
            Market Research
          </div>
          <div className="p-3 bg-muted/20 rounded border border-border/30">
            Business Model
          </div>
          <div className="p-3 bg-muted/20 rounded border border-border/30">
            Team Building
          </div>
        </div>
      </div>
    </section>
  );
};
