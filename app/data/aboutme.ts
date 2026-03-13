export type LocalizedAboutme = {
    greetings: string;
    name: string;
    position: string;
    description: string;
    status: {
        available: string;
        unavailable: string;
    };
};

export type AboutmeData = {
    en: LocalizedAboutme;
    th: LocalizedAboutme;
};

export const aboutmeData: AboutmeData = {
    en: {
        greetings: "Hi,",
        name: "I'm Chayathon Termpipatphong",
        position: "Software Developer",
        description:
            "A passionate software developer with a strong background in web development and mobile development, and a keen interest in learning new technologies. I have experience working on various projects, ranging from small personal websites to large-scale applications. I am always eager to take on new challenges and collaborate with others to create innovative solutions.",
        status: {
            available: "Available for new opportunities",
            unavailable: "Not available at the moment",
        },
    },
    th: {
        greetings: "สวัสดีครับ",
        name: "ผม ชยธร เติมพิพัฒน์พงศ์",
        position: "นักพัฒนาซอฟต์แวร์",
        description:
            "ผมเป็นนักพัฒนาซอฟต์แวร์ที่มีความมุ่งมั่นในการพัฒนาเว็บแอปและแอปมือถือ มีความสนใจในการเรียนรู้เทคโนโลยีใหม่ๆ ผมมีประสบการณ์ในการทำงานในโครงการต่างๆ ตั้งแต่เว็บไซต์ส่วนตัวขนาดเล็กไปจนถึงแอปพลิเคชันขนาดใหญ่ ผมพร้อมที่จะรับมือกับความท้าทายใหม่ๆ และร่วมมือกับผู้อื่นเพื่อสร้างสรรค์โซลูชัน",
        status: {
            available: "พร้อมสำหรับโอกาสใหม่ๆ",
            unavailable: "ไม่พร้อมในขณะนี้",
        },
    },
};
