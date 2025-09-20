import React from "react";

interface Recommendation {
  college_name: string;
  location: string;
  reason_for_fit: string;
  relevant_courses: string[];
  website: string;
}

interface Props {
  recommendations: Recommendation[];
}

const CollegeRecommendations: React.FC<Props> = ({ recommendations }) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">🎓 College Recommendations</h2>

      <ul className="space-y-4">
        {recommendations.map((rec, idx) => (
          <li key={idx} className="border p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">{rec.college_name}</h3>
            <p className="text-sm text-gray-600">{rec.location}</p>
            <p className="mt-2">{rec.reason_for_fit}</p>
            <p className="mt-1 text-sm">
              <strong>Courses:</strong> {rec.relevant_courses.join(", ")}
            </p>
            <a
              href={rec.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline mt-2 inline-block"
            >
              Visit Website
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollegeRecommendations;
