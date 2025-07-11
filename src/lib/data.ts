
export type Faq = {
  category: string;
  questions: {
    question: string;
    answer: string;
  }[];
};

export const faqs: Faq[] = [
  {
    category: "Academics",
    questions: [
      {
        question: "What is the credit system at SRM?",
        answer: "SRM follows a Choice Based Credit System (CBCS). Each course has a specific number of credits, and students need to earn a minimum number of credits to graduate. Typically, 1 credit equals 1 hour of lecture or 2 hours of lab work per week."
      },
      {
        question: "How is the GPA/CGPA calculated?",
        answer: "GPA (Grade Point Average) is calculated for each semester, while CGPA (Cumulative Grade Point Average) is the average for all semesters. It's calculated by summing the product of credits and grade points for each course, then dividing by the total credits."
      },
      {
        question: "What are the different types of courses?",
        answer: "Courses are categorized into Core, Elective (Program and University), and Foundation courses. Core courses are mandatory for your degree, while electives offer a choice to specialize or explore other areas."
      }
    ]
  },
  {
    category: "Exams & Evaluation",
    questions: [
      {
        question: "What is the structure of cycle tests?",
        answer: "Cycle Tests (CTs) are internal assessments conducted during the semester. There are typically two CTs, each carrying a weightage towards your final internal marks. They cover the syllabus taught up to that point."
      },
      {
        question: "How are internal marks calculated?",
        answer: "Internal marks are a combination of your performance in Cycle Tests, assignments, quizzes, and sometimes projects or lab work. The exact breakdown can vary by course and department."
      },
      {
        question: "What is the passing criteria for a course?",
        answer: "To pass a course, you generally need to secure a minimum percentage in both internal and external (end-semester) exams, as well as an overall minimum aggregate percentage. The minimum passing grade is typically an 'E'."
      }
    ]
  },
  {
    category: "Attendance",
    questions: [
      {
        question: "Is 75% attendance mandatory?",
        answer: "Yes, SRM has a strict attendance policy. A minimum of 75% attendance in each course is required to be eligible to write the end-semester examination. Students with attendance between 65% and 74% may be allowed to write the exam after paying a condonation fee, subject to approval."
      },
      {
        question: "How can I check my attendance?",
        answer: "You can check your attendance percentage for each course through the official SRM student portal (Academia)."
      }
    ]
  },
  {
    category: "Hostel & Campus",
    questions: [
      {
        question: "What are the hostel in-times?",
        answer: "Hostel in-times vary based on the year of study and gender. Typically, first-year students have stricter in-times. It is best to check the latest hostel rulebook for precise timings."
      },
      {
        question: "Are there good food options on campus?",
        answer: "Yes, apart from the hostel mess, the campus has a large food court (Java) with multiple outlets, several canteens, and small eateries spread across the campus offering a wide variety of food options."
      }
    ]
  }
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  content: string;
  dataAiHint: string;
  category: string;
  readTime: number;
  tags: string[];
};

