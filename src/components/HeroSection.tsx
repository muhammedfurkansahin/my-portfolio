'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Button from './ui/Button';

// Ana sayfa üst kısmında yer alacak hero bölümü
export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  // Bileşenin client tarafında yüklenmesini bekle
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animasyon için varyantlar
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Sosyal medya bağlantıları
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <FiGithub className="w-6 h-6" />, 
      href: 'https://github.com/username' 
    },
    { 
      name: 'LinkedIn', 
      icon: <FiLinkedin className="w-6 h-6" />, 
      href: 'https://linkedin.com/in/username' 
    },
    { 
      name: 'Twitter', 
      icon: <FiTwitter className="w-6 h-6" />, 
      href: 'https://twitter.com/username' 
    },
  ];

  // Hero bölümünün render edileceği yer
  return (
    <section className="relative pt-20 lg:pt-24 pb-16 overflow-hidden">
      {/* Arka plan desenleri */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50 to-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-grid-pattern" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Sol taraf - Metin içeriği */}
          {isMounted ? (
            <motion.div 
              className="w-full lg:w-1/2"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Başlık */}
              <motion.div variants={itemVariants} className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                Merhaba, ben bir yazılım geliştiriciyim
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Modern web çözümleri <span className="text-blue-600">oluşturuyorum</span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8 max-w-2xl">
                Frontend ve backend teknolojileri kullanarak kullanıcı dostu, 
                performanslı ve ölçeklenebilir web uygulamaları geliştiriyorum.
              </motion.p>
              
              {/* CTA Butonları */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
                <Button href="/projects" variant="primary" size="lg">
                  Projelerimi Görüntüle
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  İletişime Geç
                </Button>
              </motion.div>
              
              {/* Sosyal Medya Linkleri */}
              <motion.div variants={itemVariants} className="flex items-center gap-6">
                <span className="text-sm font-medium text-gray-500">Beni takip et:</span>
                <div className="flex items-center gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <div className="w-full lg:w-1/2"></div>
          )}
          
          {/* Sağ taraf - Avatar */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            {isMounted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]"
              >
                {/* Avatar görseli yerine bir placeholder görsel kullanıyoruz; gerçek görselle değiştirilebilir */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-blue-300 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  {/* Image kontrolü ile hata durumunu önlüyoruz */}
                  {typeof window !== "undefined" && (
                    <Image
                      src="/images/avatar.jpg" 
                      alt="Developer Avatar"
                      width={450}
                      height={450}
                      className="object-cover w-full h-full"
                      priority
                    />
                  )}
                </div>
                
                {/* Dekoratif elementler */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium">Çalışmaya Açık</span>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]"></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 