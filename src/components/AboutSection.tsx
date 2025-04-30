'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';
import Button from './ui/Button';

// Hakkımda bölümü
export default function AboutSection() {
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

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Sol taraf - Fotoğraf */}
          <motion.div
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[350px] lg:h-[450px]">
              <Image
                src="/images/about.jpg"
                alt="Hakkımda"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          
          {/* Sağ taraf - Metinler */}
          <motion.div 
            className="w-full lg:w-3/5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants} 
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Hakkımda
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 mb-4"
            >
              Merhaba! Ben bir <strong>Full Stack Web Geliştirici</strong>yim ve kullanıcı odaklı, 
              modern web uygulamaları oluşturmaya tutkuluyum. Projelerde 
              teknik mükemmelliği ve temiz kod prensiplerini ön planda tutuyorum.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 mb-4"
            >
              Frontend tarafında <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong> ve 
              <strong>Tailwind CSS</strong> ile çalışıyorum. Backend tarafında ise <strong>Node.js</strong>, 
              <strong>Express</strong> ve <strong>Supabase</strong> gibi teknolojileri kullanıyorum.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 mb-6"
            >
              Her projede, sadece işlevsel değil aynı zamanda kullanıcı dostu, erişilebilir ve 
              performanslı çözümler üretmeyi hedefliyorum. Yeni teknolojileri öğrenmek ve 
              becerilerimi geliştirmek için sürekli çabalıyorum.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Button href="/about" variant="primary" className="inline-flex items-center">
                <FiDownload className="mr-2" />
                CV'mi İndir
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 