export const posts: Post[] = [
  {
    slug: 'surviving-first-year',
    title: 'Complete Guide to Surviving Your First Year at SRM',
    excerpt: 'Essential tips and strategies to make your first year at SRM University successful and memorable.',
    author: 'SRM Guide Team',
    date: '1/15/2024',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'SRM university campus',
    content: "Welcome to SRM University!\n\nStarting your journey at SRM University can be both exciting and overwhelming. This comprehensive guide will help you navigate your first year successfully.\n\n**1. Understanding the Academic System**\nSRM follows a semester-based credit system. Each semester typically lasts 16-18 weeks with regular assessments including:\n- Continuous Assessment (CA): 50 marks\n- End Semester Exam (ESE): 50 marks\n- Minimum 75% attendance required\n\n**2. Managing Your Time Effectively**\nTime management is crucial for academic success. Here are some proven strategies:\n- Create a daily schedule and stick to it\n- Use the Pomodoro Technique for studying\n- Prioritize tasks based on deadlines and importance\n- Take regular breaks to avoid burnout\n\n**3. Making the Most of Campus Life**\nUniversity life isn't just about academics. Here's how to make the most of it:\n- Join clubs that align with your interests\n- Participate in cultural and technical events\n- Build meaningful relationships with peers and faculty\n- Explore leadership opportunities\n\n**4. Preparing for Examinations**\nEffective exam preparation strategies:\n- Start preparation early, don't wait for the last minute\n- Create study groups with classmates\n- Practice previous year question papers\n- Seek help from professors during office hours\n\n**5. Building Professional Skills**\nStart building your professional profile from day one:\n- Learn programming languages relevant to your field\n- Work on personal projects\n- Build a strong LinkedIn profile\n- Apply for internships early\n\n**Conclusion**\nYour first year at SRM is a foundation for your entire university experience. Focus on building good habits, maintaining academic excellence, and making meaningful connections. Remember, every successful student started exactly where you are now.\nGood luck with your journey at SRM University!",
    category: 'First Year Guide',
    readTime: 8,
    tags: ['First Year', 'SRM University', 'Study Tips']
  },
  {
    slug: 'cycle-test-prep',
    title: 'How to Prepare for Cycle Tests: A Complete Strategy',
    excerpt: 'Master the art of cycle test preparation with proven strategies and time management techniques.',
    author: 'Academic Team',
    date: '1/10/2024',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'student studying exam',
    content: "Cycle tests are not just about last-minute cramming. Consistent preparation is key. Start by reviewing your lecture notes every day. Don't let doubts pile up; clarify them with your professors immediately after class.\n\nBefore the test, focus on solving previous years' question papers. This gives you an idea of the pattern and important topics. Form a study group with friends to discuss complex concepts. On the day of the test, stay calm, manage your time well, and attempt the questions you are most confident about first. Good luck!",
    category: 'Academics',
    readTime: 6,
    tags: ['Academics', 'Exams', 'Preparation']
  },
  {
    slug: 'top-clubs-to-join',
    title: 'Top 10 Clubs Every SRM Student Should Consider Joining',
    excerpt: 'Discover the best clubs at SRM that can enhance your skills and boost your resume.',
    author: 'Campus Life Team',
    date: '1/5/2024',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'university students club',
    content: "Joining a club is one of the best decisions you can make. It helps you build skills, network, and have fun. The SRM Tech Club is a must for coders and tech enthusiasts, with regular workshops and hackathons.\n\nFor those interested in public speaking and leadership, the Toastmasters Club is an excellent choice. If you have a creative spark, the Arts & Culture Club hosts numerous events and performances. The Entrepreneurship Cell (E-Cell) is perfect for aspiring business minds, and finally, joining a sports team is a great way to stay fit and build team spirit. Explore them all during the club induction season!",
    category: 'Campus Life',
    readTime: 5,
    tags: ['Clubs', 'Campus Life', 'Student Activities']
  },
  {
    slug: 'gpa-system-explained',
    title: 'Understanding the GPA System: Calculate Like a Pro',
    excerpt: 'A deep dive into the credit and grading system at SRM. Learn how to calculate your GPA and why it matters.',
    author: 'Academic Team',
    date: '2/1/2024',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'student grades report',
    content: 'The GPA system can seem confusing at first, but it\'s straightforward once you get the hang of it. Your Grade Point Average (GPA) is a measure of your academic performance each semester. It is calculated by dividing the total number of grade points earned by the total number of credits attempted. Each letter grade (O, A+, A, etc.) has a corresponding point value. Mastering this will help you track your progress effectively.',
    category: 'Academics',
    readTime: 7,
    tags: ['GPA', 'Academics', 'Grading']
  },
  {
    slug: 'hostel-life-guide',
    title: 'Hostel Life at SRM: What to Expect',
    excerpt: 'From room sharing to mess food, here is a complete guide to navigating hostel life at SRM.',
    author: 'Senior Student',
    date: '2/10/2024',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'university dorm room',
    content: 'Living in a hostel is a core part of the SRM experience. You\'ll learn to be independent, manage your time, and live with people from diverse backgrounds. The rooms are typically shared, and the mess provides daily meals. While it takes some getting used to, it\'s an opportunity to forge lifelong friendships and create unforgettable memories. Be open, be respectful, and you\'ll have a great time!',
    category: 'Hostel Life',
    readTime: 10,
    tags: ['Hostel', 'Campus Life']
  },
  {
    slug: 'placement-preparation',
    title: 'Placement Preparation: Starting from the First Year',
    excerpt: 'Your journey to a great job starts on day one. Here’s how you can build your profile for placements right from your first year.',
    author: 'Placement Cell',
    date: '2/15/2024',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'professional job interview',
    content: 'Placements might seem far away, but the preparation starts now. Focus on maintaining a good CGPA, as many companies have an academic cutoff. Participate in hackathons, workshops, and join technical clubs to build your skills. Work on personal projects to showcase your abilities. In your third year, start preparing for aptitude tests and interviews. A consistent effort will pay off in the end.',
    category: 'Placements',
    readTime: 12,
    tags: ['Placements', 'Career', 'Interview']
  },
];

export const features = [
  {
    icon: 'Bot',
    title: 'AI Assistant',
    description: 'Get instant answers to your college-related queries with our AI-powered chatbot.',
    href: '/ai-assistant'
  },
  {
    icon: 'Book',
    title: 'FAQ Section',
    description: 'Find answers to frequently asked questions about academics, exams, and campus life.',
    href: '/faq'
  },
  {
    icon: 'Gauge',
    title: 'GPA Calculator',
    description: 'Calculate your GPA, track attendance, and manage your academic progress.',
    href: '/dashboard'
  },
  {
    icon: 'BookOpen',
    title: 'Study Guides',
    description: 'Access comprehensive guides and tips for succeeding in your first year.',
    href: '/blog'
  },
];

export const stats = [
  { icon: 'Users', value: '5000+', label: 'Students Helped' },
  { icon: 'HelpCircle', value: '1000+', label: 'Questions Answered' },
  { icon: 'CheckCircle', value: '95%', label: 'Success Rate' },
  { icon: 'Clock', value: '24/7', label: 'Support Available' },
];

export type Testimonial = {
  quote: string;
  name: string;
  course: string;
  avatarUrl: string;
  dataAiHint: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "SRM Navigator was a lifesaver during my first year. The AI assistant answered all my frantic questions about registration and exams. Highly recommended!",
    name: "Priya Sharma",
    course: "B.Tech CSE, 2nd Year",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "person smiling"
  },
  {
    quote: "The GPA and attendance calculators are super handy. I use them all the time to stay on top of my academics. It's the one-stop app for every SRMite.",
    name: "Rohan Verma",
    course: "B.Tech ECE, 3rd Year",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "student portrait"
  },
  {
    quote: "As a faculty advisor, this tool helps me draft answers to common student questions in seconds. It has significantly reduced my workload and improved response time.",
    name: "Dr. Anjali Mehta",
    course: "Faculty Advisor",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "professional woman"
  }
];
