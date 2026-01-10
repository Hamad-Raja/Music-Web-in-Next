🎵 Music Academy

A modern Music Academy web application built with Next.js, featuring interactive 3D course cards, a responsive navigation menu, dark/light mode support, and a contact form.

This project is perfect for showcasing music courses, allowing users to explore, view, and enroll in courses.

🚀 Features

Next.js 13 App Router for server-side rendering and routing

Interactive 3D Course Cards with hover animations

Responsive Navbar with dropdown menu for courses

Dark Mode / Light Mode support

Contact Form to collect inquiries and enrollment requests

Fully responsive for mobile, tablet, and desktop

Built using Tailwind CSS and Shadcn/UI components

🛠 Tech Stack

Next.js 13 – React framework for building modern web apps

TypeScript – Type-safe development

Tailwind CSS – Utility-first styling

Shadcn/UI – Prebuilt accessible UI components

Motion / Framer Motion – Smooth animations for 3D cards

React Hooks – State management for menu interactions and forms

📂 Project Structure
src/
 └─ app/
     ├─ home/
     │   └─ page.tsx           # Home page
     ├─ courses/
     │   └─ page.tsx           # All courses page with 3D cards
     ├─ contact/
     │   └─ page.tsx           # Contact page with form
     ├─ layout.tsx             # Global layout (Navbar, footer)
 └─ components/
     └─ ui/
         └─ 3d-card.tsx        # 3D card components
         └─ navbar-menu.tsx    # Navbar components
 └─ data/
     └─ courses-data.json      # Courses metadata (title, description, image)

⚡ Getting Started

Clone the repository:

git clone <your-repo-url>
cd music-academy


Install dependencies:

npm install
# or
yarn
# or
pnpm install


Run the development server:

npm run dev
# or
yarn dev
# or
pnpm dev


Open http://localhost:3000
 in your browser to view the project.