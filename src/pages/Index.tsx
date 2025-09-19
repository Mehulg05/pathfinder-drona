import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import CareerQuiz from "@/components/assessment/CareerQuiz";
import { useState } from "react";

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'assessment'>('home');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {currentView === 'home' && (
        <main>
          <HeroSection />
          
          {/* Quick Access Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
                Start Your Journey Today
              </h2>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => setCurrentView('assessment')}
                  className="bg-gradient-hero text-white px-8 py-4 rounded-xl shadow-medium hover:shadow-glow transform hover:scale-105 transition-bounce font-semibold"
                >
                  Take Career Assessment
                </button>
              </div>
            </div>
          </section>
        </main>
      )}
      
      {currentView === 'assessment' && (
        <main className="py-20">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <button 
                onClick={() => setCurrentView('home')}
                className="text-primary hover:text-primary-glow transition-smooth mb-4"
              >
                ← Back to Home
              </button>
            </div>
            <CareerQuiz />
          </div>
        </main>
      )}
    </div>
  );
};

export default Index;
