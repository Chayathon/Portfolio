import { CONTACT_LINKS, FOOTER_LINKS } from "./utils/links";

export default defineAppConfig({
    global: {
        picture: {
            dark: "https://avatars.githubusercontent.com/u/79907044?s=400&u=52d03b45cb429a5add799d6ca698b663708bb9e0&v=4",
            light: "https://avatars.githubusercontent.com/u/79907044?s=400&u=52d03b45cb429a5add799d6ca698b663708bb9e0&v=4",
            alt: "My profile picture",
        },
        email: CONTACT_LINKS.email,
        available: true,
    },
    ui: {
        colors: {
            primary: "blue",
            secondary: "indigo",
            neutral: "neutral",
        },
        pageHero: {
            slots: {
                container: "py-18 sm:py-24 lg:py-32",
                title: "mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl",
                description:
                    "mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted",
            },
        },
        pageSection: {
            slots: {
                title: "text-shadow-lg",
            },
        },
        button: {
            slots: {
                base: "cursor-pointer rounded-lg",
            },
        },
    },
    footer: {
        credits: `© ${new Date().getFullYear()} Chayathon Termpipatphong`,
        colorMode: false,
        links: [...FOOTER_LINKS],
    },
});
