// Skill groups, sourced from the "Skill Set" and "Languages" sections of the README.
export const skillGroups = [
  { name: "Languages", items: ["TypeScript", "JavaScript", "Go", "Python", "C#", "Solidity", "SQL", "HTML / CSS"] },
  { name: "Frontend & Mobile", items: ["React", "React Native", "Expo", "Next.js", "Vue.js", "Tailwind CSS", "Shadcn/UI", "Tamagui", "Flutter", "Android"] },
  { name: "Backend & Data", items: ["Node.js", "NestJS", "Go", ".NET", "PostgreSQL", "Supabase", "MongoDB", "Prisma", "DynamoDB", "ETL pipelines", "Web scraping"] },
  { name: "Cloud & DevOps", items: ["Docker", "Traefik", "AWS (Lambda, Cognito, Bedrock)", "CI/CD", "VPS self-hosting", "PostHog", "Git"] },
  { name: "Games & 3D", items: ["Unity", "ShaderGraph", "UIToolkit", "TopDownEngine", "Blender"] },
  { name: "AI & ML", items: ["PyTorch", "Keras", "OpenCV", "LLM chatbots"] },
  { name: "Payments & Hardware", items: ["EMV", "POS terminals", "Raspberry Pi", "Security & perf testing"] },
  { name: "Design", items: ["Figma", "Photoshop", "Illustrator", "After Effects", "Premiere Pro"] },
] as const;

export const operatingSystems = ["Windows 11", "Ubuntu", "Kali", "Android", "iOS"] as const;
