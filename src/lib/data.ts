import { Project, Skill, Experience, Education, Contact } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Sitesi',
    description: 'Next.js, Tailwind CSS ve Supabase ile oluşturulmuş kişisel portfolio sitesi.',
    image: '/images/portfolio.png',
    demoUrl: 'https://portfolio-demo.vercel.app',
    githubUrl: 'https://github.com/username/portfolio',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'TypeScript'],
    category: 'Web Geliştirme',
    featured: true,
    createdAt: '2023-01-15',
  },
  {
    id: 2,
    title: 'E-Ticaret Uygulaması',
    description: 'Tam kapsamlı bir e-ticaret platformu.',
    image: '/images/ecommerce.png',
    demoUrl: 'https://ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/username/ecommerce',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    category: 'Web Geliştirme',
    featured: true,
    createdAt: '2022-11-20',
  },
  {
    id: 3,
    title: 'Task Yöneticisi',
    description: 'Basit ve kullanışlı bir görev takip uygulaması.',
    image: '/images/task-manager.png',
    demoUrl: 'https://task-manager-demo.vercel.app',
    githubUrl: 'https://github.com/username/task-manager',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    category: 'Web Geliştirme',
    featured: false,
    createdAt: '2022-08-05',
  },
];

export const skills: Skill[] = [
  { id: 1, name: 'HTML', icon: 'html', category: 'frontend' },
  { id: 2, name: 'CSS', icon: 'css', category: 'frontend' },
  { id: 3, name: 'JavaScript', icon: 'javascript', category: 'frontend' },
  { id: 4, name: 'TypeScript', icon: 'typescript', category: 'frontend' },
  { id: 5, name: 'React', icon: 'react', category: 'frontend' },
  { id: 6, name: 'Next.js', icon: 'nextjs', category: 'frontend' },
  { id: 7, name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend' },
  { id: 8, name: 'Node.js', icon: 'nodejs', category: 'backend' },
  { id: 9, name: 'Express', icon: 'express', category: 'backend' },
  { id: 10, name: 'Firebase', icon: 'firebase', category: 'backend' },
  { id: 11, name: 'Supabase', icon: 'supabase', category: 'backend' },
  { id: 12, name: 'MongoDB', icon: 'mongodb', category: 'backend' },
  { id: 13, name: 'Git', icon: 'git', category: 'tools' },
  { id: 14, name: 'GitHub', icon: 'github', category: 'tools' },
  { id: 15, name: 'VS Code', icon: 'vscode', category: 'tools' },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'XYZ Teknoloji',
    position: 'Frontend Geliştirici',
    startDate: '2022-01',
    endDate: null,
    description: 'Modern frontend teknolojileri kullanarak web uygulamaları geliştirmek.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 2,
    company: 'ABC Yazılım',
    position: 'Junior Web Geliştirici',
    startDate: '2020-06',
    endDate: '2021-12',
    description: 'Web uygulamaları geliştirme ve bakımı.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    id: 3,
    company: 'Freelance',
    position: 'Web Geliştirici',
    startDate: '2019-01',
    endDate: '2020-05',
    description: 'Çeşitli müşteriler için web siteleri ve uygulamalar geliştirme.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
  },
];

export const education: Education[] = [
  {
    id: 1,
    institution: 'İstanbul Teknik Üniversitesi',
    degree: 'Lisans',
    field: 'Bilgisayar Mühendisliği',
    startDate: '2016',
    endDate: '2020',
  },
  {
    id: 2,
    institution: 'Udemy',
    degree: 'Sertifika',
    field: 'React ve Next.js ile Modern Web Geliştirme',
    startDate: '2021',
    endDate: '2021',
  },
];

export const contact: Contact = {
  email: 'info@example.com',
  github: 'https://github.com/username',
  linkedin: 'https://linkedin.com/in/username',
  twitter: 'https://twitter.com/username',
}; 