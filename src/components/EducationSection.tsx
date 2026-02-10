import { GraduationCap } from "lucide-react";

interface Education {
  institution: string;
  period: string;
  degree?: string;
  location?: string;
  cgpa?: string;
}

const education: Education[] = [
  {
    institution: "S.R.M Institute of Science and Technology",
    period: "2023 - 2027",
    degree: "B.Tech Electronics and Communication Engineering",
    location: "Chennai, India",
    cgpa: "8.45 / 10",
  },
];

export const EducationSection = () => {
  return (
    <section className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Education</h2>
      </div>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 border border-border rounded-lg"
          >
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0 sm:gap-4">
                <div>
                  <h3 className="font-medium break-words">{edu.institution}</h3>
                  {edu.degree && (
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  )}
                  {edu.location && (
                    <p className="text-xs text-muted-foreground mt-1">{edu.location}</p>
                  )}
                </div>
                <div className="flex flex-col items-start sm:items-end shrink-0">
                  <span className="text-sm text-muted-foreground">
                    {edu.period}
                  </span>
                  {edu.cgpa && (
                    <span className="text-sm text-muted-foreground">CGPA: {edu.cgpa}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
