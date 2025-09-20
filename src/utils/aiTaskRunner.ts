// Simple mock runner for AI tasks defined in aiTasks.json
// Adjust this if you have a real backend API.

import aiTasks from "@/config/aiTasks.json";
import aiTasksRaw from "@/config/aiTasks.json";

type Recommendation = {
  name: string;
  location: string;
  programs: string[];
};

type RunAITaskResult = {
  recommendations: Recommendation[];
};

export async function runAITask(
  taskId: string,
  payload: Record<string, unknown>
): Promise<RunAITaskResult> {
  // If you have an API endpoint, call it here.
  // For now this is a mock that returns sample data after a short delay.

  console.log("Running AI task:", taskId, "with payload:", payload);

  // Define the type for AI Task based on aiTasks.json structure
type AiTask = { id: string };

type AiTasks = {
  college_recommendation: AiTask;
};

const aiTasks = aiTasksRaw as AiTasks;

  // Optional: verify taskId exists in aiTasks
  if (!Object.values(aiTasks).some((task: AiTask) => task.id === taskId)) {
    throw new Error(`Task '${taskId}' not found in aiTasks.json`);
  }

  // Simulate API latency
  await new Promise((res) => setTimeout(res, 800));

  // ---- mock response ----
  return {
    recommendations: [
      {
        name: "Delhi University",
        location: "Delhi, India",
        programs: ["B.Sc Computer Science", "B.A Economics"]
      },
      {
        name: "IIT Delhi",
        location: "Delhi, India",
        programs: ["B.Tech Computer Science", "B.Tech Mechanical Engineering"]
      }
    ]
  };
}
