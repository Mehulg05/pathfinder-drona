import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { runAITask } from "@/utils/aiTaskRunner";
import aiTasks from "@/config/aiTasks.json";

// Define the expected structure for aiTasks
interface AiTask {
  id: string;
  // Add other fields as needed
}
interface AiTasksConfig {
  college_recommendation: AiTask;
  // Add other tasks as needed
}

// Typecast aiTasks to the expected structure
const typedAiTasks = aiTasks as unknown as AiTasksConfig;
import CollegeRecommendations from "@/components/recommendation/collegeRecommendations";

interface QuizResult {
  careers: string[];
  category: string;
  // Add other fields as needed
}

interface Recommendation {
  name: string;
  location: string;
  // Add other fields as needed
}
const CareerQuiz: React.FC = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);

  const [showColleges, setShowColleges] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(false);
  
    const getResults = () => {
      return quizResults;
    };

  const handleExploreColleges = async () => {
    const results = getResults();
    if (!results || results.length === 0) return;

    const topResult = results[0];
    setLoading(true);

    try {
      const response = await runAITask(typedAiTasks.college_recommendation.id, {
        student_profile: {
          name: "Demo Student",
          location: "Delhi, India",
          education_level: "Class 12th, Science",
          academic_performance: "85%",
          quiz_results: {
            recommended_careers: topResult.careers.slice(0, 3),
            key_strengths: ["Analytical Thinking", "Problem Solving"],
            interests: [topResult.category]
          }
        }
      });

      setRecommendations(response.recommendations || []);
      setShowColleges(true);
    } catch (error) {
      console.error("Error fetching college recommendations:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {!quizCompleted && (
        <div>
          {/* Quiz questions and logic */}
        </div>
      )}

      {quizCompleted && (
        <div className="space-y-4">
          <div>
            {/* Render your quiz results here using quizResults */}
          </div>

          <Button
            variant="hero"
            size="lg"
            onClick={handleExploreColleges}
            disabled={loading}
          >
            {loading ? "Loading..." : "Explore Colleges"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          {showColleges && recommendations.length > 0 && (
            <CollegeRecommendations recommendations={recommendations} />
          )}
        </div>
      )}
    </div>
  );
};

export default CareerQuiz;
