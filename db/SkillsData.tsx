// Helper function to get all skills as a flat array
export const getAllSkills = () => {
  return Object.values(skillsData).flat();
};

// Common type definitions
export type Skill = {
  name: string;
  icon: string;
};

export type SkillsData = {
  [key: string]: Skill[];
};

// Skills data organized by category
// Skills data organized by category
export const skillsData: SkillsData = {
  frontend: [
    { name: "React", icon: "/icons/react.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    { name: "Redux", icon: "/icons/redux.svg" },
    { name: "GSAP", icon: "/icons/gsap.svg" },
    { name: "Figma", icon: "/icons/figma.svg" },
    { name: "Webpack", icon: "/icons/webpack.svg" },
    { name: "Shadcn/ui", icon: "/icons/shadcn.svg" },
    { name: "Framer Motion", icon: "/icons/framer.svg" },
    { name: "Tanstack", icon: "/icons/tanstack.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "NestJS", icon: "/icons/nestjs.svg" },
    { name: "Express", icon: "/icons/express.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "MySQL", icon: "/icons/mysql.svg" },
    { name: "Prisma", icon: "/icons/prisma.svg" },
    { name: "Mongoose", icon: "/icons/mongoose.svg" },
    { name: "TypeORM", icon: "/icons/typeorm.svg" },
    { name: "Sequelize", icon: "/icons/sequelize.svg" },
    { name: "GraphQL", icon: "/icons/graphql.svg" },
    { name: "REST API", icon: "/icons/api.svg" },
    { name: "Socket.io", icon: "/icons/socketio.svg" },
    { name: "Zod", icon: "/icons/zod.svg" },
    { name: "Swagger", icon: "/icons/swagger.svg" },
  ],
  cloud: [
    { name: "AWS", icon: "/icons/aws.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "Kubernetes", icon: "/icons/kubernetes.svg" },
    { name: "Azure", icon: "/icons/azure.svg" },
    { name: "Vercel", icon: "/icons/vercel.svg" },
    { name: "Google Cloud", icon: "/icons/gcp.svg" },
    { name: "Firebase", icon: "/icons/firebase.svg" },
    { name: "Cloudflare", icon: "/icons/cloudflare.svg" },
    { name: "Netlify", icon: "/icons/netlify.svg" },
    { name: "Terraform", icon: "/icons/terraform.svg" },
    { name: "CI/CD", icon: "/icons/cicd.svg" },
  ],
  tools: [
    { name: "Cursor", icon: "/icons/cursor.svg" },
    { name: "Postman", icon: "/icons/postman.svg" },
    { name: "Jira", icon: "/icons/jira.svg" },
    { name: "Linux", icon: "/icons/linux.svg" },
    { name: "GitHub Actions", icon: "/icons/githubactions.svg" },
    { name: "Bash", icon: "/icons/bash.svg" },
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Plane", icon: "/icons/plane.svg" },
  ],

};