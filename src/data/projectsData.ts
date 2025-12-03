import JoinUpImage from "../assets/projects/JoinUp.png"
import ChatApplicationImage from "../assets/projects/ChatApplication.jpg"
import PortfolioWebsiteImage from "../assets/projects/portfolio.jpg"
import ArtifyAIImage from "../assets/AtifyAI/snow.png"

// ArtifyAI additional images
import ArtifyAIImage2 from "../assets/AtifyAI/Screenshot 2025-12-03 131108.jpg"
import ArtifyAIImage3 from "../assets/AtifyAI/Screenshot 2025-12-03 131154.jpg"
import ArtifyAISticker1 from "../assets/AtifyAI/sticker-1 (10).png"
import ArtifyAISticker2 from "../assets/AtifyAI/sticker-1 (16).png"

// MiniAI Bot images
import MiniAIBotImage1 from "../assets/GeminiBot/image_2025-12-03_14-37-58.png"
import MiniAIBotImage2 from "../assets/GeminiBot/image_2025-12-03_14-41-41.png"

// Volta Footwear E-Commerce images
import VoltaImage1 from "../assets/E_Commerce/image_2025-12-03_19-03-29.png"
import VoltaImage2 from "../assets/E_Commerce/image_2025-12-03_19-03-53.png"
import VoltaImage3 from "../assets/E_Commerce/image_2025-12-03_19-04-24.png"
import VoltaImage4 from "../assets/E_Commerce/image_2025-12-03_19-04-58.png"

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  screenshots?: string[];
  additionalImages?: string[];
  skills: string[];
  features?: string[];
  challenges?: string[];
  learnings?: string[];
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "artify-ai",
    title: "ArtifyAI",
    shortDescription: "Built a responsive AI-powered web application that transforms your photos into different artistic styles.",
    fullDescription: "ArtifyAI is an innovative web application that leverages artificial intelligence to transform ordinary photos into stunning artistic masterpieces. The application uses advanced AI models to apply various artistic styles, from classic paintings to modern digital art, giving users the power to reimagine their photos in creative ways.",
    image: ArtifyAIImage,
    screenshots: [
      ArtifyAIImage2,
      ArtifyAIImage3
    ],
    additionalImages: [
      ArtifyAIImage,
      ArtifyAISticker1,
      ArtifyAISticker2
    ],
    skills: ['React', 'FastAPI', 'Tailwind', 'Cloudinary'],
    features: [
      "Real-time image transformation with multiple artistic styles",
      "Cloud-based image storage and processing with Cloudinary",
      "Responsive design that works seamlessly across all devices",
      "Fast API backend for efficient image processing",
    ],
    challenges: [
      "Optimizing image processing speed for large files",
      "Implementing efficient caching strategies for transformed images",
      "Managing state across multiple transformation requests",
      "Ensuring responsive design with image-heavy content"
    ],
    learnings: [
      "Deep dive into AI model integration with web applications",
      "Advanced React patterns for handling asynchronous operations",
      "Cloud storage optimization techniques with Cloudinary",
      "FastAPI best practices for building scalable backends"
    ],
    // liveUrl: "https://artifyai.example.com",
    githubUrl: "https://github.com/sreylinchey99/AI-Sticker-Tools"
  },
  {
    id: "gemini-bot",
    title: "AI Chat Application",
    shortDescription: "A modern, feature AI chatbot application built with React and FastAPI, powered by Google's Gemini AI. Experience seamless conversations with an intelligent AI assistant through a beautiful, animated user interface.",
    fullDescription: "Chatbot application that provides seamless conversations with Google's Gemini AI. The application features a beautiful glassmorphism design with smooth animations, real-time word-by-word typing effects, and comprehensive chat history management built with React and FastAPI.",
    image: MiniAIBotImage1,
    screenshots: [
      MiniAIBotImage1,
      MiniAIBotImage2
    ],
    skills: ['React', 'FastAPI', 'Google Gemini AI','Vite'],
    features: [
      "Real-time AI conversations powered by Google Gemini",
      "Chat history management, delete history.",
      "Simple and Smooth User interface enhancing user experience",
      "Responsive layout that works on desktop, tablet, and mobile"
    ],
    challenges: [
      "Implementing real-time word-by-word typing animation for natural conversation flow",
      "Managing complex state with Context API for chat history and UI controls",
      "Creating smooth pause/resume functionality for streaming AI responses",
      "Optimizing animations and rendering for performance across devices",
      "Designing responsive glassmorphism UI that works on all screen sizes"
    ],
    learnings: [
      "Advanced React patterns with Context API for global state management",
      "FastAPI integration with Google Gemini AI for real-time streaming responses",
      "CSS3 advanced animations and transitions for modern UI/UX",
      "Building responsive chat interfaces with smooth user interactions",
      "Error handling and loading states for better user experience"
    ],
    githubUrl: "https://github.com/sreylinchey99/Gemini-Bot"
  },
  {
    id: "volta-footwear",
    title: "Volta Footwear - E-Commerce Website",
    shortDescription: "A modern, minimalist e-commerce website for Volta Footwear, featuring a clean design aesthetic and smooth user experience. Built with React and TypeScript.",
    fullDescription: "Volta Footwear is a premium e-commerce platform designed to showcase and sell high-quality footwear. The website features a minimalist design philosophy that emphasizes product presentation and user experience. The project demonstrates modern web development practices including component-based architecture, state management, responsive design, and performance optimization.",
    image: VoltaImage1,
    screenshots: [
      VoltaImage2,
      VoltaImage3,
      VoltaImage4
    ],
    additionalImages: [
      VoltaImage1
    ],
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
    features: [
      "Minimalist design with clean, modern interface emphasizing product presentation",
      "Fully responsive design that works seamlessly on desktop, tablet, and mobile",
      "Smooth animations including fade-in, slide, and hover effects",
    ],
    challenges: [
      "Implementing complex shopping cart state management with Context API",
      "Creating smooth animations and transitions without performance issues",
      "Designing responsive layouts that work across all device sizes",
      "Managing product data and filtering functionality efficiently",
      "Implementing persistent cart storage with localStorage synchronization"
    ],
    learnings: [
      "Advanced React patterns with TypeScript for type-safe development",
      "State management using React Context API for global cart state",
      "Tailwind CSS utility-first approach for rapid UI development",
      "Client-side routing and navigation with React Router",
      "Building responsive e-commerce interfaces with modern design principles"
    ],
    videoUrl: "https://drive.google.com/file/d/1URiU-nd4c4nuY-aN0MZtq4wZq5fe9nB7/view?usp=sharing",
    githubUrl: "https://github.com/sreylinchey99/Shoes_Ecommerce"
  },
  {
    id: "joinup",
    title: "JoinUp – Social Events Management App",
    shortDescription: "Discovering and managing social events with AI-powered natural language queries. Flask backend deployed on Render.",
    fullDescription: "JoinUp is a social events management application that revolutionizes how people discover and organize events. Using AI-powered natural language processing, users can search for events using conversational queries, making event discovery intuitive and effortless. The app features a Flutter mobile interface with a robust Flask backend.",
    image: JoinUpImage,
    skills: ['Flutter', 'GeminiAI', 'Pickaxe', 'Flask', 'Render'],
    features: [
      "AI-powered natural language event search using GeminiAI",
      "Cross-platform mobile app built with Flutter",
      "Real-time event updates and notifications",
      "User authentication and profile management",
      "Event creation and management tools",
      "Social features for connecting with other attendees"
    ],
    challenges: [
      "Integrating GeminiAI for accurate natural language understanding",
      "Optimizing Flutter performance for smooth animations",
      "Deploying and scaling Flask backend on Render",
      "Implementing real-time features with limited resources"
    ],
    learnings: [
      "Flutter development for cross-platform mobile apps",
      "AI integration for natural language processing",
      "Backend deployment and DevOps with Render",
      "Building scalable REST APIs with Flask"
    ],
    liveUrl: "https://joinup.example.com",
    githubUrl: "https://github.com/sreylinchey99/joinup"
  },
  {
    id: "chat-application",
    title: "Chat Application",
    shortDescription: "Built web-based chat application with React TypeScript with Vite and Tailwind CSS. Built reusable atomic components following Atomic Design principles to ensure consistency and speed up feature delivery.",
    fullDescription: "A modern, real-time chat application built with React and TypeScript, featuring a clean and intuitive interface. The application follows Atomic Design principles to create a scalable and maintainable component architecture. Firebase powers the real-time messaging capabilities, ensuring instant message delivery and synchronization across all connected clients.",
    image: ChatApplicationImage,
    skills: ['React', 'Vite', 'Tailwind', 'Firebase'],
    features: [
      "Real-time messaging with Firebase Realtime Database",
      "User authentication and profile management",
      "Private and group chat functionality",
      "Message read receipts and typing indicators",
      "Emoji support and rich text formatting",
      "Responsive design with Tailwind CSS",
      "Component library built with Atomic Design principles"
    ],
    challenges: [
      "Managing real-time state synchronization across multiple users",
      "Implementing efficient message pagination for large chat histories",
      "Creating a reusable component system following Atomic Design",
      "Optimizing Firebase queries for performance"
    ],
    learnings: [
      "Advanced React patterns and TypeScript best practices",
      "Firebase Realtime Database optimization techniques",
      "Atomic Design methodology for scalable component architecture",
      "Building performant real-time applications"
    ],
    liveUrl: "https://chat-app.example.com",
    githubUrl: "https://github.com/sreylinchey99/chat-application"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    shortDescription: "A modern, responsive portfolio website showcasing my projects and skills.",
    fullDescription: "This portfolio website serves as a comprehensive showcase of my work, skills, and experience as a developer. Built with React and TypeScript, it features a clean, modern design with smooth animations and transitions. The site is fully responsive and optimized for performance, providing an excellent user experience across all devices.",
    image: PortfolioWebsiteImage,
    skills: ['React', 'TypeScript', 'Vite', 'CSS'],
    features: [
      "Smooth scroll animations and transitions",
      "Responsive design that works on all devices",
      "Interactive project showcase with detailed views",
      "About section with professional background",
      "Contact form with email integration",
      "Optimized performance and SEO"
    ],
    challenges: [
      "Creating smooth scroll interactions without performance issues",
      "Designing a layout that works well on all screen sizes",
      "Implementing intersection observers for scroll-based animations",
      "Optimizing images and assets for fast loading"
    ],
    learnings: [
      "Advanced CSS techniques for animations and layouts",
      "Performance optimization strategies for React applications",
      "Accessibility best practices for web applications",
      "Modern web design principles and UX patterns"
    ],
    githubUrl: "https://github.com/sreylinchey99/portfolio"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find(project => project.id === id);
};

