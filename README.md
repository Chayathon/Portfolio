# Chayathon Portfolio

Portfolio website for Chayathon, built with Nuxt 4 and Vue 3 + TypeScript.

## English

## Tech Stack

- Nuxt 4
- Vue 3 + TypeScript
- Nuxt UI
- Tailwind CSS 4
- @nuxtjs/i18n (English/Thai)
- motion-v (animation)
- three.js (3D/interactive background)
- ESLint

## Features

- Single-page portfolio layout
- Bilingual support: English and Thai
- Light/Dark theme toggle
- Structured sections:
    - About Me
    - Skills
    - Projects
    - Work Experience
    - Education
    - Contacts
- Shareable project showcase so others can easily view selected work
- Data layer separated from UI components for easier content updates

## Project Structure

```text
app/
  components/
    App/           # reusable UI cards, header, footer, modal, toggles
    Landing/       # page sections for the landing page
  data/            # portfolio content (about, skills, projects, etc.)
  assets/css/      # global styles
  pages/           # routes
  layouts/         # app layouts
i18n/locales/      # translation files (en.json, th.json)
```

---

เว็บไซต์ Portfolio ส่วนตัวของ Chayathon รองรับสองภาษา พัฒนาด้วย Nuxt 4 และ Vue 3 + TypeScript

## ฟีเจอร์

- โครงสร้างหน้าแบบ single-page portfolio
- รองรับ 2 ภาษา: English และ Thai
- สลับธีม Light/Dark
- แสดงข้อมูลเป็นหมวดชัดเจน:
    - About Me
    - Skills
    - Projects
    - Work Experience
    - Education
    - Contacts
- แชร์โปรเจกต์ให้คนอื่นเข้าชมได้ง่าย
- แยก data layer ออกจาก component เพื่อแก้ไขเนื้อหาได้ง่าย

## License

This project is for personal portfolio use.
