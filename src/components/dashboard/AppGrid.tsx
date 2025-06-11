
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, User, Lightbulb, TrendingUp, Building, Users, Palette, DollarSign, FileCheck } from "lucide-react";

const apps = [
  {
    id: 1,
    name: "Founder Self-Development",
    description: "Personal growth tools and frameworks for founder development",
    icon: User,
    url: "https://founder-self-dev.vercel.app",
    category: "Personal"
  },
  {
    id: 2,
    name: "Product Development",
    description: "Build and iterate on your product with structured methodologies",
    icon: Lightbulb,
    url: "https://product-dev.vercel.app",
    category: "Product"
  },
  {
    id: 3,
    name: "Market Research",
    description: "Comprehensive market analysis and competitive intelligence",
    icon: TrendingUp,
    url: "https://market-research.vercel.app",
    category: "Research"
  },
  {
    id: 4,
    name: "Business Model & GTM",
    description: "Design your business model and go-to-market strategy",
    icon: Building,
    url: "https://business-model.vercel.app",
    category: "Strategy"
  },
  {
    id: 5,
    name: "Co-Founders & Team",
    description: "Find co-founders and build your dream team",
    icon: Users,
    url: "https://team-building.vercel.app",
    category: "Team"
  },
  {
    id: 6,
    name: "Branding & Marketing",
    description: "Create compelling brand identity and marketing campaigns",
    icon: Palette,
    url: "https://branding-marketing.vercel.app",
    category: "Marketing"
  },
  {
    id: 7,
    name: "Fundraising & Investor Relations",
    description: "Raise capital and manage investor relationships",
    icon: DollarSign,
    url: "https://fundraising.vercel.app",
    category: "Finance"
  },
  {
    id: 8,
    name: "Advanced Marketing",
    description: "Advanced marketing strategies and growth hacking",
    icon: TrendingUp,
    url: "https://advanced-marketing.vercel.app",
    category: "Marketing"
  },
  {
    id: 9,
    name: "Due Diligence",
    description: "Comprehensive due diligence tools and checklists",
    icon: FileCheck,
    url: "https://due-diligence.vercel.app",
    category: "Legal"
  }
];

export const AppGrid = () => {
  const handleLaunchApp = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Apps</h1>
        <p className="text-muted-foreground">
          Access your complete suite of founder development tools
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => {
          const Icon = app.icon;
          return (
            <Card key={app.id} className="border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-200 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-muted/50 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{app.name}</CardTitle>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {app.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="mb-4 text-sm leading-relaxed">
                  {app.description}
                </CardDescription>
                
                <Button 
                  onClick={() => handleLaunchApp(app.url)}
                  className="w-full bg-muted hover:bg-muted/80 text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                >
                  Launch App
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
