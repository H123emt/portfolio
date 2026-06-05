// ─── PROJECTS DATA ────────────────────────────────────────────────────────────
// Add, remove, or update projects here. UI auto-adapts.

export const projects = [
  {
    id: "fit-dish",
    title: "FIT-DISH",
    description:
      "A smart diet planning application that helps users create weekly, monthly, or yearly meal plans based on their budget, health conditions, and fitness goals such as weight loss, weight gain, or maintaining a healthy lifestyle.",

    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    image: "/fitdish1.png",
    github: "https://github.com/H123emt/fit_dish",
    liveDemo: "https://fit-dish.vercel.app/",
    featured: true,
    detailedContent: {
      overview:
        "FIT-DISH is a full-stack diet planning platform designed to provide personalized meal recommendations based on a user's budget, health conditions, and fitness objectives. The system helps users maintain healthier eating habits through structured and customizable meal plans.",

      problem:
        "Many individuals struggle to create affordable and nutritionally balanced diet plans that align with their health conditions and fitness goals. Existing solutions often lack personalization and budget-aware recommendations.",

      solution:
        "Developed a personalized diet planning system that generates weekly, monthly, and yearly meal plans based on user preferences, budget constraints, nutritional requirements, and goals such as weight loss or weight gain.",

      architecture:
        "Built using React.js and Tailwind CSS for the frontend, Node.js and Express.js for the backend API layer, and MongoDB for storing user profiles, meal plans, and nutritional data. The application follows a client-server architecture with RESTful APIs.",

      features: [
        "Personalized meal planning based on fitness goals",
        "Budget-friendly diet recommendations",
        "Weekly, monthly, and yearly diet schedules",
        "Health condition-aware food suggestions",
        "Nutritional analysis including protein and vitamins",
        "Responsive and user-friendly interface",
        "Secure user data management with MongoDB",
        "Dynamic meal plan generation",
      ],
      screenshots: [],
    },
  },
  {
    id: "education-management-system",
    title: "Education Management System",
    description:
      "A comprehensive education management platform designed to streamline academic administration, including student enrollment, attendance tracking, faculty management, grade management, and class scheduling.",
    technologies: ["Java", "MySQL", "HTML", "CSS", "JavaScript"],

    image: null,
    github: "https://github.com/H123emt/Education_Management_System",
    liveDemo: null,
    featured: false,
    detailedContent: {
      overview:
        "The Education Management System is a desktop/web-based application developed to simplify and automate educational institution operations. It provides a centralized platform for managing students, faculty, attendance, academic records, and scheduling activities efficiently.",

      problem:
        "Educational institutions often rely on manual processes or disconnected systems to manage student records, attendance, faculty activities, and academic performance, leading to inefficiencies and data management challenges.",

      solution:
        "Developed a centralized management system that automates key academic and administrative processes, enabling institutions to manage student enrollment, attendance, faculty information, grades, and schedules through a user-friendly interface.",

      architecture:
        "Built using Java for business logic and application functionality, MySQL for database management, and HTML, CSS, and JavaScript for the user interface. The system follows a modular architecture with separate layers for data management, business logic, and presentation.",

      features: [
        "Student enrollment and profile management",
        "Faculty information and activity management",
        "Attendance tracking and monitoring",
        "Grade and academic performance management",
        "Class and timetable scheduling",
        "Centralized database management with MySQL",
        "User-friendly and responsive interface",
        "Efficient academic record maintenance",
      ],

      screenshots: [],
    },
  },
  {
    id: "home-stay-website",
    title: "Home-Stay Booking Website",
    description:
      "A modern and responsive home-stay booking platform that enables users to explore properties, view accommodation details, and submit booking inquiries through an intuitive and mobile-friendly interface.",

    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide React"],

    image: "/homestay1.png",
    github: "https://github.com/H123emt",
    liveDemo: null,
    featured: false,
    detailedContent: {
      overview:
        "Developed a responsive home-stay booking website using Next.js and modern frontend technologies. The platform provides users with an engaging experience for browsing properties, viewing details, and sending booking inquiries.",

      problem:
        "Many small home-stay businesses lack a modern online presence that allows potential guests to easily discover properties, view accommodation details, and make booking inquiries from any device.",

      solution:
        "Built a fast, responsive, and user-friendly website that showcases available home-stay properties with detailed information and inquiry forms, making it easier for guests to connect with property owners.",

      architecture:
        "Developed using Next.js and TypeScript for performance and scalability, Tailwind CSS for modern responsive styling, and Lucide React for clean and consistent iconography. The application follows a component-based architecture for maintainability and reusability.",

      features: [
        "Responsive and mobile-friendly design",
        "Property listing and showcase pages",
        "Detailed property information display",
        "Booking inquiry forms",
        "Fast page loading with Next.js",
        "Reusable component-based architecture",
        "Modern UI with Tailwind CSS",
        "Cross-device compatibility",
      ],
      screenshots: [],
    },
  },
];
