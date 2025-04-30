-- Projeler için örnek veriler
INSERT INTO projects (title, description, image, demo_url, github_url, technologies, category, featured, created_at)
VALUES 
  (
    'Portfolio Sitesi',
    'Next.js, Tailwind CSS ve Supabase ile oluşturulmuş kişisel portfolio sitesi.',
    '/images/portfolio.png',
    'https://portfolio-demo.vercel.app',
    'https://github.com/username/portfolio',
    ARRAY['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'TypeScript'],
    'Web Geliştirme',
    true,
    '2023-01-15T12:00:00Z'
  ),
  (
    'E-Ticaret Uygulaması',
    'Tam kapsamlı bir e-ticaret platformu.',
    '/images/ecommerce.png',
    'https://ecommerce-demo.vercel.app',
    'https://github.com/username/ecommerce',
    ARRAY['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    'Web Geliştirme',
    true,
    '2022-11-20T12:00:00Z'
  ),
  (
    'Task Yöneticisi',
    'Basit ve kullanışlı bir görev takip uygulaması.',
    '/images/task-manager.png',
    'https://task-manager-demo.vercel.app',
    'https://github.com/username/task-manager',
    ARRAY['React', 'Firebase', 'Tailwind CSS'],
    'Web Geliştirme',
    false,
    '2022-08-05T12:00:00Z'
  );

-- Yetenekler için örnek veriler
INSERT INTO skills (name, icon, category)
VALUES 
  ('HTML', 'html', 'frontend'),
  ('CSS', 'css', 'frontend'),
  ('JavaScript', 'javascript', 'frontend'),
  ('TypeScript', 'typescript', 'frontend'),
  ('React', 'react', 'frontend'),
  ('Next.js', 'nextjs', 'frontend'),
  ('Tailwind CSS', 'tailwind', 'frontend'),
  ('Node.js', 'nodejs', 'backend'),
  ('Express', 'express', 'backend'),
  ('Firebase', 'firebase', 'backend'),
  ('Supabase', 'supabase', 'backend'),
  ('MongoDB', 'mongodb', 'backend'),
  ('Git', 'git', 'tools'),
  ('GitHub', 'github', 'tools'),
  ('VS Code', 'vscode', 'tools');

-- Deneyim için örnek veriler
INSERT INTO experiences (company, position, start_date, end_date, description, technologies)
VALUES 
  (
    'XYZ Teknoloji',
    'Frontend Geliştirici',
    '2022-01',
    null,
    'Modern frontend teknolojileri kullanarak web uygulamaları geliştirmek.',
    ARRAY['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  ),
  (
    'ABC Yazılım',
    'Junior Web Geliştirici',
    '2020-06',
    '2021-12',
    'Web uygulamaları geliştirme ve bakımı.',
    ARRAY['HTML', 'CSS', 'JavaScript', 'React']
  ),
  (
    'Freelance',
    'Web Geliştirici',
    '2019-01',
    '2020-05',
    'Çeşitli müşteriler için web siteleri ve uygulamalar geliştirme.',
    ARRAY['HTML', 'CSS', 'JavaScript', 'WordPress']
  );

-- Eğitim için örnek veriler
INSERT INTO education (institution, degree, field, start_date, end_date)
VALUES 
  (
    'İstanbul Teknik Üniversitesi',
    'Lisans',
    'Bilgisayar Mühendisliği',
    '2016',
    '2020'
  ),
  (
    'Udemy',
    'Sertifika',
    'React ve Next.js ile Modern Web Geliştirme',
    '2021',
    '2021'
  );

-- İletişim için örnek veriler
INSERT INTO contact (email, github, linkedin, twitter)
VALUES 
  (
    'info@example.com',
    'https://github.com/username',
    'https://linkedin.com/in/username',
    'https://twitter.com/username'
  ); 