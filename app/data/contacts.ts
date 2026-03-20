import { CONTACT_LINKS } from "../utils/links";

export type Contact = {
    label: string;
    value?: string;
    icon: string;
    link: string;
    bgClass: string;
    action: string;
};

export const contacts: Contact[] = [
    {
        label: "Email",
        value: "gusgus157903@gmail.com",
        icon: "i-simple-icons-gmail",
        link: CONTACT_LINKS.email,
        bgClass:
            "bg-gradient-to-br from-red-500 to-red-600 group-hover:from-red-600 group-hover:to-red-700",
        action: "sendEmail",
    },
    {
        label: "LinkedIn",
        value: "Chayathon Termpipatphong",
        icon: "i-simple-icons-linkedin",
        link: CONTACT_LINKS.linkedin,
        bgClass:
            "bg-gradient-to-br from-blue-600 to-blue-700 group-hover:from-blue-700 group-hover:to-blue-800",
        action: "visitProfile",
    },
    {
        label: "GitHub",
        value: "@Chayathon",
        icon: "i-simple-icons-github",
        link: CONTACT_LINKS.github,
        bgClass:
            "bg-gradient-to-br from-gray-700 to-gray-800 group-hover:from-gray-800 group-hover:to-gray-900 dark:from-gray-600 dark:to-gray-700",
        action: "visitProfile",
    },
    {
        label: "Phone",
        value: "095 707 9861",
        icon: "i-mynaui-telephone-solid",
        link: CONTACT_LINKS.phone,
        bgClass:
            "bg-gradient-to-br from-green-500 to-green-600 group-hover:from-green-600 group-hover:to-green-700",
        action: "callNow",
    },
];

export const resume: Contact = {
    label: "Resume",
    icon: "i-lucide-file-user",
    link: CONTACT_LINKS.resume,
    bgClass:
        "bg-gradient-to-br from-purple-500 to-purple-600 group-hover:from-purple-600 group-hover:to-purple-700",
    action: "download",
};
