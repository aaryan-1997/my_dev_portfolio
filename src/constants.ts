import { Project, Skill, Experience, Service, Testimonial } from './types';

export const DEVELOPER_NAME = "Ram Niwas Singh";
export const DEVELOPER_TITLE = "Senior Flutter Developer";

export const SOCIAL_LINKS = {
  github: "https://github.com/aaryan-1997",
  linkedin: "https://www.linkedin.com/in/ram-niwas-singh-ab642a164/",
  email: "mailto:aryan9499@gmail.com",
  resume: "#" // Placeholder until provided
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Ecomly - Full Stack E-commerce',
    description: 'A complete e-commerce solution with a Flutter frontend and a robust backend server.',
    techStack: ['Flutter', 'Dart', 'Node.js', 'Express', 'MongoDB', 'GetX'],
    features: ['Server-side Logic', 'Product Management', 'Cart & Checkout Flow'],
    problemSolved: 'Built a scalable backend to handle high-traffic product requests and secure user data.',
    impact: 'Demonstrated full-stack capabilities by managing both mobile UI and server infrastructure.',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/aaryan-1997/ecomly_server',
    demoUrl: '#'
  },
  {
    id: '2',
    title: 'Flutter News App',
    description: 'A real-time news application fetching data from multiple global sources.',
    techStack: ['Flutter', 'REST API', 'Provider', 'NewsAPI', 'JSON Serialization'],
    features: ['Category Filtering', 'Search Functionality', 'Offline Caching'],
    problemSolved: 'Optimized API calls and implemented efficient state management for a smooth reading experience.',
    impact: 'Achieved high performance and low latency in data fetching.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/aaryan-1997/flutter_news',
    demoUrl: '#'
  },
  {
    id: '3',
    title: 'Rythem Music Player',
    description: 'A sleek and modern music player with local file support and beautiful UI animations.',
    techStack: ['Flutter', 'Audio Service', 'Just Audio', 'Custom Animations', 'BLoC'],
    features: ['Playlist Management', 'Background Playback', 'Dynamic UI Themes'],
    problemSolved: 'Handled complex audio states and background services to ensure uninterrupted playback.',
    impact: 'Highly rated for its intuitive UI and smooth transitions.',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/aaryan-1997/rythem_music',
    demoUrl: '#'
  },
  {
    id: '4',
    title: 'Custom TimeTile Library',
    description: 'A reusable Flutter package for creating custom timeline tiles with ease.',
    techStack: ['Flutter', 'Dart', 'Package Development', 'Custom Painting'],
    features: ['Highly Customizable', 'Lightweight', 'Easy Integration'],
    problemSolved: 'Created a flexible solution for developers to build complex timelines without boilerplate code.',
    impact: 'Open-sourced on GitHub for the Flutter community to use and contribute.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/aaryan-1997/custom_timetile',
    demoUrl: '#'
  },
  {
    id: '5',
    title: 'TaskMaster Pro',
    description: 'A comprehensive task management app with offline support and cloud synchronization.',
    techStack: ['Flutter', 'SQLite', 'Firebase', 'Riverpod'],
    features: ['Offline First', 'Real-time Sync', 'Push Notifications'],
    problemSolved: 'Solved the issue of data loss during poor connectivity by implementing a robust offline-first architecture.',
    impact: 'Improved user productivity by providing a reliable tool that works anywhere.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/aaryan-1997/taskmaster_pro',
    demoUrl: '#'
  },
  {
    id: '6',
    title: 'HealthTrack AI',
    description: 'An AI-powered fitness tracker that provides personalized workout and nutrition plans.',
    techStack: ['Flutter', 'TensorFlow Lite', 'HealthKit', 'Google Fit'],
    features: ['AI Recommendations', 'Activity Tracking', 'Meal Planning'],
    problemSolved: 'Used machine learning to provide truly personalized fitness advice based on user activity data.',
    impact: 'Helped users achieve their fitness goals faster with data-driven insights.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/aaryan-1997/healthtrack_ai',
    demoUrl: '#'
  },
  {
    id: '7',
    title: 'SocialConnect',
    description: 'A feature-rich social media platform with real-time messaging and media sharing.',
    techStack: ['Flutter', 'Firebase Auth', 'Cloud Firestore', 'Cloud Storage'],
    features: ['Real-time Chat', 'Post Sharing', 'User Profiles'],
    problemSolved: 'Built a scalable real-time messaging system using Firestore snapshots and optimized image uploads.',
    impact: 'Created an engaging platform for users to connect and share experiences.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/aaryan-1997/social_connect',
    demoUrl: '#'
  },
  {
    id: '8',
    title: 'Vehicle Tracking System',
    description: 'A real-time vehicle tracking application providing live location updates, route history, and geofencing alerts.',
    techStack: ['Flutter', 'Google Maps API', 'WebSockets', 'Firebase'],
    features: ['Live Location Tracking', 'Geofencing', 'Route History'],
    problemSolved: 'Enabled fleet managers to monitor vehicles in real-time, improving operational efficiency and security.',
    impact: 'Reduced unauthorized vehicle usage and improved delivery times.',
    image: 'https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/aaryan-1997',
    demoUrl: '#'
  },
  {
    id: '9',
    title: 'Parking Booking App',
    description: 'A smart parking solution allowing users to find, reserve, and pay for parking spots in advance.',
    techStack: ['Flutter', 'Node.js', 'Stripe', 'MongoDB'],
    features: ['Spot Reservation', 'Digital Payments', 'Navigation to Spot'],
    problemSolved: 'Alleviated urban parking congestion by providing a seamless booking experience.',
    impact: 'Saved users an average of 15 minutes per parking search.',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/aaryan-1997',
    demoUrl: '#'
  },
  {
    id: '10',
    title: 'Route Sale Management',
    description: 'A comprehensive app for field sales teams to manage daily routes, orders, and customer interactions.',
    techStack: ['Flutter', 'REST API', 'SQLite', 'Provider'],
    features: ['Route Optimization', 'Order Management', 'Offline Support'],
    problemSolved: 'Streamlined the sales process for field agents working in areas with poor network connectivity.',
    impact: 'Increased daily sales visits by 20% through optimized routing.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/aaryan-1997',
    demoUrl: '#'
  },
  {
    id: '11',
    title: 'BLE / IoT Controller',
    description: 'An IoT application that connects to and controls Bluetooth Low Energy (BLE) devices.',
    techStack: ['Flutter', 'Flutter Blue', 'IoT', 'Dart'],
    features: ['Device Discovery', 'Real-time Data Sync', 'Remote Control'],
    problemSolved: 'Created a unified interface for managing multiple smart devices seamlessly.',
    impact: 'Enhanced user experience for smart home and industrial IoT users.',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/aaryan-1997',
    demoUrl: '#'
  },
  {
    id: '12',
    title: 'Expense Tracker Pro',
    description: 'A personal finance application to track daily expenses, categorize spending, and generate visual reports.',
    techStack: ['Flutter', 'Hive', 'Charts', 'GetX'],
    features: ['Expense Categorization', 'Visual Analytics', 'Budget Alerts'],
    problemSolved: 'Helped users gain better control over their finances with intuitive data visualization.',
    impact: 'Empowered thousands of users to save money through better budget tracking.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/aaryan-1997',
    demoUrl: '#'
  },
  {
    id: '13',
    title: 'E-book Application',
    description: 'A comprehensive e-book reading application with a vast library, offline reading capabilities, and customizable reading preferences.',
    techStack: ['Flutter', 'Dart', 'Provider', 'REST API'],
    features: ['Offline Reading', 'Customizable Themes', 'Bookmarking'],
    problemSolved: 'Provided a seamless and accessible reading experience for users on the go.',
    impact: 'Enhanced user engagement and reading habits through an intuitive interface.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/aaryan-1997/e-book-applicatiom',
    demoUrl: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Flutter & Dart', icon: 'Smartphone', category: 'Frontend' },
  { name: 'State Management (BLoC/GetX)', icon: 'Layers', category: 'Frontend' },
  { name: 'REST API Integration', icon: 'Globe', category: 'Backend' },
  { name: 'Firebase & Cloud Services', icon: 'Flame', category: 'Backend' },
  { name: 'Node.js & Express', icon: 'Server', category: 'Backend' },
  { name: 'MongoDB', icon: 'Database', category: 'Backend' },
  { name: 'Google Maps API', icon: 'Map', category: 'Frontend' },
  { name: 'Responsive UI Design', icon: 'Layout', category: 'Frontend' },
  { name: 'Custom Animations', icon: 'Zap', category: 'Frontend' },
  { name: 'Package Development', icon: 'Box', category: 'Tools' },
  { name: 'Git & Version Control', icon: 'GitBranch', category: 'Tools' }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Senior Flutter Developer',
    company: 'Freelance / Open Source Contributor',
    duration: '2022 - Present',
    achievements: [
      'Architected and developed complex mobile applications using Flutter and Dart.',
      'Published and maintained open-source Flutter packages like custom_timetile.',
      'Implemented advanced state management solutions using BLoC and GetX for large-scale apps.',
      'Integrated real-time features using WebSockets and Firebase for live data synchronization.'
    ],
    technologies: ['Flutter', 'Dart', 'BLoC', 'GetX', 'Firebase', 'Node.js']
  },
  {
    role: 'Flutter Developer',
    company: 'Mobile App Agency',
    duration: '2020 - 2022',
    achievements: [
      'Developed and deployed 15+ mobile applications for iOS and Android platforms.',
      'Collaborated with cross-functional teams to deliver high-quality, responsive user interfaces.',
      'Optimized app performance and reduced bundle sizes by 20% through code refactoring.',
      'Integrated third-party APIs and payment gateways (Stripe, Razorpay) for e-commerce solutions.'
    ],
    technologies: ['Flutter', 'Dart', 'REST APIs', 'Provider', 'SQLite', 'Git']
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Mobile App Development',
    description: 'Building high-performance, native-quality apps for iOS and Android using Flutter.',
    icon: 'Smartphone'
  },
  {
    title: 'API Integration',
    description: 'Seamlessly connecting your mobile app with complex backend systems and third-party services.',
    icon: 'Link'
  },
  {
    title: 'Real-time Tracking',
    description: 'Implementing advanced Google Maps and WebSocket solutions for live location tracking.',
    icon: 'Navigation'
  },
  {
    title: 'Performance Optimization',
    description: 'Auditing and fixing performance bottlenecks to ensure smooth 60fps animations.',
    icon: 'Zap'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Siddharth Mehta',
    role: 'Founder at Ecomly',
    content: 'Ram delivered our full-stack e-commerce solution with exceptional quality. His expertise in both Flutter and Node.js was key to our success.',
    avatar: 'https://i.pravatar.cc/150?u=siddharth'
  },
  {
    name: 'Anjali Sharma',
    role: 'Product Lead at NewsStream',
    content: 'The news app Ram built for us is incredibly fast and smooth. His attention to detail and performance optimization is outstanding.',
    avatar: 'https://i.pravatar.cc/150?u=anjali'
  }
];
