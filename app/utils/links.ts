import type { NavigationMenuItem } from "@nuxt/ui";

export const CONTACT_LINKS = {
    email: "mailto:gusgus157903@gmail.com",
    linkedin: "https://www.linkedin.com/in/chayathon-termpipatphong/",
    github: "https://github.com/Chayathon",
    phone: "tel:0957079861",
    resume: "https://1drv.ms/b/c/af11a9a596620dd4/IQBKRTmwnOywTZJ6cnY_DQLYAcGq9CdvlBjVg4XAV-p5kZM?e=eKJ4df",
} as const;

export const FOOTER_LINKS = [
    {
        icon: "i-simple-icons-gmail",
        to: CONTACT_LINKS.email,
        target: "_blank",
        "aria-label": "Email to Chayathon",
    },
    {
        icon: "i-simple-icons-linkedin",
        to: CONTACT_LINKS.linkedin,
        target: "_blank",
        "aria-label": "Chayathon on LinkedIn",
    },
    {
        icon: "i-simple-icons-github",
        to: CONTACT_LINKS.github,
        target: "_blank",
        "aria-label": "Chayathon on GitHub",
    },
    {
        icon: "i-mynaui-telephone-solid",
        to: CONTACT_LINKS.phone,
        target: "_blank",
        "aria-label": "Call Chayathon",
    },
] as const;

export const useNavLinks = () => {
    const { t } = useI18n();

    const navLinks = computed<NavigationMenuItem[]>(() => [
        {
            label: t("nav.aboutme"),
            to: "/#aboutme",
        },
        {
            label: t("nav.skills"),
            to: "/#skills",
        },
        {
            label: t("nav.projects"),
            to: "/#projects",
        },
        {
            label: t("nav.workexperience"),
            to: "/#workexperience",
        },
        {
            label: t("nav.education"),
            to: "/#education",
        },
        {
            label: t("nav.contact"),
            to: "/#contact",
        },
    ]);

    return { navLinks };
};
