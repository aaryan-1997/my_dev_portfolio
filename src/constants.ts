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
    image: 'https://picsum.photos/seed/ecomly/800/600',
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
    image: 'https://picsum.photos/seed/news/800/600',
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
    image: 'https://picsum.photos/seed/music/800/600',
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
    image: 'https://picsum.photos/seed/timeline/800/600',
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
    image: 'https://picsum.photos/seed/taskmaster/800/600',
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
    image: 'https://picsum.photos/seed/health/800/600',
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
    image: 'https://picsum.photos/seed/social/800/600',
    githubUrl: 'https://github.com/aaryan-1997/social_connect',
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
