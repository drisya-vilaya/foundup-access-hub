
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AuthDialog } from "@/components/auth/AuthDialog";
import { Header } from "@/components/layout/Header";
import { AppGrid } from "@/components/dashboard/AppGrid";
import { PricingSection } from "@/components/pricing/PricingSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { useAuth } from "@/hooks/useAuth";
import { Shield, Zap, Users } from "lucide-react";

const Index = () => {
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const { user, isSubscribed, loading } = useAuth();

  const handleGetStarted = () => {
    setAuthMode("register");
    setShowAuthDialog(true);
  };

  const handleSignIn = () => {
    setAuthMode("login");
    setShowAuthDialog(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onSignIn={handleSignIn} />
      
      {user && isSubscribed ? (
        <AppGrid />
      ) : user && !isSubscribed ? (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to FoundUp</h1>
            <p className="text-muted-foreground mb-8">
              Choose your subscription plan to access all founder development tools
            </p>
          </div>
          <PricingSection />
        </div>
      ) : (
        <>
          <HeroSection onGetStarted={handleGetStarted} />
          
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Choose FoundUp?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive suite of tools designed specifically for founders
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <Card className="border-border/50 bg-card/50">
                  <CardHeader className="text-center">
                    <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle>Secure & Private</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Your data is protected with enterprise-grade security. Each user has isolated access to their information.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50 bg-card/50">
                  <CardHeader className="text-center">
                    <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle>All-in-One Platform</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Nine specialized apps covering every aspect of your founder journey, from self-development to fundraising.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50 bg-card/50">
                  <CardHeader className="text-center">
                    <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle>Founder-Focused</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Built by founders, for founders. Every tool is designed to address real challenges in building a startup.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <PricingSection />
        </>
      )}

      <AuthDialog
        open={showAuthDialog}
        onOpenChange={setShowAuthDialog}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
};

export default Index;
