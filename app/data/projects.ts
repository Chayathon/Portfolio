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
    {
        title: "Debt Collection Management System",
        description: {
            en: "A debt collection management system that helps companies manage and track customer debts, as well as manage legal work outside of court efficiently. The system is flexible and customizable to meet the needs of each company, to increase efficiency in debt management and reduce the workload of the debt collection team.",
            th: "ระบบจัดการการติดตามหนี้ที่ช่วยให้บริษัทสามารถจัดการและติดตามหนี้ของลูกค้า และระบบจัดการงานทางด้านกฎหมายนอกศาลได้อย่างมีประสิทธิภาพ โดยระบบที่ยืดหยุ่นและปรับแต่งได้ตามความต้องการของแต่ละบริษัท เพื่อเพิ่มประสิทธิภาพในการจัดการหนี้และลดภาระงานของทีมติดตามหนี้",
        },
        features: {
            en: [
                "Comprehensive management of customer debts and liabilities",
                "Tracking of debt status and customer payments",
                "Management of legal work outside of court, such as sending demand letters, scheduling debtor appointments, and managing legal documents",
                "Search and filter system for debtor information and legal work for quick and easy access to information",
                "Notification and alert system for necessary actions, such as following up with debtors or legal proceedings",
                "Upload documents and evidence related to debts and debtors for storage and future reference",
                "Generate reports and statistics on debts and legal proceedings for analysis and informed decision-making",
                "Add necessary data tables and fields for flexible debt and debtor management",
                "Customize debtor detail screens and legal work management screens according to company needs",
                "Task assignment system for debt collection teams and legal teams for efficient collaboration",
                "User management and access control system for security and efficient collaboration",
            ],
            th: [
                "การจัดการข้อมูลลูกหนี้และหนี้สินอย่างครบถ้วน",
                "การติดตามสถานะหนี้และการชำระเงินของลูกหนี้",
                "การจัดการงานทางด้านกฎหมายนอกศาล เช่น การส่งจดหมายทวงถาม การนัดหมายลูกหนี้ และการจัดการเอกสารทางกฎหมาย",
                "ระบบการค้นหาและกรองข้อมูลลูกหนี้และงานทางกฎหมายเพื่อการเข้าถึงข้อมูลที่รวดเร็วและง่ายดาย",
                "ระบบแจ้งเตือนและการแจ้งเตือนสำหรับการดำเนินการที่จำเป็น เช่น การติดตามลูกหนี้หรือการดำเนินงานทางกฎหมาย",
                "อัปโหลดเอกสารและหลักฐานที่เกี่ยวข้องกับหนี้และลูกหนี้เพื่อการจัดเก็บและการอ้างอิงในอนาคต",
                "ออกรายงานและสถิติเกี่ยวกับหนี้สินและการดำเนินงานทางกฎหมายเพื่อการวิเคราะห์และการตัดสินใจที่มีข้อมูลรองรับ",
                "เพิ่มตารางข้อมูลและฟิลด์ข้อมูลที่จำเป็นสำหรับการจัดการหนี้และลูกหนี้ได้อย่างยืดหยุ่น",
                "ปรับแต่งหน้าจอรายละเอียดลูกหนี้และหน้าจอการจัดการงานทางกฎหมายได้ตามความต้องการของบริษัท",
                "ระบบแบ่งงานและมอบหมายงานให้กับทีมติดตามหนี้และทีมกฎหมายเพื่อการทำงานร่วมกันที่มีประสิทธิภาพ",
                "ระบบการจัดการผู้ใช้และสิทธิ์การเข้าถึงเพื่อความปลอดภัยและการทำงานร่วมกันที่มีประสิทธิภาพ",
                "ระบบจัดอันดับพนักงานติดตามหนี้และทีมกฎหมายตามประสิทธิภาพการทำงานเพื่อการปรับปรุงและการให้รางวัล",
            ],
        },
        coverImage: {
            src: "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1774256423/table_givubw.png",
            alt: "Cover image for Debt Collection Management System project",
        },
        images: [
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1774256423/table_givubw.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1774256420/access-control_fd3xt7.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1774256423/customer-detail_vx2w0l.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1774256422/payment-appointment_esncbp.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1774256422/select-customer_djwvek.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1774256420/custom-customer_frvad1.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1774256421/custom-customer-detail-1_putkaq.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1774256421/custom-customer-detail-2_qj4k0a.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1774256422/custom-customer-detail-3_epv66n.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1774256421/custom-customer-detail-4_ujefth.png",
        ],
        technologies: [
            "TypeScript",
            "Next.js 15",
            "Tailwind CSS",
            "NestJS",
            "TypeORM",
            "MySQL",
            "WebSocket",
        ],
        type: "web",
        status: "offline",
    },
    {
        title: "Precision Agriculture",
        description: {
            en: "A precision agriculture system that utilizes IoT sensors to monitor and manage agricultural fields, providing real-time data on soil moisture, temperature, humidity, and other environmental factors to optimize crop growth and yield while collaborating with local authorities in developing the system.",
            th: "ระบบเกษตรกรรมแม่นยำที่ใช้เซ็นเซอร์ IoT เพื่อตรวจสอบและจัดการพื้นที่เกษตรกรรม โดยให้ข้อมูลแบบเรียลไทม์เกี่ยวกับความชื้นในดิน อุณหภูมิ ความชื้น และปัจจัยแวดล้อมอื่นๆ เพื่อเพิ่มประสิทธิภาพการเจริญเติบโตของพืชและผลผลิต ร่วมกับหน่วยงานท้องถิ่นในการพัฒนาระบบ",
        },
        features: {
            en: [
                "Monitoring of soil moisture, temperature, humidity, and other environmental factors",
                "Data visualization and analysis to optimize crop growth and yield",
                "Alerts and notifications for necessary actions such as watering or fertilizing",
                "Historical data tracking and trend analysis for informed decision-making",
                "Data export and reporting for further analysis and sharing with stakeholders",
                "Hourly and daily weather forecasts for better agricultural planning",
                "Farmer tracking and user management for efficient collaboration",
            ],
            th: [
                "การตรวจสอบความชื้นในดิน อุณหภูมิ ความชื้น และปัจจัยแวดล้อมอื่นๆ",
                "การแสดงผลและวิเคราะห์ข้อมูลเพื่อเพิ่มประสิทธิภาพการเจริญเติบโตของพืชและผลผลิต",
                "การแจ้งเตือนและการแจ้งเตือนสำหรับการดำเนินการที่จำเป็น เช่น การรดน้ำหรือการใช้ปุ๋ย",
                "การติดตามข้อมูลในอดีตและเพื่อการวิเคราะห์แนวโน้มการตัดสินใจที่มีข้อมูลรองรับ",
                "ส่งออกข้อมูลและรายงานเพื่อการวิเคราะห์เพิ่มเติมและการแบ่งปันกับผู้มีส่วนได้ส่วนเสีย",
                "การพยากรณ์อากาศรายชั่วโมงและรายวันเพื่อการวางแผนการเกษตรกรรมที่ดีขึ้น",
                "การติดตามเกษตรกรและการจัดการผู้ใช้เพื่อการทำงานร่วมกันที่มีประสิทธิภาพ",
            ],
        },
        coverImage: {
            src: "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1774251646/cover_pfegpt.png",
            alt: "Cover image for Precision Agriculture project",
        },
        images: [
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1774251646/cover_pfegpt.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1774251645/dashboard_1_htvove.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1774251645/dashboard_2_mp73de.png",
        ],
        technologies: [
            "JavaScript",
            "Next.js 14",
            "Tailwind CSS",
            "Express",
            "Supabase",
            "TMD Weather API",
            "MQTT",
            "IoT Sensors",
        ],
        type: "web",
        status: "offline",
        github: "https://github.com/Chayathon/Precision_Agriculture",
    },
    {
        title: "ITI Event",
        description: {
            en: "An event registration system for the annual party of the Information Technology (ITI) department that helps make managing the party easier and more convenient. It includes features such as table reservation, product purchase, payment, and tracking attendance status, allowing attendees to register and manage their participation quickly and easily.",
            th: "ระบบการลงทะเบียนร่วมงานเลี้ยงสังสรรค์ประจำปีของสาขาวิชาเทคโนโลยีสารสนเทศ (ITI) ที่ช่วยให้การจัดการงานเลี้ยงสังสรรค์เป็นเรื่องง่ายและสะดวกมากขึ้น โดยมีฟีเจอร์หลักๆ เช่น การจองโต๊ะ, การซื้อสินค้า, การชำระเงิน, การติดตามสถานะการเข้าร่วมงาน ซึ่งช่วยให้ผู้เข้าร่วมงานสามารถลงทะเบียนและจัดการการเข้าร่วมงานได้อย่างรวดเร็วและง่ายดาย",
        },
        features: {
            en: [
                "Table reservation for the party",
                "Product purchase for use in the party",
                "Payment processing for reservations and product purchases",
                "Tracking attendance status for the party",
                "Email confirmation for reservations and product purchases",
                "Management system for party attendees and table reservations",
                "Management system for products and services for the party",
                "Line group notifications for new reservations and product purchases",
            ],
            th: [
                "การจองโต๊ะสำหรับงานเลี้ยงสังสรรค์",
                "การซื้อสินค้าเพื่อใช้ในงานเลี้ยงสังสรรค์",
                "การประมวลผลการชำระเงินสำหรับการจองและการซื้อสินค้า",
                "การติดตามสถานะการเข้าร่วมงานเลี้ยงสังสรรค์",
                "อีเมลยืนยันการจองและการซื้อสินค้า",
                "ระบบจัดการข้อมูลผู้เข้าร่วมงานและการจองโต๊ะ",
                "ระบบจัดการข้อมูลสินค้าและบริการสำหรับงานเลี้ยงสังสรรค์",
                "แจ้งเตือนทางกลุ่มไลน์สำหรับการจองและการซื้อสินค้าใหม่",
            ],
        },
        coverImage: {
            src: "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1774254210/cover_aieail.png",
            alt: "Cover image for ITI Event project",
        },
        images: [
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1774254210/cover_aieail.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1774318089/table-reservation_djxr41.jpg",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1774318089/Line1_l3ggpt.png",
            "https://res.cloudinary.com/chayathon-portfolio/image/upload/v1774318090/Line2_frvmxa.png",
        ],
        technologies: [
            "TypeScript",
            "Next.js 14",
            "Tailwind CSS",
            "Supabase",
            "Nodemailer",
            "Line Notify API",
        ],
        type: "web",
        status: "offline",
        github: "https://github.com/Chayathon/iti-event-17",
    },
];
