
import aiTaskConfigRaw from "../config/aiTasks.json";

interface AiTaskConfig {
  ai_task_config: {
    output_specification: {
      template: {
        conclusion: string;
      };
    };
  };
}

export interface StudentProfile {
  name: string;
  location: string;
  quiz_results: {
    recommended_careers: string[];
    key_strengths: string[];
    interests: string[];
  };
}

export function generateCollegeRecommendations(profile: StudentProfile) {
  const aiTaskConfig = aiTaskConfigRaw as unknown as AiTaskConfig;
  const task = aiTaskConfig.ai_task_config;
  const template = task.output_specification.template;

  // Example static colleges (replace with API later if needed)
  const colleges = [
    {
      college_name: "Delhi University",
      location: "New Delhi, Delhi",
      reason_for_fit:
        "Strong science and research culture align well with your strengths and academic record.",
      relevant_courses: ["B.Sc Computer Science", "B.Sc Physics"],
      website: "https://www.du.ac.in/",
    },
    {
      college_name: "IIT Delhi",
      location: "New Delhi, Delhi",
      reason_for_fit:
        "Excellent engineering and technology programs match your analytical skills and career goals.",
      relevant_courses: ["B.Tech Computer Science", "B.Tech Electrical Engineering"],
      website: "https://home.iitd.ac.in/",
    },
    {
      college_name: "Jamia Millia Islamia",
      location: "New Delhi, Delhi",
      reason_for_fit:
        "Affordable education with diverse programs that align with your interests in technology and research.",
      relevant_courses: ["B.Tech Civil Engineering", "B.Sc Mathematics"],
      website: "https://www.jmi.ac.in/",
    },
  ];

  return {
    greeting: `Hello ${profile.name},`,
    summary: `Based on your strengths (${profile.quiz_results.key_strengths.join(
      ", "
    )}) and career paths (${profile.quiz_results.recommended_careers.join(
      ", "
    )}), here are some colleges you may like:`,
    recommendations: colleges,
    conclusion: template.conclusion,
  };
}
