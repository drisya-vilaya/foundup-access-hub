import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Database, Github, Globe, Zap, Users, Shield, BarChart } from "lucide-react";
import { Header } from "@/components/layout/Header";

const Build = () => {
  const phases = [
    {
      title: "Phase 1: Database Foundation Setup",
      duration: "1-2 weeks",
      icon: <Database className="w-6 h-6" />,
      color: "bg-blue-500",
      steps: [
        "Design unified schema for all 9 apps with core shared tables (users, companies, projects, teams)",
        "Create app-specific tables that reference shared entities", 
        "Implement Row Level Security policies for proper data isolation",
        "Set up real-time subscriptions for cross-app data sync"
      ]
    },
    {
      title: "Phase 2: Individual App Development",
      duration: "4-6 weeks",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-green-500",
      steps: [
        "Create each of the 9 FoundUp apps as separate Lovable projects",
        "Connect all apps to the same Supabase database instance",
        "Implement shared authentication system with JWT token passing",
        "Build cross-app data relationships and navigation"
      ]
    },
    {
      title: "Phase 3: Deployment & Integration", 
      duration: "1-2 weeks",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-purple-500",
      steps: [
        "Set up GitHub repositories for each app",
        "Deploy each app to Vercel with custom subdomains",
        "Configure environment variables for shared database access",
        "Test cross-app data flow and authentication"
      ]
    },
    {
      title: "Phase 4: Optimization & Shared Resources",
      duration: "1-2 weeks", 
      icon: <BarChart className="w-6 h-6" />,
      color: "bg-orange-500",
      steps: [
        "Create shared component library for consistent UI",
        "Implement real-time data synchronization",
        "Add cross-app notifications and deep-linking",
        "Set up monitoring and analytics across the ecosystem"
      ]
    }
  ];

  const apps = [
    "Market Research & Validation",
    "Business Planning & Strategy", 
    "Product Development & Management",
    "Team Building & HR",
    "Legal & Compliance",
    "Financial Management & Funding",
    "Marketing & Customer Acquisition",
    "Operations & Scaling",
    "Analytics & Performance"
  ];

  const technicalSteps = [
    {
      title: "Database Schema Design",
      icon: <Database className="w-5 h-5" />,
      items: [
        "Core entities: users, companies, projects, teams, documents",
        "App-specific tables linked to core entities",
        "Proper indexing for performance",
        "Data relationships and constraints"
      ]
    },
    {
      title: "Authentication & Security",
      icon: <Shield className="w-5 h-5" />,
      items: [
        "JWT token sharing across apps",
        "Row Level Security policies",
        "User role and permission system",
        "Secure cross-app data access"
      ]
    },
    {
      title: "Development Workflow",
      icon: <Github className="w-5 h-5" />,
      items: [
        "GitHub repository for each app",
        "Shared component library",
        "Consistent development patterns",
        "Cross-app testing strategy"
      ]
    },
    {
      title: "User Experience",
      icon: <Users className="w-5 h-5" />,
      items: [
        "Seamless navigation between apps",
        "Consistent UI/UX patterns",
        "Context-aware data sharing",
        "Real-time collaboration features"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">FoundUp Ecosystem Implementation Plan</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete roadmap for building a shared database architecture across all FoundUp apps, 
            enabling seamless data sharing and cross-app functionality.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Badge variant="secondary" className="text-sm">
              Total Timeline: 7-12 weeks
            </Badge>
            <Badge variant="secondary" className="text-sm">
              9 Connected Apps
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Shared Database
            </Badge>
          </div>
        </div>

        {/* Implementation Phases */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Implementation Phases</h2>
          <div className="grid gap-6">
            {phases.map((phase, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${phase.color}`} />
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className={`p-3 rounded-lg text-white ${phase.color}`}>
                    {phase.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{phase.title}</CardTitle>
                    <CardDescription className="text-lg">{phase.duration}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {phase.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* App Ecosystem */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">9 Connected Apps</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {apps.map((app, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold">{app}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Technical Implementation Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSteps.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {step.icon}
                    </div>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {step.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Resources & Next Steps */}
        <section>
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Resources & Requirements</CardTitle>
              <CardDescription>What you'll need to execute this plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Technical Resources</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Supabase Pro plan for production database</li>
                    <li>• Vercel Pro plan for multiple app deployments</li>
                    <li>• GitHub organization for repository management</li>
                    <li>• Custom domain setup for each app subdomain</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Development Tools</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Lovable for rapid app development</li>
                    <li>• Shared component library setup</li>
                    <li>• Database migration tools</li>
                    <li>• Cross-app testing framework</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Build;