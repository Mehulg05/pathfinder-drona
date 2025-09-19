import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Target, 
  Users, 
  BookOpen, 
  ArrowRight, 
  Star,
  TrendingUp,
  Award 
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary-soft/20 to-accent-soft/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-tertiary/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Government Badge */}
            <div className="inline-flex items-center space-x-2 bg-tertiary-soft border border-tertiary/20 rounded-full px-4 py-2 shadow-soft">
              <Award className="h-4 w-4 text-tertiary" />
              <span className="text-sm font-medium text-tertiary-foreground">
                Government of J&K Initiative
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Shape Your
                </span>
                <br />
                <span className="text-foreground">
                  Academic Future
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Navigate your educational journey with AI-powered career guidance, 
                personalized course recommendations, and comprehensive college information 
                - all designed for students in Jammu & Kashmir.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Career Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Explore Colleges
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Government Colleges</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Career Paths</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-tertiary">10K+</div>
                <div className="text-sm text-muted-foreground">Students Guided</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid gap-6">
            <Card className="bg-gradient-card shadow-medium hover:shadow-strong transition-smooth transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-xl shadow-soft">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Aptitude Assessment</h3>
                    <p className="text-muted-foreground">
                      AI-powered quiz to identify your strengths and career preferences
                    </p>
                    <div className="flex items-center mt-3 text-sm text-primary">
                      <Star className="h-4 w-4 mr-1" />
                      <span>92% accuracy rate</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-medium hover:shadow-strong transition-smooth transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent rounded-xl shadow-soft">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Course Mapping</h3>
                    <p className="text-muted-foreground">
                      Visual career paths showing course-to-job connections
                    </p>
                    <div className="flex items-center mt-3 text-sm text-accent">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>Updated monthly</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-medium hover:shadow-strong transition-smooth transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-tertiary rounded-xl shadow-soft">
                    <Users className="h-6 w-6 text-tertiary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">College Directory</h3>
                    <p className="text-muted-foreground">
                      Complete database of J&K government colleges with real-time data
                    </p>
                    <div className="flex items-center mt-3 text-sm text-tertiary">
                      <GraduationCap className="h-4 w-4 mr-1" />
                      <span>500+ institutions</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;