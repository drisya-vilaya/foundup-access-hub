
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export const PricingSection = () => {
  const { createCheckoutSession } = useAuth();

  const handleSubscribe = async () => {
    try {
      await createCheckoutSession();
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get access to all nine founder development applications with a single subscription
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="border-primary/20 bg-gradient-to-b from-card to-muted/20 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground">
                <Zap className="w-3 h-3 mr-1" />
                Most Popular
              </Badge>
            </div>
            
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl">FoundUp Pro</CardTitle>
              <CardDescription>Complete access to all founder tools</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$97</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  "Access to all 9 applications",
                  "Unlimited usage across all tools",
                  "Priority customer support",
                  "Regular feature updates",
                  "Secure data isolation",
                  "Export capabilities",
                  "Mobile-responsive design",
                  "Cancel anytime"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full mt-6 bg-primary hover:bg-primary/90"
                size="lg"
                onClick={handleSubscribe}
              >
                Start Free Trial
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                7-day free trial • No setup fees • Cancel anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
