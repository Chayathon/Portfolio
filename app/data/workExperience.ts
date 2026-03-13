export type LocalizedWorkExperience = {
    company: string;
    position: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
};

export type WorkExperience = {
    en: LocalizedWorkExperience;
    th: LocalizedWorkExperience;
    type: "intern" | "part-time" | "full-time";
    icon?: string;
};

export const workExperiences: WorkExperience[] = [
    {
        en: {
            company: "Unity IT System Co., Ltd.",
            position: "Student Intern",
            description:
                "Sold computer equipment and provided product consultation, repaired computers, installed and configured software, and provided general technical support.",
            location: "Saraburi, Thailand",
            startDate: "November 2020",
            endDate: "February 2021",
        },
        th: {
            company: "บริษัท ยูนิตี้ ไอที ซิสเต็ม จำกัด",
            position: "นักศึกษาฝึกงาน",
            description:
                "ขายอุปกรณ์คอมพิวเตอร์และให้คำปรึกษาเกี่ยวกับผลิตภัณฑ์ ซ่อมคอมพิวเตอร์ ติดตั้งและกำหนดค่าซอฟต์แวร์ รวมถึงการสนับสนุนด้านเทคนิคทั่วไป",
            location: "สระบุรี, ประเทศไทย",
            startDate: "พฤศจิกายน 2563",
            endDate: "กุมภาพันธ์ 2564",
        },
        type: "intern",
        icon: "i-lucide-graduation-cap",
    },
    {
        en: {
            company: "Earth Computer",
            position: "Technician Intern",
            description:
                "Repairs computer hardware and peripheral devices for customers, ensures smooth operation of computer systems, assists with software installation and configuration, and provides general technical support.",
            location: "Saraburi, Thailand",
            startDate: "November 2022",
            endDate: "February 2023",
        },
        th: {
            company: "เอิร์ธ คอมพิวเตอร์",
            position: "ช่างเทคนิค (นักศึกษาฝึกงาน)",
            description:
                "ซ่อมคอมพิวเตอร์และอุปกรณ์ต่อพ่วงให้กับลูกค้า รับประกันการทำงานที่ราบรื่นของระบบคอมพิวเตอร์ ช่วยในการติดตั้งและกำหนดค่าซอฟต์แวร์ รวมถึงการสนับสนุนด้านเทคนิคทั่วไป",
            location: "สระบุรี, ประเทศไทย",
            startDate: "พฤศจิกายน 2565",
            endDate: "กุมภาพันธ์ 2566",
        },
        type: "intern",
        icon: "i-lucide-hard-hat",
    },
    {
        en: {
            company: "Chatchai Traditional Medicine Co., Ltd.",
            position: "IT Support Intern",
            description:
                "Provided technical support for hardware and software issues, ensuring minimal downtime for employees. Assisted in the maintenance of the company's IT infrastructure, including network and server management. Contributed to the development of an internal knowledge base, improving the efficiency of issue resolution.",
            location: "Saraburi, Thailand",
            startDate: "April 2024",
            endDate: "June 2024",
        },
        th: {
            company: "บริษัท ฉัตรชัยแพทย์แผนโบราณ จำกัด",
            position: "IT Support (นักศึกษาฝึกงาน)",
            description:
                "ให้การสนับสนุนทางเทคนิคสำหรับปัญหาฮาร์ดแวร์และซอฟต์แวร์ รับประกันเวลาทำงานที่ลดลงสำหรับพนักงาน ช่วยในการบำรุงรักษาโครงสร้างพื้นฐาน IT ของบริษัท รวมถึงการจัดการเครือข่ายและเซิร์ฟเวอร์ สนับสนุนการพัฒนาฐานความรู้ภายใน ปรับปรุงประสิทธิภาพในการแก้ไขปัญหา",
            location: "สระบุรี, ประเทศไทย",
            startDate: "เมษายน 2567",
            endDate: "มิถุนายน 2567",
        },
        type: "intern",
        icon: "i-lucide-laptop",
    },
    {
        en: {
            company: "Mass Corporation Co., Ltd.",
            position: "Jr. Full Stack Developer",
            description:
                "Developed and maintained web applications. Collaborated with cross-functional teams to design and implement new features, resulting in a 20% increase in user engagement. Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 30%.",
            location: "Samut Prakan, Thailand",
            startDate: "June 2025",
            endDate: "Present",
        },
        th: {
            company: "บริษัท แมส คอร์ปอเรชั่น จำกัด",
            position: "Jr. Full Stack Developer",
            description:
                "พัฒนาและดูแลแอปพลิเคชันเว็บ ร่วมมือกับทีมข้ามสายงานในการออกแบบและนำฟีเจอร์ใหม่ๆ ไปใช้ ส่งผลให้มีการเพิ่มการมีส่วนร่วมของผู้ใช้ขึ้น 20% นำ CI/CD pipelines มาใช้โดยใช้ GitHub Actions ลดเวลาในการปรับใช้ลง 30%",
            location: "สมุทรปราการ, ประเทศไทย",
            startDate: "มิถุนายน 2568",
            endDate: "ปัจจุบัน",
        },
        type: "full-time",
        icon: "i-lucide-code",
    },
];
