import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, ArrowLeft, BookOpen, Briefcase, Users, Lightbulb } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: Array<{
    text: string;
    category: 'science' | 'arts' | 'commerce' | 'technical';
    points: number;
  }>;
}

interface QuizResult {
  category: string;
  percentage: number;
  careers: string[];
  courses: string[];
  icon: React.ElementType;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What type of activities do you enjoy most in your free time?",
    options: [
      { text: "Reading scientific articles and conducting experiments", category: 'science', points: 3 },
      { text: "Writing stories, poems, or creating art", category: 'arts', points: 3 },
      { text: "Managing money, planning budgets, or learning about business", category: 'commerce', points: 3 },
      { text: "Building things, coding, or fixing technical problems", category: 'technical', points: 3 },
    ]
  },
  {
    id: 2,
    question: "Which school subjects do you find most interesting?",
    options: [
      { text: "Physics, Chemistry, Biology, Mathematics", category: 'science', points: 3 },
      { text: "Literature, History, Philosophy, Psychology", category: 'arts', points: 3 },
      { text: "Economics, Accountancy, Business Studies", category: 'commerce', points: 3 },
      { text: "Computer Science, Mathematics, Applied Sciences", category: 'technical', points: 3 },
    ]
  },
  {
    id: 3,
    question: "What kind of problem-solving approach do you prefer?",
    options: [
      { text: "Using scientific methods and logical analysis", category: 'science', points: 3 },
      { text: "Creative thinking and exploring multiple perspectives", category: 'arts', points: 3 },
      { text: "Strategic planning and cost-benefit analysis", category: 'commerce', points: 3 },
      { text: "Systematic debugging and technical solutions", category: 'technical', points: 3 },
    ]
  },
  {
    id: 4,
    question: "In a group project, what role do you naturally take?",
    options: [
      { text: "The researcher who gathers and analyzes data", category: 'science', points: 2 },
      { text: "The creative director who comes up with innovative ideas", category: 'arts', points: 2 },
      { text: "The project manager who handles planning and resources", category: 'commerce', points: 2 },
      { text: "The technical lead who implements solutions", category: 'technical', points: 2 },
    ]
  },
  {
    id: 5,
    question: "What type of career environment appeals to you most?",
    options: [
      { text: "Laboratories, research facilities, or hospitals", category: 'science', points: 3 },
      { text: "Studios, museums, media houses, or cultural institutions", category: 'arts', points: 3 },
      { text: "Corporate offices, banks, or business centers", category: 'commerce', points: 3 },
      { text: "Tech companies, workshops, or innovation labs", category: 'technical', points: 3 },
    ]
  }
];

const CareerQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [scores, setScores] = useState({ science: 0, arts: 0, commerce: 0, technical: 0 });

  const handleAnswer = (optionIndex: number) => {
    const question = questions[currentQuestion];
    const selectedOption = question.options[optionIndex];
    
    setAnswers(prev => ({ ...prev, [currentQuestion]: optionIndex }));
    
    // Update scores
    setScores(prev => ({
      ...prev,
      [selectedOption.category]: prev[selectedOption.category] + selectedOption.points
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setScores({ science: 0, arts: 0, commerce: 0, technical: 0 });
  };

  const getResults = (): QuizResult[] => {
    const totalPoints = Object.values(scores).reduce((sum, score) => sum + score, 0);
    
    const results: QuizResult[] = [
      {
        category: "Science Stream",
        percentage: totalPoints > 0 ? Math.round((scores.science / totalPoints) * 100) : 0,
        careers: ["Doctor", "Engineer", "Research Scientist", "Pharmacist", "Biotechnologist"],
        courses: ["B.Sc Physics", "B.Sc Chemistry", "B.Sc Biology", "MBBS", "B.Tech"],
        icon: Lightbulb
      },
      {
        category: "Arts & Humanities",
        percentage: totalPoints > 0 ? Math.round((scores.arts / totalPoints) * 100) : 0,
        careers: ["Teacher", "Journalist", "Psychologist", "Social Worker", "Content Writer"],
        courses: ["B.A English", "B.A History", "B.A Psychology", "B.Ed", "Mass Communication"],
        icon: BookOpen
      },
      {
        category: "Commerce & Business",
        percentage: totalPoints > 0 ? Math.round((scores.commerce / totalPoints) * 100) : 0,
        careers: ["CA/CS", "Business Analyst", "Banking Officer", "Marketing Manager", "Entrepreneur"],
        courses: ["B.Com", "BBA", "B.Com (Hons)", "Economics", "Finance & Accounting"],
        icon: Briefcase
      },
      {
        category: "Technical & IT",
        percentage: totalPoints > 0 ? Math.round((scores.technical / totalPoints) * 100) : 0,
        careers: ["Software Developer", "Data Scientist", "IT Consultant", "System Administrator", "Web Designer"],
        courses: ["BCA", "B.Tech IT", "B.Sc Computer Science", "Diploma in IT", "Cyber Security"],
        icon: Users
      }
    ];

    return results.sort((a, b) => b.percentage - a.percentage);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const results = getResults();
    
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <Card className="bg-gradient-card shadow-strong">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl bg-gradient-primary bg-clip-text text-transparent">
              Your Career Assessment Results
            </CardTitle>
            <CardDescription className="text-lg">
              Based on your responses, here are your career preferences and recommendations
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid gap-6">
          {results.map((result, index) => {
            const IconComponent = result.icon;
            return (
              <Card 
                key={result.category} 
                className={`shadow-medium transition-smooth hover:shadow-strong ${
                  index === 0 ? 'bg-gradient-success text-white' : 'bg-background'
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <IconComponent className={`h-8 w-8 ${index === 0 ? 'text-white' : 'text-primary'}`} />
                      <CardTitle className={index === 0 ? 'text-white' : 'text-foreground'}>
                        {result.category}
                      </CardTitle>
                      {index === 0 && (
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          Best Match
                        </Badge>
                      )}
                    </div>
                    <span className={`text-2xl font-bold ${index === 0 ? 'text-white' : 'text-primary'}`}>
                      {result.percentage}%
                    </span>
                  </div>
                  <Progress value={result.percentage} className="mt-2" />
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className={`font-semibold mb-2 ${index === 0 ? 'text-white' : 'text-foreground'}`}>
                        Career Opportunities:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {result.careers.map((career, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary" 
                            className={index === 0 ? 'bg-white/20 text-white border-white/30' : ''}
                          >
                            {career}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${index === 0 ? 'text-white' : 'text-foreground'}`}>
                        Recommended Courses:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {result.courses.map((course, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className={index === 0 ? 'border-white/30 text-white' : ''}
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center space-x-4">
          <Button onClick={resetQuiz} variant="outline" size="lg">
            Take Quiz Again
          </Button>
          <Button variant="hero" size="lg">
            Explore Colleges <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="shadow-strong">
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-2xl">Career Assessment Quiz</CardTitle>
            <Badge variant="outline">{currentQuestion + 1} of {questions.length}</Badge>
          </div>
          <Progress value={progress} className="mb-2" />
          <CardDescription>
            Answer honestly to get the most accurate career recommendations
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              {question.question}
            </h3>
            
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswer === index ? "academic" : "quiz"}
                  className="w-full text-left justify-start p-4 h-auto"
                  onClick={() => handleAnswer(index)}
                >
                  <div className="flex items-center space-x-3">
                    {selectedAnswer === index && (
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    )}
                    <span className="flex-1">{option.text}</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            
            <Button
              variant="academic"
              onClick={nextQuestion}
              disabled={selectedAnswer === undefined}
            >
              {currentQuestion === questions.length - 1 ? "View Results" : "Next"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CareerQuiz;