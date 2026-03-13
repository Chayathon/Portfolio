export type Project = {
    title: string;
    description: {
        en: string;
        th: string;
    };
    features?: {
        en: string[];
        th: string[];
    };
    coverImage: {
        src: string;
        alt: string;
    };
    images?: string[];
    technologies: string[];
    type: "web" | "mobile" | "desktop" | "other";
    status: "online" | "offline" | "development";
    url?: string;
    github?: string;
};

export const projects: Project[] = [
    {
        title: "Smart VoIP",
        description: {
            en: "Real-time Audio Broadcasting System to Devices - Designed for Local Authorities to Announce Public Address, Play Music, Schedule Broadcasts, and Send Emergency Alerts to Targeted Device Groups Efficiently",
            th: "โปรแกรมออกอากาศทางเสียงแบบเรียลไทม์ไปยังอุปกรณ์ ออกแบบสำหรับหน่วยงานท้องถิ่น เพื่อประกาศเสียงตามสาย, เปิดเพลง, ตั้งเวลาเปิดเพลง และแจ้งเตือนฉุกเฉิน ไปยังกลุ่มอุปกรณ์ที่กำหนดได้อย่างมีประสิทธิภาพ",
        },
        coverImage: {
            src: "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1773308889/cover_bjjt1c.png",
            alt: "Cover image for Smart VoIP project",
        },
        technologies: [
            "Vue 3",
            "Vite",
            "Tailwind CSS",
            "Express",
            "WebSocket",
            "MQTT",
            "SIP Protocol",
            "MongoDB",
        ],
        type: "web",
        status: "development",
    },
    {
        title: "OfficeMate AI",
        description: {
            en: "An AI-powered chatbot system for organizations that helps answer questions about policies, benefits, products, and other information from the organization's knowledge base using RAG (Retrieval-Augmented Generation) combined with LLM (Large Language Model).",
            th: "ระบบ AI Chatbot สำหรับองค์กรที่ช่วยตอบคำถามเกี่ยวกับนโยบาย สวัสดิการ สินค้า และข้อมูลอื่นๆ จากฐานความรู้ขององค์กร โดยใช้ RAG (Retrieval-Augmented Generation) ร่วมกับ LLM (Large Language Model)",
        },
        features: {
            en: [
                "Answer questions from the organization's knowledge base accurately and quickly",
                "Help reduce the workload of support teams and improve efficiency in providing information to employees and customers",
                "Support customization and scalability according to organizational needs",
                "Powered by a powerful LLM to provide natural and easy-to-understand answers",
                "Search documents from a Vector Database to provide the most relevant and up-to-date information",
                "Interact through a beautiful and user-friendly Chainlit UI",
            ],
            th: [
                "ตอบคำถามจากฐานความรู้ขององค์กรได้อย่างแม่นยำและรวดเร็ว",
                "ช่วยลดภาระงานของทีมสนับสนุนและเพิ่มประสิทธิภาพในการให้บริการข้อมูลแก่พนักงานและลูกค้า",
                "รองรับการปรับแต่งและขยายความสามารถตามความต้องการขององค์กร",
                "ประมวลผลด้วย LLM ที่ทรงพลังเพื่อให้คำตอบที่เป็นธรรมชาติและเข้าใจง่าย",
                "ค้นหาเอกสารจาก Vector Database เพื่อให้ข้อมูลที่เกี่ยวข้องและอัปเดตที่สุด",
                "โต้ตอบผ่าน Chainlit UI ที่สวยงามและใช้งานง่าย",
            ],
        },
        coverImage: {
            src: "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1773303622/cover_gek2uf.png",
            alt: "Cover image for OfficeMate AI project",
        },
        images: [
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1773303622/cover_gek2uf.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1773303622/readme_aqshau.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1773303622/1_o7xowm.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1773303624/2_unezhv.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1773303623/3_erk8rp.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1773303622/4_d631r8.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1773303623/5_v78pzm.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1773303623/6_oc75z1.png",
        ],
        technologies: [
            "Python",
            "Chainlit",
            "FastAPI",
            "LangChain",
            "LangGraph",
            "LLM",
            "QdrantDB",
        ],
        type: "web",
        status: "offline",
        github: "https://github.com/Chayathon/officemateai-chainlit-fastapi-langgraph-qdrant",
    },
    {
        title: "Dream Buddy",
        description: {
            en: "Turn Your Dreams Into Reality - An application to make your dreams come true by setting savings goals and getting support from the community to help you achieve your savings goals and make your dreams a reality.",
            th: "Turn Your Dreams Into Reality - แอปพลิเคชันสำหรับการทำความฝันของคุณให้เป็นจริง ด้วยการกำหนดเป้าหมายการออมเงินและการสนับสนุนจากชุมชน เพื่อช่วยให้คุณบรรลุเป้าหมายการออมเงินของคุณ และทำให้ความฝันของคุณเป็นจริง",
        },
        features: {
            en: [
                "Create and track savings goals",
                "Log deposits/withdrawals",
                "Share goals for visibility and encouragement",
                "Like and comment to support others' goals",
                "Set goal privacy levels (Private, Public, Link Only)",
            ],
            th: [
                "สร้างและติดตามเป้าหมายการออมเงิน",
                "บันทึกรายการออม/ถอนเงิน",
                "แชร์เป้าหมายให้คนอื่นเห็นและให้กำลังใจ",
                "กด Like และคอมเมนต์ให้กำลังใจเป้าหมายของคนอื่น",
                "เลือกระดับความเป็นส่วนตัวของเป้าหมาย (Private, Public, Link Only)",
            ],
        },
        coverImage: {
            src: "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1773136315/cover_hq4rta.png",
            alt: "Cover image for Dream Buddy project",
        },
        images: [
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1773136315/cover_hq4rta.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1773136355/features_hb1r1s.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1773136359/howitwork_aoiahn.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1773136358/community_d2mper.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1773136357/testimonials_axaqhz.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1773136356/explore_yfxjfz.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1773136361/goals_ggr2oj.png",
        ],
        technologies: [
            "TypeScript",
            "Nuxt 4",
            "Vue 3",
            "NuxtUI",
            "Tailwind CSS",
            "Prisma",
            "PostgreSQL",
        ],
        type: "web",
        status: "online",
        url: "https://dream-buddy.vercel.app",
        github: "https://github.com/Chayathon/dreambuddy-nuxt4-prisma-postgresql",
    },
];
