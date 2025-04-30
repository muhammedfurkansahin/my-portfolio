'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Button from './ui/Button';
import { projects } from '@/lib/data';

// Proje kategorileri
const categories = ['Tümü', 'Web Geliştirme', 'Mobil Uygulama', 'Diğer'];

// Ana sayfadaki projeler bölümü
export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [isMounted, setIsMounted] = useState(false);

  // Client-side render kontrolü
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Aktif kategoriye göre projeleri filtrele
  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'Tümü') return true;
    return project.category === activeCategory;
  });

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
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Projelerim</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            İşte geliştirdiğim bazı projeler. Her bir projede farklı teknolojiler ve yaklaşımlar kullandım.
          </p>
        </div>

        {/* Kategori filtreleri */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projeler listesi */}
        {isMounted ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg"
                variants={itemVariants}
              >
                {/* Proje görseli */}
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority={project.featured}
                  />
                </div>
                
                {/* Proje bilgileri */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                    {project.featured && (
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded">
                        Öne Çıkan
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Kullanılan teknolojiler */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Proje linkleri */}
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                      >
                        <FiExternalLink className="mr-1" />
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
                      >
                        <FiGithub className="mr-1" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative h-48 w-full bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-3 w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                  <div className="h-4 bg-gray-200 rounded mb-6 w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Tüm projeleri görüntüle butonu */}
        <div className="text-center mt-12">
          <Button href="/projects" variant="outline">
            Tüm Projeleri Görüntüle
          </Button>
        </div>
      </div>
    </section>
  );
} 