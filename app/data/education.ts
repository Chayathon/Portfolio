export type LocalizedEducation = {
    institution: string;
    degree: string;
    field: string;
    gpax: string;
    award?: string;
    startYear: string;
    endYear: string;
};

export type Education = {
    en: LocalizedEducation;
    th: LocalizedEducation;
    logo?: {
        src: string;
        alt: string;
        loading: "lazy";
    };
};

export const educations: Education[] = [
    {
        en: {
            institution:
                "King Mongkut's University of Technology North Bangkok",
            degree: "Second Class Honors in Bachelor of Industrial Technology (B.Ind.Tech.)",
            field: "Information Technology",
            gpax: "3.58",
            award: "Second Class Honors",
            startYear: "2023",
            endYear: "2025",
        },
        th: {
            institution: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
            degree: "ปริญญาตรี คณะเทคโนโลยีและการจัดการอุตสาหกรรม (อส.บ.)",
            field: "เทคโนโลยีสารสนเทศ",
            gpax: "3.58",
            award: "เกียรตินิยมอันดับสอง",
            startYear: "2566",
            endYear: "2568",
        },
        logo: {
            src: "https://upload.wikimedia.org/wikipedia/th/thumb/b/be/Seal_of_KMUTNB.svg/1280px-Seal_of_KMUTNB.svg.png",
            alt: "King Mongkut's University of Technology North Bangkok logo",
            loading: "lazy",
        },
    },
    {
        en: {
            institution: "Saraburi Vocational College",
            degree: "High Vocational Certificate in Software Development",
            field: "Information Technology",
            gpax: "3.92",
            startYear: "2021",
            endYear: "2023",
        },
        th: {
            institution: "วิทยาลัยอาชีวศึกษาสระบุรี",
            degree: "ประกาศนียบัตรวิชาชีพชั้นสูง สาขางานนักพัฒนาซอฟต์แวร์",
            field: "เทคโนโลยีสารสนเทศ",
            gpax: "3.92",
            startYear: "2564",
            endYear: "2566",
        },
        logo: {
            src: "https://www.rsc.ac.th/2019/images/18623367_1913520942223834_5291903855962878385_o.jpg",
            alt: "Saraburi Vocational College logo",
            loading: "lazy",
        },
    },
    {
        en: {
            institution: "Saraburi Vocational College",
            degree: "Vocational Certificate in Business Management",
            field: "Business Computer",
            gpax: "3.6",
            startYear: "2018",
            endYear: "2021",
        },
        th: {
            institution: "วิทยาลัยอาชีวศึกษาสระบุรี",
            degree: "ประกาศนียบัตรวิชาชีพ สาขางานบริหารธุรกิจ",
            field: "คอมพิวเตอร์ธุรกิจ",
            gpax: "3.6",
            startYear: "2561",
            endYear: "2564",
        },
        logo: {
            src: "https://www.rsc.ac.th/2019/images/18623367_1913520942223834_5291903855962878385_o.jpg",
            alt: "Saraburi Vocational College logo",
            loading: "lazy",
        },
    },
];
