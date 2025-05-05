'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiChevronDown, FiDatabase, FiMonitor, FiSmartphone } from 'react-icons/fi';
import Button from './ui/Button';
import { useTheme } from 'next-themes';

// Yenilenmiş hero bölümü - interaktif, modern ve çarpıcı tasarım
export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  useTheme();
  const containerRef = useRef(null);
  
  // Kaydırma efektleri
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Bileşenin client tarafında yüklenmesini bekle
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Yazan metin efekti için durum
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0); // Hangi metinde olduğumuzu takip etmek için
  const [isDeleting, setIsDeleting] = useState(false); // Silme modunda olup olmadığımızı belirten durum
  const textList = [
    'Web Geliştirici',
    'Mobil Uygulama',
    'React & Next.js',
    'React Native',
    'Node.js',
    'TypeScript',
    'Flutter',
    'UI/UX Tasarım'
  ];
  const typingSpeed = 100;
  const deletingSpeed = 70;
  const delayAfterTyping = 1500;
  const delayAfterDeleting = 500;

  useEffect(() => {
    if (!isMounted) return;

    const currentText = textList[textIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      // Silme modu
      if (typedText.length === 0) {
        // Silme tamamlandı, bir sonraki metne geçiş yap
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % textList.length);
        timer = setTimeout(() => {}, delayAfterDeleting);
      } else {
        // Silme devam ediyor
        timer = setTimeout(() => {
          setTypedText(typedText.substring(0, typedText.length - 1));
        }, deletingSpeed);
      }
    } else {
      // Yazma modu
      if (typedText === currentText) {
        // Yazma tamamlandı, silme moduna geç
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayAfterTyping);
      } else {
        // Yazma devam ediyor
        timer = setTimeout(() => {
          setTypedText(currentText.substring(0, typedText.length + 1));
        }, typingSpeed);
      }
    }
    
    return () => clearTimeout(timer);
  }, [isMounted, textIndex, typedText, isDeleting, textList]);

  // Teknoloji rozeti bilgisi
  const techBadges = [
    { name: 'React', color: 'bg-blue-500 dark:bg-blue-600' },
    { name: 'TypeScript', color: 'bg-blue-700 dark:bg-blue-800' },
    { name: 'Next.js', color: 'bg-gray-900 dark:bg-gray-800' },
    { name: 'Tailwind', color: 'bg-teal-500 dark:bg-teal-600' },
    { name: 'Node.js', color: 'bg-green-600 dark:bg-green-700' },
  ];

  // Uzmanlık alanları
  const expertiseCards = [
    {
      title: "Frontend",
      desc: "React & Next.js",
      icon: <FiMonitor className="w-6 h-6" />,
      color: "from-blue-600 to-cyan-500",
      darkColor: "dark:from-blue-500 dark:to-cyan-400"
    },
    {
      title: "Backend",
      desc: "Node.js & API",
      icon: <FiDatabase className="w-6 h-6" />,
      color: "from-purple-600 to-pink-500",
      darkColor: "dark:from-purple-500 dark:to-pink-400"
    },
    {
      title: "Mobil",
      desc: "React Native & Expo",
      icon: <FiSmartphone className="w-6 h-6" />,
      color: "from-green-600 to-lime-500",
      darkColor: "dark:from-green-500 dark:to-lime-400"
    }
  ];

  if (!isMounted) {
    return <div className="h-screen"></div>;
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 flex flex-col justify-center">
      {/* Dekoratif Arka Plan Elementleri */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animasyonlu arka plan dekoratif şekilleri */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] opacity-30 dark:opacity-10"
        >
          <div className="absolute w-full h-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl"></div>
        </motion.div>
        
        <motion.div 
          style={{ y: y2 }}
          className="absolute -bottom-[30%] -left-[10%] w-[80%] h-[80%] opacity-30 dark:opacity-10"
        >
          <div className="absolute w-full h-full bg-gradient-to-tr from-purple-600/30 to-pink-600/30 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl"></div>
        </motion.div>
        
        {/* Kod çizgileri efekti */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10 dark:opacity-5"></div>
      </div>

      {/* Ana İçerik */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Sol Taraf - Metin ve CTA */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4"
            >
              {/* <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-200 dark:border-blue-800">
                <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Merhaba, Ben Web Geliştiriciyim</span>
              </div> */}
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                
                <span className="block relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">Furkan Şahin</span>
                <span className="relative">
                
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 dark:bg-blue-800 -z-10 transform -skew-x-3"></span>
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                <span className="inline-flex items-center relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                  {typedText}
                  <span className="animate-blink ml-1 w-0.5 h-8 bg-blue-600 dark:bg-blue-400"></span>
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                Frontend ve backend teknolojileri kullanarak etkileyici, performanslı ve kusursuz kullanıcı deneyimi sunan projeler geliştiriyorum. Kodlamak benim tutkum, yenilikçi çözümler üretmek ise misyonum.
              </p>
            </motion.div>
            
            {/* Uzmanlık Alanları - Yeni Tasarım */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {expertiseCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1), duration: 0.4 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`bg-gradient-to-r ${card.color} ${card.darkColor} p-0.5 rounded-xl shadow-lg`}
                >
                  <div className="h-full bg-white dark:bg-gray-800 rounded-[0.7rem] p-5">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full bg-gradient-to-br ${card.color} ${card.darkColor} text-white`}>
                        {card.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{card.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Teknoloji Rozetleri */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {techBadges.map((badge, index) => (
                <motion.span
                  key={badge.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  className={`${badge.color} text-white text-xs font-medium px-3 py-1 rounded-full`}
                >
                  {badge.name}
                </motion.span>
              ))}
            </motion.div>
            
            {/* CTA Butonları */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button 
                href="/projects" 
                variant="primary" 
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-lg hover:shadow-blue-600/20 border-0 text-white"
              >
                Projelerimi Keşfet
              </Button>
              <Button 
                href="/contact" 
                variant="outline" 
                size="lg"
                className="border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
              >
                İletişime Geç
              </Button>
            </motion.div>
            
            {/* Aşağı Kaydır İndikatörü */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              style={{ opacity }}
              className="hidden lg:flex items-center text-sm text-gray-500 dark:text-gray-400 pt-8"
            >
              <span className="mr-2">Aşağı Kaydır</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FiChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </div>
          
          {/* Sağ Taraf - 3D ve İnteraktif Görsel */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
              className="relative"
            >
              {/* Ana Resim veya Gösterim Alanı */}
              <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl shadow-blue-600/20 dark:shadow-blue-500/10 border border-white/20 dark:border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-sm"></div>
                
                {/* Resim */}
                <Image
                  src="/images/avatar.jpg" 
                  alt="Developer Avatar"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Ön Katman */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent">
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                    <h3 className="text-2xl font-bold">Web Geliştirici</h3>
                    <p className="text-gray-200">5+ yıl deneyim</p>
                  </div>
                </div>
              </div>
              
              {/* Sosyal Medya Bağlantıları */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-full shadow-lg px-6 py-2"
              >
                <a href="https://github.com/username" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  <FiGithub className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/username" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  <FiTwitter className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 