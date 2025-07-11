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
};

export const posts: Post[] = [
  {
    slug: 'surviving-first-year',
    title: 'A Fresher\'s Guide to Surviving the First Year at SRM',
    excerpt: 'Your first year of college can be overwhelming. Here are some essential tips to help you navigate it like a pro.',
    author: 'Senior Student',
    date: 'Aug 15, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'students campus',
    content: "Welcome to SRM! The first year is a whirlwind of new experiences, friends, and challenges. The key is to find a balance. Don't just bury yourself in books; explore the campus and join a club that interests you. This is the best way to make friends and discover new passions.\n\nAttend your classes regularly. It might seem tempting to skip, but keeping up with the syllabus from day one will save you a lot of stress during exams. And remember, the 75% attendance rule is real! Finally, don't be afraid to ask for help. Whether it's from professors, seniors, or counselors, the SRM community is here to support you."
  },
  {
    slug: 'must-know-clubs',
    title: 'Top 5 Must-Know Clubs for First-Year Students',
    excerpt: 'From tech to culture, SRM has a club for everyone. Discover the top clubs you should consider joining.',
    author: 'Club Coordinator',
    date: 'Aug 20, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'team meeting',
    content: "Joining a club is one of the best decisions you can make in your first year. It helps you build skills, network, and have fun. The SRM Tech Club is a must for coders and tech enthusiasts, with regular workshops and hackathons.\n\nFor those interested in public speaking and leadership, the Toastmasters Club is an excellent choice. If you have a creative spark, the Arts & Culture Club hosts numerous events and performances. The Entrepreneurship Cell (E-Cell) is perfect for aspiring business minds, and finally, joining a sports team is a great way to stay fit and build team spirit. Explore them all during the club induction season!"
  },
  {
    slug: 'cycle-test-prep',
    title: 'How to Ace Your Cycle Tests: A Strategic Guide',
    excerpt: 'Cycle tests form a crucial part of your internal marks. Learn the best strategies to prepare effectively and score well.',
    author: 'Academic Topper',
    date: 'Sep 01, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'student studying',
    content: "Cycle tests are not just about last-minute cramming. Consistent preparation is key. Start by reviewing your lecture notes every day. Don't let doubts pile up; clarify them with your professors immediately after class.\n\nBefore the test, focus on solving previous years' question papers. This gives you an idea of the pattern and important topics. Form a study group with friends to discuss complex concepts. On the day of the test, stay calm, manage your time well, and attempt the questions you are most confident about first. Good luck!"
  }
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