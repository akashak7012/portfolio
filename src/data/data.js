// src/data/data.js

// Import your project images here
// Example: import nitpyDashboard from '../assets/Frame.jpg';
// Make sure to create an 'assets' folder in 'src' and place your images there.

// I'm using the filenames you provided as placeholders. You should import them properly.
import cortexImage from '../assets/Frame.jpg';
import freshersImage from '../assets/Desktop - 32.jpg';
import dashboardImage from '../assets/Frame.jpg';
import ridoImage from '../assets/Desktop - 65.jpg';
import chefyImage from '../assets/Desktop - 33.jpg';


export const projectData = [
  {
    title: "NIT PY Student Dashboard",
    subtitle: "Academic Management System",
    description: "A user-centric dashboard designed to streamline academic life for students at NIT Puducherry. It features a dynamic weekly timetable, a quick-action module for booking resources and requesting passes, real-time status tracking, and a notification system for important updates like low attendance.",
    tags: ["UI/UX Design", "Full-Stack", "React", "System Design"],
    imageUrl: dashboardImage, // Replaced placeholder
    liveLink: "#", // Replace with your live project link
    background: "linear-gradient(135deg, #1878c7ff 0%, #002d5dff 100%)",
  },
  {
    title: "Freshers Day '25 Portal",
    subtitle: "Event Management Website",
    description: "An immersive, Squid Game-themed registration portal for NIT Puducherry's Freshers' Day. The site was built to drive excitement and engagement, featuring a competitive theme, 'Survive the Games, Claim the Glory!', to create a memorable and high-energy introduction for new students.",
    tags: ["Frontend Dev", "React", "UI/UX Design", "Event Management"],
    imageUrl: freshersImage, // Replaced placeholder
    liveLink: "#", // Replace with your live project link
    background: "linear-gradient(135deg, #f62288ff 0%, #b40f61ff 100%)",
  },
  
  {
    title: "Chefy - Chef Discovery",
    subtitle: "Hyperlocal Food Service Web App",
    description: "A web platform connecting users with professional local chefs for trustworthy, home-cooked meals. Chefy features a location-based search to help users find nearby chefs, offering a healthy and personalized alternative to traditional food delivery services.",
    tags: ["Web App", "Full-Stack", "UI/UX Design", "Geolocation API"],
    imageUrl: chefyImage, // Replaced placeholder
    liveLink: "#", // Replace with your live project link
    background: "linear-gradient(135deg, #20886cff 0%, #025530ff 100%)",
  },
  {
    title: "Rido - Ride Hailing App",
    subtitle: "Mobile App Landing Page",
    description: "A modern and clean marketing landing page designed for 'Rido', a conceptual ride-hailing app. The project focused on creating a strong brand identity and a visually appealing interface to build user trust and drive app downloads through a clear call-to-action.",
    tags: ["UI/UX Design", "Mobile App Design", "Branding", "Marketing"],
    imageUrl: ridoImage, // Replaced placeholder
    liveLink: "#", // Replace with your live project link
    background: "linear-gradient(135deg, #1878c7ff 0%, #002d5dff 100%)",
  },
];