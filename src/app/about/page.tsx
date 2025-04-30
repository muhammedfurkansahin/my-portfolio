'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiDownload, FiCalendar, FiBriefcase, FiBook } from 'react-icons/fi';
import Button from '@/components/ui/Button';
import { experiences, education, skills } from '@/lib/data';

// Hakkımda sayfası
export default function AboutPage() {
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
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Üst Kısım - Giriş */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Hakkımda</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Full Stack Web Geliştirici olarak tutkulu, sürekli öğrenen ve 
            kullanıcı odaklı dijital deneyimler oluşturmaya adanmış bir yazılım geliştiricisi.
          </p>
        </motion.div>

        {/* İki sütunlu içerik - Bio ve Resim */}
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          {/* Sol taraf - Metin içeriği */}
          <motion.div 
            className="lg:w-3/5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants} 
              className="text-2xl font-bold text-gray-900 mb-4"
            >
              Kendimi Tanıtayım
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 mb-4"
            >
              Merhaba! Ben bir <strong>Full Stack Web Geliştirici</strong>yim ve yazılım geliştirme
              yolculuğuma 2019 yılında başladım. O zamandan beri, çeşitli teknoloji yığınları ve 
              çözümler üzerinde çalıştım.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 mb-4"
            >
              Frontend tarafında, <strong>React</strong>, <strong>Next.js</strong>, 
              <strong>TypeScript</strong> ve <strong>Tailwind CSS</strong> kullanarak zengin 
              ve duyarlı kullanıcı arayüzleri oluşturuyorum. Backend tarafında ise <strong>Node.js</strong>, 
              <strong>Express</strong>, <strong>PostgreSQL</strong> ve <strong>Supabase</strong> gibi 
              teknolojilerle çalışıyorum.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 mb-4"
            >
              Projelerimde her zaman kullanıcı deneyimini ön planda tutarak, işlevsel olduğu kadar 
              estetik açıdan da tatmin edici uygulamalar geliştirmeye çalışıyorum. Kod kalitesi, 
              test edilebilirlik ve sürdürülebilirlik, benim için en önemli değerlerdir.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 mb-6"
            >
              İşime olan tutkum ve teknolojiye olan merakım, sürekli olarak yeni şeyler öğrenmemi 
              ve kendimi geliştirmemi sağlıyor. Yeni zorluklarla karşılaşmayı, problem çözmeyi 
              ve ekip içinde çalışmayı seviyorum.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Button href="/cv.pdf" variant="primary" className="inline-flex items-center">
                <FiDownload className="mr-2" />
                CV'mi İndir
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Sağ taraf - Resim */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/about.jpg"
                alt="Hakkımda"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Yeteneklerim */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Yeteneklerim</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill) => (
              <div 
                key={skill.id}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-blue-50 rounded-full text-blue-600">
                  {/* Gerçek bir ikonunuz varsa burada kullanabilirsiniz */}
                  <span className="text-xl font-bold">{skill.icon}</span>
                </div>
                <h3 className="font-medium text-gray-900">{skill.name}</h3>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Deneyim ve Eğitim bölümü */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Deneyim */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <FiBriefcase className="mr-2 text-blue-600" />
              Deneyim
            </h2>
            
            <div className="space-y-8">
              {experiences.map((experience) => (
                <div 
                  key={experience.id}
                  className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-blue-200"
                >
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
                  <h3 className="text-lg font-bold text-gray-900">{experience.position}</h3>
                  <p className="text-blue-600 mb-2">{experience.company}</p>
                  <p className="text-sm text-gray-500 mb-3 flex items-center">
                    <FiCalendar className="mr-1" />
                    {experience.startDate} - {experience.endDate || 'Şu anda'}
                  </p>
                  <p className="text-gray-700 mb-3">{experience.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
          
          {/* Eğitim */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <FiBook className="mr-2 text-blue-600" />
              Eğitim
            </h2>
            
            <div className="space-y-8">
              {education.map((edu) => (
                <div 
                  key={edu.id}
                  className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-blue-200"
                >
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
                  <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-blue-600 mb-2">{edu.institution}</p>
                  <p className="text-sm text-gray-500 mb-3 flex items-center">
                    <FiCalendar className="mr-1" />
                    {edu.startDate} - {edu.endDate || 'Devam Ediyor'}
                  </p>
                  <p className="text-gray-700">{edu.field}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
} 