export type Skill = {
    type:
        | "language"
        | "library-frameworks"
        | "database"
        | "devops-hosting"
        | "runtime-pm"
        | "tool";
    name: string;
    icon: string;
    color: string;
};

export const skills: Skill[] = [
    {
        type: "language",
        name: "JavaScript",
        icon: "skill-icons:javascript",
        color: "warning",
    },
    {
        type: "language",
        name: "TypeScript",
        icon: "skill-icons:typescript",
        color: "primary",
    },
    {
        type: "language",
        name: "HTML5",
        icon: "skill-icons:html",
        color: "error",
    },
    {
        type: "language",
        name: "CSS3",
        icon: "skill-icons:css",
        color: "primary",
    },
    {
        type: "language",
        name: "Go",
        icon: "skill-icons:golang",
        color: "primary",
    },
    {
        type: "language",
        name: "Dart",
        icon: "logos:dart",
        color: "primary",
    },
    {
        type: "language",
        name: "Python",
        icon: "logos:python",
        color: "secondary",
    },
    {
        type: "library-frameworks",
        name: "React",
        icon: "logos:react",
        color: "primary",
    },
    {
        type: "library-frameworks",
        name: "Next.js",
        icon: "logos:nextjs-icon",
        color: "neutral",
    },
    {
        type: "library-frameworks",
        name: "Vue.js",
        icon: "logos:vue",
        color: "success",
    },
    {
        type: "library-frameworks",
        name: "Nuxt.js",
        icon: "logos:nuxt-icon",
        color: "success",
    },
    {
        type: "library-frameworks",
        name: "NestJS",
        icon: "logos:nestjs",
        color: "error",
    },
    {
        type: "library-frameworks",
        name: "Express",
        icon: "skill-icons:expressjs-light",
        color: "neutral",
    },
    {
        type: "library-frameworks",
        name: "ElysiaJS",
        icon: "skill-icons:elysia-light",
        color: "primary",
    },
    {
        type: "library-frameworks",
        name: "Echo",
        icon: "skill-icons:golang",
        color: "primary",
    },
    {
        type: "library-frameworks",
        name: "Fiber",
        icon: "devicon:fiber",
        color: "primary",
    },
    {
        type: "library-frameworks",
        name: "Django",
        icon: "logos:django-icon",
        color: "neutral",
    },
    {
        type: "library-frameworks",
        name: "FastAPI",
        icon: "logos:fastapi-icon",
        color: "success",
    },
    {
        type: "library-frameworks",
        name: "LangChain",
        icon: "simple-icons:langchain",
        color: "neutral",
    },
    {
        type: "library-frameworks",
        name: "LangGraph",
        icon: "simple-icons:langgraph",
        color: "neutral",
    },
    {
        type: "library-frameworks",
        name: "Flutter",
        icon: "logos:flutter",
        color: "primary",
    },
    {
        type: "database",
        name: "MySQL",
        icon: "logos:mysql-icon",
        color: "primary",
    },
    {
        type: "database",
        name: "PostgreSQL",
        icon: "logos:postgresql",
        color: "primary",
    },
    {
        type: "database",
        name: "Supabase",
        icon: "logos:supabase-icon",
        color: "success",
    },
    {
        type: "database",
        name: "SQLite",
        icon: "skill-icons:sqlite",
        color: "primary",
    },
    {
        type: "database",
        name: "MongoDB",
        icon: "logos:mongodb-icon",
        color: "success",
    },
    {
        type: "database",
        name: "Qdrant",
        icon: "logos:qdrant-icon",
        color: "error",
    },
    {
        type: "devops-hosting",
        name: "Linux",
        icon: "logos:linux-tux",
        color: "neutral",
    },
    {
        type: "devops-hosting",
        name: "Docker",
        icon: "logos:docker-icon",
        color: "primary",
    },
    {
        type: "devops-hosting",
        name: "Cloudflare",
        icon: "logos:cloudflare-icon",
        color: "neutral",
    },
    {
        type: "devops-hosting",
        name: "nginx",
        icon: "skill-icons:nginx",
        color: "success",
    },
    {
        type: "devops-hosting",
        name: "Vercel",
        icon: "logos:vercel-icon",
        color: "neutral",
    },
    {
        type: "devops-hosting",
        name: "Netlify",
        icon: "logos:netlify-icon",
        color: "primary",
    },
    {
        type: "devops-hosting",
        name: "Railway",
        icon: "simple-icons:railway",
        color: "neutral",
    },
    {
        type: "devops-hosting",
        name: "Render",
        icon: "simple-icons:render",
        color: "neutral",
    },
    {
        type: "devops-hosting",
        name: "GitHub Actions",
        icon: "skill-icons:github-dark",
        color: "neutral",
    },
    {
        type: "devops-hosting",
        name: "Jenkins",
        icon: "logos:jenkins",
        color: "neutral",
    },
    {
        type: "runtime-pm",
        name: "Node.js",
        icon: "logos:nodejs-icon",
        color: "success",
    },
    {
        type: "runtime-pm",
        name: "npm",
        icon: "logos:npm-icon",
        color: "error",
    },
    {
        type: "runtime-pm",
        name: "Bun",
        icon: "logos:bun",
        color: "neutral",
    },
    {
        type: "runtime-pm",
        name: "uv",
        icon: "devicon:uv",
        color: "secondary",
    },
    {
        type: "tool",
        name: "Visual Studio Code",
        icon: "logos:visual-studio-code",
        color: "primary",
    },
    {
        type: "tool",
        name: "GitHub",
        icon: "skill-icons:github-dark",
        color: "neutral",
    },
    {
        type: "tool",
        name: "Postman",
        icon: "logos:postman-icon",
        color: "error",
    },
    {
        type: "tool",
        name: "Vite",
        icon: "logos:vitejs",
        color: "primary",
    },
    {
        type: "tool",
        name: "PrismaORM",
        icon: "logos:prisma",
        color: "primary",
    },
    {
        type: "tool",
        name: "TypeORM",
        icon: "devicon:typeorm",
        color: "error",
    },
    {
        type: "tool",
        name: "Android Studio",
        icon: "devicon:androidstudio",
        color: "primary",
    },
    {
        type: "tool",
        name: "Figma",
        icon: "logos:figma",
        color: "primary",
    },
];
