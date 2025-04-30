import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

// Footer bileşeni
export default function Footer() {
  // Footer navigasyon linkleri
  const navLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımda', href: '/about' },
    { name: 'Projeler', href: '/projects' },
    { name: 'Yetenekler', href: '/skills' },
    { name: 'İletişim', href: '/contact' },
  ];

  // Sosyal medya linkleri
  const socialLinks = [
    { name: 'GitHub', icon: <FiGithub className="w-5 h-5" />, href: 'https://github.com/username' },
    { name: 'LinkedIn', icon: <FiLinkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/username' },
    { name: 'Twitter', icon: <FiTwitter className="w-5 h-5" />, href: 'https://twitter.com/username' },
    { name: 'Email', icon: <FiMail className="w-5 h-5" />, href: 'mailto:info@example.com' },
  ];

  // Mevcut yıl
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo ve kısa açıklama */}
          <div>
            <Link href="/" className="text-2xl font-bold">Portfolio</Link>
            <p className="mt-3 text-gray-400 max-w-md">
              Modern ve kullanıcı dostu web uygulamaları geliştiren bir full stack web geliştiricisi.
            </p>
          </div>

          {/* Hızlı linkler */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <p className="text-gray-400 mb-3">
              Sorularınız mı var? Benimle iletişime geçin.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Alt kısım - telif hakkı vb. */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Portfolio. Tüm hakları saklıdır.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Next.js, Tailwind CSS ve ❤️ ile yapılmıştır.
          </p>
        </div>
      </div>
    </footer>
  );
} 