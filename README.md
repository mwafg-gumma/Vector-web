⚡️ VELOCITY Hub: Electric Scooter Web App 🛵
🚀 Overview
This project is a modern, responsive website built to showcase electric scooter products and services. It emphasizes a fast, clean user interface powered by React and styled exclusively with Tailwind CSS. A key feature is the continuous scrolling display of partner brand logos using the specialized react-fast-marquee library.

✨ Key Features
Fully Responsive Design: Implemented with a mobile-first approach using Tailwind's utility classes (sm:, lg:) to ensure optimal viewing across all device types.

Smooth Logo Scroll: Utilizes the react-fast-marquee library to create a dynamic, continuously scrolling section for displaying trusted partner logos.

Modern Component Architecture: Built with functional React components and Hooks for efficient state management and reusability.

Interactive Modals: Features a state-controlled enrollment form that appears as a modal overlay (e.g., the EnrollmentForm component).

Fast Development: Leverages Vite for incredibly fast cold starts and module replacement during development.

🛠️ Tech Stack & Dependencies
The following technologies and specialized libraries are used in this project:

| Category | Technology | Description | Link |
| Framework | React | Core library for building the user interface. |  |
| Build Tool | Vite | Modern frontend build tool for speed and efficiency. |  |
| Styling | Tailwind CSS | A utility-first CSS framework for rapid, responsive design. | https://tailwindcss.com/ |
| Slider | react-fast-marquee | A high-performance, lightweight component for continuous, fast-scrolling content (used for brand logos). | https://www.npmjs.com/package/react-fast-marquee |

⚙️ Getting Started
Follow these steps to set up the project locally for development and testing.

Prerequisites
Ensure you have Node.js (version 16 or higher) and npm/yarn installed on your machine.

Installation
Clone the Repository:

git clone [YOUR_REPOSITORY_URL]
cd scooter-website


Install Node Dependencies:

npm install
# or
yarn install


Run the Development Server:
Vite will start the development server, typically accessible at http://localhost:5173.

npm run dev
# or
yarn dev


📂 Project Structure
The codebase follows a standard React/Vite structure, detailing all custom components:

<pre>
scooter-website/
├── src/
│   ├── assets/                 # Static images (scooter, logos, icons)
│   ├── components/
│   │   ├── NavBar.jsx          # Top navigation bar
│   │   ├── Hero.jsx            # Main landing section content
│   │   ├── Card.jsx            # Reusable card component (e.g., for features)
│   │   ├── Blog.jsx            # Component for displaying blog or news articles
│   │   ├── Contact.jsx         # Contact and inquiry form section
│   │   ├── EnrollmentForm.jsx  # The sign-up modal component
│   │   ├── Slider.jsx          # Component containing the react-fast-marquee implementation
│   │   └── Gallery.jsx         # Component for image display
│   ├── App.jsx                 # Main application structure and state management
│   ├── main.jsx                # Entry point (React rendering)
│   └── index.css               # Imports Tailwind base directives
├── public/                     # Files copied directly to the build root
└── package.json                # Project dependencies and scripts

</pre>

💡 Component Focus: Slider.jsx
The main slider component (Slider.jsx) utilizes react-fast-marquee to ensure a smooth, continuous loop of partner logos without jitter or pausing.

Implementation Example:

import Marquee from 'react-fast-marquee';
<pre>

// ... inside the Slider component
<Marquee speed={50} gradient={false}>
  {/* Map through your logos here */}
  {scooterLogos.map((logo) => (
    <img 
      key={logo.id} 
      src={logo.src} 
      alt={logo.alt} 
      className="h-12 w-auto mx-10 grayscale opacity-70 transition hover:opacity-100" 
    />
  ))}
</Marquee>
</pre>


🚢 Production Build
To prepare the application for deployment:

npm run build
# or
yarn build


The optimized, minified files will be generated in the dist/ directory.